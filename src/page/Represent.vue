<style scoped lang="stylus">
	.rep
		margin-top 200px
		height 1500px
		.left
			float left
			width 580px
			height 1300px
		.right 
			float left
			width 580px
			height 1300px
			margin-left 14px
		.box
			width 584px
			height 196px
			margin-top 20px
			background-repeat no-repeat
</style>
<template>
	<div class="w1180 rep">
		<h2>为我代言!</h2>
		<div class="left">
			<div class="box" v-for="rep of arrBoxleft" :style="{'background-image':'url(' + rep.src + ')'}">
				
			</div>
		</div>
		<div class="right">
			<div class="box" v-for="rep of arrBoxright" :style="{'background-image':'url(' + rep.src + ')'}">
				
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arrBoxleft : [
					{
						src : require("../assets/rep1.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep2.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep1.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep2.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep1.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep2.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					}
				],
				arrBoxright : [
					{
						src : require("../assets/rep3.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep4.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep3.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep4.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep3.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					},
					{
						src : require("../assets/rep4.jpg"),
						name : "QueenJewelry",
						like : "9999人喜欢",
						buy : "10000人已经购买"
					}
				]
			}
		}
	}
</script>