<template>
<div id="banner-picture">
    <div class="banner-picture" :style="{backgroundImage: `url(${require('@/assets/images/gradient-banner.jpg')})`}">
        <div class="avatar-picture" :style="{backgroundImage: `url(${require('@/assets/images/avatar.jpeg')})`}">
        </div>
    </div>
    <slot/>
</div>
</template>

<script>
export default {
name: "BannerPicture"
}
</script>

<style lang="scss">
    #banner-picture {
        .banner-picture {
            min-height: 10rem;
            height: 10rem;
            background-size: cover;
            -webkit-border-radius: 50px 50px 0 0;
            -moz-border-radius: 50px 50px 0 0;

            .avatar-picture {
               min-height: 10rem;
                min-width: 10rem;
                height: 10rem;
                width: 10rem;
                position: relative;
                top: 3.5rem;
                left: 2.5rem;
                border-radius: 100%;
                background-size: cover;
                border: 0.5rem solid white;
                -webkit-border-radius: 100%;
                -moz-border-radius: 50px;
            }
        }
    }
</style>