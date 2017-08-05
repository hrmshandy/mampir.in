<template>
    <div class="o-container--fluid o-container--reviews">
        <div :class="['p-venue-detail__overview', {'has-no-logo': !logo}]">
            <div class="p-venue-detail__logo"></div>
            <div class="p-venue-detail__info">
                <h1 class="p-venue-detail__title o-type-35 u-mb-x2">{{ name }}</h1>
                <!-- <small class="text-muted p-venue-detail__categories">{{ formatedCategories }}</small> -->
                <div class="c-rating-review-display c-rating-review-display__mobile">
                    <!-- <span class="c-rating-review-display__number">{{ rating }}</span> -->
                    <rating v-model="rating" :venue-id="venueId" method="get"></rating>
                    <!-- <p class="c-rating-review-display__text">{{ totalReviews }} Reviews</p> -->
                </div>
                <div class="p-venue-detail__list">
                    <div class="p-venue-detail__address__icon">
                        <i class="fa fa-map-marker"></i>
                    </div>
                    <p class="p-venue-detail__address">
                        {{ address }}
                        <a :href="directionLink" target="_blank" class="p-venue-detail__map-direction">
                            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>

                             Get Direction
                        </a>
                    </p>
                </div>

                <div class="p-venue-detail__list">
                    <div class="p-venue-detail__address__icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <p class="p-venue-detail__address">
                        {{ phone_number }}
                    </p>
                </div>

                <!--<div class="p-venue-detail__list">-->
                    <!--<div class="p-venue-detail__address__icon">-->
                        <!--<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">-->
                            <!--<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>-->
                            <!--<path d="M0 0h24v24H0z" fill="none"/>-->
                        <!--</svg>-->
                    <!--</div>-->
                    <!--<p class="p-venue-detail__address">-->
                        <!--Rp 10.000 - Rp 50.000-->
                    <!--</p>-->
                <!--</div>-->

                <!--<div class="p-venue-detail__list">-->
                    <!--<div class="p-venue-detail__address__icon">-->
                        <!--<i class="fa fa-clock-o" aria-hidden="true"></i>-->
                    <!--</div>-->
                    <!--<p class="p-venue-detail__address">-->
                        <!--Sen - Sab : 00:00 - 24:00-->
                    <!--</p>-->
                <!--</div>-->


                <!-- <hr> -->
            </div>
            <div class="c-rating-review">
                <div class="c-rating-review-display">
                    <span class="c-rating-review-display__number">{{ rating }}</span>
                    <rating v-model="rating" :venue-id="venueId" method="get"></rating>
                    <p class="c-rating-review-display__text">{{ totalReviews }} Reviews</p>
                </div>
                <ul class="c-rating-review-list">
                    <li v-for="(i, index) in ratings">
                        <div>{{ 5-index }} <o-star></o-star></div>
                        <div class="o-progress-bar__wrapper">
                            <div class="o-progress-bar">
                                <div class="o-progress-bar__value" :style="{ width: getRetingBarWidth(i-1) }"></div>
                            </div>
                        </div>
                        <div>{{ i }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from './Rating.vue'
import OStar from '../objects/Star.vue'

export default {
    components: { Rating, OStar },
    props: ['venueId', 'name', 'address', 'cover', 'logo', 'phone_number', 'categories', 'location', 'rating', 'ratings'],
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
