# DESIGN — Kostanda Beauty

## Idea
The logo is built from translucent lenses (vesica shapes) that overlap and darken where they meet. The site turns that shape into the clinic's mechanism, which is diagnosis first:

- **Hero — diagnostic lens.** A lens-shaped loupe drifts over Marina's portrait (or follows the cursor or finger) and reveals a UV-scan rendering of the same photo: "we see what the mirror doesn't". The scan layer is generated offline (blue channel + CLAHE + gradient map) and is labelled as an illustration.
- **Reveal — the lens opens.** A sticky scroll scene. The clinic photo starts as a small lens between the two halves of the statement "a medical clinic, not a beauty salon", then grows to full-bleed. Proof stats appear over it.
- **Fears — crossed out.** Real fears patients have before an aesthetic clinic. Each is struck through as it scrolls in, and answered in Marina's first-person voice with a real Google review as proof.
- **Results — aligned pairs.** Before/after photos are registered on anatomical landmarks (similarity transform) so scale and position match and the slider shows only what changed.

## Palette (tokens in `src/styles/global.css`)
- `--mist #f1f6f8` — ground. Cool, never cream.
- `--paper #ffffff` — alternate ground.
- `--petal #bce1ee` — committed color field: Method, Perks, booking card.
- `--lagoon #5bb3d6` — overlap / accents (logo fill at 42 % opacity reproduces the mark).
- `--deep #1d6a8a` — accent text and links (AA on white and mist).
- `--ink #2b2a3a` — text, dark surfaces; from the wordmark.

## Type
- Display: **Jost Variable** 300, with an italic 400 accent line in the hero and quotes.
- Text: **Golos Text Variable** 17px/1.6.
- Both self-hosted, with Cyrillic.

## Voice
Marina speaks in the first person in the hero and the fears section: honest, calm, anti-upsell ("Your skin doesn't need more treatments. It needs the right ones."). No hype and no invented numbers. "1000+ patients" comes from the clinic's own posts.

## Imagery rules
- Only clean crops. Instagram overlays are always cut away.
- Low-resolution sources are upscaled ×2 with EDSR.
- Every treatment category has a photo that literally shows that category.

## Motion
Hero lines rise, the photo card unveils, and the scan lens comes alive. The reveal scene is scroll-driven. Fears are struck through on entry. Everything respects `prefers-reduced-motion`: the lens parks and the reveal shows its final state.
