<template>
    <div>
        <h1 ref="title"
            class="o-section__title journal__title"
            data-attr="title"
            contenteditable="true"
            @keypress="onKeypress"
            @paste="onPaste"
            @input="onInput"
            @keyup="onKeyup"
            @keydown="onKeydown"
            v-text="value"></h1>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
          return {
              maxChar: 100
          }
        },
        methods: {
            onKeypress(e) {
                if(e.target.innerText.length >= this.maxChar) {
                    e.preventDefault();
                }
                if(e.keyCode == 13) {
                    e.preventDefault();
                    Event.fire('content:focus');
                }
            },
            onPaste(e){
                e.preventDefault();

                let clipboardText = e.clipboardData.getData('text/plain');

                document.execCommand("insertHTML", false, clipboardText);
            },
            onInput(e) {
                this.$emit('input', e.target.innerText);
            },
            onKeyup(e) {
                this.$emit('keyup', e);
            },
            onKeydown(e) {
                this.$emit('keydown', e);
            }
        },
        mounted() {
            Event.listen('title:focus', () => {
                this.$refs.title.focus();
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
</style>