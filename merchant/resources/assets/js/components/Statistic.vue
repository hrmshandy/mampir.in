<template>
    <div class="statistic">
        <label class="text-muted">Statistik</label>

        <div id="reportrange" class="date-range">
            <svg class="o-svg-icon"><use xlink:href="#icon-calendar"></use></svg>
            <span></span>
        </div>
        <div class="card">

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            var start = moment().subtract(29, 'days');
            var end = moment();

            function cb(start, end) {
                $('#reportrange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
            }

            $('#reportrange').daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);

            cb(start, end);
        }
    }
</script>

<style lang="scss">
    @import "~daterangepicker/daterangepicker";
</style>