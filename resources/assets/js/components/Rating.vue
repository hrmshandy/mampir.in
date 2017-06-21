<template>
    <div class="o-ratings">
        <div v-for="(n, index) in 5" href="#" class="o-rating" @mouseover="hoverRating(index)" @mouseout="unhoverRating(index)" @click.prevent="setRating(index, n)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867">
                <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
            </svg>
        </div>
        <div v-show="rating !== 0" class="rating-status">
            <span v-if="rating == 1">Terrible</span>
            <span v-if="rating == 2">Poor</span>
            <span v-if="rating == 3">Average</span>
            <span v-if="rating == 4">Very Good</span>
            <span v-if="rating == 5">Excellent</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['venue-id', 'value', 'method'],
    mounted() {
        setTimeout(() => {
            if(typeof this.value !== 'undefined') {
                this.toggleRating((this.value-1), 'add', 'is-rated');
            }
        }, 600);
    },
    data() {
        return {
            rating: 0
        }
    },
    methods: {
        hoverRating(index) {
            if(this.method == "post") {
                this.rating = index+1;
                this.toggleRating(index, 'add', 'is-hovered')
                this.toggleRating((this.value-1), 'remove', 'is-rated');
            }
        },
        unhoverRating(index) {
            if(this.method == "post") {
                this.rating = this.value;
                this.toggleRating(index, 'remove', 'is-hovered');
                this.toggleRating((this.value-1), 'add', 'is-rated');
            }
        },
        setRating(index, pos) {
            if(this.method == "post") {
                this.toggleRating(index, 'remove', 'is-rated');
                setTimeout(() => {
                    this.toggleRating(index, 'add', 'is-rated');
                });
                this.rating = pos;
                this.$emit('input', pos);
            }
        },
        toggleRating(length, method, className){
            var items = this.$el.querySelectorAll('.o-ratings .o-rating');
            for (var i = 0; i <= length; i++) {
                if(items[i]) {
                    items[i].classList[method](className);
                }
            }
        }
    }
}
</script>
