import { deburr } from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Frontend_Routes from './Frontend_Routes'

Vue.use(VueRouter)

const routes = [...Frontend_Routes]


  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes
  })


  export default router
