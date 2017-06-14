<template>
    <button type="button" :class="['sign-button--'+provider, { 'is-link': isLink }]" @click="login">
        <icon :name="provider" class="sign-icon"></icon>
        <span v-if="!isLink">{{ prefixWord }}&nbsp;</span>
        <span>{{ provider | capitalize }}</span>
    </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        provider: { type: String, required: true },
        prefixWord: { type: String, default: 'Log in with' },
        isLink: { type: Boolean, default: false }
    },
    methods: {
        login () {
            Event.fire('sign-loading', true)
            this.$emit('login');
        },
        ...mapActions([
              'connect'
        ])
    },
    mounted() {
        Event.listen('oauth-connect', ({ provider, user }) => {
            this.connect({ provider, user }).then(() => {
                Event.fire('sign-loading', false)
                location.reload()
            })
        })
    }
}
</script>
