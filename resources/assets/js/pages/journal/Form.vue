<template>
    <div class="journal">
        <div class="journal__top-wrapper">
            <div class="o-container">
                <div class="c-user-post u-mb-x4">
                    <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-1/p240x240/15895009_1442492025783082_122372181146089725_n.jpg?oh=d93a57d08649f54ea53ca58cef0979ea&oe=5A23E9E1" class="c-user-post__img" width="60">
                    <div class="c-user-post__content">
                        <h4 class="c-user-post__name">Shandy Hermawan</h4>
                        <span>Draft</span>
                    </div>
                </div>
                <h1 ref="title"
                    class="o-section__title journal__title"
                    data-attr="title"
                    contenteditable="true"
                    @keypress="onKeypress"
                    @paste="onPaste"></h1>
            </div>
        </div>
        <div class="journal__body">
            <div class="o-container">
                <div ref="content" data-attr="content" class="journal__content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import MediumEditor from 'medium-editor';

    export default {
        data() {
          return  {
          }
        },
        methods: {
            onKeypress(e) {
                if(e.keyCode == 13) {
                    e.preventDefault();
                    this.$refs.content.focus();
                }
            },
            onPaste(e){
                e.preventDefault();

                let clipboardText = e.clipboardData.getData('text/plain');

                document.execCommand("insertHTML", false, clipboardText);
            }
        },
        mounted() {
            Vue.nextTick(() => {
                new MediumEditor(this.$refs.content, {
                    placeholder: {
                        text: 'Ceritakan kisahmu...',
                        hideOnClick: false
                    }
                });
            });
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
    [data-attr="title"][contenteditable="true"] {
        &:empty:before {
            content: "Title";
            color: #b3b3b1;
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