<template>
    <div class="c-editor">
        <div ref="toolbar" class="c-editor-toolbar-wrapper">
            <div id="editor-toolbar" class="c-editor-toolbar"></div>
        </div>
        <div class="o-container">
            <div ref="content" data-attr="content" data-placeholder="Content..." id="ce"
                 class="journal__content c-content-editor"></div>
        </div>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce';
//    import '../../editor-theme';

    export default {
        props: {
            value: String,
            options: {
                type: Object,
                default() {
                    return {};
                }
            }
        },

        methods: {
            init() {
                var self = this;
                tinymce.baseURL = "/vendor/tinymce";

                this.editor = tinymce.init({
                    target: this.$refs.content,
                    theme: 'inbox',
                    inline: true,
                    fixed_toolbar_container: '#editor-toolbar',
                    menubar: false,
                    plugins: 'autolink autolists image instagram link lists paste title video ',
                    toolbar: 'bold italic link blockquote title subtitle bullist numlist instagram video',
                    setup: (editor) => {
                        editor.on('init', (e) => {
                            tinymce.DOM.addClass(editor.bodyElement, 'is-empty');
                        });
                        editor.on('selectionchange', () => {
                            if (editor.getContent() === "") {
                                tinymce.DOM.addClass(editor.bodyElement, 'is-empty');
                            } else {
                                tinymce.DOM.removeClass(editor.bodyElement, 'is-empty');
                            }
                        });

                        editor.on('input', (e) => {
                            this.$emit('input', editor.getContent({format: 'html'}));
                        })

                        editor.on('NodeChange Change', (e) => {
                            this.$emit('change', editor.getContent({format: 'html'}));
                        })

                        editor.on('keyup', (e) => {
                            this.$emit('keyup', e);
                        })

                        editor.on('keydown', (e) => {
                            this.$emit('keydown', e);
                        })
                    }
                });
            },

            events() {
                Event.listen('content:focus', () => {
                    this.$refs.content.focus();
                });

                document.addEventListener('scroll', () => {
                    const toolbarWrapper = this.$refs.toolbar;
                    const toolbar = toolbarWrapper.querySelector('.c-editor-toolbar');
                    if (toolbarWrapper.getBoundingClientRect().top <= 110) {
                        toolbar.classList.add('is-sticky');
                    } else {

                        toolbar.classList.remove('is-sticky');
                    }
                })
            }
        },

        mounted() {

            this.init();
            this.events();
        }
    }
</script>

<style lang="scss">
    /*.c-editor-toolbar {*/
    /*position: absolute;*/
    /*}*/
</style>