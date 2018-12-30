import Vue from 'vue'
import Router from 'vue-router'
import Invoices from '@/components/Invoices'
import CreateInvoice from '@/components/CreateInvoice'
import CreateMonthlyInvoice from '@/components/CreateMonthlyInvoice'
import Materials from '@/components/Materials'
import Efforts from '@/components/Efforts'
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
      path: '/materials',
      name: 'Materials',
      component: Materials
    },
    {
      path: '/efforts',
      name: 'Efforts',
      component: Efforts
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
