<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  if (colorMode.value === 'undefined' || colorMode.value === 'light') {
    colorMode.preference = 'dark'
    console.log('preference', colorMode.preference)
  } else if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  }
}
</script>

<template>
  <header class="fixed top-0 inset-x-0 w-full">
    <div
      class="flex items-center justify-between p-4 max-w-screen-xl w-full mx-auto"
    >
      <h1 class="leading-tight font-bold text-xl text-zinc-950 dark:text-white">
        <NuxtLink to="/">gitfirst.dev</NuxtLink>
      </h1>
      <button
        class="rounded-md flex justify-center items-center w-[30px] h-[30px] text-zinc-950 dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/5"
        @click="toggleColorMode()"
      >
        <ClientOnly>
          <Icon
            v-if="$colorMode.value === 'dark'"
            name="carbon:moon"
            size="16"
          />
          <Icon v-else name="carbon:sun" size="16" />
        </ClientOnly>
        <span class="sr-only">Toggle theme</span>
      </button>
    </div>
  </header>
</template>
