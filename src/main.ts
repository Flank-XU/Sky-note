import { createApp, createRenderer } from 'vue'
import { App } from "./App"
import { routes } from "./config/routes"
import { createRouter, createWebHashHistory } from 'vue-router'
import { history } from './shared/history'
import '@svgstore';

const router = createRouter({ history, routes, })
const app = createApp(App)
app.use(router)
app.mount('#app')
