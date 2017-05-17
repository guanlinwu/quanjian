import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User/User'

import Sale from '@/views/Sale/Sale'
import Half from '@/views/Sale/Half'
import Original from '@/views/Sale/Original'
import Recharge from '@/views/Sale/Recharge'

import Credit from '@/views/Credit'
import Goods from '@/views/Goods'
import Sheets from '@/views/Sheets'
import Manage from '@/views/Manage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/sale',
      component: Sale,
      children: [
        {
          path: 'half',
          name: 'sale-half',
          component: Half
        },
        {
          path: 'original',
          name: 'sale-original',
          component: Original
        },
        {
          path: 'recharge',
          name: 'sale-recharge',
          component: Recharge
        },
        {
          path: '',
          redirect: 'half',
          component: Half
        }
      ]
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
    },
    {
      path: '/',
      redirect: '/user'
    }
  ]
})
