import VueRouter from 'vue-router'

import app from '../App.vue'

import index from '../component/index/index.vue'
import commoditydetails from '../component/index/commoditydetails.vue'

import home from '../component/home.vue'
import optimization from '../component/optimization.vue'
import classify from '../component/classify.vue'
import shoppingcar from '../component/shoppingcar.vue'
import my from '../component/my.vue'

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
export default new VueRouter({
	routes:[
		{
			path:'/home',component:home,
		},
		{
			path:'/commoditydetails',component:commoditydetails
		},
		{
			path:'/classify',component:classify,
			children:[
				{
					path:'/hotclass',component:hotclass
				},
				{
					path:'/digital',component:digital
				},
				{
					path:'/computer',component:computer
				},
				{
					path:'/television',component:television
				},
				{
					path:'/airconditioner',component:airconditioner
				},
				{
					path:'/kitchen',component:kitchen
				},
				{
					path:'/electricappliance',component:electricappliance
				},
				{
					path:'/foodstuff',component:foodstuff
				},
				{
					path:'/makeup',component:makeup
				},
				{
					path:'/toy',component:toy
				},
				{
					path:'/nutrition',component:nutrition
				},
				{
					path:'/costume',component:costume
				},
				{
					path:'/sports',component:sports
				},
				{
					path:'/luggage',component:luggage
				},
				{
					path:'/jewelry',component:jewelry
				},
				{
					path:'/furniture',component:furniture
				},
				{
					path:'/decoration',component:decoration
				},
				{
					path:'/commodity',component:commodity
				},
				{
					path:'/bedclothes',component:bedclothes
				},
				{
					path:'/caraccessories',component:caraccessories
				},
				{
					path:'/gold',component:gold
				},
				{
					path:'/smarthome',component:smarthome
				},
				{
					path:'/serve',component:serve
				}
			]
		},
		{
			path:'/optimization',component:optimization
		},
		{
			path:'/shoppingcar',component:shoppingcar
		},
		{
			path:'/my',component:my
		},
		{
			path:'/*',redirect:'/home'
		}
		
	]
})