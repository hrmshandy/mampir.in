<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="1"></step>
            <div class="tab-1">
                <div class="o-container o-container--fit">
                    <div class="c-card c-card--merchant">
                        <h2 class="o-heading u-m-x3">
                            Informasi Basic
                        </h2>
                        <form action="" @submit.prevent="submit">
                            <div class="c-form-group c-form-group--mg2">
                                <input 
                                    v-model="dataMerchant.name"
                                    type="text" 
                                    name="name" 
                                    id="" 
                                    placeholder="Nama Tempat"
                                    autocomplete="off"
                                    class="o-input">
                                <span v-if="validator.errors.has('name')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                            </div>
                            <div class="c-form-group">
                                <!-- <dropzone
                                    id="myVueDropzone"
                                    ref="reviewUpload"
                                    url="/api/merchant/upload"
                                    >
                                    Optional parameters if any!
                                    <input type="hidden" name="token" value="xxx">
                                </dropzone> -->

                                <label for="" class="u-weight-bold u-mb-x1">Upload Logo</label>
                                <image-upload v-model="dataMerchant.images"></image-upload>
                                <span v-if="validator.errors.has('images')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>


                            </div>
                            <places name="address" v-model="dataMerchant.address">
                            </places>
                            <label for="" class="u-weight-bold u-mb-x1">Kontak </label>
                            <div class="c-form-group">
                                <input 
                                    type="text" 
                                    name="phone" 
                                    v-model="dataMerchant.phone"
                                    id="" 
                                    placeholder="No Telp"
                                    autocomplete="off"
                                    class="o-input"
                                >
                                <span v-if="validator.errors.has('phone')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                            </div>
                            <div class="c-form-group">
                                <input 
                                    type="text"
                                    id=""
                                    name="email"
                                    v-model="dataMerchant.email"
                                    placeholder="Alamat Email"
                                    autocomplete="off"
                                    class="o-input"
                                >
                                <span v-if="validator.errors.has('email')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                            </div>
                            <div class="c-form-group">
                                <input 
                                    type="text"
                                    id=""
                                    v-model="dataMerchant.website"
                                    name="website"
                                    placeholder="Website"
                                    autocomplete="off"
                                    class="o-input"
                                >
                                <span v-if="validator.errors.has('website')" class="c-form-feedback c-form-feedback__merchant">Wajib diisi.</span>
                            </div>
                        
                            <div class="c-form-group u-mt-x5">
                                <!-- <router-link @click="submit()" to="/merchant/registration/2" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link> -->

                                <button type="submit" class="o-button o-button--primary o-button--block o-button--large">Next</button>
                            </div>
                        
                        </form>


                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration"> < Kembali</router-link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Dropzone from 'vue2-dropzone'
    import Places from '../../components/PlacesSearch.vue'
    import Step from '../../components/StepTab.vue'
    import ImageUpload from '../../components/ImageUpload.vue'
    import { Validator, ErrorBag } from 'vee-validate';

    export default {
        components: { Places, Dropzone, Step, ImageUpload },
        data() {
            return {
                activeTab: 1,
                dataMerchant: {
                    name: '',
                    address: '',
                    email: '',
                    website: '',
                    images: '',
                    phone: ''
                },
                validator: new Validator({
                    name: 'required',
                    address: 'required',
                    email: 'required|email',
                    phone: 'required',
                    images: 'required'
                })
            }
        },
        methods: {
            template() {
                return `
                  <div class="dz-preview dz-file-preview">
                      <div class="dz-image" style="width: 100px;height: 100px">
                          <img data-dz-thumbnail /></div>
                      <div class="dz-details">
                        <div class="dz-size"><span data-dz-size></span></div>
                        <div class="dz-filename"><span data-dz-name></span></div>
                      </div>
                      <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                      <div class="dz-error-message"><span data-dz-errormessage></span></div>
                      <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                      <div class="dz-error-mark"><i class="fa fa-close"></i></div>
                  </div>
              `;
            },
            validate(field, e) {
                this.validator.validate(field, e.target.value);
            },
            submit() {
                this.validator.validateAll({ name: this.dataMerchant.name, images: this.dataMerchant.images, address: this.dataMerchant.address, email: this.dataMerchant.email, phone: this.dataMerchant.phone }).then(result => {
                    if (!result) {
                        return;
                        // validation failed.
                    }
                    // window.location = '/merchant/registration/2';
                    router.push('/merchant/registration/2');
                    // success stuff.
                }).catch(() => {
                    console.log('error')
                    // something went wrong (non-validation related).
                });
            },
        }
    }

</script>