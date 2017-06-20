import './bootstrap'

const app = new Vue({
    el: '#app',
    data() {
        return {
            form: {
                category: '',
                query: ''
            },
            results: [],
            hasResult: false,
            searching: false,
            saving: false
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
            axios.post('/admin/locator/search', this.form).then(({ data }) => {
                this.searching = false;
                this.hasResult = true;
                this.results = data.map(item => {
                    item.category = this.form.category;
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
            axios.post('/admin/locator/all', {'venues': this.results}).then(({ data }) => {
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
            axios.post('/admin/locator', data).then(() => {
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