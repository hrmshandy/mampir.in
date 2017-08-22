<template>
	<div class="journal">
		<div class="journal__top-wrapper">
			<div class="o-container">
				<div class="c-user-post u-mb-x4">
					<img :src="user.avatar" class="c-user-post__img" width="60">
					<div class="c-user-post__content">
						<h4 class="c-user-post__name">{{ user.name }}</h4>
						<p class="c-user-post__date">
							<!-- <i class="fa fa-clock-o"></i> -->
							<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
								<path d="M0 0h24v24H0z" fill="none"/>
								<path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
							</svg>
							{{ created_at | dateFormat('D MMMM YYYY') }}
						</p>
					</div>
				</div>
				<h1 class="o-section__title journal__title">
					{{ title }}
				</h1>
			</div>
		</div>
		<div class="journal__body">
			<div class="o-container">
				<div v-html="content" class="journal__content"></div>
			</div>
		</div>
		<div class="journal__bottom">
			<div class="o-container">
				<!--<div class="c-share">	-->
					<!--<h4>Bagikan</h4>-->
					<!--<div class="c-share__item">-->
						<!--<a href="#" class="o-button__share&#45;&#45;facebook o-button__share">-->
							<!--<i class="fa fa-facebook" aria-hidden="true"></i>-->
						<!--</a>-->
						<!--<a href="#" class="o-button__share&#45;&#45;twitter o-button__share">-->
							<!--<i class="fa fa-twitter"></i>-->
						<!--</a>	-->
					<!--</div>	-->
				<!--</div>-->
					
				<!--<div class="c-comment">-->
					<!--<h2 class="o-heading">Komentar</h2>-->
	                <!--&lt;!&ndash; <input v-for="photo in uploadedPhotos"  type="hidden" v-model="photo.filename"/> &ndash;&gt;-->
	                <!--<textarea rows="20" class="o-textarea" placeholder="Tulis Komentar...."></textarea>-->
	                <!--<div class="c-comment__item">	-->
		                <!--<div class="o-user-block c-comment__item&#45;&#45;child">-->
		                    <!--<div class="o-user-block__pic">-->
		                        <!--<img src="https://api.adorable.io/avatars/80/9ZMrVqklWD@mail.com.png" alt="">-->
		                    <!--</div>-->
		                    <!--<div class="o-user-block__info">-->
		                        <!--<span class="o-user-block__name">Darwis Bokim</span>-->
		                    <!--</div>-->
		                <!--</div>-->
		                <!--<div class="o-user-block__submit c-comment__item&#45;&#45;child">-->
		                    <!--<button class="o-button o-button&#45;&#45;primary write-a-review__button" @click="submitReview">Kirim Review</button>-->
		                <!--</div>-->
	                <!--</div>-->
	            <!--</div>-->
			</div>
		</div>

		<!-- Components -->
		<!--<div class="o-section c-related-journal">-->
			<!--<div class="o-container">-->
				<!--<h1 class="o-heading u-text-center u-mb-x5">-->
					<!--Journal Lainnya-->
				<!--</h1>-->
				<!--<div class="o-grid">-->
					<!--<div class="o-grid__col u-4/12@lg">-->
						<!--<div class="c-card c-card__related-journal">-->
							<!--<a href="#">-->
								<!--<img src="../../img/journal/related_search/1.jpg" class="o-img-content">-->
								<!--<div class="c-card__related-journal__content">-->
									<!--<h2 class="o-heading">-->
										<!--7 Nasi Goreng Di Bandung yang-->
										<!--Enaknya Selalu Terbayang-->
									<!--</h2>-->
								<!--</div>-->
							<!--</a>-->
						<!--</div>	-->
					<!--</div>-->
					<!--<div class="o-grid__col u-4/12@lg">-->
						<!--<div class="c-card c-card__related-journal">-->
							<!--<a href="#">-->
								<!--<img src="../../img/journal/related_search/1.jpg" class="o-img-content">-->
								<!--<div class="c-card__related-journal__content">-->
									<!--<h2 class="o-heading">-->
										<!--7 Nasi Goreng Di Bandung yang-->
										<!--Enaknya Selalu Terbayang-->
									<!--</h2>-->
								<!--</div>-->
							<!--</a>-->
						<!--</div>	-->
					<!--</div>-->
					<!--<div class="o-grid__col u-4/12@lg">-->
						<!--<div class="c-card c-card__related-journal">-->
							<!--<a href="#">-->
								<!--<img src="../../img/journal/related_search/1.jpg" class="o-img-content">-->
								<!--<div class="c-card__related-journal__content">-->
									<!--<h2 class="o-heading">-->
										<!--7 Nasi Goreng Di Bandung yang-->
										<!--Enaknya Selalu Terbayang-->
									<!--</h2>-->
								<!--</div>-->
							<!--</a>-->
						<!--</div>	-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>	-->
		<!--</div>-->
	</div>	
</template>

<script>

	export default {
	    data() {
	      return {
	          title: '',
			  content: '',
			  created_at: '',
			  user: {
	              name: '',
				  avatar: ''
			  }
		  }
		},
	    watch: {
	        '$route': 'fetchData'
		},
		methods: {
            fetchData() {
				axios.get(`/api/posts/${this.$route.params.slug}`).then(({data}) => {
				    this.title = data.title;
				    this.content = data.content;
				    this.created_at = data.created_at;
				    this.user.name = data.user.name;
				    this.user.avatar = data.user.avatar;
				});
			}
		},
		mounted() {
	        this.fetchData();
		}
	}

</script>