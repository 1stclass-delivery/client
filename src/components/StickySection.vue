<script setup lang="ts">
defineProps<{ id: string, bgImage: string }>();
</script>

<template>
  <section :id="id"
           :style="{ backgroundImage: 'url(' + bgImage + ')' }"
           class="sticky top-0 text-white text-sm md:text-base h-screen snap-start overflow-scroll bg-cover bg-center">
    <div class="w-11/12 md:w-3/4 m-auto">
      <div class="h-28 md:h-16"></div>
      <slot name="header"></slot>
      <slot name="body"></slot>
    </div>
  </section>
</template>

<style scoped>

</style>