<style scoped lang="stylus">
	.footer
		margin-top 50px
	a
		font-size 12px
	.bottom0
		border-top 1px solid rgb(215, 215, 215)
		overflow hidden
		ul
			float left
			padding 55px 0 45px
			width 200px
			li
				&:nth-child(1)
					margin-bottom 30px
					font-size 18px
					font-weight bold
				a
					line-height 2
	.bottom1
		height 40px
		background-color rgb(228, 228, 228)
		a
			margin-right 20px
			line-height @height
	.bottom2
		padding 24px 0
		background-color rgb(242, 242, 242)
		p
			font-size 12px
			line-height 15px
</style>
<template>
	<div class="footer">
		<div class="bottom0 w1180">
			<ul v-for="list of arrBottom1Anchors">
				<li>{{list.name}}</li>
				<li v-for="anchor of list.anchor">
					<a :href="anchor.href">{{anchor.name}}</a>
				</li>
			</ul>
		</div>
		<div class="bottom1">
			<div class="w1180">
				<a v-for="anchor of arrBottom2Anchors" :href="anchor.href">{{anchor.name}}</a>
			</div>
		</div>
		<div class="bottom2">
			<div class="w1180">
				<p>COPYRIGHT © 2010-2015 女王珠宝有限公司   anqueen.com 保留一切权利。 客服热线：12345678912</p>
				<p>深圳公网安备 XXXXXXXXXX | 京ICP证XXXXXX号 | 营业执照</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrBottom1Anchors : [
					{
						name : "使用帮助",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "支付方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "配送方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "售后服务",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					}
				],
				arrBottom2Anchors : [
					{
						name : "关于女王珠宝",
						href : "/about"
					},
					{
						name : "申请代言",
						href : "/apply"
					},
					{
						name : "加入女王珠宝",
						href : "/join"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "媒体报道",
						href : "/media"
					},
					{
						name : "商务合作",
						href : "/business"
					}
				]
			};
		}
	}
</script>