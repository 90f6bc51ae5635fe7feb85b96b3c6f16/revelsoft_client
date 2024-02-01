<script lang="ts" setup>
import { Portfolio, PortfolioList } from "~~/misc/types"
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
import errorImage from "@/assets/images/error.png"

definePageMeta({ middleware: ["auth"] });
const { getPortfolioBy } = usePortfolio();
const { getPortfolioListBy } = usePortfolioList();
const { public: publicCtx } = useRuntimeConfig()
let activeIndex = 0;


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
    } catch (e) {
        console.log(e)
    }
})

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
                <template v-for="(list, idx) in portfolio" :key="idx">
                    <NuxtLink class="d-flex flex-row" :to="`#${list.portfolio_name}`">{{ list.portfolio_name }}</NuxtLink>
                </template>
            </div>
            <hr class="mx-16 mb-10">
            <div class="container w-50 h-50">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <div class="carousel slide" id="slider1" data-bs-ride="carousel">
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
                            <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#slider1"
                                @click="prevSlide">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#slider1"
                                @click="nextSlide">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
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