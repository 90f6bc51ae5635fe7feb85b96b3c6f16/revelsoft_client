<script lang="ts" setup>
import Swal from "sweetalert2";
import type { About } from "~/misc/types";
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({
    middleware: ["auth"],
});

const { getAboutByID, } = useAbout();
const { public: publicCtx } = useRuntimeConfig()
const abouts = ref<About>({
    id: '',
    about_detail: '',
    about_img: '',
})

onMounted(async () => {
    abouts.value = await getAboutByID({ id: 'DEFAULT' })
})
</script>

<template>
    <div id="about" class="about mt-16  ">
        <v-row class="d-flex justify-center ">
            <h1 class="text-txtcolor ">About</h1>
            <h1 class="ml-3">Us</h1>
        </v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-row class="about-us ">
                <v-row class="d-flex justify-center mx-15 ">
                    <v-col id="about-info" class="pt-16 ">
                        <v-row class=" align-center">
                            <v-icon class=" text-greenblue">mdi-36px mdi-checkbox-marked-circle-outline</v-icon>
                            <h1 class="text-greenblue px-4">10 years experience</h1>
                        </v-row>
                        <v-col class="containner ">
                            <div class="text-h4" style="white-space: pre-line;">{{
                                abouts.about_detail }} </div>
                        </v-col>
                    </v-col>
                    <v-col class="about-image-containner  w-100 h-100 my-6 d-flex align-center">
                        <v-img class="about-img  align-center justify-center d-block w-100"
                            :src="`${abouts.about_img ? `${publicCtx.apiBaseUrl}${abouts.about_img}` : defaultImage}`" cover
                            alt="about">
                            <template v-slot:error>
                                <v-img :src="errorImage" cover alt="error"></v-img>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped>
.about-us {
    z-index: 4;
}

.about-img {
    /* min-width: 1em;
    max-width: 80%;
    min-height: 12em;
    max-height: 30em;
    object-fit: cover; */
}

.about-image-containner {
    max-width: 25em;
    min-width: 25em;
    max-height: 25em;
    min-height: 20em;
}


/* @media only screen and (max-width: 900px) {
    .about-us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
} */
</style>