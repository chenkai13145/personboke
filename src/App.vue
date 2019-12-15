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
  max-width: 800PX;
  margin:auto;
}
.actives{
  color: red;
}
</style>
