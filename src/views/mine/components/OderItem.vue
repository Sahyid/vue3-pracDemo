<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>订单编号：{{ item[0].order_id }}</span>
				<el-button class="button" type="text">订单编号：{{ orderTime }}</el-button>
			</div>
		</template>
		<div class="title">
			<div class="item1">商品名称</div>
			<div class="item2">单价</div>
			<div class="item3">数量</div>
			<div class="item4">小计</div>
		</div>
		<div v-for="v in item" :key="v.id" class="shop-body">
			<div class="item11">
				<img :src="v.img" />
				<div class="text2">{{ v.product_name }}</div>
			</div>
			<div class="item22">{{ v.product_price }} 元</div>
			<div class="item33">{{ v.product_num }}</div>
			<div class="item44" style="color: #ff6700;">{{ v.product_price * v.product_num }} 元</div>
		</div>
		<div class="foot">
			<div class="left">共{{ numAll }}件商品</div>
			<div class="right">合计：{{ priceAll }}元</div>
		</div>
	</el-card>
</template>

<script>
import { computed, defineComponent, ref, reactive, toRefs } from 'vue';

export default defineComponent({
	name: '',
	props: {
		item: {
			type: Array,
			default: [],
		},
	},
	components: {},
	setup(props, ctx) {
		const numAll = computed(() => {
			let allNum = 0;
			props.item.forEach((v, i) => {
				allNum += v.product_num;
			});
			return allNum * 1;
		});
		const priceAll = computed(() => {
			let allPrice = 0;
			props.item.forEach((v, i) => {
				allPrice += v.product_num * v.product_price;
			});
			return allPrice.toFixed(2) * 1;
		});
		const orderTime = computed(() => {
			var dt = new Date(props.item[0].order_time);
			var year = dt.getFullYear(); //年
			var month = dt.getMonth() + 1; //月
			var data = dt.getDate(); //号
			var h = dt.getHours(); //时
			var m = dt.getMinutes(); //分
			var s = dt.getSeconds(); //秒
			//补零
			month = month < 10 ? '0' + month : month;
			data = data < 10 ? '0' + data : data;
			h = h < 10 ? '0' + h : h;
			m = m < 10 ? '0' + m : m;
			s = s < 10 ? '0' + s : s;
			let a = `${year}-${month}-${data} ${h}:${m}:${s}`;
			return a;
		});
		return {
			numAll,
			priceAll,
			orderTime,
		};
	},
});
</script>

<style scoped>
.title {
	display: flex;
	height: 4vw;
	border-bottom: 1px solid #e0e0e0;
}
.item1 {
	width: 40%;
}
.item2 {
	width: 20%;
}
.item3 {
	width: 20%;
}
.item4 {
	width: 20%;
}
.right {
	color: chocolate;
	font-size: 1.9vw;
	line-height: 2vw;
}
.foot {
	display: flex;
	padding: 1vw;
	justify-content: space-between;
	border-top: 1px solid #e0e0e0;
}
img {
	margin-top: 2vw;
	width: 8vw;
	height: 7vw;
}
.text {
	margin-left: 1vw;
	font-size: 1.9vw;
}
.item11 {
	display: flex;
	width: 40%;
}
.item22 {
	width: 20%;
}
.item33 {
	width: 20%;
}
.item44 {
	width: 20%;
}
.shop-body {
	display: flex;
	height: 10vw;
	margin-bottom: 1vw;
	font-size: 1.9vw;
	line-height: 10vw;
}
.el-card {
	width: 100%;
}
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.text2 {
	font-size: 20px;
	padding-left: 20px;
}

.item {
	margin-bottom: 18px;
}

.box-card {
	width: 480px;
}
</style>
