<template>
	<keep-alive>
		<div id="home">
			<div class="bottom-nav">
				<ul class="home-ul">
					<li>
						<router-link to="home">
							<img src="../../img/T1YldvB__v1RCvBVdK.png" alt="">
							<p class="pink">首页</p>
						</router-link>
					</li>
					<li>
						<router-link to="classify">
							<img src="../../img/T1AMVgB__T1RCvBVdK.png" alt="">
							<p>分类</p>
						</router-link>
					</li>
					<li>
						<router-link to="optimization">
							<img src="../../img/T13yEgB4Jv1RCvBVdK.png" alt="">
							<p>优选</p>
						</router-link>
					</li>
					<li>
						<router-link to="shoppingcar">
							<img src="../../img/T1CBhvB__T1RCvBVdK.png" alt="">
							<p>购物车</p>
						</router-link>
					</li>
					<li>
						<router-link to="my">
							<img src="../../img/T1vThgB_YT1RCvBVdK.png" alt="">
							<p>我的</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="m-downapp" v-show="show">
				<div class="download-info">
					<a>
						<span @click="hide()"><img src="../../img/close.png" alt=""></span>
					</a>
					<div class="m-img-box">
						<img src="../../img/T1VnKvB7_T1RCvBVdK.png" alt="">
					</div>
					<div class="m-sign">
						<p>注册送好礼</p>
					</div>
				</div>
				<div class="down-red">
					<a href="">下载领取</a>
				</div>
			</div>
			<div class="search-box">
				<div class="m-header">
					<div class="logo">
						<img src="../../img/grass_logo.png" alt="">
					</div>
					<div class="input-box">
						<div class="search">
							<div class="search-icon">
								<img src="../../img/search_icon.png" alt="">
							</div>
							<input type="text" placeholder="冰箱洗衣机美豆双倍返">
						</div>
					</div>
					<div class="search-right">
						<div class="car-user">
							<a href=""><img src="../../img/grass_cart.png" alt=""></a>
							<a href=""><img src="../../img/user.png" alt=""></a>
						</div>
					</div>
				</div>
			</div>
			<div class="warp-box">
				<mt-swipe :auto="3000">
					<mt-swipe-item><img src="../../img/warp01.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp02.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp03.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp04.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp05.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp06.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp07.jpg" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../../img/warp08.jpg" alt=""></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="selector-box">
				<div class="select">
					<mt-swipe :auto="0">
						<mt-swipe-item>
							<ul>
								<li v-for="(v,i) in select">
									<a href="">
										<div class="select-link">
											<img :src="v.src" alt="">
											<p>{{v.txt}}</p>
										</div>
									</a>
								</li>
							</ul>
						</mt-swipe-item>
						<mt-swipe-item>
							<ul>
								<li v-for="(v,i) in select2">
									<a href="">
										<div class="select-link">
											<img :src="v.src" alt="">
											<p>{{v.txt}}</p>
										</div>
									</a>
								</li>
							</ul>
						</mt-swipe-item>
					</mt-swipe>
				</div>
			</div>
			<div class="gif-box">
				<div class="gif-img">
					<a href=""><img src="../../img/haier-gif.gif" alt=""></a>
				</div>
			</div>
			<div class="headline">
				<div class="caption">
					<div class="title">
						<img src="../..//img/gmtl.png" alt="">
					</div>
				</div>
				<div class="txt-swiper">
					<div class="swiper">
						<vue-seamless-scroll :data="swiper" :class-option="optionSingleHeight" class="seamless-warp">
							<ul class="value">
								<li v-for="value in swiper">
									<a href="">
										<span>{{value.title}}</span>
										{{value.text}}
									</a>
								</li>
							</ul>
						</vue-seamless-scroll>
					</div>
				</div>
			</div>
			<section class="sec">
				<div class="seckill">
					<div class="seckill-title">
						<h3>国美秒杀</h3>
						<p>16点场</p>
						<div class="m-timer">
							<div class="time-box">
								<span>{{this.hour}}</span>
								:
								<span>{{this.minute}}</span>
								:
								<span>{{this.second}}</span>
							</div>
						</div>
					</div>
					<div class="sk-good">
						<a href="">
							秒杀好货<span>＞</span>
						</a>
					</div>
				</div>
				<div class="sk-swiper">
					<div class="swiper-container" width="100%">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="list in seckillList">
								<ul>
									<li>
										<h4><img :src="list.img" alt=""></h4>
										<span class="price">{{list.price}}</span>
										<p class="surplus">{{list.surplus}}</p>

									</li>
								</ul>
							</div>
							<div class="swiper-slide">查看更多</div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="brand-sale">
					<div class="sale">
						<div class="sale-title">
							<img src="../../img/brandsale_title.png" alt="">
						</div>
						<div class="sale-list">
							<ul>
								<li v-for="items in brandSale">
									<a href="">
										<img :src="items.img" alt="">
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="banner-box">
					<div class="banner">
						<div class="banner1">
							<ul>
								<li v-for="i in banner">
									<a href=""><img :src="i.img" alt=""></a>
								</li>
							</ul>
						</div>
						<div class="banner2">
							<ul>
								<li><a href=""><img src="../../img/haier_calorifier.jpg" alt=""></a></li>
							</ul>
						</div>
						<div class="banner3">
							<ul>
								<li><a href=""><img src="../../img/homedecoration.jpg" alt=""></a></li>
								<li><a href=""><img src="../../img/interest-free.jpg" alt=""></a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="warp-middle">
					<mt-swipe :auto="4000">
						<mt-swipe-item><img src="../../img/airkonharu.jpg" alt=""></mt-swipe-item>
						<mt-swipe-item><img src="../../img/artifact.jpg" alt=""></mt-swipe-item>
						<mt-swipe-item><img src="../../img/newseason.jpg" alt=""></mt-swipe-item>
					</mt-swipe>
				</div>
			</section>
			<section class="sec0">
				<ul>
					<li><a href=""><img src="../../img/ativity_title.png" alt=""></a></li>
				</ul>
			</section>
			<section class="sec1">
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/vivoX23.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%" height="10rem">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in phone">
									<ul>
										<li>
											<router-link to="/commoditydetails">
												<h4><img :src="list.img" alt=""></h4>
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
												<p class="price">{{list.price}}</p>
											</router-link>
										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/artifact_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in furniture">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>
										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/newseason_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in tv">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>

										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/homedecoration_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in refrigerator">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>

										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/computer_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in computer">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>

										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/cooker_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in cooker">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>

										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div class="cellphone">
					<div class="phone-title">
						<ul>
							<li><a href=""><img src="../../img/wisdomdecoration_title.jpg" alt=""></a></li>
						</ul>
					</div>
					<div class="phone-list">
						<div class="swiper-container" width="100%">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="list in wisdomdecoration">
									<ul>
										<li>
											<h4><img :src="list.img" alt=""></h4>
											<div class="no-warp">
												<span class="desc">{{list.describe1}}</span>
												<span class="desc">{{list.describe2}}</span>
											</div>
											<p class="price">{{list.price}}</p>

										</li>
									</ul>
								</div>
								<div class="swiper-slide">查看更多</div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
								<div class="swiper-slide"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="sec0">
				<ul>
					<li><a href=""><img src="../../img/choiceness_title.png" alt=""></a></li>
				</ul>
			</section>
			<section class="sec0">
				<div class="choiceness-box">
					<div class="txt-title">
						<div class="seckill choiceness">
							<div class="seckill-title choiceness-title">
								<h3>精选品类</h3>
							</div>
							<div class="sk-good more-good">
								<a href="">
									更多品类<span>＞</span>
								</a>
							</div>
						</div>
					</div>
					<div class="choiceness-product">
						<div class="choiceness-list">
							<ul>
								<li v-for="list in choiceness">
									<a href=""><img :src="list.img" alt=""></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="sec0 sec-top">
				<div class="choiceness-box">
					<div class="txt-title">
						<div class="seckill choiceness">
							<div class="seckill-title choiceness-title">
								<h3>精选特色</h3>
							</div>
						</div>
					</div>
					<div class="choiceness-product">
						<div class="choiceness-list">
							<ul>
								<li v-for="list in features">
									<a href=""><img :src="list.img" alt=""></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="sec0 img-title">
				<ul>
					<li><a href=""><img src="../../img/wzguomei_title.png" alt=""></a></li>
				</ul>
			</section>
			<section class="sec0">
				<div class="wzguomei-box">
					<ul>
						<li>
							<a href=""><img src="../../img/wzguomei01.jpg" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../../img/wzguomei02.jpg" alt=""></a>
						</li>
					</ul>
				</div>
			</section>
			<section>
				<div class="share-box">
					<div class="txt-title">
						<div class="seckill choiceness">
							<div class="seckill-title choiceness-title">
								<h3>精选特色</h3>
								<small>专享好货 轻松赚钱</small>
							</div>
						</div>
					</div>
					<div class="swiper-container" width="100%">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="list in share">
								<ul>
									<li>
										<h4><img :src="list.img" alt=""></h4>
										<div class="no-warp">
											赚&nbsp;
											<p class="price">{{list.price}}</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="swiper-slide">查看更多</div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
							<div class="swiper-slide"></div>
						</div>
					</div>
				</div>
			</section>
			<section class="sec0 img-title">
				<ul>
					<li><a href=""><img src="../../img/guessyoulike_title.png" alt=""></a></li>
				</ul>
			</section>
			<section class="sec0">
				<div class="guessyoulike-box">
					<div class="guess">
						<ul>
							<li v-for="list in guessyoulike">
								<div class="li-contain">
									<a class="img-contain" href="">
										<img :src="list.img" alt="">
									</a>
									<h4><a href="">{{list.title}}</a></h4>
									<p class="price">{{list.price}}</p>
								</div>
							</li>
						</ul>
						<div class="no-more">
							<img src="../../img/tips2.png" alt="">
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div class="footer-box">
					<div class="footer-link">
						<router-link class="border-right" to="">登陆</router-link>
						<router-link class="border-right" to="">注册</router-link>
						<router-link class="border-right" to="">更多</router-link>
						<router-link to="">反馈</router-link>
					</div>
				</div>
				<div class="footer-msg">
					<div class="msg-contain">
						<div class="footer-txt">
							<p><a href="">互联网药品信息服务资格证编号(京)-经营性-2019-0025</a></p>
							<p>
								<a href=""><span>经营证照</span></a>&nbsp;&nbsp;
								<a href=""><span>增值电信业务经营许可证</span></a>&nbsp;&nbsp;
								<a href=""><span>出版物经营许可证</span></a>
							</p>
							<p><a href="">网络文化经营许可证沪网文[2017]5537-436号</a></p>
							<p>
								<span>京公安网备11010502027062</span>
								<span>沪B2-20120004号</span>
							</p>
							<p>沪ICP备11009419号</p>
							<p>网络食品销售第三方平台提供者备案：沪网食备A0015号</p>
						</div>
						<div class="copyright">
							<p>copyright ©  2000-2019 gome.com.cn</p>
							<p>
								客服热线：
								<a href="">4008-113-333</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</keep-alive>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data() {
			return {
				show: true,
				select: [],
				select2: [],
				swiper: [],
				hour: '24',
				minute: '00',
				second: '00',
				seckillList: [],
				brandSale: [],
				banner: [],
				phone: [],
				furniture: [],
				tv: [],
				refrigerator: [],
				computer: [],
				cooker: [],
				wisdomdecoration: [],
				choiceness:[],
				features:[],
				share:[],
				guessyoulike:[]
			}
		},
		mounted() {
			var _this = this;
      if(window.sessionStorage.hideLink){
        _this.show = false;
      }
			_this.$http.get('./src/data/home.json')
				.then(function(res) {
					console.log(res)
					_this.select = res.data.select;
					_this.select2 = res.data.select2;
					_this.swiper = res.data.swiper;
					_this.seckillList = res.data.seckillList;
					_this.brandSale = res.data.brandSale;
					_this.banner = res.data.banner;
					_this.phone = res.data.phone;
					_this.furniture = res.data.furniture;
					_this.tv = res.data.tv;
					_this.refrigerator = res.data.refrigerator;
					_this.computer = res.data.computer;
					_this.cooker = res.data.cooker;
					_this.wisdomdecoration = res.data.wisdomdecoration;
					_this.choiceness = res.data.choiceness;
					_this.features = res.data.features;
					_this.share = res.data.share;
					_this.guessyoulike = res.data.guessyoulike;
				})
				.catch(function(error) {
					console.log(error);
				})
				.then(function() {
					// always executed:一定执行
				});
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal', // 垂直切换选项
				loop: false, // 循环模式选项
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				slidesPerView: 3,
				pagination: '.swiper-pagination',
				freeMode: true,
				freeModeSticky: true,
			})
		},
		methods: {
			hide() {
				this.show = !this.show;
        window.sessionStorage.hideLink = true;
			}
		},
		computed: {
			optionSingleHeight() {
				return {
					//                       （什么都不设置默认的）
					singleHeight: 40, //（带停顿的）
					waitTime: 1000 //（停顿时间）
					// direction: 0          （从上往下的）
					// direction:2           （左右的）
					//step:1                 （调整速度的）0
					// hoverStop:false        (鼠标停留停止 离开继续运行（反之则停止）)
				}
			}
		}
	}
</script>

<style scoped="scoped">
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
		background-image: url(../../img/T1SfDgB4Ev1RCvBVdK.png);
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
	.m-downapp {
		height: 5rem;
	}
	.download-info {
		float: left;
		width: 75%;
		height: 100%;
		background: #232323;
	}
	.m-downapp a {
		display: inline-block;
		float: left;
		width: 1.25rem;
		height: 5rem;
		margin-left: 5%;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.m-downapp span {
		display: inline-block;
		width: 1.25rem;
		height: 1.25rem;
	}
	.m-img-box {
		float: left;
		width: 3.5rem;
		height: 5rem;
		margin: 0 3% 0 5%;
		display: flex;
		align-items: center;
	}
	img {
		width: 100%;
	}
	.m-sign {
		float: left;
		font-size: 1.3rem;
		padding: 0.75rem 0rem;
		width: 13rem;
		text-align: left;
	}
	.m-sign p {
		color: #fff;
		line-height: 1.8rem;
	}
	.down-red {
		float: left;
		width: 25%;
	}
	.down-red a {
		width: 100%;
		display: inline-block;
		background: #ee1955;
		margin: 0;
		color: #fff;
		font-size: 1.5rem;
		line-height: 5rem;
	}
	.search-box {
		height: 4.4rem;
		background: #fff;
		width: 100%;
	}
	.m-header {
    display: flex;
		height: 4.4rem;
		width: 100%;
		padding: 0 1rem;
	}
	.logo {
		float: left;
		margin: 1rem 1rem 1rem .2rem;
		height: 2.4rem;
	}
	.logo img {
		width: auto;
		height: 2.4rem;
	}
	.input-box {
		float: left;
		width: 60%;
		height: 4.4rem;
		padding-top: .7rem;
	}
	.search {
		float: left;
		width: 100%;
		height: 3rem;
		background-color: #f6f6f6;
		overflow: hidden;
		border-radius: 22rem;
		display: flex;
		align-items: center;
	}
	.search-icon {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 1rem;
	}
	.search input {
		border: none;
		outline: none;
		color: #999;
		background-color: #f6f6f6;
		font-size: 1.2rem;
	}
	.search-right {
		float: left;
		width: 27%;
		padding-left: 7%;
	}
	.car-user {
		margin-top: 1rem;
		margin-bottom: 1rem;
		overflow: hidden;
    display: flex;
	}
	.search-right a {
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
	.warp-box .mint-swipe {
		width: 100%;
		height: 11.0294rem;
	}
	.mint-swipe img {
		height: 100%;
	}
	.warp-box .mint-swipe-indicator {
		display: inline-block;
		background: #fff;
		opacity: 0.5;
		width: .6rem;
		height: .6rem;
		margin: 0 .5rem;
	}
	.mint-swipe .mint-swipe-indicator.is-active {
		opacity: 1;
	}
	.mint-swipe-indicators {
		bottom: 4px;
	}
	.select .mint-swipe {
		width: 375px;
		padding-bottom: 1.5rem;
		padding-top: 1rem;
	}
	.selector-box .mint-swipe {
		width: 100%;
		height: 16.8rem;
	}
	.selector-box {
		background: #fff;
	}
	.selector-box ul {
		width: 100%;
		overflow: hidden;
	}
	.selector-box li {
		float: left;
		width: 20%;
		margin: 0;
		margin-bottom: .6rem;
	}
	.selector-box p {
		font-size: 1.2rem;
		color: #333;
		height: 1.9rem;
		line-height: 1.9rem;
	}
	.selector-box .mint-swipe-indicator {
		width: .5rem;
		height: .5rem;
	}
	.selector-box .mint-swipe-indicator.is-active{
		opacity: 1;
		background-color: #f20c59;
	}
	.gif-box {
		background: #fff;
	}
	.headline {
		background-color: #fff;
		padding: .2rem 0;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.title {
		width: 6rem;
		display: flex;
		align-items: center;
	}
	.caption {
		float: left;
		padding-left: 1.4rem;
		padding-right: .7rem;
	}
	.swiper ul {
		height: 3rem;
	}
	.swiper ul li {
		height: 3rem;
		display: flex;
		align-items: center;
	}
	.swiper a {
		display: inline-block;
		color: #333;
		font-size: 1.3rem;
	}
	.swiper span {
		display: inline-block;
		color: #f20c59;
		border: 1px solid #F20C59;
		border-radius: .5rem;
		padding: 0 .3rem;
		font-size: 1rem;
	}
	.seamless-warp {
		height: 3rem;
		overflow: hidden;
	}
	.seckill {
		overflow: hidden;
	}
	.seckill-title h3,
	.m-timer {
		float: left;
	}
	.seckill-title h3 {
		font-size: 1.6rem;
		color: #262c32;
		padding-left: 1rem;
		font-weight: 700;
	}
	.seckill-title p {
		font-size: 1.4rem;
		padding-left: .3rem;
		color: #262C32;
		line-height: 2.2rem;
	}
	.seckill-title .m-timer {
		color: #33383E;
		margin-top: .1rem;
		margin-left: .3rem;
	}
	section {
		margin-top: 1rem;
		background: #fff;
		overflow: hidden;
	}
	.sec {
		padding-top: 1.2rem;
	}
	.seckill-title {
		float: left;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.time-box span {
		display: inline-block;
		background: #33383E;
		color: #fff;
		border-radius: .3rem;
		padding: 0 .2rem;
	}
	.sk-good {
		float: right;
		padding-right: .5rem;
	}
	.sk-good a {
		font-size: 1.2rem;
		color: #333;
	}
	.sk-good a span {
		font-size: 1.5rem;
		color: #F20C59;
	}
	.swiper-container {
		margin-top: 2.4rem;
	}
	.swiper-slide {
		width: 33.3%;
	}
	.price {
		display: inline-block;
		margin-top: .8rem;
		font-size: 1.3rem;
	}
	.surplus {
		margin-bottom: 1.4rem;
	}
	.sale img {
		display: block;
	}
	.sale-list li {
		width: 25%;
		margin: 0;
		display: block;
		float: left;
	}
	.banner1 li {
		width: 25%;
		margin: 0;
		border-right: 1px solid #f2f2f2;
	}
	.banner2 li {
		margin: 0;
	}
	.banner3 li {
		float: left;
		width: 50%;
		margin: 0;
	}
	.warp-middle .mint-swipe {
		height: 8rem;
	}
	.warp-middle .mint-swipe-indicator {
		width: .5rem;
		height: .5rem;
		background: #fff;
		margin: 0 5px;
	}
	.sec0 {
		margin: 0;
	}
	.sec0 li {
		margin: 0;
		display: block;
	}
	img {
		display: block;
	}
	.phone-list span {
		display: inline-block;
		border: 1px solid #f1f1f1;
		border-radius: 5rem;
		line-height: 1.6rem;
		height: 1.6rem;
		color: #7A7F85;
		font-size: 1rem;
		text-align: center;
		padding: 0 .1rem;
		margin-top: 1rem;
	}
	.phone-list .price {
		color: #F20C59;
		margin-top: .5rem;
		margin-bottom: 1rem;
	}
	.phone-title li {
		margin: 0;
	}
	.phone-list .swiper-container {
		margin-top: .9rem;
	}
	.sec1 {
		margin-top: 0;
	}
	.no-warp {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.txt-title{
		padding: 1rem 0;
	}
	.choiceness-list ul{
		overflow: hidden;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.choiceness-list li{
		width: 25%;
		border-right: 1px solid #f2f2f2;
		border-top: 1px solid #F2F2F2;
	}
	.sec-top{
		margin-top: 1rem;
	}
	.wzguomei-box li{
		border-right: 1px solid #f2f2f2;
		float: left;
		width: 50%;
	}
	.share-box small{
		color: #999;
		font-size: 1.2rem;
	}
	.share-box .swiper-container{
		margin-top: 0;
	}
	.share-box .no-warp{
		margin-top: .8rem;
		color: #7A7F85;
		font-size: 1.2rem;
	}
	.share-box .no-warp p{
		margin-top: 0;
		color: #F20C59;
		font-size: 1.4rem;
	}
	.share-box ul{
		padding-bottom: 1rem;
	}
	.share-box ul li{
		padding: 0 .6rem;
	}
	.guess li{
		width: 50%;
		margin-bottom: .3rem;
		background: #F3F5F7;
		padding-right: .3rem;
	}
	.guess li:nth-of-type(2n){
		padding-right: 0;
	}
	.li-contain{
		width: 100%;
		background: #fff;
		overflow: hidden;
	}
	.guess h4{
		margin-bottom: .8rem;
		height: 3rem;
		line-height: 1.6rem;
		font-size: 1.2rem;
		overflow: hidden;
		text-align: left;
		padding: 0 1rem;
		font-weight: normal;
	}
	.guess a{
		color: #333;
	}
	.guess .price{
		margin-top: 0;
		color: #F20C59;
		padding: 0 1rem 1.3rem;
		font-size: 1.6rem;
		float: left;
	}
	.guess .img-contain{
		display: block;
		margin-bottom: 1.3rem;
	}
	.guess ul{
		display: flex;
		flex-wrap: wrap;
		background: #F3F5F7;
		justify-content: center;
		align-items: flex-end;
	}
	.no-more{
		background: #F3F5F7;
	}
	footer{
		background: #fff;
		padding-bottom: 5rem;
	}
	.footer-box{
		padding: 1.5rem 3rem;
		border-bottom: .1rem solid #ddd;
		border-top: 1px solid #e6e6e6;
	}
	.footer-link{
		display: flex;
		align-items: center;
	}
	.footer-link a{
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		position: relative;
		flex: 1;
		color: #888;
		font-size: 1.3rem;
		padding: 0 .7rem;
		text-align: center;
	}
	.footer-link .border-right::after{
		content: '';
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background: #ddd;
	}
	.footer-msg{
		color: #888;
	}
	.footer-msg a{
		color: #888;
	}
	.footer-msg{
		padding: 1.5rem 0 1.2rem 0;
	}
	.footer-txt{
		padding: 0 1rem .5rem;
	}
	footer p{
		margin-bottom: .5rem;
	}
	.copyright p{
		font-size: 1.1rem;
	}
</style>
