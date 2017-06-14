<template>
	<form class="search-form">
		<div class="form-group">
		    <input type="text" :class="['form-control', inputSize]" placeholder="Lagi Dimana?" v-model="location">
		</div>
		<div class="form-group">
		    <input type="text" :class="['form-control', inputSize]" placeholder="Nyari Apa?" v-model="keyword">
		</div>
		<div class="form-group">
		    <button :class="['btn', 'btn-primary', 'btn-block', btnSize]" @click="submit" type="button">Yuk, <strong>Cari!</strong></button>
		</div>
	</form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: ['size'],
	data() {
		return {
		}
	},
	computed: {
		...mapGetters([
			'query'
		]),
		inputSize() {
			return !_.isEmpty(this.size) ? 'form-control-'+this.size : null;
		},
		btnSize() {
			return !_.isEmpty(this.size) ? 'btn-'+this.size : null;
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
		showPosition(position) {
			location.latitude=position.coords.latitude;
		    location.longitude=position.coords.longitude;
		    var geocoder = new google.maps.Geocoder();
		    var latLng = new google.maps.LatLng(location.latitude, location.longitude);

		 	if (geocoder) {
			    geocoder.geocode({ 'latLng': latLng}, (results, status) => {
			       	if (status == google.maps.GeocoderStatus.OK) {
			        	this.location = results[0].formatted_address
			       	}
			       	else {
			        	console.log("Geocoding failed: " + status);
			       	}
			    });
		  	}
		}
	},
	mounted() {
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.showPosition);
	    } else {
	    	alert("Geolocation is not supported by this browser.");
	    }
	}
}
</script>
