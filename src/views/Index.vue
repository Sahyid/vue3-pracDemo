<template>
  <div class="el-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mine' }">个人中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shoppingCar' }">
        购物车
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/discover' }">
        发现/信息
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style scoped>
.el-breadcrumb {
  text-align: center;
  padding-top: 1%;
  padding-left: 20%;
}
</style>
