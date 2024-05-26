import './assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// 注册插件
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
// 使用 pinia 实例，而不是再次调用 createPinia()
app.use(pinia)
app.use(router)

// 移除 app.use(app)，这是不必要的

app.mount('#app')
