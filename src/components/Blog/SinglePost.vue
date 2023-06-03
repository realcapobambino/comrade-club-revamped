<template>
    <div v-if="posts">
        <div class="max-w-[75%] mx-auto ">
            <router-link :to="{ name: 'Post', params: { id: post.id } }">
                <h1 class="text-2xl">Title: {{ post.title }}</h1>
                <h1 class="text-2xl">Id: {{ post.id }}</h1>
            </router-link>
            <p>{{ snippet }}</p>
            <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.data.substring(0, 100) + '...'
        })
        return { snippet }
    },
}
</script>

<style scoped>
/* .post {
    max-width: 75%;
    margin: 0 auto;
    margin-bottom: 15px;
    color: white;
    border: 1px solid;
    border-color: purple;
    border-radius: 5%;
}

div a {
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: blue;
    text-decoration: none;
} */
</style>
