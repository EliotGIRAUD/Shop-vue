import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import Home from './views/index.vue'
import Cart from './views/CartPage.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
