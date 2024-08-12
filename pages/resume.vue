<script lang="ts" setup>
const lang = ref<'zh' | 'en'>('en')

const { data } = await useAsyncData('hello', () => queryContent('/resume').findOne())
</script>

<template>
  <TheContainer>
    <div class="flex justify-end items-center my-4">
      <span class="mr-2">{{ lang === 'en' ? 'English' : '中文' }}</span>
      <Switch :checked="lang === 'en'" @update:checked="lang = $event ? 'en' : 'zh'" />
    </div>
    <ContentRenderer :value="data!" />
  </TheContainer>
</template>
