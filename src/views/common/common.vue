<template>
  <div class="common">
    <p class="title">留言板</p>
    <div class="postcom">
      <textarea rows="6" v-model="content"></textarea>
      <div class="top">
        <span>请先登录</span>
        <span @click="login" class="login">登录</span>
      </div>
      <!-- 展示评论 -->
      <div class="bottomshow">
        <div class="show" v-for="(item,index) in arrcom" :key="item.time+index">
          <div class="numbers">{{item.lou}}楼</div>
          <div class="com">
            <div>
              <div
                class="icon"
                :style="'background-color:'+ item.bgcolor+'; width: 50PX; height: 50PX;'"
              ></div>
            </div>
            <div class="hoshow">
              <div>
                <p class="name">{{item.name}}&nbsp;&nbsp;{{item.time|filters}}</p>
                <p class="texts">{{item.text}}</p>
                <p class="huifu" @click="copy(item._id,item.name)">回复</p>
              </div>
              <div class="hoshow hoshows" v-for="(it,indexs) in item.comment" :key="it._id+indexs">
                <p class="name">{{it.name}}&nbsp;&nbsp;{{it.time|filters}}</p>
                <p class="texts">{{it.text}}</p>
                <p class="huifu" @click="copy(item._id,item.name)">回复</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <van-icon @click="play" :class="[music?'musicadd':'dsad musicadd']" name="music-o" size="40" />
      <audio ref="audio" hidden></audio>
    </div>
    <!-- 弹窗 -->
    <van-dialog v-model="show" title="登录" :width="winWidth>600?600:320" show-cancel-button>
      <form>
        <van-cell-group>
          <van-field
            v-model="name"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field v-model="email" type="email" label="邮箱" placeholder="请输入邮箱" required />
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
      </form>
    </van-dialog>
  </div>
</template>
<script>
import { getAll } from "@/api/commom.js";
export default {
  data() {
    return {
      music: true,
      arrcom: [],
      show: false,
      winWidth: null,
      name:'',
      password:'',
      email:'',
      content:''
    };
  },
  mounted() {
    // 获取窗口宽度
    if (window.innerWidth) {
      this.winWidth = window.innerWidth;
    } else if (document.body && document.body.clientWidth) {
      this.winWidth = document.body.clientWidth;
    }
    this.getAllCom();
  },
  methods: {
    login() {
      this.show=true
    },
    play() {
      this.music = !this.music;
      if (this.$refs.audio.src && this.$refs.audio.autoplay) {
        this.$refs.audio.src = null;
        this.$refs.audio.autoplay = null;
      } else {
        this.$refs.audio.src = require("../../../public/By2.mp3");
        this.$refs.audio.autoplay = "autoplay";
      }
    },
    getAllCom() {
      getAll().then(res => {
        if (res.status === 200) {
          res.data.data.forEach((element, index) => {
            res.data.data[index].lou = index + 1;
          });
          this.arrcom = res.data.data.reverse();
          console.log(this.arrcom);
        }
      });
    },
    copy(id,name){
      this.content='@回复'+name+':'
      document.getElementsByTagName('textarea')[0].focus()
    }
  },
  filters: {
    filters(val) {
      let datime = new Date(val);
      let n = datime.getFullYear();
      let y = (datime.getMonth() + 1).toString().padStart(2, 0);
      let r = datime
        .getDate()
        .toString()
        .padStart(2, 0);
      return `${n}-${y}-${r}`;
    }
  }
};
</script>
<style lang="scss">
.common {
  color: #787978;
  background: url("../../../public/img/bg.3e86f279.jpg");
  .title {
    text-align: center;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .postcom {
    position: relative;
    box-sizing: border-box;
    .login {
      cursor: pointer;
    }
    .top {
      background-color: rgb(211, 213, 214);
      border-radius: 4px 4px 0 0;
      padding: 5px 4px 5px 8px;
      position: absolute;
      top: 0;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      padding: 36px 4px 0 6px;
    }
    margin: 20px;
    .bottomshow {
      width: 100%;
      .show {
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 50px;
      }
      .com {
        display: flex;
        justify-content: flex-start;
        .hoshows {
          margin-top: 20px;
        }
        .hoshow {
          margin-left: 8px;
          p {
            padding-bottom: 10px;
          }
          .huifu {
            margin-left: 26px;
            cursor: pointer;
          }
        }
      }
      .icon {
        display: inline-block;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        border: 2px solid red;
      }
    }
    .van-icon-music-o {
      position: absolute;
      right: 0px;
      top: 126px;
    }
    .musicadd {
      -webkit-animation: haha1 10s linear infinite;
    }
    .dsad {
      -webkit-animation-play-state: paused; //暂停播放
    }
  }
}
@-webkit-keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>