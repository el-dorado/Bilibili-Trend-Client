import Vue from 'vue'
import Router from 'vue-router'
import MMain from '@/page/main/m-main'
import RankList from '../components/common/rankList'
import Up from '@/page/up/Up'
import Top from '@/page/up/Top'
import Difference from '@/page/up/difference'

Vue.use(Router)

export default new Router({
  base: '/Bilibili-Trend-Client/',
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: MMain,
      name: 'm-main',
      children: [
        {path: 'all', component: RankList, name: 'all'},
        {path: 'bangumi', component: RankList, name: 'bangumi'},
        {path: 'origin', component: RankList, name: 'origin'},
        {path: 'cinema', component: RankList, name: 'cinema'},
        {path: 'rookie', component: RankList, name: 'rookie'},
        {path: '', redirect: 'all'}
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
      redirect: '/main/all'
    }
  ]
})
