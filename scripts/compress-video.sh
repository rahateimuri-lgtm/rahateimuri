#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/video public/img/poster

for f in public/raw/*.mp4; do
  base=$(basename "$f" .mp4)
  echo ">> $base"
  # Web-optimized muted H.264 loop (720 wide, faststart)
  ffmpeg -loglevel error -i "$f" -an -vf "scale=720:-2" -c:v libx264 -crf 28 -preset slow \
    -movflags +faststart "public/video/${base}.mp4" -y
  # Smaller VP9 WebM
  ffmpeg -loglevel error -i "$f" -an -vf "scale=720:-2" -c:v libvpx-vp9 -crf 34 -b:v 0 \
    "public/video/${base}.webm" -y
  # Poster frame (first good frame, ~0.5s in) as jpg fallback
  ffmpeg -loglevel error -ss 0.5 -i "$f" -vframes 1 -vf "scale=720:-2" \
    "public/img/poster/${base}.jpg" -y
done
echo "=== compress complete ==="
ls -la public/video
