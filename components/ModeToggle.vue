<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <button @click="toggleDark()">
      Toggle Dark Mode
    </button>
    <span>
      {{ isDark ? 'Dark' : 'Light' }} Mode
    </span>
  </div>
</template>
