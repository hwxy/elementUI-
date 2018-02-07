import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import container from '@/components/container'
import button from '@/components/button'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:layout
    },
    {
      path: '/container',
      component:container
    },
    {
      path: '/button',
      component:button
    }
  ]
})
