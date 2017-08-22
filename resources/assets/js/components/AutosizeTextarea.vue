<template>
    <textarea
            @input="onInput"
            @change="onChange"
            @propertychange="onPropertychange">{{ value }}</textarea>
</template>

<script>
    import autosize from 'autosize'

    export default {
        props: ['value'],
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value);
            },
            onChange(e) {
                this.$emit('change', e);
            },
            onPropertychange(e) {
                this.$emit('propertychange', e);
            }
        },
        mounted() {
            autosize(this.$el)
        }
    }
</script>