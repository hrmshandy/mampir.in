<template>
	<section class="o-section">
		<div class="p-search has-no-map">
			<div class="p-search__listings">
				<template v-if="!isEmpty">
					<div class="o-grid">
						<template v-for="venue in listings">
							<div class="o-grid__col u-6/12@sm u-12/12@xs">
								<div class="c-venue-card">
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
				<!--<map-view></map-view>-->
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
        console.log(this.$route.query);

	},
	mounted() {
	    var query = Object.assign({}, this.query, this.$route.query)
        this.fetchData(query)
	},
	watch: {
//	    listings(value) {
//	    	Event.fire("updated_results", value);
//	    }
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
	    getCover(photos) {
	    	return !_.isEmpty(photos) ? photos[0].filename : 'default.jpg'
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
