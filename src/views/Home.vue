<template>
	<div class="home">
		<div class="header-nav-container">
			<header-nav></header-nav>
		</div>
		<div class="content-contianer">
			<div class="sidebar-nav-container">
				<sidebar-nav></sidebar-nav>
			</div>
			<div class="router-view-container">
				<router-view></router-view>
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
		}
	}
</script>
<style scoped>
	.home{
		width: 100%;
		height: 100%;
	}
	.home .content-contianer{
		height:calc(100% - 62px) ;
		padding-top: 3px;
		display: flex;
		box-sizing: border-box;
	}
	.content-contianer.sidebar-nav-container{
		max-width: 200px;
		height: 100%;
		
	}
	.content-contianer .router-view-container{
		flex: 1;
		height: 100%;
		box-sizing: border-box;
		padding: 20px;
	}
</style>