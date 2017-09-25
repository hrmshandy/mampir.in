import Step from './components/StepTab.vue'

import { Validator, ErrorBag } from 'vee-validate';
import Form from './utils/form2';

export default Vue.extend({
    components: { Step },
    data() {
        return {
            form: {
                data: this.$store.state.merchant.merchant,
                rules: {},
                errors: new ErrorBag(),
                validate: (field, value) => {}
            }
        }
    },
    computed: {
        merchantState() {
          return this.$store.state.merchant.merchant
        }
    },
    methods: {
        updateField(field, value) {
            this.$store.commit('UPDATE_MERCHANT_FIELD', {field, value});
        },
        updateFields(obj) {
            this.$store.commit('UPDATE_MERCHANT', obj);
        },
        submit() {
            const form = new Form(this.form.data, this.form.rules);
            this.form.errors = form.errors;
            this.form.validate = (field, value) => form.validate(field, value);

            form.validateAll(() => {
                localStorage.setItem("merchant", JSON.stringify(this.form.data));
                this.onSuccess();
            });
        },
    },
    mounted() {
        const currentMerchant = localStorage.getItem("merchant");
        if(currentMerchant) {
            this.updateFields(JSON.parse(currentMerchant));
        }
    }
});