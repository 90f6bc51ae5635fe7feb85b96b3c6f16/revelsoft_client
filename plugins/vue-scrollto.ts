import VueScrollTo from 'vue-scrollto'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        container: "body",
        duration: 800,
        easing: "ease",
        offset: 0,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })
})


