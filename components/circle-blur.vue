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
    border: #00F0FF solid 5px;
    z-index: 5;
}

#circle-blur {
    border: #00F0FF solid 5px;
    height: 485px;
    width: 485px;
    background: #00F0FF;
    /* filter: blur(940px); */
    position: absolute;
}
</style>