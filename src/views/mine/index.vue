<template>
	<div class="mine">
		<div class="collect-box">
			<div class="collect-title main">
				<i class="el-icon-s-order" style="color: #ff6700;">&ensp;</i>我的信息
				<span class="tips">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
			</div>
		</div>
		<div class="box">
			<div class="header">
				<div class="h-left">
					<el-avatar :src="state.img" :size="100"></el-avatar>
					<div class="info">
						<div class="name">{{ state.mineName }}</div>
						<div class="mid">
							<div class="m-l">关注:{{ state.focusOn }}</div>
							<div class="m-r">粉丝:{{ state.fans }}</div>
						</div>
						<div class="foot">{{ state.gender }}生,加入{{ state.days }}天了</div>
					</div>
				</div>
				<h class="h-right">
					<div class="item" v-for="(item, index) in state.itemList" :key="index">
						<div class="num">{{ item.num }}</div>
						<div class="title">{{ item.title }}</div>
					</div>
				</h>
			</div>
			<div class="body">
				<order-item class="body-item" :item="item" v-for="(item, index) in state.orderData" :key="index"></order-item>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import OrderItem from './components/OderItem.vue';
const state = reactive({
	mineName: '青蛙娃子',
	focusOn: 0,
	fans: 0,
	gender: '女',
	days: 15,
	img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
	itemList: [
		{
			title: '我发布的',
			num: 12,
		},
		{
			title: '我卖出的',
			num: 12,
		},
		{
			title: '我买到的',
			num: 1,
		},
		{
			title: '我想要的',
			num: 10,
		},
	],
	orderData: [
		[
			{
				id: 1,
				order_id: 'sjjakskjjsnnn',
				order_time: 'Wed Feb 09 2022 21:39:00 GMT+0800',
				product_name: '小汉堡',
				product_price: 12,
				product_num: 1,
				img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
			},
		],
		[
			{
				id: 1,
				order_id: 'sjjakskjjsnnn',
				order_time: 'Wed Feb 09 2022 21:39:00 GMT+0800',
				product_name: '小汉堡',
				product_price: 12,
				product_num: 1,
				img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
			},
		],
		[
			{
				id: 1,
				order_id: 'sjjakskjjsnnn',
				order_time: 'Wed Feb 09 2022 21:39:00 GMT+0800',
				product_name: '小汉堡',
				product_price: 12,
				product_num: 1,
				img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
			},
			{
				id: 2,
				order_id: 'sjjakskjjsnnn',
				order_time: 'Wed Feb 09 2022 21:39:00 GMT+0800',
				product_name: '小汉堡',
				product_price: 12,
				product_num: 1,
				img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
			},
		],
	],
});
</script>

<style scoped>
.collect-title {
	font-size: 28px;
	padding: 20px 0;
}

.tips {
	color: #757575;
	font-size: 12px;
	height: 20px;
	line-height: 20px;
	margin-top: 30px;
	margin-left: 15px;
}
.collect-box {
	border-bottom: solid #ff6700 2px;
}
.box {
	padding-top: 1vw;
	width: 100%;
	min-height: 70vh;
	background-color: #f1f3f4;
}
.header {
	display: flex;
	width: 100%;
	height: 17vw;
}
.h-left {
	display: flex;
	width: 35%;
	height: 100%;
	background-color: #ff6700;
}
.el-avatar {
	margin: 4vw 1vw;
}
.m-l {
	margin-right: 2vw;
}
.mid {
	display: flex;
	margin-left: 6vw;
	margin-bottom: 2vw;
}
.name {
	font-weight: 600;
	font-size: 2vw;
	margin: 2.5vw 0 2vw 0;
}
.info {
	width: 70%;
	text-align: center;
	font-size: 1.1vw;
	color: #ffffff;
}
.body-item {
	width: 100%;
	margin-bottom: 1.5vw;
}
.body {
	margin-top: 2vw;
	width: 100%;
}
.title {
	margin-top: 2vw;
	font-size: 1.5vw;
	color: #666666;
}
.num {
	margin-top: 20%;
	font-weight: 500;
	font-size: 4.5vw;
}
.item {
	width: 25%;
	background-color: #ffffff;
	text-align: center;
}
.item:hover {
	background-color: #ecf5ff;
	cursor: pointer;
}
.h-right {
	width: 65%;
	background-color: burlywood;
	display: flex;
}
</style>
