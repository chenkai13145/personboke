<template>
  <div class="common">
    <p class="title">留言板</p>
    <div class="postcom">
      <textarea rows="6"></textarea>
      <div class="top">
        <span>请先登录</span>
        <span @click="login" class="login">登录</span>
      </div>
      <!-- 展示评论 -->
      <div class="bottomshow">
        <div class="show">
          <div class="numbers">111楼</div>
          <div class="com">
            <div>
              <img
                class="icon"
                style=" width: 50PX; height: 50PX;"
                src="../../../public/img/bg.3e86f279.jpg"
              />
            </div>
            <div class="hoshow">
              <p class="name">陈凯 3天气那</p>
              <p
                class="texts"
              >sas是顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿三顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶dj上的</p>
              <p class="huifu">回复</p>
            </div>
          </div>
        </div>
        <div class="show">
          <div class="numbers">111楼</div>
          <div class="com">
            <div>
              <img
                class="icon"
                style=" width: 50PX; height: 50PX;"
                src="../../../public/img/bg.3e86f279.jpg"
              />
            </div>
            <div class="hoshow">
              <p class="name">陈凯 3天气那</p>
              <p
                class="texts"
              >sas是顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿三顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶dj上的</p>
              <p class="huifu">回复</p>
            </div>
          </div>
        </div>
        <div class="show">
          <div class="numbers">111楼</div>
          <div class="com">
            <div>
              <img
                class="icon"
                style=" width: 50PX; height: 50PX;"
                src="../../../public/img/bg.3e86f279.jpg"
              />
            </div>
            <div class="hoshow">
              <p class="name">陈凯 3天气那</p>
              <p
                class="texts"
              >sas是顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿三顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶撒顶顶顶顶顶顶顶顶dj上的</p>
              <p class="huifu">回复</p>
            </div>
          </div>
        </div>
      </div>
      <van-icon @click="play" :class="[music?'musicadd':'dsad musicadd']" name="music-o" size="40" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        music:true
    };
  },
  methods: {
    login() {},
    play() {
        this.music=!this.music
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
        .hoshow {
          margin-left: 8px;
          p {
            padding-bottom: 10px;
          }
          .huifu {
            margin-left: 26px;
          }
        }
      }
      .icon {
        display: inline-block;

        border-radius: 50%;
        border: 2px solid red;
      }
    }
    .van-icon-music-o {
      position: absolute;
      right: 0px;
      top: 126px;
      
    }
    .musicadd{
      -webkit-animation: haha1 10s linear infinite;
    }
    .dsad{
      -webkit-animation-play-state: paused;//暂停播放
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