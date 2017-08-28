<template>
	<section class="o-section o-section--grey">
        <div class="o-container--fluid">
	        <div v-masonry
	             transition-duration="0.3s"
	             item-selector=".o-grid__col"
	             column-width=".o-grid__sizer"
	             class="o-grid">
	            <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm" v-for="i in 8">
	                <div class="c-card c-card--dialog c-card--dialog__placeholder">
	                    <div class="o-user-block">
	                        <div class="o-user-block__pic">
	                            <img src="https://graph.facebook.com/v2.9/337521340020292/picture?type=normal" alt="">
	                        </div>
	                        <div class="o-user-block__info">
	                            <span class="o-user-block__name">Dhika</span>
	                            <span class="o-user-block__status">beberapa detik yang lalu</span>
	                        </div>
	                    </div>
	                    <div class="c-card__body">
	                        <!-- <rate v-model="review.rating" readonly></rate> -->
	                        <div class="c-rate"><span class="c-rate__item is-rated" style="cursor: auto;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="o-star"><path d="M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"></path><path d="M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z" class="o-star__half"></path></svg></span><span class="c-rate__item is-rated" style="cursor: auto;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="o-star"><path d="M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"></path><path d="M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z" class="o-star__half"></path></svg></span><span class="c-rate__item is-rated" style="cursor: auto;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="o-star"><path d="M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"></path><path d="M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z" class="o-star__half"></path></svg></span><span class="c-rate__item is-rated" style="cursor: auto;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="o-star"><path d="M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"></path><path d="M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z" class="o-star__half"></path></svg></span><span class="c-rate__item is-rated" style="cursor: auto;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="o-star"><path d="M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"></path><path d="M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z" class="o-star__half"></path></svg></span> <!----></div>
	                        <!-- <carousel v-if="review.photos.length > 0" class="o-photoreview" :options="carouselOptions" :timeout="1000">
	                            <template v-for="photo in review.photos">
	                                <carousel-item class="o-photoreview__item">
	                                    <div class="o-photoreview__image" :style="{ backgroundImage: 'url(/storage'+photo+')' }"></div>
	                                </carousel-item>
	                            </template>
	                        </carousel> -->
	                        <p>   
		                        Authentic Sunda cuisine. Traditional restaurant.
								It's better to take away food and could enjoy at home.
								Must buy: daging babat sapi goreng (fried tripe meat).
	                        </p>
	                    </div>
	                </div>
	            </div>
             </div>
        </div>
    </section>
</template>

<script>
    
</script>