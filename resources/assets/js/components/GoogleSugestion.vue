<template>
    <div class="c-input-suggestion" ref="container">
        <input type="text"
               :id="getOptions.inputId"
               :class="inputClass"
               :placeholder="getOptions.placeholder"
               autocomplete="off"
               v-model="keyword"
               @focus="onInputFocus"
               @input="fetchSuggestions"
               @blur="blurHandler"
               @change="onchange">
        <div v-if="showInputSuggestions && !isEmptySuggestions" class="c-input-suggestion__suggestions">
            <template v-for="suggestion in suggestions">
                <a href="#"
                   class="c-input-suggestion__item"
                   @click.prevent="suggestionClicked($event, suggestion)"
                   v-html="suggestion.html">
                </a>
            </template>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>