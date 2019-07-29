import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// noob
import introduce from '@components/introduce.vue'

Vue.use(Router)

const router = new Router({
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
	  redirect: '/introduce',
	  children:[
		  {path:"/introduce",name:"introduce",component:introduce},
		  {path:"/noob/start",name:"noob-start",component: () => import('@components/noob/start.vue')},
		  {path:"/noob/path",name:"noob-path",component: () => import('@components/noob/path.vue')},
		  {path:"/noob/css",name:"noob-css",component: () => import('@components/noob/css.vue')},
		  // vue
		  {path:"/vue/started",name:"vue-started",component: () => import('@components/vue/started.vue')},
		  {path:"/vue/path",name:"vue-path",component: () => import('@components/vue/path.vue')},
		  // angular
		  {path:"/angular/started",name:"angular-started",component: () => import('@components/angular/started.vue')},
		  {path:"/angular/path",name:"angular-path",component: () => import('@components/angular/path.vue')},
		  {path:"/angular/basics",name:"angular-basics",component: () => import('@components/angular/basics.vue')},
		   // 小程序
		  {path:"/xcx/started",name:"xcx-started",component: () => import('@components/xcx/started.vue')},
		  {path:"/xcx/path",name:"xcx-path",component: () => import('@components/xcx/path.vue')},
		   // 博客
		  {path:"/blog/admin",name:"blog-admin",component: () => import('@components/blog/admin.vue')},
		  {path:"/blog/tourist",name:"blog-tourist",component: () => import('@components/blog/tourist.vue')},
		  {path:"/blog/publish",name:"blog-publish",component: () => import('@components/blog/publish.vue')},
		  //关于
		  {path:"/about/comment",name:"about-comment",component: () => import('@components/about/comment.vue')},
		  {path:"/about/contact",name:"about-contact",component: () => import('@components/about/contact.vue')},
		  {path:"/about/about",name:"about-about",component: () => import('@components/about/about.vue')},
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

// router.beforeEach((to, from, next) => {
// 	
// 
// 	next()
// 	
// })

export default router;