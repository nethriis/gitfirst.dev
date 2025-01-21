<script setup lang="ts">
defineProps<{
  commit: FirstCommit
}>()
</script>

<template>
  <div
    class="font-sans px-16 py-24 flex flex-col justify-between w-full h-full bg-white"
  >
    <div class="flex flex-col gap-y-8">
      <p class="flex flex-row text-6xl text-zinc-950 font-bold line-clamp-1">
        {{ commit.message }}
      </p>
      <div class="flex items-center gap-x-8">
        <NuxtImg
          :src="commit.author.avatar"
          width="64"
          height="64"
          class="rounded-full"
        />
        <span class="text-4xl text-zinc-600">
          {{ commit.author.username }}
          {{
            commit.committer.username === commit.author.username
              ? 'committed'
              : 'authored'
          }}
          on
          <NuxtTime
            :datetime="commit.date"
            locale="en"
            year="numeric"
            month="short"
            day="numeric"
            class="tabular-nums"
          />
        </span>
      </div>
    </div>
    <div class="flex flex-row items-center gap-x-8">
      <NuxtImg
        :src="commit.author.avatar"
        width="64"
        height="64"
        class="rounded-full"
      />
      <p class="text-4xl text-zinc-950 font-semibold line-clamp-1">
        {{ commit.repository.full_name }}
      </p>
      <div
        class="ml-auto shadow-sm rounded-3xl border-2 border-black/5 px-6 py-4 flex flex-row items-center gap-2 bg-black/5 leading-tight text-3xl text-zinc-600"
      >
        See more
        <Icon name="carbon:arrow-right" size="36" class="ml-2 size-9" />
      </div>
    </div>
  </div>
</template>
