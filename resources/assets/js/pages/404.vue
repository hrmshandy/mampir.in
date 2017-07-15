<template>
	<div>
		<section class="not-found">
			<div class="o-container">
				<div class="o-404-grid">
					<div class="not-found__section">
						<h1 class="o-heading-404">Oops!</h1>
						<p class="o-description">
							Maaf kami tidak menemukan apa yang kamu cari <br>
							Mungkin berasal dari planet lain ??
						</p>
						<search-form size="large" :inline="false"></search-form>
					</div>
					<div class="not-found__section">
						<img src="../../img/404/robots.png" class="o-image-robots">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import SearchForm from '../components/Search.vue'

export default {
	components: { SearchForm },
	mounted() {
	    this.$store.commit('SET_FOOTER', false);
	    var loc = { location: document.getElementById('location').value };
	    var query = Object.assign({}, this.query, this.$route.query, loc);
        this.fetchData(query)
	},
}	
	
</script>