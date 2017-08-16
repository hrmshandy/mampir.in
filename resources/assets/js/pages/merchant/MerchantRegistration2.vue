<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="2"></step>
            <div class="tab-1">

                <div class="o-container o-container--fit">
                    <div class="c-card c-card--merchant">
                        <h2 class="o-heading u-m-x3">
                            Karakteristik Merchant
                        </h2>
                        <form action="">
                            <div class="o-grid c-form-group">
                                <div class="o-grid__col u-6/12@lg">
                                    <input type="text" placeholder="Kategori" class="o-input o-input--large">
                                </div>
                                <div class="o-grid__col u-6/12@lg">
                                    <input type="text" placeholder="Keyword" class="o-input o-input--large">
                                </div>
                            </div>

                            <div class="c-form-group">
                                <label for="">Pembayaran</label>
                                    <div class="o-grid">
                                        <div class="o-grid__col u-3/12@lg">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" value="" name="pembayaran"> Card & Cash
                                                </label>
                                            </div>
                                        </div>
                                        <div class="o-grid__col u-3/12@lg">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" value="" name="pembayaran"> Cash Only
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div class="c-form-group">
                                <label for="">Jam Buka</label>
                                <div class="o-grid">
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Senin
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Selasa
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Rabu
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Kamis
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Jumat
                                            </label>
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-2/12@lg">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value="">Sabtu
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                        </form>

                        <div class="c-form-group">
                            <router-link to="/merchant/registration/3" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
                        </div>

                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration/1"> < Kembali</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Step from '../../components/StepTab.vue'

    export default {
        components: { Step },
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