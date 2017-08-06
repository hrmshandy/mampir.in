<template>
    <div class="user nav-mobile__menu-user">
        <div class="user__block">
            <div class="user__avatar">
                <img v-show="user.avatar" :src="user.avatar" :alt="'Mampir.in - '+user.name">
            </div>
            <h3 :class="['user__name', { 'has-placeholder': !user.name }]">{{ user.name }}</h3>
        </div>
                        <a class="o-button o-button--primary o-button-custom o-button--block" href="#">Get Check-in ID</a>
                        <a class="o-button o-button--primary o-button-custom o-button--block" href="#">
                            Mampir.in Point <strong>({{ user.mampirin_stamps }})</strong>
                        </a>
                        <a class="o-button o-button--primary o-button-custom o-button--block" href="#">Merchant Point <strong>({{ user.venue_stamps }})</strong></a>
            <!--<li class="user-menu__item">
                <a href="#" class="user-menu__link"><icon name="user-alt"></icon> <span>Profile</span></a>
            </li>
             <li class="user-menu__item">
                <a href="#" class="user-menu__link"><icon name="heart"></icon> <span>Favorite</span></a>
            </li> -->
                <a href="#" class="user-menu__link logout" @click.prevent="handleLogout"><span>Log out</span><icon name="power-off"></icon></a>

        <div class="nav-mobile__menu-merchant">
            <h3>Merchant</h3>
                <a class="" href="#">Salona</a>
                <a class="" href="#">Barbera</a>
                <a class="o-button o-button--primary o-button-custom o-button--block" href="#">Add Merchant</a>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            menuIsShown: true
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
