// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },

  vite: {
    css: {
      preprocessorOptions: {
          scss: {
              additionalData: '@import "@/assets/scss/settings.scss";',
          },
      },
    },
  },
});
