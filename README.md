# STUDYVERSE

Прототип веб-приложения «умный помощник студента» в стиле tech/minimal/sci-fi с тёмной темой, стекломорфизмом и интерактивными блоками.

## Что реализовано

- Одностраничный фронтенд с React (через CDN):
  - Hero + value proposition
  - Учебный модуль: загрузка материалов (демо), summary, mind-map, тесты, шпаргалки
  - AI-ассистент с переключением ролей (друг, преподаватель, экзаменатор)
  - Тайм-менеджмент: умный план дня, напоминания, anti-procrastination метки
  - Аналитика: интерактивный прогресс + прогноз экзамена
  - Блоки психологии, мотивации, социальных функций
  - Секция архитектуры и API контракта
- PWA-база: `manifest.webmanifest` + `sw.js` (offline cache shell).
- Backend-демо (Node.js + Express): endpoints для чата, загрузки материалов и прогноза экзамена.

## Рекомендованная модульная структура (production)

```txt
studyverse/
  apps/
    web/              # Next.js app, UI, PWA
    api/              # Node.js API
  packages/
    ai-core/          # ingest/summarize/quiz/explain
    scheduler/        # planning, reminders, pomodoro
    analytics/        # progress + burnout models
    shared/           # types, schema validation
  infra/
    postgres/
    redis/
    object-storage/
```

## UI-макеты страниц (описанием)

1. **Dashboard** — сводка дня, приоритеты, дедлайны, стресс/энергия.
2. **Study Lab** — загрузка материалов, summary, карты памяти, режимы объяснения.
3. **AI Tutor Chat** — чат с ролями и сценариями (essay, coding, oral exam).
4. **Planner** — календарь, авто-план недели, Pomodoro и smart-notifications.
5. **Analytics** — графики успеваемости, прогнозы и рекомендации.
6. **Wellness** — check-in, режим «мне тяжело», микропрактики.
7. **Community** — группы, совместные конспекты, Q&A.

## Запуск

```bash
# frontend
python3 -m http.server 4173

# backend demo (optional)
cd apps/api
npm i express cors
node server.js
```

