<template>
    <form :class="['c-search', {'c-search--inline': inline, 'is-shown': showSearchForm}]"
          @submit.prevent="submit">
        <button type="button" class="c-search__button iconim iconim-search-close" @click="toggleSearch"></button>
        <div class="c-search__form">
            <div :class="['c-form-group', {'has-error': validator.errors.has('city')}]">
                <input ref="input"
                       type="text"
                       :class="['o-input', inputSize]"
                       v-model="searchQuery.city"
                       placeholder="Pilih Lokasi"
                       name="city"
                       @keypress="preventEnter"
                       @change="validate('city', $event)">
                <span v-if="validator.errors.has('city')" class="c-form-feedback">Wajib diisi.</span>
            </div>
            <div :class="['c-form-group', {'has-error': validator.errors.has('keyword')}]">
                <input-suggestion
                        :options="suggestionOptions.category"
                        v-model="searchQuery.keyword"
                        @suggestionClicked="suggestionClicked"
                        @change="validate('keyword', $event)">
                </input-suggestion>
                <span v-if="validator.errors.has('keyword')" class="c-form-feedback">Wajib diisi.</span>
            </div>
            <div class="c-form-group">
                <slot :classes="['o-button', 'o-button--primary', 'o-button--block', btnSize].join(' ')"></slot>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {loaded} from '../api/map/loader'

    import InputSuggestion from './InputSuggestion.vue'

    import { Validator, ErrorBag } from 'vee-validate';

    export default {
        components: { InputSuggestion },
        props: {
            size: {type: String},
            inline: {type: Boolean, default: true},
            customSubmit: {type: Boolean, default: false }
        },
        data() {
            return {
                showSearchForm: false,

                searchQuery: {
                    location: '',
                    city: '',
                    keyword: '',
                    query: '',
                    radius: 5000,
                    modified: false
                },
                validator: new Validator({
                    city: 'required',
                    keyword: 'required'
                })
            }
        },
        computed: {
//            ...mapGetters([
//                'query'
//            ]),
            query() {
              let q = this.searchQuery;

              return q.keyword.replace(/\s/g, '+')+'+in+'+q.city.replace(/\s/g, '+');
            },
            inputSize() {
                return !_.isEmpty(this.size) ? 'o-input--' + this.size : null;
            },
            btnSize() {
                return !_.isEmpty(this.size) ? 'o-button--' + this.size : null;
            },
            suggestionOptions() {
                return {
                    city: {
                        endpoint: '/api/search/suggest/location',
                        placeholder: 'Pilih Kota',
                        inputId: 'city',
                        inputClass: this.inputSize
                    },
                    category: {
                        endpoint: '/api/search/suggest/keyword',
                        placeholder: 'Nyari Apa?',
                        inputClass: this.inputSize,
                        showDefaultSuggestionOnEmpty: true,
                        defaultSuggestions: [
                            { text: "makan"},
                            { text: "kopi"},
                            { text: "salon"},
                            { text: "spa"},
                            { text: "barbershop"},
                            { text: "futsal"},
                            { text: "gym"}
                        ]
                    }
                }
            }
        },
        watch: {
          '$route': 'fetchQuery'
        },
        methods: {
            submit(e) {
                this.validator.validateAll({ city: this.searchQuery.city, keyword: this.searchQuery.keyword }).then(result => {
                    if (!result) {
                        return;
                        // validation failed.
                    }

                    if(this.customSubmit) {
                        this.$emit('submit', this.query, this.searchQuery, e);
                    } else {
                        window.location = '/search/'+this.query;
                    }
                }).catch(() => {
                    console.log('error')
                    // something went wrong (non-validation related).
                });
            },
            validate(field, e) {
                this.validator.validate(field, e.target.value);
            },
            geolocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
                } else {
                    //this.getCurrentCity();
                }
            },
            getCurrentPosition(position) {
                loaded.then(() => {
                    location.latitude = position.coords.latitude;
                    location.longitude = position.coords.longitude;
                    var geocoder = new google.maps.Geocoder();
                    var latLng = new google.maps.LatLng(location.latitude, location.longitude);
                    this.searchQuery.location = location.latitude+','+location.longitude;
                    if (geocoder) {
                        geocoder.geocode({'latLng': latLng}, (results, status) => {
                            if (status === google.maps.GeocoderStatus.OK) {
                                let result = results.filter(function (item) {
                                    return item.types[0] == 'locality';
                                });

                                if (_.isEmpty(this.location)) {
                                    this.location = !_.isEmpty(result) ? result[0].address_components[0].long_name : '';
                                }
                            }
                            else {
                                console.log("Geocoding failed: " + status);
                            }
                        });
                    }
                });
            },
            getCurrentCity() {
                if (typeof Cookies.get('user-city') === 'undefined') {
                    //Event.fire('show-cities-modal');
                } else {
                    this.$store.commit('SET_LOCATION', Cookies.get('user-city'));
                }
            },
            toggleSearch() {
                if (this.showSearchForm) {
                    this.showSearchForm = false;
                    iconim.off('search-close');
                } else {
                    this.showSearchForm = true;
                    iconim.on('search-close');
                }
            },
            suggestionClicked() {

            },
            onCityChanged(e) {
                this.modified = true;
            },
            preventEnter(e) {
                if(e.keyCode == 13) {
                    e.preventDefault();
                }
            },
            googleSearchSuggestion() {
                loaded.then(() => {
                    const options = {
                        types: ['(cities)'],
                        componentRestrictions: {country: "id"}
                    };

                    const defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-0.789275, 113.92132700000002));

                    const input = this.$refs.input;
                    const searchBox = new google.maps.places.Autocomplete(input, options);

                    searchBox.addListener('place_changed', () => {

                        let location = searchBox.getPlace();

                        this.searchQuery.city = location.formatted_address;
                    });
                });
            },
            extractQuery(query) {
                if(!query) {
                    return {};
                } else {
                    query = query.split('in');

                    query = query.map(item => {
                        item = item.replace(/\+/g, ' ', item);
                        return item.trim();
                    });

                    return { keyword: query[0], city: query[1] };
                }
            },
            fetchQuery() {
                let query = this.extractQuery(this.$route.params.query);
                Object.assign(this.searchQuery, query);
            }
        },
        mounted() {
            this.fetchQuery();

            this.geolocation();

            this.googleSearchSuggestion();

            Event.listen('toggle-search', () => {
                this.toggleSearch();
            });
        }
    }
</script>
