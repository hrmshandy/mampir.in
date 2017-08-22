<template>
    <div class="c-navbar-post">
        <span class="c-navbar-post__status">{{ status }}</span>
        <button type="button" class="o-button o-button--success c-navbar-post__button" @click="publish">Publish</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: ''
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
        }
    }
</script>