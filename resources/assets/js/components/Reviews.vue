<template>
    <div>
        <div class="row align-items-center">
            <div class="col"><h3 class="review-header-title">Review ({{ reviews.length }})</h3></div>
            <div class="col text-right">
                <button class="btn btn-primary" @click="writeReview">Write a Review</button>
            </div>
        </div>
        <hr>
        <div v-show="writingReview" class="card write-a-review">
            <div class="card-header">
                <div class="row align-items-center">
                    <div class="col">Write a Review</div>
                    <div class="col text-right"><a href="#" @click.prevent="cancelWriteReview">Cancel</a></div>
                </div>
            </div>
            <div class="card-block">

                <div class="row">
                    <div class="col-2">
                        <img :src="user.avatar" alt="" class="rounded-circle">
                    </div>
                    <div class="col-10">
                        <div class="form-group">
                            <small><strong>Your Rating</strong></small></br>
                            <rating v-model="form.rating" :venue-id="venueId" method="post"></rating>
                        </div>
                        <div class="form-group">
                            <textarea v-model="form.content" rows="4" class="form-control" placeholder="Tell about your experience or leave a tip for others"></textarea>
                        </div>
                        <div class="form-group text-right">
                            <button class="btn btn-primary write-a-review__button" @click="submitReview">Submit your Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-review-grid">
            <div v-for="review in reviews" class="c-review-cell">
                <div class="review-card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col">
                                <rating v-model="review.rating" :venue-id="venueId" method="get"></rating>
                            </div>
                            <!--<div class="col text-right">-->
                            <!--<button class="btn btn-outline-primary btn-sm"><i class="fa fa-thumbs-up"></i> Helpful | {{ review.likes }}</button>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div class="card-block">
                        <p>
                            {{ review.content }}
                        </p>
                    </div>
                    <div class="card-footer text-muted">
                        <div class="user-block">
                            <img :src="review.user.avatar" alt="" class="user-block__pic">
                            <div class="user-block__info">
                                <span class="user-block__name">{{ review.user.name }}</span>
                                <span class="user-block__status">{{ formatedDate(review.created_at) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Form from '../utils/form.js'
import Rating from './Rating.vue'

export default {
    components: { Rating },
    model: {
        prop: 'reviews',
        event: 'reviews'
    },
    props: {
        venueId: { type: Number, required: true },
        reviews: { type: Array, required: true }
    },
    computed: {
        ...mapGetters([
            'authenticated',
            'user'
        ])
    },
    watch: {
        venueId(value) {
            this.form.venue_id = value;
        },
        'user.id': function(value) {
            this.form.user_id = value;
        }
    },
    data() {
        return {
            writingReview: false,
            form: new Form({
                user_id: 0,
                venue_id: 0,
                rating: 0,
                content: null,
                //photos: []
            })
        }
    },
    created() {

    },
    methods: {
        writeReview(e) {
            if(!this.authenticated) {
                Event.fire('show-login-modal', e);
            } else {
                this.writingReview = true;
            }
        },
        cancelWriteReview() {
            this.writingReview = false;
        },
        submitReview() {
            this.form.submit('post', '/api/review').then((response) => {
                this.reviews.unshift(response);
                this.writingReview = false;
            }).catch((errors) => {
                console.log(errors);
            });
        },
        formatedDate(date){
            return moment(date).fromNow();
        }
    }
}
</script>
