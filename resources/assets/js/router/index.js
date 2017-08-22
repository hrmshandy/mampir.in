import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	linkActiveClass: 'active',
  	routes // short for routes: routes
});
//
router.beforeEach((to, from, next) => {
    // if(from.path !== '/login' || from.path !== '/register') {
    //     window.localStorage.setItem('current_url', from.fullPath);
    // }
    if (to.matched.some(record => record.meta.hideFooter)) {
        store.commit('SHOW_FOOTER', false);
	} else {
        store.commit('SHOW_FOOTER', true);
    }

    if (to.matched.some(record => record.meta.navbarPost)) {
        store.commit('SHOW_NAVBAR_POST', true);
    } else {
        store.commit('SHOW_NAVBAR_POST', false);
    }

    if (to.matched.some(record => record.meta.hideTopSearch)) {
        store.commit('SHOW_TOP_SEARCH', false);
    } else {
        store.commit('SHOW_TOP_SEARCH', true);
    }

    store.dispatch('authCheck');

    next()
})

window.router = router;
export default router;
