<template>
	<div class="basics">
		<div>
			
		</div>
		<Explain :menus="menu" :explain="explain"></Explain>
	</div>
</template>

<script>
	import Explain from '@components/explain'
	export default{
		name:"angular-started",
		components:{
			Explain
		},
		data(){
			return{
				menu:[
					{href:"#href_angular_cmd",title:"基础终端命令"}
				],
				explain:[
					{
						id:"href_angular_cmd",
						title:"命令",
						answers:[
							{
								subtitle:"一、脚手架（常用命令）",
								data:[
									"首次安装：npm install -g @angular/cli",
									"新建项目：ng new my-dream-app",
									"新建组件：ng generate component component-name",
									"新建服务：ng g service services/service-name",
									"新建模块及路由：ng g m login --routing",
									"以及其他：Class，Directive... ",
									"备注：generate， service等可直接缩写为g， s"
									
								
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
