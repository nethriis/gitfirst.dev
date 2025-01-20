<script setup lang="ts">
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
    <NuxtPage />
  </NuxtLayout>
</template>
