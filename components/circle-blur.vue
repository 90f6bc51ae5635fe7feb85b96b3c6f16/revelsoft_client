<template>
    <div>
        <div class="blur-containner ">
            <div class=" circle-blur rounded-circle"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.blur-containner {
    position: relative;
    height: 485px;
    width: 485px;
}

.circle-blur {
    filter: blur(940px);
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #00F0FF;
}

@media only screen and (max-width: 480px) {
    .blur-containner {
        position: relative;
        height: 200px;
        width: 200px;
    }

    .circle-blur {
        filter: blur(150px);
    }
}
</style>