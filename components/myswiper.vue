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

definePageMeta({
    middleware: ["auth"],
});

const { public: publicCtx } = useRuntimeConfig()
const { getPortfolioBy } = usePortfolio();
const { getPortfolioListBy } = usePortfolioList();
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
</script>

<template>
    <swiper effect="coverflow" :grabCursor="true" :centeredSlides="true" slidesPerView="auto" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(list, idx) in portfolio_lists" :key="idx">
            <v-img class="banner-img d-block w-100 h-100"
                :src="`${list.portfolio_list_img ? `${publicCtx.apiBaseUrl}${list.portfolio_list_img}` : defaultImage}`"
                cover alt="banner">
                <template v-slot:error>
                    <v-img :src="errorImage" cover alt="error"></v-img>
                </template>
            </v-img>
        </swiper-slide>
    </swiper>
</template> 

<style scoped>
/* #app {
    height: 100%
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}

.swiper-slide img {
    display: block;
    width: 100%;
} */
</style>