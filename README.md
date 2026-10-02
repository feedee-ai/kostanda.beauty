# Kostanda Beauty — сайт клиники

Лендинг клиники эстетической медицины доктора Марины Костанды (Валенсия).
Две языковые версии: испанская на `/` и русская на `/ru/`.

**Стек:** Astro 7 (статическая сборка), чистый CSS, без фреймворков на клиенте.
Шрифты Jost и Golos Text подключены локально, с кириллицей. Картинки автоматически сжимаются в AVIF/WebP.

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # просмотр собранной версии
```

## Деплой на Vercel

1. vercel.com → **Add New… → Project** → импортировать репозиторий `feedee-ai/kostanda.beauty`.
2. Framework Preset определится сам (**Astro**). Build Command: `npm run build`, Output Directory: `dist`. Больше ничего настраивать не нужно.
3. **Deploy**.
4. Домен: Project → Settings → Domains → добавить `kostanda.beauty` и прописать DNS-записи, которые покажет Vercel.

Если домен будет другим, поменяйте `site` в `astro.config.mjs` и адрес sitemap в `public/robots.txt`.
От `site` зависят canonical, hreflang, OG-картинка и sitemap.

## Где править контент

| Что | Где |
| --- | --- |
| Все тексты ES/RU, процедуры, цены, FAQ | `src/i18n/content.ts` |
| Отзывы | `src/i18n/content.ts` → `reviews` |
| Телефон, WhatsApp, адрес, Instagram, регистрационный номер | `src/i18n/content.ts` → `CONTACT` |
| Фото | `src/assets/img/` (сжимаются при сборке) |
| Разметка секций | `src/components/Home.astro` |
| Стили | `src/styles/global.css`, `src/styles/sections.css` |
| Интерактив (меню, аккордеон, «до/после», форма WhatsApp) | `src/scripts/site.ts` |

## Что проверить с клиникой перед запуском

- Роли команды (Анастасия и Алёна — врачи, Лилия — косметолог, Полина — администратор) взяты из отзывов. Нужно подтвердить.
- Часы работы: на сайте указано «с 10:00, по записи». Время закрытия неизвестно.
- Цены абонементов и бонусы взяты из постов в Instagram. Нужно подтвердить, что они актуальны.
- Согласие пациентов на публикацию фото «до/после».
- Юридические страницы (Aviso legal, Política de privacidad, cookies) для Испании. Сейчас их нет, а форма никаких данных не собирает: она только открывает WhatsApp.

## Дизайн-скиллы

В `.claude/skills/` лежат скиллы, по которым делался дизайн:
[impeccable](https://github.com/pbakaus/impeccable) (Apache 2.0),
[taste-skill](https://github.com/leonxlnx/taste-skill) (MIT),
[emilkowalski/skills](https://github.com/emilkowalski/skills) (MIT).
Claude Code подхватывает их автоматически при работе с этим репозиторием.
