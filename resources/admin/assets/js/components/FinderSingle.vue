<template>
    <div class="c-finder__body">
        <div v-if="!isEmptyValue" class="c-finder-item">
            <input type="hidden" :name="name" :value="value">
            <div class="c-finder-item__image" :style="{ backgroundImage: 'url(/img/cache/medium/'+value+')' }">
                <button type="button" class="c-finder-item__remove" @click="remove(index)"><i class="material-icons">close</i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'value'],
    computed: {
        isEmptyValue() {
            return _.isEmpty(this.value);
        }
    },
    methods: {
        remove() {
            this.$emit('input', null);
        }
    }
}
</script>