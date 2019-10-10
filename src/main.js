import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'jquery'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueSlimScroll from 'vue-slimscroll'
Vue.use(VueSlimScroll)
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css';
import '@/config/index'


router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Content Edit System`;
    const role = localStorage.getItem('Authorization');
    // if(!role){
    //     if(['/signup','/index','/'].indexOf(to.path) !== -1){
    //         next();
    //     }else{
    //         next('/login');
    //     }
    // }else{
    //     next();
    // }
    if (!role && to.path !== '/login') {
        next('/login');
    }
    else if (to.meta.permission) {
        // role === 'admin' ? next() : next('/footer');
    } else {
        next();
    }
});

axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    });


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
