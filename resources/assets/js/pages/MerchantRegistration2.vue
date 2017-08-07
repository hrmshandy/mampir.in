<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <h2 class="o-heading u-m-x3">
                Lokasi Merchant
            </h2>
            <div class="tab-2">

                <places name="address">
                </places>

                <div class="c-form-group">
                    <router-link to="/merchant/registration/3" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Places from '../components/PlacesSearch.vue'

    export default {
        components: { Places }
    }
</script>