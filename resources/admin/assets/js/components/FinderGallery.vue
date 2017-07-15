<template>
    <div class="c-finder__body">
        <div class="o-grid">
            <div v-for="(image, index) in value" class="o-grid__col u-3/12 c-finder-item">
                <input type="hidden" :name="name+'[]'" :value="image">
                <div class="c-finder-item__image" :style="{ backgroundImage: 'url(/img/cache/small/'+image+')' }">
                    <button type="button" class="c-finder-item__remove" @click="remove(index)"><i class="material-icons">close</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'value'],
    methods: {
        remove(index) {
            this.value.splice(index, 1);
            //this.$emit('input')
        }
    }
}
</script>