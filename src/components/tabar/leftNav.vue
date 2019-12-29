<template>
    <div class="leftnav">
        <ul>
            <li>添加</li>
            <li>编辑</li>
            <li>删除</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.leftnav{
    ul{
        li{
            width: 100%;
            text-align:center;
            height: 50px;
            line-height: 50px;
            border-radius: 4px;
            cursor: pointer;
        }
        li:hover{
            background-color: #000;
            color: #fff;
        }
    }
}
</style>