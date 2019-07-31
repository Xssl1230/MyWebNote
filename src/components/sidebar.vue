<template>
	<div class="sidebar">
		<el-menu class="el-menu-vertical-demo" :default-active="navListShow[selectKey].selectRouter" router @select="handleSelect">
			<el-menu-item class="menu-list-item" v-for="item in navListShow[selectKey].data" :index="item.router">
				<i class="el-icon-s-platform" :class="navListShow[selectKey].selectRouter === item.router ? 'is-active' : '' "></i>
				<span slot="title" :class="navListShow[selectKey].selectRouter === item.router ? 'is-active' : '' ">{{item.title}}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		computed: {
			selectKey: function() {
				return this.$store.getters.triggerNavListKey
			}
		},
		watch:{
			selectKey(key){
				this.$router.push(this.navListShow[this.selectKey].selectRouter)
			}
		},
		created(){
			this.$router.push(this.navListShow[this.selectKey].selectRouter)
		},
		data() {
			return {
				navListShow: {
					noob: {
						selectRouter: "/noob/start",
						data: [{
								title: "新手上路",
								router: '/noob/start'
							},
							{
								title: "学习路线",
								router: '/noob/path'
							},
							{
								title: "CSS",
								router: '/noob/css'
							},
							{
								title: "JavaScript",
								router: '/noob/js'
							},
							{
								title: "TypeScript",
								router: '/noob/ts'
							},
						]

					},
					Vue:{
						selectRouter: "/vue/started",
						data: [
								{
									title: "起步",
									router: '/vue/started'
								},
								{
									title: "学习路线",
									router: '/vue/path'
								},
						]
					},
					Angular:{
						selectRouter: "/angular/started",
						data: [
								{
									title: "起步",
									router: '/angular/started'
								},
								{
									title: "学习路线",
									router: '/angular/path'
								},
								{
									title: "必会基础",
									router: '/angular/basics'
								}
						]
					},
					MiniProgram:{
						selectRouter: "/xcx/started",
						data: [
								{
									title: "起步",
									router: '/xcx/started'
								},
								{
									title: "学习路线",
									router: '/xcx/path'
								},
						]
					},
					blog: {
						selectRouter: "/blog/admin",
					
						data: [
							{
								title: "博客",
								router: '/blog/admin'
							},
							{
								title: "博客(游客)",
								router: '/blog/tourist'
							},
							{
								title: "写博客",
								router: '/blog/publish'
							}
							
						]
					
					
					},
					about: {
						selectRouter: "/about/contact",

						data: [{
								title: "留言板",
								router: '/about/comment'
							},
							{
								title: "联系作者",
								router: '/about/contact'
							},
							{
								title: "我的收藏",
								router: '/about/about'
							},
						]


					}

				}
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				this.navListShow[this.selectKey].selectRouter = key
				this.$router.push(key)
			}
		}

	}
</script>

<style scoped>
	.sidebar {
		width: 100%;
		height: 100%;
		user-select: none;
	}

	.sidebar>>>.el-menu {
		height: 100%;
	}

	.sidebar .menu-list-item {
		width: 200px;
		border-bottom: 1px solid #dbdbdb;
	}

</style>
<style>
	.sidebar .is-active{
		color: #409eff !important;
	}
</style>