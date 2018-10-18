// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from '@/components/Home'
import Projets from '@/components/Projets'
import CV from '@/components/CV'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/cv', component: CV},
  {path: '/projets', component: Projets},

]
const router = new VueRouter({
  routes,
  // base : /dist/,
  // mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})

