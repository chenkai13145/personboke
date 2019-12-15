import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect:'/me',
    component: () => import(/* webpackChunkName: "about" */ '../components/layout/layout'),
    children:[
      {
        path:'/me',
        name:'me',
        component:()=> import('../views/me')
      },
      {
        path:'/experience',
        name:'experience',
        component:()=> import('../views/experience')
      },
      {
        path:'/project',
        name:'project',
        component:()=>import('../views/project')
      },
      {
        path:'/professional',
        name:'professional',
        component:()=>import('../views/Professional')
      },
      {
        path:'/common',
        name:'common',
        component:()=>import('../views/common/common')
     },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/downout',
    name:'downout',
    component:()=>import('../components/layout/downout'),
    children:[
      {
        path:'/download',
        name:'download',
        component:()=>import('../views/download/index')
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass:'actives',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
