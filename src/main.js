import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/assets/css/buttons.css';
import '../src/assets/css/layout.scss';
import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/free-regular-svg-icons'
// import '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/free-brands-svg-icons'


const app = createApp(App)

app.use(router)

app.mount('#app')
