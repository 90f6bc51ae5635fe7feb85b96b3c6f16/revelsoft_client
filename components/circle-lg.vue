<template>
    <div class="ciecle-containner">
        <div class="circle-lg rounded-circle">
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.ciecle-containner {
    position: relative;
}

.circle-lg {
    position: absolute;
    width: 490px;
    height: 490px;
    background-color: #25AAE2;
    z-index: 4;
    opacity: 0.2;
}

@media only screen and (max-width: 790px) {
    .ciecle-containner {
        position: relative;
    }

    .circle-lg {
        position: absolute;
        width: 250px;
        height: 250px;
        background-color: #25AAE2;
        z-index: 4;
        opacity: 0.2;
    }
}

@media only screen and (max-width: 640px) {
    .circle-lg {
        position: absolute;
        width: 250px;
        height: 250px;
        background-color: #25AAE2;
        z-index: 4;
        opacity: 0.2;
    }
}

@media only screen and (max-width: 380px) {

    .circle-lg {
        position: absolute;
        width: 220px;
        height: 220px;
        background-color: #25AAE2;
        z-index: 4;
        opacity: 0.2;
    }
}
</style>