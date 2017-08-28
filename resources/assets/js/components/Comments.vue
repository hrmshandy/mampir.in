<template>
    <div>
        <div class="c-comment-form">
            <template v-if="authenticated">
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
                        <textarea v-model="form.content" rows="4" class="o-textarea" placeholder="Tulis Komentar..."></textarea>
                    </div>
                    <span v-if="form.errors.any()" class="c-review-form__invalid-message">Silahkan tulis komentar Anda.</span>
                    <div class="o-user-block__submit c-review-form__control">
                        <template v-if="editingComment">
                        </template>
                        <template v-else>
                            <button class="o-button o-button--primary write-a-review__button" @click="submitComment" :disabled="loading">
                                <span v-if="loading">Loading...</span>
                                <span v-else>Publish</span>
                            </button>
                        </template>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__dummy">
                    <div class="o-user-block">
                        <div class="o-user-block__pic">
                            <img :src="user.avatar" alt="">
                        </div>
                        <div class="o-user-block__info">
                            <span class="o-user-block__name">{{ user.name }}</span>
                        </div>
                    </div>
                    <div class="c-card__body">
                        <button class="o-button o-button--primary" @click="writeComment">
                            Tulis Komentar
                        </button>
                    </div>
                </div>
            </template>
        </div>
        <div class="c-comments">

            <div v-for="(comment, index) in comments" class="c-comment">
                <div class="c-card c-card--dialog c-card--dialog__placeholder">
                    <div class="o-grid o-grid--middle">
                        <div class="o-grid__cell u-10/12@sm">
                            <div class="o-user-block">
                                <div class="o-user-block__pic">
                                    <img :src="comment.user.avatar" alt="">
                                </div>
                                <div class="o-user-block__info">
                                    <span class="o-user-block__name">{{ comment.user.name }}</span>
                                    <span class="o-user-block__status">{{ comment.created_at | dateFromNow }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="o-grid__cell u-2/12@sm u-text-right" v-if="user.id === comment.user.id">
                            <a href="#" @click.prevent="toggleEditComment(index, true)">Edit</a> |
                            <a href="#" @click.prevent="deleteComment(index)">Hapus</a>
                        </div>
                    </div>

                    <div class="c-card__body">
                        <template v-if="comment.edit">
                            <textarea v-model="formEdit.content" rows="4" class="o-textarea" placeholder="Tulis Komentar..."></textarea>
                            <button class="o-button o-button--primary o-button--small" @click="updateComment(index)">Update</button>
                            <button class="o-button o-button--default o-button--small" @click="toggleEditComment(index, false)">Batal</button>
                        </template>

                        <p v-else>
                            {{ comment.content }}
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

    export default {
        props: {
            post_id: { required: true }
        },

        data() {
            return {
                comments: [],
                myComment: [],
                loading: false,
                editingComment: false,
                form: new Form({
                    id: '',
                    post_id: this.post_id,
                    content: ''
                }),
                formEdit: new Form({
                    post_id: this.post_id,
                    content: ''
                })
            }
        },

        watch: {
            '$route': 'fetchComments',
            post_id(value) {
                this.form.post_id = value;
            }
        },

        computed: {
            ...mapGetters([
                'authenticated',
                'user'
            ])
        },

        methods: {
            fetchComments() {
                axios.get('/api/comments').then(({data}) => {
                    data = data.map(item => {
                        item.edit = false;
                        return item;
                    });
                    this.comments = data;
                });
            },
            submitComment() {
                this.form.submit('post', '/api/comments').then((data) => {
                    this.form.post_id = data.post_id;
                    data.edit = false;
                    this.comments.unshift(data);
                })
            },
            toggleEditComment(index, value) {
                let comment = this.comments[index];

                this.comments = this.comments.map(item => {
                   item.edit = ((comment.id === item.id) && value);
                   return item;
                });
                this.formEdit.content = comment.content;
                this.formEdit.post_id = comment.post_id;
            },
            updateComment(index) {
                let comment = this.comments[index];
                this.formEdit.submit('put', `/api/comments/${comment.id}`).then((data) => {
                    comment.content = data.content;
                    comment.edit = false;
                })
            },
            deleteComment(index) {
                if(confirm('Apakah Anda yakin?')) {
                    let comment = this.comments[index];
                    axios.delete(`/api/comments/${comment.id}`).then(() => {
                        this.comments.splice(index, 1);
                    });
                }
            },
            writeComment() {
                if(!this.authenticated) {
                    router.push(`/login?redirect=${this.$route.path}`);
                } else {
                    this.writingReview = true;
                }
            }
        },

        mounted() {
            this.fetchComments();
        }
    }
</script>

<style lang="scss" scoped>
    textarea {
        &:hover, &:focus {
            box-shadow: none;
        }
    }
</style>