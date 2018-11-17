import Vue from 'vue'
import Router from 'vue-router'
import Invoices from '@/components/Invoices'
import CreateInvoice from '@/components/CreateInvoice'
import CreateMonthlyInvoice from '@/components/CreateMonthlyInvoice'
import Services from '@/components/Services'
import CreateService from '@/components/CreateService'
import Dentists from '@/components/Dentists'
import CreateDentist from '@/components/CreateDentist'
import Analytics from '@/components/Analytics'
import Misc from '@/components/Misc'
import NotFound from '@/components/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/invoices',
      name: 'Invoices',
      component: Invoices
    },
    {
      path: '/invoices/create',
      name: 'CreateInvoice',
      component: CreateInvoice
    },
    {
      path: '/invoices/createmonthly',
      name: 'CreateMonthlyInvoice',
      component: CreateMonthlyInvoice
    },
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
      component: CreateDentist,
      props: true
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/misc',
      name: 'Misc',
      component: Misc
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
