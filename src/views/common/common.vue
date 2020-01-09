<template>
  <div class="common">
    <p class="title">留言板</p>
    <div class="postcom">
      <textarea rows="6" v-model="content"></textarea>
      <div class="top">
        <span>{{$store.getters.users.name?'欢迎~~'+$store.getters.users.name:'请先登录'}}</span>
        <span @click="layout" v-if="$store.getters.users.name" class="login">退出</span>
        <span @click="login" v-else class="login">登录</span>
      </div>
      <van-button plain type="primary" @click="postXin">发表评论</van-button>
      <!-- 展示评论 -->
      <div class="bottomshow">
        <div class="show" v-for="(item,index) in arrcom" :key="item.time+index">
          <div class="numbers">{{item.paiming}}楼</div>
          <div class="com">
            <div>
              <div
                class="icon"
                :style="'background-color:'+item.bgcolor+'; width: 50PX; height: 50PX;'"
              >{{item.one}}</div>
            </div>
            <div class="hoshow">
              <div>
                <p class="name">{{item.name}}&nbsp;&nbsp;({{item.time|filters}})</p>
                <p class="texts">{{item.text}}</p>
                <p class="huifu" @click="copy(item._id,item.name)">回复<strong v-if="$store.getters.users.id!==undefined&&$store.getters.users.id===item.userid" @click.stop="delposts(item._id)" class="del">删除</strong></p>
              </div>
              <div class="hoshow hoshows" v-for="(it,indexs) in item.comment" :key="it._id+indexs">
                <p class="name">{{it.name}}&nbsp;&nbsp;({{it.time|filters}})</p>
                <p class="texts">{{it.text}}</p>
                <p class="huifu" @click="copy(item._id,item.name)">回复</p>
              </div>
            </div>
          </div>
        </div>
        <van-button plain type="primary" v-show='loadingPage' @click="pageLoading" class="jiazaibtn">加载更多</van-button>
      </div>
      <van-icon @click="play" :class="[music?'dsad musicadd':'musicadd']" name="music-o" size="40" />
      <audio ref="audio" hidden loop></audio>
    </div>
    <!-- 弹窗 -->
    <van-dialog v-model="show" :beforeClose="beforeClose" title="登录" :width="winWidth>600?600:320" show-cancel-button>
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
import { getAll,postFa,delpost } from "@/api/commom.js";
import {logReg} from '@/api/user.js'
import jwt_decode from 'jwt-decode'
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
      content:'',
      postId:'',
      Query:{
        size:10,
        page:0
      },
      loadingPage:true,
      mpvide:require("./By2.mp3")
    };
  },
   deactivated(){
   this.music=true
   this.$refs.audio.src = null;
   this.$refs.audio.autoplay = null;
 },
 activated(){
    this.$nextTick(()=>{
       this.play()
    })
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
    //登录弹窗
    login() {
      this.show=true
    },
    //音乐播放
    play() {
      this.music = !this.music;
      if (this.$refs.audio.src && this.$refs.audio.autoplay) {
        this.$refs.audio.src = null;
        this.$refs.audio.autoplay = null;
      } else {
        this.$refs.audio.load();
        this.$refs.audio.src = this.mpvide;
        this.$refs.audio.autoplay = "autoplay";
      }
    },
    //获取评论
    getAllCom() {
      getAll(this.Query).then(res => {
        if (res.status === 200) {
          res.data.da.forEach((element, index) => {
            res.data.da[index].bgcolor='#'+Math.random().toString(16).substring(2,8)
            res.data.da[index].one=element.name.substring(0,1)
          });
          if(res.data.da.length<this.Query.size){
            this.loadingPage=false
          }
          if(this.Query.page===0){
            this.arrcom=[]
          }
          this.arrcom=[...this.arrcom,...res.data.da];
        }
      });
    },
    //点击回复操作
    copy(id,name){
      if(this.$store.getters.users.name){
         this.postId=id
      this.content='@回复'+name+':'
      document.getElementsByTagName('textarea')[0].focus()
      }else{
          this.$toast('请先登录');
      }
     
    },
    //弹窗事件
    beforeClose(e,done){
      if(e==='cancel') return done()
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if(this.name.length>=1&&this.password.length>=3&&reg.test(this.email)){
              let data={
                name:this.name,
                email:this.email,
                password:this.password
              }
              logReg(data).then(res=>{
                console.log(res)
                if(res.status===200&&res.data.success){
                  localStorage.setItem('token',res.data.token)
                  //解析token
                  const jwttoken=jwt_decode(res.data.token)
                  let data={
                    jwttoken,
                    done
                  }
                  this.$store.dispatch('saveToken',data)
                }else{
                    this.$toast(res.data.msg)
                      done(false)
                }
              })
      }else{
        this.$toast('格式不正确')
        done(false)
      }
    },
    //发表评论
    postXin(){
      if(this.$store.getters.users.name){
          if(this.content.length>=1){
            this.Query.page=0
            this.loadingPage=true
          let data={
            id:this.postId,
            userid:this.$store.getters.users.id,
            name:this.$store.getters.users.name,
            text:this.content
          }
          postFa(data).then(res=>{
            this.content=''
           this.getAllCom()
          })
         }else{
          this.$toast('评论不能为空');
         }
      }else{
          this.$toast('请先登录');
      }
      
        
    },
    //删除评论
    delposts(id){
      delpost({id}).then(res=>{
        if(res.status===200&&res.data.success){
          this.$toast(res.data.msg)
          this.getAllCom()
        }
      })
    },
    //加载更多
    pageLoading(){
      this.Query.page++;
      this.getAllCom()
    },
    //退出登录
    layout(){
       this.$store.dispatch('layout')
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
      .jiazaibtn{
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 10PX;
      }
      .del{
        font-weight:400;
        margin-left: 30PX;
        font-size: 20px;
        color: red;
      }
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
        line-height: 50PX;
        border-radius: 50%;
        color: #e8e8e8;
        border: 2PX solid #e8e8e8;
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