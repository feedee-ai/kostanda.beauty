# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS in `site/`, no bundler; three language pages generated from one template by `tools/build.py`. Deployed on Vercel.

## Users

Women 25–55 living in Valencia: a core of Russian- and Ukrainian-speaking expats who found the clinic through Instagram, and a growing Spanish-speaking audience. Many have already been burned elsewhere (12 IPL sessions with no result in another salon, migrated filler, products bought at random). They read on the phone, often from an Instagram link, and decide whether to message the clinic on WhatsApp.

## Product Purpose

Get the visitor to book a first consultation with diagnosis (in person or a free online one) by WhatsApp. Success = a WhatsApp message with a clear request.

## Positioning

A doctor-led medical clinic whose founder rebuilt her medical licence from zero in Spain, and which refuses to sell treatments: every plan starts with what the Observ 520x scanner and facial ultrasound show, and Marina tells you when you need nothing. Marina's written principles ("Nunca impongo", "No compito con precios bajos", "Siempre soy sincera") are the brand.

## Operating Context

Booking by WhatsApp, phone or Instagram Direct. Free online consultation for people outside Valencia. Products sold in clinic. Patients are greeted with matcha and "Korovka" sweets; there's a kids' room.

## Capabilities and Constraints

- No online booking system: the form prepares a WhatsApp message.
- Prices are not public; packs and perks from Instagram (07.2026) need confirmation and are shown as "conditions at booking".
- No Google rating available; do not invent counts. Proven numbers: 1000+ patients (clinic's own post), ~10.3k Instagram followers, registry Nº 45856, opened Nov 2024.
- Instagram videos were not preserved; only stills.

## Brand Commitments

- Name: Kostanda Beauty. Logo: two translucent blue vesica lenses (`src/assets/img/logo-original.png` in v1; recreated as SVG in `site/assets/`).
- Brand blue from the logo and every Instagram post (light sky blue on white).
- Voice: Marina in first person, calm, frank, anti-upsell, with dry humour ("A veces elegir a un esposo es más fácil que elegir a tu cosmetóloga").

## Evidence on Hand

- 9 real Google review quotes (ES/RU) — `tools/content/*.json` → `reviews`.
- Before/after pairs: lips, pigmentation, redness, acne, abdomen (aligned crops from v1), plus IG pairs (IPL, RF, rosacea UV).
- Real Observ UV scans (IG `DZNu7PIiESR-5/6`).
- Photos of Marina, team in whites, equipment, clinic rooms, IMCAS.
- Marina's principles carousel (`DQ7U_slCE-b`), her licence story (`Dd1NQjyiFb3`).
- Absent: Google rating, video files, Dr. Michelle photo, full team roles, prices.

## Product Principles

1. Diagnosis before treatment, shown, not claimed.
2. Honesty over upsell: the site may say "you may need nothing".
3. Medical credibility first (doctors, registry, devices), beauty second.
4. One clear action everywhere: write on WhatsApp.
5. Speak the patient's language: ES, RU, EN.

## Accessibility & Inclusion

Mobile-first, WCAG AA contrast, reduced motion respected, Cyrillic support in all faces.
