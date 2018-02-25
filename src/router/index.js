import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/page/main/Main'

import Up from '@/page/up/Up'
import PlayCount from '@/page/up/PlayCount'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Main,
      name: 'main'
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
