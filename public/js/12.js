webpackJsonp([12],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Categories.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Carousel_vue__ = __webpack_require__("./resources/assets/js/components/Carousel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue__ = __webpack_require__("./resources/assets/js/components/CarouselItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon_vue__ = __webpack_require__("./resources/assets/js/components/Icon.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Icon_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Carousel: __WEBPACK_IMPORTED_MODULE_0__Carousel_vue___default.a, CarouselItem: __WEBPACK_IMPORTED_MODULE_1__CarouselItem_vue___default.a, Icon: __WEBPACK_IMPORTED_MODULE_2__Icon_vue___default.a },
    props: {
        city: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            categories: ['kuliner', 'relaksasi', 'rekreasi', 'shopping', 'kecantikan', 'barbershop', 'olahraga', 'komunitas']
        };
    },

    computed: {
        options: function options() {
            var options = {
                prevNextButtons: false,
                pageDots: false,
                cellAlign: 'left',
                draggable: false,
                wrapAround: true
            };

            var toggleDraggable = function toggleDraggable() {
                options.draggable = window.innerWidth < 900;
            };

            toggleDraggable();

            window.onresize = function (event) {
                toggleDraggable();
            };

            return options;
        }
    },
    methods: {
        getCategoryUrl: function getCategoryUrl(category) {
            return '/search/?query=' + (category + (!_.isEmpty(this.city) ? '+in+' + this.city : ''));
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flickity__ = __webpack_require__("./node_modules/flickity/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flickity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_flickity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Masonry_vue__ = __webpack_require__("./resources/assets/js/components/Masonry.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Masonry_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Masonry_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Categories_vue__ = __webpack_require__("./resources/assets/js/components/Categories.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Categories_vue__);










var SearchForm = function SearchForm() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/assets/js/components/Search.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Categories: __WEBPACK_IMPORTED_MODULE_4__components_Categories_vue___default.a, Masonry: __WEBPACK_IMPORTED_MODULE_3__components_Masonry_vue___default.a, SearchForm: SearchForm },
    data: function data() {
        return {
            categories: ['kuliner', 'relaksasi', 'rekreasi', 'hiburan', 'kecantikan', 'barbershop', 'olahraga'],
            reviews: []
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['query']), {
        city: function city() {
            if (document.getElementById('city')) {
                return document.getElementById('city').value;
            } else {
                return '';
            }
        }
    }),
    watch: {
        '$route': function $route() {
            this.fetchReviews(this.city);
        },
        'query.location': function queryLocation(value) {
            this.fetchReviews(value);
        },
        reviews: function reviews() {
            Vue.redrawVueMasonry();
        }
    },
    methods: {
        fitHeroUnitHeight: function fitHeroUnitHeight() {
            var hero = document.querySelector('.c-hero');

            var setFitHeight = function setFitHeight() {
                var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                hero.style.height = height + 'px';
            };

            setFitHeight();

            window.addEventListener('resize', function () {
                setFitHeight();
            });
        },
        fetchReviews: function fetchReviews(city) {
            var _this = this;

            axios.get('/api/reviews?location=' + city).then(function (_ref) {
                var data = _ref.data;

                _this.reviews = data;
            });
        }
    },
    created: function created() {
        window.document.title = "Bahagia Itu Dekat - Mampir.in";
    },
    mounted: function mounted() {
        this.fetchReviews(this.city);
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b234918\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Categories.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('carousel', {
    staticClass: "c-categories",
    attrs: {
      "options": _vm.options
    }
  }, [_vm._l((_vm.categories), function(category) {
    return [_c('carousel-item', [_c('a', {
      staticClass: "c-category",
      attrs: {
        "href": _vm.getCategoryUrl(category)
      }
    }, [_c('icon', {
      staticClass: "c-category__icon",
      attrs: {
        "name": category
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "c-category__name"
    }, [_vm._v(_vm._s(_vm._f("capitalize")(category)))])], 1)])]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3b234918", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5806fdaa\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "c-hero"
  }, [_c('div', {
    staticClass: "o-container c-hero__container"
  }, [_c('div', {
    staticClass: "o-grid o-grid--middle c-hero__grid"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-5/12@sm"
  }, [_c('h1', {
    staticClass: "c-hero__title"
  }, [_vm._v("Bahagia Itu Dekat")]), _vm._v(" "), _c('h3', {
    staticClass: "c-hero__subtitle"
  }, [_vm._v("Yuk, Mampir.in!")]), _vm._v(" "), _c('search-form', {
    attrs: {
      "size": "large",
      "inline": false
    }
  })], 1)]), _vm._v(" "), _c('categories', {
    attrs: {
      "city": _vm.city
    }
  })], 1)]), _vm._v(" "), (_vm.reviews.length) ? _c('section', {
    staticClass: "o-section o-section--grey"
  }, [_c('div', {
    staticClass: "o-container--fluid"
  }, [_c('h1', {
    staticClass: "o-section__title"
  }, [_vm._v("Yang Happening di " + _vm._s(_vm.city))]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _vm._l((_vm.reviews), function(review) {
    return _c('div', {
      directives: [{
        name: "masonry-tile",
        rawName: "v-masonry-tile"
      }],
      staticClass: "o-grid__col u-3/12@lg u-6/12@sm c-card__wrapper"
    }, [_c('div', {
      staticClass: "c-card c-card--dialog u-mb-x4"
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
    }, [_vm._v(_vm._s(_vm._f("dateFromNow")(review.created_at)))])])]), _vm._v(" "), _c('div', {
      staticClass: "c-card__body"
    }, [_c('router-link', {
      staticClass: "o-user-block",
      attrs: {
        "to": '/detail/' + review.venue.slug
      }
    }, [_c('small', {
      staticClass: "o-user-block__name"
    }, [_vm._v(_vm._s(review.venue.name))])]), _vm._v(" "), _c('div', {
      staticClass: "o-ratings"
    }, [_c('div', {
      staticClass: "o-rating is-rated",
      attrs: {
        "href": "#"
      }
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 53.867 53.867"
      }
    }, [_c('defs', [_c('linearGradient', {
      staticClass: "half"
    }, [_c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "yellow"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "grey",
        "stop-opacity": "1"
      }
    })], 1)], 1), _vm._v(" "), _c('polygon', {
      attrs: {
        "points": "26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      }
    })])]), _c('div', {
      staticClass: "o-rating is-rated",
      attrs: {
        "href": "#"
      }
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 53.867 53.867"
      }
    }, [_c('defs', [_c('linearGradient', {
      staticClass: "half"
    }, [_c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "yellow"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "grey",
        "stop-opacity": "1"
      }
    })], 1)], 1), _vm._v(" "), _c('polygon', {
      attrs: {
        "points": "26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      }
    })])]), _c('div', {
      staticClass: "o-rating is-rated",
      attrs: {
        "href": "#"
      }
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 53.867 53.867"
      }
    }, [_c('defs', [_c('linearGradient', {
      staticClass: "half"
    }, [_c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "yellow"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "grey",
        "stop-opacity": "1"
      }
    })], 1)], 1), _vm._v(" "), _c('polygon', {
      attrs: {
        "points": "26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      }
    })])]), _c('div', {
      staticClass: "o-rating is-rated",
      attrs: {
        "href": "#"
      }
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 53.867 53.867"
      }
    }, [_c('defs', [_c('linearGradient', {
      staticClass: "half"
    }, [_c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "yellow"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "grey",
        "stop-opacity": "1"
      }
    })], 1)], 1), _vm._v(" "), _c('polygon', {
      attrs: {
        "points": "26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      }
    })])]), _c('div', {
      staticClass: "o-rating",
      attrs: {
        "href": "#"
      }
    }, [_c('svg', {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 53.867 53.867"
      }
    }, [_c('defs', [_c('linearGradient', {
      staticClass: "half"
    }, [_c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "yellow"
      }
    }), _vm._v(" "), _c('stop', {
      attrs: {
        "offset": "50%",
        "stop-color": "grey",
        "stop-opacity": "1"
      }
    })], 1)], 1), _vm._v(" "), _c('polygon', {
      attrs: {
        "points": "26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "rating-status",
      staticStyle: {
        "display": "none"
      }
    })]), _vm._v(" "), _c('img', {
      staticClass: "o-user-block__photoreview",
      attrs: {
        "src": "https://www.parktheatre.co.uk/media/images/coffee-cake.jpg"
      }
    }), _vm._v(" "), _c('p', [_vm._v("\n                                " + _vm._s(review.content) + "\n                            ")])], 1)])])
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-grid__col u-6/12@sm u-hidden@xs"
  }, [_c('img', {
    staticClass: "c-hero__img",
    attrs: {
      "src": __webpack_require__("./resources/assets/img/hero-iconic.png"),
      "alt": "Mampir.in"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "o-section why"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('h1', {
    staticClass: "o-section__title"
  }, [_vm._v("Kenapa Harus Mampir.in")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid u-text-center"
  }, [_c('div', {
    staticClass: "o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("./resources/assets/img/icon-01.png"),
      "alt": ""
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "u-color-primary u-mb-x2 u-mt-x3"
  }, [_vm._v("Otak Jiwa Dan Raga")]), _vm._v(" "), _c('span', [_vm._v("Butuh yang namanya refreshing")])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("./resources/assets/img/icon-02.png"),
      "alt": ""
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "u-color-primary u-mb-x2 u-mt-x3"
  }, [_vm._v("Jodoh Tak Kunjung Mampir")]), _vm._v(" "), _c('span', [_vm._v("Makanya kamu yang harus Mampir.in")])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12@sm u-mb-x3@xs c-why-circle"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("./resources/assets/img/icon-03.png"),
      "alt": ""
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "u-color-primary u-mb-x2 u-mt-x3"
  }, [_vm._v("Silaturahmi")]), _vm._v(" "), _c('span', [_vm._v("Biar rejekinya lancar. Amin")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5806fdaa", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/img/hero-iconic.png":
/***/ (function(module, exports) {

module.exports = "/images/hero-iconic.png?341cfb44a005f6511357ca9c934b7dc0";

/***/ }),

/***/ "./resources/assets/img/icon-01.png":
/***/ (function(module, exports) {

module.exports = "/images/icon-01.png?a0cb273b65beb71ef91f175e9c9c8a7b";

/***/ }),

/***/ "./resources/assets/img/icon-02.png":
/***/ (function(module, exports) {

module.exports = "/images/icon-02.png?a3ddc4ca2cc9425b233bf2bcb8e5169a";

/***/ }),

/***/ "./resources/assets/img/icon-03.png":
/***/ (function(module, exports) {

module.exports = "/images/icon-03.png?c33f5f87ab7fb2812e0cf3cad556dba4";

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

/***/ "./resources/assets/js/components/Categories.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Categories.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b234918\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Categories.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Categories.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Categories.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b234918", Component.options)
  } else {
    hotAPI.reload("data-v-3b234918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Index.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5806fdaa\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Index.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5806fdaa", Component.options)
  } else {
    hotAPI.reload("data-v-5806fdaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2Fyb3VzZWwudnVlIiwid2VicGFjazovLy9DYXRlZ29yaWVzLnZ1ZSIsIndlYnBhY2s6Ly8vSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWU/ZjRiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy52dWU/MmZlMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZT9mYTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSW5kZXgudnVlP2QzMjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvaGVyby1pY29uaWMucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1nL2ljb24tMDEucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1nL2ljb24tMDIucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1nL2ljb24tMDMucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUE7OztrQkFJQTt5Q0FDQTt1QkFDQTtBQUVBO0FBTEE7O2tCQU9BO3FCQUdBO0FBSkE7QUFQQTswQkFZQTs7bUJBRUE7c0JBQ0E7OzhCQUlBO0FBSEE7QUFIQTtBQU9BOzs7OEJBRUE7K0JBQ0E7Z0dBQ0E7QUFDQTswQ0FDQTs0Q0FDQTtzREFDQTtnREFDQTtBQUNBOzZIQUNBO0FBQ0E7a0NBRUEsQ0FDQTtvQ0FFQSxDQUVBO0FBbEJBOztBQW1CQTs7bUNBQ0E7bUNBQ0E7OEJBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7cUJBQ0E7QUFDQTtBQUNBO0FBbERBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBOzRKQUVBOzs7a0JBR0E7c0JBR0E7QUFKQTtBQURBOzBCQU1BOzt3QkFFQSx5RkFHQTtBQUpBO0FBS0E7OztvQ0FFQTs7aUNBRUE7MEJBQ0E7MkJBQ0E7MkJBQ0E7NEJBR0E7QUFQQTs7NkRBUUE7d0RBQ0E7QUFFQTs7QUFFQTs7K0NBQ0E7QUFDQTtBQUVBOzttQkFDQTtBQUVBO0FBdEJBOzswREF3QkE7aUdBQ0E7QUFFQTtBQUpBO0FBdENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tHQTs7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7OytEQUVBOzRLQUVBOzBCQUNBOzt3QkFFQSw0RUFFQTtxQkFFQTtBQUxBO0FBTUE7O0FBQ0EseUpBQ0EsQ0FFQTs4QkFDQTtpREFDQTt1REFDQTttQkFDQTt1QkFDQTtBQUNBO0FBRUE7OztvQ0FFQTttQ0FDQTtBQUNBO3dEQUNBOzhCQUNBO0FBQ0E7b0NBQ0E7Z0JBQ0E7QUFFQTtBQVZBOzt3REFZQTs4Q0FFQTs7dURBQ0E7bUdBQ0E7b0NBQ0E7QUFFQTs7QUFFQTs7MERBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUNBOztnQ0FDQTtBQUNBO0FBV0E7QUE3QkE7Z0NBOEJBO2dDQUNBO0FBQ0E7Z0NBQ0E7K0JBR0E7QUFDQTtBQXRFQSxHOzs7Ozs7O0FDOUhBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaEJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNYQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JSQSw0RTs7Ozs7OztBQ0FBLHdFOzs7Ozs7O0FDQUEsd0U7Ozs7Ozs7QUNBQSx3RTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLDRZQUF5UDtBQUN6UDtBQUNBLCtPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1QQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0EsOFlBQXlQO0FBQ3pQO0FBQ0EsaVBBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSxvWUFBeVA7QUFDelA7QUFDQSx1T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtY2Fyb3VzZWwtd3JhcHBlclwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFyZWFkeVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInBsYWNlaG9sZGVyXCI+PC9zbG90PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IHJlZj1cImVsXCIgOmNsYXNzPVwiWydjLWNhcm91c2VsJywgeydpcy13YWl0aW5nJzogIXJlYWR5fV1cIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lb3V0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhcm91c2VsOiAnJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjZWxsU2VsZWN0b3I6ICcuYy1jYXJvdXNlbF9faXRlbSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwgPSBuZXcgRmxpY2tpdHkodGhpcy4kcmVmcy5lbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLiRjaGlsZHJlbi5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLnByZXZOZXh0QnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHMoKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzKCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENhcm91c2VsLnZ1ZT8wMDRkNzRjYSIsIjx0ZW1wbGF0ZT5cbiAgICA8Y2Fyb3VzZWwgY2xhc3M9XCJjLWNhdGVnb3JpZXNcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgPGNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRDYXRlZ29yeVVybChjYXRlZ29yeSlcIiBjbGFzcz1cImMtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGljb24gOm5hbWU9XCJjYXRlZ29yeVwiIGNsYXNzPVwiYy1jYXRlZ29yeV9faWNvblwiPjwvaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjLWNhdGVnb3J5X19uYW1lXCI+e3sgY2F0ZWdvcnkgfCBjYXBpdGFsaXplIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Nhcm91c2VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbC52dWUnO1xuICAgIGltcG9ydCBDYXJvdXNlbEl0ZW0gZnJvbSAnLi9DYXJvdXNlbEl0ZW0udnVlJztcbiAgICBpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24udnVlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge0Nhcm91c2VsLCBDYXJvdXNlbEl0ZW0sIEljb259LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGNpdHk6IHtcbiAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAgICAgICAgICAna3VsaW5lcicsICdyZWxha3Nhc2knLCAncmVrcmVhc2knLCAnc2hvcHBpbmcnLCAna2VjYW50aWthbicsICdiYXJiZXJzaG9wJywgJ29sYWhyYWdhJywgJ2tvbXVuaXRhcydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBvcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3cmFwQXJvdW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZURyYWdnYWJsZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcmFnZ2FibGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdG9nZ2xlRHJhZ2dhYmxlKCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVEcmFnZ2FibGUoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldENhdGVnb3J5VXJsKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvc2VhcmNoLz9xdWVyeT0ke2NhdGVnb3J5KyghXy5pc0VtcHR5KHRoaXMuY2l0eSkgPyAnK2luKycrdGhpcy5jaXR5IDogJycpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDYXRlZ29yaWVzLnZ1ZT80NzExYzRiOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImMtaGVyb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyIGMtaGVyb19fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZSBjLWhlcm9fX2dyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMkBzbSB1LWhpZGRlbkB4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWcvaGVyby1pY29uaWMucG5nXCIgYWx0PVwiTWFtcGlyLmluXCIgY2xhc3M9XCJjLWhlcm9fX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNS8xMkBzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYy1oZXJvX190aXRsZVwiPkJhaGFnaWEgSXR1IERla2F0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImMtaGVyb19fc3VidGl0bGVcIj5ZdWssIE1hbXBpci5pbiE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlYXJjaC1mb3JtIHNpemU9XCJsYXJnZVwiIDppbmxpbmU9XCJmYWxzZVwiPjwvc2VhcmNoLWZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxjYXRlZ29yaWVzIDpjaXR5PVwiY2l0eVwiPjwvY2F0ZWdvcmllcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImMtY2F0ZWdvcmllcyBjLWNhdGVnb3JpZXMtLXdpZGdldFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiIGNsYXNzPVwiby1jYXRlZ29yeV9fd3JhcHBlciBvLWdyaWRfX2NvbCB1LTYvMTJAeHMgdS0zLzEyQHNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJvLWNhdGVnb3J5IG8tY2F0ZWdvcnktLWNhcmRcIiA6dG89XCInL3NlYXJjaD9sb2NhdGlvbj0nK2NpdHkrJyZjYXRlZ29yaWVzPScrY2F0ZWdvcnlcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgvaW1hZ2VzL2NhdGVnb3JpZXMvJytjYXRlZ29yeSsnLnBuZyknIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1jYXRlZ29yeV9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCInL2ltYWdlcy9jYXRlZ29yaWVzLycrY2F0ZWdvcnkrJy1pY29uLnBuZydcIiBhbHQ9XCJcIiBjbGFzcz1cIm8tY2F0ZWdvcnlfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWNhdGVnb3J5X19uYW1lXCI+e3sgY2F0ZWdvcnkgfCBjYXBpdGFsaXplIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTYvMTJAeHMgdS0zLzEyQHNtIG8tY2F0ZWdvcnlfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cIm8tY2F0ZWdvcnkgby1jYXRlZ29yeS0tY2FyZFwiIHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNhdGVnb3J5X19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1jYXRlZ29yeV9fbmFtZVwiPkxhaW5ueWE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgIDxzZWN0aW9uIHYtaWY9XCJyZXZpZXdzLmxlbmd0aFwiIGNsYXNzPVwiby1zZWN0aW9uIG8tc2VjdGlvbi0tZ3JleVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyLS1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm8tc2VjdGlvbl9fdGl0bGVcIj5ZYW5nIEhhcHBlbmluZyBkaSB7eyBjaXR5IH19PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtbWFzb25yeVxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbj1cIjAuM3NcIlxuICAgICAgICAgICAgICAgICAgICAgaXRlbS1zZWxlY3Rvcj1cIi5vLWdyaWRfX2NvbFwiXG4gICAgICAgICAgICAgICAgICAgICBjb2x1bW4td2lkdGg9XCIuby1ncmlkX19zaXplclwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm8tZ3JpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX3NpemVyIHUtMy8xMkBsZyB1LTYvMTJAc21cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtbWFzb25yeS10aWxlIHYtZm9yPVwicmV2aWV3IGluIHJldmlld3NcIiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc20gYy1jYXJkX193cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIHUtbWIteDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImMtY2FyZF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL2RldGFpbC8nK3Jldmlldy52ZW51ZS5zbHVnXCIgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX3BpYyBvLXVzZXItYmxvY2tfX3BpYy0tc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnK3Jldmlldy52ZW51ZS5jb3ZlcisnKSd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19fcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyZXZpZXcudXNlci5hdmF0YXJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19uYW1lXCI+e3sgcmV2aWV3LnVzZXIubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19zdGF0dXNcIj57eyByZXZpZXcuY3JlYXRlZF9hdCB8IGRhdGVGcm9tTm93IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL2RldGFpbC8nK3Jldmlldy52ZW51ZS5zbHVnXCIgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IHJldmlldy52ZW51ZS5uYW1lIH19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1yYXRpbmdzXCI+PGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmcgaXMtcmF0ZWRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+PHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiPjwvc3RvcD4gPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPiA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIj48L3BvbHlnb24+PC9zdmc+PC9kaXY+PGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmcgaXMtcmF0ZWRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+PHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiPjwvc3RvcD4gPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPiA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIj48L3BvbHlnb24+PC9zdmc+PC9kaXY+PGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmcgaXMtcmF0ZWRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+PHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiPjwvc3RvcD4gPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPiA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIj48L3BvbHlnb24+PC9zdmc+PC9kaXY+PGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmcgaXMtcmF0ZWRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+PHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiPjwvc3RvcD4gPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPiA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIj48L3BvbHlnb24+PC9zdmc+PC9kaXY+PGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmdcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+PHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiPjwvc3RvcD4gPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPiA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIj48L3BvbHlnb24+PC9zdmc+PC9kaXY+IDxkaXYgY2xhc3M9XCJyYXRpbmctc3RhdHVzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwhLS0tLT4gPCEtLS0tPiA8IS0tLS0+IDwhLS0tLT4gPCEtLS0tPjwvZGl2PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGFya3RoZWF0cmUuY28udWsvbWVkaWEvaW1hZ2VzL2NvZmZlZS1jYWtlLmpwZ1wiIGNsYXNzPVwiby11c2VyLWJsb2NrX19waG90b3Jldmlld1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcmV2aWV3LmNvbnRlbnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvbiB3aHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm8tc2VjdGlvbl9fdGl0bGVcIj5LZW5hcGEgSGFydXMgTWFtcGlyLmluPC9oMT5cbiAgICAgICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwic2VjdGlvbl9fc3VidGl0bGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEdWlzIHByZXRpdW0gZXN0IGF0IG1ldHVzIHJ1dHJ1bSwgYXQgdGluY2lkdW50IHNlbSBtYXhpbXVzLiBEb25lYyBpYWN1bGlzIGNvbW1vZG8gbGlndWxhIHV0IGxhb3JlZXQuPC9wPiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkIHUtdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMkBzbSB1LW1iLXgzQHhzIGMtd2h5LWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWcvaWNvbi0wMS5wbmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyIHUtbXQteDNcIj5PdGFrIEppd2EgRGFuIFJhZ2E8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnV0dWggeWFuZyBuYW1hbnlhIHJlZnJlc2hpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQHNtIHUtbWIteDNAeHMgYy13aHktY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy9pY29uLTAyLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidS1jb2xvci1wcmltYXJ5IHUtbWIteDIgdS1tdC14M1wiPkpvZG9oIFRhayBLdW5qdW5nIE1hbXBpcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYWthbnlhIGthbXUgeWFuZyBoYXJ1cyBNYW1waXIuaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQHNtIHUtbWIteDNAeHMgYy13aHktY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy9pY29uLTAzLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidS1jb2xvci1wcmltYXJ5IHUtbWIteDIgdS1tdC14M1wiPlNpbGF0dXJhaG1pPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJpYXIgcmVqZWtpbnlhIGxhbmNhci4gQW1pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge21hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnXG4gICAgLy8gaW1wb3J0IHtsb3J5fSBmcm9tICdsb3J5LmpzJztcbiAgICBpbXBvcnQgRmxpY2tpdHkgZnJvbSAnZmxpY2tpdHknO1xuXG4gICAgaW1wb3J0IE1hc29ucnkgZnJvbSAnLi4vY29tcG9uZW50cy9NYXNvbnJ5LnZ1ZSdcbiAgICBpbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlJ1xuXG4gICAgY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9TZWFyY2gudnVlJyk7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtDYXRlZ29yaWVzLCBNYXNvbnJ5LCBTZWFyY2hGb3JtfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAgICAgICAgICAna3VsaW5lcicsICdyZWxha3Nhc2knLCAncmVrcmVhc2knLCAnaGlidXJhbicsICdrZWNhbnRpa2FuJywgJ2JhcmJlcnNob3AnLCAnb2xhaHJhZ2EnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZXZpZXdzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAgICAgICAgICdxdWVyeSdcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgY2l0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJyRyb3V0ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoUmV2aWV3cyh0aGlzLmNpdHkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdxdWVyeS5sb2NhdGlvbic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXZpZXdzKHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXZpZXdzKCkge1xuICAgICAgICAgICAgICAgIFZ1ZS5yZWRyYXdWdWVNYXNvbnJ5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpdEhlcm9Vbml0SGVpZ2h0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1oZXJvJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZXRGaXRIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGhlcm8uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRGaXRIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZpdEhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoUmV2aWV3cyhjaXR5KSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Jldmlld3M/bG9jYXRpb249JyArIGNpdHkpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmlld3MgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW5pdElvcnkoKSB7XG4gICAgICAgICAgICAvLyBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19zbGlkZXInKTtcblxuICAgICAgICAgICAgLy8gICAgICAgICBsb3J5KHNsaWRlciwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gb3B0aW9ucyBnb2luZyBoZXJlXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gXCJCYWhhZ2lhIEl0dSBEZWthdCAtIE1hbXBpci5pblwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoUmV2aWV3cyh0aGlzLmNpdHkpO1xuICAgICAgICAgICAgLy90aGlzLmZpdEhlcm9Vbml0SGVpZ2h0KCk7XG4gICAgICAgICAgICAvLyB0aGlzLmluaXRJb3J5KCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJbmRleC52dWU/NzIzNmI2NWMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcm91c2VsLXdyYXBwZXJcIlxuICB9LCBbKCFfdm0ucmVhZHkpID8gW192bS5fdChcInBsYWNlaG9sZGVyXCIpXSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHJlZjogXCJlbFwiLFxuICAgIGNsYXNzOiBbJ2MtY2Fyb3VzZWwnLCB7XG4gICAgICAnaXMtd2FpdGluZyc6ICFfdm0ucmVhZHlcbiAgICB9XVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTgyNTZiNWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4MjU2YjVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xODI1NmI1Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSAxMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnY2Fyb3VzZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXRlZ29yaWVzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ub3B0aW9uc1xuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLmNhdGVnb3JpZXMpLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgIHJldHVybiBbX2MoJ2Nhcm91c2VsLWl0ZW0nLCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLWNhdGVnb3J5XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogX3ZtLmdldENhdGVnb3J5VXJsKGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH0sIFtfYygnaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2F0ZWdvcnlfX2ljb25cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibmFtZVwiOiBjYXRlZ29yeVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2F0ZWdvcnlfX25hbWVcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImNhcGl0YWxpemVcIikoY2F0ZWdvcnkpKSldKV0sIDEpXSldXG4gIH0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2IyMzQ5MThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNiMjM0OTE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTNiMjM0OTE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcm91c2VsX19pdGVtXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Mjk0ZjFlMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTI5NGYxZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01Mjk0ZjFlMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEgMTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWhlcm9cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lciBjLWhlcm9fX2NvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZSBjLWhlcm9fX2dyaWRcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNS8xMkBzbVwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1oZXJvX190aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJCYWhhZ2lhIEl0dSBEZWthdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1oZXJvX19zdWJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJZdWssIE1hbXBpci5pbiFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlYXJjaC1mb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiLFxuICAgICAgXCJpbmxpbmVcIjogZmFsc2VcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NhdGVnb3JpZXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2l0eVwiOiBfdm0uY2l0eVxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJldmlld3MubGVuZ3RoKSA/IF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbl9fdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiWWFuZyBIYXBwZW5pbmcgZGkgXCIgKyBfdm0uX3MoX3ZtLmNpdHkpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1hc29ucnlcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiMC4zc1wiLFxuICAgICAgXCJpdGVtLXNlbGVjdG9yXCI6IFwiLm8tZ3JpZF9fY29sXCIsXG4gICAgICBcImNvbHVtbi13aWR0aFwiOiBcIi5vLWdyaWRfX3NpemVyXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fc2l6ZXIgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5yZXZpZXdzKSwgZnVuY3Rpb24ocmV2aWV3KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1hc29ucnktdGlsZVwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbWFzb25yeS10aWxlXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbSBjLWNhcmRfX3dyYXBwZXJcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIHUtbWIteDRcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fcGljXCJcbiAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHJldmlldy51c2VyLmF2YXRhcixcbiAgICAgICAgXCJhbHRcIjogXCJcIlxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX2luZm9cIlxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fbmFtZVwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocmV2aWV3LnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19zdGF0dXNcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImRhdGVGcm9tTm93XCIpKHJldmlldy5jcmVhdGVkX2F0KSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6ICcvZGV0YWlsLycgKyByZXZpZXcudmVudWUuc2x1Z1xuICAgICAgfVxuICAgIH0sIFtfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX25hbWVcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJldmlldy52ZW51ZS5uYW1lKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1yYXRpbmdzXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcmF0aW5nIGlzLXJhdGVkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ3N2ZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcInZpZXdCb3hcIjogXCIwIDAgNTMuODY3IDUzLjg2N1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkZWZzJywgW19jKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhhbGZcIlxuICAgIH0sIFtfYygnc3RvcCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwib2Zmc2V0XCI6IFwiNTAlXCIsXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiBcInllbGxvd1wiXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwiZ3JleVwiLFxuICAgICAgICBcInN0b3Atb3BhY2l0eVwiOiBcIjFcIlxuICAgICAgfVxuICAgIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BvbHlnb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInBvaW50c1wiOiBcIjI2LjkzNCwxLjMxOCAzNS4yNTYsMTguMTgyIDUzLjg2NywyMC44ODcgNDAuNCwzNC4wMTMgNDMuNTc5LDUyLjU0OSAyNi45MzQsNDMuNzk4IDEwLjI4OCw1Mi41NDkgMTMuNDY3LDM0LjAxMyAwLDIwLjg4NyAxOC42MTEsMTguMTgyIFwiXG4gICAgICB9XG4gICAgfSldKV0pLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1yYXRpbmcgaXMtcmF0ZWRcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnc3ZnJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1My44NjcgNTMuODY3XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RlZnMnLCBbX2MoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGFsZlwiXG4gICAgfSwgW19jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0b3AnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9mZnNldFwiOiBcIjUwJVwiLFxuICAgICAgICBcInN0b3AtY29sb3JcIjogXCJncmV5XCIsXG4gICAgICAgIFwic3RvcC1vcGFjaXR5XCI6IFwiMVwiXG4gICAgICB9XG4gICAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncG9seWdvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicG9pbnRzXCI6IFwiMjYuOTM0LDEuMzE4IDM1LjI1NiwxOC4xODIgNTMuODY3LDIwLjg4NyA0MC40LDM0LjAxMyA0My41NzksNTIuNTQ5IDI2LjkzNCw0My43OTggMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgXCJcbiAgICAgIH1cbiAgICB9KV0pXSksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXJhdGluZyBpcy1yYXRlZFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdzdmcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDUzLjg2NyA1My44NjdcIlxuICAgICAgfVxuICAgIH0sIFtfYygnZGVmcycsIFtfYygnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoYWxmXCJcbiAgICB9LCBbX2MoJ3N0b3AnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9mZnNldFwiOiBcIjUwJVwiLFxuICAgICAgICBcInN0b3AtY29sb3JcIjogXCJ5ZWxsb3dcIlxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3RvcCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwib2Zmc2V0XCI6IFwiNTAlXCIsXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiBcImdyZXlcIixcbiAgICAgICAgXCJzdG9wLW9wYWNpdHlcIjogXCIxXCJcbiAgICAgIH1cbiAgICB9KV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwb2x5Z29uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJwb2ludHNcIjogXCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIlxuICAgICAgfVxuICAgIH0pXSldKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcmF0aW5nIGlzLXJhdGVkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ3N2ZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcInZpZXdCb3hcIjogXCIwIDAgNTMuODY3IDUzLjg2N1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkZWZzJywgW19jKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhhbGZcIlxuICAgIH0sIFtfYygnc3RvcCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwib2Zmc2V0XCI6IFwiNTAlXCIsXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiBcInllbGxvd1wiXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwiZ3JleVwiLFxuICAgICAgICBcInN0b3Atb3BhY2l0eVwiOiBcIjFcIlxuICAgICAgfVxuICAgIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BvbHlnb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInBvaW50c1wiOiBcIjI2LjkzNCwxLjMxOCAzNS4yNTYsMTguMTgyIDUzLjg2NywyMC44ODcgNDAuNCwzNC4wMTMgNDMuNTc5LDUyLjU0OSAyNi45MzQsNDMuNzk4IDEwLjI4OCw1Mi41NDkgMTMuNDY3LDM0LjAxMyAwLDIwLjg4NyAxOC42MTEsMTguMTgyIFwiXG4gICAgICB9XG4gICAgfSldKV0pLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1yYXRpbmdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnc3ZnJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1My44NjcgNTMuODY3XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RlZnMnLCBbX2MoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGFsZlwiXG4gICAgfSwgW19jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0b3AnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9mZnNldFwiOiBcIjUwJVwiLFxuICAgICAgICBcInN0b3AtY29sb3JcIjogXCJncmV5XCIsXG4gICAgICAgIFwic3RvcC1vcGFjaXR5XCI6IFwiMVwiXG4gICAgICB9XG4gICAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncG9seWdvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicG9pbnRzXCI6IFwiMjYuOTM0LDEuMzE4IDM1LjI1NiwxOC4xODIgNTMuODY3LDIwLjg4NyA0MC40LDM0LjAxMyA0My41NzksNTIuNTQ5IDI2LjkzNCw0My43OTggMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgXCJcbiAgICAgIH1cbiAgICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJyYXRpbmctc3RhdHVzXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19waG90b3Jldmlld1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3d3dy5wYXJrdGhlYXRyZS5jby51ay9tZWRpYS9pbWFnZXMvY29mZmVlLWNha2UuanBnXCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhyZXZpZXcuY29udGVudCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKVxuICB9KV0sIDIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS02LzEyQHNtIHUtaGlkZGVuQHhzXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1oZXJvX19pbWdcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogcmVxdWlyZShcIi4uLy4uL2ltZy9oZXJvLWljb25pYy5wbmdcIiksXG4gICAgICBcImFsdFwiOiBcIk1hbXBpci5pblwiXG4gICAgfVxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zZWN0aW9uIHdoeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXNlY3Rpb25fX3RpdGxlXCJcbiAgfSwgW192bS5fdihcIktlbmFwYSBIYXJ1cyBNYW1waXIuaW5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgdS10ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBzbSB1LW1iLXgzQHhzIGMtd2h5LWNpcmNsZVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb24tMDEucG5nXCIpLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LWNvbG9yLXByaW1hcnkgdS1tYi14MiB1LW10LXgzXCJcbiAgfSwgW192bS5fdihcIk90YWsgSml3YSBEYW4gUmFnYVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJCdXR1aCB5YW5nIG5hbWFueWEgcmVmcmVzaGluZ1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQHNtIHUtbWIteDNAeHMgYy13aHktY2lyY2xlXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbi0wMi5wbmdcIiksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyIHUtbXQteDNcIlxuICB9LCBbX3ZtLl92KFwiSm9kb2ggVGFrIEt1bmp1bmcgTWFtcGlyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIk1ha2FueWEga2FtdSB5YW5nIGhhcnVzIE1hbXBpci5pblwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQHNtIHUtbWIteDNAeHMgYy13aHktY2lyY2xlXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbi0wMy5wbmdcIiksXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyIHUtbXQteDNcIlxuICB9LCBbX3ZtLl92KFwiU2lsYXR1cmFobWlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiQmlhciByZWpla2lueWEgbGFuY2FyLiBBbWluXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU4MDZmZGFhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ODA2ZmRhYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTU4MDZmZGFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9JbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2hlcm8taWNvbmljLnBuZz8zNDFjZmI0NGEwMDVmNjUxMTM1N2NhOWM5MzRiN2RjMFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvaGVyby1pY29uaWMucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvaW1nL2hlcm8taWNvbmljLnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvaWNvbi0wMS5wbmc/YTBjYjI3M2I2NWJlYjcxZWY5MWYxNzVlOWM5YzhhN2JcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvaW1nL2ljb24tMDEucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvaW1nL2ljb24tMDEucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9pY29uLTAyLnBuZz9hM2RkYzRjYTJjYzk0MjViMjMzYmYyYmNiOGU1MTY5YVwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvaWNvbi0wMi5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvaWNvbi0wMi5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2ljb24tMDMucG5nP2MzM2Y1Zjg3YWI3ZmIyODEyZTBjZjNjYWQ1NTZkYmE0XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy9pY29uLTAzLnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy9pY29uLTAzLnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJvdXNlbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4MjU2YjVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Nhcm91c2VsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2Fyb3VzZWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE4MjU2YjVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTgyNTZiNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nhcm91c2VsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIDEyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIG51bGwsXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTUyOTRmMWUyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Nhcm91c2VsSXRlbS52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDYXJvdXNlbEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUyOTRmMWUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTI5NGYxZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbEl0ZW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEgMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhdGVnb3JpZXMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zYjIzNDkxOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXRlZ29yaWVzLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDYXRlZ29yaWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYjIzNDkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNiMjM0OTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NhdGVnb3JpZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTgwNmZkYWFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0luZGV4LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU4MDZmZGFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTgwNmZkYWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiXSwic291cmNlUm9vdCI6IiJ9