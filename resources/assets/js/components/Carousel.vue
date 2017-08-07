<template>
    <div class="c-carousel-wrapper">
        <template v-if="!ready">
            <slot name="placeholder"></slot>
        </template>
        <div ref="el" :class="['c-carousel', {'is-waiting': !ready}]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Flickity from 'flickity';

    export default {
        props: {
            options: {
                type: Object,
                default() {
                    return {}
                }
            },
            timeout: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                ready: false,
                carousel: '',
                defaultOptions: {
                    cellSelector: '.c-carousel__item'
                }
            }
        },
        methods: {
            init() {
                const options = this.getOptions();
                this.carousel = new Flickity(this.$refs.el, options);
            },
            getOptions() {
                if(this.$children.length <= 1) {
                    this.defaultOptions.prevNextButtons = false;
                    this.defaultOptions.draggable = false;
                }
                return Object.assign({}, this.defaultOptions, this.options);
            },
            events() {

            },
            methods() {

            }
        },
        mounted() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.ready = true;
                    this.init();
                    this.events();
                    this.methods();
                }, this.timeout);
            });
        }
    }
</script>