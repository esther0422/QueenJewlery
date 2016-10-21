<style scoped lang="stylus">
	.brand
		margin-top 150px
		height 3900px
	.main
		margin-top 50px
		.left
			float left
			height 3500px
			.box
				margin-top 20px
				width 220px
				height 330px
				background-size 100% 100%
				background-repeat no-repeat
				.logo
					margin 100px 34px 30px 34px
				>p
					margin-left 64px
					font-size 24px
					color rgb(215,215,215)
					font-weight bold
		.right
			float left
			margin-left 20px
			>div
				position relative
				height 312px
				.more 
					position absolute
					top -30px
					left 822px
					display inline-block
					color white
					text-align center
					line-height 24px
					font-size 12px
					&:nth-of-type(1)
						width 82px
						height 24px
						background-color rgb(121,121,121)
					&:nth-of-type(2)
						left 904px
						width 24px
						height 24px
						background-color rgb(161,161,161)
				.row
					position relative
					margin-top 40px
					width 929px
					height 290px
					border-top 2px solid
					.box
						float left
						width 215px
						height 290px
						border 1px solid rgb(215,215,215)
						&:not(:nth-of-type(1))
							margin-left 20px
						img
							width 200px
							height 200px
							margin 8px
						>span
							&:nth-of-type(1)
								margin-left 10px
							&:nth-of-type(2)
								margin-left 50px	
						>div
							margin-left 30px
							span
								display inline-block
								margin-top 20px
								color rgb(134,134,134)
								font-size 14px
								margin-left 6px
								&:nth-of-type(1)
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
								&:nth-of-type(2)
									&:before
										content ""
										display inline-block
										width 24px
										height 20px
										background-image url("../assets/zan.png")
										background-size 20px 16px
										background-position 50%
										background-repeat no-repeat
								&:nth-of-type(3)
									&:before
										content ""
										display inline-block
										width 24px
										height 20px
										background-image url("../assets/mes.png")
										background-size 20px 16px
										background-position 50%
										background-repeat no-repeat
</style>
<template>
	<div class="brand">
		<banner :data="arrBanner"></banner>
		<div class="main w1180">
			<div class="left">
				<div class="box" v-for="img of arrlogoImg" :style="{'background-image':'url('+img.url+')'}">
					<img :src="img.src" class="logo" />
					<p>{{img.txt}}</p>
				</div>
			</div>
			<div class="right">
				<div v-for="box of arrRightBox">
					<a href="" class="more">了解更多</a>
					<a href="" class="more">>></a>
					<div class="row" >
						<div class="box" v-for="img of box.img">
							<img :src="img.src" />
							<span>{{img.brand}}</span>
							<span>{{img.price}}</span>
							<div>
								<span>{{img.like}}</span>
								<span>{{img.zan}}</span>
								<span>{{img.msg}}</span>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from "../components/Banner"
	export default {
		components : {
			Banner
		},
		data(){
			return {
				arrBanner : [
					{
						name : "图片1",
						src : require("../assets/u28_state0.jpg")
					},
					{
						name : "图片2",
						src : require("../assets/u28_state1.jpg")
					},
					{
						name : "图片3",
						src : require("../assets/u28_state2.jpg")
					},
					{
						name : "图片4",
						src : require("../assets/u28_state3.jpg")
					}
					 
				],
				arrlogoImg :[
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					},
					{
						url : require("../assets/u6.png"),
						src : require("../assets/graylogo.png"),
						txt : "女王珠宝"
					}
				],
				arrRightBox : [
					{
						
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
						
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
						
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
					
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
						
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
			
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
				
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
				
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
						
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					},
					{
					
						img : [
							{
								src : require("../assets/rg1.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u22.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u30.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							},
							{
								src : require("../assets/product_u38.jpg"),
								brand : "QueenJewelry",
								price : "￥99",
								like : "999",
								zan : "99",
								msg : "99"
							}
						]
					}
				]
			}
		}
	} 
</script>