<template>
    <div>
        <div class="o-section o-section--journal">
            <div class="o-container--fluid">
                <h1 class="o-section__title u-text-center">
                    Journal
                </h1>
                <div class="o-filter-journal">
                    <div class="o-filter-journal__wrapper">
                        <div class="o-filter-journal__item">
                            <router-link to="/me/journal/draft">Draft</router-link>
                        </div>
                        <div class="o-filter-journal__item">
                            <router-link to="/me/journal/published">Published</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="o-section o-section--grey">
            <div class="o-container--fluid">
                <div v-masonry
                     transition-duration="0.3s"
                     item-selector=".o-grid__col"
                     column-width=".o-grid__sizer"
                     class="o-grid">
                    <div class="o-grid__sizer u-3/12@lg u-6/12@sm"></div>

                    <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm">
                        <div class="c-card">
                            <router-link to="/journal/create" class="c-card__upload-journal">
                                <div class="c-card__body">
                                    <div class="c-card__inner">
                                        <i class="fa fa-pencil-square-o fa-5x" aria-hidden="true"></i>
                                        <h2 class="c-card--dialog__dummy__title">
                                            Upload Journal Kamu <br> Sekarang!
                                        </h2>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <template v-if="posts.length > 0" v-for="(post, index) in posts">
                        <div v-masonry-tile class="o-grid__col u-3/12@lg u-6/12@sm">
                            <div class="c-card c-card--dialog__placeholder">
                                <div class="c-card__body">
                                    <router-link :to="getPublicOrEditLink(post)">
                                        <h3 class="u-color-primary u-mb-x2">{{ getPostTitle(post.title) }}</h3>
                                    </router-link>
                                    <div>{{ post.excerpt }}</div>
                                </div>
                                <div class="c-card__footer">
                                    <router-link :to="`/journal/${post.id}/edit`" class="o-button o-button--link">Edit</router-link>
                                    <button class="o-button o-button--link" @click="deletePost(post.id, index)">Delete</button>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                posts: []
            }
        },
        watch: {
            '$route': 'fetchData'
        },
        computed: {
            ...mapGetters([
                'authenticated'
            ]),
        },
        methods: {
            fetchData() {
                let url = '/api/posts/me/';
                if(this.$route.params.status !== undefined) {
                    url += this.$route.params.status;
                }
                axios.get(url).then(({data}) => {
                    this.posts = data;
                });
            },
            deletePost(id, index) {
                if(confirm("Journal yang dihapus akan hilang selamanya. Apakah Anda yakin?")) {
                    axios.delete(`/api/posts/${id}`).then(() => {

                        this.posts.splice(index, 1);
                    });
                }
            },
            getPostTitle(title) {
                return !_.isEmpty(title) ? title : 'Untitled journal'
            },
            getPublicOrEditLink(post) {
                let url;
                if(this.$route.params.status === 'draft') {
                    url = `/journal/${post.id}/edit`;
                } else {
                    url = `/journal/${post.user.username}/${post.slug}`;
                }

                return url;
            }
        },
        mounted() {
            if(this.$route.params.status === undefined) {
                router.push('/me/journal/draft');
            }
            this.fetchData();
        }
    }
</script>