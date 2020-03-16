import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Cart = () => import('../components/Cart')
const Home = () => import('../components/Home')
const My = () => import('../components/My')
const Recommend = () => import('../components/Recommend')
const Sort = () => import('../components/Sort')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/',
      component: Home
    }
  ]
})

export default router
