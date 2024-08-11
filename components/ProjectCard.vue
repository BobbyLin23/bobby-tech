<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <NuxtImg :src="image" alt="Project Image" />
    </CardContent>
  </Card>
</template>
