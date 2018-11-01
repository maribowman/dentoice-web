import Vue from 'vue'
import Router from 'vue-router'
import Services from '@/components/Services'
import CreateService from '@/components/CreateService'
import Dentists from '@/components/Dentists'
import CreateDentist from '@/components/CreateDentist'
import CreateInvoice from '@/components/CreateInvoice'
import Analytics from '@/components/Analytics'
import Misc from '@/components/Misc'
import NotFound from '@/components/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/services/create',
      name: 'CreateService',
      component: CreateService
    },
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
      path: '/invoices',
      name: 'Invoices',
      component: Invoices
    },
    {
      path: '/Invoices/create',
      name: 'CreateInvoice',
      component: CreateInvoice
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/misc',
      name: 'misc',
      component: Misc
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
