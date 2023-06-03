import { ref } from 'vue'

const getPost = (id) => {

    const post = ref(null)

    // handle request errors
    const error = ref(null)

    // const showPosts = ref(true)

    const load = async () => {
        try {
            let data = await fetch('https://dummyjson.com/posts/' + id)
            if (!data.ok) {
                throw Error('that post does not exist')
            }
            post.value = await data.json()
            console.log('single post')
            console.log(post)
        } catch (err) {
            //
            error.value = err.message
            console.log(error.value)
        }
    }



    return { post, error, load }
}
export default getPost