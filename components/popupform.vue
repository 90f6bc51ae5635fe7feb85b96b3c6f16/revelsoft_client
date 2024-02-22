<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Product, ConTact } from "~/misc/types";
const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

definePageMeta({
    middleware: ["auth"],
});
const { getProductClientBy } = useProduct();
const { public: publicCtx } = useRuntimeConfig()

const props = defineProps({
    modelValue: { type: Object as PropType<{ show: boolean }>, required: true, },
})
let isFullScreen = ref<boolean>(true)
const products = ref<Product[]>([]);

definePageMeta({ middleware: ["auth"] });
const { generateConTactID, insertConTactClient } = useConTact();
const router = useRouter();
const issubmitting = ref(false);
const submitting = ref(false);
const contact = ref<ConTact>({
    contact_id: "",
    contact_name: "",
    contact_email: "",
    contact_number: "",
    contact_detail: "",
    web_develop: false,
    app_develop: false,
    out_source: false,
    iot_develop: false,
});

const dialog = ref<{ show: boolean }>({ show: false })

onMounted(async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const query: { [key: number | string]: string } = {};

        for (const [key, value] of params) {
            query[key] = value;
        }
        const id = await generateConTactID()
        contact.value.contact_id = id
        products.value = await getProductClientBy({ product_id: query.id }).then(res => res.docs)
        fullScreen()
    } catch (e) {
        console.log(e)
    }
})

async function onSubmit() {
    if (issubmitting.value) {
        alert("คุณส่งข้อความไปเเล้ว")
        return
    }
    if (submitting.value || !validateForm()) return;
    try {
        submitting.value = true;
        await insertConTactClient(contact.value);
        void Swal.fire({
            title: "สำเร็จ",
            text: "ส่งข้อความแล้ว",
            icon: "success",
        });
        issubmitting.value = true
        await router.push({ path: "/" });
    } catch (e) {
        console.log(e);
        submitting.value = false;
    }
}

function validateForm(): boolean {
    const { contact_email, contact_name, contact_detail
    } = contact.value;

    if (!(contact_email && contact_name && contact_detail)) {
        void Swal.fire({ text: "กรุณากรอกข้อมูลให้ครบถ้วน", icon: "warning" });
        return false;
    }
    return true;
}

const openFrom = () => {
    dialog.value.show = true
}

const reloadpage = () => {
    location.reload();
}

const closeForm = () => {
    props.modelValue.show = false
}

const resetFrom = () => {
    reloadpage();
    openFrom();
}

const fullScreen = () => {
    if (document.fullscreenElement) {
        isFullScreen.value = true
    } else {
        isFullScreen.value = false
    }
}
const toggleweb = () => {
    contact.value.web_develop = !contact.value.web_develop
}
const toggleapp = () => {
    contact.value.app_develop = !contact.value.app_develop
}
const toggleiot = () => {
    contact.value.iot_develop = !contact.value.iot_develop
}
const toggleout_source = () => {
    contact.value.out_source = !contact.value.out_source
}

</script>

<template>
    <v-dialog v-model="modelValue.show">
        <td class="align-middle text-center" style="position: absolute; z-index: 5; right: 1%;top: 1%;">
            <v-icon class="fs-2" clickable @click="closeForm" color="surface">
                mdi mdi-close-thick</v-icon>
        </td>
        <v-card class="bg-formcolor  rounded-xl h-100">
            <v-row class="card-from">
                <v-col lg="4" class=" m-5 d-flex justify-center " style="position: relative;">
                    <v-row class="d-flex justify-center" style="position: absolute; top: -5%;">
                        <span class="text-h1 text-txtcolor"> CONTACT</span>
                        <span class="text-h1 ml-3">US</span>
                    </v-row>
                    <v-col class="contact-img-1  w-100 h-100 "></v-col>
                    <v-col class="contact-img-2  w-100 h-100 "></v-col>
                    <v-col class="contact-img-3  w-100 h-100 "></v-col>
                    <v-col class="contact-img-4  w-100 h-100 "></v-col>
                    <v-col class="contact-img-5  w-100 h-100 "></v-col>
                </v-col>
                <v-col class="m-5">
                    <v-col sm="11" :md="isFullScreen ? 12 : 11" style="position: relative;">
                        <div class="mb-3">
                            <input v-model="contact.contact_name" type="name" class="form-control w-100" id="formName"
                                placeholder="Name">
                        </div>
                        <div class="mb-3">
                            <input v-model="contact.contact_email" type="email" class="form-control w-100" id="formEmail"
                                placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <input v-model="contact.contact_number" type="text" class="form-control w-100" id="formNumber"
                                placeholder="Number">
                        </div>
                        <div>
                            <textarea v-model="contact.contact_detail" class="form-control w-100" id="formMassage" rows="3"
                                placeholder="Message"></textarea>
                        </div>
                    </v-col>
                    <v-col sm="11" :md="isFullScreen ? 12 : 11" class="p-2">
                        <v-col class="px-5">
                            <h4 class="text-center py-1">Contact Us About</h4>
                            <v-btn-toggle class="d-flex justify-space-between" multiple selected-class="bg-primary"
                                variant="outlined" divided>
                                <v-btn class=" bg-surface border rounded-xl border-0 border-primary"
                                    v-model="contact.web_develop" @click="toggleapp">
                                    Application Development
                                </v-btn>
                                <v-btn class=" bg-surface border rounded-xl border-0 border-primary"
                                    v-model="contact.app_develop" @click="toggleout_source">
                                    Out Source
                                </v-btn>
                            </v-btn-toggle>
                            <v-btn-toggle class="d-flex justify-space-between mt-2 " multiple selected-class="bg-primary"
                                variant="outlined" divided>
                                <v-btn class=" bg-surface border rounded-xl border-0 border-primary"
                                    v-model="contact.iot_develop" @click="toggleweb">
                                    Web Development
                                </v-btn>
                                <v-btn class="  bg-surface border rounded-xl border-0 border-primary"
                                    v-model="contact.out_source" @click="toggleiot">
                                    Iot Development
                                </v-btn>
                            </v-btn-toggle>
                        </v-col>
                        <div class="d-flex justify-center mt-2">
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn class="text-none text-center border border-surface rounded-pill bg-surface ml-5 "
                                        @click="onSubmit" v-bind="props" :color="isHovering ? 'grey' : undefined">
                                        SEND
                                    </v-btn>
                                </template>
                            </v-hover>
                            <v-hover>
                                <template v-slot:default="{ isHovering, props }">
                                    <v-btn class="text-none text-center border rounded-pill ml-5 bg-primary"
                                        @click="resetFrom" v-bind="props" :color="isHovering ? 'formcolor' : undefined">
                                        RESEND
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

.toggle-box {
    padding: 1em;
}

.contact-img-1 {
    background-image: url("../assets/images/fromimg/Saly-12.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 23em;
    max-height: 25em;
    bottom: 0;
}

.contact-img-2 {
    background-image: url("../assets/images/fromimg/Saly-44.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 9em;
    max-height: 10em;
    top: 0%;
    left: 0%;
}

.contact-img-3 {
    background-image: url("../assets/images/fromimg/Saly-21.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 20%;
    top: 0;
    right: 0%;
}

.contact-img-4 {
    background-image: url("../assets/images/fromimg/Saly-31.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 20%;
    max-height: 20%;
    bottom: 0%;
    left: 0%;
}

.contact-img-5 {
    background-image: url("../assets/images/fromimg/Saly-43.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    max-width: 25%;
    max-height: 45%;
    bottom: 0%;
    right: 0%;
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

@media only screen and (max-width: 720px) {}
</style>