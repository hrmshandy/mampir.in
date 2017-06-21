<template>
	<div :class="['c-search', {'c-search--inline': inline}]">
		<button class="c-search__button">
			<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
		<div class="c-search__form">
			<div class="c-form-group">
				<input type="text" :class="['o-input', inputSize]" placeholder="Lagi Dimana?" v-model="location" id="location">
			</div>
			<div class="c-form-group">
				<input type="text" :class="['o-input', inputSize]" placeholder="Nyari Apa?" v-model="keyword">
			</div>
			<div class="c-form-group">
				<button :class="['o-button', 'o-button--primary', 'o-button--block', btnSize]" @click="submit" type="button">
					<span v-if="!inline">Yuk,&nbsp;</span><strong>Cari<span v-if="!inline">!</span></strong>
				</button>
			</div>
		</div>
	</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: {
	    size: { type: String },
		inline: { type: Boolean, default: true }
	},
	data() {
		return {
		}
	},
	computed: {
		...mapGetters([
			'query'
		]),
		inputSize() {
			return !_.isEmpty(this.size) ? 'o-input--'+this.size : null;
		},
		btnSize() {
			return !_.isEmpty(this.size) ? 'o-button--'+this.size : null;
		},
		keyword: {
		    get () {
		      	return this.query.keyword
		    },
		    set (value) {
		      	this.$store.commit('SET_KEYWORD', value)
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
			router.push({ path: 'search', query: this.query })
			location.reload()
		},
		getCurrentPosition(position) {
		    if(typeof google !== 'undefined'){
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(location.latitude, location.longitude);

                if (geocoder) {
                    geocoder.geocode({ 'latLng': latLng}, (results, status) => {
                        if (status == google.maps.GeocoderStatus.OK) {
                            let result = results.filter(function(item){
                                return item.types == 'locality,political';
							});
                            this.location = result[0].address_components[0].long_name;
                        }
                        else {
                            console.log("Geocoding failed: " + status);
                        }
                    });
                }
			}
		},
		getCurrentCity() {
//		    axios.get('/api/city').then(({data}) => {
//		        this.location = data.cityName;
//			});
		}
	},
	mounted() {
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.getCurrentPosition, this.getCurrentCity);
	    } else {
	    	this.getCurrentCity();
	    }
	}
}
</script>
