<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Product, ConTact } from "~/misc/types";
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({
    middleware: ["auth"],
});
const { getProductBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

const props = defineProps({
    modelValue: { type: Object as PropType<{ show: boolean }>, required: true, },
})
let isFullScreen = ref<boolean>(true)
const products = ref<Product[]>([]);

definePageMeta({ middleware: ["auth"] });
const { generateConTactID, insertConTact, } = useConTact();
const router = useRouter();

const submitting = ref(false);
const contact = ref<ConTact>({
    contact_id: '',
    contact_name: '',
    contact_email: '',
    contact_number: '',
    contact_detail: '',
});

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }
        const id = await generateConTactID()
        contact.value.contact_id = id
        products.value = await getProductBy({ product_id: query.id }).then(res => res.docs)
        fullScreen()
    } catch (e) {
        console.log(e)
    }
})

async function onSubmit() {
    if (submitting.value || !validateForm()) return

    try {
        submitting.value = true

        await insertConTact(contact.value);
        console.log("contact", contact.value);

        void Swal.fire({ title: 'สำเร็จ', text: 'บันทึกข้อมูลแล้ว', icon: "success" })
        await router.push({ path: '/' });
    } catch (e) {
        console.log(e)
        submitting.value = false
    }
}

function validateForm(): boolean {
    // const {
    //     contact_id,
    //     contact_name,
    // } = contact.value

    // if (!(contact_id && contact_name)) {
    //     void Swal.fire({ text: 'กรุณากรอกข้อมูลให้ครบถ้วน', icon: "warning" })
    //     return false
    // }
    return true
}
const closeForm = () => {
    props.modelValue.show = false
}

const fullScreen = () => {
    if (document.fullscreenElement) {
        isFullScreen.value = true
    } else {
        isFullScreen.value = false
    }
}

</script>

<template>
    <v-dialog v-model="modelValue.show">
        <td class="align-middle text-center" style="position: absolute; z-index: 5; right: 1%;top: 1%;">
            <v-icon class="fs-2" clickable @click="closeForm" color="error">
                mdi mdi-close-thick</v-icon>
        </td>
        <v-card class="bg-fromcolor  rounded-xl h-100">
            <v-row class="card-from">
                <v-col lg="" class=" m-5 d-flex justify-center " style="position: relative;">
                    <v-row class="d-flex justify-center" style="position: absolute; top: -5%;">
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
                    <v-col sm="11" :md="isFullScreen ? 12 : 11" style="position: relative;">
                        <div class="mb-4">
                            <input v-model="contact.contact_name" type="name" class="form-control w-100" id="formName"
                                placeholder="Name">
                        </div>
                        <div class="mb-4">
                            <input v-model="contact.contact_email" type="email" class="form-control w-100" id="formEmail"
                                placeholder="Email">
                        </div>
                        <div class="mb-4">
                            <input v-model="contact.contact_number" type="text" class="form-control w-100" id="formNumber"
                                placeholder="Number">
                        </div>
                        <div>
                            <textarea v-model="contact.contact_detail" class="form-control w-100" id="formMassage" rows="3"
                                placeholder="Message"></textarea>
                        </div>
                    </v-col>
                    <v-col sm="11" :md="isFullScreen ? 12 : 11" class="p-2">
                        <div>
                            <v-item-group class="d-flex justify-space-evenly py-3" multiple
                                selected-class="bg-service_circle">
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
                                        class="text-none text-center rounded-pill bg-save ml-5 border border-2 border-surface"
                                        @click="onSubmit" v-bind="props" :color="isHovering ? 'greenblue' : undefined">
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

.contact-img-1 {
    background-image: url("../assets/images/fromimg/Saly-12.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 50%;
    max-height: 95%;
    bottom: 0;
}

.contact-img-2 {
    background-image: url("../assets/images/fromimg/Saly-44.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 15%;
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
    max-width: 15%;
    max-height: 45%;
    bottom: 5%;
    right: 5%;
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