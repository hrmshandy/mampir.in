<template>
	<div class="l-auth l-auth--login">
		<div class="l-auth__box" :disabled="loading">
			<facebook></facebook>
			<google></google>
			<span class="divider">or</span>
			<form class="sign-form" method="POST">
				<div :class="['c-form-group', {'has-danger' : form.errors.has('email')}]">
					<input type="email" name="email" v-model="form.email" class="o-input" placeholder="Email Adress">
					<span class="form-control-feedback" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
				</div>
				<div :class="['c-form-group', {'has-danger' : form.errors.has('password')}]">
					<input type="password" name="password" v-model="form.password" class="o-input" placeholder="Password">
					<span class="form-control-feedback" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
				</div>
				<div class="c-form-group">
					<div class="o-grid o-grid--middle">
						<div class="o-grid__col u-6/12">
							<label class="custom-control custom-checkbox remember">
								<input type="checkbox" name="remember" class="custom-control-input" value="1">
								<span class="custom-control-indicator"></span>
								<span class="custom-control-description">Remember Me</span>
							</label>
						</div>
						<div class="o-grid__col u-6/12 u-text-right">
							<a href="#" class="forgot-password">Forgot password?</a>
						</div>
					</div>
				</div>

				<button type="button" class="o-button o-button--primary o-button--block" @click.prevent="handleLogin" :disabled="loading">
					<span v-if="loading">Loading...</span>
					<span v-else>Log in</span>
				</button>
			</form>
			<hr>
			<p>
				<span>Don’t have an account?</span><router-link to="/register" class="o-button o-button--link">Register</router-link>
			</p>
		</div>
	</div>
</template>

<script>
    import { mapActions } from 'vuex'

    import Facebook from '../components/auth/Facebook.vue'
    import Form from '../utils/form'
    import Google from '../components/auth/Google.vue'
    import Sign from '../components/auth/Sign.vue'

	export default {
        components: { Facebook, Google, Sign },
        data() {
            return {
                showModal: false,
                loading: false,
                form: new Form({
                    // grant_type: 'password',
                    // client_id: 3,
                    // client_secret: 'lbyA7wjKsh1TWpk79DLNvGgtFaJA65RsJMdu0pfY',
                    email: null,
                    password: null,
                    //scope: ''
                })
            }
        },
        mounted() {
            Event.listen("show-login-modal", (e) => {
                this.openModal(e);
            });
            Event.listen("hide-login-modal", (e) => {
                this.closeModal(e);
            });
        },
        methods: {
            openModal(e) {
                e.stopPropagation();
                this.showModal = true;
            },
            closeModal(e) {
                e.stopPropagation();
                this.showModal = false;
            },
            openRegisterModal(e){
                this.showModal = false;
                setTimeout(() => {
                    Event.fire("show-register-modal", e);
                });
            },
            handleLogin(e){
                this.loading = true;
                this.login(this.form).then((response) => {
                    this.loading = false;
                    this.showModal = false;
                    location.reload();
                }).catch((errors) => {
                    this.loading = false;
                });
            },
            ...mapActions([
                'login'
            ])
        }
	}
</script>