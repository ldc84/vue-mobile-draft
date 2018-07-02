import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import Main from '@/components/main/'
import Trade from '@/components/trade/'
import Mypage from '@/components/mypage/'

Vue.use(Router)

const COMMON_LAYOUT = (component) => {
  return {header: Header, footer: Footer, body: component}
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: COMMON_LAYOUT(Main)
    },
    {
      path: '/trade/',
      name: 'Trade',
      components: COMMON_LAYOUT(Trade)
    },
    {
      path: '/mypage/',
      name: 'Mypage',
      components: COMMON_LAYOUT(Mypage)
    }
  ]
})
