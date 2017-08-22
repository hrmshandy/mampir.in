<template>
    <div class="journal is-editable">
        <div class="journal__top-wrapper">
            <div class="o-container">
                <div class="c-user-post u-mb-x4">
                    <img :src="user.avatar" class="c-user-post__img" width="60">
                    <div class="c-user-post__content">
                        <h4 class="c-user-post__name">{{ user.name }}</h4>
                        <span class="journal__post-meta-inline">Draft</span>
                    </div>
                </div>
                <form-title
                    v-model="form.title"
                    @input="onInput"
                    @keyup="onKeyup"
                    @keydown="onKeydown">
                </form-title>
            </div>
        </div>
        <div class="journal__body">
            <div class="o-container">
                <form-content
                    v-model="form.content"
                    @input="onInput"
                    @keyup="onKeyup"
                    @keydown="onKeydown">
                </form-content>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Form from '../../utils/form.js'

    import FormTitle from './FormTitle.vue'
    import FormContent from './FormContent.vue'

    export default {
        components: {FormTitle, FormContent},
        data() {
          return  {
              doneTypingInterval: 1000,
              url: '/api/posts',
              method: 'post',
              form: new Form({
                  title: '',
                  content: '',
                  status: 'draft'
              })
          }
        },
        computed: {
            ...mapGetters([
                'authenticated',
                'user'
            ]),
        },
        watch: {
            '$route': 'setup'
        },
        methods: {
            onInput(e) {

                //this.modified = 1;
            },
            onKeyup() {
                Event.fire('post:set-status', 'Unsaved change')
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout(this.save, this.doneTypingInterval);
            },
            onKeydown() {
                clearTimeout(this.typingTimer);
            },
            doneTyping() {
                console.log("done typing");
            },
            save() {
                Event.fire('post:set-status', 'Saving...')
                return new Promise((resolve, reject) => {
                    this.form.submit(this.method, this.url, false).then((response) => {
                        setTimeout(() => {
                            Event.fire('post:set-status', 'Saved')
                        }, 1000)

                        if(this.method === 'post') {
                            router.push(`/journal/${response.id}/edit`);
                        }

                        resolve(response.data);
                    }).catch(error => {
                        reject(error);
                    });
                });

            },
            setup(e) {
                if(!this.authenticated) {
                    Event.fire('show-login-modal', );
                    return;
                }

                if(this.$route.params.id !== undefined) {
                    axios.get(`/api/posts/${this.$route.params.id}/edit`).then(({data}) => {
                        this.form.title = data.title;
                        this.form.content = data.content;
                        this.method = 'put';
                        this.url += `/${data.id}`;
                    });
                }
            }
        },
        mounted(e) {
            this.setup(e);
            Event.listen('post:publish', () => {
               this.form.status = "published";
               setTimeout(() => {
                   this.save().then(() => {
                       window.location = '/journal/@'+this.user.id;
                   });
               })
            });
        }
    }
</script>
