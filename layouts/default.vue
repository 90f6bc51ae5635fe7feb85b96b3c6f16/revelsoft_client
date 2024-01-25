<script setup lang="ts">
import { RouterView } from 'vue-router';
const isSticky = ref<boolean>(true)
const title = ref("Revel Soft");

useHead({
  meta: [{ content: title }],
  titleTemplate: () => {
    return "Revel Soft";
  },
});
</script>

<template>
  <div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style  scoped></style>