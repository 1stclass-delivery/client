<script setup lang="ts">
import bgContacts from "@/assets/images/contacts-bg.jpg";
import StickySection from "@/components/StickySection.vue";
</script>

<template>
  <sticky-section id="contacts" :bg-image="bgContacts">
    <template #header>
      <h2 class="italic text-4xl md:text-6xl font-bold">Contacts</h2>
    </template>
    <template #body>
      <div class="mt-8 max-w-screen-lg backdrop-blur-sm p-4 bg-gray-500/15 rounded-2xl mb-4">
        <p>Contact us today to learn more about our services and how we can tailor our
          transportation solutions to meet your unique needs.</p>
        <p>Trust First Class Delivery for all your transportation
          needs and experience the difference of working with a reliable and dedicated partner.</p>
        <p>If you want to work with us and receive text messages, please contact us via e-mail or call by phone
          number.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab atque aut dignissimos dolorum error incidunt itaque molestiae mollitia necessitatibus neque numquam obcaecati quis sequi soluta, sunt suscipit totam ut. Animi architecto, aspernatur at cum cupiditate ea error eum facere facilis natus nisi nostrum, odio, quae quod sapiente sequi similique. Aut dignissimos earum eligendi id laborum molestiae, mollitia nemo nesciunt placeat recusandae, repellat repellendus similique voluptates? Adipisci animi, consectetur deleniti doloremque eum fugit nihil perspiciatis placeat quia rerum. Ad aliquam aliquid consequuntur dignissimos dolorum eveniet, harum id iusto magnam necessitatibus nulla perspiciatis quam reprehenderit? Hic illum iure molestias quidem temporibus.</p>
        <p class="mt-12"><a href="tel:+14407091601">Call us: <span
            class="underline font-bold text-lg">+1 (440) 709-1601</span></a></p>
        <p class="mt-4"><a href="mailto:firstclassdeliveryllc2023@gmail.com">Text us: <span
            class="underline font-bold text-lg">firstclassdeliveryllc2023@gmail.com</span></a>
        </p>
        <p class="mt-12 text-xs">To stop receive text messages from our company, please text "Stop" to <span class="underline">+1 (440) 709-1601</span> phone
          number.</p>
      </div>
    </template>
  </sticky-section>
</template>

<style scoped>

</style>