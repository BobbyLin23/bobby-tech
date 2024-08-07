<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <div class="grid grid-rows-3 grid-flow-col gap-4 border h-20">
    <div class="row-span-3">
      <img :src="image" alt="Project Image" class="w-full h-full object-cover">
    </div>
    <div class="col-span-2 p-2">
      <h2 class="text-2xl font-bold">
        {{ title }}
      </h2>
    </div>
    <div class="row-span-2 col-span-2 p-2">
      <p class="text-sm text-muted-foreground">
        {{ description }}
      </p>
    </div>
  </div>
</template>
