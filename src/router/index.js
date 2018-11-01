import Vue from 'vue'
import Router from 'vue-router'
import CreateForm from '@/components/CreateForm'
import Dentists from '@/components/Dentists'
import Hello from '@/components/Hello'

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
      name: 'CreateForm',
      component: CreateForm
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
