<template>
    <div class="circle-containner">
        <div class="circle-xs rounded-circle">
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

.circle-xs {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #25AAE2;
    z-index: 5;
    opacity: 0.1;
}
</style>