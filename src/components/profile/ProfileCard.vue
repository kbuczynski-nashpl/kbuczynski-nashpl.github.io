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
            <b-col col>
                <b-row align-content="center" class="about-me-row workspace justify-content-lg-center">
                    <img :src="this.workspace_logo"
                         alt="current_workspace_icon"/>
                    <p class="workspace-logo">{{ this.workspace_name }}</p>
                </b-row>
                <b-row align-content="center" class="about-me-row workspace justify-content-lg-center">
                    <img :src="this.education_logo"
                         alt="education_icon"/>
                    <p class="education-logo">{{ this.education_name }}</p>
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
            education_name: "The Manchester Metropolitan University",
            workspace_name: "BuildEmpire Ltd.",
            education_logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEm8_TYqG-_YA/company-logo_100_100/0/1567408822257?e=1641427200&v=beta&t=G53l_qqLavp7eOUN-Ky1F_CpcU2Ob9-9t48D5e25I2M",
            workspace_logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQE6JEH3Vlaz4w/company-logo_100_100/0/1623223802115?e=1641427200&v=beta&t=1jzn95O3Ej3Ro0S815jGA70eLSN5wwrQPvbCW-NqkH8",
            about_me_country: "Manchester, England, United Kingdom",
            about_me_subtitle: "PHP Software Developer",
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
                width: 15rem;
                font-size: 1rem;

                @media screen and (width: 540px) {
                    width: 25rem;
                }

                @media screen and (max-width: 320px) {
                    width: 12rem;
                }

                @media screen and (max-width: 280px) {
                    width: 10rem;
                }
            }
        }
    }
}
</style>