<template>
  <div class="detail">
    <div class="lo" v-show="!hh">
      <van-loading size="35"  color="#eb5600"/> 
    </div>
    <div class="kk" v-show="hh">
    <!-- 头部导航 -->
    <div class="header">
      <van-nav-bar title="讲师详情" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 名师详情 -->
    <div class="te">
      <div class="gz">
        <img :src="arr.avatar" alt />
        <div class="zh">
          <h5>
            {{ arr.teacher_name }}
            <span>{{ arr.level_name }}</span>
          </h5>
          <p>
            <span>{{ arr.sex | Sexx }}</span>
            <span>{{ arr.teach_age }}年龄教</span>
          </p>
        </div>
      </div>
      <h4 @click="fll">{{ fl | Flo }}</h4>
    </div>
    <!-- 名师信息 -->
    <div class="bt">
      <van-tabs v-model="active">
        <van-tab title="讲师介绍">
          <ul>
            <li v-for="(item,index) of list" :key="index">
              <h5>
                <p>{{ item.attr_name }}</p>
                <b v-for="(v,n) of item.attr_value" :key="n">{{ v.attr_value_name }}</b>
              </h5>
            </li>
          </ul>
          <div class="lao">
            <h4>老师简介</h4>
            <h3>{{ In }}</h3>
          </div>
        </van-tab>
        <van-tab title="主讲课程">
          <div class="jing">
            <ul>
              <li v-for="(v,i) of tex" :key="i">
                <div class="ks">
                   <h4>{{ v.title }}</h4>
                <p>共{{ pag }}课时</p>
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
        </van-tab>
        <van-tab title="学院评价">
          <div class="le">
            <img src="../assets/pinlun.png" class="tu" alt />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-button color="#eb6100">立即预约</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      arr: [],
      fl: [],
      active: "",
      list: [],
      In: [],
      tex: [],
      pag:{},
      hh:false
    };
  },
  mounted() {

    // 详情
    this.det();
    this.an();
    // 主讲课程
    this.kc();
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 详情
    async an() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/teacher/${this.$route.query.id}`
      );
      // console.log(res);
      this.arr = res.data.teacher;
      this.fl = res.data.flag;
      if(res.code == 200){
        this.hh = true
      }else{
        this.hh = false
      }
    },
    async det() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/teacher/info/${this.$route.query.id}`
      );
      // console.log(res);
      this.list = res.data.attr;
      this.list.splice(0, 2);
      this.In = res.data.intro;
    },
    // 关注和已关注切换
   async fll() {
          let { data:res } = await axios.get(`https://www.365msmk.com/api/app/teacher/collect/${this.$route.query.id}`)
          console.log(res)
          this.an()
          if(res.data.flag == 1){
          this.$toast.success('已关注');
          }else{
            this.$toast.success('已取消');
          }
    },
    // 主讲课程
    async kc() {
      let { data: res } = await axios.post(
        `https://www.365msmk.com/api/app/teacher/mainCourse`
      );
      // console.log(res);
      this.tex = res.data.list;
      this.pag = res.data.current_page
    }
  },
  filters: {
    // 过滤年龄
    Sexx(val) {
      if (val == 0) {
        return "男";
      } else {
        return "女";
      }
    },
    // 过滤关注和已关注
    Flo(val) {
      if (val == 2) {
        return "关注";
      } else if(val == 1) {
        return "已关注";
      }
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
.detail {
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
    background: rgba(0, 0, 0, 0.01);
  }
  .van-icon-arrow-left::before {
    color: #fff;
    font-size: 45px;
  }
  .van-nav-bar__title {
    font-size: 35px;
    color: #fff;
  }
  .header {
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, #63b7fe, #4e7de3);
  }
  .lo{
    height: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .te {
    width: 707px;
    height: 182px;
    background: #fff;
    display: flex;
    padding: 33px 28px 0 28px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 20px;
    .gz {
      display: flex;
      img {
        width: 81px;
        height: 81px;
        border-radius: 50%;
        margin-right: 24px;
      }
      h5 {
        font-size: 30px;
        color: #595959;
        span {
          font-size: 23px;
          color: #ea7a2f;
        }
      }
      p {
        font-size: 22px;
        color: #b7b7b7;
        margin-top: 5px;
        span {
          margin-right: 12px;
        }
      }
    }

    h4 {
      width: 124px;
      height: 56px;
      background: #ebeefe;
      color: #eb6100;
      font-size: 26px;
      text-align: center;
      line-height: 56px;
      border-radius: 30px;
      margin-top: 5px;
    }
  }
  .bt {
    margin-top: 105px;
    ul {
      li {
        h5 {
          display: flex;
          font-size: 25px;
          color: #8c8c8c;
          p {
            margin-top: 45px;
          }
          b {
            margin-left: 41px;
            margin-top: 45px;
          }
        }
      }
    }
    .lao {
      display: flex;
      font-size: 25px;
      color: #8c8c8c;
      h4 {
        //  margin-right: 66px;
        width: 1300px;
        margin-top: 50px;
      }
      h3 {
        margin-top: 50px;
      }
    }
    .le {
      display: flex;
      justify-content: center;
      img {
        width: 450px;
        height: 450px;
      }
    }
  }
  .van-button {
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
  }
  .jing {
    padding: 0 30px;
    h5 {
      font-weight: normal;
      font-size: 30px;
      color: #666;
      margin: 33px 0;
      border-left: 7px solid #eb5600;
      padding-left: 18px;
    }
    ul {
      li {
        width: 100%;
        height: 407px;
        background: #fff;
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 0px 29px 0 29px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid #eeff;
        box-shadow:2px 2px 2px #eee;
        .ks{
           h4 {
          font-size: 33px;
        }
        p{
          font-size: 24px;
          color: #666;
          margin-top: 15px;
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