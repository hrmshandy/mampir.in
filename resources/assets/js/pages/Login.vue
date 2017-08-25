<template>
	<div class="l-auth l-auth--login">
		<div class="l-auth__box" :disabled="loading">
			<logo class="l-auth__logo"></logo>
			<p class="l-auth__text">Sign in to Mampir.in</p>
			<facebook></facebook>
			<google></google>
			<div class="u-text-center u-mt-x3">
				<router-link :to="{ path: $route.query.redirect }">Cancel</router-link>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapActions } from 'vuex'

    import Facebook from '../components/auth/Facebook.vue'
    import Form from '../utils/form'
    import Google from '../components/auth/Google.vue'
    import Logo from '../objects/Logo.vue'
    import Sign from '../components/auth/Sign.vue'

	export default {
        components: { Facebook, Google, Logo, Sign },
        data() {
            return {
                loading: false
            }
        },
        mounted() {
            Event.listen('sign-loading', (value) => {
                this.loading = value
            })

			Event.listen('oauth-connected', (data) => {
			    if(!data.complete_profile) {
                    router.push('/complete-profile?redirect='+this.$route.query.redirect);
				} else {
                    router.push(this.$route.query.redirect);
				}
			})
        },
        methods: {

        }
	}
</script>