<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <Navigation/>
        <MainPage/>
        <Navigation/>
    </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainPage from "@/components/pages/MainPage";

export default {
    name: 'App',
    components: {
        MainPage,
        Navigation
    }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
