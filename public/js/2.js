webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Carousel.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flickity__ = __webpack_require__("./node_modules/flickity/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_flickity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_flickity__);





/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        timeout: {
            type: Number,
            default: 0
        }
    },
    data: function data() {
        return {
            ready: false,
            carousel: '',
            defaultOptions: {
                cellSelector: '.c-carousel__item'
            }
        };
    },

    methods: {
        init: function init() {
            var options = this.getOptions();
            this.carousel = new __WEBPACK_IMPORTED_MODULE_1_flickity___default.a(this.$refs.el, options);
        },
        getOptions: function getOptions() {
            if (this.$children.length <= 1) {
                this.defaultOptions.prevNextButtons = false;
                this.defaultOptions.draggable = false;
            }
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.defaultOptions, this.options);
        },
        events: function events() {},
        methods: function methods() {}
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            setTimeout(function () {
                _this.ready = true;
                _this.init();
                _this.events();
                _this.methods();
            }, _this.timeout);
        });
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Galleries.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Carousel_vue__ = __webpack_require__("./resources/assets/js/components/Carousel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue__ = __webpack_require__("./resources/assets/js/components/CarouselItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Carousel: __WEBPACK_IMPORTED_MODULE_0__Carousel_vue___default.a, CarouselItem: __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue___default.a },
    props: ['photos'],
    computed: {
        hasPhotos: function hasPhotos() {
            return this.photos.length > 0;
        },
        options: function options() {
            var options = {
                imagesLoaded: true,
                cellAlign: 'left',
                contain: true
            };
            if (this.photos.length < 3) {
                options.draggable = false;
                options.prevNextButtons = false;
            }
            return options;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Galleries_vue__ = __webpack_require__("./resources/assets/js/components/Galleries.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Galleries_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Galleries_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_map_loader__ = __webpack_require__("./resources/assets/js/api/map/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_map_map_pin_empty__ = __webpack_require__("./resources/assets/js/api/map/map-pin-empty.js");







var Overview = function Overview() {
    return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "./resources/assets/js/components/Overview.vue"));
};
var Reviews = function Reviews() {
    return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "./resources/assets/js/components/Reviews.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Overview: Overview, Galleries: __WEBPACK_IMPORTED_MODULE_1__components_Galleries_vue___default.a, Reviews: Reviews },
    data: function data() {
        return {
            loading: false,
            venueId: 0,
            name: null,
            address: null,
            cover: null,
            logo: null,
            phone_number: '',
            price: '',
            opening_hours: [],
            photos: [],
            categories: [],
            location: {},
            rating: 0,
            ratings: [],
            reviews: [],
            myReview: {},
            type: ''
        };
    },
    created: function created() {
        this.fetchData();
    },
    mounted: function mounted() {},

    watch: {
        '$route': 'fetchData',
        location: function location(value) {
            __WEBPACK_IMPORTED_MODULE_2__api_map_loader__["b" /* loaded */].then(function () {
                setTimeout(function () {}, 300);
            });
        }
    },
    methods: {
        fetchData: function fetchData() {
            var _this = this;

            var url = '/api/venue/' + this.$route.params.type + '/' + this.$route.params.slug;

            axios.get(url).then(function (_ref) {
                var data = _ref.data;

                _this.venueId = data.id;

                _this.name = data.name;
                _this.address = data.address;

                _this.phone_number = data.detail.phone_number;
                _this.photos = data.photos;
                _this.categories = data.categories;
                _this.location = { lat: data.lat, lng: data.lng };
                _this.rating = data.rating;
                _this.ratings = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values___default()(data.ratings).reverse();
                _this.reviews = data.reviews;
                _this.type = data.type;
                _this.myReview = data.myReview;

                window.document.title = data.name + ' - Mampir.in';
            }).catch(function () {
                router.push('/404');
            });
        },
        loadMap: function loadMap(destination) {
            var currentLocation = { lat: 41.85, lng: -87.65 };

            console.log("map");

            var map = new google.maps.Map(this.$refs.map, {
                center: currentLocation,
                scrollwheel: false,
                zoom: 4,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            });

            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });

            var request = {
                destination: { lat: 39.79, lng: -86.14 },
                origin: currentLocation,
                travelMode: 'DRIVING'
            };

            var directionsService = new google.maps.DirectionsService({ suppressMarkers: true });
            directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                    var leg = response.routes[0].legs[0];
                    new google.maps.Marker({
                        position: leg.start_location,
                        map: map,
                        icon: {
                            url: __WEBPACK_IMPORTED_MODULE_3__api_map_map_pin_empty__["a" /* default */]
                        }
                    });
                    new google.maps.Marker({
                        position: leg.end_location,
                        map: map,
                        icon: {
                            url: __WEBPACK_IMPORTED_MODULE_3__api_map_map_pin_empty__["a" /* default */]
                        }
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/values.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__("./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18256b5c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-carousel-wrapper"
  }, [(!_vm.ready) ? [_vm._t("placeholder")] : _vm._e(), _vm._v(" "), _c('div', {
    ref: "el",
    class: ['c-carousel', {
      'is-waiting': !_vm.ready
    }]
  }, [_vm._t("default")], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18256b5c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412bc729\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Detail.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('galleries', {
    attrs: {
      "photos": _vm.photos
    },
    on: {
      "update:photos": function($event) {
        _vm.photos = $event
      }
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "o-section"
  }, [_c('overview', {
    attrs: {
      "venue-id": _vm.venueId,
      "name": _vm.name,
      "address": _vm.address,
      "cover": _vm.cover,
      "logo": _vm.logo,
      "phone_number": _vm.phone_number,
      "categories": _vm.categories,
      "location": _vm.location,
      "rating": _vm.rating,
      "ratings": _vm.ratings
    }
  })], 1), _vm._v(" "), _c('section', {
    staticClass: "o-section o-section--grey"
  }, [_c('div', {
    staticClass: "o-container--fluid"
  }, [_c('reviews', {
    attrs: {
      "venue-id": _vm.venueId,
      "my-review-value": _vm.myReview,
      "venue-type": _vm.type
    },
    model: {
      value: (_vm.reviews),
      callback: function($$v) {
        _vm.reviews = $$v
      },
      expression: "reviews"
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-412bc729", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5294f1e2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CarouselItem.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-carousel__item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5294f1e2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b861b24\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Galleries.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.hasPhotos) ? _c('carousel', {
    staticClass: "c-gallery",
    attrs: {
      "options": _vm.options,
      "timeout": 1000
    }
  }, [_c('div', {
    staticClass: "c-gallery__placeholder",
    slot: "placeholder"
  }, [_c('span'), _vm._v(" "), _c('span')]), _vm._v(" "), _vm._l((_vm.photos), function(photo) {
    return [_c('carousel-item', [_c('div', {
      staticClass: "c-gallery__image",
      style: ({
        backgroundImage: 'url(' + photo + ')'
      })
    })])]
  })], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b861b24", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Carousel.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18256b5c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Carousel.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Carousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18256b5c", Component.options)
  } else {
    hotAPI.reload("data-v-18256b5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CarouselItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  null,
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5294f1e2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CarouselItem.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/CarouselItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CarouselItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5294f1e2", Component.options)
  } else {
    hotAPI.reload("data-v-5294f1e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Galleries.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Galleries.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b861b24\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Galleries.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Galleries.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Galleries.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b861b24", Component.options)
  } else {
    hotAPI.reload("data-v-6b861b24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Detail.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Detail.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-412bc729\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Detail.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-412bc729", Component.options)
  } else {
    hotAPI.reload("data-v-412bc729", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2Fyb3VzZWwudnVlIiwid2VicGFjazovLy9HYWxsZXJpZXMudnVlIiwid2VicGFjazovLy9EZXRhaWwudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWU/ZjRiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWU/NjZlOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZT9mYTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9HYWxsZXJpZXMudnVlPzY4NDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvR2FsbGVyaWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQSxxWUFBeVA7QUFDelA7QUFDQSx3T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYy1jYXJvdXNlbC13cmFwcGVyXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXJlYWR5XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwicGxhY2Vob2xkZXJcIj48L3Nsb3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgcmVmPVwiZWxcIiA6Y2xhc3M9XCJbJ2MtY2Fyb3VzZWwnLCB7J2lzLXdhaXRpbmcnOiAhcmVhZHl9XVwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZsaWNraXR5IGZyb20gJ2ZsaWNraXR5JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZWFkeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWw6ICcnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxTZWxlY3RvcjogJy5jLWNhcm91c2VsX19pdGVtJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbCA9IG5ldyBGbGlja2l0eSh0aGlzLiRyZWZzLmVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuJGNoaWxkcmVuLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMucHJldk5leHRCdXR0b25zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50cygpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHMoKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2Fyb3VzZWwudnVlPzAwNGQ3NGNhIiwiPHRlbXBsYXRlPlxuICAgIDxjYXJvdXNlbCB2LWlmPVwiaGFzUGhvdG9zXCIgY2xhc3M9XCJjLWdhbGxlcnlcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiA6dGltZW91dD1cIjEwMDBcIj5cbiAgICAgICAgPGRpdiBzbG90PVwicGxhY2Vob2xkZXJcIiBjbGFzcz1cImMtZ2FsbGVyeV9fcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInBob3RvIGluIHBob3Rvc1wiPlxuICAgICAgICAgICAgPGNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtZ2FsbGVyeV9faW1hZ2VcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnK3Bob3RvKycpJyB9XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Nhcm91c2VsLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9jYXJvdXNlbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwudnVlJztcbiAgICBpbXBvcnQgQ2Fyb3VzZWxJdGVtIGZyb20gJy4vQ2Fyb3VzZWxJdGVtLnZ1ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtDYXJvdXNlbCwgQ2Fyb3VzZWxJdGVtfSxcbiAgICAgICAgcHJvcHM6IFsncGhvdG9zJ10sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNQaG90b3MoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnBob3Rvcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IHRydWVcbiAgICAgICAgICAgICAgICAgICAgLy93cmFwQXJvdW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5waG90b3MubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByZXZOZXh0QnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEdhbGxlcmllcy52dWU/YjY2MDhiZmUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJvLW1hcCBvLW1hcCYjNDU7JiM0NTtkZXRhaWxcIiByZWY9XCJtYXBcIj48L2Rpdj4tLT5cblxuICAgICAgICA8Z2FsbGVyaWVzIDpwaG90b3Muc3luYz1cInBob3Rvc1wiPjwvZ2FsbGVyaWVzPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiby1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgIDxvdmVydmlld1xuICAgICAgICAgICAgICAgICAgICA6dmVudWUtaWQ9XCJ2ZW51ZUlkXCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmFkZHJlc3M9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgOmNvdmVyPVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICA6bG9nbz1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICA6cGhvbmVfbnVtYmVyPVwicGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgOmxvY2F0aW9uPVwibG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICA6cmF0aW5nPVwicmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgOnJhdGluZ3M9XCJyYXRpbmdzXCI+XG4gICAgICAgICAgICA8L292ZXJ2aWV3PlxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPCEtLSA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvblwiPiAtLT5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiby1jb250YWluZXItLWZsdWlkXCI+IC0tPlxuICAgICAgICA8IS0tIDwvZGl2PiAtLT5cbiAgICAgICAgPCEtLSA8L3NlY3Rpb24+IC0tPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lci0tZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8cmV2aWV3cyA6dmVudWUtaWQ9XCJ2ZW51ZUlkXCIgOm15LXJldmlldy12YWx1ZT1cIm15UmV2aWV3XCIgOnZlbnVlLXR5cGU9XCJ0eXBlXCIgdi1tb2RlbD1cInJldmlld3NcIj48L3Jldmlld3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICAvL2ltcG9ydCBNYXBWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTWFwLnZ1ZSdcbiAgICBpbXBvcnQgR2FsbGVyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvR2FsbGVyaWVzLnZ1ZSdcblxuICAgIGltcG9ydCB7bG9hZGVkfSBmcm9tICcuLi9hcGkvbWFwL2xvYWRlcidcbiAgICBpbXBvcnQgSWNvbiBmcm9tICcuLi9hcGkvbWFwL21hcC1waW4tZW1wdHknXG5cbiAgICAvLyBhc3luYyBjb21wb25lbnRzXG4gICAgY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvT3ZlcnZpZXcudnVlJylcbiAgICBjb25zdCBSZXZpZXdzID0gKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1Jldmlld3MudnVlJylcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge092ZXJ2aWV3LCBHYWxsZXJpZXMsIFJldmlld3N9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZW51ZUlkOiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICBjb3ZlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2dvOiBudWxsLFxuICAgICAgICAgICAgICAgIHBob25lX251bWJlcjogJycsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICAgICAgICAgIG9wZW5pbmdfaG91cnM6IFtdLFxuICAgICAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHt9LFxuICAgICAgICAgICAgICAgIHJhdGluZzogMCxcbiAgICAgICAgICAgICAgICByYXRpbmdzOiBbXSxcbiAgICAgICAgICAgICAgICByZXZpZXdzOiBbXSxcbiAgICAgICAgICAgICAgICBteVJldmlldzoge30sXG4gICAgICAgICAgICAgICAgdHlwZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAvL3RoaXMuJHN0b3JlLmNvbW1pdCgnU0hPV19GT09URVInLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIC8vIGNhbGwgYWdhaW4gdGhlIG1ldGhvZCBpZiB0aGUgcm91dGUgY2hhbmdlc1xuICAgICAgICAgICAgJyRyb3V0ZSc6ICdmZXRjaERhdGEnLFxuICAgICAgICAgICAgbG9jYXRpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvYWRNYXAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAvYXBpL3ZlbnVlLyR7dGhpcy4kcm91dGUucGFyYW1zLnR5cGV9LyR7dGhpcy4kcm91dGUucGFyYW1zLnNsdWd9YDtcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdmVudWUgaWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW51ZUlkID0gZGF0YS5pZDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgb3ZlcnZpZXcgZGF0YVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcztcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdmVyID0gZGF0YS5jb3Zlcjtcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ28gPSBkYXRhLmxvZ287XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVfbnVtYmVyID0gZGF0YS5kZXRhaWwucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob3RvcyA9IGRhdGEucGhvdG9zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBkYXRhLmNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSB7bGF0OiBkYXRhLmxhdCwgbG5nOiBkYXRhLmxuZ307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmF0aW5nID0gZGF0YS5yYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmF0aW5ncyA9IE9iamVjdC52YWx1ZXMoZGF0YS5yYXRpbmdzKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2aWV3cyA9IGRhdGEucmV2aWV3cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlID0gZGF0YS50eXBlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmV2aWV3ID0gZGF0YS5teVJldmlldztcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgJHtkYXRhLm5hbWV9IC0gTWFtcGlyLmluYDtcblxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy80MDQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkTWFwKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uID0ge2xhdDogNDEuODUsIGxuZzogLTg3LjY1fTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFwXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLiRyZWZzLm1hcCwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA0LFxuICAgICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLkxFRlRfVE9QXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgZGVzdGluYXRpb24sIG9yaWdpbiBhbmQgdHJhdmVsIG1vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHtsYXQ6IDM5Ljc5LCBsbmc6IC04Ni4xNH0sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiAnRFJJVklORydcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUGFzcyB0aGUgZGlyZWN0aW9ucyByZXF1ZXN0IHRvIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2UuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2Uoe3N1cHByZXNzTWFya2VyczogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzKSAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWcgPSByZXNwb25zZS5yb3V0ZXNbMF0ubGVnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBsZWcuc3RhcnRfbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbGVnLmVuZF9sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRGV0YWlsLnZ1ZT8wYmQ4NjRlMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC52YWx1ZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJvdXNlbC13cmFwcGVyXCJcbiAgfSwgWyghX3ZtLnJlYWR5KSA/IFtfdm0uX3QoXCJwbGFjZWhvbGRlclwiKV0gOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICByZWY6IFwiZWxcIixcbiAgICBjbGFzczogWydjLWNhcm91c2VsJywge1xuICAgICAgJ2lzLXdhaXRpbmcnOiAhX3ZtLnJlYWR5XG4gICAgfV1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE4MjU2YjVjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xODI1NmI1Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMTgyNTZiNWNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWFpblwiXG4gIH0sIFtfYygnZ2FsbGVyaWVzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBob3Rvc1wiOiBfdm0ucGhvdG9zXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJ1cGRhdGU6cGhvdG9zXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGhvdG9zID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zZWN0aW9uXCJcbiAgfSwgW19jKCdvdmVydmlldycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2ZW51ZS1pZFwiOiBfdm0udmVudWVJZCxcbiAgICAgIFwibmFtZVwiOiBfdm0ubmFtZSxcbiAgICAgIFwiYWRkcmVzc1wiOiBfdm0uYWRkcmVzcyxcbiAgICAgIFwiY292ZXJcIjogX3ZtLmNvdmVyLFxuICAgICAgXCJsb2dvXCI6IF92bS5sb2dvLFxuICAgICAgXCJwaG9uZV9udW1iZXJcIjogX3ZtLnBob25lX251bWJlcixcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBfdm0uY2F0ZWdvcmllcyxcbiAgICAgIFwibG9jYXRpb25cIjogX3ZtLmxvY2F0aW9uLFxuICAgICAgXCJyYXRpbmdcIjogX3ZtLnJhdGluZyxcbiAgICAgIFwicmF0aW5nc1wiOiBfdm0ucmF0aW5nc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zZWN0aW9uIG8tc2VjdGlvbi0tZ3JleVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyLS1mbHVpZFwiXG4gIH0sIFtfYygncmV2aWV3cycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2ZW51ZS1pZFwiOiBfdm0udmVudWVJZCxcbiAgICAgIFwibXktcmV2aWV3LXZhbHVlXCI6IF92bS5teVJldmlldyxcbiAgICAgIFwidmVudWUtdHlwZVwiOiBfdm0udHlwZVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnJldmlld3MpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ucmV2aWV3cyA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwicmV2aWV3c1wiXG4gICAgfVxuICB9KV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00MTJiYzcyOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDEyYmM3MjlcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDEyYmM3MjlcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJvdXNlbF9faXRlbVwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTI5NGYxZTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTUyOTRmMWUyXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNTI5NGYxZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiAoX3ZtLmhhc1Bob3RvcykgPyBfYygnY2Fyb3VzZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1nYWxsZXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ub3B0aW9ucyxcbiAgICAgIFwidGltZW91dFwiOiAxMDAwXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWdhbGxlcnlfX3BsYWNlaG9sZGVyXCIsXG4gICAgc2xvdDogXCJwbGFjZWhvbGRlclwiXG4gIH0sIFtfYygnc3BhbicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnBob3RvcyksIGZ1bmN0aW9uKHBob3RvKSB7XG4gICAgcmV0dXJuIFtfYygnY2Fyb3VzZWwtaXRlbScsIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1nYWxsZXJ5X19pbWFnZVwiLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcGhvdG8gKyAnKSdcbiAgICAgIH0pXG4gICAgfSldKV1cbiAgfSldLCAyKSA6IF92bS5fZSgpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZiODYxYjI0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02Yjg2MWIyNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9HYWxsZXJpZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZiODYxYjI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJvdXNlbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4MjU2YjVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Nhcm91c2VsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2Fyb3VzZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE4MjU2YjVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTgyNTZiNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICBudWxsLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01Mjk0ZjFlMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJvdXNlbEl0ZW0udnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2Fyb3VzZWxJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Mjk0ZjFlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUyOTRmMWUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vR2FsbGVyaWVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4NjFiMjRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vR2FsbGVyaWVzLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEdhbGxlcmllcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmI4NjFiMjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02Yjg2MWIyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EZXRhaWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MTJiYzcyOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EZXRhaWwudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIERldGFpbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDEyYmM3MjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MTJiYzcyOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9