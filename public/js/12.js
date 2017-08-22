webpackJsonp([12],{

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
            this.showModal = true;
        },
        closeModal: function closeModal(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vTG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9naW4udnVlP2UyZWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztnTEFFQTswQkFDQTs7dUJBRUE7cUJBQ0E7O3VCQUtBOzBCQUlBO0FBTEE7QUFOQTtBQVlBOztBQUNBOztzREFDQTs0QkFDQTtBQUNBO3NEQUNBOzZCQUNBO0FBQ0E7QUFDQTs7QUFDQTt5Q0FFQTs2QkFDQTtBQUNBOzJDQUVBOzZCQUNBO0FBQ0E7eURBQ0E7NkJBQ0E7bUNBQ0E7a0RBQ0E7QUFDQTtBQUNBOztBQUNBOzsyQkFDQTsyREFDQTtpQ0FDQTttQ0FDQTt5QkFDQTt1Q0FDQTtpQ0FDQTtBQUNBO0FBQ0E7d0VBQ0EsQ0FHQTtBQXBEQSxHOzs7Ozs7O0FDcERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBLG9ZQUF5UDtBQUN6UDtBQUNBLHVPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImwtYXV0aCBsLWF1dGgtLWxvZ2luXCI+XG5cdFx0PGRpdiBjbGFzcz1cImwtYXV0aF9fYm94XCIgOmRpc2FibGVkPVwibG9hZGluZ1wiPlxuXHRcdFx0PGZhY2Vib29rPjwvZmFjZWJvb2s+XG5cdFx0XHQ8Z29vZ2xlPjwvZ29vZ2xlPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+b3I8L3NwYW4+XG5cdFx0XHQ8Zm9ybSBjbGFzcz1cInNpZ24tZm9ybVwiIG1ldGhvZD1cIlBPU1RcIj5cblx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJyl9XVwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRyZXNzXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiB2LWlmPVwiZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXCIgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdlbWFpbCcpXCI+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWRhbmdlcicgOiBmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJyl9XVwiPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbC1mZWVkYmFja1wiIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIiB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJylcIj48L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZCBvLWdyaWQtLW1pZGRsZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggcmVtZW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyXCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIHZhbHVlPVwiMVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtZGVzY3JpcHRpb25cIj5SZW1lbWJlciBNZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNi8xMiB1LXRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvcmdvdC1wYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2tcIiBAY2xpY2sucHJldmVudD1cImhhbmRsZUxvZ2luXCIgOmRpc2FibGVkPVwibG9hZGluZ1wiPlxuXHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiB2LWVsc2U+TG9nIGluPC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxocj5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8c3Bhbj5Eb27igJl0IGhhdmUgYW4gYWNjb3VudD88L3NwYW4+PHJvdXRlci1saW5rIHRvPVwiL3JlZ2lzdGVyXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tbGlua1wiPlJlZ2lzdGVyPC9yb3V0ZXItbGluaz5cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG4gICAgaW1wb3J0IEZhY2Vib29rIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9GYWNlYm9vay52dWUnXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vdXRpbHMvZm9ybSdcbiAgICBpbXBvcnQgR29vZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9Hb29nbGUudnVlJ1xuICAgIGltcG9ydCBTaWduIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9TaWduLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgRmFjZWJvb2ssIEdvb2dsZSwgU2lnbiB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50X2lkOiAzLFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnRfc2VjcmV0OiAnbGJ5QTd3aktzaDFUV3BrNzlETE52R2d0RmFKQTY1UnNKTWR1MHBmWScsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZTogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgRXZlbnQubGlzdGVuKFwic2hvdy1sb2dpbi1tb2RhbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oXCJoaWRlLWxvZ2luLW1vZGFsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChlKSB7XG4gICAgICAgICAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgICAgICAgICAvL2Uuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuUmVnaXN0ZXJNb2RhbChlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBFdmVudC5maXJlKFwic2hvdy1yZWdpc3Rlci1tb2RhbFwiLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVMb2dpbihlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW4odGhpcy5mb3JtKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKFtcbiAgICAgICAgICAgICAgICAnbG9naW4nXG4gICAgICAgICAgICBdKVxuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBMb2dpbi52dWU/MmUyYWEwNmEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsLWF1dGggbC1hdXRoLS1sb2dpblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImwtYXV0aF9fYm94XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmxvYWRpbmdcbiAgICB9XG4gIH0sIFtfYygnZmFjZWJvb2snKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2dvb2dsZScpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCJcbiAgfSwgW192bS5fdihcIm9yXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpZ24tZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbWFpbCBBZHJlc3NcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sLWZlZWRiYWNrXCIsXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5mb3JtLmVycm9ycy5nZXQoJ2VtYWlsJykpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1kYW5nZXInOiBfdm0uZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJuYW1lXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLmZvcm0uZXJyb3JzLmdldCgncGFzc3dvcmQnKSlcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9ja1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmxvYWRpbmdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmhhbmRsZUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoX3ZtLmxvYWRpbmcpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pIDogX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTG9nIGluXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/XCIpXSksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tbGlua1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IFwiL3JlZ2lzdGVyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJSZWdpc3RlclwiKV0pXSwgMSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTYvMTJcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCByZW1lbWJlclwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInJlbWVtYmVyXCIsXG4gICAgICBcInZhbHVlXCI6IFwiMVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIlJlbWVtYmVyIE1lXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNi8xMiB1LXRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9yZ290LXBhc3N3b3JkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvcmdvdCBwYXNzd29yZD9cIildKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTIxYWVhMGMxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMWFlYTBjMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTIxYWVhMGMxXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW4udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWFlYTBjMVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9naW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBMb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjFhZWEwYzFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMWFlYTBjMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=