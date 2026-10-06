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

### Pipeline

**Deploy** (push в `main` или Actions → **Deploy** → Run workflow):

1. **build** — typecheck и сборка с `BASE_PATH=/shtori-i-dekor-portfolio/` для Pages  
2. **Deploy test** — публикация на GitHub Pages

**Deploy prod** — только вручную: Actions → **Deploy prod** → **Run workflow**.  
Сборка без `BASE_PATH` и выкладка на Beget по SSH. На push в `main` prod не запускается.

В Settings → Pages выберите Source: **GitHub Actions**.

#### Секреты для Beget

Settings → Secrets and variables → Actions:

| Секрет | Описание |
|--------|----------|
| `SSH_PRIVATE_KEY` | приватный ключ для SSH |
| `SSH_HOST` | хост Beget |
| `SSH_PORT` | порт SSH |
| `SSH_USER` | пользователь Beget |
| `DEPLOY_PATH` | путь document root сайта (например `~/domain.ru/public_html/`) |

Тот же аккаунт Beget, что у других сайтов: можно переиспользовать `SSH_*`, меняется только `DEPLOY_PATH`.
