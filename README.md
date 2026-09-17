# Шторы и декор — портфолио

Vue 3 + TypeScript + Vite.

## Скрипты

- `npm run dev` — локальная разработка
- `npm run build` — сборка в `dist/`
- `npm run preview` — просмотр сборки

## Деплой на Beget

При push в `main` (или вручную через Actions → Deploy to Beget) GitHub Actions собирает проект и заливает `dist/` на Beget по SSH через `rsync`.

Нужные секреты репозитория (Settings → Secrets and variables → Actions):

| Секрет | Описание |
|--------|----------|
| `SSH_PRIVATE_KEY` | приватный ключ для SSH |
| `SSH_HOST` | хост Beget |
| `SSH_PORT` | порт SSH |
| `SSH_USER` | пользователь Beget |
| `DEPLOY_PATH` | путь document root сайта (например `~/domain.ru/public_html/`) |

Тот же аккаунт Beget, что у других сайтов: можно переиспользовать `SSH_*`, меняется только `DEPLOY_PATH`.
