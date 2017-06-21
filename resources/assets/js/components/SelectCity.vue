<template>
    <div>
        <modal v-model="showModal" class="sign-modal sign-in select-city-modal">
            <h1 class="o-type-22 u-color-primary">Pilih Kota</h1>
            <input type="text" placeholder="Cari Kota" class="o-input u-mt-x2" @input="searchCity">
            <ul class="o-cites u-mt-x2">
                <li v-for="city in cities" class="o-city">
                    <a href="#" :class="['o-city__link', {'is-selected': selected == city}]" @click.prevent="selectCity(city)">{{ city }}</a>
                </li>
            </ul>
        </modal>
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
    components: { Modal },
    data() {
        return {
            showModal: false,
            cities: [
                'Bandung', 'Bekasi', 'Jakarta', 'Malang', 'Palembang', 'Semarang', 'Surabaya', 'Yogya'
            ],
            selected: ''
        }
    },
    mounted() {
        Event.listen("show-cities-modal", () => {
            this.openModal();
        });
        Event.listen("hide-cities-modal", () => {
            this.closeModal();
        });
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        selectCity(city) {
            this.selected = city;
            this.$store.commit('SET_LOCATION', city);
            Cookies.set('user-city', city);
            this.closeModal();
        },
        searchCity(e) {
            const cities = this.cities.slice(0);
            this.cities = cities.filter((item) => {
                return item.includes(e.target.value);
            });
        }
    }
}
</script>