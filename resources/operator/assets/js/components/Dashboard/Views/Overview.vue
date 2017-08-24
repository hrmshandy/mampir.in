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
            <select class="o-input" name="date-one" id="date-one">
              <option value="">Tgl</option>
              <option v-for="n in 31" :value="n">{{ n }}</option>
            </select>   
            <select class="o-input" name="month-one" id="month-one">
              <option v-for="(item, index) in monthName" :value="index">{{ item.month }}</option>
            </select>
            <div class="line"></div>
            <select class="o-input" name="date-one" id="date-one">
              <option value="">Tgl</option>
              <option v-for="n in 31" :value="n">{{ n }}</option>
            </select>   
            <select class="o-input" name="month-one" id="month-one">
              <option v-for="(item, index) in monthName" :value="index">{{ item.month }}</option>
            </select>
          </div>      
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="card">
          <div class="content row">
            <div class="col-xs-6">
              <div class="statistic-value">
                <h4>Banyaknya Check-in</h4>
                <h1>275</h1>
                <div class="statistic-value__progress">
                  <h4>
                    <span><i class="fa fa-arrow-up" aria-hidden="true"></i> 90</span>
                    dari bulan lalu
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="statistic-value">
                <h4>Kisaran Pendapatan</h4>
                <h1>Rp1.500.000</h1>
                <div class="statistic-value__progress">
                  <h4>
                    <span><i class="fa fa-arrow-up" aria-hidden="true"></i> Rp200.000</span>
                    dari bulan lalu
                  </h4>
                </div>
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-xs-12">
        <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
          <span slot="subTitle" class="o-btn-wrapper">
            <span class="o-btn-group">
              <button class="o-btn o-btn-chart" v-on:click="setActiveCheckin" v-bind:class="{ active: isActive }" type="button">Banyaknya Check-in</button>
              <button class="o-btn o-btn-chart" v-on:click="setActiveKisaran" v-bind:class="{ active: isActiveK }" type="button">Kisaran Pendapatan</button>
            </span>
          </span>
        </chart-card>
      </div>
      <div class="col-xs-12">
        <chart-card-second :chart-data="twoChart.data" :chart-options="twoChart.options">
          <span slot="subTitle" class="o-btn-wrapper">
            <span class="o-btn-group">
              <button class="o-btn o-btn-chart" v-on:click="setActiveCheckin" v-bind:class="{ active: isActive }" type="button">Banyaknya Check-in</button>
              <button class="o-btn o-btn-chart" v-on:click="setActiveKisaran" v-bind:class="{ active: isActiveK }" type="button">Kisaran Pendapatan</button>
            </span>
          </span>
        </chart-card-second>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h4>Statistik merchant anda sepi? tingkatkan statistik merchant anda</h4>
        <button class="o-btn o-btn-general">Upgrade Merchant</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';

  Vue.use(VeeValidate);

  import StatsCard from '../../UIComponents/Cards/StatsCard.vue'
  import ChartCard from '../../UIComponents/Cards/ChartCard.vue'
  import ChartCardSecond from '../../UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard,
      'chart-card-second': ChartCardSecond
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        isActive: true,
        isActiveK: false,
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
        usersChart: {
          data: {
            labels: ['20 Agu', '21 Agu', '22 Agu', '23 Agu', '24 Agu', '25 Agu', '26 Agu', '27 Agu'],
            series: [
              [160, 150, 255, 200, 310, 280, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 500,
            showArea: true,
            height: '312px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 10
            }),
            showLine: true,
            showPoint: true
          }
        },
        twoChart: {
          data: {
            labels: ['20 Agu', '21 Agu', '22 Agu', '23 Agu', '24 Agu', '25 Agu', '26 Agu', '27 Agu'],
            series: [
              [460, 350, 255, 200, 210, 380, 107, 210, 110]
            ]
          },
          options: {
            low: 0,
            high: 500,
            showArea: true,
            height: '312px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 10
            }),
            showLine: true,
            showPoint: true
          }
        }
      }
    },
    methods: {
      setActiveCheckin: function(){
          this.isActiveK = !this.isActiveK;
          this.isActive = !this.isActive;
      },
      setActiveKisaran: function(){
          this.isActive = !this.isActive;
          this.isActiveK = !this.isActiveK;
      }
    }
  }
</script>
