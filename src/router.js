import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

    routes: [
        { path: '*', redirect: '/index' },
        { path: '/', redirect: '/index' },
        { name: 'index', path: '/index', component: () => import('./views/Homepage'), meta: { title: 'Index', permission: true } },
        {
            name: 'home',
            path: '/',
            component: () => import('./views/Home'),
            meta: { title: 'Home' },
            children: [
                { name: 'dashboard', path: 'dashboard', component: () => import('./views/Dashboard'), meta: { title: 'Dashboard' } },
                { name: 'S-logo', path: 'S-logo', component: () => import('./views/somoplay/Logo'), meta: { title: 'S - Logo' } },
                { name: 'S-topmenu', path: 'S-topmenu', component: () => import('./views/somoplay/Topmenu'), meta: { title: 'S - TopMenu' } },
                { name: 'S-slideshow', path: 'S-slideshow', component: () => import('./views/somoplay/Slideshow'), meta: { title: 'S - SlideShow' } },
                { name: 'S-content', path: 'S-content', component: () => import('./views/somoplay/Content'), meta: { title: 'S - Content'/*, permission: true*/ } },
                { name: 'S-listView', path: 'S-listView', component: () => import('./views/somoplay/Listview'), meta: { title: 'S - ListVIew' } },
                { name: 'S-headerImage', path: 'S-headerImage', component: () => import('./views/somoplay/Headerimage'), meta: { title: 'S - HeaderImage' } },
                { name: 'S-title', path: 'S-title', component: () => import('./views/somoplay/Title'), meta: { title: 'S - Title' } },
                { name: 'S-map', path: 'S-map', component: () => import('./views/somoplay/Map'), meta: { title: 'S - Map' } },
                { name: 'S-infoList', path: 'S-infoList', component: () => import('./views/somoplay/Infolist'), meta: { title: 'S - InfoList' } },
                { name: 'S-social', path: 'S-social', component: () => import('./views/somoplay/Social'), meta: { title: 'S - Social' } },
                { name: 'profile', path: 'profile', component: () => import('./views/Profile'), meta: { title: 'Profile' } },

            ]
        },
        { name: 'login', path: '/login', component: () => import('./components/Login.vue'), meta: { title: 'Login' } },
        { name: 'signup', path: '/signup', component: () => import('./components/Signup.vue'), meta: { title: 'Signup', permission: true } }
    ]
})
