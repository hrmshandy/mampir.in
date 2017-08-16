<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="3"></step>
            
            <div class="o-container o-container--third">
                <div class="c-card c-card--merchant">
                    <h2 class="o-heading u-m-x3">
                        Akses Operator
                    </h2>
                    <form action="">
                        <div class="c-form-group">
                            <input type="text" class="o-input o-input--large" placeholder="Masukan Email Operator"/>
                        </div>

                        <div class="c-form-group">
                            <input type="password" class="o-input o-input--large" placeholder="Password"/>
                        </div>

                        <div class="c-form-group">
                            <router-link to="/merchant/registration/success" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
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
    export default {
        components: { Step }
    }
</script>