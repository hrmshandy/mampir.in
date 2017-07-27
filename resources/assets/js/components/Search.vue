<template>
    <form :class="['c-search', {'c-search--inline': inline, 'is-shown': showSearchForm}]" @submit.prevent="submit">
        <button type="button" class="c-search__button iconim iconim-search-close" @click="toggleSearch"></button>
        <div class="c-search__form">
            <div class="c-form-group">
                <!-- <select :class="['o-input', inputSize]" v-model="location" id="location">
                    <option value="">Kota</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                </select> -->
                <input type="text"
                       :class="['o-input', inputSize]"
                       id="location"
                       placeholder="Pilih Lokasi"
                       v-model="location">
            </div>
            <!-- <div class="c-form-group has-suggestions">
                <input type="text"
                       :class="['o-input', inputSize]"
                       placeholder="Area"
                       v-model="area"
                       @input="fetchAreaSuggestions">
                <div v-if="showSearchAreaSuggestions && !isEmptyAreaSuggestions" class="c-search-suggestions">
                    <template v-for="suggest in areaSuggestions">
                        <a href="#" class="c-search-suggestions__item" @click.prevent="setAsValue($event, suggest)">{{ suggest.text }}</a>
                    </template>
                </div>
            </div> -->
            <div class="c-form-group has-suggestions" ref="searchSuggestions">
                <input type="text"
                       :class="['o-input', inputSize]"
                       placeholder="Nyari Apa?"
                       v-model="keyword"
                       @focus="onInputFocus"
                       @input="fetchSuggestions">
                <div v-if="showSearchSuggestions && !isEmptySuggestions" class="c-search-suggestions">
                    <template v-for="suggest in suggestions">
                        <a href="#" class="c-search-suggestions__item" @click.prevent="goToSearch($event, suggest)">{{ suggest.text }}</a>
                    </template>
                </div>
            </div>
            <div class="c-form-group">
                <button :class="['o-button', 'o-button--primary','o-button-custom', 'o-button--block', btnSize]" type="submit">
                    <span v-if="!inline">Yuk,&nbsp;</span>
                    <strong>Cari<span v-if="!inline">!</span></strong>
                    <span class="text-cari-icons" style="display: none;">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </span>
                    <span class="text-cari-lagi" style="display: none;">Cari Lagi</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {loaded} from '../api/map/loader'

    export default {
        props: {
            size: {type: String},
            inline: {type: Boolean, default: true}
        },
        data() {
            return {
                showSearchForm: false,
                showSearchAreaSuggestions: false,
                showSearchSuggestions: false,
                suggestions: [],
                areaSuggestions: [],

                // search query
                location: '',
                area: '',
                keyword: ''
            }
        },
        computed: {
            ...mapGetters([
                'query'
            ]),
            inputSize() {
                return !_.isEmpty(this.size) ? 'o-input--' + this.size : null;
            },
            btnSize() {
                return !_.isEmpty(this.size) ? 'o-button--' + this.size : null;
            },
            isEmptySuggestions() {
                return this.suggestions.length <= 0;
            },
            isEmptyAreaSuggestions() {
                return this.areaSuggestions.length <= 0;
            }
        },
        watch: {
            location(value) {
                this.$store.commit('SET_LOCATION', value);
            },
            area(value) {
                this.$store.commit('SET_AREA', value);
            },
            keyword(value) {
                this.$store.commit('SET_KEYWORD', value);
            }
        },
        methods: {
            submit() {
                const queryString = serialize(clean(this.query));
                window.location = '/search?' + queryString;
            },
            geolocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.getCurrentPosition, this.forceAllowLocation);
                } else {
                    this.getCurrentCity();
                }
            },
            getCurrentPosition(position) {
                loaded.then(() => {
                    location.latitude = position.coords.latitude;
                    location.longitude = position.coords.longitude;
                    var geocoder = new google.maps.Geocoder();
                    var latLng = new google.maps.LatLng(location.latitude, location.longitude);

                    if (geocoder) {
                        geocoder.geocode({'latLng': latLng}, (results, status) => {
                            if (status == google.maps.GeocoderStatus.OK) {
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
            forceAllowLocation() {
                //router.push('alert-location');
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
            onInputFocus(e) {
                e.stopPropagation();

                if(this.showSearchSuggestions) {
                    this.closeSuggestions();
                }

                if(this.showSearchAreaSuggestions) {
                    this.closeAreaSuggestions();
                }

                this.showSuggestions();

            },
            showSuggestions() {
                this.showSearchSuggestions = true;

                if(_.isEmpty(this.keyword)) {
                    this.setDefaultSearchSuggestions();
                }

                this.$refs.searchSuggestions.addEventListener('click', (e) => {
                    e.stopPropagation();
                });

                document.addEventListener('click', (e) => {
                    this.closeSuggestions();
                });
            },
            showAreaSuggestions() {
                this.showSearchAreaSuggestions = true;

                this.$refs.searchSuggestions.addEventListener('click', (e) => {
                    e.stopPropagation();
                });

                document.addEventListener('click', (e) => {
                    this.closeAreaSuggestions();
                });
            },
            closeSuggestions() {
                this.showSearchSuggestions = false;
                //this.clearSuggestions();
            },
            closeAreaSuggestions() {
                this.showSearchAreaSuggestions = false;
                this.clearAreaSuggestions();
            },
            setDefaultSearchSuggestions() {
                this.suggestions = [
                    { text: "Kuliner", type: "categories" },
                    { text: "Kecantikan", type: "categories" },
                    { text: "Relaksasi", type: "categories" },
                    { text: "Rekreasi", type: "categories" },
                    { text: "Olahraga", type: "categories" },
                    { text: "Shopping", type: "categories" },
                    { text: "Barbershop", type: "categories" },
                    { text: "Komunitas", type: "categories" }
                ];
            },
            clearSuggestions() {
                this.suggestions = [];
            },
            clearAreaSuggestions() {
                this.areaSuggestions = [];
            },
            fetchSuggestions(e) {
                const query = { location: this.location, area: this.area, keyword: this.keyword };
                const queryString = serialize(clean(query));
                axios.get('/api/search/suggest?'+queryString)
                     .then(({data}) => {
                        if(data.length <= 0) {
                            this.closeSuggestions();
                        } else {
                            if(!this.showSearchSuggestions) {
                                this.showSuggestions();
                            }
                            let results = data.map(item =>{
                                return { id: item.id, text: item.name, slug: item.slug };
                            });
                            this.suggestions = results;
                        }
                     });
            },
            fetchAreaSuggestions(e) {
                const query = { location: this.location, area: this.area, keyword: this.keyword };
                const queryString = serialize(clean(query));

                axios.get('/api/search/suggest-area?'+queryString)
                    .then(({data}) => {
                        if(data.length <= 0) {
                            this.closeAreaSuggestions();
                        } else {
                            if(!this.showSearchAreaSuggestions) {
                                this.showAreaSuggestions();
                            }
                            let results = data.map(item =>{
                                return { text: item.area };
                            });
                            this.areaSuggestions = clean(results);
                        }
                    });
            },
            goToSearch(e, suggest) {
                e.stopPropagation();
                if(suggest.type === 'categories') {
                    let query = Object.assign({}, this.query, { categories: suggest.text });
                    query = serialize(clean(query));
                    window.location = '/search?'+query;
                } else {
                    window.location = '/detail/'+suggest.slug;
                }
            },
            setAsValue(e, suggest) {
                e.stopPropagation();

                this.$store.commit('SET_AREA', suggest.text);

                this.closeAreaSuggestions();
            }
        },
        mounted() {
            const query = this.$route.query;

            this.location = query.location;
            this.area = query.area;
            this.keyword = query.keyword;

            this.geolocation();
        }
    }
</script>
