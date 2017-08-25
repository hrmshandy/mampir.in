<template>
    <button type="button" :class="['sign-button--'+provider, { 'is-link': isLink }]" @click="login">
        <icon :name="provider" class="sign-icon"></icon>
        <div class="sign-button__label">
            <slot></slot>
        </div>
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
            this.connect({ provider, user }).then((data) => {
                Event.fire('sign-loading', false)
                Event.fire('oauth-connected', data)
            })
        })
    }
}
</script>
