<template>
    <div>
        <div v-masonry
             transition-duration="0.3s"
             item-selector=".o-grid__col"
             column-width=".o-grid__sizer"
             class="o-grid">

            <div class="o-grid__sizer u-3/12@lg u-6/12@sm"></div>

            <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm" v-show="(authenticated && !reviewed) || editingReview">
                <div :class="[
                    'c-card',
                    'c-card--dialog',
                    'c-card--dialog__placeholder',
                    'c-card--dialog__review',
                    'c-review-form',
                    {'c-review-form--invalid': form.errors.any()}
                ]">

                    <div class="o-user-block">
                        <div class="o-user-block__pic">
                            <img :src="user.avatar" alt="">
                        </div>
                        <div class="o-user-block__info">
                            <span class="o-user-block__name">{{ user.name }}</span>
                        </div>
                    </div>
                    <div class="c-card__body">
                        <rate v-model="form.rating" show-text></rate>
                        <input v-for="photo in uploadedPhotos"  type="hidden" v-model="photo.filename"/>
                        <image-upload v-model="form.imageCollection"></image-upload>
                        <textarea v-model="form.content" rows="4" class="o-textarea" placeholder="Ceritakan pengalamanmu ..."></textarea>
                    </div>
                    <span v-if="form.errors.any()" class="c-review-form__invalid-message">Semua field wajib di isi.</span>
                    <div class="o-user-block__submit c-review-form__control">
                        <template v-if="editingReview">
                            <button class="o-button o-button--primary write-a-review__button" @click="updateReview" :disabled="loading">
                                <span v-if="loading">Loading...</span>
                                <span v-else>Update Review</span>
                            </button>
                            <button class="o-button o-button--default write-a-review__button" @click="cancelUpdateReview">
                                Cancel
                            </button>
                        </template>
                        <template v-else>
                            <button class="o-button o-button--primary write-a-review__button" @click="submitReview" :disabled="loading">
                                <span v-if="loading">Loading...</span>
                                <span v-else>Kirim Review</span>
                            </button>
                        </template>
                    </div>
                </div>
            </div>

            <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm" v-show="(!authenticated && !reviewed)">
                <div class="c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__dummy">
                    <!--   <div class="c-card__header">
                          <rating v-model="form.rating" :venue-id="venueId" method="post"></rating>
                      </div> -->
                    <div class="o-user-block">
                        <div class="o-user-block__pic">
                            <img :src="user.avatar" alt="">
                        </div>
                        <div class="o-user-block__info">
                            <span class="o-user-block__name">{{ user.name }}</span>
                        </div>
                    </div>
                    <div class="c-card__body">
                        <h2 class="c-card--dialog__dummy__title">
                            Tulis Review Kamu Sekarang
                        </h2>
                        <button class="o-button o-button--primary" @click="writeReview">
                            Tulis Review
                        </button>
                    </div>
                    <div class="c-card__footer">
                    </div>
                </div>
            </div>

            <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm" v-if="reviewed && !editingReview">
                <div class="c-card c-card--dialog c-card--dialog__placeholder">
                    <div class="o-user-block">
                        <div class="o-user-block__pic">
                            <img :src="myReview.user.avatar" alt="">
                        </div>
                        <div class="o-user-block__info">
                            <span class="o-user-block__name">{{ myReview.user.name }}</span>
                            <span class="o-user-block__status">{{ formatedDate(myReview.created_at) }}</span>
                        </div>
                    </div>
                    <div class="c-card__body">
                        <rate v-model="myReview.rating" readonly></rate>
                        <carousel v-if="myReview.photos.length > 0" class="o-photoreview" :options="carouselOptions" :timeout="1000">
                            <template v-for="photo in myReview.photos">
                                <carousel-item class="o-photoreview__item">
                                    <div class="o-photoreview__image" :style="{ backgroundImage: 'url(/storage'+photo.filename+')' }"></div>
                                </carousel-item>
                            </template>
                        </carousel>
                        <p>
                            {{ myReview.content }}
                        </p>
                        <div class="u-text-right">
                            <a href="#" @click.prevent="editReview">Edit</a>
                        </div>
                    </div>
                </div>
            </div>

            <div v-masonry-tile v-for="review in reviews" class="o-grid__col u-3/12@lg u-6/12@sm">
                <div class="c-card c-card--dialog c-card--dialog__placeholder">
                    <div class="o-user-block">
                        <div class="o-user-block__pic">
                            <img :src="review.user.avatar" alt="">
                        </div>
                        <div class="o-user-block__info">
                            <span class="o-user-block__name">{{ review.user.name }}</span>
                            <span class="o-user-block__status">{{ formatedDate(review.created_at) }}</span>
                        </div>
                    </div>
                    <div class="c-card__body">
                        <rate v-model="review.rating" readonly></rate>
                        <carousel v-if="review.photos.length > 0" class="o-photoreview" :options="carouselOptions" :timeout="1000">
                            <template v-for="photo in review.photos">
                                <carousel-item class="o-photoreview__item">
                                    <div class="o-photoreview__image" :style="{ backgroundImage: 'url(/storage'+photo+')' }"></div>
                                </carousel-item>
                            </template>
                        </carousel>
                        <p>
                            {{ review.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Form from '../utils/form.js'
import Rate from './Rate.vue'
//import Dropzone from 'vue2-dropzone'
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'
import ImageUpload from './ImageUpload.vue'

export default {
    components: { Rate, Carousel, CarouselItem, ImageUpload },
    model: {
        prop: 'reviews',
        event: 'reviews'
    },
    props: {
        venueId: { required: true },
        venueType: String,
        myReviewValue: { type: Object, required: false },
        reviews: { required: true }
    },
    computed: {
        ...mapGetters([
            'authenticated',
            'user'
        ]),
        isInvalid() {
            return !this.form.rating || !this.form.content || !this.form.imageCollection;
        }
    },
    data() {
//        const user
        return {
            writingReview: false,
            reviewed: false,
            editingReview: false,
            activedUpload: false,
            loading: false,
            myReview: '',
            form: new Form({
                user_id: this.$store.getters.user.id,
                venue_id: null,
                google_id: null,
                rating: 0,
                content: null,
                imageCollection: ''
            }),
            uploadedPhotos:[],
            carouselOptions: {
                cellAlign: 'left',
                contain: true
            }
        }
    },
    watch: {
        venueId(value) {
            if(this.venueType === 'google') {
                this.form.google_id = value;
            } else {
                this.form.venue_id = value;
            }
        },
        newReview() {

        },
        myReviewValue(value) {
          if(value)
              this.myReview = value;
        },
        myReview(value) {
            if(value) {
                this.reviewed = true;

                this.form.user_id = this.$store.getters.user.id;
                this.form.rating = value.rating;
                this.form.content = value.content;
                if(value.photos.length > 0)
                    this.form.imageCollection = '/storage'+value.photos[0].filename;
            }

        },
        'user.id': function(value) {
            this.form.user_id = value;
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
            this.loading = true;
            this.form.submit('post', '/api/review').then((response) => {
                if(response){
                    this.loading = false;
                    this.myReview = response;
                    this.writingReview = false;
                    this.reviewed = true;
                    setTimeout(() => {
                        this.$redrawVueMasonry();
                    });
                }
            }).catch((errors) => {
                this.loading = false;
                console.log(errors);
            });
        },
        formatedDate(date){
            return moment(date).fromNow();
        },
        activeUpload(e) {
            this.activedUpload = true;
        },
        showSuccess(file, response) {
            if(response)
                this.uploadedPhotos.push(response);
        },
        editReview() {
            setTimeout(() => {
                this.$redrawVueMasonry();
            });
            this.editingReview = true;
        },
        updateReview() {
            this.loading = true;
            this.form.submit('put', '/api/review/'+this.myReview.id).then((response) => {
                if(response){
                    this.loading = false;
                    this.myReview = response;
                    this.editingReview = false;
                    this.reviewed = true;
                    setTimeout(() => {
                        this.$redrawVueMasonry();
                    });
                }
            }).catch((errors) => {
                this.loading = false;
                console.log(errors);
            });
        },
        cancelUpdateReview() {
            setTimeout(() => {
                this.$redrawVueMasonry();
            });
            this.editingReview = false;
        }
    }
}
</script>