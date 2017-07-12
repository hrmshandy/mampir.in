<template>
    <div class="o-dropify">
        <button v-if="!image" type="button" class="o-dropify__upload">
            <span class="o-dropify__text">{{ text }}</span>
            <input type="file" :name="name" @change="onFileChange">
        </button>
        <div v-else class="o-dropify__preview">
            <img :src="image" alt="">
            <button type="button" class="o-dropify__clear" @click.prevent="removeImage">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: { type: String, required: true },
            text: { type: String, default: 'Drag and Drop file here or click' },
            defaultFile: { type: String }
        },
        data() {
            return {
                image: ''
            }
        },
        mounted() {
            this.image = this.defaultFile;
        },
        methods: {
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                const image = new Image();
                const reader = new FileReader();
                const vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            }
        }
    }
</script>