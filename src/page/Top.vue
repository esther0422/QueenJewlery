<style scoped lang="stylus">
	.QueenTop
		position relative
		height 1250px
		margin-top 200px
		.queenList
			float left
			margin-left 20px
			.circle
				margin-top 24px
				width 216px
				height @width
				border-radius 50%
			span
				display inline-block
				margin-top 20px	
				margin-left 20px
				&:nth-of-type(2)
					font-size 12px
					&:before
						content ""
						display inline-block
						width 16px
						height 16px
						margin-right 10px
						background-image url("../assets/love.png")
						background-position 50%
		.page
			width 540px
			height 50px
			float right
			margin-top 40px
			span
				margin-left 10px
				font-size 14px
			a
				display inline-block
				border 1px solid rgb(215,215,215)
				text-align center
				padding 8px 10px
				margin-left 16px 
				font-size 12px
				&.current
					background-color rgb(215,215,215)		
</style>
<template>
	<div class="w1180 QueenTop">
		<h2>我是女王 ！</h2>
		<div class="queenList" v-for="queen of arrQueens">
			<div class="circle" :style="{'background-image':'url(' + queen.src + ')'}"></div>
			<span>{{queen.name}}</span>
			<span>{{queen.like}}</span>
		</div>
		<div class="page">
			<span>99条记录</span>
			<span>1/9页</span>
			<a class="num" v-for="item of arrPage" :class="{'current' : item.currentIndex }" @click="handleClick">{{item.page}}</a>
			<a href="">下一页 ></a>
			<a href="" >尾页</a>
		</div>
	</div>	
</template>
<script>
	export default {
		methods : {
			handleClick : function(index){
				let i = 0;
				for(; i < this.arrPage.length; i++){
					this.arrPage[i].currentIndex = "";
				}
				console.log(this)
			}
		},
		data(){
			return {
				
				arrPage : [
					{
						page : "1",
						currentIndex : "0"
					},
					{
						page : "2",
						currentIndex : ""
					},
					{
						page : "3",
						currentIndex : ""
					},
					{
						page : "4",
						currentIndex : ""
					},
					{
						page : "5",
						currentIndex : ""
					}
				],
				arrQueens :[
					{
						src :require("../assets/queen1.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen2.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen3.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen4.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen5.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen6.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen7.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen8.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen9.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen1.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen2.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen3.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen4.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen5.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen7.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen6.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen8.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen9.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen1.png"),
						name : "QueenJewelry",
						like : "999"
					},
					{
						src :require("../assets/queen2.png"),
						name : "QueenJewelry",
						like : "999"
					}
				]
			}
		}
	}
</script>