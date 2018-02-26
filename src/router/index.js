import Vue from 'vue'
import Router from 'vue-router'
import MMain from '@/page/main/m-main'
import RamkList from '../components/common/rankList'
import Up from '@/page/up/Up'
import Top from '@/page/up/Top'
import Difference from '@/page/up/difference'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: MMain,
      name: 'm-main',
      children: [
        {path: 'all', component: RamkList, name: 'all'},
        {path: 'bangumi', component: RamkList, name: 'bangumi'},
        {path: 'origin', component: RamkList, name: 'origin'},
        {path: 'cinema', component: RamkList, name: 'cinema'},
        {path: 'rookie', component: RamkList, name: 'rookie'}
      ]
    },
    {
      path: '/up',
      component: Up,
      children: [
        {
          path: 'top',
          component: Top
        },
        {
          path: 'difference',
          component: Difference
        }
      ]
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
