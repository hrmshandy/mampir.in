<template>
    <div :class="['user', {'user-menu-is-shown': menuIsShown }]">
        <a href="#" class="user__block" @click.prevent="showMenu">
            <div class="user__avatar">
                <img v-show="user.avatar" :src="user.avatar" :alt="'Mampir.in - '+user.name">
            </div>
            <span :class="['user__name', { 'has-placeholder': !user.name }]">{{ user.name }}</span>
        </a>
        <ul v-show="menuIsShown" class="user-menu" @click="(e) => e.stopPropagation()">
            <li class="user-menu__item">
                <ul class="user-info">
                    <li class="user-info__id">
                        <label>ID Mampir.in</label>
                        <h4>{{ user.id }}</h4>
                    </li>
                    <li class="user-info__stamp">
                        <label>Mampir.in stamps</label>
                        <h4>{{ user.mampirin_stamps }} Point</h4>
                    </li>
                    <li class="user-info__stamp">
                        <label>Venue stamps</label>
                        <h4>{{ user.venue_stamps }} Point</h4>
                    </li>
                </ul>
            </li>
            <li class="user-menu__item">
                <a href="#" class="user-menu__link"><icon name="user-alt"></icon> <span>Profile</span></a>
            </li>
            <!-- <li class="user-menu__item">
                <a href="#" class="user-menu__link"><icon name="heart"></icon> <span>Favorite</span></a>
            </li> -->
            <li class="user-menu__item">
                <a href="#" class="user-menu__link logout" @click.prevent="handleLogout"><span>Log out</span><icon name="power-off"></icon></a>
            </li>
        </ul>
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
