<script lang="ts" setup>
import type { Portfolio, PortfolioList } from "~~/misc/types"
import { defineComponent, ref, onMounted } from 'vue';
import errorImage from "@/assets/images/error.png"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

const modules = [EffectCoverflow, Pagination];

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
            <div v-if="allvisible" class="col-lg-8 m-auto w-100">
                <div class="swiper-containner w-100 h-100 ">
                    <swiper effect="coverflow" :grabCursor="true" :centeredSlides="true" slidesPerView="auto"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 2,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="true" :modules="modules" class="mySwiper ">
                        <swiper-slide class=" w-25 h-25" v-for="(list, idx) in portfolio_lists" :key="idx">
                            <v-img class=" banner-img d-block w-100 h-100"
                                :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                cover alt="banner">
                                <template v-slot:error>
                                    <v-img :src="errorImage" cover alt="error"></v-img>
                                </template>
                            </v-img>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div v-if="industryvisible" class="col-lg-8 m-auto w-100">
                <div class="swiper-containner w-100 h-100 ">
                    <swiper effect="coverflow" :grabCursor="true" :centeredSlides="true" slidesPerView="auto"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 2,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="true" :modules="modules" class="mySwiper ">
                        <swiper-slide class=" w-25 h-25" v-for="(list, idx) in portfolio_lists.slice(0, 3)" :key="idx">
                            <v-img class=" banner-img d-block w-100 h-100"
                                :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                cover alt="banner">
                                <template v-slot:error>
                                    <v-img :src="errorImage" cover alt="error"></v-img>
                                </template>
                            </v-img>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div v-if="educationvisible" class="col-lg-8 m-auto w-100">
                <div class="swiper-containner w-100 h-100 ">
                    <swiper effect="coverflow" :grabCursor="true" :centeredSlides="true" slidesPerView="auto"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 2,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="true" :modules="modules" class="mySwiper ">
                        <swiper-slide class=" w-25 h-25" v-for="(list, idx) in portfolio_lists.slice(0, 2)" :key="idx">
                            <v-img class=" banner-img d-block w-100 h-100"
                                :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                cover alt="banner">
                                <template v-slot:error>
                                    <v-img :src="errorImage" cover alt="error"></v-img>
                                </template>
                            </v-img>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div v-if="outsourcevisible" class="col-lg-8 m-auto w-100">
                <div class="swiper-containner w-100 h-100 ">
                    <swiper effect="coverflow" :grabCursor="true" :centeredSlides="true" slidesPerView="auto"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 2,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="true" :modules="modules" class="mySwiper ">
                        <swiper-slide class=" w-25 h-25" v-for="(list, idx) in portfolio_lists.slice(2, 5)" :key="idx">
                            <v-img class=" banner-img d-block w-100 h-100"
                                :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                                cover alt="banner">
                                <template v-slot:error>
                                    <v-img :src="errorImage" cover alt="error"></v-img>
                                </template>
                            </v-img>
                        </swiper-slide>
                    </swiper>
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

.swiper-containner {
    height: 120%;
}
</style>