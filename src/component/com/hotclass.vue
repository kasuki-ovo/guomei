<template>
	<div id="hotclass">
		<div class="hotclass-items">
			<h5 class="items-title">大家电</h5>
			<ul>
				<li v-for="item in electricProduvt">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">数码通讯</h5>
			<ul>
				<li v-for="item in digital">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">厨卫生活</h5>
			<ul>
				<li v-for="item in kitchenLive">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">日用百货</h5>
			<ul>
				<li v-for="item in dailyUse">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items brand">
			<h5 class="items-title">热门品牌</h5>
			<ul>
				<li v-for="item in brand">
					<a href="">
						<img :src="item.img" alt="">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				electricProduvt:[],
				digital:[],
				kitchenLive:[],
				dailyUse:[],
				brand:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./src/data/hotclass.json')
			.then(function(res){
				_this.electricProduvt=res.data.electricProduvt
				_this.digital=res.data.digital
				_this.kitchenLive=res.data.kitchenLive
				_this.dailyUse=res.data.dailyUse
				_this.brand=res.data.brand
			})
		}
	}
</script>

<style>
	#hotclass{
		padding: .7rem;
	}
	#hotclass img{
		width: 100%;
	}
	#hotclass h5{
		font-size: .8rem;
		padding-bottom: .8rem;
		padding-left: .2rem;
		color: #999;
		text-align: left;
		font-weight: normal;
	}
	.hotclass-items a{
		display: block;
		color: #666;
		padding: .5rem .5rem 0;
	}
	.hotclass-items ul{
		display: flex;
		flex-wrap: wrap;
	}
	.hotclass-items li{
		width: 31.2%;
		background: #f8f8f8;
		margin: 0;
		margin-right: 2%;
		margin-bottom: 4%;
	}
	.hotclass-items li:nth-of-type(3n){
		margin-right: 0;
	}
	#hotclass span{
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 2rem;
	}
</style>
