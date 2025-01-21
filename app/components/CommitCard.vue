<script setup lang="ts">
const { copy, copied, isSupported: isClipboardSupported } = useClipboard()
const { share, isSupported: isShareSupported } = useShare()
const route = useRoute()

defineProps<{
  commit?: FirstCommit
}>()

const message = computed(
  () => `Check out ${route.params.username}'s first commit on GitHub.`
)
const shareLink = computed(
  () =>
    `https://x.com/intent/tweet?text=${encodeURIComponent(`${message.value}\n\nhttps://gitfirst.dev/${route.params.username}`)}`
)

const startShare = async () => {
  if (isShareSupported.value) {
    return share({
      title: 'gitfirst.dev',
      text: message.value,
      url: `https://gitfirst.dev/${route.params.username}`
    })
  }

  return navigateTo(shareLink.value, {
    external: true,
    open: { target: '_blank' }
  })
}
</script>

<template>
  <div
    class="mx-auto rounded-xl shadow-md border border-black/10 dark:border-white/10 p-6 max-w-[500px] w-full bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950"
  >
    <div class="relative flex items-center">
      <div class="flex flex-col gap-y-2">
        <NuxtLink
          :to="commit && commit.link"
          class="flex items-center gap-1 w-fit text-zinc-950 dark:text-white hover:underline"
        >
          <template v-if="commit">
            <span class="leading-tight line-clamp-1">
              {{ commit.message }}
            </span>
            <NuxtImg
              v-if="commit.committer.username !== commit.author.username"
              :src="commit.committer.avatar"
              width="16"
              height="16"
              class="rounded-[50%]"
            />
          </template>
          <div
            v-else
            class="rounded-md h-5 w-60 bg-black/10 dark:bg-white/10 animate-pulse"
          />
        </NuxtLink>
        <div class="flex">
          <template v-if="commit">
            <NuxtLink
              :to="commit.author.link"
              class="flex gap-x-2 text-zinc-600 dark:text-zinc-500 hover:underline"
            >
              <NuxtImg
                :src="commit.author.avatar"
                width="16"
                height="16"
                class="rounded-[50%] border border-black/10 dark:border-white/10"
              />
              <span class="text-xs line-clamp-1">
                {{ commit.author.username }}
              </span>
            </NuxtLink>
            <p class="pl-1 text-xs text-zinc-600 dark:text-zinc-500">
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
            </p>
          </template>
          <div v-else class="flex gap-2">
            <div
              class="rounded-full size-4 bg-black/10 dark:bg-white/10 animate-pulse"
            />
            <div
              class="rounded-md h-4 w-60 bg-black/10 dark:bg-white/10 animate-pulse"
            />
          </div>
        </div>
      </div>
      <div class="ml-auto flex gap-2">
        <button
          class="rounded-md p-2 flex items-center gap-2 text-zinc-600 dark:text-zinc-500 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          @click="copy(commit?.sha ?? '')"
        >
          <code class="leading-none text-sm select-none">
            <template v-if="commit">
              {{ commit?.sha.slice(0, 7) }}
            </template>
            <div
              v-else
              class="rounded-md h-3.5 w-14 bg-black/10 dark:bg-white/10 animate-pulse"
            />
          </code>
          <ClientOnly>
            <template v-if="isClipboardSupported">
              <Icon v-if="!copied" name="carbon:copy" size="14" />
              <Icon v-else name="carbon:checkmark" size="14" />
            </template>
          </ClientOnly>
        </button>
        <NuxtLink
          :to="commit && `${commit.repository.link}/tree/${commit.sha}`"
          class="rounded-md flex justify-center items-center size-[30px] transition-colors hover:bg-black/5 dark:hover:bg-white/5"
        >
          <Icon
            name="carbon:code"
            size="16"
            class="text-zinc-600 dark:text-zinc-500"
          />
        </NuxtLink>
      </div>
    </div>
    <hr class="my-4 border-black/10 dark:border-white/10" />
    <div class="flex items-center">
      <NuxtLink
        v-if="commit"
        :to="commit.repository.link"
        class="flex items-center gap-2 text-zinc-950 dark:text-white hover:underline"
      >
        <NuxtImg
          :src="commit.repository.avatar"
          width="24"
          height="24"
          class="rounded-[50%] border border-black/10 dark:border-white/10"
        />
        <span class="text-sm font-medium line-clamp-1">
          {{ commit.repository.full_name }}
        </span>
      </NuxtLink>
      <div v-else class="flex items-center gap-2">
        <div
          class="rounded-full size-6 bg-black/10 dark:bg-white/10 animate-pulse"
        />
        <div
          class="rounded-full w-28 h-5 bg-black/10 dark:bg-white/10 animate-pulse"
        />
      </div>
      <button
        class="ml-auto shadow-sm rounded-lg border border-black/5 dark:border-white/5 px-3 py-2 flex items-center gap-2 bg-black/5 dark:bg-white/5 leading-tight text-sm text-zinc-600 dark:text-zinc-500 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
        @click="startShare()"
      >
        <Icon name="carbon:share" size="16" />
        Share
      </button>
    </div>
  </div>
</template>
