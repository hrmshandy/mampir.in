require('./bootstrap');

window.Choices = require('choices.js/assets/scripts/dist/choices');
window.Vue = require('vue');

/**
 * Event Bus for non parent-child component
 */
import Event from './event';
window.Event = new Event;

Vue.component('dropify', require('./components/Dropify.vue'));
Vue.component('places-search', require('./components/PlacesSearch.vue'));
Vue.component('gallery', require('./components/Gallery.vue'));
Vue.component('finder', require('./components/Finder.vue'));
Vue.component('file-upload-new', require('./components/FileUploadNew.vue'));
Vue.component('file-manager', require('./components/FileManager.vue'));

const app = new Vue({
    el: '#app'
});
