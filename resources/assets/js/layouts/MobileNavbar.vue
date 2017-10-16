<template>
	<nav class="l-mobileNavbar">
		<div class="mobileMenu">
			<div class="mobileMenu__item">
				<a href="/" class="mobileMenu__link">
					<svg class="o-svg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 52.2 47.2" style="enable-background:new 0 0 52.2 47.2;" xml:space="preserve">
					<path style="fill:currentColor;" d="M51.1,20.3L27.8,0.6c-1-0.8-2.4-0.8-3.4,0L1.1,20.3c-1.2,1-1.4,2.8-0.5,4.1c1,1.3,2.9,1.6,4.2,0.6L7,23.1v20.7
						c0,1.9,1.5,3.4,3.4,3.4h7.7h15.6h8.8c1.9,0,3.4-1.5,3.4-3.4V23.7l1.3,1.2c0.5,0.5,1.2,0.7,1.9,0.7c0.1,0,0.2,0,0.2,0
						c0.8-0.1,1.5-0.4,2-1c0-0.1,0.1-0.1,0.1-0.2C52.5,23.1,52.3,21.3,51.1,20.3z M19.1,45.2V33.3c0-3.7,3-6.8,6.8-6.8s6.8,3,6.8,6.8
						v11.9H19.1z M43.9,43.8c0,0.8-0.6,1.4-1.4,1.4h-7.8V33.3c0-4.8-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8v11.9h-6.7c-0.8,0-1.4-0.6-1.4-1.4
						V21.5c0,0,0,0,0-0.1l16.4-14c0.4-0.4,1-0.4,1.5,0L43.9,22V43.8z M49.9,23.2c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.2
						l-2.9-2.4c-0.1-0.1-0.2-0.2-0.4-0.3L28.1,5.9c-0.6-0.5-1.3-0.8-2-0.8s-1.4,0.3-2,0.7L3.6,23.4c-0.4,0.3-1.1,0.2-1.4-0.2
						c-0.3-0.4-0.3-1,0.2-1.4L25.7,2.2c0.2-0.2,0.6-0.2,0.9,0l23.3,19.7C50.2,22.2,50.3,22.8,49.9,23.2z"/>
					</svg>
				</a>
			</div>
			<div class="mobileMenu__item"></div>
			<div class="mobileMenu__item">
				<a href="/" class="mobileMenu__link">
					<logo-mobile class="o-logo"></logo-mobile>
				</a>
			</div>
			<div class="mobileMenu__item"></div>
			<div class="mobileMenu__item">
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
		height: 60px;
		background: #fff;
		box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.11);
		position: fixed;
	    bottom: 0;
	    z-index: 999;
	    padding: 10px;

	    &__grid {
	    	height: 40px;
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
		width: 40px;
		font-size: 40px;
		margin: auto;
	}

	.mobileMenu {
		display: flex;
		align-items: center;
		&__item {
			width: 20%;
			flex: 0 0 20%;
			text-align: center;
		}
		&__link {
			display: block;
		    font-size: 30px;
		    height: 40px;
		    color: #854f28;
		}
	}
	.c-search__button {
		font-size: 30px;	
	}
</style>