<template>
    <div>
        <section class="c-hero">
            <div class="o-container c-hero__container">
                <div class="o-grid o-grid--middle c-hero__grid">
                    <div class="o-grid__col u-7/12@sm u-hidden@xs">
                        <img src="../../img/hero-iconic.png" alt="Mampir.in" class="c-hero__img">
                    </div>
                    <div class="o-grid__col u-5/12@sm">
                        <h1 class="c-hero__title">Bahagia Itu Dekat</h1>
                        <h3 class="c-hero__subtitle">Yuk, Mampir.in!</h3>
                        <search-form size="large" :inline="false"></search-form>
                    </div>
                </div>
                <categories :location="city"></categories>
            </div>
        </section>
        <!-- <div class="c-categories c-categories--widget">
            <div class="o-container">
                <div class="o-grid">
                    <div v-for="category in categories" class="o-category__wrapper o-grid__col u-6/12@xs u-3/12@sm">
                        <router-link class="o-category o-category--card" :to="'/search?location='+city+'&categories='+category" :style="{ backgroundImage: 'url(/images/categories/'+category+'.png)' }">
                            <div class="o-category__body">
                                <img :src="'/images/categories/'+category+'-icon.png'" alt="" class="o-category__icon">
                                <span class="o-category__name">{{ category | capitalize }}</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="o-grid__col u-6/12@xs u-3/12@sm o-category__wrapper">
                        <router-link class="o-category o-category--card" to="#">
                            <div class="o-category__body">
                                <span class="o-category__name">Lainnya</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
        <section v-if="reviews.length" class="o-section o-section--grey">
            <div class="o-container--fluid">
                <h1 class="o-section__title">Yang Happening di {{ city }}</h1>
                <masonry>
                    <div v-for="review in reviews" class="o-grid__col u-1/5@lg u-6/12@sm c-card__wrapper">
                        <div class="c-card c-card--dialog u-mb-x4">
                            <div class="c-card__header">
                                <router-link :to="'/detail/'+review.venue.slug" class="o-user-block">
                                    <div class="o-user-block__pic o-user-block__pic--small"
                                         :style="{ backgroundImage: 'url('+review.venue.cover+')'}">
                                    </div>
                                    <div class="o-user-block__info">
                                        <small class="o-user-block__name">{{ review.venue.name }}</small>
                                    </div>
                                </router-link>
                            </div>
                            <div class="c-card__body">
                                <p>
                                    {{ review.content }}
                                </p>
                            </div>
                            <div class="c-card__footer">
                                <div class="o-user-block">
                                    <div class="o-user-block__pic">
                                        <img :src="review.user.avatar" alt="">
                                    </div>
                                    <div class="o-user-block__info">
                                        <span class="o-user-block__name">{{ review.user.name }}</span>
                                        <span class="o-user-block__status">{{ review.created_at | dateFromNow }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </masonry>
            </div>
        </section>
        <section class="o-section">
            <div class="o-container">
                <h1 class="o-section__title">Kenapa Harus Mampir.in</h1>
                <!-- <p class="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium est at metus rutrum, at tincidunt sem maximus. Donec iaculis commodo ligula ut laoreet.</p> -->
                <div class="o-grid u-text-center">
                    <div class="o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle">
                        <img src="../../img/icon-01.png" alt="">
                        <h3 class="u-color-primary u-mb-x2 u-mt-x3">Otak Jiwa Dan Raga</h3>
                        <span>Butuh yang namanya refreshing</span>
                    </div>
                    <div class="o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle">
                        <img src="../../img/icon-02.png" alt="">
                        <h3 class="u-color-primary u-mb-x2 u-mt-x3">Jodoh Tak Kunjung Mampir</h3>
                        <span>Makanya kamu yang harus Mampir.in</span>
                    </div>
                    <div class="o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle">
                        <img src="../../img/icon-03.png" alt="">
                        <h3 class="u-color-primary u-mb-x2 u-mt-x3">Silaturahmi</h3>
                        <span>Biar rejekinya lancar. Amin</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    // import {lory} from 'lory.js';
    import Flickity from 'flickity';

    import Masonry from '../components/Masonry.vue'
    import SearchForm from '../components/Search.vue'
    import Categories from '../components/Categories.vue'

    export default {
        components: {Categories, Masonry, SearchForm},
        data() {
            return {
                categories: [
                    'kuliner', 'relaksasi', 'rekreasi', 'hiburan', 'kecantikan', 'barbershop', 'olahraga'
                ],
                reviews: [],
            }
        },
        computed: {
            ...mapGetters([
                'query'
            ]),
            city() {
                return this.query.location;
            }
        },
        watch: {
            '$route': function () {
                if (document.getElementById('location')) {
                    this.fetchReviews(document.getElementById('location').value);
                }
            },
            'query.location': function (value) {
                this.fetchReviews(value);
            }
        },
        methods: {
            fitHeroUnitHeight() {
                const hero = document.querySelector('.c-hero');

                const setFitHeight = () => {
                    let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    hero.style.height = `${height}px`;
                }

                setFitHeight();

                window.addEventListener('resize', () => {
                    setFitHeight();
                });
            },
            fetchReviews(city) {
                axios.get('/api/reviews?location=' + city).then(({data}) => {
                    this.reviews = data;
                });
            },
            // initIory() {
            // 	document.addEventListener('DOMContentLoaded', () => {
            //         const slider = document.querySelector('.js_slider');

            //         lory(slider, {
            //             // options going here
            //         });
            //     });
            // }
        },
        created() {
            window.document.title = "Bahagia Itu Dekat - Mampir.in"
        },
        mounted() {
            this.fetchReviews(document.getElementById('location').value);
            //this.fitHeroUnitHeight();
            // this.initIory();
        }
    }
</script>
