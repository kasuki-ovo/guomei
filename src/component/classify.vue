<template>
	<div id="classify">
		<div class="head-search">
			<div class="search-box">
				<div class="m-header">
					<div class="back" @click="back()">
						<img src="img/back_icon.png" alt="">
					</div>
					<div class="input-box">
						<div class="search">
							<input type="text" placeholder="55英寸智能电视1899元起">
							<div class="search-icon">
								<img src="img/search_icon.png" alt="">
							</div>
						</div>
					</div>
					<div class="search-right">
						<div class="car-user">
							<router-link to=""><img src="img/more_icon.png" alt=""></router-link >
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tab" id="tab">
			<div class="side-container">
				<div class="side-box">
					<div class="side-nav">
						<ul class="ul-nav">
						  <li v-for="(item,i) in navText">
							  <p v-bind:class="{'on':flag==i}" @click="[com=item.com,flag=i]">{{item.word}}</p>
						  </li>
						</ul>
					</div>
				</div>
			</div>
			<div class="items-box">
				<div class="items">
					<component :is="com"></component>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import hotclass from '../component/com/hotclass.vue'
	import digital from '../component/com/digital.vue'
	import computer from '../component/com/computer.vue'
	import television from '../component/com/television.vue'
	import airconditioner from '../component/com/airconditioner.vue'
	import kitchen from '../component/com/kitchen.vue'
	import electricappliance from '../component/com/electricappliance.vue'
	import foodstuff from '../component/com/foodstuff.vue'
	import makeup from '../component/com/makeup.vue'
	import toy from '../component/com/toy.vue'
	import nutrition from '../component/com/nutrition.vue'
	import costume from '../component/com/costume.vue'
	import sports from '../component/com/sports.vue'
	import luggage from '../component/com/luggage.vue'
	import jewelry from '../component/com/jewelry.vue'
	import furniture from '../component/com/furniture.vue'
	import decoration from '../component/com/decoration.vue'
	import commodity from '../component/com/commodity.vue'
	import bedclothes from '../component/com/bedclothes.vue'
	import caraccessories from '../component/com/caraccessories.vue'
	import gold from '../component/com/gold.vue'
	import smarthome from '../component/com/smarthome.vue'
	import serve from '../component/com/serve.vue'
	export default {
		data(){
			return {
				navText:[],
				com:'hotclass',
				className:'on',
				flag:0
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		components:{
			'hotclass':hotclass,
			'digital':digital,
			'computer':computer,
			'television':television,
			'airconditioner':airconditioner,
			'kitchen':kitchen,
			'electricappliance':electricappliance,
			'foodstuff':foodstuff,
			'makeup':makeup,
			'toy':toy,
			'nutrition':nutrition,
			'costume':costume,
			'sports':sports,
			'luggage':luggage,
			'jewelry':jewelry,
			'furniture':furniture,
			'decoration':decoration,
			'commodity':commodity,
			'bedclothes':bedclothes,
			'caraccessories':caraccessories,
			'gold':gold,
			'smarthome':smarthome,
			'serve':serve
		},
		mounted() {
			var _this=this;
			this.$http.get('./src/data/classify.json')
			.then(function(res){
				_this.navText=res.data.navText
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				// always executed:一定执行
			});
		}
	}
	var h = (screen.height)-(36)
	console.log(h)

</script>

<style>
	.ul-nav .on{
		color: #F20C59;
		border-left: 3px solid #F20C59;
	}
	html{
		height: 100%;
	}
	#app{
		height: 100%;
	}
	body{
		height: 100%;
	}
	#classify{
		height: 100%;
	}
	.search-box {
		height: 100%;
		background: #fff;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.m-header {
		height: 100%;
		width: 100%;
		padding: 0 1rem;
	}
	.back {
		float: left;
		margin: 1rem 1rem 1rem 0;
		height: 2rem;
		width: 2rem;
		text-align: left;
	}
	.back img {
		width: auto;
	}
	.input-box {
		float: left;
		width: 77%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.search {
		float: left;
		width: 100%;
		height: 2.4rem;
		background-color: #f6f6f6;
		overflow: hidden;
		border-radius: 22rem;
		display: flex;
		align-items: center;
		display: flex;
		align-items: center;
	}
	.search-icon {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 1rem;
		display: flex;
		align-items: center;
	}
	.search input {
		border: none;
		outline: none;
		width: 100%;
		height: 100%;
		color: #999;
		background-color: #f6f6f6;
		font-size: 1.2rem;
		text-indent: 1rem;
	}
	.search-right {
		float: left;
		padding-left: 5%;
	}
	.car-user {
		width: 2rem;
		margin-top: .7rem;
		margin-bottom: 0;
		overflow: hidden;
	}
	.search-right a{
		float: left;
		display: inline-block;
		margin-top: .2rem;
	}
	.search-right a:nth-of-type(1) {
		margin-right: 1.3rem;
	}
	.search-right img {
		width: 2.2rem;
		height: 1.95rem;
	}
	.head-search .search-right a{
		margin: 0;
	}
	.m-header{
		display: flex;
		align-items: center;
	}
	.head-search{
		height: 6.5%;
		border-bottom: 1px solid #ccc;
		z-index: 1000;
	}
	.head-search img{
		width: 100%;
		height: auto;
	}
	.side-box{
		height: 100%;
		display: flex;
		align-items: center;
		overflow-y: scroll;
	}
	.side-nav{
		height: 100%;
	}
	.side-box::-webkit-scrollbar{
		display: none;
	}
	.ul-nav{
		height: 100%;
		width: 6.8rem;
		background: #f0f0f0;
	}
	.ul-nav li{
		display: block;
		font-size: 1.5rem;
		line-height: 4rem;
		text-align: center;
		position: relative;
		margin: 0;
	}
	.ul-nav a{
		display: block;
		color: #000;
		position: relative;
	}
	.ul-nav p::after{
		content: '';
		position: absolute;
		height: 1px;
		left: .8rem;
		right: .8rem;
		bottom: 0;
		border-bottom: 1px solid #ddd;
	}
	.tab{
		width: 100%;
		height: 93.5%;
		position: absolute;
		top: 6.5%;
		left: 0;
		display: flex;
	}
	.side-container{
		height: 100%;
		width: 6.8rem;
		position: absolute;
		top: 0;
		left: 0;
	}
	.items-box{
		width: 100%;
		margin-left: 6.8rem;
		overflow-y: scroll;
		background: #fff;
	}
	.items-box::-webkit-scrollbar{
		display: none;
	}
</style>
