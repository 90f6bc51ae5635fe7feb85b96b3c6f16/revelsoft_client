
<script lang="ts" setup>
import { Banner, BannerList } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
definePageMeta({ middleware: ["auth"] });
const { getBannerByID, getBannerBy } = useBanner();
const { getBannerListBy } = useBannerList();


const { public: publicCtx } = useRuntimeConfig()

const banner_lists = ref<BannerList[]>([])
const banner = ref<Banner>({
    banner_id: '',
    banner_name: '',
    banner_detail: '',
    banner_img: '',
});

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
        <v-row class="py-2 banner-info">
            <v-col class="py-10">
                <v-col class="banner-title-containner align-center w-auto border">
                    <v-col cols="12" sm="4" md="6" class="py-2">
                        <div class="banner-title fs-1 text-h1" style="white-space: pre;">{{ banner.banner_name }}
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4" md="6" class="py-2">
                        <div class="banner-title text-h4 fs-6" style="white-space: pre;">{{ banner.banner_detail
                        }}</div>
                    </v-col>
                </v-col>
                <v-row class=" mt-10 pl-10 mx-5 gap-2">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn class="text-none rounded-pill bg-greenblue ml-5 border border-3 border-greenblue"
                                v-bind="props" :color="isHovering ? 'themecolor' : undefined">
                                Get In Touch
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
            <v-col>
                <v-img class="banner-img d-block w-100 h-100"
                    :src="`${banner.banner_img ? `${publicCtx.apiBaseUrl}${banner.banner_img}` : defaultImage}`" cover
                    alt="banner">
                    <template v-slot:error>
                        <v-img :src="errorImage" cover alt="error"></v-img>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
#banner {
    padding-top: 200px;
}

.banner-bg1 {
    width: 100%;
    height: 99.99%;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-bg2 {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-info {
    margin: 0 10%;
    z-index: 4;
}

/* .banner-title {
    width: auto !important;
    font-size: 2vw
} */

.banner-img {
    min-width: 250px;
    max-width: 80%;
    object-fit: cover;
}

@media only screen and (max-width: 660px) {
    /* .banner-title {
        max-width: 80%;
        font-size: 80%;
    } */
}
</style>