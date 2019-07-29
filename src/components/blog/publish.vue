<template>
	<div class="edit_container-box">
		<el-drawer title="博客信息" :before-close="handleClose" :visible.sync="dialog" direction="rtl" custom-class="demo-drawer"
		 ref="drawer">
			<div class="demo-drawer__content">
				<el-form :model="form">
					<el-form-item label="文章标题" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" maxlength="30" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="文章类别" :label-width="formLabelWidth">
						<el-select v-model="form.type" placeholder="请选择文章分类">
							<el-option label="小程序" value="mp"></el-option>
							<el-option label="Vue" value="vue"></el-option>
							<el-option label="Angular" value="angular"></el-option>
							<el-option label="React" value="react"></el-option>
							<el-option label="其他" value="other"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="发布身份" :label-width="formLabelWidth">
						<el-radio-group v-model="form.identity">
							<el-radio label="user">游客发布</el-radio>
							<el-radio label="admin">admin</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="验证身份" :label-width="formLabelWidth" v-if="form.identity==='admin'">
						<el-input type="password" v-model="pass" autocomplete="off" placeholder="请输入管理员密码"></el-input>
					</el-form-item>
					<el-form-item label="文章描述" :label-width="formLabelWidth">
						<el-input type="textarea" v-model="form.desc" maxlength="225" show-word-limit></el-input>
					</el-form-item>
				</el-form>
				<div class="demo-drawer__footer">
					<el-button @click="dialog = false">取 消</el-button>
					<el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '立即发布' }}</el-button>
				</div>
			</div>
		</el-drawer>

		<div class="editor-box">
			<quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
			 @change="onEditorChange($event)">
			</quill-editor>
			<el-button class="btn" type="primary" @click="dialog = true">下一步</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'blog-publish',
		data() {
			return {
				dialog: false,
				content: "",
				editorOption: {
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
							['blockquote', 'code-block'], //引用，代码块
							[{
								'align': []
							}], //对齐方式
							[{
								'header': 1
							}, {
								'header': 2
							}], // 标题，键值对的形式；1、2表示字体大小
							[{
								'list': 'ordered'
							}, {
								'list': 'bullet'
							}], //列表

							[{
								'indent': '-1'
							}, {
								'indent': '+1'
							}], // 缩进
							[{
								'size': ['small', false, 'large', 'huge']
							}], // 字体大小
							[{
								'header': [1, 2, 3, 4, 5, 6, false]
							}], //几级标题
							[{
								'color': []
							}, {
								'background': []
							}], // 字体颜色，字体背景颜色
							[{
								'font': []
							}], //字体
							['image'] //上传图片、上传视频
						]
					},
					theme: 'snow'
				},
				loading: false,
				pass: "",
				form: {
					name: "",
					type: "",
					identity: "user",
					desc: ""
				},
				formLabelWidth: '80px'
			}
		},
		computed: {
			editor() {
				return this.$refs.myQuillEditor.quill;
			},
		},
		methods: {
			onEditorReady(editor) { // 准备编辑器
			},
			onEditorBlur() {}, // 失去焦点事件
			onEditorFocus() {}, // 获得焦点事件
			onEditorChange() {}, // 内容改变事件
			saveHtml: function(event) {
				this.loading = true;
				this.$post("/admin-blogs.json", {
						content: this.content
					}, )
					.then(res => {
						console.log(res)
						this.loading = false;
					})
					.catch(err => {
						console.log(err)
					})
			},
			handleClose(done) {
				this.$confirm('确定要发表吗？')
					.then(_ => {
						this.loading = true;
						this.saveHtml()
					})
					.catch(_ => {});
			},
			saveHtml() {
				let data = {
					name: this.form.name,
					type: this.form.type,
					identity: this.form.identity,
					desc: this.form.desc,
					content: this.content,
					create_time: this.getNowFormatDate()
				}
				this.$post("/admin-blogs.json", data)
					.then(res => {
						this.loading = false;
						this.dialog = false;
						this.$notify({
							title: '成功',
							message: '发表成功,请前往博客查看',
							type: 'success'
						});
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style scoped>
	.edit_container-box {}

	.btn {
		margin-top: 20px;
	}

	.edit_container-box>>>.ql-container.ql-snow {
		min-height: 300px;
	}
</style>
