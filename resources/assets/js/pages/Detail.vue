<template>
    <div class="main">
        <!--<div class="o-map o-map&#45;&#45;detail" ref="map"></div>-->

        <galleries :photos.sync="photos"></galleries>

        <section class="o-section">

            <overview
                    :venue-id="venueId"
                    :name="name"
                    :address="address"
                    :cover="cover"
                    :logo="logo"
                    :phone_number="phone_number"
                    :categories="categories"
                    :location="location"
                    :rating="rating"
                    :ratings="ratings">
            </overview>

        </section>
        <!-- <section class="o-section"> -->
        <!-- <div class="o-container--fluid"> -->
        <!-- </div> -->
        <!-- </section> -->

        <section class="o-section o-section--grey o-section--promo">
            <div class="o-container--fluid">
                <div class="o-grid">
                    <div class="o-grid__col u-6/12@lg u-12/12@sm">
                        <h2 class="o-heading o-heading--promo">
                            Promo General
                        </h2>
                        <div class="c-card__promo">
                            <a href="#">
                                <div class="content content__img">
                                    <img src="../../img/promo/1.png" alt="">
                                </div>
                                <div class="content content__text">
                                    <div>
                                        <h2 class="promo__heading">Promo Hongkong Dimsum Kemerdekaan</h2>
                                        <p>
                                            <i class="fa fa-clock-o"></i> 17 Agustus - 23 Agustus 2017
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="o-grid__col u-6/12@lg u-12/12@sm">
                        <h2 class="o-heading o-heading--promo">
                            Promo Purchase Point
                        </h2>
                        <div class="c-card__promo">
                            <a href="#">
                                <div class="content content__img">
                                    <img src="../../img/promo/2.png" alt="">
                                </div>
                                <div class="content content__text">
                                    <div class="content content__text">
                                        <div>
                                            <h2 class="promo__heading">Promo Hongkong Dimsum Kemerdekaan</h2>
                                            <p>
                                                <i class="fa fa-clock-o"></i> 17 Agustus - 23 Agustus 2017
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="o-section o-section--grey">
            <div class="o-container--fluid">
                <reviews :venue-id="venueId" :my-review-value="myReview" :venue-type="type" v-model="reviews"></reviews>
            </div>
        </section>


        <section class="o-section">
            <div class="o-container--fluid">
                <h1 class="o-heading o-heading--other u-mb-x2 o-type-18 ">
                    Merchant lain di lokasi yang sama
                </h1>

                <div class="o-grid">

                    <div class="o-grid__col u-3/12@lg u-6/12@sm u-12/12@xs">
                        <a href="#" id="" class="c-venue-card">
                           <div class="c-venue-card__photo" style="background-image: url(&quot;https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&amp;photoreference=CmRaAAAA0k0F9tN4Chtd1tOn3qJHScgIjdl9m1vWycNL8nvWCms1qbTC8NOmH_f-B1FL4p-XWBHap8qNWDMHmIP0ZEsNAI25iTamcgMf_Gu6KZvoOSXI9vjWjuFw9xA5OaQGtTo-EhDFP6sa3Y7KuGKX8TnPKKBqGhQaW1AXKKFHFNCDS147Z_wEgNM1Gg&amp;key=AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c&quot;);"></div>
                            <div class="c-venue-card__info">
                                <h5 class="c-venue-card__name o-type-18">
                                    Inggil Museum Resto
                                </h5>
                            </div>
                            <div class="c-venue-card__footer" style="margin-top: 5px;">
                                <div class="c-venue-card__rating">
                                    <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
                                </div>
                                <div class="c-venue-card__categories" style="margin-top: 5px;">
                                    <!-- {{ venue.categories | joinBy }} -->
                                    Jl. Gajahmada No.4, Kiduldalem, Klojen, Kota Malang
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="o-grid__col u-3/12@lg u-6/12@sm u-12/12@xs">
                        <a href="#" id="" class="c-venue-card">
                           <div class="c-venue-card__photo" style="background-image: url(&quot;https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&amp;photoreference=CmRaAAAA0k0F9tN4Chtd1tOn3qJHScgIjdl9m1vWycNL8nvWCms1qbTC8NOmH_f-B1FL4p-XWBHap8qNWDMHmIP0ZEsNAI25iTamcgMf_Gu6KZvoOSXI9vjWjuFw9xA5OaQGtTo-EhDFP6sa3Y7KuGKX8TnPKKBqGhQaW1AXKKFHFNCDS147Z_wEgNM1Gg&amp;key=AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c&quot;);"></div>
                            <div class="c-venue-card__info">
                                <h5 class="c-venue-card__name o-type-18">
                                    Inggil Museum Resto
                                </h5>
                            </div>
                            <div class="c-venue-card__footer" style="margin-top: 5px;">
                                <div class="c-venue-card__rating">
                                    <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
                                </div>
                                <div class="c-venue-card__categories" style="margin-top: 5px;">
                                    <!-- {{ venue.categories | joinBy }} -->
                                    Jl. Gajahmada No.4, Kiduldalem, Klojen, Kota Malang
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="o-grid__col u-3/12@lg u-6/12@sm u-12/12@xs">
                        <a href="#" id="" class="c-venue-card">
                           <div class="c-venue-card__photo" style="background-image: url(&quot;https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&amp;photoreference=CmRaAAAA0k0F9tN4Chtd1tOn3qJHScgIjdl9m1vWycNL8nvWCms1qbTC8NOmH_f-B1FL4p-XWBHap8qNWDMHmIP0ZEsNAI25iTamcgMf_Gu6KZvoOSXI9vjWjuFw9xA5OaQGtTo-EhDFP6sa3Y7KuGKX8TnPKKBqGhQaW1AXKKFHFNCDS147Z_wEgNM1Gg&amp;key=AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c&quot;);"></div>
                            <div class="c-venue-card__info">
                                <h5 class="c-venue-card__name o-type-18">
                                    Inggil Museum Resto
                                </h5>
                            </div>
                            <div class="c-venue-card__footer" style="margin-top: 5px;">
                                <div class="c-venue-card__rating">
                                    <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
                                </div>
                                <div class="c-venue-card__categories" style="margin-top: 5px;">
                                    <!-- {{ venue.categories | joinBy }} -->
                                    Jl. Gajahmada No.4, Kiduldalem, Klojen, Kota Malang
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="o-grid__col u-3/12@lg u-6/12@sm u-12/12@xs">
                        <a href="#" id="" class="c-venue-card">
                           <div class="c-venue-card__photo" style="background-image: url(&quot;https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&amp;photoreference=CmRaAAAA0k0F9tN4Chtd1tOn3qJHScgIjdl9m1vWycNL8nvWCms1qbTC8NOmH_f-B1FL4p-XWBHap8qNWDMHmIP0ZEsNAI25iTamcgMf_Gu6KZvoOSXI9vjWjuFw9xA5OaQGtTo-EhDFP6sa3Y7KuGKX8TnPKKBqGhQaW1AXKKFHFNCDS147Z_wEgNM1Gg&amp;key=AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c&quot;);"></div>
                            <div class="c-venue-card__info">
                                <h5 class="c-venue-card__name o-type-18">
                                    Inggil Museum Resto
                                </h5>
                            </div>
                            <div class="c-venue-card__footer" style="margin-top: 5px;">
                                <div class="c-venue-card__rating">
                                    <!--<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>-->
                                </div>
                                <div class="c-venue-card__categories" style="margin-top: 5px;">
                                    <!-- {{ venue.categories | joinBy }} -->
                                    Jl. Gajahmada No.4, Kiduldalem, Klojen, Kota Malang
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    </div>
</template>

<script>
    //import MapView from '../components/Map.vue'
    import Galleries from '../components/Galleries.vue'

    import {loaded} from '../api/map/loader'
    import Icon from '../api/map/map-pin-empty'

    // async components
    const Overview = () => import('../components/Overview.vue')
    const Reviews = () => import('../components/Reviews.vue')

    export default {
        components: {Overview, Galleries, Reviews},
        data() {
            return {
                loading: false,
                venueId: 0,
                name: null,
                address: null,
                cover: null,
                logo: null,
                phone_number: '',
                price: '',
                opening_hours: [],
                photos: [],
                categories: [],
                location: {},
                rating: 0,
                ratings: [],
                reviews: [],
                myReview: {},
                type: ''
            }
        },
        created() {
            this.fetchData();
        },
        mounted() {
            //this.$store.commit('SHOW_FOOTER', true);
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData',
            location(value) {
                loaded.then(() => {
                    setTimeout(() => {
                        //this.loadMap(value)
                    }, 300)
                });
            }
        },
        methods: {
            fetchData() {
                const url = `/api/venue/${this.$route.params.type}/${this.$route.params.slug}`;
                axios.get(url).then(({data}) => {
                    // set venue id
                    this.venueId = data.id;

                    // set overview data
                    this.name = data.name;
                    this.address = data.address;
//                    this.cover = data.cover;
//                    this.logo = data.logo;
                    this.phone_number = data.detail.phone_number;
                    this.photos = data.photos;
                    this.categories = data.categories;
                    this.location = {lat: data.lat, lng: data.lng};
                    this.rating = data.rating;
                    this.ratings = Object.values(data.ratings).reverse();
                    this.reviews = data.reviews;
                    this.type = data.type;
                    this.myReview = data.myReview;

                    window.document.title = data.name + ' - Mampir.in';
                }).catch(() => {
                    router.push('/404');
                });
            },
            loadMap(destination) {
                const currentLocation = {lat: 41.85, lng: -87.65};

                console.log("map");

                const map = new google.maps.Map(this.$refs.map, {
                    center: currentLocation,
                    scrollwheel: false,
                    zoom: 4,
                    streetViewControl: false,
                    mapTypeControl: false,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    }
                });

                const directionsDisplay = new google.maps.DirectionsRenderer({
                    map: map
                });

                // Set destination, origin and travel mode.
                const request = {
                    destination: {lat: 39.79, lng: -86.14},
                    origin: currentLocation,
                    travelMode: 'DRIVING'
                };

                // Pass the directions request to the directions service.
                const directionsService = new google.maps.DirectionsService({suppressMarkers: true});
                directionsService.route(request, function (response, status) {
                    if (status == 'OK') {
                        // Display the route on the map.
                        directionsDisplay.setDirections(response);
                        let leg = response.routes[0].legs[0];
                        new google.maps.Marker({
                            position: leg.start_location,
                            map: map,
                            icon: {
                                url: Icon
                            },
                        });
                        new google.maps.Marker({
                            position: leg.end_location,
                            map: map,
                            icon: {
                                url: Icon
                            },
                        });
                    }
                });
            }
        }
    }
</script>
