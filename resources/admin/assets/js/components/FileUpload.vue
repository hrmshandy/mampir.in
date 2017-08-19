<template>
	<div ref="button"><div><slot></slot></div></div>
</template>

<script>
import qq from 'fine-uploader/lib/core'

export default {
	props: {
	    id: String,
	    action: {
	      	type: String,
	      	required: true
	    }
	},
	data() {
		return {
			myFiles: [] // a container for the files in our field
		};
	},
	computed: {
		baseUrl() {
			return baseUrl;
		}
	},
    mounted() {
        const button = this.$refs.button;
        const uploader = new qq.FineUploaderBasic({
            button: button,
            request: {
                endpoint: '/finder'
            },
            callbacks: {
                onUpload: this.onUpload,
                onComplete: this.onComplete,
                onProgress: this.onProgress,
				onError: this.onError
            }
        })
    },
    methods: {
        onUpload(id, name) {
            this.$emit('upload', id, name);
		},
        onComplete(id, name, response) {
            this.$emit('complete', id, name, response);
        },
        onProgress(id, name, uploadedBytes, totalBytes) {
			const percent = (uploadedBytes / totalBytes) * 100;
			this.$emit('progress', percent);
		},
        onError(id, name, errorReason) {
            this.$emit('error', errorReason);
		}
    }
}
</script>