<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="2"></step>
            <div class="tab-1">

                <div class="o-container o-container--fit">
                    <div class="c-card c-card--merchant">
                        <h2 class="o-heading u-m-x3">
                            Karakteristik Merchant
                        </h2>
                        <form action="" @submit.prevent="submit">
                            <!--<div class="o-grid c-form-group">-->
                                <!--<div class="o-grid__col u-6/12@lg">-->
                                    <!--<input -->
                                        <!--type="text"-->
                                        <!--placeholder="Kategori"-->
                                        <!--class="o-input"-->
                                        <!--name="kategori"-->
                                        <!--v-model="form.data.kategori"-->
                                    <!--&gt;-->
                                    <!--<span v-if="validator.errors.has('kategori')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>-->
                                <!--</div>-->
                                <!--<div class="o-grid__col u-6/12@lg">-->
                                    <!--<input -->
                                        <!--type="text"-->
                                        <!--placeholder="Keyword"-->
                                        <!--class="o-input"-->
                                        <!--name="keyword"-->
                                        <!--v-model="form.data.keyword"-->
                                    <!--&gt;-->
                                    <!--<span v-if="validator.errors.has('keyword')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>-->
                                <!--</div>-->
                            <!--</div>-->
                            <div :class="['c-form-group', {'has-error': form.errors.has('keywords')}]">
                                <label for="keywords"></label>
                                <input
                                    id="keywords"
                                    type="text"
                                    placeholder="Keywords"
                                    class="o-input"
                                    name="keywords"
                                    :value="form.data.keyword"
                                    @input="updateField('keywords', $event.target.value)"
                                    @change="form.validate('keywords', $event.target.value)">
                                <span v-if="form.errors.has('keywords')" class="c-form-feedback">Keyword harus diisi.</span>
                            </div>

                            <div :class="['c-form-group', {'has-error': form.errors.has('payment_method')}]">
                                <label for="payment_method">Pembayaran</label>
                                <div id="payment_method" class="o-grid">
                                    <div class="o-grid__col u-3/12@lg">
                                        <div class="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Card & Cash"
                                                    name="payment_method"
                                                    :checked="form.data.payment_method === 'Card & Cash'"
                                                    @click="updateField('payment_method', $event.target.value)"
                                                > Card & Cash
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-3/12@lg">
                                        <div class="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="Cash Only"
                                                    name="payment_method"
                                                    :checked="form.data.payment_method === 'Cash Only'"
                                                    @click="updateField('payment_method', $event.target.value)"
                                                > Cash Only
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <span v-if="form.errors.has('payment_method')" class="c-form-feedback">Pilih Salah Satu.</span>
                            </div>

                            <div class="c-form-group">
                                <label for="opening_hours">Jam Buka</label>
                                <textarea 
                                    placeholder="Contoh: Buka Senin - Sabtu 24jam"
                                    name="jam_buka"
                                    :value="form.data.opening_hours"
                                    @input="updateField('opening_hours', $event.target.value)"
                                    @change="form.validate('opening_hours', $event.target.value)"
                                    id="opening_hours"
                                    class="o-textarea o-textarea__expand"
                                    cols="30"
                                    rows="10">
                                </textarea>
                                <span v-if="form.errors.has('opening_hours')" class="c-form-feedback c-form-feedback__merchant">Jam buka harus diisi.</span>
                            </div>
                            
                            <div class="c-form-group">
                                <button type="submit" class="o-button o-button--primary o-button--block o-button--large">Next</button>
                            </div>

                        </form>


                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration/1"> < Kembali</router-link>
                        </div>

                    </div>
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
                        keywords: 'required',
                        payment_method: 'required',
                        opening_hours: 'required'
                    }
                }
            }
        },
        methods: {
            onSuccess() {
                router.push('/merchant/registration/3');
            }
        }
    })
</script>