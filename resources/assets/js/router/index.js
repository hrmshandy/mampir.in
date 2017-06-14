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

router.beforeEach((to, from, next) => {
    store.dispatch('authCheck');

    next()
})

window.router = router;
export default router;
