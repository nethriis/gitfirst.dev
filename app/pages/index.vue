<script setup lang="ts">
const username = ref('')
</script>

<template>
  <div class="mx-auto flex flex-col items-center gap-4 max-w-[320px]">
    <label for="username" class="text-sm text-zinc-950 dark:text-white">
      Discover every user's first commit on GitHub.
    </label>
    <UserForm
      v-model="username"
      placeholder="nethriis"
      class="max-w-[320px]"
      @submit="() => navigateTo(`/${username.toLowerCase()}`)"
    />
  </div>
</template>
