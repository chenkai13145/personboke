<template>
    <div class="downout">
        <h3 class="title" v-if="over">陈凯的个人简历</h3>
        <router-view/>
    </div>
</template>
<script>
import Nav from '../tabar/tabar'
export default {
    components:{
        Nav
    },
    data(){
        return{
            over:true
        }
    }
}
</script>
<style lang="scss">
.downout{
    .title{
        text-align: center;
        padding: 30PX 0;
    }
}
</style>