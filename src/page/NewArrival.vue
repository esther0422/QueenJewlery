<style scoped lang="stylus">
	.newArrival
		margin-top 150px
		.left
			float left
			height 3100px
			width 882px
			.Box
				width 882px
				height 252px
				margin-top 20px
				box-shadow 0 0 6px rgb(204,204,204) 
				>img
					float left
					width 600px
					height 248px
				.content
					float right
					height 248px
					.top
						width 218px
						height 130px
						border-bottom 1px solid rgb(215,215,215)
						margin-left 10px
						>img
							margin-top 36px
							margin-left 36px
						p
							margin 10px 16px
					.below
						margin-top 30px
						a
							display block
							width 250px
							height 40px
							color white
							font-size 18px
							text-align center
							line-height @height
							background-image url("../assets/u12.png")
						p
							font-size 14px
							margin-top 12px
							margin-left 20px
		.right
			float left
			width 278px
			height 1720px
			margin-left 20px
			.box
				margin-top 20px
				width 278px 
				border-left 1px solid rgb(242,242,242)
				border-right 1px solid rgb(242,242,242)
				border-bottom 1px solid rgb(242,242,242)
				&:not(:nth-of-type(1))
					height 448px
				&:nth-of-type(1)
					height 270px
				&:nth-of-type(1)
				&:nth-of-type(2)
					border-top 4px solid 
				&.txt
					>p
						font-size 14px
						margin 16px
					.top
						border-bottom 1px solid rgb(215,215,215)
					>div
						width 248px
						height 84px
						margin-left 16px
						&:nth-of-type(2)
							margin-top 20px
						p
							font-size 14px
							line-height 22px
							&:nth-of-type(1)
								font-size 20px
								margin-top 10px
				&.buy
					background-repeat no-repeat
					img 
						margin 15px
					p
						margin-top 244px
						margin-left 4px
						font-size 15px
						line-height 18px
					span
						display inline-block
						margin-top 20px
						color rgb(134,134,134)
						font-size 14px
						margin-left 6px
						&:nth-of-type(1)
							color black
							font-size 16px
							font-weight bold
						&:nth-of-type(2)
							margin-left 15px
							&:before
								content ""
								display inline-block
								width 24px
								height 20px
								background-image url("../assets/aixin.png")
								background-size 20px 16px
								background-position 50%
								background-repeat no-repeat
						&:nth-of-type(3)
							&:before
								content ""
								display inline-block
								width 24px
								height 20px
								background-image url("../assets/zan.png")
								background-size 20px 16px
								background-position 50%
								background-repeat no-repeat
						&:nth-of-type(4)
							&:before
								content ""
								display inline-block
								width 24px
								height 20px
								background-image url("../assets/mes.png")
								background-size 20px 16px
								background-position 50%
								background-repeat no-repeat
					a
						display block
						width 260px
						height 40px
						color white
						font-size 12px
						font-family "宋体"
						text-align center
						line-height @height
						margin-top 14px
						background-image url("../assets/u43.png")
				
					
				
					
					
</style>
<template>
	<div class="newArrival w1180">
		<div class="left">
			<div class="Box" v-for="box of ArrLeftbox">
				<img :src="box.src" />
				<div class="content">
					<div class="top">
						<img :src="box.logo" />
						<p>{{box.des}}</p>
					</div>
					<div class="below">
						<a href="">我要代言</a>
						<p>{{box.time}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="box txt">
				<p>女王宣言</p>
				<div class="top">
					<p>我是女王我做主!</p>
					<p>我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，</p>
				</div>
				<div>
					<p>我是女王我做主!</p>
					<p>我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，</p>
				</div>
			</div>
			<div class="box buy" v-for="box of arrRightlist" :style="{'background-image':'url('+box.img+')'}">
				<img :src="box.logo" class="logo">
				<p>{{box.txt}}</p>
				<span>{{box.price}}</span>
				<span>{{box.like}}</span>
				<span>{{box.zan}}</span>
				<span>{{box.msg}}</span>
				<a href="">马上购买</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				ArrLeftbox : [
					{
						src : require("../assets/new1.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new2.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new3.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new7.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new5.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new6.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new7.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new8.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new1.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new2.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					},
					{
						src : require("../assets/new3.jpg"),
						logo : require("../assets/symbol.png"),
						des : "Queen Jewelry 新宠",
						time : "距首发结束：12天12小时12分12秒"
					}
				],
				arrRightlist : [
					{
						logo : require("../assets/sign.png"),
						img : require("../assets/rg1.jpg"),
						txt : "某某系列珠宝首饰，采用设计平凡理念打造平凡时尚",
						price : "￥999.00",
						like : "999",
						zan : "99",
						msg : "99"
					},
					{
						logo : require("../assets/sign.png"),
						img : require("../assets/rg2.jpg"),
						txt : "某某系列珠宝首饰，采用设计平凡理念打造平凡时尚",
						price : "￥999.00",
						like : "999",
						zan : "99",
						msg : "99"
					},
					{
						logo : require("../assets/sign.png"),
						img : require("../assets/rg3.jpg"),
						txt : "某某系列珠宝首饰，采用设计平凡理念打造平凡时尚",
						price : "￥999.00",
						like : "999",
						zan : "99",
						msg : "99"
					},
					{
						logo : require("../assets/sign.png"),
						img : require("../assets/rg4.jpg"),
						txt : "某某系列珠宝首饰，采用设计平凡理念打造平凡时尚",
						price : "￥999.00",
						like : "999",
						zan : "99",
						msg : "99"
					},
					{
						logo : require("../assets/sign.png"),
						img : require("../assets/rg1.jpg"),
						txt : "某某系列珠宝首饰，采用设计平凡理念打造平凡时尚",
						price : "￥999.00",
						like : "999",
						zan : "99",
						msg : "99"
					}
				]
			}
		}
	}
</script>