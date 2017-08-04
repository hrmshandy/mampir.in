const Index = () => import('../pages/Index.vue');
const Search = () => import('../pages/Search.vue');
const Detail = () => import('../pages/Detail.vue');
const Login = () => import('../pages/Login.vue');
const Register = () => import('../pages/Register.vue');
const Error404 = () => import('../pages/404.vue');

export default [
    {path: '/', component: Index},
    {path: '/search', component: Search, meta: {hideFooter: true}},
    {path: '/detail/:slug', component: Detail},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/404', component: Error404, meta: {hideTopSearch: true, hideFooter: true}}
]
