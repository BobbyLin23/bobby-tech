<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <TheContainer>
    <h1>{{ route.params.slug }}</h1>
  </TheContainer>
</template>
