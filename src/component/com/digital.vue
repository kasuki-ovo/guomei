<template>
	<div id="hotclass">
		<div class="items-title-img">
			<img src="../../../img/phone_title.jpg" alt="">
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">手机通讯</h5>
			<ul>
				<li v-for="item in mobile">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">手机配件</h5>
			<ul>
				<li v-for="item in mobileComponent">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">摄像摄影</h5>
			<ul>
				<li v-for="item in camera">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">设照配件</h5>
			<ul>
				<li v-for="item in cameraComponet">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">智能设备</h5>
			<ul>
				<li v-for="item in intelligentDevice">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">电子教育</h5>
			<ul>
				<li v-for="item in electronicEducation">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotclass-items">
			<h5 class="items-title">视听娱乐</h5>
			<ul>
				<li v-for="item in musicEquipment">
					<a href="">
						<img :src="item.img" alt="">
						<span>{{item.txt}}</span>
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
				mobile:[],
				mobileComponent:[],
				camera:[],
				cameraComponet:[],
				intelligentDevice:[],
				electronicEducation:[],
				musicEquipment:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./src/data/digital.json')
			.then(function(res){
				_this.mobile=res.data.mobile
				_this.mobileComponent=res.data.mobileComponent
				_this.camera=res.data.camera
				_this.cameraComponet=res.data.cameraComponet
				_this.intelligentDevice=res.data.intelligentDevice
				_this.electronicEducation=res.data.electronicEducation
				_this.musicEquipment=res.data.musicEquipment
			})
		}
	}
</script>

<style>
	#hotclass{
		padding: .7rem;
	}
	.items-title-img{
		margin-bottom: 2%;
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
