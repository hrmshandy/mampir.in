<template>
	<div class="masonry-grid">
		<div class="grid-sizer"></div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	mounted() {
		setTimeout(() => {
			const elem = document.querySelector('.masonry-grid');
			const msnry = new Masonry( elem, {
			  	columnWidth: '.grid-sizer',
				itemSelector: '.col',
				percentPosition: true
			});
		}, 300);
	}
}
</script>