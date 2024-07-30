<script setup lang="ts">
const isDark = useDark()

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="p-2 space-x-2">
    Bobby Tech
    <span class="text-red-300 dark:text-sky-700">{{ isDark }}</span>
    <Button @click="toggleDark">
      Toggle
    </Button>
  </div>
</template>
