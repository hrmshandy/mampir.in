webpackJsonp([17],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    data: function data() {
        return {
            image: ''
        };
    },

    watch: {
        value: function value(_value) {
            if (_value) this.image = _value;
        }
    },
    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;

            if (!files.length) return;
            this.createImage(files[0]);

            this.$emit('input', files[0]);
        },
        createImage: function createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = function (e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        removeImage: function removeImage(e) {
            this.image = '';

            this.$emit('input', '');
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Rate.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Star_vue__ = __webpack_require__("./resources/assets/js/objects/Star.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__objects_Star_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Star: __WEBPACK_IMPORTED_MODULE_0__objects_Star_vue___default.a },

    data: function data() {
        return {
            currentValue: this.value,
            hoverIndex: -1
        };
    },


    props: {
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 5
        },
        readonly: {
            type: Boolean,
            default: false
        },
        allowHalf: {
            type: Boolean,
            default: true
        },
        showText: {
            type: Boolean,
            default: false
        },
        texts: {
            type: Array,
            default: function _default() {
                return ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'];
            }
        },
        textTemplate: {
            type: String,
            default: '{value}'
        }
    },
    computed: {
        text: function text() {
            var result = '';
            if (this.readonly) {
                result = this.textTemplate.replace(/\{\s*value\s*\}/, this.value);
            } else {
                result = this.texts[Math.ceil(this.currentValue) - 1];
            }
            return result;
        },
        valueDecimal: function valueDecimal() {
            return this.value * 100 - Math.floor(this.value) * 100;
        },
        classes: function classes() {
            var result = [];
            var i = 0;
            var threshold = this.currentValue;
            var half = this.currentValue;
            if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
                threshold--;
            }
            for (; i < threshold; i++) {
                result.push('is-rated');
            }

            for (; i < half; i++) {
                result.push(['c-rate__item--half', 'is-rated']);
            }

            return result;
        }
    },
    watch: {
        value: function value(_value) {
            this.currentValue = _value;
        }
    },
    methods: {
        selectValue: function selectValue(value) {
            if (this.disabled) {
                return;
            }
            this.$emit('input', value);
        },
        setCurrentValue: function setCurrentValue(value, event) {
            if (this.disabled) {
                return;
            }
            this.currentValue = value;
            this.hoverIndex = value;
        },
        resetCurrentValue: function resetCurrentValue() {
            if (this.disabled) {
                return;
            }
            this.currentValue = this.value;
            this.hoverIndex = -1;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Reviews.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_form_js__ = __webpack_require__("./resources/assets/js/utils/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rate_vue__ = __webpack_require__("./resources/assets/js/components/Rate.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Rate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Carousel_vue__ = __webpack_require__("./resources/assets/js/components/Carousel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CarouselItem_vue__ = __webpack_require__("./resources/assets/js/components/CarouselItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CarouselItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__CarouselItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ImageUpload_vue__ = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ImageUpload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ImageUpload_vue__);












/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Rate: __WEBPACK_IMPORTED_MODULE_3__Rate_vue___default.a, Carousel: __WEBPACK_IMPORTED_MODULE_4__Carousel_vue___default.a, CarouselItem: __WEBPACK_IMPORTED_MODULE_5__CarouselItem_vue___default.a, ImageUpload: __WEBPACK_IMPORTED_MODULE_6__ImageUpload_vue___default.a },
    model: {
        prop: 'reviews',
        event: 'reviews'
    },
    props: {
        venueId: { required: true },
        venueType: String,
        myReviewValue: { type: Object, required: false },
        reviews: { required: true }
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['authenticated', 'user']), {
        isInvalid: function isInvalid() {
            return !this.form.rating || !this.form.content || !this.form.imageCollection;
        }
    }),
    data: function data() {
        return {
            writingReview: false,
            reviewed: false,
            editingReview: false,
            activedUpload: false,
            loading: false,
            myReview: '',
            form: new __WEBPACK_IMPORTED_MODULE_2__utils_form_js__["a" /* default */]({
                user_id: this.$store.getters.user.id,
                venue_id: null,
                google_id: null,
                rating: 0,
                content: null,
                imageCollection: ''
            }),
            uploadedPhotos: [],
            carouselOptions: {
                cellAlign: 'left',
                contain: true
            }
        };
    },

    watch: {
        venueId: function venueId(value) {
            if (this.venueType === 'google') {
                this.form.google_id = value;
            } else {
                this.form.venue_id = value;
            }
        },
        newReview: function newReview() {},
        myReviewValue: function myReviewValue(value) {
            if (value) this.myReview = value;
        },
        myReview: function myReview(value) {
            if (value) {
                this.reviewed = true;

                this.form.user_id = this.$store.getters.user.id;
                this.form.rating = value.rating;
                this.form.content = value.content;
                if (value.photos.length > 0) this.form.imageCollection = '/storage' + value.photos[0].filename;
            }
        },

        'user.id': function userId(value) {
            this.form.user_id = value;
        }
    },
    created: function created() {},

    methods: {
        writeReview: function writeReview(e) {
            if (!this.authenticated) {
                Event.fire('show-login-modal', e);
            } else {
                this.writingReview = true;
            }
        },
        cancelWriteReview: function cancelWriteReview() {
            this.writingReview = false;
        },
        submitReview: function submitReview() {
            var _this = this;

            this.loading = true;
            this.form.submit('post', '/api/review').then(function (response) {
                if (response) {
                    _this.loading = false;
                    _this.myReview = response;
                    _this.writingReview = false;
                    _this.reviewed = true;
                    setTimeout(function () {
                        _this.$redrawVueMasonry();
                    });
                }
            }).catch(function (errors) {
                _this.loading = false;
                console.log(errors);
            });
        },
        formatedDate: function formatedDate(date) {
            return moment(date).fromNow();
        },
        activeUpload: function activeUpload(e) {
            this.activedUpload = true;
        },
        showSuccess: function showSuccess(file, response) {
            if (response) this.uploadedPhotos.push(response);
        },
        editReview: function editReview() {
            var _this2 = this;

            setTimeout(function () {
                _this2.$redrawVueMasonry();
            });
            this.editingReview = true;
        },
        updateReview: function updateReview() {
            var _this3 = this;

            this.loading = true;
            this.form.submit('put', '/api/review/' + this.myReview.id).then(function (response) {
                if (response) {
                    _this3.loading = false;
                    _this3.myReview = response;
                    _this3.editingReview = false;
                    _this3.reviewed = true;
                    setTimeout(function () {
                        _this3.$redrawVueMasonry();
                    });
                }
            }).catch(function (errors) {
                _this3.loading = false;
                console.log(errors);
            });
        },
        cancelUpdateReview: function cancelUpdateReview() {
            var _this4 = this;

            setTimeout(function () {
                _this4.$redrawVueMasonry();
            });
            this.editingReview = false;
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1462481a\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/objects/Star.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    staticClass: "o-star",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M510.9 196.6c-2.7-8.4-10-14.6-18.8-15.8l-148.7-21.6 -66.5-134.8c-3.9-7.9-12-13-20.9-13 -8.9 0-17 5-20.9 13L168.6 159.1l-148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428l133 69.9c3.4 1.8 7.1 2.7 10.8 2.7 0 0 0.1 0 0.1 0 12.8 0 23.2-10.4 23.2-23.3 0-1.8-0.2-3.5-0.6-5.2l-25.2-146.8L505 220.4C511.3 214.2 513.6 205 510.9 196.6z"
    }
  }), _c('path', {
    staticClass: "o-star__half",
    attrs: {
      "d": "M235.1 24.4l-66.5 134.8 -148.7 21.6c-8.8 1.3-16.1 7.4-18.8 15.8 -2.7 8.4-0.5 17.7 5.9 23.9L114.6 325.3 89.2 473.4c-1.5 8.7 2.1 17.6 9.3 22.8 7.2 5.2 16.7 5.9 24.5 1.8L256 428V11.4C247.1 11.4 239 16.4 235.1 24.4z"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1462481a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4174b5f0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-image-upload"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.image),
      expression: "!image"
    }],
    staticClass: "c-image-upload__input"
  }, [_c('div', {
    staticClass: "c-image-upload__icon"
  }, [_c('svg', {
    attrs: {
      "fill": "#000000",
      "height": "24",
      "viewBox": "0 0 24 24",
      "width": "24",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "12",
      "cy": "12",
      "r": "3.2"
    }
  }), _c('path', {
    attrs: {
      "d": "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    }
  }), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "c-image-upload__text"
  }, [_vm._v("Upload Image")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "c-image-upload__preview"
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.image),
      expression: "image"
    }],
    staticClass: "c-image-upload__remove-btn",
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Delete")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4174b5f0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60069d4f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Reviews.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "masonry",
      rawName: "v-masonry"
    }],
    staticClass: "o-grid",
    attrs: {
      "transition-duration": "0.3s",
      "item-selector": ".o-grid__col",
      "column-width": ".o-grid__sizer"
    }
  }, [_c('div', {
    staticClass: "o-grid__sizer u-3/12@lg u-6/12@sm"
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "masonry-tile",
      rawName: "v-masonry-tile"
    }, {
      name: "show",
      rawName: "v-show",
      value: ((_vm.authenticated && !_vm.reviewed) || _vm.editingReview),
      expression: "(authenticated && !reviewed) || editingReview"
    }],
    staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
  }, [_c('div', {
    class: [
      'c-card',
      'c-card--dialog',
      'c-card--dialog__placeholder',
      'c-card--dialog__review',
      'c-review-form',
      {
        'c-review-form--invalid': _vm.form.errors.any()
      }
    ]
  }, [_c('div', {
    staticClass: "o-user-block"
  }, [_c('div', {
    staticClass: "o-user-block__pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__info"
  }, [_c('span', {
    staticClass: "o-user-block__name"
  }, [_vm._v(_vm._s(_vm.user.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__body"
  }, [_c('rate', {
    attrs: {
      "show-text": ""
    },
    model: {
      value: (_vm.form.rating),
      callback: function($$v) {
        _vm.form.rating = $$v
      },
      expression: "form.rating"
    }
  }), _vm._v(" "), _vm._l((_vm.uploadedPhotos), function(photo) {
    return _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (photo.filename),
        expression: "photo.filename"
      }],
      attrs: {
        "type": "hidden"
      },
      domProps: {
        "value": (photo.filename)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          photo.filename = $event.target.value
        }
      }
    })
  }), _vm._v(" "), _c('image-upload', {
    model: {
      value: (_vm.form.imageCollection),
      callback: function($$v) {
        _vm.form.imageCollection = $$v
      },
      expression: "form.imageCollection"
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.content),
      expression: "form.content"
    }],
    staticClass: "o-textarea",
    attrs: {
      "rows": "4",
      "placeholder": "Ceritakan pengalamanmu ..."
    },
    domProps: {
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.content = $event.target.value
      }
    }
  })], 2), _vm._v(" "), (_vm.form.errors.any()) ? _c('span', {
    staticClass: "c-review-form__invalid-message"
  }, [_vm._v("Semua field wajib di isi.")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__submit c-review-form__control"
  }, [(_vm.editingReview) ? [_c('button', {
    staticClass: "o-button o-button--primary write-a-review__button",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.updateReview
    }
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Update Review")])]), _vm._v(" "), _c('button', {
    staticClass: "o-button o-button--default write-a-review__button",
    on: {
      "click": _vm.cancelUpdateReview
    }
  }, [_vm._v("\n                            Cancel\n                        ")])] : [_c('button', {
    staticClass: "o-button o-button--primary write-a-review__button",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.submitReview
    }
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Kirim Review")])])]], 2)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "masonry-tile",
      rawName: "v-masonry-tile"
    }, {
      name: "show",
      rawName: "v-show",
      value: ((!_vm.authenticated && !_vm.reviewed)),
      expression: "(!authenticated && !reviewed)"
    }],
    staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
  }, [_c('div', {
    staticClass: "c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__dummy"
  }, [_c('div', {
    staticClass: "o-user-block"
  }, [_c('div', {
    staticClass: "o-user-block__pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__info"
  }, [_c('span', {
    staticClass: "o-user-block__name"
  }, [_vm._v(_vm._s(_vm.user.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__body"
  }, [_c('h2', {
    staticClass: "c-card--dialog__dummy__title"
  }, [_vm._v("\n                        Tulis Review Kamu Sekarang\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "o-button o-button--primary",
    on: {
      "click": _vm.writeReview
    }
  }, [_vm._v("\n                        Tulis Review\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__footer"
  })])]), _vm._v(" "), (_vm.reviewed && !_vm.editingReview) ? _c('div', {
    directives: [{
      name: "masonry-tile",
      rawName: "v-masonry-tile"
    }],
    staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
  }, [_c('div', {
    staticClass: "c-card c-card--dialog c-card--dialog__placeholder"
  }, [_c('div', {
    staticClass: "o-user-block"
  }, [_c('div', {
    staticClass: "o-user-block__pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.myReview.user.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__info"
  }, [_c('span', {
    staticClass: "o-user-block__name"
  }, [_vm._v(_vm._s(_vm.myReview.user.name))]), _vm._v(" "), _c('span', {
    staticClass: "o-user-block__status"
  }, [_vm._v(_vm._s(_vm.formatedDate(_vm.myReview.created_at)))])])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__body"
  }, [_c('rate', {
    attrs: {
      "readonly": ""
    },
    model: {
      value: (_vm.myReview.rating),
      callback: function($$v) {
        _vm.myReview.rating = $$v
      },
      expression: "myReview.rating"
    }
  }), _vm._v(" "), (_vm.myReview.photos.length > 0) ? _c('carousel', {
    staticClass: "o-photoreview",
    attrs: {
      "options": _vm.carouselOptions,
      "timeout": 1000
    }
  }, [_vm._l((_vm.myReview.photos), function(photo) {
    return [_c('carousel-item', {
      staticClass: "o-photoreview__item"
    }, [_c('div', {
      staticClass: "o-photoreview__image",
      style: ({
        backgroundImage: 'url(/storage' + photo.filename + ')'
      })
    })])]
  })], 2) : _vm._e(), _vm._v(" "), _c('p', [_vm._v("\n                        " + _vm._s(_vm.myReview.content) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "u-text-right"
  }, [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.editReview($event)
      }
    }
  }, [_vm._v("Edit")])])], 1)])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.reviews), function(review) {
    return _c('div', {
      directives: [{
        name: "masonry-tile",
        rawName: "v-masonry-tile"
      }],
      staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
    }, [_c('div', {
      staticClass: "c-card c-card--dialog c-card--dialog__placeholder"
    }, [_c('div', {
      staticClass: "o-user-block"
    }, [_c('div', {
      staticClass: "o-user-block__pic"
    }, [_c('img', {
      attrs: {
        "src": review.user.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "o-user-block__info"
    }, [_c('span', {
      staticClass: "o-user-block__name"
    }, [_vm._v(_vm._s(review.user.name))]), _vm._v(" "), _c('span', {
      staticClass: "o-user-block__status"
    }, [_vm._v(_vm._s(_vm.formatedDate(review.created_at)))])])]), _vm._v(" "), _c('div', {
      staticClass: "c-card__body"
    }, [_c('rate', {
      attrs: {
        "readonly": ""
      },
      model: {
        value: (review.rating),
        callback: function($$v) {
          review.rating = $$v
        },
        expression: "review.rating"
      }
    }), _vm._v(" "), (review.photos.length > 0) ? _c('carousel', {
      staticClass: "o-photoreview",
      attrs: {
        "options": _vm.carouselOptions,
        "timeout": 1000
      }
    }, [_vm._l((review.photos), function(photo) {
      return [_c('carousel-item', {
        staticClass: "o-photoreview__item"
      }, [_c('div', {
        staticClass: "o-photoreview__image",
        style: ({
          backgroundImage: 'url(/storage' + photo + ')'
        })
      })])]
    })], 2) : _vm._e(), _vm._v(" "), _c('p', [_vm._v("\n                        " + _vm._s(review.content) + "\n                    ")])], 1)])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60069d4f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-acc02e48\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Rate.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-rate"
  }, [_vm._l((_vm.max), function(item) {
    return _c('span', {
      class: ['c-rate__item', _vm.classes[item - 1], {
        'is-hovered': _vm.hoverIndex === item
      }],
      style: ({
        cursor: _vm.readonly ? 'auto' : 'pointer'
      }),
      on: {
        "mousemove": function($event) {
          _vm.setCurrentValue(item, $event)
        },
        "mouseleave": _vm.resetCurrentValue,
        "click": function($event) {
          _vm.selectValue(item)
        }
      }
    }, [_c('star')], 1)
  }), _vm._v(" "), (_vm.showText) ? _c('span', {
    staticClass: "c-rate__text"
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-acc02e48", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4174b5f0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/ImageUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4174b5f0", Component.options)
  } else {
    hotAPI.reload("data-v-4174b5f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Rate.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Rate.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-acc02e48\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Rate.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Rate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acc02e48", Component.options)
  } else {
    hotAPI.reload("data-v-acc02e48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Reviews.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Reviews.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60069d4f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Reviews.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Reviews.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Reviews.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60069d4f", Component.options)
  } else {
    hotAPI.reload("data-v-60069d4f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/objects/Star.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  null,
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1462481a\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/objects/Star.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/objects/Star.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Star.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1462481a", Component.options)
  } else {
    hotAPI.reload("data-v-1462481a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy9SYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vUmV2aWV3cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlP2E3MWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlVXBsb2FkLnZ1ZT8zZWM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXZpZXdzLnZ1ZT8zZWQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZT9iZDgxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXZpZXdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBaUJBO1lBRUE7MEJBQ0E7O21CQUdBO0FBRkE7QUFHQTs7O3NDQUVBO2dCQUNBLHFCQUNBO0FBRUE7QUFMQTs7K0NBT0E7eURBRUE7O3VCQUNBLFFBQ0E7bUNBR0E7O3NDQUNBO0FBQ0E7Z0RBQ0E7NEJBQ0E7NkJBQ0E7cUJBRUE7O3lDQUNBO29DQUNBO0FBQ0E7aUNBQ0E7QUFDQTs7NkNBQ0E7eUJBRUE7O2dDQUNBO0FBRUE7QUExQkE7QUFiQSxHOzs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7a0JBR0E7OzBCQUNBOzsrQkFFQTt5QkFFQTtBQUhBO0FBS0E7Ozs7O2tCQUdBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUVBO0FBSEE7O2tCQUtBO3FCQUVBO0FBSEE7O2tCQUtBO3lDQUNBO29FQUNBO0FBRUE7QUFMQTs7a0JBT0E7cUJBR0E7QUFKQTtBQTNCQTs7OEJBaUNBO3lCQUNBOytCQUNBOzJFQUNBO21CQUNBO21FQUNBO0FBQ0E7bUJBQ0E7QUFDQTs4Q0FDQTsrREFDQTtBQUNBO29DQUNBO3lCQUNBO29CQUNBO2lDQUNBOzRCQUNBO3VGQUNBO0FBQ0E7QUFDQTt1Q0FDQTs0QkFDQTtBQUVBOztrQ0FDQTttREFDQTtBQUVBOzttQkFDQTtBQUVBO0FBL0JBOztzQ0FpQ0E7Z0NBQ0E7QUFFQTtBQUpBOztpREFNQTsrQkFDQTtBQUNBO0FBQ0E7Z0NBQ0E7QUFDQTtnRUFDQTsrQkFDQTtBQUNBO0FBQ0E7Z0NBQ0E7OEJBQ0E7QUFDQTt3REFDQTsrQkFDQTtBQUNBO0FBQ0E7cUNBQ0E7K0JBQ0E7QUFFQTtBQXJCQTtBQS9FQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMySEE7O0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7OytEQUVBO3FOQUVBOztjQUVBO2VBRUE7QUFIQTs7NkJBS0E7bUJBQ0E7aURBQ0E7NkJBRUE7QUFMQTtBQU1BLHlKQUNBLENBQ0EsaUJBRUE7d0NBQ0E7eUVBQ0E7QUFFQTs7MEJBRUE7OzJCQUVBO3NCQUNBOzJCQUNBOzJCQUNBO3FCQUNBO3NCQUNBOztrREFFQTswQkFDQTsyQkFDQTt3QkFDQTt5QkFDQTtpQ0FFQTtBQVBBOzRCQVFBOzsyQkFFQTt5QkFHQTtBQUpBO0FBaEJBO0FBcUJBOzs7eUNBRUE7NkNBQ0E7c0NBQ0E7bUJBQ0E7cUNBQ0E7QUFDQTtBQUNBO3dDQUVBLENBQ0E7cURBQ0E7Z0JBQ0EsdUJBQ0E7QUFDQTsyQ0FDQTt1QkFDQTtnQ0FFQTs7NkRBQ0E7eUNBQ0E7MENBQ0E7MENBQ0EsNERBQ0E7QUFFQTtBQUNBOzswQ0FDQTtnQ0FDQTtBQUVBO0FBOUJBO2dDQWdDQSxDQUNBOzs7NkNBRUE7cUNBQ0E7K0NBQ0E7bUJBQ0E7cUNBQ0E7QUFDQTtBQUNBO3dEQUNBO2lDQUNBO0FBQ0E7O0FBQ0E7OzJCQUNBOzZFQUNBOzhCQUNBO29DQUNBO3FDQUNBOzBDQUNBO3FDQUNBOzJDQUNBOzhCQUNBO0FBQ0E7QUFDQTt1Q0FDQTtnQ0FDQTs0QkFDQTtBQUNBO0FBQ0E7a0RBQ0E7Z0NBQ0E7QUFDQTsrQ0FDQTtpQ0FDQTtBQUNBOzBEQUNBO2dCQUNBLG1DQUNBO0FBQ0E7O0FBQ0E7O21DQUNBO3VCQUNBO0FBQ0E7aUNBQ0E7QUFDQTs7QUFDQTs7MkJBQ0E7Z0dBQ0E7OEJBQ0E7cUNBQ0E7c0NBQ0E7MkNBQ0E7c0NBQ0E7MkNBQ0E7K0JBQ0E7QUFDQTtBQUNBO3VDQUNBO2lDQUNBOzRCQUNBO0FBQ0E7QUFDQTs7QUFDQTs7bUNBQ0E7dUJBQ0E7QUFDQTtpQ0FDQTtBQUVBO0FBbkVBO0FBL0VBLEc7Ozs7Ozs7QUN4SkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeEJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2RUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzFTQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBLCtZQUF5UDtBQUN6UDtBQUNBLGtQQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0Esd1lBQXlQO0FBQ3pQO0FBQ0EsMk9BQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSwyWUFBeVA7QUFDelA7QUFDQSw4T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtaW1hZ2UtdXBsb2FkXCI+XG4gICAgICAgIDxkaXYgdi1zaG93PVwiIWltYWdlXCIgY2xhc3M9XCJjLWltYWdlLXVwbG9hZF9faW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWltYWdlLXVwbG9hZF9faWNvblwiPlxuICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMy4yXCIvPjxwYXRoIGQ9XCJNOSAyTDcuMTcgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJoLTMuMTdMMTUgMkg5em0zIDE1Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjLWltYWdlLXVwbG9hZF9fdGV4dFwiPlVwbG9hZCBJbWFnZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjLWltYWdlLXVwbG9hZF9fcHJldmlld1wiPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VcIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdi1zaG93PVwiaW1hZ2VcIiBjbGFzcz1cImMtaW1hZ2UtdXBsb2FkX19yZW1vdmUtYnRuXCIgQGNsaWNrPVwicmVtb3ZlSW1hZ2VcIj5EZWxldGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWyd2YWx1ZSddLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGltYWdlOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZih2YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXMgfHwgZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgLy90aGlzLiRlbWl0KCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGZpbGVzWzBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVJbWFnZShmaWxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZtID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5pbWFnZSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUltYWdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEltYWdlVXBsb2FkLnZ1ZT8xYTg4NjU0OSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYy1yYXRlXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gbWF4XCJcbiAgICAgICAgICAgIDpjbGFzcz1cIlsnYy1yYXRlX19pdGVtJywgY2xhc3Nlc1tpdGVtLTFdLCB7ICdpcy1ob3ZlcmVkJzogaG92ZXJJbmRleCA9PT0gaXRlbSB9XVwiXG4gICAgICAgICAgICBAbW91c2Vtb3ZlPVwic2V0Q3VycmVudFZhbHVlKGl0ZW0sICRldmVudClcIlxuICAgICAgICAgICAgQG1vdXNlbGVhdmU9XCJyZXNldEN1cnJlbnRWYWx1ZVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RWYWx1ZShpdGVtKVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IGN1cnNvcjogcmVhZG9ubHkgPyAnYXV0bycgOiAncG9pbnRlcicgfVwiPlxuICAgICAgICAgICAgPHN0YXI+PC9zdGFyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJzaG93VGV4dFwiIGNsYXNzPVwiYy1yYXRlX190ZXh0XCI+e3sgdGV4dCB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFN0YXIgZnJvbSAnLi4vb2JqZWN0cy9TdGFyLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czogeyBTdGFyIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICByZXR1cm4gIHtcbiAgICAgICAgICAgICAgY3VycmVudFZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICBob3ZlckluZGV4OiAtMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsb3dIYWxmOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1RleHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWydUZXJyaWJsZScsICdQb29yJywgJ0F2ZXJhZ2UnLCAnVmVyeSBHb29kJywgJ0V4Y2VsbGVudCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0VGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ3t2YWx1ZX0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZXh0KCkge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRleHRUZW1wbGF0ZS5yZXBsYWNlKC9cXHtcXHMqdmFsdWVcXHMqXFx9LywgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50ZXh0c1tNYXRoLmNlaWwodGhpcy5jdXJyZW50VmFsdWUpIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWVEZWNpbWFsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICogMTAwIC0gTWF0aC5mbG9vcih0aGlzLnZhbHVlKSAqIDEwMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHRocmVzaG9sZCA9IHRoaXMuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBoYWxmID0gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dIYWxmICYmIHRoaXMuY3VycmVudFZhbHVlICE9PSBNYXRoLmZsb29yKHRoaXMuY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCB0aHJlc2hvbGQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGhhbGY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbJ2MtcmF0ZV9faXRlbS0taGFsZicsICdpcy1yYXRlZCddKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKHZhbHVlLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVySW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVySW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUmF0ZS52dWU/M2Q4NzY2NTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiB2LW1hc29ucnlcbiAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uPVwiMC4zc1wiXG4gICAgICAgICAgICAgaXRlbS1zZWxlY3Rvcj1cIi5vLWdyaWRfX2NvbFwiXG4gICAgICAgICAgICAgY29sdW1uLXdpZHRoPVwiLm8tZ3JpZF9fc2l6ZXJcIlxuICAgICAgICAgICAgIGNsYXNzPVwiby1ncmlkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX3NpemVyIHUtMy8xMkBsZyB1LTYvMTJAc21cIj48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiB2LW1hc29ucnktdGlsZSBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIiB2LXNob3c9XCIoYXV0aGVudGljYXRlZCAmJiAhcmV2aWV3ZWQpIHx8IGVkaXRpbmdSZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIltcbiAgICAgICAgICAgICAgICAgICAgJ2MtY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICdjLWNhcmQtLWRpYWxvZycsXG4gICAgICAgICAgICAgICAgICAgICdjLWNhcmQtLWRpYWxvZ19fcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAnYy1jYXJkLS1kaWFsb2dfX3JldmlldycsXG4gICAgICAgICAgICAgICAgICAgICdjLXJldmlldy1mb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgeydjLXJldmlldy1mb3JtLS1pbnZhbGlkJzogZm9ybS5lcnJvcnMuYW55KCl9XG4gICAgICAgICAgICAgICAgXVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX3BpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIuYXZhdGFyXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IHVzZXIubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhdGUgdi1tb2RlbD1cImZvcm0ucmF0aW5nXCIgc2hvdy10ZXh0PjwvcmF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWZvcj1cInBob3RvIGluIHVwbG9hZGVkUGhvdG9zXCIgIHR5cGU9XCJoaWRkZW5cIiB2LW1vZGVsPVwicGhvdG8uZmlsZW5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1hZ2UtdXBsb2FkIHYtbW9kZWw9XCJmb3JtLmltYWdlQ29sbGVjdGlvblwiPjwvaW1hZ2UtdXBsb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJmb3JtLmNvbnRlbnRcIiByb3dzPVwiNFwiIGNsYXNzPVwiby10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiQ2VyaXRha2FuIHBlbmdhbGFtYW5tdSAuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImZvcm0uZXJyb3JzLmFueSgpXCIgY2xhc3M9XCJjLXJldmlldy1mb3JtX19pbnZhbGlkLW1lc3NhZ2VcIj5TZW11YSBmaWVsZCB3YWppYiBkaSBpc2kuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19zdWJtaXQgYy1yZXZpZXctZm9ybV9fY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJlZGl0aW5nUmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IHdyaXRlLWEtcmV2aWV3X19idXR0b25cIiBAY2xpY2s9XCJ1cGRhdGVSZXZpZXdcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlVwZGF0ZSBSZXZpZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1kZWZhdWx0IHdyaXRlLWEtcmV2aWV3X19idXR0b25cIiBAY2xpY2s9XCJjYW5jZWxVcGRhdGVSZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgd3JpdGUtYS1yZXZpZXdfX2J1dHRvblwiIEBjbGljaz1cInN1Ym1pdFJldmlld1wiIDpkaXNhYmxlZD1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+S2lyaW0gUmV2aWV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiB2LW1hc29ucnktdGlsZSBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIiB2LXNob3c9XCIoIWF1dGhlbnRpY2F0ZWQgJiYgIXJldmlld2VkKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyIGMtY2FyZC0tZGlhbG9nX19kdW1teVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tICAgPGRpdiBjbGFzcz1cImMtY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxyYXRpbmcgdi1tb2RlbD1cImZvcm0ucmF0aW5nXCIgOnZlbnVlLWlkPVwidmVudWVJZFwiIG1ldGhvZD1cInBvc3RcIj48L3JhdGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX3BpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIuYXZhdGFyXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IHVzZXIubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYy1jYXJkLS1kaWFsb2dfX2R1bW15X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1bGlzIFJldmlldyBLYW11IFNla2FyYW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5XCIgQGNsaWNrPVwid3JpdGVSZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdWxpcyBSZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1tYXNvbnJ5LXRpbGUgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTMvMTJAbGcgdS02LzEyQHNtXCIgdi1pZj1cInJldmlld2VkICYmICFlZGl0aW5nUmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZCBjLWNhcmQtLWRpYWxvZyBjLWNhcmQtLWRpYWxvZ19fcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19fcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwibXlSZXZpZXcudXNlci5hdmF0YXJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19uYW1lXCI+e3sgbXlSZXZpZXcudXNlci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19zdGF0dXNcIj57eyBmb3JtYXRlZERhdGUobXlSZXZpZXcuY3JlYXRlZF9hdCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyYXRlIHYtbW9kZWw9XCJteVJldmlldy5yYXRpbmdcIiByZWFkb25seT48L3JhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2Fyb3VzZWwgdi1pZj1cIm15UmV2aWV3LnBob3Rvcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJvLXBob3RvcmV2aWV3XCIgOm9wdGlvbnM9XCJjYXJvdXNlbE9wdGlvbnNcIiA6dGltZW91dD1cIjEwMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwaG90byBpbiBteVJldmlldy5waG90b3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhcm91c2VsLWl0ZW0gY2xhc3M9XCJvLXBob3RvcmV2aWV3X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1waG90b3Jldmlld19faW1hZ2VcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgvc3RvcmFnZScrcGhvdG8uZmlsZW5hbWUrJyknIH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbXlSZXZpZXcuY29udGVudCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInUtdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJlZGl0UmV2aWV3XCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtbWFzb25yeS10aWxlIHYtZm9yPVwicmV2aWV3IGluIHJldmlld3NcIiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyZXZpZXcudXNlci5hdmF0YXJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19uYW1lXCI+e3sgcmV2aWV3LnVzZXIubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fc3RhdHVzXCI+e3sgZm9ybWF0ZWREYXRlKHJldmlldy5jcmVhdGVkX2F0KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhdGUgdi1tb2RlbD1cInJldmlldy5yYXRpbmdcIiByZWFkb25seT48L3JhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2Fyb3VzZWwgdi1pZj1cInJldmlldy5waG90b3MubGVuZ3RoID4gMFwiIGNsYXNzPVwiby1waG90b3Jldmlld1wiIDpvcHRpb25zPVwiY2Fyb3VzZWxPcHRpb25zXCIgOnRpbWVvdXQ9XCIxMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwicGhvdG8gaW4gcmV2aWV3LnBob3Rvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2Fyb3VzZWwtaXRlbSBjbGFzcz1cIm8tcGhvdG9yZXZpZXdfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXBob3RvcmV2aWV3X19pbWFnZVwiIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiAndXJsKC9zdG9yYWdlJytwaG90bysnKScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Nhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByZXZpZXcuY29udGVudCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vdXRpbHMvZm9ybS5qcydcbmltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZS52dWUnXG4vL2ltcG9ydCBEcm9wem9uZSBmcm9tICd2dWUyLWRyb3B6b25lJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwudnVlJ1xuaW1wb3J0IENhcm91c2VsSXRlbSBmcm9tICcuL0Nhcm91c2VsSXRlbS52dWUnXG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFJhdGUsIENhcm91c2VsLCBDYXJvdXNlbEl0ZW0sIEltYWdlVXBsb2FkIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgICAgcHJvcDogJ3Jldmlld3MnLFxuICAgICAgICBldmVudDogJ3Jldmlld3MnXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICB2ZW51ZUlkOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIHZlbnVlVHlwZTogU3RyaW5nLFxuICAgICAgICBteVJldmlld1ZhbHVlOiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgIHJldmlld3M6IHsgcmVxdWlyZWQ6IHRydWUgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAgICAgICAnYXV0aGVudGljYXRlZCcsXG4gICAgICAgICAgICAndXNlcidcbiAgICAgICAgXSksXG4gICAgICAgIGlzSW52YWxpZCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5mb3JtLnJhdGluZyB8fCAhdGhpcy5mb3JtLmNvbnRlbnQgfHwgIXRoaXMuZm9ybS5pbWFnZUNvbGxlY3Rpb247XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4vLyAgICAgICAgY29uc3QgdXNlclxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd3JpdGluZ1JldmlldzogZmFsc2UsXG4gICAgICAgICAgICByZXZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBlZGl0aW5nUmV2aWV3OiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZWRVcGxvYWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBteVJldmlldzogJycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy4kc3RvcmUuZ2V0dGVycy51c2VyLmlkLFxuICAgICAgICAgICAgICAgIHZlbnVlX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIGdvb2dsZV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICByYXRpbmc6IDAsXG4gICAgICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICBpbWFnZUNvbGxlY3Rpb246ICcnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHVwbG9hZGVkUGhvdG9zOltdLFxuICAgICAgICAgICAgY2Fyb3VzZWxPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgY29udGFpbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2ZW51ZUlkKHZhbHVlKSB7XG4gICAgICAgICAgICBpZih0aGlzLnZlbnVlVHlwZSA9PT0gJ2dvb2dsZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZ29vZ2xlX2lkID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS52ZW51ZV9pZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBuZXdSZXZpZXcoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbXlSZXZpZXdWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgIGlmKHZhbHVlKVxuICAgICAgICAgICAgICB0aGlzLm15UmV2aWV3ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG15UmV2aWV3KHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmV2aWV3ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnVzZXJfaWQgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLnVzZXIuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJhdGluZyA9IHZhbHVlLnJhdGluZztcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udGVudCA9IHZhbHVlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYodmFsdWUucGhvdG9zLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pbWFnZUNvbGxlY3Rpb24gPSAnL3N0b3JhZ2UnK3ZhbHVlLnBob3Rvc1swXS5maWxlbmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICAndXNlci5pZCc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0udXNlcl9pZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHdyaXRlUmV2aWV3KGUpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICBFdmVudC5maXJlKCdzaG93LWxvZ2luLW1vZGFsJywgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGluZ1JldmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbFdyaXRlUmV2aWV3KCkge1xuICAgICAgICAgICAgdGhpcy53cml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdFJldmlldygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwb3N0JywgJy9hcGkvcmV2aWV3JykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmV2aWV3ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmlld2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWRyYXdWdWVNYXNvbnJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdGVkRGF0ZShkYXRlKXtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZnJvbU5vdygpO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVVcGxvYWQoZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVkVXBsb2FkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1N1Y2Nlc3MoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkZWRQaG90b3MucHVzaChyZXNwb25zZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRSZXZpZXcoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWRyYXdWdWVNYXNvbnJ5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZWRpdGluZ1JldmlldyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVJldmlldygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwdXQnLCAnL2FwaS9yZXZpZXcvJyt0aGlzLm15UmV2aWV3LmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZXZpZXcgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2aWV3ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZHJhd1Z1ZU1hc29ucnkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsVXBkYXRlUmV2aWV3KCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVkcmF3VnVlTWFzb25yeSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVkaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSZXZpZXdzLnZ1ZT81ZGQ0YTZhZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3ZnJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc3RhclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1MTIgNTEyXCJcbiAgICB9XG4gIH0sIFtfYygncGF0aCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkXCI6IFwiTTUxMC45IDE5Ni42Yy0yLjctOC40LTEwLTE0LjYtMTguOC0xNS44bC0xNDguNy0yMS42IC02Ni41LTEzNC44Yy0zLjktNy45LTEyLTEzLTIwLjktMTMgLTguOSAwLTE3IDUtMjAuOSAxM0wxNjguNiAxNTkuMWwtMTQ4LjcgMjEuNmMtOC44IDEuMy0xNi4xIDcuNC0xOC44IDE1LjggLTIuNyA4LjQtMC41IDE3LjcgNS45IDIzLjlMMTE0LjYgMzI1LjMgODkuMiA0NzMuNGMtMS41IDguNyAyLjEgMTcuNiA5LjMgMjIuOCA3LjIgNS4yIDE2LjcgNS45IDI0LjUgMS44TDI1NiA0MjhsMTMzIDY5LjljMy40IDEuOCA3LjEgMi43IDEwLjggMi43IDAgMCAwLjEgMCAwLjEgMCAxMi44IDAgMjMuMi0xMC40IDIzLjItMjMuMyAwLTEuOC0wLjItMy41LTAuNi01LjJsLTI1LjItMTQ2LjhMNTA1IDIyMC40QzUxMS4zIDIxNC4yIDUxMy42IDIwNSA1MTAuOSAxOTYuNnpcIlxuICAgIH1cbiAgfSksIF9jKCdwYXRoJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc3Rhcl9faGFsZlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMjM1LjEgMjQuNGwtNjYuNSAxMzQuOCAtMTQ4LjcgMjEuNmMtOC44IDEuMy0xNi4xIDcuNC0xOC44IDE1LjggLTIuNyA4LjQtMC41IDE3LjcgNS45IDIzLjlMMTE0LjYgMzI1LjMgODkuMiA0NzMuNGMtMS41IDguNyAyLjEgMTcuNiA5LjMgMjIuOCA3LjIgNS4yIDE2LjcgNS45IDI0LjUgMS44TDI1NiA0MjhWMTEuNEMyNDcuMSAxMS40IDIzOSAxNi40IDIzNS4xIDI0LjR6XCJcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTQ2MjQ4MWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE0NjI0ODFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTE0NjI0ODFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMTgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWltYWdlLXVwbG9hZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0uaW1hZ2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhaW1hZ2VcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW1hZ2UtdXBsb2FkX19pbnB1dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtaW1hZ2UtdXBsb2FkX19pY29uXCJcbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBcIiMwMDAwMDBcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjRcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjI0XCIsXG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIH1cbiAgfSwgW19jKCdjaXJjbGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY3hcIjogXCIxMlwiLFxuICAgICAgXCJjeVwiOiBcIjEyXCIsXG4gICAgICBcInJcIjogXCIzLjJcIlxuICAgIH1cbiAgfSksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNOSAyTDcuMTcgNEg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJoLTMuMTdMMTUgMkg5em0zIDE1Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXpcIlxuICAgIH1cbiAgfSksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMCAwaDI0djI0SDB6XCIsXG4gICAgICBcImZpbGxcIjogXCJub25lXCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbWFnZS11cGxvYWRfX3RleHRcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIEltYWdlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWltYWdlLXVwbG9hZF9fcHJldmlld1wiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2UsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5pbWFnZSksXG4gICAgICBleHByZXNzaW9uOiBcImltYWdlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjLWltYWdlLXVwbG9hZF9fcmVtb3ZlLWJ0blwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5yZW1vdmVJbWFnZVxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZVwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDE3NGI1ZjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQxNzRiNWYwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00MTc0YjVmMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibWFzb25yeVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1hc29ucnlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb24tZHVyYXRpb25cIjogXCIwLjNzXCIsXG4gICAgICBcIml0ZW0tc2VsZWN0b3JcIjogXCIuby1ncmlkX19jb2xcIixcbiAgICAgIFwiY29sdW1uLXdpZHRoXCI6IFwiLm8tZ3JpZF9fc2l6ZXJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19zaXplciB1LTMvMTJAbGcgdS02LzEyQHNtXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibWFzb25yeS10aWxlXCIsXG4gICAgICByYXdOYW1lOiBcInYtbWFzb25yeS10aWxlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKChfdm0uYXV0aGVudGljYXRlZCAmJiAhX3ZtLnJldmlld2VkKSB8fCBfdm0uZWRpdGluZ1JldmlldyksXG4gICAgICBleHByZXNzaW9uOiBcIihhdXRoZW50aWNhdGVkICYmICFyZXZpZXdlZCkgfHwgZWRpdGluZ1Jldmlld1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbXG4gICAgICAnYy1jYXJkJyxcbiAgICAgICdjLWNhcmQtLWRpYWxvZycsXG4gICAgICAnYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyJyxcbiAgICAgICdjLWNhcmQtLWRpYWxvZ19fcmV2aWV3JyxcbiAgICAgICdjLXJldmlldy1mb3JtJyxcbiAgICAgIHtcbiAgICAgICAgJ2MtcmV2aWV3LWZvcm0tLWludmFsaWQnOiBfdm0uZm9ybS5lcnJvcnMuYW55KClcbiAgICAgIH1cbiAgICBdXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fcGljXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS51c2VyLmF2YXRhcixcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19pbmZvXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fbmFtZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2JvZHlcIlxuICB9LCBbX2MoJ3JhdGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2hvdy10ZXh0XCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnJhdGluZyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5mb3JtLnJhdGluZyA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yYXRpbmdcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnVwbG9hZGVkUGhvdG9zKSwgZnVuY3Rpb24ocGhvdG8pIHtcbiAgICByZXR1cm4gX2MoJ2lucHV0Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChwaG90by5maWxlbmFtZSksXG4gICAgICAgIGV4cHJlc3Npb246IFwicGhvdG8uZmlsZW5hbWVcIlxuICAgICAgfV0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJoaWRkZW5cIlxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogKHBob3RvLmZpbGVuYW1lKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgIHBob3RvLmZpbGVuYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbWFnZS11cGxvYWQnLCB7XG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uaW1hZ2VDb2xsZWN0aW9uKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmZvcm0uaW1hZ2VDb2xsZWN0aW9uID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmltYWdlQ29sbGVjdGlvblwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uY29udGVudCksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uY29udGVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby10ZXh0YXJlYVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd3NcIjogXCI0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ2VyaXRha2FuIHBlbmdhbGFtYW5tdSAuLi5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmNvbnRlbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5jb250ZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5hbnkoKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJldmlldy1mb3JtX19pbnZhbGlkLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KFwiU2VtdWEgZmllbGQgd2FqaWIgZGkgaXNpLlwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19zdWJtaXQgYy1yZXZpZXctZm9ybV9fY29udHJvbFwiXG4gIH0sIFsoX3ZtLmVkaXRpbmdSZXZpZXcpID8gW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgd3JpdGUtYS1yZXZpZXdfX2J1dHRvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5sb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXBkYXRlUmV2aWV3XG4gICAgfVxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdzcGFuJywgW192bS5fdihcIkxvYWRpbmcuLi5cIildKSA6IF9jKCdzcGFuJywgW192bS5fdihcIlVwZGF0ZSBSZXZpZXdcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1kZWZhdWx0IHdyaXRlLWEtcmV2aWV3X19idXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2FuY2VsVXBkYXRlUmV2aWV3XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSA6IFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IHdyaXRlLWEtcmV2aWV3X19idXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN1Ym1pdFJldmlld1xuICAgIH1cbiAgfSwgWyhfdm0ubG9hZGluZykgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSkgOiBfYygnc3BhbicsIFtfdm0uX3YoXCJLaXJpbSBSZXZpZXdcIildKV0pXV0sIDIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5LXRpbGVcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5LXRpbGVcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoKCFfdm0uYXV0aGVudGljYXRlZCAmJiAhX3ZtLnJldmlld2VkKSksXG4gICAgICBleHByZXNzaW9uOiBcIighYXV0aGVudGljYXRlZCAmJiAhcmV2aWV3ZWQpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTMvMTJAbGcgdS02LzEyQHNtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlciBjLWNhcmQtLWRpYWxvZ19fZHVtbXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3BpY1wiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0udXNlci5hdmF0YXIsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX25hbWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQtLWRpYWxvZ19fZHVtbXlfX3RpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFR1bGlzIFJldmlldyBLYW11IFNla2FyYW5nXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS53cml0ZVJldmlld1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFR1bGlzIFJldmlld1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2Zvb3RlclwiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yZXZpZXdlZCAmJiAhX3ZtLmVkaXRpbmdSZXZpZXcpID8gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5LXRpbGVcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5LXRpbGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19waWNcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLm15UmV2aWV3LnVzZXIuYXZhdGFyLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX2luZm9cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19uYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLm15UmV2aWV3LnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fc3RhdHVzXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmZvcm1hdGVkRGF0ZShfdm0ubXlSZXZpZXcuY3JlYXRlZF9hdCkpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2JvZHlcIlxuICB9LCBbX2MoJ3JhdGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVhZG9ubHlcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm15UmV2aWV3LnJhdGluZyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5teVJldmlldy5yYXRpbmcgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm15UmV2aWV3LnJhdGluZ1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5teVJldmlldy5waG90b3MubGVuZ3RoID4gMCkgPyBfYygnY2Fyb3VzZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1waG90b3Jldmlld1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmNhcm91c2VsT3B0aW9ucyxcbiAgICAgIFwidGltZW91dFwiOiAxMDAwXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0ubXlSZXZpZXcucGhvdG9zKSwgZnVuY3Rpb24ocGhvdG8pIHtcbiAgICByZXR1cm4gW19jKCdjYXJvdXNlbC1pdGVtJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1waG90b3Jldmlld19faXRlbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXBob3RvcmV2aWV3X19pbWFnZVwiLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgvc3RvcmFnZScgKyBwaG90by5maWxlbmFtZSArICcpJ1xuICAgICAgfSlcbiAgICB9KV0pXVxuICB9KV0sIDIpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5teVJldmlldy5jb250ZW50KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LXRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uZWRpdFJldmlldygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRWRpdFwiKV0pXSldLCAxKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ucmV2aWV3cyksIGZ1bmN0aW9uKHJldmlldykge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtYXNvbnJ5LXRpbGVcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1hc29ucnktdGlsZVwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlclwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19waWNcIlxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcmV2aWV3LnVzZXIuYXZhdGFyLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19uYW1lXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhyZXZpZXcudXNlci5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3N0YXR1c1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmZvcm1hdGVkRGF0ZShyZXZpZXcuY3JlYXRlZF9hdCkpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fYm9keVwiXG4gICAgfSwgW19jKCdyYXRlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJyZWFkb25seVwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IChyZXZpZXcucmF0aW5nKSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIHJldmlldy5yYXRpbmcgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJyZXZpZXcucmF0aW5nXCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgKHJldmlldy5waG90b3MubGVuZ3RoID4gMCkgPyBfYygnY2Fyb3VzZWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXBob3RvcmV2aWV3XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9wdGlvbnNcIjogX3ZtLmNhcm91c2VsT3B0aW9ucyxcbiAgICAgICAgXCJ0aW1lb3V0XCI6IDEwMDBcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl9sKChyZXZpZXcucGhvdG9zKSwgZnVuY3Rpb24ocGhvdG8pIHtcbiAgICAgIHJldHVybiBbX2MoJ2Nhcm91c2VsLWl0ZW0nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcGhvdG9yZXZpZXdfX2l0ZW1cIlxuICAgICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcGhvdG9yZXZpZXdfX2ltYWdlXCIsXG4gICAgICAgIHN0eWxlOiAoe1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgvc3RvcmFnZScgKyBwaG90byArICcpJ1xuICAgICAgICB9KVxuICAgICAgfSldKV1cbiAgICB9KV0sIDIpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHJldmlldy5jb250ZW50KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKVxuICB9KV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjAwNjlkNGZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTYwMDY5ZDRmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jldmlld3MudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTYwMDY5ZDRmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jldmlld3MudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJhdGVcIlxuICB9LCBbX3ZtLl9sKChfdm0ubWF4KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGNsYXNzOiBbJ2MtcmF0ZV9faXRlbScsIF92bS5jbGFzc2VzW2l0ZW0gLSAxXSwge1xuICAgICAgICAnaXMtaG92ZXJlZCc6IF92bS5ob3ZlckluZGV4ID09PSBpdGVtXG4gICAgICB9XSxcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBjdXJzb3I6IF92bS5yZWFkb25seSA/ICdhdXRvJyA6ICdwb2ludGVyJ1xuICAgICAgfSksXG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlbW92ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2V0Q3VycmVudFZhbHVlKGl0ZW0sICRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3VzZWxlYXZlXCI6IF92bS5yZXNldEN1cnJlbnRWYWx1ZSxcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0VmFsdWUoaXRlbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3RhcicpXSwgMSlcbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd1RleHQpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yYXRlX190ZXh0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV0pIDogX3ZtLl9lKCldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hY2MwMmU0OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYWNjMDJlNDhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYWNjMDJlNDhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW1hZ2VVcGxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MTc0YjVmMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbWFnZVVwbG9hZC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEltYWdlVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTc0YjVmMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxNzRiNWYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmF0ZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWFjYzAyZTQ4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JhdGUudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0ZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJhdGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFjYzAyZTQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYWNjMDJlNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmV2aWV3cy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYwMDY5ZDRmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Jldmlld3MudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmV2aWV3cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJldmlld3MudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYwMDY5ZDRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjAwNjlkNGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXZpZXdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmV2aWV3cy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICBudWxsLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNDYyNDgxYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TdGFyLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTdGFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNDYyNDgxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE0NjI0ODFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTcgMTgiXSwic291cmNlUm9vdCI6IiJ9