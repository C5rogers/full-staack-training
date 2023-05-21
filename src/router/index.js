import { createRouter, createWebHistory } from "vue-router";
const routes = [

    {
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home.vue')
    }, {
        path: '/search/:query',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router