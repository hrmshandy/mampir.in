<template>
    <form :class="['c-search', {'c-search--inline': inline, 'is-shown': showSearchForm}]" @submit.prevent="submit">
        <button type="button" class="c-search__button iconim iconim-search-close" @click="toggleSearch"></button>
        <div class="c-search__form">
            <div class="c-form-group">
                <select :class="['o-input', inputSize]" v-model="location" id="location">
                    <option value="">Kota</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                </select>
            </div>
            <div class="c-form-group">
                <input type="text" :class="['o-input', inputSize]" placeholder="Area" v-model="area">
            </div>
            <div class="c-form-group">
                <input type="text" :class="['o-input', inputSize]" placeholder="Nyari Apa?" v-model="keyword">
            </div>
            <div class="c-form-group">
                <button :class="['o-button', 'o-button--primary', 'o-button--block', btnSize]" type="submit">
                    <span v-if="!inline">Yuk,&nbsp;</span>
                    <strong>Cari<span v-if="!inline">!</span></strong>
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
                showSearchForm: false
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
            keyword: {
                get () {
                    return this.query.keyword
                },
                set (value) {
                    this.$store.commit('SET_KEYWORD', value)
                }
            },
            area: {
                get () {
                    return this.query.area
                },
                set (value) {
                    this.$store.commit('SET_AREA', value)
                }
            },
            location: {
                get () {
                    return this.query.location
                },
                set (value) {
                    this.$store.commit('SET_LOCATION', value)
                }
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
                router.push('alert-location');
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
            }
        },
        mounted() {
            this.geolocation();
        }
    }
</script>
