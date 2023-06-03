<template>
    <div>
        <div class="group fixed bottom-0 z-30 m-4">
            <button
                class="text-primary relative flex items-center rounded-full border border-purple-200 bg-gray-50 p-2 text-xl font-medium dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
                @click="toggleDark()">
                <WeatherSunny />
                <span class="absolute -right-1 top-0 flex h-4 w-4">
                    <!-- <span class="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-purple-400 opacity-75 dark:bg-gray-300">
          </span> -->
                    <span class="h-4 w-4 rounded-full bg-purple-400 dark:bg-gray-200"></span></span><small
                    class="hidden group-hover:block">Dark Mode</small>
            </button>
        </div>
        <nav class="mx-auto flex justify-between rounded-b-md border-b border-b-purple-500 bg-gray-200 dark:bg-black">
            <router-link :to="{ name: 'home' }" class="m-2 bg-purple-500 p-2 text-xs">
                <BlurRadial :size="32" fillColor="#FFFFFF" title="Home" />
            </router-link>
            <!-- medium screens and above -->
            <div class="m-1 mx-auto hidden flex-wrap justify-between p-1 md:block md:flex">
                <router-link :to="{ name: 'home' }" class="m-2 mb-2 rounded-lg bg-purple-400 p-2">Home</router-link>
                <!-- databind the route name for simplicity -->
                <router-link :to="{ name: 'blog' }" class="m-2 mb-2 rounded-lg bg-purple-400 p-2">Blog</router-link>
                <!-- <router-link :to="{ name: 'slots' }" class="m-2 mb-2 rounded-lg bg-purple-400 p-2">Slots</router-link> -->
                <router-link :to="{ name: 'about' }" class="m-2 mb-2 rounded-lg bg-purple-400 p-2">About</router-link>
            </div>
            <!-- small screens -->
            <div class="m-2 block p-2 md:hidden">NAV HERE</div>

        </nav>
    </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import BlurRadial from "vue-material-design-icons/BlurRadial.vue";
// import Twitter from "vue-material-design-icons/Twitter.vue";
import WeatherSunny from "vue-material-design-icons/WeatherSunny.vue";

// dark mode toggle
const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>

<style lang="scss" scoped></style>