<template>
  <div class="myapp">
    <div class="imgs">
      <!-- <img src="../assets/01.jpg" alt=""> -->
    </div>
    <div class="header"></div>
    <div class="operation">
      <div class="operation_top">
        <span class="tx">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
            class="jq"
            alt
          />
        </span>
        <span>{{ los }}</span>
        <span class="bian">编辑</span>
      </div>
      <div class="operation_up">
        <ul>
          <li>
            <p>0</p>
            <h6>我的课程</h6>
            <b>-易购课程学习-</b>
          </li>
          <li>
            <p>0</p>
            <h6>我的预约</h6>
            <b>-一对一老师预约-</b>
          </li>
          <li>
            <p>0</p>
            <h6>剩余学习币</h6>
            <b>-查看剩余学习币-</b>
          </li>
        </ul>
      </div>
    </div>
    <!-- 注册app -->
    <div class="z_app">
      <img src="../../assets/2.jpg" alt />
      <div>
        <h6>邀请好友注册App,享多重好礼</h6>
        <b>限时特惠，多邀多得</b>
      </div>
      <img src="../../assets/1.jpg" alt />
    </div>

    <div class="Kc">
      <h4>课程相关</h4>
      <van-grid icon-size="32px">
        <van-grid-item icon="description" text="我的作业"></van-grid-item>
        <van-grid-item icon="friends-o" text="关注的老师" @click="gz" />
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="down" text="我的下载" />
      </van-grid>
    </div>

    <div class="Dd">
      <h4>订单相关</h4>
      <van-grid icon-size="32px">
        <van-grid-item icon="records" text="我的订单" />
        <van-grid-item icon="cash-back-record" text="收货地址" />
      </van-grid>
    </div>
    <div class="Zh">
      <h4>我的账户</h4>
      <van-grid icon-size="32px">
        <van-grid-item icon="balance-pay" text="优惠价"></van-grid-item>
        <van-grid-item icon="credit-pay" text="学习卡" />
        <van-grid-item icon="bulb-o" text="会员" />
      </van-grid>
    </div>
    <div class="Fw">
      <h4>自助服务</h4>
      <van-grid icon-size="32px">
        <van-grid-item icon="user-circle-o" text="我的消息"></van-grid-item>
        <van-grid-item icon="envelop-o" text="意见反馈" />
        <van-grid-item icon="phone-circle-o" text="在线客服" />
        <van-grid-item icon="wap-home-o" text="设置" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      los:""
    };
  },
  mounted() {
    // 获取本地的手机号
    this.so()
  },
  methods: {
    // 点击进入关注老师
    gz() {
      this.$router.push("/gz");
    },
    // 获取本地的手机号
    so(){
     this.los = JSON.parse(localStorage.getItem("mobile")) 
    }
  }
};
</script>

<style lang="scss">
.myapp {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
  .imgs {
    width: 100%;
    z-index: 1;
  }
  .imgs img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .header {
    width: 100%;
    height: 6rem;
    background: #fb5500;
    border-radius: 45%;
    margin-top: -2.8rem;
    z-index: 0;
  }
  .operation {
    width: 90%;
    height: 3.6rem;
    background: #fff;
    z-index: 1;
    margin-top: -2.3rem;
    /* // border: 1px solid darkgray; */
    border-radius: 3%;
    box-shadow: 1px 1px 4px #000;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .z_app {
    width: 90%;
    height: 1.5rem;
    background: #fb5500;
    margin-top: 0.7rem;
    border-radius: 1rem;
    display: flex;
    /* //  line-height: 1.5rem; */
    justify-content: space-around;
  }
  .z_app img {
    width: 0.6rem;
    height: 0.9rem;
    display: block;
    line-height: 1.5rem;
    margin: 0.2rem 0.2rem 0rem 0.6rem;
  }
  .z_app div {
    height: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 0.2rem;
  }
  .z_app div h6 {
    font-size: 0.34rem;
    width: 100%;
    color: #fff;
  }
  .z_app div b {
    font-size: 0.3rem;
    width: 100%;
    color: #fff;
  }
  .operation_top {
    width: 100%;
    height: 1.8rem;
    display: flex;
    line-height: 1.8rem;
    justify-content: space-around;
  }
  .operation_top .bian {
    width: 1rem;
    height: 0.8rem;
    background: #fb5500;
    margin: 0.4rem -0.8rem 0rem 0rem;
    border-radius: 1rem 0rem 0rem 1rem;
    z-index: 0;
    line-height: 0.8rem;
    color: #fff;
    font-size: 0.42rem;
    padding-left: 0.5rem;
  }
  .operation_top span {
    font-size: 0.42rem;
    line-height: 1.8rem;
  }
  .operation_top .tx {
    width: 1.8rem;
    height: 1.8rem;
    display: block;
    border-radius: 50%;
  }
  .operation_up {
    width: 100%;
    height: 1.8rem;
  }
  .operation_up ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .operation_up ul li {
    width: 33%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .operation_up ul li p {
    width: 100%;
    text-align: center;
    font-size: 0.55rem;
    color: orange;
  }
  .operation_up ul li h6 {
    font-size: 0.34rem;
  }
  .operation_up ul li b {
    font-weight: normal;
    font-size: 0.28rem;
    color: gray;
  }
  .Kc {
    width: 90%;
    height: 3.2rem;
    /* // background: green; */
    margin-top: 0.3rem;
  }
  .Kc h4 {
    font-size: 0.5rem;
  }
  .van-grid {
    height: 1.7rem;
    background: #ccc;
    margin-top: 0.5rem;
  }
  .van-grid-item__icon {
    color: orange;
  }
  .Dd {
    width: 90%;
    height: 3.2rem;
    /* // background: green; */
    margin-top: 0.3rem;
  }
  .Dd h4 {
    font-size: 0.5rem;
  }
  .van-grid {
    background: none;
  }
  .Zh {
    width: 90%;
    height: 3.2rem;
    /* background: green; */
    margin-top: 0.3rem;
  }
  .Zh h4 {
    font-size: 0.5rem;
  }
  .Zh .van-grid-item__icon {
    color: red;
  }
  .Fw {
    width: 90%;
    height: 3.2rem;
    /* background: green; */
    margin-top: 0.3rem;
  }
  .Fw h4 {
    font-size: 0.5rem;
  }
  .Fw .van-grid-item__icon {
    color: red;
  }
  .jq {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
}
</style>