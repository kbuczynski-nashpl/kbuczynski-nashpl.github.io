<template>
    <div id="interest-card">
        <b-row>
            <b-col col class="text-left">
                <h3>Interest</h3>
            </b-col>
        </b-row>
        <b-row v-for="(interest, index) in interests" :key="index" class="mt-2 mb-2">
            <b-col col class="text-left">
                <b-media right-align vertical-align="center">
                    <template #aside>
                        <b-img v-if="interest.icon" width="80" alt="placeholder" :src="interest.icon"></b-img>
                    </template>
                    <h5 class="mt-0 mb-1 font-weight-bold">{{ interest.name }}</h5>
                    <p class="mb-0" v-html="interest.text"></p>
                </b-media>
                <br/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "InterestCard",
    data: function () {
        return {
            interests: [
                {
                    name: 'Open Source',
                    icon: 'https://opensource.org/files/osi_keyhole_300X300_90ppi_0.png',
                    text: ' Open source software is software with source code that anyone can inspect, modify, and enhance.\n' +
                        '"Source code" is the part of software that most computer users don\'t ever see; it\'s the code computer programmers can manipulate to change how a piece of software—a "program" or "application"—works.<br/>\n'
                },
                {
                    name: 'Magic The Gathering',
                    icon: `${require('@/assets/images/mtg-logo.jpg')}`,
                    text: 'Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast.'
                },
                {
                    name: 'Others',
                    text: 'I have many other interests. The list is too long to explain them all ...'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#interest-card {
    padding: 2rem 2rem 2rem 3rem;
    margin-top: 1rem;
    border: 1px solid $gray-500;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;

    h3 {
        font-weight: $font-weight-bold;
    }
}
</style>