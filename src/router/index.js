import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Person from '@/components/Person'
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
      name: 'newPerson',
      component: Person,
    },
    {
      path: '/person/:id',
      name: 'person',
      component: Person,
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
