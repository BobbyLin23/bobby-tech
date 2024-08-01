<script lang="ts" setup>
const attr = useAttrs()
</script>

<template>
  <div :class="cn('sm:px-8', attr.class as string)">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div :class="cn('relative px-4 sm:px-8 lg:px-12', attr.class as string)">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
