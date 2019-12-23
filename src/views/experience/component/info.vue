<template>
    <div class="info">
        <h2 class="title wrap">{{data.title}}</h2>
        <p  class="desc wrap">{{data.desc}}</p>
        <div v-for="(item,index) in data.descobj.arr" :key="index">
            <h4 class="wrap" style="color:#80633f" v-if="item.futitle">{{index+1}}、{{item.futitle}}</h4>
            <div  v-if="item.desccenter" class="descBot">
                <div class="wrap" v-if="item.desccenter.title">{{item.desccenter.title}}</div>
                <ul class="uls">
                    <li class="wrap" v-for="(it,i) in item.desccenter.desctitle" :key="i+'p'">
                        {{it}}
                    </li>
                </ul>
            </div>
            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
        </div>
    </div>
</template>
<script>
export default {
     data(){
         return{
             data:{}
         }
     },
     created(){
         this.data=JSON.parse(this.$route.query.data) 
     }  
}
</script>
<style lang="scss">
.info{
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