<template>
    <div>
        <div ref="button">Upload</div>
    </div>
</template>

<script>
import qq from 'fine-uploader/lib/core'

export default {
    data() {
        return {

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
                onComplete: this.onComplete
            }
        })
    },
    methods: {
        onComplete(id, name, response) {
            console.log(id, name, response);
        }
    }
}
</script>