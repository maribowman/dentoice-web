import Vue from 'vue'
import Router from 'vue-router'
import CreateForm from '@/components/CreateForm'
import Dentist from '@/components/Dentist'
import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dentists',
      name: 'Dentist',
      component: Dentist
    },
    {
      path: '/dentists/create',
      name: 'CreateForm',
      component: CreateForm
    },
    {
      path: '/dentists',
      name: 'Hello',
      component: Hello
    }
  ]
})
