## Goal
Swap the `smg-cover.png` cover on the first project card (Social Media Growth) for your uploaded `.mov` clip. Play it autoplay, muted, looping, inline.

## Steps
1. **Transcode + strip audio.** Convert the uploaded `.mov` (720×1280, ~4.7s, H.264+AAC) to a web-friendly MP4 with no audio track using ffmpeg (`-an`, `faststart`). Keeps it ~1MB and guarantees iOS/Safari autoplay.
2. **Upload to CDN.** Push the cleaned MP4 to Lovable Assets and save the pointer at `src/assets/smg-cover.mp4.asset.json`.
3. **Replace the cover in `public/index.html`** (line ~147, first `case-slide-primary` inside `#projects`):
   - Swap `<img src=".../smg-cover.png">` for a `<video>` with: `autoplay muted loop playsinline preload="metadata"` and `poster` set to the existing `smg-cover.png` URL (instant first paint, fallback if video blocked).
   - Also mirror the change in `src/site/index.html` so the source-of-truth stays in sync.
4. **CSS touch-up in `public/css/styles.css`.** Add a small rule so `.case-slide-primary video` fills the slot identically to the image (`width:100%; height:100%; object-fit:cover; display:block;`) — the existing card is landscape but the clip is vertical, so `object-fit: cover` will crop it cleanly to fit the frame.

## Notes
- No changes to slider JS — `<video>` sits in the same slot as `<img>`.
- Existing `smg-cover.png` stays in place as the poster, so nothing breaks if the video fails to load.
- If you'd rather the vertical video show fully (letterboxed) instead of cropped to fit, say the word and I'll switch `object-fit` to `contain` with a dark backdrop.
