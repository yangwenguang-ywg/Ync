<template>
  <div class="gz">
    <!-- 头部导航 -->
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" style="margin-bottom:15px;"/>
    <!--列表数据· -->
    <div class="le">
      <ul>
        <li v-for="(item,index) of list" :key="index">
          <img :src="item.avatar" alt />
          <div class="to">
            <h5>
              {{ item.teacher_name }}
              <span>{{ item.level_name }}</span>
            </h5>
            <h4>{{ item.introduction }}</h4>
          </div>
          <p @click="qx">取消关注</p>
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
      list: [],
      c:'',
      t:''
    };
  },
  mounted() {
    // 我的关注数据
    this.wo();
  },
  methods: {
    // 头部导航
    onClickLeft() {
      this.$router.go(-1);
    },
    // 我的关注数据
    async wo() {
      let { data: res } = await axios.get(
        `https://www.365msmk.com/api/app/collect?page=1&limit=10&type=2&`
      );
      // console.log(res);
      this.list = res.data.list;
      this.list.forEach(element => {
        this.c = element.collect_id
        this.t = element.teacher_id
      });
    },
    // 取消关注
  async qx(){
    let { data:res } = await axios.put(`https://www.365msmk.com/api/app/collect/cancel/${this.c}/2`)
    console.log(res)
    this.wo();
    }
  }
};
</script>

<style lang="scss">
.gz {
  .van-nav-bar {
    height: 100px;
    background: rgba(0, 0, 0, 0.01);
  }
  .van-nav-bar__title {
    font-size: 35px;
    color: #666;
  }
  .van-nav-bar {
    background: #fff;
  }
  .van-icon-arrow-left::before {
    color: #666;
    font-size: 45px;
  }
  .le {
    ul {
      li {
        width: 93%;
        height: 150px;
        background: #fff;
        display: flex;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 78px;
          height: 78px;
        }
        .to {
          h5 {
            font-size: 30px;
            color: #595959;
            span {
              font-size: 22px;
              color: #ea7a2f;
              
            }
          }
          h4{
              font-size: 22px;
              color: #b7b7b7;
              width: 400px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 8px;
          }
        }
        p{
            font-size: 24px;
            color: #eb6100;
            background: rgba(235,97,0,.1);
            padding: 10px 20px 10px 20px;
            border-radius: 35px;
        }
      }
    }
  }
}
</style>