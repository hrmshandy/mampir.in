<template>
	<transition 
		leave-active-class="animated fadeOut"
   		name="preload-animation">
		<div class="c-preloader" v-show="loading">
	        <logo class="o-logo-preloader"></logo>
	        <logo-marker class="o-logo-marker"></logo-marker>
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
			}, 1000)
		}
	}
	
</script>