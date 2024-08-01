<script setup lang="ts">
import ProseP from '~/components/content/ProseP.vue'

const { data } = await useAsyncData('page-data', () => queryContent('/').findOne())

const components = {
  'custom-p': ProseP,
}
</script>

<template>
  <TheContainer class="mt-10">
    <ContentRenderer>
      <h1 class="font-bold text-3xl">
        {{ data?.title }}
      </h1>
      <ContentRendererMarkdown :value="data" :components="components" />
    </ContentRenderer>
  </TheContainer>
</template>
