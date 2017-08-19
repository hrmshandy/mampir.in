<template>
    <div class="c-rate">
        <span
            v-for="item in max"
            :class="['c-rate__item', classes[item-1], { 'is-hovered': hoverIndex === item }]"
            @mousemove="setCurrentValue(item, $event)"
            @mouseleave="resetCurrentValue"
            @click="selectValue(item)"
            :style="{ cursor: readonly ? 'auto' : 'pointer' }">
            <star></star>
        </span>
        <span v-if="showText" class="c-rate__text">{{ text }}</span>
    </div>
</template>

<script>
    import Star from '../objects/Star.vue'

    export default {
        components: { Star },

        data() {
          return  {
              currentValue: this.value,
              hoverIndex: -1
          }
        },

        props: {
            value: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 5
            },
            readonly: {
                type: Boolean,
                default: false
            },
            allowHalf: {
                type: Boolean,
                default: true
            },
            showText: {
                type: Boolean,
                default: false
            },
            texts: {
                type: Array,
                default() {
                    return ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'];
                }
            },
            textTemplate: {
                type: String,
                default: '{value}'
            }
        },
        computed: {
            text() {
                let result = '';
                if (this.readonly) {
                    result = this.textTemplate.replace(/\{\s*value\s*\}/, this.value);
                } else {
                    result = this.texts[Math.ceil(this.currentValue) - 1];
                }
                return result;
            },
            valueDecimal() {
                return this.value * 100 - Math.floor(this.value) * 100;
            },
            classes() {
                let result = [];
                let i = 0;
                let threshold = this.currentValue;
                let half = this.currentValue;
                if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
                    threshold--;
                }
                for (; i < threshold; i++) {
                    result.push('is-rated');
                }

                for (; i < half; i++) {
                    result.push(['c-rate__item--half', 'is-rated']);
                }

                return result;
            }
        },
        watch: {
            value(value) {
                this.currentValue = value;
            }
        },
        methods: {
            selectValue(value) {
                if (this.disabled) {
                    return;
                }
                this.$emit('input', value);
            },
            setCurrentValue(value, event) {
                if (this.disabled) {
                    return;
                }
                this.currentValue = value;
                this.hoverIndex = value;
            },
            resetCurrentValue() {
                if (this.disabled) {
                    return;
                }
                this.currentValue = this.value;
                this.hoverIndex = -1;
            }
        },
    }
</script>