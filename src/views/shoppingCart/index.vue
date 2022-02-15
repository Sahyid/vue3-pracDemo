<template>
	<div class="shoppingCart">
		<div class="collect-box">
			<div class="collect-title main">
				<i class="el-icon-shopping-cart-full" style="color: #ff6700;">&ensp;</i>我的购物车
				<span class="tips">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
			</div>
		</div>
		<div class="box">
			<div class="main shopCart">
				<div class="shopCart_title">
					<ul>
						<li>
							<el-checkbox v-model="state.isAllCheck" @change="checkAll">全选</el-checkbox>
						</li>
						<li>商品名称</li>
						<li>单价</li>
						<li>数量</li>
						<li>小计</li>
						<li>操作</li>
					</ul>
				</div>

				<div class="shopCart_content">
					<ul class="shopCart_contentul" v-for="(item, index) in state.shopCartList" :key="item.id">
						<li class="shopCart_contentli">
							<el-checkbox v-model="item.check" @change="checkitem"></el-checkbox>
						</li>
						<li class="shopCart_contentli">
							<img :src="item.img" alt="无法加载" />
							<span class="name">{{ item.productName }}</span>
						</li>
						<li class="shopCart_contentli">{{ item.price }}元</li>
						<li class="shopCart_contentli">
							<el-input-number v-model="item.num" :min="1" :max="item.maxNum" size="small" />
						</li>
						<li class="origin">{{ item.price * item.num }}元</li>
						<li class="shopCart_contentli">
							<!--删除购物车商品-->
							<el-popover placement="right" :width="160">
								<p style="padding-bottom: 10px;">确定删除吗？</p>
								<div style="text-align: right; margin: 0;">
									<el-button style="width: 45%;" type="primary" size="mini" @click="deleteGods(index)">确定 </el-button>
								</div>
								<template #reference>
									<i style="cursor: pointer;" class="el-icon-error"></i>
								</template>
							</el-popover>
						</li>
					</ul>
				</div>
			</div>
			<div class="shopCart_foot main">
				<div class="left">
					<span
						>共<i class="origin">&ensp;{{ total }}&ensp;</i>件商品，已选择&ensp;<i class="origin"> {{ isCheck }}</i
						>&ensp;件</span
					>
				</div>

				<div class="right">
					<span style="font-size: 13px; line-height: 50px;">合计:</span>
					<i class="origin" style="font-size: 26px; line-height: 50px;">{{ checkTotal }}元</i>
					<span :class="isCheck ? 'active settle' : 'settle'" @click="settleHandle">去结算</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed } from 'vue';
const state = reactive({
	// 全选
	isAllCheck: false,
	// 购物车列表
	shopCartList: [
		{
			id: 1,
			productID: 1,
			check: false,
			productName: 'kfc小汉堡',
			price: 10,
			num: 1,
			maxNum: 99,
			img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
		},
		{
			id: 2,
			productID: 2,
			check: true,
			productName: '奥力给饼干',
			price: 10,
			num: 1,
			maxNum: 99,
			img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
		},
		{
			id: 3,
			productID: 3,
			check: false,
			productName: '弯弯饼干',
			price: 20,
			num: 2,
			maxNum: 99,
			img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
		},
		{
			id: 4,
			productID: 4,
			check: false,
			productName: '黑每牙刷',
			price: 20,
			num: 2,
			maxNum: 99,
			img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
		},
		{
			id: 5,
			productID: 5,
			check: false,
			productName: '康帅府泡面',
			price: 20,
			num: 2,
			maxNum: 99,
			img: 'https://img0.baidu.com/it/u=1729342363,3766141666&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=805',
		},
	],
});

//购物车商品数量
const total = computed(() => {
	return state.shopCartList.length;
});
// 选中商品
const isCheck = computed(() => {
	let checkShop = state.shopCartList.filter((item) => {
		return item.check == true;
	});
	return checkShop.length;
});
// 总价
const checkTotal = computed(() => {
	let total = 0;
	let checkShop = state.shopCartList.filter((item) => {
		return item.check == true;
	});
	checkShop.forEach((item) => {
		total += item.price * item.num;
	});
	return total;
});

// 全选
const checkAll = () => {
	state.shopCartList.forEach((item) => {
		item.check = state.isAllCheck;
	});
};
// 删除
const deleteGods = (index) => {
	state.shopCartList.splice(index, 1);
};

// 单个选中
const checkitem = () => {
	let check = true;
	state.shopCartList.forEach((item) => {
		if (!item.check) {
			check = false;
		}
	});
	state.isAllCheck = check;
};
</script>

<style scoped>
i {
	font-style: normal;
}

.box {
	box-sizing: border-box;
	padding: 20px 0;
	background-color: #f5f5f5;
}
.shopCart {
	background-color: #fff;
}

ul {
	display: flex;
}
li {
	flex: 1;
	padding: 36px 6px;
	border-top: 1px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
}

li:nth-child(2) {
	flex: 2.8;
}
img {
	width: 80px;
}

.name {
	padding-left: 26px;
}
.shopCart_contentli:nth-child(2) {
	flex: 2.8;

	justify-content: initial;
	align-items: center;
}
.shopCart_contentli {
	padding: 18px 6px;
}
.shopCart_foot {
	color: #757575;
	margin-top: 24px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.sep {
	color: #eee;
	margin: 0 20px;
}
.left {
	padding: 0 32px;
	min-width: 310px;
	display: flex;
	justify-content: space-around;
}
.right {
	width: 390px;
	display: flex;
	justify-content: space-between;
}

.active {
	background: #ff6700 !important;
	color: white !important;
}

.settle {
	cursor: pointer;
	padding: 14px 0;
	width: 60%;
	text-align: center;
	background: #e0e0e0;
	color: #b0b0b0;
	font-weight: 500;
	font-size: 20px;
}
.collect-box {
	border-bottom: solid #ff6700 2px;
}
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
</style>
