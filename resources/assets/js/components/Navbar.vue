<template>
	<nav :class="['c-navbar', { 'is-sticky': isSticky }]">
		<div class="o-container">
			<div class="c-mobile-menu"></div>
			<router-link to="/" class="o-logo"><logo></logo></router-link>
			<search-form class="c-search"></search-form>
		</div>
		<!--<div class="navbar-container">-->
			<!--<div class="navbar-body">-->
				<!--<div class="navbar__left">-->
					<!--<router-link to="/" class="logo"><logo></logo></router-link>-->
					<!--<transition name="fade">-->
						<!--<search-form v-show="isSticky"></search-form>-->
					<!--</transition>-->
				<!--</div>-->
				<!--<div class="navbar__right">-->
					<!--<template v-if="authenticated">-->
						<!--<user></user>-->
					<!--</template>-->
					<!--<template v-else>-->
						<!--<login></login>-->
						<!--<register></register>-->
					<!--</template>-->
				<!--</div>-->
			<!--</div>-->
		<!--</div>-->
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchForm from './Search.vue'
import Login from '../components/auth/Login.vue'
import Logo from '../objects/Logo.vue'
import Register from '../components/auth/Register.vue'
import User from './User.vue'

export default {
	components: { SearchForm, Login, Logo, Register, User },
	data() {
		return {
			offsetTop: 0,
			isSticky: false
		}
	},
	methods: {
		stickyHeader() {
            if(this.currentRoute == '/') {
                if(document.body.scrollTop >= 200) {
                    this.isSticky = true;
                    this.$el.classList.add('is-sticky');
                } else {
                    this.isSticky = false;
                    this.$el.classList.remove('is-sticky');
                }
            }
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
        if(this.currentRoute !== '/') {
            this.isSticky = true;
        }
        window.addEventListener('scroll', () => {
            this.stickyHeader();
		});
        window.addEventListener('resize', () => {
            this.stickyHeader();
        });
	}
}
</script>
