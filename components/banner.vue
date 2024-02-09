
<script lang="ts" setup>
import type { Product, Banner, BannerList } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
definePageMeta({ middleware: ["auth"] });
const { getBannerByID, getBannerBy } = useBanner();
const { getBannerListBy } = useBannerList();
const { getProductBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

let activeIndex = 0;
let popupfrom = ref<boolean>(false)
const banner_lists = ref<BannerList[]>([])
const products = ref<Product[]>([]);
const banner = ref<Banner[]>([]);
const openFrom = () => {
    popupfrom.value = !popupfrom.value
}

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }
        banner.value = await getBannerBy({ banner_id: query.id }).then(res => res.docs)
        products.value = await getProductBy({ product_id: query.id }).then(res => res.docs)
        banner_lists.value = await getBannerListBy({ banner_id: query.id }).then(res => res.docs)
        console.log(banner.value);
    } catch (e) {
        console.log(e)
    }
})
</script>

<template>
    <img class="banner-bg1  w-100" src="@/assets/images/Curve1.png">
    <img class="banner-bg2 d-block w-100" src="@/assets/images/Curve2.png">
    <div id="banner" class="d-flex justify-center ">
        <v-row class=" py-2 banner-info">
            <v-col class="py-10">
                <v-col v-if="banner.length > 0">
                    <v-col class="containner-title py-2  w-100">
                        <div class="banner-title banner-text-1 fs-1 text-h1 " style="white-space: pre-line;">
                            {{ banner[0].banner_name }}
                        </div>
                    </v-col>
                    <v-col class="containner-title py-2  w-100">
                        <div class="banner-title banner-text-2 text-h4 fs-6" style="white-space: pre-line;">
                            {{
                                banner[0].banner_detail
                            }}
                        </div>
                    </v-col>
                </v-col>
                <v-row class="mt-10 mx-3 gap-2">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn @click="openFrom"
                                class="text-none rounded-pill bg-greenblue ml-5 border border-2 border-greenblue"
                                v-bind="props" :color="isHovering ? 'themecolor' : undefined">
                                Get In Touch With Us
                            </v-btn>
                        </template>
                    </v-hover>
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn class="text-none rounded-pill bg-themecolor ml-5 border border-2 border-surface"
                                href="#service" v-bind="props" :color="isHovering ? 'greenblue' : undefined">
                                Our Service
                            </v-btn>
                        </template>
                    </v-hover>
                </v-row>
            </v-col>
            <v-col class="banner-img-containner justify-center">
                <div id="carouselExampleIndicators" class="carousel slide carousel-fade w-100 h-100 "
                    data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div v-for="(list, idx) in banner" :key="idx"
                            :class="{ 'carousel-item': true, 'active': idx === activeIndex }">
                            <v-img class="banner-img d-block w-100 h-100"
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

    <v-dialog v-model="popupfrom">
        <td class="align-middle text-center" style="position: absolute; z-index: 5; right: 1%;top: 1%;">
            <v-icon class="fs-2" clickable @click="openFrom" color="error">
                mdi mdi-close-thick</v-icon>
        </td>
        <v-card class="bg-fromcolor  rounded-xl h-100">
            <v-row class="card-from">
                <v-col class="m-5 d-flex justify-center" style="position: relative;">
                    <v-row class="d-flex justify-center">
                        <span class="text-h1 text-txtcolor"> CONTACT</span>
                        <span class="text-h1">US</span>
                    </v-row>
                    <v-col class="contact-img-1  w-100 h-100 "></v-col>
                    <v-col class="contact-img-2  w-100 h-100 "></v-col>
                    <v-col class="contact-img-3  w-100 h-100 "></v-col>
                    <v-col class="contact-img-4  w-100 h-100 "></v-col>
                    <v-col class="contact-img-5  w-100 h-100 "></v-col>
                </v-col>
                <v-col class="m-5">
                    <v-col style="position: relative;">
                        <div class="mb-4">
                            <input type="email" class="form-control w-100" id="formName" placeholder="Name">
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control w-100" id="formEmail" placeholder="Email">
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control w-100" id="formNumber" placeholder="Number">
                        </div>
                        <div>
                            <textarea class="form-control w-100" id="formMassage" rows="3" placeholder="Massage"></textarea>
                        </div>
                    </v-col>
                    <v-col class="p-2">
                        <div>
                            <v-item-group class="d-flex justify-space-evenly py-3" multiple selected-class="bg-primary">
                                <v-item v-for="(list, idx) in products " :key="idx" v-slot="{ selectedClass, toggle }">
                                    <v-chip class="bg-surface text-uppercase" :class="selectedClass" @click="toggle">
                                        {{ list.product_name }}
                                    </v-chip>
                                </v-item>
                            </v-item-group>
                        </div>
                        <div class="d-flex justify-center">
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn
                                        class="text-none text-center rounded-pill bg-surface ml-5 border border-2 border-surface"
                                        href="#" v-bind="props" :color="isHovering ? 'greenblue' : undefined">
                                        SEND
                                    </v-btn>
                                </template>
                            </v-hover>
                        </div>
                    </v-col>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.card-from {
    display: flex;
    flex-direction: row-reverse;
}

.form-control {
    /* max-width: 50em; */
}

#banner {
    padding-top: 200px;
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
    margin: 0 10%;
    z-index: 4;
}

.banner-img {
    min-width: 18em;
    max-width: 80%;
    min-height: 12em;
    max-height: 100%;
    object-fit: cover;
}

.banner-img-containner {
    height: 410px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.containner-title {
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

.banner-title {
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

.banner-text-3 {
    animation: fade-in 0.8s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.banner-text-4 {
    animation: fade-in 0.8s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.contact-img-1 {
    background-image: url("../assets/images/fromimg/Saly-12.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 50%;
    max-height: 80%;
    bottom: 10%;
}

.contact-img-2 {
    background-image: url("../assets/images/fromimg/Saly-44.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 35%;
    top: 5%;
    left: 5%;
}

.contact-img-3 {
    background-image: url("../assets/images/fromimg/Saly-21.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 20%;
    top: 0;
    right: 5%;
}

.contact-img-4 {
    background-image: url("../assets/images/fromimg/Saly-31.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 20%;
    bottom: 5%;
    left: 5%;
}

.contact-img-5 {
    background-image: url("../assets/images/fromimg/Saly-43.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 45%;
    bottom: 5%;
    right: 5%;
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

@media only screen and (max-width: 1280px) {
    .card-from {
        display: flex;
        flex-direction: column;
    }

    .contact-img-1 {
        display: none;
    }

    .contact-img-2 {
        display: none;
    }

    .contact-img-3 {
        display: none;
    }

    .contact-img-4 {
        display: none;
    }

    .contact-img-5 {
        display: none;
    }
}
</style>
