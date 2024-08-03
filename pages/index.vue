<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/').findOne())
</script>

<template>
  <TheContainer class="mt-10">
    <ContentRenderer>
      <h1 class="font-bold text-3xl my-4">
        {{ data?.title }}
      </h1>
      <ContentRendererMarkdown :value="data" class="prose prose-slate dark:prose-invert" />
    </ContentRenderer>
  </TheContainer>
</template>
