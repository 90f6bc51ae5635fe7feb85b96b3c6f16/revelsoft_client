<script lang="ts" setup>

const isSticky = ref<boolean>(true)
const icons = {
  facebook: 'mdi-facebook',
  messenger: 'mdi-facebook-messenger',
  twitter: 'mdi-twitter',
}



// const scrollBehavior = async (to: any, from: any, savedPosition: any) => {
//   if (savedPosition) {
//     return savedPosition;
//   }

//   const findEl = async (hash: string, x?: number): Promise<HTMLElement | void> => {
//     return document.querySelector(hash) ||
//       new Promise((resolve, reject) => {
//         if (x && x > 50) {
//           return resolve();
//         }
//         setTimeout(() => { resolve(findEl(hash, (x || 1) + 1)); }, 100);
//       });
//   };

//   if (to.hash) {
//     let el = await findEl(to.hash);
//     if ('scrollBehavior' in document.documentElement.style) {
//       return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
//     } else {
//       return window.scrollTo(0, el.offsetTop);
//     }
//   }

//   return { x: 0, y: 0 };
// };

</script>

<template>
  <div id="about" class="mt-5">
    <div class="blur-containner-1">
      <div id="circle-blur-1" class="rounded-circle"></div>
    </div>
    <v-row class="d-flex justify-center ">
      <h1 class="text-txtcolor ">About</h1>
      <h1 class="ml-3">Us</h1>
    </v-row>
    <v-col class="my-10 ps-16">
      <v-row class="about-us">
        <v-col id="about-info" class="pt-16 pl-10">
          <v-row class="d-flex align-center">
            <v-icon class=" text-greenblue">mdi-36px mdi-checkbox-marked-circle-outline</v-icon>
            <h1 class="text-greenblue px-4">10 years experience</h1>
          </v-row>
          <p class="text-h4 pl-10">เรามีทีมงานที่มีประสบการณ์และความเชี่ยวชาญทางด้านการออกแบบ<br>
            และพัฒนาโปรแกรมเกือบ 10 ปี ที่พร้อมให้คำแนะนำ ปรึกษา และช่วยเหลือคุณ<br>
            ในการพัฒนาเทคโนโลยีที่เหมาะสมกับความต้องการและงบประมาณของลูกค้าได้มากที่สุด</p>
        </v-col>
        <img class="pr-16" id="about-img" src="@/assets/images/Quarter Saler.png" alt="">
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.circle-containner-1 {
  position: relative;
  bottom: 300px;
  left: 50%;
  right: 50%;
}

#circle-banner-lg {
  opacity: 0.2;
  width: 490px;
  height: 490px;
  background: #25AAE2;
  position: absolute;
  z-index: 4;
  right: 82%;
}

#circle-banner-sm {
  opacity: 0.2;
  width: 100px;
  height: 100px;
  background: #25AAE2;
  position: absolute;
  z-index: 4;
  left: 700px;
  top: 130px;
}

#banner {
  padding-top: 200px;
  padding-bottom: 100px;
}

.banner-info {
  z-index: 4;
}

.banner-bg1 {
  object-fit: cover;
  width: 100%;
  height: 99.99%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-bg2 {
  object-fit: cover;
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>