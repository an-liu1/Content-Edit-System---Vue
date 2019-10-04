import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

    routes: [
        // { path: '*', redirect: '/add' },
        { path: '/', redirect: '/topmenu' },
        // { path: '/add/:appName/:sectionName/:pageName', component: () => import('./components/Add') },
        {
            path: '/',
            component: () => import('./views/Home'),
            meta: { title: 'Home' },
            children: [
                { path: 'topmenu', component: () => import('./views/somoplay/Topmenu'), meta: { title: 'S - TopMenu' } },
                { path: 'slideshow', component: () => import('./views/somoplay/Slideshow'), meta: { title: 'S - SlideShow' } },
                { path: 'content', component: () => import('./views/somoplay/Content'), meta: { title: 'S - Content' } },
                { path: 'listView', component: () => import('./views/somoplay/Listview'), meta: { title: 'S - ListVIew' } },
                { path: 'headerImage', component: () => import('./views/somoplay/Headerimage'), meta: { title: 'S - HeaderImage' } },
                { path: 'title', component: () => import('./views/somoplay/Title'), meta: { title: 'S - Title' } },
                { path: 'map', component: () => import('./views/somoplay/Map'), meta: { title: 'S - Map' } },
                { path: 'infoList', component: () => import('./views/somoplay/Infolist'), meta: { title: 'S - InfoList' } },
                { path: 'footer', component: () => import('./views/somoplay/Footer'), meta: { title: 'S - Footer' } },
                // { path: 'edit/:id', component: () => import('./components/Edit') },

            ]
        },
        { path: '/login', component: () => import('./components/Login.vue') },
        { path: '/signup', component: () => import('./components/Signup.vue') }
    ]
})
