import {
    createRouter,
    createWebHistory
} from 'vue-router';
import CreateAccount from './components/CreateAccount.vue';
import Login from './components/Login.vue';
import HomePage from './view/HomePage.vue';
import LessonPage from './view/LessonPage.vue';
import LessonListPage from './view/LessonListPage.vue';
import VideoPage from './view/VideoPage.vue';
import VideoListPage from './view/VideoListPage.vue';
import TestPage from './view/TestPage.vue';
import TestListPage from './view/TestListPage.vue';
import ChatRoom from './view/ChatRoom.vue';
import {
    getIsAuthenticated,
} from './firebase/firebase';
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

        {
            path: '/lesson',
            name: '/lesson',
            component: LessonPage,
        },
        {
            path: '/ChatRoom',
            name: '/ChatRoom',
            component: ChatRoom,
        },
        {
            path: '/lessonListPage/:id',
            name: '/lessonListPage',
            component: LessonListPage,
        },
        {
            path: '/testPage',
            name: '/testPage   ',
            component: TestPage,
        },
        {
            path: '/testListPage/:id',
            name: '/testListPage',
            component: TestListPage,
        },
        {
            path: '/videoPage',
            name: '/videoPage   ',
            component: VideoPage,
        },
        {
            path: '/videoListPage/:id',
            name: '/videoListPage',
            component: VideoListPage,
        },

    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = getIsAuthenticated() || localStorage.getItem('isAuthenticated');

    if (!isAuthenticated && to.path !== '/login' && to.path !== '/create') {
        next('/login');
    } else {
        next();
    }
});


export default router;