<template>
	<div class="o-grid o-grid--masonry">
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
            this.init();
            this.masonry.layout();
        }
	},
	mounted() {
		this.init();
	},
    methods: {
        init() {
            setTimeout(() => {
                const elem = document.querySelector('.o-grid--masonry');
                this.masonry = new Masonry( elem, {
                    columnWidth: '.o-grid__sizer',
                    itemSelector: '.o-grid__col',
                    percentPosition: true
                });
            }, 1000);
        }
    }
}
</script>