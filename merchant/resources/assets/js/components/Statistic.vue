<template>
    <div class="statistic mb-5">
        <label class="text-muted">Statistik</label>

        <div class="row align-items-center mb-3">
            <div class="col-sm-3">
                <div class="d-flex">
                    <select name="dateStart[day]" v-model="filter.dateStart.day" class="form-control w-50 mr-1">
                        <option value="">Tgl</option>
                        <option v-for="d in days" :value="d">{{ d }}</option>
                    </select>
                    <select name="dateStart[month]" v-model="filter.dateStart.month" class="form-control">
                        <option value="">Bulan</option>
                        <option v-for="m in months" :value="m.number" >{{ m.string }}</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-1 px-1">
                <div class="u-dividerH u-dividerH--small"></div>
            </div>
            <div class="col-sm-3">
                <div class="d-flex">
                    <select name="dateEnd[day]" v-model="filter.dateEnd.day" class="form-control w-50 mr-1">
                        <option value="">Tgl</option>
                        <option v-for="d in days" :value="d"
                                :disabled="(filter.dateEnd.month == filter.dateStart.month) && d < filter.dateStart.day">{{ d }}</option>
                    </select>
                    <select name="dateEnd[month]" v-model="filter.dateEnd.month" class="form-control">
                        <option value="">Bulan</option>
                        <option v-for="m in months" :value="m.number" :disabled="m.number < filter.dateStart.month">{{ m.string }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="d-flex text-center">
                <div class="w-50 border p-5">
                    <p class="text-muted">Banyaknya check-in</p>
                    <h2 class="text-primary">{{ numberOfCheckIn.now }}</h2>
                    <p class="text-muted mb-0">
                        <span :class="{
                            'text-success': (numberOfCheckIn.now > numberOfCheckIn.last),
                            'text-danger': (numberOfCheckIn.now < numberOfCheckIn.last),
                            'text-warning': (numberOfCheckIn.now == numberOfCheckIn.last),
                        }">
                            <template v-if="numberOfCheckIn.now == numberOfCheckIn.last">
                                Tetap
                            </template>
                            <template v-else>
                                <i v-if="numberOfCheckIn.now > numberOfCheckIn.last" class="fa fa-arrow-up"></i>
                                <i v-else class="fa fa-arrow-down"></i>
                                {{ numberOfCheckIn.now - numberOfCheckIn.last }}
                            </template>

                        </span> dari bulan lalu
                    </p>
                </div>
                <div class="w-50 border p-5">
                    <p class="text-muted">Kisaran Pendapatan</p>
                    <h2 class="text-primary">{{ currencyFormat(rangeOfRevenue.now) }}</h2>
                    <p class="text-muted mb-0">
                        <span :class="{
                            'text-success': (rangeOfRevenue.now > rangeOfRevenue.last),
                            'text-danger': (rangeOfRevenue.now < rangeOfRevenue.last),
                            'text-warning': (rangeOfRevenue.now == rangeOfRevenue.last),
                        }">
                            <template v-if="rangeOfRevenue.now == rangeOfRevenue.last">
                                Tetap
                            </template>
                            <template v-else>
                                <i v-if="rangeOfRevenue.now > rangeOfRevenue.last" class="fa fa-arrow-up"></i>
                                <i v-else class="fa fa-arrow-down"></i>
                                {{ currencyFormat(rangeOfRevenue.last - rangeOfRevenue.last) }}
                            </template>

                        </span> dari bulan lalu
                    </p>
                </div>
            </div>
        </div>
        <div class="stat-chart card">
            <div class="card-body">
                <div class="text-center mb-3">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                                :class="['btn', 'btn-outline-light', 'border', 'text-muted', {'active': (chart.name == 'Check-in')}]"
                                @click="changeToNumberOfCheckIn">
                            Banyaknya Check-in
                        </button>
                        <button type="button"
                                :class="['btn', 'btn-outline-light', 'border', 'text-muted', {'active': (chart.name == 'Pendapatan')}]"
                                @click="changeToRangeOfRevenue">
                            Kisaran Pendapatan
                        </button>
                    </div>
                </div>
                <chart v-model="chart.data" :name="chart.name"></chart>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from './Chart.vue'

    export default {
        components: { Chart },
        data: () => ({
            filter: {
                dateStart: {
                    day: moment().subtract(7, 'day').date(),
                    month: moment().subtract(7, 'day').month()
                },
                dateEnd: {
                    day: moment().date(),
                    month: moment().month()
                }
            },
            numberOfCheckIn: { last: 0, now: 0, data: []},
            rangeOfRevenue: { last: 0, now: 0, data: []},
            chart: {
                name: 'Check-in',
                data: []
            }

        }),
        computed: {
            days() {
                let days = [];

                for(let d = 1; d <= 31; d++) {
                    days.push(d);
                }

                return days;
            },
            months() {
                let months = [];

                for(let m = 0; m < 12; m++) {
                    months.push({
                        number: m,
                        string: moment(m+1, 'MM').format('MMMM')
                    });
                }

                return months;
            },
            dateStartString() {
                return moment().year()+pad(this.filter.dateStart.month+1)+pad(this.filter.dateStart.day);
            },
            dateEndString() {
                return moment().year()+pad(this.filter.dateEnd.month+1)+pad(this.filter.dateEnd.day);
            }
        },
        watch: {
            'filter.dateStart.day': function(value) {
                this.fetchStats();
            },
            'filter.dateStart.month': function(value) {
                if(value === this.filter.dateEnd.month) {
                    if(this.filter.dateStart.day === 31) {
                        this.filter.dateEnd.day = 1;
                        this.filter.dateEnd.month = value+1;
                    } else {
                        this.filter.dateEnd.day = this.filter.dateStart.day+1;
                    }
                }

                this.fetchStats();
            },
            'filter.dateEnd.day': function() {
                this.fetchStats();
            },
            'filter.dateEnd.month': function(value) {
                if(value === this.filter.dateStart.month) {
                    if(this.filter.dateStart.day === 31) {
                        this.filter.dateEnd.day = 1;
                        this.filter.dateEnd.month = value+1;
                    } else {
                        this.filter.dateEnd.day = this.filter.dateStart.day+1;
                    }
                }

                this.fetchStats();
            }
        },
        methods: {
            changeToNumberOfCheckIn() {
                this.chart.name = "Check-in";
                this.chart.data = this.numberOfCheckIn.data;
            },
            changeToRangeOfRevenue() {
                this.chart.name = "Pendapatan";
                this.chart.data = this.rangeOfRevenue.data;
            },
            fetchStats() {
                let url = `/api/statistic?date-start=${this.dateStartString}&date-end=${this.dateEndString}`
                axios.get(url).then(({data}) => {
                    this.numberOfCheckIn = data.summary.numberOfCheckIn;
                    this.rangeOfRevenue = data.summary.rangeOfRevenue;
                    this.numberOfCheckIn.data = data.stats.map(item => {
                        return [Date.UTC(item.year, item.month-1, item.day), item.numberOfCheckIn];
                    });
                    this.rangeOfRevenue.data = data.stats.map(item => {
                        return [Date.UTC(item.year, item.month-1, item.day), item.totalPurchase];
                    });

                    this.chart.data = this.numberOfCheckIn.data;
                });
            },
            currencyFormat(num) {
                return 'Rp'+currencyFormat(num);
            }
        },
        mounted() {
            this.fetchStats();
            //this.initChart();
        }
    }
</script>

<style lang="scss">
    @import "~daterangepicker/daterangepicker";
</style>