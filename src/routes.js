import Users from './components/Users.vue';
import About from './components/About.vue';
import SingleUser from './components/SingleUser.vue';

export default[
    {path: '/vue-users-list', component: Users},
    {path: '/vue-users-list/about', component: About},
    {path: '/vue-users-list/user/:id', component: SingleUser}
]