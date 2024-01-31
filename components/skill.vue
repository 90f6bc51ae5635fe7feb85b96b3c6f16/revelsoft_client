<script lang="ts" setup>
import { Skill, SkillList } from "~~/misc/types"
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });

const { getSkillBy } = useSkill();
const { getSkillListBy } = useSkillList();
const { public: publicCtx } = useRuntimeConfig();

const skill = ref<Skill[]>([])

const skill_lists = ref<SkillList[]>([])

onMounted(async () => {


    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};
        const reader = new FileReader();
        for (const [key, value] of params) {
            query[key] = value;
        }



        skill.value = await getSkillBy({ skill_id: query.id }).then((res) => res.docs)
        skill_lists.value = await getSkillListBy({ skill_id: query.id }).then(res => res.docs)
        console.log('IMG', skill.value)
    } catch (e) {
        console.log(e)
    }
})

</script>

<template>
    <div id="skill" class="pb-16">
        <v-row class="d-flex justify-center py-10">
            <h1 class="text-txtcolor ">Our</h1>
            <h1 class="ml-3">Skill</h1>
        </v-row>
        <v-col>
            <v-row class=" d-flex justify-space-evenly  h-100">
                <div class="skill-item">
                    <div class="circle-img d-block w-100 ">
                        <div class="skill-title w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Frontend/html.png"
                                        alt="">
                                    <p>html</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Frontend/react.png"
                                        alt="">
                                    <p>react</p>
                                </div>
                            </div>
                            <h2>Frontend</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Frontend/javascript.png" alt="">
                                    <p>javascript</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Frontend/flutter.png"
                                        alt="">
                                    <p>flutter</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Frontend/typescript.png" alt="">
                                    <p>typescript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-title w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend/golang.png"
                                        alt="">
                                    <p>html</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend/nodejs.png"
                                        alt="">
                                    <p>react</p>
                                </div>
                            </div>
                            <h2>Backend</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend/dotnet.png"
                                        alt="">
                                    <p>javascript</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend/ruby.png"
                                        alt="">
                                    <p>flutter</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend/php.png"
                                        alt="">
                                    <p>typescript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-item ">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-title w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Database/mysql.png"
                                        alt="">
                                    <p>html</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Database/mangodb.png"
                                        alt="">
                                    <p>react</p>
                                </div>
                            </div>
                            <h2>Database</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Database/redis.png"
                                        alt="">
                                    <p>javascript</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Database/postgresql.png" alt="">
                                    <p>flutter</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Database/oracle.png"
                                        alt="">
                                    <p>typescript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
            <v-row class=" d-flex justify-space-evenly ">
                <div class="skill-item">
                    <div class="circle-img d-block w-100 d-flex justify-center align-center">
                        <div class="skill-title w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Framework/nuxtjs.png"
                                        alt="">
                                    <p>html</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Framework/nextjs.png"
                                        alt="">
                                    <p>react</p>
                                </div>
                            </div>
                            <h2>Framework</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Framework/vuejs.png"
                                        alt="">
                                    <p>javascript</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Framework/strapi.png"
                                        alt="">
                                    <p>flutter</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Framework/wordpress.png" alt="">
                                    <p>typescript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-item ">
                    <div class="circle-img d-block w-100  d-flex justify-center align-center">
                        <div class="skill-title w-100 h-100 d-flex justify-center align-center ">
                            <div class="above-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-1 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Infrastructure/docker.png" alt="">
                                    <p>html</p>
                                </div>
                                <div
                                    class="circle-sm-2 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Infrastructure/cloudflare.png" alt="">
                                    <p>react</p>
                                </div>
                            </div>
                            <h2>Infrastructure</h2>
                            <div class="middle-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-3 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Infrastructure/kubernetes.png" alt="">
                                    <p>javascript</p>
                                </div>
                                <div
                                    class="circle-sm-4 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Infrastructure/monitoring.png" alt="">
                                    <p>flutter</p>
                                </div>
                            </div>
                            <div class="under-circle d-flex justify-space-between">
                                <div
                                    class="circle-sm-5 rounded-circle d-flex flex-column justify-center align-center pt-3 ">
                                    <img class="skill-img d-block w-100"
                                        src="@/assets/images/skills/Infrastructure/nginx.png" alt="">
                                    <p>typescript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped>
.skill-title {
    min-width: 337px;
    min-height: 323px;
}

.circle-img {
    background-image: url("../assets/images/Circle.png");
    min-width: 337px;
    min-height: 323px;
    position: relative;
}

.skill-img {
    max-width: 40px;
    max-height: 40px;
    /* position: absolute; */

}

.circle-sm-1 {
    position: absolute;
    width: 85px;
    height: 85px;
    top: 0;
    left: 10%;
}

.circle-sm-2 {
    position: absolute;
    width: 85px;
    height: 85px;
    top: 0;
    right: 10%;
}

.circle-sm-3 {
    position: absolute;
    width: 85px;
    height: 85px;
    bottom: 27%;
    left: 0;
}

.circle-sm-4 {
    position: absolute;
    width: 85px;
    height: 85px;
    right: 0;
    bottom: 27%;
}

.circle-sm-5 {
    position: absolute;
    width: 85px;
    height: 85px;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
}
</style>