webpackJsonp([5],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL1JhdGluZy52dWUiLCJ3ZWJwYWNrOi8vL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGluZy52dWU/ODlhZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWU/MmI0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWU/NjU1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwaS9wYWdpbmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWUiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInRvdGFsIiwicGVyUGFnZSIsImN1cnJlbnRQYWdlIiwicmVjb3JkcyIsInciLCJnZXQiLCJlbGVtZW50cyIsImZpcnN0IiwicGFnZXMiLCJBcnJheSIsImxhc3QiLCJjaHVuayIsImxhc3RQYWdlIiwiZ2V0U21hbGxQYWdlcyIsImdldFBhZ2VzIiwicmFuZ2UiLCJvbkVhY2hTaWRlIiwiaGFzUGFnZXMiLCJnZXRQYWdlc1Rvb0Nsb3NlVG9CZWdpbm5pbmciLCJnZXRQYWdlc1Rvb0Nsb3NlVG9FbmRpbmciLCJnZXRGdWxsUGFnZXMiLCJnZXRGaW5pc2giLCJnZXRTdGFydCIsImdldEFkamFjZW50UmFuZ2UiLCJNYXRoIiwiY2VpbCIsInBhZ2UiLCJzdGFydCIsImVuZCIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW9C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QWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztB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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSwwWUFBeVA7QUFDelA7QUFDQSw2T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLHFZQUF5UDtBQUN6UDtBQUNBLHdPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb25cIj5cblx0ICBcdDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cblx0ICBcdFx0PHRlbXBsYXRlIHYtZm9yPVwiZWxlbWVudCBpbiBlbGVtZW50c1wiPlxuXHQgIFx0XHRcdDwhLS0gXCJUaHJlZSBEb3RzXCIgU2VwYXJhdG9yIC0tPlxuXHQgICAgICAgICAgICA8bGkgdi1zaG93PVwidHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnXCIgY2xhc3M9XCJwYWdlLWl0ZW0gZGlzYWJsZWRcIj48c3BhbiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7IGVsZW1lbnQgfX08L3NwYW4+PC9saT5cblxuXHQgICAgICAgICAgICA8IS0tIEFycmF5IE9mIExpbmtzIC0tPlxuXHQgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheVwiPlxuXHQgICAgICAgICAgICBcdDxsaSB2LWlmPVwiZWxlbWVudC5sZW5ndGggPiAxXCIgdi1mb3I9XCJwYWdlIGluIGVsZW1lbnRcIiA6Y2xhc3M9XCJbJ3BhZ2UtaXRlbScsIHsgJ2FjdGl2ZSc6IHBhZ2UgPT0gY3VycmVudFBhZ2V9XVwiPlxuXHQgICAgICAgICAgICBcdFx0PHNwYW4gdi1pZj1cInBhZ2UgPT0gY3VycmVudFBhZ2VcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7IHBhZ2UgfX08L3NwYW4+XG5cdCAgICAgICAgICAgIFx0XHQ8YSB2LWVsc2UgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInNldFBhZ2UocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7IHBhZ2UgfX08L2E+XG5cdCAgICAgICAgICAgIFx0PC9saT5cblx0ICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblx0ICBcdFx0PC90ZW1wbGF0ZT5cblx0ICBcdDwvdWw+XG5cdDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vYXBpL3BhZ2luYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFnaW5hdGlvbjogbnVsbFxuXHRcdH1cblx0fSxcblx0cHJvcHM6IHtcblx0XHRjdXJyZW50UGFnZTogTnVtYmVyLFxuXHRcdHBlclBhZ2U6IE51bWJlcixcblx0XHRyZWNvcmRzOiBOdW1iZXJcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdHF1ZXJ5OiAncXVlcnknXG5cdFx0fSksXG5cdCAgXHRlbGVtZW50cygpIHtcblx0ICBcdFx0cmV0dXJuIG5ldyBQYWdpbmF0aW9uKHRoaXMucmVjb3JkcywgdGhpcy5wZXJQYWdlLCB0aGlzLmN1cnJlbnRQYWdlKS5yZW5kZXIoKTtcblx0ICBcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHNldFBhZ2UocGFnZSkge1xuXHRcdFx0bGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcblx0XHRcdHF1ZXJ5LnBhZ2UgPSBwYWdlO1xuXG5cdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCBwYWdlLCBxdWVyeSk7XG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQYWdpbmF0aW9uLnZ1ZT80ZjFkYjY0NSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiby1yYXRpbmdzXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCIobiwgaW5kZXgpIGluIDVcIiBocmVmPVwiI1wiIGNsYXNzPVwiby1yYXRpbmdcIiBAbW91c2VvdmVyPVwiaG92ZXJSYXRpbmcoaW5kZXgpXCIgQG1vdXNlb3V0PVwidW5ob3ZlclJhdGluZyhpbmRleClcIiBAY2xpY2sucHJldmVudD1cInNldFJhdGluZyhpbmRleCwgbilcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTMuODY3IDUzLjg2N1wiPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgY2xhc3M9XCJoYWxmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1MCVcIiBzdG9wLWNvbG9yPVwieWVsbG93XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNTAlXCIgc3RvcC1jb2xvcj1cImdyZXlcIiBzdG9wLW9wYWNpdHk9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMjYuOTM0LDEuMzE4IDM1LjI1NiwxOC4xODIgNTMuODY3LDIwLjg4NyA0MC40LDM0LjAxMyA0My41NzksNTIuNTQ5IDI2LjkzNCw0My43OTggMTAuMjg4LDUyLjU0OSAxMy40NjcsMzQuMDEzIDAsMjAuODg3IDE4LjYxMSwxOC4xODIgXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtc2hvdz1cInJhdGluZyAhPT0gMFwiIGNsYXNzPVwicmF0aW5nLXN0YXR1c1wiPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInJhdGluZyA9PSAxXCI+VGVycmlibGU8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicmF0aW5nID09IDJcIj5Qb29yPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInJhdGluZyA9PSAzXCI+QXZlcmFnZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyYXRpbmcgPT0gNFwiPlZlcnkgR29vZDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJyYXRpbmcgPT0gNVwiPkV4Y2VsbGVudDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3ZlbnVlLWlkJywgJ3ZhbHVlJywgJ21ldGhvZCddLFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoKHRoaXMudmFsdWUtMSksICdhZGQnLCAnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNjAwKTtcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByYXRpbmc6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBob3ZlclJhdGluZyhpbmRleCkge1xuICAgICAgICAgICAgaWYodGhpcy5tZXRob2QgPT0gXCJwb3N0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdGluZyA9IGluZGV4KzE7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoaW5kZXgsICdhZGQnLCAnaXMtaG92ZXJlZCcpXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoKHRoaXMudmFsdWUtMSksICdyZW1vdmUnLCAnaXMtcmF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdW5ob3ZlclJhdGluZyhpbmRleCkge1xuICAgICAgICAgICAgaWYodGhpcy5tZXRob2QgPT0gXCJwb3N0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdGluZyA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVSYXRpbmcoaW5kZXgsICdyZW1vdmUnLCAnaXMtaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKCh0aGlzLnZhbHVlLTEpLCAnYWRkJywgJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFJhdGluZyhpbmRleCwgcG9zKSB7XG4gICAgICAgICAgICBpZih0aGlzLm1ldGhvZCA9PSBcInBvc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKGluZGV4LCAncmVtb3ZlJywgJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUmF0aW5nKGluZGV4LCAnYWRkJywgJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXRpbmcgPSBwb3M7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVSYXRpbmcobGVuZ3RoLCBtZXRob2QsIGNsYXNzTmFtZSl7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuby1yYXRpbmdzIC5vLXJhdGluZycpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpdGVtc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3RbbWV0aG9kXShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJhdGluZy52dWU/Mzc0ZDczYmUiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJvLXNlY3Rpb24gby1zZWN0aW9uLS13aGl0ZSBzZWN0aW9uLS1zZWFyY2hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtc2VhcmNoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zZWFyY2hfX2xpc3RpbmdzXCIgdi1zaG93PVwidmlld0xpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmaWx0ZXItLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5LW91dGxpbmVkIGJ1dHRvbi0taWNvbiAgcHVsbC1yaWdodFwiIEBjbGljaz1cImNsaWNrVmlld01hcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWFwLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpIGluIDlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmQgYy12ZW51ZS1jYXJkX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcGhvdG9cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX25hbWVcIj48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19mb290ZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy12ZW51ZS1jYXJkX19yYXRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImxvY2FsLmxpc3RpbmdzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidS1tYi14MlwiPlJla29tZW5kYXNpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwidmVudWUgaW4gbG9jYWwubGlzdGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9wbGFjZS9sLycrdmVudWUuc2x1Z1wiIDppZD1cIid2ZW51ZS1jYXJkLScrdmVudWUuaWRcIiBjbGFzcz1cImMtdmVudWUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3ZlbnVlLmNvdmVyfSlgfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImMtdmVudWUtY2FyZF9fbmFtZSBvLXR5cGUtMThcIj57eyB2ZW51ZS5uYW1lIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fZm9vdGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cmF0aW5nIDp2ZW51ZS1pZD1cInZlbnVlLmlkXCIgOnZhbHVlPVwidmVudWUucmF0aW5nXCIgbWV0aG9kPVwiZ2V0XCI+PC9yYXRpbmc+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdmVudWUtY2FyZF9fY2F0ZWdvcmllc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHt7IHZlbnVlLmNhdGVnb3JpZXMgfCBqb2luQnkgfX0gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZlbnVlLnNob3J0X2FkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImdvb2dsZS5saXN0aW5ncy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInUtbWIteDJcIiB2LWlmPVwibG9jYWwubGlzdGluZ3MubGVuZ3RoID4gMFwiPlRlbXBhdCBMYWlubnlhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiIHJlZj1cImdvb2dsZUxpc3RpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ2ZW51ZSBpbiBnb29nbGUubGlzdGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQGxnIHUtNi8xMkBzbSB1LTEyLzEyQHhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9wbGFjZS9nLycrdmVudWUuaWRcIiA6aWQ9XCIndmVudWUtY2FyZC0nK3ZlbnVlLmlkXCIgY2xhc3M9XCJjLXZlbnVlLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3Bob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2ZW51ZS5jb3Zlcn0pYH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX25hbWUgby10eXBlLTE4XCI+e3sgdmVudWUubmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2Zvb3RlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHJhdGluZyA6dmVudWUtaWQ9XCJ2ZW51ZS5pZFwiIDp2YWx1ZT1cInZlbnVlLnJhdGluZ1wiIG1ldGhvZD1cImdldFwiPjwvcmF0aW5nPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB7eyB2ZW51ZS5jYXRlZ29yaWVzIHwgam9pbkJ5IH19IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2ZW51ZS5zaG9ydF9hZGRyZXNzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInUtdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImdvb2dsZS5uZXh0X3BhZ2VfdXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImxvYWRNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwibG9hZE1vcmVJc0xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwibG9hZE1vcmVJc0xvYWRpbmdcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5Mb2FkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZWxzZT5UaWRhayBhZGEgbGFnaSB0ZW1wYXQgbGFpbm55YTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3RhdHVzIGVsZW1lbnRzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInNjcm9sbGVyLXN0YXR1c1wiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJpbmZpbml0ZS1zY3JvbGwtcmVxdWVzdCBsb2FkZXItZWxsaXBzXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS4uLi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxwIGNsYXNzPVwiaW5maW5pdGUtc2Nyb2xsLWxhc3RcIj5FbmQgb2YgY29udGVudDwvcD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cCBjbGFzcz1cImluZmluaXRlLXNjcm9sbC1lcnJvclwiPk5vIG1vcmUgcGFnZXMgdG8gbG9hZDwvcD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gcGFnaW5hdGlvbiBoYXMgcGF0aCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxwIGNsYXNzPVwicGFnaW5hdGlvblwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwicGFnaW5hdGlvbl9fbmV4dFwiIGhyZWY9XCJcIj5OZXh0IHBhZ2U8L2E+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L3A+LS0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS08dGVtcGxhdGUgdi1lbHNlPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPk5vdCBGb3VuZC48L3A+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvdGVtcGxhdGU+LS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXNlYXJjaF9fbWFwXCIgdi1zaG93PVwidmlld01hcHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLS13cmFwcGVyIGZpbHRlci0td3JhcHBlcl9fbWFwc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnktb3V0bGluZWQgYnV0dG9uLS1pY29uICBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbGlja1ZpZXdMaXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBjbGFzcz1cIm8tbWFwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLTxtYXAtdmlldz48L21hcC12aWV3Pi0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHttYXBHZXR0ZXJzLCBtYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCBNYXAgZnJvbSAnLi4vYXBpL21hcCdcbiAgICAvL2ltcG9ydCBNYXBWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTWFwLnZ1ZSdcbiAgICBpbXBvcnQgUmF0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZSdcbiAgICBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7UmF0aW5nLCBQYWdpbmF0aW9ufSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGlzdGluZ3M6IFtdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgICAgIHBlclBhZ2U6IDE4LFxuICAgICAgICAgICAgICAgIHRvdGFsUmVjb3JkczogMTgsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgIGlzRW1wdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZpZXdMaXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZXdNYXBzOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgbG9hZE1vcmVJc0xvYWRpbmc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgLy8gbmV3XG4gICAgICAgICAgICAgICAgbG9jYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9wYWdlX3VybDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfcGFnZV91cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsaXN0aW5nczogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdNYXA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcbiAgICAgICAgICAgICAgICAncXVlcnknXG4gICAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLiRyb3V0ZS5wYXJhbXMucXVlcnk7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YShxdWVyeSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ01hcCA9IG5ldyBNYXA7XG4gICAgICAgICAgICBpZiAodGhpcy5nTWFwLm1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nTWFwLmluaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy90aGlzLmluZmluaXRlU2Nyb2xsKCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdsb2NhbC5saXN0aW5ncyc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ01hcC5sb2FkTWFya2VyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZ29vZ2xlLmxpc3RpbmdzJzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nTWFwLmxvYWRNYXJrZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmZXRjaERhdGEgKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFrZVJlcXVlc3QoJy9hcGkvc2VhcmNoL2xvY2FsJywge3F1ZXJ5fSkudGhlbihkYXRhID0+IHRoaXMuc2V0RGF0YShkYXRhLCAnbG9jYWwnKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VSZXF1ZXN0KCcvYXBpL3NlYXJjaC9nb29nbGUtcGxhY2VzL3RleHQnLCB7cXVlcnl9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSwgJ2dvb2dsZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMubG9jYWwubGlzdGluZ3MubGVuZ3RoIDw9IDApICYmIChkYXRhLmRhdGEubGVuZ3RoIDw9IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0RGF0YShkYXRhLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzW3RhcmdldF0ubGlzdGluZ3MgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpc1t0YXJnZXRdLm5leHRfcGFnZV91cmwgPSBkYXRhLm5leHRfcGFnZV91cmw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFrZVJlcXVlc3QodXJsLCBxdWVyeSA9ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IFEgPSBzZXJpYWxpemUocXVlcnkpO1xuICAgICAgICAgICAgICAgIGlmKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluY2x1ZGVzKFwiP1wiKSA/ICcmJyA6ICc/JykgKyBRO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrVmlld01hcHMgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01hcHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0xpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGlja1ZpZXdMaXN0aW5nICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNYXBzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGlzdGluZyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UsIHF1ZXJ5KXtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YShxdWVyeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZE1vcmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZUlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCh0aGlzLmdvb2dsZS5uZXh0X3BhZ2VfdXJsKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZ2xlLmxpc3RpbmdzID0gdGhpcy5nb29nbGUubGlzdGluZ3MuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZ2xlLm5leHRfcGFnZV91cmwgPSBkYXRhLm5leHRfcGFnZV91cmw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTZWFyY2gudnVlPzA1Yzk2MGI2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1yYXRpbmdzXCJcbiAgfSwgW192bS5fbCgoNSksIGZ1bmN0aW9uKG4sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXJhdGluZ1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJtb3VzZW92ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmhvdmVyUmF0aW5nKGluZGV4KVxuICAgICAgICB9LFxuICAgICAgICBcIm1vdXNlb3V0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS51bmhvdmVyUmF0aW5nKGluZGV4KVxuICAgICAgICB9LFxuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZXRSYXRpbmcoaW5kZXgsIG4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ3N2ZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcInZpZXdCb3hcIjogXCIwIDAgNTMuODY3IDUzLjg2N1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdkZWZzJywgW19jKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImhhbGZcIlxuICAgIH0sIFtfYygnc3RvcCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwib2Zmc2V0XCI6IFwiNTAlXCIsXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiBcInllbGxvd1wiXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzdG9wJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCI1MCVcIixcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IFwiZ3JleVwiLFxuICAgICAgICBcInN0b3Atb3BhY2l0eVwiOiBcIjFcIlxuICAgICAgfVxuICAgIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BvbHlnb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInBvaW50c1wiOiBcIjI2LjkzNCwxLjMxOCAzNS4yNTYsMTguMTgyIDUzLjg2NywyMC44ODcgNDAuNCwzNC4wMTMgNDMuNTc5LDUyLjU0OSAyNi45MzQsNDMuNzk4IDEwLjI4OCw1Mi41NDkgMTMuNDY3LDM0LjAxMyAwLDIwLjg4NyAxOC42MTEsMTguMTgyIFwiXG4gICAgICB9XG4gICAgfSldKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yYXRpbmcgIT09IDApLFxuICAgICAgZXhwcmVzc2lvbjogXCJyYXRpbmcgIT09IDBcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJhdGluZy1zdGF0dXNcIlxuICB9LCBbKF92bS5yYXRpbmcgPT0gMSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJUZXJyaWJsZVwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucmF0aW5nID09IDIpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiUG9vclwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucmF0aW5nID09IDMpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiQXZlcmFnZVwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucmF0aW5nID09IDQpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiVmVyeSBHb29kXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5yYXRpbmcgPT0gNSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJFeGNlbGxlbnRcIildKSA6IF92bS5fZSgpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wMTI0ZGUxOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDEyNGRlMTlcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMTI0ZGUxOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbmF2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJQYWdlIG5hdmlnYXRpb25cIlxuICAgIH1cbiAgfSwgW19jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCJcbiAgfSwgW192bS5fbCgoX3ZtLmVsZW1lbnRzKSwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBbX2MoJ2xpJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgIHZhbHVlOiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZydcIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWl0ZW0gZGlzYWJsZWRcIlxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoZWxlbWVudCkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgPyBfdm0uX2woKGVsZW1lbnQpLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQubGVuZ3RoID4gMSkgPyBfYygnbGknLCB7XG4gICAgICAgIGNsYXNzOiBbJ3BhZ2UtaXRlbScsIHtcbiAgICAgICAgICAnYWN0aXZlJzogcGFnZSA9PSBfdm0uY3VycmVudFBhZ2VcbiAgICAgICAgfV1cbiAgICAgIH0sIFsocGFnZSA9PSBfdm0uY3VycmVudFBhZ2UpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiXG4gICAgICB9LCBbX3ZtLl92KF92bS5fcyhwYWdlKSldKSA6IF9jKCdhJywge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBfdm0uc2V0UGFnZShwYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgW192bS5fdihfdm0uX3MocGFnZSkpXSldKSA6IF92bS5fZSgpXG4gICAgfSkgOiBfdm0uX2UoKV1cbiAgfSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTE1YzQ0Yjk2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNWM0NGI5NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xNWM0NGI5NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zZWN0aW9uIG8tc2VjdGlvbi0td2hpdGUgc2VjdGlvbi0tc2VhcmNoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWFyY2hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udmlld0xpc3RpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ2aWV3TGlzdGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicC1zZWFyY2hfX2xpc3RpbmdzXCJcbiAgfSwgWyhfdm0ubG9hZGluZykgPyBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIlxuICB9LCBbX3ZtLl9sKCg5KSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiXG4gICAgfSwgW192bS5fbSgwLCB0cnVlKV0pXVxuICB9KV0sIDIpXSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmxvY2FsLmxpc3RpbmdzLmxlbmd0aCA+IDApID8gW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LW1iLXgyXCJcbiAgfSwgW192bS5fdihcIlJla29tZW5kYXNpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkXCJcbiAgfSwgW192bS5fbCgoX3ZtLmxvY2FsLmxpc3RpbmdzKSwgZnVuY3Rpb24odmVudWUpIHtcbiAgICByZXR1cm4gW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJAbGcgdS02LzEyQHNtIHUtMTIvMTJAeHNcIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6ICcvcGxhY2UvbC8nICsgdmVudWUuc2x1ZyxcbiAgICAgICAgXCJpZFwiOiAndmVudWUtY2FyZC0nICsgdmVudWUuaWRcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcGhvdG9cIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IChcInVybChcIiArICh2ZW51ZS5jb3ZlcikgKyBcIilcIilcbiAgICAgIH0pXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2luZm9cIlxuICAgIH0sIFtfYygnaDUnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX25hbWUgby10eXBlLTE4XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh2ZW51ZS5uYW1lKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19mb290ZXJcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh2ZW51ZS5zaG9ydF9hZGRyZXNzKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdocicpXSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmdvb2dsZS5saXN0aW5ncy5sZW5ndGggPiAwKSA/IFsoX3ZtLmxvY2FsLmxpc3RpbmdzLmxlbmd0aCA+IDApID8gX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtbWIteDJcIlxuICB9LCBbX3ZtLl92KFwiVGVtcGF0IExhaW5ueWFcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHJlZjogXCJnb29nbGVMaXN0aW5nc1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIFtfdm0uX2woKF92bS5nb29nbGUubGlzdGluZ3MpLCBmdW5jdGlvbih2ZW51ZSkge1xuICAgIHJldHVybiBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZyB1LTYvMTJAc20gdS0xMi8xMkB4c1wiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogJy9wbGFjZS9nLycgKyB2ZW51ZS5pZCxcbiAgICAgICAgXCJpZFwiOiAndmVudWUtY2FyZC0nICsgdmVudWUuaWRcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcGhvdG9cIixcbiAgICAgIHN0eWxlOiAoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IChcInVybChcIiArICh2ZW51ZS5jb3ZlcikgKyBcIilcIilcbiAgICAgIH0pXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2luZm9cIlxuICAgIH0sIFtfYygnaDUnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX25hbWUgby10eXBlLTE4XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh2ZW51ZS5uYW1lKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19mb290ZXJcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX3JhdGluZ1wiXG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjVweFwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh2ZW51ZS5zaG9ydF9hZGRyZXNzKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS10ZXh0LWNlbnRlclwiXG4gIH0sIFsoX3ZtLmdvb2dsZS5uZXh0X3BhZ2VfdXJsKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubG9hZE1vcmVJc0xvYWRpbmdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5sb2FkTW9yZVxuICAgIH1cbiAgfSwgWyhfdm0ubG9hZE1vcmVJc0xvYWRpbmcpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTG9hZCBNb3JlXCIpXSldKSA6IF9jKCdwJywgW192bS5fdihcIlRpZGFrIGFkYSBsYWdpIHRlbXBhdCBsYWlubnlhXCIpXSldKV0gOiBfdm0uX2UoKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS52aWV3TWFwcyksXG4gICAgICBleHByZXNzaW9uOiBcInZpZXdNYXBzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlYXJjaF9fbWFwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLS13cmFwcGVyIGZpbHRlci0td3JhcHBlcl9fbWFwc1wiXG4gIH0sIFtfYygnZGl2JyksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnktb3V0bGluZWQgYnV0dG9uLS1pY29uICBwdWxsLXJpZ2h0XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsaWNrVmlld0xpc3RpbmdcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1saXN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLW1hcFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibWFwXCJcbiAgICB9XG4gIH0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmQgYy12ZW51ZS1jYXJkX19wbGFjZWhvbGRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcGhvdG9cIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2luZm9cIlxuICB9LCBbX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fbmFtZVwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy12ZW51ZS1jYXJkX19mb290ZXJcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdmVudWUtY2FyZF9fcmF0aW5nXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXZlbnVlLWNhcmRfX2NhdGVnb3JpZXNcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NDk3OTEwMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTQ5NzkxMDBcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNTQ5NzkxMDBcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiY2xhc3MgUGFnaW5hdGlvbiB7XG4gICAgY29uc3RydWN0b3IodG90YWwgPSAwLCBwZXJQYWdlID0gMTAsIGN1cnJlbnRQYWdlID0gMSkge1xuICAgICAgICB0aGlzLnJlY29yZHMgPSB0b3RhbDtcbiAgICAgICAgdGhpcy5wZXJQYWdlID0gcGVyUGFnZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHcgPSB0aGlzLmdldCgpO1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICB3LmZpcnN0LFxuICAgICAgICAgICAgdy5wYWdlcyBpbnN0YW5jZW9mIEFycmF5ID8gJy4uLicgOiBudWxsLFxuICAgICAgICAgICAgdy5wYWdlcyxcbiAgICAgICAgICAgIHcubGFzdCBpbnN0YW5jZW9mIEFycmF5ID8gJy4uLicgOiBudWxsLFxuICAgICAgICAgICAgdy5sYXN0XG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgIH1cblxuICAgIGdldCgpIHtcbiAgICAgICAgbGV0IGNodW5rID0gMztcbiAgICAgICAgaWYgKHRoaXMubGFzdFBhZ2UoKSA8IChjaHVuayAqIDIpICsgNikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U21hbGxQYWdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2VzKGNodW5rKTtcbiAgICB9XG5cbiAgICBnZXRTbWFsbFBhZ2VzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3Q6IHRoaXMucmFuZ2UoMSwgdGhpcy5sYXN0UGFnZSgpKSxcbiAgICAgICAgICAgIHBhZ2VzOiBudWxsLFxuICAgICAgICAgICAgbGFzdDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFBhZ2VzKG9uRWFjaFNpZGUpIHtcbiAgICAgICAgbGV0IHcgPSBvbkVhY2hTaWRlICogMjtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1BhZ2VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlyc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFnZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDw9IHcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2VzVG9vQ2xvc2VUb0JlZ2lubmluZyh3KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gKHRoaXMubGFzdFBhZ2UoKSAtIHcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYWdlc1Rvb0Nsb3NlVG9FbmRpbmcodyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVsbFBhZ2VzKG9uRWFjaFNpZGUpO1xuICAgIH1cblxuICAgIGdldFBhZ2VzVG9vQ2xvc2VUb0JlZ2lubmluZyh3KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5yYW5nZSgxLCB3ICsgMiksXG4gICAgICAgICAgICBwYWdlczogbnVsbCxcbiAgICAgICAgICAgIGxhc3Q6IHRoaXMuZ2V0RmluaXNoKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRQYWdlc1Rvb0Nsb3NlVG9FbmRpbmcodykge1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMucmFuZ2UodGhpcy5sYXN0UGFnZSgpIC0gKHcgKyAyKSwgdGhpcy5sYXN0UGFnZSgpKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3Q6IHRoaXMuZ2V0U3RhcnQoKSxcbiAgICAgICAgICAgIHBhZ2VzOiBudWxsLFxuICAgICAgICAgICAgbGFzdDogbGFzdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEZ1bGxQYWdlcyhvbkVhY2hTaWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5nZXRTdGFydCgpLFxuICAgICAgICAgICAgcGFnZXM6IHRoaXMuZ2V0QWRqYWNlbnRSYW5nZShvbkVhY2hTaWRlKSxcbiAgICAgICAgICAgIGxhc3Q6IHRoaXMuZ2V0RmluaXNoKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRBZGphY2VudFJhbmdlKG9uRWFjaFNpZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UodGhpcy5jdXJyZW50UGFnZSAtIG9uRWFjaFNpZGUsIHRoaXMuY3VycmVudFBhZ2UgKyBvbkVhY2hTaWRlKTtcbiAgICB9XG5cbiAgICBoYXNQYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFBhZ2UoKSA+IDE7XG4gICAgfVxuXG4gICAgZ2V0U3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmdlKDEsIDIpO1xuICAgIH1cblxuICAgIGdldEZpbmlzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UodGhpcy5sYXN0UGFnZSgpIC0gMSwgdGhpcy5sYXN0UGFnZSgpKTtcbiAgICB9XG5cbiAgICBsYXN0UGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlY29yZHMgLyB0aGlzLnBlclBhZ2UpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfVxuXG4gICAgc2V0UGVyUGFnZShwZXJQYWdlKSB7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgfVxuXG4gICAgc2V0UmVjb3Jkcyh0b3RhbCkge1xuICAgICAgICB0aGlzLnJlY29yZHMgPSB0b3RhbDtcbiAgICB9XG5cbiAgICByYW5nZShzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwaS9wYWdpbmF0aW9uL2luZGV4LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTVjNDRiOTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUGFnaW5hdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTVjNDRiOTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNWM0NGI5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JhdGluZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAxMjRkZTE5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JhdGluZy52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSYXRpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAxMjRkZTE5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDEyNGRlMTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2VhcmNoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTQ5NzkxMDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2VhcmNoLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZWFyY2gudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTZWFyY2gudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU0OTc5MTAwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTQ5NzkxMDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==