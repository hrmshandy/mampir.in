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
				<template v-if="!isEmpty">
					<div class="o-grid">
						<template v-for="venue in listings">
							<div class="o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs">
								<div :id="'venue-card-'+venue.id" class="c-venue-card">
									<div class="c-venue-card__photo">
										<router-link :to="'/detail/'+venue.slug">
											<img :src="venue.cover" alt="">
										</router-link>
									</div>
									<div class="c-venue-card__info">
										<router-link :to="'/detail/'+venue.slug">
											<h5 class="c-venue-card__name o-type-18">{{ venue.name }}</h5>
											<div class="c-venue-card__category">
												<template v-for="(c, index) in venue.categories">
													<small class="text-muted">
														{{ c.name }}
														<span v-if="(index + 1) != venue.categories.length">, </span>
													</small>
												</template>
											</div>
											<div>
												<span class="c-round"><i class="fa fa-cutlery"></i></span>
											</div>
										</router-link>
									</div>
									<div class="c-venue-card__footer">
										<router-link :to="'/detail/'+venue.slug">
											<div class="c-venue-card__rating">
												<rating :venue-id="venue.id" :value="venue.rating" method="get"></rating>
												<small class="text-muted">{{ venue.total_reviews }} Reviews</small>
											</div>
											<div class="c-venue-card__price">
											</div>
										</router-link>
									</div>
								</div>
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
					<button class="o-button o-button--primary-outlined button--icon  pull-right" @click="clickViewListing">
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
import { mapGetters, mapActions } from 'vuex'
import Map from '../api/map'
//import MapView from '../components/Map.vue'
import Rating from '../components/Rating.vue'
import Pagination from '../components/Pagination.vue'

export default {
	components: { Rating, Pagination },
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
	      	viewMaps: true
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
	    this.$store.commit('SET_FOOTER', false);
	    var loc = { location: document.getElementById('location').value };
	    var query = Object.assign({}, this.query, this.$route.query, loc);
        this.fetchData(query)
	},
	watch: {
	    listings(value) {
            let M = new Map;

            if(M.map === undefined){
                M.init();
            }
            setTimeout(() => {
                M.loadMarker(value);
            }, 1000);
	    }
	},
	methods: {
	    fetchData (query) {
	      	this.error = this.listings = null
	      	this.loading = true

	      	let Q = this.serialize(query);

	      	axios.get('/api/search?'+Q).then(({data}) => {
	      		this.loading = false;
	      		this.listings = _.shuffle(data.data);
	      		this.currentPage = data.current_page;
	      		this.perPage = data.per_page;
	      		this.totalRecords = data.total;
	      		if(data.data.length <= 0) {
	      			this.isEmpty = true;
	      		}
	      	})
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
        serialize(obj, prefix) {
            var str = [], p;
            for(p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        serialize(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        }
	}
}
</script>
