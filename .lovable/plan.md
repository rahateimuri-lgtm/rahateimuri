The About Me slider currently uses long horizontal bars (36 px inactive / 60 px active, 4 px tall). The Projects slider uses small circular dots (9 px, active becomes a 28 px pill). The user wants the About indicators smaller.

Change `public/css/styles.css`:
- `.about-dots button`: width 9 px, height 9 px, border-radius 999 px
- `.about-dots button.active`: width 28 px, background #1E5BFF
- `.about-dots button`: background rgba(30, 91, 255, 0.25) (to match Projects dots)
- Remove the `transition: …, width 240ms ease` line or keep only background transition

This makes the About indicators visually identical to the Projects dots.