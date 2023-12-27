// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    sassVariables: "./assets/scss/settings.scss",
    /* */
  },
});
