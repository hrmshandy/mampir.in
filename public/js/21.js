webpackJsonp([21],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2Fyb3VzZWwudnVlIiwid2VicGFjazovLy9HYWxsZXJpZXMudnVlIiwid2VicGFjazovLy9EZXRhaWwudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWU/ZjRiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWU/NjZlOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZT9mYTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9HYWxsZXJpZXMudnVlPzY4NDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvR2FsbGVyaWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQSxxWUFBeVA7QUFDelA7QUFDQSx3T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtY2Fyb3VzZWwtd3JhcHBlclwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFyZWFkeVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInBsYWNlaG9sZGVyXCI+PC9zbG90PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IHJlZj1cImVsXCIgOmNsYXNzPVwiWydjLWNhcm91c2VsJywgeydpcy13YWl0aW5nJzogIXJlYWR5fV1cIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhcm91c2VsOiAnJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjZWxsU2VsZWN0b3I6ICcuYy1jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwgPSBuZXcgRmxpY2tpdHkodGhpcy4kcmVmcy5lbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLiRjaGlsZHJlbi5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLnByZXZOZXh0QnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHMoKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzKCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENhcm91c2VsLnZ1ZT8wMDRkNzRjYSIsIjx0ZW1wbGF0ZT5cbiAgICA8Y2Fyb3VzZWwgdi1pZj1cImhhc1Bob3Rvc1wiIGNsYXNzPVwiYy1nYWxsZXJ5XCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgOnRpbWVvdXQ9XCIxMDAwXCI+XG4gICAgICAgIDxkaXYgc2xvdD1cInBsYWNlaG9sZGVyXCIgY2xhc3M9XCJjLWdhbGxlcnlfX3BsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwaG90byBpbiBwaG90b3NcIj5cbiAgICAgICAgICAgIDxjYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWdhbGxlcnlfX2ltYWdlXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJytwaG90bysnKScgfVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9jYXJvdXNlbC1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY2Fyb3VzZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsLnZ1ZSc7XG4gICAgaW1wb3J0IENhcm91c2VsSXRlbSBmcm9tICcuL0Nhcm91c2VsSXRlbS52dWUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7Q2Fyb3VzZWwsIENhcm91c2VsSXRlbX0sXG4gICAgICAgIHByb3BzOiBbJ3Bob3RvcyddLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzUGhvdG9zKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waG90b3MubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8vd3JhcEFyb3VuZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGhvdG9zLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcmV2TmV4dEJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBHYWxsZXJpZXMudnVlP2I2NjA4YmZlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiby1tYXAgby1tYXAmIzQ1OyYjNDU7ZGV0YWlsXCIgcmVmPVwibWFwXCI+PC9kaXY+LS0+XG5cbiAgICAgICAgPGdhbGxlcmllcyA6cGhvdG9zLnN5bmM9XCJwaG90b3NcIj48L2dhbGxlcmllcz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvblwiPlxuXG4gICAgICAgICAgICA8b3ZlcnZpZXdcbiAgICAgICAgICAgICAgICAgICAgOnZlbnVlLWlkPVwidmVudWVJZFwiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDphZGRyZXNzPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIDpjb3Zlcj1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmxvZ289XCJsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgOnBob25lX251bWJlcj1cInBob25lX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIDpjYXRlZ29yaWVzPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgIDpsb2NhdGlvbj1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOnJhdGluZz1cInJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIDpyYXRpbmdzPVwicmF0aW5nc1wiPlxuICAgICAgICAgICAgPC9vdmVydmlldz5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gPHNlY3Rpb24gY2xhc3M9XCJvLXNlY3Rpb25cIj4gLS0+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyLS1mbHVpZFwiPiAtLT5cbiAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XG4gICAgICAgIDwhLS0gPC9zZWN0aW9uPiAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJvLXNlY3Rpb24gby1zZWN0aW9uLS1ncmV5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1jb250YWluZXItLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPHJldmlld3MgOnZlbnVlLWlkPVwidmVudWVJZFwiIDpteS1yZXZpZXctdmFsdWU9XCJteVJldmlld1wiIDp2ZW51ZS10eXBlPVwidHlwZVwiIHYtbW9kZWw9XCJyZXZpZXdzXCI+PC9yZXZpZXdzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgLy9pbXBvcnQgTWFwVmlldyBmcm9tICcuLi9jb21wb25lbnRzL01hcC52dWUnXG4gICAgaW1wb3J0IEdhbGxlcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcmllcy52dWUnXG5cbiAgICBpbXBvcnQge2xvYWRlZH0gZnJvbSAnLi4vYXBpL21hcC9sb2FkZXInXG4gICAgaW1wb3J0IEljb24gZnJvbSAnLi4vYXBpL21hcC9tYXAtcGluLWVtcHR5J1xuXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIGNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZScpXG4gICAgY29uc3QgUmV2aWV3cyA9ICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9SZXZpZXdzLnZ1ZScpXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtPdmVydmlldywgR2FsbGVyaWVzLCBSZXZpZXdzfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVudWVJZDogMCxcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgY292ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9nbzogbnVsbCxcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnJyxcbiAgICAgICAgICAgICAgICBvcGVuaW5nX2hvdXJzOiBbXSxcbiAgICAgICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICByYXRpbmc6IDAsXG4gICAgICAgICAgICAgICAgcmF0aW5nczogW10sXG4gICAgICAgICAgICAgICAgcmV2aWV3czogW10sXG4gICAgICAgICAgICAgICAgbXlSZXZpZXc6IHt9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgLy90aGlzLiRzdG9yZS5jb21taXQoJ1NIT1dfRk9PVEVSJywgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAvLyBjYWxsIGFnYWluIHRoZSBtZXRob2QgaWYgdGhlIHJvdXRlIGNoYW5nZXNcbiAgICAgICAgICAgICckcm91dGUnOiAnZmV0Y2hEYXRhJyxcbiAgICAgICAgICAgIGxvY2F0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkTWFwKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS92ZW51ZS8ke3RoaXMuJHJvdXRlLnBhcmFtcy50eXBlfS8ke3RoaXMuJHJvdXRlLnBhcmFtcy5zbHVnfWA7XG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHZlbnVlIGlkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVJZCA9IGRhdGEuaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IG92ZXJ2aWV3IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4vLyAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3ZlciA9IGRhdGEuY292ZXI7XG4vLyAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvID0gZGF0YS5sb2dvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lX251bWJlciA9IGRhdGEuZGV0YWlsLnBob25lX251bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waG90b3MgPSBkYXRhLnBob3RvcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gZGF0YS5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0ge2xhdDogZGF0YS5sYXQsIGxuZzogZGF0YS5sbmd9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhdGluZyA9IGRhdGEucmF0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhdGluZ3MgPSBPYmplY3QudmFsdWVzKGRhdGEucmF0aW5ncykucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmlld3MgPSBkYXRhLnJldmlld3M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJldmlldyA9IGRhdGEubXlSZXZpZXc7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYCR7ZGF0YS5uYW1lfSAtIE1hbXBpci5pbmA7XG5cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZE1hcChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHtsYXQ6IDQxLjg1LCBsbmc6IC04Ny42NX07XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy4kcmVmcy5tYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogNCxcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5MRUZUX1RPUFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGRlc3RpbmF0aW9uLCBvcmlnaW4gYW5kIHRyYXZlbCBtb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7bGF0OiAzOS43OSwgbG5nOiAtODYuMTR9LFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsTW9kZTogJ0RSSVZJTkcnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFBhc3MgdGhlIGRpcmVjdGlvbnMgcmVxdWVzdCB0byB0aGUgZGlyZWN0aW9ucyBzZXJ2aWNlLlxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKHtzdXBwcmVzc01hcmtlcnM6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbiAocmVzcG9uc2UsIHN0YXR1cykgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSByb3V0ZSBvbiB0aGUgbWFwLlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVnID0gcmVzcG9uc2Uucm91dGVzWzBdLmxlZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbGVnLnN0YXJ0X2xvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGxlZy5lbmRfbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIERldGFpbC52dWU/MGJkODY0ZTIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcm91c2VsLXdyYXBwZXJcIlxuICB9LCBbKCFfdm0ucmVhZHkpID8gW192bS5fdChcInBsYWNlaG9sZGVyXCIpXSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHJlZjogXCJlbFwiLFxuICAgIGNsYXNzOiBbJ2MtY2Fyb3VzZWwnLCB7XG4gICAgICAnaXMtd2FpdGluZyc6ICFfdm0ucmVhZHlcbiAgICB9XVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTgyNTZiNWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4MjU2YjVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xODI1NmI1Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCAyMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1haW5cIlxuICB9LCBbX2MoJ2dhbGxlcmllcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwaG90b3NcIjogX3ZtLnBob3Rvc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidXBkYXRlOnBob3Rvc1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBob3RvcyA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvblwiXG4gIH0sIFtfYygnb3ZlcnZpZXcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmVudWUtaWRcIjogX3ZtLnZlbnVlSWQsXG4gICAgICBcIm5hbWVcIjogX3ZtLm5hbWUsXG4gICAgICBcImFkZHJlc3NcIjogX3ZtLmFkZHJlc3MsXG4gICAgICBcImNvdmVyXCI6IF92bS5jb3ZlcixcbiAgICAgIFwibG9nb1wiOiBfdm0ubG9nbyxcbiAgICAgIFwicGhvbmVfbnVtYmVyXCI6IF92bS5waG9uZV9udW1iZXIsXG4gICAgICBcImNhdGVnb3JpZXNcIjogX3ZtLmNhdGVnb3JpZXMsXG4gICAgICBcImxvY2F0aW9uXCI6IF92bS5sb2NhdGlvbixcbiAgICAgIFwicmF0aW5nXCI6IF92bS5yYXRpbmcsXG4gICAgICBcInJhdGluZ3NcIjogX3ZtLnJhdGluZ3NcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ3Jldmlld3MnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmVudWUtaWRcIjogX3ZtLnZlbnVlSWQsXG4gICAgICBcIm15LXJldmlldy12YWx1ZVwiOiBfdm0ubXlSZXZpZXcsXG4gICAgICBcInZlbnVlLXR5cGVcIjogX3ZtLnR5cGVcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yZXZpZXdzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLnJldmlld3MgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInJldmlld3NcIlxuICAgIH1cbiAgfSldLCAxKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDEyYmM3MjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQxMmJjNzI5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQxMmJjNzI5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcm91c2VsX19pdGVtXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Mjk0ZjFlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTI5NGYxZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01Mjk0ZjFlMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjAgMjEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS5oYXNQaG90b3MpID8gX2MoJ2Nhcm91c2VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZ2FsbGVyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLm9wdGlvbnMsXG4gICAgICBcInRpbWVvdXRcIjogMTAwMFxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1nYWxsZXJ5X19wbGFjZWhvbGRlclwiLFxuICAgIHNsb3Q6IFwicGxhY2Vob2xkZXJcIlxuICB9LCBbX2MoJ3NwYW4nKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5waG90b3MpLCBmdW5jdGlvbihwaG90bykge1xuICAgIHJldHVybiBbX2MoJ2Nhcm91c2VsLWl0ZW0nLCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtZ2FsbGVyeV9faW1hZ2VcIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHBob3RvICsgJyknXG4gICAgICB9KVxuICAgIH0pXSldXG4gIH0pXSwgMikgOiBfdm0uX2UoKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02Yjg2MWIyNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmI4NjFiMjRcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvR2FsbGVyaWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02Yjg2MWIyNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9HYWxsZXJpZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Nhcm91c2VsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTgyNTZiNWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2Fyb3VzZWwudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDYXJvdXNlbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTgyNTZiNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xODI1NmI1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjAgMjEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgbnVsbCxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTI5NGYxZTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2Fyb3VzZWxJdGVtLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENhcm91c2VsSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTI5NGYxZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Mjk0ZjFlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCAyMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vR2FsbGVyaWVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4NjFiMjRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vR2FsbGVyaWVzLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEdhbGxlcmllcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmI4NjFiMjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02Yjg2MWIyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0dhbGxlcmllcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGV0YWlsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDEyYmM3MjlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGV0YWlsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9EZXRhaWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEZXRhaWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQxMmJjNzI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDEyYmM3MjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSJdLCJzb3VyY2VSb290IjoiIn0=