// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-quasar-ui'],
    components: [{ path: '@/components', pathPrefix: false }],
    quasar: {
        sassVariables: './assets/scss/settings.scss',
        plugins: ['Notify', 'Loading', 'Dialog', 'LocalStorage']
        /* */
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL
        }
    },
    ssr: false,
    app: {
        head:{
            title: 'Satisfaster',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    },
})
