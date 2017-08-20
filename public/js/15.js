webpackJsonp([15],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PlacesSearch.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_map_loader__ = __webpack_require__("./resources/assets/js/api/map/loader.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        name: { type: String, required: true },
        value: { type: Object, default: function _default() {
                return { address: '', lat: '', lng: '' };
            }
        }
    },
    data: function data() {
        return {
            map: '',
            markers: [],
            showLatLng: false,
            address: '',
            lat: '',
            lng: ''
        };
    },

    computed: {
        hasVelue: function hasVelue() {
            return !_.isEmpty(this.value.address) && typeof this.value.lat === 'number' && typeof this.value.lng === 'number';
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.address = this.value.address;
        this.lat = this.value.lat;
        this.lng = this.value.lng;

        __WEBPACK_IMPORTED_MODULE_0__api_map_loader__["b" /* loaded */].then(function () {
            var currentPosition = { lat: _this.value.lat, lng: _this.value.lng };
            _this.initMap(currentPosition);

            if (_this.hasVelue) {
                _this.createMarker(_this.value.address, currentPosition);
            }

            _this.search();
        });
    },

    methods: {
        initMap: function initMap(center) {
            if (typeof center.lat !== 'number' && typeof center.lng !== 'number') {
                center = { lat: -33.8688, lng: 151.2195 };
            }
            this.map = new google.maps.Map(this.$refs.map, {
                center: center,
                zoom: 13,
                mapTypeId: 'roadmap',
                streetViewControl: false,
                mapTypeControl: false
            });
        },
        createMarker: function createMarker(title, position) {
            var map = this.map;
            var marker = new google.maps.Marker({
                map: map,
                title: title,
                position: position,
                draggable: true
            });

            google.maps.event.addListener(marker, 'dragend', function () {
                this.geocodePosition(marker.getPosition());
            }.bind(this));

            this.markers.push(marker);
        },
        search: function search() {
            var map = this.map;

            var input = this.$refs.input;
            var searchBox = new google.maps.places.SearchBox(input);

            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });

            var markers = this.markers;

            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();

                if (places.length === 0) {
                    alert('places not found, please input latitude & longitude manually.');
                    this.showLatLng = true;
                    return;
                }

                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];

                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }

                    this.setValue(place.formatted_address, place.geometry.location);

                    this.createMarker(place.name, place.geometry.location);

                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                }.bind(this));

                map.fitBounds(bounds);
            }.bind(this));
        },
        preventEnter: function preventEnter(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        },
        setValue: function setValue(address, position) {
            this.address = address;
            this.lat = position.lat();
            this.lng = position.lng();
        },
        geocodePosition: function geocodePosition(pos) {
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                latLng: pos
            }, function (responses) {
                var formatted_address = '';
                if (responses && responses.length > 0) {
                    formatted_address = responses[0].formatted_address;
                } else {
                    formatted_address = 'Cannot determine address at this location.';
                }
                this.setValue(formatted_address, pos);
            }.bind(this));
        }
    }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PlacesSearch_vue__ = __webpack_require__("./resources/assets/js/components/PlacesSearch.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PlacesSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_PlacesSearch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StepTab_vue__ = __webpack_require__("./resources/assets/js/components/StepTab.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StepTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_StepTab_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Places: __WEBPACK_IMPORTED_MODULE_0__components_PlacesSearch_vue___default.a, Step: __WEBPACK_IMPORTED_MODULE_1__components_StepTab_vue___default.a }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48053ec2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration2.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "merchant-registration o-section"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('step', {
    attrs: {
      "active": "2"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "o-heading u-m-x3"
  }, [_vm._v("\n            Lokasi Merchant\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "tab-2"
  }, [_c('form', {
    attrs: {
      "action": ""
    }
  }, [_c('places', {
    attrs: {
      "name": "address"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "c-form-group u-mt-x5"
  }, [_c('router-link', {
    staticClass: "o-button o-button--primary o-button--block o-button--large",
    attrs: {
      "to": "/merchant/registration/3"
    }
  }, [_vm._v(" Next ")])], 1)], 1)])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48053ec2", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9ae21e0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PlacesSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-places-search"
  }, [_c('div', {
    staticClass: "c-form-group"
  }, [_c('input', {
    ref: "input",
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "name": _vm.name,
      "placeholder": "Masukan Lokasi Merchant"
    },
    domProps: {
      "value": _vm.address
    },
    on: {
      "keypress": _vm.preventEnter
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "u-weight-bold u-mb-x1",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Lokasi merchant dalam peta (Opsional) ")]), _vm._v(" "), _c('div', {
    ref: "map",
    staticStyle: {
      "width": "100%",
      "height": "300px"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "c-places-search__toggle-lat-lng u-mt-x2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showLatLng),
      expression: "showLatLng"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.showLatLng) ? _vm._i(_vm.showLatLng, null) > -1 : (_vm.showLatLng)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.showLatLng,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.showLatLng = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.showLatLng = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.showLatLng = $$c
        }
      }
    }
  }), _vm._v("\n        Show latitude & longitude input\n    ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showLatLng),
      expression: "showLatLng"
    }],
    staticClass: "o-grid c-form-group"
  }, [_c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('label', {
    attrs: {
      "for": "lat"
    }
  }, [_vm._v("Latitude")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lat),
      expression: "lat"
    }],
    staticClass: "o-input",
    attrs: {
      "id": "lat",
      "type": "text",
      "name": "lat",
      "placeholder": "Latitude"
    },
    domProps: {
      "value": (_vm.lat)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lat = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-grid__col u-4/12"
  }, [_c('label', {
    attrs: {
      "for": "lng"
    }
  }, [_vm._v("Longitude")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lng),
      expression: "lng"
    }],
    staticClass: "o-input",
    attrs: {
      "id": "lng",
      "type": "text",
      "name": "lng",
      "placeholder": "Longitude"
    },
    domProps: {
      "value": (_vm.lng)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lng = $event.target.value
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d9ae21e0", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/PlacesSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PlacesSearch.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d9ae21e0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PlacesSearch.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/PlacesSearch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PlacesSearch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9ae21e0", Component.options)
  } else {
    hotAPI.reload("data-v-d9ae21e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/pages/merchant/MerchantRegistration2.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration2.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48053ec2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration2.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/merchant/MerchantRegistration2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MerchantRegistration2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48053ec2", Component.options)
  } else {
    hotAPI.reload("data-v-48053ec2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUGxhY2VzU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vU3RlcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL01lcmNoYW50UmVnaXN0cmF0aW9uMi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbjIudnVlPzVlY2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlPzEyOTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWU/OWI1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbjIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUF5QkE7O0FBR0E7O3dDQUdBOzREQUNBO29EQUNBO0FBRUE7O0FBTEE7MEJBTUE7O2lCQUVBO3FCQUNBO3dCQUNBO3FCQUNBO2lCQUNBO2lCQUVBO0FBUEE7QUFRQTs7O3NDQUVBO3FIQUNBO0FBRUE7QUFKQTs7QUFRQTs7a0NBQ0E7OEJBQ0E7OEJBRUE7O3lGQUNBOzJFQUNBOzBCQUVBOztnQ0FDQTt3REFDQTtBQUVBOztrQkFFQTtBQUNBO0FBQ0E7OzswQ0FFQTtrRkFDQTsrQ0FDQTtBQUNBOzt3QkFFQTtzQkFDQTsyQkFDQTttQ0FDQTtnQ0FFQTtBQU5BO0FBT0E7NkRBQ0E7MkJBQ0E7O3FCQUVBO3VCQUNBOzBCQUNBOzJCQUdBO0FBTkE7O3lFQU9BOzRDQUNBO21CQUVBOzs4QkFDQTtBQUNBO2tDQUNBOzJCQUVBOzttQ0FDQTs2REFHQTs7MERBQ0E7d0NBQ0E7QUFFQTs7K0JBSUE7O2dFQUNBO3VDQUVBOzt5Q0FDQTswQkFDQTtzQ0FDQTtBQUNBO0FBR0E7O2tEQUNBO2tDQUNBO0FBQ0E7MEJBR0E7OzZDQUNBO2dEQUNBO3lDQUNBO29DQUNBO0FBQ0E7QUFFQTs7MEVBRUE7O2lFQUVBOztpREFFQTtvREFDQTsyQkFDQTtxREFDQTtBQUNBO3VCQUVBOzs4QkFFQTttQkFDQTtBQUNBOytDQUNBO2lDQUNBO2tCQUNBO0FBQ0E7QUFDQTt1REFDQTsyQkFDQTtnQ0FDQTtnQ0FDQTtBQUNBO3VEQUNBOzJDQUVBOzs7d0JBRUE7QUFEQSxvQ0FFQTt3Q0FDQTt1REFDQTtxREFDQTt1QkFDQTt3Q0FDQTtBQUNBO2lEQUNBO21CQUNBO0FBRUE7QUEzR0E7QUExQ0EsRzs7Ozs7Ozs7Ozs7QUNUQTs7NEJBSUE7QUFGQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQ0E7O0FBRUE7Z0dBRUE7QUFEQSxHOzs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3BDQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNqREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0EsZ1pBQXlQO0FBQ3pQO0FBQ0EsbVBBQTZIO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQSwyWUFBeVA7QUFDelA7QUFDQSw4T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLDZaQUF5UDtBQUN6UDtBQUNBLGdRQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYy1wbGFjZXMtc2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvLWlucHV0XCIgOm5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJNYXN1a2FuIExva2FzaSBNZXJjaGFudFwiIEBrZXlwcmVzcz1cInByZXZlbnRFbnRlclwiIDp2YWx1ZT1cImFkZHJlc3NcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIiBjbGFzcz1cInUtd2VpZ2h0LWJvbGQgdS1tYi14MVwiPkxva2FzaSBtZXJjaGFudCBkYWxhbSBwZXRhIChPcHNpb25hbCkgPC9sYWJlbD5cbiAgICAgICAgPGRpdiByZWY9XCJtYXBcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4O1wiPjwvZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjLXBsYWNlcy1zZWFyY2hfX3RvZ2dsZS1sYXQtbG5nIHUtbXQteDJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwic2hvd0xhdExuZ1wiPlxuICAgICAgICAgICAgU2hvdyBsYXRpdHVkZSAmIGxvbmdpdHVkZSBpbnB1dFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IHYtc2hvdz1cInNob3dMYXRMbmdcIiBjbGFzcz1cIm8tZ3JpZCBjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGF0XCI+TGF0aXR1ZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhdFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhdFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiTGF0aXR1ZGVcIiB2LW1vZGVsPVwibGF0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG5nXCI+TG9uZ2l0dWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsbmdcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJsbmdcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkxvbmdpdHVkZVwiIHYtbW9kZWw9XCJsbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbG9hZCwgbG9hZGVkIH0gZnJvbSAnLi4vYXBpL21hcC9sb2FkZXInXG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGFkZHJlc3M6ICcnLCBsYXQ6ICcnLCBsbmc6ICcnIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4gIHtcbiAgICAgICAgICAgICAgICBtYXA6ICcnLFxuICAgICAgICAgICAgICAgIG1hcmtlcnM6IFtdLFxuICAgICAgICAgICAgICAgIHNob3dMYXRMbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgIGxhdDogJycsXG4gICAgICAgICAgICAgICAgbG5nOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzVmVsdWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkodGhpcy52YWx1ZS5hZGRyZXNzKSAmJiAodHlwZW9mIHRoaXMudmFsdWUubGF0ID09PSAnbnVtYmVyJykgJiYgKHR5cGVvZiB0aGlzLnZhbHVlLmxuZyA9PT0gJ251bWJlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuXG4gICAgICAgICAgICAvL2xvYWQoJ0FJemFTeUR4dTdtdjVtbFBNOUFqMkNpWUtGV1k5YjZhZGl6ZEM0YycsICczJywgWydwbGFjZXMnXSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMudmFsdWUuYWRkcmVzcztcbiAgICAgICAgICAgIHRoaXMubGF0ID0gdGhpcy52YWx1ZS5sYXQ7XG4gICAgICAgICAgICB0aGlzLmxuZyA9IHRoaXMudmFsdWUubG5nO1xuXG4gICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0geyBsYXQ6IHRoaXMudmFsdWUubGF0LCBsbmc6IHRoaXMudmFsdWUubG5nfTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXAoY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaGFzVmVsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXJrZXIodGhpcy52YWx1ZS5hZGRyZXNzLCBjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBpbml0TWFwKGNlbnRlcikge1xuICAgICAgICAgICAgICAgIGlmKCAodHlwZW9mIGNlbnRlci5sYXQgIT09ICdudW1iZXInKSAmJiAodHlwZW9mIGNlbnRlci5sbmcgIT09ICdudW1iZXInKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyID0ge2xhdDogLTMzLjg2ODgsIGxuZzogMTUxLjIxOTV9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLiRyZWZzLm1hcCwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTMsXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVJZDogJ3JvYWRtYXAnLFxuICAgICAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZU1hcmtlcih0aXRsZSwgcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXAgPSB0aGlzLm1hcDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW9jb2RlUG9zaXRpb24obWFya2VyLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXAgPSB0aGlzLm1hcDtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHNlYXJjaCBib3ggYW5kIGxpbmsgaXQgdG8gdGhlIFVJIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLiRyZWZzLmlucHV0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEJveCA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuU2VhcmNoQm94KGlucHV0KTtcblxuICAgICAgICAgICAgICAgIC8vIEJpYXMgdGhlIFNlYXJjaEJveCByZXN1bHRzIHRvd2FyZHMgY3VycmVudCBtYXAncyB2aWV3cG9ydC5cbiAgICAgICAgICAgICAgICBtYXAuYWRkTGlzdGVuZXIoJ2JvdW5kc19jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJveC5zZXRCb3VuZHMobWFwLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXJzID0gdGhpcy5tYXJrZXJzO1xuXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZmlyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgcHJlZGljdGlvbiBhbmQgcmV0cmlldmVcbiAgICAgICAgICAgICAgICAvLyBtb3JlIGRldGFpbHMgZm9yIHRoYXQgcGxhY2UuXG4gICAgICAgICAgICAgICAgc2VhcmNoQm94LmFkZExpc3RlbmVyKCdwbGFjZXNfY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2VzID0gc2VhcmNoQm94LmdldFBsYWNlcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxhY2VzIG5vdCBmb3VuZCwgcGxlYXNlIGlucHV0IGxhdGl0dWRlICYgbG9uZ2l0dWRlIG1hbnVhbGx5LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGF0TG5nPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBvbGQgbWFya2Vycy5cbiAgICAgICAgICAgICAgICAgICAgbWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBwbGFjZSwgZ2V0IHRoZSBpY29uLCBuYW1lIGFuZCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZXMuZm9yRWFjaChmdW5jdGlvbihwbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwbGFjZS5nZW9tZXRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0dXJuZWQgcGxhY2UgY29udGFpbnMgbm8gZ2VvbWV0cnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLCBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFya2VyKHBsYWNlLm5hbWUsIHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBnZW9jb2RlcyBoYXZlIHZpZXdwb3J0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kcy51bmlvbihwbGFjZS5nZW9tZXRyeS52aWV3cG9ydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kcy5leHRlbmQocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcC5maXRCb3VuZHMoYm91bmRzKTtcblxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudEVudGVyKGUpIHtcbiAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRWYWx1ZShhZGRyZXNzLCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXQgPSBwb3NpdGlvbi5sYXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxuZyA9IHBvc2l0aW9uLmxuZygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlb2NvZGVQb3NpdGlvbihwb3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gICAgICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7XG4gICAgICAgICAgICAgICAgICAgIGxhdExuZzogcG9zXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRfYWRkcmVzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzICYmIHJlc3BvbnNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzcyA9IHJlc3BvbnNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzID0gJ0Nhbm5vdCBkZXRlcm1pbmUgYWRkcmVzcyBhdCB0aGlzIGxvY2F0aW9uLic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShmb3JtYXR0ZWRfYWRkcmVzcywgcG9zKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFBsYWNlc1NlYXJjaC52dWU/NTYxYjg5ZjAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnc3RlcHdpemFyZC1zdGVwJywgeyBhY3RpdmU6IGFjdGl2ZSA9PSAxIH0gXVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIj4xPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydzdGVwd2l6YXJkLXN0ZXAnLCB7IGFjdGl2ZTogYWN0aXZlID09IDIgfSBdXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiPjI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ3N0ZXB3aXphcmQtc3RlcCcsIHsgYWN0aXZlOiBhY3RpdmUgPT0gMyB9IF1cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBidG4tY2lyY2xlXCI+MzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnc3RlcHdpemFyZC1zdGVwJywgeyBhY3RpdmU6IGFjdGl2ZSA9PSA0IH0gXVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIj40PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogeyByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFN0ZXBUYWIudnVlPzk3Y2ViMWQ4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZXJjaGFudC1yZWdpc3RyYXRpb24gby1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHN0ZXAgYWN0aXZlPVwiMlwiPjwvc3RlcD5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm8taGVhZGluZyB1LW0teDNcIj5cbiAgICAgICAgICAgICAgICBMb2thc2kgTWVyY2hhbnRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLTJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBsYWNlcyBuYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3BsYWNlcz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwIHUtbXQteDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vM1wiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIG8tYnV0dG9uLS1sYXJnZVwiPiBOZXh0IDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUGxhY2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZSdcbiAgICBpbXBvcnQgU3RlcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0ZXBUYWIudnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7IFBsYWNlcywgU3RlcCB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE1lcmNoYW50UmVnaXN0cmF0aW9uMi52dWU/NDY1YjY0ODMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZXJjaGFudC1yZWdpc3RyYXRpb24gby1zZWN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1jb250YWluZXJcIlxuICB9LCBbX2MoJ3N0ZXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlXCI6IFwiMlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taGVhZGluZyB1LW0teDNcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTG9rYXNpIE1lcmNoYW50XFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWItMlwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdwbGFjZXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImFkZHJlc3NcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwIHUtbXQteDVcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9tZXJjaGFudC9yZWdpc3RyYXRpb24vM1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiIE5leHQgXCIpXSldLCAxKV0sIDEpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ4MDUzZWMyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ODA1M2VjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00ODA1M2VjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24yLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3RlcHdpemFyZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0ZXB3aXphcmQtcm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnc3RlcHdpemFyZC1zdGVwJywge1xuICAgICAgYWN0aXZlOiBfdm0uYWN0aXZlID09IDFcbiAgICB9XVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjFcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3N0ZXB3aXphcmQtc3RlcCcsIHtcbiAgICAgIGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PSAyXG4gICAgfV1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydzdGVwd2l6YXJkLXN0ZXAnLCB7XG4gICAgICBhY3RpdmU6IF92bS5hY3RpdmUgPT0gM1xuICAgIH1dXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBidG4tY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiM1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnc3RlcHdpemFyZC1zdGVwJywge1xuICAgICAgYWN0aXZlOiBfdm0uYWN0aXZlID09IDRcbiAgICB9XVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjRcIildKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1jYmRjYTE0NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtY2JkY2ExNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtY2JkY2ExNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSAxNiAxNyAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcGxhY2VzLXNlYXJjaFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogX3ZtLm5hbWUsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTWFzdWthbiBMb2thc2kgTWVyY2hhbnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmFkZHJlc3NcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXByZXNzXCI6IF92bS5wcmV2ZW50RW50ZXJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LXdlaWdodC1ib2xkIHUtbWIteDFcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxva2FzaSBtZXJjaGFudCBkYWxhbSBwZXRhIChPcHNpb25hbCkgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcIm1hcFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIzMDBweFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcGxhY2VzLXNlYXJjaF9fdG9nZ2xlLWxhdC1sbmcgdS1tdC14MlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd0xhdExuZyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dMYXRMbmdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnNob3dMYXRMbmcpID8gX3ZtLl9pKF92bS5zaG93TGF0TG5nLCBudWxsKSA+IC0xIDogKF92bS5zaG93TGF0TG5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnNob3dMYXRMbmcsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uc2hvd0xhdExuZyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5zaG93TGF0TG5nID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5zaG93TGF0TG5nID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFNob3cgbGF0aXR1ZGUgJiBsb25naXR1ZGUgaW5wdXRcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dMYXRMbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TGF0TG5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJsYXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxhdGl0dWRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sYXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsYXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxhdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibGF0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTGF0aXR1ZGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sYXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubGF0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxuZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9uZ2l0dWRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxuZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG5nXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTG9uZ2l0dWRlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmxuZyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQ5YWUyMWUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kOWFlMjFlMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QbGFjZXNTZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LWQ5YWUyMWUwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUGxhY2VzU2VhcmNoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDlhZTIxZTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGxhY2VzU2VhcmNoLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFBsYWNlc1NlYXJjaC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDlhZTIxZTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kOWFlMjFlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3RlcFRhYi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWNiZGNhMTQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N0ZXBUYWIudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFN0ZXBUYWIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWNiZGNhMTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtY2JkY2ExNDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TdGVwVGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSAxNiAxNyAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWVyY2hhbnRSZWdpc3RyYXRpb24yLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDgwNTNlYzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWVyY2hhbnRSZWdpc3RyYXRpb24yLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbjIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBNZXJjaGFudFJlZ2lzdHJhdGlvbjIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ4MDUzZWMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDgwNTNlYzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21lcmNoYW50L01lcmNoYW50UmVnaXN0cmF0aW9uMi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSJdLCJzb3VyY2VSb290IjoiIn0=