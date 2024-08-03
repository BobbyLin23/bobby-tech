<script lang="ts" setup>

</script>

<template>
  <footer class="mt-32">
    <TheContainer>
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p class="text-sm flex-1 text-center text-zinc-500/80 dark:text-zinc-400/80">
          &copy; {{ new Date().getFullYear() }} Bobby Lin. Source code:
          <NuxtLink
            href="https://github.com/CaliCastle/cali.so"
            target="_blank"
            class="underline underline-offset-2 hover:opacity-70"
          >
            GitHub
          </NuxtLink>
        </p>
      </div>
    </TheContainer>
  </footer>
</template>
