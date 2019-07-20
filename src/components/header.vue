<template>
	<div class="header">
		<div class="logo">
			<img src="@assets/logo.png" width="46" alt="logo">
			<p class="title">web前端 丨 笔记 <span class="tip">Mr Hua &nbsp;&nbsp;tip:备忘/随心记</span></p>
		</div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">菜鸟上路</el-menu-item>
			<el-menu-item index="2">小程序</el-menu-item>
			<el-menu-item index="3">Vue</el-menu-item>
			<el-menu-item index="4">Angular</el-menu-item>
			<el-menu-item index="5" disabled>React</el-menu-item>
			<el-menu-item index="6">关于前端笔记</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
				this.$store.commit("setNavList",key)
				
			}
		},
		created(){
			this.activeIndex = this.$store.state.triggerNavList
		}
	}
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 1000px;
		padding: 0 20px 0 40px;
		box-shadow: 0 2px 2px #e5e5e5;
	}

	.header .logo {
		/* min-width: 600px; */
		display: flex;
		align-items: center;
	}

	.header .logo .title {
		font-size: 26px;
		padding: 0 16px;
	}

	.header .logo .title .tip {
		font-size: 10px;
	}

	.header .el-menu-demo {
		min-width: 400px;
		user-select: none;
	}

	.header>>>.el-menu.el-menu--horizontal {
		border: none;
	}
</style>
