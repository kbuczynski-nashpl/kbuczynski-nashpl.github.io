<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <NavigationComponent/>
        <MainPage/>
        <NavigationComponent/>
    </div>
</template>

<script>
import NavigationComponent from "@/components/navigation/NavigationComponent";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainPage from "@/components/pages/MainPage";

export default {
    name: 'App',
    components: {
        MainPage,
        NavigationComponent
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
