<template>
  <van-loading v-if="show" class="loadingapp"  type="spinner" color="#1989fa"/>
  <!-- <div v-else class="homes" @click="clickFn" @touchend="touchendFn" @touchmove="mousemove($event,'mble')" @mousemove="mousemove($event,'pc')"> -->
  <div v-else class="homes" @click="clickFn" @touchend="touchendFn" >
    <keep-alive>
         <router-view />
    </keep-alive>
    <!-- 特效集合 -->
    <img v-for="(item,index) in imgArr" class="aixin_img" :style="{'left':item.x,'top':item.y}" :key="index" src="@/assets/aixin.png"/>
    <div v-for="(item,index) in imgArrs" class="aixin_img_yun" :style="{'left':item.x,'top':item.y}" :key="index+'2s'" ></div>
    <!-- 特效集合 -->
  </div>
</template>
<script>
import Nav from "./components/tabar/tabar";
export default {
  data(){
    return{
      show:true,
      imgArr:[],//移动特效
      imgArrs:[],//点赞特效
      timer:null,
    }
  },
  components: {
    Nav
  },
  mounted(){
    setTimeout(()=>{
      this.show=false
    },4000)
    // this.timer=setInterval(()=>{
    //   this.imgArr=[]
    // },5000)
  },
  methods:{
    //鼠标移动
    // mousemove(e,val){
    //     let x=0
    //     let y=0
    //    if(val=='pc'){
    //        x=e.x+'px'
    //        y=e.y+'px'
    //     }else{
    //        x=e.changedTouches[0].clientX+'px'
    //        y=e.changedTouches[0].clientY+'px'
    //     }
    //     setInterval(()=>{
    //        this.imgArr.push({x,y})
    //     })

     
    // },
    //点击双击
    clickFn(e){
      this.imgArr=[]
      console.log(e)
      let x=e.x+'px'
      let y=e.y+'px'
      setTimeout(()=>{
           this.imgArrs.push({x,y})
      },400)
      // setTimeout(()=>{
      //   this.imgArrs.pop()
      // },2000)
    },
    //移动结束
    touchendFn(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer=setTimeout(()=>{
       this.imgArr=[]
      },2000)
    }
  },
  destroyed(){
    clearInterval(this.timer)
  }
};
</script>
<style lang="scss">
.homes {

}
.loadingapp{
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translateX(50%) !important;
    transform: translateY(50%) !important;
}
.actives {
  color: red;
}
.aixin_img{
  position: fixed;
  width: 44px;
  height: 44px;
  
  opacity: 0;
  animation: imgzan 2s linear;
}
.aixin_img_yun{
  position: fixed;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url('./assets/me.jpg') no-repeat;
  background-size: cover;
  opacity: 0;
  animation: imgzan_me 2s linear;
}
@keyframes imgzan {
     0%{
        opacity: 1;
        transform: scale(0.2);
     }
     30%{
        opacity: 0.8;
        transform: scale(0.5);
     }
     60%{
        opacity: 0.4;
        transform: scale(0.8);
     }
     90%{
        opacity: 0.9;
        transform: scale(1);
     }
     100%{
        opacity: 0;
        transform: scale(1);
     }
}
@keyframes imgzan_me {
     0%{
        opacity: 1;
        transform: scale(0.2);
     }
     30%{
        opacity: 0.8;
        transform: scale(0.8);
        transform: translateY(-100%);
     }
     60%{
        opacity: 1;
        transform: translateY(-200%);
     }
     90%{
        opacity: 1;
        transform: translateY(-200%);
     }
     100%{
        opacity: 0;
        transform: scale(1);
        transform: translateY(-200%);
     }
}
</style>
