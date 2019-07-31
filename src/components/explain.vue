<template>
	<div class="explain">
		
		<div class="menu">
			<a class="nav" :href="nav.href" v-for="nav in menus">{{nav.title}}</a>
		</div>
		
		<div class="content">
			<div class="mouse" :id="item.id" v-for="item in explain">
				<p class="title">{{item.title}}</p>
				<div class="answer">

					<div v-for="desc in item.answers" class="answer">
						<p v-if="desc.subtitle" class="subtitle">{{desc.subtitle}}</p>
						<p v-for="dd in desc.data" v-if="desc.subtitle" class="classification">{{dd}}</p>
						<p v-if="!desc.subtitle">{{desc}}</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			menus:Array,
			explain:Array
		}

	}
</script>

<style scoped>
	.menu{
		padding:20px 0 ;
		margin: 10px 0;
		border: 1px solid #dbdbdb;
	}
	.title{
		color: #000;
	}
	.answer{
		text-indent: 2rem;
		padding:5px 0;
		color: rgba(0,0,0,.75);
	}
	.mouse{
		padding: 10px 0;
		border-bottom: 1px solid #dbdbdb;
	}
	.nav{
		font-size: 16px;
		color: #409EFF;
		padding: 10px;
		cursor:pointer; 
		text-decoration: none;
	}
	.classification{
		text-indent: 4rem;
		padding: 6px 0;
	}
	.subtitle{color: #000;padding: 5px 0 8px;}
</style>
