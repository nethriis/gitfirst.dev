// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  runtimeConfig: {
    github: { token: '' }
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-time'
  ],
  site: {
    url: 'https://gitfirst.dev'
  },
  icon: {
    mode: 'svg',
    collections: ['carbon']
  },
  ogImage: {
    defaults: {
      emojis: 'fluent-emoji'
    },
    fonts: ['Sora:400', 'Sora:600', 'Sora:700']
  }
})
