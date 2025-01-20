<script setup lang="ts">
const route = useRoute('username')

const { data: commit, error } = await useFetch(
  `/api/commit/${route.params.username}`,
  { lazy: true }
)

const errorMessage = computed(() => {
  if (error.value) {
    return (
      error.value.data.message || 'An error occurred while fetching the commit.'
    )
  }

  return null
})

const username = ref('')
</script>

<template>
  <div
    v-if="errorMessage"
    class="mx-auto rounded-xl shadow-md border border-red-500/10 p-6 flex flex-col justify-center gap-1 bg-gradient-to-br from-red-500/5 to-red-500/10 max-w-[500px] w-full h-40"
  >
    <p class="flex items-center gap-1 text-sm text-red-500">
      <Icon name="carbon:error" size="18" /> {{ errorMessage }}
    </p>
    <small class="text-xs text-red-500"> Please try again later. </small>
  </div>
  <CommitCard v-else :commit />
  <UserForm
    v-model="username"
    :placeholder="`${route.params.username}`"
    class="max-w-[500px]"
    @submit="() => navigateTo(`/${username.toLowerCase()}`)"
  />
</template>
