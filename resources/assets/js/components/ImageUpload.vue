<template>
    <div class="c-image-upload">
        <div v-show="!image" class="c-image-upload__input">
            <div class="c-image-upload__icon">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
            <span class="c-image-upload__text">Upload Image</span>
            <input type="file" @change="onFileChange">
        </div>
        <div class="c-image-upload__preview">
            <img :src="image" alt="">
        </div>
        <button v-show="image" class="c-image-upload__remove-btn" @click="removeImage">Delete</button>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
          return {
              image: ''
          }
        },
        methods: {
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);

                this.$emit('change');
                this.$emit('input', files[0]);
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