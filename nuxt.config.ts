// https://nuxt.com/docs/api/configuration/nuxt-config
const isDevelopment = process.env.NODE_ENV !== "production";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  components: [{ path: "@/components", pathPrefix: false }],
  quasar: {
    sassVariables: "./assets/scss/settings.scss",
    /* */
  },
  runtimeConfig: {
    public: {
      // BASE_URL: "some fallback value",
    },
  },
});
