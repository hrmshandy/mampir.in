webpackJsonp([7],{

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

            loadMoreIsLoading: false,

            local: {
                next_page_url: '',
                listings: []
            },
            google: {
                next_page_url: '',
                listings: []
            },
            gMap: ''
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])(['query'])),
    mounted: function mounted() {
        var query = this.$route.params.query;
        this.fetchData(query);

        this.gMap = new __WEBPACK_IMPORTED_MODULE_3__api_map__["a" /* default */]();
        if (this.gMap.map === undefined) {
            this.gMap.init();
        }
    },

    watch: {
        'local.listings': function localListings(value) {
            var _this = this;

            setTimeout(function () {
                _this.gMap.loadMarker(value);
            }, 1000);
        },
        'google.listings': function googleListings(value) {
            var _this2 = this;

            setTimeout(function () {
                _this2.gMap.loadMarker(value);
            }, 1000);
        }
    },
    methods: {
        fetchData: function fetchData(query) {
            var _this3 = this;

            this.loading = true;

            this.makeRequest('/api/search/local', { query: query }).then(function (data) {
                return _this3.setData(data, 'local');
            });

            this.makeRequest('/api/search/google-places/text', { query: query }).then(function (data) {
                _this3.setData(data, 'google');
                if (_this3.local.listings.length <= 0 && data.data.length <= 0) {
                    router.push('/404');
                }
            });
        },
        setData: function setData(data, target) {
            this[target].listings = data.data;
            this[target].next_page_url = data.next_page_url;
        },
        makeRequest: function makeRequest(url) {
            var _this4 = this;

            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var Q = serialize(query);
            if (!_.isEmpty(query)) {
                url += (url.includes("?") ? '&' : '?') + Q;
            }
            return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                axios.get(url).then(function (_ref) {
                    var data = _ref.data;

                    setTimeout(function () {
                        _this4.loading = false;
                    }, 1000);

                    resolve(data);
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
        },
        loadMore: function loadMore() {
            var _this5 = this;

            this.loadMoreIsLoading = true;
            this.makeRequest(this.google.next_page_url).then(function (data) {
                _this5.loadMoreIsLoading = false;
                _this5.google.listings = _this5.google.listings.concat(data.data);
                _this5.google.next_page_url = data.next_page_url;
            });
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
  })], 2), _vm._v(" "), _c('hr')] : _vm._e(), _vm._v(" "), (_vm.google.listings.length > 0) ? [(_vm.local.listings.length > 0) ? _c('h3', {
    staticClass: "u-mb-x2"
  }, [_vm._v("Tempat Lainnya")]) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "googleListings",
    staticClass: "o-grid"
  }, [_vm._l((_vm.google.listings), function(venue) {
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
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "u-text-center"
  }, [(_vm.google.next_page_url) ? _c('button', {
    staticClass: "o-button o-button--primary",
    attrs: {
      "disabled": _vm.loadMoreIsLoading
    },
    on: {
      "click": _vm.loadMore
    }
  }, [(_vm.loadMoreIsLoading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Load More")])]) : _c('p', [_vm._v("Tidak ada lagi tempat lainnya")])])] : _vm._e()], 2), _vm._v(" "), _c('div', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL1JhdGluZy52dWUiLCJ3ZWJwYWNrOi8vL1NlYXJjaC52dWU/ZWVhNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZT84OWFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT8yYjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZT82NTU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBpL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZSJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwidG90YWwiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJyZWNvcmRzIiwidyIsImdldCIsImVsZW1lbnRzIiwiZmlyc3QiLCJwYWdlcyIsIkFycmF5IiwibGFzdCIsImNodW5rIiwibGFzdFBhZ2UiLCJnZXRTbWFsbFBhZ2VzIiwiZ2V0UGFnZXMiLCJyYW5nZSIsIm9uRWFjaFNpZGUiLCJoYXNQYWdlcyIsImdldFBhZ2VzVG9vQ2xvc2VUb0JlZ2lubmluZyIsImdldFBhZ2VzVG9vQ2xvc2VUb0VuZGluZyIsImdldEZ1bGxQYWdlcyIsImdldEZpbmlzaCIsImdldFN0YXJ0IiwiZ2V0QWRqYWNlbnRSYW5nZSIsIk1hdGgiLCJjZWlsIiwicGFnZSIsInN0YXJ0IiwiZW5kIiwiaSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztJQzNKTUEsVTtBQUNGLDBCQUFzRDtBQUFBLFlBQTFDQyxLQUEwQyx1RUFBbEMsQ0FBa0M7QUFBQSxZQUEvQkMsT0FBK0IsdUVBQXJCLEVBQXFCO0FBQUEsWUFBakJDLFdBQWlCLHVFQUFILENBQUc7O0FBQUE7O0FBQ2xELGFBQUtDLE9BQUwsR0FBZUgsS0FBZjtBQUNBLGFBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGFBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0g7Ozs7aUNBRVE7QUFDTCxnQkFBSUUsSUFBSSxLQUFLQyxHQUFMLEVBQVI7QUFDQSxnQkFBSUMsV0FBVyxDQUNYRixFQUFFRyxLQURTLEVBRVhILEVBQUVJLEtBQUYsWUFBbUJDLEtBQW5CLEdBQTJCLEtBQTNCLEdBQW1DLElBRnhCLEVBR1hMLEVBQUVJLEtBSFMsRUFJWEosRUFBRU0sSUFBRixZQUFrQkQsS0FBbEIsR0FBMEIsS0FBMUIsR0FBa0MsSUFKdkIsRUFLWEwsRUFBRU0sSUFMUyxDQUFmO0FBT0EsbUJBQU9KLFFBQVA7QUFDSDs7OzhCQUVLO0FBQ0YsZ0JBQUlLLFFBQVEsQ0FBWjtBQUNBLGdCQUFJLEtBQUtDLFFBQUwsS0FBbUJELFFBQVEsQ0FBVCxHQUFjLENBQXBDLEVBQXVDO0FBQ25DLHVCQUFPLEtBQUtFLGFBQUwsRUFBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBS0MsUUFBTCxDQUFjSCxLQUFkLENBQVA7QUFDSDs7O3dDQUVlO0FBQ1osbUJBQU87QUFDSEosdUJBQU8sS0FBS1EsS0FBTCxDQUFXLENBQVgsRUFBYyxLQUFLSCxRQUFMLEVBQWQsQ0FESjtBQUVISix1QkFBTyxJQUZKO0FBR0hFLHNCQUFNO0FBSEgsYUFBUDtBQUtIOzs7aUNBRVFNLFUsRUFBWTtBQUNqQixnQkFBSVosSUFBSVksYUFBYSxDQUFyQjtBQUNBLGdCQUFJLENBQUMsS0FBS0MsUUFBTCxFQUFMLEVBQXNCO0FBQ2xCLHVCQUFPO0FBQ0hWLDJCQUFPLElBREo7QUFFSEMsMkJBQU8sSUFGSjtBQUdIRSwwQkFBTTtBQUhILGlCQUFQO0FBS0g7QUFDRCxnQkFBSSxLQUFLUixXQUFMLElBQW9CRSxDQUF4QixFQUEyQjtBQUN2Qix1QkFBTyxLQUFLYywyQkFBTCxDQUFpQ2QsQ0FBakMsQ0FBUDtBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUtGLFdBQUwsR0FBb0IsS0FBS1UsUUFBTCxLQUFrQlIsQ0FBMUMsRUFBOEM7QUFDakQsdUJBQU8sS0FBS2Usd0JBQUwsQ0FBOEJmLENBQTlCLENBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUtnQixZQUFMLENBQWtCSixVQUFsQixDQUFQO0FBQ0g7OztvREFFMkJaLEMsRUFBRztBQUMzQixtQkFBTztBQUNIRyx1QkFBTyxLQUFLUSxLQUFMLENBQVcsQ0FBWCxFQUFjWCxJQUFJLENBQWxCLENBREo7QUFFSEksdUJBQU8sSUFGSjtBQUdIRSxzQkFBTSxLQUFLVyxTQUFMO0FBSEgsYUFBUDtBQUtIOzs7aURBRXdCakIsQyxFQUFHO0FBQ3hCLGdCQUFJTSxPQUFPLEtBQUtLLEtBQUwsQ0FBVyxLQUFLSCxRQUFMLE1BQW1CUixJQUFJLENBQXZCLENBQVgsRUFBc0MsS0FBS1EsUUFBTCxFQUF0QyxDQUFYO0FBQ0EsbUJBQU87QUFDSEwsdUJBQU8sS0FBS2UsUUFBTCxFQURKO0FBRUhkLHVCQUFPLElBRko7QUFHSEUsc0JBQU1BO0FBSEgsYUFBUDtBQUtIOzs7cUNBRVlNLFUsRUFBWTtBQUNyQixtQkFBTztBQUNIVCx1QkFBTyxLQUFLZSxRQUFMLEVBREo7QUFFSGQsdUJBQU8sS0FBS2UsZ0JBQUwsQ0FBc0JQLFVBQXRCLENBRko7QUFHSE4sc0JBQU0sS0FBS1csU0FBTDtBQUhILGFBQVA7QUFLSDs7O3lDQUVnQkwsVSxFQUFZO0FBQ3pCLG1CQUFPLEtBQUtELEtBQUwsQ0FBVyxLQUFLYixXQUFMLEdBQW1CYyxVQUE5QixFQUEwQyxLQUFLZCxXQUFMLEdBQW1CYyxVQUE3RCxDQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLEtBQUtKLFFBQUwsS0FBa0IsQ0FBekI7QUFDSDs7O21DQUVVO0FBQ1AsbUJBQU8sS0FBS0csS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFkLENBQVA7QUFDSDs7O29DQUVXO0FBQ1IsbUJBQU8sS0FBS0EsS0FBTCxDQUFXLEtBQUtILFFBQUwsS0FBa0IsQ0FBN0IsRUFBZ0MsS0FBS0EsUUFBTCxFQUFoQyxDQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPWSxLQUFLQyxJQUFMLENBQVUsS0FBS3RCLE9BQUwsR0FBZSxLQUFLRixPQUE5QixDQUFQO0FBQ0g7Ozt1Q0FFY3lCLEksRUFBTTtBQUNqQixpQkFBS3hCLFdBQUwsR0FBbUJ3QixJQUFuQjtBQUNIOzs7bUNBRVV6QixPLEVBQVM7QUFDaEIsaUJBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIOzs7bUNBRVVELEssRUFBTztBQUNkLGlCQUFLRyxPQUFMLEdBQWVILEtBQWY7QUFDSDs7OzhCQUVLMkIsSyxFQUFPQyxHLEVBQUs7QUFDZCxnQkFBSWIsUUFBUSxFQUFaO0FBQ0EsaUJBQUssSUFBSWMsSUFBSUYsS0FBYixFQUFvQkUsS0FBS0QsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQy9CZCxzQkFBTWUsSUFBTixDQUFXRCxDQUFYO0FBQ0g7QUFDRCxtQkFBT2QsS0FBUDtBQUNIOzs7Ozs7QUFHTCx5REFBZWhCLFVBQWYsRTs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQSw4WUFBeVA7QUFDelA7QUFDQSxpUEFBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLDBZQUF5UDtBQUN6UDtBQUNBLDZPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0EscVlBQXlQO0FBQ3pQO0FBQ0Esd09BQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvblwiPlxuXHQgIFx0PHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuXHQgIFx0XHQ8dGVtcGxhdGUgdi1mb3I9XCJlbGVtZW50IGluIGVsZW1lbnRzXCI+XG5cdCAgXHRcdFx0PCEtLSBcIlRocmVlIERvdHNcIiBTZXBhcmF0b3IgLS0+XG5cdCAgICAgICAgICAgIDxsaSB2LXNob3c9XCJ0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcIiBjbGFzcz1cInBhZ2UtaXRlbSBkaXNhYmxlZFwiPjxzcGFuIGNsYXNzPVwicGFnZS1saW5rXCI+e3sgZWxlbWVudCB9fTwvc3Bhbj48L2xpPlxuXG5cdCAgICAgICAgICAgIDwhLS0gQXJyYXkgT2YgTGlua3MgLS0+XG5cdCAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5XCI+XG5cdCAgICAgICAgICAgIFx0PGxpIHYtaWY9XCJlbGVtZW50Lmxlbmd0aCA+IDFcIiB2LWZvcj1cInBhZ2UgaW4gZWxlbWVudFwiIDpjbGFzcz1cIlsncGFnZS1pdGVtJywgeyAnYWN0aXZlJzogcGFnZSA9PSBjdXJyZW50UGFnZX1dXCI+XG5cdCAgICAgICAgICAgIFx0XHQ8c3BhbiB2LWlmPVwicGFnZSA9PSBjdXJyZW50UGFnZVwiIGNsYXNzPVwicGFnZS1saW5rXCI+e3sgcGFnZSB9fTwvc3Bhbj5cblx0ICAgICAgICAgICAgXHRcdDxhIHYtZWxzZSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwic2V0UGFnZShwYWdlKVwiIGNsYXNzPVwicGFnZS1saW5rXCI+e3sgcGFnZSB9fTwvYT5cblx0ICAgICAgICAgICAgXHQ8L2xpPlxuXHQgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXHQgIFx0XHQ8L3RlbXBsYXRlPlxuXHQgIFx0PC91bD5cblx0PC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9hcGkvcGFnaW5hdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYWdpbmF0aW9uOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRwcm9wczoge1xuXHRcdGN1cnJlbnRQYWdlOiBOdW1iZXIsXG5cdFx0cGVyUGFnZTogTnVtYmVyLFxuXHRcdHJlY29yZHM6IE51bWJlclxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0cXVlcnk6ICdxdWVyeSdcblx0XHR9KSxcblx0ICBcdGVsZW1lbnRzKCkge1xuXHQgIFx0XHRyZXR1cm4gbmV3IFBhZ2luYXRpb24odGhpcy5yZWNvcmRzLCB0aGlzLnBlclBhZ2UsIHRoaXMuY3VycmVudFBhZ2UpLnJlbmRlcigpO1xuXHQgIFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c2V0UGFnZShwYWdlKSB7XG5cdFx0XHRsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXHRcdFx0cXVlcnkucGFnZSA9IHBhZ2U7XG5cblx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHBhZ2UsIHF1ZXJ5KTtcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFBhZ2luYXRpb24udnVlPzRmMWRiNjQ1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJvLXJhdGluZ3NcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihuLCBpbmRleCkgaW4gNVwiIGhyZWY9XCIjXCIgY2xhc3M9XCJvLXJhdGluZ1wiIEBtb3VzZW92ZXI9XCJob3ZlclJhdGluZyhpbmRleClcIiBAbW91c2VvdXQ9XCJ1bmhvdmVyUmF0aW5nKGluZGV4KVwiIEBjbGljay5wcmV2ZW50PVwic2V0UmF0aW5nKGluZGV4LCBuKVwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1My44NjcgNTMuODY3XCI+XG4gICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBjbGFzcz1cImhhbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUwJVwiIHN0b3AtY29sb3I9XCJ5ZWxsb3dcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1MCVcIiBzdG9wLWNvbG9yPVwiZ3JleVwiIHN0b3Atb3BhY2l0eT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIyNi45MzQsMS4zMTggMzUuMjU2LDE4LjE4MiA1My44NjcsMjAuODg3IDQwLjQsMzQuMDEzIDQzLjU3OSw1Mi41NDkgMjYuOTM0LDQzLjc5OCAxMC4yODgsNTIuNTQ5IDEzLjQ2NywzNC4wMTMgMCwyMC44ODcgMTguNjExLDE4LjE4MiBcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1zaG93PVwicmF0aW5nICE9PSAwXCIgY2xhc3M9XCJyYXRpbmctc3RhdHVzXCI+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicmF0aW5nID09IDFcIj5UZXJyaWJsZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyYXRpbmcgPT0gMlwiPlBvb3I8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicmF0aW5nID09IDNcIj5BdmVyYWdlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInJhdGluZyA9PSA0XCI+VmVyeSBHb29kPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInJhdGluZyA9PSA1XCI+RXhjZWxsZW50PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsndmVudWUtaWQnLCAndmFsdWUnLCAnbWV0aG9kJ10sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZygodGhpcy52YWx1ZS0xKSwgJ2FkZCcsICdpcy1yYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA2MDApO1xuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhdGluZzogMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhvdmVyUmF0aW5nKGluZGV4KSB7XG4gICAgICAgICAgICBpZih0aGlzLm1ldGhvZCA9PSBcInBvc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmF0aW5nID0gaW5kZXgrMTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZyhpbmRleCwgJ2FkZCcsICdpcy1ob3ZlcmVkJylcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZygodGhpcy52YWx1ZS0xKSwgJ3JlbW92ZScsICdpcy1yYXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1bmhvdmVyUmF0aW5nKGluZGV4KSB7XG4gICAgICAgICAgICBpZih0aGlzLm1ldGhvZCA9PSBcInBvc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmF0aW5nID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVJhdGluZyhpbmRleCwgJ3JlbW92ZScsICdpcy1ob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoKHRoaXMudmFsdWUtMSksICdhZGQnLCAnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0UmF0aW5nKGluZGV4LCBwb3MpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubWV0aG9kID09IFwicG9zdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoaW5kZXgsICdyZW1vdmUnLCAnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoaW5kZXgsICdhZGQnLCAnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdGluZyA9IHBvcztcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZVJhdGluZyhsZW5ndGgsIG1ldGhvZCwgY2xhc3NOYW1lKXtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vLXJhdGluZ3MgLm8tcmF0aW5nJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGl0ZW1zW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdFttZXRob2RdKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUmF0aW5nLnZ1ZT8zNzRkNzNiZSIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvbiBvLXNlY3Rpb24tLXdoaXRlIHNlY3Rpb24tLXNlYXJjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1zZWFyY2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXNlYXJjaF9fbGlzdGluZ3NcIiB2LXNob3c9XCJ2aWV3TGlzdGluZ1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZpbHRlci0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnktb3V0bGluZWQgYnV0dG9uLS1pY29uICBwdWxsLXJpZ2h0XCIgQGNsaWNrPVwiY2xpY2tWaWV3TWFwc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1tYXAtb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImkgaW4gOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZCBjLXZlbnVlLWNhcmRfX3BsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19waG90b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImMtdmVudWUtY2FyZF9fbmFtZVwiPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19jYXRlZ29yaWVzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9jYWwubGlzdGluZ3MubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ1LW1iLXgyXCI+UmVrb21lbmRhc2k8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ2ZW51ZSBpbiBsb2NhbC5saXN0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3BsYWNlL2wvJyt2ZW51ZS5zbHVnXCIgOmlkPVwiJ3ZlbnVlLWNhcmQtJyt2ZW51ZS5pZFwiIGNsYXNzPVwiYy12ZW51ZS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19waG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dmVudWUuY292ZXJ9KWB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19uYW1lIG8tdHlwZS0xOFwiPnt7IHZlbnVlLm5hbWUgfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19mb290ZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19yYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxyYXRpbmcgOnZlbnVlLWlkPVwidmVudWUuaWRcIiA6dmFsdWU9XCJ2ZW51ZS5yYXRpbmdcIiBtZXRob2Q9XCJnZXRcIj48L3JhdGluZz4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19jYXRlZ29yaWVzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3sgdmVudWUuY2F0ZWdvcmllcyB8IGpvaW5CeSB9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmVudWUuc2hvcnRfYWRkcmVzcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZ29vZ2xlLmxpc3RpbmdzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidS1tYi14MlwiIHYtaWY9XCJsb2NhbC5saXN0aW5ncy5sZW5ndGggPiAwXCI+VGVtcGF0IExhaW5ueWE8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkXCIgcmVmPVwiZ29vZ2xlTGlzdGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInZlbnVlIGluIGdvb2dsZS5saXN0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3BsYWNlL2cvJyt2ZW51ZS5pZFwiIDppZD1cIid2ZW51ZS1jYXJkLScrdmVudWUuaWRcIiBjbGFzcz1cImMtdmVudWUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3ZlbnVlLmNvdmVyfSlgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImMtdmVudWUtY2FyZF9fbmFtZSBvLXR5cGUtMThcIj57eyB2ZW51ZS5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fZm9vdGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cmF0aW5nIDp2ZW51ZS1pZD1cInZlbnVlLmlkXCIgOnZhbHVlPVwidmVudWUucmF0aW5nXCIgbWV0aG9kPVwiZ2V0XCI+PC9yYXRpbmc+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHt7IHZlbnVlLmNhdGVnb3JpZXMgfCBqb2luQnkgfX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlbnVlLnNob3J0X2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidS10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiZ29vZ2xlLm5leHRfcGFnZV91cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibG9hZE1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkTW9yZUlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsb2FkTW9yZUlzTG9hZGluZ1wiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPkxvYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1lbHNlPlRpZGFrIGFkYSBsYWdpIHRlbXBhdCBsYWlubnlhPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdGF0dXMgZWxlbWVudHMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwic2Nyb2xsZXItc3RhdHVzXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImluZmluaXRlLXNjcm9sbC1yZXF1ZXN0IGxvYWRlci1lbGxpcHNcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tLi4uLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHAgY2xhc3M9XCJpbmZpbml0ZS1zY3JvbGwtbGFzdFwiPkVuZCBvZiBjb250ZW50PC9wPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxwIGNsYXNzPVwiaW5maW5pdGUtc2Nyb2xsLWVycm9yXCI+Tm8gbW9yZSBwYWdlcyB0byBsb2FkPC9wPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBwYWdpbmF0aW9uIGhhcyBwYXRoIC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHAgY2xhc3M9XCJwYWdpbmF0aW9uXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJwYWdpbmF0aW9uX19uZXh0XCIgaHJlZj1cIlwiPk5leHQgcGFnZTwvYT4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvcD4tLT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPCEtLTx0ZW1wbGF0ZSB2LWVsc2U+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08cCBjbGFzcz1cInRleHQtY2VudGVyXCI+Tm90IEZvdW5kLjwvcD4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC90ZW1wbGF0ZT4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc2VhcmNoX19tYXBcIiB2LXNob3c9XCJ2aWV3TWFwc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItLXdyYXBwZXIgZmlsdGVyLS13cmFwcGVyX19tYXBzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeS1vdXRsaW5lZCBidXR0b24tLWljb24gIHB1bGwtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsaWNrVmlld0xpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIGNsYXNzPVwiby1tYXBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tPG1hcC12aWV3PjwvbWFwLXZpZXc+LS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge21hcEdldHRlcnMsIG1hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG4gICAgaW1wb3J0IE1hcCBmcm9tICcuLi9hcGkvbWFwJ1xuICAgIC8vaW1wb3J0IE1hcFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAudnVlJ1xuICAgIGltcG9ydCBSYXRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9SYXRpbmcudnVlJ1xuICAgIGltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtSYXRpbmcsIFBhZ2luYXRpb259LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgcGVyUGFnZTogMTgsXG4gICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzOiAxOCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNFbXB0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmlld0xpc3Rpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdmlld01hcHM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBsb2FkTW9yZUlzTG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICAvLyBuZXdcbiAgICAgICAgICAgICAgICBsb2NhbDoge1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3BhZ2VfdXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3M6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnb29nbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9wYWdlX3VybDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ01hcDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAgICAgICAgICdxdWVyeSdcbiAgICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuJHJvdXRlLnBhcmFtcy5xdWVyeTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcblxuICAgICAgICAgICAgdGhpcy5nTWFwID0gbmV3IE1hcDtcbiAgICAgICAgICAgIGlmICh0aGlzLmdNYXAubWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdNYXAuaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3RoaXMuaW5maW5pdGVTY3JvbGwoKTtcblxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ2xvY2FsLmxpc3RpbmdzJzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nTWFwLmxvYWRNYXJrZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdnb29nbGUubGlzdGluZ3MnOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdNYXAubG9hZE1hcmtlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZldGNoRGF0YSAocXVlcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCgnL2FwaS9zZWFyY2gvbG9jYWwnLCB7cXVlcnl9KS50aGVuKGRhdGEgPT4gdGhpcy5zZXREYXRhKGRhdGEsICdsb2NhbCcpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFrZVJlcXVlc3QoJy9hcGkvc2VhcmNoL2dvb2dsZS1wbGFjZXMvdGV4dCcsIHtxdWVyeX0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhLCAnZ29vZ2xlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5sb2NhbC5saXN0aW5ncy5sZW5ndGggPD0gMCkgJiYgKGRhdGEuZGF0YS5sZW5ndGggPD0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGFyZ2V0XS5saXN0aW5ncyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzW3RhcmdldF0ubmV4dF9wYWdlX3VybCA9IGRhdGEubmV4dF9wYWdlX3VybDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWtlUmVxdWVzdCh1cmwsIHF1ZXJ5ID0gJycpIHtcbiAgICAgICAgICAgICAgICBsZXQgUSA9IHNlcmlhbGl6ZShxdWVyeSk7XG4gICAgICAgICAgICAgICAgaWYoIV8uaXNFbXB0eShxdWVyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5jbHVkZXMoXCI/XCIpID8gJyYnIDogJz8nKSArIFE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2tWaWV3TWFwcyAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TWFwcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGlzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrVmlld0xpc3RpbmcgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01hcHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMaXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2UocGFnZSwgcXVlcnkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHF1ZXJ5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuZ29vZ2xlLm5leHRfcGFnZV91cmwpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb29nbGUubGlzdGluZ3MgPSB0aGlzLmdvb2dsZS5saXN0aW5ncy5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb29nbGUubmV4dF9wYWdlX3VybCA9IGRhdGEubmV4dF9wYWdlX3VybDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNlYXJjaC52dWU/MDVjOTYwYjYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXJhdGluZ3NcIlxuICB9LCBbX3ZtLl9sKCg1KSwgZnVuY3Rpb24obiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tcmF0aW5nXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uaG92ZXJSYXRpbmcoaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIFwibW91c2VvdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVuaG92ZXJSYXRpbmcoaW5kZXgpXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnNldFJhdGluZyhpbmRleCwgbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3ZnJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1My44NjcgNTMuODY3XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RlZnMnLCBbX2MoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaGFsZlwiXG4gICAgfSwgW19jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0b3AnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm9mZnNldFwiOiBcIjUwJVwiLFxuICAgICAgICBcInN0b3AtY29sb3JcIjogXCJncmV5XCIsXG4gICAgICAgIFwic3RvcC1vcGFjaXR5XCI6IFwiMVwiXG4gICAgICB9XG4gICAgfSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncG9seWdvbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicG9pbnRzXCI6IFwiMjYuOTM0LDEuMzE4IDM1LjI1NiwxOC4xODIgNTMuODY3LDIwLjg4NyA0MC40LDM0LjAxMyA0My41NzksNTIuNTQ5IDI2LjkzNCw0My43OTggMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgXCJcbiAgICAgIH1cbiAgICB9KV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJhdGluZyAhPT0gMCksXG4gICAgICBleHByZXNzaW9uOiBcInJhdGluZyAhPT0gMFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicmF0aW5nLXN0YXR1c1wiXG4gIH0sIFsoX3ZtLnJhdGluZyA9PSAxKSA/IF9jKCdzcGFuJywgW192bS5fdihcIlRlcnJpYmxlXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gMikgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJQb29yXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gMykgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJBdmVyYWdlXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gNCkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJWZXJ5IEdvb2RcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnJhdGluZyA9PSA1KSA/IF9jKCdzcGFuJywgW192bS5fdihcIkV4Y2VsbGVudFwiKV0pIDogX3ZtLl9lKCldKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAxMjRkZTE5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMTI0ZGUxOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAxMjRkZTE5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCduYXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlBhZ2UgbmF2aWdhdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIlxuICB9LCBbX3ZtLl9sKChfdm0uZWxlbWVudHMpLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIFtfYygnbGknLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgdmFsdWU6ICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpLFxuICAgICAgICBleHByZXNzaW9uOiBcInR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJ1wiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtaXRlbSBkaXNhYmxlZFwiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhlbGVtZW50KSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/IF92bS5fbCgoZWxlbWVudCksIGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5sZW5ndGggPiAxKSA/IF9jKCdsaScsIHtcbiAgICAgICAgY2xhc3M6IFsncGFnZS1pdGVtJywge1xuICAgICAgICAgICdhY3RpdmUnOiBwYWdlID09IF92bS5jdXJyZW50UGFnZVxuICAgICAgICB9XVxuICAgICAgfSwgWyhwYWdlID09IF92bS5jdXJyZW50UGFnZSkgPyBfYygnc3BhbicsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCJcbiAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHBhZ2UpKV0pIDogX2MoJ2EnLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF92bS5zZXRQYWdlKHBhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhwYWdlKSldKV0pIDogX3ZtLl9lKClcbiAgICB9KSA6IF92bS5fZSgpXVxuICB9KV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTVjNDRiOTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE1YzQ0Yjk2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTE1YzQ0Yjk2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXNlY3Rpb24gby1zZWN0aW9uLS13aGl0ZSBzZWN0aW9uLS1zZWFyY2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlYXJjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS52aWV3TGlzdGluZyksXG4gICAgICBleHByZXNzaW9uOiBcInZpZXdMaXN0aW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlYXJjaF9fbGlzdGluZ3NcIlxuICB9LCBbKF92bS5sb2FkaW5nKSA/IFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIFtfdm0uX2woKDkpLCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCJcbiAgICB9LCBbX3ZtLl9tKDAsIHRydWUpXSldXG4gIH0pXSwgMildIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubG9jYWwubGlzdGluZ3MubGVuZ3RoID4gMCkgPyBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtbWIteDJcIlxuICB9LCBbX3ZtLl92KFwiUmVrb21lbmRhc2lcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIlxuICB9LCBbX3ZtLl9sKChfdm0ubG9jYWwubGlzdGluZ3MpLCBmdW5jdGlvbih2ZW51ZSkge1xuICAgIHJldHVybiBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJy9wbGFjZS9sLycgKyB2ZW51ZS5zbHVnLFxuICAgICAgICBcImlkXCI6ICd2ZW51ZS1jYXJkLScgKyB2ZW51ZS5pZFxuICAgICAgfVxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19waG90b1wiLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogKFwidXJsKFwiICsgKHZlbnVlLmNvdmVyKSArIFwiKVwiKVxuICAgICAgfSlcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9faW5mb1wiXG4gICAgfSwgW19jKCdoNScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fbmFtZSBvLXR5cGUtMThcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHZlbnVlLm5hbWUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcmF0aW5nXCJcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHZlbnVlLnNob3J0X2FkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV1cbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyldIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZ29vZ2xlLmxpc3RpbmdzLmxlbmd0aCA+IDApID8gWyhfdm0ubG9jYWwubGlzdGluZ3MubGVuZ3RoID4gMCkgPyBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS1tYi14MlwiXG4gIH0sIFtfdm0uX3YoXCJUZW1wYXQgTGFpbm55YVwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImdvb2dsZUxpc3RpbmdzXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkXCJcbiAgfSwgW192bS5fbCgoX3ZtLmdvb2dsZS5saXN0aW5ncyksIGZ1bmN0aW9uKHZlbnVlKSB7XG4gICAgcmV0dXJuIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiAnL3BsYWNlL2cvJyArIHZlbnVlLmlkLFxuICAgICAgICBcImlkXCI6ICd2ZW51ZS1jYXJkLScgKyB2ZW51ZS5pZFxuICAgICAgfVxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19waG90b1wiLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogKFwidXJsKFwiICsgKHZlbnVlLmNvdmVyKSArIFwiKVwiKVxuICAgICAgfSlcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9faW5mb1wiXG4gICAgfSwgW19jKCdoNScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fbmFtZSBvLXR5cGUtMThcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHZlbnVlLm5hbWUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcmF0aW5nXCJcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHZlbnVlLnNob3J0X2FkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV1cbiAgfSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LXRleHQtY2VudGVyXCJcbiAgfSwgWyhfdm0uZ29vZ2xlLm5leHRfcGFnZV91cmwpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5sb2FkTW9yZUlzTG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmxvYWRNb3JlXG4gICAgfVxuICB9LCBbKF92bS5sb2FkTW9yZUlzTG9hZGluZykgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSkgOiBfYygnc3BhbicsIFtfdm0uX3YoXCJMb2FkIE1vcmVcIildKV0pIDogX2MoJ3AnLCBbX3ZtLl92KFwiVGlkYWsgYWRhIGxhZ2kgdGVtcGF0IGxhaW5ueWFcIildKV0pXSA6IF92bS5fZSgpXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZpZXdNYXBzKSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlld01hcHNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VhcmNoX19tYXBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWx0ZXItLXdyYXBwZXIgZmlsdGVyLS13cmFwcGVyX19tYXBzXCJcbiAgfSwgW19jKCdkaXYnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeS1vdXRsaW5lZCBidXR0b24tLWljb24gIHB1bGwtcmlnaHRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xpY2tWaWV3TGlzdGluZ1xuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxpc3RcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tbWFwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJtYXBcIlxuICAgIH1cbiAgfSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZCBjLXZlbnVlLWNhcmRfX3BsYWNlaG9sZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19waG90b1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9faW5mb1wiXG4gIH0sIFtfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19uYW1lXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi10b3BcIjogXCI1cHhcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19yYXRpbmdcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi10b3BcIjogXCI1cHhcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU0OTc5MTAwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NDk3OTEwMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01NDk3OTEwMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJjbGFzcyBQYWdpbmF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0b3RhbCA9IDAsIHBlclBhZ2UgPSAxMCwgY3VycmVudFBhZ2UgPSAxKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IHRvdGFsO1xuICAgICAgICB0aGlzLnBlclBhZ2UgPSBwZXJQYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHcuZmlyc3QsXG4gICAgICAgICAgICB3LnBhZ2VzIGluc3RhbmNlb2YgQXJyYXkgPyAnLi4uJyA6IG51bGwsXG4gICAgICAgICAgICB3LnBhZ2VzLFxuICAgICAgICAgICAgdy5sYXN0IGluc3RhbmNlb2YgQXJyYXkgPyAnLi4uJyA6IG51bGwsXG4gICAgICAgICAgICB3Lmxhc3RcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgfVxuXG4gICAgZ2V0KCkge1xuICAgICAgICBsZXQgY2h1bmsgPSAzO1xuICAgICAgICBpZiAodGhpcy5sYXN0UGFnZSgpIDwgKGNodW5rICogMikgKyA2KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTbWFsbFBhZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZXMoY2h1bmspO1xuICAgIH1cblxuICAgIGdldFNtYWxsUGFnZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5yYW5nZSgxLCB0aGlzLmxhc3RQYWdlKCkpLFxuICAgICAgICAgICAgcGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXN0OiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UGFnZXMob25FYWNoU2lkZSkge1xuICAgICAgICBsZXQgdyA9IG9uRWFjaFNpZGUgKiAyO1xuICAgICAgICBpZiAoIXRoaXMuaGFzUGFnZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaXJzdDogbnVsbCxcbiAgICAgICAgICAgICAgICBwYWdlczogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0OiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPD0gdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZXNUb29DbG9zZVRvQmVnaW5uaW5nKHcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAodGhpcy5sYXN0UGFnZSgpIC0gdykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2VzVG9vQ2xvc2VUb0VuZGluZyh3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsUGFnZXMob25FYWNoU2lkZSk7XG4gICAgfVxuXG4gICAgZ2V0UGFnZXNUb29DbG9zZVRvQmVnaW5uaW5nKHcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLnJhbmdlKDEsIHcgKyAyKSxcbiAgICAgICAgICAgIHBhZ2VzOiBudWxsLFxuICAgICAgICAgICAgbGFzdDogdGhpcy5nZXRGaW5pc2goKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFBhZ2VzVG9vQ2xvc2VUb0VuZGluZyh3KSB7XG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5yYW5nZSh0aGlzLmxhc3RQYWdlKCkgLSAodyArIDIpLCB0aGlzLmxhc3RQYWdlKCkpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5nZXRTdGFydCgpLFxuICAgICAgICAgICAgcGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXN0OiBsYXN0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RnVsbFBhZ2VzKG9uRWFjaFNpZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0OiB0aGlzLmdldFN0YXJ0KCksXG4gICAgICAgICAgICBwYWdlczogdGhpcy5nZXRBZGphY2VudFJhbmdlKG9uRWFjaFNpZGUpLFxuICAgICAgICAgICAgbGFzdDogdGhpcy5nZXRGaW5pc2goKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEFkamFjZW50UmFuZ2Uob25FYWNoU2lkZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSh0aGlzLmN1cnJlbnRQYWdlIC0gb25FYWNoU2lkZSwgdGhpcy5jdXJyZW50UGFnZSArIG9uRWFjaFNpZGUpO1xuICAgIH1cblxuICAgIGhhc1BhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0UGFnZSgpID4gMTtcbiAgICB9XG5cbiAgICBnZXRTdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UoMSwgMik7XG4gICAgfVxuXG4gICAgZ2V0RmluaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZSh0aGlzLmxhc3RQYWdlKCkgLSAxLCB0aGlzLmxhc3RQYWdlKCkpO1xuICAgIH1cblxuICAgIGxhc3RQYWdlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucmVjb3JkcyAvIHRoaXMucGVyUGFnZSk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICB9XG5cbiAgICBzZXRQZXJQYWdlKHBlclBhZ2UpIHtcbiAgICAgICAgdGhpcy5wZXJQYWdlID0gcGVyUGFnZTtcbiAgICB9XG5cbiAgICBzZXRSZWNvcmRzKHRvdGFsKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IHRvdGFsO1xuICAgIH1cblxuICAgIHJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBpL3BhZ2luYXRpb24vaW5kZXguanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNWM0NGI5NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQYWdpbmF0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNWM0NGI5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE1YzQ0Yjk2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDEyNGRlMTlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJhdGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDEyNGRlMTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMTI0ZGUxOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NDk3OTEwMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFNlYXJjaC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTQ5NzkxMDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01NDk3OTEwMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9