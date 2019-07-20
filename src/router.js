import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// noob
import introduce from '@components/noob/introduce.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
	{
	  	path: '/',
	  	redirect: '/index'
	},
    {
      path: '/index',
      name: 'home',
      component: Home,
	  redirect: '/noob/introduce',
	  children:[
		  {path:"/noob/introduce",name:"introduce",component:introduce},
		  {path:"/noob/start",name:"noob-start",component: () => import('@components/noob/start.vue')}
	  ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
