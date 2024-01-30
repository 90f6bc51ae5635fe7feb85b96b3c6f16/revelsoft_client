<script lang="ts" setup>
import { Portfolio, PortfolioList } from "~~/misc/types"
import defaultUserImage from "@/assets/images/default-user.png"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });
const { getPortfolioBy } = usePortfolio();
const { getPortfolioListBy } = usePortfolioList();
const { public: publicCtx } = useRuntimeConfig()


const portfolio_lists = ref<PortfolioList[]>([])
const portfolio = ref<Portfolio[]>([])
const tab = ref<null>()


onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }

        portfolio.value = await getPortfolioBy({ portfolio_id: query.id }).then((res) => res.docs)
        portfolio_lists.value = await getPortfolioListBy({ portfolio_id: query.id }).then(res => res.docs)
        console.log("portfolio", portfolio.value);
        console.log("portfolio_lists", portfolio_lists.value);

    } catch (e) {
        console.log(e)
    }
})
</script>

<template>
    <div id="portfolio" class="pb-16">
        <div class="blur-containner-2">
            <div id="circle-blur-2" class="rounded-circle"></div>
            <div id="circle-portfolio-lg" class="rounded-circle"></div>
        </div>
        <div id="circle-portfolio-sm" class="rounded-circle"></div>
        <h1 class="display-6 text-center ">PORTFOLIO</h1>
        <v-col id="All" class="portfolio-item">
            <hr class="mx-16">
            <v-row class="display-6 fs-3 d-flex flex-row justify-space-evenly text-h4 py-3"
                v-for="(list, idx) in portfolio " :key="idx">
                <v-tab :value="`${idx + 1}`">
                    <NuxtLink class="d-flex flex-row" :to="`#${list.portfolio_name}`">{{ list.portfolio_name }}</NuxtLink>
                </v-tab>
                <!-- <NuxtLink to="#Industry">Industry</NuxtLink>
                <NuxtLink to="#Education">Education</NuxtLink>
                <NuxtLink to="#Outsource">Outsource</NuxtLink> -->
            </v-row>
            <hr class="mx-16 mb-10">
            <v-card>
                <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                    <v-tab :value="1">Landscape</v-tab>
                    <v-tab :value="2">City</v-tab>
                    <v-tab :value="3">Abstract</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item v-for="(list, idx) in portfolio " :key="idx">
                        <v-container fluid>
                            <v-row>
                                <v-col v-for="(portfolio_list, idx) in list.portfolio_lists " :key="idx">
                                    <v-img :src="`${portfolio_list.portfolio_list_img}`" aspect-ratio="1">{{
                                        console.log("portfolio_list_img", portfolio_list.portfolio_list_img) }}</v-img>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-window-item>
                </v-window>
            </v-card>
            <!-- <div class="container w-50 h-50">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <div class="carousel slide" id="slider1" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button data-bs-target="#slider1" data-bs-slide-to="0"></button>
                                <button data-bs-target="#slider1" data-bs-slide-to="1"></button>
                                <button class="active" data-bs-target="#slider1" data-bs-slide-to="2"></button>
                                <button data-bs-target="#slider1" data-bs-slide-to="3"></button>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/image=01.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/image=02.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item active">
                                    <img src="../assets/images/portfolios/image=03.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/Image=01.png" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#slider1">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#slider1">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> -->
        </v-col>
    </div>
</template>

<style scoped>
#portfolio a {
    z-index: 4;
    text-decoration: none;
    color: white;
}
</style>