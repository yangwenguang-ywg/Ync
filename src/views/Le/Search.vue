<template>
  <div class="search">
    <!-- 头部导航和搜索 -->
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #title>
        <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @input="ko" />
      </template>
      <template #right>
        <div @click="onSearch" class="so">搜索</div>
      </template>
    </van-nav-bar>
    <!-- 渲染内容 -->
    <div class="los" v-show="!sh">
      <h5>
        <p>历史记录</p>
        <van-icon name="delete" @click="sc" />
      </h5>
      <ul>
        <li v-for="(item,index) of arr" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="jing" v-show="sh">
      <ul>
        <li v-for="(v,i) of list" :key="i">
          <div class="h">
            <h4>{{ v.title }}</h4>
            <h3>
              <p>{{ v.start_play_date | times }} ~ {{ v.end_play_date | times }}</p>
              <b>共{{ v.total_periods }}课时</b>
            </h3>
          </div>
          <div class="bo">
            <h3 v-for="(m,n) of v.teachers_list" :key="n">
              <img :src="m.teacher_avatar" alt />
              <p>{{ m.teacher_name }}</p>
            </h3>
          </div>
          <h2>
            <p>{{ v.sales_num }}人报名</p>
            <b id="pr">{{ v.price | Myprice }}</b>
          </h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      list: [],
      sh: false,
      arr: []
    };
  },
  mounted() {
    var lo = JSON.parse(localStorage.getItem("kk"));
    if (lo) {
      this.arr = lo;
    }
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 搜索
    async onSearch() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=${this.value}`
      );
      // console.log(res);
      this.list = res.data.list;
      this.sh = true;
      this.arr.unshift(this.value);
      localStorage.setItem("kk", JSON.stringify(this.arr));
    },
    ko() {
      if (this.value == "") {
        this.sh = false;
        this.list = [];
      }
    },
    //删除
    sc() {
      localStorage.removeItem("kk");
      this.arr = [];
    }
  },
  filters: {
    //  过滤时间
    times(value) {
      let time = new Date(value * 1000);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
      let minute =
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
      let second =
        time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
      return `${month}月-${day}日 ${hour}:${minute}`;
    },
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
.search {
  .van-nav-bar {
    height: 100px;
    background: #fff;
  }
  .van-icon-arrow-left::before {
    color: #666;
    font-size: 45px;
  }
  .van-icon-search::before {
    font-size: 40px;
  }
  .van-search {
    height: 65px;
  }
  .van-field__control {
    height: 65px;
  }
  .search .van-search {
    line-height: 65px;
  }
  .van-search .van-cell {
    line-height: 65px;
  }
  .van-field__body {
    height: 90px;
  }
  .van-field__left-icon {
    line-height: 90px;
  }
  .so {
    font-size: 30px;
  }
  .los {
    padding: 40px 40px 0 40px;
    h5 {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 33px;
        font-weight: bold;
      }
    }
    ul {
      display: flex;
      li {
        font-size: 25px;
        padding: 8px 20px;
        background: #fff;
        margin: 20px 13px 20px 13px;
        border-radius: 20px;
      }
    }
  }
  .jing {
    padding: 0 30px;
    ul {
      li {
        width: 100%;
        height: 407px;
        background: #fff;
        border-radius: 10px;
        margin-top: 30px;
        padding: 0px 29px 0 29px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .h {
          display: flex;
          flex-wrap: wrap;
          h4 {
            font-size: 33px;
          }
          h3 {
            font-size: 24px;
            display: flex;
            margin-top: 15px;
            b {
              margin-left: 20px;
            }
          }
        }

        .bo {
          display: flex;
          flex-wrap: wrap;
          h3 {
            display: flex;
            height: 55px;
            align-items: center;
            margin-bottom: 15px;
            img {
              width: 55px;
              height: 55px;
              border-radius: 50%;
            }
            p {
              font-size: 20px;
              color: #666;
              margin: 0 20px;
            }
          }
        }
        h2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #eee;
          padding-top: 26px;
          p {
            font-size: 23px;
            color: #666;
          }
          b {
            font-size: 33px;
            color: #389d1d;
          }
        }
      }
    }
  }
}
</style>