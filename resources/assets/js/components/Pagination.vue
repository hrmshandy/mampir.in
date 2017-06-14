<template>
	<nav aria-label="Page navigation">
	  	<ul class="pagination">
	  		<template v-for="element in elements">
	  			<!-- "Three Dots" Separator -->
	            <li v-show="typeof element === 'string'" class="page-item disabled"><span class="page-link">{{ element }}</span></li>

	            <!-- Array Of Links -->
	            <template v-if="element instanceof Array">
	            	<li v-if="element.length > 1" v-for="page in element" :class="['page-item', { 'active': page == currentPage}]">
	            		<span v-if="page == currentPage" class="page-link">{{ page }}</span>
	            		<a v-else href="#" @click.prevent="setPage(page)" class="page-link">{{ page }}</a>
	            	</li>
	            </template>
	  		</template>
	  	</ul>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Pagination from '../api/pagination'

export default {
	data() {
		return {
			pagination: null
		}
	},
	props: {
		currentPage: Number,
		perPage: Number,
		records: Number
	},
	computed: {
		...mapGetters({
			query: 'query'
		}),
	  	elements() {
	  		return new Pagination(this.records, this.perPage, this.currentPage).render();
	  	}
	},
	methods: {
		setPage(page) {
			let query = this.query;
			query.page = page;

			this.$emit('change', page, query);
		}
	}
}
</script>
