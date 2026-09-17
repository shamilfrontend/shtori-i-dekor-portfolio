import { createApp } from 'vue'
import 'normalize.css'
import './styles/tokens.scss'
import router from './router'
import { i18n } from './i18n'

import AppComponent from './App.vue'

const app = createApp(AppComponent)
app.use(router)
app.use(i18n)

app.mount('#app')
