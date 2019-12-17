<template>
  <div class="exprence">
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item,index) in data" :key="index">
          <span class="time">
              <div class="art-icon"></div>
              <div class="art-time">{{item.time}}</div>
          </span>
          <div class="content">
                 <h2 @click="pathTo(item)">{{item.title}}</h2>
                 <div class="art">
                          <img class="art_img" :src="item.imgurl"/>
                          <p>{{item.desc}}</p>
                 </div>
          </div>
      </van-step>
     
    </van-steps>
  </div>
</template>
<script>
export default {
    data(){
        return{
            data:[
                {
                    title:'javascript基础点',
                    time:'2018-9-10',
                    imgurl:require('../../../public/img/icons/apple-touch-icon-60x60.png'),
                    desc:'js现在常用的数据类型'
                },
                 {
                    title:'javascript基础点',
                    time:'2018-9-10',
                    imgurl:require('../../../public/img/icons/apple-touch-icon-60x60.png'),
                    desc:'js现在常用的数据类型'
                },
                 {
                    title:'javascript基础点',
                    time:'2018-9-10',
                    imgurl:require('../../../public/img/icons/apple-touch-icon-60x60.png'),
                    desc:'js现在常用的数据类型'
                },
                 {
                    title:'javascript基础点',
                    time:'2018-9-10',
                    imgurl:require('../../../public/img/icons/apple-touch-icon-60x60.png'),
                    desc:'js现在常用的数据类型'
                }
            ]
        }
    },
    methods:{
        pathTo(data){
            this.$router.push({path:'/info',query:{data:JSON.stringify(data)}})
        }
    }
};
</script>
<style lang="scss" scoped>
/deep/ .van-step__circle{
    width: 20px;
    height: 20px;
}
/deep/ .van-steps{
    background:rgba(0,0,0,0);
}
.exprence{
    .time{
         display: flex;
         
        position: absolute;
        top:-10px;
        .art-icon{
            border-right: 16px solid rgb(214, 216, 218);
            border-bottom: 24px solid transparent;
            border-top: 24px solid transparent;
        }
        .art-time{
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgb(214, 216, 218);
        font-size: 16px;
        }
    }
    .content{
        padding: 30px;
        h2:hover{
         text-decoration: underline;
         cursor: pointer;
        }
        .art{
            .art_img{
                max-width: 600PX;
                max-height: 300PX;
                display: block;
            }
        }
    }
    .van-step--vertical{
        position: relative;
        margin: 20px 0;

    }
    .van-steps--vertical{
        padding: 20px 40px;
    }
}
</style>