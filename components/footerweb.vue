<script lang="ts" setup>
import Swal from "sweetalert2";
import type { Footer } from "~/misc/types";

definePageMeta({
    middleware: ["auth"],
});

const { getFooterByID, updateFooterBy } = useFooter();
const router = useRouter();
const submitting = ref(false)
const footer = ref<Footer>({
    id: '',
    footer_detail: '',
})

const icons = [
    'mdi-facebook',
    'mdi-facebook-messenger',
    'mdi-twitter',
]



onMounted(async () => {
    footer.value = await getFooterByID({ id: 'DEFAULT' })
})
</script>

<template>
    <div id="footer">
        <v-row class="footer-info d-flex mt-10 pl-16">
            <!-- <div class="bg-footer w-100 h-100" style="position: absolute; left: 0; top: 0;">
                <div class="bg-1 border"></div>
                <div class="bg-2"></div>
                <div class="bg-3"></div>
                <div class="bg-4"></div>
            </div> -->
            <img class="footer-bg1  w-100" src="@/assets/images/footer/footer.png">
            <img class="footer-bg2 d-block w-100" src="@/assets/images/footer/footer.png">
            <v-col>
                <h2 class="my-10">Let's make your <span class="text-txtcolor px-1">Dream</span> come true</h2>
                <v-btn class=" rounded-lg mb-16 bg-service_3 text-surface">
                    CONTRACT US
                </v-btn>
            </v-col>
            <v-col class="d-flex flex-column align-end my-10 pr-7">
                <p class="py-1 text-txtcolor"> support@revelsoft.co.th</p>
                <p class="fs-5 py-1">044011494</p>
                <v-row>
                    <v-btn v-for="icon in icons" :key="icon" class="rounded-circle bg-surface mx-2" :icon="icon"
                        variant="text"></v-btn>
                </v-row>
                <p class="py-1">2023 All Rights Reserved by Revel Soft Inc. </p>
            </v-col>
        </v-row>
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
    left: -20%;
    z-index: -1;
    opacity: 0.3;
    border: red solid 5px;
    bottom: 0;
}

.footer-bg2 {
    position: absolute;
    left: -20%;
    z-index: -1;
    opacity: 0.5;
    left: 20%;
    bottom: 0;
    /* border: black solid 5px; */
}
</style>