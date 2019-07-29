<template>
	<div class="home">
		<div class="header-nav-container">
			<header-nav></header-nav>
		</div>
		<div class="content-contianer">
			<div class="sidebar-nav-container" v-if="showOnce">
				<sidebar-nav></sidebar-nav>
			</div>
			<div class="router-view-container">
				<el-scrollbar style="height: 100%;">
					<router-view style="padding: 20px;"></router-view>
				</el-scrollbar>
			</div>
		</div>
	</div>
</template>

<script>
	import headerNav from '../components/header.vue'
	import sidebarNav from '../components/sidebar.vue'
	export default {
		name: 'home',
		components: {
			headerNav,
			sidebarNav
		},
		computed:{
			showOnce:function(){
				return this.$store.getters.triggerNavListKey
			}
		}
	}
</script>

<style scoped>
	.home {
		width: 100%;
		height: 100%;
	}

	.home .content-contianer {
		width: 100%;
		height: calc(100% - 62px);
		padding-top: 3px;
		display: flex;
		box-sizing: border-box;
	}

	.content-contianer.sidebar-nav-container {
		max-width: 200px;
		height: 100%;
	}

	.content-contianer .router-view-container {
		flex: 1;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		min-width: 880px;
		overflow: hidden;
	}
	.home >>> .el-scrollbar__wrap {
		overflow-x: hidden !important;
	}
</style>
