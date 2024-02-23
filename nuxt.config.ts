import path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  plugins: [
    '~/plugins/bootstrap.ts',
  ],
  build: {
    // extractCSS: false,
    transpile: ["vuetify"],
  },
  css: [
    "@/assets/scss/style.scss",
    'bootstrap/dist/css/bootstrap.css',
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    "@pinia/nuxt",
    'nuxt-swiper',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://rvscs-develop.com/revel-service',
      // apiBaseUrl: 'http://localhost:5260',
    }
  }
});
