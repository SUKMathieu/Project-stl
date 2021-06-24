import Vue from 'vue'
import Router from 'vue-router'
import STL from '@/components/STL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'STL',
      component: STL
    }
  ]
})
