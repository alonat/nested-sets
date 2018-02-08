import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './pages/App.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App },
});
