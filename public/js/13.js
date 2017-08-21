webpackJsonp([13,0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        value: String
    },
    data: function data() {
        return {
            keyword: '',
            showInputSuggestions: false,
            suggestions: [],
            defaultOptions: {
                endpoint: '/search/suggest',
                showDefaultSuggestionOnEmpty: false,
                defaultSuggestions: {},
                placeholder: "Search...",
                inputId: '',
                inputClass: ''
            }
        };
    },

    watch: {
        value: function value(_value) {
            if (!_.isEmpty(_value) && _value !== undefined) {
                this.keyword = _value;
            }
        },
        keyword: function keyword(value) {
            this.$emit('input', value);
        }
    },
    computed: {
        isEmptySuggestions: function isEmptySuggestions() {
            return this.suggestions.length <= 0;
        },
        inputClass: function inputClass() {
            return ['o-input', this.getOptions.inputClass];
        },
        getOptions: function getOptions() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.defaultOptions, this.options);
        }
    },
    methods: {
        onInputFocus: function onInputFocus(e) {
            e.stopPropagation();

            if (_.isEmpty(e.target.value) && this.getOptions.showDefaultSuggestionOnEmpty) {
                this.setSuggestions(this.getOptions.defaultSuggestions);

                this.showSuggestions(e.target.value);
            }
        },
        suggestionClicked: function suggestionClicked(e, suggestion) {
            this.$emit('input', suggestion.text);
            this.closeSuggestions();
            this.$emit('suggestionClicked', e, suggestion);
        },
        fetchSuggestions: function fetchSuggestions(e) {
            var _this = this;

            var value = e.target.value;
            axios.get(this.getOptions.endpoint + '?keyword=' + value).then(function (_ref) {
                var data = _ref.data;

                if (data.length <= 0) {
                    _this.closeSuggestions();
                } else {
                    if (!_this.showInputSuggestions) {
                        _this.showSuggestions(value);
                    }
                    _this.setSuggestions(data, value);
                }
            });
        },
        showSuggestions: function showSuggestions(value) {

            this.showInputSuggestions = true;

            this.$refs.container.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        },
        closeSuggestions: function closeSuggestions() {
            this.showInputSuggestions = false;
        },
        setSuggestions: function setSuggestions(data) {
            var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this.suggestions = data.map(function (item) {
                if (_.isEmpty(search)) {
                    item.html = item.text;
                } else {
                    search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                    item.html = item.text.replace(re, "<b>$1</b>");
                }
                return item;
            });
        },
        blurHandler: function blurHandler() {
            var _this2 = this;

            try {
                var over_sb = document.querySelector('.c-input-suggestion__suggestions:hover');
            } catch (e) {
                var over_sb = 0;
            }
            if (!over_sb) {
                this.closeSuggestions();
                setTimeout(function () {
                    _this2.closeSuggestions();
                }, 350);
            }
        },
        onchange: function onchange(e) {
            this.$emit('change', e);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_map_loader__ = __webpack_require__("./resources/assets/js/api/map/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue__ = __webpack_require__("./resources/assets/js/components/InputSuggestion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
    components: { InputSuggestion: __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue___default.a },
    props: {
        size: { type: String },
        inline: { type: Boolean, default: true }
    },
    data: function data() {
        return {
            showSearchForm: false,

            searchQuery: {
                location: '',
                city: '',
                keyword: '',
                query: '',
                radius: 5000,
                modified: false
            }
        };
    },

    computed: {
        query: function query() {
            var query = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.searchQuery);
            query.query = query.keyword + (!_.isEmpty(query.city) ? ' in ' + query.city : '');

            return serialize(query);
        },
        inputSize: function inputSize() {
            return !_.isEmpty(this.size) ? 'o-input--' + this.size : null;
        },
        btnSize: function btnSize() {
            return !_.isEmpty(this.size) ? 'o-button--' + this.size : null;
        },
        suggestionOptions: function suggestionOptions() {
            return {
                city: {
                    endpoint: '/api/search/suggest/location',
                    placeholder: 'Pilih Kota',
                    inputId: 'city',
                    inputClass: this.inputSize
                },
                category: {
                    endpoint: '/api/search/suggest/category',
                    placeholder: 'Nyari Apa?',
                    inputClass: this.inputSize,
                    showDefaultSuggestionOnEmpty: true,
                    defaultSuggestions: [{ text: "Kuliner" }, { text: "Kecantikan" }, { text: "Relaksasi" }, { text: "Rekreasi" }, { text: "Olahraga" }, { text: "Shopping" }, { text: "Barbershop" }, { text: "Komunitas" }]
                }
            };
        }
    },

    methods: {
        submit: function submit() {
            window.location = '/search?' + this.query;
        },
        geolocation: function geolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
            } else {}
        },
        getCurrentPosition: function getCurrentPosition(position) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_2__api_map_loader__["b" /* loaded */].then(function () {
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(location.latitude, location.longitude);
                _this.searchQuery.location = location.latitude + ',' + location.longitude;
                if (geocoder) {
                    geocoder.geocode({ 'latLng': latLng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var result = results.filter(function (item) {
                                return item.types[0] == 'locality';
                            });

                            if (_.isEmpty(_this.location)) {
                                _this.location = !_.isEmpty(result) ? result[0].address_components[0].long_name : '';
                            }
                        } else {
                            console.log("Geocoding failed: " + status);
                        }
                    });
                }
            });
        },
        getCurrentCity: function getCurrentCity() {
            if (typeof Cookies.get('user-city') === 'undefined') {} else {
                this.$store.commit('SET_LOCATION', Cookies.get('user-city'));
            }
        },
        toggleSearch: function toggleSearch() {
            if (this.showSearchForm) {
                this.showSearchForm = false;
                iconim.off('search-close');
            } else {
                this.showSearchForm = true;
                iconim.on('search-close');
            }
        },
        suggestionClicked: function suggestionClicked() {},
        onCityChanged: function onCityChanged(e) {
            this.modified = true;
        }
    },
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.searchQuery, this.$route.query);
        this.geolocation();
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/404.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue__ = __webpack_require__("./resources/assets/js/components/Search.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Search_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
	components: { SearchForm: __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default.a }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37df3330\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "not-found"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('div', {
    staticClass: "o-404-grid"
  }, [_c('div', {
    staticClass: "not-found__section"
  }, [_c('h1', {
    staticClass: "o-heading-404"
  }, [_vm._v("Oops!")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('search-form', {
    staticStyle: {
      "margin-left": "0"
    },
    attrs: {
      "size": "large",
      "inline": false
    }
  })], 1), _vm._v(" "), _vm._m(1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "o-description"
  }, [_vm._v("\n\t\t\t\t\t\tMaaf kami tidak menemukan apa yang kamu cari "), _c('br'), _vm._v("\n\t\t\t\t\t\tMungkin berasal dari planet lain ??\n\t\t\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "not-found__section"
  }, [_c('img', {
    staticClass: "o-image-robots",
    attrs: {
      "src": __webpack_require__("./resources/assets/img/404/robots.png")
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37df3330", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5a2a94a4\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: ['c-search', {
      'c-search--inline': _vm.inline,
      'is-shown': _vm.showSearchForm
    }],
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('button', {
    staticClass: "c-search__button iconim iconim-search-close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.toggleSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "c-search__form"
  }, [_c('div', {
    staticClass: "c-form-group"
  }, [_c('input-suggestion', {
    attrs: {
      "options": _vm.suggestionOptions.city
    },
    on: {
      "suggestionClicked": _vm.suggestionClicked,
      "change": _vm.onCityChanged
    },
    model: {
      value: (_vm.searchQuery.city),
      callback: function($$v) {
        _vm.searchQuery.city = $$v
      },
      expression: "searchQuery.city"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('input-suggestion', {
    attrs: {
      "options": _vm.suggestionOptions.category
    },
    on: {
      "suggestionClicked": _vm.suggestionClicked
    },
    model: {
      value: (_vm.searchQuery.keyword),
      callback: function($$v) {
        _vm.searchQuery.keyword = $$v
      },
      expression: "searchQuery.keyword"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('button', {
    class: ['o-button', 'o-button--primary', 'o-button-custom', 'o-button--block', _vm.btnSize],
    attrs: {
      "type": "submit"
    }
  }, [(!_vm.inline) ? _c('span', [_vm._v("Yuk, ")]) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v("Cari"), (!_vm.inline) ? _c('span', [_vm._v("!")]) : _vm._e()]), _vm._v(" "), _c('span', {
    staticClass: "text-cari-icons",
    staticStyle: {
      "display": "none"
    }
  }, [_c('svg', {
    attrs: {
      "fill": "#000000",
      "height": "24",
      "viewBox": "0 0 24 24",
      "width": "24",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "text-cari-lagi",
    staticStyle: {
      "display": "none"
    }
  }, [_vm._v("Cari Lagi")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a2a94a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b8995bc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "c-input-suggestion"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    class: _vm.inputClass,
    attrs: {
      "type": "text",
      "id": _vm.getOptions.inputId,
      "placeholder": _vm.getOptions.placeholder,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "focus": _vm.onInputFocus,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.fetchSuggestions],
      "blur": _vm.blurHandler,
      "change": _vm.onchange
    }
  }), _vm._v(" "), (_vm.showInputSuggestions && !_vm.isEmptySuggestions) ? _c('div', {
    staticClass: "c-input-suggestion__suggestions"
  }, [_vm._l((_vm.suggestions), function(suggestion) {
    return [_c('a', {
      staticClass: "c-input-suggestion__item",
      attrs: {
        "href": "#"
      },
      domProps: {
        "innerHTML": _vm._s(suggestion.html)
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.suggestionClicked($event, suggestion)
        }
      }
    })]
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b8995bc", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/img/404/robots.png":
/***/ (function(module, exports) {

module.exports = "/images/robots.png?4b04cf225ed73b2d698a3c4833520f59";

/***/ }),

/***/ "./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/InputSuggestion.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b8995bc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/InputSuggestion.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/InputSuggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InputSuggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b8995bc", Component.options)
  } else {
    hotAPI.reload("data-v-6b8995bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Search.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5a2a94a4\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Search.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a2a94a4", Component.options)
  } else {
    hotAPI.reload("data-v-5a2a94a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/404.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37df3330\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/404.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37df3330", Component.options)
  } else {
    hotAPI.reload("data-v-37df3330", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzLzQwNC52dWU/OTY3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZT82ODBhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlP2U1ZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvNDA0L3JvYm90cy5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztrQkE2QkE7eUNBQ0E7dUJBQ0E7QUFFQTtBQUxBO2VBT0E7QUFSQTswQkFTQTs7cUJBRUE7a0NBQ0E7eUJBQ0E7OzBCQUVBOzhDQUNBO29DQUNBOzZCQUNBO3lCQUNBOzRCQUdBO0FBUkE7QUFKQTtBQWFBOzs7c0NBRUE7NERBQ0E7K0JBQ0E7QUFDQTtBQUNBO3lDQUNBO2dDQUNBO0FBRUE7QUFUQTs7MERBV0E7OENBQ0E7QUFDQTswQ0FDQTsrQ0FDQTtBQUNBOzBDQUNBOzZIQUNBO0FBRUE7QUFWQTs7K0NBWUE7Y0FNQTs7MkZBQ0E7b0RBRUE7OzhDQUNBO0FBQ0E7QUFDQTtxRUFDQTsyQ0FDQTtpQkFDQTsrQ0FDQTtBQUNBOztBQUNBOztpQ0FDQTsrREFDQTtBQUNBOztzQ0FDQTswQkFDQTt1QkFDQTtxREFDQTs4Q0FD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O0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLGtZQUF5UDtBQUN6UDtBQUNBLHFPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYy1pbnB1dC1zdWdnZXN0aW9uXCIgcmVmPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICA6aWQ9XCJnZXRPcHRpb25zLmlucHV0SWRcIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJnZXRPcHRpb25zLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICB2LW1vZGVsPVwia2V5d29yZFwiXG4gICAgICAgICAgICAgICBAZm9jdXM9XCJvbklucHV0Rm9jdXNcIlxuICAgICAgICAgICAgICAgQGlucHV0PVwiZmV0Y2hTdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICAgICBAYmx1cj1cImJsdXJIYW5kbGVyXCJcbiAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbmNoYW5nZVwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93SW5wdXRTdWdnZXN0aW9ucyAmJiAhaXNFbXB0eVN1Z2dlc3Rpb25zXCIgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25fX3N1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJzdWdnZXN0aW9uIGluIHN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYy1pbnB1dC1zdWdnZXN0aW9uX19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInN1Z2dlc3Rpb25DbGlja2VkKCRldmVudCwgc3VnZ2VzdGlvbilcIlxuICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInN1Z2dlc3Rpb24uaHRtbFwiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIHNob3dJbnB1dFN1Z2dlc3Rpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvc2VhcmNoL3N1Z2dlc3QnLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGVmYXVsdFN1Z2dlc3Rpb25PbkVtcHR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFN1Z2dlc3Rpb25zOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0SWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZighXy5pc0VtcHR5KHZhbHVlKSAmJiAodmFsdWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMua2V5d29yZCA9IHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5d29yZCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNFbXB0eVN1Z2dlc3Rpb25zKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCA8PSAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0Q2xhc3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnby1pbnB1dCcsIHRoaXMuZ2V0T3B0aW9ucy5pbnB1dENsYXNzXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbklucHV0Rm9jdXMoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbi8vICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hvd0lucHV0U3VnZ2VzdGlvbnMpIHtcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbi8vICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKF8uaXNFbXB0eShlLnRhcmdldC52YWx1ZSkgJiYgdGhpcy5nZXRPcHRpb25zLnNob3dEZWZhdWx0U3VnZ2VzdGlvbk9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdWdnZXN0aW9ucyh0aGlzLmdldE9wdGlvbnMuZGVmYXVsdFN1Z2dlc3Rpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWdnZXN0aW9ucyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKGUsIHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHN1Z2dlc3Rpb24udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VnZ2VzdGlvbkNsaWNrZWQnLCBlLCBzdWdnZXN0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLmdldE9wdGlvbnMuZW5kcG9pbnQrJz9rZXl3b3JkPScrdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hvd0lucHV0U3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN1Z2dlc3Rpb25zKGRhdGEsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1N1Z2dlc3Rpb25zKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuLy8gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3VnZ2VzdGlvbnMoZGF0YSwgc2VhcmNoID0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXy5pc0VtcHR5KHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoXCIoXCIgKyBzZWFyY2guc3BsaXQoJyAnKS5qb2luKCd8JykgKyBcIilcIiwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dC5yZXBsYWNlKHJlLCBcIjxiPiQxPC9iPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibHVySGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0cnkgeyB2YXIgb3Zlcl9zYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLWlucHV0LXN1Z2dlc3Rpb25fX3N1Z2dlc3Rpb25zOmhvdmVyJyk7IH0gY2F0Y2goZSl7IHZhciBvdmVyX3NiID0gMDsgfVxuICAgICAgICAgICAgICAgIGlmICghb3Zlcl9zYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpOyB9LCAzNTApOyAvLyBoaWRlIHN1Z2dlc3Rpb25zIG9uIGZhc3QgaW5wdXRcbiAgICAgICAgICAgICAgICB9IC8vZWxzZSBpZiAodGhpcyAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgc2V0VGltZW91dChmdW5jdGlvbigpeyB0aGlzLmZvY3VzKCk7IH0sIDIwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSW5wdXRTdWdnZXN0aW9uLnZ1ZT82OGNjYWE5NSIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybSA6Y2xhc3M9XCJbJ2Mtc2VhcmNoJywgeydjLXNlYXJjaC0taW5saW5lJzogaW5saW5lLCAnaXMtc2hvd24nOiBzaG93U2VhcmNoRm9ybX1dXCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYy1zZWFyY2hfX2J1dHRvbiBpY29uaW0gaWNvbmltLXNlYXJjaC1jbG9zZVwiIEBjbGljaz1cInRvZ2dsZVNlYXJjaFwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1zZWFyY2hfX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtc3VnZ2VzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzdWdnZXN0aW9uT3B0aW9ucy5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hRdWVyeS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBzdWdnZXN0aW9uQ2xpY2tlZD1cInN1Z2dlc3Rpb25DbGlja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkNpdHlDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPC9pbnB1dC1zdWdnZXN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LXN1Z2dlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3VnZ2VzdGlvbk9wdGlvbnMuY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5LmtleXdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHN1Z2dlc3Rpb25DbGlja2VkPVwic3VnZ2VzdGlvbkNsaWNrZWRcIj5cbiAgICAgICAgICAgICAgICA8L2lucHV0LXN1Z2dlc3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIDpjbGFzcz1cIlsnby1idXR0b24nLCAnby1idXR0b24tLXByaW1hcnknLCdvLWJ1dHRvbi1jdXN0b20nLCAnby1idXR0b24tLWJsb2NrJywgYnRuU2l6ZV1cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhaW5saW5lXCI+WXVrLCZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DYXJpPHNwYW4gdi1pZj1cIiFpbmxpbmVcIj4hPC9zcGFuPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FyaS1pY29uc1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1jYXJpLWxhZ2lcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+Q2FyaSBMYWdpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCB7bG9hZGVkfSBmcm9tICcuLi9hcGkvbWFwL2xvYWRlcidcblxuICAgIGltcG9ydCBJbnB1dFN1Z2dlc3Rpb24gZnJvbSAnLi9JbnB1dFN1Z2dlc3Rpb24udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7IElucHV0U3VnZ2VzdGlvbiB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgICAgICBpbmxpbmU6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoRm9ybTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbi8vICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4vLyAgICAgICAgICAgICAgICAncXVlcnknXG4vLyAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgcXVlcnkoKSB7XG4gICAgICAgICAgICAgIGxldCBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VhcmNoUXVlcnkpO1xuICAgICAgICAgICAgICAgICAgcXVlcnkucXVlcnkgPSBxdWVyeS5rZXl3b3JkKyghXy5pc0VtcHR5KHF1ZXJ5LmNpdHkpID8gJyBpbiAnK3F1ZXJ5LmNpdHkgOiAnJyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShxdWVyeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHRoaXMuc2l6ZSkgPyAnby1pbnB1dC0tJyArIHRoaXMuc2l6ZSA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnRuU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLnNpemUpID8gJ28tYnV0dG9uLS0nICsgdGhpcy5zaXplIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWdnZXN0aW9uT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3QvbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQaWxpaCBLb3RhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHRoaXMuaW5wdXRTaXplXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3QvY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdOeWFyaSBBcGE/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHRoaXMuaW5wdXRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJLdWxpbmVyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJLZWNhbnRpa2FuXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJSZWxha3Nhc2lcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIlJla3JlYXNpXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJPbGFocmFnYVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiU2hvcHBpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkJhcmJlcnNob3BcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIktvbXVuaXRhc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuLy8gICAgICAgIHdhdGNoOiB7XG4vLyAgICAgICAgICAgIGxvY2F0aW9uKHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0NBVElPTicsIHZhbHVlKTtcbi8vICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgYXJlYSh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfQVJFQScsIHZhbHVlKTtcbi8vICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAga2V5d29yZCh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdTRVRfS0VZV09SRCcsIHZhbHVlKTtcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3NlYXJjaD8nICsgdGhpcy5xdWVyeTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW9sb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24odGhpcy5nZXRDdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDdXJyZW50Q2l0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5sb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkubG9jYXRpb24gPSBsb2NhdGlvbi5sYXRpdHVkZSsnLCcrbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvY29kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiBsYXRMbmd9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlc1swXSA9PSAnbG9jYWxpdHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMubG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gIV8uaXNFbXB0eShyZXN1bHQpID8gcmVzdWx0WzBdLmFkZHJlc3NfY29tcG9uZW50c1swXS5sb25nX25hbWUgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZW9jb2RpbmcgZmFpbGVkOiBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2l0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIENvb2tpZXMuZ2V0KCd1c2VyLWNpdHknKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9FdmVudC5maXJlKCdzaG93LWNpdGllcy1tb2RhbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgQ29va2llcy5nZXQoJ3VzZXItY2l0eScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWFyY2hGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlYXJjaEZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbmltLm9mZignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VhcmNoRm9ybSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGljb25pbS5vbignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaXR5Q2hhbmdlZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2VhcmNoUXVlcnksIHRoaXMuJHJvdXRlLnF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMuZ2VvbG9jYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNlYXJjaC52dWU/M2ZkMDViYTQiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJub3QtZm91bmRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby00MDQtZ3JpZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJub3QtZm91bmRfX3NlY3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cIm8taGVhZGluZy00MDRcIj5Pb3BzITwvaDE+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cIm8tZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0TWFhZiBrYW1pIHRpZGFrIG1lbmVtdWthbiBhcGEgeWFuZyBrYW11IGNhcmkgPGJyPlxuXHRcdFx0XHRcdFx0XHRNdW5na2luIGJlcmFzYWwgZGFyaSBwbGFuZXQgbGFpbiA/P1xuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHNlYXJjaC1mb3JtIHNpemU9XCJsYXJnZVwiIDppbmxpbmU9XCJmYWxzZVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDA7XCI+PC9zZWFyY2gtZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm90LWZvdW5kX19zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uLy4uL2ltZy80MDQvcm9ib3RzLnBuZ1wiIGNsYXNzPVwiby1pbWFnZS1yb2JvdHNcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7IFNlYXJjaEZvcm0gfVxufVx0XG5cdFxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIDQwNC52dWU/YzQ4MmQ5ZjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tNDA0LWdyaWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmRfX3NlY3Rpb25cIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taGVhZGluZy00MDRcIlxuICB9LCBbX3ZtLl92KFwiT29wcyFcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VhcmNoLWZvcm0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiLFxuICAgICAgXCJpbmxpbmVcIjogZmFsc2VcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRNYWFmIGthbWkgdGlkYWsgbWVuZW11a2FuIGFwYSB5YW5nIGthbXUgY2FyaSBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRNdW5na2luIGJlcmFzYWwgZGFyaSBwbGFuZXQgbGFpbiA/P1xcblxcdFxcdFxcdFxcdFxcdFwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmRfX3NlY3Rpb25cIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWltYWdlLXJvYm90c1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiByZXF1aXJlKFwiLi4vLi4vaW1nLzQwNC9yb2JvdHMucG5nXCIpXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzdkZjMzMzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM3ZGYzMzMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTM3ZGYzMzMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgY2xhc3M6IFsnYy1zZWFyY2gnLCB7XG4gICAgICAnYy1zZWFyY2gtLWlubGluZSc6IF92bS5pbmxpbmUsXG4gICAgICAnaXMtc2hvd24nOiBfdm0uc2hvd1NlYXJjaEZvcm1cbiAgICB9XSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uc3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19idXR0b24gaWNvbmltIGljb25pbS1zZWFyY2gtY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVTZWFyY2hcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19mb3JtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dC1zdWdnZXN0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN1Z2dlc3Rpb25PcHRpb25zLmNpdHlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Z2dlc3Rpb25DbGlja2VkXCI6IF92bS5zdWdnZXN0aW9uQ2xpY2tlZCxcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbkNpdHlDaGFuZ2VkXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoUXVlcnkuY2l0eSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zZWFyY2hRdWVyeS5jaXR5ID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeS5jaXR5XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dC1zdWdnZXN0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN1Z2dlc3Rpb25PcHRpb25zLmNhdGVnb3J5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWdnZXN0aW9uQ2xpY2tlZFwiOiBfdm0uc3VnZ2VzdGlvbkNsaWNrZWRcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hRdWVyeS5rZXl3b3JkKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5LmtleXdvcmQgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFF1ZXJ5LmtleXdvcmRcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBjbGFzczogWydvLWJ1dHRvbicsICdvLWJ1dHRvbi0tcHJpbWFyeScsICdvLWJ1dHRvbi1jdXN0b20nLCAnby1idXR0b24tLWJsb2NrJywgX3ZtLmJ0blNpemVdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgWyghX3ZtLmlubGluZSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJZdWsswqBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3Ryb25nJywgW192bS5fdihcIkNhcmlcIiksICghX3ZtLmlubGluZSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCIhXCIpXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcmktaWNvbnNcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgfVxuICB9LCBbX2MoJ3N2ZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmaWxsXCI6IFwiIzAwMDAwMFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIyNFwiLFxuICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDI0IDI0XCIsXG4gICAgICBcIndpZHRoXCI6IFwiMjRcIixcbiAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgfVxuICB9LCBbX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0wIDBoMjR2MjRIMHpcIixcbiAgICAgIFwiZmlsbFwiOiBcIm5vbmVcIlxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcmktbGFnaVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDYXJpIExhZ2lcIildKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVhMmE5NGE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01YTJhOTRhNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTVhMmE5NGE0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImNvbnRhaW5lclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvblwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ua2V5d29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImtleXdvcmRcIlxuICAgIH1dLFxuICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBfdm0uZ2V0T3B0aW9ucy5pbnB1dElkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uZ2V0T3B0aW9ucy5wbGFjZWhvbGRlcixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ua2V5d29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImZvY3VzXCI6IF92bS5vbklucHV0Rm9jdXMsXG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ua2V5d29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sIF92bS5mZXRjaFN1Z2dlc3Rpb25zXSxcbiAgICAgIFwiYmx1clwiOiBfdm0uYmx1ckhhbmRsZXIsXG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25jaGFuZ2VcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dJbnB1dFN1Z2dlc3Rpb25zICYmICFfdm0uaXNFbXB0eVN1Z2dlc3Rpb25zKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbnB1dC1zdWdnZXN0aW9uX19zdWdnZXN0aW9uc1wiXG4gIH0sIFtfdm0uX2woKF92bS5zdWdnZXN0aW9ucyksIGZ1bmN0aW9uKHN1Z2dlc3Rpb24pIHtcbiAgICByZXR1cm4gW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1pbnB1dC1zdWdnZXN0aW9uX19pdGVtXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcImlubmVySFRNTFwiOiBfdm0uX3Moc3VnZ2VzdGlvbi5odG1sKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnN1Z2dlc3Rpb25DbGlja2VkKCRldmVudCwgc3VnZ2VzdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXVxuICB9KV0sIDIpIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02Yjg5OTViY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmI4OTk1YmNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5wdXRTdWdnZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02Yjg5OTViY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3JvYm90cy5wbmc/NGIwNGNmMjI1ZWQ3M2IyZDY5OGEzYzQ4MzM1MjBmNTlcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvaW1nLzQwNC9yb2JvdHMucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvaW1nLzQwNC9yb2JvdHMucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODk5NWJjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJbnB1dFN1Z2dlc3Rpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZiODk5NWJjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmI4OTk1YmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2VhcmNoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWEyYTk0YTRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2VhcmNoLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFNlYXJjaC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWEyYTk0YTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YTJhOTRhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi80MDQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zN2RmMzMzMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi80MDQudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzLzQwNC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIDQwNC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzdkZjMzMzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zN2RmMzMzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIl0sInNvdXJjZVJvb3QiOiIifQ==