"""Готовит webp-варианты фото для site/assets/img из materials/.
Запуск: python3 tools/images.py"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IG = ROOT / 'materials/instagram/media'
SEL = ROOT / 'materials/selected'
OUT = ROOT / 'site/assets/img'

# имя: (исходник, кроп в долях (l, t, r, b), ширины)
SPECS = {
    'marina-portrait': (SEL / 'marina-portrait.jpg', (0, 0, 1, 1), (640, 1100)),
    'marina-window':   (SEL / 'marina-window.jpg', (0, 0, 1, 1), (640, 1100)),
    'marina-boutique': (SEL / 'marina-boutique.jpg', (0, 0, 1, 1), (691,)),
    'marina-licence':  (IG / 'Dd1NQjyiFb3-6.jpg', (0.0, 0.14, 0.92, 0.56), (640, 1100)),
    'marina-dele':     (IG / 'Dd1NQjyiFb3-4.jpg', (0.0, 0.0, 1.0, 0.56), (640, 1100)),
    'marina-observ':   (IG / 'DOxtH0ViL8F-0.jpg', (0.0, 0.2, 1.0, 0.665), (640, 1000)),
    'marina-imcas':    (IG / 'DUQhw_jiBd6-6.jpg', (0.0, 0.0, 1.0, 0.76), (640,)),
    'clinic-room':     (SEL / 'clinic-room.jpg', (0, 0, 1, 1), (720, 1400, 2200)),
    'device-volnewmer':(SEL / 'craft-device.jpg', (0, 0, 1, 1), (720, 1200)),
    'team':            (SEL / 'team-white.jpg', (0, 0, 1, 1), (720, 1200)),
    'scan-daylight':   (IG / 'DZNu7PIiESR-6.jpg', (0.0, 0.0, 1.0, 0.46), (640, 1080)),
    'scan-uv':         (IG / 'DZNu7PIiESR-5.jpg', (0.0, 0.0, 0.48, 0.41), (520,)),
    'scan-uv-after':   (IG / 'DZNu7PIiESR-5.jpg', (0.494, 0.0, 1.0, 0.41), (520,)),
    'tx-diagnostico':  (SEL / 'tx-diagnostico.jpg', (0, 0, 1, 1), (640, 1100)),
    'tx-aparatologia': (SEL / 'tx-aparatologia.jpg', (0, 0, 1, 1), (640, 1000)),
    'tx-cuidados':     (SEL / 'tx-cuidados.jpg', (0, 0, 1, 1), (640, 1100)),
    'tx-inyectables':  (SEL / 'tx-inyectables.jpg', (0, 0, 1, 1), (640, 1100)),
    'tx-tricologia':   (SEL / 'tx-tricologia.jpg', (0, 0, 1, 1), (640, 1100)),
}
for case in ('lips', 'pigment', 'redness', 'acne', 'body'):
    for side in ('before', 'after'):
        SPECS[f'ba-{case}-{side}'] = (SEL / f'ba-{case}-{side}.jpg', (0, 0, 1, 1), (640, 1100))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    sizes = {}
    for name, (src, (l, t, r, b), widths) in SPECS.items():
        im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
        w, h = im.size
        im = im.crop((round(l * w), round(t * h), round(r * w), round(b * h)))
        sizes[name] = im.size
        for tw in widths:
            if tw > im.width * 1.05 and tw != widths[0]:
                continue
            v = im if im.width <= tw else im.resize((tw, round(im.height * tw / im.width)), Image.LANCZOS)
            v.save(OUT / f'{name}-{tw}.webp', 'WEBP', quality=80, method=6)
        print(name, im.size)
    # OG
    og = Image.open(SEL / 'hero-marina.jpg').convert('RGB')
    og = ImageOps.fit(og, (1200, 630), centering=(0.5, 0.3))
    og.save(OUT / 'og.jpg', quality=82)


if __name__ == '__main__':
    main()
