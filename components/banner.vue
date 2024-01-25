<template>
    <img class="banner-bg1  w-100" src="@/assets/images/Curve1.png">
    <img class="banner-bg2 d-block w-100" src="@/assets/images/Curve2.png">
    <div id="banner" class="d-flex justify-center my-1">
        <v-row class="mx-16 py-2 banner-info">
            <v-col class="py-10">
                <v-col class="align-center">
                    <h1 class="fs-1 text-h1 pl-10">MAKE YOUR OWN WEB&APP <br> COME TRUE.</h1>
                    <h5 class="pl-10 py-2"> WE PROVIDED SOFTWARE SOLUTION WORKFLOW SYSTEM</h5>
                    <h5 class="pl-10">
                        WITH THE BEST OF SERVICE THAT YOU NEEDED.
                    </h5>
                </v-col>
                <v-row class=" mt-10 pl-10 mx-5">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn class="text-none rounded-pill bg-greenblue ml-5 border border-themecolor border-3"
                                v-bind="props" :color="isHovering ? 'themecolor' : undefined">
                                Get In Touch
                            </v-btn>
                        </template>
                    </v-hover>
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn class="text-none rounded-pill bg-themecolor ml-5 border border-surface border-3"
                                href="#service" v-bind="props" :color="isHovering ? 'greenblue' : undefined">
                                Our Service
                            </v-btn>
                        </template>
                    </v-hover>
                </v-row>
            </v-col>
            <v-col>
                <img src="@/assets/images/mobile_banner.png" class="banner-img d-block w-100" alt="">
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner-bg1 {
    width: 100%;
    height: 99.99%;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-bg2 {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}

.banner-info {
    z-index: 4;
}

.banner-img {
    min-width: 300px;
    max-width: 500px;
}
</style>