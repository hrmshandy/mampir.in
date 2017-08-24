<template>
  <div class="row">
    <form action="" class="col-xs-6 row">
      <h3>Discount Promotion</h3>
      <dropzone id="myVueDropzone" url="https://httpbin.org/post" :dropzone-options="customOptionsObject" v-on:vdropzone-success="showSuccess">
          <!-- Optional parameters if any! -->
          <input type="hidden" name="token" value="xxx">
      </dropzone>
      <input type="text" placeholder="Masukan Judul Discount" class="o-input">
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
      <button class="o-btn o-btn-general" type="submit">Submit Bonus</button>
    </form>
  </div>
</template>

<script>
  import Dropzone from 'vue2-dropzone'

  export default {
    components: {
      Dropzone
    },
    methods: {
      'showSuccess': function (file) {
        console.log('A file was successfully uploaded')
      }
    },
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
        customOptionsObject: {
          maxNumberOfFiles: 1,
          useFontAwesome: true,
          headers: "test"
        }
      }
    }
  }
</script>