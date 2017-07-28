<template>
    <div class="c-input-suggestion" ref="container">
        <input type="text"
               :id="getOptions.inputId"
               :class="inputClass"
               :placeholder="getOptions.placeholder"
               autocomplete="off"
               v-model="keyword"
               @focus="onInputFocus"
               @input="fetchSuggestions"
               @blur="blurHandler">
        <div v-if="showInputSuggestions && !isEmptySuggestions" class="c-input-suggestion__suggestions">
            <template v-for="suggestion in suggestions">
                <a href="#"
                   class="c-input-suggestion__item"
                   @click.prevent="suggestionClicked($event, suggestion)"
                   v-html="suggestion.html">
                </a>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Object,
                default() {
                    return {}
                }
            },
            value: String
        },
        data() {
            return {
                keyword: '',
                showInputSuggestions: false,
                suggestions: [],
                defaultOptions: {
                    endpoint: '/search/suggest',
                    showDefaultSuggestionOnEmpty: false,
                    defaultSuggestions: {},
                    placeholder: "Search...",
                    inputId: '',
                    inputClass: '',
                }
            }
        },
        watch: {
            value(value) {
              if(!_.isEmpty(value) && (value !== undefined)) {
                  this.keyword = value;
              }
            },
            keyword(value) {
                this.$emit('input', value);
            }
        },
        computed: {
            isEmptySuggestions() {
                return this.suggestions.length <= 0;
            },
            inputClass() {
                return ['o-input', this.getOptions.inputClass];
            },
            getOptions() {
                return Object.assign({}, this.defaultOptions, this.options);
            }
        },
        methods: {
            onInputFocus(e) {
                e.stopPropagation();

//                if(this.showInputSuggestions) {
//                    this.closeSuggestions();
//                }

                if(_.isEmpty(e.target.value) && this.getOptions.showDefaultSuggestionOnEmpty) {
                    this.setSuggestions(this.getOptions.defaultSuggestions);

                    this.showSuggestions(e.target.value);
                }
            },
            suggestionClicked(e, suggestion) {
                this.$emit('input', suggestion.text);
                this.closeSuggestions();
                this.$emit('suggestionClicked', e, suggestion);
            },
            fetchSuggestions(e) {
                const value = e.target.value;
                axios.get(this.getOptions.endpoint+'?keyword='+value)
                    .then(({data}) => {
                        if(data.length <= 0) {
                            this.closeSuggestions();
                        } else {
                            if(!this.showInputSuggestions) {
                                this.showSuggestions(value);
                            }
                            this.setSuggestions(data, value);
                        }
                    });
            },
            showSuggestions(value) {

                this.showInputSuggestions = true;

                this.$refs.container.addEventListener('click', (e) => {
                    e.stopPropagation();
                });

//                document.addEventListener('click', (e) => {
//                    this.closeSuggestions();
//                });
            },
            closeSuggestions() {
                this.showInputSuggestions = false;
            },
            setSuggestions(data, search = '') {
                this.suggestions = data.map((item) => {
                    if(_.isEmpty(search)) {
                        item.html = item.text;
                    } else {
                        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        let re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                        item.html = item.text.replace(re, "<b>$1</b>");
                    }
                    return item;
                });
            },
            blurHandler() {
                try { var over_sb = document.querySelector('.c-input-suggestion__suggestions:hover'); } catch(e){ var over_sb = 0; }
                if (!over_sb) {
                    this.closeSuggestions();
                    setTimeout(() => { this.closeSuggestions(); }, 350); // hide suggestions on fast input
                } //else if (this !== document.activeElement) setTimeout(function(){ this.focus(); }, 20);
            }
        }
    }
</script>