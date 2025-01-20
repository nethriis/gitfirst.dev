<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <NuxtLayout>
    <h3 class="mx-auto text-zinc-950 dark:text-white font-mono font-semibold">
      {{ error.statusCode }} | Commit not found.
    </h3>
    <p class="mx-auto max-w-[352px] text-sm text-zinc-600 dark:text-zinc-500">
      {{
        error.statusCode === 404
          ? "Looks like this page doesn't exist..."
          : (error.message ?? 'Unknown error.')
      }}
    </p>
  </NuxtLayout>
</template>
