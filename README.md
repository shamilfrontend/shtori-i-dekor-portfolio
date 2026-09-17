# Шторы и декор — портфолио

Vue 3 + TypeScript + Vite.

## Скрипты

- `npm run dev` — локальная разработка
- `npm run build` — сборка в `dist/`
- `npm run preview` — просмотр сборки

## Окружения

| Окружение | URL |
|-----------|-----|
| Тест (GitHub Pages) | https://shamilfrontend.github.io/shtori-i-dekor-portfolio/ |
| Прод (Beget) | https://shtori-i-dekor.ru |

### Staging (GitHub Pages)

При push в `main` (или вручную через Actions → **Deploy staging (GitHub Pages)**) сайт собирается с `BASE_PATH=/shtori-i-dekor-portfolio/` и публикуется на GitHub Pages.

В Settings → Pages выберите Source: **GitHub Actions**.

### Production (Beget)

Выкладка только вручную: Actions → **Deploy prod** → Run workflow.

Сборка без `BASE_PATH` (корень `/`), затем `dist/` заливается на Beget по SSH через `rsync`.

Нужные секреты репозитория (Settings → Secrets and variables → Actions):

| Секрет | Описание |
|--------|----------|
| `SSH_PRIVATE_KEY` | приватный ключ для SSH |
| `SSH_HOST` | хост Beget |
| `SSH_PORT` | порт SSH |
| `SSH_USER` | пользователь Beget |
| `DEPLOY_PATH` | путь document root сайта (например `~/domain.ru/public_html/`) |

Тот же аккаунт Beget, что у других сайтов: можно переиспользовать `SSH_*`, меняется только `DEPLOY_PATH`.
