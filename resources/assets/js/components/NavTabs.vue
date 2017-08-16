<template>
    <div id="column-time">
        <div class="append o-grid c-form-group" v-for="(columnTime, index) in columnTimes ">
            <div class="o-grid__col u-4/12@lg">
                <select name="" id="" v-model="columnTime.from" class="o-input o-input--large">
                    <option value="">Dari</option>
                </select>
            </div>
            <div class="o-grid__col u-4/12@lg">
                <select name="" id="" class="o-input o-input--large" v-model="columnTime.to">
                    <option value="">Sampai</option>
                </select>
            </div>
            <div class="o-grid__col u-4/12@lg">
                <a href="#" v-if="columnTimes.length == (index+1)" @click.prevent="addField()" class="o-button o-button--primary o-button--block o-button--large"> Tambah Waktu </a>
                <a href="#" v-if="columnTimes.length != 1 && columnTimes.length != (index+1) " @click.prevent="removeField()" class="o-button o-button--primary o-button--block o-button--large"> Remove </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columnTimes: [
                    {
                        from : '',
                        to : ''
                    }
                ]
            }
        },

        methods: {
            addField() {
                this.columnTimes.push({
                    from : '',
                    to : ''
                })
            },
            removeField(index) {
                this.columnTimes.splice(index, 1)
            }
        }
    }
</script>