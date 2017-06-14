import './bootstrap'
import './helpers'

/**
 * Vue application instance
 */

import { sync } from 'vuex-router-sync'

import App from './App.vue'
import router from './router'
import store from './store'
sync(store, router)

// global component
import Icon from './components/Icon.vue'
Vue.component('icon', Icon);

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');
