<template>
  <Navbar />


  <main class="bg-gray-200 dark:bg-black">
    <router-view />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
// icons

// dark mode


// export default {
//     components: {
//         Twitter,
//         MenuItem,
//     },
// };

</script>

<style>
nav a {}
</style>
