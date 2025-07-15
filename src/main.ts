import { createApp } from 'vue'
import 'normalize.css'
import router from './router'

import AppComponent from './App.vue'

const app = createApp(AppComponent)
app.use(router)

app.mount('#app')
