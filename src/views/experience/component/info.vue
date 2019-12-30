<template>
    <div class="info">
        <van-loading type="spinner" v-show="!loadoff" color="#1989fa" />
        
        <h2 v-show="loadoff" class="title wrap">{{data.title}}</h2>
        <p v-show="loadoff"  class="desc wrap">{{data.desc}}</p>
        <template v-if="data.descobj!=undefined&&loadoff">
        <div v-for="(item,index) in data.descobj.arr" :key="index">
            <h4 class="wrap" style="color:#80633f" v-if="item.futitle">{{index+1}}、{{item.futitle}}</h4>
            <div  v-if="item.desccenter" class="descBot">
                <div class="wrap" v-if="item.desccenter.destitle">{{item.desccenter.destitle}}</div>
                <ul class="uls">
                    <li class="wrap" v-for="(it,i) in item.desccenter.desctitle" :key="i+'p'">
                        {{it}}
                    </li>
                </ul>
            </div>
            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        </div>
        </template>
    </div>
</template>
<script>
import {getinfoid} from '../../../api/exprence'
export default {
     data(){
         return{
             data:{},
             loadoff:false
         }
     },
     activated(){
         this.getinfo()
        
     },
     methods:{
         getinfo(){
             this.loadoff=false
             let id=this.$route.query.id
             getinfoid({id}).then(res=>{
                 if(res.data.success){
                     this.data=res.data.data
                     this.loadoff=true
                 }
             })
         }
     }
}
</script>
<style lang="scss">
.info{
    .van-loading{
        text-align: center;
    }
    margin: 0 20PX;
.title{
    text-align: center;
}
.desc{
    text-align:left;
    color: rgb(161, 160, 160);
}
.textpre{
    background-color: #f5f5f5;
    padding: 8PX;
    color: #000;
    font-size: 13PX;
    font-weight: bold;
    border: 2PX solid #ccc;
    border-radius: 5PX;
    overflow: auto;
}
.descBot{
    font-size: 20PX;
    color: #ccc;
}
.uls{
    padding-left: 30PX;
    li{
        list-style:disc;
    }
}
// 滚动样式
.textpre::-webkit-scrollbar{
  width:6PX;
  height:6PX;
  /**/
}
.textpre::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
.textpre::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
.textpre::-webkit-scrollbar-thumb:hover{
  background: #333;
}
.textpre::-webkit-scrollbar-corner{
  background: #179a16;
}
}
</style>