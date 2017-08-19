<template>
    <oauth-button @login="login" provider="google" :is-link="isLink" :prefix-word="prefixWord"></oauth-button>
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
                client_id: '557936129955-1vbafcojai5rlbd9jt7laop5clj6atlo.apps.googleusercontent.com',
                scope: 'profile email'
            }
        }
    },
    methods: {
        login(successCallback, errorCallback) {
            window.gapi.auth2.getAuthInstance().signIn().then( (googleUser) => {
                const profile = googleUser.getBasicProfile()
                var provider = 'google'
                var user = {
                    id: profile.getId(),
                    name: profile.getName(),
                    avatar: profile.getImageUrl(),
                    email: profile.getEmail()
                }
                Event.fire('oauth-connect', { provider, user })
            }, (error) => {
                Event.fire('sign-loading', false)
                //errorCallback(error)
            })
        },
        logout(successCallback, errorCallback) {
            window.gapi.auth2.getAuthInstance().signOut().then( () => {
                //successCallback()
            }, (error) => {
                //errorCallback(error)
            })
        },

        installClient() {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script')
                script.src = 'https://apis.google.com/js/api:client.js'
                script.onreadystatechange = script.onload = function () {
                    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                        setTimeout(function () {
                            resolve()
                        }, 500)
                    }
                }
                document.getElementsByTagName('head')[0].appendChild(script)
            })
        },
        initClient() {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init(this.config)
            })
        }
    },
    mounted() {
        if (window.gapi === undefined) {
            this.installClient().then(() => {
              return this.initClient()
            })
        } else if (window.gapi !== undefined && window.gapi.auth2 === undefined) {
            this.initClient()
        }
    }
}
</script>
