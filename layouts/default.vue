<script setup lang="ts">

</script>

<template>
  <div class="w-full flex">
    <div class="fixed inset-0 flex justify-center sm:px8">
      <div class="max-w-7xl w-full flex lg:px8">
        <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
      </div>
    </div>
    <div class="relative w-full flex flex-col">
      <Header />
      <slot />
    </div>
  </div>
</template>
