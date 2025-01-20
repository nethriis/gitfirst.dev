<script setup lang="ts">
const username = ref('')
</script>

<template>
  <div class="mx-auto flex flex-col items-center gap-4 max-w-[352px]">
    <label for="username" class="text-sm text-zinc-950 dark:text-white">
      Explore the origins of open-source contributions.
    </label>
    <UserForm
      v-model="username"
      placeholder="nethriis"
      class="max-w-[352px]"
      @submit="() => navigateTo(`/${username.toLowerCase()}`)"
    />
  </div>
</template>
