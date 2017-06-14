const Index = r => require.ensure(['../pages/Index.vue'], () => r(require('../pages/Index.vue')) )
const Search = r => require.ensure(['../pages/Search.vue'], () => r(require('../pages/Search.vue')) )
const Detail = r => require.ensure(['../pages/Detail.vue'], () => r(require('../pages/Detail.vue')) )

export default [
  	{ path: '/', component: Index },
  	{ path: '/search', component: Search },
  	{ path: '/detail/:slug', component: Detail }
]
