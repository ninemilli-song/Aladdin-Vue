import Vue from 'vue';
import Router from 'vue-router';
import LyTab from 'ly-tab';
import First from '../pages/quarter/First.vue';
import Second from '../pages/quarter/Second.vue';
import Third from '../pages/quarter/Third.vue';
import Fourth from '../pages/quarter/Fourth.vue';

Vue.use(Router);
Vue.use(LyTab);

export default new Router({
    routes: [
        {
            path: '/year/',
            name: 'First',
            component: First
        },
        {
            path: '/year/second',
            name: 'Second',
            component: Second
        },
        {
            path: '/year/third',
            name: 'Third',
            component: Third
        },
        {
            path: '/year/fourth',
            name: 'Fourth',
            component: Fourth
        }
    ]
});
