<script setup lang="ts">
import bgFleet from "@/assets/images/fleet-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="section-fleet" :bg-image="bgFleet">
    <template #header>
      <h2 class="italic text-4xl md:text-6xl font-bold">Fleet</h2>
    </template>
    <template #body>
      <div class="mt-8 max-w-screen-sm">
        <p>Our fleet consists straight trucks, box trucks, vans and semis with diverse
          brands like Freightliner, International, Volvo, Mercedes.</p>
        <p>All trucks are well-maintained, regularly serviced, and equipped with the latest
          technology to ensure safe and reliable transportation.</p>
        <p>We've got the capacity to handle your most complex delivery needs.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>