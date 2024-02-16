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
    <div>
      <banner />
    </div>

    <div style="position: relative;">
      <circle-blur style="position: absolute;" />
    </div>

    <div style="position: relative;">
      <circle-sm style="position: absolute; left: 10%;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; left: 8%;" />
      </div>
    </div>

    <!-- <<<<******************************** about  **********************************>>>> -->
    <div class="pt-3">
      <about />
    </div>

    <!-- <<<<******************************** service  **********************************>>>> -->
    <div>
      <service />
    </div>

    <div style="position: relative;">
      <circle-sm style="position: absolute; right: 10%;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%;" />
      </div>
    </div>

    <!-- <<<<******************************** skill  **********************************>>>> -->
    <div>
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


    <div style="position: relative;">
      <circle-sm class="circle-sm-portfolio" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%; top: 10%;" />
      </div>
    </div>

    <!-- <<<<******************************** portfolio  **********************************>>>> -->
    <div>
      <portfolio />
    </div>

    <div style="position: relative;">
      <circle-blur style="position: absolute; right: 0; top: -200px;" />
    </div>

    <div style="position: relative;">
      <circle-sm style="position: absolute; right: 15%;" />
      <div style="position: relative;">
        <circle-xs style="position: absolute; right: 11%;" />
      </div>
    </div>

    <!-- <<<<******************************** footerweb  **********************************>>>> -->
    <div>
      <footerweb />
    </div>

  </v-col>
</template> 

<script>
</script>

<style scoped>
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

  .circle-md-2 {
    position: absolute;
    left: 15%;
    z-index: 0;
  }

  .circle-sm-portfolio {
    position: absolute;
    right: 25%;
  }
}
</style>