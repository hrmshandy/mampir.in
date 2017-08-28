<template>
    <div class="c-places-search c-places-search--mg2">
        <label for="" class="u-weight-bold u-mb-x1">Lokasi</label>
        <div class="c-form-group c-input-group">
            <input ref="input" type="text" class="o-input" :name="name" placeholder="Masukan Lokasi Merchant" @keypress="preventEnter" :value="address">
            <button class="o-button" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <label for="" class="u-weight-bold u-mb-x1">Lokasi merchant dalam peta (Opsional) </label>
        <div ref="map" style="width: 100%; height: 300px;"></div>
        <label class="c-places-search__toggle-lat-lng u-mt-x2">
            <input type="checkbox" v-model="showLatLng">
            Show latitude & longitude input
        </label>
        <div v-show="showLatLng" class="o-grid c-form-group">
            <div class="o-grid__col u-4/12">
                <label for="lat">Latitude</label>
                <input id="lat" type="text" name="lat" class="o-input" placeholder="Latitude" v-model="lat">
            </div>
            <div class="o-grid__col u-4/12">
                <label for="lng">Longitude</label>
                <input id="lng" type="text" name="lng" class="o-input" placeholder="Longitude" v-model="lng">
            </div>
        </div>
    </div>
</template>

<script>
    import { load, loaded } from '../api/map/loader'


    export default {
        props: {
            name: { type: String, required: true },
            value: { type: String },
            location: { type: Object, default() {
                return { address: '', lat: '', lng: '' }
            }}
        },
        data() {
            return  {
                map: '',
                markers: [],
                showLatLng: false,
                address: '',
                lat: '',
                lng: ''
            }
        },
        computed: {
            hasVelue() {
                return !_.isEmpty(this.location.address) && (typeof this.location.lat === 'number') && (typeof this.location.lng === 'number');
            }
        },
        mounted() {

            //load('AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c', '3', ['places']);

            this.address = this.location.address;
            this.lat = this.location.lat;
            this.lng = this.location.lng;

            loaded.then(() => {
                const currentPosition = { lat: this.location.lat, lng: this.location.lng};
                this.initMap(currentPosition);

                if(this.hasVelue) {
                    this.createMarker(this.location.address, currentPosition);
                }

                this.search();

            });
        },
        methods: {
            initMap(center) {
                if( (typeof center.lat !== 'number') && (typeof center.lng !== 'number') ) {
                    center = {lat: -33.8688, lng: 151.2195}
                }
                this.map = new google.maps.Map(this.$refs.map, {
                    center: center,
                    zoom: 13,
                    mapTypeId: 'roadmap',
                    streetViewControl: false,
                    mapTypeControl: false
                });
            },
            createMarker(title, position) {
                const map = this.map;
                const marker = new google.maps.Marker({
                    map: map,
                    title: title,
                    position: position,
                    draggable: true
                });

                google.maps.event.addListener(marker, 'dragend', function() {
                    this.geocodePosition(marker.getPosition());
                }.bind(this));

                this.markers.push(marker);
            },
            search() {
                const map = this.map;
                // Create the search box and link it to the UI element.
                const input = this.$refs.input;
                const searchBox = new google.maps.places.SearchBox(input);

                // Bias the SearchBox results towards current map's viewport.
                map.addListener('bounds_changed', function() {
                    searchBox.setBounds(map.getBounds());
                });

                let markers = this.markers;

                // Listen for the event fired when the user selects a prediction and retrieve
                // more details for that place.
                searchBox.addListener('places_changed', function() {
                    let places = searchBox.getPlaces();

                    if (places.length === 0) {
                        alert('places not found, please input latitude & longitude manually.');
                        this.showLatLng= true;
                        return;
                    }

                    // Clear out the old markers.
                    markers.forEach(function(marker) {
                        marker.setMap(null);
                    });
                    markers = [];

                    // For each place, get the icon, name and location.
                    const bounds = new google.maps.LatLngBounds();
                    places.forEach(function(place) {
                        if (!place.geometry) {
                            console.log("Returned place contains no geometry");
                            return;
                        }

                        this.setValue(place.formatted_address, place.geometry.location);

                        this.createMarker(place.name, place.geometry.location);

                        if (place.geometry.viewport) {
                            // Only geocodes have viewport.
                            bounds.union(place.geometry.viewport);
                        } else {
                            bounds.extend(place.geometry.location);
                        }
                    }.bind(this));

                    map.fitBounds(bounds);

                }.bind(this));
            },
            preventEnter(e) {
                if(e.keyCode == 13) {
                    e.preventDefault();
                }
            },
            setValue(address, position) {
                this.address = address;
                this.lat = position.lat();
                this.lng = position.lng();
                this.$emit('input',address);
            },
            geocodePosition(pos) {
                const geocoder = new google.maps.Geocoder();

                geocoder.geocode({
                    latLng: pos
                }, function(responses) {
                    let formatted_address = '';
                    if (responses && responses.length > 0) {
                        formatted_address = responses[0].formatted_address;
                    } else {
                        formatted_address = 'Cannot determine address at this location.';
                    }
                    this.setValue(formatted_address, pos);
                }.bind(this));
            }
        }
    }
</script>