<template>
	<section class="o-section o-section--grey">
		<div class="p-search">
			<div class="button--wrapper">
				<button class="o-button o-button--small pull-right">
					<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
					    <path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</button>
			</div>
			<div class="p-search__listings">
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
											<template v-for="(c, index) in venue.categories">
												<small class="text-muted">
													{{ c.name }}
													<span v-if="(index + 1) != venue.categories.length">, </span>
												</small>
											</template>
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
			<div class="p-search__map">
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
	      	isEmpty: false
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
	      		this.loading = false
	      		this.listings = data.data;
	      		this.currentPage = data.current_page;
	      		this.perPage = data.per_page;
	      		this.totalRecords = data.total;
	      		if(data.data.length <= 0) {
	      			this.isEmpty = true;
	      		}
	      	})
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
