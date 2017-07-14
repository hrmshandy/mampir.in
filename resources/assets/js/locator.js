import './bootstrap'

window.Vue = require('vue');

Vue.component('select2', {
    props: ['options', 'value', 'settings'],
    template: '#select2-template',
    mounted: function () {
        var vm = this;

        const settings = $.extend({}, { data: this.options }, this.settings);
        $(this.$el)
        // init select2
            .select2(settings)
            .val(this.value)
            .trigger('change')
            // emit event on change.
            .on('change', function () {
                vm.$emit('input', $(vm.$el).val())
            })
    },
    watch: {
        value: function (value) {
            // update value
            //$(this.$el).val(value).trigger('change');
        },
        options: function (options) {
            // update options
            $(this.$el).select2({ data: options })
        }
    },
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    }
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            form: {
                city_id: 0,
                area: '',
                categories: [],
                query: ''
            },
            results: [],
            hasResult: false,
            searching: false,
            saving: false,
            ctSettings: {
                tags: true
            }
        }
    },
    watch: {
      results(value) {
          if(!value.length) {
              this.resetForm();
          }
      }
    },
    methods: {
        search() {
            this.searching = true;
            axios.post('/_admin/locator/search', this.form).then(({ data }) => {
                this.searching = false;
                this.hasResult = true;
                this.results = data.map(item => {
                    item.categories = this.form.categories;
                    item.city_id = this.form.city_id;
                    item.area = this.form.area;
                    item.saving = false;
                    return item;
                });
                console.log(data);
            }).catch((error) => {
                this.searching = false;
                console.log(error);
            });
        },
        saveAll() {
            this.saving = true;
            axios.post('/_admin/locator/all', {'venues': this.results}).then(({ data }) => {
                this.results = [];
                this.saving = false;
                this.hasResult = false;
                console.log(data);
            }).catch((error) => {
                this.saving = false;
                this.hasResult = false;
                console.log(error);
            });
        },
        save(index) {
            let data = this.results[index];
            data.saving = true;
            axios.post('/_admin/locator', data).then(() => {
                data.saving = false;
                this.results.splice(index, 1);
                if(!this.results.length) {
                    this.hasResult = false;
                }
            }).catch((error) => {
                data.saving = false;
                console.log(error);
            });
        },
        ignore(index) {
            this.results.splice(index, 1);
            if(!this.results.length) {
                this.hasResult = false;
            }
        },
        resetForm() {
            this.form.category = '';
            this.form.query = '';
        }
    }
});