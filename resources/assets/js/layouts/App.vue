<template>
	<div class="app">
		<l-header></l-header>
		<main class="l-body">
			<router-view></router-view>
		</main>
		<l-footer v-show="footer"></l-footer>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
	components: { 'l-header': Header, 'l-footer': Footer },
	computed: {
		...mapGetters([
		    'footer'
		])
	}
}
</script>
