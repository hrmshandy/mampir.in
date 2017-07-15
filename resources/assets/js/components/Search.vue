<template>
	<div :class="['c-search', {'c-search--inline': inline, 'is-shown': showSearchForm}]">
		<button class="c-search__button iconim iconim-search-close" @click="toggleSearch"></button>
		<div class="c-search__form">
			<div class="c-form-group">
				<input type="text" :class="['o-input', inputSize]" placeholder="Lagi Dimana?" v-model="location" id="location">
			</div>
			<div class="c-form-group">
				<input type="text" :class="['o-input', inputSize]" placeholder="Area" v-model="area">
			</div>
			<div class="c-form-group">
				<input type="text" :class="['o-input', inputSize]" placeholder="Nyari Apa?" v-model="keyword">
			</div>
			<div class="c-form-group">
				<button :class="['o-button', 'o-button--primary', 'o-button--block', btnSize]" @click="submit" type="button">
					<span v-if="!inline">Yuk,&nbsp;</span>
					<strong>Cari<span v-if="!inline">!</span></strong>
					<span class="text-cari-lagi" style="display: none;">Cari Lagi</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loaded } from '../api/map/loader'

export default {
	props: {
	    size: { type: String },
		inline: { type: Boolean, default: true }
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
			router.push({ path: '/search', query: this.query })
			location.reload()
		},
		getCurrentPosition(position) {
            loaded.then(() => {
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
			});
		},
		getCurrentCity() {
		    if(typeof Cookies.get('user-city') === 'undefined') {
                //Event.fire('show-cities-modal');
            } else {
                this.$store.commit('SET_LOCATION', Cookies.get('user-city'));
            }
		},
        toggleSearch() {
		  if(this.showSearchForm) {
		      this.showSearchForm = false;
		      iconim.off('search-close');
		  } else {
              this.showSearchForm = true;
              iconim.on('search-close');
		  }
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
