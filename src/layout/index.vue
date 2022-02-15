<template>
	<div>
		<Header class="header" />
		<div class="content">
			<router-view></router-view>
		</div>
		<Foot />
	</div>
</template>

<script setup>
import Header from './header/index.vue';
import Foot from './foot/index.vue';
</script>

<style scoped>
.header {
	margin-top: 2vw;
}
.content {
	width: 80vw;
	margin: 2vw auto 0 auto;
	min-height: 75vh;
}
</style>
