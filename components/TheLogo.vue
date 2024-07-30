<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div
    class="font-semibold tracking-wide cursor-pointer hover:opacity-70"
    @click="router.push('/')"
  >
    Bobby Lin
  </div>
</template>
