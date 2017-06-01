import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User/User'

import Sale from '@/views/Sale/Sale'
import Half from '@/views/Sale/Half'
import Original from '@/views/Sale/Original'
import Exchange from '@/views/Sale/Exchange'
import FirstRecharge from '@/views/Sale/FirstRecharge'
import AgainRecharge from '@/views/Sale/AgainRecharge'

import Credit from '@/views/Credit'

import Goods from '@/views/Goods/Goods'
import Goodsinfo from '@/views/Goods/GoodsInfo'
import Stock from '@/views/Goods/Stock'

import Sheets from '@/views/Sheets/Sheets'
import SaleRecords from '@/views/Sheets/SaleRecords'
import Balance from '@/views/Sheets/Balance'
import StockRecords from '@/views/Sheets/StockRecords'
import RechargeRecords from '@/views/Sheets/RechargeRecords'
import Manage from '@/views/Manage'
// import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
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
          path: 'firstRecharge',
          name: 'sale-first-recharge',
          component: FirstRecharge
        },
        {
          path: 'againRecharge',
          name: 'sale-again-recharge',
          component: AgainRecharge
        },
        {
          path: 'exchange',
          name: 'sale-exchange',
          component: Exchange
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
      component: Goods,
      children: [
        {
          path: 'goodsinfo',
          name: 'goods-goodsinfo',
          component: Goodsinfo
        },
        {
          path: 'stock',
          name: 'goods-stock',
          component: Stock
        },
        {
          path: '',
          redirect: 'goodsinfo',
          component: Goodsinfo
        }
      ]
    },
    {
      path: '/sheets',
      component: Sheets,
      children: [
        {
          path: 'saleRecords',
          name: 'sheets-saleRecords',
          component: SaleRecords
        },
        {
          path: 'balance',
          name: 'sheets-balance',
          component: Balance
        },
        {
          path: 'stockRecords',
          name: 'sheets-stockRecords',
          component: StockRecords
        },
        {
          path: 'rechargeRecords',
          name: 'sheets-rechargeRecords',
          component: RechargeRecords
        },
        {
          path: '',
          redirect: 'saleRecords',
          component: SaleRecords
        }
      ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/',
      redirect: '/user'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   console.log(Vue.prototype.$publicCore.isLogin());
//   console.log(Vue.prototype.$publicCore);
//   !Vue.prototype.$publicCore.isLogin() && Vue.prototype.$publicCore.showLogin();
//   next();
// })

export default router;
