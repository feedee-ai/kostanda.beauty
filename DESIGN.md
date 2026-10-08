# DESIGN — Kostanda Beauty (v2, site-factory)

## Idea: «Primero, el patrón. Después, la aguja.»
The page is a cross-stitch chart. In embroidery every cell is planned before the needle touches the cloth; at the clinic every treatment is planned (Observ 520x, ultrasound, written plan) before the needle touches the skin. The phrase comes from the clinic's own post: "un tratamiento de calidad empieza mucho antes de que la aguja toque la piel". The chart also nods to the Ukrainian roots of the clinic (vyshyvanka) without folk ornament.

- **Hero — the embroidered portrait.** Marina's portrait is stitched live on a counted grid in four blue threads (`tools/stitch.py` precomputes the pattern into `site/assets/stitch.json`; the canvas only draws it). When the stitching ends, the photo resolves on top. A toggle switches between pattern and photo. On phones it starts when the portrait scrolls into view.
- **Scanner.** Real Observ 520x frames: daylight, UV before, UV after.
- **Thread.** Process steps and Marina's story hang on a dashed running stitch with X markers that draws in on scroll.
- **Rules.** Marina's written principles on a drenched sky field, numbered with cross-stitched 5×7 digits that stitch in.
- **Booking.** Ink field. The form composes a WhatsApp message (concern, time, language) and shows it live before sending.

## Palette (tokens in `site/assets/site.css`)
- `--cotton #ffffff` ground, with the counted grid (`--grid` 14px cells, bolder every tenth line) on hero, process, story, sampler.
- `--mist #f3f9fb` quiet alternate ground (concerns, reviews).
- `--sky #b9e1ed` logo lens colour; committed field for the rules section and accents on ink.
- `--blue #3e9cc4` stitches, markers, icons only (not small text).
- `--cobalt #1d5f87` accent text, labels, second headline line (AA on white).
- `--ink #18233a` text, buttons, booking field. `--night #121b2e` footer.
Thread palette for the portrait: `#18233a`, `#1d5f87`, `#3e9cc4`, `#9fd3e6`.

## Type
- Display: **Unbounded** (variable, Cyrillic; designed in Ukraine), weight 300–500, tight tracking. Hero lines never wrap on desktop.
- Text: **Geologica** (variable, Cyrillic) 17px/1.6.
- Self-hosted in `site/assets/fonts/`.

## Components
Pill buttons (ink, outline, sky-on-ink), hairline lists instead of cards, chips → vertical tab list on desktop, before/after slider with a range input for keyboard, details/summary FAQ, quotes in masonry columns, sticky WhatsApp bar on phones.

## Motion
One authored moment (the stitched portrait), then quiet supporting motion: thread lines scale in, digits stitch in, panels rise 6px. Easing `cubic-bezier(0.23, 1, 0.32, 1)`; buttons press to `scale(.97)`; hover only on fine pointers. `prefers-reduced-motion`: pattern drawn instantly, photo shown, lines and digits static.

## Imagery
Only real client photos; Instagram overlays cropped away. Hero portrait and its pattern share one crop (10:11). No stock.
