# Kostanda Beauty — сайт клиники (site-factory)

Владелец заказа — Александр. Общение на русском, прямо.

## Версии
- **Прод (новая, site-factory):** ветка `claude/friendly-cerf-o597v0` (рабочая ветка прода), статика в `site/`, Vercel-проект `kostanda.beauty` → https://kostandabeauty.vercel.app
- **v1 (до site-factory, Astro):** ветка `v1`, заморожена 07.10.2026, не коммитить. Ссылка: https://kostandabeauty-v1.vercel.app (отдельный Vercel-проект `kostandabeauty-v1`; превью основного проекта закрыты Vercel-авторизацией).

## Стек
Статика без сборщика: `site/` + `vercel.json` (`outputDirectory: site`). Три языка генерируются одним скриптом из одного шаблона и словаря:
- `tools/build.py` — шаблон `tools/template.html` + тексты `tools/content/{es,ru,en}.json` → `site/index.html`, `site/ru/index.html`, `site/en/index.html`. После правки текстов — `python3 tools/build.py`, результат коммитится.
- Фото: `tools/images.py` готовит webp-варианты в `site/assets/img/` из исходников в `materials/`.
- Цены и привилегии — в `tools/content/*.json` (`perks`); по умолчанию «по консультации».

## Ключевые факты
- Клиника медицинской косметологии / эстетической медицины. Kostanda Beauty SL. Медцентр Nº registro 45856.
- C/ de Guillem de Castro, 8, 46001 València (Ciutat Vella), 5 мин от Plaza del Ayuntamiento.
- +34 622 65 02 02 (WhatsApp), Instagram @kostanda.beauty (~10,3 тыс.).
- Часы: с 10:00, по записи (закрытие неизвестно).
- Основательница — доктор Марина Костанда: эндокринолог из Харькова → DELE, омологация, снова номер врача в Испании (09.2026). IMCAS Paris, конгресс Candela.
- Врач Мишель (с 08.2026): 10+ лет, магистры Complutense и CEU Valencia, нутрициология.
- Открытие центра — ноябрь 2024 (годовщина 25.11.2025). «Более 1000 пациентов» — из собственного поста.
- Оборудование: Observ 520x, УЗИ лица, Trichoscan, IPL Candela Nordlys, Candela Frax 1550, Secret RF, Classys Volnewmer, DermaLux LED, AquaPure.
- Бренды: Biologique Recherche, iS Clinical, HydroPeptide, Jan Marini, Celtermi, Cyspera, Medik8, Biokiss.

## Позиционирование (из отзывов и постов)
Диагностика прежде процедур и честность без навязывания: «Лишнего не назначает». Манифест Марины — карусель «Мои принципы» (DQ7U_slCE-b): никогда не навязываю, не демпингую, не переманиваю, не обсуждаю чужих врачей, учусь у лучших, технологии ради безопасности, всегда честна.

## Аудитория и языки
Русско- и украиноязычные жительницы Валенсии (ядро) + растущая испаноязычная (врач Мишель). Сайт: ES (по умолчанию `/`), RU (`/ru/`), EN (`/en/`).

## Материалы
`materials/BRIEF.md`, `materials/research.md`, `materials/instagram/` (посты и фото, видео не сохранились). Google-отзывы: только 9 цитат из v1, рейтинг неизвестен.

## Открытые вопросы к клиенту
- Рейтинг и число отзывов в Google, ссылка на карточку.
- Роли команды (Анастасия, Алёна, Лилия, Полина) и фото врача Мишель.
- Часы работы полностью.
- Актуальность абонементов и бонусов, цены консультации и диагностики.
- Согласия на фото до/после.
- Нужна ли украинская версия.
- Домен kostanda.beauty: куплен ли, кто держит DNS.
- Юридические страницы (Aviso legal, privacidad, cookies).
