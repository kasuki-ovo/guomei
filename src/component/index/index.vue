<template>
	<div>
		<router-view></router-view>
		<ul class="home-ul">
			<li>
				<router-link to="home">
					<img src="/img/T1YldvB__v1RCvBVdK.png" alt="">
					<p class="pink">首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="classify">
					<img src="/img/T1AMVgB__T1RCvBVdK.png" alt="">
					<p>分类</p>
				</router-link>
			</li>
			<li>
				<router-link to="optimization">
					<img src="/img/T13yEgB4Jv1RCvBVdK.png" alt="">
					<p>优选</p>
				</router-link>
			</li>
			<li>
				<router-link to="shoppingcar">
					<img src="/img/T1CBhvB__T1RCvBVdK.png" alt="">
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="my">
					<img src="/img/T1vThgB_YT1RCvBVdK.png" alt="">
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.home-ul img{
		width: 2.4rem;
		height: 2.4rem;
	}
	p{
		color: #999;
		margin-top: .2rem;
	}
	.home-ul{
		width: 100%;
		height: 4.6rem;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		margin: 0;
		background-image: url(/img/T1SfDgB4Ev1RCvBVdK.png);
		vertical-align: middle;
		border-top: 1px solid #e4e4e4;
		padding-top: 3px;
		box-sizing: border-box;
		z-index: 1000;
		background-size: cover;
	}
	.home-ul li{
		width: 20%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pink{
		color: #ff0027;
	}
</style>
