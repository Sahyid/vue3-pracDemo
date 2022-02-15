<template>
	<div class="header">
		<el-header>
			<el-menu router :default-active="activeIndex" class="el-menu-demo main" mode="horizontal" active-text-color="#409eff">
				<!--        logo-->
				<div class="logo">
					<router-link to="/">
						<img src="http://106.15.179.105/img/logo.c8999c02.png" alt />
					</router-link>
				</div>
				<!--        路由-->
				<el-menu-item index="/">我的信息</el-menu-item>
				<el-menu-item index="/shoppingCart">购物车</el-menu-item>
			</el-menu>
		</el-header>
	</div>
</template>

<script setup></script>

<style scoped>
.el-header .el-menu {
	margin: 0 auto;
}

.logo {
	height: 60px;
	width: 189px;
	float: left;
	margin-right: 100px;
}

.search_wrap {
	margin-top: 10px;
	width: 300px;
	float: right;
}
</style>
