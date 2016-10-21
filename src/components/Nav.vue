<style scoped lang="stylus">
	.nav
		background-color rgb(188,188,188)
		height 40px
		.w1180
			.all
				float left
				width 180px
				height @height
				text-align center
				line-height @height
			>a
				padding 0 30px
				font-size 14px
				line-height @height
</style>
<template>
	<div class="nav">
		<div class="w1180">
			<div class="all">全部商品</div>
			<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				list : [
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
					}
				]
			};
		}
	};
</script>