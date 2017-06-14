<template>
    <div>
        <div v-show="show" class="o-modal">
            <div class="o-modal__dialog" @click="stopPropagation">
                <div class="o-modal__body">
                    <button class="o-modal__close" @click.prevent="closeModal"><icon name="cross"></icon></button>
                    <slot></slot>
                </div>
            </div>
        </div>
        <div v-if="show" class="o-modal-backdrop" @click="closeModal"></div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'show',
        event: 'show'
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show(value){
            if(value) {
                document.documentElement.classList.add('o-modal-is-shown');
            } else {
                document.documentElement.classList.remove('o-modal-is-shown');
            }
        }
    },
    methods: {
        stopPropagation(e) {
            e.stopPropagation();
        },
        showModal(e) {
            e.stopPropagation();
            this.$emit('show', true);
        },
        closeModal(e) {
            e.stopPropagation();
            this.$emit('show', false);
        }
    }
}
</script>
