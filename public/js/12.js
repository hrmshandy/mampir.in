webpackJsonp([12],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_Logo_vue__ = __webpack_require__("./resources/assets/js/objects/Logo.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__objects_Logo_vue__);











/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Facebook: __WEBPACK_IMPORTED_MODULE_2__components_auth_Facebook_vue___default.a, Google: __WEBPACK_IMPORTED_MODULE_4__components_auth_Google_vue___default.a, Sign: __WEBPACK_IMPORTED_MODULE_5__components_auth_Sign_vue___default.a, Logo: __WEBPACK_IMPORTED_MODULE_6__objects_Logo_vue___default.a },
    data: function data() {
        return {
            loading: false,
            showModal: false,
            registerWithEmail: false,
            hasErrors: false,
            form: new __WEBPACK_IMPORTED_MODULE_3__utils_form__["a" /* default */]({
                id: null,
                name: null,
                email: null,
                gender: null,
                city: null,

                birthday: {
                    day: '',
                    month: '',
                    year: ''
                },
                phone: ''
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
    watch: {
        '$route': 'fetchUser',
        hasErrors: function hasErrors() {
            var _this = this;

            setTimeout(function () {
                _this.hasErrors = false;
            }, 3000);
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.fetchUser();
        Event.listen("show-register-modal", function (e) {
            _this2.openModal(e);
        });
        Event.listen("hide-register-modal", function (e) {
            _this2.closeModal(e);
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
            var _this3 = this;

            this.loading = true;
            this.form.submit('put', '/api/user/' + this.form.id).then(function (_ref) {
                var data = _ref.data;

                _this3.loading = false;
                router.push(_this3.$route.query.redirect);
            }).catch(function () {
                _this3.hasErrors = true;
                _this3.loading = false;
            });
        },
        fetchUser: function fetchUser() {
            var _this4 = this;

            axios.get('api/user').then(function (_ref2) {
                var data = _ref2.data;

                _this4.form.id = data.id;
                _this4.form.name = data.name;
                _this4.form.email = data.email;
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
  }, [_c('transition', {
    attrs: {
      "name": "slide",
      "enter-active-class": "animated slideInDown",
      "leave-active-class": "animated slideOutUp"
    }
  }, [(_vm.hasErrors) ? _c('div', {
    staticClass: "c-alert c-alert--error c-alert--fixed"
  }, [_vm._v("\n            Ups, sepertinya Anda melewatkan sesuatu.\n        ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "l-auth__box"
  }, [_c('logo', {
    staticClass: "l-auth__logo u-mb-x6"
  }), _vm._v(" "), _c('h3', {
    staticClass: "u-mb-x4 u-text-center"
  }, [_vm._v("Silahkan lengkapi data diri Anda")]), _vm._v(" "), _c('form', {
    staticClass: "sign-form",
    attrs: {
      "method": "POST"
    }
  }, [_c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('name')
    }]
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
  })]), _vm._v(" "), _c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('email')
    }]
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
  })]), _vm._v(" "), _c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('gender')
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
  }, [_vm._v("Female")])])])]), _vm._v(" "), _c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('city')
    }]
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-grid o-grid--middle"
  }, [_c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('birthday.day')
    }]
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
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('birthday.month')
    }]
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
  }, [_vm._v("Month")]), _vm._v(" "), _vm._l((_vm.months), function(month, index) {
    return _c('option', {
      domProps: {
        "value": (index + 1)
      }
    }, [_vm._v(_vm._s(month))])
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('birthday.year')
    }]
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
  })], 2)])])]), _vm._v(" "), _c('div', {
    class: ['c-form-group', 'has-no-message', {
      'has-error': _vm.form.errors.has('phone')
    }]
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.phone),
      expression: "form.phone"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "number",
      "name": "phone",
      "placeholder": "Phone",
      "maxlength": "12"
    },
    domProps: {
      "value": (_vm.form.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
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
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Save")])])])], 1)], 1)
},staticRenderFns: []}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlP2NmOTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrREFFQTt5UEFFQTswQkFDQTs7cUJBRUE7dUJBQ0E7K0JBQ0E7dUJBQ0E7O29CQUVBO3NCQUNBO3VCQUNBO3dCQUNBO3NCQUVBOzs7eUJBRUE7MkJBQ0E7MEJBRUE7QUFKQTt1QkFPQTtBQWRBO0FBTEE7QUFvQkE7OztrQ0FFQTswQkFDQTtBQUNBO2dDQUNBO3dCQUNBOzBEQUNBOzJCQUNBO0FBQ0E7bUJBQ0E7QUFDQTtzREFDQTswSEFDQTtBQUVBO0FBZEE7O2tCQWdCQTs7QUFDQTs7bUNBQ0E7a0NBQ0E7ZUFDQTtBQUVBO0FBUEE7O0FBUUE7O2FBQ0E7eURBQ0E7NkJBQ0E7QUFDQTt5REFDQTs4QkFDQTtBQUNBO0FBQ0E7O0FBQ0E7eUNBQ0E7Y0FDQTs2QkFDQTtBQUNBOzJDQUNBO2NBQ0E7NkJBQ0E7QUFDQTttRUFDQTtxQ0FDQTtBQUNBO21EQUNBOzZCQUNBO21DQUNBOytDQUNBO0FBQ0E7QUFDQTs7QUFDQTs7MkJBQ0E7NkRBQ0E7QUFDQTs7aUNBQ0E7Z0RBQ0E7QUFDQSxpQ0FDQTttQ0FDQTtpQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUNBOztzQ0FDQTt3Q0FDQTt5Q0FDQTtBQUNBO0FBQ0E7d0VBQ0EsQ0FHQTtBQWhHQSxHOzs7Ozs7O0FDL0ZBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pVQTtBQUNBO0FBQ0E7QUFDQSx1WUFBeVA7QUFDelA7QUFDQSwwT0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImwtYXV0aFwiPlxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGVcIiBlbnRlci1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBzbGlkZUluRG93blwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIHNsaWRlT3V0VXBcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImhhc0Vycm9yc1wiIGNsYXNzPVwiYy1hbGVydCBjLWFsZXJ0LS1lcnJvciBjLWFsZXJ0LS1maXhlZFwiPlxuICAgICAgICAgICAgICAgIFVwcywgc2VwZXJ0aW55YSBBbmRhIG1lbGV3YXRrYW4gc2VzdWF0dS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsLWF1dGhfX2JveFwiPlxuICAgICAgICAgICAgPGxvZ28gY2xhc3M9XCJsLWF1dGhfX2xvZ28gdS1tYi14NlwiPjwvbG9nbz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInUtbWIteDQgdS10ZXh0LWNlbnRlclwiPlNpbGFoa2FuIGxlbmdrYXBpIGRhdGEgZGlyaSBBbmRhPC9oMz5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7J2hhcy1lcnJvcicgOiBmb3JtLmVycm9ycy5oYXMoJ25hbWUnKX1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7J2hhcy1lcnJvcicgOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdlbWFpbCcpXCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7J2hhcy1lcnJvcicgOiBmb3JtLmVycm9ycy5oYXMoJ2dlbmRlcicpfV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJhZGlvMVwiIG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uZ2VuZGVyXCIgdmFsdWU9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvblwiPk1hbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmFkaW8yXCIgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiB2LW1vZGVsPVwiZm9ybS5nZW5kZXJcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCI+RmVtYWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2dlbmRlcicpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdnZW5kZXInKVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgJ2hhcy1uby1tZXNzYWdlJywgeydoYXMtZXJyb3InIDogZm9ybS5lcnJvcnMuaGFzKCdjaXR5Jyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHYtbW9kZWw9XCJmb3JtLmNpdHlcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnY2l0eScpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdjaXR5JylcIj48L3NwYW4+LS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7J2hhcy1lcnJvcicgOiBmb3JtLmVycm9ycy5oYXMoJ2FkZHJlc3MnKX1dXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGV4dGFyZWEgbmFtZT1cImFkZHJlc3NcIiByb3dzPVwiM1wiIGNsYXNzPVwiby10ZXh0YXJlYVwiIHYtbW9kZWw9XCJmb3JtLmFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkFsYW1hdFwiPjwvdGV4dGFyZWE+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDs8c3BhbiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2FkZHJlc3MnKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnYWRkcmVzcycpXCI+PC9zcGFuPiZuZGFzaDsmZ3Q7LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHsnaGFzLWVycm9yJyA6IGZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkuZGF5Jyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJpcnRoZGF5W2RheV1cIiBjbGFzcz1cIm8taW5wdXRcIiB2LW1vZGVsPVwiZm9ybS5iaXJ0aGRheS5kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIGhpZGRlbj5EYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImkgaW4gMzFcIiA6dmFsdWU9XCJpXCI+e3sgaSB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5LmRheScpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdiaXJ0aGRheS5kYXknKVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHsnaGFzLWVycm9yJyA6IGZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkubW9udGgnKX1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiYmlydGhkYXlbbW9udGhdXCIgY2xhc3M9XCJvLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uYmlydGhkYXkubW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIGhpZGRlbj5Nb250aDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKG1vbnRoLCBpbmRleCkgaW4gbW9udGhzXCIgOnZhbHVlPVwiKGluZGV4KzEpXCI+e3sgbW9udGggfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS5tb250aCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdiaXJ0aGRheS5tb250aCcpXCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS00LzEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgJ2hhcy1uby1tZXNzYWdlJywgeydoYXMtZXJyb3InIDogZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS55ZWFyJyl9XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImJpcnRoZGF5W3llYXJdXCIgY2xhc3M9XCJvLWlucHV0XCIgdi1tb2RlbD1cImZvcm0uYmlydGhkYXkueWVhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgaGlkZGVuPlllYXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInllYXIgaW4geWVhcnNcIiA6dmFsdWU9XCJ5ZWFyXCI+e3sgeWVhciB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5LnllYXInKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnYmlydGhkYXkueWVhcicpXCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHsnaGFzLWVycm9yJyA6IGZvcm0uZXJyb3JzLmhhcygncGhvbmUnKX1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInBob25lXCIgdi1tb2RlbD1cImZvcm0ucGhvbmVcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIlBob25lXCIgbWF4bGVuZ3RoPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrXCIgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygncGhvbmUnKVwiIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgncGhvbmUnKVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9ja1wiIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlUmVnaXN0ZXJcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlNhdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuICAgIGltcG9ydCBGYWNlYm9vayBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvRmFjZWJvb2sudnVlJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uL3V0aWxzL2Zvcm0nXG4gICAgaW1wb3J0IEdvb2dsZSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvR29vZ2xlLnZ1ZSdcbiAgICBpbXBvcnQgU2lnbiBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvU2lnbi52dWUnXG4gICAgaW1wb3J0IExvZ28gZnJvbSAnLi4vb2JqZWN0cy9Mb2dvLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czogeyBGYWNlYm9vaywgR29vZ2xlLCBTaWduLCBMb2dvIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJXaXRoRW1haWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGdlbmRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgLy9hZGRyZXNzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBtb250aHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudC5tb250aHNTaG9ydCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1vbWVudCgpLnllYXIoKTsgaSA+PSAxOTYwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHllYXJzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0Vycm9yQmlydGhkYXkoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS5kYXknKSAmJiB0aGlzLmZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkubW9udGgnKSAmJiB0aGlzLmZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkueWVhcicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAnJHJvdXRlJzogJ2ZldGNoVXNlcicsXG4gICAgICAgICAgICBoYXNFcnJvcnMoKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hVc2VyKCk7XG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oXCJzaG93LXJlZ2lzdGVyLW1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEV2ZW50Lmxpc3RlbihcImhpZGUtcmVnaXN0ZXItbW9kYWxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb3Blbk1vZGFsKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlblJlZ2lzdGVyRW1haWxNb2RhbChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyV2l0aEVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuTG9naW5Nb2RhbChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBFdmVudC5maXJlKFwic2hvdy1sb2dpbi1tb2RhbFwiLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVSZWdpc3RlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJtaXQoJ3B1dCcsIGAvYXBpL3VzZXIvJHt0aGlzLmZvcm0uaWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hVc2VyKCkge1xuICAgICAgICAgICAgICBheGlvcy5nZXQoJ2FwaS91c2VyJykudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uZW1haWwgPSBkYXRhLmVtYWlsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKFtcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXInXG4gICAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUmVnaXN0ZXIudnVlPzFmNDBiNGRiIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibC1hdXRoXCJcbiAgfSwgW19jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJzbGlkZVwiLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBzbGlkZUluRG93blwiLFxuICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBzbGlkZU91dFVwXCJcbiAgICB9XG4gIH0sIFsoX3ZtLmhhc0Vycm9ycykgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtYWxlcnQgYy1hbGVydC0tZXJyb3IgYy1hbGVydC0tZml4ZWRcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVXBzLCBzZXBlcnRpbnlhIEFuZGEgbWVsZXdhdGthbiBzZXN1YXR1LlxcbiAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aF9fYm94XCJcbiAgfSwgW19jKCdsb2dvJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aF9fbG9nbyB1LW1iLXg2XCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LW1iLXg0IHUtdGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KFwiU2lsYWhrYW4gbGVuZ2thcGkgZGF0YSBkaXJpIEFuZGFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lnbi1mb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygnbmFtZScpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZ1bGwgTmFtZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbWFpbCBBZHJlc3NcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdnZW5kZXInKVxuICAgIH1dXG4gIH0sIFtfYygnZGl2JywgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uZ2VuZGVyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5nZW5kZXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJyYWRpbzFcIixcbiAgICAgIFwibmFtZVwiOiBcImdlbmRlclwiLFxuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwidmFsdWVcIjogXCIxXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogX3ZtLl9xKF92bS5mb3JtLmdlbmRlciwgXCIxXCIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb3JtLmdlbmRlciA9IFwiMVwiXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIk1hbGVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmdlbmRlciksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uZ2VuZGVyXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwicmFkaW8yXCIsXG4gICAgICBcIm5hbWVcIjogXCJnZW5kZXJcIixcbiAgICAgIFwidHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICBcInZhbHVlXCI6IFwiMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IF92bS5fcShfdm0uZm9ybS5nZW5kZXIsIFwiMFwiKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9ybS5nZW5kZXIgPSBcIjBcIlxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWluZGljYXRvclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJGZW1hbGVcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygnY2l0eScpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmNpdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmNpdHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2l0eVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNpdHlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmNpdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5jaXR5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXkuZGF5JylcbiAgICB9XVxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmJpcnRoZGF5LmRheSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uYmlydGhkYXkuZGF5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImJpcnRoZGF5W2RheV1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmZvcm0uYmlydGhkYXkuZGF5ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBcIlwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiLFxuICAgICAgXCJoaWRkZW5cIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRheVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKDMxKSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaSkpXSlcbiAgfSldLCAyKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywgJ2hhcy1uby1tZXNzYWdlJywge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF5Lm1vbnRoJylcbiAgICB9XVxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmJpcnRoZGF5Lm1vbnRoKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5iaXJ0aGRheS5tb250aFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJiaXJ0aGRheVttb250aF1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmZvcm0uYmlydGhkYXkubW9udGggPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCIsXG4gICAgICBcImhpZGRlblwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTW9udGhcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ubW9udGhzKSwgZnVuY3Rpb24obW9udGgsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChpbmRleCArIDEpXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MobW9udGgpKV0pXG4gIH0pXSwgMildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNC8xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ2MtZm9ybS1ncm91cCcsICdoYXMtbm8tbWVzc2FnZScsIHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdiaXJ0aGRheS55ZWFyJylcbiAgICB9XVxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmJpcnRoZGF5LnllYXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmJpcnRoZGF5LnllYXJcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYmlydGhkYXlbeWVhcl1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9KTtcbiAgICAgICAgX3ZtLmZvcm0uYmlydGhkYXkueWVhciA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIixcbiAgICAgIFwiaGlkZGVuXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJZZWFyXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnllYXJzKSwgZnVuY3Rpb24oeWVhcikge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiB5ZWFyXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoeWVhcikpXSlcbiAgfSldLCAyKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCAnaGFzLW5vLW1lc3NhZ2UnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmZvcm0uZXJyb3JzLmhhcygncGhvbmUnKVxuICAgIH1dXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5waG9uZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ucGhvbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcIm5hbWVcIjogXCJwaG9uZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBob25lXCIsXG4gICAgICBcIm1heGxlbmd0aFwiOiBcIjEyXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5waG9uZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLnBob25lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5sb2FkaW5nXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5oYW5kbGVSZWdpc3RlcigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdzcGFuJywgW192bS5fdihcIkxvYWRpbmcuLi5cIildKSA6IF9jKCdzcGFuJywgW192bS5fdihcIlNhdmVcIildKV0pXSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVlZjYzNDdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWY2MzQ3YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTVlZjYzNDdiXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVnaXN0ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWY2MzQ3YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZWdpc3Rlci52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUmVnaXN0ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSZWdpc3Rlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWVmNjM0N2JcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWY2MzQ3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=