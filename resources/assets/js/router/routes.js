// const Index = r => require.ensure(['../pages/Index.vue'], () => r(require('../pages/Index.vue')) )
// const Search = r => require.ensure(['../pages/Search.vue'], () => r(require('../pages/Search.vue')) )
// const Detail = r => require.ensure(['../pages/Detail.vue'], () => r(require('../pages/Detail.vue')) )

export default [
  	{ path: '/', component: require('../pages/Index.vue') },
  	{ path: '/search', component: require('../pages/Search.vue'), meta: { hideFooter: true } },
  	{ path: '/detail/:slug', component: require('../pages/Detail.vue') },
  	{ path: '/404', component: require('../pages/404.vue'), meta: { hideTopSearch: true, hideFooter: true } }
]
