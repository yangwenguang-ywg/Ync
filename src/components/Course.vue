<template>
  <div class="course">
    <!-- 头部导航 -->
    <!-- <div :class="flag?'fixedClass':''">
      <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft" />
    </div>-->
    <div :class="flag?'fixedClass':''">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #title>
          <p v-show="!flag">课程详情</p>
          <div class="xi" v-show="flag">
            <ul>
              <li @click="je">课程介绍</li>
              <li @click="da">课程大纲</li>
              <li @click="tocomment">课程评价</li>
            </ul>
          </div>
        </template>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="top">
      <van-icon name="star-o" />
      <h3>{{ arr.title }}</h3>
      <p class="p1">{{ arr.price | Myprice }}</p>
      <p class="p2">共{{ arr.is_free }}课时| 共有{{ arr.sales_num }}报名</p>
    </div>
    <!-- 教师团队 -->
    <div class="tea" v-for="(m,n) of fl" :key="n">
      <h3>教师团队</h3>

      <div class="small">
        <img :src="m.teacher_avatar" alt />
      </div>
      <span>{{m.teacher_name}}</span>
    </div>
    <!-- 课程介绍 -->
    <div class="introduce">
      <h3 ref="je">课程介绍</h3>
      <p v-html=" arr.course_details "></p>
    </div>
    <!-- 教学大纲 -->
    <div class="dg">
      <h3 ref="da">教学大纲</h3>
      <p v-html=" arr.course_details "></p>
    </div>
    <!-- 课程评论 -->
    <div class="pl">
      <h3 ref="tocomment">课程评论</h3>
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <div class="small">
            <img :src="item.avatar" alt />
          </div>
          <div class="right">
            <p>
              <span>{{ item.nickname }}</span>
              <van-rate color="orange" v-model="value" />
            </p>
            <h3>{{ item.content }}</h3>
          </div>
        </li>
      </ul>
    </div>

    <van-button color="#eb6100">立即预约</van-button>
    <!-- <div style="margin-bottom:200px;">123</div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [], //详情数据
      fl: [], //详情图片和名字数据
      nav: [], //评价数据
      value: 3,
      flag: false
    };
  },
  created() {
    // 回到顶部
    document.body.scrollTop = document.documentElement.scrollTop = 0; // 滚动条的获取
  },
  mounted() {
    // 详情
    this.xq();
    // 评价数据
    this.ql();
    // 滚动事件
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 详情
    async xq() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/courseInfo/basis_id=${this.$route.query.id}&course_type=${this.$route.query.course_type}`
      );
      this.arr = res.data.info;
      this.fl = res.data.teachers;
    },
    // 评价数据
    async ql() {
      let { data: res } = await axios.post(
        `https://www.365msmk.com/api/app/courseComment?id=${this.$route.query.id}&limit=10&page=1`
      );
      // console.log(res);
      this.nav = res.data.list;
    },
    // 滚动事件的回调方法
    handleScrollx() {
      // console.log("滚动高度", window.pageYOffset);
      this.flag = window.pageYOffset > 30;
      // console.log(
      //   "距离顶部高度",
      //   this.$refs.obtain.getBoundingClientRect().top
      // );
    },
    // 点击回到指定的dom元素
    // 课程评价
    tocomment(){
      this.$refs.tocomment.scrollIntoView();
    },
    // 课程大纲
    da(){
      this.$refs.da.scrollIntoView();
    },
    // 课程介绍
    je(){
      this.$refs.je.scrollIntoView();
    }
  },
  filters: {
    // 过滤免费和不免费
    Myprice(val) {
      if (val == 0) {
        return "免费";
      } else {
        return `￥${(val / 100).toFixed(2)}`;
      }
    }
  }
};
</script>

<style lang="scss">
.course {
  .van-tabs--line .van-tabs__wrap {
    height: 105px;
  }
  .van-tabs__content {
    padding: 0 40px;
  }
  .van-tab__text--ellipsis {
    font-size: 30px;
    color: #8c8c8c;
  }
  .van-tabs {
    background: #fff;
  }
  .van-nav-bar {
    height: 100px;
    background: #fff;
  }
  .van-icon-arrow-left::before {
    color: black;
    font-size: 45px;
  }
  .van-nav-bar__title {
    font-size: 33px;
    color: black;
  }
  // 脱离文档流
  .fixedClass {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .xi {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        margin: 0 10px;
      }
    }
  }
  .top {
    width: 95%;
    height: 200px;
    background-color: white;
    padding: 20px;

    h3 {
      font-size: 30px;
      line-height: 46px;
    }
    .p1 {
      color: orange;
      font-size: 30px;
    }
    .van-icon {
      float: right;
      margin: 10px 20px;
    }
    .p2 {
      line-height: 60px;
      font-size: 26px;
      color: #8c8c8c;
    }
  }
  .tea {
    margin-top: 30px;
    width: 95%;
    height: 200px;
    background-color: white;
    padding: 20px;
    h3 {
      font-size: 30px;
    }
    .small {
      width: 80px;
      height: 80px;
      border: 1px solid #ccc;
      border-radius: 50%;
      margin-top: 10px;
      margin-left: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      color: #8c8c8c;
      font-size: 24px;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .introduce {
    height: 170px;
    width: 95%;
    background-color: white;
    margin-top: 20px;
    padding: 10px 20px;
    h3 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 28px;
    }
  }
  .dg {
    height: 130px;
    width: 95%;
    background-color: white;
    margin-top: 20px;
    padding: 10px 20px;
    h3 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 26px;
      line-height: 50px;
    }
  }
  .pl {
    height: 500px;
    width: 100%;
    background: white;
    // padding: 20px 20px;
    margin-top: 20px;
    margin-bottom: 160px;

    h3 {
      font-size: 30px;
    }
    ul {
      width: 80%;
      li {
        height: 120px;
        display: flex;
        .small {
          width: 80px;
          height: 80px;
          border: 1px solid #ccc;
          border-radius: 50%;
          margin-top: 10px;
          margin-left: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right {
          width: 100%;
          //   border: 1px solid red;
          margin-left: 20px;
          p {
            font-size: 26px;
            line-height: 40px;
            .van-rate {
              margin-left: 10px;
            }
          }
          h3 {
            font-size: 24px;
            color: #8c8c8c;
          }
        }
      }
    }
  }
  .van-button {
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
  }
}
</style>

