require('./bootstrap');

window.Choices = require('choices.js');
window.Vue = require('vue');

Vue.component('dropify', require('./components/Dropify.vue'));
Vue.component('places-search', require('./components/PlacesSearch.vue'));
Vue.component('gallery', require('./components/Gallery.vue'));
Vue.component('finder', require('./components/Finder.vue'));
Vue.component('finder', require('./components/Finder.vue'));

const app = new Vue({
    el: '#app'
});
