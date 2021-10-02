<template>
    <div id="main-page">
        <b-container>
            <b-row>
                <b-col col xl="12" lg="12" md="12" sm="12">
                    <BannerPicture>
                        <ProfileCard/>
                    </BannerPicture>
                </b-col>
            </b-row>
            <b-row>
                <b-col col xl="12" lg="12" md="12" sm="12">
                    <AboutCard/>
                </b-col>
            </b-row>
            <b-row>
                <b-col col xl="12" lg="12" md="12" sm="12">
                    <SkillsCard/>
                </b-col>
            </b-row>
            <b-row>
                <b-col col xl="12" lg="12" md="12" sm="12">
                    <InterestCard/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import BannerPicture from "@/components/pages/BannerPicture";
import ProfileCard from "@/components/profile/ProfileCard";
import AboutCard from "@/components/profile/AboutCard";
import SkillsCard from "@/components/profile/SkillsCard";
import InterestCard from "@/components/profile/InterestCard";

export default {
    name: "MainPage",
    components: {InterestCard, SkillsCard, AboutCard, ProfileCard, BannerPicture}
}
</script>

<style lang="scss">
#main-page {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
}
</style>