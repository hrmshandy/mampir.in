<template>
	<div class="app">
		<l-header></l-header>
		<main class="l-body">
			<router-view></router-view>
		</main>
		<l-footer v-show="footer"></l-footer>
		<select-city></select-city>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from './Header.vue'
import Footer from './Footer.vue'
import SelectCity from '../components/SelectCity.vue'

export default {
	components: { 'l-header': Header, 'l-footer': Footer, SelectCity },
	computed: {
		...mapGetters([
		    'footer'
		])
	}
}
</script>
