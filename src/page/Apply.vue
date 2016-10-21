<style scoped lang="stylus">
	.apply 
		margin-top 150px
	.meter
		position relative
		overflow hidden
		&.step1
			.progress
				border-left-width 475px 
				border-right-width 705px 
		&.step2
			.progress
				border-left-width 709px 
				border-right-width 471px
		&.step3
			.progress
				border-left-width 1180px		
		.progress
			position absolute
			top 89px
			height 2px
			border-style none solid
			border-right-color rgb(188,188,188)
			border-left-color black
		.circle
			position relative
			margin-top 70px
			float left
			width 36px
			height @width
			border-width 2px
			border-radius 50%
			border 2px solid 
			text-align center
			line-height @height
			z-index 1
			&.normal
				border-color rgb(188,188,188)
				background-color white
			&.done
				border-color black
				background-color black
				color white
			&:before
				position absolute
				left ((@width + @border-width * 2) / 2)
				top -44px
				font-size 15px
				color black
				white-space nowrap
				margin-left -46px
			&:nth-of-type(1)
				margin-left 338px
				&:before
					content "描述您的需求"
			&:nth-of-type(2)
				margin-left 194px
				&:before
					content "预览您的需求"
			&:nth-of-type(3)
				margin-left 194px
				&:before
					content "发送需求成功"
	form
		margin-top 30px
		padding 26px
		width 872px 
		border 1px solid rgb(242,242,242)
		label
			font-size 14px
			&:not([for="sltType"])
				display block
			
		select
			height 25px
		>div
			&:not(:first-of-type)
				margin-top 30px
		.ipt-txt
			margin-top 18px
			height 28px
			border 1px solid rgb(169,169,169)
			&#iptReq
				width 651px
			&:not(#iptReq)
				width 208px
		.code
			width 130px
			height 30px
			background-color rgb(242,242,242)
			border 1px solid rgb(228,228,228)
			cursor pointer
		textarea
			margin-top 18px
			width 653px
			height 183px
		.image
			width 100px
			height @width
			border 1px solid rgb(228,228,228)
			background-color rgb(242,242,242)
			background-repeat no-repeat
			background-position 50% 50%
			background-size contain
			[type="file"]
				width @height
				height @width
				border-radius 2px
				opacity 0
				margin-top 80px
				&::webkit-file-upload-button
					display none
		p
			line-height 2
		.next 
			margin-top 18px
			width 100px
			height 30px
			background-color rgb(134, 134, 134)
			border-style none
			border-radius 2px
			color white
			cursor pointer
</style>
<template>
	<div class="apply w1180">
		<div class="meter step1">
			<div class="circle done">1</div>
			<div class="circle done">2</div>
			<div class="circle normal">3</div>
			<div class="progress"></div>
		</div>
		<form>
			<div>
				<label for="sltType">选择类目：</label>
				<select id="sltType" v-model="type">
					<option v-for="item of arrTypes" :value="item.value" v-text="item.name"></option>
				</select>
			</div>
			<div>
				<label for="iptReq">简单描述您的需求：</label>
				<input class="ipt-txt" id="iptReq" v-model="req" @input="handleValidate('req', $event)" />
			</div>
			<div>
				<label>留下您的联系方式,方便交易顾问联系您：</label>
				<input class="ipt-txt" placeholder="请输入您的手机号码" v-model="tel" @input="handleValidate('tel', $event)" />
				<input class="code" type="button" value="获取手机验证码"  />
				<br />
				<input class="ipt-txt" placeholder="请输入手机验证码" v-model="code" @input="handleValidate('code', $event)" />
			</div>
			<div>
				<label for="">说说您的具体要求：</label>
				<textarea v-model="detail" @input="handleValidate('detail', $event)"></textarea>
			</div>
			<div>
				<div class="image" :style="{'background-image':'url('+path+')'}">
					<input type="file" @change="handleChange" />
				</div>
				<p>
					<span v-text="message">最多可添加5个附件，每个大小不得超过2M</span>
					<a>上传遇到的问题？</a>
				</p>
			</div>
			<input class="next" type="button" value="下一步>" @click="handleNext" />
		</form>
		<div class="info"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrTypes : [
					{
						name : "首发申请",
						value : "001"
					},
					{
						name : "创意申请",
						value : "005"
					},
					{
						name : "定制申请",
						value : "002"
					}
				],
				type : "001",
				req : "",
				tel : "",
				code : "",
				detail : "",
				path : ""
			};
		},
		methods : {
			handleChange(e){
				const fileReader = new FileReader(),
				FILES = e.target.files;
				fileReader.onload = e =>{
					this.path = e.target.result;
				};
				FILES.length && /jpe?g|png|gif|bmp/.test(FILES[0].type) && fileReader.readAsDataURL(FILES[0]);//转base64
			},
			handleNext(){
				console.log(this.type, this.req, this.tel, this.code, this.detail);
			},
			handleValidate(type, e){
				const value = this[type];
				this.message = (/<script>/.test(value)) || !({
					tel : /^1[3578]\d{9}$/,
					code : /^\d{6}$/
				}[type] || /.*/).test(value) ? "输入有误" : "";
			}
		}
	};
</script>