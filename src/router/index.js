import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Invoices from '@/components/Invoices'
import Estimates from '@/components/Estimates'
import CreateInvoice from '@/components/CreateInvoice'
import MonthlyInvoices from '@/components/MonthlyInvoices'
import CreateMonthlyInvoice from '@/components/CreateMonthlyInvoice'
import Materials from '@/components/Materials'
import Efforts from '@/components/Efforts'
import Dentists from '@/components/Dentists'
import CreateDentist from '@/components/CreateDentist'
import Analytics from '@/components/Analytics'
import Misc from '@/components/Misc'
import Gerhard from '@/components/Gerhard'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/invoices',
      name: 'Invoices',
      component: Invoices
    },
    {
      path: '/estimates',
      name: 'Estimates',
      component: Estimates
    },
    {
      path: '/invoices/create',
      name: 'CreateInvoice',
      component: CreateInvoice
    },
    {
      path: '/invoices/edit/:id',
      name: 'EditInvoice',
      component: CreateInvoice
    },
    {
      path: '/monthlies',
      name: 'MonthlyInvoices',
      component: MonthlyInvoices
    },
    {
      path: '/monthlies/create',
      name: 'CreateMonthlyInvoice',
      component: CreateMonthlyInvoice
    },
    {
      path: '/monthlies/edit/:id',
      name: 'EditMonthlyInvoice',
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
    // {
    //   path: '/dentists/edit/:id',
    //   name: 'CreateDentist',
    //   component: CreateDentist,
    //   props: true
    // },
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
      path: '/gerhard',
      name: 'Gerhard',
      component: Gerhard
    },
    {
      path: '*',
      redirect: {
        name: "Gerhard"
      }
    }
  ]
})
