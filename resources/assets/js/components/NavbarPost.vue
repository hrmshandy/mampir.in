<template>
    <div class="c-navbar-post">
        <span class="c-navbar-post__status">{{ status }}</span>
        <div class="c-navbar-post__action">
            <button type="button"
                    class="o-button o-button--success c-navbar-post__button"
                    @click="publish"
                    :disabled="!readyToPublish">
                Terbitkan
            </button>
            <span v-if="!readyToPublish" class="c-navbar-post__action-tooltip">
                Penerbitan akan tersedia setelah Anda mulai menulis.
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: '',
                readyToPublish: false
            }
        },
        methods: {
            publish() {
                Event.fire('post:publish');
            }
        },
        mounted() {
            Event.listen('post:set-status', (status) => {
                this.status = status;
            })
            Event.listen('post:ready-to-publish', (status) => {
                this.readyToPublish = status;
            })
        }
    }
</script>