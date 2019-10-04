import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueSlimScroll from 'vue-slimscroll'
Vue.use(VueSlimScroll)
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css';


router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Content Edit System`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    }
    else if (to.meta.permission) {
        console.log(to.meta.permission)
        role === 'admin' ? next() : next('/403');
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
