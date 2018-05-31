import Vue from 'vue'
import Router from 'vue-router'
import SubmittalRegister from '@/components/SubmittalRegister/SubmittalRegister'
import Dashboard from '@/components/Dashboard'
import Users from '@/components/UserDetails/Users'
import UserDetails from '@/components/UserDetails/UserDetails'
import SubmittalDetails from '@/components/Submittal/SubmittalDetails'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Register',
      name: 'SubmittalRegister',
      component: SubmittalRegister
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/UserDetails',
      name: 'UserDetails',
      component: UserDetails
    },
    {
      path: '/Submittal',
      name: 'SubmittalDetails',
      component: SubmittalDetails
    }
  ]
})
