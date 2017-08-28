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
                            <div class="o-grid c-form-group">
                                <div class="o-grid__col u-6/12@lg">
                                    <input 
                                        type="text"
                                        placeholder="Kategori"
                                        class="o-input"
                                        name="kategori"
                                        v-model="dataMerchant.kategori" 
                                    >
                                    <span v-if="validator.errors.has('kategori')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                                </div>
                                <div class="o-grid__col u-6/12@lg">
                                    <input 
                                        type="text"
                                        placeholder="Keyword"
                                        class="o-input"
                                        name="keyword"
                                        v-model="dataMerchant.keyword" 
                                    >
                                    <span v-if="validator.errors.has('keyword')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                                </div>
                            </div>

                            <div class="c-form-group">
                                <label for="">Pembayaran</label>
                                    <div class="o-grid">
                                        <div class="o-grid__col u-3/12@lg">
                                            <div class="radio">
                                                <label>
                                                    <input 
                                                        type="radio"
                                                        value="1"
                                                        name="pembayaran"
                                                        v-model="dataMerchant.pembayaran"
                                                    > Card & Cash
                                                </label>
                                            </div>
                                        </div>
                                        <div class="o-grid__col u-3/12@lg">
                                            <div class="radio">
                                                <label>
                                                    <input 
                                                        type="radio"
                                                        value="2"
                                                        v-model="dataMerchant.pembayaran"
                                                        name="pembayaran"
                                                    > Cash Only
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <span v-if="validator.errors.has('pembayaran')" class="c-form-feedback c-form-feedback__merchant">Pilih Salah Satu.</span>

                            </div>

                            <!-- <div class="c-form-group">
                                <div class="o-grid">
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Senin
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Selasa
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Rabu
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Kamis
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Jumat
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Sabtu
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            
                            <div class="c-form-group">
                                <label for="">Jam Buka</label>
                                <textarea 
                                    placeholder="Contoh: Buka Senin - Sabtu 24jam"
                                    name="jam_buka"
                                    v-model="dataMerchant.jam_buka"
                                    id="jamBuka"
                                    class="o-textarea o-textarea__expand"
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <span v-if="validator.errors.has('jam_buka')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                                <!-- 
                                <tabs>
                                    <tab name="Senin">
                                        <Tabscontent></Tabscontent>
                                    </tab>
                                </tabs> -->
                            </div>
                            
                            <div class="c-form-group">
                                <!-- <router-link to="/merchant/registration/3" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link> -->

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
    import Step from '../../components/StepTab.vue'
    import {Tabs, Tab} from 'vue-tabs-component'
    import { Validator, ErrorBag } from 'vee-validate';

    export default {
        components: { Step, Tabs, Tab },
        data() {
            return {
                dataMerchant: {
                    kategori: '',
                    keyword: '',
                    jam_buka: '',
                    pembayaran: ''
                },
                validator: new Validator({
                    kategori: 'required',
                    keyword: 'required',
                    jam_buka: 'required',
                    pembayaran: 'required'
                }),
                columnTimes: [{
                    from : '',
                    to : ''
                }]
            }
        },
        methods: {
            validate(field, e) {
                this.validator.validate(field, e.target.value);
            },
            submit() {
                this.validator.validateAll({ kategori: this.dataMerchant.kategori, keyword: this.dataMerchant.keyword, jam_buka: this.dataMerchant.jam_buka, pembayaran: this.dataMerchant.pembayaran }).then(result => {
                    if (!result) {
                        return;
                        // validation failed.
                    }
                    // window.location = '/merchant/registration/success';
                    router.push('/merchant/registration/3');
                    // success stuff.
                }).catch(() => {
                    console.log('error')
                    // something went wrong (non-validation related).
                });
            },
        }
    }
</script>