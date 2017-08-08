const Index = () => import('../pages/Index.vue');
const Search = () => import('../pages/Search.vue');
const Detail = () => import('../pages/Detail.vue');
const Login = () => import('../pages/Login.vue');
const Register = () => import('../pages/Register.vue');
const Error404 = () => import('../pages/404.vue');

const Merchant = () => import('../pages/MerchantRegistration.vue');
const Merchant2 = () => import('../pages/MerchantRegistration2.vue');
const Merchant3 = () => import('../pages/MerchantRegistration3.vue');
const Merchant4 = () => import('../pages/MerchantRegistration4.vue');
const MerchantSuccess = () => import('../pages/MerchantRegistrationSuccess.vue');


export default [
    {path: '/', component: Index},
    {path: '/search', component: Search, meta: {hideFooter: true}},
    {path: '/detail/:slug', component: Detail},
    {path: '/login', component: Login},
    {path: '/register', component: Register},

    {path: '/merchant/registration/1', component: Merchant },
    {path: '/merchant/registration/2', component: Merchant2 },
    {path: '/merchant/registration/3', component: Merchant3 },
    {path: '/merchant/registration/4', component: Merchant4 },
    {path: '/merchant/registration/success', component: MerchantSuccess },

    {path: '/404', component: Error404, meta: {hideTopSearch: true, hideFooter: true}}
]
