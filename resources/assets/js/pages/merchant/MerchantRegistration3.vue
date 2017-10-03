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
                            <label for="operator_name">Nama</label>
                            <input
                                    type="text"
                                    id="operator_name"
                                    class="o-input"
                                    placeholder="Email"
                                    name="operator_name"
                                    :value="form.data.operator_name"
                                    @input="updateField('operator_name', $event.target.value)"
                                    @change="form.validate('operator_name', $event.target.value)"
                            />
                            <span v-if="form.errors.has('operator_name')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>

                        </div>

                        <div class="c-form-group">
                            <label for="operator_email">Email</label>
                            <input 
                                type="text"
                                id="operator_email"
                                class="o-input"
                                placeholder="Email"
                                name="operator_email"
                                :value="form.data.operator_email"
                                @input="updateField('operator_email', $event.target.value)"
                                @change="form.validate('operator_email', $event.target.value)"
                              />
                            <span v-if="form.errors.has('operator_email')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>

                        </div>

                        <div class="c-form-group">
                            <label for="operator_password">Email</label>
                            <input
                                name="operator_password"
                                type="password"
                                id="operator_password"
                                class="o-input"
                                placeholder="Password"
                                :value="form.data.operator_password"
                                @input="updateField('operator_password', $event.target.value)"
                                @change="form.validate('operator_password', $event.target.value)"
                            />
                            <span v-if="form.errors.has('operator_password')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>

                        </div>

                        <div class="c-form-group">
                            <button type="submit" class="o-button o-button--primary o-button--block o-button--large" :disabled="loading">
                                <span v-if="loading"><loading color="#fff"></loading> Loading...</span>
                                <span v-else>Next</span>
                            </button>
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
    import MerchantRegistration from '../../merchant-registration'

    export default MerchantRegistration.extend({
        data() {
            return {
                form: {
                    rules: {
                        operator_email: 'required',
                        operator_password: 'required'
                    }
                },
                loading: false
            }
        },
        methods: {
            onSuccess(form) {
                this.loading = true;
                axios.post('/api/venue', this.form.data).then(({data}) => {
                    setTimeout(() => {
                        this.loading = false;
                        router.push('/merchant/registration/success');
                    }, 1000);
                }).catch( err => {
                    this.loading = false;
                    swal('Oops...', 'Something went wrong!', 'error');
                });
            }
        }
    })
</script>