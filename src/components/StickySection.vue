<script setup lang="ts">
defineProps<{ id: string, bgImage: string }>()
</script>

<template>
  <section
      :id="id"
      class="sticky top-0 h-screen flex flex-col items-center justify-center">
    <img :src="bgImage" alt="Background Image"
         class="absolute w-full h-full object-cover sepia-[.15]">
    <div class="absolute top-32 text-white text-sm md:text-base w-full md:px-24 px-8">
      <slot name="header"></slot>
      <slot name="body"></slot>
    </div>
  </section>
</template>

<style scoped>

</style>