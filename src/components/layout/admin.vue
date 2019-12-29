<template>
    <div class="admin">
          <van-row>
              <van-col :span="2">
                  <LeftNav/>
              </van-col>
              <van-col :span="22">
                 <router-view/>
              </van-col>
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