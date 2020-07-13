<template>
  <div class="home">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/sho" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/kc" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/yk" icon="thumb-circle-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/lx" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace icon="contact" @click="us">我的</van-tabbar-item>
    </van-tabbar>
    <!-- <router-link to="/shop">shop</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import "../utils/meiqia"
export default {
  name: "Home",
  methods: {
    us(){
      var lo = localStorage.getItem("token")
      if(lo){
        this.$router.push("/user")
      }else{
        this.$router.push("/loding")
      }
    }
  },
};
</script>
<style lang="scss">
.home {
  .van-tabbar-item__icon {
    font-size: 40px;
  }
  .van-tabbar {
    height: 100px;
  }
  .van-tabbar-item {
    font-size: 23px;
  }
  .van-tabbar-item--active {
    color: rgb(235, 97, 0);
  }
}
</style>
