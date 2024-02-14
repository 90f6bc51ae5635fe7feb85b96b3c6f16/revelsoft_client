<template>
    <div class="circle-containner">
        <div class="circle-md rounded-circle">
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

.circle-md {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #25AAE2;
    z-index: 5;
    opacity: 0.1;
}

@media only screen and (max-width: 790px) {
    .circle-md {
        position: absolute;
        width: 125px;
        height: 125px;
        background-color: #25AAE2;
        z-index: 5;
        opacity: 0.1;
    }
}
</style>