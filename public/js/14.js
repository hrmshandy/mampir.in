webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Pagination.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_pagination__ = __webpack_require__("./resources/assets/js/api/pagination/index.js");






/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			pagination: null
		};
	},

	props: {
		currentPage: Number,
		perPage: Number,
		records: Number
	},
	computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		query: 'query'
	}), {
		elements: function elements() {
			return new __WEBPACK_IMPORTED_MODULE_2__api_pagination__["a" /* default */](this.records, this.perPage, this.currentPage).render();
		}
	}),
	methods: {
		setPage: function setPage(page) {
			var query = this.query;
			query.page = page;

			this.$emit('change', page, query);
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Rating.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['venue-id', 'value', 'method'],
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            if (typeof _this.value !== 'undefined') {
                _this.toggleRating(_this.value - 1, 'add', 'is-rated');
            }
        }, 600);
    },
    data: function data() {
        return {
            rating: 0
        };
    },

    methods: {
        hoverRating: function hoverRating(index) {
            if (this.method == "post") {
                this.rating = index + 1;
                this.toggleRating(index, 'add', 'is-hovered');
                this.toggleRating(this.value - 1, 'remove', 'is-rated');
            }
        },
        unhoverRating: function unhoverRating(index) {
            if (this.method == "post") {
                this.rating = this.value;
                this.toggleRating(index, 'remove', 'is-hovered');
                this.toggleRating(this.value - 1, 'add', 'is-rated');
            }
        },
        setRating: function setRating(index, pos) {
            var _this2 = this;

            if (this.method == "post") {
                this.toggleRating(index, 'remove', 'is-rated');
                setTimeout(function () {
                    _this2.toggleRating(index, 'add', 'is-rated');
                });
                this.rating = pos;
                this.$emit('input', pos);
            }
        },
        toggleRating: function toggleRating(length, method, className) {
            var items = this.$el.querySelectorAll('.o-ratings .o-rating');
            for (var i = 0; i <= length; i++) {
                if (items[i]) {
                    items[i].classList[method](className);
                }
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_map__ = __webpack_require__("./resources/assets/js/api/map/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Rating_vue__ = __webpack_require__("./resources/assets/js/components/Rating.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Rating_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Rating_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Pagination_vue__ = __webpack_require__("./resources/assets/js/components/Pagination.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Pagination_vue__);










/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Rating: __WEBPACK_IMPORTED_MODULE_4__components_Rating_vue___default.a, Pagination: __WEBPACK_IMPORTED_MODULE_5__components_Pagination_vue___default.a },
    data: function data() {
        return {
            loading: false,
            listings: [],
            currentPage: 1,
            perPage: 18,
            totalRecords: 18,
            error: null,
            map: null,
            isEmpty: false,
            viewListing: true,
            viewMaps: true,

            local: {
                next_page_url: '',
                listings: []
            },
            google: {
                next_page_url: '',
                listings: []
            }
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])(['query']), {
        googleListings: function googleListings() {
            return this.google.listings.filter(function (item) {
                return !_.isEmpty(item.cover);
            });
        }
    }),
    created: function created() {},
    mounted: function mounted() {
        var query = this.$route.query;

        this.fetchData(query);
    },

    watch: {
        'google.listings': function googleListings(value) {
            var M = new __WEBPACK_IMPORTED_MODULE_3__api_map__["a" /* default */]();

            if (M.map === undefined) {
                M.init();
            }
            setTimeout(function () {
                M.loadMarker(value);
            }, 1000);
        }
    },
    methods: {
        fetchData: function fetchData(query) {
            var _this = this;

            this.loading = true;

            this.makeRequest('/api/search/local', query, 'local');

            this.makeRequest('/api/search/google-places/text', query, 'google').then(function (data) {
                if (_this.local.listings.length <= 0 && data.data.length <= 0) {
                    router.push('404');
                }
            });
        },
        makeRequest: function makeRequest(url, query, target) {
            var _this2 = this;

            var Q = serialize(query);
            return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                axios.get(url + '?' + Q).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this2.loading = false;
                        _this2[target].listings = data.data;
                        _this2[target].next_page_url = data.next_page_url;

                        resolve(data);
                    }, 1000);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },
        clickViewMaps: function clickViewMaps() {
            this.viewMaps = true;
            this.viewListing = false;
        },
        clickViewListing: function clickViewListing() {
            this.viewMaps = false;
            this.viewListing = true;
        },
        onPageChange: function onPageChange(page, query) {
            this.fetchData(query);
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0124de19\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Rating.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-ratings"
  }, [_vm._l((5), function(n, index) {
    return _c('div', {
      staticClass: "o-rating",
      attrs: {
        "href": "#"
      },
      on: {
        "mouseover": function($event) {
          _vm.hoverRating(index)
        },
        "mouseout": function($event) {
          _vm.unhoverRating(index)
        },
        "click": function($event) {
          $event.preventDefault();
          _vm.setRating(index, n)
        }
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
    })])])
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rating !== 0),
      expression: "rating !== 0"
    }],
    staticClass: "rating-status"
  }, [(_vm.rating == 1) ? _c('span', [_vm._v("Terrible")]) : _vm._e(), _vm._v(" "), (_vm.rating == 2) ? _c('span', [_vm._v("Poor")]) : _vm._e(), _vm._v(" "), (_vm.rating == 3) ? _c('span', [_vm._v("Average")]) : _vm._e(), _vm._v(" "), (_vm.rating == 4) ? _c('span', [_vm._v("Very Good")]) : _vm._e(), _vm._v(" "), (_vm.rating == 5) ? _c('span', [_vm._v("Excellent")]) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0124de19", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15c44b96\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_vm._l((_vm.elements), function(element) {
    return [_c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (typeof element === 'string'),
        expression: "typeof element === 'string'"
      }],
      staticClass: "page-item disabled"
    }, [_c('span', {
      staticClass: "page-link"
    }, [_vm._v(_vm._s(element))])]), _vm._v(" "), (element instanceof Array) ? _vm._l((element), function(page) {
      return (element.length > 1) ? _c('li', {
        class: ['page-item', {
          'active': page == _vm.currentPage
        }]
      }, [(page == _vm.currentPage) ? _c('span', {
        staticClass: "page-link"
      }, [_vm._v(_vm._s(page))]) : _c('a', {
        staticClass: "page-link",
        attrs: {
          "href": "#"
        },
        on: {
          "click": function($event) {
            $event.preventDefault();
            _vm.setPage(page)
          }
        }
      }, [_vm._v(_vm._s(page))])]) : _vm._e()
    }) : _vm._e()]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15c44b96", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54979100\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "o-section o-section--white section--search"
  }, [_c('div', {
    staticClass: "p-search"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.viewListing),
      expression: "viewListing"
    }],
    staticClass: "p-search__listings"
  }, [(_vm.loading) ? [_c('div', {
    staticClass: "o-grid"
  }, [_vm._l((9), function(i) {
    return [_c('div', {
      staticClass: "o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs"
    }, [_vm._m(0, true)])]
  })], 2)] : _vm._e(), _vm._v(" "), (_vm.local.listings.length > 0) ? [_c('h3', {
    staticClass: "u-mb-x2"
  }, [_vm._v("Rekomendasi")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, [_vm._l((_vm.local.listings), function(venue) {
    return [_c('div', {
      staticClass: "o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs"
    }, [_c('a', {
      staticClass: "c-venue-card",
      attrs: {
        "href": '/place/l/' + venue.slug,
        "id": 'venue-card-' + venue.id
      }
    }, [_c('div', {
      staticClass: "c-venue-card__photo",
      style: ({
        backgroundImage: ("url(" + (venue.cover) + ")")
      })
    }), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__info"
    }, [_c('h5', {
      staticClass: "c-venue-card__name o-type-18"
    }, [_vm._v(_vm._s(venue.name))])]), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__footer",
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_c('div', {
      staticClass: "c-venue-card__rating"
    }), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__categories",
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_vm._v("\n                                        " + _vm._s(venue.short_address) + "\n                                    ")])])])])]
  })], 2), _vm._v(" "), _c('hr')] : _vm._e(), _vm._v(" "), (_vm.google.listings.length > 0) ? [_c('h3', {
    staticClass: "u-mb-x2"
  }, [_vm._v("Tempat Lainnya")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, [_vm._l((_vm.googleListings), function(venue) {
    return [_c('div', {
      staticClass: "o-grid__col u-4/12@lg u-6/12@sm u-12/12@xs"
    }, [_c('a', {
      staticClass: "c-venue-card",
      attrs: {
        "href": '/place/g/' + venue.id,
        "id": 'venue-card-' + venue.id
      }
    }, [_c('div', {
      staticClass: "c-venue-card__photo",
      style: ({
        backgroundImage: ("url(" + (venue.cover) + ")")
      })
    }), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__info"
    }, [_c('h5', {
      staticClass: "c-venue-card__name o-type-18"
    }, [_vm._v(_vm._s(venue.name))])]), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__footer",
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_c('div', {
      staticClass: "c-venue-card__rating"
    }), _vm._v(" "), _c('div', {
      staticClass: "c-venue-card__categories",
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_vm._v("\n                                        " + _vm._s(venue.short_address) + "\n                                    ")])])])])]
  })], 2)] : [_c('p', {
    staticClass: "text-center"
  }, [_vm._v("Not Found.")])]], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.viewMaps),
      expression: "viewMaps"
    }],
    staticClass: "p-search__map"
  }, [_c('div', {
    staticClass: "filter--wrapper filter--wrapper__maps"
  }, [_c('div'), _vm._v(" "), _c('button', {
    staticClass: "o-button o-button--primary-outlined button--icon  pull-right",
    on: {
      "click": _vm.clickViewListing
    }
  }, [_c('i', {
    staticClass: "fa fa-list",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "o-map",
    attrs: {
      "id": "map"
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-venue-card c-venue-card__placeholder"
  }, [_c('div', {
    staticClass: "c-venue-card__photo"
  }), _vm._v(" "), _c('div', {
    staticClass: "c-venue-card__info"
  }, [_c('h5', {
    staticClass: "c-venue-card__name"
  })]), _vm._v(" "), _c('div', {
    staticClass: "c-venue-card__footer",
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('div', {
    staticClass: "c-venue-card__rating"
  })]), _vm._v(" "), _c('div', {
    staticClass: "c-venue-card__categories",
    staticStyle: {
      "margin-top": "5px"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54979100", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/api/pagination/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Pagination = function () {
    function Pagination() {
        var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var currentPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Pagination);

        this.records = total;
        this.perPage = perPage;
        this.currentPage = currentPage;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Pagination, [{
        key: 'render',
        value: function render() {
            var w = this.get();
            var elements = [w.first, w.pages instanceof Array ? '...' : null, w.pages, w.last instanceof Array ? '...' : null, w.last];
            return elements;
        }
    }, {
        key: 'get',
        value: function get() {
            var chunk = 3;
            if (this.lastPage() < chunk * 2 + 6) {
                return this.getSmallPages();
            }
            return this.getPages(chunk);
        }
    }, {
        key: 'getSmallPages',
        value: function getSmallPages() {
            return {
                first: this.range(1, this.lastPage()),
                pages: null,
                last: null
            };
        }
    }, {
        key: 'getPages',
        value: function getPages(onEachSide) {
            var w = onEachSide * 2;
            if (!this.hasPages()) {
                return {
                    first: null,
                    pages: null,
                    last: null
                };
            }
            if (this.currentPage <= w) {
                return this.getPagesTooCloseToBeginning(w);
            } else if (this.currentPage > this.lastPage() - w) {
                return this.getPagesTooCloseToEnding(w);
            }
            return this.getFullPages(onEachSide);
        }
    }, {
        key: 'getPagesTooCloseToBeginning',
        value: function getPagesTooCloseToBeginning(w) {
            return {
                first: this.range(1, w + 2),
                pages: null,
                last: this.getFinish()
            };
        }
    }, {
        key: 'getPagesTooCloseToEnding',
        value: function getPagesTooCloseToEnding(w) {
            var last = this.range(this.lastPage() - (w + 2), this.lastPage());
            return {
                first: this.getStart(),
                pages: null,
                last: last
            };
        }
    }, {
        key: 'getFullPages',
        value: function getFullPages(onEachSide) {
            return {
                first: this.getStart(),
                pages: this.getAdjacentRange(onEachSide),
                last: this.getFinish()
            };
        }
    }, {
        key: 'getAdjacentRange',
        value: function getAdjacentRange(onEachSide) {
            return this.range(this.currentPage - onEachSide, this.currentPage + onEachSide);
        }
    }, {
        key: 'hasPages',
        value: function hasPages() {
            return this.lastPage() > 1;
        }
    }, {
        key: 'getStart',
        value: function getStart() {
            return this.range(1, 2);
        }
    }, {
        key: 'getFinish',
        value: function getFinish() {
            return this.range(this.lastPage() - 1, this.lastPage());
        }
    }, {
        key: 'lastPage',
        value: function lastPage() {
            return Math.ceil(this.records / this.perPage);
        }
    }, {
        key: 'setCurrentPage',
        value: function setCurrentPage(page) {
            this.currentPage = page;
        }
    }, {
        key: 'setPerPage',
        value: function setPerPage(perPage) {
            this.perPage = perPage;
        }
    }, {
        key: 'setRecords',
        value: function setRecords(total) {
            this.records = total;
        }
    }, {
        key: 'range',
        value: function range(start, end) {
            var range = [];
            for (var i = start; i <= end; i++) {
                range.push(i);
            }
            return range;
        }
    }]);

    return Pagination;
}();

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "./resources/assets/js/components/Pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Pagination.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15c44b96\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Pagination.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15c44b96", Component.options)
  } else {
    hotAPI.reload("data-v-15c44b96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Rating.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Rating.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0124de19\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Rating.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Rating.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rating.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0124de19", Component.options)
  } else {
    hotAPI.reload("data-v-0124de19", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Search.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54979100\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Search.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54979100", Component.options)
  } else {
    hotAPI.reload("data-v-54979100", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL1JhdGluZy52dWUiLCJ3ZWJwYWNrOi8vL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWU/ODlhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/MmI0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWU/NjU1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwaS9wYWdpbmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWUiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInRvdGFsIiwicGVyUGFnZSIsImN1cnJlbnRQYWdlIiwicmVjb3JkcyIsInciLCJnZXQiLCJlbGVtZW50cyIsImZpcnN0IiwicGFnZXMiLCJBcnJheSIsImxhc3QiLCJjaHVuayIsImxhc3RQYWdlIiwiZ2V0U21hbGxQYWdlcyIsImdldFBhZ2VzIiwicmFuZ2UiLCJvbkVhY2hTaWRlIiwiaGFzUGFnZXMiLCJnZXRQYWdlc1Rvb0Nsb3NlVG9CZWdpbm5pbmciLCJnZXRQYWdlc1Rvb0Nsb3NlVG9FbmRpbmciLCJnZXRGdWxsUGFnZXMiLCJnZXRGaW5pc2giLCJnZXRTdGFydCIsImdldEFkamFjZW50UmFuZ2UiLCJNYXRoIiwiY2VpbCIsInBhZ2UiLCJzdGFydCIsImVuZCIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW9C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SztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7SUNsSk1BLFU7QUFDRiwwQkFBc0Q7QUFBQSxZQUExQ0MsS0FBMEMsdUVBQWxDLENBQWtDO0FBQUEsWUFBL0JDLE9BQStCLHVFQUFyQixFQUFxQjtBQUFBLFlBQWpCQyxXQUFpQix1RUFBSCxDQUFHOztBQUFBOztBQUNsRCxhQUFLQyxPQUFMLEdBQWVILEtBQWY7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxhQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOzs7O2lDQUVRO0FBQ0wsZ0JBQUlFLElBQUksS0FBS0MsR0FBTCxFQUFSO0FBQ0EsZ0JBQUlDLFdBQVcsQ0FDWEYsRUFBRUcsS0FEUyxFQUVYSCxFQUFFSSxLQUFGLFlBQW1CQyxLQUFuQixHQUEyQixLQUEzQixHQUFtQyxJQUZ4QixFQUdYTCxFQUFFSSxLQUhTLEVBSVhKLEVBQUVNLElBQUYsWUFBa0JELEtBQWxCLEdBQTBCLEtBQTFCLEdBQWtDLElBSnZCLEVBS1hMLEVBQUVNLElBTFMsQ0FBZjtBQU9BLG1CQUFPSixRQUFQO0FBQ0g7Ozs4QkFFSztBQUNGLGdCQUFJSyxRQUFRLENBQVo7QUFDQSxnQkFBSSxLQUFLQyxRQUFMLEtBQW1CRCxRQUFRLENBQVQsR0FBYyxDQUFwQyxFQUF1QztBQUNuQyx1QkFBTyxLQUFLRSxhQUFMLEVBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUtDLFFBQUwsQ0FBY0gsS0FBZCxDQUFQO0FBQ0g7Ozt3Q0FFZTtBQUNaLG1CQUFPO0FBQ0hKLHVCQUFPLEtBQUtRLEtBQUwsQ0FBVyxDQUFYLEVBQWMsS0FBS0gsUUFBTCxFQUFkLENBREo7QUFFSEosdUJBQU8sSUFGSjtBQUdIRSxzQkFBTTtBQUhILGFBQVA7QUFLSDs7O2lDQUVRTSxVLEVBQVk7QUFDakIsZ0JBQUlaLElBQUlZLGFBQWEsQ0FBckI7QUFDQSxnQkFBSSxDQUFDLEtBQUtDLFFBQUwsRUFBTCxFQUFzQjtBQUNsQix1QkFBTztBQUNIViwyQkFBTyxJQURKO0FBRUhDLDJCQUFPLElBRko7QUFHSEUsMEJBQU07QUFISCxpQkFBUDtBQUtIO0FBQ0QsZ0JBQUksS0FBS1IsV0FBTCxJQUFvQkUsQ0FBeEIsRUFBMkI7QUFDdkIsdUJBQU8sS0FBS2MsMkJBQUwsQ0FBaUNkLENBQWpDLENBQVA7QUFDSCxhQUZELE1BRU8sSUFBSSxLQUFLRixXQUFMLEdBQW9CLEtBQUtVLFFBQUwsS0FBa0JSLENBQTFDLEVBQThDO0FBQ2pELHVCQUFPLEtBQUtlLHdCQUFMLENBQThCZixDQUE5QixDQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFLZ0IsWUFBTCxDQUFrQkosVUFBbEIsQ0FBUDtBQUNIOzs7b0RBRTJCWixDLEVBQUc7QUFDM0IsbUJBQU87QUFDSEcsdUJBQU8sS0FBS1EsS0FBTCxDQUFXLENBQVgsRUFBY1gsSUFBSSxDQUFsQixDQURKO0FBRUhJLHVCQUFPLElBRko7QUFHSEUsc0JBQU0sS0FBS1csU0FBTDtBQUhILGFBQVA7QUFLSDs7O2lEQUV3QmpCLEMsRUFBRztBQUN4QixnQkFBSU0sT0FBTyxLQUFLSyxLQUFMLENBQVcsS0FBS0gsUUFBTCxNQUFtQlIsSUFBSSxDQUF2QixDQUFYLEVBQXNDLEtBQUtRLFFBQUwsRUFBdEMsQ0FBWDtBQUNBLG1CQUFPO0FBQ0hMLHVCQUFPLEtBQUtlLFFBQUwsRUFESjtBQUVIZCx1QkFBTyxJQUZKO0FBR0hFLHNCQUFNQTtBQUhILGFBQVA7QUFLSDs7O3FDQUVZTSxVLEVBQVk7QUFDckIsbUJBQU87QUFDSFQsdUJBQU8sS0FBS2UsUUFBTCxFQURKO0FBRUhkLHVCQUFPLEtBQUtlLGdCQUFMLENBQXNCUCxVQUF0QixDQUZKO0FBR0hOLHNCQUFNLEtBQUtXLFNBQUw7QUFISCxhQUFQO0FBS0g7Ozt5Q0FFZ0JMLFUsRUFBWTtBQUN6QixtQkFBTyxLQUFLRCxLQUFMLENBQVcsS0FBS2IsV0FBTCxHQUFtQmMsVUFBOUIsRUFBMEMsS0FBS2QsV0FBTCxHQUFtQmMsVUFBN0QsQ0FBUDtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBTyxLQUFLSixRQUFMLEtBQWtCLENBQXpCO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLEtBQUtHLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQO0FBQ0g7OztvQ0FFVztBQUNSLG1CQUFPLEtBQUtBLEtBQUwsQ0FBVyxLQUFLSCxRQUFMLEtBQWtCLENBQTdCLEVBQWdDLEtBQUtBLFFBQUwsRUFBaEMsQ0FBUDtBQUNIOzs7bUNBRVU7QUFDUCxtQkFBT1ksS0FBS0MsSUFBTCxDQUFVLEtBQUt0QixPQUFMLEdBQWUsS0FBS0YsT0FBOUIsQ0FBUDtBQUNIOzs7dUNBRWN5QixJLEVBQU07QUFDakIsaUJBQUt4QixXQUFMLEdBQW1Cd0IsSUFBbkI7QUFDSDs7O21DQUVVekIsTyxFQUFTO0FBQ2hCLGlCQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7O21DQUVVRCxLLEVBQU87QUFDZCxpQkFBS0csT0FBTCxHQUFlSCxLQUFmO0FBQ0g7Ozs4QkFFSzJCLEssRUFBT0MsRyxFQUFLO0FBQ2QsZ0JBQUliLFFBQVEsRUFBWjtBQUNBLGlCQUFLLElBQUljLElBQUlGLEtBQWIsRUFBb0JFLEtBQUtELEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUMvQmQsc0JBQU1lLElBQU4sQ0FBV0QsQ0FBWDtBQUNIO0FBQ0QsbUJBQU9kLEtBQVA7QUFDSDs7Ozs7O0FBR0wseURBQWVoQixVQUFmLEU7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0EsOFlBQXlQO0FBQ3pQO0FBQ0EsaVBBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSwwWUFBeVA7QUFDelA7QUFDQSw2T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLHFZQUF5UDtBQUN6UDtBQUNBLHdPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uXCI+XG5cdCAgXHQ8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG5cdCAgXHRcdDx0ZW1wbGF0ZSB2LWZvcj1cImVsZW1lbnQgaW4gZWxlbWVudHNcIj5cblx0ICBcdFx0XHQ8IS0tIFwiVGhyZWUgRG90c1wiIFNlcGFyYXRvciAtLT5cblx0ICAgICAgICAgICAgPGxpIHYtc2hvdz1cInR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1wiIGNsYXNzPVwicGFnZS1pdGVtIGRpc2FibGVkXCI+PHNwYW4gY2xhc3M9XCJwYWdlLWxpbmtcIj57eyBlbGVtZW50IH19PC9zcGFuPjwvbGk+XG5cblx0ICAgICAgICAgICAgPCEtLSBBcnJheSBPZiBMaW5rcyAtLT5cblx0ICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlcIj5cblx0ICAgICAgICAgICAgXHQ8bGkgdi1pZj1cImVsZW1lbnQubGVuZ3RoID4gMVwiIHYtZm9yPVwicGFnZSBpbiBlbGVtZW50XCIgOmNsYXNzPVwiWydwYWdlLWl0ZW0nLCB7ICdhY3RpdmUnOiBwYWdlID09IGN1cnJlbnRQYWdlfV1cIj5cblx0ICAgICAgICAgICAgXHRcdDxzcGFuIHYtaWY9XCJwYWdlID09IGN1cnJlbnRQYWdlXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj57eyBwYWdlIH19PC9zcGFuPlxuXHQgICAgICAgICAgICBcdFx0PGEgdi1lbHNlIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJzZXRQYWdlKHBhZ2UpXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj57eyBwYWdlIH19PC9hPlxuXHQgICAgICAgICAgICBcdDwvbGk+XG5cdCAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cdCAgXHRcdDwvdGVtcGxhdGU+XG5cdCAgXHQ8L3VsPlxuXHQ8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2FwaS9wYWdpbmF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHBhZ2luYXRpb246IG51bGxcblx0XHR9XG5cdH0sXG5cdHByb3BzOiB7XG5cdFx0Y3VycmVudFBhZ2U6IE51bWJlcixcblx0XHRwZXJQYWdlOiBOdW1iZXIsXG5cdFx0cmVjb3JkczogTnVtYmVyXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRxdWVyeTogJ3F1ZXJ5J1xuXHRcdH0pLFxuXHQgIFx0ZWxlbWVudHMoKSB7XG5cdCAgXHRcdHJldHVybiBuZXcgUGFnaW5hdGlvbih0aGlzLnJlY29yZHMsIHRoaXMucGVyUGFnZSwgdGhpcy5jdXJyZW50UGFnZSkucmVuZGVyKCk7XG5cdCAgXHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRzZXRQYWdlKHBhZ2UpIHtcblx0XHRcdGxldCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cdFx0XHRxdWVyeS5wYWdlID0gcGFnZTtcblxuXHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgcGFnZSwgcXVlcnkpO1xuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUGFnaW5hdGlvbi52dWU/NGYxZGI2NDUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm8tcmF0aW5nc1wiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKG4sIGluZGV4KSBpbiA1XCIgaHJlZj1cIiNcIiBjbGFzcz1cIm8tcmF0aW5nXCIgQG1vdXNlb3Zlcj1cImhvdmVyUmF0aW5nKGluZGV4KVwiIEBtb3VzZW91dD1cInVuaG92ZXJSYXRpbmcoaW5kZXgpXCIgQGNsaWNrLnByZXZlbnQ9XCJzZXRSYXRpbmcoaW5kZXgsIG4pXCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUzLjg2NyA1My44NjdcIj5cbiAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGNsYXNzPVwiaGFsZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cInllbGxvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUwJVwiIHN0b3AtY29sb3I9XCJncmV5XCIgc3RvcC1vcGFjaXR5PVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjI2LjkzNCwxLjMxOCAzNS4yNTYsMTguMTgyIDUzLjg2NywyMC44ODcgNDAuNCwzNC4wMTMgNDMuNTc5LDUyLjU0OSAyNi45MzQsNDMuNzk4IDEwLjI4OCw1Mi41NDkgMTMuNDY3LDM0LjAxMyAwLDIwLjg4NyAxOC42MTEsMTguMTgyIFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LXNob3c9XCJyYXRpbmcgIT09IDBcIiBjbGFzcz1cInJhdGluZy1zdGF0dXNcIj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyYXRpbmcgPT0gMVwiPlRlcnJpYmxlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInJhdGluZyA9PSAyXCI+UG9vcjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyYXRpbmcgPT0gM1wiPkF2ZXJhZ2U8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicmF0aW5nID09IDRcIj5WZXJ5IEdvb2Q8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicmF0aW5nID09IDVcIj5FeGNlbGxlbnQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWyd2ZW51ZS1pZCcsICd2YWx1ZScsICdtZXRob2QnXSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKCh0aGlzLnZhbHVlLTEpLCAnYWRkJywgJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDYwMCk7XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmF0aW5nOiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaG92ZXJSYXRpbmcoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWV0aG9kID09IFwicG9zdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpbmcgPSBpbmRleCsxO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKGluZGV4LCAnYWRkJywgJ2lzLWhvdmVyZWQnKVxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKCh0aGlzLnZhbHVlLTEpLCAncmVtb3ZlJywgJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVuaG92ZXJSYXRpbmcoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWV0aG9kID09IFwicG9zdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpbmcgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKGluZGV4LCAncmVtb3ZlJywgJ2lzLWhvdmVyZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZygodGhpcy52YWx1ZS0xKSwgJ2FkZCcsICdpcy1yYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRSYXRpbmcoaW5kZXgsIHBvcykge1xuICAgICAgICAgICAgaWYodGhpcy5tZXRob2QgPT0gXCJwb3N0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZyhpbmRleCwgJ3JlbW92ZScsICdpcy1yYXRlZCcpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZyhpbmRleCwgJ2FkZCcsICdpcy1yYXRlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmF0aW5nID0gcG9zO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlUmF0aW5nKGxlbmd0aCwgbWV0aG9kLCBjbGFzc05hbWUpe1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnLm8tcmF0aW5ncyAuby1yYXRpbmcnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0W21ldGhvZF0oY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSYXRpbmcudnVlPzM3NGQ3M2JlIiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiby1zZWN0aW9uIG8tc2VjdGlvbi0td2hpdGUgc2VjdGlvbi0tc2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLXNlYXJjaFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc2VhcmNoX19saXN0aW5nc1wiIHYtc2hvdz1cInZpZXdMaXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZmlsdGVyLS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeS1vdXRsaW5lZCBidXR0b24tLWljb24gIHB1bGwtcmlnaHRcIiBAY2xpY2s9XCJjbGlja1ZpZXdNYXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcC1vXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaSBpbiA5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkIGMtdmVudWUtY2FyZF9fcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3Bob3RvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19uYW1lXCI+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fZm9vdGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcmF0aW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsb2NhbC5saXN0aW5ncy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInUtbWIteDJcIj5SZWtvbWVuZGFzaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInZlbnVlIGluIGxvY2FsLmxpc3RpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvcGxhY2UvbC8nK3ZlbnVlLnNsdWdcIiA6aWQ9XCIndmVudWUtY2FyZC0nK3ZlbnVlLmlkXCIgY2xhc3M9XCJjLXZlbnVlLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3Bob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2ZW51ZS5jb3Zlcn0pYH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX25hbWUgby10eXBlLTE4XCI+e3sgdmVudWUubmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHJhdGluZyA6dmVudWUtaWQ9XCJ2ZW51ZS5pZFwiIDp2YWx1ZT1cInZlbnVlLnJhdGluZ1wiIG1ldGhvZD1cImdldFwiPjwvcmF0aW5nPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7eyB2ZW51ZS5jYXRlZ29yaWVzIHwgam9pbkJ5IH19IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZW51ZS5zaG9ydF9hZGRyZXNzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJnb29nbGUubGlzdGluZ3MubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ1LW1iLXgyXCI+VGVtcGF0IExhaW5ueWE8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ2ZW51ZSBpbiBnb29nbGVMaXN0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3BsYWNlL2cvJyt2ZW51ZS5pZFwiIDppZD1cIid2ZW51ZS1jYXJkLScrdmVudWUuaWRcIiBjbGFzcz1cImMtdmVudWUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3ZlbnVlLmNvdmVyfSlgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImMtdmVudWUtY2FyZF9fbmFtZSBvLXR5cGUtMThcIj57eyB2ZW51ZS5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fZm9vdGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cmF0aW5nIDp2ZW51ZS1pZD1cInZlbnVlLmlkXCIgOnZhbHVlPVwidmVudWUucmF0aW5nXCIgbWV0aG9kPVwiZ2V0XCI+PC9yYXRpbmc+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHt7IHZlbnVlLmNhdGVnb3JpZXMgfCBqb2luQnkgfX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlbnVlLnNob3J0X2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPk5vdCBGb3VuZC48L3A+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc2VhcmNoX19tYXBcIiB2LXNob3c9XCJ2aWV3TWFwc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItLXdyYXBwZXIgZmlsdGVyLS13cmFwcGVyX19tYXBzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeS1vdXRsaW5lZCBidXR0b24tLWljb24gIHB1bGwtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsaWNrVmlld0xpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIGNsYXNzPVwiby1tYXBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tPG1hcC12aWV3PjwvbWFwLXZpZXc+LS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge21hcEdldHRlcnMsIG1hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG4gICAgaW1wb3J0IE1hcCBmcm9tICcuLi9hcGkvbWFwJ1xuICAgIC8vaW1wb3J0IE1hcFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAudnVlJ1xuICAgIGltcG9ydCBSYXRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9SYXRpbmcudnVlJ1xuICAgIGltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtSYXRpbmcsIFBhZ2luYXRpb259LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgcGVyUGFnZTogMTgsXG4gICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzOiAxOCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNFbXB0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmlld0xpc3Rpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdmlld01hcHM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICAvLyBuZXdcbiAgICAgICAgICAgICAgICBsb2NhbDoge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3BhZ2VfdXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3M6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnb29nbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9wYWdlX3VybDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAgICAgICAgICdxdWVyeSdcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgZ29vZ2xlTGlzdGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29vZ2xlLmxpc3RpbmdzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoaXRlbS5jb3Zlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAvL3dpbmRvdy5kb2N1bWVudC50aXRsZSA9IFwiU2VhcmNoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy4kcm91dGUucXVlcnk7XG4vLyAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzZXRRdWVyeScsIHF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ2dvb2dsZS5saXN0aW5ncyc6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBNID0gbmV3IE1hcDtcblxuICAgICAgICAgICAgICAgIGlmIChNLm1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIE0uaW5pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTS5sb2FkTWFya2VyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmV0Y2hEYXRhIChxdWVyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KCcvYXBpL3NlYXJjaC9sb2NhbCcsIHF1ZXJ5LCAnbG9jYWwnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFrZVJlcXVlc3QoJy9hcGkvc2VhcmNoL2dvb2dsZS1wbGFjZXMvdGV4dCcsIHF1ZXJ5LCAnZ29vZ2xlJykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmxvY2FsLmxpc3RpbmdzLmxlbmd0aCA8PSAwKSAmJiAoZGF0YS5kYXRhLmxlbmd0aCA8PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFrZVJlcXVlc3QodXJsLCBxdWVyeSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgbGV0IFEgPSBzZXJpYWxpemUocXVlcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwgKyAnPycgKyBRKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdGFyZ2V0XS5saXN0aW5ncyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3RhcmdldF0ubmV4dF9wYWdlX3VybCA9IGRhdGEubmV4dF9wYWdlX3VybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2tWaWV3TWFwcyAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TWFwcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGlzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrVmlld0xpc3RpbmcgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01hcHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMaXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2UocGFnZSwgcXVlcnkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNlYXJjaC52dWU/NDAwYTU5ZDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXJhdGluZ3NcIlxuICB9LCBbX3ZtLl9sKCg1KSwgZnVuY3Rpb24obiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcmF0aW5nXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uaG92ZXJSYXRpbmcoaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIFwibW91c2VvdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVuaG92ZXJSYXRpbmcoaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnNldFJhdGluZyhpbmRleCwgbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3ZnJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1My44NjcgNTMuODY3XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RlZnMnLCBbX2MoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGFsZlwiXG4gICAgfSwgW19jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0b3AnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9mZnNldFwiOiBcIjUwJVwiLFxuICAgICAgICBcInN0b3AtY29sb3JcIjogXCJncmV5XCIsXG4gICAgICAgIFwic3RvcC1vcGFjaXR5XCI6IFwiMVwiXG4gICAgICB9XG4gICAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncG9seWdvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicG9pbnRzXCI6IFwiMjYuOTM0LDEuMzE4IDM1LjI1NiwxOC4xODIgNTMuODY3LDIwLjg4NyA0MC40LDM0LjAxMyA0My41NzksNTIuNTQ5IDI2LjkzNCw0My43OTggMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgXCJcbiAgICAgIH1cbiAgICB9KV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJhdGluZyAhPT0gMCksXG4gICAgICBleHByZXNzaW9uOiBcInJhdGluZyAhPT0gMFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicmF0aW5nLXN0YXR1c1wiXG4gIH0sIFsoX3ZtLnJhdGluZyA9PSAxKSA/IF9jKCdzcGFuJywgW192bS5fdihcIlRlcnJpYmxlXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gMikgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJQb29yXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gMykgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJBdmVyYWdlXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gNCkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJWZXJ5IEdvb2RcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJhdGluZyA9PSA1KSA/IF9jKCdzcGFuJywgW192bS5fdihcIkV4Y2VsbGVudFwiKV0pIDogX3ZtLl9lKCldKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAxMjRkZTE5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMTI0ZGUxOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAxMjRkZTE5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbmF2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJQYWdlIG5hdmlnYXRpb25cIlxuICAgIH1cbiAgfSwgW19jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCJcbiAgfSwgW192bS5fbCgoX3ZtLmVsZW1lbnRzKSwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBbX2MoJ2xpJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgIHZhbHVlOiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWl0ZW0gZGlzYWJsZWRcIlxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZWxlbWVudCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgPyBfdm0uX2woKGVsZW1lbnQpLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQubGVuZ3RoID4gMSkgPyBfYygnbGknLCB7XG4gICAgICAgIGNsYXNzOiBbJ3BhZ2UtaXRlbScsIHtcbiAgICAgICAgICAnYWN0aXZlJzogcGFnZSA9PSBfdm0uY3VycmVudFBhZ2VcbiAgICAgICAgfV1cbiAgICAgIH0sIFsocGFnZSA9PSBfdm0uY3VycmVudFBhZ2UpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiXG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhwYWdlKSldKSA6IF9jKCdhJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBfdm0uc2V0UGFnZShwYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW192bS5fdihfdm0uX3MocGFnZSkpXSldKSA6IF92bS5fZSgpXG4gICAgfSkgOiBfdm0uX2UoKV1cbiAgfSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE1YzQ0Yjk2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNWM0NGI5NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xNWM0NGI5NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLXdoaXRlIHNlY3Rpb24tLXNlYXJjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VhcmNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZpZXdMaXN0aW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlld0xpc3RpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VhcmNoX19saXN0aW5nc1wiXG4gIH0sIFsoX3ZtLmxvYWRpbmcpID8gW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkXCJcbiAgfSwgW192bS5fbCgoOSksIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIlxuICAgIH0sIFtfdm0uX20oMCwgdHJ1ZSldKV1cbiAgfSldLCAyKV0gOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5sb2NhbC5saXN0aW5ncy5sZW5ndGggPiAwKSA/IFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS1tYi14MlwiXG4gIH0sIFtfdm0uX3YoXCJSZWtvbWVuZGFzaVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIFtfdm0uX2woKF92bS5sb2NhbC5saXN0aW5ncyksIGZ1bmN0aW9uKHZlbnVlKSB7XG4gICAgcmV0dXJuIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiAnL3BsYWNlL2wvJyArIHZlbnVlLnNsdWcsXG4gICAgICAgIFwiaWRcIjogJ3ZlbnVlLWNhcmQtJyArIHZlbnVlLmlkXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3Bob3RvXCIsXG4gICAgICBzdHlsZTogKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAoXCJ1cmwoXCIgKyAodmVudWUuY292ZXIpICsgXCIpXCIpXG4gICAgICB9KVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19pbmZvXCJcbiAgICB9LCBbX2MoJ2g1Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19uYW1lIG8tdHlwZS0xOFwiXG4gICAgfSwgW192bS5fdihfdm0uX3ModmVudWUubmFtZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fZm9vdGVyXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCI1cHhcIlxuICAgICAgfVxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19yYXRpbmdcIlxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19jYXRlZ29yaWVzXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCI1cHhcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3ModmVudWUuc2hvcnRfYWRkcmVzcykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKV0gOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5nb29nbGUubGlzdGluZ3MubGVuZ3RoID4gMCkgPyBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtbWIteDJcIlxuICB9LCBbX3ZtLl92KFwiVGVtcGF0IExhaW5ueWFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIlxuICB9LCBbX3ZtLl9sKChfdm0uZ29vZ2xlTGlzdGluZ3MpLCBmdW5jdGlvbih2ZW51ZSkge1xuICAgIHJldHVybiBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJy9wbGFjZS9nLycgKyB2ZW51ZS5pZCxcbiAgICAgICAgXCJpZFwiOiAndmVudWUtY2FyZC0nICsgdmVudWUuaWRcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcGhvdG9cIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IChcInVybChcIiArICh2ZW51ZS5jb3ZlcikgKyBcIilcIilcbiAgICAgIH0pXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2luZm9cIlxuICAgIH0sIFtfYygnaDUnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX25hbWUgby10eXBlLTE4XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh2ZW51ZS5uYW1lKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19mb290ZXJcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh2ZW51ZS5zaG9ydF9hZGRyZXNzKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldXG4gIH0pXSwgMildIDogW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihcIk5vdCBGb3VuZC5cIildKV1dLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udmlld01hcHMpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ2aWV3TWFwc1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWFyY2hfX21hcFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbHRlci0td3JhcHBlciBmaWx0ZXItLXdyYXBwZXJfX21hcHNcIlxuICB9LCBbX2MoJ2RpdicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5LW91dGxpbmVkIGJ1dHRvbi0taWNvbiAgcHVsbC1yaWdodFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbGlja1ZpZXdMaXN0aW5nXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbGlzdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1tYXBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm1hcFwiXG4gICAgfVxuICB9KV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkIGMtdmVudWUtY2FyZF9fcGxhY2Vob2xkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3Bob3RvXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19pbmZvXCJcbiAgfSwgW19jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX25hbWVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fZm9vdGVyXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19jYXRlZ29yaWVzXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTQ5NzkxMDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU0OTc5MTAwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTU0OTc5MTAwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiLCJjbGFzcyBQYWdpbmF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0b3RhbCA9IDAsIHBlclBhZ2UgPSAxMCwgY3VycmVudFBhZ2UgPSAxKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IHRvdGFsO1xuICAgICAgICB0aGlzLnBlclBhZ2UgPSBwZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHcuZmlyc3QsXG4gICAgICAgICAgICB3LnBhZ2VzIGluc3RhbmNlb2YgQXJyYXkgPyAnLi4uJyA6IG51bGwsXG4gICAgICAgICAgICB3LnBhZ2VzLFxuICAgICAgICAgICAgdy5sYXN0IGluc3RhbmNlb2YgQXJyYXkgPyAnLi4uJyA6IG51bGwsXG4gICAgICAgICAgICB3Lmxhc3RcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgfVxuXG4gICAgZ2V0KCkge1xuICAgICAgICBsZXQgY2h1bmsgPSAzO1xuICAgICAgICBpZiAodGhpcy5sYXN0UGFnZSgpIDwgKGNodW5rICogMikgKyA2KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTbWFsbFBhZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZXMoY2h1bmspO1xuICAgIH1cblxuICAgIGdldFNtYWxsUGFnZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5yYW5nZSgxLCB0aGlzLmxhc3RQYWdlKCkpLFxuICAgICAgICAgICAgcGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXN0OiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UGFnZXMob25FYWNoU2lkZSkge1xuICAgICAgICBsZXQgdyA9IG9uRWFjaFNpZGUgKiAyO1xuICAgICAgICBpZiAoIXRoaXMuaGFzUGFnZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaXJzdDogbnVsbCxcbiAgICAgICAgICAgICAgICBwYWdlczogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0OiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPD0gdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZXNUb29DbG9zZVRvQmVnaW5uaW5nKHcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAodGhpcy5sYXN0UGFnZSgpIC0gdykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2VzVG9vQ2xvc2VUb0VuZGluZyh3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsUGFnZXMob25FYWNoU2lkZSk7XG4gICAgfVxuXG4gICAgZ2V0UGFnZXNUb29DbG9zZVRvQmVnaW5uaW5nKHcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLnJhbmdlKDEsIHcgKyAyKSxcbiAgICAgICAgICAgIHBhZ2VzOiBudWxsLFxuICAgICAgICAgICAgbGFzdDogdGhpcy5nZXRGaW5pc2goKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFBhZ2VzVG9vQ2xvc2VUb0VuZGluZyh3KSB7XG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5yYW5nZSh0aGlzLmxhc3RQYWdlKCkgLSAodyArIDIpLCB0aGlzLmxhc3RQYWdlKCkpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5nZXRTdGFydCgpLFxuICAgICAgICAgICAgcGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXN0OiBsYXN0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RnVsbFBhZ2VzKG9uRWFjaFNpZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLmdldFN0YXJ0KCksXG4gICAgICAgICAgICBwYWdlczogdGhpcy5nZXRBZGphY2VudFJhbmdlKG9uRWFjaFNpZGUpLFxuICAgICAgICAgICAgbGFzdDogdGhpcy5nZXRGaW5pc2goKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEFkamFjZW50UmFuZ2Uob25FYWNoU2lkZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSh0aGlzLmN1cnJlbnRQYWdlIC0gb25FYWNoU2lkZSwgdGhpcy5jdXJyZW50UGFnZSArIG9uRWFjaFNpZGUpO1xuICAgIH1cblxuICAgIGhhc1BhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSgpID4gMTtcbiAgICB9XG5cbiAgICBnZXRTdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoMSwgMik7XG4gICAgfVxuXG4gICAgZ2V0RmluaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSh0aGlzLmxhc3RQYWdlKCkgLSAxLCB0aGlzLmxhc3RQYWdlKCkpO1xuICAgIH1cblxuICAgIGxhc3RQYWdlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucmVjb3JkcyAvIHRoaXMucGVyUGFnZSk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICB9XG5cbiAgICBzZXRQZXJQYWdlKHBlclBhZ2UpIHtcbiAgICAgICAgdGhpcy5wZXJQYWdlID0gcGVyUGFnZTtcbiAgICB9XG5cbiAgICBzZXRSZWNvcmRzKHRvdGFsKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IHRvdGFsO1xuICAgIH1cblxuICAgIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBpL3BhZ2luYXRpb24vaW5kZXguanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNWM0NGI5NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQYWdpbmF0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNWM0NGI5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE1YzQ0Yjk2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JhdGluZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAxMjRkZTE5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JhdGluZy52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSYXRpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAxMjRkZTE5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDEyNGRlMTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEgMTQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NlYXJjaC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU0OTc5MTAwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1NlYXJjaC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU2VhcmNoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NDk3OTEwMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU0OTc5MTAwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiXSwic291cmNlUm9vdCI6IiJ9