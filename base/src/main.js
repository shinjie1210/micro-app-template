import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
const app = createApp(App)
app.use(router).use(store).mount('#app')

import microApp from '@micro-zoe/micro-app'

microApp.start()

