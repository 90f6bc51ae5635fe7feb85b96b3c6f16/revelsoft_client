<template>
    <div id="service" class="pb-16">
        <v-row class="d-flex justify-center ">
            <h1 class="text-txtcolor ">Our</h1>
            <h1 class="ml-3">Service</h1>
        </v-row>
        <v-row class="d-flex justify-space-evenly m-16 py-7">
            <div class="rounded-xl bg-service_1">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="pa-6 bg-service_circle rounded-circle d-inline-block">
                        <img class="" src="@/assets/images/service/Group-1.png" alt="">
                    </div>
                    <h4 class="mt-10">WEB DEVELOPMENT</h4>
                </v-col>
            </div>
            <div class="rounded-xl bg-service_2">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="pa-6 bg-service_circle rounded-circle d-inline-block">
                        <img class="" src="@/assets/images/service/Group-2.png" alt="">
                    </div>
                    <h6 class="mt-10 text-none"><span>APPLICATION DEVELOPMEN</span></h6>
                </v-col>
            </div>
            <div class="rounded-xl bg-service_3">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="pa-6 bg-service_circle rounded-circle d-inline-block">
                        <img class="" src="@/assets/images/service/Group-3.png" alt="">
                    </div>
                    <h4 class="mt-10 text-white">IOT DEVELOPMENT</h4>
                </v-col>
            </div>
            <div class="rounded-xl bg-service_4">
                <v-col id="service-containner" class="d-flex flex-column align-center mt-12">
                    <div class="pa-6 bg-service_circle rounded-circle d-inline-block">
                        <img class="" src="@/assets/images/service/Group-4.png" alt="">
                    </div>
                    <h4 class="mt-10">OUTSOURCE</h4>
                </v-col>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#service-containner {
    width: 250px;
    height: 200px;
}
</style>