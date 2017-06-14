import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'
import jQuery from 'jquery'
import Event from './event'
import Cookies from 'js-cookie'
import auth from './interceptor/auth';


window.Vue = Vue;
window._ = lodash;
window.$ = window.jQuery = jQuery;
window.axios = axios;
window.Cookies = Cookies;
window.Event = new Event;
window.moment = require('moment');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// Add a request interceptor
window.axios.interceptors.request.use(auth.request, auth.requestError);

// Add a response interceptor
window.axios.interceptors.response.use(auth.response, auth.responseError);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

