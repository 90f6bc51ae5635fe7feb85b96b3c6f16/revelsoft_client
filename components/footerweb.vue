<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Footer } from "~/misc/types";

definePageMeta({
    middleware: ["auth"],
});

const { getFooterByID, updateFooterBy } = useFooter();
const router = useRouter();
const submitting = ref(false)
const dialog = ref<{ show: boolean }>({ show: false })
const footer = ref<Footer>({
    id: '',
    footer_detail: '',
})

const pagination = ref({
    page: 1,
    size: 20,
})
const search = ref<{
    is_show: boolean,
    text: string,
    columns: string[],
    condition: string,
}>({
    is_show: false,
    text: '',
    columns: [],
    condition: 'LIKE',
});

const icons = [
    'mdi-facebook',
    'mdi-facebook-messenger',
    'mdi-twitter',
]

const openFrom = () => {
    dialog.value.show = true
}

onMounted(async () => {
    footer.value = await getFooterByID({ id: 'DEFAULT' })
})
</script>

<template>
    <div id="footer">
        <v-row class="footer-info d-flex mt-10 pl-16" style="position: relative;">
            <img class="footer-bg1 d-block w-100" src="@/assets/images/footer/footer.png">
            <img class="footer-bg2 d-block w-100" src="@/assets/images/footer/footer.png">
            <v-col class="pt-5">
                <h2 class="my-10">Let's make your <span class="text-txtcolor px-1">Dream</span> come true</h2>
                <v-btn class=" rounded-lg mb-16 bg-service_3 text-surface" @click="openFrom">
                    CONTRACT US
                </v-btn>
            </v-col>
            <v-col class="d-flex flex-column align-end my-10 pr-7">
                <p class="py-1 text-txtcolor"> support@revelsoft.co.th</p>
                <p class="fs-5 py-1">044-011-494</p>
                <v-row v-if="icons.length > 0" class="fs-5">
                    <!-- <v-btn v-for="icon in icons" :key="icon" class="rounded-circle bg-surface mx-2" :icon="icon"
                        variant="text"></v-btn> -->
                    <a class="icons rounded-circle bg-surface mx-2" href="https://www.facebook.com/revelsoft">
                        <v-icon class="p-4">
                            {{ icons[0] }}
                        </v-icon>
                    </a>
                    <a class="icons rounded-circle bg-surface  mx-2" href="##">
                        <v-icon class="p-4">
                            {{ icons[1] }}
                        </v-icon>
                    </a>
                    <a class="icons rounded-circle bg-surface  mx-2" href="##">
                        <v-icon class="p-4">
                            {{ icons[2] }}
                        </v-icon>
                    </a>
                </v-row>
                <p class="py-1">2023 All Rights Reserved by Revel Soft Inc. </p>
            </v-col>
        </v-row>
    </div>
    <div>
        <template>
            <popupform v-model="dialog" />
        </template>
    </div>
</template>

<style scoped>
.footer-info {
    background-image: url('../assets/images/footer/footer.png');
    background-size: cover;
    z-index: 4;
}

.footer-bg1 {
    position: absolute;
    left: -50%;
    z-index: -1;
    opacity: 0.3;
    bottom: 0;
}

.footer-bg2 {
    position: absolute;
    left: -20%;
    z-index: -1;
    opacity: 0.5;
    left: 50%;
    bottom: 0;
}

.icons {
    align-self: center;
}
</style>