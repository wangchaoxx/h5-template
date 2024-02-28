import { createApp } from 'vue'
import './style.css'
import './utils/vant'
import 'normalize.css'
import './style/index.less'
import router from  './router'

import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
