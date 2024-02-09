<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Product } from "~/misc/types";
import errorImage from "@/assets/images/error.png"
import { Banner } from "#build/components";

const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({
    middleware: ["auth"],
});
const { getProductBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

let popupfrom = ref<boolean>(
    true
)
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
    <v-dialog v-model="popupfrom">
        <v-card class=" bg-fromcolor rounded-xl">
            <v-row class=" ">
                <v-col class="m-5">
                    <v-col class="d-flex flex-column justify-space-evenly my-2">
                        <div class="mb-4">
                            <input type="email" class="form-control" id="formName" placeholder="Name">
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control" id="formEmail" placeholder="Email">
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control" id="formNumber" placeholder="Number">
                        </div>
                        <div>
                            <textarea class="form-control" id="formMassage" rows="3" placeholder="Massage"></textarea>
                        </div>
                    </v-col>
                    <v-col class="d-flex flex-column justify-center p-2">
                        <v-item-group multiple selected-class="bg-primary">
                            <div class="text-caption mb-2 text-center">Select Sevice</div>
                            <v-item v-for="(list, idx) in products " :key="idx" v-slot="{ selectedClass, toggle }">
                                <v-chip class="border " :class="selectedClass" @click="toggle">
                                    {{ list.product_name }}
                                </v-chip>
                            </v-item>
                        </v-item-group>
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn class="text-none rounded-pill bg-surface border border-1 border-surface"
                                    href="#service" v-bind="props" :color="isHovering ? 'primary' : undefined">
                                    SEND
                                </v-btn>
                            </template>
                        </v-hover>
                    </v-col>
                </v-col>
                <v-col class="m-5 ">
                    <v-row class="d-flex justify-center">
                        <span class="text-h1 text-txtcolor">CONTACT</span>
                        <span class="text-h1">US</span>
                    </v-row>
                    <v-col class="contact-bg-img w-100 h-100 boer"></v-col>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.contact-bg-img {
    background-image: url("../assets/images/Saly-12.png");
    background-size: cover;
    background-position: center;
    max-width: 80%;
    max-height: 80%;
}
</style>