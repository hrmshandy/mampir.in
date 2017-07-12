<template>
    <div>
        <button type="button" class="o-button o-button--success o-button--small" @click="showModal = true">
            <slot></slot>
        </button>

        <div v-show="showModal" class="finder-modal">
            <div class="finder-modal__overlay"></div>
            <div class="finder-modal__main">
                <file-manager accept="image/*" v-model="selecteds"></file-manager>
                <div class="finder-modal__footer">
                    <button type="button" class="finder-modal__select" :disabled="!selecteds.length">Select</button>
                    <button type="button" class="finder-modal__close" @click="showModal = false">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FileManager from './FileManager.vue'

export default {
    components: { FileManager },
    props: {},
    data() {
        return {
            showModal: false,
            selecteds: []
        }
    }
}
</script>