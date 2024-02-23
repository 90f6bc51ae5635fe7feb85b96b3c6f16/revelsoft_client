
<script lang="ts" setup>
import popupform from '~/components/popupform.vue';
import type { Product, Banner } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
definePageMeta({ middleware: ["auth"] });
const { getBannerClientBy } = useBanner();
const { getProductClientBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

let activeIndex = 0;
const products = ref<Product[]>([]);
const banner = ref<Banner[]>([]);
const dialog = ref<{ show: boolean }>({ show: false })

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }
        banner.value = await getBannerClientBy({ banner_id: query.id }).then(res => res.docs)
        products.value = await getProductClientBy({ product_id: query.id }).then(res => res.docs)
    } catch (e) {
        console.log(e)
    }
})
const openFrom = () => {
    dialog.value.show = true
}
</script>

<template>
    <img class="banner-bg1  w-100" src="@/assets/images/Curve1.png" style="overflow: visible;">
    <img class="banner-bg2 d-block w-100" src="@/assets/images/Curve2.png" style="overflow: visible;">
    <div id="banner" class="d-flex justify-center ">
        <v-row class=" py-2 banner-info mx-5 ">
            <v-col class="py-10 w-100 h-auto ">
                <v-col class="banner-text" v-if="banner.length > 0">
                    <v-col class="containner-title px-4 py-2 w-100 ">
                        <div class="banner-title banner-text-1 fs-1 text-h1" style="white-space: pre-line;">
                            {{ banner[0].banner_name }}
                        </div>
                    </v-col>
                    <v-col class="containner-title px-4 py-2 w-100 ">
                        <div class="banner-title banner-text-2 text-h3 fs-5 " style="white-space: pre-line;">
                            {{
                                banner[0].banner_detail
                            }}
                        </div>
                    </v-col>
                </v-col>
                <v-row class="hover-btn justify-center mt-10">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn @click="openFrom"
                                class="banner-button px-5 my-2 text-none text-surface fs-6 rounded-pill bg-greenblue border border-2 border-greenblue font-weight-bold"
                                v-bind="props" :color="isHovering ? 'themecolor' : undefined">
                                Get In Touch
                            </v-btn>
                        </template>
                    </v-hover>
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn
                                class="banner-button px-5 my-2 text-none text-surface fs-6 rounded-pill bg-themecolor border border-2 border-surface font-weight-bold"
                                href="#service" v-bind="props" :color="isHovering ? 'grey' : undefined">
                                Our Service
                            </v-btn>
                        </template>
                    </v-hover>
                </v-row>
            </v-col>
            <v-col class="banner-img-containner d-flex justify-center ">
                <div id="carouselExampleIndicators" class=" carousel slide carousel-fade w-100 h-100 "
                    data-bs-ride="carousel">
                    <div class="  carousel-inner  w-100  px-3">
                        <div v-for="(list, idx) in banner" :key="idx"
                            :class="{ 'carousel-item d-flex justify-center': true, 'active': idx === activeIndex }">
                            <v-img class="my-5 banner-img  d-block"
                                :src="`${list.banner_img ? `${publicCtx.apiBaseUrl}${list.banner_img}` : defaultImage}`"
                                cover alt="banner">
                                <template v-slot:error>
                                    <v-img :src="errorImage" cover alt="error"></v-img>
                                </template>
                            </v-img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="visually-hidden"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="visually-hidden"></span>
                    </button>
                </div>
            </v-col>
        </v-row>
    </div>
    <div>
        <template>
            <popupform v-model="dialog" />
        </template>
    </div>
</template>

<style scoped>
* {
    padding: auto 0 !important;
}

#banner {
    padding-top: 200px;
}

.banner-text {
    min-width: 22em;
    align-self: center;
}

.banner-bg1 {
    width: 100%;
    height: 99.99%;
    max-height: 50em;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-bg2 {
    width: 100%;
    max-height: 52em;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-info {
    font-family: "Outfit", sans-serif;
    z-index: 4;
}

.banner-button {
    padding: 1.3em;
    align-content: center;
}

.banner-img {
    min-width: 20em;
    max-width: 30em;
    min-height: 15em;
    max-height: 100%;
    object-fit: cover;
}

.containner-title {
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

.banner-title {
    align-self: center;
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
}

.banner-text-1 {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.banner-text-2 {
    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}


@keyframes scale {
    100% {
        transform: scale(1);
    }
}

@keyframes fade-in {
    100% {
        opacity: 1;
        filter: blur(0);
    }
}
</style>
