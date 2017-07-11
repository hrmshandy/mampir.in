<template>
    <div>
        <modal v-model="showModal" class="sign-modal sign-up">
            <sign>
                <div>Sign up with <facebook :is-link="true"></facebook> or <google :is-link="true"></google></div>
                <span class="divider">or</span>
                <form class="sign-form" method="POST">
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('name')}]">
                        <div class="input-group">
                            <input type="text" name="name" v-model="form.name" class="o-input" placeholder="Full Name">
                            <!-- <span class="input-group-addon"><icon name="user"></icon></span> -->
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('email')}]">
                        <div class="input-group">
                            <input type="email" name="email" v-model="form.email" class="o-input" placeholder="Email Adress">
                            <!-- <span class="input-group-addon"><icon name="envelope"></icon></span> -->
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('password')}]">
                        <div class="input-group">
                            <input type="password" name="password" v-model="form.password" class="o-input" placeholder="Create Password">
                            <!-- <span class="input-group-addon"><icon name="lock"></icon></span> -->
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('password_confirmation')}]">
                        <div class="input-group">
                            <input type="password" name="password_confirmation" v-model="form.password_confirmation" class="o-input" placeholder="Confirm Password">
                            <!-- <span class="input-group-addon"><icon name="lock"></icon></span> -->
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('gender')}]">
                        <div>
                            <label class="custom-control custom-radio">
                                <input id="radio1" name="gender" type="radio" class="custom-control-input" v-model="form.gender" value="1">
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Male</span>
                            </label>
                            <label class="custom-control custom-radio">
                                <input id="radio2" name="gender" type="radio" class="custom-control-input" v-model="form.gender" value="0">
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Female</span>
                            </label>
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('gender')" v-text="form.errors.get('gender')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : form.errors.has('city')}]">
                        <div class="input-group">
                            <input type="text" name="city" v-model="form.city" class="o-input" placeholder="City">
                            <!-- <span class="input-group-addon"><icon name="lock"></icon></span> -->
                        </div>
                        <span class="o-input-feedback" v-if="form.errors.has('city')" v-text="form.errors.get('city')"></span>
                    </div>
                    <div :class="['c-form-group', {'has-danger' : hasErrorBirthday}]">
                        <div class="o-grid o-grid--middle">
                            <div class="o-grid__col u-4/12">
                                <select name="birthday[day]" class="o-input" v-model="form.birthday.day">
                                    <option value="" disabled hidden>Day</option>
                                    <option v-for="i in 31" :value="i">{{ i }}</option>
                                </select>
                            </div>
                            <div class="o-grid__col u-4/12">
                                <select name="birthday[month]" class="o-input" v-model="form.birthday.month">
                                    <option value="" disabled hidden>Month</option>
                                    <option v-for="month in months" :value="month">{{ month }}</option>
                                </select>
                            </div>
                            <div class="o-grid__col u-4/12">
                                <select name="birthday[year]" class="o-input" v-model="form.birthday.year">
                                    <option value="" disabled hidden>Year</option>
                                    <option v-for="year in years" :value="year">{{ year }}</option>
                                </select>
                            </div>
                        </div>
                        <!--<span class="o-input-feedback" v-if="form.errors.has('birthday.day')" v-text="form.errors.get('birthday.day')"></span><br/>-->
                        <!--<span class="o-input-feedback" v-if="form.errors.has('birthday.month')" v-text="form.errors.get('birthday.month')"></span><br/>-->
                        <!--<span class="o-input-feedback" v-if="form.errors.has('birthday.year')" v-text="form.errors.get('birthday.year')"></span>-->
                    </div>
                    <button type="button" class="o-button o-button--primary o-button--block" @click.prevent="handleRegister" :disabled="loading">
                        <span v-if="loading">Loading...</span>
                        <span v-else>Register</span>
                    </button>
                </form>
                <hr>
                <div class="o-grid o-grid--middle">
                    <div class="o-grid__col u-8/12">
                        <span>Already have an account?</span>
                    </div>
                    <div class="o-grid__col u-4/12 u-text-right">
                        <a href="#" class="o-button o-button--primary-outlined o-button--small" @click.prevent="openLoginModal">Log in</a>
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
            loading: false,
            showModal: false,
            registerWithEmail: false,
            form: new Form({
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
                gender: null,
                city: null,
                birthday: {
                    day: '',
                    month: '',
                    year: ''
                }
            })
        }
    },
    computed: {
        months() {
            return moment.monthsShort()
        },
        years() {
            var years = [];
            for (var i = moment().year(); i >= 1960; i--) {
                years.push(i);
            }
            return years;
        },
        hasErrorBirthday() {
            return this.form.errors.has('birthday.day') && this.form.errors.has('birthday.month') && this.form.errors.has('birthday.year')
        }
    },
    mounted(){
        Event.listen("show-register-modal", (e) => {
            this.openModal(e);
        });
        Event.listen("hide-register-modal", (e) => {
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
        openRegisterEmailModal(e){
            this.registerWithEmail = true;
        },
        openLoginModal(e){
            this.showModal = false;
            setTimeout(() => {
                Event.fire("show-login-modal", e);
            });
        },
        handleRegister() {
            this.loading = true;
            this.register(this.form)
                .then(({data}) => {
                    this.loading = false;
                    this.showModal = false;
                    location.reload();
                })
                .catch(() => {
                    this.loading = false;
                });
        },
        ...mapActions([
              'register'
        ])
    }
}
</script>
