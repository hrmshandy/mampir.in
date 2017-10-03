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
            <img :src="imgPreview" alt="">
        </div>
        <button v-show="image" class="c-image-upload__remove-btn" type="button" @click="removeImage">Delete</button>
        <div ref="progress" class="c-image-upload__progress">
            <div ref="progressBar" class="c-image-upload__progress-bar"></div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from 'progressbar.js'

    export default {
        props: {
            value: [Object, String],
            autoProcessed: { type: Boolean, default: false },
            url: { type: String, default: '/api/image' },
            preview: String
        },
        data() {
          return {
              image: '',
              imageObject: {},
              loading: false,
              uploadProgress: 0,
              progressBar: {},
              dataURLRegex: /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i
          }
        },
        watch: {
            value(value) {
                if(value) this.image = value;
            }
        },
        computed: {
            imgPreview() {
                let preview = this.image;

                if(!_.isEmpty(this.preview)) {
                    preview = this.preview;
                }

                if(!_.isEmpty(this.image) && !this.isDataURL(this.image) && !_.isEmpty(this.imageObject)) {
                    preview = _.has(this.imageObject, 'web_url') ? this.imageObject.web_url : '/storage/_temp/'+this.image;
                }

                return preview;
            }
        },
        mounted() {
            this.image = this.value;

            if(localStorage.getItem(this.value)) {
                Object.assign(this.imageObject, JSON.parse(localStorage.getItem(this.value)));
            }

            this.progressBar = new ProgressBar.Circle(this.$refs.progressBar, {
                strokeWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                color: '#714322',
                trailColor: '#eee',
                trailWidth: 10,
                svgStyle: null
            });
        },
        methods: {
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                let file = files[0];

                if (!files.length)
                    return;
                this.createPreviewImage(file);

                if(this.autoProcessed) {
                    file = this.saveImage(file);
                } else {
                    this.$emit('change', file);
                    this.$emit('input', file);
                }
            },
            createPreviewImage(file) {
                const image = new Image();
                const reader = new FileReader();
                const vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            saveImage(file) {
                let data = new FormData();
                data.append('image', file);

                this.$refs.progress.classList.add('is-active');

                let config = {
                    onUploadProgress: (progressEvent) => {
                        let progress = this.uploadProgress = Math.round( (progressEvent.loaded * 100) / progressEvent.total );

                        this.progressBar.animate(progress/100);

                        if(progress >= 100) {
                            setTimeout(() => {
                                this.$refs.progress.classList.remove('is-active');
                                this.progressBar.animate(0);
                            }, 2000);
                        }
                    }
                };

                Event.fire('is-uploading', true);

                axios.post(this.url+'', data, config).then(res => {
                    this.image = res.data.filename;
                    Object.assign(this.imageObject, res.data);
                    this.$emit('change', res.data.filename);
                    this.$emit('input', res.data.filename);

                    localStorage.setItem(res.data.filename, JSON.stringify(this.imageObject));

                    Event.fire('is-uploading', false);
                }).catch(err => {
                    console.error(err.message);
                })
            },
            removeImage: function (e) {

                if(this.autoProcessed && !_.isEmpty(this.image)) {
                    axios.delete(this.url+'/'+this.image.filename).then(res => {
                        this.clearImage();
                    }).catch(err => {
                        console.error(err.message);
                    })
                } else {
                    this.clearImage();
                }
            },
            clearImage() {
                this.image = '';
                this.$emit('input', '');
            },
            isDataURL(s) {
                return !!s.match(this.dataURLRegex);
            }
        }
    }
</script>