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

                <template v-if="local.listings.length > 0">
                    <h3 class="u-mb-x2">Rekomendasi</h3>
                    <div class="o-grid">
                        <template v-for="venue in local.listings">
                            <div class="o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs">
                                <a :href="'/place/l/'+venue.slug" :id="'venue-card-'+venue.id" class="c-venue-card">
                                    <div class="c-venue-card__photo"
                                         :style="{ backgroundImage: `url(${venue.cover})`}"></div>
                                    <div class="c-venue-card__info">
                                        <h5 class="c-venue-card__name o-type-18">{{ venue.name }}</h5>
                                    </div>
                                    <div class="c-venue-card__footer" style="margin-top: 5px;">
                                        <div class="c-venue-card__rating">
                                            <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
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
                    <hr>
                </template>

                <template v-if="google.listings.length > 0">
                    <h3 class="u-mb-x2">Tempat Lainnya</h3>
                    <div class="o-grid" ref="googleListings">
                        <template v-for="venue in google.listings">
                            <div class="o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs">
                                <a :href="'/place/g/'+venue.id" :id="'venue-card-'+venue.id" class="c-venue-card">
                                    <div class="c-venue-card__photo"
                                         :style="{ backgroundImage: `url(${venue.cover})`}"></div>
                                    <div class="c-venue-card__info">
                                        <h5 class="c-venue-card__name o-type-18">{{ venue.name }}</h5>
                                    </div>
                                    <div class="c-venue-card__footer" style="margin-top: 5px;">
                                        <div class="c-venue-card__rating">
                                            <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
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
                    <!-- status elements -->
                    <!--<div class="scroller-status">-->
                        <!--<div class="infinite-scroll-request loader-ellips">-->
                            <!--...-->
                        <!--</div>-->
                        <!--<p class="infinite-scroll-last">End of content</p>-->
                        <!--<p class="infinite-scroll-error">No more pages to load</p>-->
                    <!--</div>-->

                    <!-- pagination has path -->
                    <!--<p class="pagination">-->
                        <!--<a class="pagination__next" href="">Next page</a>-->
                    <!--</p>-->
                </template>

                <!--<template v-else>-->
                    <!--<p class="text-center">Not Found.</p>-->
                <!--</template>-->
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

    import InfiniteScroll from 'infinite-scroll'

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
                },
                gMap: ''
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
            this.fetchData(query);

            this.gMap = new Map;
            if (this.gMap.map === undefined) {
                this.gMap.init();
            }

            //this.infiniteScroll();

        },
        watch: {
            'local.listings': function(value) {
                setTimeout(() => {
                    this.gMap.loadMarker(value);
                }, 1000);
            },
            'google.listings': function(value) {
                setTimeout(() => {
                    this.gMap.loadMarker(value);
                }, 1000);
            }
        },
        methods: {
            fetchData (query) {
                this.loading = true;

                this.makeRequest('/api/search/local', query).then(data => this.setData(data, 'local'));

                this.makeRequest('/api/search/google-places/text', query).then(data => {
                    this.setData(data, 'google');
                    if ((this.local.listings.length <= 0) && (data.data.length <= 0)) {
                        router.push('404');
                    }
                });
            },
            setData(data, target) {
                this[target].listings = data.data;
                this[target].next_page_url = data.next_page_url;
            },
            makeRequest(url, query = '') {
                let Q = serialize(query);
                if(!_.isEmpty(query)) {
                    url += (url.includes("?") ? '&' : '?') + Q;
                }
                return new Promise((resolve, reject) => {
                    axios.get(url).then(({data}) => {
                        setTimeout(() => {
                            this.loading = false;

                            resolve(data);
                        }, 1000);
                    }).catch(error => {
                        reject(error);
                    });
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
            },
            infiniteScroll() {
                Vue.nextTick(() => {
                    setTimeout(() => {
                        const infScroll = new InfiniteScroll( this.$refs.googleListings, {
                            // options
                            path: this.google.next_page_url+'&page={{#}}',
                            append: false,
                            responseType: 'text',
                            status: '.scroller-status',
                            history: false
                        });

                        infScroll.on( 'load', ( response, path ) => {
                            const data = JSON.parse(response);

                            this.google.listings = this.google.listings.concat(data.data);
                            this.google.next_page_url = data.next_page_url;

                            infScroll.option({
                                path: data.next_page_url+'&page={{#}}',
                            })
                        });
                    }, 3000);
                });
            }
        }
    }
</script>
