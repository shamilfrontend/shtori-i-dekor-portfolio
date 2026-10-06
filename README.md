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

### Pipeline (Actions → **Deploy**)

При push в `main` (или вручную через Actions → **Deploy**) запускается один workflow с тремя этапами:

1. **build** — typecheck и сборка с `BASE_PATH=/shtori-i-dekor-portfolio/` для Pages  
2. **Deploy test** — публикация на GitHub Pages (автоматически)  
3. **Deploy prod** — сборка без `BASE_PATH` и выкладка на Beget по SSH; ждёт ручного Approve

В Settings → Pages выберите Source: **GitHub Actions**.

#### Ручной Approve для prod

Без защиты environment третий job задеплоит prod на каждый push. Настройте один раз:

1. Settings → Environments → создать **production** (если ещё нет)
2. **Required reviewers** — добавить себя (или другого ревьюера)
3. Сохранить

После успешного Deploy test job **Deploy prod** будет в статусе Waiting: в прогоне workflow нажмите **Review deployments** → Approve.

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
