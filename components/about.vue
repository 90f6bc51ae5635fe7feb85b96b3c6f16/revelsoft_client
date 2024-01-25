<template>
    <div id="about" class="mt-16 pt-16 ">
        <v-row class="d-flex justify-center ">
            <h1 class="text-txtcolor ">About</h1>
            <h1 class="ml-3">Us</h1>
        </v-row>
        <v-col class="my-10 ps-16">
            <v-row class="about-us ">
                <v-col id="about-info" class="pt-16 pl-10">
                    <v-row class="d-flex align-center">
                        <v-icon class=" text-greenblue">mdi-36px mdi-checkbox-marked-circle-outline</v-icon>
                        <h1 class="text-greenblue px-4">10 years experience</h1>
                    </v-row>
                    <p class="text-h4 pl-10">เรามีทีมงานที่มีประสบการณ์และความเชี่ยวชาญทางด้านการออกแบบ<br>
                        และพัฒนาโปรแกรมเกือบ 10 ปี ที่พร้อมให้คำแนะนำ ปรึกษา และช่วยเหลือคุณ<br>
                        ในการพัฒนาเทคโนโลยีที่เหมาะสมกับความต้องการและงบประมาณของลูกค้าได้มากที่สุด</p>
                </v-col>
                <img class="about-img pr-16 d-block w-502" src="@/assets/images/Quarter Saler.png" alt="">
            </v-row>
        </v-col>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped> .about-img {
     min-width: 300px;
 }
</style>