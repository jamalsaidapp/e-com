export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../Frontend/Pages/Home.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../Frontend/Pages/Products.vue')
    }
]
