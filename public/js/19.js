webpackJsonp([19],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlP2NmOTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OytEQUVBO2dMQUVBOzBCQUNBOztxQkFFQTt1QkFDQTsrQkFDQTs7c0JBRUE7dUJBQ0E7MEJBQ0E7dUNBQ0E7d0JBQ0E7c0JBQ0E7O3lCQUVBOzJCQUNBOzBCQUlBO0FBTkE7QUFQQTtBQUpBO0FBa0JBOzs7a0NBRUE7MEJBQ0E7QUFDQTtnQ0FDQTt3QkFDQTswREFDQTsyQkFDQTtBQUNBO21CQUNBO0FBQ0E7c0RBQ0E7MEhBQ0E7QUFFQTtBQWRBOztBQWVBOzt5REFDQTs0QkFDQTtBQUNBO3lEQUNBOzZCQUNBO0FBQ0E7QUFDQTs7QUFDQTt5Q0FDQTtjQUNBOzZCQUNBO0FBQ0E7MkNBQ0E7Y0FDQTs2QkFDQTtBQUNBO21FQUNBO3FDQUNBO0FBQ0E7bURBQ0E7NkJBQ0E7bUNBQ0E7K0NBQ0E7QUFDQTtBQUNBOztBQUNBOzsyQkFDQTsrQkFDQTtBQUNBOztpQ0FDQTttQ0FDQTt5QkFDQTtBQUNBLGlDQUNBO2lDQUNBO0FBQ0E7QUFDQTt3RUFDQSxDQUdBO0FBOUVBLEc7Ozs7Ozs7QUM1R0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25aQTtBQUNBO0FBQ0E7QUFDQSx1WUFBeVA7QUFDelA7QUFDQSwwT0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImwtYXV0aFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibC1hdXRoX19ib3hcIj5cbiAgICAgICAgICAgIDxkaXY+U2lnbiB1cCB3aXRoIDxmYWNlYm9vayA6aXMtbGluaz1cInRydWVcIj48L2ZhY2Vib29rPiBvciA8Z29vZ2xlIDppcy1saW5rPVwidHJ1ZVwiPjwvZ29vZ2xlPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+b3I8L3NwYW4+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInNpZ24tZm9ybVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZGFuZ2VyJyA6IGZvcm0uZXJyb3JzLmhhcygnbmFtZScpfV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGljb24gbmFtZT1cInVzZXJcIj48L2ljb24+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpfV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGljb24gbmFtZT1cImVudmVsb3BlXCI+PC9pY29uPjwvc3Bhbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8taW5wdXQtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdlbWFpbCcpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpfV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGljb24gbmFtZT1cImxvY2tcIj48L2ljb24+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJylcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpfV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGljb24gbmFtZT1cImxvY2tcIj48L2ljb24+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdwYXNzd29yZF9jb25maXJtYXRpb24nKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZGFuZ2VyJyA6IGZvcm0uZXJyb3JzLmhhcygnZ2VuZGVyJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmFkaW8xXCIgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiB2LW1vZGVsPVwiZm9ybS5nZW5kZXJcIiB2YWx1ZT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCI+TWFsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYWRpbzJcIiBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHYtbW9kZWw9XCJmb3JtLmdlbmRlclwiIHZhbHVlPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIj5GZW1hbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnZ2VuZGVyJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2dlbmRlcicpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogZm9ybS5lcnJvcnMuaGFzKCdjaXR5Jyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cImZvcm0uY2l0eVwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGljb24gbmFtZT1cImxvY2tcIj48L2ljb24+PC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby1pbnB1dC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2NpdHknKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnY2l0eScpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1kYW5nZXInIDogaGFzRXJyb3JCaXJ0aGRheX1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJiaXJ0aGRheVtkYXldXCIgY2xhc3M9XCJvLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uYmlydGhkYXkuZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBoaWRkZW4+RGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpIGluIDMxXCIgOnZhbHVlPVwiaVwiPnt7IGkgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJpcnRoZGF5W21vbnRoXVwiIGNsYXNzPVwiby1pbnB1dFwiIHYtbW9kZWw9XCJmb3JtLmJpcnRoZGF5Lm1vbnRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBoaWRkZW4+TW9udGg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm1vbnRoIGluIG1vbnRoc1wiIDp2YWx1ZT1cIm1vbnRoXCI+e3sgbW9udGggfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJpcnRoZGF5W3llYXJdXCIgY2xhc3M9XCJvLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uYmlydGhkYXkueWVhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgaGlkZGVuPlllYXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInllYXIgaW4geWVhcnNcIiA6dmFsdWU9XCJ5ZWFyXCI+e3sgeWVhciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJvLWlucHV0LWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkuZGF5JylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2JpcnRoZGF5LmRheScpXCI+PC9zcGFuPjxici8+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm8taW5wdXQtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS5tb250aCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdiaXJ0aGRheS5tb250aCcpXCI+PC9zcGFuPjxici8+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm8taW5wdXQtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS55ZWFyJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2JpcnRoZGF5LnllYXInKVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9ja1wiIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlUmVnaXN0ZXJcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlJlZ2lzdGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTgvMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTIgdS10ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnktb3V0bGluZWQgby1idXR0b24tLXNtYWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJvcGVuTG9naW5Nb2RhbFwiPkxvZyBpbjwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG4gICAgaW1wb3J0IEZhY2Vib29rIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9GYWNlYm9vay52dWUnXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vdXRpbHMvZm9ybSdcbiAgICBpbXBvcnQgR29vZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9Hb29nbGUudnVlJ1xuICAgIGltcG9ydCBTaWduIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9TaWduLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czogeyBGYWNlYm9vaywgR29vZ2xlLCBTaWduIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJXaXRoRW1haWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGdlbmRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1vbnRocygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50Lm1vbnRoc1Nob3J0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5ZWFycygpIHtcbiAgICAgICAgICAgICAgICB2YXIgeWVhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbW9tZW50KCkueWVhcigpOyBpID49IDE5NjA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICB5ZWFycy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geWVhcnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzRXJyb3JCaXJ0aGRheSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5LmRheScpICYmIHRoaXMuZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS5tb250aCcpICYmIHRoaXMuZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS55ZWFyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgRXZlbnQubGlzdGVuKFwic2hvdy1yZWdpc3Rlci1tb2RhbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oXCJoaWRlLXJlZ2lzdGVyLW1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VNb2RhbChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5SZWdpc3RlckVtYWlsTW9kYWwoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcldpdGhFbWFpbCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlbkxvZ2luTW9kYWwoZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnQuZmlyZShcInNob3ctbG9naW4tbW9kYWxcIiwgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyhbXG4gICAgICAgICAgICAgICAgJ3JlZ2lzdGVyJ1xuICAgICAgICAgICAgXSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlZ2lzdGVyLnZ1ZT8xNjUyMjJjMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aF9fYm94XCJcbiAgfSwgW19jKCdkaXYnLCBbX3ZtLl92KFwiU2lnbiB1cCB3aXRoIFwiKSwgX2MoJ2ZhY2Vib29rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlzLWxpbmtcIjogdHJ1ZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBvciBcIiksIF9jKCdnb29nbGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXMtbGlua1wiOiB0cnVlXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCJcbiAgfSwgW192bS5fdihcIm9yXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpZ24tZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJGdWxsIE5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5oYXMoJ25hbWUnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0LWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ25hbWUnKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ2VtYWlsJylcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZW1haWxcIixcbiAgICAgIFwibmFtZVwiOiBcImVtYWlsXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW1haWwgQWRyZXNzXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLmVtYWlsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dC1mZWVkYmFja1wiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdlbWFpbCcpKVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsIHtcbiAgICAgICdoYXMtZGFuZ2VyJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJuYW1lXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJDcmVhdGUgUGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0LWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJykpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZF9jb25maXJtYXRpb24nKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcIm5hbWVcIjogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dC1mZWVkYmFja1wiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdwYXNzd29yZF9jb25maXJtYXRpb24nKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ2dlbmRlcicpXG4gICAgfV1cbiAgfSwgW19jKCdkaXYnLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5nZW5kZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmdlbmRlclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInJhZGlvMVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZ2VuZGVyXCIsXG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIjFcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBfdm0uX3EoX3ZtLmZvcm0uZ2VuZGVyLCBcIjFcIilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIl9fY1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcm0uZ2VuZGVyID0gXCIxXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiTWFsZVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uZ2VuZGVyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5nZW5kZXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJyYWRpbzJcIixcbiAgICAgIFwibmFtZVwiOiBcImdlbmRlclwiLFxuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwidmFsdWVcIjogXCIwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogX3ZtLl9xKF92bS5mb3JtLmdlbmRlciwgXCIwXCIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb3JtLmdlbmRlciA9IFwiMFwiXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIkZlbWFsZVwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5oYXMoJ2dlbmRlcicpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXQtZmVlZGJhY2tcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgnZ2VuZGVyJykpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdjaXR5JylcbiAgICB9XVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5jaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jaXR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImNpdHlcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJDaXR5XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5jaXR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0uY2l0eSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIChfdm0uZm9ybS5lcnJvcnMuaGFzKCdjaXR5JykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dC1mZWVkYmFja1wiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdjaXR5JykpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uaGFzRXJyb3JCaXJ0aGRheVxuICAgIH1dXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMlwiXG4gIH0sIFtfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uYmlydGhkYXkuZGF5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5iaXJ0aGRheS5kYXlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYmlydGhkYXlbZGF5XVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uZm9ybS5iaXJ0aGRheS5kYXkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCIsXG4gICAgICBcImhpZGRlblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGF5XCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoMzEpLCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGlcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhpKSldKVxuICB9KV0sIDIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyXCJcbiAgfSwgW19jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5iaXJ0aGRheS5tb250aCksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uYmlydGhkYXkubW9udGhcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYmlydGhkYXlbbW9udGhdXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5mb3JtLmJpcnRoZGF5Lm1vbnRoID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiLFxuICAgICAgXCJoaWRkZW5cIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk1vbnRoXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLm1vbnRocyksIGZ1bmN0aW9uKG1vbnRoKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IG1vbnRoXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MobW9udGgpKV0pXG4gIH0pXSwgMildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmJpcnRoZGF5LnllYXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmJpcnRoZGF5LnllYXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYmlydGhkYXlbeWVhcl1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmZvcm0uYmlydGhkYXkueWVhciA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIixcbiAgICAgIFwiaGlkZGVuXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJZZWFyXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnllYXJzKSwgZnVuY3Rpb24oeWVhcikge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiB5ZWFyXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoeWVhcikpXSlcbiAgfSldLCAyKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5sb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oYW5kbGVSZWdpc3RlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdzcGFuJywgW192bS5fdihcIkxvYWRpbmcuLi5cIildKSA6IF9jKCdzcGFuJywgW192bS5fdihcIlJlZ2lzdGVyXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMiB1LXRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5LW91dGxpbmVkIG8tYnV0dG9uLS1zbWFsbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IFwiL2xvZ2luXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9wZW5Mb2dpbk1vZGFsKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2cgaW5cIildKV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTgvMTJcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVlZjYzNDdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWY2MzQ3YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTVlZjYzNDdiXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVnaXN0ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY2MzQ3YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZWdpc3Rlci52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSZWdpc3Rlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWVmNjM0N2JcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWY2MzQ3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSJdLCJzb3VyY2VSb290IjoiIn0=