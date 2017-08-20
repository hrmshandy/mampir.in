webpackJsonp([18],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/StepTab.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        active: { required: true }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration3.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StepTab_vue__ = __webpack_require__("./resources/assets/js/components/StepTab.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StepTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_StepTab_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Step: __WEBPACK_IMPORTED_MODULE_0__components_StepTab_vue___default.a },
    data: function data() {
        return {
            columnTimes: [{
                from: '',
                to: ''
            }]
        };
    },


    methods: {
        addField: function addField() {
            this.columnTimes.push({
                from: '',
                to: ''
            });
        },
        removeField: function removeField(index) {
            this.columnTimes.splice(index, 1);
        }
    }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48135643\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration3.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "merchant-registration o-section"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('step', {
    attrs: {
      "active": "3"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "o-heading u-m-x3"
  }, [_vm._v("\n            Karakteristik Merchant\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "tab-1"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    attrs: {
      "id": "column-time"
    }
  }, _vm._l((_vm.columnTimes), function(columnTime, index) {
    return _c('div', {
      staticClass: "append o-grid c-form-group"
    }, [_c('div', {
      staticClass: "o-grid__col u-4/12@lg"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (columnTime.from),
        expression: "columnTime.from"
      }],
      staticClass: "o-input o-input--large",
      attrs: {
        "name": "",
        "id": ""
      },
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          columnTime.from = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Dari")])])]), _vm._v(" "), _c('div', {
      staticClass: "o-grid__col u-4/12@lg"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (columnTime.to),
        expression: "columnTime.to"
      }],
      staticClass: "o-input o-input--large",
      attrs: {
        "name": "",
        "id": ""
      },
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          columnTime.to = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Sampai")])])]), _vm._v(" "), _c('div', {
      staticClass: "o-grid__col u-4/12@lg"
    }, [(_vm.columnTimes.length == (index + 1)) ? _c('a', {
      staticClass: "o-button o-button--primary o-button--block o-button--large",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.addField()
        }
      }
    }, [_vm._v(" Tambah Waktu ")]) : _vm._e(), _vm._v(" "), (_vm.columnTimes.length != 1 && _vm.columnTimes.length != (index + 1)) ? _c('a', {
      staticClass: "o-button o-button--primary o-button--block o-button--large",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.removeField()
        }
      }
    }, [_vm._v(" Remove ")]) : _vm._e()])])
  })), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('router-link', {
    staticClass: "o-button o-button--primary o-button--block o-button--large",
    attrs: {
      "to": "/merchant/registration/4"
    }
  }, [_vm._v(" Next ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "c-form-group u-mt-x5"
  }, [_c('router-link', {
    attrs: {
      "to": "/merchant/registration/2"
    }
  }, [_vm._v(" < Kembali")])], 1)])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-grid c-form-group"
  }, [_c('div', {
    staticClass: "o-grid__col u-6/12@lg"
  }, [_c('select', {
    staticClass: "o-input o-input--large"
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Kategori")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-6/12@lg"
  }, [_c('select', {
    staticClass: "o-input o-input--large"
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Tag")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Services")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, [_c('div', {
    staticClass: "o-grid__col u-1/5@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Sarapan\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-1/5@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Makan Siang\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-1/5@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Resto\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-1/5@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Cafe\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-1/5@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Nightlife\n                                ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Pembayaran")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, [_c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "radio",
      "value": "",
      "name": "pembayaran"
    }
  }), _vm._v(" Card & Cash\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "radio",
      "value": "",
      "name": "pembayaran"
    }
  }), _vm._v(" Cash Only\n                                ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Jam Buka")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, [_c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Senin\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Selasa\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Rabu\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Kamis\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Jumat\n                            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("Sabtu\n                            ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48135643", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cbdca146\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/StepTab.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "stepwizard"
  }, [_c('div', {
    staticClass: "stepwizard-row"
  }, [_c('div', {
    class: ['stepwizard-step', {
      active: _vm.active == 1
    }]
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block btn-circle",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('div', {
    class: ['stepwizard-step', {
      active: _vm.active == 2
    }]
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block btn-circle",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('div', {
    class: ['stepwizard-step', {
      active: _vm.active == 3
    }]
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block btn-circle",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('div', {
    class: ['stepwizard-step', {
      active: _vm.active == 4
    }]
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block btn-circle",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("4")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cbdca146", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/StepTab.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/StepTab.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cbdca146\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/StepTab.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/StepTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StepTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cbdca146", Component.options)
  } else {
    hotAPI.reload("data-v-cbdca146", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/merchant/MerchantRegistration3.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration3.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48135643\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration3.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/merchant/MerchantRegistration3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MerchantRegistration3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48135643", Component.options)
  } else {
    hotAPI.reload("data-v-48135643", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU3RlcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL01lcmNoYW50UmVnaXN0cmF0aW9uMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbjMudnVlP2YyOWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlPzEyOTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7OzRCQUlBO0FBRkE7QUFEQSxHOzs7Ozs7Ozs7Ozs7O0FDK0lBOztBQUVBO2tCQUVBOzBCQUNBOzs7c0JBSUE7b0JBSUE7QUFMQSxhQURBO0FBREE7QUFTQTs7OztzQ0FFQTs7c0JBRUE7b0JBRUE7QUFIQTtBQUlBO2lEQUNBOzJDQUNBO0FBR0E7QUFYQTs7QUFiQSxHOzs7Ozs7O0FDdktBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JTQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0EsMllBQXlQO0FBQ3pQO0FBQ0EsOE9BQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSw2WkFBeVA7QUFDelA7QUFDQSxnUUFBZ0k7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnc3RlcHdpemFyZC1zdGVwJywgeyBhY3RpdmU6IGFjdGl2ZSA9PSAxIH0gXVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIj4xPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydzdGVwd2l6YXJkLXN0ZXAnLCB7IGFjdGl2ZTogYWN0aXZlID09IDIgfSBdXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiPjI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ3N0ZXB3aXphcmQtc3RlcCcsIHsgYWN0aXZlOiBhY3RpdmUgPT0gMyB9IF1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBidG4tY2lyY2xlXCI+MzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnc3RlcHdpemFyZC1zdGVwJywgeyBhY3RpdmU6IGFjdGl2ZSA9PSA0IH0gXVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIj40PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogeyByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFN0ZXBUYWIudnVlPzk3Y2ViMWQ4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZXJjaGFudC1yZWdpc3RyYXRpb24gby1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHN0ZXAgYWN0aXZlPVwiM1wiPjwvc3RlcD5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm8taGVhZGluZyB1LW0teDNcIj5cbiAgICAgICAgICAgICAgICBLYXJha3RlcmlzdGlrIE1lcmNoYW50XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZCBjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMkBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm8taW5wdXQgby1pbnB1dC0tbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+S2F0ZWdvcmk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMkBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm8taW5wdXQgby1pbnB1dC0tbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VGFnPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5TZXJ2aWNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMS81QGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPlNhcmFwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTEvNUBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIj5NYWthbiBTaWFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMS81QGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPlJlc3RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS0xLzVAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCI+Q2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMS81QGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPk5pZ2h0bGlmZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlBlbWJheWFyYW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTIvMTJAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgbmFtZT1cInBlbWJheWFyYW5cIj4gQ2FyZCAmIENhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTIvMTJAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgbmFtZT1cInBlbWJheWFyYW5cIj4gQ2FzaCBPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkphbSBCdWthPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMi8xMkBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIj5TZW5pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPlNlbGFzYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPlJhYnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMi8xMkBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIj5LYW1pc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiPkp1bWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTIvMTJAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCI+U2FidHVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2x1bW4tdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwZW5kIG8tZ3JpZCBjLWZvcm0tZ3JvdXBcIiB2LWZvcj1cIihjb2x1bW5UaW1lLCBpbmRleCkgaW4gY29sdW1uVGltZXMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyQGxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIiB2LW1vZGVsPVwiY29sdW1uVGltZS5mcm9tXCIgY2xhc3M9XCJvLWlucHV0IG8taW5wdXQtLWxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5EYXJpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzPVwiby1pbnB1dCBvLWlucHV0LS1sYXJnZVwiIHYtbW9kZWw9XCJjb2x1bW5UaW1lLnRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TYW1wYWk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMkBsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1pZj1cImNvbHVtblRpbWVzLmxlbmd0aCA9PSAoaW5kZXgrMSlcIiBAY2xpY2sucHJldmVudD1cImFkZEZpZWxkKClcIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIj4gVGFtYmFoIFdha3R1IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtaWY9XCJjb2x1bW5UaW1lcy5sZW5ndGggIT0gMSAmJiBjb2x1bW5UaW1lcy5sZW5ndGggIT0gKGluZGV4KzEpIFwiIEBjbGljay5wcmV2ZW50PVwicmVtb3ZlRmllbGQoKVwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIG8tYnV0dG9uLS1sYXJnZVwiPiBSZW1vdmUgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvbWVyY2hhbnQvcmVnaXN0cmF0aW9uLzRcIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIj4gTmV4dCA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtZm9ybS1ncm91cCB1LW10LXg1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vMlwiPiA8IEtlbWJhbGk8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFN0ZXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGVwVGFiLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czogeyBTdGVwIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbHVtblRpbWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGRGaWVsZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRpbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBmcm9tIDogJycsXG4gICAgICAgICAgICAgICAgICAgIHRvIDogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUZpZWxkKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5UaW1lcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE1lcmNoYW50UmVnaXN0cmF0aW9uMy52dWU/NTc1MjEyMTciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZXJjaGFudC1yZWdpc3RyYXRpb24gby1zZWN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1jb250YWluZXJcIlxuICB9LCBbX2MoJ3N0ZXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlXCI6IFwiM1wiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taGVhZGluZyB1LW0teDNcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgS2FyYWt0ZXJpc3RpayBNZXJjaGFudFxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFiLTFcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgyKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDMpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY29sdW1uLXRpbWVcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uY29sdW1uVGltZXMpLCBmdW5jdGlvbihjb2x1bW5UaW1lLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYXBwZW5kIG8tZ3JpZCBjLWZvcm0tZ3JvdXBcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyQGxnXCJcbiAgICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgIHZhbHVlOiAoY29sdW1uVGltZS5mcm9tKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJjb2x1bW5UaW1lLmZyb21cIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0IG8taW5wdXQtLWxhcmdlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJpZFwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbHVtblRpbWUuZnJvbSA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRGFyaVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZ1wiXG4gICAgfSwgW19jKCdzZWxlY3QnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKGNvbHVtblRpbWUudG8pLFxuICAgICAgICBleHByZXNzaW9uOiBcImNvbHVtblRpbWUudG9cIlxuICAgICAgfV0sXG4gICAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0IG8taW5wdXQtLWxhcmdlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgXCJpZFwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbHVtblRpbWUudG8gPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnb3B0aW9uJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlNhbXBhaVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMkBsZ1wiXG4gICAgfSwgWyhfdm0uY29sdW1uVGltZXMubGVuZ3RoID09IChpbmRleCArIDEpKSA/IF9jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIG8tYnV0dG9uLS1sYXJnZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uYWRkRmllbGQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIiBUYW1iYWggV2FrdHUgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb2x1bW5UaW1lcy5sZW5ndGggIT0gMSAmJiBfdm0uY29sdW1uVGltZXMubGVuZ3RoICE9IChpbmRleCArIDEpKSA/IF9jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIG8tYnV0dG9uLS1sYXJnZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0ucmVtb3ZlRmllbGQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIiBSZW1vdmUgXCIpXSkgOiBfdm0uX2UoKV0pXSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIG8tYnV0dG9uLS1sYXJnZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IFwiL21lcmNoYW50L3JlZ2lzdHJhdGlvbi80XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIgTmV4dCBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cCB1LW10LXg1XCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiIDwgS2VtYmFsaVwiKV0pXSwgMSldKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZCBjLWZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTYvMTJAbGdcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0IG8taW5wdXQtLWxhcmdlXCJcbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkthdGVnb3JpXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNi8xMkBsZ1wiXG4gIH0sIFtfYygnc2VsZWN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXQgby1pbnB1dC0tbGFyZ2VcIlxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGFnXCIpXSldKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTZXJ2aWNlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMS81QGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlNhcmFwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTEvNUBsZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgfSwgW19jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJNYWthbiBTaWFuZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMS81QGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlJlc3RvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0xLzVAbGdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiXG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiQ2FmZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMS81QGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIk5pZ2h0bGlmZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlBlbWJheWFyYW5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTIvMTJAbGdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyYWRpb1wiXG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxuICAgICAgXCJuYW1lXCI6IFwicGVtYmF5YXJhblwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIENhcmQgJiBDYXNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmFkaW9cIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwidmFsdWVcIjogXCJcIixcbiAgICAgIFwibmFtZVwiOiBcInBlbWJheWFyYW5cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBDYXNoIE9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJKYW0gQnVrYVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMi8xMkBsZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgfSwgW19jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJTZW5pblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlNlbGFzYVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlJhYnVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMi8xMkBsZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgfSwgW19jKCdsYWJlbCcsIFtfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcInZhbHVlXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJLYW1pc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIlxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIkp1bWF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTIvMTJAbGdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiXG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiU2FidHVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ4MTM1NjQzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ODEzNTY0M1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00ODEzNTY0M1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3RlcHdpemFyZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0ZXB3aXphcmQtcm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnc3RlcHdpemFyZC1zdGVwJywge1xuICAgICAgYWN0aXZlOiBfdm0uYWN0aXZlID09IDFcbiAgICB9XVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjFcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3N0ZXB3aXphcmQtc3RlcCcsIHtcbiAgICAgIGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PSAyXG4gICAgfV1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydzdGVwd2l6YXJkLXN0ZXAnLCB7XG4gICAgICBhY3RpdmU6IF92bS5hY3RpdmUgPT0gM1xuICAgIH1dXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBidG4tY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiM1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnc3RlcHdpemFyZC1zdGVwJywge1xuICAgICAgYWN0aXZlOiBfdm0uYWN0aXZlID09IDRcbiAgICB9XVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjRcIildKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jYmRjYTE0NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtY2JkY2ExNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtY2JkY2ExNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSAxNiAxNyAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3RlcFRhYi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWNiZGNhMTQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N0ZXBUYWIudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFN0ZXBUYWIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWNiZGNhMTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtY2JkY2ExNDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TdGVwVGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSAxNiAxNyAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDgxMzU2NDNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbjMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBNZXJjaGFudFJlZ2lzdHJhdGlvbjMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ4MTM1NjQzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDgxMzU2NDNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21lcmNoYW50L01lcmNoYW50UmVnaXN0cmF0aW9uMy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCJdLCJzb3VyY2VSb290IjoiIn0=