<template>
    <div id="footer">
        <v-row class="footer-info d-flex mt-10 pl-16">
            <v-col>
                <h2 class="my-10">Let's make your <span class="text-txtcolor px-1">Dream</span> come true</h2>
                <v-btn class=" rounded-lg mb-16 bg-service_3 text-surface">
                    CONTRACT US
                </v-btn>
            </v-col>
            <v-col class="d-flex flex-column align-end my-10 pr-7">
                <p class="py-1 text-txtcolor"> support@revelsoft.co.th</p>
                <p class="py-1">044011494</p>
                <v-row>
                    <v-btn v-for="icon in icons" :key="icon" class="rounded-circle bg-grey100 mx-2" :icon="icon"
                        variant="text"></v-btn>
                </v-row>
                <p class="py-1">2023 All Rights Reserved by Revel Soft Inc. </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-facebook-messenger',
                'mdi-twitter',
            ],
        };
    },
}
</script>

<style></style>