<template>
  <div class="homes">
   <router-view/>
  </div>
</template>
<script>
import Nav from './components/tabar/tabar'
export default {
  components:{
    Nav
  }
}
</script>
<style lang="scss">
.homes{
  
}
.actives{
  color: red;
}
</style>
