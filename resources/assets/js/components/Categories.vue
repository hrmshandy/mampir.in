<template>
    <div class="main-carousel"></div>
</template>

<script>
import Flickity from 'flickity';
export default {
    props: ['categories'],
    data() {
        return {
            ready: false
        }
    },
    watch: {
        categories(value){
            var flkty = new Flickity(this.$el, {
                wrapAround: true
            });

            console.log(value);

            value.forEach((item, index) => {
                var cell = document.createElement('div');
                    cell.classList.add('carousel-cell');
                var img = document.createElement('div');
                    img.classList.add('carousel-image');
                    img.style.backgroundImage = 'url('+item+')';

                cell.append(img);
                flkty.insert( cell, index )
            })
        }
    }
}
</script>
