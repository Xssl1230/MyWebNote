<template>
	<div class="introduce">
		<div class="saysay">
			<div class="info">
				<p class="title">前端开发(web前端开发)</p>
				<p class="p">前端开发是创建Web页面或app等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互!</p>
				<p class="p">掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。因此，它是目前网络上应用最为广泛的语言，也是构成网页文档的主要语言，学好HTML是成为Web开发人员的基本条件。</p>
				<p class="p">HTML是一种标记语言，能够实现Web页面并在浏览器中显示。HTML5作为HTML的最新版本，引入了多项新技术，大大增强了对于应用的支持能力，使得Web技术不再局限于呈现网页内容。</p>
				<p class="p">学好CSS是网页外观的重要一点，CSS可以帮助把网页外观做得更加美观。</p>
				<p class="p">学习JavaScript的基本语法，以及如何使用JavaScript编程将会提高开发人员的个人技能。</p>
				<p class="p">使用框架开发web，可以加快Web开发速度，节约时间。</p>
			</div>
			<img src="@assets/logo.jpg" class="img" alt="logo">
		</div>
	</div>
</template>

<script>
	export default{
		name:"introduce"
	}
</script>

<style scoped>
	.saysay{
		display: flex;
		padding-top:50px;
		justify-content: space-between;
	}
	.saysay .p{text-indent: 2rem;line-height: 30px;}
	.saysay .info{flex:1;}
	.saysay .info .title{text-align: center;font-size: 24px;padding-bottom: 20px;}
	.saysay .img{width: 480px;}
</style>
