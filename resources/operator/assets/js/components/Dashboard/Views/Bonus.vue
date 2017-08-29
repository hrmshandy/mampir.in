<template>
  <div class="row">
    <form action="" class="col-xs-6 row">
      <h3>Set Bonus Rule</h3>
      
      <!-- <dropzone id="myVueDropzone" url="https://httpbin.org/post" :dropzone-options="customOptionsObject" v-on:vdropzone-success="showSuccess">
          Optional parameters if any!
          <input type="hidden" name="token" value="xxx">
      </dropzone> -->
      
      <div class="form-group">
          <image-upload></image-upload>
      </div>
      
      <div class="form-group">
        <input type="text" placeholder="Masukan Judul Bonus" class="o-input">
      </div>

      <textarea name="ket" id="ket" cols="30" rows="10" class="o-input o-input--area" placeholder="Keterangan Bonus"></textarea>
      <button class="o-btn o-btn-general" type="submit">Submit Bonus</button>
    </form>
  </div>
</template>

<script>
  import ImageUpload from './ImageUpload.vue'
  // import Dropzone from 'vue2-dropzone'


  export default {
    components: { ImageUpload },
    methods: {
      'showSuccess': function (file) {
        console.log('A file was successfully uploaded')
      }
    },
    data() {
      return {
        customOptionsObject: {
          maxNumberOfFiles: 1,
          useFontAwesome: true,
          headers: "test"
        }
      }
    }
  }
</script>