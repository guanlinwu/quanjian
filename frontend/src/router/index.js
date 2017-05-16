import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User'
import Sale from '@/views/Sale'
import Credit from '@/views/Credit'
import Goods from '@/views/Goods'
import Sheets from '@/views/Sheets'
import Manage from '@/views/Manage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'user',
      component: User
    },
    {
      path: '/sale',
      name: 'sale',
      component: Sale
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/sheets',
      name: 'sheets',
      component: Sheets
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    }
  ]
})
