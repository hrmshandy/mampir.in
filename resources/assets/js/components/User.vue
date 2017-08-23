<template>
    <div class="user">
        <a href="#" class="user__block" @click.prevent="showMenu">
            <div class="user__avatar">
                <img v-show="user.avatar" :src="user.avatar" :alt="'Mampir.in - '+user.name">
            </div>
        </a>
        <div class="user-menu" v-show="menuIsShown">
            <div class="user-menu__arrow"></div>
            <div class="user-menu__greeting">Hi, {{ user.name }}</div>
            <div class="user-menu__block">
                <a class="o-button o-button--primary o-button-custom o-button--block" href="#">Get Check-in ID</a>
                <a class="o-button o-button--primary o-button-custom o-button--block" href="#">
                    Mampir.in Point <strong>({{ user.mampirin_stamps }})</strong>
                </a>
                <a class="o-button o-button--primary o-button-custom o-button--block" href="#">
                    Purchase Point <strong>({{ user.venue_stamps }})</strong>
                </a>

            </div>
            <div class="user-menu__divider"></div>
            <div class="user-menu__block">
                <div class="nav-mobile__menu-merchant">
                    <h3>Merchant</h3>
                    <ul class="merchant-list">
                        <li class="merchant-list__item">
                            <a class="" href="#">Salona</a>
                        </li>
                        <li class="merchant-list__item">
                            <a class="" href="#">Barbara</a>
                        </li>
                    </ul>

                    <router-link class="o-button o-button--primary o-button-custom o-button--block" to="/merchant/registration/1">Add Merchant</router-link>
                </div>
            </div>
            <div class="user-menu__divider"></div>
            <div class="user-menu__block">
                <a href="#" class="user-menu__link logout" @click.prevent="handleLogout"><span>Log out</span><icon name="power-off"></icon></a>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            menuIsShown: false
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    mounted() {
        document.addEventListener('click', () => {
            this.menuIsShown = false;
        });
    },
    methods: {
        ...mapActions([
            'logout'
        ]),
        handleLogout() {
            this.logout().then(() => {
                location.reload()
            })
        },
        showMenu(e){
            e.stopPropagation();
            if(this.menuIsShown) {
                this.menuIsShown = false;
            } else {
                this.menuIsShown = true;
            }
        }
    }
}
</script>
