<template>
	<div>
		<div class="o-section o-section--journal">
			<div class="o-container--fluid">
				<h1 class="o-section__title u-text-center">
					Journal
				</h1>
				<div class="o-filter-journal">
					<div class="o-filter-journal__wrapper">
						<div class="o-filter-journal__item">
							<a href="#">Highlight</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Food for Fun</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Recipes</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Peoples</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="o-section o-section--grey">
            <div class="o-container--fluid">
				<div v-masonry
					 transition-duration="0.3s"
					 item-selector=".o-grid__col"
					 column-width=".o-grid__sizer"
					 class="o-grid">
					<div class="o-grid__sizer u-3/12@lg u-6/12@sm"></div>

					<div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm">
						<div class="c-card">
							<a href="#" class="c-card__upload-journal" @click.prevent="createNewJournal">
								<div class="c-card__body">
									<div class="c-card__inner">
										<i class="fa fa-pencil-square-o fa-5x" aria-hidden="true"></i>
										<h2 class="c-card--dialog__dummy__title">
											Upload Journal Kamu <br> Sekarang!
										</h2>
									</div>
								</div>
							</a>
						</div>
					</div>

					<template v-for="post in posts">
						<div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm">
							<div class="c-card c-card--dialog c-card--dialog__placeholder">
								<div class="o-user-block">
									<div class="o-user-block__pic">
										<img :src="post.user.avatar" alt="">
									</div>
									<div class="o-user-block__info">
										<span class="o-user-block__name">{{ post.user.name }}</span>
										<span class="o-user-block__status">{{ post.created_at | dateFromNow }}</span>
									</div>
								</div>
								<div class="c-card__body">
									<a :href="`/journal/${post.user.username}/${post.slug}`">
										<h3 class="u-color-primary u-mb-x2">{{ post.title }}</h3>
									</a>
									<div>{{ post.excerpt }}</div>
								</div>
							</div>
						</div>
					</template>
				</div>
            </div>
        </section>	
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'

	export default {
	    data() {
	      return {
	          posts: []
		  }
		},
	    watch: {
	      '$route': 'fetchData'
		},
		computed: {
            ...mapGetters([
                'authenticated'
            ]),
		},
	    methods: {
	        fetchData() {
	            axios.get('/api/posts').then(({data}) => {
					this.posts = data;
				});
			},
            createNewJournal(e) {
                if(!this.authenticated) {
                    Event.fire('show-login-modal', e);
                } else {
                    window.location = '/journal/create';
                }
			}
		},
		mounted() {
	        this.fetchData();
		}
	}
</script>