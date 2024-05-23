import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(app)

app.mount('#app')
