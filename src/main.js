import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import BodyScrollLock from '@/plugins/BodyScrollLock.js'

//make global variable for thread IDs

const app = createApp(App)
app.use(router)
app.use(BodyScrollLock)
app.mount('#app')
// createApp(App).use(router).use(BodyScrollLock).mount('#app')