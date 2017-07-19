<template>
    <div class="o-container">
        <p class="u-text-center">
            Please Allow Location
        </p>
    </div>
</template>

<script>
    import {loaded} from '../api/map/loader'

    export default {
        mounted() {
            this.geolocation();
        },
        methods: {
            geolocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
                }
            },
            getCurrentPosition(position) {
                window.location = '/';
            }
        }
    }
</script>