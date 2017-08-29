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
                            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
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
                <social-sharing :url="base_url+$route.path" inline-template>
                    <div class="c-share">
                        <h4>Bagikan</h4>
                        <div class="c-share__item">
                            <network network="facebook" class="o-button__share--facebook o-button__share">
                                <i class="fa fa-facebook"></i>
                            </network>
                            <network network="twitter" class="o-button__share--twitter o-button__share">
                                <i class="fa fa-twitter"></i>
                            </network>
                        </div>
                    </div>
                </social-sharing>
            </div>
        </div>
        <div class="journal__bottom">
            <div class="o-container">
                <div class="other-journal u-mb-x5">
                    <h1 class="o-heading u-text-center u-mb-x5">Journal Lainnya</h1>
                    <div class="o-grid">
                        <div v-for="post in other_posts" class="o-grid__col u-6/12@lg">
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
                                    <img v-if="hasImage(post.image)" :src="post.image" class="o-img-content u-mb-x2">
                                    <a :href="`/journal/${post.user.username}/${post.slug}`">
                                        <h3 class="u-color-primary u-mb-x2">{{ post.title }}</h3>
                                    </a>
                                    <div>{{ post.excerpt }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-comment u-mb-x5">
                    <h2 class="o-heading">Komentar</h2>
                    <comments :post_id="id"></comments>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex'


    import Comments from '../components/Comments.vue'

    export default {
        components: {Comments},
        data() {
            return {
                id: '',
                title: '',
                content: '',
                created_at: '',
                user: {
                    name: '',
                    avatar: ''
                },
                other_posts: []
            }
        },
        computed: {
            base_url() {
                return window.App.baseUrl;
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                axios.get(`/api/posts/${this.$route.params.slug}`).then(({data}) => {
                    const post = data.post;

                    this.other_posts = data.other_posts;

                    this.id = post.id;
                    this.title = post.title;
                    this.content = post.content;
                    this.created_at = post.created_at;
                    this.user.name = post.user.name;
                    this.user.avatar = post.user.avatar;

                    let title = `${post.title} - Mampir.in`;
                    let url = this.base_url+this.$route.path;
                    let image = '';
                    let description = post.excerpt;

                    this.setBasicMeta({title, description});
                    this.setFacebookMeta({title, url, image, description});
                    this.setTwitterMeta({title, url, image, description});
                });
            },

            hasImage(image) {
                return !_.isEmpty(image);
            },

            ...mapActions([
                'setBasicMeta',
                'setFacebookMeta',
                'setTwitterMeta'
            ])
        },
        mounted() {
            this.fetchData();
        }
    }

</script>