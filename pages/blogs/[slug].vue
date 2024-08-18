<script lang="ts" setup>
const route = useRoute()

const { data } = await useAsyncData('blog-data', () => queryContent(`/blogs/${route.params.slug}`).findOne())

if (!data) {
  navigateTo('/404')
}
</script>

<template>
  <TheContainer>
    <h1 class="font-bold text-4xl mt-8 mb-2">
      {{ route.params.slug }}
    </h1>
    <div class="flex items-center gap-x-2 text-muted-foreground mb-8">
      <span>
        {{ $dayjs(data?.date).format('MMMM DD') }}
      </span>
      <span>
        · {{ data?.readingMinute }} min
      </span>
    </div>
    <ContentRendererMarkdown :value="data!" />
  </TheContainer>
</template>
