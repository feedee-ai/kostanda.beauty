# DESIGN — Kostanda Beauty

## Idea
The logo is built from translucent lenses (vesica shapes) that overlap and darken where they meet. The site uses that mechanism instead of decoration: photos are masked in the same lens, a petal-blue "glass" lens multiplies over the portrait, and the overlap tints exactly like the mark. Medical precision, told in the brand's own geometry. It deliberately avoids the category default (beige spa, cream + serif, "your beauty, our passion").

## Palette (tokens in `src/styles/global.css`)
- `--mist #f1f6f8` — ground. Cool, never cream.
- `--paper #ffffff` — alternate ground.
- `--petal #bce1ee` — committed color field: Method, Perks, booking card, hero glass.
- `--lagoon #5bb3d6` — overlap / accents (logo fill at 42 % opacity reproduces the mark).
- `--deep #1d6a8a` — accent text and links (AA on white and mist).
- `--ink #2b2a3a` — text, dark sections (Principles, footer); from the wordmark.
Secondary text on petal uses `#3f4a58`, never plain grey.

## Type
- Display: **Jost Variable** 300 (italic 400 for the one emphasized hero phrase). Tight tracking (−0.03 to −0.04em).
- Text: **Golos Text Variable**, 17px/1.6.
- Both self-hosted with Cyrillic.

## Components
- Pill buttons with a nested icon circle; ghost variant for secondary actions.
- Lists divided by hairlines instead of cards. Cards only for individual reviews.
- Lens mask: `.lens` (uses `/lens.svg`).
- Accordion with `grid-template-rows` animation; compare slider driven by an accessible `<input type="range">`.

## Motion
One authored moment: on load, the hero title lines rise from a mask while the glass lens slides into the portrait and assembles the logo. The glass drifts on scroll. Elsewhere there are only soft reveals. Everything respects `prefers-reduced-motion`.
