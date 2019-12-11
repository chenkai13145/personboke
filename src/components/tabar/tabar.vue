<template>
   <div class="home">
       <img src="../../assets/logo.png" alt="">
       <div class="name">
          <span>Unremittingly</span> 
        </div>
       <div class="routes">
           <router-link tag="span" to="/me">简历</router-link>
           <router-link tag="span" to="/me">点滴</router-link>
           <router-link tag="span" to="/me">留言</router-link>
       </div>
   </div>
</template>
<script>
import { Notify}from 'vant'
export default {
    data(){
        return{
           
        }
    },
    methods:{
     
    }
};
</script>
<style lang="scss">
.home{
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    img{
        display: inline-block;
        border-radius: 50%;
        width: 130px;
        height: 130px;
        align-self: center;
    }
    .name{
        align-self: center;
        padding: 40px 0;
        color: #948c76;
       span{
           display: inline-block;
           width: 130px;
           background-color: #fdf4e8;
           padding: 10px;
       }
    }
    .routes{
        align-self: center;
        display: flex;
        font-size: 14px;
        span{
            padding: 0 10px;
            cursor: pointer;
        }
    }
}
</style>