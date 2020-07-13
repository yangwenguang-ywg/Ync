<template>
  <div class="kc">
    <div class="tsk">
      <div>特色课</div>
      <router-link tag="div" :to="{path:'/Search'}">
        <van-icon name="search" />
      </router-link>
    </div>
    <div class="fl">
      <div class="fl1">
        <p @click="f">分类</p>
        <p>排序</p>
        <p>筛选</p>
      </div>

      <div v-show="flag">显示隐藏</div>
    </div>

    <div class="content">
      <!-- 内容-->
      <div class="div1" v-for="(iteam,key) in sz" :key="key">
        <div class="div1-1">
          <p>{{iteam.aa}}</p>
        </div>
        <div class="div1-2">{{iteam.bb}}</div>
        <div class="div1-3">
          <div class="div1-3-1">
            <!-- <img class="img1" src="/zhimg/zh3.gif" alt /> -->
            <span>{{iteam.cc}}</span>
          </div>
        </div>
        <div class="div1-4">
          <div>{{iteam.dd}}</div>
          <div>{{iteam.ee}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      sz: []
    };
  },
  methods: {
    f() {
      console.log("f");
      this.flag = !this.flag;
    },
    lls() {
      this.$http.get("/api/app/recommend/appIndex").then(res => {
        // console.log(res);
        this.sz = res.data.data;
      });
    }
  },
  mounted() {
    this.lls();
  }
};
</script>

<style lang="scss">
.van-swipe-item {
  img {
    width: 100%;
    height: 400px;
  }
}
.home {
  .hy {
    height: 100%;
    overflow: hidden;
    .kc {
      position: relative;
      margin-top: -60px;
      padding: 0 20px;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          width: 203px;
          height: 203px;
          background: #fff;
          text-align: center;
          border-radius: 23px;
          img {
            width: 42px;
            height: 42px;
            margin: 56px 0 13px 0;
          }
          p {
            font-size: 25px;
            color: #9b9c9c;
          }
        }
      }
    }
    .ms {
      padding: 0 30px;
      h5 {
        font-size: 30px;
        color: #666;
        margin: 38px 0;
        border-left: 7px solid #eb5600;
        padding-left: 18px;
      }
      ul {
        li {
          display: flex;
          width: 100%;
          height: 160px;
          background: #fff;
          margin-bottom: 17px;
          align-items: center;
          border-radius: 10px;
          img {
            width: 81px;
            height: 81px;
            margin: 0 22px 0 30px;
            border-radius: 50%;
          }
          h2 {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 60%;
            width: 100%;
            p {
              font-size: 29px;
              color: #666;
              span {
                color: #ea7a2f;
                font-size: 25px;
              }
            }
            b {
              font-size: 22px;
              width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #b7b7b7;
            }
          }
        }
      }
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
          h4 {
            font-size: 33px;
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
}
</style>