<script setup lang="ts">
defineProps<{
  placeholder: string
  class?: any
}>()

defineEmits<{
  submit: []
}>()

const value = defineModel<string>({ required: true })
</script>

<template>
  <form
    :class="['mx-auto flex gap-2 w-full', $props.class]"
    @submit.prevent="$emit('submit')"
  >
    <input
      v-model="value"
      id="username"
      type="text"
      :placeholder
      required
      class="outline-none rounded-lg shadow-sm border border-black/5 dark:border-white/5 px-3 py-2.5 flex-1 bg-black/5 dark:bg-white/5 leading-tight text-sm text-zinc-950 dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 transition-colors hover:border-black/10 dark:hover:border-white/10 focus:border-black/15 dark:focus:border-white/15"
    />
    <button
      type="submit"
      class="outline-none rounded-lg shadow-sm border border-black/5 dark:border-white/5 px-3 bg-black/5 dark:bg-white/5 transition-colors hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10"
    >
      <Icon
        name="carbon:arrow-right"
        class="text-zinc-600 dark:text-zinc-500"
      />
    </button>
  </form>
</template>
