<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import { CircleUser, Newspaper, Presentation } from 'lucide-vue-next'

const iconMap: Record<string, FunctionalComponent> = {
  Blogs: Newspaper,
  Projects: Presentation,
  Resume: CircleUser,
}

const navList = [
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
]

const isLargeScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <nav class="flex items-center gap-x-4 font-normal text-sm">
    <ClientOnly>
      <NuxtLink
        v-for="item in navList"
        :key="item.label"
        :href="item.href"
        class="text-muted-foreground hover:underline hover:underline-offset-2
      dark:hover:text-white hover:text-black flex items-center"
      >
        <span v-if="isLargeScreen">
          {{ item.label }}
        </span>
        <TheTooltip v-else :label="item.label">
          <component
            :is="iconMap[item.label]"
            class="size-4 text-black dark:text-white hover:opacity-75"
          />
        </TheTooltip>
      </NuxtLink>
    </ClientOnly>
  </nav>
</template>
