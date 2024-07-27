<script setup lang="ts">
defineProps<{ id: string, bgImage: string }>();
</script>

<template>
  <section :id="id">
    <img :src="bgImage" alt="Background Image" class="sticky top-0 object-center object-cover sepia-[.15] h-screen w-screen">
    <div class="relative z-10 md:mt-12 mt-28 -top-[calc(100vh)] -mb-[calc(100vh)] text-white text-sm md:text-base md:px-24 px-8 min-h-screen">
      <slot name="header" class="mt-8"></slot>
      <slot name="body"></slot>
    </div>
  </section>
</template>

<style scoped>

</style>