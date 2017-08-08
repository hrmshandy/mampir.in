<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="4"></step>
            <h2 class="o-heading u-m-x3">
                Tambah Operator
            </h2>

            <div class="c-form-group">
                <input type="text" class="o-input o-input--large" placeholder="Masukan Email Operator"/>
            </div>

            <div class="c-form-group">
                <input type="password" class="o-input o-input--large" placeholder="Password"/>
            </div>

            <div class="c-form-group">
                <router-link to="/merchant/registration/success" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Step from '../components/StepTab.vue'
    export default {
        components: { Step }
    }
</script>