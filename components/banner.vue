
<script lang="ts" setup>
import type { Banner, BannerList } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
definePageMeta({ middleware: ["auth"] });
const { getBannerByID, getBannerBy } = useBanner();
const { getBannerListBy } = useBannerList();
const { public: publicCtx } = useRuntimeConfig()

let popupfrom = ref<boolean>(false)
const banner_lists = ref<BannerList[]>([])
const banner = ref<Banner>({
    banner_id: '',
    banner_name: '',
    banner_detail: '',
    banner_img: '',
});
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
        banner.value = await getBannerBy({ banner_id: query.id }).then((res) => res.docs[0])
        banner_lists.value = await getBannerListBy({ banner_id: query.id }).then(res => res.docs)
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
                <v-col>
                    <v-col class="containner-title py-2  w-100">
                        <div class="banner-title banner-text-1 fs-1 text-h1 " style="white-space: pre-line;">
                            {{ banner.banner_name }}
                        </div>
                    </v-col>
                    <v-col class="containner-title py-2  w-100">
                        <div class="banner-title banner-text-2 text-h4 fs-6" style="white-space: pre-line;">
                            {{
                                banner.banner_detail
                            }}
                        </div>
                    </v-col>
                </v-col>
                <v-row class="mt-10 mx-3 gap-2">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn @click="openFrom"
                                class="text-none rounded-pill bg-greenblue ml-5 border border-3 border-greenblue"
                                v-bind="props" :color="isHovering ? 'themecolor' : undefined">
                                Get In Touch With Us
                            </v-btn>
                        </template>
                    </v-hover>
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn class="text-none rounded-pill bg-themecolor ml-5 border border-3 border-surface"
                                href="#service" v-bind="props" :color="isHovering ? 'greenblue' : undefined">
                                Our Service
                            </v-btn>
                        </template>
                    </v-hover>
                </v-row>
            </v-col>
            <v-col class="banner-img-containner justify-center">
                <v-img class="banner-img d-block w-100"
                    :src="`${banner.banner_img ? `${publicCtx.apiBaseUrl}${banner.banner_img}` : defaultImage}`" cover
                    alt="banner">
                    <template v-slot:error>
                        <v-img :src="errorImage" cover alt="error"></v-img>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </div>
    <v-dialog v-model="popupfrom">
        <v-card class=" bg-themecolor ">
            <v-row class=" ">
                <v-col class="d-flex flex-column justify-space-evenly gap-5 m-5">
                    <v-text-field class="bg-surface border rounded-xl " name="name" id="userName" placeholder="Name"
                        variant="outline"></v-text-field>
                    <v-text-field class="bg-surface border rounded-xl" name="name" id="userName" placeholder="Email"
                        variant="outline"></v-text-field>
                    <v-text-field class="bg-surface border rounded-xl" name="name" id="userName" placeholder="Number"
                        variant="outline"></v-text-field>
                    <v-textarea class="bg-surface border rounded-xl" name="name" id="userName" placeholder="Massage"
                        variant="outline"></v-textarea>
                </v-col>
                <v-col class="d-flex justify-center mt-5">
                    <span class="text-h1 text-txtcolor">CONTACT</span>
                    <span class="text-h1"> US</span>
                    <v-img src="@/assets/images/Saly-12.png"></v-img>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<style scoped>
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
