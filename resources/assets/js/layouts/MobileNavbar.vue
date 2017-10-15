<template>
	<nav class="l-mobileNavbar">
		<div class="o-grid o-grid--middle l-mobileNavbar__grid">
			<div class="o-grid__cel u-4/12"></div>
			<div class="o-grid__cel u-4/12 u-text-center">
				<a href="/">
					<logo-mobile class="o-logo"></logo-mobile>
				</a>
			</div>
			<div class="o-grid__cel u-4/12 u-text-center">
				<button type="button" class="c-search__button iconim iconim-search-close" @click="toggleSearch"></button>
			</div>
		</div>
		<search v-show="showSearch" class="l-mobileNavbar__searchForm"></search>
	</nav>
</template>

<script>

import LogoMobile from '../components/LogoMobile.vue'

const Search = () => import('../components/Search.vue');

export default {
	components: { LogoMobile, Search },
	data() {
		return {
			showSearch: false
		}
	},
	methods: {
		toggleSearch() {
            if (this.showSearch) {
                this.showSearch = false;
                iconim.off('search-close');
                document.body.style.overflow = '';
            } else {
                this.showSearch = true;
                iconim.on('search-close');
                document.body.style.overflow = 'hidden';
            }
        }
	}
}
</script>

<style lang="scss" scoped>
	.l-mobileNavbar {
	    width: 100%;
		height: 50px;
		background: #fff;
		box-shadow: 0 0 5px rgba(#000, .15);
		position: fixed;
	    bottom: 0;
	    z-index: 999;
	    padding: 10px;

	    &__grid {
	    	height: 30px;
	    }

	    &__searchForm {
	    	position: fixed;
		    bottom: 50px;
		    background: #fff;
		    width: 100%;
		    left: 0;
		    margin: 0;
		    padding: 20px;
		    height: calc(100vh - 50px);
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
	    }

		@media (min-width: 641px) {
			display: none;
		}
	}
	.o-logo {
		font-size: 30px;
		margin: auto;
	}
</style>