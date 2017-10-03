import Vue from 'vue'
import jQuery from 'jquery'
import Popper from 'popper.js'
import Moment from 'moment'
import Lodash from 'lodash'
import Axios from 'axios'

window._ = Lodash
window.Vue = Vue
window.$ = window.jQuery = jQuery
window.Popper = Popper
window.moment = Moment
window.axios = Axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import "bootstrap"
import "daterangepicker"

// const __svg__ = { path: './../images/svg/**/*.svg', name: 'images/svg/sprite.svg' }
// require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)

import "./directives"
import "./components"

const app = new Vue({
    el: '#app'
})
