<script setup lang="ts">
import {ref} from "vue";
import router from "@/router";

const menuExpanded = ref<boolean>(false);

const goTo = async (anchor: string) => {
  await router.push({name: "home"});
  window.scrollTo({top: document.getElementById("section-" + anchor)!.offsetTop});
  menuExpanded.value = false;
}
</script>

<template>
  <header class="fixed top-0 left-0 w-screen text-gray-900 font-medium z-50 p-4 backdrop-blur-sm"
          :class="[menuExpanded ? 'bg-opacity-80 bg-white md:bg-white md:bg-opacity-50' : 'bg-white bg-opacity-50']">
    <div class="flex grid-cols-2">
      <img src="@/assets/images/fcd-logo.png" alt="logo" class="max-w-64 md:hidden">
      <div class="w-full flex justify-end">
        <button class="md:hidden" @click="menuExpanded = !menuExpanded">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path v-show="!menuExpanded" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
            <path class="text-red-500" v-show="menuExpanded" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"
                  d="M 1 1 15 15 M 15 1 1 15"/>
          </svg>
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-1 md:flex md:justify-evenly gap-y-4 mt-4 md:mt-0"
        :class="[!menuExpanded ? 'hidden' : 'flex']">
      <li class="flex justify-end hover:font-bold"><a @click.prevent="goTo('home')">Home</a></li>
      <li class="flex justify-end hover:font-bold"><a @click.prevent="goTo('fleet')">Fleet</a></li>
      <li class="flex justify-end hover:font-bold"><a @click.prevent="goTo('career')">Career</a></li>
      <li class="flex justify-end hover:font-bold"><a @click.prevent="goTo('contacts')">Contacts</a></li>
    </ul>
  </header>
</template>

<style scoped>

</style>