<template>
  <div class="kc">
    <van-nav-bar class title="特色课">
      <template #right>
        <van-icon name="search" size="18" @click="go_ss()" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <ul class="qdf_ul">
      <li class="qdf_li" v-for="item of qdf_nav" :key="item.index" @click="qdf_tzxqy()">
        <p class="qdf_title">
          <font>{{item.news}}</font>
        </p>
        <div class="qdf_time">
          <p class="qdf_after">{{item.time}}</p>
          <p>共{{item.shi}}课时</p>
        </div>
        <div class="qdf_teacher">
          <div class="qdf_teacher_item">
            <img :src="item.img" alt />
            <font>{{item.name}}</font>
          </div>
        </div>
        <p class="qdf_info">
          <span class="qdf_person">{{item.num}}人已报名</span>
          <font class="qdf_free">{{item.con}}</font>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "kc",
  components: {},
  props: {},
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "b",
      option1: [
        { text: "分类", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "筛选", value: "b" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      qdf_nav: [
        {
          news: "李老师16号到22号地理大课堂开课啦",
          time: "03月16日 18:30 ~ 03月22日 15:00",
          shi: "8",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "20",
          con: "免费"
        },
        {
          news: "李老师9号地理大课堂开课啦",
          time: "03月09日 18:30 ~ 03月15日 15:00",
          shi: "7",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "20",
          con: "免费"
        },
        {
          news: "李老师女神节地理大课堂开课啦",
          time: "03月08日 08:30 ~ 03月08日 15:00",
          shi: "3",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "11",
          con: "免费"
        },
        {
          news: "李青29号1号地理大课堂开始啦",
          time: "02月29日 10:00 ~ 03月01日 15:00",
          shi: "5",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "13",
          con: "免费"
        },
        {
          news: "22号李老师大课堂开课啦",
          time: "02月22日 10:00 ~ 02月23日 20:00",
          shi: "3",
          img:
            "https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg",
          name: "李青",
          num: "6",
          con: "免费"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    go_ss() {
      this.$router.push(-1);
    },

    qdf_tzxqy() {
      this.$router.push("/twoke");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
.kc {
  .qdf_ul {
    padding: 0.4rem;
    padding: 4vw;
    background: #f0f2f5;
  }
  .qdf_li {
    background: #fff;
    border-radius: 0.13333rem;
    border-radius: 1.33333vw;
    padding: 0 0.37333rem;
    padding: 0 3.73333vw;
    margin-bottom: 0.4rem;
    margin-bottom: 4vw;
    position: relative;
  }
  .qdf_title {
    padding-top: 0.4rem;
    padding-top: 4vw;
  }
  .qdf_title font {
    font-size: 0.42667rem;
    font-size: 4.26667vw;
    // font-family: PingFangSC-Medium;
    font-weight: 400;
    color: #333;
  }
  .qdf_time {
    display: flex;
    align-items: center;
  }
  .van-nav-bar {
    height: 1rem;
  }
  .van-nav-bar__title {
    font-size: 0.5rem;
  }
  .qdf_after {
    padding-left: 0.53333rem;
    padding-left: 5.33333vw;
    // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAGdElEQ…7D7bIT6T8ppX5D8qmltjcNVN9Rf6pC343nMmv03YDqJvO/L6pVWKmfOusAAAAASUVORK5CYII=) no-repeat 0;
    background-size: 0.37333rem 0.37333rem;
    background-size: 3.73333vw 3.73333vw;
  }
  .qdf_time p {
    height: 0.8rem;
    height: 8vw;
    line-height: 0.8rem;
    line-height: 8vw;
    display: inline-block;
    font-size: 0.32rem;
    font-size: 3.2vw;
    // font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666;
    padding-right: 0.45333rem;
    padding-right: 4.53333vw;
    position: relative;
  }
  .qdf_teacher {
    height: 1.73333rem;
    height: 17.33333vw;
    display: flex;
  }
  .qdf_teacher_item {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .qdf_teacher_item img {
    width: 0.72rem;
    width: 7.2vw;
    height: 0.72rem;
    height: 7.2vw;
    border-radius: 50%;
  }
  .qdf_teacher_item font {
    font-size: 0.32rem;
    font-size: 3.2vw;
    // font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    margin-left: 0.22667rem;
    margin-left: 2.26667vw;
    margin-right: 0.46667rem;
    margin-right: 4.66667vw;
  }
  .qdf_info {
    border-top: 1px solid #f5f5f5;
    height: 1.17333rem;
    height: 11.73333vw;
    line-height: 1.17333rem;
    line-height: 11.73333vw;
    display: flex;
    font-size: 0.34667rem;
    font-size: 3.46667vw;
    // font-family: PingFangSC-Regular;
  }
  .qdf_person {
    flex: 1;
  }
  .qdf_free {
    color: #44a426;
    font-size: 0.42667rem;
    font-size: 4.26667vw;
  }
}
</style>