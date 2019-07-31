<template>
	<div class="noob-ts">
		<p class="title">Typescript 介绍</p>
		<p class="pp">1. TypeScript 是由微软开发的一款开源的编程语言。</p>
		<p class="pp">2. TypeScript 更像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。</p>
		<p class="pp">3. TypeScript 是 Javascript 的超级，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript 的语法。</p>
		<p class="pp">4.谷歌也在大力支持 Typescript 的推广，谷歌的 angular2.x+就是基于 Typescript 语法。</p>
		<p class="pp">5.最新的 Vue 、React 也可以集成 TypeScript</p>
		
		<Explain :menus="menu" :explain="explain"></Explain>
	</div>
</template>

<script>
	import Explain from '@components/explain'
	export default{
		name:"noob-ts",
		components: {
			Explain
		},
		data(){
			return{
				menu:[
					{href:"#href_angular_cmd",title:"配置"},
					{href:"#href_angular_cmd",title:"数据类型"},
					{href:"#href_angular_cmd",title:"函数"},
					{href:"#href_angular_cmd",title:"类"},
				],
				explain:[
					{
						id:"href_angular_cmd",
						title:"配置",
						answers:[
							{
								subtitle:"1.使用ts",
								data:[
									"由于ts不能直接被浏览器识别包括js最新版本，语法等都需要编译",
									"全局首次安装：npm install -g typescript",
									"编译命令：tsc helloworld.ts",
									"此时，写的.ts文件用编译命令后就会编译出相应的js文件",
									"如果ts是在脚手架(cli)等已经有了内嵌编译工具无需手动命令，如webpack等"
								]
							},
							{
								subtitle:"2.如何在编辑器中使用",
								data:[
									"如Vscode，其他编辑器自行搜索",
									"(1) 创建 tsconfig.json 文件 tsc --init 生成配置文件",
									"(2) 配置文件中的 outDir 是输出目录，就是编译后生成js文件的目录",
									"(3) 点击菜单 找到点击运行任务 点击 tsc:监视-tsconfig.json 然后就可以自动生成代码了"
								]
							}
						]
					},
					{
						id:"href_outer",
						title:"数据类型",
						answers:[
							{
								subtitle:"类型",
								data:[
									"布尔类型，数字类型，字符串类型，数组类型，元组类型，枚举类型，任意类型，null和undefined，void类型，never类型"
								]
							},
							{
								subtitle:"布尔类型(boolean)",
								data:[
									"声明：var flag:boolean=true"
								]
							},
							{
								subtitle:"数字类型(number)",
								data:[
									"声明：var num:number=123"
								]
							},
							{
								subtitle:"字符串类型(string)",
								data:[
									"声明：var str:string='str'"
								]
							},
							{
								subtitle:"数组类型(array)",
								data:[
									"声明1：var arr1:number[]=[1,2,3]",
									"声明2：var arr2:Array<number>=[1,2,3]",
								]
							},
							{
								subtitle:"元祖类型(tuple) 属于数组的一种",
								data:[
									"声明：let arr:[number,string]=[123, 'str']",
								]
							},
							{
								subtitle:"枚举类型(enum)",
								data:[
									"事先考虑到某一个变量可能取的值，尽量用自然语言中含义清楚的单词来表示它每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型",
									"一般用来表示状态码",
									"声明：enum Flag {success=1, error=2}",
									"声明：enum Color {red, blue}",
									"如果标识符没有赋值，那么它的值就是下标"
								]
							},
							{
								subtitle:"任意类型(any)",
								data:[
									"什么值都可以",
									"声明：let unknown:any"
								]
							},
							{
								subtitle:"null和undefined (never类型)的子类型",
							},
							{
								subtitle:"void类型：表示没有任何类型",
								data:[
									"一般用于定义方法的时候，方法没有返回值",
									"声明：function run():void{}",
									"反之：有返回值 function run():number{return 123}"
								]
							},
							{
								subtitle:"nerver类型：是其他类型",
								data:[
									"包括 null和 undefined的子类型，代表从不会出现的值，这就意味着声明nerver的变量只能被nerver类型所赋值",
									"var a:undefined; a的值只能被undefined赋值",
									"var b:null; b的值只能被null赋值",
									"从不会出现的值，很少用到，可以用any代替"
								]
							}
							
						]
					},
					{
						id:"href_angular_cmd",
						title:"函数",
						answers:[
							{
								subtitle:"1.定义函数",
								data:[
									"声明(1)：function run():string{return 'run'}",
									"声明(2)：var fun2=function():number{return 213}"
								]
							},
							{
								subtitle:"2.定义函数传参",
								data:[
									"声明(1)：function getInfo(name:string, age:number):string{return `${name},${age}`}",
									"声明(2)：var fun2=function(name:string, age:number):string{return `${name},${age}`}",
									"可选参数，age可传可不传：var fun2=function(name:string, age?:number):string{return `${name}`}",
									"默认参数，age可不传：var fun2=function(name:string, age:number=26):string{return `${name}`}",
									"剩余参数，无限参数：",
									"function sum(...result: number[ ]):number{ //遍历result }",
									"function sum(a: number,...result: number[]): number{ //第n1参数已知，遍历result }",
									"函数重c载 ：java中的方法的重载是指两个或者两个以上的同名函数，但是它们的参数不一样，这时会出现函数重载的情况",
									"es5中出现同名方法，下面方法直接覆盖上面的方法",
									"typescript中的重载通过同一个函数提供多个函数类型定义来试下多功能的目的",
									"总之，和java中重载没有什么关系，ts实现重载就是判断参数的数据类型，来做不同的逻辑，下例",
									"function getInfo(age:number):string;",
									"function getInfo(age:string):string;",
									"function getInfo(str: any): any { //判断参数的数据类型处理不同的逻辑 }",
									"箭头函数，优点：代码精简，解决了es5指针指向问题，现指向上下文，详见javascript的介绍"
								]
							},
						
						]
					},
					{
						id:"href_angular_cmd",
						title:"ES5类",
						answers:[
							{
								subtitle:"类的作用",
								data:[
									"es5的类就是个方法，通过new实例出一个对象",
									"function Person( ) {this.name = '张三';this.age = 20}",
									"var p = new Person( )  // p={name:'张三',age:20}"
								]
							},
							{
								subtitle:"构造函数和原型链里面增加方法",
								data:[
									"可以直接在构造函数内，添加function 调用内部参数",
									"Person(this.getName=xxx),构造函数首字母一般规定大写",
									"也可以通过原型链添加属性和方法",
									"Person.prototype.getName = xxx ",
									"原型链上面的属性会被多个实例共享，构造函数不会"									
								]
							},
							{
								subtitle:"类里面静态方法",
								data:[
									"new出来的是实例方法",
									"Person.getName = function(){}  //这就是类的静态方法"							
								]
							},
							{
								subtitle:"es5的继承",
								data:[
									"原型链，对象冒充 或者 原型链+对象冒充的组合继承模式(推荐)",
									"1.对象冒充实现继承 ：function Web(){ Person.call(this) } //此时可以new Web实例出来使用Person的属性和方法",
									"对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链上属性和方法",
									"2.原型链实现继承 ：Web.prototype=new Person(); //既可以继承构造函数也可以继承原型链上的属性和方法",
									"但是实例化子类的时候，无法给父类传参",
									"3.原型链+对象冒充的组合继承模式 function Web(name,age){ Person.call(this,name,age) } Web.prototype=new Person()",
									"实例化 var w = new Web('张三',20)  w.run()  //这样既能传参，又能访问父类属性和方法"
									
								]
							}
							
						]

					},
					{
						id:"href_angular_cmd",
						title:"TS类",
						answers:[
							{
								subtitle:"类写法",
								data:[
									"class Person{ name:string //属性，前面省略了public关键词     constructor(n:string){  this.name=n //构造函数，实例化的时候触发的方法 } run():void{ } }",
									"使用 var p = new Person('张三')"
								]
							},
							{
								subtitle:"类继承 extends，super",
								data:[
									"class Web exteds Person{ constructor(name:string){ super(name)//初始化父类的构造函数 } }"
								]
							},
							{
								subtitle:"继承的探讨",
								data:[
									"继承父类的方法，也可以写自己的方法，要是方法和父类中方法名相同，会覆盖父类中的方法"
								]
							},
							{
								subtitle:"类里面的修饰符 3种： public，protected，private",
								data:[
									"属性不加修饰符，默认public，所谓的外面访问就是实力化后的访问，子类访问是继承来的",
									"1.public：公有，在类里面，子类，类外面都可以访问",
									"2.protected：保护类型，在类里面，子类可以访问，类外部不可以访问",
									"3.private：在类里面可以访问，在子类和类外面不可以访问"
								]
							}
						],
					}
				]
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 16px;
		font-weight: bold;
		padding: 6px 0;
	}
	.pp{
		padding: 5px 0;
		text-indent: 2rem;
	}
</style>
