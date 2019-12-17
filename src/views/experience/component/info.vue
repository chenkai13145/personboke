<template>
    <div class="info">
        <h2 class="title">{{data.title}}</h2>
        <p class="desc">{{data.desc}}</p>
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
}
</style>