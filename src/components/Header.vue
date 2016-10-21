<style scoped lang="stylus">
	.header
		height 30px
		background-color rgb(242,242,242)
	.phone
		float left
		font-size 14px
		line-height 30px
	.nav-right
		float left
		line-height 30px
		margin-left 780px	
		a 
			font-size 14px
			height 14px
			padding 0 10px
			border-right 1px solid
			&:last-child
				border-right none
	.searcher
		height 110px
		.logo
			float left
			width 200px
			height 110px
			line-height 110px
			.left
				float left
				width 110px
				height 110px
				line-height 110px
				img 
					width 98px
					height 34px
			.right
				position relative
				float left
				width 70px
				height 60px
				line-height 90px
				margin-left -2px
				font-size 14px
				&:hover .logoBox
					display block 
				.logoBox
					position absolute
					z-index 20
					top 60px
					left 0px
					height 150px
					background-color white
					border 1px solid rgb(188,188,188)
					display none
					ul
						margin-top 10px
						width 490px
						height 20px
						&:first-child
							margin-top 20px
						li
							float left
							font-size 14px
							margin-left 10px
							line-height 20px
							a
								width 40px
								height 20px	
								padding 0 5px
		.searchBar
			float left 
			position relative
			width 560px
			line-height 100px
			margin-left 130px
			input
				outline medium
				width 500px 
				height 38px
				border 1px solid rgb(228,228,228)
				color rgb(188,188,188)
				padding-left 14px
				font-size 14px
			.lab
				position absolute
				top 44px
				left 290px
				font-size 13px
				a
					margin-left 4px
					padding 0 4px
					color rgb(110,102,119)
					background-color rgb(243,243,243)
			.look
				position absolute
				top 31px
				left 514px
				width 40px
				height 38px
				border 1px solid rgb(228,228,228)
				background-image url("../assets/search.png")
				background-repeat no-repeat
				background-size 22px 22px
				background-position 50% 50%
		.myBox
			float left
			width 130px
			height 38px
			border 1px solid rgb(228,228,228)
			text-align center
			line-height 40px
			margin-left 16px
			margin-top 31px
			font-size 14px
		.wechat
			float left 
			width 80px
			height 90px
			background-image url("../assets/wechat.png")
			background-size 70px 70px
			background-repeat no-repeat	
			margin-top 10px
			margin-left 50px
			p
				margin-top 74px	
				font-size 14px
				margin-left 6px
	.nav
		width 100%
		height 40px
		background-color rgb(188,188,188)
		margin-top 30px
		.allProducts
			float left
			width 180px
			height 40px
			background-color rgb(174,174,174)
			background-image url("../assets/allproducts.png")
			background-repeat no-repeat
			background-position 14px 50%
			&:hover .productsBox
				display block
			span
				line-height 40px
				margin-left 56px
				font-size 15px
			img
				margin-left 24px
			.productsBox
				position absolute
				z-index 10
				width 178px
				height 430px
				background-color white
				border 1px solid rgb(204,204,204)
				display none
				.product
					height 50px
					margin-top 20px
					margin-left 20px
					strong
						font-size 15px
					ul
						margin-top 15px
						li 
							float left
							height 20px
							a
								font-size 13px
								padding-right 16px
		.items
			float left
			width 684px
			height 40px
			margin-left 18px
			a
				display inline-block
				height 40px
				font-size 13px
				padding 0 26px	
				overflow hidden	
				line-height 40px	
				
</style>
<template>
	<div class="header">
		<div class="w1180">
			<div class="phone">热线电话:12345678912</div>
			<div class="nav-right">
				<a v-for="anchor of arrHeaderlist" :href="anchor.href">{{anchor.name}}</a>
			</div>
		</div>
		<div class="searcher w1180">
			<div class="logo">
				<div class="left">
					<img src="../assets/logo.png" alt="">	
				</div>	
				<div class="right">
					<div class="logoBox">
							<ul v-for="list of arrProlist">
								<li>{{list.name}}</li>
								<li v-for="anchor of list.anchor">
									<a :href="anchor.href">{{anchor.name}}</a>
								</li>
							</ul>
						</div>
					<span>广东</span>
					<img src="../assets/check.png" class="cli">	
				</div>
			</div>
			<div class="searchBar">
				<input type="text" placeholder ="搜索您需要的关键词">
				<div class="lab">
					<a href="">QueenJewelry</a>
					<a href="">钻戒</a>
					<a href="">铂金对戒</a>
				</div>
				<div class="look"></div>
			</div>
			<div class="myBox">
				<span>我的首饰盒</span><span><img src="../assets/mybox.png" alt=""></span>
			</div>
			<div class="wechat">
				<p>关注微信</p>
			</div>	
		</div>
		<div class="nav">
			<div class="w1180">
				<div class="allProducts">
					<span>全部商品</span>
					<img src="../assets/JT.png">
					<div class="productsBox">
						<div class="product" v-for="list of arrProductsName">
							<strong>{{list.name}}</strong>
							<ul>
							<li v-for="anchor of list.anchor">
								<a :href="anchor.href">{{anchor.name}}</a>
							</li>
						</ul>
						</div>
						
					</div>
				</div>
				<div class="items">
					<router-link v-for="anchor of arrNavlist" :to="anchor.href">{{anchor.name}}</router-link>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrHeaderlist : [
					{
						name : "登陆",
						href : "/loading"
					},
					{
						name : "注册",
						href : "/sign"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "女王帮助",
						href : "/help"
					},
				],
				arrNavlist : [
					{
						name : "首页",
						href : "/"
					},
					{
						name : "品牌首发",
						href : "/newArrival"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "为我代言",
						href : "/represent"
					},
					{
						name : "创意申请",
						href : "/apply"
					},
					{
						name : "活动",
						href : "/activity"
					},
				],
				arrProlist : [
					{
						name : "A-G",
						anchor : [
							{
								name : "北京",
								anchor : "/beijing"
							},
							{
								name : "安徽",
								anchor : "/anhui"
							},
							{
								name : "重庆",
								anchor : "/chongqing"
							},
							{
								name : "福建",
								anchor : "/fujian"
							},
							{
								name : "广东",
								anchor : "/guangdong"
							},
							{
								name : "广西",
								anchor : "/guangxi"
							},
							{
								name : "甘肃",
								anchor : "/gansu"
							},
							{
								name : "贵州",
								anchor : "/guizhou"
							}
						]
					},
					{
						name : "H-J",
						anchor : [
							{
								name : "河北",
								anchor : "/beijing"
							},
							{
								name : "河南",
								anchor : "/anhui"
							},
							{
								name : "海南",
								anchor : "/chongqing"
							},
							{
								name : "湖北",
								anchor : "/fujian"
							},
							{
								name : "湖南",
								anchor : "/guangdong"
							},
							{
								name : "黑龙江",
								anchor : "/guangxi"
							},
							{
								name : "吉林",
								anchor : "/gansu"
							},
							{
								name : "江苏",
								anchor : "/guizhou"
							},
							{
								name : "江西",
								anchor : "/guizhou"
							}
						]
					},
					{
						name : "L-S",
						anchor : [
							{
								name : "辽宁",
								anchor : "/beijing"
							},
							{
								name : "内蒙古",
								anchor : "/anhui"
							},
							{
								name : "宁夏",
								anchor : "/chongqing"
							},
							{
								name : "青海",
								anchor : "/fujian"
							},
							{
								name : "上海",
								anchor : "/guangdong"
							},
							{
								name : "四川",
								anchor : "/guangxi"
							},
							{
								name : "山东",
								anchor : "/gansu"
							},
							{
								name : "山西",
								anchor : "/guizhou"
							},
							{
								name : "陕西",
								anchor : "/gansu"
							}
						]
					}, 
					{
						name : "T-Z",
						anchor : [
							{
								name : "天津",
								anchor : "/beijing"
							},
							{
								name : "新疆",
								anchor : "/anhui"
							},
							{
								name : "西藏",
								anchor : "/chongqing"
							},
							{
								name : "云南",
								anchor : "/fujian"
							},
							{
								name : "浙江",
								anchor : "/guangdong"
							}
						]
					}

				],
				arrProductsName : [
					{
						name : "钻石",
						anchor : [
							{
								name : "30分",
								anchor : "/30"
							},
							{
								name : "50分",
								anchor : "/50"
							},
							{
								name : "克拉钻",
								anchor : "/ring"
							}
						]
					},
					{
						name : "钻戒",
						anchor : [
							{
								name : "30分",
								anchor : "/30"
							},
							{
								name : "50分",
								anchor : "/50"
							},
							{
								name : "铂金",
								anchor : "/ring"
							}
						]
					},
					{
						name : "对戒",
						anchor : [
							{
								name : "铂金对戒",
								anchor : "/bojin"
							},
							{
								name : "k金对戒",
								anchor : "/50"
							}
						]
					},
					{
						name : "配饰",
						anchor : [
							{
								name : "吊坠",
								anchor : "/30"
							},
							{
								name : "项链",
								anchor : "/50"
							},
							{
								name : "套链",
								anchor : "/ring"
							}
						]
					},
					{
						name : "系列产品",
						anchor : [
							{
								name : "宠爱婚戒",
								anchor : "/30"
							}
						]
					},
					{
						name : "热门产品",
						anchor : [
							{
								name : "50分裸钻",
								anchor : "/30"
							},
							{
								name : "70分裸钻",
								anchor : "/50"
							}
						]
					}
				]
			}
		}
	}
</script>