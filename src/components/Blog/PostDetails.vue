<template>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <h4> reactions: {{ post.reactions }}</h4>
        <h4> user: {{ post.userId }}</h4>
        <div v-for="tag in post.tags" :key="post.tags">
            <span>#{{ post.tag }} </span>
        </div>
    </div>
</template>

<script>
import getPost from '../../composables/getPost'
export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id)
        load()

        return { post, error }
    },
}
</script>

<style scoped>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-line;
}
</style>
