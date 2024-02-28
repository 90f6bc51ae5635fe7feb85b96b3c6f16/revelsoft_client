<template >
  <v-col id="topweb" class="bg-themecolor text-surface">

    <!-- <<<<******************************** navbar  **********************************>>>> -->
    <navbar />

    <div style="position: relative;">
      <circle-lg class="circle-lg-1" />
      <div style="position: relative;">
        <circle-sm class="circle-sm-1" />
      </div>
    </div>

    <!-- <<<<******************************** banner  **********************************>>>> -->
    <div class="">
      <banner />
    </div>

    <div style="position: relative;">
      <circle-blur style="position: absolute;" />
    </div>

    <div style="position: relative;">
      <circle-sm style="position: absolute; left: 5em; bottom: 5em;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; left: 10em; bottom: 2em;" />
      </div>
    </div>

    <!-- <<<<******************************** about  **********************************>>>> -->
    <div class="pt-3 ">
      <about />
    </div>

    <!-- <<<<******************************** service  **********************************>>>> -->
    <div class="">
      <service />
    </div>

    <div class="sponge-skill" style="position: relative; overflow: visible ;">
      <circle-sm style="position: absolute; right: 10%;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%;" />
      </div>
    </div>

    <!-- <<<<******************************** skill  **********************************>>>> -->
    <div class="">
      <skill />
    </div>


    <div style="position: relative;">
      <circle-blur style="position: absolute; left: -15%; top: -50px;" />
    </div>


    <div style="position: relative;">
      <circle-lg class="circle-lg-2" />
      <div style="position: relative;">
        <circle-md class="circle-md-2" />
      </div>
    </div>


    <div class="sponge-port" style="position: relative; overflow: visible ;">
      <circle-sm class=" circle-sm-portfolio" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%; top: 10%;" />
      </div>
    </div>

    <!-- <<<<******************************** portfolio  **********************************>>>> -->
    <div class="">
      <portfolio />
    </div>

    <div style="position: relative; overflow: visible ;">
      <circle-blur style="position: absolute; right: 0; top: -200px;" />
    </div>

    <div class="sponge-footer" style="position: relative; overflow: visible ;">
      <circle-sm style="position: absolute; right: 15%;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%;" />
      </div>
    </div>

    <!-- <<<<******************************** footerweb  **********************************>>>> -->
    <div class="" style="overflow: clip;">
      <footerweb />
    </div>

  </v-col>
</template> 

<script>
</script>

<style scoped>
* {
  margin: 0 !important;
  box-sizing: border-box;
}

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

.circle-lg-2 {
  position: absolute;
  top: -15em;
  left: -15%
}

.circle-md-2 {
  position: absolute;
  left: 15%;
  z-index: 0;
}

.circle-sm-portfolio {
  position: absolute;
  right: 10%;
}


@media only screen and (max-width: 790px) {

  .circle-lg-1 {
    position: absolute;
    top: -7em;
    left: 35%;
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

  .circle-md-2 {
    position: absolute;
    left: 15%;
    z-index: 0;
  }

  .circle-sm-portfolio {
    position: absolute;
    right: 25%;
  }

  .sponge-skill {
    right: 22%;
  }

  .sponge-port {
    right: 5%;
  }

  .sponge-footer {
    right: 15%;
  }
}
</style>