<template>
  <div
    class="flex items-center justify-center min-h-screen min-w-full bg-white dark:bg-zinc-950"
  >
    <Navbar />
    <main class="p-4 flex flex-col gap-4 w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>
