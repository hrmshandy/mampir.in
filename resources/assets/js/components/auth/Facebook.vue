<template>
    <oauth-button @login="login" provider="facebook" :isLink="isLink" :prefix-word="prefixWord">
        <span>Continue with Facebook</span>
        <small>We won’t post without asking</small>
    </oauth-button>
</template>

<script>
import OauthButton from './OauthButton.vue'

export default {
    components: { OauthButton },
    props: {
        prefixWord: { type: String },
        isLink: { type: Boolean, default: false }
    },
    data() {
        return {
            config: {
                appId: '1196580010452435',
                cookie: true,
                xfbml: true,
                version: 'v2.9'
            }
        }
    },
    methods: {
        getProfile () {
            FB.api('/me', (response) => {
                const provider = 'facebook'
                const user = response
                user.avatar = 'https://graph.facebook.com/v2.9/'+user.id+'/picture?type=normal'
                Event.fire('oauth-connect', { provider, user })
            })
        },
        login() {
            FB.login((response) => {
                this.statusChangeCallback(response)
            }, {scope: 'public_profile,email'})
        },
        logout () {
            FB.logout((response) => {
                this.statusChangeCallback(response)
            })
        },
        statusChangeCallback(response) {
            if (response.status === 'connected') {
                this.getProfile()
            } else if (response.status === 'not_authorized') {
                Event.fire('sign-loading', false)
            } else {
                Event.fire('sign-loading', false)
            }
        }
    },
    mounted() {
        window.fbAsyncInit = () => {
            FB.init(this.config);
            FB.AppEvents.logPageView();
            // FB.getLoginStatus((response) => {
            //     this.statusChangeCallback(response)
            // });
        }
        (function (d, s, id) {
          var js
          var fjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s); js.id = id
          js.src = '//connect.facebook.net/en_US/sdk.js'
          fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
    }
}
</script>
