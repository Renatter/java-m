import {
    createRouter,
    createWebHistory
} from 'vue-router';
import CreateAccount from './components/CreateAccount.vue';
import Login from './components/Login.vue';
import HomePage from './view/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: '/',
            component: HomePage,
        }, {
            path: '/create',
            name: '/create',
            component: CreateAccount,
        },
        {
            path: '/login',
            name: '/login',
            component: Login,
        },

    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = true;

    if (!isAuthenticated && to.path !== '/login' && to.path !== '/create') {
        next('/login'); // Если пользователь не аутентифицирован и пытается зайти на любую страницу, кроме /login и /create, перенаправляем его на страницу входа
    } else {
        next();
    }
});


export default router;