<style scoped lang="stylus">
	more()
		position absolute
		top -10px
		left 1130px
		width 50px
		height 50px
		border-radius 50%
		background-color rgb(242,242,242)
		font-size 32px
		color rgb(188,188,188)
		text-align center
		line-height @height
	.btn
		width 100px
		height 30px
		color white
		font-size 14px
		font-family "宋体"
		background-color rgb(81,81,81)
	.QueenTop
		position relative
		height 650px
		margin-top 50px
		.more
			more()
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
		.one	
			background-image url("../assets/queen1.png")
			background-position 50%
			background-repeat no-repeat
		.two	
			background-image url("../assets/queen2.png")
			background-position 50%
			background-repeat no-repeat
		.three	
			background-image url("../assets/queen3.png")
			background-position 50%
			background-repeat no-repeat
		.four	
			background-image url("../assets/queen4.png")
			background-position 50%
			background-repeat no-repeat
		.five	
			background-image url("../assets/queen1.png")
			background-position 50%
			background-repeat no-repeat
		.six	
			background-image url("../assets/queen5.png")
			background-position 50%
			background-repeat no-repeat
		.sev	
			background-image url("../assets/queen6.png")
			background-position 50%
			background-repeat no-repeat
		.eight	
			background-image url("../assets/queen7.png")
			background-position 50%
			background-repeat no-repeat
		.nine	
			background-image url("../assets/queen8.png")
			background-position 50%
			background-repeat no-repeat
		.ten	
			background-image url("../assets/queen9.png")
			background-position 50%
			background-repeat no-repeat
	.newArrival
		position relative
		height 1210px
		.more
			more()
		.brand
			position relative
			height 340px
			margin-top 30px
			strong
				position absolute
				top 36px
				left 26px
				font-size 24px
				color white
			.buyNow
				position absolute
				top 20px
				right 20px
				width 400px
				height 300px
				background-color white
				.time 
					height 28px
					background-color rgb(107,107,107)
					text-align center
					p
						color white
						font-size 12px
						font-family "宋体"
						line-height @height
				.main
					float right
					width 170px
					height 210px
					margin-top 40px
					.person
						width 170px
						height 40px
						span
							float left
							font-size 14px
							font-weight bold
						h3
							float left
							font-size 24px
							margin-left 4px
							margin-top -8px
					p
						font-size 14px
						line-height 20px
						&:nth-of-type(3)
							margin-top 20px
					.icons
						span
							display inline-block
							width 30px
							height 24px
							margin-top 26px
							text-align center
							&:nth-of-type(1)
								background-image url("../assets/aixin.png")
								background-repeat no-repeat
								background-position 50%
							&:nth-of-type(2)
								background-image url("../assets/zan.png")
								background-repeat no-repeat
								background-position 50%
							&:nth-of-type(3)
								width 100px
								height 30px
								color white
								font-size 14px
								font-family "宋体"
								background-color rgb(81,81,81)
								line-height @height
			.prolocutor1
				background-image url("../assets/queen2.png")
				background-repeat no-repeat
				background-position 20px 60%
				background-size 180px 180px
			.prolocutor2
				background-image url("../assets/queen7.png")
				background-repeat no-repeat
				background-position 20px 60%
				background-size 180px 180px
			.prolocutor3
				background-image url("../assets/queen5.png")
				background-repeat no-repeat
				background-position 20px 60%
				background-size 180px 180px
		.new1
			background-image url("../assets/1.jpg")
		.new2
			background-image url("../assets/2.jpg")
		.new3
			background-image url("../assets/3.jpg")
	.represent
		position relative
		height 540px
		.more
			more()
		.rep
			height 204px
			margin-top 20px
			.box
				float left
				width 580px
				height 204px
				&:nth-of-type(2)
				&:nth-of-type(4)
					margin-left 20px
				.QueenJewelry
					float right
					position relative
					margin-right 20px
					p
						font-size 24px
					.icon
						position absolute
						top 94px
						width 70px
						height 40px
					.click
						position absolute
						top 60px
						left 80px
						width 106px
						height 80px
						a
							text-align center
							line-height 30px
							display block
							margin-top 10px
					.text
						position absolute
						top 130px
						p
							font-size 14px
							line-height 22px
						
			.rep1
				background-image url("../assets/rep1.jpg")
				background-repeat no-repeat
			.rep2
				background-image url("../assets/rep2.jpg")
				background-repeat no-repeat
			.rep3
				background-image url("../assets/rep3.jpg")
				background-repeat no-repeat
			.rep4
				background-image url("../assets/rep4.jpg")
				background-repeat no-repeat
	.fashion
		position relative
		height 150px
		.more 
			more()
		.box
			width 380px
			height 350px
			float left
			margin-top 30px
			&:nth-of-type(3)
			&:nth-of-type(4)
				margin-left 10px
			p
				font-size 20px
			.info
				margin-top 24px
				overflow hidden
				img
					float left
					width 180px 
					height 170px
				.text
					float left
					width 170px
					font-size 14px
					line-height 22px
					margin-left 20px
			.date
				width  382px
				height 34px
				margin-top 20px
				span
					&:nth-of-type(2)
						margin-left 10px
						font-size 14px
					&:nth-of-type(3)
						&:before
							content ""
							display inline-block
							width 32px
							height 20px
							margin-left 10px
							background-image url("../assets/aixin.png")
					&:nth-of-type(4)
						&:before
							content ""
							display inline-block
							width 32px
							height 22px
							margin-left 10px
							background-image url("../assets/zan.png")
					&:nth-of-type(5)
						&:before
							content ""
							display inline-block
							width 26px
							height 20px
							margin-left 10px
							background-image url("../assets/mes.png")
</style>
<template>
	<div class="main">
		<banner :data="arrBanner"></banner>
		<div class="QueenTop w1180" >
			<h2>女王人气TOP 10</h2>
			<router-link to="/Top" class="more">+</router-link>
			<div class="queenList one">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList two">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList three">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList four">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList five">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList six">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList sev">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList eight">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList nine">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
			<div class="queenList ten">
				<div class="circle"></div>
				<span>QueenJewelry</span>
				<span class="love">999</span>
			</div>
		</div>
		<div class="newArrival w1180">
			<h2>首发品牌</h2>
			<router-link to="/NewArrival" class="more">+</router-link>
			<div class="brand new1">
				<strong>LOGO</strong>
				<div class="buyNow prolocutor1">
					<div class="time">
						<p>距首发结束:20天18小时18分18秒</p>
					</div>
					<div class="main">
						<div class="person">
							<span>代言人：</span><h3>Queen</h3>
						</div>
						<p>拒绝平庸，追求卓越</p>
						<p>凸显个性，绝不将就</p>
						<div class="icons">
							<span></span>
							<span></span>
							<span><a href="">立刻购买</a></span>
						</div>
						<p>9999人喜欢</p>
						<p>10000人已经购买</p>
					</div>
					
				</div>
			</div>
			<div class="brand new2">
				<strong>LOGO</strong>
				<div class="buyNow prolocutor2">
					<div class="time">
						<p>距首发结束:20天18小时18分18秒</p>
					</div>
					<div class="main">
						<div class="person">
							<span>代言人：</span><h3>Queen</h3>
						</div>
						<p>拒绝平庸，追求卓越</p>
						<p>凸显个性，绝不将就</p>
						<div class="icons">
							<span></span>
							<span></span>
							<span><a href="">立刻购买</a></span>
						</div>
						<p>9999人喜欢</p>
						<p>10000人已经购买</p>
					</div>
				</div>
			</div>
			<div class="brand new3">
				<strong>LOGO</strong>
				<div class="buyNow prolocutor3">
					<div class="time">
						<p>距首发结束:20天18小时18分18秒</p>
					</div>
					<div class="main">
						<div class="person">
							<span>代言人：</span><h3>Queen</h3>
						</div>
						<p>拒绝平庸，追求卓越</p>
						<p>凸显个性，绝不将就</p>
						<div class="icons">
							<span></span>
							<span></span>
							<span><a href="">立刻购买</a></span>
						</div>
						<p>9999人喜欢</p>
						<p>10000人已经购买</p>
					</div>
				</div>
			</div>
		</div>
		<div class="represent w1180">
			<h2>为我代言</h2>
			<div class="more">+</div>
			<div class="rep">
				<div class="box rep1">
					<div class="QueenJewelry">
						<p>QueenJewelry</p>
						<div class="icon">
							<img src="../assets/aixin.png">
							<img src="../assets/zan.png">
						</div>
						<div class="click">
							<a href="" class="btn">我要代言</a>
							<a href="" class="btn">立刻购买</a>
						</div>
						<div class="text">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</div>
				<div class="box rep2">
					<div class="QueenJewelry">
						<p>QueenJewelry</p>
						<div class="icon">
							<img src="../assets/aixin.png">
							<img src="../assets/zan.png">
						</div>
						<div class="click">
							<a href="" class="btn">我要代言</a>
							<a href="" class="btn">立刻购买</a>
						</div>
						<div class="text">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</div>
			</div>
			<div class="rep">
				<div class="box rep3">
					<div class="QueenJewelry">
						<p>QueenJewelry</p>
						<div class="icon">
							<img src="../assets/aixin.png">
							<img src="../assets/zan.png">
						</div>
						<div class="click">
							<a href="" class="btn">我要代言</a>
							<a href="" class="btn">立刻购买</a>
						</div>
						<div class="text">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</div>
				<div class="box rep4">
					<div class="QueenJewelry">
						<p>QueenJewelry</p>
						<div class="icon">
							<img src="../assets/aixin.png">
							<img src="../assets/zan.png">
						</div>
						<div class="click">
							<a href="" class="btn">我要代言</a>
							<a href="" class="btn">立刻购买</a>
						</div>
						<div class="text">
							<p>9999人喜欢</p>
							<p>10000人已经购买</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fashion w1180">
			<h2>我的时尚</h2>
			<div class="more">+</div>
			<div class="box" v-for="item of fashion">
				<p>{{item.title}}</p>
				<div class="info">
					<img :src="item.src">
					<div class="text">{{item.p}}</div>
				</div>
				<div class="date">
					<span>{{item.name}}</span>
					<span>{{item.time}}</span>
					<span>{{item.num}}</span>
					<span>{{item.like}}</span>
					<span>{{item.mes}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from "../components/Banner";
	export default {
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
				fashion :[
					{
						title : "2015春夏流行色：魅惑黑色",
						src : require("../assets/fa1.jpg"),
						p : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						time : "2015-06-02",
						num : "999",
						like : "99",
						mes : "99"
					},
					{
						title : "2015春夏流行色：魅惑黑色",
						src : require("../assets/fa1.jpg"),
						p : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						time : "2015-06-02",
						num : "999",
						like : "99",
						mes : "99"
					},
					{
						title : "2015春夏流行色：魅惑黑色",
						src : require("../assets/fa1.jpg"),
						p : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						time : "2015-06-02",
						num : "999",
						like : "99",
						mes : "99"
					}
				]
			}
		},
		components : {
			Banner
		}
	};
</script>