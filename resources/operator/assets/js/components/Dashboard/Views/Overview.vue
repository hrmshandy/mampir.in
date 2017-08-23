<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <form action="">
          <h4>Input Check-In ID</h4>
          <div class="input-group">
            <input v-for="i in 4" v-on:keyup="$event.target.nextElementSibling.focus()" type="text" class="o-input o-input-id" maxlength="1" v-validate="{ rules: { regex: /^([0-9]+)$/} }">
          </div>
          <button type="submit" name="inputId" id="inputId" class="o-btn o-btn-general">Input ID</button>
        </form>
      </div>
    </div>
    
    <div class="row">
      <div class="col-xs-12">
        <form action="">
          <h4>Statistik</h4>
          <div class="daterange-wrapper">
            <select class="form-control" name="date-one" id="date-one">
              <option value="">Tgl</option>
              <option v-for="n in 31" :value="n">{{ n }}</option>
            </select>   
            <select class="form-control" name="month-one" id="month-one">
              <option v-for="(item, index) in monthName" :value="index">{{ item.month }}</option>
            </select>
            <div class="line"></div>
            <select class="form-control" name="date-one" id="date-one">
              <option value="">Tgl</option>
              <option v-for="n in 31" :value="n">{{ n }}</option>
            </select>   
            <select class="form-control" name="month-one" id="month-one">
              <option v-for="(item, index) in monthName" :value="index">{{ item.month }}</option>
            </select>
          </div>      
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="well well-custom">
          
        </div>
      </div>
    </div>

    <!--Charts-->
    <!-- <div class="row">

      <div class="col-xs-12">
        <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
          <h4 class="title" slot="title">Users behavior</h4>
          <span slot="subTitle"> 24 Hours performance</span>
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Email Statistics</h4>
          <span slot="subTitle"> Last campaign performance</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">2015 Sales</h4>
          <span slot="subTitle"> All products including Taxes</span>
          <span slot="footer">
            <i class="ti-check"></i> Data information certified</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>

    </div> -->

  </div>
</template>
<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';

  Vue.use(VeeValidate);

  import StatsCard from '../../UIComponents/Cards/StatsCard.vue'
  import ChartCard from '../../UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        monthName: [
          { month: 'Bulan' },
          { month: 'Januari' },
          { month: 'Februari' },
          { month: 'Maret' },
          { month: 'April' },
          { month: 'Mei' },
          { month: 'Juni' },
          { month: 'Juli' },
          { month: 'Agustus' },
          { month: 'September' },
          { month: 'Oktober' },
          { month: 'November' },
          { month: 'Desember' }
        ],
        statsCards: [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'Capacity',
            value: '105GB',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: 'ti-twitter-alt',
            title: 'Followers',
            value: '+45',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    }
    /*computed: {
      inputClasses () {
        return this.attr('maxlength','6');
      }
    }*/
  }
</script>
