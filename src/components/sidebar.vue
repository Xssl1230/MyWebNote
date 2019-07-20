<template>
	<div class="sidebar">
		<el-menu class="el-menu-vertical-demo" router>
			<el-menu-item class="menu-list-item" v-for="(item,index) in navListShow" :key="index" :index="item.router">
				<i class="el-icon-s-platform"></i>
				<span slot="title">{{index+1}}.{{item.title}}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				noob:[
					{title:"前言",router:'/noob/introduce'},
					{title:"新手上路",router:'/noob/start'},
					{title:"学习路线",router:'/noob/path'},
					{title:"html",router:'/noob/html'},
					{title:"css",router:'/noob/css'},
					{title:"JavaScript",router:'/noob/js'},
					{title:"TypeScript",router:'/noob/ts'},
					{title:"npm/node/git",router:'/noob/tool'},
					{title:"主流三大框架",router:'/noob/mainstream'},
					{title:"丰富UI组件库",router:'/noob/ui'},
					{title:"轮子/工具/编辑器",router:'/noob/cli'}
				],
				MiniProgram:[
					{title:"前言",router:'/introduce'}
				],
				Vue:[{title:"前言"}],
				Angular:[{title:"前言"}],
				React:[{title:"前言"}],
				activeIndex:"/noob/introduce"
			}
		},
		computed:{
			triggerNavList:function(){
				return this.$store.getters.triggerNavList;
			},
			navListShow:function(){
				if(this.triggerNavList==1){return this.noob}
				if(this.triggerNavList==2){return this.MiniProgram}
				if(this.triggerNavList==3){return this.Vue}
				if(this.triggerNavList==4){return this.Angular}
				if(this.triggerNavList==5){return this.React}
			}
		},
		created(){
			// this.$router.push(this.activeIndex)
		},
		methods: {
		}
	}
</script>

<style scoped>
	.sidebar{
		width: 100%;
		height: 100%;
		user-select: none;
	}
	.sidebar >>> .el-menu{
		height: 100%;
	}
	.sidebar .menu-list-item{
		width: 200px;
		border-bottom: 1px solid #dbdbdb;
	}
</style>
