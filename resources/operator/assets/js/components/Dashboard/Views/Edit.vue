<template>
    <div class="row">
      <div class="col-xs-6">
        <form action="">
          <h3>Informasi Basic</h3>

          <input type="text" class="o-input" placeholder="Nama Merchant">
          <div class="c-form-group c-input-group">
            <input type="text" name="address" placeholder="Masukan Lokasi Merchant" class="o-input">
            <button type="button" class="o-button"><i aria-hidden="true" class="fa fa-search"></i></button>
          </div>
          <input type="text" class="o-input" placeholder="No. Telp">
          <search-place name="address"></search-place>
          <h3>Karakteristik Merchant</h3>
          <div class="row">
            <div class="col-xs-6">
              <input type="text" placeholder="Kategori" class="o-input">
            </div>
            <div class="col-xs-6">
              <input type="text" placeholder="Keyword" class="o-input">
            </div>
          </div>
          <h4>Services</h4>
          <div class="check-group">
            <label for="">
              <input type="checkbox">
              Sarapan
            </label>
            <label for="">
              <input type="checkbox">
              Makan Siang
            </label>
            <label for="">
              <input type="checkbox">
              Resto
            </label>
            <label for="">
              <input type="checkbox">
              Cafe
            </label>
            <label for="">
              <input type="checkbox">
              Nightlife
            </label>
          </div>
          <h4>Pembayaran</h4>
          <div class="radio-group">
            <label for="">
              <input type="radio">
              Card & Cash
            </label>
            <label for="">
              <input type="radio">
              Cash only
            </label>
          </div>
          <h4>Jam Buka</h4>
          <div class="check-group">
            <label v-for="hari in hari">
              <input type="checkbox">
              {{ hari.name }}
            </label>
          </div>
          <div
          v-for="(index, n) in timewrap"
          :id="n"
          @remove="removeTime(index)"
          class="timerange-wrapper">
            <div class="time">
              <select v-model="timewrap.from" class="o-input" name="from-one">
                <option value="">Dari</option>
                <option v-for="from in 24" :value="from">{{ from }}:00</option>
              </select>
              <div class="line"></div>
              <select v-model="timewrap.to" class="o-input" name="to-one">
                <option value="">Sampai</option>
                <option v-for="to in 24" :value="to">{{ to }}:00</option>
              </select>
            </div>
            <div class="o-button-wrapper" is="buttonadd">
              <button
              type="button"
              @click="addTime"
              class="o-btn o-btn-general">+ Tambah Waktu</button>
            </div>
            <div v-if="n >= 1" class="o-button-wrapper" is="buttondel">
              <button
                type="button"
                @click="removeTime"
                class="o-btn o-btn-general">- Hapus Waktu</button>
            </div>
          </div>
          <button  type="submit" class="o-btn o-btn-general">Edit Info</button>
        </form>
      </div>
    </div>
</template>
<script>
import SearchPlace from '../../UIComponents/PlacesSearch.vue'

export default {
  components: {
    'search-place': SearchPlace
  },
  data () {
    return {
      more: false,
      timewrap: [
        { id: 1, from: '', to: '' }
      ],
      hari: [
        { name: 'Senin' },
        { name: 'Selasa' },
        { name: 'Rabu' },
        { name: 'Kamis' },
        { name: 'Jumat' },
        { name: 'Sabtu' }
      ]
    }
  },
  methods: {
    addTime: function () {
      this.timewrap.push({
        id:  Math.floor(Math.random()*6) + 1,
        from: '',
        to: ''
      });
    },
    removeTime: function(index) {
      console.log(index);
      this.timewrap.splice(index, 1)
    }
  }
} 
</script>
<style>

</style>
