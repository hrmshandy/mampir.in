<template>
	<div class="main">
		<!--<map-view class="map&#45;&#45;detail"></map-view>-->

		<section class="section">
			<overview
				:venue-id="venueId"
				:name="name"
				:address="address"
				:cover="cover"
				:logo="logo"
				:categories="categories"
				:location="location"
				:rating="rating"
				:ratings="ratings">
			</overview>
		</section>
		<section class="section">
			<galleries :photos="photos"></galleries>
		</section>
		<section class="section">
			<reviews :venue-id="venueId" v-model="reviews"></reviews>
		</section>
		<footer>
	        <div class="footer-center">
	            <img src="/img/logo-footer.png" alt="">
	            <p>&copy; Copyright 2017 Mampir.in. All Right Reserved</p>
	            <ul class="social-icons">
	                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
	                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
	            </ul>
	        </div>
	    </footer>
	</div>
</template>

<script>
//import MapView from '../components/Map.vue'
import Overview from '../components/Overview.vue'
import Galleries from '../components/Galleries.vue'
import Reviews from '../components/Reviews.vue'

export default {
	components: { Overview, Galleries, Reviews },
	data() {
		return {
			venueId: 0,
			name: null,
			address: null,
			cover: null,
			logo: null,
			photos: [],
			categories: [],
			location: {},
			rating: 0,
			ratings: [],
			reviews: []
		}
	},
	created() {
		this.fetchData();
	},
	mounted() {

	},
	watch: {
	    // call again the method if the route changes
	    '$route': 'fetchData',
	    location(value) {
	    	Event.fire('load-map', value);
	    }
	},
	methods: {
		fetchData() {
			axios.get('/api/venue/'+this.$route.params.slug).then(({data}) => {
				// set venue id
				this.venueId = data.id;

				// set overview data
				this.name = data.name;
                this.address = data.address;
                this.cover = data.cover;
                this.logo = data.logo;
				this.photos = data.photos;
				this.categories = data.categories;
				this.location = { lat: data.lat, lng: data.lng };
				this.rating = data.rating;
				this.ratings = data.ratings;
				this.reviews = data.reviews;
	      	});
		},

	}
}
</script>
