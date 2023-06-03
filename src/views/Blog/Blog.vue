<template>
  <div class="h-screen overflow-hidden">
    <!-- Landing -->
    <div
      class="mt-4 bg-gray-200 p-4 text-center font-sans text-[40px] font-semibold text-black dark:bg-black dark:text-white">
      <div>
        POSTS GO HERE
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <!-- <div v-for="post in posts.value">
        {{ post.title }}
      </div> -->
      <!-- <PostList :posts="posts" /> -->
      <!-- <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>Loading...</div> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../../components/Blog/PostList.vue';
import getPosts from '../../composables/getPosts'

export default {
  name: 'Blog',
  components: { PostList },

  setup() {
    const { posts, error, load } = getPosts()

    load()

    console.log('Postss are')
    console.log(posts.value)
    return { posts, error };
  },
};
</script>

<style lang="scss" scoped></style>
