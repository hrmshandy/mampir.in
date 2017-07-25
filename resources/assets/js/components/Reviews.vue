<template>
    <div>
        <div class="o-grid o-grid--middle">
            <div class="o-grid__col u-6/12"><h3 class="review-header-title o-type-26 u-color-primary">Review</h3></div>
            <!-- <div class="o-grid__col u-6/12 u-text-right">
                <button class="o-button o-button--primary" @click="writeReview">Write a Review</button>
            </div> -->
        </div>
        <hr>

        <!-- <div v-show="writingReview" class="card write-a-review">
            <div class="card-header">
                <div class="o-grid o-grid--middle">
                    <div class="o-grid__col u-6/12">Write a Review</div>
                    <div class="o-grid__col u-6/12 u-text-right"><a href="#" @click.prevent="cancelWriteReview">Cancel</a></div>
                </div>
            </div>

            <div class="card-block">
                <div class="card-body">
                    <div class="o-grid">
                        <div class="o-grid__col u-2/12">
                            <img :src="user.avatar" alt="" class="rounded-circle">
                        </div>
                        <div class="o-grid__col u-10/12">
                            <div class="form-group">
                                <small><strong>Your Rating</strong></small></br>
                                <rating v-model="form.rating" :venue-id="venueId" method="post"></rating>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.content" rows="4" class="o-textarea" placeholder="Tell about your experience or leave a tip for others"></textarea>
                            </div>
                            <div class="form-group text-right">
                                <button class="o-button o-button--primary write-a-review__button" @click="submitReview">Submit your Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div style="position: relative;">
            <div v-masonry
                 transition-duration="0.3s"
                 item-selector=".o-grid__col"
                 column-width=".o-grid__sizer"
                 class="o-grid">

                <div class="o-grid__sizer u-1/5@lg"></div>

                <div v-masonry-tile class="o-grid__col u-2/5@lg" v-show="(authenticated && !reviewed)">
                    <div class="c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__review">
                        <div class="c-card__header">
                            <rating v-model="form.rating" :venue-id="venueId" method="post"></rating>
                        </div>
                        <div class="c-card__body">
                            <textarea v-model="form.content" rows="4" class="o-textarea" placeholder="Ceritakan pengalamanmu ..."></textarea>
                            <button class="o-button o-button--primary" @click="activeUpload" v-show="!activedUpload">
                                Upload Image
                            </button>
                            <input v-for="photo in uploadedPhotos"  type="hidden" v-model="photo.filename"/>
                            <dropzone v-show="activedUpload"
                                    id="myVueDropzone"
                                    ref="reviewUpload"
                                    url="/api/review/upload"
                                    v-on:vdropzone-success="showSuccess"
                                    v-bind:preview-template="template">
                                <!-- Optional parameters if any! -->
                                <input type="hidden" name="token" value="xxx">
                            </dropzone>
                        </div>
                        <div class="c-card__footer">
                            <div class="o-user-block">
                                <div class="o-user-block__pic">
                                    <img :src="user.avatar" alt="">
                                </div>
                                <div class="o-user-block__info">
                                    <span class="o-user-block__name">{{ user.name }}</span>
                                    <button class="o-button o-button--primary write-a-review__button" @click="submitReview">Kirim Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-masonry-tile class="o-grid__col u-2/5@lg" v-show="(!authenticated && !reviewed)">
                    <div class="c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__dummy">
                        <!--   <div class="c-card__header">
                              <rating v-model="form.rating" :venue-id="venueId" method="post"></rating>
                          </div> -->
                        <div class="c-card__body">
                            <h2 class="c-card--dialog__dummy__title">
                                Tulis Review Kamu Sekarang
                             </h2>
                            <button class="o-button o-button--primary" @click="writeReview">
                                Tulis Review
                            </button>
                        </div>
                        <div class="c-card__footer">
                            <div class="o-user-block">
                                <div class="o-user-block__pic">
                                    <img :src="user.avatar" alt="">
                                </div>
                                <div class="o-user-block__info">
                                    <span class="o-user-block__name">{{ user.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-masonry-tile v-for="review in reviews" class="o-grid__col u-1/5@lg">
                    <div class="c-card c-card--dialog c-card--dialog__placeholder">
                        <div class="c-card__header">
                            <rating v-model="review.rating" :venue-id="venueId" method="get"></rating>
                        </div>
                        <div class="c-card__body">
                            <p>
                                {{ review.content }}
                            </p>
                        </div>
                        <div class="c-card__footer">
                            <div class="o-user-block">
                                <div class="o-user-block__pic">
                                    <img :src="review.user.avatar" alt="">
                                </div>
                                <div class="o-user-block__info">
                                    <span class="o-user-block__name">{{ review.user.name }}</span>
                                    <span class="o-user-block__status">{{ formatedDate(review.created_at) }}</span>
                                </div>
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
import Dropzone from 'vue2-dropzone'

export default {
    components: { Rating, Dropzone },
    model: {
        prop: 'reviews',
        event: 'reviews'
    },
    props: {
        venueId: { type: Number, required: true },
        myReview: { type: Object, required: false },
        reviews: { type: Array, required: true }
    },
    computed: {
        ...mapGetters([
            'authenticated',
            'user'
        ]),
        reviewed: {
            get(){
                if(this.authenticated) {
                    return _.findIndex(this.reviews, ['user.id', this.user.id]) !== -1;
                } else {
                    return false;
                }
            },
            set(value) {
                return value;
            }
        }
    },
    watch: {
        venueId(value) {
            this.form.venue_id = value;
        },
//        myReview(value) {
//            if(value)
//                this.reviewed = true;
//        },
        'user.id': function(value) {
            this.form.user_id = value;
        }
    },
    data() {
        return {
            writingReview: false,
            activedUpload: false,
            form: new Form({
                user_id: 0,
                venue_id: 0,
                rating: 0,
                content: null,
                imageCollection: []
            }),
            uploadedPhotos:[]
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
            this.form.imageCollection = this.uploadedPhotos;
            this.form.submit('post', '/api/review').then((response) => {
                if(response){
                    this.reviews.unshift(response);
                    this.writingReview = false;
                    this.reviewed = true;
                    setTimeout(() => {
                        Vue.redrawVueMasonry();
                    });
                }
            }).catch((errors) => {
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
        template() {
            return `
                  <div class="dz-preview dz-file-preview">
                      <div class="dz-image" style="width: 100px;height: 100px">
                          <img data-dz-thumbnail /></div>
                      <div class="dz-details">
                        <div class="dz-size"><span data-dz-size></span></div>
                        <div class="dz-filename"><span data-dz-name></span></div>
                      </div>
                      <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                      <div class="dz-error-message"><span data-dz-errormessage></span></div>
                      <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                      <div class="dz-error-mark"><i class="fa fa-close"></i></div>
                  </div>
              `;
        }
    }
}
</script>