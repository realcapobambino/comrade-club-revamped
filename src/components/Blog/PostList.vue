<template>
    <div class="post-list"></div>
    <div v-for="post in posts" :key="post.id">
        <!-- <SinglePost :post="post" /> -->
        <div class="text-6xl">Title {{ post.title }}</div>
    </div>
</template>

<script>
// import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    // components: { SinglePost },
    setup(props) {

    },
}
</script>

<style scoped></style>
