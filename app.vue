<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body, #__nuxt {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(250 250 250 / 1);
}

@media (prefers-color-scheme: dark) {
  html, body, #__nuxt {
    background-color: black;
  }
}
</style>
