<template>
	<div class="basics">
		<Explain :menus="menu" :explain="explain"></Explain>
	</div>
</template>

<script>
	import Explain from '@components/explain'
	export default{
		name:"angular-basics",
		components:{
			Explain
		},
		data(){
			return{
				menu:[
					{href:"#href_router",title:"路由"},
					{href:"#href_outer",title:"传值"},
				],
				explain:[
					{
						id:"href_router",
						title:"路由配置",
						answers:[
							{
								subtitle:"一、配置",
								data:[
									"app-routing.module.ts中配置",
									"1.引入组件 import",
									"2.配置路由 {path:''}   //    ''默认跳转     '**' 匹配不到跳转",
									"3.视图层容器 <router-outlet></router-outlet>"
								]
							},
							{
								subtitle:"二、动态路由",
								data:[
									"1.配置动态路由：{path: 'newscontent/:id', component: NewscontentComponent}",
									"2.跳转传值：<a [routerLink]='[ '/newscontent/',aid]'>跳转到详情</a>",
									"3.获取动态路由参数，示例",
									"import { ActivatedRoute } from '@angular/router'; ",
									"constructor( private route: ActivatedRoute) { }",
									"ngOnInit(){console.log(this.router.params)}"
								]
							},
							{
								subtitle:"三、路由跳转方式",
								data:[
									"1.标签跳转 <a routerLink='/home'>首页</a>",
									"2.js跳转 ,示例",
									"引入路由：{ Router } from '@angular/router'",
									"constructor( private route: ActivatedRoute, private router: Router) {} 初始化",
									"this.router.navigate(['/home'])" 
								]
							}
							
							
						]
					},
					{
						id:"href_outer",
						title:"传值",
						answers:[
							
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
	
</style>
