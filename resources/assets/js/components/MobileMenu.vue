<template>
    <div :class="['nav-mobile', {'nav-mobile--inline': inline, 'is-shown': showNav}]">
    	<div class="o-logo__mobile o-logo__mobile--chevron" @click="toggleNav">
        	<logo-mobile class="o-logo__mobile"></logo-mobile>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
		<transition
			enter-active-class="animated slideInDown"
			name="slide">
	    	<div class="nav-mobile__wrapper">
		    	<li class="nav-mobile__item">
		    		<router-link to="/">
		    			Home
		    		</router-link>
		    	</li>
		    	<li class="nav-mobile__item">
		    		<router-link to="/">
		    			Trending
		    		</router-link>
		    	</li>
		    	<li class="nav-mobile__item">
		    		<router-link to="/">
		    			Journal
		    		</router-link>
		    	</li>
                <template v-if="authenticated">
	                <li class="nav-mobile__item">
			    		<router-link to="/">
			    			Profile
			    		</router-link>
			    	</li>
					<li class="nav-mobile__item">
			    		<router-link to="/">
			    			Setting
			    		</router-link>
			    	</li>
					<li class="nav-mobile__item">
			    		<router-link to="/" @click.prevent="handleLogout">
			    			Logout
			    		</router-link>
			    	</li>
                </template>
             	<template v-else>
			    	<li class="nav-mobile__item">
			    		<router-link to="/">
			    			Sign in
			    		</router-link>
			    	</li>
		    	</template>
	    	</div>
		</transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LogoMobile from '../components/LogoMobile.vue'

export default {
	components: { LogoMobile },
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