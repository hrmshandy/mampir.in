<template>
    <div>
        <div ref="notification" class="notification shape-progress">
            <svg ref="progress" width="70px" height="70px">
                <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
            </svg>
        </div>
        <div ref="file-manager" class="file-manager">
            <nav class="fm-nav">
                <div class="fm-nav__body">
                    <div class="fm-nav__top">
                        <ol class="fm-breadcrumb">
                            <li v-for="(target, breadcrumb) in breadcrumbs" class="fm-breadcrumb__item">
                                <a href="#" class="fm-breadcrumb__link"
                                   @click.prevent="openFolder(target)">{{ breadcrumb }}</a>
                            </li>
                            <li class="fm-breadcrumb__item fm-breadcrumb--active">{{ folderName }}</li>
                        </ol>
                    </div>
                    <div class="fm-nav__bottom">
                        <file-upload class="fm-input" id="fm-input" action="/finder"
                                     @upload="onUpload"
                                     @progress="onUploadProgress"
                                     @complete="onUploadComplete"
                                     @error="onUploadError">
                            <svg class="fm-input__icon" viewBox="0 0 92 92" enable-background="new 0 0 92 92">
                                <path d="M89,58.8V86c0,2.8-2.2,5-5,5H8c-2.8,0-5-2.2-5-5V58.8c0-2.8,2.2-5,5-5s5,2.2,5,5V81h66V58.8
									c0-2.8,2.2-5,5-5S89,56,89,58.8z M29.6,29.9L41,18.2v43.3c0,2.8,2.2,5,5,5s5-2.2,5-5V18.3l11.4,11.6c1,1,2.3,1.5,3.6,1.5
									c1.3,0,2.5-0.5,3.5-1.4c2-1.9,2-5.1,0.1-7.1L49.6,2.5C48.6,1.5,47.3,1,46,1c-1.3,0-2.6,0.5-3.6,1.5L22.5,22.9
									c-1.9,2-1.9,5.1,0.1,7.1C24.5,31.9,27.7,31.8,29.6,29.9z"/>
                            </svg>
                            Upload
                        </file-upload>
                    </div>
                </div>
            </nav>

            <div class="fm-loader-wrapper" v-show="processing" transition="fade">
                <div class="fm-loader">
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div v-if="empty" class="fm-empty">
                Folder <em>{{ folderName }}</em> is empty.
            </div>
            <div v-else class="fm-body">
                <div class="folders">
                    <div v-for="folder in subfolders" class="folder" :style="thumbStyle">
                        <a href="#" :class="['folder__body', { 'folder--selected' : folder.id == selected.id }]"
                           @click.prevent="select(folder, $event)" @dblclick.prevent="openFolder(folder.fullPath)">
                            <span :class="['folder__icon', { 'folder__icon--not-empty' : folder.items > 0 }]"></span>
                            <div class="folder__meta">
								<span class="folder__name">
									<span>{{ folder.name }}</span>
								</span>
                                <span class="folder__details">
									{{ folder.items }} Item
								</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="files">
                    <div v-for="(file, index) in filesOrdered" class="file" :style="thumbStyle" :data-index="index">
                        <a href="#"
                           :class="['file__body', { 'file--selected' : hasSelected(file) }]"
                           @click.prevent="select(file, $event)">
                            <div class="file__image">
                                <img :src="baseUrl+'/finder/images'+file.fullPath+'?w=200&h=150&fit=crop'"
                                     :alt="file.name">
                            </div>
                            <!--<div v-if="hasImage(file)" class="file__image">-->
                                <!--<img :src="baseUrl+'/finder/images'+file.fullPath+'?w=200&h=150&fit=crop'"-->
                                     <!--:alt="file.name">-->
                            <!--</div>-->
                            <!--<div v-else class="file__icon">-->
                                <!--<img :src="baseUrl+'/vendor/finder/img/icons/'+getFileType(file.extension)">-->
                            <!--</div>-->
                            <!--<div class="file__meta">-->
                                <!--<div class="file__name">-->
                                    <!--<img :src="baseUrl+'/vendor/finder/img/icons/'+getFileType(file.extension)">-->
                                    <!--<span>{{ file.name }}</span>-->
                                <!--</div>-->
                                <!--<span class="file__size">{{ file.size }}</span>-->
                            <!--</div>-->
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <context-menu>
            <li class="context-menu__item">
                <a href="#" class="context-menu__link" data-action="preview">
                    <svg class="svg-icon" viewBox="0 0 92 92" enable-background="new 0 0 92 92">
                        <path d="M91.3,43.8C90.6,42.8,74.4,19,46,19C17.6,19,1.4,42.8,0.7,43.8c-0.9,1.3-0.9,3.1,0,4.5
							C1.4,49.2,17.6,73,46,73c28.4,0,44.6-23.8,45.3-24.8C92.2,46.9,92.2,45.1,91.3,43.8z M46,65C26.7,65,13.5,51.4,9,46
							c4.5-5.5,17.6-19,37-19c19.3,0,32.5,13.6,37,19C78.4,51.5,65.3,65,46,65z M48.3,29.6c-4.4-0.6-8.7,0.5-12.3,3.2c0,0,0,0,0,0
							c-7.3,5.5-8.8,15.9-3.3,23.2c2.7,3.6,6.5,5.8,10.9,6.5c0.8,0.1,1.6,0.2,2.3,0.2c3.6,0,7-1.2,9.9-3.3c7.3-5.5,8.8-15.9,3.3-23.2
							C56.6,32.5,52.7,30.2,48.3,29.6z M52.3,54.5c-2.2,1.7-5,2.4-7.8,2c-2.8-0.4-5.3-1.9-7-4.1C34.1,47.7,35,41,39.7,37.5
							c2.2-1.7,5-2.4,7.8-2c2.8,0.4,5.3,1.9,7,4.1C57.9,44.3,57,51,52.3,54.5z M51.9,40c0.8,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8
							c-0.7,0.7-1.8,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.8-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.7-0.8,1.8-1.2,2.8-1.2
							C50.2,38.9,51.2,39.3,51.9,40z"/>
                    </svg>
                    Preview
                </a>
            </li>
            <!-- <li class="context-menu__divider"></li> -->
            <!-- <li class="context-menu__item">
                <a href="#" class="context-menu__link" data-action="move">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
                        <path fill="none" d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
                    </svg> Move to...
                </a>
              </li>
              <li class="context-menu__item">
                <a href="#" class="context-menu__link" data-action="rename">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                    </svg> Rename...
                </a>
              </li>
              <li class="context-menu__divider"></li> -->
            <!--<li class="context-menu__item">-->
            <!--<a href="#" class="context-menu__link" data-action="download">-->
            <!--<svg class="svg-icon" viewBox="0 0 92 92" enable-background="new 0 0 92 92">-->
            <!--<path d="M89,58.8V86c0,2.8-2.2,5-5,5H8c-2.8,0-5-2.2-5-5V58.8c0-2.8,2.2-5,5-5s5,2.2,5,5V81h66V58.8-->
            <!--c0-2.8,2.2-5,5-5S89,56,89,58.8z M42.4,65c0.9,1,2.2,1.5,3.6,1.5s2.6-0.5,3.6-1.5l19.9-20.4c1.9-2,1.9-5.1-0.1-7.1-->
            <!--c-2-1.9-5.1-1.9-7.1,0.1L51,49.3V6c0-2.8-2.2-5-5-5s-5,2.2-5,5v43.3L29.6,37.7c-1.9-2-5.1-2-7.1-0.1c-2,1.9-2,5.1-0.1,7.1L42.4,65z"-->
            <!--/>-->
            <!--</svg> Download-->
            <!--</a>-->
            <!--</li>-->
            <li class="context-menu__item">
                <a href="#" class="context-menu__link" data-action="delete">
                    <svg class="svg-icon" viewBox="0 0 92 92" enable-background="new 0 0 92 92">
                        <path d="M78.4,30.4l-3.1,57.8c-0.1,2.1-1.9,3.8-4,3.8H20.7c-2.1,0-3.9-1.7-4-3.8l-3.1-57.8
							c-0.1-2.2,1.6-4.1,3.8-4.2c2.2-0.1,4.1,1.6,4.2,3.8l2.9,54h43.1l2.9-54c0.1-2.2,2-3.9,4.2-3.8C76.8,26.3,78.5,28.2,78.4,30.4z
							 M89,17c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4s1.8-4,4-4h22V4c0-1.9,1.3-3,3.2-3h27.6C61.7,1,63,2.1,63,4v9h22C87.2,13,89,14.8,89,17z
							 M36,13h20V8H36V13z M37.7,78C37.7,78,37.7,78,37.7,78c2,0,3.5-1.9,3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5c-1.9,0-3.5,1.6-3.4,3.6
							l1,43.3C34.2,76.3,35.8,78,37.7,78z M54.2,78c1.9,0,3.5-1.6,3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6c-2,0-3.5,1.5-3.6,3.4l-1,43.2
							C50.6,76.3,52.2,78,54.2,78C54.1,78,54.1,78,54.2,78z"/>
                    </svg>
                    Delete
                </a>
            </li>
        </context-menu>
    </div>

</template>

<script>
    import {FILE_TYPES} from '../utils/filetypes';
    import ContextMenu from './ContextMenu.vue';
    import FileUpload from './FileUpload.vue';
    import SVGEl from '../utils/svgel';
    import Notification from '../utils/notification';

    export default {
        components: {
            ContextMenu,
            FileUpload
        },
        props: {
            accept: String,
            multiple: { type: Boolean, default: false }
        },
        data() {
            return {
                processing: false,
                folder: '/',
                folderName: 'Root',
                breadcrumbs: [],
                subfolders: {},
                files: [],
                selected: {id: null},
                selecteds: [],
                uploadedFiles: [], // my list for the v-for
                fileProgress: 0, // global progress
                allFilesUploaded: false, // is everything done?
                xhrHeaders: {},
                formData: {},
                amountOfThumb: 0,
                baseThumbSize: 215,
                pressingCtrlKey: false
            }
        },
        computed: {
            empty() {
                if (this.files.length == 0 && this.subfolders.length == 0) {
                    return true;
                }

                return false;
            },
            thumbStyle() {
                return {
                    'flexBasis': `${( 100 / this.amountOfThumb)}%`,
                    'maxWidth': `${( 100 / this.amountOfThumb)}%`
                };
            },
            progressEl() {
                return new SVGEl(this.$refs.progress);
            },
            baseUrl() {
                return window.Laravel.baseUrl;
            },
            filesOrdered() {
                return _.orderBy(this.files, [ o => o.modified.date ], ['desc']);
            }
        },
        mounted(){
            this
                .setupLayout()
                .fetchData()
                .events();

        },
        watch: {
            selecteds(value) {
                this.$emit('input', value);
            },
            selected(value) {
                this.$emit('input', value);
            }
        },
        methods: {
            setupLayout(){
                const fm = this.$refs['file-manager'],
                    setHeight = () => {
                        fm.style.minHeight = window.innerHeight + 'px';
                    },
                    setThumbSize = () => {
                        const continerWidth = fm.clientWidth,
                            amount = Math.floor(continerWidth / this.baseThumbSize);
                        this.amountOfThumb = amount;
                    };

                setHeight();
                setThumbSize();

                window.addEventListener('resize', function () {
                    setHeight();
                    setThumbSize();
                });

                return this;
            },
            fetchData(folder){
                let url = '/finder';
                if (folder) {
                    url += '/' + folder;
                }

                this.processing = true;

                axios.get(url).then(({data}) => {

                    this.folder = data.folder;
                    this.formData.folder = data.folder;
                    this.folderName = data.folderName;
                    this.breadcrumbs = data.breadcrumbs;
                    this.subfolders = data.subfolders;
                    this.files = data.files;

                    this.processing = false;
                }, (error) => {

                });

                return this;
            },
            select(item, e) {
                e.stopPropagation();

                if(this.multiple) {
                    this.multipleSelect(item);
                } else {
                    this.singleSelect(item);
                }

                //this.$broadcast('toggleMenuOff');
            },
            singleSelect(item) {
                if (item.type !== 'folder') {
                    if (item.id === this.selected.id) {
                        this.selected = {id: null};
                    } else {
                        this.selected = item;
                    }
                }
            },
            multipleSelect(item) {
                if (item.type !== 'folder') {
                    const index = this.selecteds.indexOf(item);
                    if (index !== -1) {
                        this.selecteds.splice(index, 1);
                    } else {
                        this.selecteds.push(item);
                    }
                }
            },
            openFolder(target){
                this.files = [];
                this.subfolders = {};
                this.fetchData(target);
            },
            getFileType(ext){
                return FILE_TYPES[ext];
            },
            hasImage(file) {
                return !_.isEmpty(file.mimeType) && file.mimeType.startsWith('image');
            },
            hasSelected(file) {
                return (this.selecteds.indexOf(file) !== -1) || (file.id === this.selected.id);
            },

            // upload events
            onUpload() {
                this.fileProgress = 0;
                this.allFilesUploaded = false;
            },
            onUploadProgress(percent) {
                this.progressEl.draw(percent / 100);
            },
            onUploadComplete(id, name, response) {
                this.files.unshift(response);

                const notification = new Notification({
                    wrapper: this.$refs.notification,
                    message: '<p>upload was successful!</p>',
                    ttl: 9000,
                    type: 'success'
                });

                notification.show();

                this.progressEl.draw(0);

                // everything is done!
                this.allFilesUploaded = true;
            },
            onUploadError(err) {
                const notification = new Notification({
                    wrapper: this.$refs.notification,
                    message: err,
                    ttl: 9000,
                    type: 'error'
                });

                notification.show();

                this.progressEl.draw(0);
            },
            events() {
                Event.listen('clear-finder-selected', () => {

                   if(this.multiple) {
                       this.selecteds = [];
                   } else {
                       this.selected = { id: null };
                   }
                });
            }
        },

//        events: {
//            onContextMenu(item){
//                var index = item.dataset.index,
//                    file = this.files[index];
//                this.selected = file.id;
//
//
//            },
//            download(item){
//                var index = item.dataset.index,
//                    file = this.files[index].fullPath,
//                    url = this.baseUrl + '/finder/file' + file;
//
//                window.location = url;
//            },
//            delete(item){
//                var index = item.dataset.index,
//                    file = this.files[index];
//
//                this.$http.delete(this.baseUrl + '/finder/file' + file.fullPath).then((response) => {
//                    this.files.$remove(file);
//
//                    var notification = new Notification({
//                        wrapper: this.$refs.notification,
//                        message: '<p>delete was successful!</p>',
//                        ttl: 9000,
//                        type: 'success'
//                    });
//
//                    notification.show();
//                });
//            }
//        }
    }
</script>