import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import container from '@/components/container'
import button from '@/components/button'
import radio from '@/components/radio'
import checkbox from '@/components/checkbox'
import input from '@/components/input'
import select from '@/components/select'
import cascader from '@/components/cascader'
import slider from '@/components/slider'
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
    },
    {
      path: '/radio',
      component:radio
    },
    {
      path: '/checkbox',
      component:checkbox
    },
    {
      path: '/input',
      component:input
    },
    {
      path: '/select',
      component:select
    },
    {
      path: '/cascader',
      component:cascader
    },
    {
      path: '/slider',
      component:slider
    },
  ]
})
