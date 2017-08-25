const pathToRegexp = require('path-to-regexp');

const Index = () => import('../pages/Index.vue');
const Search = () => import('../pages/Search.vue');
const Detail = () => import('../pages/Detail.vue');
const Login = () => import('../pages/Login.vue');
const Register = () => import('../pages/Register.vue');
const Journal = () => import('../pages/Journal.vue');
const JournalUser = () => import('../pages/journal/User.vue');
const JournalDetail = () => import('../pages/JournalDetail.vue');
const JournalForm = () => import('../pages/journal/Form.vue');
const Error404 = () => import('../pages/404.vue');

const MerchantClaim = () => import('../pages/merchant/MerchantClaim.vue');
const Merchant = () => import('../pages/merchant/MerchantRegistration.vue');
const Merchant2 = () => import('../pages/merchant/MerchantRegistration2.vue');
const Merchant3 = () => import('../pages/merchant/MerchantRegistration3.vue');
const MerchantSuccess = () => import('../pages/merchant/MerchantRegistrationSuccess.vue');


export default [
    {path: '/', component: Index},
    {path: '/search/:query', component: Search, meta: {hideFooter: true}},
    {path: '/place/:type/:slug', component: Detail},
    {path: '/login', component: Login, meta: {hideHeader: true, hideFooter: true}},
    {path: '/complete-profile', component: Register, meta: {hideHeader: true, hideFooter: true}},
    {path: '/journal/create', component: JournalForm, meta: {navbarPost: true}},
    {path: '/journal', component: Journal},
    {path: '/journal/:id/edit', component: JournalForm, meta: {navbarPost: true}},
    {path: '/journal/:user/:slug', component: JournalDetail},
    {path: '/me/journal/:status?', component: JournalUser},

    {path: '/merchant/claim', component: MerchantClaim },
    {path: '/merchant/registration/1', component: Merchant },
    {path: '/merchant/registration/2', component: Merchant2 },
    {path: '/merchant/registration/3', component: Merchant3 },
    {path: '/merchant/registration/success', component: MerchantSuccess },

    {path: '/404', component: Error404, meta: {hideTopSearch: true, hideFooter: true}}
]
