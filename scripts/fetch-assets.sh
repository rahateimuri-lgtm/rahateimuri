#!/usr/bin/env bash
set -euo pipefail
B="https://rahateimuri.lovable.app"
L="$B/__l5e/assets-v1"
cd "$(dirname "$0")/.."
mkdir -p public/img public/video public/logos public/raw

dl(){ curl -fsSL "$1" -o "$2" && echo "ok  $2" || echo "FAIL $1"; }

# Portrait + OG cover
dl "$L/23c775a9-13d0-40ff-aa95-7b0a330d82ea/raha-portrait-v2.jpg" public/img/raha-portrait.jpg
dl "$L/f715b2e5-c256-4ede-bb1a-0ba2a61082e3/smg-cover.png"        public/img/og-cover.png

# Case study videos (source masters; compress in §6)
dl "$L/a66fb252-4522-4ef7-9ab6-7606650e3b12/smg-cover.mp4"        public/raw/social-growth.mp4
dl "$L/2bda4211-690c-4e40-85bd-981f3fe8a2ee/ocean-eyes.mp4"       public/raw/content-creation.mp4
dl "$L/44155fe9-1b52-41ec-ae0b-8f08d883f7d8/content-stack.mp4"    public/raw/content-stack.mp4
dl "$L/0060bf18-887d-42a7-8578-99ab384eab7a/bowie-artist-collab.mp4" public/raw/artist-collab.mp4
dl "$L/c7731322-4b3a-4a74-a46c-8f589361e29f/ugc-song-course.mp4"  public/raw/ugc-song-course.mp4
dl "$L/c35c728a-61bd-4435-9fdf-565ae9b8972c/viral-video.mp4"      public/raw/viral-video.mp4
dl "$L/c5035da6-362d-424e-a9b3-a8cdfefb786f/sales-80k.mp4"        public/raw/sales-80k.mp4

# Case study images
dl "$L/6c9c736f-30d8-4241-bc0b-d63fa0057cf3/rome-cappuccino.jpg"      public/img/rome-cappuccino.jpg
dl "$L/65478ba8-43e8-43ef-a809-51805602d378/rome-with-chef.jpg"       public/img/rome-with-chef.jpg
dl "$L/bce2f7b3-1889-4b93-a2db-b0e8bd0f7916/top-songs-yousician.jpg"  public/img/top-songs-yousician.jpg
dl "$L/e71e3d43-6d58-4313-b4ef-47f98678ed66/paul-mccartney-wings.jpg" public/img/paul-mccartney-wings.jpg
dl "$L/49710720-c2c9-4cbc-b718-1ef4bcdc29b3/song-course-collection.png" public/img/song-course-collection.png
dl "$L/172dd851-5ab9-4b2d-9013-779f4f7f30bc/ugc-guitar-learner-v2.png" public/img/ugc-guitar-learner.png
dl "$L/47408583-90e8-44a6-baa4-dfbb92218aea/ugc-witch-bass.png"       public/img/ugc-witch-bass.png
dl "$L/56302b3f-84c6-4d20-9d86-ec39f4a59253/viral-cappuccino.png"     public/img/viral-cappuccino.png
dl "$L/2de37d5f-3077-40dc-b30b-cc16dbd9a783/viral-orecchiette-v2.png" public/img/viral-orecchiette.png

# Brand logos (clients)
dl "$L/771ca333-7894-4cc1-9b6d-773ef793bd8a/carpediem-tours-logo.png" public/logos/carpe-diem.png
dl "$L/32bb7fe4-6676-4a54-99de-af2218bac004/yousician.png"            public/logos/yousician.png
dl "$L/cc3a2a6f-3d6d-4f88-98ef-a482141ae96a/guitartuna.png"           public/logos/guitartuna.png
dl "$L/477c29b5-c79f-4193-8f3c-f4af77e87d6e/warner-chappell.png"      public/logos/warner-chappell.png

# Tool logos that are self-hosted
dl "$L/8aad9986-15e5-4989-aad3-29ef67134b90/capcut.png"      public/logos/capcut.png
dl "$L/ec0945a9-ea02-4b97-aebd-b07aaee364f0/superscale.png"  public/logos/superscale.png
dl "$L/3c75956e-7c3e-4065-8b05-0adddd20d2e9/magnific.png"    public/logos/magnific.png
dl "$L/eb677274-fddf-48c5-905c-3babcabf7ce5/linkedin.png"    public/logos/linkedin.png

echo "=== fetch complete ==="
