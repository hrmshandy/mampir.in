<template>
	<transition 
		leave-active-class="animated fadeOut"
   		name="preload-animation">
		<div class="c-preloader" v-show="loading">
	        <transition 
	        	enter-active-class="animated slideInUp"
	        	name="letter-animation">
	        	<logo class="o-logo-preloader" v-if="loading1"></logo>
	        </transition>
	        <transition 
				enter-active-class="animated fadeIn"
	        	name="marker-animation">
	        	<logo-marker class="o-logo-marker" v-if="loading2"></logo-marker>
	        </transition>
		</div>
	</transition>
</template>

<script>
	import Logo from '../objects/Logo.vue'
	import LogoMarker from '../objects/LogoMarker.vue'
	export default {
    	components: { Logo, LogoMarker },
    	data() {
    		return {
	      		loading: true,
	      		loading1: false,
	      		loading2: false
    		}
    	},
		mounted(){
    		setTimeout(() => {
                this.loading = false
			}, 5000),
			
			setTimeout(() => {
                this.loading1 = true
			}, 1000),

			setTimeout(() => {
                this.loading2 = true
			}, 2800)
		}
	}
	
</script>