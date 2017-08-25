<template>
    <div class="l-auth">
        <transition name="slide" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
            <div v-if="hasErrors" class="c-alert c-alert--error c-alert--fixed">
                Ups, sepertinya Anda melewatkan sesuatu.
            </div>
        </transition>
        <div class="l-auth__box">
            <logo class="l-auth__logo u-mb-x6"></logo>
            <h3 class="u-mb-x4 u-text-center">Silahkan lengkapi data diri Anda</h3>
            <form class="sign-form" method="POST">
                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('name')}]">
                    <input type="text" name="name" v-model="form.name" class="o-input" placeholder="Full Name">
                    <!--<span class="c-form-feedback" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>-->
                </div>
                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('email')}]">
                    <input type="email" name="email" v-model="form.email" class="o-input" placeholder="Email Adress">
                    <!--<span class="c-form-feedback" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>-->
                </div>
                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('gender')}]">
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
                    <!--<span class="c-form-feedback" v-if="form.errors.has('gender')" v-text="form.errors.get('gender')"></span>-->
                </div>
                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('city')}]">
                    <input type="text" name="city" v-model="form.city" class="o-input" placeholder="City">
                    <!--<span class="c-form-feedback" v-if="form.errors.has('city')" v-text="form.errors.get('city')"></span>-->
                </div>
                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('address')}]">
                    <textarea name="address" rows="3" class="o-textarea" v-model="form.address" placeholder="Alamat"></textarea>
                    <!--<span class="c-form-feedback" v-if="form.errors.has('address')" v-text="form.errors.get('address')"></span>-->
                </div>
                <div class="o-grid o-grid--middle">
                    <div class="o-grid__col u-4/12">
                        <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('birthday.day')}]">
                            <select name="birthday[day]" class="o-input" v-model="form.birthday.day">
                                <option value="" disabled hidden>Day</option>
                                <option v-for="i in 31" :value="i">{{ i }}</option>
                            </select>
                            <!--<span class="c-form-feedback" v-if="form.errors.has('birthday.day')" v-text="form.errors.get('birthday.day')"></span>-->
                        </div>
                    </div>
                    <div class="o-grid__col u-4/12">
                        <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('birthday.month')}]">
                            <select name="birthday[month]" class="o-input" v-model="form.birthday.month">
                                <option value="" disabled hidden>Month</option>
                                <option v-for="month in months" :value="month">{{ month }}</option>
                            </select>
                            <!--<span class="c-form-feedback" v-if="form.errors.has('birthday.month')" v-text="form.errors.get('birthday.month')"></span>-->
                        </div>
                    </div>
                    <div class="o-grid__col u-4/12">
                        <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('birthday.year')}]">
                            <select name="birthday[year]" class="o-input" v-model="form.birthday.year">
                                <option value="" disabled hidden>Year</option>
                                <option v-for="year in years" :value="year">{{ year }}</option>
                            </select>
                            <!--<span class="c-form-feedback" v-if="form.errors.has('birthday.year')" v-text="form.errors.get('birthday.year')"></span>-->
                        </div>
                    </div>
                </div>

                <div :class="['c-form-group', 'has-no-message', {'has-error' : form.errors.has('phone')}]">
                    <input type="number" name="phone" v-model="form.phone" class="o-input" placeholder="Phone" maxlength="12">
                    <!--<span class="c-form-feedback" v-if="form.errors.has('phone')" v-text="form.errors.get('phone')"></span>-->
                </div>
                <button type="button" class="o-button o-button--primary o-button--block" @click.prevent="handleRegister" :disabled="loading">
                    <span v-if="loading">Loading...</span>
                    <span v-else>Save</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import Facebook from '../components/auth/Facebook.vue'
    import Form from '../utils/form'
    import Google from '../components/auth/Google.vue'
    import Sign from '../components/auth/Sign.vue'
    import Logo from '../objects/Logo.vue'

    export default {
        components: { Facebook, Google, Sign, Logo },
        data() {
            return {
                loading: false,
                showModal: false,
                registerWithEmail: false,
                hasErrors: false,
                form: new Form({
                    id: null,
                    name: null,
                    email: null,
                    gender: null,
                    city: null,
                    address: null,
                    birthday: {
                        day: '',
                        month: '',
                        year: ''
                    },
                    phone: ''
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
        watch: {
            '$route': 'fetchUser',
            hasErrors() {
                setTimeout(() => {
                    this.hasErrors = false;
                }, 3000);
            }
        },
        mounted(){
            this.fetchUser();
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
                this.form.submit('put', `/api/user/${this.form.id}`)
                    .then(({data}) => {
                        this.loading = false;
                        router.push(this.$route.query.redirect);
                    })
                    .catch(() => {
                        this.hasErrors = true;
                        this.loading = false;
                    });
            },
            fetchUser() {
              axios.get('api/user').then(({data}) => {
                  this.form.id = data.id;
                  this.form.name = data.name;
                  this.form.email = data.email;
              });
            },
            ...mapActions([
                'register'
            ])
        }
    }
</script>
