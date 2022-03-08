<template>
    <div id="profile-card">
        <b-row>
            <b-col col>
                <b-row class="about-me-row">
                    <h3>{{ this.about_me_name }}</h3>
                </b-row>
                <b-row class="about-me-row">
                    <h5>{{ this.about_me_subtitle }}</h5>
                </b-row>
                <b-row class="about-me-row">
                    <p>{{ this.about_me_country }}</p>
                </b-row>
                <b-row class="about-me-row">
                    <p>
                        <SocialIcons/>
                    </p>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SocialIcons from "@/components/navigation/SocialIcons";

export default {
    name: "ProfileCard",
    components: {SocialIcons},
    data: function () {
        return {
            about_me_country: "Manchester, England, United Kingdom",
            about_me_subtitle: "PHP Software Developer at BuildEmpire Ltd.",
            about_me_name: "Krzysztof Buczynski"
        }
    }
}
</script>

<style lang="scss">
#profile-card {
    border: 1px solid $gray-500;
    min-height: 15rem;
    -webkit-border-radius: 0 0 50px 50px;
    -moz-border-radius: 0 0 50px 50px;
    padding-left: 3rem;
    padding-top: 4rem;
    text-align: left;

    .about-me-row {
        h3 {
            font-weight: $font-weight-bold;
        }

        p {
            font-size: $font-size-lg;
            color: $gray-600;
        }

        .social-icon {
            color: $black !important;
        }

        &.workspace {
            margin-top: 1rem;
            margin-bottom: 1rem;

            img {
                height: 3rem;
            }

            .workspace-logo, .education-logo {
                color: $black;
                margin-left: 1rem;
                font-weight: $font-weight-bold;
                text-align: left;
                font-size: 1rem;
            }
        }
    }
}
</style>