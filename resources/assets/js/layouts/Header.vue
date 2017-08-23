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
                        <search v-show="topSearch"></search>
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