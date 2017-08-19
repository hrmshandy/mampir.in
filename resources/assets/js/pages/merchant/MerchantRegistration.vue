<template>
    <div class="merchant-registration o-section">
        <div class="o-container">
            <step active="1"></step>
            <div class="tab-1">
                <div class="o-container o-container--fit">
                    <div class="c-card c-card--merchant">
                        <h2 class="o-heading u-m-x3">
                            Informasi Basic
                        </h2>
                        <form action="">
                            <div class="c-form-group">
                                <dropzone
                                    id="myVueDropzone"
                                    ref="reviewUpload"
                                    url="/api/merchant/upload"
                                    >
                                    <!-- Optional parameters if any! -->
                                    <input type="hidden" name="token" value="xxx">
                                </dropzone>
                            <label for="" class="u-weight-bold u-mb-x1">Upload Logo</label>
                            </div>
                            <div class="c-form-group c-form-group--mg2">
                                <input type="text" id="" placeholder="Nama Tempat" autocomplete="off" class="o-input o-input--large">
                            </div>
                            <places name="address">
                            </places>
                            <label for="" class="u-weight-bold u-mb-x1">Kontak </label>
                            <div class="c-form-group">
                                <input type="text" id="" placeholder="No Telp" autocomplete="off" class="o-input o-input--large">
                            </div>
                            <div class="c-form-group">
                                <input type="text" id="" placeholder="Alamat Email" autocomplete="off" class="o-input o-input--large">
                            </div>
                            <div class="c-form-group">
                                <input type="text" id="" placeholder="Website" autocomplete="off" class="o-input o-input--large">
                            </div>
                        </form>

                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration/2" class="o-button o-button--primary o-button--block o-button--large"> Next </router-link>
                        </div>

                        <div class="c-form-group u-mt-x5">
                            <router-link to="/merchant/registration"> < Kembali</router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Dropzone from 'vue2-dropzone'
    import Places from '../../components/PlacesSearch.vue'
    import Step from '../../components/StepTab.vue'

    export default {
        components: { Places, Dropzone, Step },
        data() {
            return {
                activeTab: 1
            }
        },
        methods: {
            template() {
                return `
                  <div class="dz-preview dz-file-preview">
                      <div class="dz-image" style="width: 100px;height: 100px">
                          <img data-dz-thumbnail /></div>
                      <div class="dz-details">
                        <div class="dz-size"><span data-dz-size></span></div>
                        <div class="dz-filename"><span data-dz-name></span></div>
                      </div>
                      <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                      <div class="dz-error-message"><span data-dz-errormessage></span></div>
                      <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                      <div class="dz-error-mark"><i class="fa fa-close"></i></div>
                  </div>
              `;
            }
        }
    }

</script>