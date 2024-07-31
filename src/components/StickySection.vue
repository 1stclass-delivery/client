<script setup lang="ts">
const props = defineProps<{ id: string, bgImage: string }>();
const bgImg = "bg-[url('" + props.bgImage + "')]";
</script>

<template>
  <section :id="id"
           :class="bgImg"
           class="sticky top-0 text-white text-sm md:text-base h-screen snap-start overflow-scroll bg-cover bg-center">
    <div class="mt-28 md:mt-16 w-11/12 md:w-3/4 m-auto">
      <slot name="header"></slot>
      <slot name="body"></slot>
    </div>
  </section>
</template>

<style scoped>

</style>