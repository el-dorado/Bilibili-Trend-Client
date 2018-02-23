import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Up from '@/page/Up/Up'
import PlayCount from '@/page/Up/PlayCount'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/up',
      component: Up,
      children: [
        {
          path: 'playcount',
          component: PlayCount
        }
      ]
    }
  ]
})
