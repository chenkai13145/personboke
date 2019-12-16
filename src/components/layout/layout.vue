<template>
    <div class="layout">
        <Nav/>
        <router-view/>
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