import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/assets/scss/style.scss';

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
