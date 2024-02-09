<script lang="ts" setup>
import type { Portfolio, PortfolioList } from "~~/misc/types"
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
import errorImage from "@/assets/images/error.png"
import Swiper from "swiper";

definePageMeta({ middleware: ["auth"] });
const { getPortfolioBy } = usePortfolio();
const { getPortfolioListBy } = usePortfolioList();
const { public: publicCtx } = useRuntimeConfig()
let activeIndex = 0;
let allvisible = ref<Boolean>(true)
let industryvisible = ref<Boolean>(false)
let educationvisible = ref<Boolean>(false)
let outsourcevisible = ref<Boolean>(false)


const portfolio_lists = ref<PortfolioList[]>([])
const portfolio = ref<Portfolio[]>([])
let tabs = portfolio.value.length

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }
        portfolio.value = await getPortfolioBy({ portfolio_id: query.id }).then((res) => res.docs)
        portfolio_lists.value = await getPortfolioListBy({ portfolio_id: query.id }).then(res => res.docs)
    } catch (e) {
        console.log(e)
    }
})

const toggleAll = () => {
    allvisible.value = true
    industryvisible.value = false
    educationvisible.value = false
    outsourcevisible.value = false
}
const toggleIndustry = () => {
    allvisible.value = false
    industryvisible.value = true
    educationvisible.value = false
    outsourcevisible.value = false
}
const toggleEducation = () => {
    allvisible.value = false
    industryvisible.value = false
    educationvisible.value = true
    outsourcevisible.value = false
}
const toggleOutsource = () => {
    allvisible.value = false
    industryvisible.value = false
    educationvisible.value = false
    outsourcevisible.value = true
}


const nextSlide = () => {
    activeIndex = (activeIndex + 1) % portfolio_lists.value.length;
}
const prevSlide = () => {
    activeIndex = (activeIndex - 1 + portfolio_lists.value.length) % portfolio_lists.value.length;
}

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
            <div class="display-6 fs-3 d-flex flex-row justify-space-evenly text-h4 py-3">
                <template v-if="portfolio.length > 0">
                    <v-row class="d-flex justify-space-evenly">
                        <NuxtLink @click="toggleAll" :to="`#${portfolio[0].portfolio_name}`">{{ portfolio[0].portfolio_name
                        }}</NuxtLink>
                        <NuxtLink @click="toggleIndustry" :to="`#${portfolio[1].portfolio_name}`">{{
                            portfolio[1].portfolio_name }}</NuxtLink>
                        <NuxtLink @click="toggleEducation" :to="`#${portfolio[2].portfolio_name}`">{{
                            portfolio[2].portfolio_name }}</NuxtLink>
                        <NuxtLink @click="toggleOutsource" :to="`#${portfolio[3].portfolio_name}`">{{
                            portfolio[3].portfolio_name }}</NuxtLink>
                    </v-row>
                </template>
            </div>
            <hr class="mx-16 mb-10">
            <div class="container w-50 h-50">
                <div class="row">
                    <div class="col-lg-8 m-auto" style="min-width: 11em;">
                        <div v-if="allvisible" id="carouselExampleIndicators" class="carousel slide carousel-fade"
                            data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button v-for="(list, idx) in portfolio_lists" :key="idx" data-bs-target="#slider1"
                                    :data-bs-slide-to="idx" :class="{ 'active': idx === activeIndex }">
                                </button>
                            </ol>
                            <div class="carousel-inner">
                                <div v-for="(list, idx) in portfolio_lists" :key="idx"
                                    :class="{ 'carousel-item': true, 'active': idx === activeIndex }">
                                    <v-img class="banner-img d-block w-100 h-100"
                                        :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                        cover alt="portfolio_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div v-if="industryvisible" id="carouselExampleIndicators" class="carousel slide carousel-fade"
                            data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button v-for="(list, idx) in portfolio_lists.slice(0, 4)" :key="idx"
                                    data-bs-target="#slider1" :data-bs-slide-to="idx"
                                    :class="{ 'active': idx === activeIndex }">
                                </button>
                            </ol>
                            <div class="carousel-inner">
                                <div v-for="(list, idx) in portfolio_lists.slice(0, 4)" :key="idx"
                                    :class="{ 'carousel-item': true, 'active': idx === activeIndex }">
                                    <v-img class="banner-img d-block w-100 h-100"
                                        :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                        cover alt="portfolio_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div v-if="educationvisible" id="carouselExampleIndicators" class="carousel slide carousel-fade"
                            data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button v-for="(list, idx) in portfolio_lists.slice(1, 3)" :key="idx"
                                    data-bs-target="#slider1" :data-bs-slide-to="idx"
                                    :class="{ 'active': idx === activeIndex }">
                                </button>
                            </ol>
                            <div class="carousel-inner">
                                <div v-for="(list, idx) in portfolio_lists.slice(1, 3)" :key="idx"
                                    :class="{ 'carousel-item': true, 'active': idx === activeIndex }">
                                    <v-img class="banner-img d-block w-100 h-100"
                                        :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                        cover alt="portfolio_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div v-if="outsourcevisible" id="carouselExampleIndicators" class="carousel slide carousel-fade"
                            data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button v-for="(list, idx) in portfolio_lists.slice(0, 3)" :key="idx"
                                    data-bs-target="#slider1" :data-bs-slide-to="idx"
                                    :class="{ 'active': idx === activeIndex }">
                                </button>
                            </ol>
                            <div class="carousel-inner">
                                <div v-for="(list, idx) in portfolio_lists.slice(0, 3)" :key="idx"
                                    :class="{ 'carousel-item': true, 'active': idx === activeIndex }">
                                    <v-img class="banner-img d-block w-100 h-100"
                                        :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                        cover alt="portfolio_list">
                                        <template v-slot:error>
                                            <v-img :src="errorImage" cover alt="error"></v-img>
                                        </template>
                                    </v-img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </div>
</template>

<style scoped>
.portfolio-item {
    z-index: 5;
}

#portfolio a {
    z-index: 4;
    text-decoration: none;
    color: white;
}
</style>