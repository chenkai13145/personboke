<template>
    <div class="admin">
          <van-row>
                 <router-view/>
          </van-row>
    </div>
</template>
<script>
import LeftNav from '../tabar/leftNav'
export default {
    components:{
        LeftNav
    }
}
</script>
<style lang="scss">
.admin{
}
</style>