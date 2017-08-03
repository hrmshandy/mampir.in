<template>
	<div>
		<div class="o-section o-section--journal">
			<div class="o-container--fluid">
				<h1 class="o-section__title u-text-center">
					Journal
				</h1>
				<div class="o-filter-journal">
					<div class="o-filter-journal__wrapper">
						<div class="o-filter-journal__item">
							<a href="#">Highlight</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Food for Fun</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Recipes</a>
						</div>
						<div class="o-filter-journal__item">
							<a href="#">Peoples</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="o-section o-section--grey">
            <div class="o-container--fluid">
                <journal></journal>
            </div>
        </section>	
	</div>
</template>

<script>
    import Journal from '../components/Journal.vue'

	export default {
        components: { Journal }
	}
</script>