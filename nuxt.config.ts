// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxt/image',
    'dayjs-nuxt',
  ],
  devServer: {
    port: 4021,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
