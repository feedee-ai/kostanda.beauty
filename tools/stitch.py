"""Схема вышивки для hero: портрет Марины → крестики в 4 оттенках.
Пишет site/assets/stitch.json и webp-кадр hero-portrait той же обрезки.
Запуск: python3 tools/stitch.py"""
import json
from pathlib import Path
from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'materials/selected/marina-portrait.jpg'
OUT = ROOT / 'site/assets'
ASPECT = 11 / 10          # высота / ширина кадра (CSS aspect-ratio: 10 / 11)
FACE_X, WIDTH_FRAC = 0.47, 0.64
LEVELS = (0.15, 0.33, 0.55, 0.78)


def crop():
    im = ImageOps.exif_transpose(Image.open(SRC)).convert('RGB')
    w, h = im.size
    cw = int(w * WIDTH_FRAC); ch = int(cw * ASPECT)
    if ch > h:
        ch = h; cw = int(ch / ASPECT)
    x0 = max(0, min(w - cw, int(FACE_X * w - cw / 2)))
    return im.crop((x0, 0, x0 + cw, ch))


def pattern(im, cols):
    rows = round(cols * ASPECT)
    g = im.convert('L').resize((cols * 12, rows * 12), Image.LANCZOS)
    g = g.filter(ImageFilter.UnsharpMask(radius=30 * cols / 60, percent=180, threshold=0))
    small = g.resize((cols, rows), Image.BOX)
    px = list(small.getdata()) if not hasattr(small, 'get_flattened_data') else list(small.get_flattened_data())
    fl = sorted(px); lo = fl[int(len(fl) * 0.03)]; hi = fl[int(len(fl) * 0.93)]
    out = []
    for v in px:
        t = min(1, max(0, (v - lo) / (hi - lo)))
        out.append('0' if t < LEVELS[0] else '1' if t < LEVELS[1] else '2' if t < LEVELS[2] else '3' if t < LEVELS[3] else '.')
    return {'cols': cols, 'rows': rows, 'cells': ''.join(out)}


def main():
    im = crop()
    data = {'aspect': '10 / 11', 'patterns': [pattern(im, 60), pattern(im, 44)]}
    (OUT / 'stitch.json').write_text(json.dumps(data, separators=(',', ':')))
    img = OUT / 'img'
    for w in (640, 960, 1300):
        v = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        v.save(img / f'hero-portrait-{w}.webp', 'WEBP', quality=82, method=6)
    print('crop', im.size, 'json', (OUT / 'stitch.json').stat().st_size)


if __name__ == '__main__':
    main()
