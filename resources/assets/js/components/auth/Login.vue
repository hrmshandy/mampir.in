<template>
    <div>
        <a href="#" @click.prevent="openModal" class="btn btn-outline-primary btn-sm">Login</a>
        <modal v-model="showModal" class="sign-modal sign-in">
            <sign>
                <facebook></facebook>
                <google></google>
                <span class="divider">or</span>
                <form class="sign-form" method="POST">
                    <div :class="['form-group', {'has-danger' : form.errors.has('email')}]">
                        <div class="input-group">
                            <input type="email" name="email" v-model="form.email" class="form-control" placeholder="Email Adress">
                            <span class="input-group-addon"><icon name="envelope"></icon></span>
                        </div>
                        <span class="form-control-feedback" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
                    </div>
                    <div :class="['form-group', {'has-danger' : form.errors.has('password')}]">
                        <div class="input-group">
                            <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Password">
                            <span class="input-group-addon"><icon name="lock"></icon></span>
                        </div>
                        <span class="form-control-feedback" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <label class="custom-control custom-checkbox remember">
                                    <input type="checkbox" name="remember" class="custom-control-input" value="1">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-description">Remember Me</span>
                                </label>
                            </div>
                            <div class="col-6 text-right">
                                <a href="#" class="forgot-password">Forgot password?</a>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary btn-block" @click.prevent="handleLogin" :disabled="loading">
                        <span v-if="loading">Loading...</span>
                        <span v-else>Log in</span>
                    </button>
                </form>
                <hr>
                <div class="row align-items-center">
                    <div class="col-8">
                        <span>Don’t have an account?</span>
                    </div>
                    <div class="col-4 text-right">
                        <a href="#" class="btn btn-outline-primary btn-sm" @click.prevent="openRegisterModal">Register</a>
                    </div>
                </div>
            </sign>
        </modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import Facebook from './Facebook.vue'
import Form from '../../utils/form'
import Google from './Google.vue'
import Modal from '../Modal.vue'
import Sign from './Sign.vue'

export default {
    components: { Facebook, Google, Modal, Sign },
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
