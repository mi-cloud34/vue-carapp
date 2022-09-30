import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css";
import "@/assets/payment.css";
import "@/assets/form.css";
import store from './store/store'
import {appAxios} from '@/utils/appAxios'
import router from '@/router/index'


import navbar from '@/components/common/NavbarPage.vue'
import footer from '@/components/common/FooterPage.vue'
import slide from '@/components/rare/SlideBarPage.vue'

const app=createApp(App)
app.use(router)
app.use(store);
app.component("navbar-page",navbar)
app.component("footer-page",footer)
app.component("slide-page",slide);
app.config.globalProperties.$appAxios=appAxios
app.mount('#app')
