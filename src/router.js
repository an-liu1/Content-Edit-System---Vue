import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

    routes: [
        { path: '*', redirect: '/index' },
        { path: '/', redirect: '/index' },
        {path:'/index', component: () => import('./views/Homepage'), meta: { title: 'Index' }},
        {
            path: '/',
            component: () => import('./views/Home'),
            meta: { title: 'Home' },
            children: [
                { path: 'dashboard', component: () => import('./views/Dashboard'), meta: { title: 'Dashboard' } },
                { path: 'S-logo', component: () => import('./views/somoplay/Logo'), meta: { title: 'S - Logo' } },
                { path: 'S-topmenu', component: () => import('./views/somoplay/Topmenu'), meta: { title: 'S - TopMenu' } },
                { path: 'S-slideshow', component: () => import('./views/somoplay/Slideshow'), meta: { title: 'S - SlideShow' } },
            { path: 'S-content', component: () => import('./views/somoplay/Content'), meta: { title: 'S - Content'/*, permission: true*/ } },
                { path: 'S-listView', component: () => import('./views/somoplay/Listview'), meta: { title: 'S - ListVIew' } },
                { path: 'S-headerImage', component: () => import('./views/somoplay/Headerimage'), meta: { title: 'S - HeaderImage' } },
                { path: 'S-title', component: () => import('./views/somoplay/Title'), meta: { title: 'S - Title' } },
                { path: 'S-map', component: () => import('./views/somoplay/Map'), meta: { title: 'S - Map' } },
                { path: 'S-infoList', component: () => import('./views/somoplay/Infolist'), meta: { title: 'S - InfoList' } },
                { path: 'S-footer', component: () => import('./views/somoplay/Footer'), meta: { title: 'S - Footer' } },
                // { path: 'edit/:id', component: () => import('./components/Edit') },
                { path: 'profile', component: () => import('./views/Profile'), meta: { title: 'Profile' } },

            ]
        },
        { path: '/login', component: () => import('./components/Login.vue'), meta: { title: 'Login' }},
        { path: '/signup', component: () => import('./components/Signup.vue'), meta: { title: 'Signup' } }
    ]
})
