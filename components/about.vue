<script lang="ts" setup>
import Swal from "sweetalert2";
import { About } from "~/misc/types";
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
    <div id="about" class="mt-16 pt-16 ">
        <v-row class="d-flex justify-center ">
            <h1 class="text-txtcolor ">About</h1>
            <h1 class="ml-3">Us</h1>
        </v-row>
        <v-col cols="12" class="my-10 ps-16">
            <v-row class="about-us ">
                <v-col id="about-info" class="pt-16 pl-10">
                    <v-row class="d-flex align-center">
                        <v-icon class=" text-greenblue">mdi-36px mdi-checkbox-marked-circle-outline</v-icon>
                        <h1 class="text-greenblue px-4">10 years experience</h1>
                    </v-row>
                    <v-col class="containner ">
                        <div class="text-h4 pl-7" style="white-space: pre-line;">{{
                            abouts.about_detail }} </div>
                    </v-col>
                </v-col>
                <v-col cols="6" md="4">
                    <div class="about-img pr-16 d-block w-100 h-auto">
                        <template v-if="abouts.about_img">
                            <v-img class="about-img pr-16 d-block w-502" :src="`${publicCtx.apiBaseUrl}${abouts.about_img}`"
                                aspect-ratio="1" cover max-height="200px">
                                <template v-slot:error>
                                    <v-img :src="errorImage" alt="error"></v-img>
                                </template>
                            </v-img>
                        </template>
                        <template v-else>
                            <v-img :src="defaultImage" aspect-ratio="1" max-height="200px"></v-img>
                        </template>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </div>
</template>

<style scoped> .about-img {
     height: auto;
     min-width: 250px;
     min-height: 350px;
     object-fit: cover;
 }
</style>