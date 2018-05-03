import Users from './components/Users.vue';
import About from './components/About.vue';
import SingleUser from './components/SingleUser.vue';
import AsideChat from './components/AsideChat.vue';

export default[
    {
        path: '/',
        name: 'Users',
        component: Users
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user/:id',
        name: 'SingleUser',
        component: SingleUser
    },
    {
        path: '/livechat',
        name: 'Livechat',
        component: AsideChat,
        props: true
    },
]