<script setup lang="ts">
import {ref} from "vue";

const menuExpanded = ref<boolean>(false);

const scrollTo = (sectionIndex: number) => {
  const scrollHeight = document.getElementById("section-home")!.scrollHeight;
  window.scrollTo({top: scrollHeight*sectionIndex});
  menuExpanded.value = false;
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full text-white z-10 p-4 bg-white bg-opacity-10" :class="{'bg-opacity-80 bg-black md:bg-white md:bg-opacity-10':menuExpanded}">
    <div class="w-full flex justify-end">
      <button class="md:hidden" @click="menuExpanded = !menuExpanded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
        </svg>
      </button>
    </div>
    <ul class="grid grid-cols-1 md:flex md:justify-evenly gap-y-4 mt-4 md:mt-0" :class="[!menuExpanded ? 'hidden' : 'flex']">
      <li class="flex justify-end hover:font-bold"><a href="#" @click.prevent="scrollTo(0)">Home</a></li>
      <li class="flex justify-end hover:font-bold"><a href="#" @click.prevent="scrollTo(1)">Fleet</a></li>
      <li class="flex justify-end hover:font-bold"><a href="#" @click.prevent="scrollTo(2)">Career</a></li>
      <li class="flex justify-end hover:font-bold"><a href="#" @click.prevent="scrollTo(3)">Contacts</a></li>
    </ul>
  </header>
</template>

<style scoped>

</style>