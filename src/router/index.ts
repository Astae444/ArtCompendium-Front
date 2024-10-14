import { createRouter, createWebHistory } from 'vue-router/auto'
import Home from '@/pages/Home.vue'
import SearchResult from '@/pages/SearchResult.vue'
import About from '@/pages/About.vue'
import Terms from '@/pages/Terms.vue'
import Privacy from '@/pages/Privacy.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/search",
      name: "searchresult",
      component: SearchResult
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms
    },
    {
      path: "/privacy",
      name: "privacy",
      component: Privacy
    },
  ]
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
