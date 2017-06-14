<template>
    <div class="container-fluid">
        <div :class="['p-venue-detail__overview', {'has-no-logo': !logo}]">
            <div class="p-venue-detail__logo"></div>
            <div class="p-venue-detail__info">
                <h1 class="p-venue-detail__title">{{ name }}</h1>
                <small class="text-muted p-venue-detail__categories">{{ formatedCategories }}</small>
                <p class="p-venue-detail__address">
                    <i class="fa fa-map-marker"></i>
                    {{ address }}
                    <a :href="directionLink" target="_blank" class="p-venue-detail__map-direction"><i class="fa fa-share"></i> Get Direction</a>
                </p>
                <hr>
            </div>
            <div class="p-venue-detail__rating">
                <h5>Review of {{ name }}</h5>
                <div class="c-rating-review">
                    <ul class="c-rating-review-list">
                        <li v-for="i in 5">
                            <div>{{ getRating(i-1) }} <o-star></o-star></div>
                            <div>
                                <div class="o-rating-bar">
                                    <div class="o-rating-bar__value" :style="{ width: getRetingBarWidth(i-1) }"></div>
                                </div>
                            </div>
                            <div>{{ getReviews(i-1) }}</div>
                        </li>
                    </ul>
                    <div class="c-rating-review-display">
                        <span class="c-rating-review-display__number">{{ rating }}</span>
                        <rating v-model="rating" :venue-id="venueId" method="get"></rating>
                        <p class="c-rating-review-display__text">{{ totalReviews }} Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from './Rating.vue'
import OStar from '../objects/Star.vue'

export default {
    components: { Rating, OStar },
    props: ['venueId', 'name', 'address', 'cover', 'logo', 'categories', 'location', 'rating', 'ratings'],
    computed: {
        formatedCategories() {
            return _.map(this.categories,'name').join(", ")
        },
        totalReviews() {
            return _.sumBy(this.ratings, 'reviews')
        },
        directionLink() {
            return `http://maps.google.com/maps?saddr=(${this.location.lat}, ${this.location.lng})&daddr=My+location`
        }
    },
    methods: {
        getRating(index) {
            return (typeof this.ratings[index] !== 'undefined') ? this.ratings[index].rating : 0
        },
        getReviews(index) {
            return (typeof this.ratings[index] !== 'undefined') ? this.ratings[index].reviews : 0
        },
        getRetingBarWidth(index) {
            return (typeof this.ratings[index] !== 'undefined')
                        ? ((this.ratings[index].reviews/this.totalReviews)*100)+'%'
                        : '0%'
        }
    }
}
</script>
