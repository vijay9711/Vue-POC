import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Support from '../src/views/support.vue'
import ShoppingList from '../src/views/shoppinglist.vue'
import About from "../src/views/About.vue"
import DashBoard from "../src/views/dashboard.vue"
import Head from "./views/head.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        layout:"noNav"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        layout:"Head"
      }
    },
    {
      path: '/shoppingList',
      name: 'shoppingList',
      component:ShoppingList,
      meta:{
        layout:"Head"
      }
    },
    {
      path:'/support',
      name:'support',
      component:Support
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:DashBoard
    },
    {
      path:'/head',
      name:'head',
      component:Head
    }
  ]
})
