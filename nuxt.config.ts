export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: ['@pinia/nuxt'],
    nitro: {
        preset: 'vercel-edge'
    },
    css: [
        '~/assets/styles/root.scss'
    ]
});