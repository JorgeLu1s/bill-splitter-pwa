import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Customer from '@/components/Customer'
import Group from '@/components/Group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/new',
      name: 'newCustomer',
      component: Customer,
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: Customer,
      props: true
    },
    {
      path: '/group/:id',
      name: 'group',
      component: Group,
      props: true
    },
    {
      path: '/newGroup',
      name: 'newGroup',
      component: Group,
    },
  ]
})
