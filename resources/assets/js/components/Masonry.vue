<template>
	<div ref="el" class="o-grid o-grid--masonry">
		<div class="o-grid__sizer u-1/5@lg"></div>
		<slot></slot>
	</div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
    data() {
        return {
            masonry: null
        }
    },
    watch: {
        '$route': () => {
            this.masonryDraw();
        }
	},
	mounted() {
		this.init();
	},
    methods: {
        init() {

            //const elem = document.querySelector('.o-grid--masonry');
            this.masonry = new Masonry(this.$refs.el, {
                columnWidth: '.o-grid__sizer',
                itemSelector: '.o-grid__col',
                percentPosition: true,
                isResizeBound: false
            });

            Vue.nextTick(() => {
                this.masonryDraw();
            });

            Event.listen("masonry.refresh", () => {
                this.masonryDraw();
            });

//            setTimeout(() => {
//                this.masonryDraw();
//			}, 1000);
        },

        masonryDraw() {
            this.masonry.reloadItems();
            this.masonry.layout();
		}
    }
}
</script>