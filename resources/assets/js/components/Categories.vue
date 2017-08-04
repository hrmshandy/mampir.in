<template>
    <carousel class="c-categories" :options="options">
        <template v-for="category in categories">
            <carousel-item>
                <a :href="getCategoryUrl(category)" class="c-category">
                    <icon :name="category" class="c-category__icon"></icon>
                    <span class="c-category__name">{{ category | capitalize }}</span>
                </a>
            </carousel-item>
        </template>
    </carousel>
</template>

<script>
    import Carousel from './Carousel.vue';
    import CarouselItem from './CarouselItem.vue';
    import Icon from './Icon.vue';

    export default {
        components: {Carousel, CarouselItem, Icon},
        props: {
          city: {
              type: String,
              required: true
          }
        },
        data() {
            return {
                categories: [
                    'kuliner', 'relaksasi', 'rekreasi', 'shopping', 'kecantikan', 'barbershop', 'olahraga', 'komunitas'
                ]
            }
        },
        computed: {
            options() {
                let options = {
                    prevNextButtons: false,
                    pageDots: false,
                    cellAlign: 'left',
                    draggable: false
                };

                const toggleDraggable = () => {
                    options.draggable = window.innerWidth < 900;
                };

                toggleDraggable();

                window.onresize = function(event) {
                    toggleDraggable();
                };

                return options;
            }
        },
        methods: {
            getCategoryUrl(category) {
                return `/search/?query=${category+(!_.isEmpty(this.city) ? '+in+'+this.city : '')}`;
            }
        }
    }
</script>
