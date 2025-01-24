<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const colorMode = useColorMode()

const favicon = computed(() =>
  colorMode.value === 'light' || colorMode.value === 'undefined'
    ? 'favicon.ico'
    : 'favicon-dark.ico'
)

useFavicon(favicon)
</script>

<template>
  <NuxtLayout>
    <Analytics />
    <NuxtPage />
  </NuxtLayout>
</template>
