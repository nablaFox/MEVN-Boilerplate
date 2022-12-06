import MainLayout from '@layouts/Main.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@views/Home.vue'),
        meta: { layout: MainLayout }
    },
]
