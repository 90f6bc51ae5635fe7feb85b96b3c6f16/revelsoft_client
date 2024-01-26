<template >
  <v-col id="topweb" class="bg-themecolor text-surface">

    <navbar />
    <!-- <<<<******************************** #circle 1  **********************************>>>>  -->
    <div style="position: relative;">
      <circle-lg class="circle-lg-1" />
      <div style="position: relative;">
        <circle-sm class="circle-sm-1" />
      </div>
    </div>
    <!-- <<<<******************************** #circle 1  **********************************>>>> -->

    <div>
      <banner />
    </div>

    <div style="position: relative;">
      <circle-blur style="position: absolute;" />
    </div>

    <!-- <div style="position: relative;">
      <circle-sm style="position: absolute; left: 5%;" />
    </div> -->

    <div class="pt-3">
      <about />
    </div>

    <div>
      <service />
    </div>

    <div>
      <skill />
    </div>

    <div style="position: relative;">
      <circle-blur style="position: absolute; left: -15%; top: -50px;" />
    </div>
    <!-- <<<<******************************** #circle 2  **********************************>>>> -->
    <div style="position: relative;">
      <circle-lg class="circle-lg-2" />
      <div style="position: relative;">
        <circle-sm class="circle-sm-2" />
      </div>
    </div>
    <!-- <<<<******************************** #circle 2  **********************************>>>> -->

    <!-- <div style="position: relative;">
      <circle-sm style="position: absolute; right: 7%;" />
    </div> -->

    <div>
      <portfolio />
    </div>



    <div style="position: relative;">
      <circle-blur style="position: absolute; right: 0; top: -200px;" />
    </div>

    <!-- <div style="position: relative;">
      <circle-sm style="position: absolute; right: 10%; bottom: 5em;" />
    </div> -->

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
/* <<<<******************************** #circle 1  **********************************>>>> */
.circle-lg-1 {
  position: absolute;
  top: -20em;
  left: 35%
}

.circle-sm-1 {
  position: absolute;
  top: 5em;
  left: 40%
}

/* <<<<******************************** #circle 2  **********************************>>>> */
.circle-lg-2 {
  position: absolute;
  top: -15em;
  left: -15%
}

.circle-sm-2 {
  position: absolute;
  top: 2em;
  left: 15%;
}


@media only screen and (max-width: 790px) {
  .circle-lg-1 {
    position: absolute;
    top: -7em;
    left: 40%;
  }

  .circle-sm-1 {
    position: absolute;
    top: 4em;
    left: 40%
  }

  .circle-lg-2 {
    position: absolute;
    top: -5em;
    left: -20%
  }

  .circle-sm-2 {
    position: absolute;
    top: 2em;
    left: 20%;
  }
}
</style>