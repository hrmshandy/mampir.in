<template>
    <div class="c-gallery">
        <div v-if="!items.length" class="c-gallery__empty">
            No image here
        </div>
        <div v-else class="o-grid">
            <div v-for="(image, index) in items" class="o-grid__col u-3/12">
                <div class="c-gallery__image" :style="{ backgroundImage: 'url('+image+')' }">
                    <button type="button" class="c-gallery__remove" @click="remove(index)"><i class="material-icons">close</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            images: { type: Array, default(){ return [] } }
        },
        data() {
            return {
                items: []
            }
        },
        mounted() {
          this.items = this.images;
        },
        methods: {
            remove(index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>