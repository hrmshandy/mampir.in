<template>
    <div :class="['c-finder', 'c-finder--'+mode]">
        <div v-if="mode == 'gallery' || (mode == 'single' && isEmptyModel)" class="c-finder__upload-area">
            <button type="button" class="o-button o-button--success o-button--small" @click="openModal">
                {{ buttonText }}
            </button>
        </div>

        <component :is="'finder-'+mode" v-model="model" :name="name"></component>

        <div v-show="showModal" class="finder-modal">
            <div class="finder-modal__overlay"></div>
            <div class="finder-modal__main">
                <file-manager accept="image/*" v-model="tmp" :multiple="mode !== 'single'"></file-manager>
                <div class="finder-modal__footer">
                    <button type="button" class="finder-modal__select" :disabled="isEmptyTmp" @click="insert">Insert</button>
                    <button type="button" class="finder-modal__close" @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FileManager from './FileManager.vue'
import FinderSingle from './FinderSingle.vue'
import FinderGallery from './FinderGallery.vue'

export default {
    components: { FileManager, FinderSingle, FinderGallery },
    props: {
        name: { type: String, default: 'image' },
        buttonText: {type: String, default: 'Upload' },
        mode: { type: String, default: 'single' },
        existingImage: { type: String },
        existingImages: { type: Array, default: () => [] }
    },
    data() {
        return {
            showModal: false,
            model: null,
            tmp: null
        }
    },
    computed: {
        isEmptyTmp() {
            return _.isEmpty(this.tmp);
        },
        isEmptyModel() {
            return _.isEmpty(this.model);
        }
    },
    mounted() {
        if(this.mode == 'gallery') {
            this.model = this.existingImages;
        } else {
            this.model = this.existingImage;
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
            document.documentElement.classList.add('finder-is-opened');
        },
        closeModal() {
            this.showModal = false;
            document.documentElement.classList.remove('finder-is-opened');
        },
        insert() {
            if(this.tmp.length) {
                this.tmp.map(item => {
                    this.model.push(item.name);
                });
            } else {
                this.model = this.tmp.name;
            }

            setTimeout(() => {
                Event.fire('clear-finder-selected');
            });

            this.closeModal();
        }
    }
}
</script>