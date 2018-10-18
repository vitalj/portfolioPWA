import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    },
  ]
})
