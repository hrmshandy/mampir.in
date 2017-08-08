<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="2"></step>
            <h2 class="o-heading u-m-x3">
                Lokasi Merchant
            </h2>
            <div class="tab-2">
                <form action="">
                    <places name="address">
                    </places>

                    <div class="c-form-group u-mt-x5">
                        <router-link to="/merchant/registration/3" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    import Places from '../../components/PlacesSearch.vue'
    import Step from '../../components/StepTab.vue'

    export default {
        components: { Places, Step }
    }
</script>