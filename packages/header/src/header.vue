<template>
    <header class="component-header">
        {{title}}
    </header>
</template>

<script>
export default {
    name: 'component-header',
    props: {
        title:{
            type: String,
            default:'标题'
        }
    }
};
</script>

<style lang="css">
    .component-header{
        width:100%;
        height: 50px;
        position: fixed;
        top:0;
        left: 0;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #f6f6f6;
    }
</style>