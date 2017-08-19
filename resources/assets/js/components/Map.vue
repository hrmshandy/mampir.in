<template>
	<div id="map" class="o-map"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.$store.dispatch('loadMap')
    }
}
</script>
