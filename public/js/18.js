webpackJsonp([18],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Overview.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rate_vue__ = __webpack_require__("./resources/assets/js/components/Rate.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Rate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Star_vue__ = __webpack_require__("./resources/assets/js/objects/Star.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__objects_Star_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Rate: __WEBPACK_IMPORTED_MODULE_0__Rate_vue___default.a, OStar: __WEBPACK_IMPORTED_MODULE_1__objects_Star_vue___default.a },
    props: ['venueId', 'name', 'address', 'cover', 'logo', 'phone_number', 'categories', 'location', 'rating', 'ratings'],
    computed: {
        formatedCategories: function formatedCategories() {
            return _.map(this.categories, 'name').join(", ");
        },
        totalReviews: function totalReviews() {
            return _.sumBy(this.ratings);
        },
        directionLink: function directionLink() {
            return 'http://maps.google.com/maps?saddr=(' + this.location.lat + ', ' + this.location.lng + ')&daddr=My+location';
        }
    },
    methods: {
        getRating: function getRating(index) {
            return typeof this.ratings[index] !== 'undefined' ? this.ratings[index].rating : 0;
        },
        getReviews: function getReviews(index) {
            return typeof this.ratings[index] !== 'undefined' ? this.ratings[index].reviews : 0;
        },
        getRetingBarWidth: function getRetingBarWidth(index) {
            return typeof this.ratings[index] !== 'undefined' ? this.ratings[index].reviews / this.totalReviews * 100 + '%' : '0%';
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57cc42f5\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Overview.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-container--fluid o-container--reviews"
  }, [_c('div', {
    class: ['p-venue-detail__overview', {
      'has-no-logo': !_vm.logo
    }]
  }, [_c('div', {
    staticClass: "p-venue-detail__logo"
  }), _vm._v(" "), _c('div', {
    staticClass: "p-venue-detail__info"
  }, [_c('h1', {
    staticClass: "p-venue-detail__title o-type-35 u-mb-x2"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "c-rating-review-display c-rating-review-display__mobile"
  }, [_c('rate', {
    attrs: {
      "readonly": ""
    },
    model: {
      value: (_vm.rating),
      callback: function($$v) {
        _vm.rating = $$v
      },
      expression: "rating"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "p-venue-detail__list"
  }, [_vm._m(0), _vm._v(" "), _c('p', {
    staticClass: "p-venue-detail__address"
  }, [_vm._v("\n                    " + _vm._s(_vm.address) + "\n                    "), _c('a', {
    staticClass: "p-venue-detail__map-direction",
    attrs: {
      "href": _vm.directionLink,
      "target": "_blank"
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
      "d": "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })]), _vm._v("\n\n                         Get Direction\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "p-venue-detail__list"
  }, [_vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "p-venue-detail__address"
  }, [_vm._v("\n                    " + _vm._s(_vm.phone_number) + "\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "c-rating-review"
  }, [_c('div', {
    staticClass: "c-rating-review-display"
  }, [_c('span', {
    staticClass: "c-rating-review-display__number"
  }, [_vm._v(_vm._s(_vm.rating))]), _vm._v(" "), _c('rate', {
    attrs: {
      "readonly": ""
    },
    model: {
      value: (_vm.rating),
      callback: function($$v) {
        _vm.rating = $$v
      },
      expression: "rating"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "c-rating-review-display__text"
  }, [_vm._v(_vm._s(_vm.totalReviews) + " Ulasan")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "c-rating-review-list"
  }, _vm._l((_vm.ratings), function(i, index) {
    return _c('li', [_c('div', [_vm._v(_vm._s(5 - index) + " "), _c('o-star')], 1), _vm._v(" "), _c('div', {
      staticClass: "o-progress-bar__wrapper"
    }, [_c('div', {
      staticClass: "o-progress-bar"
    }, [_c('div', {
      staticClass: "o-progress-bar__value",
      style: ({
        width: _vm.getRetingBarWidth(i - 1)
      })
    })])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(i))])])
  }))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-venue-detail__address__icon"
  }, [_c('i', {
    staticClass: "fa fa-map-marker"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-venue-detail__address__icon"
  }, [_c('i', {
    staticClass: "fa fa-phone",
    attrs: {
      "aria-hidden": "true"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57cc42f5", module.exports)
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

/***/ "./resources/assets/js/components/Overview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Overview.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57cc42f5\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Overview.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Overview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Overview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57cc42f5", Component.options)
  } else {
    hotAPI.reload("data-v-57cc42f5", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vT3ZlcnZpZXcudnVlIiwid2VicGFjazovLy9SYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWU/YTcxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvT3ZlcnZpZXcudnVlPzQwYWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGUudnVlP2JkODEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9vYmplY3RzL1N0YXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFxRkE7QUFHQTs7QUFFQTsyRUFFQTsrR0FDQTs7MERBRUE7dURBQ0E7QUFDQTs4Q0FDQTtnQ0FDQTtBQUNBO2dEQUNBO29HQUNBO0FBRUE7QUFWQTs7NkNBWUE7NkZBQ0E7QUFDQTsrQ0FDQTs4RkFDQTtBQUNBOzZEQUNBO2tEQUNBLHNFQUNBLE1BQ0E7QUFFQTtBQVpBO0FBZEEsRzs7Ozs7Ozs7Ozs7OztBQzNFQTs7QUFFQTtrQkFHQTs7MEJBQ0E7OytCQUVBO3lCQUVBO0FBSEE7QUFLQTs7Ozs7a0JBR0E7cUJBRUE7QUFIQTs7a0JBS0E7cUJBRUE7QUFIQTs7a0JBS0E7cUJBRUE7QUFIQTs7a0JBS0E7cUJBRUE7QUFIQTs7a0JBS0E7cUJBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7b0VBQ0E7QUFFQTtBQUxBOztrQkFPQTtxQkFHQTtBQUpBO0FBM0JBOzs4QkFpQ0E7eUJBQ0E7K0JBQ0E7MkVBQ0E7bUJBQ0E7bUVBQ0E7QUFDQTttQkFDQTtBQUNBOzhDQUNBOytEQUNBO0FBQ0E7b0NBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd09BQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lci0tZmx1aWQgby1jb250YWluZXItLXJldmlld3NcIj5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ3AtdmVudWUtZGV0YWlsX19vdmVydmlldycsIHsnaGFzLW5vLWxvZ28nOiAhbG9nb31dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC12ZW51ZS1kZXRhaWxfX2xvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZlbnVlLWRldGFpbF9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInAtdmVudWUtZGV0YWlsX190aXRsZSBvLXR5cGUtMzUgdS1tYi14MlwiPnt7IG5hbWUgfX08L2gxPlxuICAgICAgICAgICAgICAgIDwhLS0gPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBwLXZlbnVlLWRldGFpbF9fY2F0ZWdvcmllc1wiPnt7IGZvcm1hdGVkQ2F0ZWdvcmllcyB9fTwvc21hbGw+IC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXJhdGluZy1yZXZpZXctZGlzcGxheSBjLXJhdGluZy1yZXZpZXctZGlzcGxheV9fbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJjLXJhdGluZy1yZXZpZXctZGlzcGxheV9fbnVtYmVyXCI+e3sgcmF0aW5nIH19PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHJhdGUgdi1tb2RlbD1cInJhdGluZ1wiIHJlYWRvbmx5PjwvcmF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cImMtcmF0aW5nLXJldmlldy1kaXNwbGF5X190ZXh0XCI+e3sgdG90YWxSZXZpZXdzIH19IFJldmlld3M8L3A+IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZlbnVlLWRldGFpbF9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC12ZW51ZS1kZXRhaWxfX2FkZHJlc3NfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC12ZW51ZS1kZXRhaWxfX2FkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGFkZHJlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZGlyZWN0aW9uTGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwicC12ZW51ZS1kZXRhaWxfX21hcC1kaXJlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMC41IDNsLS4xNi4wM0wxNSA1LjEgOSAzIDMuMzYgNC45Yy0uMjEuMDctLjM2LjI1LS4zNi40OFYyMC41YzAgLjI4LjIyLjUuNS41bC4xNi0uMDNMOSAxOC45bDYgMi4xIDUuNjQtMS45Yy4yMS0uMDcuMzYtLjI1LjM2LS40OFYzLjVjMC0uMjgtLjIyLS41LS41LS41ek0xNSAxOWwtNi0yLjExVjVsNiAyLjExVjE5elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXZlbnVlLWRldGFpbF9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC12ZW51ZS1kZXRhaWxfX2FkZHJlc3NfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGhvbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInAtdmVudWUtZGV0YWlsX19hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwaG9uZV9udW1iZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwLXZlbnVlLWRldGFpbF9fbGlzdFwiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInAtdmVudWUtZGV0YWlsX19hZGRyZXNzX19pY29uXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMS40MSAxNi4wOVYyMGgtMi42N3YtMS45M2MtMS43MS0uMzYtMy4xNi0xLjQ2LTMuMjctMy40aDEuOTZjLjEgMS4wNS44MiAxLjg3IDIuNjUgMS44NyAxLjk2IDAgMi40LS45OCAyLjQtMS41OSAwLS44My0uNDQtMS42MS0yLjY3LTIuMTQtMi40OC0uNi00LjE4LTEuNjItNC4xOC0zLjY3IDAtMS43MiAxLjM5LTIuODQgMy4xMS0zLjIxVjRoMi42N3YxLjk1YzEuODYuNDUgMi43OSAxLjg2IDIuODUgMy4zOUgxNC4zYy0uMDUtMS4xMS0uNjQtMS44Ny0yLjIyLTEuODctMS41IDAtMi40LjY4LTIuNCAxLjY0IDAgLjg0LjY1IDEuMzkgMi42NyAxLjkxczQuMTggMS4zOSA0LjE4IDMuOTFjLS4wMSAxLjgzLTEuMzggMi44My0zLjEyIDMuMTZ6XCIvPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvc3ZnPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08cCBjbGFzcz1cInAtdmVudWUtZGV0YWlsX19hZGRyZXNzXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tUnAgMTAuMDAwIC0gUnAgNTAuMDAwLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L3A+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwLXZlbnVlLWRldGFpbF9fbGlzdFwiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInAtdmVudWUtZGV0YWlsX19hZGRyZXNzX19pY29uXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08cCBjbGFzcz1cInAtdmVudWUtZGV0YWlsX19hZGRyZXNzXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tU2VuIC0gU2FiIDogMDA6MDAgLSAyNDowMC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9wPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cblxuXG4gICAgICAgICAgICAgICAgPCEtLSA8aHI+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1yYXRpbmctcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtcmF0aW5nLXJldmlldy1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYy1yYXRpbmctcmV2aWV3LWRpc3BsYXlfX251bWJlclwiPnt7IHJhdGluZyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHJhdGUgdi1tb2RlbD1cInJhdGluZ1wiIHJlYWRvbmx5PjwvcmF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjLXJhdGluZy1yZXZpZXctZGlzcGxheV9fdGV4dFwiPnt7IHRvdGFsUmV2aWV3cyB9fSBVbGFzYW48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYy1yYXRpbmctcmV2aWV3LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGksIGluZGV4KSBpbiByYXRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7IDUtaW5kZXggfX0gPG8tc3Rhcj48L28tc3Rhcj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXByb2dyZXNzLWJhcl9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1wcm9ncmVzcy1iYXJfX3ZhbHVlXCIgOnN0eWxlPVwieyB3aWR0aDogZ2V0UmV0aW5nQmFyV2lkdGgoaS0xKSB9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3sgaSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlLnZ1ZSdcbmltcG9ydCBPU3RhciBmcm9tICcuLi9vYmplY3RzL1N0YXIudnVlJ1xuXG4vLyBhc3luYyBjb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFJhdGUsIE9TdGFyIH0sXG4gICAgcHJvcHM6IFsndmVudWVJZCcsICduYW1lJywgJ2FkZHJlc3MnLCAnY292ZXInLCAnbG9nbycsICdwaG9uZV9udW1iZXInLCAnY2F0ZWdvcmllcycsICdsb2NhdGlvbicsICdyYXRpbmcnLCAncmF0aW5ncyddLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZvcm1hdGVkQ2F0ZWdvcmllcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfLm1hcCh0aGlzLmNhdGVnb3JpZXMsJ25hbWUnKS5qb2luKFwiLCBcIilcbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxSZXZpZXdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF8uc3VtQnkodGhpcy5yYXRpbmdzKVxuICAgICAgICB9LFxuICAgICAgICBkaXJlY3Rpb25MaW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcHM/c2FkZHI9KCR7dGhpcy5sb2NhdGlvbi5sYXR9LCAke3RoaXMubG9jYXRpb24ubG5nfSkmZGFkZHI9TXkrbG9jYXRpb25gXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UmF0aW5nKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLnJhdGluZ3NbaW5kZXhdICE9PSAndW5kZWZpbmVkJykgPyB0aGlzLnJhdGluZ3NbaW5kZXhdLnJhdGluZyA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmV2aWV3cyhpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5yYXRpbmdzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5yYXRpbmdzW2luZGV4XS5yZXZpZXdzIDogMFxuICAgICAgICB9LFxuICAgICAgICBnZXRSZXRpbmdCYXJXaWR0aChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5yYXRpbmdzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy5yYXRpbmdzW2luZGV4XS5yZXZpZXdzL3RoaXMudG90YWxSZXZpZXdzKSoxMDApKyclJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnMCUnXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBPdmVydmlldy52dWU/MWY0ZDM5YTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtcmF0ZVwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIG1heFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJbJ2MtcmF0ZV9faXRlbScsIGNsYXNzZXNbaXRlbS0xXSwgeyAnaXMtaG92ZXJlZCc6IGhvdmVySW5kZXggPT09IGl0ZW0gfV1cIlxuICAgICAgICAgICAgQG1vdXNlbW92ZT1cInNldEN1cnJlbnRWYWx1ZShpdGVtLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIEBtb3VzZWxlYXZlPVwicmVzZXRDdXJyZW50VmFsdWVcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0VmFsdWUoaXRlbSlcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyBjdXJzb3I6IHJlYWRvbmx5ID8gJ2F1dG8nIDogJ3BvaW50ZXInIH1cIj5cbiAgICAgICAgICAgIDxzdGFyPjwvc3Rhcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiB2LWlmPVwic2hvd1RleHRcIiBjbGFzcz1cImMtcmF0ZV9fdGV4dFwiPnt7IHRleHQgfX08L3NwYW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTdGFyIGZyb20gJy4uL29iamVjdHMvU3Rhci52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgU3RhciB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgaG92ZXJJbmRleDogLTFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93SGFsZjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dUZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHRzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsnVGVycmlibGUnLCAnUG9vcicsICdBdmVyYWdlJywgJ1ZlcnkgR29vZCcsICdFeGNlbGxlbnQnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dFRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICd7dmFsdWV9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGV4dCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50ZXh0VGVtcGxhdGUucmVwbGFjZSgvXFx7XFxzKnZhbHVlXFxzKlxcfS8sIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudGV4dHNbTWF0aC5jZWlsKHRoaXMuY3VycmVudFZhbHVlKSAtIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlRGVjaW1hbCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAqIDEwMCAtIE1hdGguZmxvb3IodGhpcy52YWx1ZSkgKiAxMDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0aHJlc2hvbGQgPSB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgaGFsZiA9IHRoaXMuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93SGFsZiAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPT0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgdGhyZXNob2xkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lzLXJhdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBoYWxmOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goWydjLXJhdGVfX2l0ZW0tLWhhbGYnLCAnaXMtcmF0ZWQnXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZSh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlckluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlckluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJhdGUudnVlPzNkODc2NjUyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzdmcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zdGFyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH1cbiAgfSwgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNNTEwLjkgMTk2LjZjLTIuNy04LjQtMTAtMTQuNi0xOC44LTE1LjhsLTE0OC43LTIxLjYgLTY2LjUtMTM0LjhjLTMuOS03LjktMTItMTMtMjAuOS0xMyAtOC45IDAtMTcgNS0yMC45IDEzTDE2OC42IDE1OS4xbC0xNDguNyAyMS42Yy04LjggMS4zLTE2LjEgNy40LTE4LjggMTUuOCAtMi43IDguNC0wLjUgMTcuNyA1LjkgMjMuOUwxMTQuNiAzMjUuMyA4OS4yIDQ3My40Yy0xLjUgOC43IDIuMSAxNy42IDkuMyAyMi44IDcuMiA1LjIgMTYuNyA1LjkgMjQuNSAxLjhMMjU2IDQyOGwxMzMgNjkuOWMzLjQgMS44IDcuMSAyLjcgMTAuOCAyLjcgMCAwIDAuMSAwIDAuMSAwIDEyLjggMCAyMy4yLTEwLjQgMjMuMi0yMy4zIDAtMS44LTAuMi0zLjUtMC42LTUuMmwtMjUuMi0xNDYuOEw1MDUgMjIwLjRDNTExLjMgMjE0LjIgNTEzLjYgMjA1IDUxMC45IDE5Ni42elwiXG4gICAgfVxuICB9KSwgX2MoJ3BhdGgnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zdGFyX19oYWxmXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0yMzUuMSAyNC40bC02Ni41IDEzNC44IC0xNDguNyAyMS42Yy04LjggMS4zLTE2LjEgNy40LTE4LjggMTUuOCAtMi43IDguNC0wLjUgMTcuNyA1LjkgMjMuOUwxMTQuNiAzMjUuMyA4OS4yIDQ3My40Yy0xLjUgOC43IDIuMSAxNy42IDkuMyAyMi44IDcuMiA1LjIgMTYuNyA1LjkgMjQuNSAxLjhMMjU2IDQyOFYxMS40QzI0Ny4xIDExLjQgMjM5IDE2LjQgMjM1LjEgMjQuNHpcIlxuICAgIH1cbiAgfSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xNDYyNDgxYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTQ2MjQ4MWFcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMTQ2MjQ4MWFcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyLS1mbHVpZCBvLWNvbnRhaW5lci0tcmV2aWV3c1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3AtdmVudWUtZGV0YWlsX19vdmVydmlldycsIHtcbiAgICAgICdoYXMtbm8tbG9nbyc6ICFfdm0ubG9nb1xuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtdmVudWUtZGV0YWlsX19sb2dvXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC12ZW51ZS1kZXRhaWxfX2luZm9cIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtdmVudWUtZGV0YWlsX190aXRsZSBvLXR5cGUtMzUgdS1tYi14MlwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJhdGluZy1yZXZpZXctZGlzcGxheSBjLXJhdGluZy1yZXZpZXctZGlzcGxheV9fbW9iaWxlXCJcbiAgfSwgW19jKCdyYXRlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJlYWRvbmx5XCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yYXRpbmcpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ucmF0aW5nID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJyYXRpbmdcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXZlbnVlLWRldGFpbF9fbGlzdFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtdmVudWUtZGV0YWlsX19hZGRyZXNzXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmFkZHJlc3MpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC12ZW51ZS1kZXRhaWxfX21hcC1kaXJlY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IF92bS5kaXJlY3Rpb25MaW5rLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBcIiMwMDAwMDBcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjRcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjI0XCIsXG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIH1cbiAgfSwgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMjAuNSAzbC0uMTYuMDNMMTUgNS4xIDkgMyAzLjM2IDQuOWMtLjIxLjA3LS4zNi4yNS0uMzYuNDhWMjAuNWMwIC4yOC4yMi41LjUuNWwuMTYtLjAzTDkgMTguOWw2IDIuMSA1LjY0LTEuOWMuMjEtLjA3LjM2LS4yNS4zNi0uNDhWMy41YzAtLjI4LS4yMi0uNS0uNS0uNXpNMTUgMTlsLTYtMi4xMVY1bDYgMi4xMVYxOXpcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMCAwaDI0djI0SDB6XCIsXG4gICAgICBcImZpbGxcIjogXCJub25lXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgRGlyZWN0aW9uXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicC12ZW51ZS1kZXRhaWxfX2xpc3RcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXZlbnVlLWRldGFpbF9fYWRkcmVzc1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5waG9uZV9udW1iZXIpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcmF0aW5nLXJldmlld1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcmF0aW5nLXJldmlldy1kaXNwbGF5XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcmF0aW5nLXJldmlldy1kaXNwbGF5X19udW1iZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmF0aW5nKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JhdGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVhZG9ubHlcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnJhdGluZyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5yYXRpbmcgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInJhdGluZ1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yYXRpbmctcmV2aWV3LWRpc3BsYXlfX3RleHRcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG90YWxSZXZpZXdzKSArIFwiIFVsYXNhblwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJhdGluZy1yZXZpZXctbGlzdFwiXG4gIH0sIF92bS5fbCgoX3ZtLnJhdGluZ3MpLCBmdW5jdGlvbihpLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCBbX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKDUgLSBpbmRleCkgKyBcIiBcIiksIF9jKCdvLXN0YXInKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1wcm9ncmVzcy1iYXJfX3dyYXBwZXJcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1wcm9ncmVzcy1iYXJcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1wcm9ncmVzcy1iYXJfX3ZhbHVlXCIsXG4gICAgICBzdHlsZTogKHtcbiAgICAgICAgd2lkdGg6IF92bS5nZXRSZXRpbmdCYXJXaWR0aChpIC0gMSlcbiAgICAgIH0pXG4gICAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoaSkpXSldKVxuICB9KSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtdmVudWUtZGV0YWlsX19hZGRyZXNzX19pY29uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1hcC1tYXJrZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXZlbnVlLWRldGFpbF9fYWRkcmVzc19faWNvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1waG9uZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTdjYzQyZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU3Y2M0MmY1XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01N2NjNDJmNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9PdmVydmlldy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcmF0ZVwiXG4gIH0sIFtfdm0uX2woKF92bS5tYXgpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgICAgY2xhc3M6IFsnYy1yYXRlX19pdGVtJywgX3ZtLmNsYXNzZXNbaXRlbSAtIDFdLCB7XG4gICAgICAgICdpcy1ob3ZlcmVkJzogX3ZtLmhvdmVySW5kZXggPT09IGl0ZW1cbiAgICAgIH1dLFxuICAgICAgc3R5bGU6ICh7XG4gICAgICAgIGN1cnNvcjogX3ZtLnJlYWRvbmx5ID8gJ2F1dG8nIDogJ3BvaW50ZXInXG4gICAgICB9KSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vtb3ZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5zZXRDdXJyZW50VmFsdWUoaXRlbSwgJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBcIm1vdXNlbGVhdmVcIjogX3ZtLnJlc2V0Q3VycmVudFZhbHVlLFxuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5zZWxlY3RWYWx1ZShpdGVtKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdzdGFyJyldLCAxKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93VGV4dCkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJhdGVfX3RleHRcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXSkgOiBfdm0uX2UoKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWFjYzAyZTQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hY2MwMmU0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1hY2MwMmU0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9PdmVydmlldy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU3Y2M0MmY1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL092ZXJ2aWV3LnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gT3ZlcnZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU3Y2M0MmY1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTdjYzQyZjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9PdmVydmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SYXRlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWNjMDJlNDhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmF0ZS52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUmF0ZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYWNjMDJlNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hY2MwMmU0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SYXRlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDE4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIG51bGwsXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE0NjI0ODFhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N0YXIudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFN0YXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE0NjI0ODFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTQ2MjQ4MWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvb2JqZWN0cy9TdGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL29iamVjdHMvU3Rhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyAxOCJdLCJzb3VyY2VSb290IjoiIn0=