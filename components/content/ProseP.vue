<script lang="ts" setup>

</script>

<template>
  <div>
    <ContentSlot :use="$slots.default" unwrap="p" class="text-sky-500" />
  </div>
</template>
