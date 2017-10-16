<template>
	<div class="app">
		<l-header></l-header>
		<mobile-navbar></mobile-navbar>
		<main class="l-body">
			<router-view></router-view>
		</main>
		<l-footer v-show="footer"></l-footer>
		<select-city></select-city>
		<preloader v-show="showPreloader"></preloader>

		<login></login>
		<register></register>

	</div>
</template>



<script>
import { mapGetters } from 'vuex'

import Header from './Header.vue'
import Login from '../components/auth/Login.vue'
import MobileNavbar from './MobileNavbar.vue'
import Register from '../components/auth/Register.vue'
import Footer from './Footer.vue'
import SelectCity from '../components/SelectCity.vue'
import Preloader from '../components/Preloader.vue'

export default {
	components: { 'l-header': Header, 'l-footer': Footer, MobileNavbar, SelectCity, Preloader, Login, Register },
	data() {
		return {
			showPreloader: false
		}
	},
	computed: {
		...mapGetters([
		    'footer'
		])
	},
	watch: {
		'$route': function(value) {
			this.showPreloader = (value.path === '/');
		}
	}
}
</script>
