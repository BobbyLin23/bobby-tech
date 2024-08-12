<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card class="dark:bg-neutral-800 cursor-pointer">
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <NuxtImg :src="image" alt="Project Image" />
    </CardContent>
  </Card>
</template>
