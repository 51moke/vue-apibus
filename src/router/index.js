import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import DemoAaa from '@/components/Demo_aaa'
import DemoBbb from '@/components/Demo_bbb'
import DemoCcc from '@/components/Demo_ccc'
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      // redirect: '/demo1/ccc',
      name: 'Demo',
      component: Demo,
      children: [
        {
          path: 'aaa',
          name: 'DemoAaa',
          component: DemoAaa
        },
        {
          path: 'bbb',
          // alias: '/demo1',
          name: 'DemoBbb',
          component: DemoBbb
        },
        {
          path: 'ccc',
          name: 'DemoCcc',
          component: DemoCcc
        }
      ]
    }
  ]
})
