<template>
    <div id="navigation">
        <b-navbar class="navbar-background navbar-height" toggleable="lg" type="dark"/>
    </div>
</template>

<script>
export default {
    name: 'NavigationComponent',
    props: {
        'title': {
            type: String,
            default: 'Krzysztof Buczynski.io'
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/_custom.scss";
@import "~@/assets/scss/vendors/bootstrap-vue/index";

#navigation {
    .navbar-height {
        height: 2rem;
    }

    .navbar-cust-brand {
        font-size: 1.6rem;
    }

    .navbar-background {
        background-color: #145364 !important;
    }
}
</style>
