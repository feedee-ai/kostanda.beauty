"""Собирает site/{,ru/,en/}index.html из tools/template.html и tools/content/*.json.
Запуск: python3 tools/build.py"""
import json
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / 'tools'
SITE = ROOT / 'site'

SITE_URL = 'https://kostandabeauty.vercel.app'
LANGS = {'es': '/', 'ru': '/ru/', 'en': '/en/'}
LANG_LABELS = {'es': 'ES', 'ru': 'RU', 'en': 'EN'}

CONTACT = {
    'phone_display': '+34 622 65 02 02',
    'phone_href': 'tel:+34622650202',
    'wa': '34622650202',
    'instagram': 'https://www.instagram.com/kostanda.beauty/',
    'instagram_handle': '@kostanda.beauty',
    'maps': 'https://www.google.com/maps/search/?api=1&query=Kostanda+Beauty+Carrer+de+Guillem+de+Castro+8+46001+Valencia',
    'reviews': 'https://www.google.com/maps/search/?api=1&query=Kostanda+Beauty+Valencia',
}

# Отзывы Google — на языке оригинала (из v1).
REVIEWS = [
    {'name': 'Olga Gvo', 'lang': 'ru', 'text': 'Хожу в эту клинику уже 2 года и решила написать отзыв, так как понимаю, как сложно найти профессиональную клинику в Валенсии. Делаю здесь, в основном, IPL, микроигольчатый RF и полинуклеотиды.'},
    {'name': 'Lorena Planells', 'lang': 'es', 'text': 'La clínica está impoluta, todo te transmite paz y además las chicas son muy delicadas y profesionales. Sin duda la recomendaría con los ojos cerrados.'},
    {'name': 'Kateryna Kharechko', 'lang': 'ru', 'text': 'Марина прекрасный специалист, все разложила мне по полочкам и дала отличные рекомендации по уходу и процедурам. Лишнего не назначает.'},
    {'name': 'Elizabet Raiska', 'lang': 'es', 'text': 'Me han hecho un tratamiento facial y me quedé con una piel radiante, como si hubiera estado una semana de vacaciones. Muy recomendable.'},
    {'name': 'Анна Ковтун', 'lang': 'ru', 'text': 'Врачи — профессионалы, всё объясняют детально и понятно. Внутри идеально чисто и стерильно, сразу чувствуешь себя в надёжных руках. Делала уход на Biologique Recherche — кожа после процедуры просто сияет!'},
    {'name': 'A R', 'lang': 'es', 'text': 'Un precioso lugar donde ser muy bien atendida, mimada y comprendida. En el centro de Valencia, cuentan con especialistas muy profesionales y atentas. Me realizaron un tratamiento de hidratación y glow y quedé encantada.'},
    {'name': 'Юля Стадник', 'lang': 'ru', 'text': 'Делаю уход Biologique Recherche раз в 3 недели и это лучшее, что было с моей кожей! И отдельная благодарность администратору за матчу.'},
    {'name': 'Daria', 'lang': 'es', 'text': 'El ambiente es muy agradable desde que entras y te reciben con los caramelos «Korovka», y los médicos son muy profesionales. Me ayudaron a elegir justo lo que necesitaba mi piel.'},
    {'name': 'Layla Hammouda', 'lang': 'es', 'text': 'Me realicé el tratamiento de AquaPure que consiste en varios pasos. Salí con la piel limpia, renovada y radiante.'},
    {'name': 'Darina Derzkaya', 'lang': 'ru', 'text': 'Свое лицо доверяю только Kostanda Beauty уже более 2х лет!'},
    {'name': 'Maya Linková', 'lang': 'ru', 'text': 'Губы идеальные и натуральные.'},
]

# Размеры исходников для width/height (против CLS) и доступные ширины webp.
IMG_DIR = SITE / 'assets/img'


def img_info():
    info = {}
    from PIL import Image
    for f in sorted(IMG_DIR.glob('*.webp')):
        name, _, w = f.stem.rpartition('-')
        if not w.isdigit():
            continue
        with Image.open(f) as im:
            size = im.size
        info.setdefault(name, []).append((int(w), size))
    out = {}
    for name, variants in info.items():
        variants.sort()
        biggest = variants[-1][1]
        out[name] = {
            'srcset': ', '.join(f'/assets/img/{name}-{w}.webp {s[0]}w' for w, s in variants),
            'src': f'/assets/img/{name}-{variants[0][0]}.webp',
            'w': biggest[0],
            'h': biggest[1],
        }
    return out


# Цифры 5×7 для вышитых номеров принципов.
DIGITS = {
    '1': ['..#..', '.##..', '#.#..', '..#..', '..#..', '..#..', '#####'],
    '2': ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '#####'],
    '3': ['####.', '....#', '....#', '.###.', '....#', '....#', '####.'],
    '4': ['...#.', '..##.', '.#.#.', '#..#.', '#####', '...#.', '...#.'],
    '5': ['#####', '#....', '####.', '....#', '....#', '#...#', '.###.'],
    '6': ['.###.', '#....', '#....', '####.', '#...#', '#...#', '.###.'],
    '7': ['#####', '....#', '...#.', '..#..', '.#...', '.#...', '.#...'],
}


def stitch_digit(d, cell=10):
    rows = DIGITS[d]
    w, h = len(rows[0]) * cell, len(rows) * cell
    parts = []
    pad = cell * 0.18
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            if ch != '#':
                continue
            x0, y0 = x * cell + pad, y * cell + pad
            x1, y1 = (x + 1) * cell - pad, (y + 1) * cell - pad
            parts.append(f'M{x0:.1f} {y0:.1f}L{x1:.1f} {y1:.1f}M{x1:.1f} {y0:.1f}L{x0:.1f} {y1:.1f}')
    return {'w': w, 'h': h, 'd': ''.join(parts)}


def main():
    env = Environment(loader=FileSystemLoader(TOOLS), autoescape=select_autoescape(['html']),
                      trim_blocks=True, lstrip_blocks=True)
    tpl = env.get_template('template.html')
    images = img_info()
    digits = {d: stitch_digit(d) for d in DIGITS}
    contents = {lang: json.loads((TOOLS / 'content' / f'{lang}.json').read_text()) for lang in LANGS}
    for lang, path in LANGS.items():
        t = contents[lang]
        alternates = [{'lang': l, 'href': SITE_URL + p, 'label': LANG_LABELS[l], 'path': p} for l, p in LANGS.items()]
        html = tpl.render(t=t, lang=lang, path=path, site_url=SITE_URL, canonical=SITE_URL + path,
                          alternates=alternates, c=CONTACT, reviews=REVIEWS, img=images, digits=digits,
                          wa_text_json=json.dumps(t['book'], ensure_ascii=False))
        out = SITE / path.strip('/') / 'index.html' if path != '/' else SITE / 'index.html'
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html)
        print('built', out.relative_to(ROOT), f'{len(html) // 1024} KB')


if __name__ == '__main__':
    main()
