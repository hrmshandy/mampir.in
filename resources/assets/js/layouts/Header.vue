<template>
    <header class="header-transparent">
        <div :class="['l-header', { 'is-sticky': isSticky }]">
            <div class="o-container o-container--wide">
                <div class="l-header__body">
                    <a href="/" class="o-logo">
                        <logo class="o-logo__desktop"></logo>
                        <mobileLogo class="o-logo__mobile"></mobileLogo>
                    </a>

                    <template v-if="navbarPost">
                        <navbar-post></navbar-post>
                    </template>
                    <template v-else>
                        <search v-show="topSearch">
                            <template scope="button">
                                <button :class="button.classes+['o-button-custom']" type="submit">
                                    <span class="text-cari-icons" style="margin-top: 2px;"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>
                                </button>
                            </template>
                        </search>
                    </template>

                    <ul class="c-nav">
                        <li class="c-nav__item">
                            <a href="/"> Home </a>
                        </li>
                        <li class="c-nav__item">
                            <a href="/journal"> Journal </a>
                        </li>
                        <li class="c-nav__item" v-if="authenticated">
                            <user></user>
                        </li>
                        <li class="c-nav__item" v-else>
                            <router-link :to="{ path: '/login', query: { redirect: currentRoute }}">Login / Register</router-link>
                        </li>
                    </ul>
                    <!-- <div class="u-pull-right login--wrapper">
                        <template v-if="authenticated">
                            <user></user>
                        </template>
                        <template v-else>
                            <login></login>
                            <register></register>
                        </template>
                    </div> -->
                </div>
            </div>
        </div>
            <!--<mobile-menu></mobile-menu>-->
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

import Login from '../components/auth/Login.vue'
import Logo from '../objects/Logo.vue'
import MobileMenu from '../components/MobileMenu.vue'
import Register from '../components/auth/Register.vue'
import User from '../components/User.vue'
// import MobileNav from '../components/MobileNav.vue'
import mobileLogo from '../components/LogoMobile.vue'
import NavbarPost from '../components/NavbarPost.vue'

const Search = () => import('../components/Search.vue');

export default {
    components: { Login, Logo, MobileMenu, Register, Search, User, mobileLogo, NavbarPost },
    data() {
        return {
            offsetTop: 0,
            isSticky: false
        }
    },
    methods: {
        stickyHeader() {
            if(this.currentRoute == '/') {
                if(document.body.scrollTop >= (1)) {
                    this.isSticky = true;
                    this.$el.classList.add('is-sticky');
                } else {
                    this.isSticky = false;
                    this.$el.classList.remove('is-sticky');
                }
            }
        },
        toggleSearch() {
            Event.fire('toggle-search')
        },
        openLogin(e) {
            Event.fire('show-login-modal', e);
        }
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        },
        ...mapGetters([
            'authenticated',
            'topSearch',
            'navbarPost'
        ]),
    },
    watch: {
        currentRoute(value) {
            this.isSticky = value !== '/';
        }
    },
    mounted() {
        if(this.currentRoute !== '/') {
            this.isSticky = true;
        }
        window.addEventListener('scroll', () => {
            this.stickyHeader();
        });
        window.addEventListener('resize', () => {
            this.stickyHeader();
        });
    }
}
</script>