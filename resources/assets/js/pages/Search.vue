<template>
    <section class="o-section o-section--white section--search">
        <div class="p-search">
            <div class="p-search__listings" v-show="viewListing">
                <!-- <div class="filter--wrapper">
                    <div></div>
                    <button class="o-button o-button--primary-outlined button--icon  pull-right" @click="clickViewMaps">
                        <i class="fa fa-map-o"></i>
                    </button>
                </div> -->

                <template v-if="loading">
                    <div class="o-grid">
                        <template v-for="i in 9">
                            <div class="o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs">
                                <div class="c-venue-card c-venue-card__placeholder">
                                    <div class="c-venue-card__photo"></div>
                                    <div class="c-venue-card__info">
                                        <h5 class="c-venue-card__name"></h5>
                                    </div>
                                    <div class="c-venue-card__footer" style="margin-top: 5px;">
                                        <div class="c-venue-card__rating"></div>
                                    </div>
                                    <div class="c-venue-card__categories" style="margin-top: 5px;"></div>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>

                <template v-if="!isEmpty">
                    <div class="o-grid">
                        <template v-for="venue in google.listings">
                            <div class="o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs">
                                <a :href="'/detail/'+venue.id" :id="'venue-card-'+venue.id" class="c-venue-card">
                                    <div class="c-venue-card__photo"
                                         :style="{ backgroundImage: `url(${venue.cover})`}"></div>
                                    <div class="c-venue-card__info">
                                        <h5 class="c-venue-card__name o-type-18">{{ venue.name }}</h5>
                                    </div>
                                    <div class="c-venue-card__footer" style="margin-top: 5px;">
                                        <div class="c-venue-card__rating">
                                            <rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>
                                        </div>
                                        <div class="c-venue-card__categories" style="margin-top: 5px;">
                                            <!-- {{ venue.categories | joinBy }} -->
                                            {{ venue.short_address }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </template>
                    </div>
                    <!--<div class="text-center vanue-pagination">-->
                    <!--<pagination :current-page="currentPage" :per-page="perPage" :records="totalRecords" @change="onPageChange"></pagination>-->
                    <!--</div>-->
                </template>

                <template v-else>
                    <p class="text-center">Not Found.</p>
                </template>
            </div>
            <div class="p-search__map" v-show="viewMaps">
                <div class="filter--wrapper filter--wrapper__maps">
                    <div></div>
                    <button class="o-button o-button--primary-outlined button--icon  pull-right"
                            @click="clickViewListing">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </button>
                </div>
                <div id="map" class="o-map"></div>
                <!--<map-view></map-view>-->
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Map from '../api/map'
    //import MapView from '../components/Map.vue'
    import Rating from '../components/Rating.vue'
    import Pagination from '../components/Pagination.vue'

    export default {
        components: {Rating, Pagination},
        data() {
            return {
                loading: false,
                listings: [],
                currentPage: 1,
                perPage: 18,
                totalRecords: 18,
                error: null,
                map: null,
                isEmpty: false,
                viewListing: true,
                viewMaps: true,

                // new
                local: {
                    next_page_url: '',
                    listings: []
                },
                google: {
                    next_page_url: '',
                    listings: []
                }
            }
        },
        computed: {
            ...mapGetters([
                'query'
            ])
        },
        created() {
            //window.document.title = "Search"
        },
        mounted() {
            const query = this.$route.query;
//            this.$store.dispatch('setQuery', query);
            this.fetchData(query)
        },
        watch: {
            'google.listings': (value) => {
                let M = new Map;

                if (M.map === undefined) {
                    M.init();
                }
                setTimeout(() => {
                    M.loadMarker(value);
                }, 1000);
            }
        },
        methods: {
            fetchData (query) {
                this.loading = true;

                let url = '/api/search/google-places/text';
//                if(!_.isEmpty(query.location) && query.modified !== "true") {
//                    url += 'nearby';
//                } else {
//                    url += 'text';
//                }
//
                let Q = serialize(query);

//
                axios.get(url+'?'+Q).then(({data}) => {
                    setTimeout(() => {
                        this.loading = false;
                        this.google.listings = data.data;
                        this.google.next_page_url = data.next_page_url;
                        if (data.data.length <= 0) {
                            router.push('404');
                        }
                    }, 1000);

                });
            },
            clickViewMaps () {
                this.viewMaps = true;
                this.viewListing = false;
            },
            clickViewListing () {
                this.viewMaps = false;
                this.viewListing = true;
            },
            onPageChange(page, query){
                this.fetchData(query);
            }
        }
    }
</script>
