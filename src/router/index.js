import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-form-validator'
Vue.use(VueValidator)
import Home from '@/components/home'
import Signin from '@/signin'
import Create from '@/components/createnew'
import Profile from '@/components/profile'
import Farmers from '@/components/farmers'
import Farmdetails from '@/components/farmdetails'
import Map from '@/components/map'
import Appdownload from '@/components/appdownload'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '/Home',
      component: Home
    },

    {
      path: '/map',
      name: '/Map',
      component: Map
    },

    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/createnew',
      name: 'createnew',
      component: Create
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/farmers',
      name: 'farmers',
      component: Farmers
    },
    {
      path: '/farmdetails',
      name: 'farmdetails',
      component: Farmdetails
    },
    {
      path: '/appdownload',
      name: 'Appdownload',
      component: Appdownload
    },
  ],
  mode:'history'
});
