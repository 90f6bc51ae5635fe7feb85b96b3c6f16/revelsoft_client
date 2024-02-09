<script lang="ts" setup>
// import Swal from "sweetalert2";
// import type { About } from "~/misc/types";
// import errorImage from "@/assets/images/error.png"

// const defaultImage = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"

// definePageMeta({
//     middleware: ["auth"],
// });

// const { getAboutByID, } = useAbout();
// const { public: publicCtx } = useRuntimeConfig()
// const abouts = ref<About>({
//     id: '',
//     about_detail: '',
//     about_img: '',
// })

// onMounted(async () => {
//     abouts.value = await getAboutByID({ id: 'DEFAULT' })
// })
</script>

<template></template>

<style scoped>
.about-img {
    min-width: 18em;
    max-width: 80%;
    min-height: 12em;
    max-height: 350px;
    object-fit: cover;
}

.about-img-containner {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>