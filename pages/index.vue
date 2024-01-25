<template >
  <v-col class="bg-themecolor text-surface">

    <navbar />

    <div class="my-16 pt-16">
      <banner />
    </div>

    <div class="pt-3">
      <about />
    </div>

    <div>
      <service />
    </div>

    <div>
      <skill />
    </div>

    <div>
      <circlde-blur />
    </div>

    <div>
      <portfolio />
    </div>

    <div>
      <footerweb />
    </div>

  </v-col>
</template> 

<script>
import CircleBlur from '~/components/circle-blur.vue';
import footerweb from '~/components/footerweb.vue';
export default {
  components: { footerweb, CircleBlur },
};
</script>

<style scoped>
/* .blur-containner-2 {
  position: relative;
  right: 275px;
  bottom: 200px;
}

#circle-blur-2 {
  height: 485px;
  width: 485px;
  background: #00F0FF;
  filter: blur(940px);
  position: absolute;
} */
/* .footer-img {
  width: 100%;
  position: inherit;
  z-index: 0;
} */
</style>