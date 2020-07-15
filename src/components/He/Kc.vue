<template>
  <div class="kc">
    <!-- 头部导航 -->
    <van-nav-bar class title="特色课" @click-right="tz">
      <template #right>
        <van-icon name="search" size="25" @click="go_ss()" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <!-- 分类 -->
      <van-dropdown-item title="分类" ref="e">
        <div class="nj">
          <ul>
            <li>
              <h5>年级</h5>
              <div class="x">
                <p
                  v-for="(v,i) of sc"
                  :key="i"
                  @click="num = i"
                  class="mi"
                  :class="num==i?'te':''"
                >{{ v.name }}</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h5>学科</h5>
              <div class="x">
                <p
                  v-for="(v,i) of xk"
                  :key="i"
                  @click="nn = i"
                  class="mi"
                  :class="nn==i?'te':''"
                >{{ v.name }}</p>
              </div>
            </li>
          </ul>
          <div class="btt">
            <van-button type="default" style="margin-right:15px" @click="cz">重置</van-button>
            <van-button color="#fe7d2f" @click="qd">确定</van-button>
          </div>
        </div>
      </van-dropdown-item>
      <!-- 排序 -->
      <van-dropdown-item title="排序" ref="i">
        <div class="p">
          <ul>
            <li
              v-for="(item,index) of order_by"
              :key="index"
              :class="yy==index?'act':''"
              @click="sort(item,index)"
            >{{ item.value }}</li>
          </ul>
        </div>
      </van-dropdown-item>
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" ref="item">
        <div class="xuan">
          <ul>
            <li
              v-for="(item,index) of  course_types"
              :key="index"
              @click="sx(item,index)"
              :class="ml==index?'active':''"
            >{{ item.value }}</li>
          </ul>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- loading加载 -->
    <div class="lo" v-show="hh">
      <van-loading size="35" color="#eb5600" />
    </div>
    <!-- 列表数据 -->
    <div class="jing" v-show="!hh">
      <ul>
        <li v-for="(v,i) of list" :key="i" @click="course(v.id,v.course_type)">
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
  name: "kc",
  components: {},
  props: {},
  data() {
    return {
      list: [], //特色课列表数据
      sc: [], //分类年级数据,
      xk: [], //分类学科数据
      order_by: [
        { by: 0, value: "综合排序" },
        { by: 1, value: "最新" },
        { by: 2, value: "最热" },
        { by: 3, value: "价格从低到高" },
        { by: 4, value: "价格从高到低" }
      ],
      course_types: [
        { type: 0, value: "全部" },
        { type: 2, value: "大班课" },
        { type: 3, value: "小班课" },
        { type: 4, value: "公开课" },
        { type: 5, value: "点播课" },
        { type: 7, value: "面授课" },
        { type: 8, value: "音频课" },
        { type: 9, value: "系统课" },
        { type: 10, value: "图文课" },
        { type: 11, value: "会员课" }
      ],
      ty: "",
      num: -1,
      nn: -1,
      yy: 0,
      ml: 0,
      sh: true,
      hh: false,
      id: "",
      courseInfo: {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id: "",
        order_by: "",
        attr_val_id: "",
        is_vip: 0
      }
    };
  },
  mounted() {
    // 获取特色课数据
    this.ts();
    // 分类接口数据
    this.fl();
  },
  methods: {
    // 返回上一页
    go_ss() {
      this.$router.push(-1);
    },
    // 获取特色课数据
    async ts() {
      this.hh = true;
      let { data: res } = await axios.get(
        "https://www.365msmk.com/api/app/courseBasis",
        {
          params: this.courseInfo
        }
      );
      // console.log(res);
      this.list = res.data.list;
      this.hh = false;
    },
    // 分类接口数据
    async fl() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/courseClassify`
      );
      // console.log(res);
      this.sc = res.data.attrclassify[0].child;
      this.xk = res.data.attrclassify[1].child;
    },
    // 点击获取筛选数据
    async sx(item, index) {
      this.ml = index;
      this.hh = true;
      this.$refs.item.toggle();
      this.courseInfo.course_type = item.type;
      // 获取特色课数据
      this.ts();
      this.hh = false;
    },
    // 获取排序数据
    async sort(item, index) {
      this.yy = index;
      this.hh = true;
      this.$refs.i.toggle();
      this.courseInfo.order_by = item.by;
      // 获取特色课数据
      this.ts();
      this.hh = false;
    },
    // 获取分类数据
    async qd() {
      this.hh = true;
      this.$refs.e.toggle();
      let arr = [];
      if (this.num != 1) {
        let inNum = this.sc[this.num].id;
        arr.push(inNum);
      }
      if (this.nn != -1) {
        let inNn = this.xk[this.nn].id;
        arr.push(inNn);
      }
      this.courseInfo.attr_val_id = arr.join(",");
      // 获取特色课数据
      this.ts();
      this.hh = false;
    },
    // 点击搜索按钮跳转到搜索页面
    tz() {
      this.$router.push("/search");
    },
    // 点击重置
    cz() {
      this.courseInfo.attr_val_id = "";
      // 获取特色课数据
      this.ts();
      this.$refs.e.toggle();
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
.kc {
  .van-dropdown-menu__title--active {
    color: #eb6100;
  }
  .van-button--normal {
    width: 80%;
    height: 65px;
    border-radius: 10px;
  }
  .van-icon-search::before {
    color: #666;
  }
  .van-nav-bar__title {
    font-size: 35px;
    color: #666;
  }
  .van-nav-bar {
    height: 100px;
    background: #fff;
  }
  .van-dropdown-menu__bar {
    height: 1.3rem;
  }
  .van-dropdown-menu__title {
    font-size: 0.4rem;
  }
  .van-ellipsis {
    height: 1rem;
    line-height: 1rem;
  }
  .van-cell__title {
    font-size: 0.4rem;
    line-height: 1rem;
  }
  .lo {
    height: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .nj {
    width: 100%;
    padding: 40px 35px;
    box-sizing: border-box;
    ul {
      li {
        h5 {
          font-size: 25px;
          margin-top: 20px;
        }
        .x {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 680px;
          border-bottom: 1px solid #f5f5f5;
          padding-bottom: 30px;
          p {
            font-size: 25px;
            padding: 20px 40px;
            background: #f5f5f5;
            color: #646464;
            margin: 20px 20px 0 0;
            border-radius: 6px;
          }
          .te {
            color: #eb6100;
            background: #ebeefe;
          }
        }
      }
    }
    .btt {
      display: flex;
    }
  }
  .p {
    ul {
      li {
        width: 100%;
        height: 100px;
        font-size: 30px;
        text-align: center;
        line-height: 100px;
        border-bottom: 1px solid #f5f5f5;
      }
    }
  }
  .xuan {
    width: 100%;
    padding: 40px 35px;
    box-sizing: border-box;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        font-size: 25px;
        width: 130px;
        height: 70px;
        background: #f5f5f5;
        color: #646464;
        margin: 20px 20px 0 20px;
        border-radius: 6px;
        text-align: center;
        line-height: 70px;
      }
      .active {
        color: #eb6100;
        background: #ebeefe;
      }
    }
  }
  .act {
    color: #eb6100;
  }
}
</style>