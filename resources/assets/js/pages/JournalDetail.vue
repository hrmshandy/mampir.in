<template>
	<div class="journal o-container">
		<div class="journal__top-wrapper">
			<h1 class="o-section__title">
				3 Bakmi Di BANDUNG Yang Harus Kamu <br>Coba SEGERA!
			</h1>
		</div>
		<div class="journal__body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in. Phasellus purus lorem, fringilla vel bibendum vitae, tincidunt eu ante. Mauris efficitur velit at velit tristique luctus. Sed eget purus sapien. Sed dolor arcu, aliquam sit amet dictum at, venenatis vel lorem.
			</p>
			<hr>
			<div class="journal__content">
				<h2 class="o-heading-counter">1. Mie Danau Toba</h2>
            	<rating value="4" method="get"></rating>
                <p class="c-rating-review-display__text">50 Reviews</p>
				<p>Jl. Kemang Selatan 1</p>

				<img src="../../img/journal/dummy-2.jpg" class="o-journal-img">

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in. Phasellus purus lorem, fringilla vel bibendum vitae, tincidunt eu ante. Mauris efficitur velit at velit tristique luctus. Sed eget purus sapien. Sed dolor arcu, aliquam sit amet dictum at, venenatis vel lorem. 
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in.
				</p>	
			</div>
			<div class="journal__content">
				<h2 class="o-heading-counter">2. Bakmie Apin</h2>
            	<rating value="4" method="get"></rating>
                <p class="c-rating-review-display__text">50 Reviews</p>
				<p>Jl. Kemang Selatan 1</p>

				<img src="../../img/journal/dummy-3.jpg" class="o-journal-img">

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in. Phasellus purus lorem, fringilla vel bibendum vitae, tincidunt eu ante. Mauris efficitur velit at velit tristique luctus. Sed eget purus sapien. Sed dolor arcu, aliquam sit amet dictum at, venenatis vel lorem. 
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in.
				</p>	
			</div>
			<div class="journal__content">
				<h2 class="o-heading-counter">3. Warung Upnormal</h2>
            	<rating value="4" method="get"></rating>
                <p class="c-rating-review-display__text">50 Reviews</p>
				<p>Jl. Kemang Selatan 1</p>

				<img src="../../img/journal/dummy-1.jpg" class="o-journal-img">

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in. Phasellus purus lorem, fringilla vel bibendum vitae, tincidunt eu ante. Mauris efficitur velit at velit tristique luctus. Sed eget purus sapien. Sed dolor arcu, aliquam sit amet dictum at, venenatis vel lorem. 
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar diam. Nam pretium ligula arcu, nec rhoncus lorem fermentum in.
				</p>	
			</div>
		</div>

		<div class="journal__bottom">
			<div class="share">
				
			</div>
				
			<div class="c-comment">
                <input v-for="photo in uploadedPhotos"  type="hidden" v-model="photo.filename"/>
                <textarea rows="20" class="o-textarea" placeholder="Tulis Komentar...."></textarea>
                <div class="c-comment__item">	
	                <div class="o-user-block c-comment__item--child">
	                    <div class="o-user-block__pic">
	                        <img src="https://api.adorable.io/avatars/80/9ZMrVqklWD@mail.com.png" alt="">
	                    </div>
	                    <div class="o-user-block__info">
	                        <span class="o-user-block__name">Darwis Bokim</span>
	                    </div>
	                </div>
	                <div class="o-user-block__submit c-comment__item--child">
	                    <button class="o-button o-button--primary write-a-review__button" @click="submitReview">Kirim Review</button>
	                </div>
                </div>
            </div>

		</div>
	</div>	
</template>

<script>
	import Rating from '../components/Rating.vue'

	export default {
		components: { Rating }
	}

</script>