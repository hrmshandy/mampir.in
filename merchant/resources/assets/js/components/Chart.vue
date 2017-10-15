<template>
    <div class="c-chart"></div>
</template>

<script>
    import Highcharts from 'highcharts'

    export default {
        props: {
            value: { type: Array, required: true },
            name: String
        },
        data: () => ({
            chart: {},
            options: {
                chart: {
                    type: 'area'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: null
                },
                xAxis: {
                    type: 'datetime',
                    labels: {
                        format: '{value:%b, %d}'
                    }
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    formatter: function() {
                        return `${Highcharts.dateFormat('%b, %d', this.x)} <br>
                            ${this.series.name}: <b>${this.y}</b>`;
                    }
                },
                series: [{
                    data: [],
                    color: '#dbc4a6',
                    fillOpacity: 0.8,
                    lineColor: '#dbc4a6'
                }]
            }
        }),
        watch: {
            value(value) {
                this.chart.series[0].remove();
                this.chart.addSeries({
                    name: this.name,
                    data: value,
                    color: '#dbc4a6',
                    fillOpacity: 0.8,
                    lineColor: '#dbc4a6'
                })
            },
            name(value) {

                if(value === 'Pendapatan') {
                    this.chart.update({
                        tooltip: {
                            formatter: function() {
                                return `${Highcharts.dateFormat('%b, %d', this.x)} <br>
                                    ${this.series.name}: <b>Rp${currencyFormat(this.y)}</b>`;
                            }
                        }
                    });
                }
                this.chart.series[0].update({name: value});
            }
        },
        mounted() {
            this.options.series[0].data = this.value;
            this.options.series[0].name = this.name;
            this.chart = Highcharts.chart(this.$el, this.options);
        }
    }
</script>