import Vue from 'vue'
import Router from 'vue-router'
import CreateDentist from '@/components/CreateDentist'
import Dentists from '@/components/Dentists'
import NotFound from '@/components/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dentists',
      name: 'Dentists',
      component: Dentists
    },
    {
      path: '/dentists/create',
      name: 'CreateDentist',
      component: CreateDentist
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
