<template>
    <div class="circle-containner">
        <div class="circle-sm rounded-circle">
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

.circle-sm {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #25AAE2;
    z-index: 5;
    opacity: 0.1;
}
</style>