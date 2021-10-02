<template>
    <div id="nav-social-icons">
        <a :href="icon.link" target="_blank" v-for="(icon, index) in icons" :key="index">
            <b-icon class="social-icon rounded p-1" :icon="icon.type"/>
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialIcons",
    data: function () {
        return {
            icons: [
                {
                    type: 'github',
                    link: 'https://github.com/kbuczynski-nashpl'
                },
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/kbuczynski_nashpl'
                },
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/krzysztof-buczynski-59008b152'
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/NashPL'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#nav-social-icons {
    .social-icon {
        height: auto;
        width: 3rem;
        color: $white !important;
    }
}
</style>