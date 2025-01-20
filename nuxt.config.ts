// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  runtimeConfig: {
    github: {
      token: '',
      clientId: '',
      clientSecret: ''
    }
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-time',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  icon: {
    mode: 'svg',
    collections: ['radix-icons']
  }
})
