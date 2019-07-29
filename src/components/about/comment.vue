<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="你的代号">
				<el-input v-model="form.name" maxlength="4" show-word-limit></el-input>
			</el-form-item>
			<el-form-item label="标题">
				<el-input v-model="form.title" maxlength="25" show-word-limit></el-input>
			</el-form-item>
			<el-form-item label="详细内容">
				<el-input type="textarea" v-model="form.desc" maxlength="150" show-word-limit></el-input>
			</el-form-item>
			<el-form-item>
				<el-button v-rainbow @click="onSubmit" :loading="loading">立即发布</el-button>
			</el-form-item>
		</el-form>
		<div class="line"></div>
		<div class="content">
			<div class="comment-item" v-for="(item,index) in commentList" :key="index">
				<div class="name" v-rainbow>{{item.name}}</div>
				<div class="comment-info">
					<p class="title">{{item.title}}</p>
					<div class="desc">
						<p class="content">{{item.desc}}</p>
						<el-button type="text" v-if="index === commentList.length-1" @click="nextPage()">加载更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "about-comment",
		data() {
			return {
				form: {
					name: "",
					title: "",
					desc: ""
				},
				commentList: [],
				loading: false
			}
		},
		methods: {
			onSubmit() {
				this.loading = true;
				this.$post("/comment.json", this.form)
					.then(res => {
						// console.log(res)
						this.loading = false;
						this.getComments();
					})
					.catch(err => {
						console.log(err)
					})
			},
			getComments() {
				this.form.title = "";
				this.form.desc = "";
				this.$get("/comment.json", this.comments)
					.then(res => {
						let result = []

						for (let key in res) {
							result.push(res[key])
						}
						this.commentList = result.reverse()
					})
					.catch(err => {
						console.log(err)
					})
			},
			nextPage() {
				this.$notify.info({
					title: '消息',
					message: '功能持续完善中...'
				});
			}
		},
		created() {
			this.getComments()
		}
	}
</script>

<style scoped>
	.content .comment-item {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dbdbdb;
		padding: 8px 0;
	}

	.content .comment-item .name {
		width: 80px;
		height: 80px;
		border-radius: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #dbdbdb;
	}

	.content .comment-item .comment-info {
		width: calc(100% - 100px);
	}

	.content .comment-item .comment-info .title {
		color: #333;
		font-size: 18px;
		padding: 0 0 10px 14px;
		text-indent: 2rem;
	}

	.content .comment-item .comment-info .desc {
		color: #909399;
		padding: 0 0 10px 14px;
		width: 100%;
		display: flex;

		justify-content: space-between;
	}

	.content .comment-item .comment-info .desc .content {
		text-indent: 2rem;
		line-height: 30px;
	}
</style>
