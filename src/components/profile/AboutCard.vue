<template>
    <div id="about-card">
        <b-row>
            <b-col col class="text-left">
                <h3>About</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col col>
                <p>
                    An enthusiastic computer science graduate with excellent communication skills and strong motivation to succeed. Positive hard-working individual who is dedicated to achieving set goals.
                    <br/><br/>
                    The connection of knowledge and achievements provide excellent evidence of hard passionate work. Always motivated to explore unknowns and meet new people. Not afraid of commitment.
                </p>
                <p>
                    I my main programming language of choice is <strong>PHP.</strong>
                    <br/>
                    I also have some experience in HTML, CSS, JQuery, ES6, NodeJS, Angular/TypeScript, VueJS, MySQL, Bootstrap, Unix OS, GraphQL
                    and many more. I am a strong positive confident problem solver with leadership skills.
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "AboutCard"
}
</script>

<style lang="scss">
    #about-card {
        padding: 2rem 1rem 1rem 3rem;
        margin-top: 1rem;
        border: 1px solid $gray-500;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;

        h3 {
            font-weight: $font-weight-bold;
        }

        p {
            font-size: 1rem;
            text-align: left;
        }
    }
</style>