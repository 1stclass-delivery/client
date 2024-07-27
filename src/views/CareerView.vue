<script setup lang="ts">
import bgCareer from "@/assets/images/career-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="section-career" :bg-image="bgCareer">
    <template #header>
      <h2 class="italic text-4xl md:text-6xl font-bold">Career</h2>
    </template>
    <template #body>
      <div class="mt-8 max-w-screen-lg backdrop-blur-sm p-4 bg-gray-500/15 rounded-2xl mb-4">
        <p>At First Class Delivery, we're committed to building a team of dedicated
          professionals who share our passion for delivering exceptional customer service.</p>
        <p>If you're looking for a
          challenging and rewarding career in transportation, we invite you to explore our current job
          opportunities.</p>
        <p>We're proud to offer a range of career paths for professional drivers, from
          experienced veterans to new entrants in the industry.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>