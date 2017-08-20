webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Login.vue":
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
            showModal: false,
            loading: false,
            form: new __WEBPACK_IMPORTED_MODULE_3__utils_form__["a" /* default */]({
                email: null,
                password: null
            })
        };
    },
    mounted: function mounted() {
        var _this = this;

        Event.listen("show-login-modal", function (e) {
            _this.openModal(e);
        });
        Event.listen("hide-login-modal", function (e) {
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
        openRegisterModal: function openRegisterModal(e) {
            this.showModal = false;
            setTimeout(function () {
                Event.fire("show-register-modal", e);
            });
        },
        handleLogin: function handleLogin(e) {
            var _this2 = this;

            this.loading = true;
            this.login(this.form).then(function (response) {
                _this2.loading = false;
                _this2.showModal = false;
                location.reload();
            }).catch(function (errors) {
                _this2.loading = false;
            });
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['login']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21aea0c1\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "l-auth l-auth--login"
  }, [_c('div', {
    staticClass: "l-auth__box",
    attrs: {
      "disabled": _vm.loading
    }
  }, [_c('facebook'), _vm._v(" "), _c('google'), _vm._v(" "), _c('span', {
    staticClass: "divider"
  }, [_vm._v("or")]), _vm._v(" "), _c('form', {
    staticClass: "sign-form",
    attrs: {
      "method": "POST"
    }
  }, [_c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('email')
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
  }), _vm._v(" "), (_vm.form.errors.has('email')) ? _c('span', {
    staticClass: "form-control-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('email'))
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-danger': _vm.form.errors.has('password')
    }]
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
      "placeholder": "Password"
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
  }), _vm._v(" "), (_vm.form.errors.has('password')) ? _c('span', {
    staticClass: "form-control-feedback",
    domProps: {
      "textContent": _vm._s(_vm.form.errors.get('password'))
    }
  }) : _vm._e()]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('button', {
    staticClass: "o-button o-button--primary o-button--block",
    attrs: {
      "type": "button",
      "disabled": _vm.loading
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.handleLogin($event)
      }
    }
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Log in")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_c('span', [_vm._v("Don’t have an account?")]), _c('router-link', {
    staticClass: "o-button o-button--link",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Register")])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-form-group"
  }, [_c('div', {
    staticClass: "o-grid o-grid--middle"
  }, [_c('div', {
    staticClass: "o-grid__col u-6/12"
  }, [_c('label', {
    staticClass: "custom-control custom-checkbox remember"
  }, [_c('input', {
    staticClass: "custom-control-input",
    attrs: {
      "type": "checkbox",
      "name": "remember",
      "value": "1"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-indicator"
  }), _vm._v(" "), _c('span', {
    staticClass: "custom-control-description"
  }, [_vm._v("Remember Me")])])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-6/12 u-text-right"
  }, [_c('a', {
    staticClass: "forgot-password",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Forgot password?")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21aea0c1", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Login.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-21aea0c1\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Login.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21aea0c1", Component.options)
  } else {
    hotAPI.reload("data-v-21aea0c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vTG9naW4udnVlP2RkMzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWU/ZTJlYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0xvZ2luLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O2dMQUVBOzBCQUNBOzt1QkFFQTtxQkFDQTs7dUJBS0E7MEJBSUE7QUFMQTtBQU5BO0FBWUE7O0FBQ0E7O3NEQUNBOzRCQUNBO0FBQ0E7c0RBQ0E7NkJBQ0E7QUFDQTtBQUNBOztBQUNBO3lDQUNBO2NBQ0E7NkJBQ0E7QUFDQTsyQ0FDQTtjQUNBOzZCQUNBO0FBQ0E7eURBQ0E7NkJBQ0E7bUNBQ0E7a0RBQ0E7QUFDQTtBQUNBOztBQUNBOzsyQkFDQTsyREFDQTtpQ0FDQTttQ0FDQTt5QkFDQTt1Q0FDQTtpQ0FDQTtBQUNBO0FBQ0E7d0VBQ0EsQ0FHQTtBQXBEQSxHOzs7Ozs7O0FDcERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBLG9ZQUF5UDtBQUN6UDtBQUNBLHVPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8yMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImwtYXV0aCBsLWF1dGgtLWxvZ2luXCI+XG5cdFx0PGRpdiBjbGFzcz1cImwtYXV0aF9fYm94XCIgOmRpc2FibGVkPVwibG9hZGluZ1wiPlxuXHRcdFx0PGZhY2Vib29rPjwvZmFjZWJvb2s+XG5cdFx0XHQ8Z29vZ2xlPjwvZ29vZ2xlPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+b3I8L3NwYW4+XG5cdFx0XHQ8Zm9ybSBjbGFzcz1cInNpZ24tZm9ybVwiIG1ldGhvZD1cIlBPU1RcIj5cblx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJyl9XVwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRyZXNzXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdlbWFpbCcpXCI+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJyl9XVwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJylcIj48L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggcmVtZW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIj5SZW1lbWJlciBNZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMiB1LXRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvcmdvdC1wYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2tcIiBAY2xpY2sucHJldmVudD1cImhhbmRsZUxvZ2luXCIgOmRpc2FibGVkPVwibG9hZGluZ1wiPlxuXHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiB2LWVsc2U+TG9nIGluPC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxocj5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8c3Bhbj5Eb27igJl0IGhhdmUgYW4gYWNjb3VudD88L3NwYW4+PHJvdXRlci1saW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tbGlua1wiPlJlZ2lzdGVyPC9yb3V0ZXItbGluaz5cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG4gICAgaW1wb3J0IEZhY2Vib29rIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9GYWNlYm9vay52dWUnXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vdXRpbHMvZm9ybSdcbiAgICBpbXBvcnQgR29vZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9Hb29nbGUudnVlJ1xuICAgIGltcG9ydCBTaWduIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9TaWduLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgRmFjZWJvb2ssIEdvb2dsZSwgU2lnbiB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50X2lkOiAzLFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnRfc2VjcmV0OiAnbGJ5QTd3aktzaDFUV3BrNzlETE52R2d0RmFKQTY1UnNKTWR1MHBmWScsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZTogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgRXZlbnQubGlzdGVuKFwic2hvdy1sb2dpbi1tb2RhbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oXCJoaWRlLWxvZ2luLW1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VNb2RhbChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5SZWdpc3Rlck1vZGFsKGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50LmZpcmUoXCJzaG93LXJlZ2lzdGVyLW1vZGFsXCIsIGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUxvZ2luKGUpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbih0aGlzLmZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoW1xuICAgICAgICAgICAgICAgICdsb2dpbidcbiAgICAgICAgICAgIF0pXG4gICAgICAgIH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIExvZ2luLnZ1ZT8xZmE0N2Q0YiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aCBsLWF1dGgtLWxvZ2luXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibC1hdXRoX19ib3hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubG9hZGluZ1xuICAgIH1cbiAgfSwgW19jKCdmYWNlYm9vaycpLCBfdm0uX3YoXCIgXCIpLCBfYygnZ29vZ2xlJyksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIlxuICB9LCBbX3ZtLl92KFwib3JcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lnbi1mb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ2VtYWlsJylcbiAgICB9XVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uZW1haWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImVtYWlsXCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVtYWlsIEFkcmVzc1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0uZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgnZW1haWwnKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWRhbmdlcic6IF92bS5mb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcbiAgICB9XVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcIm5hbWVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbC1mZWVkYmFja1wiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uZm9ybS5lcnJvcnMuZ2V0KCdwYXNzd29yZCcpKVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0ubG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uaGFuZGxlTG9naW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyhfdm0ubG9hZGluZykgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSkgOiBfYygnc3BhbicsIFtfdm0uX3YoXCJMb2cgaW5cIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnc3BhbicsIFtfdm0uX3YoXCJEb27igJl0IGhhdmUgYW4gYWNjb3VudD9cIildKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvcmVnaXN0ZXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJlZ2lzdGVyXCIpXSldLCAxKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNi8xMlwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IHJlbWVtYmVyXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJuYW1lXCI6IFwicmVtZW1iZXJcIixcbiAgICAgIFwidmFsdWVcIjogXCIxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbmRpY2F0b3JcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiUmVtZW1iZXIgTWVcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS02LzEyIHUtdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3Jnb3QtcGFzc3dvcmRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRm9yZ290IHBhc3N3b3JkP1wiKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjFhZWEwYzFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTIxYWVhMGMxXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMjFhZWEwYzFcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb2dpbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIxYWVhMGMxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xvZ2luLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIExvZ2luLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMWFlYTBjMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIxYWVhMGMxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIl0sInNvdXJjZVJvb3QiOiIifQ==