<template>
    <div class="check-in">
        <div class="row">
            <div class="col-md-auto">
                <label for="input-check-in-id" class="text-muted">Input Check-in ID</label>
                <div id="input-check-in-id" class="check-in__input-id" @keyup="onInputId">
                    <input ref="input1" type="text" placeholder="-" maxlength="1">
                    <input ref="input2" type="text" placeholder="-" maxlength="1">
                    <input ref="input3" type="text" placeholder="-" maxlength="1">
                    <input ref="input4" type="text" placeholder="-" maxlength="1" @input="jumpToInputNominal">
                </div>
            </div>
            <div class="col-md-auto">
                <label for="input-check-in-nominal" class="text-muted">Input Nominal</label>
                <money id="input-check-in-nominal"
                       ref="inputNominal"
                       type="text"
                       placeholder="Rp. 000.000.000"
                       class="check-in__input-nominal"
                       v-model="nominal"
                       v-bind="moneyFormat">
                </money>
            </div>
        </div>

        <button class="btn btn-primary">Check In</button>
    </div>
</template>

<script>
    import {Money} from 'v-money'

    export default {
        components: {Money},

        data() {
            return {
                nominal: 0,
                moneyFormat: {
                    decimal: ',',
                    thousands: '.',
                    prefix: 'Rp. ',
                    precision: 0,
                    masked: false
                }
            }
        },
        methods: {
            onInputId(e) {
                let target = e.srcElement;
                let maxLength = parseInt(target.attributes["maxlength"].value, 10);
                let myLength = target.value.length;
                if (myLength >= maxLength) {
                    let next = target;
                    while (next = next.nextElementSibling) {
                        if (next === null)
                            break;
                        if (next.tagName.toLowerCase() === "input") {
                            next.focus();
                            break;
                        }
                    }
                }
            },
            jumpToInputNominal(e) {
                const elem = this.$refs.inputNominal.$el;
                console.log(elem)
                if(e.target.value.length >= 1) {
                    elem.focus();
                    elem.dispatchEvent(new Event("click"));
                }
            },
            onInputNominalClick(e) {
                if(e.target.value.length <= 0) {
                    e.target.value = "Rp. ";
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/mixins.placeholder';

    %input-style {
        color: #999;
        background: transparent;
        border: 0 solid #ccc;
        border-bottom-width: 1px;
        &:focus {
            outline: none;
            box-shadow: none;
        }

        @include placeholder {
            color: #ccc;
        }
    }

    .check-in {
        &__input-id {
            display: flex;
            align-items: center;
            max-width: 200px;
            margin-bottom: 30px;
            > input {
                margin-right: 15px;
                width: 100%;
                text-align: center;
                font-size: 4rem;
                line-height: 4rem;
                @extend %input-style;
            }
        }
        &__input-nominal {
            display: block;
            width: 200px;
            margin-bottom: 30px;
            line-height: 4.5rem;
            font-size: 1.75rem;
            @extend %input-style;
        }
    }
</style>