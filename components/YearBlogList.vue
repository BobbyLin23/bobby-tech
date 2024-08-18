<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content'

const props = defineProps<{
  year: string
}>()

const query: QueryBuilderParams = {
  path: '/blogs',
  where: {
    // @ts-expect-error nuxt content types are not up to date
    date: {
      $lte: new Date(`${props.year}-12-31`).toISOString(),
      $gte: new Date(`${props.year}-01-01`).toISOString(),
    },
  },
  sort: [{ date: -1 }],
}
</script>

<template>
  <ContentList v-slot="{ list }" :query="query">
    <div class="select-none relative h-20 pointer-events-none">
      <span class="text-[8em] color-transparent absolute left-0 top-[1rem] font-bold stroke-2 stroke-neutral-200 opacity-10">
        {{ year }}
      </span>
    </div>
    <NuxtLink
      v-for="article in list"
      :key="article._path"
      :href="article._path"
      class="flex items-center gap-x-2"
    >
      <h2 class="text-xl text-muted-foreground cursor-pointer hover:underline hover:opacity-70">
        {{ article.title }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) }}
      </p>
      <p class="text-sm text-muted-foreground">
        {{ article.readingMinute }} min
      </p>
    </NuxtLink>
  </ContentList>
</template>
