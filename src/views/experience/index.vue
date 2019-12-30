<template>
  <div class="exprence">
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item,index) in data" :key="index">
        <span class="time" @click="pathTo(item._id)">
          <div class="art-icon"></div>
          <div class="art-time">{{item.time |filters}}</div>
        </span>
        <div class="content">
          <h2 class="wrap" @click="pathTo(item._id)">{{item.title}}</h2>
          <div class="art">
            <img class="art_img" v-if="item.imgurl!='null'" :src="item.imgurl" />
            <p class="wrap">{{item.desc}}</p>
          </div>
        </div>
      </van-step>
    </van-steps>
    <van-button class="btn" v-if="dataoff" @click="loaddata" color="linear-gradient(to right, #4bb0ff, #6149f6)">加载更多</van-button>
    <van-icon @click="play" :class="[music?'dsad musicadd':'musicadd']" name="music-o" size="40" />
    <audio ref="audio" hidden loop></audio>
  </div>
</template>
<script>
import {getdi} from '../../api/exprence'
export default {
  data() {
    return {
      music: true,//音乐
      winWidth: null,//获取设备宽度
      data: [
        // {
        //   title: "javascript基础点",
        //   time: "2018-9-10",
        //   imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
        //   desc:
        //     "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
        //   descobj: {
        //     id: 1,
        //     arr: [
        //       {
        //         futitle: "时s尚大事件",
        //         desccenter: {
        //           destitle:
        //             "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
        //           desctitle: [
        //             "而哦欸哦覅",
        //             "觉得撒谎的",
        //             "啊是姐弟仨基地啊时间"
        //           ]
        //         },
        //         daima: `<pre>吉萨大历史
        //           Observer.prototype = {
        //           on: function (type, handle) {
        //             if (!this.listeners[type]) this.listeners[type] = [];
        //             this.listeners[type].push(handle)
        //           },
        //           <h2 class="title">{{data.title}}</h2>
        //                 <p class="desc">{{data.desc}}</p>
        //                 <div v-for="(item,index) in data.descobj.arr" :key="index">
        //                     <h4 v-if="item.futitle">{{item.futitle}}</h4>
        //                     <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        //                 </div>
        //                                                   sljdlsa
        //                                                      逻辑上sddddddddddddddd的浪费时间看
        //                                               </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上的浪aaaaaaaaaaaaaa费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上ssssssssssssssss的浪费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdsssssssssssssslsa
        //                                      逻辑上的浪费kkkkkkkkkk时间看
        //                     </pre>`
        //       }
        //     ]
        //   }
        // },
        //   {
        //   title: "javascript基础点",
        //   time: "2018-9-10",
        //   imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
        //   desc:
        //     "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
        //   descobj: {
        //     id: 1,
        //     arr: [
        //       {
        //         futitle: "时s尚大事件",
        //         desccenter: {
        //           title:
        //             "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
        //           desctitle: [
        //             "而哦欸哦覅",
        //             "觉得撒谎的",
        //             "啊是姐弟仨基地啊时间"
        //           ]
        //         },
        //         daima: `<pre>吉萨大历史
        //           Observer.prototype = {
        //           on: function (type, handle) {
        //             if (!this.listeners[type]) this.listeners[type] = [];
        //             this.listeners[type].push(handle)
        //           },
        //           <h2 class="title">{{data.title}}</h2>
        //                 <p class="desc">{{data.desc}}</p>
        //                 <div v-for="(item,index) in data.descobj.arr" :key="index">
        //                     <h4 v-if="item.futitle">{{item.futitle}}</h4>
        //                     <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        //                 </div>
        //                                                   sljdlsa
        //                                                      逻辑上sddddddddddddddd的浪费时间看
        //                                               </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上的浪aaaaaaaaaaaaaa费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上ssssssssssssssss的浪费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdsssssssssssssslsa
        //                                      逻辑上的浪费kkkkkkkkkk时间看
        //                     </pre>`
        //       }
        //     ]
        //   }
        // },
        //   {
        //   title: "javascript基础点",
        //   time: "2018-9-10",
        //   imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
        //   desc:
        //     "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
        //   descobj: {
        //     id: 1,
        //     arr: [
        //       {
        //         futitle: "时s尚大事件",
        //         desccenter: {
        //           title:
        //             "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
        //           desctitle: [
        //             "而哦欸哦覅",
        //             "觉得撒谎的",
        //             "啊是姐弟仨基地啊时间"
        //           ]
        //         },
        //         daima: `<pre>吉萨大历史
        //           Observer.prototype = {
        //           on: function (type, handle) {
        //             if (!this.listeners[type]) this.listeners[type] = [];
        //             this.listeners[type].push(handle)
        //           },
        //           <h2 class="title">{{data.title}}</h2>
        //                 <p class="desc">{{data.desc}}</p>
        //                 <div v-for="(item,index) in data.descobj.arr" :key="index">
        //                     <h4 v-if="item.futitle">{{item.futitle}}</h4>
        //                     <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        //                 </div>
        //                                                   sljdlsa
        //                                                      逻辑上sddddddddddddddd的浪费时间看
        //                                               </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上的浪aaaaaaaaaaaaaa费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上ssssssssssssssss的浪费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdsssssssssssssslsa
        //                                      逻辑上的浪费kkkkkkkkkk时间看
        //                     </pre>`
        //       }
        //     ]
        //   }
        // },
        //   {
        //   title: "javascript基础点",
        //   time: "2018-9-10",
        //   imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
        //   desc:
        //     "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
        //   descobj: {
        //     id: 1,
        //     arr: [
        //       {
        //         futitle: "时s尚大事件",
        //         desccenter: {
        //           title:
        //             "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
        //           desctitle: [
        //             "而哦欸哦覅",
        //             "觉得撒谎的",
        //             "啊是姐弟仨基地啊时间"
        //           ]
        //         },
        //         daima: `<pre>吉萨大历史
        //           Observer.prototype = {
        //           on: function (type, handle) {
        //             if (!this.listeners[type]) this.listeners[type] = [];
        //             this.listeners[type].push(handle)
        //           },
        //           <h2 class="title">{{data.title}}</h2>
        //                 <p class="desc">{{data.desc}}</p>
        //                 <div v-for="(item,index) in data.descobj.arr" :key="index">
        //                     <h4 v-if="item.futitle">{{item.futitle}}</h4>
        //                     <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        //                 </div>
        //                                                   sljdlsa
        //                                                      逻辑上sddddddddddddddd的浪费时间看
        //                                               </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上的浪aaaaaaaaaaaaaa费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上ssssssssssssssss的浪费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdsssssssssssssslsa
        //                                      逻辑上的浪费kkkkkkkkkk时间看
        //                     </pre>`
        //       }
        //     ]
        //   }
        // },  {
        //   title: "javascript基础点",
        //   time: "2018-9-10",
        //   imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
        //   desc:
        //     "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
        //   descobj: {
        //     id: 1,
        //     arr: [
        //       {
        //         futitle: "时s尚大事件",
        //         desccenter: {
        //           title:
        //             "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
        //           desctitle: [
        //             "而哦欸哦覅",
        //             "觉得撒谎的",
        //             "啊是姐弟仨基地啊时间"
        //           ]
        //         },
        //         daima: `<pre>吉萨大历史
        //           Observer.prototype = {
        //           on: function (type, handle) {
        //             if (!this.listeners[type]) this.listeners[type] = [];
        //             this.listeners[type].push(handle)
        //           },
        //           <h2 class="title">{{data.title}}</h2>
        //                 <p class="desc">{{data.desc}}</p>
        //                 <div v-for="(item,index) in data.descobj.arr" :key="index">
        //                     <h4 v-if="item.futitle">{{item.futitle}}</h4>
        //                     <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        //                 </div>
        //                                                   sljdlsa
        //                                                      逻辑上sddddddddddddddd的浪费时间看
        //                                               </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上的浪aaaaaaaaaaaaaa费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdlsa
        //                                      逻辑上ssssssssssssssss的浪费时间看
        //                     </pre>`
        //       },
        //       {
        //         futitle: "时尚大事件",
        //         daima: `<pre>
        //                            吉萨大历史
        //                               sljdsssssssssssssslsa
        //                                      逻辑上的浪费kkkkkkkkkk时间看
        //                     </pre>`
        //       }
        //     ]
        //   }
        // },
      ],
      query:{
        page:0,
        size:6
      },
      dataoff:true
    };
  },
 deactivated(){
   this.music=true
   this.$refs.audio.src = null;
   this.$refs.audio.autoplay = null;
 },
 beforeDestroy(){

 },
  mounted(){
    // 获取窗口宽度
    if (window.innerWidth) {
      this.winWidth = window.innerWidth;
    } else if (document.body && document.body.clientWidth) {
      this.winWidth = document.body.clientWidth;
    }
   this.getdiandi()
  },
  methods: {
    pathTo(data) {
      this.$router.push({
        path: "/info",
        query: {id: data}
      });
    },
    //音乐播放
    play() {
      this.music = !this.music;
      if (this.$refs.audio.src && this.$refs.audio.autoplay) {
        this.$refs.audio.src = null;
        this.$refs.audio.autoplay = null;
      } else {
        this.$refs.audio.src = require("../../../public/By1.mp3");
        this.$refs.audio.autoplay = "autoplay";
      }
    },
    //获取点滴
    getdiandi(){
      getdi(this.query).then(res=>{
       if(res.data.success){
         if(res.data.data.length<this.query.size){
            this.dataoff=false
         }
         this.data=[...this.data,...res.data.data]
       }
      })
    },
    loaddata(){
      this.query.page++;
      this.getdiandi()
    }
  },
  filters:{
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
<style lang="scss" scoped>
.exprence {
  color: #787978;
  .musicadd {
    -webkit-animation: haha1 10s linear infinite;

  }
  .dsad {
    -webkit-animation-play-state: paused; //暂停播放
    
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
  /deep/ .van-step__circle {
  width: 20px;
  height: 20px;
}
/deep/ .van-steps {
  background: rgba(0, 0, 0, 0);
}
   position: relative;
  .time {
    display: flex;
    position: absolute;
    top: -10px;

    .art-icon {
      border-right: 16px solid rgb(214, 216, 218);
      border-bottom: 24px solid transparent;
      border-top: 24px solid transparent;
    }
    .art-time {
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgb(214, 216, 218);
      font-size: 16px;
    }
  }
  .van-icon-music-o{
     position: fixed;
      right: 30px;
      bottom: 126px;
  }
  .time:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 2s linear;
  }
  .content {
    padding: 30px;
    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .art {
      padding-right: 20px;
      .art_img {
        max-width: 600px;
        max-height: 300px;
        width: 100%;
        display: block;
      }
    }
  }
  .van-step--vertical {
    position: relative;
    margin: 20px 0;
  }
  .van-steps--vertical {
    padding: 20px 40px;
  }

}

.btn{
position: absolute;
left: 50%;
transform: translateX(-50%);
cursor: pointer;
margin-bottom: 10px;
}
</style>