<template>
    <div class="o-section">
        <div class="o-container">

            <div class="o-merchant-thumbnails u-mb-x6">
                <div class="merchant-logo u-mb-x1">
                    <img :src="`/storage/merchant/logo/${merchantState.logo}`" :alt="merchantState.name+' | Mampir.in'" width="100">
                </div>
                <h2 class="o-heading u-text-center">
                    {{ merchantState.name }}
                </h2>
            </div>

            <h1 class="o-heading u-text-center">
                Merchant Anda Sudah Terdaftar
            </h1>

            <div class="c-form-group u-text-center mg-top-1">
                <a :href="`//mechant.${domain}`" class="o-button o-button--primary o-button--mincontent o-button--large">Ke halaman merchant saya</a>
            </div>
        </div>
    </div>
</template>

<script>
    import MerchantRegistration from '../../merchant-registration'

    export default MerchantRegistration.extend({
        computed: {
            domain() {
                return window.App.domain;
            }
        }
    })
</script>