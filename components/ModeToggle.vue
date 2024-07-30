<script setup lang="ts">
import { MoonStar, Sun } from 'lucide-vue-next'

const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>

<template>
  <Button variant="link" size="icon" class="hover:opacity-75" @click="toggleDark()">
    <Sun v-if="!isDark" class="size-4" />
    <MoonStar v-else class="size-4" />
  </Button>
</template>
