import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import One from "@/views/One.vue"
import Leave from "@/views/Leave.vue"
import Detail from "@/components/Detail.vue"
import Gz from "../views/Le/Gz.vue"
// 二级路由
import Sho from "@/components/He/Sho.vue"
import Kc from "@/components/He/Kc.vue"
import Yk from "@/components/He/Yk.vue"
import Lx from "@/components/He/Lx.vue"
import User from "@/components/He/User.vue"
import Simulation from "@/components/SimulationModelTest.vue"
import Kd from "@/views/Kd.vue"
import Qd from "@/views/Kd/Qd.vue"
import Hx from "@/views/Kd/Hx.vue"
import Sw from "@/views/Kd/Sw.vue"
import Jx from "@/views/Kd/Jx.vue"
import Sx from "@/views/Kd/Sx.vue"
import Wl from "@/views/Kd/Wl.vue"
import English from "@/views/Kd/English.vue"
import Loiding from "@/components/Loding.vue"
import Password from "@/components/FindThePassword.vue"
import Reg from "@/components/RegistrationOfBoarding.vue"
import Szpassword from "@/components/Szpassword.vue"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"sho",
    children:[
      {
        path:"sho",
        component:Sho
      },
      {
       path:"kc",
       component:Kc
      },
      {
        path:"yk",
        component:Yk
      },
      {
        path:"lx",
        component:Lx,
      },
      {
        path:"user",
        component:User
      },
      {
        path:'simulation',
        component:Simulation
      },
      {
        path:'loding',
        component:Loiding
      },
      {
        path:'password',
        component:Password
      },
      {
        path:'reg',
        component:Reg
      },
      {
        path:'szpassword',
        component:Szpassword
      }
    ]
  },
  {
    path:'/kd',
    component:Kd,
    children:[
      {
        path:'qd',
        component:Qd
      },
      {
        path:'hx',
        component:Hx
      },
      {
        path:'sw',
        component:Sw
      },
      {
        path:'jx',
        component:Jx
      },
      {
        path:'sx',
        component:Sx
      },
      {
        path:'wl',
        component:Wl
      },
      {
        path:'english',
        component:English
      }
    ]
  },
  {
    path:'/one',
    component:One
  },
  {
    path:'/leave',
    component:Leave
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/gz',
    component:Gz
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
