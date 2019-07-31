<template>
	<div class="admin">
		<div class="article" v-show="showReadAll">
			<el-page-header @back="goBack" content="详情页面">
			</el-page-header>
			<div class="ql-editor" v-html="content"></div>
		</div>
		
		<div class="blog-item" v-for="(value, key, index) in blogs" v-show="!showReadAll">
			<p class="blog-title" @click="readAll(value.content)">{{value.name}}</p>
			<div class="item-content">
				<p>{{value.desc}}<el-button type="text" class="btn" @click="readAll(value.content)">阅读全文</el-button></p>
			</div>
			<div class="item-footer">
				<span>作者：{{value.identity}}</span>
				<span class="time">发布日期：{{value.create_time}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "blog-admin",
		data() {
			return {
				blogs: {},
				content: "",
				showReadAll:false
			}
		},
		methods: {
			getAdminBlog() {
				this.$get("/admin-blogs.json")
					.then(res => {
						this.blogs = res;
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
			},
			readAll(content) {
				this.showReadAll = true
				this.content = content
			},
			goBack(){
				this.showReadAll = false
			}
		},
		created() {
			this.getAdminBlog();
		}

	}
</script>

<style scoped>
	.item-footer {
		/* display: flex; */
		text-align: right;
		/* justify-content: space-between; */
	}

	.item-footer .time {
		padding: 0 20px;
	}

	.blog-item {
		padding: 16px 0;
		border-bottom: 1px solid #dbdbdb;
	}
	.blog-title{
		padding: 10px 0;
		color: #390;
	}
	.blog-title:hover{
		color: red;
	}
</style>
