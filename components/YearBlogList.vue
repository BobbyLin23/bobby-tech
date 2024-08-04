<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content'

const props = defineProps<{
  year: string
}>()

const query: QueryBuilderParams = {
  path: '/posts',
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
      <span class="text-[8em] text-transparent absolute left-12 top-8 font-bold stroke-2 stroke-neutral-200 opacity-10">
        {{ year }}
      </span>
    </div>
    <NuxtLink
      v-for="article in list"
      :key="article._path"
      :href="article._path"
      class="flex items-center"
    >
      <h2 class="text-xl text-muted-foreground">
        {{ article.title }}
      </h2>
      <p>{{ article._path }}</p>
    </NuxtLink>
  </ContentList>
</template>
