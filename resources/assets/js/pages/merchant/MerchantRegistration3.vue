<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="3"></step>
            
            <div class="o-container o-container--third">
                <div class="c-card c-card--merchant">
                    <h2 class="o-heading u-m-x3">
                        Akses Operator
                    </h2>
                    <form action="" @submit.prevent="submit">
                        <div class="c-form-group">
                            <input 
                                type="text"
                                class="o-input"
                                placeholder="Masukan Email Operator"
                                name="email_operator"
                                v-model="dataMerchant.email_operator" 
                              />
                            <span v-if="validator.errors.has('email_operator')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>

                        </div>

                        <div class="c-form-group">
                            <input
                                name="password_operator"
                                v-model="dataMerchant.password_operator" 
                                type="password"
                                class="o-input"
                                placeholder="Password"
                            />
                            <span v-if="validator.errors.has('password_operator')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>

                        </div>

                        <div class="c-form-group">
                            <!-- <router-link to="/merchant/registration/success" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link> -->
                            <button type="submit" class="o-button o-button--primary o-button--block o-button--large">Next</button>
                        </div>

                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration/2"> < Kembali</router-link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Step from '../../components/StepTab.vue'
    import { Validator, ErrorBag } from 'vee-validate';

    export default {
        components: { Step },
        data() {
            return {
                dataMerchant: {
                    email_operator: '',
                    password_operator: ''
                },
                validator: new Validator({
                    email_operator: 'required|email',
                    password_operator: 'required'
                })
            }
        },
        methods: {
            validate(field, e) {
                this.validator.validate(field, e.target.value);
            },
            submit() {
                this.validator.validateAll({ email_operator: this.dataMerchant.email_operator, password_operator: this.dataMerchant.password_operator }).then(result => {
                    if (!result) {
                        return;
                        // validation failed.
                    }
                    router.push('/merchant/registration/success');
                    // window.location = '/merchant/registration/success';
                    // success stuff.
                }).catch(() => {
                    console.log('error')
                    // something went wrong (non-validation related).
                });
            },
        }
    }
</script>