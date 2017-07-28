<template>
    <carousel v-if="hasPhotos" class="c-gallery" :options="options" :timeout="1000">
        <div slot="placeholder" class="c-gallery__placeholder">
            <span></span>
            <span></span>
        </div>
        <template v-for="photo in photos">
            <carousel-item>
                <div class="c-gallery__image" :style="{ backgroundImage: 'url(/img/cache/original/'+photo+')' }"></div>
            </carousel-item>
        </template>
    </carousel>
</template>

<script>
    import Carousel from './Carousel.vue';
    import CarouselItem from './CarouselItem.vue';

    export default {
        components: {Carousel, CarouselItem},
        props: ['photos'],
        computed: {
            hasPhotos() {
              return this.photos.length > 0;
            },
            options() {
                let options = {
                    imagesLoaded: true,
                    wrapAround: true
                };
                if (this.photos.length < 3) {
                    options.cellAlign = 'left';
                    options.draggable = false;
                    options.prevNextButtons = false;
                }
                return options;
            }
        }
    }
</script>
