webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantClaim.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ResultItem_vue__ = __webpack_require__("./resources/assets/js/components/ResultItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ResultItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ResultItem_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Result: __WEBPACK_IMPORTED_MODULE_0__components_ResultItem_vue___default.a }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-75e62c68\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ResultItem.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-result__item"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('router-link', {
    staticClass: "o-button o-button--primary o-button--block",
    attrs: {
      "to": "/merchant/registration/success"
    }
  }, [_vm._v("Klaim Merchant ini")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-result__item__img"
  }, [_c('img', {
    attrs: {
      "src": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=CmRaAAAAojoSl5wP28sneCnRit6JKB3yBeJ-31bEL6SPlnU3J8lQS7QeNTd7ph2327vhfu3z5XwuF0ksmv8YSzjD1bqDx9QqU3m2K6od4DG82fUFcecYQfMj77_YVTXXe6ts4TF_EhDurmP9Pi_RblFXFKfFGOzlGhSxsuu-JGBeasJjWiouDc6WbpQ7rg&key=AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c",
      "alt": "merchant picture"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-result__item__desc"
  }, [_c('h4', [_vm._v("Warung Abah Saha")]), _vm._v(" "), _c('h4', [_c('i', {
    staticClass: "fa fa-phone",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" 083232123123")]), _vm._v(" "), _c('p', [_vm._v("jl.Bendungan Hilir Raya No. 8, Bendungan Hilir, Bandung")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75e62c68", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc446036\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantClaim.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-section"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('Result'), _vm._v(" "), _c('Result'), _vm._v(" "), _c('Result'), _vm._v(" "), _c('div', {
    staticClass: "c-result__notfound u-text-center"
  }, [_c('h2', [_vm._v("Tidak dapat menemukan Merchant anda?")]), _vm._v(" "), _c('p', [_vm._v("isi form dibawah untuk membuat listing di Mampir.in")]), _vm._v(" "), _c('router-link', {
    staticClass: "o-button o-button--primary o-button--mincontent o-button--large",
    attrs: {
      "to": "/merchant/registration/1"
    }
  }, [_vm._v("Tambah Merchant")])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "o-heading o-heading--mg2 u-text-center"
  }, [_vm._v("\n                Klaim Tempat Bisnis Anda\n                "), _c('small', [_vm._v("\n                \tuntuk mendapatkan akses ke alat analytical\n                ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('div', {
    staticClass: "c-form-group o-grid"
  }, [_c('div', {
    staticClass: "o-grid__col u-5/12@lg"
  }, [_c('div', {
    staticClass: "c-form-group c-form-group--addon"
  }, [_c('span', {
    staticClass: "o-input o-input--addon"
  }, [_c('i', {
    staticClass: "fa fa-map-marker",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "placeholder": "Lokasi"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-5/12@lg"
  }, [_c('input', {
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "placeholder": "Nama Tempat"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-2/12@lg"
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block"
  }, [_c('i', {
    staticClass: "fa fa-search",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Cari")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-result u-text-center"
  }, [_c('h4', [_vm._v("Anda mencari "), _c('b', [_vm._v("\"Warung Abah\"")]), _vm._v(" di "), _c('b', [_vm._v("\"Bandung\"")])]), _vm._v(" "), _c('h4', [_vm._v("Menampilkan 5 dari 653 hasil pencarian")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dc446036", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/ResultItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  null,
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-75e62c68\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ResultItem.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/ResultItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResultItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75e62c68", Component.options)
  } else {
    hotAPI.reload("data-v-75e62c68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/merchant/MerchantClaim.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantClaim.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc446036\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantClaim.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/merchant/MerchantClaim.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MerchantClaim.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc446036", Component.options)
  } else {
    hotAPI.reload("data-v-dc446036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vTWVyY2hhbnRDbGFpbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdEl0ZW0udnVlPzg5ZjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudENsYWltLnZ1ZT9iNmUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21lcmNoYW50L01lcmNoYW50Q2xhaW0udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBaURBOztnQkFFQTtBQURBLEc7Ozs7Ozs7QUNsREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaVBBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSxxWkFBeVA7QUFDelA7QUFDQSx3UEFBZ0k7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm8tc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiby1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiby1oZWFkaW5nIG8taGVhZGluZy0tbWcyIHUtdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBLbGFpbSBUZW1wYXQgQmlzbmlzIEFuZGFcbiAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgXHR1bnR1ayBtZW5kYXBhdGthbiBha3NlcyBrZSBhbGF0IGFuYWx5dGljYWxcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIFxuXHRcdFx0PGZvcm0gYWN0aW9uPVwiXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXAgby1ncmlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtNS8xMkBsZ1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImMtZm9ybS1ncm91cCBjLWZvcm0tZ3JvdXAtLWFkZG9uXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiby1pbnB1dCBvLWlucHV0LS1hZGRvblwiPjxpIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTG9rYXNpXCIgY2xhc3M9XCJvLWlucHV0XCI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1ncmlkX19jb2wgdS01LzEyQGxnXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWEgVGVtcGF0XCIgY2xhc3M9XCJvLWlucHV0XCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMi8xMkBsZ1wiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9ja1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBDYXJpPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYy1yZXN1bHQgdS10ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8aDQ+QW5kYSBtZW5jYXJpIDxiPlwiV2FydW5nIEFiYWhcIjwvYj4gZGkgPGI+XCJCYW5kdW5nXCI8L2I+PC9oND5cblx0XHRcdFx0PGg0Pk1lbmFtcGlsa2FuIDUgZGFyaSA2NTMgaGFzaWwgcGVuY2FyaWFuPC9oND5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8UmVzdWx0PjwvUmVzdWx0PlxuXHRcdFx0PFJlc3VsdD48L1Jlc3VsdD5cblx0XHRcdDxSZXN1bHQ+PC9SZXN1bHQ+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjLXJlc3VsdF9fbm90Zm91bmQgdS10ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8aDI+VGlkYWsgZGFwYXQgbWVuZW11a2FuIE1lcmNoYW50IGFuZGE/PC9oMj5cblx0XHRcdFx0PHA+aXNpIGZvcm0gZGliYXdhaCB1bnR1ayBtZW1idWF0IGxpc3RpbmcgZGkgTWFtcGlyLmluPC9wPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdG89XCIvbWVyY2hhbnQvcmVnaXN0cmF0aW9uLzFcIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1taW5jb250ZW50IG8tYnV0dG9uLS1sYXJnZVwiPlRhbWJhaCBNZXJjaGFudDwvcm91dGVyLWxpbms+XG5cdFx0XHQ8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBSZXN1bHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRJdGVtLnZ1ZSdcblx0ZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7IFJlc3VsdCB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE1lcmNoYW50Q2xhaW0udnVlPzFiNDJmMTdhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yZXN1bHRfX2l0ZW1cIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vc3VjY2Vzc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiS2xhaW0gTWVyY2hhbnQgaW5pXCIpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yZXN1bHRfX2l0ZW1fX2ltZ1wiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9waG90bz9tYXh3aWR0aD0zMDAmcGhvdG9yZWZlcmVuY2U9Q21SYUFBQUFvam9TbDV3UDI4c25lQ25SaXQ2SktCM3lCZUotMzFiRUw2U1BsblUzSjhsUVM3UWVOVGQ3cGgyMzI3dmhmdTN6NVh3dUYwa3NtdjhZU3pqRDFicUR4OVFxVTNtMks2b2Q0REc4MmZVRmNlY1lRZk1qNzdfWVZUWFhlNnRzNFRGX0VoRHVybVA5UGlfUmJsRlhGS2ZGR096bEdoU3hzdXUtSkdCZWFzSmpXaW91RGM2V2JwUTdyZyZrZXk9QUl6YVN5RHh1N212NW1sUE05QWoyQ2lZS0ZXWTliNmFkaXpkQzRjXCIsXG4gICAgICBcImFsdFwiOiBcIm1lcmNoYW50IHBpY3R1cmVcIlxuICAgIH1cbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yZXN1bHRfX2l0ZW1fX2Rlc2NcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIldhcnVuZyBBYmFoIFNhaGFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBob25lXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgMDgzMjMyMTIzMTIzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcImpsLkJlbmR1bmdhbiBIaWxpciBSYXlhIE5vLiA4LCBCZW5kdW5nYW4gSGlsaXIsIEJhbmR1bmdcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzVlNjJjNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc1ZTYyYzY4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTc1ZTYyYzY4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdEl0ZW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lclwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnUmVzdWx0JyksIF92bS5fdihcIiBcIiksIF9jKCdSZXN1bHQnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ1Jlc3VsdCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcmVzdWx0X19ub3Rmb3VuZCB1LXRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdoMicsIFtfdm0uX3YoXCJUaWRhayBkYXBhdCBtZW5lbXVrYW4gTWVyY2hhbnQgYW5kYT9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiaXNpIGZvcm0gZGliYXdhaCB1bnR1ayBtZW1idWF0IGxpc3RpbmcgZGkgTWFtcGlyLmluXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tbWluY29udGVudCBvLWJ1dHRvbi0tbGFyZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGFtYmFoIE1lcmNoYW50XCIpXSldLCAxKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1oZWFkaW5nIG8taGVhZGluZy0tbWcyIHUtdGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEtsYWltIFRlbXBhdCBCaXNuaXMgQW5kYVxcbiAgICAgICAgICAgICAgICBcIiksIF9jKCdzbWFsbCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXFx0dW50dWsgbWVuZGFwYXRrYW4gYWtzZXMga2UgYWxhdCBhbmFseXRpY2FsXFxuICAgICAgICAgICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwIG8tZ3JpZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtNS8xMkBsZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cCBjLWZvcm0tZ3JvdXAtLWFkZG9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXQgby1pbnB1dC0tYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWFwLW1hcmtlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTG9rYXNpXCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTUvMTJAbGdcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIk5hbWEgVGVtcGF0XCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0yLzEyQGxnXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIENhcmlcIildKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1yZXN1bHQgdS10ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiQW5kYSBtZW5jYXJpIFwiKSwgX2MoJ2InLCBbX3ZtLl92KFwiXFxcIldhcnVuZyBBYmFoXFxcIlwiKV0pLCBfdm0uX3YoXCIgZGkgXCIpLCBfYygnYicsIFtfdm0uX3YoXCJcXFwiQmFuZHVuZ1xcXCJcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiTWVuYW1waWxrYW4gNSBkYXJpIDY1MyBoYXNpbCBwZW5jYXJpYW5cIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZGM0NDYwMzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWRjNDQ2MDM2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudENsYWltLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1kYzQ0NjAzNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRDbGFpbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICBudWxsLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NWU2MmM2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZXN1bHRJdGVtLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdEl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSZXN1bHRJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NWU2MmM2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1ZTYyYzY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVzdWx0SXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdEl0ZW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01lcmNoYW50Q2xhaW0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kYzQ0NjAzNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9NZXJjaGFudENsYWltLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudENsYWltLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTWVyY2hhbnRDbGFpbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZGM0NDYwMzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kYzQ0NjAzNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudENsYWltLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21lcmNoYW50L01lcmNoYW50Q2xhaW0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9