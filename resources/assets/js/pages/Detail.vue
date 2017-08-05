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
        <section class="o-section o-section--grey">
            <div class="o-container--fluid">
                <reviews :venue-id="venueId" :my-review="myReview" :venue-type="type" v-model="reviews"></reviews>
            </div>
        </section>
    </div>
</template>

<script>
    //import MapView from '../components/Map.vue'
    import Overview from '../components/Overview.vue'
    import Galleries from '../components/Galleries.vue'
    import Reviews from '../components/Reviews.vue'

    import {loaded} from '../api/map/loader'
    import Icon from '../api/map/map-pin-empty'


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
                axios.get('/api/venue/g/' + this.$route.params.slug).then(({data}) => {
                    console.log(data);
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
                    this.ratings = Object.values(data.reviews.ratings).reverse();
                    this.reviews = data.reviews.reviews;
                    this.type = data.type;
                    this.myReview = data.myReview;

                    window.document.title = data.name + ' - Mampir.in';
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
