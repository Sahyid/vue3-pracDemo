<template>
  <div style="    background-color: rgb(235, 235, 235);">
    <div class="block">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in img" :key="item.id">
          <img :src="item.url" height="400" alt="" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div>
      <template>
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in img" :key="item.id">
            <img :src="item.url" height="400" alt="" class="image">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div> -->
    <div class="center">
      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/Kind1">
              <img src="../assets/book/kind1.png" height="210" alt="电子产品">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/Kind1">
              电子产品
            </router-link>
          </h2>
        </div></div>
      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/Kind2">
              <img src="../assets/book/kind2.png" height="210" alt="闲置书籍">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/Kind2">
              闲置书籍
            </router-link>
          </h2>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/Kind3">
              <img src="../assets/book/kind3.png" height="210" alt="自行车用品">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/Kind3">
              自行车用品
            </router-link>
          </h2>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/Kind4">
              <img src="../assets/book/kind4.png" height="210" alt="动漫/周边">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/Kind4">
              动漫/周边
            </router-link>
          </h2>
        </div></div>

      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/Kind5">
              <img src="../assets/book/kind5.png" height="210" alt="玩具乐器">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/Kind5">
              玩具乐器
            </router-link>
          </h2>
        </div></div>
      <div class="ll">
        <div class="photo-wrapper">
          <div class="photo-img">
            <router-link to="/More">
              <img src="../assets/book/kind6.png" height="210" alt="更多">
            </router-link>
          </div>
          <h2 class="photo-title">
            <router-link to="/More">
              更多
            </router-link>
          </h2>
        </div></div>
    </div>

  </div>
</template>

<script>
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
export default {
  name: "Show",
  data(){
    return{
      value:4.5,
      img:[
        {
          id: '1',
          url: require("../assets/show/img/slider1.jpg")
        },
        {
          id: '2',
          url: require("../assets/show/img/slider2.jpg")
        },
        {
          id: '3',
          url: require("../assets/show/img/slider3.jpg")
        },
        {
          id: '4',
          url: require("../assets/show/img/slider4.jpg")
        },
      ]
    }
  }
}
</script>

<style scoped>
.block{
  height:500px;
}
.center{
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
}
.ll{
  border-radius: 10px;
  border: 1px solid #ffffff;
  width: 320px;
  margin: 20px;
  display: inline-block;
  background-color: rgb(255, 255, 255);
}

.photo-wrapper{
  border-radius: 10px;
  padding:0;
  width: 100%;
  background-color: #fff;
  display: inline-block;
  border: 1px rgba(255, 255, 255, 0) solid;
}
.photo-wrapper:hover{
  border-radius: 10px;
  border: 1px solid black;
  padding:0;
  width: 100%;
  background-color: #fff;
  display: inline-block;
}
.photo-title{
  display: inline-block;
  height: 15px;
  line-height: 15px;
  border-left: 3px #19285d solid;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 3px;
  font-size: 20px;
}

.photo-title a{
  color: #404606;
  font-weight: bold;
  text-decoration: none;
}

.photo-img{
  height: 260px;
}

img{
  width: 100%;
  border-radius: 10px;
}

.photo-list li{
  margin-left: 20px;
  list-style: none;
  line-height: 15px;
  text-align: left;
  margin-bottom: 10px;
}

.photo-list li::before{
  content: '■';
  color: rgb(218,218,218);
  font-size:14px;
  margin-right: 4px;
}

.photo-list li a{
  font-size: 16px;
  text-decoration: none;
  color: #666;
}
.photo-list li a:hover{
  color: rgb(186, 188, 229);
  list-style: none;
}



.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
