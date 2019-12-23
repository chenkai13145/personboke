<template>
    <div class="info">
        <h2 class="title">{{data.title}}</h2>
        <p class="desc">{{data.desc}}</p>
        <div v-for="(item,index) in data.descobj.arr" :key="index">
            <h4 v-if="item.futitle">{{index+1}}、{{item.futitle}}</h4>
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
.title{
    text-align: center;
}
.desc{
    text-align: center;
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
}
}
</style>