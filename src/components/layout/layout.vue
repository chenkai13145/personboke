<template>
    <div class="layout">
        <Nav/>
        <keep-alive>
        <router-view/>
        </keep-alive>
    </div>
</template>
<script>
import Nav from '../tabar/tabar'
export default {
    components:{
        Nav
    }
}
</script>
<style lang="scss">
.layout{
    max-width: 800PX;
    margin:auto;
}
</style>