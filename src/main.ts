import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'



import Landing from './pages/Landing.vue'
import Create from './pages/Create.vue'
import Blog from './pages/Blog.vue'
import PageNotFound from './pages/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Landing', component: Landing },
        { path: '/post/:category', name: 'Post', component: Create },
        { path: '/read/:category/:id', name: 'Blog', component: Blog },
        { path: '/edit/:category/:id', name: 'Edit', component: Create },
        { path: '/:pathMatch(.*)*', component: PageNotFound }
    ]
})




createApp(App)
.use(router)
.mount('#app')

