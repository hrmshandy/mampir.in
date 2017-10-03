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
                            <div :class="['c-form-group', 'c-form-group--mg2', {'has-error': form.errors.has('name')}]">
                                <label for="name" class="u-weight-bold u-mb-x1">Nama Tempat</label>
                                <input
                                    id="name"
                                    :value="form.data.name"
                                    @input="updateField('name', $event.target.value)"
                                    @change="form.validate('name', $event.target.value)"
                                    type="text" 
                                    name="name"
                                    placeholder="Nama Tempat"
                                    autocomplete="off"
                                    class="o-input">
                                <span v-if="form.errors.has('name')" class="c-form-feedback">Nama Tempat harus diisi.</span>
                            </div>
                            <div :class="['c-form-group', {'has-error': form.errors.has('logo')}]">
                                <label for="logo" class="u-weight-bold u-mb-x1">Upload Logo</label>
                                <image-upload
                                    id="logo"
                                    :value="form.data.logo"
                                    :auto-processed="true"
                                    @input="(value) => updateField('logo', value)"
                                    @change="(value) => form.validate('name', value)">
                                </image-upload>
                                <span v-if="form.errors.has('logo')" class="c-form-feedback">Logo harus diisi.</span>
                            </div>
                            <div>
                                <places
                                    name="address"
                                    :location="location"
                                    @input="(address, {lat, lng}) => updateFields({address, lat, lng})"
                                    @change="(address, {lat, lng}) => form.validate('address', address)">
                                </places>
                                <span v-if="form.errors.has('address')" class="c-form-feedback">Alamat harus diisi.</span>
                            </div>

                            <label for="contact" class="u-weight-bold u-mb-x1">Kontak </label>
                            <div id="contact">
                                <div :class="['c-form-group', {'has-error': form.errors.has('phone_number')}]">
                                    <input
                                        type="text"
                                        name="phone_number"
                                        :value="form.data.phone_number"
                                        @input="updateField('phone_number', $event.target.value)"
                                        @change="form.validate('phone_number', $event.target.value)"
                                        placeholder="No.Telephone"
                                        autocomplete="off"
                                        class="o-input">
                                    <span v-if="form.errors.has('phone_number')" class="c-form-feedback">No.Telephone harus diisi.</span>
                                </div>
                                <div :class="['c-form-group', {'has-error': form.errors.has('email')}]">
                                    <input
                                        type="text"
                                        name="email"
                                        :value="form.data.email"
                                        @input="updateField('email', $event.target.value)"
                                        @change="form.validate('email', $event.target.value)"
                                        placeholder="Alamat Email"
                                        autocomplete="off"
                                        class="o-input">
                                    <span v-if="form.errors.has('email:required')" class="c-form-feedback">Email harus diisi.</span>
                                    <span v-if="form.errors.has('email:email')" class="c-form-feedback">Email yang Anda masukan tidak valid.</span>
                                </div>
                                <div class="c-form-group">
                                    <input
                                        type="text"
                                        :value="form.data.website"
                                        @input="updateField('website', $event.target.value)"
                                        @change="form.validate('website', $event.target.value)"
                                        name="website"
                                        placeholder="Website"
                                        autocomplete="off"
                                        class="o-input">
                                </div>
                            </div>
                        
                            <div class="c-form-group u-mt-x5">
                                <button type="submit" class="o-button o-button--primary o-button--block o-button--large">Next</button>
                            </div>
                        </form>


                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/claim"> < Kembali</router-link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import MerchantRegistration from '../../merchant-registration'

    const Places = () => import('../../components/PlacesSearch.vue')
    const ImageUpload = () => import('../../components/ImageUpload.vue')

    export default MerchantRegistration.extend({
        components: { Places, ImageUpload },
        data() {
            return {
                activeTab: 1,
                form: {
                    rules: {
                        name: 'required',
                        address: 'required',
                        email: 'required|email',
                        phone_number: 'required',
                        logo: 'required'
                    }
                }
            }
        },
        computed: {
            location() {
                return {
                    address: this.form.data.address,
                    lat: this.form.data.lat,
                    lng: this.form.data.lng
                };
            }
        },
        methods: {
            onSuccess() {
                router.push('/merchant/registration/2');
            }
        }
    })

</script>