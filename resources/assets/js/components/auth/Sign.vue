<template>
    <div class="sign-body" :disabled="loading">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    },
    mounted() {
        Event.listen('sign-loading', (value) => {
            this.loading = value
        })
    }
}
</script>
