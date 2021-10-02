<template>
    <div id="skills-card">
        <b-row>
            <b-col col class="text-left">
                <h3>Skills</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col col class="text-left">
                <b-list-group horizontal="" class="flex-wrap">
                    <b-media vertical-align="start" v-for="(skill, index) in this.skills" :key="index" class="icon mt-1 mb-1">
                        <template #aside>
                            <b-img width="64" :alt="skill.name" :src="skill.icon"></b-img>
                        </template>
                    </b-media>
                </b-list-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "SkillsCard",
    data: function() {
        return {
            skills: [
                {
                    name: 'PHP',
                    icon: 'https://www.svgrepo.com/show/333583/php.svg',
                },
                {
                    name: "MySQL",
                    icon: 'https://www.svgrepo.com/show/306453/mysql.svg',
                },
                {
                    name: "Vagrant",
                    icon: 'https://www.svgrepo.com/show/306915/vagrant.svg',
                },
                {
                    name: "JavaScript",
                    icon: 'https://www.svgrepo.com/show/306259/javascript.svg',
                },
                {
                    name: "CSS",
                    icon: 'https://www.svgrepo.com/show/221320/css.svg',
                },
                {
                    name: "HTML",
                    icon: 'https://www.svgrepo.com/show/165969/html.svg',
                },
                {
                    name: "GraphQL",
                    icon: 'https://www.svgrepo.com/show/306155/graphql.svg',
                },
                {
                    name: "JQuery",
                    icon: 'https://www.svgrepo.com/show/306276/jquery.svg',
                },
                {
                    name: "NodeJS",
                    icon: 'https://www.svgrepo.com/show/333576/nodejs.svg'
                },
                {
                    name: "Angular",
                    icon: 'https://www.svgrepo.com/show/329926/angular.svg'
                },
                {
                    name: "TypeScript",
                    icon: 'https://www.svgrepo.com/show/306891/typescript.svg'
                },
                {
                    name: "VueJS",
                    icon: 'https://www.svgrepo.com/show/333624/vuejs.svg'
                },
                {
                    name: "Bootstrap",
                    icon: 'https://www.svgrepo.com/show/305812/bootstrap.svg'
                },
                {
                    name: 'Linux',
                    icon: 'https://www.svgrepo.com/show/330851/linux.svg'
                },
                {
                    name: "GitHub",
                    icon: 'https://www.svgrepo.com/show/330512/github.svg'
                },
                {
                    name: 'AWS',
                    icon: 'https://www.svgrepo.com/show/331300/aws.svg'
                },
                {
                    name: 'Slack',
                    icon: 'https://www.svgrepo.com/show/327394/logo-slack.svg'
                },
                {
                    name: 'Discord',
                    icon: 'https://www.svgrepo.com/show/330307/discord.svg'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#skills-card {
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