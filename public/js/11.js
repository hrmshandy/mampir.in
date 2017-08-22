webpackJsonp([11],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Register.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_Facebook_vue__ = __webpack_require__("./resources/assets/js/components/auth/Facebook.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_Facebook_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_Facebook_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_form__ = __webpack_require__("./resources/assets/js/utils/form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_Google_vue__ = __webpack_require__("./resources/assets/js/components/auth/Google.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_Google_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_auth_Google_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_Sign_vue__ = __webpack_require__("./resources/assets/js/components/auth/Sign.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_Sign_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_auth_Sign_vue__);










/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Facebook: __WEBPACK_IMPORTED_MODULE_2__components_auth_Facebook_vue___default.a, Google: __WEBPACK_IMPORTED_MODULE_4__components_auth_Google_vue___default.a, Sign: __WEBPACK_IMPORTED_MODULE_5__components_auth_Sign_vue___default.a },
    data: function data() {
        return {
            loading: false,
            showModal: false,
            registerWithEmail: false,
            form: new __WEBPACK_IMPORTED_MODULE_3__utils_form__["a" /* default */]({
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
                gender: null,
                city: null,
                birthday: {
                    day: '',
                    month: '',
                    year: ''
                }
            })
        };
    },

    computed: {
        months: function months() {
            return moment.monthsShort();
        },
        years: function years() {
            var years = [];
            for (var i = moment().year(); i >= 1960; i--) {
                years.push(i);
            }
            return years;
        },
        hasErrorBirthday: function hasErrorBirthday() {
            return this.form.errors.has('birthday.day') && this.form.errors.has('birthday.month') && this.form.errors.has('birthday.year');
        }
    },
    mounted: function mounted() {
        var _this = this;

        Event.listen("show-register-modal", function (e) {
            _this.openModal(e);
        });
        Event.listen("hide-register-modal", function (e) {
            _this.closeModal(e);
        });
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        openModal: function openModal(e) {
            e.stopPropagation();
            this.showModal = true;
        },
        closeModal: function closeModal(e) {
            e.stopPropagation();
            this.showModal = false;
        },
        openRegisterEmailModal: function openRegisterEmailModal(e) {
            this.registerWithEmail = true;
        },
        openLoginModal: function openLoginModal(e) {
            this.showModal = false;
            setTimeout(function () {
                Event.fire("show-login-modal", e);
            });
        },
        handleRegister: function handleRegister() {
            var _this2 = this;

            this.loading = true;
            this.register(this.form).then(function (_ref) {
                var data = _ref.data;

                _this2.loading = false;
                _this2.showModal = false;
                location.reload();
            }).catch(function () {
                _this2.loading = false;
            });
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['register']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ef6347b\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "l-auth"
  }, [_c('div', {
    staticClass: "l-auth__box"
  }, [_c('div', [_vm._v("Sign up with "), _c('facebook', {
    attrs: {
      "is-link": true
    }
  }), _vm._v(" or "), _c('google', {
    attrs: {
      "is-link": true
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "divider"
  }, [_vm._v("or")]), _vm._v(" "), _c('form', {
    staticClass: "sign-form",
    attrs: {
      "method": "POST"
    }
  }, [_c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('name')
    }]
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "name": "name",
      "placeholder": "Full Name"
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.name = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.has('name')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('name'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('email')
    }]
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "email",
      "name": "email",
      "placeholder": "Email Adress"
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.email = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.has('email')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('email'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('password')
    }]
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "Create Password"
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.has('password')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('password'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('password_confirmation')
    }]
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password_confirmation),
      expression: "form.password_confirmation"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "password",
      "name": "password_confirmation",
      "placeholder": "Confirm Password"
    },
    domProps: {
      "value": (_vm.form.password_confirmation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password_confirmation = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.has('password_confirmation')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('password_confirmation'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('gender')
    }]
  }, [_c('div', [_c('label', {
    staticClass: "custom-control custom-radio"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.gender),
      expression: "form.gender"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "id": "radio1",
      "name": "gender",
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.form.gender, "1")
    },
    on: {
      "__c": function($event) {
        _vm.form.gender = "1"
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-indicator"
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-description"
  }, [_vm._v("Male")])]), _vm._v(" "), _c('label', {
    staticClass: "custom-control custom-radio"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.gender),
      expression: "form.gender"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "id": "radio2",
      "name": "gender",
      "type": "radio",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.form.gender, "0")
    },
    on: {
      "__c": function($event) {
        _vm.form.gender = "0"
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-indicator"
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-description"
  }, [_vm._v("Female")])])]), _vm._v(" "), (_vm.form.errors.has('gender')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('gender'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('city')
    }]
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.city),
      expression: "form.city"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "name": "city",
      "placeholder": "City"
    },
    domProps: {
      "value": (_vm.form.city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.city = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.has('city')) ? _c('span', {
    staticClass: "o-input-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('city'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.hasErrorBirthday
    }]
  }, [_c('div', {
    staticClass: "o-grid o-grid--middle"
  }, [_c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.birthday.day),
      expression: "form.birthday.day"
    }],
    staticClass: "o-input",
    attrs: {
      "name": "birthday[day]"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.birthday.day = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "hidden": ""
    }
  }, [_vm._v("Day")]), _vm._v(" "), _vm._l((31), function(i) {
    return _c('option', {
      domProps: {
        "value": i
      }
    }, [_vm._v(_vm._s(i))])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.birthday.month),
      expression: "form.birthday.month"
    }],
    staticClass: "o-input",
    attrs: {
      "name": "birthday[month]"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.birthday.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "hidden": ""
    }
  }, [_vm._v("Month")]), _vm._v(" "), _vm._l((_vm.months), function(month) {
    return _c('option', {
      domProps: {
        "value": month
      }
    }, [_vm._v(_vm._s(month))])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.birthday.year),
      expression: "form.birthday.year"
    }],
    staticClass: "o-input",
    attrs: {
      "name": "birthday[year]"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.birthday.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "hidden": ""
    }
  }, [_vm._v("Year")]), _vm._v(" "), _vm._l((_vm.years), function(year) {
    return _c('option', {
      domProps: {
        "value": year
      }
    }, [_vm._v(_vm._s(year))])
  })], 2)])])]), _vm._v(" "), _c('button', {
    staticClass: "o-button o-button--primary o-button--block",
    attrs: {
      "type": "button",
      "disabled": _vm.loading
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.handleRegister($event)
      }
    }
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Register")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "o-grid o-grid--middle"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12 u-text-right"
  }, [_c('router-link', {
    staticClass: "o-button o-button--primary-outlined o-button--small",
    attrs: {
      "to": "/login"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.openLoginModal($event)
      }
    }
  }, [_vm._v("Log in")])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-grid__col u-8/12"
  }, [_c('span', [_vm._v("Already have an account?")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ef6347b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Register.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ef6347b\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Register.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ef6347b", Component.options)
  } else {
    hotAPI.reload("data-v-5ef6347b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlPzMwNTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWU/Y2Y5OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlZ2lzdGVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9HQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7K0RBRUE7Z0xBRUE7MEJBQ0E7O3FCQUVBO3VCQUNBOytCQUNBOztzQkFFQTt1QkFDQTswQkFDQTt1Q0FDQTt3QkFDQTtzQkFDQTs7eUJBRUE7MkJBQ0E7MEJBSUE7QUFOQTtBQVBBO0FBSkE7QUFrQkE7OztrQ0FFQTswQkFDQTtBQUNBO2dDQUNBO3dCQUNBOzBEQUNBOzJCQUNBO0FBQ0E7bUJBQ0E7QUFDQTtzREFDQTswSEFDQTtBQUVBO0FBZEE7O0FBZUE7O3lEQUNBOzRCQUNBO0FBQ0E7eURBQ0E7NkJBQ0E7QUFDQTtBQUNBOztBQUNBO3lDQUNBO2NBQ0E7NkJBQ0E7QUFDQTsyQ0FDQTtjQUNBOzZCQUNBO0FBQ0E7bUVBQ0E7cUNBQ0E7QUFDQTttREFDQTs2QkFDQTttQ0FDQTsrQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7OzJCQUNBOytCQUNBO0FBQ0E7O2lDQUNBO21DQUNBO3lCQUNBO0FBQ0EsaUNBQ0E7aUNBQ0E7QUFDQTtBQUNBO3dFQUNBLENBR0E7QUE5RUEsRzs7Ozs7OztBQzVHQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDblpBO0FBQ0E7QUFDQTtBQUNBLHVZQUF5UDtBQUN6UDtBQUNBLDBPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibC1hdXRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsLWF1dGhfX2JveFwiPlxuICAgICAgICAgICAgPGRpdj5TaWduIHVwIHdpdGggPGZhY2Vib29rIDppcy1saW5rPVwidHJ1ZVwiPjwvZmFjZWJvb2s+IG9yIDxnb29nbGUgOmlzLWxpbms9XCJ0cnVlXCI+PC9nb29nbGU+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpdmlkZXJcIj5vcjwvc3Bhbj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogZm9ybS5lcnJvcnMuaGFzKCduYW1lJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aWNvbiBuYW1lPVwidXNlclwiPjwvaWNvbj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aWNvbiBuYW1lPVwiZW52ZWxvcGVcIj48L2ljb24+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2VtYWlsJylcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIFBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aWNvbiBuYW1lPVwibG9ja1wiPjwvaWNvbj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgncGFzc3dvcmQnKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZGFuZ2VyJyA6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCIgY2xhc3M9XCJvLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aWNvbiBuYW1lPVwibG9ja1wiPjwvaWNvbj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogZm9ybS5lcnJvcnMuaGFzKCdnZW5kZXInKX1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYWRpbzFcIiBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHYtbW9kZWw9XCJmb3JtLmdlbmRlclwiIHZhbHVlPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIj5NYWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJhZGlvMlwiIG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uZ2VuZGVyXCIgdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvblwiPkZlbWFsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8taW5wdXQtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdnZW5kZXInKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnZ2VuZGVyJylcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ2NpdHknKX1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiB2LW1vZGVsPVwiZm9ybS5jaXR5XCIgY2xhc3M9XCJvLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJDaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aWNvbiBuYW1lPVwibG9ja1wiPjwvaWNvbj48L3NwYW4+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnY2l0eScpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdjaXR5JylcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBoYXNFcnJvckJpcnRoZGF5fV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJpcnRoZGF5W2RheV1cIiBjbGFzcz1cIm8taW5wdXRcIiB2LW1vZGVsPVwiZm9ybS5iaXJ0aGRheS5kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIGhpZGRlbj5EYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImkgaW4gMzFcIiA6dmFsdWU9XCJpXCI+e3sgaSB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmlydGhkYXlbbW9udGhdXCIgY2xhc3M9XCJvLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uYmlydGhkYXkubW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIGhpZGRlbj5Nb250aDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwibW9udGggaW4gbW9udGhzXCIgOnZhbHVlPVwibW9udGhcIj57eyBtb250aCB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmlydGhkYXlbeWVhcl1cIiBjbGFzcz1cIm8taW5wdXRcIiB2LW1vZGVsPVwiZm9ybS5iaXJ0aGRheS55ZWFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBoaWRkZW4+WWVhcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwieWVhciBpbiB5ZWFyc1wiIDp2YWx1ZT1cInllYXJcIj57eyB5ZWFyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm8taW5wdXQtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS5kYXknKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnYmlydGhkYXkuZGF5JylcIj48L3NwYW4+PGJyLz4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5Lm1vbnRoJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2JpcnRoZGF5Lm1vbnRoJylcIj48L3NwYW4+PGJyLz4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5LnllYXInKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnYmlydGhkYXkueWVhcicpXCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrXCIgQGNsaWNrLnByZXZlbnQ9XCJoYW5kbGVSZWdpc3RlclwiIDpkaXNhYmxlZD1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UmVnaXN0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkIG8tZ3JpZC0tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtOC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMiB1LXRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeS1vdXRsaW5lZCBvLWJ1dHRvbi0tc21hbGxcIiBAY2xpY2sucHJldmVudD1cIm9wZW5Mb2dpbk1vZGFsXCI+TG9nIGluPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBpbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL0ZhY2Vib29rLnZ1ZSdcbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi91dGlscy9mb3JtJ1xuICAgIGltcG9ydCBHb29nbGUgZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL0dvb2dsZS52dWUnXG4gICAgaW1wb3J0IFNpZ24gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL1NpZ24udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7IEZhY2Vib29rLCBHb29nbGUsIFNpZ24gfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcldpdGhFbWFpbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbW9udGhzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQubW9udGhzU2hvcnQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHllYXJzKCkge1xuICAgICAgICAgICAgICAgIHZhciB5ZWFycyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBtb21lbnQoKS55ZWFyKCk7IGkgPj0gMTk2MDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHllYXJzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB5ZWFycztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNFcnJvckJpcnRoZGF5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkuZGF5JykgJiYgdGhpcy5mb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5Lm1vbnRoJykgJiYgdGhpcy5mb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5LnllYXInKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oXCJzaG93LXJlZ2lzdGVyLW1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEV2ZW50Lmxpc3RlbihcImhpZGUtcmVnaXN0ZXItbW9kYWxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb3Blbk1vZGFsKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlblJlZ2lzdGVyRW1haWxNb2RhbChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyV2l0aEVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuTG9naW5Nb2RhbChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBFdmVudC5maXJlKFwic2hvdy1sb2dpbi1tb2RhbFwiLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVSZWdpc3RlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIodGhpcy5mb3JtKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKFtcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXInXG4gICAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUmVnaXN0ZXIudnVlPzE2NTIyMmMyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibC1hdXRoXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibC1hdXRoX19ib3hcIlxuICB9LCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJTaWduIHVwIHdpdGggXCIpLCBfYygnZmFjZWJvb2snLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXMtbGlua1wiOiB0cnVlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIG9yIFwiKSwgX2MoJ2dvb2dsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpcy1saW5rXCI6IHRydWVcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIlxuICB9LCBbX3ZtLl92KFwib3JcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lnbi1mb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ25hbWUnKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZ1bGwgTmFtZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygnbmFtZScpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXQtZmVlZGJhY2tcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgnbmFtZScpKVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsIHtcbiAgICAgICdoYXMtZGFuZ2VyJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbWFpbCBBZHJlc3NcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0LWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ2VtYWlsJykpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfV1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcIm5hbWVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNyZWF0ZSBQYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIChfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXQtZmVlZGJhY2tcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgncGFzc3dvcmQnKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpXG4gICAgfV1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwibmFtZVwiOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIChfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZF9jb25maXJtYXRpb24nKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0LWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpKVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsIHtcbiAgICAgICdoYXMtZGFuZ2VyJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygnZ2VuZGVyJylcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmdlbmRlciksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uZ2VuZGVyXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwicmFkaW8xXCIsXG4gICAgICBcIm5hbWVcIjogXCJnZW5kZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICBcInZhbHVlXCI6IFwiMVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IF92bS5fcShfdm0uZm9ybS5nZW5kZXIsIFwiMVwiKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9ybS5nZW5kZXIgPSBcIjFcIlxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJNYWxlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5nZW5kZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmdlbmRlclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInJhZGlvMlwiLFxuICAgICAgXCJuYW1lXCI6IFwiZ2VuZGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIjBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBfdm0uX3EoX3ZtLmZvcm0uZ2VuZGVyLCBcIjBcIilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcm0uZ2VuZGVyID0gXCIwXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiRmVtYWxlXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZ2VuZGVyJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dC1mZWVkYmFja1wiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdnZW5kZXInKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ2NpdHknKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmNpdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNpdHlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmNpdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5jaXR5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5oYXMoJ2NpdHknKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0LWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ2NpdHknKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5oYXNFcnJvckJpcnRoZGF5XG4gICAgfV1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkIG8tZ3JpZC0tbWlkZGxlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyXCJcbiAgfSwgW19jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5iaXJ0aGRheS5kYXkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmJpcnRoZGF5LmRheVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJiaXJ0aGRheVtkYXldXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5mb3JtLmJpcnRoZGF5LmRheSA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIixcbiAgICAgIFwiaGlkZGVuXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEYXlcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKCgzMSksIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gX2MoJ29wdGlvbicsIHtcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogaVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGkpKV0pXG4gIH0pXSwgMildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmJpcnRoZGF5Lm1vbnRoKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5iaXJ0aGRheS5tb250aFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJiaXJ0aGRheVttb250aF1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmZvcm0uYmlydGhkYXkubW9udGggPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCIsXG4gICAgICBcImhpZGRlblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTW9udGhcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ubW9udGhzKSwgZnVuY3Rpb24obW9udGgpIHtcbiAgICByZXR1cm4gX2MoJ29wdGlvbicsIHtcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogbW9udGhcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhtb250aCkpXSlcbiAgfSldLCAyKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMlwiXG4gIH0sIFtfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uYmlydGhkYXkueWVhciksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uYmlydGhkYXkueWVhclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJiaXJ0aGRheVt5ZWFyXVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uZm9ybS5iaXJ0aGRheS55ZWFyID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiLFxuICAgICAgXCJoaWRkZW5cIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlllYXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ueWVhcnMpLCBmdW5jdGlvbih5ZWFyKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IHllYXJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyh5ZWFyKSldKVxuICB9KV0sIDIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9ja1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmxvYWRpbmdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmhhbmRsZVJlZ2lzdGVyKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLmxvYWRpbmcpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiUmVnaXN0ZXJcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyIHUtdGV4dC1yaWdodFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnktb3V0bGluZWQgby1idXR0b24tLXNtYWxsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvbG9naW5cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub3BlbkxvZ2luTW9kYWwoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvZyBpblwiKV0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtOC8xMlwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWVmNjM0N2JcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlZjYzNDdiXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNWVmNjM0N2JcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3Rlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlZjYzNDdiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJlZ2lzdGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWY2MzQ3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlZjYzNDdiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==