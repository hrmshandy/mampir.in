require('./bootstrap');
require('./helpers');

window.Vue = require('vue');

/**
 * Event Bus for non parent-child component
 */
import Event from './event';
window.Event = new Event;

/**
 * Vue application instance
 */

import { sync } from 'vuex-router-sync';

import App from './layouts/App.vue';
import router from './router';
import store from './store';
sync(store, router);

// global component
require('./components');

// Vue Filters
require('./filters');


const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');
