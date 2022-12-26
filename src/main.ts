import { createApp, createRenderer } from 'vue'
import { App } from "./App"
import { routes } from "./config/routes"
import { createRouter, createWebHashHistory } from 'vue-router'
import { history } from './shared/history'
import '@svgstore';
import { createPinia } from 'pinia'
import { useMeStore } from './stores/useMeStore'

const router = createRouter({ history, routes, })
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

const meStore = useMeStore()
meStore.fetchMe()


router.beforeEach(async (to, from) => {
  if (to.path === '/' || to.path.startsWith('/welcome') || to.path.startsWith('/sign_in') || to.path === '/items') {
    return true
  } else {
    const path = meStore.mePromise!.then(
      () => true,
      () => '/sign_in?return_to=' + to.path
    )
    return path
  }
})

