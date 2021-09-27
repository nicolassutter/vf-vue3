import store from './modules/store.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(store).mount('#app')
