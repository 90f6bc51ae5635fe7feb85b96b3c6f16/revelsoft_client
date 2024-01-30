<script lang="ts" setup>
import { Product } from "~~/misc/types"
import errorImage from "@/assets/images/error.png"

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({ middleware: ["auth"] });
const { getProductBy, getProductByID } = useProduct();
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
</script>

<template>
    <v-col id="service" class="pb-16">
        <v-row class="d-flex justify-center ">
            <h1 class="text-txtcolor ">Our</h1>
            <h1 class="ml-3">Service</h1>
        </v-row>
        <v-row class="d-flex justify-space-evenly m-16 py-7 px-2">
            <v-containner v-for="(list, idx) in products " :key="idx" class="rounded-xl bg-service_2">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="circle pa-6 bg-service_circle rounded-circle d-inline-block">
                        <v-img class="service-img"
                            :src="`${list.product_img ? `${publicCtx.apiBaseUrl}${list.product_img}` : defaultImage}`" cover
                            alt="service-img ">
                            <template v-slot:error>
                                <v-img :src="errorImage" cover alt="error"></v-img>
                            </template>
                        </v-img>
                    </div>
                    <div class="service-title" style="text-transform: uppercase; white-space: pre; font-size: 1.1rem;">{{
                        list.product_name }}
                    </div>
                </v-col>
            </v-containner>
        </v-row>
    </v-col>
</template>

<style scoped>
.service-title {
    margin-top: 15%;
}

#service-containner {
    width: 250px;
    height: 200px;
}

.circle {
    width: 110px;
    height: 110px;
}

.service-img {
    object-fit: cover;
}
</style>