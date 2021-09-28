import store from './modules/store.js'
import router from './modules/router.js'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).use(store).use(router).mount('#app')
