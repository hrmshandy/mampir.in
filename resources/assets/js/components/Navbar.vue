<template>
	<nav :class="['navbar', { 'is-sticky': isSticky }]">
		<div class="navbar-container">
			<div class="navbar-body">
				<div class="navbar__left">
					<router-link to="/" class="logo"><img src="/img/logo.png" alt="Mampir.in"></router-link>
					<transition name="fade">
						<search-form v-show="isSticky"></search-form>
					</transition>
				</div>
				<div class="navbar__right">
					<template v-if="authenticated">
						<user></user>
					</template>
					<template v-else>
						<login></login>
						<register></register>
					</template>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchForm from '../components/SearchForm.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import User from './User.vue'

export default {
	components: { SearchForm, Login, Register, User },
	data() {
		return {
			offsetTop: 0,
			isSticky: false
		}
	},
	methods: {
		stickyHeader() {
			if(this.currentRoute !== '/') {
				this.isSticky = true;
			}
			$(window).on('scroll resize', () => {
				if(this.currentRoute == '/') {
					if($(window).scrollTop() >= 200) {
						this.isSticky = true;
						$(this.$el).addClass('is-sticky');
					} else {
						this.isSticky = false;
						$(this.$el).removeClass('is-sticky');
					}
				}
			});
		}
	},
	computed: {
		currentRoute() {
			return this.$route.path;
		},
		...mapGetters([
		    'authenticated'
		])
	},
	watch: {
		currentRoute(value) {
			this.isSticky = value !== '/';
		}
	},
	mounted() {
		this.stickyHeader();
	}
}
</script>
