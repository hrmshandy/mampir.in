<template>
    <div :class="['nav-mobile', {'nav-mobile--inline': inline, 'is-shown': showNav}]">
    	<div class="o-logo__mobile o-logo__mobile--chevron" @click="toggleNav">
    		<logo-mobile class="o-logo__mobile"></logo-mobile>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
        	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
        </div>

		<transition
			enter-active-class="animated slideInDown"
			name="slide">
	    	<div class="nav-mobile__wrapper">
	    		<div class="nav-mobile__menu">	

			    	<div class="nav-mobile__menu-general">
				    	<li class="nav-mobile__item">
				    		<a href="/" class="item">
				    			Home
				    		</a>
				    	</li>
				    	
				    	<li class="nav-mobile__item">
				    		<router-link class="item" to="/">
				    			Trending
				    		</router-link>
				    	</li>
				    	
				    	<li class="nav-mobile__item">
				    		<router-link class="item" to="/">
				    			Journal
				    		</router-link>
				    	</li>
	                </div>

		                <template>
	                    	<user></user>

			                <div class="nav-mobile__menu-merchant">
			                    <h3>Merchant</h3>
			                        <a class="" href="#">Salona</a>
			                        <a class="" href="#">Barbera</a>
			                        <a class="o-button o-button--primary o-button-custom o-button--block" href="#">Add Merchant</a>
			                </div>

		                </template>

		                <template>
				    		<li class="nav-mobile__item">
		                    	<login></login>
				    		</li>
				    		<li class="nav-mobile__item">
		                    	<register></register>
		                    </li>
		                </template>

	

	    		</div>
	    	</div>
		</transition>
		
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LogoMobile from '../components/LogoMobile.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import User from '../components/User.vue'
export default {
	components: { LogoMobile, Login, Register, User },
	props: {
	    size: { type: String },
		inline: { type: Boolean, default: true }
	},
	data() {
		return {
            showNav: false
		}
	},
	computed : {
		currentRoute() {
            return this.$route.path;
        },
		...mapGetters([
            'authenticated',
            'user'
        ])
	},
	methods: {
	  	...mapActions([
            'logout'
        ]),
        handleLogout() {
            this.logout().then(() => {
                location.reload()
            })
        },
		toggleNav() {
		  if(this.showNav) {
		      this.showNav = false;
		      iconim.off('search-close');
		  } else {
              this.showNav = true;
              iconim.on('search-close');
		  }
		}
	}
}
</script>