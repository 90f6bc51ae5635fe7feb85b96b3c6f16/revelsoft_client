<script lang="ts" setup>
import type { Product } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({ middleware: ["auth"] });
const { getProductBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

const products = ref<Product[]>([]);




onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }

        products.value = await getProductBy({ product_id: query.id }).then(res => res.docs)
    } catch (e) {
        console.log(e)
    }
})

const color: string[] = ["service_1", "service_2", "service_3", "service_4"]

const getColor = (idx: number): string => {
    return color[idx % color.length]
}

</script>

<template>
    <v-col id="service" class="py-16">
        <v-row class="service d-flex justify-center ">
            <h1 class="text-txtcolor font-weight-medium">Our</h1>
            <h1 class="ml-3 font-weight-medium">Service</h1>
        </v-row>
        <v-row class="d-flex justify-space-evenly m-15 py-7 px-2">
            <v-containner v-for="(list, idx) in products " :key="idx"
                :class="`m-2 rounded-xl bg-${getColor(idx)} containner`" style="position: relative;">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="circle pa-6 bg-service_circle rounded-circle d-inline-block">
                        <v-img class="service-img"
                            :src="`${list.product_img ? `${publicCtx.apiBaseUrl}${list.product_img}` : defaultImage}`" cover
                            alt="service-img pt-1">
                            <template v-slot:error>
                                <v-img :src="errorImage" cover alt="error"></v-img>
                            </template>
                        </v-img>
                    </div>
                    <div class="service-title text-surface text-uppercase text-center"
                        style="white-space: pre-line; font-size: 1.1rem;">
                        {{
                            list.product_name }}
                    </div>
                </v-col>
            </v-containner>
        </v-row>
    </v-col>
</template>

<style scoped>
.service-title {
    margin-top: 10%;
}

.service,
.service-title {
    font-family: "Outfit", sans-serif;
}

#service-containner {
    width: 250px;
    height: 200px;
}

.containner {
    box-shadow: 3px 3px rgba(255, 255, 255, 0.2);
}

.circle {
    width: 110px;
    height: 110px;
}
</style>