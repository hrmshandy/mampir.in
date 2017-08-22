<template>
    <div ref="content" data-attr="content" class="journal__content"></div>
</template>

<script>
    import MediumEditor from 'medium-editor'

    export default {
        props: {
          value: String
        },
        data() {
            return {
                editor: ''
            }
        },
        watch: {
          value(newValue) {
              if (newValue !== this.$refs.content.innerHTML) {
                  this.editor.setContent(this.value)
              }
          }
        },
        methods: {
            init() {
                this.editor = new MediumEditor(this.$refs.content, {
                    placeholder: {
                        text: 'Ceritakan kisahmu...',
                        hideOnClick: false
                    }
                });

                this.editor.subscribe('editableInput', this.onInput);
                this.editor.subscribe('editableKeyup', this.onKeyup);
                this.editor.subscribe('editableKeydown', this.onKeydown);
            },
            destroy() {
                this.editor.unsubscribe('editableInput', this.onInput);
                this.editor.unsubscribe('editableKeyup', this.onKeyup);
                this.editor.unsubscribe('editableKeydown', this.onKeydown);
                this.editor.destroy();
            },
            events() {
                Event.listen('content:focus', () => {
                   this.$refs.content.focus();
                });
            },
            onInput(e) {
                this.$emit('input', e.target.innerHTML);
            },
            onKeyup(e) {
                this.$emit('keyup', e);
            },
            onKeydown(e) {
                this.$emit('keydown', e);
            }
        },
        mounted() {
            this.init();
            this.events();
        },
        beforeDestroy() {
            this.destroy();
        }
    }
</script>

<style lang="scss" scoped>
    [contenteditable="true"] {
        &:focus, &:hover {
            outline: none;
            cursor: text;
        }
    }
    [data-attr="content"][contenteditable="true"] {
        min-height: 400px;
        &:after {
            color: #b3b3b1;
            font-size: 14px;
            font-style: normal;
        }
    }
</style>