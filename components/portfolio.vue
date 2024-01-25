<template>
    <div id="portfolio" class="pb-16">
        <div class="blur-containner-2">
            <div id="circle-blur-2" class="rounded-circle"></div>
            <div id="circle-portfolio-lg" class="rounded-circle"></div>
        </div>
        <div id="circle-portfolio-sm" class="rounded-circle"></div>
        <h1 class="display-6 text-center ">PORTFOLIO</h1>
        <v-col class="portfolio-item">
            <hr class="mx-16">
            <v-row class="display-6 fs-3 d-flex justify-space-evenly text-h4 py-3">
                <NuxtLink to="#">All</NuxtLink>
                <NuxtLink to="#">Industry</NuxtLink>
                <NuxtLink to="#">Education</NuxtLink>
                <NuxtLink to="#">Outsource</NuxtLink>
            </v-row>
            <hr class="mx-16 mb-10">
            <div class="container w-50 h-50">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <!-- การสร้าง Carousel -->
                        <div class="carousel slide" id="slider1" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <button data-bs-target="#slider1" data-bs-slide-to="0"></button>
                                <button data-bs-target="#slider1" data-bs-slide-to="1"></button>
                                <button class="active" data-bs-target="#slider1" data-bs-slide-to="2"></button>
                                <button data-bs-target="#slider1" data-bs-slide-to="3"></button>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/image=01.png" class="d-block w-100">
                                    <!-- <div class="carousel-caption d-none d-md-block">
                    <h3>ภูเขา</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis.</p>
                  </div> -->
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/image=02.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item active">
                                    <img src="../assets/images/portfolios/image=03.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/images/portfolios/Image=01.png" class="d-block w-100">
                                </div>
                            </div>
                            <!-- ควบคุมการ Slide ผ่านปุ่ม -->
                            <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#slider1">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#slider1">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#portfolio a {
    text-decoration: none;
    color: white;
}
</style>