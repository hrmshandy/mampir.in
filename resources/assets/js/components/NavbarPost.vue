<template>
    <div class="c-navbar-post">
        <span class="c-navbar-post__status">{{ statusMessage }}</span>
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
        <div class="c-navbar-post__control">
            <button class="o-button o-button--link" @click="toggleDropdown">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </button>
            <ul v-show="showDropdown" class="c-navbar-post__control-dropdown">
                <li v-if="status == 'published'">
                    <a href="#" @click.prevent="unpublish">Unpublish</a>
                </li>
                <li>
                    <router-link to="/me/journal">Close Editing</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="deletePost">Delete journal</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                statusMessage: '',
                status: 'draft',
                readyToPublish: false,
                showDropdown: false
            }
        },
        methods: {
            publish() {
                Event.fire('post:publish');
            },
            unpublish() {
                Event.fire('post:unpublish');
            },
            deletePost() {
                Event.fire('post:delete');
            },
            toggleDropdown() {
                if(this.showDropdown) {
                    this.showDropdown = false;
                } else {
                    this.showDropdown = true;
                }
            }
        },
        mounted() {
            Event.listen('post:set-status-message', (message) => {
                this.statusMessage = message;
            })
            Event.listen('post:set-status', (status) => {
                this.status = status;
            })
            Event.listen('post:ready-to-publish', (status) => {
                this.readyToPublish = status;
            })
        }
    }
</script>