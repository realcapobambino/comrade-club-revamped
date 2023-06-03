import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog/Blog.vue'
import PostDetails from '../components/Blog/PostDetails.vue'
import Slots from '../views/Slots.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
        },
        {
            path: '/posts/:id',
            name: 'Post',
            component: PostDetails,
            props: true
        },
        {
            path: '/slots',
            name: 'slots',
            component: Slots
        },
        // REDIRECTS
        {
            path: '/all-posts',
            redirect: '/posts'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.../views/About.vue
            // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            component: About
        },

        // catch all
        // 404 PAGE
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router
