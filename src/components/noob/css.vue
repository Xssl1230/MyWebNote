<template>
	<div class="css">
		<p>常用css</p>
		<Explain :explain="cssData"></Explain>
	</div>
</template>

<script>
	import Explain from '@components/explain'
	export default{
		name:"noob-css",
		components:{
			Explain
		},
		data(){
			return{
				cssData:[
					{
						id:"mouse",
						title:"鼠标移上去变小手",
						answers:[
							"cursor:pointer;"
						]
					},
					{
						id:"",
						title:"flex布局",
						answers:[
							"justify-content: center;  //横轴位置，居中",
							"justify-content: space-between;  //横轴位置，两边",
							"align-items: center;  //纵轴位置，居中"
						]
					},
					{
						id:"",
						title:"pc站整体缩放",
						answers:[
							"<meta name='viewport' content='width=device-width, initial-scale=0,user-scalable=no,maximum-scale=1.0'  //移动端展示缩放后"
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
	.title{
		color: #409EFF;
	}
	.answer{
		text-indent: 2rem;
		padding:5px 0;
	}
	.mouse{
		padding: 10px 0;
		border-bottom: 1px solid #dbdbdb;
	}
	span{
		display: flex;
		
		align-items: center;
		justify-content: space-between;
	}
</style>
