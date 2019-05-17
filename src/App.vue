<template>
    <div id="app">
        <router-view name="the-heading"></router-view>
        <router-view></router-view>
        <router-view name="the-footer"></router-view>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('INIT_STOCK');
    }
};
</script>

<style>
</style>
