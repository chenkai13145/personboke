<template>
  <van-loading v-if="show" class="loadingapp"  type="spinner" color="#1989fa"/>
  <div v-else class="homes">
    <keep-alive>
         <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Nav from "./components/tabar/tabar";
export default {
  data(){
    return{
      show:true
    }
  },
  components: {
    Nav
  },
  mounted(){
    setTimeout(()=>{
      this.show=false
    },4000)
  }
};
</script>
<style lang="scss">
.homes {

}
.loadingapp{
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translateX(50%) !important;
    transform: translateY(50%) !important;
}
.actives {
  color: red;
}
</style>
