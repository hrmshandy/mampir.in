webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    data: function data() {
        return {
            image: ''
        };
    },

    watch: {
        value: function value(_value) {
            if (_value) this.image = _value;
        }
    },
    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;

            if (!files.length) return;
            this.createImage(files[0]);

            this.$emit('input', files[0]);
        },
        createImage: function createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = function (e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        removeImage: function removeImage(e) {
            this.image = '';

            this.$emit('input', '');
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PlacesSearch.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_map_loader__ = __webpack_require__("./resources/assets/js/api/map/loader.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        name: { type: String, required: true },
        value: { type: String },
        location: { type: Object, default: function _default() {
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
            return !_.isEmpty(this.location.address) && typeof this.location.lat === 'number' && typeof this.location.lng === 'number';
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.address = this.location.address;
        this.lat = this.location.lat;
        this.lng = this.location.lng;

        __WEBPACK_IMPORTED_MODULE_0__api_map_loader__["b" /* loaded */].then(function () {
            var currentPosition = { lat: _this.location.lat, lng: _this.location.lng };
            _this.initMap(currentPosition);

            if (_this.hasVelue) {
                _this.createMarker(_this.location.address, currentPosition);
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
            this.$emit('input', address);
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__ = __webpack_require__("./node_modules/vue2-dropzone/dist/vue2-dropzone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PlacesSearch_vue__ = __webpack_require__("./resources/assets/js/components/PlacesSearch.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PlacesSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PlacesSearch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_StepTab_vue__ = __webpack_require__("./resources/assets/js/components/StepTab.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_StepTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_StepTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ImageUpload_vue__ = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ImageUpload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ImageUpload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vee_validate__);








/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Places: __WEBPACK_IMPORTED_MODULE_1__components_PlacesSearch_vue___default.a, Dropzone: __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default.a, Step: __WEBPACK_IMPORTED_MODULE_2__components_StepTab_vue___default.a, ImageUpload: __WEBPACK_IMPORTED_MODULE_3__components_ImageUpload_vue___default.a },
    data: function data() {
        return {
            activeTab: 1,
            dataMerchant: {
                name: '',
                address: '',
                email: '',
                website: '',
                images: '',
                phone: ''
            },
            validator: new __WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"]({
                name: 'required',
                address: 'required',
                email: 'required|email',
                phone: 'required',
                images: 'required'
            })
        };
    },

    methods: {
        template: function template() {
            return '\n              <div class="dz-preview dz-file-preview">\n                  <div class="dz-image" style="width: 100px;height: 100px">\n                      <img data-dz-thumbnail /></div>\n                  <div class="dz-details">\n                    <div class="dz-size"><span data-dz-size></span></div>\n                    <div class="dz-filename"><span data-dz-name></span></div>\n                  </div>\n                  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n                  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n                  <div class="dz-success-mark"><i class="fa fa-check"></i></div>\n                  <div class="dz-error-mark"><i class="fa fa-close"></i></div>\n              </div>\n          ';
        },
        validate: function validate(field, e) {
            this.validator.validate(field, e.target.value);
        },
        submit: function submit() {
            this.validator.validateAll({ name: this.dataMerchant.name, images: this.dataMerchant.images, address: this.dataMerchant.address, email: this.dataMerchant.email, phone: this.dataMerchant.phone }).then(function (result) {
                if (!result) {
                    return;
                }

                router.push('/merchant/registration/2');
            }).catch(function () {
                console.log('error');
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * vee-validate v2.0.0-rc.13
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VeeValidate = factory());
}(this, (function () { 'use strict';

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var validate$4 = function (value, ref) {
  var min = ref[0];
  var max = ref[1];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$4(val, [min, max]); });
  }

  return Number(min) <= value && Number(max) >= value;
};

var confirmed = function (value, other) { return String(value) === String(other); };

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

var credit_card = function (value) { return isCreditCard(String(value)); };

var validate$5 = function (value, params) {
  var decimals = Array.isArray(params) ? (params[0] || '*') : '*';
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, params); });
  }

  if (value === null || value === undefined || value === '') {
    return true;
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^-?\\d*(\\.\\d" + regexPart + ")?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
    return parsedValue === parsedValue;
};

var validate$6 = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$6(val, [length]); });
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var dimensions = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false;
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
};

var merge_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

var isByteLength_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
});

var isFQDN = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

var isEmail_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);



var _isByteLength2 = _interopRequireDefault(isByteLength_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var validate$7 = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val)); });
  }

  return isEmail(String(value));
};

var ext = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');

  return files.every(function (file) { return regex.test(file.name); });
};

var image = function (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }
); };

var validate$8 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$8(val, options); });
  }

  // eslint-disable-next-line
  return !! options.filter(function (option) { return option == value; }).length;
};

var isIP_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip = function (value, ref) {
  if ( ref === void 0 ) ref = [4];
  var version = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, [version]); });
  }

  return isIP(value, version);
};

var max = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var max_value = function (value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var mimes = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');

  return files.every(function (file) { return regex.test(file.type); });
};

var min = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};

var min_value = function (value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$9(val, options); });
  }

  // eslint-disable-next-line
  return ! options.filter(function (option) { return option == value; }).length;
};

var numeric = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^[0-9]+$/.test(String(val)); });
  }

  return /^[0-9]+$/.test(String(value));
};

var regex = function (value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};

var required = function (value, params) {
  if ( params === void 0 ) params = [false];

  if (Array.isArray(value)) {
    return !! value.length;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  var invalidateFalse = params[0];
  if (value === false && invalidateFalse) {
    return false;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return !! String(value).trim().length;
};

var size = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var isURL_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;



var _assertString2 = _interopRequireDefault(assertString_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);



var _isIP2 = _interopRequireDefault(isIP_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url = function (value, ref) {
  if ( ref === void 0 ) ref = [true];
  var requireProtocol = ref[0];

  var options = { require_protocol: !!requireProtocol, allow_underscores: true };
  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, options); });
  }

  return isURL(value, options);
};

/* eslint-disable camelcase */
var Rules = {
  alpha_dash: validate$1,
  alpha_num: validate$2,
  alpha_spaces: validate$3,
  alpha: validate,
  between: validate$4,
  confirmed: confirmed,
  credit_card: credit_card,
  decimal: validate$5,
  digits: validate$6,
  dimensions: dimensions,
  email: validate$7,
  ext: ext,
  image: image,
  in: validate$8,
  ip: ip,
  max: max,
  max_value: max_value,
  mimes: mimes,
  min: min,
  min_value: min_value,
  not_in: validate$9,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url
};

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

/**
 * Sets the data attribute.
 * @param {*} el
 * @param {String} name
 * @param {String} value
 */
var setDataAttribute = function (el, name, value) { return el.setAttribute(("data-vv-" + name), value); };

/**
 * Shallow object comparison.
 *
 * @param {*} lhs 
 * @param {*} rhs 
 * @return {Boolean}
 */
var isEqual = function (lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (! scope && el.form) {
    scope = getDataAttribute(el.form, 'scope');
  }

  return scope || null;
};

/**
 * Gets the value in an object safely.
 * @param {String} propPath
 * @param {Object} target
 * @param {*} def
 */
var getPath = function (propPath, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!propPath || !target) { return def; }
  var value = target;
  propPath.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
      value = def;

      return false;
    }

    value = value[prop];

    return true;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 *
 * @param {String} path
 * @param {Object} target
 */
var hasPath = function (path, target) {
  var obj = target;
  return path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }

    obj = obj[prop];

    return true;
  });
};

/**
 * @param {String} rule
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Normalizes the given rules expression.
 *
 * @param {Object|String} rules
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  var validations = {};
  if (isObject(rules)) {
    Object.keys(rules).forEach(function (rule) {
      var params = [];
      if (rules[rule] === true) {
        params = [];
      } else if (Array.isArray(rules[rule])) {
        params = rules[rule];
      } else {
        params = [rules[rule]];
      }

      if (rules[rule] !== false) {
        validations[rule] = params;
      }
    });

    return validations;
  }

  rules.split('|').forEach(function (rule) {
    var parsedRule = parseRule(rule);
    if (! parsedRule.name) {
      return;
    }

    validations[parsedRule.name] = parsedRule.params;
  });

  return validations;
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, immediate) {
  if ( wait === void 0 ) wait = 0;
  if ( immediate === void 0 ) immediate = false;

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;
      if (!immediate) { fn.apply(void 0, args); }
    };
    /* istanbul ignore next */
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    /* istanbul ignore next */
    if (callNow) { fn.apply(void 0, args); }
  };
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[vee-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 * @param {String} message
 */
var createError = function (message) { return new Error(("[vee-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (object) { return object !== null && object && typeof object === 'object' && ! Array.isArray(object); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array.
 * Simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
};

/**
 * Assign polyfill from the mdn.
 * @param {Object} target
 * @return {Object}
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

/**
 * Generates a unique id.
 * @return {String}
 */
var uniqId = function () { return ("_" + (Math.random().toString(36).substr(2, 9))); };

/**
 * polyfills array.find
 * @param {Array} array
 * @param {Function} predicate
 */
var find = function (array, predicate) {
  if (isObject(array)) {
    array = toArray(array);
  }
  if (array.find) {
    return array.find(predicate);
  }
  var result;
  array.some(function (item) {
    if (predicate(item)) {
      result = item;
      return true;
    }

    return false;
  });

  return result;
};

var getInputEventName = function (el) {
  if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
    return 'change';
  }

  return 'input';
};

var ErrorBag = function ErrorBag () {
  this.items = [];
};

/**
   * Adds an error to the internal array.
   *
   * @param {Object} error The error object.
   */
ErrorBag.prototype.add = function add (error) {
  // handle old signature.
  if (arguments.length > 1) {
    error = {
      field: arguments[0],
      msg: arguments[1],
      rule: arguments[2],
      scope: arguments[3] || null
    };
  }

  error.scope = error.scope || null;
  this.items.push(error);
};

/**
 * Updates a field error with the new field scope.
 *
 * @param {String} id 
 * @param {Object} error 
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
   * Gets all error messages from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   * @return {Array} errors Array of all error messages.
   */
ErrorBag.prototype.all = function all (scope) {
  if (! scope) {
    return this.items.map(function (e) { return e.msg; });
  }

  return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};

/**
   * Checks if there are any errors in the internal array.
   * @param {String} scope The Scope name, optional.
   * @return {boolean} result True if there was at least one error, false otherwise.
   */
ErrorBag.prototype.any = function any (scope) {
  if (! scope) {
    return !! this.items.length;
  }

  return !! this.items.filter(function (e) { return e.scope === scope; }).length;
};

/**
   * Removes all items from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  if (! scope) {
    scope = null;
  }

  var removeCondition = function (e) { return e.scope === scope; };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Collects errors into groups or for a specific field.
   *
   * @param{string} field The field name.
   * @param{string} scope The scope name.
   * @param {Boolean} map If it should map the errors to strings instead of objects.
   * @return {Array} errors The errors for the specified field.
   */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    if ( map === void 0 ) map = true;

  if (! field) {
    var collection = {};
    this.items.forEach(function (e) {
      if (! collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection;
  }

  if (! scope) {
    return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return (map ? e.msg : e); });
  }

  return this.items.filter(function (e) { return e.field === field && e.scope === scope; })
    .map(function (e) { return (map ? e.msg : e); });
};
/**
   * Gets the internal array length.
   *
   * @return {Number} length The internal array length.
   */
ErrorBag.prototype.count = function count () {
  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 *
 * @param {String} id 
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : null;
};

/**
   * Gets the first error message for a specific field.
   *
   * @param{string} field The field name.
   * @return {string|null} message The error message.
   */
ErrorBag.prototype.first = function first (field, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = null;

  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result;
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope);
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].field === field && (this$1.items[i].scope === scope)) {
      return this$1.items[i].msg;
    }
  }

  return null;
};

/**
   * Returns the first error rule for the specified field
   *
   * @param {string} field The specified field.
   * @return {string|null} First error rule on the specified field if one is found, otherwise null
   */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || null;
};

/**
   * Checks if the internal array has at least one error for the specified field.
   *
   * @param{string} field The specified field.
   * @return {Boolean} result True if at least one error is found, false otherwise.
   */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !! this.first(field, scope);
};

/**
   * Gets the first error message for a specific field and a rule.
   * @param {String} name The name of the field.
   * @param {String} rule The name of the rule.
   * @param {String} scope The name of the scope (optional).
   */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || null;
};

/**
 * Removes errors by matching against the id.
 * @param {String} id 
 */
ErrorBag.prototype.removeById = function removeById (id) {
    var this$1 = this;

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].id === id) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Removes all error messages associated with a specific field.
   *
   * @param{string} field The field which messages are to be removed.
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.remove = function remove (field, scope) {
    var this$1 = this;

  var removeCondition = scope ? function (e) { return e.field === field && e.scope === scope; }
    : function (e) { return e.field === field && e.scope === null; };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Get the field attributes if there's a rule selector.
   *
   * @param{string} field The specified field.
   * @return {Object|null}
   */
ErrorBag.prototype._selector = function _selector (field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
      var name = ref[0];
      var rule = ref[1];

    return { name: name, rule: rule };
  }

  return null;
};

/**
   * Get the field scope if specified using dot notation.
   *
   * @param {string} field the specifie field.
   * @return {Object|null}
   */
ErrorBag.prototype._scope = function _scope (field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

    return { name: name, scope: scope };
  }

  return null;
};

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !! this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale]) {
    return undefined;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage (locale, key, fallback) {
  if (! this.hasMessage(locale, key)) {
    return fallback || this._getDefaultMessage(locale);
  }

  return this.container[locale].messages[key];
};

/**
 * Gets a specific message for field. fallsback to the rule message.
 *
 * @param {String} locale
 * @param {String} field
 * @param {String} key
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key) {
  if (! this.hasLocale(locale)) {
    return this.getMessage(locale, key);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (! dict || ! dict[key]) {
    return this.getMessage(locale, key);
  }

  return dict[key];
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (! this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  );
};

Dictionary.prototype.merge = function merge (dictionary) {
  this._merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Dictionary.prototype._merge = function _merge (target, source) {
    var this$1 = this;

  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
          var obj;
      }

      this$1._merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
      var obj$1;
  });

  return target;
};

var messages = {
  _default: function (field) { return ("The " + field + " value is not valid."); },
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max + ".");
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
  credit_card: function (field) { return ("The " + field + " field is invalid."); },
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = ['*'];
    var decimals = ref[0];

    return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
  email: function (field) { return ("The " + field + " field must be a valid email."); },
  ext: function (field) { return ("The " + field + " field must be a valid file."); },
  image: function (field) { return ("The " + field + " field must be an image."); },
  in: function (field) { return ("The " + field + " field must be a valid value."); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters.");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less.");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters.");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more.");
},
  not_in: function (field) { return ("The " + field + " field must be a valid value."); },
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
  regex: function (field) { return ("The " + field + " field format is invalid."); },
  required: function (field) { return ("The " + field + " field is required."); },
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " field must be less than " + size + " KB.");
},
  url: function (field) { return ("The " + field + " field is not a valid URL."); }
};

/**
 * Generates the options required to construct a field.
 */
var Generator = function Generator () {};

Generator.generate = function generate (el, binding, vnode, options) {
    if ( options === void 0 ) options = {};

  var model = Generator.resolveModel(binding, vnode);

  return {
    name: Generator.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    scope: Generator.resolveScope(el, binding, vnode),
    vm: Generator.makeVM(vnode.context),
    expression: binding.value,
    component: vnode.child,
    classes: options.classes,
    classNames: options.classNames,
    getter: Generator.resolveGetter(el, vnode, model),
    events: Generator.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Generator.resolveDelay(el, vnode, options),
    rules: Generator.resolveRules(el, binding),
    initial: !!binding.modifiers.initial,
    alias: Generator.resolveAlias(el, vnode),
    validity: options.validity,
    aria: options.aria
  };
};

/**
 * 
 * @param {*} el 
 * @param {*} binding 
 */
Generator.resolveRules = function resolveRules (el, binding) {
  if (!binding || !binding.expression) {
    return getDataAttribute(el, 'rules');
  }

  if (typeof binding.value === 'string') {
    return binding.value;
  }

  if (~['string', 'object'].indexOf(typeof binding.value.rules)) {
    return binding.value.rules;
  }

  return binding.value;
};

/**
 * Creates a non-circular partial VM instance from a Vue instance.
 * @param {*} vm 
 */
Generator.makeVM = function makeVM (vm) {
  return {
    get $el () {
      return vm.$el;
    },
    get $refs () {
      return vm.$refs;
    },
    $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
    $validator: vm.$validator ? {
      errors: vm.$validator.errors,
      validate: vm.$validator.validate.bind(vm.$validator)
    } : null
  };
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Generator.resolveDelay = function resolveDelay (el, vnode, options) {
    if ( options === void 0 ) options = {};

  return getDataAttribute(el, 'delay') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-delay']) || options.delay;
};

/**
 * Resolves the alias for the field.
 * @param {*} el 
 * @param {*} vnode 
 */
Generator.resolveAlias = function resolveAlias (el, vnode) {
  return getDataAttribute(el, 'as') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-as']) || el.title || null;
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Generator.resolveEvents = function resolveEvents (el, vnode) {
  if (vnode.child) {
    return getDataAttribute(el, 'validate-on') || (vnode.child.$attrs && vnode.child.$attrs['data-vv-validate-on']);
  }

  return getDataAttribute(el, 'validate-on');
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveScope = function resolveScope (el, binding, vnode) {
    if ( vnode === void 0 ) vnode = {};

  var scope = null;
  if (isObject(binding.value)) {
    scope = binding.value.scope;
  }

  if (vnode.child && !scope) {
    scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
  }

  return scope || getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Generator.resolveModel = function resolveModel (binding, vnode) {
  if (binding.arg) {
    return binding.arg;
  }

  if (isObject(binding.value) && binding.value.arg) {
    return binding.value.arg;
  }

  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
  if (!model) {
    return null;
  }

  var watchable = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(model.expression) && hasPath(model.expression, vnode.context);

  if (!watchable) {
    return null;
  }

  return model.expression;
};

/**
   * Resolves the field name to trigger validations.
   * @return {String} The field name.
   */
Generator.resolveName = function resolveName (el, vnode) {
  if (vnode.child) {
    return getDataAttribute(el, 'name') || (vnode.child.$attrs && (vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'])) || vnode.child.name;
  }

  return getDataAttribute(el, 'name') || el.name;
};

/**
 * Returns a value getter input type.
 */
Generator.resolveGetter = function resolveGetter (el, vnode, model) {
  if (model) {
    return function () {
      return getPath(model, vnode.context);
    };
  }

  if (vnode.child) {
    return function () {
      var path = getDataAttribute(el, 'value-path') || (vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path']);
      if (path) {
        return getPath(path, vnode.child);
      }
      return vnode.child.value;
    };
  }

  switch (el.type) {
  case 'checkbox': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));

    els = toArray(els).filter(function (el) { return el.checked; });
    if (!els.length) { return undefined; }

    return els.map(function (checkbox) { return checkbox.value; });
  };
  case 'radio': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
    var elm = find(els, function (el) { return el.checked; });

    return elm && elm.value;
  };
  case 'file': return function (context) {
    return toArray(el.files);
  };
  case 'select-multiple': return function () {
    return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; });
  };
  default: return function () {
    return el && el.value;
  };
  }
};

var DEFAULT_OPTIONS = {
  targetOf: null,
  initial: false,
  scope: null,
  listen: true,
  name: null,
  active: true,
  required: false,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

/**
 * Generates the default flags for the field.
 * @param {Object} options
 */
var generateFlags = function (options) { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: !!options.rules.required
}); };

var Field = function Field (el, options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = el;
  this.updated = false;
  this.dependencies = [];
  this.watchers = [];
  this.events = [];
  this.rules = {};
  if (!this.isHeadless && !(this.targetOf || options.targetOf)) {
    setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
  }
  options = assign({}, DEFAULT_OPTIONS, options);
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = generateFlags(options);
  this.vm = options.vm || this.vm;
  this.component = options.component || this.component;
  this.update(options);
  this.updated = false;
};

var prototypeAccessors$1 = { isVue: {},validator: {},isRequired: {},isDisabled: {},isHeadless: {},displayName: {},value: {},rejectsFalse: {} };

prototypeAccessors$1.isVue.get = function () {
  return !!this.component;
};

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    warn('No validator instance detected.');
    return { validate: function () {} };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required;
};

prototypeAccessors$1.isDisabled.get = function () {
  return (this.isVue && this.component.disabled) || (this.el && this.el.disabled);
};

prototypeAccessors$1.isHeadless.get = function () {
  return !this.el;
};

/**
 * Gets the display name (user-friendly name).
 * @return {String}
 */
prototypeAccessors$1.displayName.get = function () {
  return this.alias;
};

/**
 * Gets the input value.
 * @return {*}
 */
prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

/**
 * If the field rejects false as a valid value for the required rule. 
 */
prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.isVue || this.isHeadless) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 * @param {Object} options The matching options.
 */
Field.prototype.matches = function matches (options) {
  if (options.id) {
    return this.id === options.id;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 *
 * @param {Object} options
 */
Field.prototype.update = function update (options) {
  this.targetOf = options.targetOf || null;
  this.initial = options.initial || this.initial || false;

  // update errors scope if the field scope was changed.
  if (options.scope && options.scope !== this.scope && this.validator.errors && isCallable(this.validator.errors.update)) {
    this.validator.errors.update(this.id, { scope: options.scope });
  }
  this.scope = options.scope || this.scope || null;
  this.name = options.name || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = options.classes || this.classes || false;
  this.classNames = options.classNames || this.classNames || DEFAULT_OPTIONS.classNames;
  this.alias = options.alias || this.alias;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this.delay = options.delay || this.delay || 0;
  this.events = typeof options.events === 'string' && options.events.length ? options.events.split('|') : this.events;
  this.updateDependencies();
  this.addActionListeners();

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;

  // no need to continue.
  if (this.isHeadless) {
    return;
  }

  this.updateClasses();
  this.addValueListeners();
  this.updateAriaAttrs();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (r === 'confirmed') {
      prev.push({ selector: this$1.rules[r][0] || ((this$1.name) + "_confirmation"), name: r });
    } else if (/after|before/.test(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return; }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref) {
      var selector = ref.selector;
      var name = ref.name;

    var el = null;
    // vue ref selector.
    if (selector[0] === '$') {
      el = this$1.vm.$refs[selector.slice(1)];
    } else {
      // try a query selection.
      el = this$1.vm.$el.querySelector(selector);
    }

    if (!el) {
      // try a name selector
      el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
    }

    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      initial: this$1.initial,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.getter = Generator.resolveGetter(el.$el, { child: el });
    } else {
      options.el = el;
      options.getter = Generator.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
  });
};

/**
 * Removes listeners.
 * @param {RegExp} tag
 */
Field.prototype.unwatch = function unwatch (tag) {
  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return;
  }
  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses () {
  if (!this.classes) { return; }

  toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
  toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
  toggleClass(this.el, this.classNames.valid, !!this.flags.valid);
  toggleClass(this.el, this.classNames.invalid, !!this.flags.invalid);
  toggleClass(this.el, this.classNames.touched, this.flags.touched);
  toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = getInputEventName(this.el);
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.isVue && isCallable(this.component.$once)) {
    this.component.$once('input', onInput);
    this.component.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.component.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.component.$off('blur', onBlur);
      }
    });
    return;
  }

  if (this.isHeadless) { return; }

  this.el.addEventListener(inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
  this.el.addEventListener(blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen) { return; }

  var fn = null;
  if (this.targetOf) {
    fn = function () {
      this$1.validator.validate(("#" + (this$1.targetOf)));
    };
  } else {
    fn = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      if (args.length === 0 || (isCallable(Event) && args[0] instanceof Event)) {
        args[0] = this$1.value;
      }
      this$1.validator.validate(("#" + (this$1.id)), args[0]);
    };
  }
  var validate = debounce(fn, this.delay);

  var inputEvent = getInputEventName(this.el);
  // replace input event with suitable one.
  var events = this.events.map(function (e) {
    return e === 'input' ? inputEvent : e;
  });

  // if there is a watchable model and an on input validation is requested.
  if (this.model && events.indexOf(inputEvent) !== -1) {
    var unwatch = this.vm.$watch(this.model, validate);
    this.watchers.push({
      tag: 'input_model',
      unwatch: unwatch
    });
    // filter out input event as it is already handled by the watcher API.
    events = events.filter(function (e) { return e !== inputEvent; });
  }

  // Add events.
  events.forEach(function (e) {
    if (this$1.isVue) {
      this$1.component.$on(e, validate);
      this$1.watchers.push({
        tag: 'input_vue',
        unwatch: function () {
          this$1.component.$off(e, validate);
        }
      });
      return;
    }

    if (~['radio', 'checkbox'].indexOf(this$1.el.type)) {
      var els = document.querySelectorAll(("input[name=\"" + (this$1.el.name) + "\"]"));
      toArray(els).forEach(function (el) {
        el.addEventListener(e, validate);
        this$1.watchers.push({
          tag: 'input_native',
          unwatch: function () {
            el.removeEventListener(e, validate);
          }
        });
      });

      return;
    }

    this$1.el.addEventListener(e, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function () {
        this$1.el.removeEventListener(e, validate);
      }
    });
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
  if (!this.aria || this.isHeadless || !isCallable(this.el.setAttribute)) { return; }

  this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
  this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || this.isHeadless || !isCallable(this.el.setCustomValidity)) { return; }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  this.watchers.forEach(function (w) { return w.unwatch(); });
  this.watchers = [];
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$1 );

var FieldBag = function FieldBag () {
  this.items = [];
};

var prototypeAccessors$2 = { length: {} };

/**
 * @return {Number} The current collection length.
 */
prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 * @param {Object} matcher
 * @return {Field|undefined} The first matching item.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); });
};

/**
 * @param {Object|Array} matcher
 * @return {Array} Array of matching field items.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
  }

  return this.items.filter(function (item) { return item.matches(matcher); });
};

/**
 * Maps the field items using the mapping function.
 *
 * @param {Function} mapper
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 * @param {Object|Field} matcher
 * @return {Field|null}
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null; }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);

  return item;
};

/**
 * Adds a field item to the list.
 *
 * @param {Field} item
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.find({ id: item.id })) {
    throw createError(("Field with id " + (item.id) + " is already added."));
  }

  this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$2 );

var after = function (moment) { return function (value, ref) {
  var other = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }

  var dateValue = moment(value, format, true);
  var otherValue = moment(other, format, true);

  // if either is not valid.
  if (! dateValue.isValid() || ! otherValue.isValid()) {
    return false;
  }

  return dateValue.isAfter(otherValue) || (inclusion && dateValue.isSame(otherValue));
}; };

var before = function (moment) { return function (value, ref) {
  var other = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  var dateValue = moment(value, format, true);
  var otherValue = moment(other, format, true);

  // if either is not valid.
  if (! dateValue.isValid() || ! otherValue.isValid()) {
    return false;
  }

  return dateValue.isBefore(otherValue) || (inclusion && dateValue.isSame(otherValue));
}; };

var date_format = function (moment) { return function (value, ref) {
	var format = ref[0];

	return moment(value, format, true).isValid();
 }	};

var date_between = function (moment) { return function (value, params) {
  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    var assign;
    (assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3]);
  } else {
    var assign$1;
    (assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2]);
  }

  var minDate = moment(min, format, true);
  var maxDate = moment(max, format, true);
  var dateVal = moment(value, format, true);

  if (! (minDate.isValid() && maxDate.isValid() && dateVal.isValid())) {
    return false;
  }

  return dateVal.isBetween(minDate, maxDate, 'days', inclusivity);
}; };

var messages$1 = {
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max + ".");
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format + ".");
}
};

var date = {
  make: function (moment) { return ({
    date_format: date_format(moment),
    after: after(moment),
    before: before(moment),
    date_between: date_between(moment)
  }); },
  messages: messages$1,
  installed: false
};

var LOCALE = 'en';
var STRICT_MODE = true;
var DICTIONARY = new Dictionary({
  en: {
    messages: messages,
    attributes: {},
    custom: {}
  }
});

var Validator = function Validator (validations, options) {
  var this$1 = this;
  if ( options === void 0 ) options = { vm: null, fastExit: true };

  this.strict = STRICT_MODE;
  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this.fieldBag = {};
  this._createFields(validations);
  this.paused = false;
  this.fastExit = options.fastExit || false;
  this.ownerId = options.vm && options.vm._uid;
  // create it statically since we don't need constant access to the vm.
  this.clean = options.vm && isCallable(options.vm.$nextTick) ? function () {
    options.vm.$nextTick(function () {
      this$1.errors.clear();
    });
  } : function () {
    this$1.errors.clear();
  };

  // if momentjs is present, install the validators.
  if (typeof moment === 'function') {
    // eslint-disable-next-line
    this.installDateTimeValidators(moment);
  }
};

var prototypeAccessors = { dictionary: {},locale: {},rules: {} };
var staticAccessors = { dictionary: {},rules: {} };

/**
 * @return {Dictionary}
 */
prototypeAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * @return {Dictionary}
 */
staticAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * @return {String}
 */
prototypeAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * @return {Object}
 */
prototypeAccessors.rules.get = function () {
  return Rules;
};

/**
 * @return {Object}
 */
staticAccessors.rules.get = function () {
  return Rules;
};

/**
 * Merges a validator object into the Rules and Messages.
 *
 * @param{string} name The name of the validator.
 * @param{function|object} validator The validator object.
 */
Validator._merge = function _merge (name, validator) {
  if (isCallable(validator)) {
    Rules[name] = validator;
    return;
  }

  Rules[name] = validator.validate;
  if (isCallable(validator.getMessage)) {
    DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
  }

  if (validator.messages) {
    DICTIONARY.merge(
      Object.keys(validator.messages).reduce(function (prev, curr) {
        var dict = prev;
        dict[curr] = {
          messages: ( obj = {}, obj[name] = validator.messages[curr], obj )
        };
          var obj;

        return dict;
      }, {})
    );
  }
};

/**
 * Guards from extnsion violations.
 *
 * @param{string} name name of the validation rule.
 * @param{object} validator a validation rule object.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (! isCallable(validator.validate)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }

  if (! isCallable(validator.getMessage) && ! isObject(validator.messages)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.")
    );
  }
};

/**
 * Static constructor.
 *
 * @param{object} validations The validations object.
 * @return {Validator} validator A validator object.
 */
Validator.create = function create (validations, options) {
  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.extend = function extend (name, validator) {
  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
};

/**
 * Installs the datetime validators and the messages.
 */
Validator.installDateTimeValidators = function installDateTimeValidators (moment) {
  if (typeof moment !== 'function') {
    warn('To use the date-time validators you must provide moment reference.');

    return false;
  }

  if (date.installed) {
    return true;
  }

  var validators = date.make(moment);
  Object.keys(validators).forEach(function (name) {
    Validator.extend(name, validators[name]);
  });

  Validator.updateDictionary({
    en: {
      messages: date.messages
    }
  });
  date.installed = true;

  return true;
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.remove = function remove (name) {
  delete Rules[name];
};

/**
 * Sets the default locale for all validators.
 *
 * @param {String} language The locale id.
 */
Validator.setLocale = function setLocale (language) {
    if ( language === void 0 ) language = 'en';

  /* istanbul ignore if */
  if (! DICTIONARY.hasLocale(language)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
  }

  LOCALE = language;
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 * @param {Boolean} strictMode.
 */
Validator.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Updates the dicitionary, overwriting existing values and adding new ones.
 *
 * @param{object} data The dictionary object.
 */
Validator.updateDictionary = function updateDictionary (data) {
  DICTIONARY.merge(data);
};

Validator.addLocale = function addLocale (locale) {
  if (! locale.name) {
    warn('Your locale must have a name property');
    return;
  }

  this.updateDictionary(( obj = {}, obj[locale.name] = locale, obj ));
    var obj;
};

Validator.prototype.addLocale = function addLocale (locale) {
  Validator.addLocale(locale);
};

/**
 * Creates the fields to be validated.
 *
 * @param{object} validations
 * @return {object} Normalized object.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (! validations) { return; }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existance of a format, so date_format must be supplied.
 * @param {String} name The rule name.
 * @param {Array} validations the field validations.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || this.dictionary.getDateFormat(this.locale);
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule (rule) {
  return !! ~['after', 'before', 'date_between', 'date_format'].indexOf(rule);
};

/**
 * Formats an error message for field and a rule.
 *
 * @param{Field} field The field object.
 * @param{object} rule Normalized rule object.
 * @param {object} data Additional Information about the validation result.
 * @return {string} Formatted error message.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data) {
    if ( data === void 0 ) data = {};

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule);
  // Defaults to english message.
  if (! this.dictionary.hasLocale(LOCALE)) {
    var msg$1 = this.dictionary.getFieldMessage('en', field.name, rule.name);

    return isCallable(msg$1) ? msg$1(name, params, data) : msg$1;
  }

  var msg = this.dictionary.getFieldMessage(LOCALE, field.name, rule.name);

  return isCallable(msg) ? msg(name, params, data) : msg;
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule) {
  if (~ ['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
    if (rule.params.length > 1) {
      return [this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0]), rule.params[1]];
    } else {
      return [this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0])];
    }
  }

  return rule.params;
};

/**
 * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
 * Then the dictionary, then fallsback to field name.
 * @param {Field} field The field object.
 * @return {String} The name to be used in the errors.
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.displayName || this.dictionary.getAttribute(LOCALE, field.name, field.name);
};

/**
 * Tests a single input value against a rule.
 *
 * @param{Field} field The field under validation.
 * @param{*} valuethe value of the field.
 * @param{object} rule the rule object.
 * @return {boolean} Whether it passes the check.
 */
Validator.prototype._test = function _test (field, value, rule) {
    var this$1 = this;

  var validator = Rules[rule.name];
  var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
  if (! validator || typeof validator !== 'function') {
    throw createError(("No such validator '" + (rule.name) + "' exists."));
  }

  // has field depenencies
  if (/(confirmed|after|before)/.test(rule.name)) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      if (params.length > 1) {
        params = [target.field.value, params[1]];
      } else {
        params = [target.field.value];
      }
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (date.installed && this._isADateRule(rule.name)) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, params);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      if (! allValid) {
        this$1.errors.add({
          id: field.id,
          field: field.name,
          msg: this$1._formatErrorMessage(field, rule, data),
          rule: rule.name,
          scope: field.scope
        });
      }

      return allValid;
    });
  }

  if (! isObject(result)) {
    result = { valid: result, data: {} };
  }

  if (! result.valid) {
    this.errors.add({
      id: field.id,
      field: field.name,
      msg: this._formatErrorMessage(field, rule, result.data),
      rule: rule.name,
      scope: field.scope
    });
  }

  return result.valid;
};

/**
 * Registers a field to be validated.
 *
 * @param{Field|Object} name The field name.
 * @return {Field}
 */
Validator.prototype.attach = function attach (field) {
  // deprecate: handle old signature.
  if (arguments.length > 1) {
    field = assign({}, {
      name: arguments[0],
      rules: arguments[1]
    }, arguments[2] || { vm: { $validator: this } });
  }

  if (!(field instanceof Field)) {
    field = new Field(field.el || null, field);
  }

  this.fields.push(field);
  // validate if initial.
  if (field.initial) {
    this.validate(("#" + (field.id)), field.value);
  }
  if (!field.scope) {
    this.fieldBag = assign({}, this.fieldBag, ( obj = {}, obj[("" + (field.name))] = field.flags, obj ));
      var obj;
    return field;
  }

  var scopeObj = assign({}, this.fieldBag[("$" + (field.scope))] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1 ));
    var obj$1;
  this.fieldBag = assign({}, this.fieldBag, ( obj$2 = {}, obj$2[("$" + (field.scope))] = scopeObj, obj$2 ));
    var obj$2;

  return field;
};

/**
 * Sets the flags on a field.
 *
 * @param {String} name
 * @param {Object} flags
 */
Validator.prototype.flag = function flag (name, flags) {
  var field = this._resolveField(name);
  if (! field) {
    return;
  }

  Object.keys(field.flags).forEach(function (flag) {
    field.flags[flag] = flags[flag] !== undefined ? flags[flag] : field.flags[flag];
  });
  if (field.classes) {
    field.updateClasses();
  }
};

/**
 * Removes a field from the validator.
 *
 * @param{String} name The name of the field.
 * @param {String} scope The name of the field scope.
 */
Validator.prototype.detach = function detach (name, scope) {
  var field = name instanceof Field ? name : this._resolveField(name, scope);
  if (field) {
    field.destroy();
    this.errors.removeById(field.id);
    this.fields.remove(field);
  }
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.prototype.extend = function extend (name, validator) {
  Validator.extend(name, validator);
};

/**
 * Just an alias to the static method for convienece.
 */
Validator.prototype.installDateTimeValidators = function installDateTimeValidators (moment) {
  Validator.installDateTimeValidators(moment);
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Sets the validator current langauge.
 *
 * @param {string} language locale or language id.
 */
Validator.prototype.setLocale = function setLocale (language) {
  /* istanbul ignore if */
  if (! this.dictionary.hasLocale(language)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
  }

  LOCALE = language;
};

/**
 * Updates the messages dicitionary, overwriting existing values and adding new ones.
 *
 * @param{object} data The messages object.
 */
Validator.prototype.updateDictionary = function updateDictionary (data) {
  Validator.updateDictionary(data);
};

/**
 * Tries different strategies to find a field.
 * @param {String} name
 * @param {String} scope
 * @return {Field}
 */
Validator.prototype._resolveField = function _resolveField (name, scope) {
  if (scope) {
    return this.fields.find({ name: name, scope: scope });
  }

  if (name[0] === '#') {
    return this.fields.find({ id: name.slice(1) });
  }

  if (name.indexOf('.') > -1) {
    var parts = name.split('.');
    var field = this.fields.find({ name: parts[1], scope: parts[0] });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null });
};

/**
 * Handles when a field is not found depending on the strict flag.
 *
 * @param {String} name
 * @param {String} scope
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  if (! this.strict) { return Promise.resolve(true); }

  var fullName = scope ? name : ("" + (scope ? scope + '.' : '') + name);
  throw createError(
    ("Validating a non-existant field: \"" + fullName + "\". Use \"attach()\" first.")
  );
};

/**
 * Starts the validation process.
 *
 * @param {Field} field
 * @param {Promise} value
 */
Validator.prototype._validate = function _validate (field, value) {
    var this$1 = this;

  if (! field.isRequired && ~[null, undefined, ''].indexOf(value)) {
    return Promise.resolve(true);
  }

  var promises = [];
  var isExitEarly = false;
  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).some(function (rule) {
    var result = this$1._test(
      field,
      value,
      { name: rule, params: field.rules[rule] }
    );

    if (isCallable(result.then)) {
      promises.push(result);
    } else if (this$1.fastExit && !result) {
      isExitEarly = true;
    } else {
      var resultAsPromise = new Promise(function (resolve) {
        resolve(result);
      });
      promises.push(resultAsPromise);
    }

    return isExitEarly;
  });

  if (isExitEarly) { return Promise.resolve(false); }

  return Promise.all(promises).then(function (values) {
    var valid = values.every(function (t) { return t; });
    return valid;
  });
};

/**
 * Validates a value against a registered field validations.
 *
 * @param{string} name the field name.
 * @param{*} value The value to be validated.
 * @param {String} scope The scope of the field.
 * @return {Promise}
 */
Validator.prototype.validate = function validate (name, value, scope) {
    if ( scope === void 0 ) scope = null;

  if (this.paused) { return Promise.resolve(true); }

  // overload to validate all.
  if (arguments.length === 0) {
    return this.validateScopes();
  }

  // overload to validate scopeless fields.
  if (arguments.length === 1 && arguments[0] === '*') {
    return this.validateAll();
  }

  // overload to validate a scope.
  if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
    var matched = arguments[0].match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(name, scope);
  if (!field) {
    return this._handleFieldNotFound(name, scope);
  }
  this.errors.removeById(field.id);
  if (field.isDisabled) {
    return Promise.resolve(true);
  }
  field.flags.pending = true;
  if (arguments.length === 1) {
    value = field.value;
  }

  return this._validate(field, value).then(function (result) {
    field.flags.pending = false;
    field.flags.valid = result;
    field.flags.invalid = !result;
    field.flags.validated = true;
    field.updateAriaAttrs();
    field.updateCustomValidity();
    field.updateClasses();

    return result;
  });
};

/**
 * Pauses the validator.
 *
 * @return {Validator}
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 *
 * @return {Validator}
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 * @param{Object|String} values The values to be validated.
 * @return {Promise} Returns a promise with the validation result.
 */
Validator.prototype.validateAll = function validateAll (values) {
    var arguments$1 = arguments;
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
    providedValues = true;
  } else if (arguments.length === 0) {
    matcher = { scope: null }; // global scope.
  }

  var promises = this.fields.filter(matcher).map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    providedValues ? values[field.name] : field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

/**
 * Validates all scopes.
 *
 * @returns {Promise} All promises resulted from each scope.
 */
Validator.prototype.validateScopes = function validateScopes () {
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var promises = this.fields.map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

Object.defineProperties( Validator.prototype, prototypeAccessors );
Object.defineProperties( Validator, staticAccessors );

/**
 * Checks if a parent validator instance was requested.
 * @param {Object|Array} injections
 */
var requestsValidator = function (injections) {
  if (! injections) {
    return false;
  }

  /* istanbul ignore next */
  if (Array.isArray(injections) && ~injections.indexOf('$validator')) {
    return true;
  }

  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

/**
 * Creates a validator instance.
 * @param {Vue} vm
 * @param {Object} options
 */
var createValidator = function (vm, options) { return new Validator(null, {
  init: false,
  vm: vm,
  fastExit: options.fastExit
}); };

var makeMixin = function (Vue, options) {
  if ( options === void 0 ) options = {};

  var mixin = {};
  mixin.provide = function providesValidator () {
    if (this.$validator) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  };

  mixin.beforeCreate = function beforeCreate () {
    // if its a root instance, inject anyways, or if it requested a new instance.
    if (this.$options.$validates || !this.$parent) {
      this.$validator = createValidator(this, options);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (! this.$validator && options.inject && !requested) {
      this.$validator = createValidator(this, options);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (! requested && ! this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (! requested && this.$validator) {
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
      Vue.util.defineReactive(this.$validator, 'fieldBag', this.$validator.fieldBag);
    }

    if (! this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter () {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter () {
      return this.$validator.fieldBag;
    };
  };

  mixin.beforeDestroy = function beforeDestroy () {
    // mark the validator paused to prevent delayed validation.
    if (this.$validator && this.$validator.ownerId === this._uid && isCallable(this.$validator.pause)) {
      this.$validator.pause();
    }
  };

  return mixin;
};

var config = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: undefined,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: true
};

/**
 * 
 * 
 * Finds the requested field by id from the context object.
 * @param {Object} context
 * @return {Field|null}
 */
var findField = function (el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.find({ id: getDataAttribute(el, 'id') });
};

var createDirective = function (options) {
  options = assign({}, config, options);

  return {
    bind: function bind (el, binding, vnode) {
      var validator = vnode.context.$validator;
      if (! validator) {
        warn("No validator instance is present on vm, did you forget to inject '$validator'?");
        return;
      }
      var fieldOptions = Generator.generate(el, binding, vnode, options);
      validator.attach(fieldOptions);
    },
    inserted: function (el, binding, vnode) {
      var field = findField(el, vnode.context);
      var scope = Generator.resolveScope(el, binding, vnode);

      // skip if scope hasn't changed.
      if (!field || scope === field.scope) { return; }

      // only update scope.
      field.update({ scope: scope });

      // allows the field to re-evaluated once more in the update hook.
      field.updated = false;
    },
    update: function (el, binding, vnode) {
      var field = findField(el, vnode.context);

      // make sure we don't do uneccessary work if no important change was done.
      if (!field || (field.updated && isEqual(binding.value, binding.oldValue))) { return; }
      var scope = Generator.resolveScope(el, binding, vnode);
      var rules = Generator.resolveRules(el, binding);

      field.update({
        scope: scope,
        rules: rules
      });
    },
    unbind: function unbind (el, binding, ref) {
      var context = ref.context;

      var field = findField(el, context);
      if (!field) { return; }

      context.$validator.detach(field);
    }
  };
};

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

/**
 * Maps fields to computed functions.
 *
 * @param {Array|Object} fields
 */
var mapFields = function (fields) {
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      if (this.$validator.fieldBag[field]) {
        return this.$validator.fieldBag[field];
      }

      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }
      var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

      return getPath(("$" + scope + "." + name), this.$validator.fieldBag, {});
    };

    return prev;
  }, {});
};

var Vue;

var install = function (_Vue, options) {
  if (Vue) {
    warn('already installed, Vue.use(VeeValidate) should only be called once.');
    return;
  }

  Vue = _Vue;
  var config$$1 = assign({}, config, options);
  if (config$$1.dictionary) {
    Validator.updateDictionary(config$$1.dictionary);
  }

  Validator.setLocale(config$$1.locale);
  Validator.setStrictMode(config$$1.strict);

  Vue.mixin(makeMixin(Vue, config$$1));
  Vue.directive('validate', createDirective(config$$1));
};

var index = {
  install: install,
  mapFields: mapFields,
  Validator: Validator,
  ErrorBag: ErrorBag,
  Rules: Rules,
  version: '2.0.0-rc.13'
};

return index;

})));


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-235a3ea0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "merchant-registration o-section"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('step', {
    attrs: {
      "active": "1"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab-1"
  }, [_c('div', {
    staticClass: "o-container o-container--fit"
  }, [_c('div', {
    staticClass: "c-card c-card--merchant"
  }, [_c('h2', {
    staticClass: "o-heading u-m-x3"
  }, [_vm._v("\n                        Informasi Basic\n                    ")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": ""
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "c-form-group c-form-group--mg2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataMerchant.name),
      expression: "dataMerchant.name"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "name": "name",
      "id": "",
      "placeholder": "Nama Tempat",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.dataMerchant.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dataMerchant.name = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.validator.errors.has('name')) ? _c('span', {
    staticClass: "c-form-feedback c-form-feedback__merchant"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('label', {
    staticClass: "u-weight-bold u-mb-x1",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Upload Logo")]), _vm._v(" "), _c('image-upload', {
    model: {
      value: (_vm.dataMerchant.images),
      callback: function($$v) {
        _vm.dataMerchant.images = $$v
      },
      expression: "dataMerchant.images"
    }
  }), _vm._v(" "), (_vm.validator.errors.has('images')) ? _c('span', {
    staticClass: "c-form-feedback c-form-feedback__merchant"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()], 1), _vm._v(" "), _c('places', {
    attrs: {
      "name": "address"
    },
    model: {
      value: (_vm.dataMerchant.address),
      callback: function($$v) {
        _vm.dataMerchant.address = $$v
      },
      expression: "dataMerchant.address"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "u-weight-bold u-mb-x1",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Kontak ")]), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataMerchant.phone),
      expression: "dataMerchant.phone"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "name": "phone",
      "id": "",
      "placeholder": "No Telp",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.dataMerchant.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dataMerchant.phone = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.validator.errors.has('phone')) ? _c('span', {
    staticClass: "c-form-feedback c-form-feedback__merchant"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataMerchant.email),
      expression: "dataMerchant.email"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "id": "",
      "name": "email",
      "placeholder": "Alamat Email",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.dataMerchant.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dataMerchant.email = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.validator.errors.has('email')) ? _c('span', {
    staticClass: "c-form-feedback c-form-feedback__merchant"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataMerchant.website),
      expression: "dataMerchant.website"
    }],
    staticClass: "o-input",
    attrs: {
      "type": "text",
      "id": "",
      "name": "website",
      "placeholder": "Website",
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.dataMerchant.website)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dataMerchant.website = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.validator.errors.has('website')) ? _c('span', {
    staticClass: "c-form-feedback c-form-feedback__merchant"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "c-form-group u-mt-x5"
  }, [_c('router-link', {
    attrs: {
      "to": "/merchant/registration"
    }
  }, [_vm._v(" < Kembali")])], 1)])])])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-form-group u-mt-x5"
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block o-button--large",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Next")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-235a3ea0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4174b5f0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-image-upload"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.image),
      expression: "!image"
    }],
    staticClass: "c-image-upload__input"
  }, [_c('div', {
    staticClass: "c-image-upload__icon"
  }, [_c('svg', {
    attrs: {
      "fill": "#000000",
      "height": "24",
      "viewBox": "0 0 24 24",
      "width": "24",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "12",
      "cy": "12",
      "r": "3.2"
    }
  }), _c('path', {
    attrs: {
      "d": "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    }
  }), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "c-image-upload__text"
  }, [_vm._v("Upload Image")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "c-image-upload__preview"
  }, [_c('img', {
    attrs: {
      "src": _vm.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.image),
      expression: "image"
    }],
    staticClass: "c-image-upload__remove-btn",
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Delete")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4174b5f0", module.exports)
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
    class: ['stepwizard-step step-line-false', {
      active: _vm.active == 3
    }]
  }, [_c('button', {
    staticClass: "o-button o-button--primary o-button--block btn-circle",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("3")])])])])
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
    staticClass: "c-places-search c-places-search--mg2"
  }, [_c('label', {
    staticClass: "u-weight-bold u-mb-x1",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Lokasi")]), _vm._v(" "), _c('div', {
    staticClass: "c-form-group c-input-group"
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
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('label', {
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
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "o-button",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-search",
    attrs: {
      "aria-hidden": "true"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d9ae21e0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue2-dropzone/dist/vue2-dropzone.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue2-dropzone"]=t():e["vue2-dropzone"]=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var n,o,r={};i(8),n=i(2),o=i(6),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(r).forEach(function(e){var t=r[e];s.computed[e]=function(){return t}})},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{id:{type:String,required:!0},url:{type:String,required:!0},clickable:{type:Boolean,default:!0},paramName:{type:String,default:"file"},acceptedFileTypes:{type:String},thumbnailHeight:{type:Number,default:200},thumbnailWidth:{type:Number,default:200},showRemoveLink:{type:Boolean,default:!0},maxFileSizeInMB:{type:Number,default:2},maxNumberOfFiles:{type:Number,default:5},autoProcessQueue:{type:Boolean,default:!0},useFontAwesome:{type:Boolean,default:!1},headers:{type:Object},language:{type:Object,default:function(){return{}}},previewTemplate:{type:Function,default:function(e){return'\n                    <div class="dz-preview dz-file-preview">\n                        <div class="dz-image" style="width: '+e.thumbnailWidth+"px;height: "+e.thumbnailHeight+'px">                                \n                        <img data-dz-thumbnail /></div>\n                        <div class="dz-details">\n                            <div class="dz-size"><span data-dz-size></span></div>\n                            <div class="dz-filename"><span data-dz-name></span></div>\n                        </div>\n                        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n                        <div class="dz-error-message"><span data-dz-errormessage></span></div>\n                        <div class="dz-success-mark">'+e.doneIcon+'</div>\n                        <div class="dz-error-mark">'+e.errorIcon+"</div>\n                    </div>\n                "}},useCustomDropzoneOptions:{type:Boolean,default:!1},dropzoneOptions:{type:Object,default:function(){return{}}},resizeWidth:{type:Number,default:null},resizeHeight:{type:Number,default:null},resizeMimeType:{type:String,default:null},resizeQuality:{type:Number,default:.8},resizeMethod:{type:String,default:"contain"},uploadMultiple:{type:Boolean,default:!1},duplicateCheck:{type:Boolean,default:!1},parallelUploads:{type:Number,default:2},timeout:{type:Number,default:3e4}},methods:{manuallyAddFile:function(e,t,i,n,o){this.dropzone.emit("addedfile",e),this.dropzone.emit("thumbnail",e,t),this.dropzone.createThumbnailFromUrl(e,t,i,n),this.dropzone.emit("complete",e),"undefined"!=typeof o.dontSubstractMaxFiles&&o.dontSubstractMaxFiles||(this.dropzone.options.maxFiles=this.dropzone.options.maxFiles-1),"undefined"!=typeof o.addToFiles&&o.addToFiles&&this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(){this.dropzone.removeAllFiles(!0)},processQueue:function(){var e=this.dropzone;this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getProp:function(e,t){return this.useCustomDropzoneOptions&&void 0!==t&&null!==t&&""!==t?t:e}},computed:{languageSettings:function(){var e={dictDefaultMessage:"<br>Drop files here to upload",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictFallbackMessage:"Your browser does not support drag and drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictMaxFilesExceeded:"You can not upload any more files. (max: {{maxFiles}})",dictRemoveFile:"Remove",dictRemoveFileConfirmation:null,dictResponseError:"Server responded with {{statusCode}} code."};for(var t in this.language)e[t]=this.language[t];if(this.useCustomDropzoneOptions&&this.dropzoneOptions.language)for(var i in this.dropzoneOptions.language)e[i]=this.dropzoneOptions.language[i];return e},cloudIcon:function(){return this.useFontAwesome?'<i class="fa fa-cloud-upload"></i>':'<i class="material-icons">cloud_upload</i>'},doneIcon:function(){return this.useFontAwesome?'<i class="fa fa-check"></i>':' <i class="material-icons">done</i>'},errorIcon:function(){return this.useFontAwesome?'<i class="fa fa-close"></i>':' <i class="material-icons">error</i>'}},mounted:function(){if(!this.$isServer){var e=i(5);e.autoDiscover=!1;var t=document.getElementById(this.id);this.dropzone=new e(t,{clickable:this.getProp(this.clickable,this.dropzoneOptions.clickable),paramName:this.getProp(this.paramName,this.dropzoneOptions.paramName),thumbnailWidth:this.getProp(this.thumbnailWidth,this.dropzoneOptions.thumbnailWidth),thumbnailHeight:this.getProp(this.thumbnailHeight,this.dropzoneOptions.thumbnailHeight),maxFiles:this.getProp(this.maxNumberOfFiles,this.dropzoneOptions.maxNumberOfFiles),maxFilesize:this.getProp(this.maxFileSizeInMB,this.dropzoneOptions.maxFileSizeInMB),addRemoveLinks:this.getProp(this.showRemoveLink,this.dropzoneOptions.showRemoveLink),acceptedFiles:this.getProp(this.acceptedFileTypes,this.dropzoneOptions.acceptedFileTypes),autoProcessQueue:this.getProp(this.autoProcessQueue,this.dropzoneOptions.autoProcessQueue),headers:this.getProp(this.headers,this.dropzoneOptions.headers),previewTemplate:this.previewTemplate(this),dictDefaultMessage:this.cloudIcon+this.languageSettings.dictDefaultMessage,dictCancelUpload:this.languageSettings.dictCancelUpload,dictCancelUploadConfirmation:this.languageSettings.dictCancelUploadConfirmation,dictFallbackMessage:this.languageSettings.dictFallbackMessage,dictFallbackText:this.languageSettings.dictFallbackText,dictFileTooBig:this.languageSettings.dictFileTooBig,dictInvalidFileType:this.languageSettings.dictInvalidFileType,dictMaxFilesExceeded:this.languageSettings.dictMaxFilesExceeded,dictRemoveFile:this.languageSettings.dictRemoveFile,dictRemoveFileConfirmation:this.languageSettings.dictRemoveFileConfirmation,dictResponseError:this.languageSettings.dictResponseError,resizeWidth:this.getProp(this.resizeWidth,this.dropzoneOptions.resizeWidth),resizeHeight:this.getProp(this.resizeHeight,this.dropzoneOptions.resizeHeight),resizeMimeType:this.getProp(this.resizeMimeType,this.dropzoneOptions.resizeMimeType),resizeQuality:this.getProp(this.resizeQuality,this.dropzoneOptions.resizeQuality),resizeMethod:this.getProp(this.resizeMethod,this.dropzoneOptions.resizeMethod),uploadMultiple:this.getProp(this.uploadMultiple,this.dropzoneOptions.uploadMultiple),parallelUploads:this.getProp(this.parallelUploads,this.dropzoneOptions.parallelUploads),timeout:this.getProp(this.timeout,this.dropzoneOptions.timeout)});var n=this;this.dropzone.on("thumbnail",function(e){n.$emit("vdropzone-thumbnail",e)}),this.dropzone.on("addedfile",function(e){if(n.duplicateCheck&&this.files.length){var t,i;for(t=0,i=this.files.length;t<i-1;t++)this.files[t].name===e.name&&(this.removeFile(e),n.$emit("duplicate-file",e))}n.$emit("vdropzone-file-added",e)}),this.dropzone.on("addedfiles",function(e){n.$emit("vdropzone-files-added",e)}),this.dropzone.on("removedfile",function(e){n.$emit("vdropzone-removed-file",e)}),this.dropzone.on("success",function(e,t){n.$emit("vdropzone-success",e,t)}),this.dropzone.on("successmultiple",function(e,t){n.$emit("vdropzone-success-multiple",e,t)}),this.dropzone.on("error",function(e,t,i){n.$emit("vdropzone-error",e,t,i)}),this.dropzone.on("sending",function(e,t,i){n.$emit("vdropzone-sending",e,t,i)}),this.dropzone.on("sendingmultiple",function(e,t,i){n.$emit("vdropzone-sending-multiple",e,t,i)}),this.dropzone.on("queuecomplete",function(e,t,i){n.$emit("vdropzone-queue-complete",e,t,i)}),this.dropzone.on("totaluploadprogress",function(e,t,i){n.$emit("vdropzone-total-upload-progress",e,t,i)}),n.$emit("vdropzone-mounted")}},beforeDestroy:function(){this.dropzone.disable()}}},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,'@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}',""])},function(e,t,i){t=e.exports=i(1)(),t.i(i(3),""),t.push([e.id,".vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:background-color .2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone i{color:#ccc}.vue-dropzone .dz-preview .dz-image{border-radius:0}.vue-dropzone .dz-preview .dz-image:hover img{-webkit-transform:none;transform:none;-webkit-filter:none}.vue-dropzone .dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone .dz-preview .dz-details .dz-filename span,.vue-dropzone .dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone .dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone .dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone .dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone .dz-preview:hover .dz-remove{opacity:1}.vue-dropzone .dz-preview .dz-error-mark,.vue-dropzone .dz-preview .dz-success-mark{margin-left:auto!important;margin-top:auto!important;width:100%!important;top:35%!important;left:0}.vue-dropzone .dz-preview .dz-error-mark i,.vue-dropzone .dz-preview .dz-success-mark i{color:#fff!important;font-size:5rem!important}.vue-dropzone .dz-preview .dz-error-message{top:75%;left:15%}",""])},function(e,t,i){(function(e){(function(){var t,i,n,o,r,s,a,l,d,p=[].slice,u=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;l=function(){},i=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,o,r;if(n=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],this._callbacks=this._callbacks||{},i=this._callbacks[n])for(o=0,r=i.length;o<r;o++)t=i[o],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,o,r,s;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(n=this._callbacks[e],!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(o=r=0,s=n.length;r<s;o=++r)if(i=n[o],i===t){n.splice(o,1);break}return this},e}(),t=function(e){function t(e,i){var n,r,s;if(this.element=e,this.version=t.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(t.instances.push(this),this.element.dropzone=this,n=null!=(s=t.optionsForElement(this.element))?s:{},this.options=o({},this.defaultOptions,n,null!=i?i:{}),this.options.forceFallback||!t.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),null!=this.options.renameFilename&&(this.options.renameFile=function(e){return function(t){return e.options.renameFilename.call(e,t.name,t)}}(this)),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=t.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=t.getElements(this.options.clickable,"clickable")),this.init()}var o,r;return u(t,e),t.prototype.Emitter=i,t.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],t.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,params:{},headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){return l},accept:function(e,t){return t()},fallback:function(){var e,i,n,o,r,s;for(this.element.className=this.element.className+" dz-browser-not-supported",r=this.element.getElementsByTagName("div"),i=0,n=r.length;i<n;i++)e=r[i],/(^| )dz-message($| )/.test(e.className)&&(o=e,e.className="dz-message");return o||(o=t.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(o)),s=o.getElementsByTagName("span")[0],s&&(null!=s.textContent?s.textContent=this.options.dictFallbackMessage:null!=s.innerText&&(s.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var o,r,s;if(o={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},r=e.width/e.height,null==t&&null==i?(t=o.srcWidth,i=o.srcHeight):null==t?t=i*r:null==i&&(i=t/r),t=Math.min(t,o.srcWidth),i=Math.min(i,o.srcHeight),s=t/i,o.srcWidth>t||o.srcHeight>i)if("crop"===n)r>s?(o.srcHeight=e.height,o.srcWidth=o.srcHeight*s):(o.srcWidth=e.width,o.srcHeight=o.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");r>s?i=t/r:t=i*r}return o.srcX=(e.width-o.srcWidth)/2,o.srcY=(e.height-o.srcHeight)/2,o.trgWidth=t,o.trgHeight=i,o},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:l,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:l,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var i,n,o,r,s,a,l,d,p,u,c,h,f;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=t.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),i=0,r=d.length;i<r;i++)l=d[i],l.textContent=e.name;for(p=e.previewElement.querySelectorAll("[data-dz-size]"),n=0,s=p.length;n<s;n++)l=p[n],l.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),c=function(i){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===t.UPLOADING?t.confirm(i.options.dictCancelUploadConfirmation,function(){return i.removeFile(e)}):i.options.dictRemoveFileConfirmation?t.confirm(i.options.dictRemoveFileConfirmation,function(){return i.removeFile(e)}):i.removeFile(e)}}(this),u=e.previewElement.querySelectorAll("[data-dz-remove]"),f=[],o=0,a=u.length;o<a;o++)h=u[o],f.push(h.addEventListener("click",c));return f}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,o,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),o=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,n=o.length;i<n;i++)r=o[i],r.alt=e.name,r.src=t;return setTimeout(function(t){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var i,n,o,r,s;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),s=[],i=0,n=r.length;i<n;i++)o=r[i],s.push(o.textContent=t);return s}},errormultiple:l,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:l,uploadprogress:function(e,t,i){var n,o,r,s,a;if(e.previewElement){for(s=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),a=[],n=0,o=s.length;n<o;n++)r=s[n],"PROGRESS"===r.nodeName?a.push(r.value=t):a.push(r.style.width=t+"%");return a}},totaluploadprogress:l,sending:l,sendingmultiple:l,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:l,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:l,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:l,maxfilesexceeded:l,maxfilesreached:l,queuecomplete:l,addedfiles:l},o=function(){var e,t,i,n,o,r,s;for(r=arguments[0],o=2<=arguments.length?p.call(arguments,1):[],e=0,i=o.length;e<i;e++){n=o[e];for(t in n)s=n[t],r[t]=s}return r},t.prototype.getAcceptedFiles=function(){var e,t,i,n,o;for(n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],e.accepted&&o.push(e);return o},t.prototype.getRejectedFiles=function(){var e,t,i,n,o;for(n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],e.accepted||o.push(e);return o},t.prototype.getFilesWithStatus=function(e){var t,i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)t=o[i],t.status===e&&r.push(t);return r},t.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(t.QUEUED)},t.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(t.UPLOADING)},t.prototype.getAddedFiles=function(){return this.getFilesWithStatus(t.ADDED)},t.prototype.getActiveFiles=function(){var e,i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)e=o[i],e.status!==t.UPLOADING&&e.status!==t.QUEUED||r.push(e);return r},t.prototype.init=function(){var e,i,n,o,r,s,a;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(a=function(e){return function(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,n,o;if(i=e.hiddenFileInput.files,i.length)for(n=0,o=i.length;n<o;n++)t=i[n],e.addFile(t);return e.emit("addedfiles",i),a()})}}(this))(),this.URL=null!=(r=window.URL)?r:window.webkitURL,
s=this.events,i=0,n=s.length;i<n;i++)e=s[i],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),o=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(t){return o(t),e.emit("dragenter",t)}}(this),dragover:function(e){return function(t){var i;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",o(t),e.emit("dragover",t)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(t){return o(t),e.drop(t)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(i){return e.listeners.push({element:i,events:{click:function(n){return(i!==e.element||n.target===e.element||t.elementInside(n.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},t.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,t.instances.splice(t.instances.indexOf(this),1)},t.prototype.updateTotalUploadProgress=function(){var e,t,i,n,o,r,s,a;if(s=0,r=0,e=this.getActiveFiles(),e.length){for(o=this.getActiveFiles(),i=0,n=o.length;i<n;i++)t=o[i],s+=t.upload.bytesSent,r+=t.upload.total;a=100*s/r}else a=100;return this.emit("totaluploadprogress",a,r,s)},t.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},t.prototype._renameFile=function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)},t.prototype.getFallbackForm=function(){var e,i,n,o;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',i=t.createElement(n),"FORM"!==this.element.tagName?(o=t.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),o.appendChild(i)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=o?o:i)},t.prototype.getExistingFallback=function(){var e,t,i,n,o,r;for(t=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},o=["div","form"],i=0,n=o.length;i<n;i++)if(r=o[i],e=t(this.element.getElementsByTagName(r)))return e},t.prototype.setupEventListeners=function(){var e,t,i,n,o,r,s;for(r=this.listeners,s=[],i=0,n=r.length;i<n;i++)e=r[i],s.push(function(){var i,n;i=e.events,n=[];for(t in i)o=i[t],n.push(e.element.addEventListener(t,o,!1));return n}());return s},t.prototype.removeEventListeners=function(){var e,t,i,n,o,r,s;for(r=this.listeners,s=[],i=0,n=r.length;i<n;i++)e=r[i],s.push(function(){var i,n;i=e.events,n=[];for(t in i)o=i[t],n.push(e.element.removeEventListener(t,o,!1));return n}());return s},t.prototype.disable=function(){var e,t,i,n,o;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],o.push(this.cancelUpload(e));return o},t.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},t.prototype.filesize=function(e){var t,i,n,o,r,s,a,l;if(r=0,s="b",e>0){for(l=["tb","gb","mb","kb","b"],i=n=0,o=l.length;n<o;i=++n)if(a=l[i],t=Math.pow(this.options.filesizeBase,4-i)/10,e>=t){r=e/Math.pow(this.options.filesizeBase,4-i),s=a;break}r=Math.round(10*r)/10}return"<strong>"+r+"</strong> "+this.options.dictFileSizeUnits[s]},t.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},t.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&(i=e.dataTransfer.items,i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},t.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},t.prototype.handleFiles=function(e){var t,i,n,o;for(o=[],i=0,n=e.length;i<n;i++)t=e[i],o.push(this.addFile(t));return o},t.prototype._addFilesFromItems=function(e){var t,i,n,o,r;for(r=[],n=0,o=e.length;n<o;n++)i=e[n],null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?r.push(this.addFile(i.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?r.push(this.addFile(i.getAsFile())):r.push(void 0);return r},t.prototype._addFilesFromDirectory=function(e,t){var i,n,o;return i=e.createReader(),n=function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0},(o=function(e){return function(){return i.readEntries(function(i){var n,r,s;if(i.length>0){for(r=0,s=i.length;r<s;r++)n=i[r],n.isFile?n.file(function(i){if(!e.options.ignoreHiddenFiles||"."!==i.name.substring(0,1))return i.fullPath=t+"/"+i.name,e.addFile(i)}):n.isDirectory&&e._addFilesFromDirectory(n,t+"/"+n.name);o()}return null},n)}}(this))()},t.prototype.accept=function(e,i){return e.size>1024*this.options.maxFilesize*1024?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):t.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)},t.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=t.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},t.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)t=e[i],this.enqueueFile(t);return null},t.prototype.enqueueFile=function(e){if(e.status!==t.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=t.QUEUED,this.options.autoProcessQueue)return setTimeout(function(e){return function(){return e.processQueue()}}(this),0)},t.prototype._thumbnailQueue=[],t.prototype._processingThumbnail=!1,t.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)},t.prototype._processThumbnailQueue=function(){var e;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,e=this._thumbnailQueue.shift(),this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(t){return function(i){return t.emit("thumbnail",e,i),t._processingThumbnail=!1,t._processThumbnailQueue()}}(this))},t.prototype.removeFile=function(e){if(e.status===t.UPLOADING&&this.cancelUpload(e),this.files=d(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},t.prototype.removeAllFiles=function(e){var i,n,o,r;for(null==e&&(e=!1),r=this.files.slice(),n=0,o=r.length;n<o;n++)i=r[n],(i.status!==t.UPLOADING||e)&&this.removeFile(i);return null},t.prototype.resizeImage=function(e,i,o,r,s){return this.createThumbnail(e,i,o,r,!1,function(i){return function(o,r){var a,l;return null===r?s(e):(a=i.options.resizeMimeType,null==a&&(a=e.type),l=r.toDataURL(a,i.options.resizeQuality),"image/jpeg"!==a&&"image/jpg"!==a||(l=n.restore(e.dataURL,l)),s(t.dataURItoBlob(l)))}}(this))},t.prototype.createThumbnail=function(e,t,i,n,o,r){var s;return s=new FileReader,s.onload=function(a){return function(){return e.dataURL=s.result,"image/svg+xml"===e.type?void(null!=r&&r(s.result)):a.createThumbnailFromUrl(e,t,i,n,o,r)}}(this),s.readAsDataURL(e)},t.prototype.createThumbnailFromUrl=function(e,t,i,n,o,r,s){var l;return l=document.createElement("img"),s&&(l.crossOrigin=s),l.onload=function(s){return function(){var d;return d=function(e){return e(1)},"undefined"!=typeof EXIF&&null!==EXIF&&o&&(d=function(e){return EXIF.getData(l,function(){return e(EXIF.getTag(this,"Orientation"))})}),d(function(o){var d,p,u,c,h,f,m,g;switch(e.width=l.width,e.height=l.height,m=s.options.resize.call(s,e,t,i,n),d=document.createElement("canvas"),p=d.getContext("2d"),d.width=m.trgWidth,d.height=m.trgHeight,o>4&&(d.width=m.trgHeight,d.height=m.trgWidth),o){case 2:p.translate(d.width,0),p.scale(-1,1);break;case 3:p.translate(d.width,d.height),p.rotate(Math.PI);break;case 4:p.translate(0,d.height),p.scale(1,-1);break;case 5:p.rotate(.5*Math.PI),p.scale(1,-1);break;case 6:p.rotate(.5*Math.PI),p.translate(0,-d.height);break;case 7:p.rotate(.5*Math.PI),p.translate(d.width,-d.height),p.scale(-1,1);break;case 8:p.rotate(-.5*Math.PI),p.translate(-d.width,0)}if(a(p,l,null!=(u=m.srcX)?u:0,null!=(c=m.srcY)?c:0,m.srcWidth,m.srcHeight,null!=(h=m.trgX)?h:0,null!=(f=m.trgY)?f:0,m.trgWidth,m.trgHeight),g=d.toDataURL("image/png"),null!=r)return r(g,d)})}}(this),null!=r&&(l.onerror=r),l.src=e.dataURL},t.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,i=this.getUploadingFiles().length,e=i,!(i>=t)&&(n=this.getQueuedFiles(),n.length>0)){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;e<t;){if(!n.length)return;this.processFile(n.shift()),e++}}},t.prototype.processFile=function(e){return this.processFiles([e])},t.prototype.processFiles=function(e){var i,n,o;for(n=0,o=e.length;n<o;n++)i=e[n],i.processing=!0,i.status=t.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},t.prototype._getFilesWithXhr=function(e){var t,i;return i=function(){var i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)t=o[i],t.xhr===e&&r.push(t);return r}.call(this)},t.prototype.cancelUpload=function(e){var i,n,o,r,s,a,l;if(e.status===t.UPLOADING){for(n=this._getFilesWithXhr(e.xhr),o=0,s=n.length;o<s;o++)i=n[o],i.status=t.CANCELED;for(e.xhr.abort(),r=0,a=n.length;r<a;r++)i=n[r],this.emit("canceled",i);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else(l=e.status)!==t.ADDED&&l!==t.QUEUED||(e.status=t.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()},r=function(){var e,t;return t=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},t.prototype.uploadFile=function(e){return this.uploadFiles([e])},t.prototype.uploadFiles=function(e){var i,n,s,a,l,d,p,u,c,h,f,m,g,v,z,b,y,w,F,x,k,E,C,T,M,S,A,L,I,U,N,R,D,O,_,P,B;for(B=new XMLHttpRequest,g=0,y=e.length;g<y;g++)s=e[g],s.xhr=B;E=r(this.options.method,e),_=r(this.options.url,e),B.open(E,_,!0),B.timeout=r(this.options.timeout,e),B.withCredentials=!!this.options.withCredentials,R=null,l=function(t){return function(){var i,n,o;for(o=[],i=0,n=e.length;i<n;i++)s=e[i],o.push(t._errorProcessing(e,R||t.options.dictResponseError.replace("{{statusCode}}",B.status),B));return o}}(this),O=function(t){return function(i){var n,o,r,a,l,d,p,u,c;if(null!=i)for(u=100*i.loaded/i.total,o=0,a=e.length;o<a;o++)s=e[o],s.upload.progress=u,s.upload.total=i.total,s.upload.bytesSent=i.loaded;else{for(n=!0,u=100,r=0,l=e.length;r<l;r++)s=e[r],100===s.upload.progress&&s.upload.bytesSent===s.upload.total||(n=!1),s.upload.progress=u,s.upload.bytesSent=s.upload.total;if(n)return}for(c=[],p=0,d=e.length;p<d;p++)s=e[p],c.push(t.emit("uploadprogress",s,u,s.upload.bytesSent));return c}}(this),B.onload=function(i){return function(n){var o;if(e[0].status!==t.CANCELED&&4===B.readyState){if("arraybuffer"!==B.responseType&&"blob"!==B.responseType&&(R=B.responseText,B.getResponseHeader("content-type")&&~B.getResponseHeader("content-type").indexOf("application/json")))try{R=JSON.parse(R)}catch(e){n=e,R="Invalid JSON response from server."}return O(),200<=(o=B.status)&&o<300?i._finished(e,R,n):l()}}}(this),B.onerror=function(i){return function(){if(e[0].status!==t.CANCELED)return l()}}(this),M=null!=(S=B.upload)?S:B,M.onprogress=O,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&o(u,this.options.headers);for(d in u)p=u[d],p&&B.setRequestHeader(d,p);if(a=new FormData,this.options.params){A=this.options.params;for(z in A)P=A[z],a.append(z,P)}for(v=0,w=e.length;v<w;v++)s=e[v],this.emit("sending",s,B,a);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,B,a),"FORM"===this.element.tagName)for(L=this.element.querySelectorAll("input, textarea, select, button"),b=0,F=L.length;b<F;b++)if(h=L[b],f=h.getAttribute("name"),m=h.getAttribute("type"),"SELECT"===h.tagName&&h.hasAttribute("multiple"))for(I=h.options,k=0,x=I.length;k<x;k++)T=I[k],T.selected&&a.append(f,T.value);else(!m||"checkbox"!==(U=m.toLowerCase())&&"radio"!==U||h.checked)&&a.append(f,h.value);for(i=0,D=[],c=C=0,N=e.length-1;0<=N?C<=N:C>=N;c=0<=N?++C:--C)n=function(t){return function(n,o,r){return function(n){if(a.append(o,n,r),++i===e.length)return t.submitRequest(B,a,e)}}}(this),D.push(this.options.transformFile.call(this,e[c],n(e[c],this._getParamName(c),e[c].upload.filename)));return D},t.prototype.submitRequest=function(e,t,i){return e.send(t)},t.prototype._finished=function(e,i,n){var o,r,s;for(r=0,s=e.length;r<s;r++)o=e[r],o.status=t.SUCCESS,this.emit("success",o,i,n),this.emit("complete",o);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},t.prototype._errorProcessing=function(e,i,n){var o,r,s;for(r=0,s=e.length;r<s;r++)o=e[r],o.status=t.ERROR,this.emit("error",o,i,n),this.emit("complete",o);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},t}(i),t.version="5.1.1",t.options={},t.optionsForElement=function(e){return e.getAttribute("id")?t.options[o(e.getAttribute("id"))]:void 0},t.instances=[],t.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},t.autoDiscover=!0,t.discover=function(){var e,i,n,o,r,s;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],e=function(e){var t,i,o,r;for(r=[],i=0,o=e.length;i<o;i++)t=e[i],/(^| )dropzone($| )/.test(t.className)?r.push(n.push(t)):r.push(void 0);return r},e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),s=[],o=0,r=n.length;o<r;o++)i=n[o],t.optionsForElement(i)!==!1?s.push(new t(i)):s.push(void 0);return s},t.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],t.isBrowserSupported=function(){var e,i,n,o,r;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(o=t.blacklistedBrowsers,i=0,n=o.length;i<n;i++)r=o[i],r.test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},t.dataURItoBlob=function(e){var t,i,n,o,r,s,a;for(i=atob(e.split(",")[1]),s=e.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(i.length),o=new Uint8Array(t),n=r=0,a=i.length;0<=a?r<=a:r>=a;n=0<=a?++r:--r)o[n]=i.charCodeAt(n);return new Blob([t],{type:s})},d=function(e,t){var i,n,o,r;for(r=[],n=0,o=e.length;n<o;n++)i=e[n],i!==t&&r.push(i);return r},o=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},t.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},t.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},t.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},t.getElements=function(e,t){var i,n,o,r,s,a,l,d;if(e instanceof Array){o=[];try{for(r=0,a=e.length;r<a;r++)n=e[r],o.push(this.getElement(n,t))}catch(e){i=e,o=null}}else if("string"==typeof e)for(o=[],d=document.querySelectorAll(e),s=0,l=d.length;s<l;s++)n=d[s],o.push(n);else null!=e.nodeType&&(o=[e]);if(null==o||!o.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return o},t.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},t.isValidFile=function(e,t){var i,n,o,r,s;if(!t)return!0;for(t=t.split(","),r=e.type,i=r.replace(/\/.*$/,""),n=0,o=t.length;n<o;n++)if(s=t[n],s=s.trim(),"."===s.charAt(0)){if(e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length)!==-1)return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(r===s)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new t(this,e)})}),"undefined"!=typeof e&&null!==e?e.exports=t:window.Dropzone=t,t.ADDED="added",t.QUEUED="queued",t.ACCEPTED=t.QUEUED,t.UPLOADING="uploading",t.PROCESSING=t.UPLOADING,t.CANCELED="canceled",t.ERROR="error",t.SUCCESS="success",s=function(e){var t,i,n,o,r,s,a,l,d,p;for(a=e.naturalWidth,s=e.naturalHeight,i=document.createElement("canvas"),i.width=1,i.height=s,n=i.getContext("2d"),n.drawImage(e,0,0),o=n.getImageData(1,0,1,s).data,p=0,r=s,l=s;l>p;)t=o[4*(l-1)+3],0===t?r=l:p=l,l=r+p>>1;return d=l/s,0===d?1:d},a=function(e,t,i,n,o,r,a,l,d,p){var u;return u=s(t),e.drawImage(t,i,n,o,r,a,l,d,p/u)},n=function(){function e(){}return e.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e.encode64=function(e){var t,i,n,o,r,s,a,l,d;for(d="",t=void 0,i=void 0,n="",o=void 0,r=void 0,s=void 0,a="",l=0;;)if(t=e[l++],i=e[l++],n=e[l++],o=t>>2,r=(3&t)<<4|i>>4,s=(15&i)<<2|n>>6,a=63&n,isNaN(i)?s=a=64:isNaN(n)&&(a=64),d=d+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(r)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a),t=i=n="",o=r=s=a="",!(l<e.length))break;return d},e.restore=function(e,t){var i,n,o;return e.match("data:image/jpeg;base64,")?(n=this.decode64(e.replace("data:image/jpeg;base64,","")),o=this.slice2Segments(n),i=this.exifManipulation(t,o),"data:image/jpeg;base64,"+this.encode64(i)):t},e.exifManipulation=function(e,t){var i,n,o;return n=this.getExifArray(t),o=this.insertExif(e,n),i=new Uint8Array(o)},e.getExifArray=function(e){var t,i;for(t=void 0,i=0;i<e.length;){if(t=e[i],255===t[0]&225===t[1])return t;i++}return[]},e.insertExif=function(e,t){var i,n,o,r,s,a;return r=e.replace("data:image/jpeg;base64,",""),o=this.decode64(r),a=o.indexOf(255,3),s=o.slice(0,a),n=o.slice(a),i=s,i=i.concat(t),i=i.concat(n)},e.slice2Segments=function(e){var t,i,n,o,r;for(i=0,r=[];;){if(255===e[i]&218===e[i+1])break;if(255===e[i]&216===e[i+1]?i+=2:(n=256*e[i+2]+e[i+3],t=i+n+2,o=e.slice(i,t),r.push(o),i=t),i>e.length)break}return r},e.decode64=function(e){var t,i,n,o,r,s,a,l,d,p,u;for(u="",n=void 0,o=void 0,r="",s=void 0,a=void 0,l=void 0,d="",p=0,i=[],t=/[^A-Za-z0-9\+\/\=]/g,t.exec(e)&&console.warning("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");;)if(s=this.KEY_STR.indexOf(e.charAt(p++)),a=this.KEY_STR.indexOf(e.charAt(p++)),l=this.KEY_STR.indexOf(e.charAt(p++)),d=this.KEY_STR.indexOf(e.charAt(p++)),n=s<<2|a>>4,o=(15&a)<<4|l>>2,r=(3&l)<<6|d,i.push(n),64!==l&&i.push(o),64!==d&&i.push(r),n=o=r="",s=a=l=d="",!(p<e.length))break;return i},e}(),r=function(e,t){var i,n,o,r,s,a,l,d,p;if(o=!1,p=!0,n=e.document,d=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",l=n.addEventListener?"removeEventListener":"detachEvent",a=n.addEventListener?"":"on",r=function(i){if("readystatechange"!==i.type||"complete"===n.readyState)return("load"===i.type?e:n)[l](a+i.type,r,!1),!o&&(o=!0)?t.call(e,i.type||i):void 0},s=function(){var e;try{d.doScroll("left")}catch(t){return e=t,void setTimeout(s,50)}return r("poll")},"complete"!==n.readyState){if(n.createEventObject&&d.doScroll){try{p=!e.frameElement}catch(e){}p&&s()}return n[i](a+"DOMContentLoaded",r,!1),n[i](a+"readystatechange",r,!1),e[i](a+"load",r,!1)}},t._autoDiscoverFunction=function(){if(t.autoDiscover)return t.discover()},r(window,t._autoDiscoverFunction)}).call(this)}).call(t,i(9)(e))},function(e,t){e.exports=' <form :action=url class="vue-dropzone dropzone" :id=id> <slot></slot> </form> '},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(l(n.parts[r],t))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(l(n.parts[r],t));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],i={},n=0;n<e.length;n++){var o=e[n],r=o[0],s=o[1],a=o[2],l=o[3],d={css:s,media:a,sourceMap:l};i[r]?i[r].parts.push(d):t.push(i[r]={id:r,parts:[d]})}return t}function r(e,t){var i=f(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var i,n,o;if(t.singleton){var r=g++;i=m||(m=a(t)),n=d.bind(null,i,r,!1),o=d.bind(null,i,r,!0)}else i=a(t),n=p.bind(null,i),o=function(){s(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=z(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=c(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var r=[],s=0;s<i.length;s++){var a=i[s],l=u[a.id];l.refs--,r.push(l)}if(e){var d=o(e);n(d,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete u[l.id]}}}};var z=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var n=i(4);"string"==typeof n&&(n=[[e.id,n,""]]);i(7)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});

/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4174b5f0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/ImageUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4174b5f0", Component.options)
  } else {
    hotAPI.reload("data-v-4174b5f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/pages/merchant/MerchantRegistration.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/merchant/MerchantRegistration.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-235a3ea0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/merchant/MerchantRegistration.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/merchant/MerchantRegistration.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MerchantRegistration.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-235a3ea0", Component.options)
  } else {
    hotAPI.reload("data-v-235a3ea0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy9QbGFjZXNTZWFyY2gudnVlIiwid2VicGFjazovLy9TdGVwVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWUtdmFsaWRhdGUvZGlzdC92ZWUtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbi52dWU/MjgyMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQudnVlPzNlYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlPzEyOTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWU/OWI1MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlMi1kcm9wem9uZS9kaXN0L3Z1ZTItZHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBaUJBO1lBRUE7MEJBQ0E7O21CQUdBO0FBRkE7QUFHQTs7O3NDQUVBO2dCQUNBLHFCQUNBO0FBRUE7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OztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEVBQTRFLDJCQUEyQixFQUFFO0FBQ3pHO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLDRaQUF5UDtBQUN6UDtBQUNBLCtQQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy80LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjLWltYWdlLXVwbG9hZFwiPlxuICAgICAgICA8ZGl2IHYtc2hvdz1cIiFpbWFnZVwiIGNsYXNzPVwiYy1pbWFnZS11cGxvYWRfX2lucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1pbWFnZS11cGxvYWRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjMuMlwiLz48cGF0aCBkPVwiTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6XCIvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYy1pbWFnZS11cGxvYWRfX3RleHRcIj5VcGxvYWQgSW1hZ2U8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwib25GaWxlQ2hhbmdlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1pbWFnZS11cGxvYWRfX3ByZXZpZXdcIj5cbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHYtc2hvdz1cImltYWdlXCIgY2xhc3M9XCJjLWltYWdlLXVwbG9hZF9fcmVtb3ZlLWJ0blwiIEBjbGljaz1cInJlbW92ZUltYWdlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsndmFsdWUnXSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpbWFnZTogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYodmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUltYWdlKGZpbGVzWzBdKTtcblxuICAgICAgICAgICAgICAgIC8vdGhpcy4kZW1pdCgnY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBmaWxlc1swXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0uaW1hZ2UgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVJbWFnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJbWFnZVVwbG9hZC52dWU/MWE4ODY1NDkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtcGxhY2VzLXNlYXJjaCBjLXBsYWNlcy1zZWFyY2gtLW1nMlwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJ1LXdlaWdodC1ib2xkIHUtbWIteDFcIj5Mb2thc2k8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwIGMtaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvLWlucHV0XCIgOm5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJNYXN1a2FuIExva2FzaSBNZXJjaGFudFwiIEBrZXlwcmVzcz1cInByZXZlbnRFbnRlclwiIDp2YWx1ZT1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIiBjbGFzcz1cInUtd2VpZ2h0LWJvbGQgdS1tYi14MVwiPkxva2FzaSBtZXJjaGFudCBkYWxhbSBwZXRhIChPcHNpb25hbCkgPC9sYWJlbD5cbiAgICAgICAgPGRpdiByZWY9XCJtYXBcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4O1wiPjwvZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjLXBsYWNlcy1zZWFyY2hfX3RvZ2dsZS1sYXQtbG5nIHUtbXQteDJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwic2hvd0xhdExuZ1wiPlxuICAgICAgICAgICAgU2hvdyBsYXRpdHVkZSAmIGxvbmdpdHVkZSBpbnB1dFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IHYtc2hvdz1cInNob3dMYXRMbmdcIiBjbGFzcz1cIm8tZ3JpZCBjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGF0XCI+TGF0aXR1ZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhdFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhdFwiIGNsYXNzPVwiby1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiTGF0aXR1ZGVcIiB2LW1vZGVsPVwibGF0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTQvMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG5nXCI+TG9uZ2l0dWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsbmdcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJsbmdcIiBjbGFzcz1cIm8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkxvbmdpdHVkZVwiIHYtbW9kZWw9XCJsbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbG9hZCwgbG9hZGVkIH0gZnJvbSAnLi4vYXBpL21hcC9sb2FkZXInXG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgICAgICBsb2NhdGlvbjogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgYWRkcmVzczogJycsIGxhdDogJycsIGxuZzogJycgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiAge1xuICAgICAgICAgICAgICAgIG1hcDogJycsXG4gICAgICAgICAgICAgICAgbWFya2VyczogW10sXG4gICAgICAgICAgICAgICAgc2hvd0xhdExuZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgbGF0OiAnJyxcbiAgICAgICAgICAgICAgICBsbmc6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBoYXNWZWx1ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLmxvY2F0aW9uLmFkZHJlc3MpICYmICh0eXBlb2YgdGhpcy5sb2NhdGlvbi5sYXQgPT09ICdudW1iZXInKSAmJiAodHlwZW9mIHRoaXMubG9jYXRpb24ubG5nID09PSAnbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG5cbiAgICAgICAgICAgIC8vbG9hZCgnQUl6YVN5RHh1N212NW1sUE05QWoyQ2lZS0ZXWTliNmFkaXpkQzRjJywgJzMnLCBbJ3BsYWNlcyddKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gdGhpcy5sb2NhdGlvbi5hZGRyZXNzO1xuICAgICAgICAgICAgdGhpcy5sYXQgPSB0aGlzLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgICAgIHRoaXMubG5nID0gdGhpcy5sb2NhdGlvbi5sbmc7XG5cbiAgICAgICAgICAgIGxvYWRlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB7IGxhdDogdGhpcy5sb2NhdGlvbi5sYXQsIGxuZzogdGhpcy5sb2NhdGlvbi5sbmd9O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1hcChjdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5oYXNWZWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1hcmtlcih0aGlzLmxvY2F0aW9uLmFkZHJlc3MsIGN1cnJlbnRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXRNYXAoY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgaWYoICh0eXBlb2YgY2VudGVyLmxhdCAhPT0gJ251bWJlcicpICYmICh0eXBlb2YgY2VudGVyLmxuZyAhPT0gJ251bWJlcicpICkge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXIgPSB7bGF0OiAtMzMuODY4OCwgbG5nOiAxNTEuMjE5NX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuJHJlZnMubWFwLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUlkOiAncm9hZG1hcCcsXG4gICAgICAgICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlTWFya2VyKHRpdGxlLCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnZHJhZ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlb2NvZGVQb3NpdGlvbihtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgc2VhcmNoIGJveCBhbmQgbGluayBpdCB0byB0aGUgVUkgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuJHJlZnMuaW5wdXQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoQm94ID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5TZWFyY2hCb3goaW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQmlhcyB0aGUgU2VhcmNoQm94IHJlc3VsdHMgdG93YXJkcyBjdXJyZW50IG1hcCdzIHZpZXdwb3J0LlxuICAgICAgICAgICAgICAgIG1hcC5hZGRMaXN0ZW5lcignYm91bmRzX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQm94LnNldEJvdW5kcyhtYXAuZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtlcnMgPSB0aGlzLm1hcmtlcnM7XG5cbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBmaXJlZCB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBwcmVkaWN0aW9uIGFuZCByZXRyaWV2ZVxuICAgICAgICAgICAgICAgIC8vIG1vcmUgZGV0YWlscyBmb3IgdGhhdCBwbGFjZS5cbiAgICAgICAgICAgICAgICBzZWFyY2hCb3guYWRkTGlzdGVuZXIoJ3BsYWNlc19jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZXMgPSBzZWFyY2hCb3guZ2V0UGxhY2VzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGFjZXMgbm90IGZvdW5kLCBwbGVhc2UgaW5wdXQgbGF0aXR1ZGUgJiBsb25naXR1ZGUgbWFudWFsbHkuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMYXRMbmc9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBvdXQgdGhlIG9sZCBtYXJrZXJzLlxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzLmZvckVhY2goZnVuY3Rpb24obWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VycyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIHBsYWNlLCBnZXQgdGhlIGljb24sIG5hbWUgYW5kIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHBsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYWNlLmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXR1cm5lZCBwbGFjZSBjb250YWlucyBubyBnZW9tZXRyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUocGxhY2UuZm9ybWF0dGVkX2FkZHJlc3MsIHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXJrZXIocGxhY2UubmFtZSwgcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGdlb2NvZGVzIGhhdmUgdmlld3BvcnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRzLnVuaW9uKHBsYWNlLmdlb21ldHJ5LnZpZXdwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRzLmV4dGVuZChwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2ZW50RW50ZXIoZSkge1xuICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFZhbHVlKGFkZHJlc3MsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgICAgICAgICB0aGlzLmxhdCA9IHBvc2l0aW9uLmxhdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG5nID0gcG9zaXRpb24ubG5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLGFkZHJlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlb2NvZGVQb3NpdGlvbihwb3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gICAgICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7XG4gICAgICAgICAgICAgICAgICAgIGxhdExuZzogcG9zXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRfYWRkcmVzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzICYmIHJlc3BvbnNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzcyA9IHJlc3BvbnNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzID0gJ0Nhbm5vdCBkZXRlcm1pbmUgYWRkcmVzcyBhdCB0aGlzIGxvY2F0aW9uLic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShmb3JtYXR0ZWRfYWRkcmVzcywgcG9zKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFBsYWNlc1NlYXJjaC52dWU/M2RlY2IyNjciLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXB3aXphcmQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnc3RlcHdpemFyZC1zdGVwJywgeyBhY3RpdmU6IGFjdGl2ZSA9PSAxIH0gXVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIj4xPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydzdGVwd2l6YXJkLXN0ZXAnLCB7IGFjdGl2ZTogYWN0aXZlID09IDIgfSBdXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiPjI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ3N0ZXB3aXphcmQtc3RlcCBzdGVwLWxpbmUtZmFsc2UnLCB7IGFjdGl2ZTogYWN0aXZlID09IDMgfSBdXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tYmxvY2sgYnRuLWNpcmNsZVwiPjM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYWN0aXZlOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU3RlcFRhYi52dWU/MjM2YWQwY2MiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1lcmNoYW50LXJlZ2lzdHJhdGlvbiBvLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3RlcCBhY3RpdmU9XCIxXCI+PC9zdGVwPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyIG8tY29udGFpbmVyLS1maXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZCBjLWNhcmQtLW1lcmNoYW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJvLWhlYWRpbmcgdS1tLXgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXNpIEJhc2ljXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtZm9ybS1ncm91cCBjLWZvcm0tZ3JvdXAtLW1nMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YU1lcmNoYW50Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1hIFRlbXBhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ2YWxpZGF0b3IuZXJyb3JzLmhhcygnbmFtZScpXCIgY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2sgYy1mb3JtLWZlZWRiYWNrX19tZXJjaGFudFwiPldhamliIGRpaXNpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRyb3B6b25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm15VnVlRHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwicmV2aWV3VXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cIi9hcGkvbWVyY2hhbnQvdXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIHBhcmFtZXRlcnMgaWYgYW55IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidG9rZW5cIiB2YWx1ZT1cInh4eFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Ryb3B6b25lPiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJ1LXdlaWdodC1ib2xkIHUtbWIteDFcIj5VcGxvYWQgTG9nbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZS11cGxvYWQgdi1tb2RlbD1cImRhdGFNZXJjaGFudC5pbWFnZXNcIj48L2ltYWdlLXVwbG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInZhbGlkYXRvci5lcnJvcnMuaGFzKCdpbWFnZXMnKVwiIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrIGMtZm9ybS1mZWVkYmFja19fbWVyY2hhbnRcIj5XYWppYiBkaWlzaS48L3NwYW4+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwbGFjZXMgbmFtZT1cImFkZHJlc3NcIiB2LW1vZGVsPVwiZGF0YU1lcmNoYW50LmFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BsYWNlcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJ1LXdlaWdodC1ib2xkIHUtbWIteDFcIj5Lb250YWsgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhTWVyY2hhbnQucGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm8gVGVscFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidmFsaWRhdG9yLmVycm9ycy5oYXMoJ3Bob25lJylcIiBjbGFzcz1cImMtZm9ybS1mZWVkYmFjayBjLWZvcm0tZmVlZGJhY2tfX21lcmNoYW50XCI+V2FqaWIgZGlpc2kuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhTWVyY2hhbnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbGFtYXQgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiby1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInZhbGlkYXRvci5lcnJvcnMuaGFzKCdlbWFpbCcpXCIgY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2sgYy1mb3JtLWZlZWRiYWNrX19tZXJjaGFudFwiPldhamliIGRpaXNpLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhTWVyY2hhbnQud2Vic2l0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vic2l0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiby1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInZhbGlkYXRvci5lcnJvcnMuaGFzKCd3ZWJzaXRlJylcIiBjbGFzcz1cImMtZm9ybS1mZWVkYmFjayBjLWZvcm0tZmVlZGJhY2tfX21lcmNoYW50XCI+V2FqaWIgZGlpc2kuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtZm9ybS1ncm91cCB1LW10LXg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHJvdXRlci1saW5rIEBjbGljaz1cInN1Ym1pdCgpXCIgdG89XCIvbWVyY2hhbnQvcmVnaXN0cmF0aW9uLzJcIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIj4gTmV4dCA8L3JvdXRlci1saW5rPiAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIj5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwIHUtbXQteDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvbWVyY2hhbnQvcmVnaXN0cmF0aW9uXCI+IDwgS2VtYmFsaTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRHJvcHpvbmUgZnJvbSAndnVlMi1kcm9wem9uZSdcbiAgICBpbXBvcnQgUGxhY2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZSdcbiAgICBpbXBvcnQgU3RlcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0ZXBUYWIudnVlJ1xuICAgIGltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkLnZ1ZSdcbiAgICBpbXBvcnQgeyBWYWxpZGF0b3IsIEVycm9yQmFnIH0gZnJvbSAndmVlLXZhbGlkYXRlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czogeyBQbGFjZXMsIERyb3B6b25lLCBTdGVwLCBJbWFnZVVwbG9hZCB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IDEsXG4gICAgICAgICAgICAgICAgZGF0YU1lcmNoYW50OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IG5ldyBWYWxpZGF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ3JlcXVpcmVkfGVtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotaW1hZ2VcIiBzdHlsZT1cIndpZHRoOiAxMDBweDtoZWlnaHQ6IDEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1kei10aHVtYm5haWwgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR6LXNpemVcIj48c3BhbiBkYXRhLWR6LXNpemU+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR6LWZpbGVuYW1lXCI+PHNwYW4gZGF0YS1kei1uYW1lPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotcHJvZ3Jlc3NcIj48c3BhbiBjbGFzcz1cImR6LXVwbG9hZFwiIGRhdGEtZHotdXBsb2FkcHJvZ3Jlc3M+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1lcnJvci1tZXNzYWdlXCI+PHNwYW4gZGF0YS1kei1lcnJvcm1lc3NhZ2U+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1zdWNjZXNzLW1hcmtcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1lcnJvci1tYXJrXCI+PGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGZpZWxkLCBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZmllbGQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGVBbGwoeyBuYW1lOiB0aGlzLmRhdGFNZXJjaGFudC5uYW1lLCBpbWFnZXM6IHRoaXMuZGF0YU1lcmNoYW50LmltYWdlcywgYWRkcmVzczogdGhpcy5kYXRhTWVyY2hhbnQuYWRkcmVzcywgZW1haWw6IHRoaXMuZGF0YU1lcmNoYW50LmVtYWlsLCBwaG9uZTogdGhpcy5kYXRhTWVyY2hhbnQucGhvbmUgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsaWRhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9tZXJjaGFudC9yZWdpc3RyYXRpb24vMic7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWVyY2hhbnQvcmVnaXN0cmF0aW9uLzInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2VzcyBzdHVmZi5cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIChub24tdmFsaWRhdGlvbiByZWxhdGVkKS5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNZXJjaGFudFJlZ2lzdHJhdGlvbi52dWU/NDIxYjk5NDMiLCIvKipcbiAqIHZlZS12YWxpZGF0ZSB2Mi4wLjAtcmMuMTNcbiAqIChjKSAyMDE3IEFiZGVscmFobWFuIEF3YWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuVmVlVmFsaWRhdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU29tZSBBbHBoYSBSZWdleCBoZWxwZXJzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nocmlzby92YWxpZGF0b3IuanMvYmxvYi9tYXN0ZXIvc3JjL2xpYi9hbHBoYS5qc1xuICovXG5cbnZhciBhbHBoYSQxID0ge1xuICBlbjogL15bQS1aXSokL2ksXG4gIGNzOiAvXltBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKiQvaSxcbiAgZGE6IC9eW0EtWsOGw5jDhV0qJC9pLFxuICBkZTogL15bQS1aw4TDlsOcw59dKiQvaSxcbiAgZXM6IC9eW0EtWsOBw4nDjcORw5PDmsOcXSokL2ksXG4gIGZyOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0qJC9pLFxuICBsdDogL15bQS1axITEjMSYxJbErsWgxbLFqsW9XSokL2ksXG4gIG5sOiAvXltBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgaHU6IC9eW0EtWsOBw4nDjcOTw5bFkMOaw5zFsF0qJC9pLFxuICBwbDogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XSokL2ksXG4gIHB0OiAvXltBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0qJC9pLFxuICBydTogL15b0JAt0K/QgV0qJC9pLFxuICBzazogL15bQS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1dKiQvaSxcbiAgc3I6IC9eW0EtWsSMxIbFvcWgxJBdKiQvaSxcbiAgdHI6IC9eW0EtWsOHxJ7EsMSxw5bFnsOcXSokL2ksXG4gIHVrOiAvXlvQkC3QqdCs0K7Qr9CE0IbQh9KQXSokL2ksXG4gIGFyOiAvXlvYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFTcGFjZXMgPSB7XG4gIGVuOiAvXltBLVpcXHNdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvVxcc10qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXFxzXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn1xcc10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xcXHNdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XFxzXSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1cXHNdKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnFxcc10qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXFxzXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xblcXHNdKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXFxzXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXFxzXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvVxcc10qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkFxcc10qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xcXHNdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBcXHNdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsFxcc10qJC9cbn07XG5cbnZhciBhbHBoYW51bWVyaWMgPSB7XG4gIGVuOiAvXlswLTlBLVpdKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bMC05QS1aw4bDmMOFXSQvaSxcbiAgZGU6IC9eWzAtOUEtWsOEw5bDnMOfXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKiQvaSxcbiAgbHQ6IC9eWzAtOUEtWsSExIzEmMSWxK7FoMWyxarFvV0qJC9pLFxuICBodTogL15bMC05QS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIG5sOiAvXlswLTlBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgcGw6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xdKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFdKiQvaSxcbiAgc2s6IC9eWzAtOUEtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF0qJC9pLFxuICB1azogL15bMC050JAt0KnQrNCu0K/QhNCG0IfSkF0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFEYXNoID0ge1xuICBlbjogL15bMC05QS1aXy1dKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV8tXSokL2ksXG4gIGRhOiAvXlswLTlBLVrDhsOYw4VfLV0qJC9pLFxuICBkZTogL15bMC05QS1aw4TDlsOcw59fLV0qJC9pLFxuICBlczogL15bMC05QS1aw4HDicONw5HDk8Oaw5xfLV0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhfLV0qJC9pLFxuICBsdDogL15bMC05QS1axITEjMSYxJbErsWgxbLFqsW9Xy1dKiQvaSxcbiAgbmw6IC9eWzAtOUEtWsOJw4vDj8OTw5bDnF8tXSokL2ksXG4gIGh1OiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBfLV0qJC9pLFxuICBwbDogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5Xy1dKiQvaSxcbiAgcHQ6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXy1dKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFfLV0qJC9pLFxuICBzazogL15bMC05QS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1fLV0qJC9pLFxuICBzcjogL15bMC05QS1axIzEhsW9xaDEkF8tXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF8tXSokL2ksXG4gIHVrOiAvXlswLTnQkC3QqdCs0K7Qr9CE0IbQh9KQXy1dKiQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXy1dKiQvXG59O1xuXG52YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGEkMSkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYSQxW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYSQxW2xvY2FsZV0gfHwgYWxwaGEkMS5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDEodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhRGFzaCkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYURhc2hbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhRGFzaFtsb2NhbGVdIHx8IGFscGhhRGFzaC5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDIodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhbnVtZXJpYykuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYW51bWVyaWNbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhbnVtZXJpY1tsb2NhbGVdIHx8IGFscGhhbnVtZXJpYy5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMyA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDModmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhU3BhY2VzKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhU3BhY2VzW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYVNwYWNlc1tsb2NhbGVdIHx8IGFscGhhU3BhY2VzLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQ0ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1pbiA9IHJlZlswXTtcbiAgdmFyIG1heCA9IHJlZlsxXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkNCh2YWwsIFttaW4sIG1heF0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIobWluKSA8PSB2YWx1ZSAmJiBOdW1iZXIobWF4KSA+PSB2YWx1ZTtcbn07XG5cbnZhciBjb25maXJtZWQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7IHJldHVybiBTdHJpbmcodmFsdWUpID09PSBTdHJpbmcob3RoZXIpOyB9O1xuXG5mdW5jdGlvbiB1bndyYXBFeHBvcnRzICh4KSB7XG5cdHJldHVybiB4ICYmIHguX19lc01vZHVsZSA/IHhbJ2RlZmF1bHQnXSA6IHg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgYXNzZXJ0U3RyaW5nXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5mdW5jdGlvbiBhc3NlcnRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcblxuICBpZiAoIWlzU3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBsaWJyYXJ5ICh2YWxpZGF0b3IuanMpIHZhbGlkYXRlcyBzdHJpbmdzIG9ubHknKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBjcmVkaXRDYXJkID0gL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18KDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVswLTldezEyfXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX18NjJbMC05XXsxNH0pJC87XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZnVuY3Rpb24gaXNDcmVkaXRDYXJkKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG4gIGlmICghY3JlZGl0Q2FyZC50ZXN0KHNhbml0aXplZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdCA9IHZvaWQgMDtcbiAgdmFyIHRtcE51bSA9IHZvaWQgMDtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSAlIDEwICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cbiAgcmV0dXJuICEhKHN1bSAlIDEwID09PSAwID8gc2FuaXRpemVkIDogZmFsc2UpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZCA9IHVud3JhcEV4cG9ydHMoaXNDcmVkaXRDYXJkXzEpO1xuXG52YXIgY3JlZGl0X2NhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGlzQ3JlZGl0Q2FyZChTdHJpbmcodmFsdWUpKTsgfTtcblxudmFyIHZhbGlkYXRlJDUgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgZGVjaW1hbHMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyAocGFyYW1zWzBdIHx8ICcqJykgOiAnKic7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ1KHZhbCwgcGFyYW1zKTsgfSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGlzIDAuXG4gIGlmIChOdW1iZXIoZGVjaW1hbHMpID09PSAwKSB7XG4gICAgcmV0dXJuIC9eLT9cXGQqJC8udGVzdCh2YWx1ZSk7XG4gIH1cblxuICB2YXIgcmVnZXhQYXJ0ID0gZGVjaW1hbHMgPT09ICcqJyA/ICcrJyA6IChcInsxLFwiICsgZGVjaW1hbHMgKyBcIn1cIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiXi0/XFxcXGQqKFxcXFwuXFxcXGRcIiArIHJlZ2V4UGFydCArIFwiKT8kXCIpKTtcblxuICBpZiAoISByZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZSA9PT0gcGFyc2VkVmFsdWU7XG59O1xuXG52YXIgdmFsaWRhdGUkNiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDYodmFsLCBbbGVuZ3RoXSk7IH0pO1xuICB9XG4gIHZhciBzdHJWYWwgPSBTdHJpbmcodmFsdWUpO1xuXG4gIHJldHVybiAvXlswLTldKiQvLnRlc3Qoc3RyVmFsKSAmJiBzdHJWYWwubGVuZ3RoID09PSBOdW1iZXIobGVuZ3RoKTtcbn07XG5cbnZhciB2YWxpZGF0ZUltYWdlID0gZnVuY3Rpb24gKGZpbGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoeyB2YWxpZDogZmFsc2UgfSk7IH07XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICB2YWxpZDogaW1hZ2Uud2lkdGggPT09IE51bWJlcih3aWR0aCkgJiYgaW1hZ2UuaGVpZ2h0ID09PSBOdW1iZXIoaGVpZ2h0KVxuICAgIH0pOyB9O1xuXG4gICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgfSk7XG59O1xuXG52YXIgZGltZW5zaW9ucyA9IGZ1bmN0aW9uIChmaWxlcywgcmVmKSB7XG4gIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgdmFyIGhlaWdodCA9IHJlZlsxXTtcblxuICB2YXIgbGlzdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gaWYgZmlsZSBpcyBub3QgYW4gaW1hZ2UsIHJlamVjdC5cbiAgICBpZiAoISAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlc1tpXS5uYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxpc3QucHVzaChmaWxlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwobGlzdC5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHZhbGlkYXRlSW1hZ2UoZmlsZSwgd2lkdGgsIGhlaWdodCk7IH0pKTtcbn07XG5cbnZhciBtZXJnZV8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50c1sxXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQnl0ZUxlbmd0aF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzQnl0ZUxlbmd0aDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW4gPSB2b2lkIDA7XG4gIHZhciBtYXggPSB2b2lkIDA7XG4gIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0J5dGVMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNGUUROID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGRFFOO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2ZxZG5fb3B0aW9ucyA9IHtcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNGRFFOKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZnFkbl9vcHRpb25zKTtcblxuICAvKiBSZW1vdmUgdGhlIG9wdGlvbmFsIHRyYWlsaW5nIGRvdCBiZWZvcmUgY2hlY2tpbmcgdmFsaWRpdHkgKi9cbiAgaWYgKG9wdGlvbnMuYWxsb3dfdHJhaWxpbmdfZG90ICYmIHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX3RsZCkge1xuICAgIHZhciB0bGQgPSBwYXJ0cy5wb3AoKTtcbiAgICBpZiAoIXBhcnRzLmxlbmd0aCB8fCAhL14oW2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGRpc2FsbG93IHNwYWNlc1xuICAgIGlmICgvW1xcc1xcdTIwMDItXFx1MjAwQlxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZcXHVEQjQwXFx1REMyMF0vLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBwYXJ0LCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChvcHRpb25zLmFsbG93X3VuZGVyc2NvcmVzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9fL2csICcnKTtcbiAgICB9XG4gICAgaWYgKCEvXlthLXpcXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBkaXNhbGxvdyBmdWxsLXdpZHRoIGNoYXJzXG4gICAgaWYgKC9bXFx1ZmYwMS1cXHVmZjVlXS8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFydFswXSA9PT0gJy0nIHx8IHBhcnRbcGFydC5sZW5ndGggLSAxXSA9PT0gJy0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzRW1haWxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRW1haWw7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuXG5cbnZhciBfaXNCeXRlTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNCeXRlTGVuZ3RoXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICByZXF1aXJlX2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBkaXNwbGF5TmFtZSA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStbYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHNdKjwoLispPiQvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKGRpc3BsYXlOYW1lKTtcbiAgICBpZiAoZGlzcGxheV9lbWFpbCkge1xuICAgICAgc3RyID0gZGlzcGxheV9lbWFpbFsxXTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHBhcnRzLnBvcCgpO1xuICB2YXIgdXNlciA9IHBhcnRzLmpvaW4oJ0AnKTtcblxuICB2YXIgbG93ZXJfZG9tYWluID0gZG9tYWluLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsb3dlcl9kb21haW4gPT09ICdnbWFpbC5jb20nIHx8IGxvd2VyX2RvbWFpbiA9PT0gJ2dvb2dsZW1haWwuY29tJykge1xuICAgIHVzZXIgPSB1c2VyLnJlcGxhY2UoL1xcLi9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKHVzZXIsIHsgbWF4OiA2NCB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKGRvbWFpbiwgeyBtYXg6IDI1NCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0ZRRE4yLmRlZmF1bHQpKGRvbWFpbiwgeyByZXF1aXJlX3RsZDogb3B0aW9ucy5yZXF1aXJlX3RsZCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1c2VyWzBdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuXG4gIHZhciBwYXR0ZXJuID0gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBlbWFpbFVzZXJVdGY4UGFydCA6IGVtYWlsVXNlclBhcnQ7XG5cbiAgdmFyIHVzZXJfcGFydHMgPSB1c2VyLnNwbGl0KCcuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcGF0dGVybi50ZXN0KHVzZXJfcGFydHNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNFbWFpbCA9IHVud3JhcEV4cG9ydHMoaXNFbWFpbF8xKTtcblxudmFyIHZhbGlkYXRlJDcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc0VtYWlsKFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIGV4dCA9IGZ1bmN0aW9uIChmaWxlcywgZXh0ZW5zaW9ucykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKChcIi4oXCIgKyAoZXh0ZW5zaW9ucy5qb2luKCd8JykpICsgXCIpJFwiKSwgJ2knKTtcblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHJlZ2V4LnRlc3QoZmlsZS5uYW1lKTsgfSk7XG59O1xuXG52YXIgaW1hZ2UgPSBmdW5jdGlvbiAoZmlsZXMpIHsgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlLm5hbWUpOyB9XG4pOyB9O1xuXG52YXIgdmFsaWRhdGUkOCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkOCh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgaXNJUF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJUDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXB2NE1heWJlID0gL14oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pJC87XG52YXIgaXB2NkJsb2NrID0gL15bMC05QS1GXXsxLDR9JC9pO1xuXG5mdW5jdGlvbiBpc0lQKHN0cikge1xuICB2YXIgdmVyc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghaXB2NE1heWJlLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzWzNdIDw9IDI1NTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNicpIHtcbiAgICB2YXIgYmxvY2tzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGZvdW5kT21pc3Npb25CbG9jayA9IGZhbHNlOyAvLyBtYXJrZXIgdG8gaW5kaWNhdGUgOjpcblxuICAgIC8vIEF0IGxlYXN0IHNvbWUgT1MgYWNjZXB0IHRoZSBsYXN0IDMyIGJpdHMgb2YgYW4gSVB2NiBhZGRyZXNzXG4gICAgLy8gKGkuZS4gMiBvZiB0aGUgYmxvY2tzKSBpbiBJUHY0IG5vdGF0aW9uLCBhbmQgUkZDIDM0OTMgc2F5c1xuICAgIC8vIHRoYXQgJzo6ZmZmZjphLmIuYy5kJyBpcyB2YWxpZCBmb3IgSVB2NC1tYXBwZWQgSVB2NiBhZGRyZXNzZXMsXG4gICAgLy8gYW5kICc6OmEuYi5jLmQnIGlzIGRlcHJlY2F0ZWQsIGJ1dCBhbHNvIHZhbGlkLlxuICAgIHZhciBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPSBpc0lQKGJsb2Nrc1tibG9ja3MubGVuZ3RoIC0gMV0sIDQpO1xuICAgIHZhciBleHBlY3RlZE51bWJlck9mQmxvY2tzID0gZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID8gNyA6IDg7XG5cbiAgICBpZiAoYmxvY2tzLmxlbmd0aCA+IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gaW5pdGlhbCBvciBmaW5hbCA6OlxuICAgIGlmIChzdHIgPT09ICc6OicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7ICsraSkge1xuICAgICAgLy8gdGVzdCBmb3IgYSA6OiB3aGljaCBjYW4gbm90IGJlIGF0IHRoZSBzdHJpbmcgc3RhcnQvZW5kXG4gICAgICAvLyBzaW5jZSB0aG9zZSBjYXNlcyBoYXZlIGJlZW4gaGFuZGxlZCBhYm92ZVxuICAgICAgaWYgKGJsb2Nrc1tpXSA9PT0gJycgJiYgaSA+IDAgJiYgaSA8IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG11bHRpcGxlIDo6IGluIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgJiYgaSA9PT0gYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgdGhhdCB0aGUgbGFzdFxuICAgICAgICAvLyBibG9jayBpcyBhIHZhbGlkIElQdjQgYWRkcmVzc1xuICAgICAgfSBlbHNlIGlmICghaXB2NkJsb2NrLnRlc3QoYmxvY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID49IDE7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MubGVuZ3RoID09PSBleHBlY3RlZE51bWJlck9mQmxvY2tzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0lQID0gdW53cmFwRXhwb3J0cyhpc0lQXzEpO1xuXG52YXIgaXAgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gWzRdO1xuICB2YXIgdmVyc2lvbiA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNJUCh2YWwsIFt2ZXJzaW9uXSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzSVAodmFsdWUsIHZlcnNpb24pO1xufTtcblxudmFyIG1heCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbGVuZ3RoID49IDA7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPD0gbGVuZ3RoO1xufTtcblxudmFyIG1heF92YWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtYXggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPD0gbWF4O1xufTtcblxudmFyIG1pbWVzID0gZnVuY3Rpb24gKGZpbGVzLCBtaW1lcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCgobWltZXMuam9pbignfCcpLnJlcGxhY2UoJyonLCAnLisnKSkgKyBcIiRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUudHlwZSk7IH0pO1xufTtcblxudmFyIG1pbiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoID49IGxlbmd0aDtcbn07XG5cbnZhciBtaW5fdmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIodmFsdWUpID49IG1pbjtcbn07XG5cbnZhciB2YWxpZGF0ZSQ5ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ5KHZhbCwgb3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiAhIG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIG9wdGlvbiA9PSB2YWx1ZTsgfSkubGVuZ3RoO1xufTtcblxudmFyIG51bWVyaWMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIC9eWzAtOV0rJC8udGVzdChTdHJpbmcodmFsKSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIC9eWzAtOV0rJC8udGVzdChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciByZWdleCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciByZWdleCA9IHJlZlswXTtcbiAgdmFyIGZsYWdzID0gcmVmLnNsaWNlKDEpO1xuXG4gIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBmbGFncykudGVzdChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciByZXF1aXJlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSBbZmFsc2VdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiAhISB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvLyBpbmNhc2UgYSBmaWVsZCBjb25zaWRlcnMgYGZhbHNlYCBhcyBhbiBlbXB0eSB2YWx1ZSBsaWtlIGNoZWNrYm94ZXMuXG4gIHZhciBpbnZhbGlkYXRlRmFsc2UgPSBwYXJhbXNbMF07XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgaW52YWxpZGF0ZUZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gISEgU3RyaW5nKHZhbHVlKS50cmltKCkubGVuZ3RoO1xufTtcblxudmFyIHNpemUgPSBmdW5jdGlvbiAoZmlsZXMsIHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICBpZiAoaXNOYU4oc2l6ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgblNpemUgPSBOdW1iZXIoc2l6ZSkgKiAxMDI0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZpbGVzW2ldLnNpemUgPiBuU2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzVVJMXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VSTDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE4pO1xuXG5cblxudmFyIF9pc0lQMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNJUF8xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfdXJsX29wdGlvbnMgPSB7XG4gIHByb3RvY29sczogWydodHRwJywgJ2h0dHBzJywgJ2Z0cCddLFxuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgcmVxdWlyZV9wcm90b2NvbDogZmFsc2UsXG4gIHJlcXVpcmVfaG9zdDogdHJ1ZSxcbiAgcmVxdWlyZV92YWxpZF9wcm90b2NvbDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlLFxuICBhbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzOiBmYWxzZVxufTtcblxudmFyIHdyYXBwZWRfaXB2NiA9IC9eXFxbKFteXFxdXSspXFxdKD86OihbMC05XSspKT8kLztcblxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSG9zdChob3N0LCBtYXRjaGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbaV07XG4gICAgaWYgKGhvc3QgPT09IG1hdGNoIHx8IGlzUmVnRXhwKG1hdGNoKSAmJiBtYXRjaC50ZXN0KGhvc3QpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1VSTCh1cmwsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHVybCk7XG4gIGlmICghdXJsIHx8IHVybC5sZW5ndGggPj0gMjA4MyB8fCAvW1xcczw+XS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh1cmwuaW5kZXhPZignbWFpbHRvOicpID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X3VybF9vcHRpb25zKTtcbiAgdmFyIHByb3RvY29sID0gdm9pZCAwLFxuICAgICAgYXV0aCA9IHZvaWQgMCxcbiAgICAgIGhvc3QgPSB2b2lkIDAsXG4gICAgICBob3N0bmFtZSA9IHZvaWQgMCxcbiAgICAgIHBvcnQgPSB2b2lkIDAsXG4gICAgICBwb3J0X3N0ciA9IHZvaWQgMCxcbiAgICAgIHNwbGl0ID0gdm9pZCAwLFxuICAgICAgaXB2NiA9IHZvaWQgMDtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnIycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc/Jyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJzovLycpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIHByb3RvY29sID0gc3BsaXQuc2hpZnQoKTtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlX3ZhbGlkX3Byb3RvY29sICYmIG9wdGlvbnMucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzICYmIHVybC5zdWJzdHIoMCwgMikgPT09ICcvLycpIHtcbiAgICBzcGxpdFswXSA9IHVybC5zdWJzdHIoMik7XG4gIH1cbiAgdXJsID0gc3BsaXQuam9pbignOi8vJyk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJy8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBpZiAodXJsID09PSAnJyAmJiAhb3B0aW9ucy5yZXF1aXJlX2hvc3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCdAJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgYXV0aCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKGF1dGguaW5kZXhPZignOicpID49IDAgJiYgYXV0aC5zcGxpdCgnOicpLmxlbmd0aCA+IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG5cbiAgcG9ydF9zdHIgPSBudWxsO1xuICBpcHY2ID0gbnVsbDtcbiAgdmFyIGlwdjZfbWF0Y2ggPSBob3N0bmFtZS5tYXRjaCh3cmFwcGVkX2lwdjYpO1xuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKHNwbGl0Lmxlbmd0aCkge1xuICAgICAgcG9ydF9zdHIgPSBzcGxpdC5qb2luKCc6Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcnRfc3RyICE9PSBudWxsKSB7XG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRfc3RyLCAxMCk7XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QocG9ydF9zdHIpIHx8IHBvcnQgPD0gMCB8fCBwb3J0ID4gNjU1MzUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISgwLCBfaXNJUDIuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROMi5kZWZhdWx0KShob3N0LCBvcHRpb25zKSAmJiAoIWlwdjYgfHwgISgwLCBfaXNJUDIuZGVmYXVsdCkoaXB2NiwgNikpICYmIGhvc3QgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaG9zdCA9IGhvc3QgfHwgaXB2NjtcblxuICBpZiAob3B0aW9ucy5ob3N0X3doaXRlbGlzdCAmJiAhY2hlY2tIb3N0KGhvc3QsIG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzVVJMID0gdW53cmFwRXhwb3J0cyhpc1VSTF8xKTtcblxudmFyIHVybCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbdHJ1ZV07XG4gIHZhciByZXF1aXJlUHJvdG9jb2wgPSByZWZbMF07XG5cbiAgdmFyIG9wdGlvbnMgPSB7IHJlcXVpcmVfcHJvdG9jb2w6ICEhcmVxdWlyZVByb3RvY29sLCBhbGxvd191bmRlcnNjb3JlczogdHJ1ZSB9O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNVUkwodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNVUkwodmFsdWUsIG9wdGlvbnMpO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG52YXIgUnVsZXMgPSB7XG4gIGFscGhhX2Rhc2g6IHZhbGlkYXRlJDEsXG4gIGFscGhhX251bTogdmFsaWRhdGUkMixcbiAgYWxwaGFfc3BhY2VzOiB2YWxpZGF0ZSQzLFxuICBhbHBoYTogdmFsaWRhdGUsXG4gIGJldHdlZW46IHZhbGlkYXRlJDQsXG4gIGNvbmZpcm1lZDogY29uZmlybWVkLFxuICBjcmVkaXRfY2FyZDogY3JlZGl0X2NhcmQsXG4gIGRlY2ltYWw6IHZhbGlkYXRlJDUsXG4gIGRpZ2l0czogdmFsaWRhdGUkNixcbiAgZGltZW5zaW9uczogZGltZW5zaW9ucyxcbiAgZW1haWw6IHZhbGlkYXRlJDcsXG4gIGV4dDogZXh0LFxuICBpbWFnZTogaW1hZ2UsXG4gIGluOiB2YWxpZGF0ZSQ4LFxuICBpcDogaXAsXG4gIG1heDogbWF4LFxuICBtYXhfdmFsdWU6IG1heF92YWx1ZSxcbiAgbWltZXM6IG1pbWVzLFxuICBtaW46IG1pbixcbiAgbWluX3ZhbHVlOiBtaW5fdmFsdWUsXG4gIG5vdF9pbjogdmFsaWRhdGUkOSxcbiAgbnVtZXJpYzogbnVtZXJpYyxcbiAgcmVnZXg6IHJlZ2V4LFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHNpemU6IHNpemUsXG4gIHVybDogdXJsXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgYXR0cmlidXRlLiB0aGUgbmFtZSBtdXN0IGJlIGtlYmFiLWNhc2UuXG4gKi9cbnZhciBnZXREYXRhQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsLCBuYW1lKSB7IHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoKFwiZGF0YS12di1cIiArIG5hbWUpKTsgfTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRhIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xudmFyIHNldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoKFwiZGF0YS12di1cIiArIG5hbWUpLCB2YWx1ZSk7IH07XG5cbi8qKlxuICogU2hhbGxvdyBvYmplY3QgY29tcGFyaXNvbi5cbiAqXG4gKiBAcGFyYW0geyp9IGxocyBcbiAqIEBwYXJhbSB7Kn0gcmhzIFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiAobGhzLCByaHMpIHtcbiAgaWYgKGxocyBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByaHMgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gaXNFcXVhbChsaHMuc291cmNlLCByaHMuc291cmNlKSAmJiBpc0VxdWFsKGxocy5mbGFncywgcmhzLmZsYWdzKTtcbiAgfVxuXG4gIC8vIGlmIGJvdGggYXJlIG9iamVjdHMsIGNvbXBhcmUgZWFjaCBrZXkgcmVjdXJzaXZlbHkuXG4gIGlmIChpc09iamVjdChsaHMpICYmIGlzT2JqZWN0KHJocykpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGhzKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gaXNFcXVhbChsaHNba2V5XSwgcmhzW2tleV0pO1xuICAgIH0pICYmIE9iamVjdC5rZXlzKHJocykuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGlzRXF1YWwobGhzW2tleV0sIHJoc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaHMgPT09IHJocztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgaW5wdXQgZmllbGQgc2NvcGUuXG4gKi9cbnZhciBnZXRTY29wZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgc2NvcGUgPSBnZXREYXRhQXR0cmlidXRlKGVsLCAnc2NvcGUnKTtcbiAgaWYgKCEgc2NvcGUgJiYgZWwuZm9ybSkge1xuICAgIHNjb3BlID0gZ2V0RGF0YUF0dHJpYnV0ZShlbC5mb3JtLCAnc2NvcGUnKTtcbiAgfVxuXG4gIHJldHVybiBzY29wZSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBpbiBhbiBvYmplY3Qgc2FmZWx5LlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BQYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0geyp9IGRlZlxuICovXG52YXIgZ2V0UGF0aCA9IGZ1bmN0aW9uIChwcm9wUGF0aCwgdGFyZ2V0LCBkZWYpIHtcbiAgaWYgKCBkZWYgPT09IHZvaWQgMCApIGRlZiA9IHVuZGVmaW5lZDtcblxuICBpZiAoIXByb3BQYXRoIHx8ICF0YXJnZXQpIHsgcmV0dXJuIGRlZjsgfVxuICB2YXIgdmFsdWUgPSB0YXJnZXQ7XG4gIHByb3BQYXRoLnNwbGl0KCcuJykuZXZlcnkoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoISBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3ApICYmIHZhbHVlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gZGVmO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBwYXRoIGV4aXN0cyB3aXRoaW4gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKi9cbnZhciBoYXNQYXRoID0gZnVuY3Rpb24gKHBhdGgsIHRhcmdldCkge1xuICB2YXIgb2JqID0gdGFyZ2V0O1xuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLmV2ZXJ5KGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKCEgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvYmogPSBvYmpbcHJvcF07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBydWxlXG4gKi9cbnZhciBwYXJzZVJ1bGUgPSBmdW5jdGlvbiAocnVsZSkge1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBuYW1lID0gcnVsZS5zcGxpdCgnOicpWzBdO1xuXG4gIGlmICh+cnVsZS5pbmRleE9mKCc6JykpIHtcbiAgICBwYXJhbXMgPSBydWxlLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpLnNwbGl0KCcsJyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBuYW1lLCBwYXJhbXM6IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBydWxlcyBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcnVsZXNcbiAqL1xudmFyIG5vcm1hbGl6ZVJ1bGVzID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gIC8vIGlmIGZhbHN5IHZhbHVlIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgdmFsaWRhdGlvbnMgPSB7fTtcbiAgaWYgKGlzT2JqZWN0KHJ1bGVzKSkge1xuICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICBpZiAocnVsZXNbcnVsZV0gPT09IHRydWUpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocnVsZXNbcnVsZV0pKSB7XG4gICAgICAgIHBhcmFtcyA9IHJ1bGVzW3J1bGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gW3J1bGVzW3J1bGVdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzW3J1bGVdICE9PSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0aW9uc1tydWxlXSA9IHBhcmFtcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9ucztcbiAgfVxuXG4gIHJ1bGVzLnNwbGl0KCd8JykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBwYXJzZWRSdWxlID0gcGFyc2VSdWxlKHJ1bGUpO1xuICAgIGlmICghIHBhcnNlZFJ1bGUubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25zW3BhcnNlZFJ1bGUubmFtZV0gPSBwYXJzZWRSdWxlLnBhcmFtcztcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbGlkYXRpb25zO1xufTtcblxuLyoqXG4gKiBEZWJvdW5jZXMgYSBmdW5jdGlvbi5cbiAqL1xudmFyIGRlYm91bmNlID0gZnVuY3Rpb24gKGZuLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgaWYgKCB3YWl0ID09PSB2b2lkIDAgKSB3YWl0ID0gMDtcbiAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IGZhbHNlO1xuXG4gIGlmICh3YWl0ID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChjYWxsTm93KSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgfTtcbn07XG5cbi8qKlxuICogRW1pdHMgYSB3YXJuaW5nIHRvIHRoZSBjb25zb2xlLlxuICovXG52YXIgd2FybiA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybigoXCJbdmVlLXZhbGlkYXRlXSBcIiArIG1lc3NhZ2UpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJhbmRlZCBlcnJvciBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICovXG52YXIgY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gbmV3IEVycm9yKChcIlt2ZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmICEgQXJyYXkuaXNBcnJheShvYmplY3QpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGZ1bmN0aW9uIGlzIGNhbGxhYmxlLlxuICovXG52YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmdW5jKSB7IHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGhhcyB0aGUgY3NzIGNsYXNzIG9uIGl0LlxuICovXG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSkpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIHRvIHRoZSBlbGVtZW50LlxuICovXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSk7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIG5hbWUgb24gdGhlIGlucHV0IGRlcGVuZGluZyBvbiB0aGUgc3RhdHVzIGZsYWcuXG4gKi9cbnZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lLCBzdGF0dXMpIHtcbiAgaWYgKCFlbCB8fCAhY2xhc3NOYW1lKSB7IHJldHVybjsgfVxuXG4gIGlmIChzdGF0dXMpIHtcbiAgICByZXR1cm4gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYXJyYXkuXG4gKiBTaW1wbGUgcG9seWZpbGwgZm9yIEFycmF5LmZyb21cbiAqL1xudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIGlmIChpc0NhbGxhYmxlKEFycmF5LmZyb20pKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXlMaWtlKTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IFtdO1xuICB2YXIgbGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goYXJyYXlMaWtlW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn07XG5cbi8qKlxuICogQXNzaWduIHBvbHlmaWxsIGZyb20gdGhlIG1kbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIGFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgdmFyIG90aGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBvdGhlcnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGlzQ2FsbGFibGUoT2JqZWN0LmFzc2lnbikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIFsgdGFyZ2V0IF0uY29uY2F0KCBvdGhlcnMgKSk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBvdGhlcnMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgLy8gU2tpcCBvdmVyIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgaWYgKGFyZyAhPSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0b1trZXldID0gYXJnW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gdG87XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZC5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudmFyIHVuaXFJZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChcIl9cIiArIChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSkpKTsgfTtcblxuLyoqXG4gKiBwb2x5ZmlsbHMgYXJyYXkuZmluZFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICovXG52YXIgZmluZCA9IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGlmIChpc09iamVjdChhcnJheSkpIHtcbiAgICBhcnJheSA9IHRvQXJyYXkoYXJyYXkpO1xuICB9XG4gIGlmIChhcnJheS5maW5kKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlKTtcbiAgfVxuICB2YXIgcmVzdWx0O1xuICBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBnZXRJbnB1dEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgJiYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IH5bJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2ZpbGUnXS5pbmRleE9mKGVsLnR5cGUpKSkge1xuICAgIHJldHVybiAnY2hhbmdlJztcbiAgfVxuXG4gIHJldHVybiAnaW5wdXQnO1xufTtcblxudmFyIEVycm9yQmFnID0gZnVuY3Rpb24gRXJyb3JCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG4vKipcbiAgICogQWRkcyBhbiBlcnJvciB0byB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciBUaGUgZXJyb3Igb2JqZWN0LlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGVycm9yKSB7XG4gIC8vIGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBlcnJvciA9IHtcbiAgICAgIGZpZWxkOiBhcmd1bWVudHNbMF0sXG4gICAgICBtc2c6IGFyZ3VtZW50c1sxXSxcbiAgICAgIHJ1bGU6IGFyZ3VtZW50c1syXSxcbiAgICAgIHNjb3BlOiBhcmd1bWVudHNbM10gfHwgbnVsbFxuICAgIH07XG4gIH1cblxuICBlcnJvci5zY29wZSA9IGVycm9yLnNjb3BlIHx8IG51bGw7XG4gIHRoaXMuaXRlbXMucHVzaChlcnJvcik7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSBmaWVsZCBlcnJvciB3aXRoIHRoZSBuZXcgZmllbGQgc2NvcGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICogQHBhcmFtIHtPYmplY3R9IGVycm9yIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChpZCwgZXJyb3IpIHtcbiAgdmFyIGl0ZW0gPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG4gIGlmICghaXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gIGl0ZW0uc2NvcGUgPSBlcnJvci5zY29wZTtcbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuLyoqXG4gICAqIEdldHMgYWxsIGVycm9yIG1lc3NhZ2VzIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gZXJyb3JzIEFycmF5IG9mIGFsbCBlcnJvciBtZXNzYWdlcy5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gYWxsIChzY29wZSkge1xuICBpZiAoISBzY29wZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLm1zZzsgfSk7XG59O1xuXG4vKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGluIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gcmVzdWx0IFRydWUgaWYgdGhlcmUgd2FzIGF0IGxlYXN0IG9uZSBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBhbnkgKHNjb3BlKSB7XG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuICEhIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuICEhIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubGVuZ3RoO1xufTtcblxuLyoqXG4gICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyIChzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogQ29sbGVjdHMgZXJyb3JzIGludG8gZ3JvdXBzIG9yIGZvciBhIHNwZWNpZmljIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgZmllbGQgbmFtZS5cbiAgICogQHBhcmFte3N0cmluZ30gc2NvcGUgVGhlIHNjb3BlIG5hbWUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFwIElmIGl0IHNob3VsZCBtYXAgdGhlIGVycm9ycyB0byBzdHJpbmdzIGluc3RlYWQgb2Ygb2JqZWN0cy5cbiAgICogQHJldHVybiB7QXJyYXl9IGVycm9ycyBUaGUgZXJyb3JzIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb2xsZWN0ID0gZnVuY3Rpb24gY29sbGVjdCAoZmllbGQsIHNjb3BlLCBtYXApIHtcbiAgICBpZiAoIG1hcCA9PT0gdm9pZCAwICkgbWFwID0gdHJ1ZTtcblxuICBpZiAoISBmaWVsZCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0ge307XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoISBjb2xsZWN0aW9uW2UuZmllbGRdKSB7XG4gICAgICAgIGNvbGxlY3Rpb25bZS5maWVsZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbltlLmZpZWxkXS5wdXNoKG1hcCA/IGUubXNnIDogZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZDsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAobWFwID8gZS5tc2cgOiBlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkICYmIGUuc2NvcGUgPT09IHNjb3BlOyB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChtYXAgPyBlLm1zZyA6IGUpOyB9KTtcbn07XG4vKipcbiAgICogR2V0cyB0aGUgaW50ZXJuYWwgYXJyYXkgbGVuZ3RoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGxlbmd0aCBUaGUgaW50ZXJuYWwgYXJyYXkgbGVuZ3RoLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50ICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBGaW5kcyBhbmQgZmV0Y2hlcyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIHNwZWNpZmllZCBmaWVsZCBpZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdEJ5SWQgPSBmdW5jdGlvbiBmaXJzdEJ5SWQgKGlkKSB7XG4gIHZhciBlcnJvciA9IGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuaWQgPT09IGlkOyB9KTtcblxuICByZXR1cm4gZXJyb3IgPyBlcnJvci5tc2cgOiBudWxsO1xufTtcblxuLyoqXG4gICAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCBuYW1lLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiBmaXJzdCAoZmllbGQsIHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIHZhciBzZWxlY3RvciA9IHRoaXMuX3NlbGVjdG9yKGZpZWxkKTtcbiAgdmFyIHNjb3BlZCA9IHRoaXMuX3Njb3BlKGZpZWxkKTtcblxuICBpZiAoc2NvcGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuZmlyc3Qoc2NvcGVkLm5hbWUsIHNjb3BlZC5zY29wZSk7XG4gICAgLy8gaWYgc3VjaCByZXN1bHQgZXhpc3QsIHJldHVybiBpdC4gb3RoZXJ3aXNlIGl0IGNvdWxkIGJlIGEgZmllbGQuXG4gICAgLy8gd2l0aCBkb3QgaW4gaXRzIG5hbWUuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEJ5UnVsZShzZWxlY3Rvci5uYW1lLCBzZWxlY3Rvci5ydWxlLCBzY29wZSk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcyQxLml0ZW1zW2ldLmZpZWxkID09PSBmaWVsZCAmJiAodGhpcyQxLml0ZW1zW2ldLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgIHJldHVybiB0aGlzJDEuaXRlbXNbaV0ubXNnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IGVycm9yIHJ1bGUgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBGaXJzdCBlcnJvciBydWxlIG9uIHRoZSBzcGVjaWZpZWQgZmllbGQgaWYgb25lIGlzIGZvdW5kLCBvdGhlcndpc2UgbnVsbFxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdFJ1bGUgPSBmdW5jdGlvbiBmaXJzdFJ1bGUgKGZpZWxkLCBzY29wZSkge1xuICB2YXIgZXJyb3JzID0gdGhpcy5jb2xsZWN0KGZpZWxkLCBzY29wZSwgZmFsc2UpO1xuXG4gIHJldHVybiAoZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnNbMF0ucnVsZSkgfHwgbnVsbDtcbn07XG5cbi8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGludGVybmFsIGFycmF5IGhhcyBhdCBsZWFzdCBvbmUgZXJyb3IgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBUcnVlIGlmIGF0IGxlYXN0IG9uZSBlcnJvciBpcyBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGZpZWxkLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICByZXR1cm4gISEgdGhpcy5maXJzdChmaWVsZCwgc2NvcGUpO1xufTtcblxuLyoqXG4gICAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQgYW5kIGEgcnVsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcnVsZSBUaGUgbmFtZSBvZiB0aGUgcnVsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBuYW1lIG9mIHRoZSBzY29wZSAob3B0aW9uYWwpLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdEJ5UnVsZSA9IGZ1bmN0aW9uIGZpcnN0QnlSdWxlIChuYW1lLCBydWxlLCBzY29wZSkge1xuICB2YXIgZXJyb3IgPSB0aGlzLmNvbGxlY3QobmFtZSwgc2NvcGUsIGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUucnVsZSA9PT0gcnVsZTsgfSlbMF07XG5cbiAgcmV0dXJuIChlcnJvciAmJiBlcnJvci5tc2cpIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXJyb3JzIGJ5IG1hdGNoaW5nIGFnYWluc3QgdGhlIGlkLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUucmVtb3ZlQnlJZCA9IGZ1bmN0aW9uIHJlbW92ZUJ5SWQgKGlkKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogUmVtb3ZlcyBhbGwgZXJyb3IgbWVzc2FnZXMgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCB3aGljaCBtZXNzYWdlcyBhcmUgdG8gYmUgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChmaWVsZCwgc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcmVtb3ZlQ29uZGl0aW9uID0gc2NvcGUgPyBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGU7IH1cbiAgICA6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBudWxsOyB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChyZW1vdmVDb25kaXRpb24odGhpcyQxLml0ZW1zW2ldKSkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICAgKiBHZXQgdGhlIGZpZWxkIGF0dHJpYnV0ZXMgaWYgdGhlcmUncyBhIHJ1bGUgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5fc2VsZWN0b3IgPSBmdW5jdGlvbiBfc2VsZWN0b3IgKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5pbmRleE9mKCc6JykgPiAtMSkge1xuICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnOicpO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMF07XG4gICAgICB2YXIgcnVsZSA9IHJlZlsxXTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHJ1bGU6IHJ1bGUgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gICAqIEdldCB0aGUgZmllbGQgc2NvcGUgaWYgc3BlY2lmaWVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIHRoZSBzcGVjaWZpZSBmaWVsZC5cbiAgICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zY29wZSA9IGZ1bmN0aW9uIF9zY29wZSAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZlsxXTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRGljdGlvbmFyeSA9IGZ1bmN0aW9uIERpY3Rpb25hcnkgKGRpY3Rpb25hcnkpIHtcbiAgaWYgKCBkaWN0aW9uYXJ5ID09PSB2b2lkIDAgKSBkaWN0aW9uYXJ5ID0ge307XG5cbiAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgdGhpcy5tZXJnZShkaWN0aW9uYXJ5KTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0xvY2FsZSA9IGZ1bmN0aW9uIGhhc0xvY2FsZSAobG9jYWxlKSB7XG4gIHJldHVybiAhISB0aGlzLmNvbnRhaW5lcltsb2NhbGVdO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHNldERhdGVGb3JtYXQgKGxvY2FsZSwgZm9ybWF0KSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSkge1xuICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0gPSB7fTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uZGF0ZUZvcm1hdCA9IGZvcm1hdDtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBnZXREYXRlRm9ybWF0IChsb2NhbGUpIHtcbiAgaWYgKCF0aGlzLmNvbnRhaW5lcltsb2NhbGVdKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSAobG9jYWxlLCBrZXksIGZhbGxiYWNrKSB7XG4gIGlmICghIHRoaXMuaGFzTWVzc2FnZShsb2NhbGUsIGtleSkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgdGhpcy5fZ2V0RGVmYXVsdE1lc3NhZ2UobG9jYWxlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV07XG59O1xuXG4vKipcbiAqIEdldHMgYSBzcGVjaWZpYyBtZXNzYWdlIGZvciBmaWVsZC4gZmFsbHNiYWNrIHRvIHRoZSBydWxlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2FsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldEZpZWxkTWVzc2FnZSA9IGZ1bmN0aW9uIGdldEZpZWxkTWVzc2FnZSAobG9jYWxlLCBmaWVsZCwga2V5KSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlKGxvY2FsZSwga2V5KTtcbiAgfVxuXG4gIHZhciBkaWN0ID0gdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b20gJiYgdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b21bZmllbGRdO1xuICBpZiAoISBkaWN0IHx8ICEgZGljdFtrZXldKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2FnZShsb2NhbGUsIGtleSk7XG4gIH1cblxuICByZXR1cm4gZGljdFtrZXldO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX2dldERlZmF1bHRNZXNzYWdlID0gZnVuY3Rpb24gX2dldERlZmF1bHRNZXNzYWdlIChsb2NhbGUpIHtcbiAgaWYgKHRoaXMuaGFzTWVzc2FnZShsb2NhbGUsICdfZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMuX2RlZmF1bHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXIuZW4ubWVzc2FnZXMuX2RlZmF1bHQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUgKGxvY2FsZSwga2V5LCBmYWxsYmFjaykge1xuICAgIGlmICggZmFsbGJhY2sgPT09IHZvaWQgMCApIGZhbGxiYWNrID0gJyc7XG5cbiAgaWYgKCEgdGhpcy5oYXNBdHRyaWJ1dGUobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzTWVzc2FnZSA9IGZ1bmN0aW9uIGhhc01lc3NhZ2UgKGxvY2FsZSwga2V5KSB7XG4gIHJldHVybiAhISAoXG4gICAgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZSAobG9jYWxlLCBrZXkpIHtcbiAgcmV0dXJuICEhIChcbiAgICB0aGlzLmhhc0xvY2FsZShsb2NhbGUpICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UgKGRpY3Rpb25hcnkpIHtcbiAgdGhpcy5fbWVyZ2UodGhpcy5jb250YWluZXIsIGRpY3Rpb25hcnkpO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0TWVzc2FnZSA9IGZ1bmN0aW9uIHNldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBtZXNzYWdlKSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge1xuICAgICAgbWVzc2FnZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9O1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldID0gbWVzc2FnZTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIGF0dHJpYnV0ZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldID0gYXR0cmlidXRlO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgaWYgKCEgdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgYXNzaWduKHRhcmdldCwgKCBvYmogPSB7fSwgb2JqW2tleV0gPSB7fSwgb2JqICkpO1xuICAgICAgICAgIHZhciBvYmo7XG4gICAgICB9XG5cbiAgICAgIHRoaXMkMS5fbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc3NpZ24odGFyZ2V0LCAoIG9iaiQxID0ge30sIG9iaiQxW2tleV0gPSBzb3VyY2Vba2V5XSwgb2JqJDEgKSk7XG4gICAgICB2YXIgb2JqJDE7XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIF9kZWZhdWx0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgdmFsdWUgaXMgbm90IHZhbGlkLlwiKTsgfSxcbiAgYWxwaGFfZGFzaDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGRhc2hlcyBhbmQgdW5kZXJzY29yZXMuXCIpOyB9LFxuICBhbHBoYV9udW06IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGFscGhhX3NwYWNlczogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgc3BhY2VzLlwiKTsgfSxcbiAgYWxwaGE6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGJldHdlZW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcbiAgICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBiZXR3ZWVuIFwiICsgbWluICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xufSxcbiAgY29uZmlybWVkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoLlwiKTsgfSxcbiAgY3JlZGl0X2NhcmQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyBpbnZhbGlkLlwiKTsgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gWycqJ107XG4gICAgdmFyIGRlY2ltYWxzID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBtYXkgY29udGFpbiBcIiArICghZGVjaW1hbHMgfHwgZGVjaW1hbHMgPT09ICcqJyA/ICcnIDogZGVjaW1hbHMpICsgXCIgZGVjaW1hbCBwb2ludHMuXCIpO1xufSxcbiAgZGlnaXRzOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIGV4YWN0bHkgY29udGFpbiBcIiArIGxlbmd0aCArIFwiIGRpZ2l0cy5cIik7XG59LFxuICBkaW1lbnNpb25zOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIHdpZHRoICsgXCIgcGl4ZWxzIGJ5IFwiICsgaGVpZ2h0ICsgXCIgcGl4ZWxzLlwiKTtcbn0sXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKTsgfSxcbiAgZXh0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGZpbGUuXCIpOyB9LFxuICBpbWFnZTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYW4gaW1hZ2UuXCIpOyB9LFxuICBpbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIGlwOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGlwIGFkZHJlc3MuXCIpOyB9LFxuICBtYXg6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtYXhfdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1heCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtYXggKyBcIiBvciBsZXNzLlwiKTtcbn0sXG4gIG1pbWVzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSB0eXBlLlwiKTsgfSxcbiAgbWluOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtaW5fdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtaW4gKyBcIiBvciBtb3JlLlwiKTtcbn0sXG4gIG5vdF9pbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIG51bWVyaWM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIG51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIHJlZ2V4OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgZm9ybWF0IGlzIGludmFsaWQuXCIpOyB9LFxuICByZXF1aXJlZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIHJlcXVpcmVkLlwiKTsgfSxcbiAgc2l6ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgbGVzcyB0aGFuIFwiICsgc2l6ZSArIFwiIEtCLlwiKTtcbn0sXG4gIHVybDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIG5vdCBhIHZhbGlkIFVSTC5cIik7IH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBvcHRpb25zIHJlcXVpcmVkIHRvIGNvbnN0cnVjdCBhIGZpZWxkLlxuICovXG52YXIgR2VuZXJhdG9yID0gZnVuY3Rpb24gR2VuZXJhdG9yICgpIHt9O1xuXG5HZW5lcmF0b3IuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZSAoZWwsIGJpbmRpbmcsIHZub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdmFyIG1vZGVsID0gR2VuZXJhdG9yLnJlc29sdmVNb2RlbChiaW5kaW5nLCB2bm9kZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBHZW5lcmF0b3IucmVzb2x2ZU5hbWUoZWwsIHZub2RlKSxcbiAgICBlbDogZWwsXG4gICAgbGlzdGVuOiAhYmluZGluZy5tb2RpZmllcnMuZGlzYWJsZSxcbiAgICBzY29wZTogR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpLFxuICAgIHZtOiBHZW5lcmF0b3IubWFrZVZNKHZub2RlLmNvbnRleHQpLFxuICAgIGV4cHJlc3Npb246IGJpbmRpbmcudmFsdWUsXG4gICAgY29tcG9uZW50OiB2bm9kZS5jaGlsZCxcbiAgICBjbGFzc2VzOiBvcHRpb25zLmNsYXNzZXMsXG4gICAgY2xhc3NOYW1lczogb3B0aW9ucy5jbGFzc05hbWVzLFxuICAgIGdldHRlcjogR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwsIHZub2RlLCBtb2RlbCksXG4gICAgZXZlbnRzOiBHZW5lcmF0b3IucmVzb2x2ZUV2ZW50cyhlbCwgdm5vZGUpIHx8IG9wdGlvbnMuZXZlbnRzLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBkZWxheTogR2VuZXJhdG9yLnJlc29sdmVEZWxheShlbCwgdm5vZGUsIG9wdGlvbnMpLFxuICAgIHJ1bGVzOiBHZW5lcmF0b3IucmVzb2x2ZVJ1bGVzKGVsLCBiaW5kaW5nKSxcbiAgICBpbml0aWFsOiAhIWJpbmRpbmcubW9kaWZpZXJzLmluaXRpYWwsXG4gICAgYWxpYXM6IEdlbmVyYXRvci5yZXNvbHZlQWxpYXMoZWwsIHZub2RlKSxcbiAgICB2YWxpZGl0eTogb3B0aW9ucy52YWxpZGl0eSxcbiAgICBhcmlhOiBvcHRpb25zLmFyaWFcbiAgfTtcbn07XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGVsIFxuICogQHBhcmFtIHsqfSBiaW5kaW5nIFxuICovXG5HZW5lcmF0b3IucmVzb2x2ZVJ1bGVzID0gZnVuY3Rpb24gcmVzb2x2ZVJ1bGVzIChlbCwgYmluZGluZykge1xuICBpZiAoIWJpbmRpbmcgfHwgIWJpbmRpbmcuZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAncnVsZXMnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcbiAgfVxuXG4gIGlmICh+WydzdHJpbmcnLCAnb2JqZWN0J10uaW5kZXhPZih0eXBlb2YgYmluZGluZy52YWx1ZS5ydWxlcykpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5ydWxlcztcbiAgfVxuXG4gIHJldHVybiBiaW5kaW5nLnZhbHVlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbm9uLWNpcmN1bGFyIHBhcnRpYWwgVk0gaW5zdGFuY2UgZnJvbSBhIFZ1ZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7Kn0gdm0gXG4gKi9cbkdlbmVyYXRvci5tYWtlVk0gPSBmdW5jdGlvbiBtYWtlVk0gKHZtKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0ICRlbCAoKSB7XG4gICAgICByZXR1cm4gdm0uJGVsO1xuICAgIH0sXG4gICAgZ2V0ICRyZWZzICgpIHtcbiAgICAgIHJldHVybiB2bS4kcmVmcztcbiAgICB9LFxuICAgICR3YXRjaDogdm0uJHdhdGNoID8gdm0uJHdhdGNoLmJpbmQodm0pIDogZnVuY3Rpb24gKCkge30sXG4gICAgJHZhbGlkYXRvcjogdm0uJHZhbGlkYXRvciA/IHtcbiAgICAgIGVycm9yczogdm0uJHZhbGlkYXRvci5lcnJvcnMsXG4gICAgICB2YWxpZGF0ZTogdm0uJHZhbGlkYXRvci52YWxpZGF0ZS5iaW5kKHZtLiR2YWxpZGF0b3IpXG4gICAgfSA6IG51bGxcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGRlbGF5IHZhbHVlLlxuICogQHBhcmFtIHsqfSBlbFxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVEZWxheSA9IGZ1bmN0aW9uIHJlc29sdmVEZWxheSAoZWwsIHZub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICdkZWxheScpIHx8ICh2bm9kZS5jaGlsZCAmJiB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LWRlbGF5J10pIHx8IG9wdGlvbnMuZGVsYXk7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBhbGlhcyBmb3IgdGhlIGZpZWxkLlxuICogQHBhcmFtIHsqfSBlbCBcbiAqIEBwYXJhbSB7Kn0gdm5vZGUgXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlQWxpYXMgPSBmdW5jdGlvbiByZXNvbHZlQWxpYXMgKGVsLCB2bm9kZSkge1xuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2FzJykgfHwgKHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtYXMnXSkgfHwgZWwudGl0bGUgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGV2ZW50cyB0byB2YWxpZGF0ZSBpbiByZXNwb25zZSB0by5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVFdmVudHMgPSBmdW5jdGlvbiByZXNvbHZlRXZlbnRzIChlbCwgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWxpZGF0ZS1vbicpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXZhbGlkYXRlLW9uJ10pO1xuICB9XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWxpZGF0ZS1vbicpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgc2NvcGUgZm9yIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gYmluZGluZ1xuICovXG5HZW5lcmF0b3IucmVzb2x2ZVNjb3BlID0gZnVuY3Rpb24gcmVzb2x2ZVNjb3BlIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAoIHZub2RlID09PSB2b2lkIDAgKSB2bm9kZSA9IHt9O1xuXG4gIHZhciBzY29wZSA9IG51bGw7XG4gIGlmIChpc09iamVjdChiaW5kaW5nLnZhbHVlKSkge1xuICAgIHNjb3BlID0gYmluZGluZy52YWx1ZS5zY29wZTtcbiAgfVxuXG4gIGlmICh2bm9kZS5jaGlsZCAmJiAhc2NvcGUpIHtcbiAgICBzY29wZSA9IHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtc2NvcGUnXTtcbiAgfVxuXG4gIHJldHVybiBzY29wZSB8fCBnZXRTY29wZShlbCk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbm9kZSBkaXJlY3RpdmVzIGNvbnRhaW5zIGEgdi1tb2RlbCBvciBhIHNwZWNpZmllZCBhcmcuXG4gKiBBcmdzIHRha2UgcHJpb3JpdHkgb3ZlciBtb2RlbHMuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5HZW5lcmF0b3IucmVzb2x2ZU1vZGVsID0gZnVuY3Rpb24gcmVzb2x2ZU1vZGVsIChiaW5kaW5nLCB2bm9kZSkge1xuICBpZiAoYmluZGluZy5hcmcpIHtcbiAgICByZXR1cm4gYmluZGluZy5hcmc7XG4gIH1cblxuICBpZiAoaXNPYmplY3QoYmluZGluZy52YWx1ZSkgJiYgYmluZGluZy52YWx1ZS5hcmcpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5hcmc7XG4gIH1cblxuICB2YXIgbW9kZWwgPSB2bm9kZS5kYXRhLm1vZGVsIHx8IGZpbmQodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnbW9kZWwnOyB9KTtcbiAgaWYgKCFtb2RlbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHdhdGNoYWJsZSA9IC9eW2Etel9dK1swLTldKihcXHcqXFwuW2Etel9dXFx3KikqJC9pLnRlc3QobW9kZWwuZXhwcmVzc2lvbikgJiYgaGFzUGF0aChtb2RlbC5leHByZXNzaW9uLCB2bm9kZS5jb250ZXh0KTtcblxuICBpZiAoIXdhdGNoYWJsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG1vZGVsLmV4cHJlc3Npb247XG59O1xuXG4vKipcbiAgICogUmVzb2x2ZXMgdGhlIGZpZWxkIG5hbWUgdG8gdHJpZ2dlciB2YWxpZGF0aW9ucy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZmllbGQgbmFtZS5cbiAgICovXG5HZW5lcmF0b3IucmVzb2x2ZU5hbWUgPSBmdW5jdGlvbiByZXNvbHZlTmFtZSAoZWwsIHZub2RlKSB7XG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnbmFtZScpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgKHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1uYW1lJ10gfHwgdm5vZGUuY2hpbGQuJGF0dHJzWyduYW1lJ10pKSB8fCB2bm9kZS5jaGlsZC5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICduYW1lJykgfHwgZWwubmFtZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbHVlIGdldHRlciBpbnB1dCB0eXBlLlxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUdldHRlciA9IGZ1bmN0aW9uIHJlc29sdmVHZXR0ZXIgKGVsLCB2bm9kZSwgbW9kZWwpIHtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRQYXRoKG1vZGVsLCB2bm9kZS5jb250ZXh0KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoID0gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3ZhbHVlLXBhdGgnKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di12YWx1ZS1wYXRoJ10pO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhdGgocGF0aCwgdm5vZGUuY2hpbGQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlLmNoaWxkLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICBzd2l0Y2ggKGVsLnR5cGUpIHtcbiAgY2FzZSAnY2hlY2tib3gnOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKGVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG5cbiAgICBlbHMgPSB0b0FycmF5KGVscykuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2hlY2tlZDsgfSk7XG4gICAgaWYgKCFlbHMubGVuZ3RoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cblxuICAgIHJldHVybiBlbHMubWFwKGZ1bmN0aW9uIChjaGVja2JveCkgeyByZXR1cm4gY2hlY2tib3gudmFsdWU7IH0pO1xuICB9O1xuICBjYXNlICdyYWRpbyc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyAoZWwubmFtZSkgKyBcIlxcXCJdXCIpKTtcbiAgICB2YXIgZWxtID0gZmluZChlbHMsIGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2hlY2tlZDsgfSk7XG5cbiAgICByZXR1cm4gZWxtICYmIGVsbS52YWx1ZTtcbiAgfTtcbiAgY2FzZSAnZmlsZSc6IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiB0b0FycmF5KGVsLmZpbGVzKTtcbiAgfTtcbiAgY2FzZSAnc2VsZWN0LW11bHRpcGxlJzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5vcHRpb25zKS5maWx0ZXIoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LnNlbGVjdGVkOyB9KS5tYXAoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LnZhbHVlOyB9KTtcbiAgfTtcbiAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWwgJiYgZWwudmFsdWU7XG4gIH07XG4gIH1cbn07XG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHRhcmdldE9mOiBudWxsLFxuICBpbml0aWFsOiBmYWxzZSxcbiAgc2NvcGU6IG51bGwsXG4gIGxpc3RlbjogdHJ1ZSxcbiAgbmFtZTogbnVsbCxcbiAgYWN0aXZlOiB0cnVlLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJ1bGVzOiB7fSxcbiAgdm06IG51bGwsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICB2YWxpZGl0eTogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgZXZlbnRzOiAnaW5wdXR8Ymx1cicsXG4gIGRlbGF5OiAwLFxuICBjbGFzc05hbWVzOiB7XG4gICAgdG91Y2hlZDogJ3RvdWNoZWQnLCAvLyB0aGUgY29udHJvbCBoYXMgYmVlbiBibHVycmVkXG4gICAgdW50b3VjaGVkOiAndW50b3VjaGVkJywgLy8gdGhlIGNvbnRyb2wgaGFzbid0IGJlZW4gYmx1cnJlZFxuICAgIHZhbGlkOiAndmFsaWQnLCAvLyBtb2RlbCBpcyB2YWxpZFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJywgLy8gbW9kZWwgaXMgaW52YWxpZFxuICAgIHByaXN0aW5lOiAncHJpc3RpbmUnLCAvLyBjb250cm9sIGhhcyBub3QgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgICBkaXJ0eTogJ2RpcnR5JyAvLyBjb250cm9sIGhhcyBiZWVuIGludGVyYWN0ZWQgd2l0aFxuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgZGVmYXVsdCBmbGFncyBmb3IgdGhlIGZpZWxkLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xudmFyIGdlbmVyYXRlRmxhZ3MgPSBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gKHtcbiAgdW50b3VjaGVkOiB0cnVlLFxuICB0b3VjaGVkOiBmYWxzZSxcbiAgZGlydHk6IGZhbHNlLFxuICBwcmlzdGluZTogdHJ1ZSxcbiAgdmFsaWQ6IG51bGwsXG4gIGludmFsaWQ6IG51bGwsXG4gIHZhbGlkYXRlZDogZmFsc2UsXG4gIHBlbmRpbmc6IGZhbHNlLFxuICByZXF1aXJlZDogISFvcHRpb25zLnJ1bGVzLnJlcXVpcmVkXG59KTsgfTtcblxudmFyIEZpZWxkID0gZnVuY3Rpb24gRmllbGQgKGVsLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuaWQgPSB1bmlxSWQoKTtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgdGhpcy53YXRjaGVycyA9IFtdO1xuICB0aGlzLmV2ZW50cyA9IFtdO1xuICB0aGlzLnJ1bGVzID0ge307XG4gIGlmICghdGhpcy5pc0hlYWRsZXNzICYmICEodGhpcy50YXJnZXRPZiB8fCBvcHRpb25zLnRhcmdldE9mKSkge1xuICAgIHNldERhdGFBdHRyaWJ1dGUodGhpcy5lbCwgJ2lkJywgdGhpcy5pZCk7IC8vIGNhY2hlIGZpZWxkIGlkIGlmIGl0IGlzIGluZGVwZW5kZW50IGFuZCBoYXMgYSByb290IGVsZW1lbnQuXG4gIH1cbiAgb3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgdGhpcy52YWxpZGl0eSA9IG9wdGlvbnMudmFsaWRpdHk7XG4gIHRoaXMuYXJpYSA9IG9wdGlvbnMuYXJpYTtcbiAgdGhpcy5mbGFncyA9IGdlbmVyYXRlRmxhZ3Mob3B0aW9ucyk7XG4gIHRoaXMudm0gPSBvcHRpb25zLnZtIHx8IHRoaXMudm07XG4gIHRoaXMuY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQgfHwgdGhpcy5jb21wb25lbnQ7XG4gIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgaXNWdWU6IHt9LHZhbGlkYXRvcjoge30saXNSZXF1aXJlZDoge30saXNEaXNhYmxlZDoge30saXNIZWFkbGVzczoge30sZGlzcGxheU5hbWU6IHt9LHZhbHVlOiB7fSxyZWplY3RzRmFsc2U6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzVnVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWxpZGF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudm0gfHwgIXRoaXMudm0uJHZhbGlkYXRvcikge1xuICAgIHdhcm4oJ05vIHZhbGlkYXRvciBpbnN0YW5jZSBkZXRlY3RlZC4nKTtcbiAgICByZXR1cm4geyB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30gfTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnZtLiR2YWxpZGF0b3I7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc1JlcXVpcmVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5ydWxlcy5yZXF1aXJlZDtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzRGlzYWJsZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuaXNWdWUgJiYgdGhpcy5jb21wb25lbnQuZGlzYWJsZWQpIHx8ICh0aGlzLmVsICYmIHRoaXMuZWwuZGlzYWJsZWQpO1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNIZWFkbGVzcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5lbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGlzcGxheSBuYW1lICh1c2VyLWZyaWVuZGx5IG5hbWUpLlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5kaXNwbGF5TmFtZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFsaWFzO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbnB1dCB2YWx1ZS5cbiAqIEByZXR1cm4geyp9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnZhbHVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKHRoaXMuZ2V0dGVyKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXR0ZXIoKTtcbn07XG5cbi8qKlxuICogSWYgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYXMgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHJlcXVpcmVkIHJ1bGUuIFxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5yZWplY3RzRmFsc2UuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pc1Z1ZSB8fCB0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lbC50eXBlID09PSAnY2hlY2tib3gnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnN0YW5jZSBtYXRjaGVzIHRoZSBvcHRpb25zIHByb3ZpZGVkLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG1hdGNoaW5nIG9wdGlvbnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gbWF0Y2hlcyAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pZCkge1xuICAgIHJldHVybiB0aGlzLmlkID09PSBvcHRpb25zLmlkO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG9wdGlvbnMubmFtZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aGlzLnNjb3BlID09PSBvcHRpb25zLnNjb3BlO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMubmFtZSA9PT0gdGhpcy5uYW1lICYmIG9wdGlvbnMuc2NvcGUgPT09IHRoaXMuc2NvcGU7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChvcHRpb25zKSB7XG4gIHRoaXMudGFyZ2V0T2YgPSBvcHRpb25zLnRhcmdldE9mIHx8IG51bGw7XG4gIHRoaXMuaW5pdGlhbCA9IG9wdGlvbnMuaW5pdGlhbCB8fCB0aGlzLmluaXRpYWwgfHwgZmFsc2U7XG5cbiAgLy8gdXBkYXRlIGVycm9ycyBzY29wZSBpZiB0aGUgZmllbGQgc2NvcGUgd2FzIGNoYW5nZWQuXG4gIGlmIChvcHRpb25zLnNjb3BlICYmIG9wdGlvbnMuc2NvcGUgIT09IHRoaXMuc2NvcGUgJiYgdGhpcy52YWxpZGF0b3IuZXJyb3JzICYmIGlzQ2FsbGFibGUodGhpcy52YWxpZGF0b3IuZXJyb3JzLnVwZGF0ZSkpIHtcbiAgICB0aGlzLnZhbGlkYXRvci5lcnJvcnMudXBkYXRlKHRoaXMuaWQsIHsgc2NvcGU6IG9wdGlvbnMuc2NvcGUgfSk7XG4gIH1cbiAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgdGhpcy5zY29wZSB8fCBudWxsO1xuICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5uYW1lIHx8IG51bGw7XG4gIHRoaXMucnVsZXMgPSBvcHRpb25zLnJ1bGVzICE9PSB1bmRlZmluZWQgPyBub3JtYWxpemVSdWxlcyhvcHRpb25zLnJ1bGVzKSA6IHRoaXMucnVsZXM7XG4gIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IHRoaXMubW9kZWw7XG4gIHRoaXMubGlzdGVuID0gb3B0aW9ucy5saXN0ZW4gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubGlzdGVuIDogdGhpcy5saXN0ZW47XG4gIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyB8fCB0aGlzLmNsYXNzZXMgfHwgZmFsc2U7XG4gIHRoaXMuY2xhc3NOYW1lcyA9IG9wdGlvbnMuY2xhc3NOYW1lcyB8fCB0aGlzLmNsYXNzTmFtZXMgfHwgREVGQVVMVF9PUFRJT05TLmNsYXNzTmFtZXM7XG4gIHRoaXMuYWxpYXMgPSBvcHRpb25zLmFsaWFzIHx8IHRoaXMuYWxpYXM7XG4gIHRoaXMuZ2V0dGVyID0gaXNDYWxsYWJsZShvcHRpb25zLmdldHRlcikgPyBvcHRpb25zLmdldHRlciA6IHRoaXMuZ2V0dGVyO1xuICB0aGlzLmRlbGF5ID0gb3B0aW9ucy5kZWxheSB8fCB0aGlzLmRlbGF5IHx8IDA7XG4gIHRoaXMuZXZlbnRzID0gdHlwZW9mIG9wdGlvbnMuZXZlbnRzID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmV2ZW50cy5sZW5ndGggPyBvcHRpb25zLmV2ZW50cy5zcGxpdCgnfCcpIDogdGhpcy5ldmVudHM7XG4gIHRoaXMudXBkYXRlRGVwZW5kZW5jaWVzKCk7XG4gIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG5cbiAgLy8gdmFsaWRhdGUgaWYgaXQgd2FzIHZhbGlkYXRlZCBiZWZvcmUgYW5kIGZpZWxkIHdhcyB1cGRhdGVkIGFuZCB0aGVyZSB3YXMgYSBydWxlcyBtdXRhdGlvbi5cbiAgaWYgKHRoaXMuZmxhZ3MudmFsaWRhdGVkICYmIG9wdGlvbnMucnVsZXMgJiYgdGhpcy51cGRhdGVkKSB7XG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMuaWQpKSk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gIC8vIG5vIG5lZWQgdG8gY29udGludWUuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgdGhpcy5hZGRWYWx1ZUxpc3RlbmVycygpO1xuICB0aGlzLnVwZGF0ZUFyaWFBdHRycygpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBmaWVsZCByZXF1aXJlcyByZWZlcmVuY2VzIHRvIHRhcmdldCBmaWVsZHMuXG4qL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZURlcGVuZGVuY2llcyA9IGZ1bmN0aW9uIHVwZGF0ZURlcGVuZGVuY2llcyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gcmVzZXQgZGVwZW5kZW5jaWVzLlxuICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZpZWxkLmRlc3Ryb3koKTsgfSk7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG5cbiAgLy8gd2UgZ2V0IHRoZSBzZWxlY3RvcnMgZm9yIGVhY2ggZmllbGQuXG4gIHZhciBmaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIHIpIHtcbiAgICBpZiAociA9PT0gJ2NvbmZpcm1lZCcpIHtcbiAgICAgIHByZXYucHVzaCh7IHNlbGVjdG9yOiB0aGlzJDEucnVsZXNbcl1bMF0gfHwgKCh0aGlzJDEubmFtZSkgKyBcIl9jb25maXJtYXRpb25cIiksIG5hbWU6IHIgfSk7XG4gICAgfSBlbHNlIGlmICgvYWZ0ZXJ8YmVmb3JlLy50ZXN0KHIpKSB7XG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3RvcjogdGhpcyQxLnJ1bGVzW3JdWzBdLCBuYW1lOiByIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFmaWVsZHMubGVuZ3RoIHx8ICF0aGlzLnZtIHx8ICF0aGlzLnZtLiRlbCkgeyByZXR1cm47IH1cblxuICAvLyBtdXN0IGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNhbWUgY29tcG9uZW50LCBzbyB3ZSB1c2UgdGhlIHZtIHJvb3QgZWxlbWVudCBjb25zdHJhaW4gb3VyIGRvbSBzZWFyY2guXG4gIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IHJlZi5zZWxlY3RvcjtcbiAgICAgIHZhciBuYW1lID0gcmVmLm5hbWU7XG5cbiAgICB2YXIgZWwgPSBudWxsO1xuICAgIC8vIHZ1ZSByZWYgc2VsZWN0b3IuXG4gICAgaWYgKHNlbGVjdG9yWzBdID09PSAnJCcpIHtcbiAgICAgIGVsID0gdGhpcyQxLnZtLiRyZWZzW3NlbGVjdG9yLnNsaWNlKDEpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHJ5IGEgcXVlcnkgc2VsZWN0aW9uLlxuICAgICAgZWwgPSB0aGlzJDEudm0uJGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIC8vIHRyeSBhIG5hbWUgc2VsZWN0b3JcbiAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKChcImlucHV0W25hbWU9XFxcIlwiICsgc2VsZWN0b3IgKyBcIlxcXCJdXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB2bTogdGhpcyQxLnZtLFxuICAgICAgY2xhc3NlczogdGhpcyQxLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVzOiB0aGlzJDEuY2xhc3NOYW1lcyxcbiAgICAgIGRlbGF5OiB0aGlzJDEuZGVsYXksXG4gICAgICBzY29wZTogdGhpcyQxLnNjb3BlLFxuICAgICAgZXZlbnRzOiB0aGlzJDEuZXZlbnRzLmpvaW4oJ3wnKSxcbiAgICAgIGluaXRpYWw6IHRoaXMkMS5pbml0aWFsLFxuICAgICAgdGFyZ2V0T2Y6IHRoaXMkMS5pZFxuICAgIH07XG5cbiAgICAvLyBwcm9iYWJseSBhIGNvbXBvbmVudC5cbiAgICBpZiAoaXNDYWxsYWJsZShlbC4kd2F0Y2gpKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudCA9IGVsO1xuICAgICAgb3B0aW9ucy5lbCA9IGVsLiRlbDtcbiAgICAgIG9wdGlvbnMuZ2V0dGVyID0gR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwuJGVsLCB7IGNoaWxkOiBlbCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsO1xuICAgICAgb3B0aW9ucy5nZXR0ZXIgPSBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbCwge30pO1xuICAgIH1cblxuICAgIHRoaXMkMS5kZXBlbmRlbmNpZXMucHVzaCh7IG5hbWU6IG5hbWUsIGZpZWxkOiBuZXcgRmllbGQob3B0aW9ucy5lbCwgb3B0aW9ucykgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7UmVnRXhwfSB0YWdcbiAqL1xuRmllbGQucHJvdG90eXBlLnVud2F0Y2ggPSBmdW5jdGlvbiB1bndhdGNoICh0YWcpIHtcbiAgaWYgKCF0YWcpIHtcbiAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMud2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7IHJldHVybiB0YWcudGVzdCh3LnRhZyk7IH0pLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgdGhpcy53YXRjaGVycyA9IHRoaXMud2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7IHJldHVybiAhdGFnLnRlc3Qody50YWcpOyB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZWxlbWVudCBjbGFzc2VzIGRlcGVuZGluZyBvbiBlYWNoIGZpZWxkIGZsYWcgc3RhdHVzLlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3NlcyA9IGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMgKCkge1xuICBpZiAoIXRoaXMuY2xhc3NlcykgeyByZXR1cm47IH1cblxuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMuZGlydHksIHRoaXMuZmxhZ3MuZGlydHkpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMucHJpc3RpbmUsIHRoaXMuZmxhZ3MucHJpc3RpbmUpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudmFsaWQsICEhdGhpcy5mbGFncy52YWxpZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5pbnZhbGlkLCAhIXRoaXMuZmxhZ3MuaW52YWxpZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy50b3VjaGVkLCB0aGlzLmZsYWdzLnRvdWNoZWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudW50b3VjaGVkLCB0aGlzLmZsYWdzLnVudG91Y2hlZCk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGxpc3RlbmVycyByZXF1aXJlZCBmb3IgYXV0b21hdGljIGNsYXNzZXMgYW5kIHNvbWUgZmxhZ3MuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRBY3Rpb25MaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25MaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlbW92ZSBwcmV2aW91cyBsaXN0ZW5lcnMuXG4gIHRoaXMudW53YXRjaCgvY2xhc3MvKTtcblxuICB2YXIgb25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5mbGFncy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MudW50b3VjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMkMS5jbGFzc2VzKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLnRvdWNoZWQsIHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy51bnRvdWNoZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IG5lZWRlZCBvbmNlLlxuICAgIHRoaXMkMS51bndhdGNoKC9eY2xhc3NfYmx1ciQvKTtcbiAgfTtcblxuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICB2YXIgb25JbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMkMS5mbGFncy5wcmlzdGluZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5wcmlzdGluZSwgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5kaXJ0eSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2lucHV0JC8pO1xuICB9O1xuXG4gIGlmICh0aGlzLmlzVnVlICYmIGlzQ2FsbGFibGUodGhpcy5jb21wb25lbnQuJG9uY2UpKSB7XG4gICAgdGhpcy5jb21wb25lbnQuJG9uY2UoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgdGhpcy5jb21wb25lbnQuJG9uY2UoJ2JsdXInLCBvbkJsdXIpO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdjbGFzc19pbnB1dCcsXG4gICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9mZignaW5wdXQnLCBvbklucHV0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfYmx1cicsXG4gICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9mZignYmx1cicsIG9uQmx1cik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaXNIZWFkbGVzcykgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gIC8vIENoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgb24gTWFjIGRvbid0IGVtaXQgYmx1ciBuYXR1cmFsbHksIHNvIHdlIGxpc3RlbiBvbiBjbGljayBpbnN0ZWFkLlxuICB2YXIgYmx1ckV2ZW50ID0gWydyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodGhpcy5lbC50eXBlKSA9PT0gLTEgPyAnYmx1cicgOiAnY2xpY2snO1xuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoYmx1ckV2ZW50LCBvbkJsdXIpO1xuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2lucHV0JyxcbiAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihpbnB1dEV2ZW50LCBvbklucHV0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgdGFnOiAnY2xhc3NfYmx1cicsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmx1ckV2ZW50LCBvbkJsdXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGxpc3RlbmVycyByZXF1aXJlZCBmb3IgdmFsaWRhdGlvbi5cbiAqL1xuRmllbGQucHJvdG90eXBlLmFkZFZhbHVlTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkVmFsdWVMaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMudW53YXRjaCgvXmlucHV0Xy4rLyk7XG4gIGlmICghdGhpcy5saXN0ZW4pIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGZuID0gbnVsbDtcbiAgaWYgKHRoaXMudGFyZ2V0T2YpIHtcbiAgICBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS50YXJnZXRPZikpKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDAgfHwgKGlzQ2FsbGFibGUoRXZlbnQpICYmIGFyZ3NbMF0gaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgICAgYXJnc1swXSA9IHRoaXMkMS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS5pZCkpLCBhcmdzWzBdKTtcbiAgICB9O1xuICB9XG4gIHZhciB2YWxpZGF0ZSA9IGRlYm91bmNlKGZuLCB0aGlzLmRlbGF5KTtcblxuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICAvLyByZXBsYWNlIGlucHV0IGV2ZW50IHdpdGggc3VpdGFibGUgb25lLlxuICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUgPT09ICdpbnB1dCcgPyBpbnB1dEV2ZW50IDogZTtcbiAgfSk7XG5cbiAgLy8gaWYgdGhlcmUgaXMgYSB3YXRjaGFibGUgbW9kZWwgYW5kIGFuIG9uIGlucHV0IHZhbGlkYXRpb24gaXMgcmVxdWVzdGVkLlxuICBpZiAodGhpcy5tb2RlbCAmJiBldmVudHMuaW5kZXhPZihpbnB1dEV2ZW50KSAhPT0gLTEpIHtcbiAgICB2YXIgdW53YXRjaCA9IHRoaXMudm0uJHdhdGNoKHRoaXMubW9kZWwsIHZhbGlkYXRlKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbW9kZWwnLFxuICAgICAgdW53YXRjaDogdW53YXRjaFxuICAgIH0pO1xuICAgIC8vIGZpbHRlciBvdXQgaW5wdXQgZXZlbnQgYXMgaXQgaXMgYWxyZWFkeSBoYW5kbGVkIGJ5IHRoZSB3YXRjaGVyIEFQSS5cbiAgICBldmVudHMgPSBldmVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlICE9PSBpbnB1dEV2ZW50OyB9KTtcbiAgfVxuXG4gIC8vIEFkZCBldmVudHMuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHRoaXMkMS5pc1Z1ZSkge1xuICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb24oZSwgdmFsaWRhdGUpO1xuICAgICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgICB0YWc6ICdpbnB1dF92dWUnLFxuICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKH5bJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0aGlzJDEuZWwudHlwZSkpIHtcbiAgICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKHRoaXMkMS5lbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuICAgICAgdG9BcnJheShlbHMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzJDEuZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhcmlhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVBcmlhQXR0cnMgPSBmdW5jdGlvbiB1cGRhdGVBcmlhQXR0cnMgKCkge1xuICBpZiAoIXRoaXMuYXJpYSB8fCB0aGlzLmlzSGVhZGxlc3MgfHwgIWlzQ2FsbGFibGUodGhpcy5lbC5zZXRBdHRyaWJ1dGUpKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgdGhpcy5pc1JlcXVpcmVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0aGlzLmZsYWdzLmludmFsaWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgY3VzdG9tIHZhbGlkaXR5IGZvciB0aGUgZmllbGQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVDdXN0b21WYWxpZGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbVZhbGlkaXR5ICgpIHtcbiAgaWYgKCF0aGlzLnZhbGlkaXR5IHx8IHRoaXMuaXNIZWFkbGVzcyB8fCAhaXNDYWxsYWJsZSh0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KSkgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KHRoaXMuZmxhZ3MudmFsaWQgPyAnJyA6ICh0aGlzLnZhbGlkYXRvci5lcnJvcnMuZmlyc3RCeUlkKHRoaXMuaWQpIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGxpc3RlbmVycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEZpZWxkLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIEZpZWxkQmFnID0gZnVuY3Rpb24gRmllbGRCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDIgPSB7IGxlbmd0aDoge30gfTtcblxuLyoqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gbGVuZ3RoLlxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMi5sZW5ndGguZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBmaWVsZCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG1hdGNoZXIgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoZXJcbiAqIEByZXR1cm4ge0ZpZWxkfHVuZGVmaW5lZH0gVGhlIGZpcnN0IG1hdGNoaW5nIGl0ZW0uXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCQxIChtYXRjaGVyKSB7XG4gIHJldHVybiBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gbWF0Y2hlclxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIG1hdGNoaW5nIGZpZWxkIGl0ZW1zLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gZmlsdGVyIChtYXRjaGVyKSB7XG4gIC8vIG11bHRpcGxlIG1hdGNoZXJzIHRvIGJlIHRyaWVkLlxuICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaGVyKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gbWF0Y2hlci5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobSk7IH0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5tYXRjaGVzKG1hdGNoZXIpOyB9KTtcbn07XG5cbi8qKlxuICogTWFwcyB0aGUgZmllbGQgaXRlbXMgdXNpbmcgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWFwcGVyXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlcikge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAobWFwcGVyKTtcbn07XG5cbi8qKlxuICogRmluZHMgYW5kIHJlbW92ZXMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QsIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbS5cbiAqIEBwYXJhbSB7T2JqZWN0fEZpZWxkfSBtYXRjaGVyXG4gKiBAcmV0dXJuIHtGaWVsZHxudWxsfVxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChtYXRjaGVyKSB7XG4gIHZhciBpdGVtID0gbnVsbDtcbiAgaWYgKG1hdGNoZXIgaW5zdGFuY2VvZiBGaWVsZCkge1xuICAgIGl0ZW0gPSBtYXRjaGVyO1xuICB9IGVsc2Uge1xuICAgIGl0ZW0gPSB0aGlzLmZpbmQobWF0Y2hlcik7XG4gIH1cblxuICBpZiAoIWl0ZW0pIHsgcmV0dXJuIG51bGw7IH1cblxuICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICByZXR1cm4gaXRlbTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGZpZWxkIGl0ZW0gdG8gdGhlIGxpc3QuXG4gKlxuICogQHBhcmFtIHtGaWVsZH0gaXRlbVxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGl0ZW0pIHtcbiAgaWYgKCEgKGl0ZW0gaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcignRmllbGRCYWcgb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGaWVsZCB0aGF0IGhhcyBhbiBpZCBkZWZpbmVkLicpO1xuICB9XG5cbiAgaWYgKCFpdGVtLmlkKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkIGlkIG11c3QgYmUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIGlmICh0aGlzLmZpbmQoeyBpZDogaXRlbS5pZCB9KSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIkZpZWxkIHdpdGggaWQgXCIgKyAoaXRlbS5pZCkgKyBcIiBpcyBhbHJlYWR5IGFkZGVkLlwiKSk7XG4gIH1cblxuICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGRCYWcucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMiApO1xuXG52YXIgYWZ0ZXIgPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgb3RoZXIgPSByZWZbMF07XG4gIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG4gIHZhciBmb3JtYXQgPSByZWZbMl07XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9ybWF0ID0gaW5jbHVzaW9uO1xuICAgIGluY2x1c2lvbiA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0LCB0cnVlKTtcbiAgdmFyIG90aGVyVmFsdWUgPSBtb21lbnQob3RoZXIsIGZvcm1hdCwgdHJ1ZSk7XG5cbiAgLy8gaWYgZWl0aGVyIGlzIG5vdCB2YWxpZC5cbiAgaWYgKCEgZGF0ZVZhbHVlLmlzVmFsaWQoKSB8fCAhIG90aGVyVmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVWYWx1ZS5pc0FmdGVyKG90aGVyVmFsdWUpIHx8IChpbmNsdXNpb24gJiYgZGF0ZVZhbHVlLmlzU2FtZShvdGhlclZhbHVlKSk7XG59OyB9O1xuXG52YXIgYmVmb3JlID0gZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG90aGVyID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZVZhbHVlID0gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuICB2YXIgb3RoZXJWYWx1ZSA9IG1vbWVudChvdGhlciwgZm9ybWF0LCB0cnVlKTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoISBkYXRlVmFsdWUuaXNWYWxpZCgpIHx8ICEgb3RoZXJWYWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZVZhbHVlLmlzQmVmb3JlKG90aGVyVmFsdWUpIHx8IChpbmNsdXNpb24gJiYgZGF0ZVZhbHVlLmlzU2FtZShvdGhlclZhbHVlKSk7XG59OyB9O1xuXG52YXIgZGF0ZV9mb3JtYXQgPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuXHR2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG5cdHJldHVybiBtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuIH1cdH07XG5cbnZhciBkYXRlX2JldHdlZW4gPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgbWluO1xuICB2YXIgbWF4O1xuICB2YXIgZm9ybWF0O1xuICB2YXIgaW5jbHVzaXZpdHkgPSAnKCknO1xuXG4gIGlmIChwYXJhbXMubGVuZ3RoID4gMykge1xuICAgIHZhciBhc3NpZ247XG4gICAgKGFzc2lnbiA9IHBhcmFtcywgbWluID0gYXNzaWduWzBdLCBtYXggPSBhc3NpZ25bMV0sIGluY2x1c2l2aXR5ID0gYXNzaWduWzJdLCBmb3JtYXQgPSBhc3NpZ25bM10pO1xuICB9IGVsc2Uge1xuICAgIHZhciBhc3NpZ24kMTtcbiAgICAoYXNzaWduJDEgPSBwYXJhbXMsIG1pbiA9IGFzc2lnbiQxWzBdLCBtYXggPSBhc3NpZ24kMVsxXSwgZm9ybWF0ID0gYXNzaWduJDFbMl0pO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBtb21lbnQobWluLCBmb3JtYXQsIHRydWUpO1xuICB2YXIgbWF4RGF0ZSA9IG1vbWVudChtYXgsIGZvcm1hdCwgdHJ1ZSk7XG4gIHZhciBkYXRlVmFsID0gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuXG4gIGlmICghIChtaW5EYXRlLmlzVmFsaWQoKSAmJiBtYXhEYXRlLmlzVmFsaWQoKSAmJiBkYXRlVmFsLmlzVmFsaWQoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZVZhbC5pc0JldHdlZW4obWluRGF0ZSwgbWF4RGF0ZSwgJ2RheXMnLCBpbmNsdXNpdml0eSk7XG59OyB9O1xuXG52YXIgbWVzc2FnZXMkMSA9IHtcbiAgYWZ0ZXI6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZlswXTtcbiAgICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBhZnRlciBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGJlZm9yZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJlZm9yZSBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGRhdGVfYmV0d2VlbjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWluID0gcmVmWzBdO1xuICAgIHZhciBtYXggPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJldHdlZW4gXCIgKyBtaW4gKyBcIiBhbmQgXCIgKyBtYXggKyBcIi5cIik7XG59LFxuICBkYXRlX2Zvcm1hdDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IFwiICsgZm9ybWF0ICsgXCIuXCIpO1xufVxufTtcblxudmFyIGRhdGUgPSB7XG4gIG1ha2U6IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuICh7XG4gICAgZGF0ZV9mb3JtYXQ6IGRhdGVfZm9ybWF0KG1vbWVudCksXG4gICAgYWZ0ZXI6IGFmdGVyKG1vbWVudCksXG4gICAgYmVmb3JlOiBiZWZvcmUobW9tZW50KSxcbiAgICBkYXRlX2JldHdlZW46IGRhdGVfYmV0d2Vlbihtb21lbnQpXG4gIH0pOyB9LFxuICBtZXNzYWdlczogbWVzc2FnZXMkMSxcbiAgaW5zdGFsbGVkOiBmYWxzZVxufTtcblxudmFyIExPQ0FMRSA9ICdlbic7XG52YXIgU1RSSUNUX01PREUgPSB0cnVlO1xudmFyIERJQ1RJT05BUlkgPSBuZXcgRGljdGlvbmFyeSh7XG4gIGVuOiB7XG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGN1c3RvbToge31cbiAgfVxufSk7XG5cbnZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiBWYWxpZGF0b3IgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7IHZtOiBudWxsLCBmYXN0RXhpdDogdHJ1ZSB9O1xuXG4gIHRoaXMuc3RyaWN0ID0gU1RSSUNUX01PREU7XG4gIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yQmFnKCk7XG4gIHRoaXMuZmllbGRzID0gbmV3IEZpZWxkQmFnKCk7XG4gIHRoaXMuZmllbGRCYWcgPSB7fTtcbiAgdGhpcy5fY3JlYXRlRmllbGRzKHZhbGlkYXRpb25zKTtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgdGhpcy5mYXN0RXhpdCA9IG9wdGlvbnMuZmFzdEV4aXQgfHwgZmFsc2U7XG4gIHRoaXMub3duZXJJZCA9IG9wdGlvbnMudm0gJiYgb3B0aW9ucy52bS5fdWlkO1xuICAvLyBjcmVhdGUgaXQgc3RhdGljYWxseSBzaW5jZSB3ZSBkb24ndCBuZWVkIGNvbnN0YW50IGFjY2VzcyB0byB0aGUgdm0uXG4gIHRoaXMuY2xlYW4gPSBvcHRpb25zLnZtICYmIGlzQ2FsbGFibGUob3B0aW9ucy52bS4kbmV4dFRpY2spID8gZnVuY3Rpb24gKCkge1xuICAgIG9wdGlvbnMudm0uJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lcnJvcnMuY2xlYXIoKTtcbiAgICB9KTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZXJyb3JzLmNsZWFyKCk7XG4gIH07XG5cbiAgLy8gaWYgbW9tZW50anMgaXMgcHJlc2VudCwgaW5zdGFsbCB0aGUgdmFsaWRhdG9ycy5cbiAgaWYgKHR5cGVvZiBtb21lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0aGlzLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMobW9tZW50KTtcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgZGljdGlvbmFyeToge30sbG9jYWxlOiB7fSxydWxlczoge30gfTtcbnZhciBzdGF0aWNBY2Nlc3NvcnMgPSB7IGRpY3Rpb25hcnk6IHt9LHJ1bGVzOiB7fSB9O1xuXG4vKipcbiAqIEByZXR1cm4ge0RpY3Rpb25hcnl9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5kaWN0aW9uYXJ5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERJQ1RJT05BUlk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0RpY3Rpb25hcnl9XG4gKi9cbnN0YXRpY0FjY2Vzc29ycy5kaWN0aW9uYXJ5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERJQ1RJT05BUlk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBMT0NBTEU7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLnJ1bGVzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJ1bGVzO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnN0YXRpY0FjY2Vzc29ycy5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSdWxlcztcbn07XG5cbi8qKlxuICogTWVyZ2VzIGEgdmFsaWRhdG9yIG9iamVjdCBpbnRvIHRoZSBSdWxlcyBhbmQgTWVzc2FnZXMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFte2Z1bmN0aW9ufG9iamVjdH0gdmFsaWRhdG9yIFRoZSB2YWxpZGF0b3Igb2JqZWN0LlxuICovXG5WYWxpZGF0b3IuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yKSkge1xuICAgIFJ1bGVzW25hbWVdID0gdmFsaWRhdG9yO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFJ1bGVzW25hbWVdID0gdmFsaWRhdG9yLnZhbGlkYXRlO1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IuZ2V0TWVzc2FnZSkpIHtcbiAgICBESUNUSU9OQVJZLnNldE1lc3NhZ2UoTE9DQUxFLCBuYW1lLCB2YWxpZGF0b3IuZ2V0TWVzc2FnZSk7XG4gIH1cblxuICBpZiAodmFsaWRhdG9yLm1lc3NhZ2VzKSB7XG4gICAgRElDVElPTkFSWS5tZXJnZShcbiAgICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvci5tZXNzYWdlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcHJldjtcbiAgICAgICAgZGljdFtjdXJyXSA9IHtcbiAgICAgICAgICBtZXNzYWdlczogKCBvYmogPSB7fSwgb2JqW25hbWVdID0gdmFsaWRhdG9yLm1lc3NhZ2VzW2N1cnJdLCBvYmogKVxuICAgICAgICB9O1xuICAgICAgICAgIHZhciBvYmo7XG5cbiAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICB9LCB7fSlcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEd1YXJkcyBmcm9tIGV4dG5zaW9uIHZpb2xhdGlvbnMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiBAcGFyYW17b2JqZWN0fSB2YWxpZGF0b3IgYSB2YWxpZGF0aW9uIHJ1bGUgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IuX2d1YXJkRXh0ZW5kID0gZnVuY3Rpb24gX2d1YXJkRXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghIGlzQ2FsbGFibGUodmFsaWRhdG9yLnZhbGlkYXRlKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgaGF2ZSBhICd2YWxpZGF0ZScgbWV0aG9kLlwiKVxuICAgICk7XG4gIH1cblxuICBpZiAoISBpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSAmJiAhIGlzT2JqZWN0KHZhbGlkYXRvci5tZXNzYWdlcykpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgbXVzdCBoYXZlIGEgJ2dldE1lc3NhZ2UnIG1ldGhvZCBvciBoYXZlIGEgJ21lc3NhZ2VzJyBvYmplY3QuXCIpXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGF0aWMgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFte29iamVjdH0gdmFsaWRhdGlvbnMgVGhlIHZhbGlkYXRpb25zIG9iamVjdC5cbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn0gdmFsaWRhdG9yIEEgdmFsaWRhdG9yIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBWYWxpZGF0b3IodmFsaWRhdGlvbnMsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci5cbiAqIEBwYXJhbXtvYmplY3R8ZnVuY3Rpb259IHZhbGlkYXRvciBUaGUgdmFsaWRhdG9yIG9iamVjdC9mdW5jdGlvbi5cbiAqL1xuVmFsaWRhdG9yLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIFZhbGlkYXRvci5fZ3VhcmRFeHRlbmQobmFtZSwgdmFsaWRhdG9yKTtcbiAgVmFsaWRhdG9yLl9tZXJnZShuYW1lLCB2YWxpZGF0b3IpO1xufTtcblxuLyoqXG4gKiBJbnN0YWxscyB0aGUgZGF0ZXRpbWUgdmFsaWRhdG9ycyBhbmQgdGhlIG1lc3NhZ2VzLlxuICovXG5WYWxpZGF0b3IuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIGluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgKG1vbWVudCkge1xuICBpZiAodHlwZW9mIG1vbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHdhcm4oJ1RvIHVzZSB0aGUgZGF0ZS10aW1lIHZhbGlkYXRvcnMgeW91IG11c3QgcHJvdmlkZSBtb21lbnQgcmVmZXJlbmNlLicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRhdGUuaW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9ycyA9IGRhdGUubWFrZShtb21lbnQpO1xuICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgVmFsaWRhdG9yLmV4dGVuZChuYW1lLCB2YWxpZGF0b3JzW25hbWVdKTtcbiAgfSk7XG5cbiAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoe1xuICAgIGVuOiB7XG4gICAgICBtZXNzYWdlczogZGF0ZS5tZXNzYWdlc1xuICAgIH1cbiAgfSk7XG4gIGRhdGUuaW5zdGFsbGVkID0gdHJ1ZTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHJ1bGUgZnJvbSB0aGUgbGlzdCBvZiB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci9ydWxlLlxuICovXG5WYWxpZGF0b3IucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gIGRlbGV0ZSBSdWxlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBsb2NhbGUgZm9yIGFsbCB2YWxpZGF0b3JzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSBUaGUgbG9jYWxlIGlkLlxuICovXG5WYWxpZGF0b3Iuc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlIChsYW5ndWFnZSkge1xuICAgIGlmICggbGFuZ3VhZ2UgPT09IHZvaWQgMCApIGxhbmd1YWdlID0gJ2VuJztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCEgRElDVElPTkFSWS5oYXNMb2NhbGUobGFuZ3VhZ2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgd2FybignWW91IGFyZSBzZXR0aW5nIHRoZSB2YWxpZGF0b3IgbG9jYWxlIHRvIGEgbG9jYWxlIHRoYXQgaXMgbm90IGRlZmluZWQgaW4gdGhlIGRpY2l0aW9uYXJ5LiBFbmdsaXNoIG1lc3NhZ2VzIG1heSBzdGlsbCBiZSBnZW5lcmF0ZWQuJyk7XG4gIH1cblxuICBMT0NBTEUgPSBsYW5ndWFnZTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgb3BlcmF0aW5nIG1vZGUgZm9yIGFsbCBuZXdseSBjcmVhdGVkIHZhbGlkYXRvcnMuXG4gKiBzdHJpY3RNb2RlID0gdHJ1ZTogVmFsdWVzIHdpdGhvdXQgYSBydWxlIGFyZSBpbnZhbGlkIGFuZCBjYXVzZSBmYWlsdXJlLlxuICogc3RyaWN0TW9kZSA9IGZhbHNlOiBWYWx1ZXMgd2l0aG91dCBhIHJ1bGUgYXJlIHZhbGlkIGFuZCBhcmUgc2tpcHBlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0TW9kZS5cbiAqL1xuVmFsaWRhdG9yLnNldFN0cmljdE1vZGUgPSBmdW5jdGlvbiBzZXRTdHJpY3RNb2RlIChzdHJpY3RNb2RlKSB7XG4gICAgaWYgKCBzdHJpY3RNb2RlID09PSB2b2lkIDAgKSBzdHJpY3RNb2RlID0gdHJ1ZTtcblxuICBTVFJJQ1RfTU9ERSA9IHN0cmljdE1vZGU7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGRpY2l0aW9uYXJ5LCBvdmVyd3JpdGluZyBleGlzdGluZyB2YWx1ZXMgYW5kIGFkZGluZyBuZXcgb25lcy5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSBkYXRhIFRoZSBkaWN0aW9uYXJ5IG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkgPSBmdW5jdGlvbiB1cGRhdGVEaWN0aW9uYXJ5IChkYXRhKSB7XG4gIERJQ1RJT05BUlkubWVyZ2UoZGF0YSk7XG59O1xuXG5WYWxpZGF0b3IuYWRkTG9jYWxlID0gZnVuY3Rpb24gYWRkTG9jYWxlIChsb2NhbGUpIHtcbiAgaWYgKCEgbG9jYWxlLm5hbWUpIHtcbiAgICB3YXJuKCdZb3VyIGxvY2FsZSBtdXN0IGhhdmUgYSBuYW1lIHByb3BlcnR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy51cGRhdGVEaWN0aW9uYXJ5KCggb2JqID0ge30sIG9ialtsb2NhbGUubmFtZV0gPSBsb2NhbGUsIG9iaiApKTtcbiAgICB2YXIgb2JqO1xufTtcblxuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRMb2NhbGUgPSBmdW5jdGlvbiBhZGRMb2NhbGUgKGxvY2FsZSkge1xuICBWYWxpZGF0b3IuYWRkTG9jYWxlKGxvY2FsZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGZpZWxkcyB0byBiZSB2YWxpZGF0ZWQuXG4gKlxuICogQHBhcmFte29iamVjdH0gdmFsaWRhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH0gTm9ybWFsaXplZCBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZUZpZWxkcyA9IGZ1bmN0aW9uIF9jcmVhdGVGaWVsZHMgKHZhbGlkYXRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCEgdmFsaWRhdGlvbnMpIHsgcmV0dXJuOyB9XG5cbiAgT2JqZWN0LmtleXModmFsaWRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHsgbmFtZTogZmllbGQsIHJ1bGVzOiB2YWxpZGF0aW9uc1tmaWVsZF0gfSk7XG4gICAgdGhpcyQxLmF0dGFjaChvcHRpb25zKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERhdGUgcnVsZXMgbmVlZCB0aGUgZXhpc3RhbmNlIG9mIGEgZm9ybWF0LCBzbyBkYXRlX2Zvcm1hdCBtdXN0IGJlIHN1cHBsaWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHJ1bGUgbmFtZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbGlkYXRpb25zIHRoZSBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIF9nZXREYXRlRm9ybWF0ICh2YWxpZGF0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gbnVsbDtcbiAgaWYgKHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gdmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXRbMF07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IHx8IHRoaXMuZGljdGlvbmFyeS5nZXREYXRlRm9ybWF0KHRoaXMubG9jYWxlKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgcnVsZSBpcyBhIGRhdGUgcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faXNBRGF0ZVJ1bGUgPSBmdW5jdGlvbiBfaXNBRGF0ZVJ1bGUgKHJ1bGUpIHtcbiAgcmV0dXJuICEhIH5bJ2FmdGVyJywgJ2JlZm9yZScsICdkYXRlX2JldHdlZW4nLCAnZGF0ZV9mb3JtYXQnXS5pbmRleE9mKHJ1bGUpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKlxuICogQHBhcmFte0ZpZWxkfSBmaWVsZCBUaGUgZmllbGQgb2JqZWN0LlxuICogQHBhcmFte29iamVjdH0gcnVsZSBOb3JtYWxpemVkIHJ1bGUgb2JqZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgQWRkaXRpb25hbCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9mb3JtYXRFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiBfZm9ybWF0RXJyb3JNZXNzYWdlIChmaWVsZCwgcnVsZSwgZGF0YSkge1xuICAgIGlmICggZGF0YSA9PT0gdm9pZCAwICkgZGF0YSA9IHt9O1xuXG4gIHZhciBuYW1lID0gdGhpcy5fZ2V0RmllbGREaXNwbGF5TmFtZShmaWVsZCk7XG4gIHZhciBwYXJhbXMgPSB0aGlzLl9nZXRMb2NhbGl6ZWRQYXJhbXMocnVsZSk7XG4gIC8vIERlZmF1bHRzIHRvIGVuZ2xpc2ggbWVzc2FnZS5cbiAgaWYgKCEgdGhpcy5kaWN0aW9uYXJ5Lmhhc0xvY2FsZShMT0NBTEUpKSB7XG4gICAgdmFyIG1zZyQxID0gdGhpcy5kaWN0aW9uYXJ5LmdldEZpZWxkTWVzc2FnZSgnZW4nLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gICAgcmV0dXJuIGlzQ2FsbGFibGUobXNnJDEpID8gbXNnJDEobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZyQxO1xuICB9XG5cbiAgdmFyIG1zZyA9IHRoaXMuZGljdGlvbmFyeS5nZXRGaWVsZE1lc3NhZ2UoTE9DQUxFLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gIHJldHVybiBpc0NhbGxhYmxlKG1zZykgPyBtc2cobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZztcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhlIHJ1bGUgKG1haW5seSBmb3IgdGFyZ2V0IGZpZWxkcykuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldExvY2FsaXplZFBhcmFtcyA9IGZ1bmN0aW9uIF9nZXRMb2NhbGl6ZWRQYXJhbXMgKHJ1bGUpIHtcbiAgaWYgKH4gWydhZnRlcicsICdiZWZvcmUnLCAnY29uZmlybWVkJ10uaW5kZXhPZihydWxlLm5hbWUpICYmIHJ1bGUucGFyYW1zICYmIHJ1bGUucGFyYW1zWzBdKSB7XG4gICAgaWYgKHJ1bGUucGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBbdGhpcy5kaWN0aW9uYXJ5LmdldEF0dHJpYnV0ZShMT0NBTEUsIHJ1bGUucGFyYW1zWzBdLCBydWxlLnBhcmFtc1swXSksIHJ1bGUucGFyYW1zWzFdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgcnVsZS5wYXJhbXNbMF0sIHJ1bGUucGFyYW1zWzBdKV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ1bGUucGFyYW1zO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyBhbiBhcHByb3BpYXRlIGRpc3BsYXkgbmFtZSwgZmlyc3QgY2hlY2tpbmcgJ2RhdGEtYXMnIG9yIHRoZSByZWdpc3RlcmVkICdwcmV0dHlOYW1lJ1xuICogVGhlbiB0aGUgZGljdGlvbmFyeSwgdGhlbiBmYWxsc2JhY2sgdG8gZmllbGQgbmFtZS5cbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkIFRoZSBmaWVsZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBuYW1lIHRvIGJlIHVzZWQgaW4gdGhlIGVycm9ycy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RmllbGREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIF9nZXRGaWVsZERpc3BsYXlOYW1lIChmaWVsZCkge1xuICByZXR1cm4gZmllbGQuZGlzcGxheU5hbWUgfHwgdGhpcy5kaWN0aW9uYXJ5LmdldEF0dHJpYnV0ZShMT0NBTEUsIGZpZWxkLm5hbWUsIGZpZWxkLm5hbWUpO1xufTtcblxuLyoqXG4gKiBUZXN0cyBhIHNpbmdsZSBpbnB1dCB2YWx1ZSBhZ2FpbnN0IGEgcnVsZS5cbiAqXG4gKiBAcGFyYW17RmllbGR9IGZpZWxkIFRoZSBmaWVsZCB1bmRlciB2YWxpZGF0aW9uLlxuICogQHBhcmFteyp9IHZhbHVldGhlIHZhbHVlIG9mIHRoZSBmaWVsZC5cbiAqIEBwYXJhbXtvYmplY3R9IHJ1bGUgdGhlIHJ1bGUgb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBpdCBwYXNzZXMgdGhlIGNoZWNrLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl90ZXN0ID0gZnVuY3Rpb24gX3Rlc3QgKGZpZWxkLCB2YWx1ZSwgcnVsZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciB2YWxpZGF0b3IgPSBSdWxlc1tydWxlLm5hbWVdO1xuICB2YXIgcGFyYW1zID0gQXJyYXkuaXNBcnJheShydWxlLnBhcmFtcykgPyB0b0FycmF5KHJ1bGUucGFyYW1zKSA6IFtdO1xuICBpZiAoISB2YWxpZGF0b3IgfHwgdHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIk5vIHN1Y2ggdmFsaWRhdG9yICdcIiArIChydWxlLm5hbWUpICsgXCInIGV4aXN0cy5cIikpO1xuICB9XG5cbiAgLy8gaGFzIGZpZWxkIGRlcGVuZW5jaWVzXG4gIGlmICgvKGNvbmZpcm1lZHxhZnRlcnxiZWZvcmUpLy50ZXN0KHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZmluZChmaWVsZC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09IHJ1bGUubmFtZTsgfSk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtcyA9IFt0YXJnZXQuZmllbGQudmFsdWUsIHBhcmFtc1sxXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBbdGFyZ2V0LmZpZWxkLnZhbHVlXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZS5uYW1lID09PSAncmVxdWlyZWQnICYmIGZpZWxkLnJlamVjdHNGYWxzZSkge1xuICAgIC8vIGludmFsaWRhdGUgZmFsc2UgaWYgbm8gYXJncyB3ZXJlIHNwZWNpZmllZCBhbmQgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYnkgZGVmYXVsdC5cbiAgICBwYXJhbXMgPSBwYXJhbXMubGVuZ3RoID8gcGFyYW1zIDogW3RydWVdO1xuICB9XG5cbiAgaWYgKGRhdGUuaW5zdGFsbGVkICYmIHRoaXMuX2lzQURhdGVSdWxlKHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMuX2dldERhdGVGb3JtYXQoZmllbGQucnVsZXMpO1xuICAgIGlmIChydWxlLm5hbWUgIT09ICdkYXRlX2Zvcm1hdCcpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSB2YWxpZGF0b3IodmFsdWUsIHBhcmFtcyk7XG5cbiAgLy8gSWYgaXQgaXMgYSBwcm9taXNlLlxuICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGFsbFZhbGlkID0gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaXNPYmplY3QodCkgPyB0LnZhbGlkIDogdCk7IH0pO1xuICAgICAgfSBlbHNlIHsgLy8gSXMgYSBzaW5nbGUgb2JqZWN0L2Jvb2xlYW4uXG4gICAgICAgIGFsbFZhbGlkID0gaXNPYmplY3QodmFsdWVzKSA/IHZhbHVlcy52YWxpZCA6IHZhbHVlcztcbiAgICAgICAgZGF0YSA9IHZhbHVlcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoISBhbGxWYWxpZCkge1xuICAgICAgICB0aGlzJDEuZXJyb3JzLmFkZCh7XG4gICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIG1zZzogdGhpcyQxLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIGRhdGEpLFxuICAgICAgICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICAgICAgICBzY29wZTogZmllbGQuc2NvcGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxWYWxpZDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghIGlzT2JqZWN0KHJlc3VsdCkpIHtcbiAgICByZXN1bHQgPSB7IHZhbGlkOiByZXN1bHQsIGRhdGE6IHt9IH07XG4gIH1cblxuICBpZiAoISByZXN1bHQudmFsaWQpIHtcbiAgICB0aGlzLmVycm9ycy5hZGQoe1xuICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICBtc2c6IHRoaXMuX2Zvcm1hdEVycm9yTWVzc2FnZShmaWVsZCwgcnVsZSwgcmVzdWx0LmRhdGEpLFxuICAgICAgcnVsZTogcnVsZS5uYW1lLFxuICAgICAgc2NvcGU6IGZpZWxkLnNjb3BlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnZhbGlkO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBmaWVsZCB0byBiZSB2YWxpZGF0ZWQuXG4gKlxuICogQHBhcmFte0ZpZWxkfE9iamVjdH0gbmFtZSBUaGUgZmllbGQgbmFtZS5cbiAqIEByZXR1cm4ge0ZpZWxkfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAoZmllbGQpIHtcbiAgLy8gZGVwcmVjYXRlOiBoYW5kbGUgb2xkIHNpZ25hdHVyZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZmllbGQgPSBhc3NpZ24oe30sIHtcbiAgICAgIG5hbWU6IGFyZ3VtZW50c1swXSxcbiAgICAgIHJ1bGVzOiBhcmd1bWVudHNbMV1cbiAgICB9LCBhcmd1bWVudHNbMl0gfHwgeyB2bTogeyAkdmFsaWRhdG9yOiB0aGlzIH0gfSk7XG4gIH1cblxuICBpZiAoIShmaWVsZCBpbnN0YW5jZW9mIEZpZWxkKSkge1xuICAgIGZpZWxkID0gbmV3IEZpZWxkKGZpZWxkLmVsIHx8IG51bGwsIGZpZWxkKTtcbiAgfVxuXG4gIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAvLyB2YWxpZGF0ZSBpZiBpbml0aWFsLlxuICBpZiAoZmllbGQuaW5pdGlhbCkge1xuICAgIHRoaXMudmFsaWRhdGUoKFwiI1wiICsgKGZpZWxkLmlkKSksIGZpZWxkLnZhbHVlKTtcbiAgfVxuICBpZiAoIWZpZWxkLnNjb3BlKSB7XG4gICAgdGhpcy5maWVsZEJhZyA9IGFzc2lnbih7fSwgdGhpcy5maWVsZEJhZywgKCBvYmogPSB7fSwgb2JqWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqICkpO1xuICAgICAgdmFyIG9iajtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICB2YXIgc2NvcGVPYmogPSBhc3NpZ24oe30sIHRoaXMuZmllbGRCYWdbKFwiJFwiICsgKGZpZWxkLnNjb3BlKSldIHx8IHt9LCAoIG9iaiQxID0ge30sIG9iaiQxWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqJDEgKSk7XG4gICAgdmFyIG9iaiQxO1xuICB0aGlzLmZpZWxkQmFnID0gYXNzaWduKHt9LCB0aGlzLmZpZWxkQmFnLCAoIG9iaiQyID0ge30sIG9iaiQyWyhcIiRcIiArIChmaWVsZC5zY29wZSkpXSA9IHNjb3BlT2JqLCBvYmokMiApKTtcbiAgICB2YXIgb2JqJDI7XG5cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBmbGFncyBvbiBhIGZpZWxkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gZmxhZ3NcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5mbGFnID0gZnVuY3Rpb24gZmxhZyAobmFtZSwgZmxhZ3MpIHtcbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUpO1xuICBpZiAoISBmaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZpZWxkLmZsYWdzKS5mb3JFYWNoKGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgZmllbGQuZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXSAhPT0gdW5kZWZpbmVkID8gZmxhZ3NbZmxhZ10gOiBmaWVsZC5mbGFnc1tmbGFnXTtcbiAgfSk7XG4gIGlmIChmaWVsZC5jbGFzc2VzKSB7XG4gICAgZmllbGQudXBkYXRlQ2xhc3NlcygpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBmaWVsZCBmcm9tIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHBhcmFte1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHNjb3BlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCAobmFtZSwgc2NvcGUpIHtcbiAgdmFyIGZpZWxkID0gbmFtZSBpbnN0YW5jZW9mIEZpZWxkID8gbmFtZSA6IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmIChmaWVsZCkge1xuICAgIGZpZWxkLmRlc3Ryb3koKTtcbiAgICB0aGlzLmVycm9ycy5yZW1vdmVCeUlkKGZpZWxkLmlkKTtcbiAgICB0aGlzLmZpZWxkcy5yZW1vdmUoZmllbGQpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjdXN0b20gdmFsaWRhdG9yIHRvIHRoZSBsaXN0IG9mIHZhbGlkYXRpb24gcnVsZXMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFte29iamVjdHxmdW5jdGlvbn0gdmFsaWRhdG9yIFRoZSB2YWxpZGF0b3Igb2JqZWN0L2Z1bmN0aW9uLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIFZhbGlkYXRvci5leHRlbmQobmFtZSwgdmFsaWRhdG9yKTtcbn07XG5cbi8qKlxuICogSnVzdCBhbiBhbGlhcyB0byB0aGUgc3RhdGljIG1ldGhvZCBmb3IgY29udmllbmVjZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzID0gZnVuY3Rpb24gaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyAobW9tZW50KSB7XG4gIFZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzKG1vbWVudCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IvcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgVmFsaWRhdG9yLnJlbW92ZShuYW1lKTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsaWRhdG9yIGN1cnJlbnQgbGFuZ2F1Z2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIGxvY2FsZSBvciBsYW5ndWFnZSBpZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUgKGxhbmd1YWdlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoISB0aGlzLmRpY3Rpb25hcnkuaGFzTG9jYWxlKGxhbmd1YWdlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdhcm4oJ1lvdSBhcmUgc2V0dGluZyB0aGUgdmFsaWRhdG9yIGxvY2FsZSB0byBhIGxvY2FsZSB0aGF0IGlzIG5vdCBkZWZpbmVkIGluIHRoZSBkaWNpdGlvbmFyeS4gRW5nbGlzaCBtZXNzYWdlcyBtYXkgc3RpbGwgYmUgZ2VuZXJhdGVkLicpO1xuICB9XG5cbiAgTE9DQUxFID0gbGFuZ3VhZ2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1lc3NhZ2VzIGRpY2l0aW9uYXJ5LCBvdmVyd3JpdGluZyBleGlzdGluZyB2YWx1ZXMgYW5kIGFkZGluZyBuZXcgb25lcy5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSBkYXRhIFRoZSBtZXNzYWdlcyBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlRGljdGlvbmFyeSA9IGZ1bmN0aW9uIHVwZGF0ZURpY3Rpb25hcnkgKGRhdGEpIHtcbiAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoZGF0YSk7XG59O1xuXG4vKipcbiAqIFRyaWVzIGRpZmZlcmVudCBzdHJhdGVnaWVzIHRvIGZpbmQgYSBmaWVsZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGVcbiAqIEByZXR1cm4ge0ZpZWxkfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9yZXNvbHZlRmllbGQgPSBmdW5jdGlvbiBfcmVzb2x2ZUZpZWxkIChuYW1lLCBzY29wZSkge1xuICBpZiAoc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lWzBdID09PSAnIycpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IGlkOiBuYW1lLnNsaWNlKDEpIH0pO1xuICB9XG5cbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IHBhcnRzWzFdLCBzY29wZTogcGFydHNbMF0gfSk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBuYW1lLCBzY29wZTogbnVsbCB9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyB3aGVuIGEgZmllbGQgaXMgbm90IGZvdW5kIGRlcGVuZGluZyBvbiB0aGUgc3RyaWN0IGZsYWcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9oYW5kbGVGaWVsZE5vdEZvdW5kID0gZnVuY3Rpb24gX2hhbmRsZUZpZWxkTm90Rm91bmQgKG5hbWUsIHNjb3BlKSB7XG4gIGlmICghIHRoaXMuc3RyaWN0KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICB2YXIgZnVsbE5hbWUgPSBzY29wZSA/IG5hbWUgOiAoXCJcIiArIChzY29wZSA/IHNjb3BlICsgJy4nIDogJycpICsgbmFtZSk7XG4gIHRocm93IGNyZWF0ZUVycm9yKFxuICAgIChcIlZhbGlkYXRpbmcgYSBub24tZXhpc3RhbnQgZmllbGQ6IFxcXCJcIiArIGZ1bGxOYW1lICsgXCJcXFwiLiBVc2UgXFxcImF0dGFjaCgpXFxcIiBmaXJzdC5cIilcbiAgKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSB2YWxpZGF0aW9uIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtGaWVsZH0gZmllbGRcbiAqIEBwYXJhbSB7UHJvbWlzZX0gdmFsdWVcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGUgPSBmdW5jdGlvbiBfdmFsaWRhdGUgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIGZpZWxkLmlzUmVxdWlyZWQgJiYgfltudWxsLCB1bmRlZmluZWQsICcnXS5pbmRleE9mKHZhbHVlKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgdmFyIGlzRXhpdEVhcmx5ID0gZmFsc2U7XG4gIC8vIHVzZSBvZiAnLnNvbWUoKScgaXMgdG8gYnJlYWsgaXRlcmF0aW9uIGluIG1pZGRsZSBieSByZXR1cm5pbmcgdHJ1ZVxuICBPYmplY3Qua2V5cyhmaWVsZC5ydWxlcykuc29tZShmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzJDEuX3Rlc3QoXG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgeyBuYW1lOiBydWxlLCBwYXJhbXM6IGZpZWxkLnJ1bGVzW3J1bGVdIH1cbiAgICApO1xuXG4gICAgaWYgKGlzQ2FsbGFibGUocmVzdWx0LnRoZW4pKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0aGlzJDEuZmFzdEV4aXQgJiYgIXJlc3VsdCkge1xuICAgICAgaXNFeGl0RWFybHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0QXNQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdEFzUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXhpdEVhcmx5O1xuICB9KTtcblxuICBpZiAoaXNFeGl0RWFybHkpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7IH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHZhciB2YWxpZCA9IHZhbHVlcy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBhIHJlZ2lzdGVyZWQgZmllbGQgdmFsaWRhdGlvbnMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSB0aGUgZmllbGQgbmFtZS5cbiAqIEBwYXJhbXsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBzY29wZSBvZiB0aGUgZmllbGQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUgKG5hbWUsIHZhbHVlLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIGFsbC5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVNjb3BlcygpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgc2NvcGVsZXNzIGZpZWxkcy5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgYXJndW1lbnRzWzBdID09PSAnKicpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUFsbCgpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgYSBzY29wZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycgJiYgL14oLispXFwuXFwqJC8udGVzdChhcmd1bWVudHNbMF0pKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhcmd1bWVudHNbMF0ubWF0Y2goL14oLispXFwuXFwqJC8pWzFdO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKG1hdGNoZWQpO1xuICB9XG5cbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUsIHNjb3BlKTtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLl9oYW5kbGVGaWVsZE5vdEZvdW5kKG5hbWUsIHNjb3BlKTtcbiAgfVxuICB0aGlzLmVycm9ycy5yZW1vdmVCeUlkKGZpZWxkLmlkKTtcbiAgaWYgKGZpZWxkLmlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG4gIGZpZWxkLmZsYWdzLnBlbmRpbmcgPSB0cnVlO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbHVlID0gZmllbGQudmFsdWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoZmllbGQsIHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBmaWVsZC5mbGFncy5wZW5kaW5nID0gZmFsc2U7XG4gICAgZmllbGQuZmxhZ3MudmFsaWQgPSByZXN1bHQ7XG4gICAgZmllbGQuZmxhZ3MuaW52YWxpZCA9ICFyZXN1bHQ7XG4gICAgZmllbGQuZmxhZ3MudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICBmaWVsZC51cGRhdGVBcmlhQXR0cnMoKTtcbiAgICBmaWVsZC51cGRhdGVDdXN0b21WYWxpZGl0eSgpO1xuICAgIGZpZWxkLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXVzZXMgdGhlIHZhbGlkYXRvci5cbiAqXG4gKiBAcmV0dXJuIHtWYWxpZGF0b3J9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVzdW1lcyB0aGUgdmFsaWRhdG9yLlxuICpcbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUgKCkge1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgZWFjaCB2YWx1ZSBhZ2FpbnN0IHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkIHZhbGlkYXRpb25zLlxuICogQHBhcmFte09iamVjdHxTdHJpbmd9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGJlIHZhbGlkYXRlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbGlkYXRpb24gcmVzdWx0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlQWxsID0gZnVuY3Rpb24gdmFsaWRhdGVBbGwgKHZhbHVlcykge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBtYXRjaGVyID0gbnVsbDtcbiAgdmFyIHByb3ZpZGVkVmFsdWVzID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgbWF0Y2hlciA9IHsgc2NvcGU6IHZhbHVlcyB9O1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlcykpIHtcbiAgICBtYXRjaGVyID0gT2JqZWN0LmtleXModmFsdWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHsgbmFtZToga2V5LCBzY29wZTogYXJndW1lbnRzJDFbMV0gfHwgbnVsbCB9O1xuICAgIH0pO1xuICAgIHByb3ZpZGVkVmFsdWVzID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgbWF0Y2hlciA9IHsgc2NvcGU6IG51bGwgfTsgLy8gZ2xvYmFsIHNjb3BlLlxuICB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMuZmlsdGVyKG1hdGNoZXIpLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBwcm92aWRlZFZhbHVlcyA/IHZhbHVlc1tmaWVsZC5uYW1lXSA6IGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHNjb3Blcy5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQWxsIHByb21pc2VzIHJlc3VsdGVkIGZyb20gZWFjaCBzY29wZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVNjb3BlcyA9IGZ1bmN0aW9uIHZhbGlkYXRlU2NvcGVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBwcm9taXNlcyA9IHRoaXMuZmllbGRzLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBmaWVsZC52YWx1ZVxuICApOyB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHsgcmV0dXJuIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IsIHN0YXRpY0FjY2Vzc29ycyApO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHBhcmVudCB2YWxpZGF0b3IgaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpbmplY3Rpb25zXG4gKi9cbnZhciByZXF1ZXN0c1ZhbGlkYXRvciA9IGZ1bmN0aW9uIChpbmplY3Rpb25zKSB7XG4gIGlmICghIGluamVjdGlvbnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3Rpb25zKSAmJiB+aW5qZWN0aW9ucy5pbmRleE9mKCckdmFsaWRhdG9yJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc09iamVjdChpbmplY3Rpb25zKSAmJiBpbmplY3Rpb25zLiR2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICh2bSwgb3B0aW9ucykgeyByZXR1cm4gbmV3IFZhbGlkYXRvcihudWxsLCB7XG4gIGluaXQ6IGZhbHNlLFxuICB2bTogdm0sXG4gIGZhc3RFeGl0OiBvcHRpb25zLmZhc3RFeGl0XG59KTsgfTtcblxudmFyIG1ha2VNaXhpbiA9IGZ1bmN0aW9uIChWdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdmFyIG1peGluID0ge307XG4gIG1peGluLnByb3ZpZGUgPSBmdW5jdGlvbiBwcm92aWRlc1ZhbGlkYXRvciAoKSB7XG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJHZhbGlkYXRvcjogdGhpcy4kdmFsaWRhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfTtcblxuICBtaXhpbi5iZWZvcmVDcmVhdGUgPSBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8vIGlmIGl0cyBhIHJvb3QgaW5zdGFuY2UsIGluamVjdCBhbnl3YXlzLCBvciBpZiBpdCByZXF1ZXN0ZWQgYSBuZXcgaW5zdGFuY2UuXG4gICAgaWYgKHRoaXMuJG9wdGlvbnMuJHZhbGlkYXRlcyB8fCAhdGhpcy4kcGFyZW50KSB7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3RlZCA9IHJlcXVlc3RzVmFsaWRhdG9yKHRoaXMuJG9wdGlvbnMuaW5qZWN0KTtcblxuICAgIC8vIGlmIGF1dG9tYXRpYyBpbmplY3Rpb24gaXMgZW5hYmxlZCBhbmQgbm8gaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAgICBpZiAoISB0aGlzLiR2YWxpZGF0b3IgJiYgb3B0aW9ucy5pbmplY3QgJiYgIXJlcXVlc3RlZCkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGRvbid0IGluamVjdCBlcnJvcnMgb3IgZmllbGRCYWcgYXMgbm8gdmFsaWRhdG9yIHdhcyByZXNvbHZlZC5cbiAgICBpZiAoISByZXF1ZXN0ZWQgJiYgISB0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBpcyBhIHZhbGlkYXRvciBidXQgaXQgaXNuJ3QgaW5qZWN0ZWQsIG1hcmsgYXMgcmVhY3RpdmUuXG4gICAgaWYgKCEgcmVxdWVzdGVkICYmIHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcy4kdmFsaWRhdG9yLCAnZXJyb3JzJywgdGhpcy4kdmFsaWRhdG9yLmVycm9ycyk7XG4gICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLiR2YWxpZGF0b3IsICdmaWVsZEJhZycsIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZyk7XG4gICAgfVxuXG4gICAgaWYgKCEgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRbb3B0aW9ucy5lcnJvckJhZ05hbWUgfHwgJ2Vycm9ycyddID0gZnVuY3Rpb24gZXJyb3JCYWdHZXR0ZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5lcnJvcnM7XG4gICAgfTtcbiAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkW29wdGlvbnMuZmllbGRzQmFnTmFtZSB8fCAnZmllbGRzJ10gPSBmdW5jdGlvbiBmaWVsZEJhZ0dldHRlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnO1xuICAgIH07XG4gIH07XG5cbiAgbWl4aW4uYmVmb3JlRGVzdHJveSA9IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIC8vIG1hcmsgdGhlIHZhbGlkYXRvciBwYXVzZWQgdG8gcHJldmVudCBkZWxheWVkIHZhbGlkYXRpb24uXG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvciAmJiB0aGlzLiR2YWxpZGF0b3Iub3duZXJJZCA9PT0gdGhpcy5fdWlkICYmIGlzQ2FsbGFibGUodGhpcy4kdmFsaWRhdG9yLnBhdXNlKSkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBtaXhpbjtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgZGVsYXk6IDAsXG4gIGVycm9yQmFnTmFtZTogJ2Vycm9ycycsXG4gIGRpY3Rpb25hcnk6IG51bGwsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZmllbGRzQmFnTmFtZTogJ2ZpZWxkcycsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICBjbGFzc05hbWVzOiB1bmRlZmluZWQsXG4gIGV2ZW50czogJ2lucHV0fGJsdXInLFxuICBpbmplY3Q6IHRydWUsXG4gIGZhc3RFeGl0OiB0cnVlLFxuICBhcmlhOiB0cnVlLFxuICB2YWxpZGl0eTogdHJ1ZVxufTtcblxuLyoqXG4gKiBcbiAqIFxuICogRmluZHMgdGhlIHJlcXVlc3RlZCBmaWVsZCBieSBpZCBmcm9tIHRoZSBjb250ZXh0IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcmV0dXJuIHtGaWVsZHxudWxsfVxuICovXG52YXIgZmluZEZpZWxkID0gZnVuY3Rpb24gKGVsLCBjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCB8fCAhY29udGV4dC4kdmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dC4kdmFsaWRhdG9yLmZpZWxkcy5maW5kKHsgaWQ6IGdldERhdGFBdHRyaWJ1dGUoZWwsICdpZCcpIH0pO1xufTtcblxudmFyIGNyZWF0ZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciB2YWxpZGF0b3IgPSB2bm9kZS5jb250ZXh0LiR2YWxpZGF0b3I7XG4gICAgICBpZiAoISB2YWxpZGF0b3IpIHtcbiAgICAgICAgd2FybihcIk5vIHZhbGlkYXRvciBpbnN0YW5jZSBpcyBwcmVzZW50IG9uIHZtLCBkaWQgeW91IGZvcmdldCB0byBpbmplY3QgJyR2YWxpZGF0b3InP1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkT3B0aW9ucyA9IEdlbmVyYXRvci5nZW5lcmF0ZShlbCwgYmluZGluZywgdm5vZGUsIG9wdGlvbnMpO1xuICAgICAgdmFsaWRhdG9yLmF0dGFjaChmaWVsZE9wdGlvbnMpO1xuICAgIH0sXG4gICAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG4gICAgICB2YXIgc2NvcGUgPSBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG5cbiAgICAgIC8vIHNraXAgaWYgc2NvcGUgaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAoIWZpZWxkIHx8IHNjb3BlID09PSBmaWVsZC5zY29wZSkgeyByZXR1cm47IH1cblxuICAgICAgLy8gb25seSB1cGRhdGUgc2NvcGUuXG4gICAgICBmaWVsZC51cGRhdGUoeyBzY29wZTogc2NvcGUgfSk7XG5cbiAgICAgIC8vIGFsbG93cyB0aGUgZmllbGQgdG8gcmUtZXZhbHVhdGVkIG9uY2UgbW9yZSBpbiB0aGUgdXBkYXRlIGhvb2suXG4gICAgICBmaWVsZC51cGRhdGVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkbyB1bmVjY2Vzc2FyeSB3b3JrIGlmIG5vIGltcG9ydGFudCBjaGFuZ2Ugd2FzIGRvbmUuXG4gICAgICBpZiAoIWZpZWxkIHx8IChmaWVsZC51cGRhdGVkICYmIGlzRXF1YWwoYmluZGluZy52YWx1ZSwgYmluZGluZy5vbGRWYWx1ZSkpKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjb3BlID0gR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgdmFyIHJ1bGVzID0gR2VuZXJhdG9yLnJlc29sdmVSdWxlcyhlbCwgYmluZGluZyk7XG5cbiAgICAgIGZpZWxkLnVwZGF0ZSh7XG4gICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgcnVsZXM6IHJ1bGVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChlbCwgYmluZGluZywgcmVmKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHJlZi5jb250ZXh0O1xuXG4gICAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIGNvbnRleHQpO1xuICAgICAgaWYgKCFmaWVsZCkgeyByZXR1cm47IH1cblxuICAgICAgY29udGV4dC4kdmFsaWRhdG9yLmRldGFjaChmaWVsZCk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICBpZiAofmN1cnIuaW5kZXhPZignLicpKSB7XG4gICAgICAgIHByZXZbY3Vyci5zcGxpdCgnLicpWzFdXSA9IGN1cnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2W2N1cnJdID0gY3VycjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbi8qKlxuICogTWFwcyBmaWVsZHMgdG8gY29tcHV0ZWQgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBmaWVsZHNcbiAqL1xudmFyIG1hcEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemUoZmllbGRzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgIHZhciBmaWVsZCA9IG5vcm1hbGl6ZWRbY3Vycl07XG4gICAgcHJldltjdXJyXSA9IGZ1bmN0aW9uIG1hcHBlZEZpZWxkICgpIHtcbiAgICAgIGlmICh0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWdbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWdbZmllbGRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSBmaWVsZC5pbmRleE9mKCcuJyk7XG4gICAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICAgIHZhciBzY29wZSA9IHJlZlswXTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzFdO1xuXG4gICAgICByZXR1cm4gZ2V0UGF0aCgoXCIkXCIgKyBzY29wZSArIFwiLlwiICsgbmFtZSksIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZywge30pO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwge30pO1xufTtcblxudmFyIFZ1ZTtcblxudmFyIGluc3RhbGwgPSBmdW5jdGlvbiAoX1Z1ZSwgb3B0aW9ucykge1xuICBpZiAoVnVlKSB7XG4gICAgd2FybignYWxyZWFkeSBpbnN0YWxsZWQsIFZ1ZS51c2UoVmVlVmFsaWRhdGUpIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFZ1ZSA9IF9WdWU7XG4gIHZhciBjb25maWckJDEgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG4gIGlmIChjb25maWckJDEuZGljdGlvbmFyeSkge1xuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGNvbmZpZyQkMS5kaWN0aW9uYXJ5KTtcbiAgfVxuXG4gIFZhbGlkYXRvci5zZXRMb2NhbGUoY29uZmlnJCQxLmxvY2FsZSk7XG4gIFZhbGlkYXRvci5zZXRTdHJpY3RNb2RlKGNvbmZpZyQkMS5zdHJpY3QpO1xuXG4gIFZ1ZS5taXhpbihtYWtlTWl4aW4oVnVlLCBjb25maWckJDEpKTtcbiAgVnVlLmRpcmVjdGl2ZSgndmFsaWRhdGUnLCBjcmVhdGVEaXJlY3RpdmUoY29uZmlnJCQxKSk7XG59O1xuXG52YXIgaW5kZXggPSB7XG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIG1hcEZpZWxkczogbWFwRmllbGRzLFxuICBWYWxpZGF0b3I6IFZhbGlkYXRvcixcbiAgRXJyb3JCYWc6IEVycm9yQmFnLFxuICBSdWxlczogUnVsZXMsXG4gIHZlcnNpb246ICcyLjAuMC1yYy4xMydcbn07XG5cbnJldHVybiBpbmRleDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3ZlZS12YWxpZGF0ZS9kaXN0L3ZlZS12YWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDUgOCA5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVyY2hhbnQtcmVnaXN0cmF0aW9uIG8tc2VjdGlvblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyXCJcbiAgfSwgW19jKCdzdGVwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGl2ZVwiOiBcIjFcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFiLTFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lciBvLWNvbnRhaW5lci0tZml0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkIGMtY2FyZC0tbWVyY2hhbnRcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8taGVhZGluZyB1LW0teDNcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXNpIEJhc2ljXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aW9uXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwIGMtZm9ybS1ncm91cC0tbWcyXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhTWVyY2hhbnQubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImRhdGFNZXJjaGFudC5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiaWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJOYW1hIFRlbXBhdFwiLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5kYXRhTWVyY2hhbnQubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRhTWVyY2hhbnQubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCduYW1lJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWZlZWRiYWNrIGMtZm9ybS1mZWVkYmFja19fbWVyY2hhbnRcIlxuICB9LCBbX3ZtLl92KFwiV2FqaWIgZGlpc2kuXCIpXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS13ZWlnaHQtYm9sZCB1LW1iLXgxXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgTG9nb1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW1hZ2UtdXBsb2FkJywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5kYXRhTWVyY2hhbnQuaW1hZ2VzKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmRhdGFNZXJjaGFudC5pbWFnZXMgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImRhdGFNZXJjaGFudC5pbWFnZXNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIChfdm0udmFsaWRhdG9yLmVycm9ycy5oYXMoJ2ltYWdlcycpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFjayBjLWZvcm0tZmVlZGJhY2tfX21lcmNoYW50XCJcbiAgfSwgW192bS5fdihcIldhamliIGRpaXNpLlwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BsYWNlcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiYWRkcmVzc1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZGF0YU1lcmNoYW50LmFkZHJlc3MpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uZGF0YU1lcmNoYW50LmFkZHJlc3MgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImRhdGFNZXJjaGFudC5hZGRyZXNzXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidS13ZWlnaHQtYm9sZCB1LW1iLXgxXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJLb250YWsgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhTWVyY2hhbnQucGhvbmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhTWVyY2hhbnQucGhvbmVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwicGhvbmVcIixcbiAgICAgIFwiaWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJObyBUZWxwXCIsXG4gICAgICBcImF1dG9jb21wbGV0ZVwiOiBcIm9mZlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRhdGFNZXJjaGFudC5waG9uZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRhTWVyY2hhbnQucGhvbmUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygncGhvbmUnKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZmVlZGJhY2sgYy1mb3JtLWZlZWRiYWNrX19tZXJjaGFudFwiXG4gIH0sIFtfdm0uX3YoXCJXYWppYiBkaWlzaS5cIildKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhTWVyY2hhbnQuZW1haWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhTWVyY2hhbnQuZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBcIlwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJBbGFtYXQgRW1haWxcIixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGF0YU1lcmNoYW50LmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRhdGFNZXJjaGFudC5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCdlbWFpbCcpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFjayBjLWZvcm0tZmVlZGJhY2tfX21lcmNoYW50XCJcbiAgfSwgW192bS5fdihcIldhamliIGRpaXNpLlwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGFNZXJjaGFudC53ZWJzaXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YU1lcmNoYW50LndlYnNpdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBcIlwiLFxuICAgICAgXCJuYW1lXCI6IFwid2Vic2l0ZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIldlYnNpdGVcIixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGF0YU1lcmNoYW50LndlYnNpdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YU1lcmNoYW50LndlYnNpdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygnd2Vic2l0ZScpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFjayBjLWZvcm0tZmVlZGJhY2tfX21lcmNoYW50XCJcbiAgfSwgW192bS5fdihcIldhamliIGRpaXNpLlwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwIHUtbXQteDVcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IFwiL21lcmNoYW50L3JlZ2lzdHJhdGlvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiIDwgS2VtYmFsaVwiKV0pXSwgMSldKV0pXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZ3JvdXAgdS1tdC14NVwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBvLWJ1dHRvbi0tbGFyZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJOZXh0XCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTIzNWEzZWEwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMzVhM2VhMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTIzNWEzZWEwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tZXJjaGFudC9NZXJjaGFudFJlZ2lzdHJhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbWFnZS11cGxvYWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6ICghX3ZtLmltYWdlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiIWltYWdlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjLWltYWdlLXVwbG9hZF9faW5wdXRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWltYWdlLXVwbG9hZF9faWNvblwiXG4gIH0sIFtfYygnc3ZnJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZpbGxcIjogXCIjMDAwMDAwXCIsXG4gICAgICBcImhlaWdodFwiOiBcIjI0XCIsXG4gICAgICBcInZpZXdCb3hcIjogXCIwIDAgMjQgMjRcIixcbiAgICAgIFwid2lkdGhcIjogXCIyNFwiLFxuICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB9XG4gIH0sIFtfYygnY2lyY2xlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImN4XCI6IFwiMTJcIixcbiAgICAgIFwiY3lcIjogXCIxMlwiLFxuICAgICAgXCJyXCI6IFwiMy4yXCJcbiAgICB9XG4gIH0pLCBfYygncGF0aCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkXCI6IFwiTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6XCJcbiAgICB9XG4gIH0pLCBfYygncGF0aCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkXCI6IFwiTTAgMGgyNHYyNEgwelwiLFxuICAgICAgXCJmaWxsXCI6IFwibm9uZVwiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtaW1hZ2UtdXBsb2FkX190ZXh0XCJcbiAgfSwgW192bS5fdihcIlVwbG9hZCBJbWFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbkZpbGVDaGFuZ2VcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbWFnZS11cGxvYWRfX3ByZXZpZXdcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmltYWdlLFxuICAgICAgXCJhbHRcIjogXCJcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uaW1hZ2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCJpbWFnZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbWFnZS11cGxvYWRfX3JlbW92ZS1idG5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ucmVtb3ZlSW1hZ2VcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQxNzRiNWYwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MTc0YjVmMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDE3NGI1ZjBcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0ZXB3aXphcmRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGVwd2l6YXJkLXJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ3N0ZXB3aXphcmQtc3RlcCcsIHtcbiAgICAgIGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PSAxXG4gICAgfV1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIxXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydzdGVwd2l6YXJkLXN0ZXAnLCB7XG4gICAgICBhY3RpdmU6IF92bS5hY3RpdmUgPT0gMlxuICAgIH1dXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1wcmltYXJ5IG8tYnV0dG9uLS1ibG9jayBidG4tY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMlwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnc3RlcHdpemFyZC1zdGVwIHN0ZXAtbGluZS1mYWxzZScsIHtcbiAgICAgIGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PSAzXG4gICAgfV1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLWJsb2NrIGJ0bi1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIzXCIpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtY2JkY2ExNDZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWNiZGNhMTQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LWNiZGNhMTQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXBsYWNlcy1zZWFyY2ggYy1wbGFjZXMtc2VhcmNoLS1tZzJcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInUtd2VpZ2h0LWJvbGQgdS1tYi14MVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9rYXNpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwIGMtaW5wdXQtZ3JvdXBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJpbnB1dFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IF92bS5uYW1lLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIk1hc3VrYW4gTG9rYXNpIE1lcmNoYW50XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5hZGRyZXNzXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlwcmVzc1wiOiBfdm0ucHJldmVudEVudGVyXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1LXdlaWdodC1ib2xkIHUtbWIteDFcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxva2FzaSBtZXJjaGFudCBkYWxhbSBwZXRhIChPcHNpb25hbCkgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcIm1hcFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIzMDBweFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtcGxhY2VzLXNlYXJjaF9fdG9nZ2xlLWxhdC1sbmcgdS1tdC14MlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvd0xhdExuZyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dMYXRMbmdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLnNob3dMYXRMbmcpID8gX3ZtLl9pKF92bS5zaG93TGF0TG5nLCBudWxsKSA+IC0xIDogKF92bS5zaG93TGF0TG5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19jXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLnNob3dMYXRMbmcsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uc2hvd0xhdExuZyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5zaG93TGF0TG5nID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5zaG93TGF0TG5nID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFNob3cgbGF0aXR1ZGUgJiBsb25naXR1ZGUgaW5wdXRcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNob3dMYXRMbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzaG93TGF0TG5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWQgYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS00LzEyXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJsYXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxhdGl0dWRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sYXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsYXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxhdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibGF0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTGF0aXR1ZGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sYXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubGF0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX2NvbCB1LTQvMTJcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxuZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9uZ2l0dWRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8taW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxuZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibG5nXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTG9uZ2l0dWRlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubG5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmxuZyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDlhZTIxZTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWQ5YWUyMWUwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BsYWNlc1NlYXJjaC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtZDlhZTIxZTBcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1widnVlMi1kcm9wem9uZVwiXT10KCk6ZVtcInZ1ZTItZHJvcHpvbmVcIl09dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7aWYoaVtuXSlyZXR1cm4gaVtuXS5leHBvcnRzO3ZhciBvPWlbbl09e2V4cG9ydHM6e30saWQ6bixsb2FkZWQ6ITF9O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxpKXt2YXIgbixvLHI9e307aSg4KSxuPWkoMiksbz1pKDYpLGUuZXhwb3J0cz1ufHx7fSxlLmV4cG9ydHMuX19lc01vZHVsZSYmKGUuZXhwb3J0cz1lLmV4cG9ydHMuZGVmYXVsdCk7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgZS5leHBvcnRzP2UuZXhwb3J0cy5vcHRpb25zfHwoZS5leHBvcnRzLm9wdGlvbnM9e30pOmUuZXhwb3J0cztvJiYocy50ZW1wbGF0ZT1vKSxzLmNvbXB1dGVkfHwocy5jb21wdXRlZD17fSksT2JqZWN0LmtleXMocikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1yW2VdO3MuY29tcHV0ZWRbZV09ZnVuY3Rpb24oKXtyZXR1cm4gdH19KX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx0aGlzLmxlbmd0aDt0Kyspe3ZhciBpPXRoaXNbdF07aVsyXT9lLnB1c2goXCJAbWVkaWEgXCIraVsyXStcIntcIitpWzFdK1wifVwiKTplLnB1c2goaVsxXSl9cmV0dXJuIGUuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsaSl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBuPXt9LG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIHI9dGhpc1tvXVswXTtcIm51bWJlclwiPT10eXBlb2YgciYmKG5bcl09ITApfWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBzPXRbb107XCJudW1iZXJcIj09dHlwZW9mIHNbMF0mJm5bc1swXV18fChpJiYhc1syXT9zWzJdPWk6aSYmKHNbMl09XCIoXCIrc1syXStcIikgYW5kIChcIitpK1wiKVwiKSxlLnB1c2gocykpfX0sZX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9e3Byb3BzOntpZDp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LHVybDp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LGNsaWNrYWJsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHBhcmFtTmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImZpbGVcIn0sYWNjZXB0ZWRGaWxlVHlwZXM6e3R5cGU6U3RyaW5nfSx0aHVtYm5haWxIZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjAwfSx0aHVtYm5haWxXaWR0aDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyMDB9LHNob3dSZW1vdmVMaW5rOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sbWF4RmlsZVNpemVJbk1COnt0eXBlOk51bWJlcixkZWZhdWx0OjJ9LG1heE51bWJlck9mRmlsZXM6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6NX0sYXV0b1Byb2Nlc3NRdWV1ZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHVzZUZvbnRBd2Vzb21lOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0saGVhZGVyczp7dHlwZTpPYmplY3R9LGxhbmd1YWdlOnt0eXBlOk9iamVjdCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJue319fSxwcmV2aWV3VGVtcGxhdGU6e3R5cGU6RnVuY3Rpb24sZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm4nXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotaW1hZ2VcIiBzdHlsZT1cIndpZHRoOiAnK2UudGh1bWJuYWlsV2lkdGgrXCJweDtoZWlnaHQ6IFwiK2UudGh1bWJuYWlsSGVpZ2h0KydweFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLWR6LXRodW1ibmFpbCAvPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1kZXRhaWxzXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1zaXplXCI+PHNwYW4gZGF0YS1kei1zaXplPjwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR6LWZpbGVuYW1lXCI+PHNwYW4gZGF0YS1kei1uYW1lPjwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHotcHJvZ3Jlc3NcIj48c3BhbiBjbGFzcz1cImR6LXVwbG9hZFwiIGRhdGEtZHotdXBsb2FkcHJvZ3Jlc3M+PC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1lcnJvci1tZXNzYWdlXCI+PHNwYW4gZGF0YS1kei1lcnJvcm1lc3NhZ2U+PC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1zdWNjZXNzLW1hcmtcIj4nK2UuZG9uZUljb24rJzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkei1lcnJvci1tYXJrXCI+JytlLmVycm9ySWNvbitcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIFwifX0sdXNlQ3VzdG9tRHJvcHpvbmVPcHRpb25zOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZHJvcHpvbmVPcHRpb25zOnt0eXBlOk9iamVjdCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJue319fSxyZXNpemVXaWR0aDp7dHlwZTpOdW1iZXIsZGVmYXVsdDpudWxsfSxyZXNpemVIZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6bnVsbH0scmVzaXplTWltZVR5cGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6bnVsbH0scmVzaXplUXVhbGl0eTp7dHlwZTpOdW1iZXIsZGVmYXVsdDouOH0scmVzaXplTWV0aG9kOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiY29udGFpblwifSx1cGxvYWRNdWx0aXBsZTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGR1cGxpY2F0ZUNoZWNrOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0scGFyYWxsZWxVcGxvYWRzOnt0eXBlOk51bWJlcixkZWZhdWx0OjJ9LHRpbWVvdXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6M2U0fX0sbWV0aG9kczp7bWFudWFsbHlBZGRGaWxlOmZ1bmN0aW9uKGUsdCxpLG4sbyl7dGhpcy5kcm9wem9uZS5lbWl0KFwiYWRkZWRmaWxlXCIsZSksdGhpcy5kcm9wem9uZS5lbWl0KFwidGh1bWJuYWlsXCIsZSx0KSx0aGlzLmRyb3B6b25lLmNyZWF0ZVRodW1ibmFpbEZyb21VcmwoZSx0LGksbiksdGhpcy5kcm9wem9uZS5lbWl0KFwiY29tcGxldGVcIixlKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygby5kb250U3Vic3RyYWN0TWF4RmlsZXMmJm8uZG9udFN1YnN0cmFjdE1heEZpbGVzfHwodGhpcy5kcm9wem9uZS5vcHRpb25zLm1heEZpbGVzPXRoaXMuZHJvcHpvbmUub3B0aW9ucy5tYXhGaWxlcy0xKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygby5hZGRUb0ZpbGVzJiZvLmFkZFRvRmlsZXMmJnRoaXMuZHJvcHpvbmUuZmlsZXMucHVzaChlKSx0aGlzLiRlbWl0KFwidmRyb3B6b25lLWZpbGUtYWRkZWQtbWFudWFsbHlcIixlKX0sc2V0T3B0aW9uOmZ1bmN0aW9uKGUsdCl7dGhpcy5kcm9wem9uZS5vcHRpb25zW2VdPXR9LHJlbW92ZUFsbEZpbGVzOmZ1bmN0aW9uKCl7dGhpcy5kcm9wem9uZS5yZW1vdmVBbGxGaWxlcyghMCl9LHByb2Nlc3NRdWV1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZHJvcHpvbmU7dGhpcy5kcm9wem9uZS5wcm9jZXNzUXVldWUoKSx0aGlzLmRyb3B6b25lLm9uKFwic3VjY2Vzc1wiLGZ1bmN0aW9uKCl7ZS5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWU9ITB9KSx0aGlzLmRyb3B6b25lLm9uKFwicXVldWVjb21wbGV0ZVwiLGZ1bmN0aW9uKCl7ZS5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWU9ITF9KX0scmVtb3ZlRmlsZTpmdW5jdGlvbihlKXt0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZSl9LGdldEFjY2VwdGVkRmlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kcm9wem9uZS5nZXRBY2NlcHRlZEZpbGVzKCl9LGdldFJlamVjdGVkRmlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kcm9wem9uZS5nZXRSZWplY3RlZEZpbGVzKCl9LGdldFVwbG9hZGluZ0ZpbGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZHJvcHpvbmUuZ2V0VXBsb2FkaW5nRmlsZXMoKX0sZ2V0UXVldWVkRmlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kcm9wem9uZS5nZXRRdWV1ZWRGaWxlcygpfSxnZXRQcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMudXNlQ3VzdG9tRHJvcHpvbmVPcHRpb25zJiZ2b2lkIDAhPT10JiZudWxsIT09dCYmXCJcIiE9PXQ/dDplfX0sY29tcHV0ZWQ6e2xhbmd1YWdlU2V0dGluZ3M6ZnVuY3Rpb24oKXt2YXIgZT17ZGljdERlZmF1bHRNZXNzYWdlOlwiPGJyPkRyb3AgZmlsZXMgaGVyZSB0byB1cGxvYWRcIixkaWN0Q2FuY2VsVXBsb2FkOlwiQ2FuY2VsIHVwbG9hZFwiLGRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb246XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgdXBsb2FkP1wiLGRpY3RGYWxsYmFja01lc3NhZ2U6XCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBkcmFnIGFuZCBkcm9wIGZpbGUgdXBsb2Fkcy5cIixkaWN0RmFsbGJhY2tUZXh0OlwiUGxlYXNlIHVzZSB0aGUgZmFsbGJhY2sgZm9ybSBiZWxvdyB0byB1cGxvYWQgeW91ciBmaWxlcyBsaWtlIGluIHRoZSBvbGRlbiBkYXlzLlwiLGRpY3RGaWxlVG9vQmlnOlwiRmlsZSBpcyB0b28gYmlnICh7e2ZpbGVzaXplfX1NaUIpLiBNYXggZmlsZXNpemU6IHt7bWF4RmlsZXNpemV9fU1pQi5cIixkaWN0SW52YWxpZEZpbGVUeXBlOlwiWW91IGNhbid0IHVwbG9hZCBmaWxlcyBvZiB0aGlzIHR5cGUuXCIsZGljdE1heEZpbGVzRXhjZWVkZWQ6XCJZb3UgY2FuIG5vdCB1cGxvYWQgYW55IG1vcmUgZmlsZXMuIChtYXg6IHt7bWF4RmlsZXN9fSlcIixkaWN0UmVtb3ZlRmlsZTpcIlJlbW92ZVwiLGRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uOm51bGwsZGljdFJlc3BvbnNlRXJyb3I6XCJTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge3tzdGF0dXNDb2RlfX0gY29kZS5cIn07Zm9yKHZhciB0IGluIHRoaXMubGFuZ3VhZ2UpZVt0XT10aGlzLmxhbmd1YWdlW3RdO2lmKHRoaXMudXNlQ3VzdG9tRHJvcHpvbmVPcHRpb25zJiZ0aGlzLmRyb3B6b25lT3B0aW9ucy5sYW5ndWFnZSlmb3IodmFyIGkgaW4gdGhpcy5kcm9wem9uZU9wdGlvbnMubGFuZ3VhZ2UpZVtpXT10aGlzLmRyb3B6b25lT3B0aW9ucy5sYW5ndWFnZVtpXTtyZXR1cm4gZX0sY2xvdWRJY29uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudXNlRm9udEF3ZXNvbWU/JzxpIGNsYXNzPVwiZmEgZmEtY2xvdWQtdXBsb2FkXCI+PC9pPic6JzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG91ZF91cGxvYWQ8L2k+J30sZG9uZUljb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51c2VGb250QXdlc29tZT8nPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nOicgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRvbmU8L2k+J30sZXJyb3JJY29uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudXNlRm9udEF3ZXNvbWU/JzxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+JzonIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcjwvaT4nfX0sbW91bnRlZDpmdW5jdGlvbigpe2lmKCF0aGlzLiRpc1NlcnZlcil7dmFyIGU9aSg1KTtlLmF1dG9EaXNjb3Zlcj0hMTt2YXIgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTt0aGlzLmRyb3B6b25lPW5ldyBlKHQse2NsaWNrYWJsZTp0aGlzLmdldFByb3AodGhpcy5jbGlja2FibGUsdGhpcy5kcm9wem9uZU9wdGlvbnMuY2xpY2thYmxlKSxwYXJhbU5hbWU6dGhpcy5nZXRQcm9wKHRoaXMucGFyYW1OYW1lLHRoaXMuZHJvcHpvbmVPcHRpb25zLnBhcmFtTmFtZSksdGh1bWJuYWlsV2lkdGg6dGhpcy5nZXRQcm9wKHRoaXMudGh1bWJuYWlsV2lkdGgsdGhpcy5kcm9wem9uZU9wdGlvbnMudGh1bWJuYWlsV2lkdGgpLHRodW1ibmFpbEhlaWdodDp0aGlzLmdldFByb3AodGhpcy50aHVtYm5haWxIZWlnaHQsdGhpcy5kcm9wem9uZU9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0KSxtYXhGaWxlczp0aGlzLmdldFByb3AodGhpcy5tYXhOdW1iZXJPZkZpbGVzLHRoaXMuZHJvcHpvbmVPcHRpb25zLm1heE51bWJlck9mRmlsZXMpLG1heEZpbGVzaXplOnRoaXMuZ2V0UHJvcCh0aGlzLm1heEZpbGVTaXplSW5NQix0aGlzLmRyb3B6b25lT3B0aW9ucy5tYXhGaWxlU2l6ZUluTUIpLGFkZFJlbW92ZUxpbmtzOnRoaXMuZ2V0UHJvcCh0aGlzLnNob3dSZW1vdmVMaW5rLHRoaXMuZHJvcHpvbmVPcHRpb25zLnNob3dSZW1vdmVMaW5rKSxhY2NlcHRlZEZpbGVzOnRoaXMuZ2V0UHJvcCh0aGlzLmFjY2VwdGVkRmlsZVR5cGVzLHRoaXMuZHJvcHpvbmVPcHRpb25zLmFjY2VwdGVkRmlsZVR5cGVzKSxhdXRvUHJvY2Vzc1F1ZXVlOnRoaXMuZ2V0UHJvcCh0aGlzLmF1dG9Qcm9jZXNzUXVldWUsdGhpcy5kcm9wem9uZU9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSksaGVhZGVyczp0aGlzLmdldFByb3AodGhpcy5oZWFkZXJzLHRoaXMuZHJvcHpvbmVPcHRpb25zLmhlYWRlcnMpLHByZXZpZXdUZW1wbGF0ZTp0aGlzLnByZXZpZXdUZW1wbGF0ZSh0aGlzKSxkaWN0RGVmYXVsdE1lc3NhZ2U6dGhpcy5jbG91ZEljb24rdGhpcy5sYW5ndWFnZVNldHRpbmdzLmRpY3REZWZhdWx0TWVzc2FnZSxkaWN0Q2FuY2VsVXBsb2FkOnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0Q2FuY2VsVXBsb2FkLGRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb246dGhpcy5sYW5ndWFnZVNldHRpbmdzLmRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb24sZGljdEZhbGxiYWNrTWVzc2FnZTp0aGlzLmxhbmd1YWdlU2V0dGluZ3MuZGljdEZhbGxiYWNrTWVzc2FnZSxkaWN0RmFsbGJhY2tUZXh0OnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0RmFsbGJhY2tUZXh0LGRpY3RGaWxlVG9vQmlnOnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0RmlsZVRvb0JpZyxkaWN0SW52YWxpZEZpbGVUeXBlOnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0SW52YWxpZEZpbGVUeXBlLGRpY3RNYXhGaWxlc0V4Y2VlZGVkOnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0TWF4RmlsZXNFeGNlZWRlZCxkaWN0UmVtb3ZlRmlsZTp0aGlzLmxhbmd1YWdlU2V0dGluZ3MuZGljdFJlbW92ZUZpbGUsZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb246dGhpcy5sYW5ndWFnZVNldHRpbmdzLmRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uLGRpY3RSZXNwb25zZUVycm9yOnRoaXMubGFuZ3VhZ2VTZXR0aW5ncy5kaWN0UmVzcG9uc2VFcnJvcixyZXNpemVXaWR0aDp0aGlzLmdldFByb3AodGhpcy5yZXNpemVXaWR0aCx0aGlzLmRyb3B6b25lT3B0aW9ucy5yZXNpemVXaWR0aCkscmVzaXplSGVpZ2h0OnRoaXMuZ2V0UHJvcCh0aGlzLnJlc2l6ZUhlaWdodCx0aGlzLmRyb3B6b25lT3B0aW9ucy5yZXNpemVIZWlnaHQpLHJlc2l6ZU1pbWVUeXBlOnRoaXMuZ2V0UHJvcCh0aGlzLnJlc2l6ZU1pbWVUeXBlLHRoaXMuZHJvcHpvbmVPcHRpb25zLnJlc2l6ZU1pbWVUeXBlKSxyZXNpemVRdWFsaXR5OnRoaXMuZ2V0UHJvcCh0aGlzLnJlc2l6ZVF1YWxpdHksdGhpcy5kcm9wem9uZU9wdGlvbnMucmVzaXplUXVhbGl0eSkscmVzaXplTWV0aG9kOnRoaXMuZ2V0UHJvcCh0aGlzLnJlc2l6ZU1ldGhvZCx0aGlzLmRyb3B6b25lT3B0aW9ucy5yZXNpemVNZXRob2QpLHVwbG9hZE11bHRpcGxlOnRoaXMuZ2V0UHJvcCh0aGlzLnVwbG9hZE11bHRpcGxlLHRoaXMuZHJvcHpvbmVPcHRpb25zLnVwbG9hZE11bHRpcGxlKSxwYXJhbGxlbFVwbG9hZHM6dGhpcy5nZXRQcm9wKHRoaXMucGFyYWxsZWxVcGxvYWRzLHRoaXMuZHJvcHpvbmVPcHRpb25zLnBhcmFsbGVsVXBsb2FkcyksdGltZW91dDp0aGlzLmdldFByb3AodGhpcy50aW1lb3V0LHRoaXMuZHJvcHpvbmVPcHRpb25zLnRpbWVvdXQpfSk7dmFyIG49dGhpczt0aGlzLmRyb3B6b25lLm9uKFwidGh1bWJuYWlsXCIsZnVuY3Rpb24oZSl7bi4kZW1pdChcInZkcm9wem9uZS10aHVtYm5haWxcIixlKX0pLHRoaXMuZHJvcHpvbmUub24oXCJhZGRlZGZpbGVcIixmdW5jdGlvbihlKXtpZihuLmR1cGxpY2F0ZUNoZWNrJiZ0aGlzLmZpbGVzLmxlbmd0aCl7dmFyIHQsaTtmb3IodD0wLGk9dGhpcy5maWxlcy5sZW5ndGg7dDxpLTE7dCsrKXRoaXMuZmlsZXNbdF0ubmFtZT09PWUubmFtZSYmKHRoaXMucmVtb3ZlRmlsZShlKSxuLiRlbWl0KFwiZHVwbGljYXRlLWZpbGVcIixlKSl9bi4kZW1pdChcInZkcm9wem9uZS1maWxlLWFkZGVkXCIsZSl9KSx0aGlzLmRyb3B6b25lLm9uKFwiYWRkZWRmaWxlc1wiLGZ1bmN0aW9uKGUpe24uJGVtaXQoXCJ2ZHJvcHpvbmUtZmlsZXMtYWRkZWRcIixlKX0pLHRoaXMuZHJvcHpvbmUub24oXCJyZW1vdmVkZmlsZVwiLGZ1bmN0aW9uKGUpe24uJGVtaXQoXCJ2ZHJvcHpvbmUtcmVtb3ZlZC1maWxlXCIsZSl9KSx0aGlzLmRyb3B6b25lLm9uKFwic3VjY2Vzc1wiLGZ1bmN0aW9uKGUsdCl7bi4kZW1pdChcInZkcm9wem9uZS1zdWNjZXNzXCIsZSx0KX0pLHRoaXMuZHJvcHpvbmUub24oXCJzdWNjZXNzbXVsdGlwbGVcIixmdW5jdGlvbihlLHQpe24uJGVtaXQoXCJ2ZHJvcHpvbmUtc3VjY2Vzcy1tdWx0aXBsZVwiLGUsdCl9KSx0aGlzLmRyb3B6b25lLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlLHQsaSl7bi4kZW1pdChcInZkcm9wem9uZS1lcnJvclwiLGUsdCxpKX0pLHRoaXMuZHJvcHpvbmUub24oXCJzZW5kaW5nXCIsZnVuY3Rpb24oZSx0LGkpe24uJGVtaXQoXCJ2ZHJvcHpvbmUtc2VuZGluZ1wiLGUsdCxpKX0pLHRoaXMuZHJvcHpvbmUub24oXCJzZW5kaW5nbXVsdGlwbGVcIixmdW5jdGlvbihlLHQsaSl7bi4kZW1pdChcInZkcm9wem9uZS1zZW5kaW5nLW11bHRpcGxlXCIsZSx0LGkpfSksdGhpcy5kcm9wem9uZS5vbihcInF1ZXVlY29tcGxldGVcIixmdW5jdGlvbihlLHQsaSl7bi4kZW1pdChcInZkcm9wem9uZS1xdWV1ZS1jb21wbGV0ZVwiLGUsdCxpKX0pLHRoaXMuZHJvcHpvbmUub24oXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsZnVuY3Rpb24oZSx0LGkpe24uJGVtaXQoXCJ2ZHJvcHpvbmUtdG90YWwtdXBsb2FkLXByb2dyZXNzXCIsZSx0LGkpfSksbi4kZW1pdChcInZkcm9wem9uZS1tb3VudGVkXCIpfX0sYmVmb3JlRGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZHJvcHpvbmUuZGlzYWJsZSgpfX19LGZ1bmN0aW9uKGUsdCxpKXt0PWUuZXhwb3J0cz1pKDEpKCksdC5wdXNoKFtlLmlkLCdALXdlYmtpdC1rZXlmcmFtZXMgcGFzc2luZy10aHJvdWdoezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDQwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDQwcHgpfTMwJSw3MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTQwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC00MHB4KX19QGtleWZyYW1lcyBwYXNzaW5nLXRocm91Z2h7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNDBweCl9MzAlLDcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTQwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW57MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNDBweCl9MzAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1Aa2V5ZnJhbWVzIHNsaWRlLWluezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDQwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDQwcHgpfTMwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHB1bHNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uZHJvcHpvbmUsLmRyb3B6b25lICp7Ym94LXNpemluZzpib3JkZXItYm94fS5kcm9wem9uZXttaW4taGVpZ2h0OjE1MHB4O2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuMyk7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MjBweH0uZHJvcHpvbmUuZHotY2xpY2thYmxle2N1cnNvcjpwb2ludGVyfS5kcm9wem9uZS5kei1jbGlja2FibGUgKntjdXJzb3I6ZGVmYXVsdH0uZHJvcHpvbmUuZHotY2xpY2thYmxlIC5kei1tZXNzYWdlLC5kcm9wem9uZS5kei1jbGlja2FibGUgLmR6LW1lc3NhZ2UgKntjdXJzb3I6cG9pbnRlcn0uZHJvcHpvbmUuZHotc3RhcnRlZCAuZHotbWVzc2FnZXtkaXNwbGF5Om5vbmV9LmRyb3B6b25lLmR6LWRyYWctaG92ZXJ7Ym9yZGVyLXN0eWxlOnNvbGlkfS5kcm9wem9uZS5kei1kcmFnLWhvdmVyIC5kei1tZXNzYWdle29wYWNpdHk6LjV9LmRyb3B6b25lIC5kei1tZXNzYWdle3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoyZW0gMH0uZHJvcHpvbmUgLmR6LXByZXZpZXd7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wO21hcmdpbjoxNnB4O21pbi1oZWlnaHQ6MTAwcHh9LmRyb3B6b25lIC5kei1wcmV2aWV3OmhvdmVye3otaW5kZXg6MTAwMH0uZHJvcHpvbmUgLmR6LXByZXZpZXcuZHotZmlsZS1wcmV2aWV3IC5kei1pbWFnZXtib3JkZXItcmFkaXVzOjIwcHg7YmFja2dyb3VuZDojOTk5O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjZWVlLCNkZGQpfS5kcm9wem9uZSAuZHotcHJldmlldy5kei1maWxlLXByZXZpZXcgLmR6LWRldGFpbHN7b3BhY2l0eToxfS5kcm9wem9uZSAuZHotcHJldmlldy5kei1pbWFnZS1wcmV2aWV3e2JhY2tncm91bmQ6I2ZmZn0uZHJvcHpvbmUgLmR6LXByZXZpZXcuZHotaW1hZ2UtcHJldmlldyAuZHotZGV0YWlsc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGxpbmVhcn0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXJlbW92ZXtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lfS5kcm9wem9uZSAuZHotcHJldmlldyAuZHotcmVtb3ZlOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LmRyb3B6b25lIC5kei1wcmV2aWV3OmhvdmVyIC5kei1kZXRhaWxze29wYWNpdHk6MX0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHN7ei1pbmRleDoyMDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7b3BhY2l0eTowO2ZvbnQtc2l6ZToxM3B4O21pbi13aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MmVtIDFlbTt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjpyZ2JhKDAsMCwwLC45KTtsaW5lLWhlaWdodDoxNTAlfS5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotc2l6ZXttYXJnaW4tYm90dG9tOjFlbTtmb250LXNpemU6MTZweH0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1le3doaXRlLXNwYWNlOm5vd3JhcH0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1lOmhvdmVyIHNwYW57Ym9yZGVyOjFweCBzb2xpZCBoc2xhKDAsMCUsNzglLC44KTtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC44KX0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1lOm5vdCg6aG92ZXIpe292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotZmlsZW5hbWU6bm90KDpob3Zlcikgc3Bhbntib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fS5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotZmlsZW5hbWUgc3BhbiwuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LXNpemUgc3BhbntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC40KTtwYWRkaW5nOjAgLjRlbTtib3JkZXItcmFkaXVzOjNweH0uZHJvcHpvbmUgLmR6LXByZXZpZXc6aG92ZXIgLmR6LWltYWdlIGltZ3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSk7LXdlYmtpdC1maWx0ZXI6Ymx1cig4cHgpO2ZpbHRlcjpibHVyKDhweCl9LmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1pbWFnZXtib3JkZXItcmFkaXVzOjIwcHg7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEyMHB4O2hlaWdodDoxMjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3otaW5kZXg6MTB9LmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1pbWFnZSBpbWd7ZGlzcGxheTpibG9ja30uZHJvcHpvbmUgLmR6LXByZXZpZXcuZHotc3VjY2VzcyAuZHotc3VjY2Vzcy1tYXJrey13ZWJraXQtYW5pbWF0aW9uOnBhc3NpbmctdGhyb3VnaCAzcyBjdWJpYy1iZXppZXIoLjc3LDAsLjE3NSwxKTthbmltYXRpb246cGFzc2luZy10aHJvdWdoIDNzIGN1YmljLWJlemllciguNzcsMCwuMTc1LDEpfS5kcm9wem9uZSAuZHotcHJldmlldy5kei1lcnJvciAuZHotZXJyb3ItbWFya3tvcGFjaXR5OjE7LXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4gM3MgY3ViaWMtYmV6aWVyKC43NywwLC4xNzUsMSk7YW5pbWF0aW9uOnNsaWRlLWluIDNzIGN1YmljLWJlemllciguNzcsMCwuMTc1LDEpfS5kcm9wem9uZSAuZHotcHJldmlldyAuZHotZXJyb3ItbWFyaywuZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXN1Y2Nlc3MtbWFya3twb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt6LWluZGV4OjUwMDtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTI3cHg7bWFyZ2luLXRvcDotMjdweH0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWVycm9yLW1hcmsgc3ZnLC5kcm9wem9uZSAuZHotcHJldmlldyAuZHotc3VjY2Vzcy1tYXJrIHN2Z3tkaXNwbGF5OmJsb2NrO3dpZHRoOjU0cHg7aGVpZ2h0OjU0cHh9LmRyb3B6b25lIC5kei1wcmV2aWV3LmR6LXByb2Nlc3NpbmcgLmR6LXByb2dyZXNze29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyfS5kcm9wem9uZSAuZHotcHJldmlldy5kei1jb21wbGV0ZSAuZHotcHJvZ3Jlc3N7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbn0uZHJvcHpvbmUgLmR6LXByZXZpZXc6bm90KC5kei1wcm9jZXNzaW5nKSAuZHotcHJvZ3Jlc3N7LXdlYmtpdC1hbmltYXRpb246cHVsc2UgNnMgZWFzZSBpbmZpbml0ZTthbmltYXRpb246cHVsc2UgNnMgZWFzZSBpbmZpbml0ZX0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXByb2dyZXNze29wYWNpdHk6MTt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTZweDtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi10b3A6LThweDt3aWR0aDo4MHB4O21hcmdpbi1sZWZ0Oi00MHB4O2JhY2tncm91bmQ6aHNsYSgwLDAlLDEwMCUsLjkpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbn0uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXByb2dyZXNzIC5kei11cGxvYWR7YmFja2dyb3VuZDojMzMzO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjNjY2LCM0NDQpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3R0b206MDt3aWR0aDowO3RyYW5zaXRpb246d2lkdGggLjNzIGVhc2UtaW4tb3V0fS5kcm9wem9uZSAuZHotcHJldmlldy5kei1lcnJvciAuZHotZXJyb3ItbWVzc2FnZXtkaXNwbGF5OmJsb2NrfS5kcm9wem9uZSAuZHotcHJldmlldy5kei1lcnJvcjpob3ZlciAuZHotZXJyb3ItbWVzc2FnZXtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWVycm9yLW1lc3NhZ2V7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwMDA7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztkaXNwbGF5Om5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3MgZWFzZTtib3JkZXItcmFkaXVzOjhweDtmb250LXNpemU6MTNweDt0b3A6MTMwcHg7bGVmdDotMTBweDt3aWR0aDoxNDBweDtiYWNrZ3JvdW5kOiNiZTI2MjY7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCNiZTI2MjYsI2E5MjIyMik7cGFkZGluZzouNWVtIDEuMmVtO2NvbG9yOiNmZmZ9LmRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1lcnJvci1tZXNzYWdlOmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTZweDtsZWZ0OjY0cHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItbGVmdDo2cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjZweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjZweCBzb2xpZCAjYmUyNjI2fScsXCJcIl0pfSxmdW5jdGlvbihlLHQsaSl7dD1lLmV4cG9ydHM9aSgxKSgpLHQuaShpKDMpLFwiXCIpLHQucHVzaChbZS5pZCxcIi52dWUtZHJvcHpvbmV7Ym9yZGVyOjJweCBzb2xpZCAjZTVlNWU1O2ZvbnQtZmFtaWx5OkFyaWFsLHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LjJweDtjb2xvcjojNzc3O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyfS52dWUtZHJvcHpvbmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjZmNmY2fS52dWUtZHJvcHpvbmUgaXtjb2xvcjojY2NjfS52dWUtZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWltYWdle2JvcmRlci1yYWRpdXM6MH0udnVlLWRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1pbWFnZTpob3ZlciBpbWd7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTstd2Via2l0LWZpbHRlcjpub25lfS52dWUtZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHN7Ym90dG9tOjA7dG9wOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzMsMTUwLDI0MywuOCk7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBsaW5lYXI7dGV4dC1hbGlnbjpsZWZ0fS52dWUtZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWRldGFpbHMgLmR6LWZpbGVuYW1lIHNwYW4sLnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotc2l6ZSBzcGFue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotZGV0YWlscyAuZHotZmlsZW5hbWU6bm90KDpob3Zlcikgc3Bhbntib3JkZXI6bm9uZX0udnVlLWRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1kZXRhaWxzIC5kei1maWxlbmFtZTpob3ZlciBzcGFue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmV9LnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotcHJvZ3Jlc3MgLmR6LXVwbG9hZHtiYWNrZ3JvdW5kOiNjY2N9LnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotcmVtb3Zle3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MzA7Y29sb3I6I2ZmZjttYXJnaW4tbGVmdDoxNXB4O3BhZGRpbmc6MTBweDt0b3A6aW5oZXJpdDtib3R0b206MTVweDtib3JkZXI6MnB4IHNvbGlkICNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTouOHJlbTtmb250LXdlaWdodDo4MDA7bGV0dGVyLXNwYWNpbmc6MS4xcHg7b3BhY2l0eTowfS52dWUtZHJvcHpvbmUgLmR6LXByZXZpZXc6aG92ZXIgLmR6LXJlbW92ZXtvcGFjaXR5OjF9LnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotZXJyb3ItbWFyaywudnVlLWRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1zdWNjZXNzLW1hcmt7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnQ7bWFyZ2luLXRvcDphdXRvIWltcG9ydGFudDt3aWR0aDoxMDAlIWltcG9ydGFudDt0b3A6MzUlIWltcG9ydGFudDtsZWZ0OjB9LnZ1ZS1kcm9wem9uZSAuZHotcHJldmlldyAuZHotZXJyb3ItbWFyayBpLC52dWUtZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LXN1Y2Nlc3MtbWFyayBpe2NvbG9yOiNmZmYhaW1wb3J0YW50O2ZvbnQtc2l6ZTo1cmVtIWltcG9ydGFudH0udnVlLWRyb3B6b25lIC5kei1wcmV2aWV3IC5kei1lcnJvci1tZXNzYWdle3RvcDo3NSU7bGVmdDoxNSV9XCIsXCJcIl0pfSxmdW5jdGlvbihlLHQsaSl7KGZ1bmN0aW9uKGUpeyhmdW5jdGlvbigpe3ZhciB0LGksbixvLHIscyxhLGwsZCxwPVtdLnNsaWNlLHU9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBpKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfWZvcih2YXIgbiBpbiB0KWMuY2FsbCh0LG4pJiYoZVtuXT10W25dKTtyZXR1cm4gaS5wcm90b3R5cGU9dC5wcm90b3R5cGUsZS5wcm90b3R5cGU9bmV3IGksZS5fX3N1cGVyX189dC5wcm90b3R5cGUsZX0sYz17fS5oYXNPd25Qcm9wZXJ0eTtsPWZ1bmN0aW9uKCl7fSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe31yZXR1cm4gZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1lLnByb3RvdHlwZS5vbixlLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9jYWxsYmFja3M9dGhpcy5fY2FsbGJhY2tzfHx7fSx0aGlzLl9jYWxsYmFja3NbZV18fCh0aGlzLl9jYWxsYmFja3NbZV09W10pLHRoaXMuX2NhbGxiYWNrc1tlXS5wdXNoKHQpLHRoaXN9LGUucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oKXt2YXIgZSx0LGksbixvLHI7aWYobj1hcmd1bWVudHNbMF0sZT0yPD1hcmd1bWVudHMubGVuZ3RoP3AuY2FsbChhcmd1bWVudHMsMSk6W10sdGhpcy5fY2FsbGJhY2tzPXRoaXMuX2NhbGxiYWNrc3x8e30saT10aGlzLl9jYWxsYmFja3Nbbl0pZm9yKG89MCxyPWkubGVuZ3RoO288cjtvKyspdD1pW29dLHQuYXBwbHkodGhpcyxlKTtyZXR1cm4gdGhpc30sZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZS5wcm90b3R5cGUub2ZmLGUucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycz1lLnByb3RvdHlwZS5vZmYsZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1lLnByb3RvdHlwZS5vZmYsZS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIGksbixvLHIscztpZighdGhpcy5fY2FsbGJhY2tzfHwwPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5fY2FsbGJhY2tzPXt9LHRoaXM7aWYobj10aGlzLl9jYWxsYmFja3NbZV0sIW4pcmV0dXJuIHRoaXM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZV0sdGhpcztmb3Iobz1yPTAscz1uLmxlbmd0aDtyPHM7bz0rK3IpaWYoaT1uW29dLGk9PT10KXtuLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiB0aGlzfSxlfSgpLHQ9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLGkpe3ZhciBuLHIscztpZih0aGlzLmVsZW1lbnQ9ZSx0aGlzLnZlcnNpb249dC52ZXJzaW9uLHRoaXMuZGVmYXVsdE9wdGlvbnMucHJldmlld1RlbXBsYXRlPXRoaXMuZGVmYXVsdE9wdGlvbnMucHJldmlld1RlbXBsYXRlLnJlcGxhY2UoL1xcbiovZyxcIlwiKSx0aGlzLmNsaWNrYWJsZUVsZW1lbnRzPVtdLHRoaXMubGlzdGVuZXJzPVtdLHRoaXMuZmlsZXM9W10sXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuZWxlbWVudCYmKHRoaXMuZWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWxlbWVudCkpLCF0aGlzLmVsZW1lbnR8fG51bGw9PXRoaXMuZWxlbWVudC5ub2RlVHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRyb3B6b25lIGVsZW1lbnQuXCIpO2lmKHRoaXMuZWxlbWVudC5kcm9wem9uZSl0aHJvdyBuZXcgRXJyb3IoXCJEcm9wem9uZSBhbHJlYWR5IGF0dGFjaGVkLlwiKTtpZih0Lmluc3RhbmNlcy5wdXNoKHRoaXMpLHRoaXMuZWxlbWVudC5kcm9wem9uZT10aGlzLG49bnVsbCE9KHM9dC5vcHRpb25zRm9yRWxlbWVudCh0aGlzLmVsZW1lbnQpKT9zOnt9LHRoaXMub3B0aW9ucz1vKHt9LHRoaXMuZGVmYXVsdE9wdGlvbnMsbixudWxsIT1pP2k6e30pLHRoaXMub3B0aW9ucy5mb3JjZUZhbGxiYWNrfHwhdC5pc0Jyb3dzZXJTdXBwb3J0ZWQoKSlyZXR1cm4gdGhpcy5vcHRpb25zLmZhbGxiYWNrLmNhbGwodGhpcyk7aWYobnVsbD09dGhpcy5vcHRpb25zLnVybCYmKHRoaXMub3B0aW9ucy51cmw9dGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSksIXRoaXMub3B0aW9ucy51cmwpdGhyb3cgbmV3IEVycm9yKFwiTm8gVVJMIHByb3ZpZGVkLlwiKTtpZih0aGlzLm9wdGlvbnMuYWNjZXB0ZWRGaWxlcyYmdGhpcy5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzKXRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBwcm92aWRlIGJvdGggJ2FjY2VwdGVkRmlsZXMnIGFuZCAnYWNjZXB0ZWRNaW1lVHlwZXMnLiAnYWNjZXB0ZWRNaW1lVHlwZXMnIGlzIGRlcHJlY2F0ZWQuXCIpO3RoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcyYmKHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzPXRoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcyxkZWxldGUgdGhpcy5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzKSxudWxsIT10aGlzLm9wdGlvbnMucmVuYW1lRmlsZW5hbWUmJih0aGlzLm9wdGlvbnMucmVuYW1lRmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUub3B0aW9ucy5yZW5hbWVGaWxlbmFtZS5jYWxsKGUsdC5uYW1lLHQpfX0odGhpcykpLHRoaXMub3B0aW9ucy5tZXRob2Q9dGhpcy5vcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpLChyPXRoaXMuZ2V0RXhpc3RpbmdGYWxsYmFjaygpKSYmci5wYXJlbnROb2RlJiZyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQociksdGhpcy5vcHRpb25zLnByZXZpZXdzQ29udGFpbmVyIT09ITEmJih0aGlzLm9wdGlvbnMucHJldmlld3NDb250YWluZXI/dGhpcy5wcmV2aWV3c0NvbnRhaW5lcj10LmdldEVsZW1lbnQodGhpcy5vcHRpb25zLnByZXZpZXdzQ29udGFpbmVyLFwicHJldmlld3NDb250YWluZXJcIik6dGhpcy5wcmV2aWV3c0NvbnRhaW5lcj10aGlzLmVsZW1lbnQpLHRoaXMub3B0aW9ucy5jbGlja2FibGUmJih0aGlzLm9wdGlvbnMuY2xpY2thYmxlPT09ITA/dGhpcy5jbGlja2FibGVFbGVtZW50cz1bdGhpcy5lbGVtZW50XTp0aGlzLmNsaWNrYWJsZUVsZW1lbnRzPXQuZ2V0RWxlbWVudHModGhpcy5vcHRpb25zLmNsaWNrYWJsZSxcImNsaWNrYWJsZVwiKSksdGhpcy5pbml0KCl9dmFyIG8scjtyZXR1cm4gdSh0LGUpLHQucHJvdG90eXBlLkVtaXR0ZXI9aSx0LnByb3RvdHlwZS5ldmVudHM9W1wiZHJvcFwiLFwiZHJhZ3N0YXJ0XCIsXCJkcmFnZW5kXCIsXCJkcmFnZW50ZXJcIixcImRyYWdvdmVyXCIsXCJkcmFnbGVhdmVcIixcImFkZGVkZmlsZVwiLFwiYWRkZWRmaWxlc1wiLFwicmVtb3ZlZGZpbGVcIixcInRodW1ibmFpbFwiLFwiZXJyb3JcIixcImVycm9ybXVsdGlwbGVcIixcInByb2Nlc3NpbmdcIixcInByb2Nlc3NpbmdtdWx0aXBsZVwiLFwidXBsb2FkcHJvZ3Jlc3NcIixcInRvdGFsdXBsb2FkcHJvZ3Jlc3NcIixcInNlbmRpbmdcIixcInNlbmRpbmdtdWx0aXBsZVwiLFwic3VjY2Vzc1wiLFwic3VjY2Vzc211bHRpcGxlXCIsXCJjYW5jZWxlZFwiLFwiY2FuY2VsZWRtdWx0aXBsZVwiLFwiY29tcGxldGVcIixcImNvbXBsZXRlbXVsdGlwbGVcIixcInJlc2V0XCIsXCJtYXhmaWxlc2V4Y2VlZGVkXCIsXCJtYXhmaWxlc3JlYWNoZWRcIixcInF1ZXVlY29tcGxldGVcIl0sdC5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnM9e3VybDpudWxsLG1ldGhvZDpcInBvc3RcIix3aXRoQ3JlZGVudGlhbHM6ITEsdGltZW91dDozZTQscGFyYWxsZWxVcGxvYWRzOjIsdXBsb2FkTXVsdGlwbGU6ITEsbWF4RmlsZXNpemU6MjU2LHBhcmFtTmFtZTpcImZpbGVcIixjcmVhdGVJbWFnZVRodW1ibmFpbHM6ITAsbWF4VGh1bWJuYWlsRmlsZXNpemU6MTAsdGh1bWJuYWlsV2lkdGg6MTIwLHRodW1ibmFpbEhlaWdodDoxMjAsdGh1bWJuYWlsTWV0aG9kOlwiY3JvcFwiLHJlc2l6ZVdpZHRoOm51bGwscmVzaXplSGVpZ2h0Om51bGwscmVzaXplTWltZVR5cGU6bnVsbCxyZXNpemVRdWFsaXR5Oi44LHJlc2l6ZU1ldGhvZDpcImNvbnRhaW5cIixmaWxlc2l6ZUJhc2U6MWUzLG1heEZpbGVzOm51bGwscGFyYW1zOnt9LGhlYWRlcnM6bnVsbCxjbGlja2FibGU6ITAsaWdub3JlSGlkZGVuRmlsZXM6ITAsYWNjZXB0ZWRGaWxlczpudWxsLGFjY2VwdGVkTWltZVR5cGVzOm51bGwsYXV0b1Byb2Nlc3NRdWV1ZTohMCxhdXRvUXVldWU6ITAsYWRkUmVtb3ZlTGlua3M6ITEscHJldmlld3NDb250YWluZXI6bnVsbCxoaWRkZW5JbnB1dENvbnRhaW5lcjpcImJvZHlcIixjYXB0dXJlOm51bGwscmVuYW1lRmlsZW5hbWU6bnVsbCxyZW5hbWVGaWxlOm51bGwsZm9yY2VGYWxsYmFjazohMSxkaWN0RGVmYXVsdE1lc3NhZ2U6XCJEcm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkXCIsZGljdEZhbGxiYWNrTWVzc2FnZTpcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGRyYWcnbidkcm9wIGZpbGUgdXBsb2Fkcy5cIixkaWN0RmFsbGJhY2tUZXh0OlwiUGxlYXNlIHVzZSB0aGUgZmFsbGJhY2sgZm9ybSBiZWxvdyB0byB1cGxvYWQgeW91ciBmaWxlcyBsaWtlIGluIHRoZSBvbGRlbiBkYXlzLlwiLGRpY3RGaWxlVG9vQmlnOlwiRmlsZSBpcyB0b28gYmlnICh7e2ZpbGVzaXplfX1NaUIpLiBNYXggZmlsZXNpemU6IHt7bWF4RmlsZXNpemV9fU1pQi5cIixkaWN0SW52YWxpZEZpbGVUeXBlOlwiWW91IGNhbid0IHVwbG9hZCBmaWxlcyBvZiB0aGlzIHR5cGUuXCIsZGljdFJlc3BvbnNlRXJyb3I6XCJTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge3tzdGF0dXNDb2RlfX0gY29kZS5cIixkaWN0Q2FuY2VsVXBsb2FkOlwiQ2FuY2VsIHVwbG9hZFwiLGRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb246XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgdXBsb2FkP1wiLGRpY3RSZW1vdmVGaWxlOlwiUmVtb3ZlIGZpbGVcIixkaWN0UmVtb3ZlRmlsZUNvbmZpcm1hdGlvbjpudWxsLGRpY3RNYXhGaWxlc0V4Y2VlZGVkOlwiWW91IGNhbiBub3QgdXBsb2FkIGFueSBtb3JlIGZpbGVzLlwiLGRpY3RGaWxlU2l6ZVVuaXRzOnt0YjpcIlRCXCIsZ2I6XCJHQlwiLG1iOlwiTUJcIixrYjpcIktCXCIsYjpcImJcIn0saW5pdDpmdW5jdGlvbigpe3JldHVybiBsfSxhY2NlcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCgpfSxmYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlLGksbixvLHIscztmb3IodGhpcy5lbGVtZW50LmNsYXNzTmFtZT10aGlzLmVsZW1lbnQuY2xhc3NOYW1lK1wiIGR6LWJyb3dzZXItbm90LXN1cHBvcnRlZFwiLHI9dGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLGk9MCxuPXIubGVuZ3RoO2k8bjtpKyspZT1yW2ldLC8oXnwgKWR6LW1lc3NhZ2UoJHwgKS8udGVzdChlLmNsYXNzTmFtZSkmJihvPWUsZS5jbGFzc05hbWU9XCJkei1tZXNzYWdlXCIpO3JldHVybiBvfHwobz10LmNyZWF0ZUVsZW1lbnQoJzxkaXYgY2xhc3M9XCJkei1tZXNzYWdlXCI+PHNwYW4+PC9zcGFuPjwvZGl2PicpLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvKSkscz1vLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKVswXSxzJiYobnVsbCE9cy50ZXh0Q29udGVudD9zLnRleHRDb250ZW50PXRoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tNZXNzYWdlOm51bGwhPXMuaW5uZXJUZXh0JiYocy5pbm5lclRleHQ9dGhpcy5vcHRpb25zLmRpY3RGYWxsYmFja01lc3NhZ2UpKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRGYWxsYmFja0Zvcm0oKSl9LHJlc2l6ZTpmdW5jdGlvbihlLHQsaSxuKXt2YXIgbyxyLHM7aWYobz17c3JjWDowLHNyY1k6MCxzcmNXaWR0aDplLndpZHRoLHNyY0hlaWdodDplLmhlaWdodH0scj1lLndpZHRoL2UuaGVpZ2h0LG51bGw9PXQmJm51bGw9PWk/KHQ9by5zcmNXaWR0aCxpPW8uc3JjSGVpZ2h0KTpudWxsPT10P3Q9aSpyOm51bGw9PWkmJihpPXQvciksdD1NYXRoLm1pbih0LG8uc3JjV2lkdGgpLGk9TWF0aC5taW4oaSxvLnNyY0hlaWdodCkscz10L2ksby5zcmNXaWR0aD50fHxvLnNyY0hlaWdodD5pKWlmKFwiY3JvcFwiPT09bilyPnM/KG8uc3JjSGVpZ2h0PWUuaGVpZ2h0LG8uc3JjV2lkdGg9by5zcmNIZWlnaHQqcyk6KG8uc3JjV2lkdGg9ZS53aWR0aCxvLnNyY0hlaWdodD1vLnNyY1dpZHRoL3MpO2Vsc2V7aWYoXCJjb250YWluXCIhPT1uKXRocm93IG5ldyBFcnJvcihcIlVua25vd24gcmVzaXplTWV0aG9kICdcIituK1wiJ1wiKTtyPnM/aT10L3I6dD1pKnJ9cmV0dXJuIG8uc3JjWD0oZS53aWR0aC1vLnNyY1dpZHRoKS8yLG8uc3JjWT0oZS5oZWlnaHQtby5zcmNIZWlnaHQpLzIsby50cmdXaWR0aD10LG8udHJnSGVpZ2h0PWksb30sdHJhbnNmb3JtRmlsZTpmdW5jdGlvbihlLHQpe3JldHVybih0aGlzLm9wdGlvbnMucmVzaXplV2lkdGh8fHRoaXMub3B0aW9ucy5yZXNpemVIZWlnaHQpJiZlLnR5cGUubWF0Y2goL2ltYWdlLiovKT90aGlzLnJlc2l6ZUltYWdlKGUsdGhpcy5vcHRpb25zLnJlc2l6ZVdpZHRoLHRoaXMub3B0aW9ucy5yZXNpemVIZWlnaHQsdGhpcy5vcHRpb25zLnJlc2l6ZU1ldGhvZCx0KTp0KGUpfSxwcmV2aWV3VGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJkei1wcmV2aWV3IGR6LWZpbGUtcHJldmlld1wiPlxcbiAgPGRpdiBjbGFzcz1cImR6LWltYWdlXCI+PGltZyBkYXRhLWR6LXRodW1ibmFpbCAvPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImR6LWRldGFpbHNcIj5cXG4gICAgPGRpdiBjbGFzcz1cImR6LXNpemVcIj48c3BhbiBkYXRhLWR6LXNpemU+PC9zcGFuPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiZHotZmlsZW5hbWVcIj48c3BhbiBkYXRhLWR6LW5hbWU+PC9zcGFuPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotcHJvZ3Jlc3NcIj48c3BhbiBjbGFzcz1cImR6LXVwbG9hZFwiIGRhdGEtZHotdXBsb2FkcHJvZ3Jlc3M+PC9zcGFuPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImR6LWVycm9yLW1lc3NhZ2VcIj48c3BhbiBkYXRhLWR6LWVycm9ybWVzc2FnZT48L3NwYW4+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotc3VjY2Vzcy1tYXJrXCI+XFxuICAgIDxzdmcgd2lkdGg9XCI1NHB4XCIgaGVpZ2h0PVwiNTRweFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhtbG5zOnNrZXRjaD1cImh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9uc1wiPlxcbiAgICAgIDx0aXRsZT5DaGVjazwvdGl0bGU+XFxuICAgICAgPGRlZnM+PC9kZWZzPlxcbiAgICAgIDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBza2V0Y2g6dHlwZT1cIk1TUGFnZVwiPlxcbiAgICAgICAgPHBhdGggZD1cIk0yMy41LDMxLjg0MzE0NTggTDE3LjU4NTI0MTksMjUuOTI4Mzg3NyBDMTYuMDI0ODI1MywyNC4zNjc5NzExIDEzLjQ5MTAyOTQsMjQuMzY2ODM1IDExLjkyODkzMjIsMjUuOTI4OTMyMiBDMTAuMzcwMDEzNiwyNy40ODc4NTA4IDEwLjM2NjU5MTIsMzAuMDIzNDQ1NSAxMS45MjgzODc3LDMxLjU4NTI0MTkgTDIwLjQxNDc1ODEsNDAuMDcxNjEyMyBDMjAuNTEzMzk5OSw0MC4xNzAyNTQxIDIwLjYxNTkzMTUsNDAuMjYyNjY0OSAyMC43MjE4NjE1LDQwLjM0ODg0MzUgQzIyLjI4MzU2NjksNDEuODcyNTY1MSAyNC43OTQyMzQsNDEuODYyNjIwMiAyNi4zNDYxNTY0LDQwLjMxMDY5NzggTDQzLjMxMDY5NzgsMjMuMzQ2MTU2NCBDNDQuODc3MTAyMSwyMS43Nzk3NTIxIDQ0Ljg3NTgwNTcsMTkuMjQ4Mzg4NyA0My4zMTM3MDg1LDE3LjY4NjI5MTUgQzQxLjc1NDc4OTksMTYuMTI3MzcyOSAzOS4yMTc2MDM1LDE2LjEyNTU0MjIgMzcuNjUzODQzNiwxNy42ODkzMDIyIEwyMy41LDMxLjg0MzE0NTggWiBNMjcsNTMgQzQxLjM1OTQwMzUsNTMgNTMsNDEuMzU5NDAzNSA1MywyNyBDNTMsMTIuNjQwNTk2NSA0MS4zNTk0MDM1LDEgMjcsMSBDMTIuNjQwNTk2NSwxIDEsMTIuNjQwNTk2NSAxLDI3IEMxLDQxLjM1OTQwMzUgMTIuNjQwNTk2NSw1MyAyNyw1MyBaXCIgaWQ9XCJPdmFsLTJcIiBzdHJva2Utb3BhY2l0eT1cIjAuMTk4Nzk0MTU4XCIgc3Ryb2tlPVwiIzc0NzQ3NFwiIGZpbGwtb3BhY2l0eT1cIjAuODE2NTE5NDc1XCIgZmlsbD1cIiNGRkZGRkZcIiBza2V0Y2g6dHlwZT1cIk1TU2hhcGVHcm91cFwiPjwvcGF0aD5cXG4gICAgICA8L2c+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZHotZXJyb3ItbWFya1wiPlxcbiAgICA8c3ZnIHdpZHRoPVwiNTRweFwiIGhlaWdodD1cIjU0cHhcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWxuczpza2V0Y2g9XCJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnNcIj5cXG4gICAgICA8dGl0bGU+RXJyb3I8L3RpdGxlPlxcbiAgICAgIDxkZWZzPjwvZGVmcz5cXG4gICAgICA8ZyBpZD1cIlBhZ2UtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc2tldGNoOnR5cGU9XCJNU1BhZ2VcIj5cXG4gICAgICAgIDxnIGlkPVwiQ2hlY2stKy1PdmFsLTJcIiBza2V0Y2g6dHlwZT1cIk1TTGF5ZXJHcm91cFwiIHN0cm9rZT1cIiM3NDc0NzRcIiBzdHJva2Utb3BhY2l0eT1cIjAuMTk4Nzk0MTU4XCIgZmlsbD1cIiNGRkZGRkZcIiBmaWxsLW9wYWNpdHk9XCIwLjgxNjUxOTQ3NVwiPlxcbiAgICAgICAgICA8cGF0aCBkPVwiTTMyLjY1Njg1NDIsMjkgTDM4LjMxMDY5NzgsMjMuMzQ2MTU2NCBDMzkuODc3MTAyMSwyMS43Nzk3NTIxIDM5Ljg3NTgwNTcsMTkuMjQ4Mzg4NyAzOC4zMTM3MDg1LDE3LjY4NjI5MTUgQzM2Ljc1NDc4OTksMTYuMTI3MzcyOSAzNC4yMTc2MDM1LDE2LjEyNTU0MjIgMzIuNjUzODQzNiwxNy42ODkzMDIyIEwyNywyMy4zNDMxNDU4IEwyMS4zNDYxNTY0LDE3LjY4OTMwMjIgQzE5Ljc4MjM5NjUsMTYuMTI1NTQyMiAxNy4yNDUyMTAxLDE2LjEyNzM3MjkgMTUuNjg2MjkxNSwxNy42ODYyOTE1IEMxNC4xMjQxOTQzLDE5LjI0ODM4ODcgMTQuMTIyODk3OSwyMS43Nzk3NTIxIDE1LjY4OTMwMjIsMjMuMzQ2MTU2NCBMMjEuMzQzMTQ1OCwyOSBMMTUuNjg5MzAyMiwzNC42NTM4NDM2IEMxNC4xMjI4OTc5LDM2LjIyMDI0NzkgMTQuMTI0MTk0MywzOC43NTE2MTEzIDE1LjY4NjI5MTUsNDAuMzEzNzA4NSBDMTcuMjQ1MjEwMSw0MS44NzI2MjcxIDE5Ljc4MjM5NjUsNDEuODc0NDU3OCAyMS4zNDYxNTY0LDQwLjMxMDY5NzggTDI3LDM0LjY1Njg1NDIgTDMyLjY1Mzg0MzYsNDAuMzEwNjk3OCBDMzQuMjE3NjAzNSw0MS44NzQ0NTc4IDM2Ljc1NDc4OTksNDEuODcyNjI3MSAzOC4zMTM3MDg1LDQwLjMxMzcwODUgQzM5Ljg3NTgwNTcsMzguNzUxNjExMyAzOS44NzcxMDIxLDM2LjIyMDI0NzkgMzguMzEwNjk3OCwzNC42NTM4NDM2IEwzMi42NTY4NTQyLDI5IFogTTI3LDUzIEM0MS4zNTk0MDM1LDUzIDUzLDQxLjM1OTQwMzUgNTMsMjcgQzUzLDEyLjY0MDU5NjUgNDEuMzU5NDAzNSwxIDI3LDEgQzEyLjY0MDU5NjUsMSAxLDEyLjY0MDU5NjUgMSwyNyBDMSw0MS4zNTk0MDM1IDEyLjY0MDU5NjUsNTMgMjcsNTMgWlwiIGlkPVwiT3ZhbC0yXCIgc2tldGNoOnR5cGU9XCJNU1NoYXBlR3JvdXBcIj48L3BhdGg+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9nPlxcbiAgICA8L3N2Zz5cXG4gIDwvZGl2PlxcbjwvZGl2PicsZHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1kcmFnLWhvdmVyXCIpfSxkcmFnc3RhcnQ6bCxkcmFnZW5kOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWRyYWctaG92ZXJcIil9LGRyYWdlbnRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1kcmFnLWhvdmVyXCIpfSxkcmFnb3ZlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1kcmFnLWhvdmVyXCIpfSxkcmFnbGVhdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotZHJhZy1ob3ZlclwiKX0scGFzdGU6bCxyZXNldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LXN0YXJ0ZWRcIil9LGFkZGVkZmlsZTpmdW5jdGlvbihlKXt2YXIgaSxuLG8scixzLGEsbCxkLHAsdSxjLGgsZjtpZih0aGlzLmVsZW1lbnQ9PT10aGlzLnByZXZpZXdzQ29udGFpbmVyJiZ0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXN0YXJ0ZWRcIiksdGhpcy5wcmV2aWV3c0NvbnRhaW5lcil7Zm9yKGUucHJldmlld0VsZW1lbnQ9dC5jcmVhdGVFbGVtZW50KHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUudHJpbSgpKSxlLnByZXZpZXdUZW1wbGF0ZT1lLnByZXZpZXdFbGVtZW50LHRoaXMucHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZS5wcmV2aWV3RWxlbWVudCksZD1lLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei1uYW1lXVwiKSxpPTAscj1kLmxlbmd0aDtpPHI7aSsrKWw9ZFtpXSxsLnRleHRDb250ZW50PWUubmFtZTtmb3IocD1lLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei1zaXplXVwiKSxuPTAscz1wLmxlbmd0aDtuPHM7bisrKWw9cFtuXSxsLmlubmVySFRNTD10aGlzLmZpbGVzaXplKGUuc2l6ZSk7Zm9yKHRoaXMub3B0aW9ucy5hZGRSZW1vdmVMaW5rcyYmKGUuX3JlbW92ZUxpbms9dC5jcmVhdGVFbGVtZW50KCc8YSBjbGFzcz1cImR6LXJlbW92ZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnVuZGVmaW5lZDtcIiBkYXRhLWR6LXJlbW92ZT4nK3RoaXMub3B0aW9ucy5kaWN0UmVtb3ZlRmlsZStcIjwvYT5cIiksZS5wcmV2aWV3RWxlbWVudC5hcHBlbmRDaGlsZChlLl9yZW1vdmVMaW5rKSksYz1mdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG4ucHJldmVudERlZmF1bHQoKSxuLnN0b3BQcm9wYWdhdGlvbigpLGUuc3RhdHVzPT09dC5VUExPQURJTkc/dC5jb25maXJtKGkub3B0aW9ucy5kaWN0Q2FuY2VsVXBsb2FkQ29uZmlybWF0aW9uLGZ1bmN0aW9uKCl7cmV0dXJuIGkucmVtb3ZlRmlsZShlKX0pOmkub3B0aW9ucy5kaWN0UmVtb3ZlRmlsZUNvbmZpcm1hdGlvbj90LmNvbmZpcm0oaS5vcHRpb25zLmRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uLGZ1bmN0aW9uKCl7cmV0dXJuIGkucmVtb3ZlRmlsZShlKX0pOmkucmVtb3ZlRmlsZShlKX19KHRoaXMpLHU9ZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHotcmVtb3ZlXVwiKSxmPVtdLG89MCxhPXUubGVuZ3RoO288YTtvKyspaD11W29dLGYucHVzaChoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGMpKTtyZXR1cm4gZn19LHJlbW92ZWRmaWxlOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBlLnByZXZpZXdFbGVtZW50JiZudWxsIT0odD1lLnByZXZpZXdFbGVtZW50KSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUucHJldmlld0VsZW1lbnQpLHRoaXMuX3VwZGF0ZU1heEZpbGVzUmVhY2hlZENsYXNzKCl9LHRodW1ibmFpbDpmdW5jdGlvbihlLHQpe3ZhciBpLG4sbyxyO2lmKGUucHJldmlld0VsZW1lbnQpe2ZvcihlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1maWxlLXByZXZpZXdcIiksbz1lLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei10aHVtYm5haWxdXCIpLGk9MCxuPW8ubGVuZ3RoO2k8bjtpKyspcj1vW2ldLHIuYWx0PWUubmFtZSxyLnNyYz10O3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1pbWFnZS1wcmV2aWV3XCIpfX0odGhpcyksMSl9fSxlcnJvcjpmdW5jdGlvbihlLHQpe3ZhciBpLG4sbyxyLHM7aWYoZS5wcmV2aWV3RWxlbWVudCl7Zm9yKGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWVycm9yXCIpLFwiU3RyaW5nXCIhPXR5cGVvZiB0JiZ0LmVycm9yJiYodD10LmVycm9yKSxyPWUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LWVycm9ybWVzc2FnZV1cIikscz1bXSxpPTAsbj1yLmxlbmd0aDtpPG47aSsrKW89cltpXSxzLnB1c2goby50ZXh0Q29udGVudD10KTtyZXR1cm4gc319LGVycm9ybXVsdGlwbGU6bCxwcm9jZXNzaW5nOmZ1bmN0aW9uKGUpe2lmKGUucHJldmlld0VsZW1lbnQmJihlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1wcm9jZXNzaW5nXCIpLGUuX3JlbW92ZUxpbmspKXJldHVybiBlLl9yZW1vdmVMaW5rLnRleHRDb250ZW50PXRoaXMub3B0aW9ucy5kaWN0Q2FuY2VsVXBsb2FkfSxwcm9jZXNzaW5nbXVsdGlwbGU6bCx1cGxvYWRwcm9ncmVzczpmdW5jdGlvbihlLHQsaSl7dmFyIG4sbyxyLHMsYTtpZihlLnByZXZpZXdFbGVtZW50KXtmb3Iocz1lLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei11cGxvYWRwcm9ncmVzc11cIiksYT1bXSxuPTAsbz1zLmxlbmd0aDtuPG87bisrKXI9c1tuXSxcIlBST0dSRVNTXCI9PT1yLm5vZGVOYW1lP2EucHVzaChyLnZhbHVlPXQpOmEucHVzaChyLnN0eWxlLndpZHRoPXQrXCIlXCIpO3JldHVybiBhfX0sdG90YWx1cGxvYWRwcm9ncmVzczpsLHNlbmRpbmc6bCxzZW5kaW5nbXVsdGlwbGU6bCxzdWNjZXNzOmZ1bmN0aW9uKGUpe2lmKGUucHJldmlld0VsZW1lbnQpcmV0dXJuIGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXN1Y2Nlc3NcIil9LHN1Y2Nlc3NtdWx0aXBsZTpsLGNhbmNlbGVkOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVtaXQoXCJlcnJvclwiLGUsXCJVcGxvYWQgY2FuY2VsZWQuXCIpfSxjYW5jZWxlZG11bHRpcGxlOmwsY29tcGxldGU6ZnVuY3Rpb24oZSl7aWYoZS5fcmVtb3ZlTGluayYmKGUuX3JlbW92ZUxpbmsudGV4dENvbnRlbnQ9dGhpcy5vcHRpb25zLmRpY3RSZW1vdmVGaWxlKSxlLnByZXZpZXdFbGVtZW50KXJldHVybiBlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1jb21wbGV0ZVwiKX0sY29tcGxldGVtdWx0aXBsZTpsLG1heGZpbGVzZXhjZWVkZWQ6bCxtYXhmaWxlc3JlYWNoZWQ6bCxxdWV1ZWNvbXBsZXRlOmwsYWRkZWRmaWxlczpsfSxvPWZ1bmN0aW9uKCl7dmFyIGUsdCxpLG4sbyxyLHM7Zm9yKHI9YXJndW1lbnRzWzBdLG89Mjw9YXJndW1lbnRzLmxlbmd0aD9wLmNhbGwoYXJndW1lbnRzLDEpOltdLGU9MCxpPW8ubGVuZ3RoO2U8aTtlKyspe249b1tlXTtmb3IodCBpbiBuKXM9blt0XSxyW3RdPXN9cmV0dXJuIHJ9LHQucHJvdG90eXBlLmdldEFjY2VwdGVkRmlsZXM9ZnVuY3Rpb24oKXt2YXIgZSx0LGksbixvO2ZvcihuPXRoaXMuZmlsZXMsbz1bXSx0PTAsaT1uLmxlbmd0aDt0PGk7dCsrKWU9blt0XSxlLmFjY2VwdGVkJiZvLnB1c2goZSk7cmV0dXJuIG99LHQucHJvdG90eXBlLmdldFJlamVjdGVkRmlsZXM9ZnVuY3Rpb24oKXt2YXIgZSx0LGksbixvO2ZvcihuPXRoaXMuZmlsZXMsbz1bXSx0PTAsaT1uLmxlbmd0aDt0PGk7dCsrKWU9blt0XSxlLmFjY2VwdGVkfHxvLnB1c2goZSk7cmV0dXJuIG99LHQucHJvdG90eXBlLmdldEZpbGVzV2l0aFN0YXR1cz1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyO2ZvcihvPXRoaXMuZmlsZXMscj1bXSxpPTAsbj1vLmxlbmd0aDtpPG47aSsrKXQ9b1tpXSx0LnN0YXR1cz09PWUmJnIucHVzaCh0KTtyZXR1cm4gcn0sdC5wcm90b3R5cGUuZ2V0UXVldWVkRmlsZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXModC5RVUVVRUQpfSx0LnByb3RvdHlwZS5nZXRVcGxvYWRpbmdGaWxlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEZpbGVzV2l0aFN0YXR1cyh0LlVQTE9BRElORyl9LHQucHJvdG90eXBlLmdldEFkZGVkRmlsZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXModC5BRERFRCl9LHQucHJvdG90eXBlLmdldEFjdGl2ZUZpbGVzPWZ1bmN0aW9uKCl7dmFyIGUsaSxuLG8scjtmb3Iobz10aGlzLmZpbGVzLHI9W10saT0wLG49by5sZW5ndGg7aTxuO2krKyllPW9baV0sZS5zdGF0dXMhPT10LlVQTE9BRElORyYmZS5zdGF0dXMhPT10LlFVRVVFRHx8ci5wdXNoKGUpO3JldHVybiByfSx0LnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIGUsaSxuLG8scixzLGE7Zm9yKFwiZm9ybVwiPT09dGhpcy5lbGVtZW50LnRhZ05hbWUmJnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wem9uZVwiKSYmIXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LW1lc3NhZ2VcIikmJnRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoJzxkaXYgY2xhc3M9XCJkei1kZWZhdWx0IGR6LW1lc3NhZ2VcIj48c3Bhbj4nK3RoaXMub3B0aW9ucy5kaWN0RGVmYXVsdE1lc3NhZ2UrXCI8L3NwYW4+PC9kaXY+XCIpKSx0aGlzLmNsaWNrYWJsZUVsZW1lbnRzLmxlbmd0aCYmKGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuaGlkZGVuRmlsZUlucHV0JiZlLmhpZGRlbkZpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUuaGlkZGVuRmlsZUlucHV0KSxlLmhpZGRlbkZpbGVJbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksZS5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZmlsZVwiKSwobnVsbD09ZS5vcHRpb25zLm1heEZpbGVzfHxlLm9wdGlvbnMubWF4RmlsZXM+MSkmJmUuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxlLmhpZGRlbkZpbGVJbnB1dC5jbGFzc05hbWU9XCJkei1oaWRkZW4taW5wdXRcIixudWxsIT1lLm9wdGlvbnMuYWNjZXB0ZWRGaWxlcyYmZS5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiYWNjZXB0XCIsZS5vcHRpb25zLmFjY2VwdGVkRmlsZXMpLG51bGwhPWUub3B0aW9ucy5jYXB0dXJlJiZlLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjYXB0dXJlXCIsZS5vcHRpb25zLmNhcHR1cmUpLGUuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIixlLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZS5oaWRkZW5GaWxlSW5wdXQuc3R5bGUudG9wPVwiMFwiLGUuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmxlZnQ9XCIwXCIsZS5oaWRkZW5GaWxlSW5wdXQuc3R5bGUuaGVpZ2h0PVwiMFwiLGUuaGlkZGVuRmlsZUlucHV0LnN0eWxlLndpZHRoPVwiMFwiLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5vcHRpb25zLmhpZGRlbklucHV0Q29udGFpbmVyKS5hcHBlbmRDaGlsZChlLmhpZGRlbkZpbGVJbnB1dCksZS5oaWRkZW5GaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIHQsaSxuLG87aWYoaT1lLmhpZGRlbkZpbGVJbnB1dC5maWxlcyxpLmxlbmd0aClmb3Iobj0wLG89aS5sZW5ndGg7bjxvO24rKyl0PWlbbl0sZS5hZGRGaWxlKHQpO3JldHVybiBlLmVtaXQoXCJhZGRlZGZpbGVzXCIsaSksYSgpfSl9fSh0aGlzKSkoKSx0aGlzLlVSTD1udWxsIT0ocj13aW5kb3cuVVJMKT9yOndpbmRvdy53ZWJraXRVUkwsXG5zPXRoaXMuZXZlbnRzLGk9MCxuPXMubGVuZ3RoO2k8bjtpKyspZT1zW2ldLHRoaXMub24oZSx0aGlzLm9wdGlvbnNbZV0pO3JldHVybiB0aGlzLm9uKFwidXBsb2FkcHJvZ3Jlc3NcIixmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS51cGRhdGVUb3RhbFVwbG9hZFByb2dyZXNzKCl9fSh0aGlzKSksdGhpcy5vbihcInJlbW92ZWRmaWxlXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUudXBkYXRlVG90YWxVcGxvYWRQcm9ncmVzcygpfX0odGhpcykpLHRoaXMub24oXCJjYW5jZWxlZFwiLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZS5lbWl0KFwiY29tcGxldGVcIix0KX19KHRoaXMpKSx0aGlzLm9uKFwiY29tcGxldGVcIixmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoMD09PWUuZ2V0QWRkZWRGaWxlcygpLmxlbmd0aCYmMD09PWUuZ2V0VXBsb2FkaW5nRmlsZXMoKS5sZW5ndGgmJjA9PT1lLmdldFF1ZXVlZEZpbGVzKCkubGVuZ3RoKXJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUuZW1pdChcInF1ZXVlY29tcGxldGVcIil9LDApfX0odGhpcykpLG89ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMX0sdGhpcy5saXN0ZW5lcnM9W3tlbGVtZW50OnRoaXMuZWxlbWVudCxldmVudHM6e2RyYWdzdGFydDpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGUuZW1pdChcImRyYWdzdGFydFwiLHQpfX0odGhpcyksZHJhZ2VudGVyOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbyh0KSxlLmVtaXQoXCJkcmFnZW50ZXJcIix0KX19KHRoaXMpLGRyYWdvdmVyOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgaTt0cnl7aT10LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkfWNhdGNoKGUpe31yZXR1cm4gdC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdD1cIm1vdmVcIj09PWl8fFwibGlua01vdmVcIj09PWk/XCJtb3ZlXCI6XCJjb3B5XCIsbyh0KSxlLmVtaXQoXCJkcmFnb3ZlclwiLHQpfX0odGhpcyksZHJhZ2xlYXZlOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZS5lbWl0KFwiZHJhZ2xlYXZlXCIsdCl9fSh0aGlzKSxkcm9wOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbyh0KSxlLmRyb3AodCl9fSh0aGlzKSxkcmFnZW5kOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZS5lbWl0KFwiZHJhZ2VuZFwiLHQpfX0odGhpcyl9fV0sdGhpcy5jbGlja2FibGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZS5saXN0ZW5lcnMucHVzaCh7ZWxlbWVudDppLGV2ZW50czp7Y2xpY2s6ZnVuY3Rpb24obil7cmV0dXJuKGkhPT1lLmVsZW1lbnR8fG4udGFyZ2V0PT09ZS5lbGVtZW50fHx0LmVsZW1lbnRJbnNpZGUobi50YXJnZXQsZS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotbWVzc2FnZVwiKSkpJiZlLmhpZGRlbkZpbGVJbnB1dC5jbGljaygpLCEwfX19KX19KHRoaXMpKSx0aGlzLmVuYWJsZSgpLHRoaXMub3B0aW9ucy5pbml0LmNhbGwodGhpcyl9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gdGhpcy5kaXNhYmxlKCksdGhpcy5yZW1vdmVBbGxGaWxlcyghMCksKG51bGwhPShlPXRoaXMuaGlkZGVuRmlsZUlucHV0KT9lLnBhcmVudE5vZGU6dm9pZCAwKSYmKHRoaXMuaGlkZGVuRmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpLHRoaXMuaGlkZGVuRmlsZUlucHV0PW51bGwpLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZHJvcHpvbmUsdC5pbnN0YW5jZXMuc3BsaWNlKHQuaW5zdGFuY2VzLmluZGV4T2YodGhpcyksMSl9LHQucHJvdG90eXBlLnVwZGF0ZVRvdGFsVXBsb2FkUHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgZSx0LGksbixvLHIscyxhO2lmKHM9MCxyPTAsZT10aGlzLmdldEFjdGl2ZUZpbGVzKCksZS5sZW5ndGgpe2ZvcihvPXRoaXMuZ2V0QWN0aXZlRmlsZXMoKSxpPTAsbj1vLmxlbmd0aDtpPG47aSsrKXQ9b1tpXSxzKz10LnVwbG9hZC5ieXRlc1NlbnQscis9dC51cGxvYWQudG90YWw7YT0xMDAqcy9yfWVsc2UgYT0xMDA7cmV0dXJuIHRoaXMuZW1pdChcInRvdGFsdXBsb2FkcHJvZ3Jlc3NcIixhLHIscyl9LHQucHJvdG90eXBlLl9nZXRQYXJhbU5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLnBhcmFtTmFtZT90aGlzLm9wdGlvbnMucGFyYW1OYW1lKGUpOlwiXCIrdGhpcy5vcHRpb25zLnBhcmFtTmFtZSsodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlP1wiW1wiK2UrXCJdXCI6XCJcIil9LHQucHJvdG90eXBlLl9yZW5hbWVGaWxlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMub3B0aW9ucy5yZW5hbWVGaWxlP2UubmFtZTp0aGlzLm9wdGlvbnMucmVuYW1lRmlsZShlKX0sdC5wcm90b3R5cGUuZ2V0RmFsbGJhY2tGb3JtPWZ1bmN0aW9uKCl7dmFyIGUsaSxuLG87cmV0dXJuKGU9dGhpcy5nZXRFeGlzdGluZ0ZhbGxiYWNrKCkpP2U6KG49JzxkaXYgY2xhc3M9XCJkei1mYWxsYmFja1wiPicsdGhpcy5vcHRpb25zLmRpY3RGYWxsYmFja1RleHQmJihuKz1cIjxwPlwiK3RoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tUZXh0K1wiPC9wPlwiKSxuKz0nPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIicrdGhpcy5fZ2V0UGFyYW1OYW1lKDApKydcIiAnKyh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGU/J211bHRpcGxlPVwibXVsdGlwbGVcIic6dm9pZCAwKSsnIC8+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCFcIj48L2Rpdj4nLGk9dC5jcmVhdGVFbGVtZW50KG4pLFwiRk9STVwiIT09dGhpcy5lbGVtZW50LnRhZ05hbWU/KG89dC5jcmVhdGVFbGVtZW50KCc8Zm9ybSBhY3Rpb249XCInK3RoaXMub3B0aW9ucy51cmwrJ1wiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbWV0aG9kPVwiJyt0aGlzLm9wdGlvbnMubWV0aG9kKydcIj48L2Zvcm0+Jyksby5hcHBlbmRDaGlsZChpKSk6KHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIix0aGlzLm9wdGlvbnMubWV0aG9kKSksbnVsbCE9bz9vOmkpfSx0LnByb3RvdHlwZS5nZXRFeGlzdGluZ0ZhbGxiYWNrPWZ1bmN0aW9uKCl7dmFyIGUsdCxpLG4sbyxyO2Zvcih0PWZ1bmN0aW9uKGUpe3ZhciB0LGksbjtmb3IoaT0wLG49ZS5sZW5ndGg7aTxuO2krKylpZih0PWVbaV0sLyhefCApZmFsbGJhY2soJHwgKS8udGVzdCh0LmNsYXNzTmFtZSkpcmV0dXJuIHR9LG89W1wiZGl2XCIsXCJmb3JtXCJdLGk9MCxuPW8ubGVuZ3RoO2k8bjtpKyspaWYocj1vW2ldLGU9dCh0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocikpKXJldHVybiBlfSx0LnByb3RvdHlwZS5zZXR1cEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIGUsdCxpLG4sbyxyLHM7Zm9yKHI9dGhpcy5saXN0ZW5lcnMscz1bXSxpPTAsbj1yLmxlbmd0aDtpPG47aSsrKWU9cltpXSxzLnB1c2goZnVuY3Rpb24oKXt2YXIgaSxuO2k9ZS5ldmVudHMsbj1bXTtmb3IodCBpbiBpKW89aVt0XSxuLnB1c2goZS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxvLCExKSk7cmV0dXJuIG59KCkpO3JldHVybiBzfSx0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3ZhciBlLHQsaSxuLG8scixzO2ZvcihyPXRoaXMubGlzdGVuZXJzLHM9W10saT0wLG49ci5sZW5ndGg7aTxuO2krKyllPXJbaV0scy5wdXNoKGZ1bmN0aW9uKCl7dmFyIGksbjtpPWUuZXZlbnRzLG49W107Zm9yKHQgaW4gaSlvPWlbdF0sbi5wdXNoKGUuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHQsbywhMSkpO3JldHVybiBufSgpKTtyZXR1cm4gc30sdC5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3ZhciBlLHQsaSxuLG87Zm9yKHRoaXMuY2xpY2thYmxlRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHotY2xpY2thYmxlXCIpfSksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLG49dGhpcy5maWxlcyxvPVtdLHQ9MCxpPW4ubGVuZ3RoO3Q8aTt0KyspZT1uW3RdLG8ucHVzaCh0aGlzLmNhbmNlbFVwbG9hZChlKSk7cmV0dXJuIG99LHQucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNsaWNrYWJsZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZChcImR6LWNsaWNrYWJsZVwiKX0pLHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5maWxlc2l6ZT1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyLHMsYSxsO2lmKHI9MCxzPVwiYlwiLGU+MCl7Zm9yKGw9W1widGJcIixcImdiXCIsXCJtYlwiLFwia2JcIixcImJcIl0saT1uPTAsbz1sLmxlbmd0aDtuPG87aT0rK24paWYoYT1sW2ldLHQ9TWF0aC5wb3codGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSw0LWkpLzEwLGU+PXQpe3I9ZS9NYXRoLnBvdyh0aGlzLm9wdGlvbnMuZmlsZXNpemVCYXNlLDQtaSkscz1hO2JyZWFrfXI9TWF0aC5yb3VuZCgxMCpyKS8xMH1yZXR1cm5cIjxzdHJvbmc+XCIrcitcIjwvc3Ryb25nPiBcIit0aGlzLm9wdGlvbnMuZGljdEZpbGVTaXplVW5pdHNbc119LHQucHJvdG90eXBlLl91cGRhdGVNYXhGaWxlc1JlYWNoZWRDbGFzcz1mdW5jdGlvbigpe3JldHVybiBudWxsIT10aGlzLm9wdGlvbnMubWF4RmlsZXMmJnRoaXMuZ2V0QWNjZXB0ZWRGaWxlcygpLmxlbmd0aD49dGhpcy5vcHRpb25zLm1heEZpbGVzPyh0aGlzLmdldEFjY2VwdGVkRmlsZXMoKS5sZW5ndGg9PT10aGlzLm9wdGlvbnMubWF4RmlsZXMmJnRoaXMuZW1pdChcIm1heGZpbGVzcmVhY2hlZFwiLHRoaXMuZmlsZXMpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotbWF4LWZpbGVzLXJlYWNoZWRcIikpOnRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotbWF4LWZpbGVzLXJlYWNoZWRcIil9LHQucHJvdG90eXBlLmRyb3A9ZnVuY3Rpb24oZSl7dmFyIHQsaTtlLmRhdGFUcmFuc2ZlciYmKHRoaXMuZW1pdChcImRyb3BcIixlKSx0PWUuZGF0YVRyYW5zZmVyLmZpbGVzLHRoaXMuZW1pdChcImFkZGVkZmlsZXNcIix0KSx0Lmxlbmd0aCYmKGk9ZS5kYXRhVHJhbnNmZXIuaXRlbXMsaSYmaS5sZW5ndGgmJm51bGwhPWlbMF0ud2Via2l0R2V0QXNFbnRyeT90aGlzLl9hZGRGaWxlc0Zyb21JdGVtcyhpKTp0aGlzLmhhbmRsZUZpbGVzKHQpKSl9LHQucHJvdG90eXBlLnBhc3RlPWZ1bmN0aW9uKGUpe3ZhciB0LGk7aWYobnVsbCE9KG51bGwhPWUmJm51bGwhPShpPWUuY2xpcGJvYXJkRGF0YSk/aS5pdGVtczp2b2lkIDApKXJldHVybiB0aGlzLmVtaXQoXCJwYXN0ZVwiLGUpLHQ9ZS5jbGlwYm9hcmREYXRhLml0ZW1zLHQubGVuZ3RoP3RoaXMuX2FkZEZpbGVzRnJvbUl0ZW1zKHQpOnZvaWQgMH0sdC5wcm90b3R5cGUuaGFuZGxlRmlsZXM9ZnVuY3Rpb24oZSl7dmFyIHQsaSxuLG87Zm9yKG89W10saT0wLG49ZS5sZW5ndGg7aTxuO2krKyl0PWVbaV0sby5wdXNoKHRoaXMuYWRkRmlsZSh0KSk7cmV0dXJuIG99LHQucHJvdG90eXBlLl9hZGRGaWxlc0Zyb21JdGVtcz1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyO2ZvcihyPVtdLG49MCxvPWUubGVuZ3RoO248bztuKyspaT1lW25dLG51bGwhPWkud2Via2l0R2V0QXNFbnRyeSYmKHQ9aS53ZWJraXRHZXRBc0VudHJ5KCkpP3QuaXNGaWxlP3IucHVzaCh0aGlzLmFkZEZpbGUoaS5nZXRBc0ZpbGUoKSkpOnQuaXNEaXJlY3Rvcnk/ci5wdXNoKHRoaXMuX2FkZEZpbGVzRnJvbURpcmVjdG9yeSh0LHQubmFtZSkpOnIucHVzaCh2b2lkIDApOm51bGwhPWkuZ2V0QXNGaWxlJiYobnVsbD09aS5raW5kfHxcImZpbGVcIj09PWkua2luZCk/ci5wdXNoKHRoaXMuYWRkRmlsZShpLmdldEFzRmlsZSgpKSk6ci5wdXNoKHZvaWQgMCk7cmV0dXJuIHJ9LHQucHJvdG90eXBlLl9hZGRGaWxlc0Zyb21EaXJlY3Rvcnk9ZnVuY3Rpb24oZSx0KXt2YXIgaSxuLG87cmV0dXJuIGk9ZS5jcmVhdGVSZWFkZXIoKSxuPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZudWxsIT09Y29uc29sZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgY29uc29sZS5sb2c/Y29uc29sZS5sb2coZSk6dm9pZCAwfSwobz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gaS5yZWFkRW50cmllcyhmdW5jdGlvbihpKXt2YXIgbixyLHM7aWYoaS5sZW5ndGg+MCl7Zm9yKHI9MCxzPWkubGVuZ3RoO3I8cztyKyspbj1pW3JdLG4uaXNGaWxlP24uZmlsZShmdW5jdGlvbihpKXtpZighZS5vcHRpb25zLmlnbm9yZUhpZGRlbkZpbGVzfHxcIi5cIiE9PWkubmFtZS5zdWJzdHJpbmcoMCwxKSlyZXR1cm4gaS5mdWxsUGF0aD10K1wiL1wiK2kubmFtZSxlLmFkZEZpbGUoaSl9KTpuLmlzRGlyZWN0b3J5JiZlLl9hZGRGaWxlc0Zyb21EaXJlY3Rvcnkobix0K1wiL1wiK24ubmFtZSk7bygpfXJldHVybiBudWxsfSxuKX19KHRoaXMpKSgpfSx0LnByb3RvdHlwZS5hY2NlcHQ9ZnVuY3Rpb24oZSxpKXtyZXR1cm4gZS5zaXplPjEwMjQqdGhpcy5vcHRpb25zLm1heEZpbGVzaXplKjEwMjQ/aSh0aGlzLm9wdGlvbnMuZGljdEZpbGVUb29CaWcucmVwbGFjZShcInt7ZmlsZXNpemV9fVwiLE1hdGgucm91bmQoZS5zaXplLzEwMjQvMTAuMjQpLzEwMCkucmVwbGFjZShcInt7bWF4RmlsZXNpemV9fVwiLHRoaXMub3B0aW9ucy5tYXhGaWxlc2l6ZSkpOnQuaXNWYWxpZEZpbGUoZSx0aGlzLm9wdGlvbnMuYWNjZXB0ZWRGaWxlcyk/bnVsbCE9dGhpcy5vcHRpb25zLm1heEZpbGVzJiZ0aGlzLmdldEFjY2VwdGVkRmlsZXMoKS5sZW5ndGg+PXRoaXMub3B0aW9ucy5tYXhGaWxlcz8oaSh0aGlzLm9wdGlvbnMuZGljdE1heEZpbGVzRXhjZWVkZWQucmVwbGFjZShcInt7bWF4RmlsZXN9fVwiLHRoaXMub3B0aW9ucy5tYXhGaWxlcykpLHRoaXMuZW1pdChcIm1heGZpbGVzZXhjZWVkZWRcIixlKSk6dGhpcy5vcHRpb25zLmFjY2VwdC5jYWxsKHRoaXMsZSxpKTppKHRoaXMub3B0aW9ucy5kaWN0SW52YWxpZEZpbGVUeXBlKX0sdC5wcm90b3R5cGUuYWRkRmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gZS51cGxvYWQ9e3Byb2dyZXNzOjAsdG90YWw6ZS5zaXplLGJ5dGVzU2VudDowLGZpbGVuYW1lOnRoaXMuX3JlbmFtZUZpbGUoZSl9LHRoaXMuZmlsZXMucHVzaChlKSxlLnN0YXR1cz10LkFEREVELHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLGUpLHRoaXMuX2VucXVldWVUaHVtYm5haWwoZSksdGhpcy5hY2NlcHQoZSxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIGk/KGUuYWNjZXB0ZWQ9ITEsdC5fZXJyb3JQcm9jZXNzaW5nKFtlXSxpKSk6KGUuYWNjZXB0ZWQ9ITAsdC5vcHRpb25zLmF1dG9RdWV1ZSYmdC5lbnF1ZXVlRmlsZShlKSksdC5fdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MoKX19KHRoaXMpKX0sdC5wcm90b3R5cGUuZW5xdWV1ZUZpbGVzPWZ1bmN0aW9uKGUpe3ZhciB0LGksbjtmb3IoaT0wLG49ZS5sZW5ndGg7aTxuO2krKyl0PWVbaV0sdGhpcy5lbnF1ZXVlRmlsZSh0KTtyZXR1cm4gbnVsbH0sdC5wcm90b3R5cGUuZW5xdWV1ZUZpbGU9ZnVuY3Rpb24oZSl7aWYoZS5zdGF0dXMhPT10LkFEREVEfHxlLmFjY2VwdGVkIT09ITApdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmaWxlIGNhbid0IGJlIHF1ZXVlZCBiZWNhdXNlIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkIG9yIHdhcyByZWplY3RlZC5cIik7aWYoZS5zdGF0dXM9dC5RVUVVRUQsdGhpcy5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWUpcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvY2Vzc1F1ZXVlKCl9fSh0aGlzKSwwKX0sdC5wcm90b3R5cGUuX3RodW1ibmFpbFF1ZXVlPVtdLHQucHJvdG90eXBlLl9wcm9jZXNzaW5nVGh1bWJuYWlsPSExLHQucHJvdG90eXBlLl9lbnF1ZXVlVGh1bWJuYWlsPWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5jcmVhdGVJbWFnZVRodW1ibmFpbHMmJmUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pJiZlLnNpemU8PTEwMjQqdGhpcy5vcHRpb25zLm1heFRodW1ibmFpbEZpbGVzaXplKjEwMjQpcmV0dXJuIHRoaXMuX3RodW1ibmFpbFF1ZXVlLnB1c2goZSksc2V0VGltZW91dChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5fcHJvY2Vzc1RodW1ibmFpbFF1ZXVlKCl9fSh0aGlzKSwwKX0sdC5wcm90b3R5cGUuX3Byb2Nlc3NUaHVtYm5haWxRdWV1ZT1mdW5jdGlvbigpe3ZhciBlO2lmKCF0aGlzLl9wcm9jZXNzaW5nVGh1bWJuYWlsJiYwIT09dGhpcy5fdGh1bWJuYWlsUXVldWUubGVuZ3RoKXJldHVybiB0aGlzLl9wcm9jZXNzaW5nVGh1bWJuYWlsPSEwLGU9dGhpcy5fdGh1bWJuYWlsUXVldWUuc2hpZnQoKSx0aGlzLmNyZWF0ZVRodW1ibmFpbChlLHRoaXMub3B0aW9ucy50aHVtYm5haWxXaWR0aCx0aGlzLm9wdGlvbnMudGh1bWJuYWlsSGVpZ2h0LHRoaXMub3B0aW9ucy50aHVtYm5haWxNZXRob2QsITAsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiB0LmVtaXQoXCJ0aHVtYm5haWxcIixlLGkpLHQuX3Byb2Nlc3NpbmdUaHVtYm5haWw9ITEsdC5fcHJvY2Vzc1RodW1ibmFpbFF1ZXVlKCl9fSh0aGlzKSl9LHQucHJvdG90eXBlLnJlbW92ZUZpbGU9ZnVuY3Rpb24oZSl7aWYoZS5zdGF0dXM9PT10LlVQTE9BRElORyYmdGhpcy5jYW5jZWxVcGxvYWQoZSksdGhpcy5maWxlcz1kKHRoaXMuZmlsZXMsZSksdGhpcy5lbWl0KFwicmVtb3ZlZGZpbGVcIixlKSwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuIHRoaXMuZW1pdChcInJlc2V0XCIpfSx0LnByb3RvdHlwZS5yZW1vdmVBbGxGaWxlcz1mdW5jdGlvbihlKXt2YXIgaSxuLG8scjtmb3IobnVsbD09ZSYmKGU9ITEpLHI9dGhpcy5maWxlcy5zbGljZSgpLG49MCxvPXIubGVuZ3RoO248bztuKyspaT1yW25dLChpLnN0YXR1cyE9PXQuVVBMT0FESU5HfHxlKSYmdGhpcy5yZW1vdmVGaWxlKGkpO3JldHVybiBudWxsfSx0LnByb3RvdHlwZS5yZXNpemVJbWFnZT1mdW5jdGlvbihlLGksbyxyLHMpe3JldHVybiB0aGlzLmNyZWF0ZVRodW1ibmFpbChlLGksbyxyLCExLGZ1bmN0aW9uKGkpe3JldHVybiBmdW5jdGlvbihvLHIpe3ZhciBhLGw7cmV0dXJuIG51bGw9PT1yP3MoZSk6KGE9aS5vcHRpb25zLnJlc2l6ZU1pbWVUeXBlLG51bGw9PWEmJihhPWUudHlwZSksbD1yLnRvRGF0YVVSTChhLGkub3B0aW9ucy5yZXNpemVRdWFsaXR5KSxcImltYWdlL2pwZWdcIiE9PWEmJlwiaW1hZ2UvanBnXCIhPT1hfHwobD1uLnJlc3RvcmUoZS5kYXRhVVJMLGwpKSxzKHQuZGF0YVVSSXRvQmxvYihsKSkpfX0odGhpcykpfSx0LnByb3RvdHlwZS5jcmVhdGVUaHVtYm5haWw9ZnVuY3Rpb24oZSx0LGksbixvLHIpe3ZhciBzO3JldHVybiBzPW5ldyBGaWxlUmVhZGVyLHMub25sb2FkPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmRhdGFVUkw9cy5yZXN1bHQsXCJpbWFnZS9zdmcreG1sXCI9PT1lLnR5cGU/dm9pZChudWxsIT1yJiZyKHMucmVzdWx0KSk6YS5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKGUsdCxpLG4sbyxyKX19KHRoaXMpLHMucmVhZEFzRGF0YVVSTChlKX0sdC5wcm90b3R5cGUuY3JlYXRlVGh1bWJuYWlsRnJvbVVybD1mdW5jdGlvbihlLHQsaSxuLG8scixzKXt2YXIgbDtyZXR1cm4gbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLHMmJihsLmNyb3NzT3JpZ2luPXMpLGwub25sb2FkPWZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkO3JldHVybiBkPWZ1bmN0aW9uKGUpe3JldHVybiBlKDEpfSxcInVuZGVmaW5lZFwiIT10eXBlb2YgRVhJRiYmbnVsbCE9PUVYSUYmJm8mJihkPWZ1bmN0aW9uKGUpe3JldHVybiBFWElGLmdldERhdGEobCxmdW5jdGlvbigpe3JldHVybiBlKEVYSUYuZ2V0VGFnKHRoaXMsXCJPcmllbnRhdGlvblwiKSl9KX0pLGQoZnVuY3Rpb24obyl7dmFyIGQscCx1LGMsaCxmLG0sZztzd2l0Y2goZS53aWR0aD1sLndpZHRoLGUuaGVpZ2h0PWwuaGVpZ2h0LG09cy5vcHRpb25zLnJlc2l6ZS5jYWxsKHMsZSx0LGksbiksZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLHA9ZC5nZXRDb250ZXh0KFwiMmRcIiksZC53aWR0aD1tLnRyZ1dpZHRoLGQuaGVpZ2h0PW0udHJnSGVpZ2h0LG8+NCYmKGQud2lkdGg9bS50cmdIZWlnaHQsZC5oZWlnaHQ9bS50cmdXaWR0aCksbyl7Y2FzZSAyOnAudHJhbnNsYXRlKGQud2lkdGgsMCkscC5zY2FsZSgtMSwxKTticmVhaztjYXNlIDM6cC50cmFuc2xhdGUoZC53aWR0aCxkLmhlaWdodCkscC5yb3RhdGUoTWF0aC5QSSk7YnJlYWs7Y2FzZSA0OnAudHJhbnNsYXRlKDAsZC5oZWlnaHQpLHAuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA1OnAucm90YXRlKC41Kk1hdGguUEkpLHAuc2NhbGUoMSwtMSk7YnJlYWs7Y2FzZSA2OnAucm90YXRlKC41Kk1hdGguUEkpLHAudHJhbnNsYXRlKDAsLWQuaGVpZ2h0KTticmVhaztjYXNlIDc6cC5yb3RhdGUoLjUqTWF0aC5QSSkscC50cmFuc2xhdGUoZC53aWR0aCwtZC5oZWlnaHQpLHAuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSA4OnAucm90YXRlKC0uNSpNYXRoLlBJKSxwLnRyYW5zbGF0ZSgtZC53aWR0aCwwKX1pZihhKHAsbCxudWxsIT0odT1tLnNyY1gpP3U6MCxudWxsIT0oYz1tLnNyY1kpP2M6MCxtLnNyY1dpZHRoLG0uc3JjSGVpZ2h0LG51bGwhPShoPW0udHJnWCk/aDowLG51bGwhPShmPW0udHJnWSk/ZjowLG0udHJnV2lkdGgsbS50cmdIZWlnaHQpLGc9ZC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksbnVsbCE9cilyZXR1cm4gcihnLGQpfSl9fSh0aGlzKSxudWxsIT1yJiYobC5vbmVycm9yPXIpLGwuc3JjPWUuZGF0YVVSTH0sdC5wcm90b3R5cGUucHJvY2Vzc1F1ZXVlPWZ1bmN0aW9uKCl7dmFyIGUsdCxpLG47aWYodD10aGlzLm9wdGlvbnMucGFyYWxsZWxVcGxvYWRzLGk9dGhpcy5nZXRVcGxvYWRpbmdGaWxlcygpLmxlbmd0aCxlPWksIShpPj10KSYmKG49dGhpcy5nZXRRdWV1ZWRGaWxlcygpLG4ubGVuZ3RoPjApKXtpZih0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpcmV0dXJuIHRoaXMucHJvY2Vzc0ZpbGVzKG4uc2xpY2UoMCx0LWkpKTtmb3IoO2U8dDspe2lmKCFuLmxlbmd0aClyZXR1cm47dGhpcy5wcm9jZXNzRmlsZShuLnNoaWZ0KCkpLGUrK319fSx0LnByb3RvdHlwZS5wcm9jZXNzRmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wcm9jZXNzRmlsZXMoW2VdKX0sdC5wcm90b3R5cGUucHJvY2Vzc0ZpbGVzPWZ1bmN0aW9uKGUpe3ZhciBpLG4sbztmb3Iobj0wLG89ZS5sZW5ndGg7bjxvO24rKylpPWVbbl0saS5wcm9jZXNzaW5nPSEwLGkuc3RhdHVzPXQuVVBMT0FESU5HLHRoaXMuZW1pdChcInByb2Nlc3NpbmdcIixpKTtyZXR1cm4gdGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlJiZ0aGlzLmVtaXQoXCJwcm9jZXNzaW5nbXVsdGlwbGVcIixlKSx0aGlzLnVwbG9hZEZpbGVzKGUpfSx0LnByb3RvdHlwZS5fZ2V0RmlsZXNXaXRoWGhyPWZ1bmN0aW9uKGUpe3ZhciB0LGk7cmV0dXJuIGk9ZnVuY3Rpb24oKXt2YXIgaSxuLG8scjtmb3Iobz10aGlzLmZpbGVzLHI9W10saT0wLG49by5sZW5ndGg7aTxuO2krKyl0PW9baV0sdC54aHI9PT1lJiZyLnB1c2godCk7cmV0dXJuIHJ9LmNhbGwodGhpcyl9LHQucHJvdG90eXBlLmNhbmNlbFVwbG9hZD1mdW5jdGlvbihlKXt2YXIgaSxuLG8scixzLGEsbDtpZihlLnN0YXR1cz09PXQuVVBMT0FESU5HKXtmb3Iobj10aGlzLl9nZXRGaWxlc1dpdGhYaHIoZS54aHIpLG89MCxzPW4ubGVuZ3RoO288cztvKyspaT1uW29dLGkuc3RhdHVzPXQuQ0FOQ0VMRUQ7Zm9yKGUueGhyLmFib3J0KCkscj0wLGE9bi5sZW5ndGg7cjxhO3IrKylpPW5bcl0sdGhpcy5lbWl0KFwiY2FuY2VsZWRcIixpKTt0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUmJnRoaXMuZW1pdChcImNhbmNlbGVkbXVsdGlwbGVcIixuKX1lbHNlKGw9ZS5zdGF0dXMpIT09dC5BRERFRCYmbCE9PXQuUVVFVUVEfHwoZS5zdGF0dXM9dC5DQU5DRUxFRCx0aGlzLmVtaXQoXCJjYW5jZWxlZFwiLGUpLHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSYmdGhpcy5lbWl0KFwiY2FuY2VsZWRtdWx0aXBsZVwiLFtlXSkpO2lmKHRoaXMub3B0aW9ucy5hdXRvUHJvY2Vzc1F1ZXVlKXJldHVybiB0aGlzLnByb2Nlc3NRdWV1ZSgpfSxyPWZ1bmN0aW9uKCl7dmFyIGUsdDtyZXR1cm4gdD1hcmd1bWVudHNbMF0sZT0yPD1hcmd1bWVudHMubGVuZ3RoP3AuY2FsbChhcmd1bWVudHMsMSk6W10sXCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmFwcGx5KHRoaXMsZSk6dH0sdC5wcm90b3R5cGUudXBsb2FkRmlsZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy51cGxvYWRGaWxlcyhbZV0pfSx0LnByb3RvdHlwZS51cGxvYWRGaWxlcz1mdW5jdGlvbihlKXt2YXIgaSxuLHMsYSxsLGQscCx1LGMsaCxmLG0sZyx2LHosYix5LHcsRix4LGssRSxDLFQsTSxTLEEsTCxJLFUsTixSLEQsTyxfLFAsQjtmb3IoQj1uZXcgWE1MSHR0cFJlcXVlc3QsZz0wLHk9ZS5sZW5ndGg7Zzx5O2crKylzPWVbZ10scy54aHI9QjtFPXIodGhpcy5vcHRpb25zLm1ldGhvZCxlKSxfPXIodGhpcy5vcHRpb25zLnVybCxlKSxCLm9wZW4oRSxfLCEwKSxCLnRpbWVvdXQ9cih0aGlzLm9wdGlvbnMudGltZW91dCxlKSxCLndpdGhDcmVkZW50aWFscz0hIXRoaXMub3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsUj1udWxsLGw9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGksbixvO2ZvcihvPVtdLGk9MCxuPWUubGVuZ3RoO2k8bjtpKyspcz1lW2ldLG8ucHVzaCh0Ll9lcnJvclByb2Nlc3NpbmcoZSxSfHx0Lm9wdGlvbnMuZGljdFJlc3BvbnNlRXJyb3IucmVwbGFjZShcInt7c3RhdHVzQ29kZX19XCIsQi5zdGF0dXMpLEIpKTtyZXR1cm4gb319KHRoaXMpLE89ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3ZhciBuLG8scixhLGwsZCxwLHUsYztpZihudWxsIT1pKWZvcih1PTEwMCppLmxvYWRlZC9pLnRvdGFsLG89MCxhPWUubGVuZ3RoO288YTtvKyspcz1lW29dLHMudXBsb2FkLnByb2dyZXNzPXUscy51cGxvYWQudG90YWw9aS50b3RhbCxzLnVwbG9hZC5ieXRlc1NlbnQ9aS5sb2FkZWQ7ZWxzZXtmb3Iobj0hMCx1PTEwMCxyPTAsbD1lLmxlbmd0aDtyPGw7cisrKXM9ZVtyXSwxMDA9PT1zLnVwbG9hZC5wcm9ncmVzcyYmcy51cGxvYWQuYnl0ZXNTZW50PT09cy51cGxvYWQudG90YWx8fChuPSExKSxzLnVwbG9hZC5wcm9ncmVzcz11LHMudXBsb2FkLmJ5dGVzU2VudD1zLnVwbG9hZC50b3RhbDtpZihuKXJldHVybn1mb3IoYz1bXSxwPTAsZD1lLmxlbmd0aDtwPGQ7cCsrKXM9ZVtwXSxjLnB1c2godC5lbWl0KFwidXBsb2FkcHJvZ3Jlc3NcIixzLHUscy51cGxvYWQuYnl0ZXNTZW50KSk7cmV0dXJuIGN9fSh0aGlzKSxCLm9ubG9hZD1mdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIG87aWYoZVswXS5zdGF0dXMhPT10LkNBTkNFTEVEJiY0PT09Qi5yZWFkeVN0YXRlKXtpZihcImFycmF5YnVmZmVyXCIhPT1CLnJlc3BvbnNlVHlwZSYmXCJibG9iXCIhPT1CLnJlc3BvbnNlVHlwZSYmKFI9Qi5yZXNwb25zZVRleHQsQi5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSYmfkIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJjb250ZW50LXR5cGVcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikpKXRyeXtSPUpTT04ucGFyc2UoUil9Y2F0Y2goZSl7bj1lLFI9XCJJbnZhbGlkIEpTT04gcmVzcG9uc2UgZnJvbSBzZXJ2ZXIuXCJ9cmV0dXJuIE8oKSwyMDA8PShvPUIuc3RhdHVzKSYmbzwzMDA/aS5fZmluaXNoZWQoZSxSLG4pOmwoKX19fSh0aGlzKSxCLm9uZXJyb3I9ZnVuY3Rpb24oaSl7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoZVswXS5zdGF0dXMhPT10LkNBTkNFTEVEKXJldHVybiBsKCl9fSh0aGlzKSxNPW51bGwhPShTPUIudXBsb2FkKT9TOkIsTS5vbnByb2dyZXNzPU8sdT17QWNjZXB0OlwiYXBwbGljYXRpb24vanNvblwiLFwiQ2FjaGUtQ29udHJvbFwiOlwibm8tY2FjaGVcIixcIlgtUmVxdWVzdGVkLVdpdGhcIjpcIlhNTEh0dHBSZXF1ZXN0XCJ9LHRoaXMub3B0aW9ucy5oZWFkZXJzJiZvKHUsdGhpcy5vcHRpb25zLmhlYWRlcnMpO2ZvcihkIGluIHUpcD11W2RdLHAmJkIuc2V0UmVxdWVzdEhlYWRlcihkLHApO2lmKGE9bmV3IEZvcm1EYXRhLHRoaXMub3B0aW9ucy5wYXJhbXMpe0E9dGhpcy5vcHRpb25zLnBhcmFtcztmb3IoeiBpbiBBKVA9QVt6XSxhLmFwcGVuZCh6LFApfWZvcih2PTAsdz1lLmxlbmd0aDt2PHc7disrKXM9ZVt2XSx0aGlzLmVtaXQoXCJzZW5kaW5nXCIscyxCLGEpO2lmKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSYmdGhpcy5lbWl0KFwic2VuZGluZ211bHRpcGxlXCIsZSxCLGEpLFwiRk9STVwiPT09dGhpcy5lbGVtZW50LnRhZ05hbWUpZm9yKEw9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uXCIpLGI9MCxGPUwubGVuZ3RoO2I8RjtiKyspaWYoaD1MW2JdLGY9aC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLG09aC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLFwiU0VMRUNUXCI9PT1oLnRhZ05hbWUmJmguaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIikpZm9yKEk9aC5vcHRpb25zLGs9MCx4PUkubGVuZ3RoO2s8eDtrKyspVD1JW2tdLFQuc2VsZWN0ZWQmJmEuYXBwZW5kKGYsVC52YWx1ZSk7ZWxzZSghbXx8XCJjaGVja2JveFwiIT09KFU9bS50b0xvd2VyQ2FzZSgpKSYmXCJyYWRpb1wiIT09VXx8aC5jaGVja2VkKSYmYS5hcHBlbmQoZixoLnZhbHVlKTtmb3IoaT0wLEQ9W10sYz1DPTAsTj1lLmxlbmd0aC0xOzA8PU4/Qzw9TjpDPj1OO2M9MDw9Tj8rK0M6LS1DKW49ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKG4sbyxyKXtyZXR1cm4gZnVuY3Rpb24obil7aWYoYS5hcHBlbmQobyxuLHIpLCsraT09PWUubGVuZ3RoKXJldHVybiB0LnN1Ym1pdFJlcXVlc3QoQixhLGUpfX19KHRoaXMpLEQucHVzaCh0aGlzLm9wdGlvbnMudHJhbnNmb3JtRmlsZS5jYWxsKHRoaXMsZVtjXSxuKGVbY10sdGhpcy5fZ2V0UGFyYW1OYW1lKGMpLGVbY10udXBsb2FkLmZpbGVuYW1lKSkpO3JldHVybiBEfSx0LnByb3RvdHlwZS5zdWJtaXRSZXF1ZXN0PWZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gZS5zZW5kKHQpfSx0LnByb3RvdHlwZS5fZmluaXNoZWQ9ZnVuY3Rpb24oZSxpLG4pe3ZhciBvLHIscztmb3Iocj0wLHM9ZS5sZW5ndGg7cjxzO3IrKylvPWVbcl0sby5zdGF0dXM9dC5TVUNDRVNTLHRoaXMuZW1pdChcInN1Y2Nlc3NcIixvLGksbiksdGhpcy5lbWl0KFwiY29tcGxldGVcIixvKTtpZih0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUmJih0aGlzLmVtaXQoXCJzdWNjZXNzbXVsdGlwbGVcIixlLGksbiksdGhpcy5lbWl0KFwiY29tcGxldGVtdWx0aXBsZVwiLGUpKSx0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSlyZXR1cm4gdGhpcy5wcm9jZXNzUXVldWUoKX0sdC5wcm90b3R5cGUuX2Vycm9yUHJvY2Vzc2luZz1mdW5jdGlvbihlLGksbil7dmFyIG8scixzO2ZvcihyPTAscz1lLmxlbmd0aDtyPHM7cisrKW89ZVtyXSxvLnN0YXR1cz10LkVSUk9SLHRoaXMuZW1pdChcImVycm9yXCIsbyxpLG4pLHRoaXMuZW1pdChcImNvbXBsZXRlXCIsbyk7aWYodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlJiYodGhpcy5lbWl0KFwiZXJyb3JtdWx0aXBsZVwiLGUsaSxuKSx0aGlzLmVtaXQoXCJjb21wbGV0ZW11bHRpcGxlXCIsZSkpLHRoaXMub3B0aW9ucy5hdXRvUHJvY2Vzc1F1ZXVlKXJldHVybiB0aGlzLnByb2Nlc3NRdWV1ZSgpfSx0fShpKSx0LnZlcnNpb249XCI1LjEuMVwiLHQub3B0aW9ucz17fSx0Lm9wdGlvbnNGb3JFbGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpP3Qub3B0aW9uc1tvKGUuZ2V0QXR0cmlidXRlKFwiaWRcIikpXTp2b2lkIDB9LHQuaW5zdGFuY2VzPVtdLHQuZm9yRWxlbWVudD1mdW5jdGlvbihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSksbnVsbD09KG51bGwhPWU/ZS5kcm9wem9uZTp2b2lkIDApKXRocm93IG5ldyBFcnJvcihcIk5vIERyb3B6b25lIGZvdW5kIGZvciBnaXZlbiBlbGVtZW50LiBUaGlzIGlzIHByb2JhYmx5IGJlY2F1c2UgeW91J3JlIHRyeWluZyB0byBhY2Nlc3MgaXQgYmVmb3JlIERyb3B6b25lIGhhZCB0aGUgdGltZSB0byBpbml0aWFsaXplLiBVc2UgdGhlIGBpbml0YCBvcHRpb24gdG8gc2V0dXAgYW55IGFkZGl0aW9uYWwgb2JzZXJ2ZXJzIG9uIHlvdXIgRHJvcHpvbmUuXCIpO3JldHVybiBlLmRyb3B6b25lfSx0LmF1dG9EaXNjb3Zlcj0hMCx0LmRpc2NvdmVyPWZ1bmN0aW9uKCl7dmFyIGUsaSxuLG8scixzO2Zvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsP249ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wem9uZVwiKToobj1bXSxlPWZ1bmN0aW9uKGUpe3ZhciB0LGksbyxyO2ZvcihyPVtdLGk9MCxvPWUubGVuZ3RoO2k8bztpKyspdD1lW2ldLC8oXnwgKWRyb3B6b25lKCR8ICkvLnRlc3QodC5jbGFzc05hbWUpP3IucHVzaChuLnB1c2godCkpOnIucHVzaCh2b2lkIDApO3JldHVybiByfSxlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKSxlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKSkpLHM9W10sbz0wLHI9bi5sZW5ndGg7bzxyO28rKylpPW5bb10sdC5vcHRpb25zRm9yRWxlbWVudChpKSE9PSExP3MucHVzaChuZXcgdChpKSk6cy5wdXNoKHZvaWQgMCk7cmV0dXJuIHN9LHQuYmxhY2tsaXN0ZWRCcm93c2Vycz1bL29wZXJhLipNYWNpbnRvc2guKnZlcnNpb25cXC8xMi9pXSx0LmlzQnJvd3NlclN1cHBvcnRlZD1mdW5jdGlvbigpe3ZhciBlLGksbixvLHI7aWYoZT0hMCx3aW5kb3cuRmlsZSYmd2luZG93LkZpbGVSZWFkZXImJndpbmRvdy5GaWxlTGlzdCYmd2luZG93LkJsb2ImJndpbmRvdy5Gb3JtRGF0YSYmZG9jdW1lbnQucXVlcnlTZWxlY3RvcilpZihcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpZm9yKG89dC5ibGFja2xpc3RlZEJyb3dzZXJzLGk9MCxuPW8ubGVuZ3RoO2k8bjtpKyspcj1vW2ldLHIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmKGU9ITEpO2Vsc2UgZT0hMTtlbHNlIGU9ITE7cmV0dXJuIGV9LHQuZGF0YVVSSXRvQmxvYj1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyLHMsYTtmb3IoaT1hdG9iKGUuc3BsaXQoXCIsXCIpWzFdKSxzPWUuc3BsaXQoXCIsXCIpWzBdLnNwbGl0KFwiOlwiKVsxXS5zcGxpdChcIjtcIilbMF0sdD1uZXcgQXJyYXlCdWZmZXIoaS5sZW5ndGgpLG89bmV3IFVpbnQ4QXJyYXkodCksbj1yPTAsYT1pLmxlbmd0aDswPD1hP3I8PWE6cj49YTtuPTA8PWE/KytyOi0tcilvW25dPWkuY2hhckNvZGVBdChuKTtyZXR1cm4gbmV3IEJsb2IoW3RdLHt0eXBlOnN9KX0sZD1mdW5jdGlvbihlLHQpe3ZhciBpLG4sbyxyO2ZvcihyPVtdLG49MCxvPWUubGVuZ3RoO248bztuKyspaT1lW25dLGkhPT10JiZyLnB1c2goaSk7cmV0dXJuIHJ9LG89ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvW1xcLV9dKFxcdykvZyxmdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFyQXQoMSkudG9VcHBlckNhc2UoKX0pfSx0LmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0LmlubmVySFRNTD1lLHQuY2hpbGROb2Rlc1swXX0sdC5lbGVtZW50SW5zaWRlPWZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuITA7Zm9yKDtlPWUucGFyZW50Tm9kZTspaWYoZT09PXQpcmV0dXJuITA7cmV0dXJuITF9LHQuZ2V0RWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlP2k9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTpudWxsIT1lLm5vZGVUeXBlJiYoaT1lKSxudWxsPT1pKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYFwiK3QrXCJgIG9wdGlvbiBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBwbGFpbiBIVE1MIGVsZW1lbnQuXCIpO3JldHVybiBpfSx0LmdldEVsZW1lbnRzPWZ1bmN0aW9uKGUsdCl7dmFyIGksbixvLHIscyxhLGwsZDtpZihlIGluc3RhbmNlb2YgQXJyYXkpe289W107dHJ5e2ZvcihyPTAsYT1lLmxlbmd0aDtyPGE7cisrKW49ZVtyXSxvLnB1c2godGhpcy5nZXRFbGVtZW50KG4sdCkpfWNhdGNoKGUpe2k9ZSxvPW51bGx9fWVsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpZm9yKG89W10sZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpLHM9MCxsPWQubGVuZ3RoO3M8bDtzKyspbj1kW3NdLG8ucHVzaChuKTtlbHNlIG51bGwhPWUubm9kZVR5cGUmJihvPVtlXSk7aWYobnVsbD09b3x8IW8ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYFwiK3QrXCJgIG9wdGlvbiBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgYSBDU1Mgc2VsZWN0b3IsIGEgcGxhaW4gSFRNTCBlbGVtZW50IG9yIGEgbGlzdCBvZiB0aG9zZS5cIik7cmV0dXJuIG99LHQuY29uZmlybT1mdW5jdGlvbihlLHQsaSl7cmV0dXJuIHdpbmRvdy5jb25maXJtKGUpP3QoKTpudWxsIT1pP2koKTp2b2lkIDB9LHQuaXNWYWxpZEZpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgaSxuLG8scixzO2lmKCF0KXJldHVybiEwO2Zvcih0PXQuc3BsaXQoXCIsXCIpLHI9ZS50eXBlLGk9ci5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpLG49MCxvPXQubGVuZ3RoO248bztuKyspaWYocz10W25dLHM9cy50cmltKCksXCIuXCI9PT1zLmNoYXJBdCgwKSl7aWYoZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzLnRvTG93ZXJDYXNlKCksZS5uYW1lLmxlbmd0aC1zLmxlbmd0aCkhPT0tMSlyZXR1cm4hMH1lbHNlIGlmKC9cXC9cXCokLy50ZXN0KHMpKXtpZihpPT09cy5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpKXJldHVybiEwfWVsc2UgaWYocj09PXMpcmV0dXJuITA7cmV0dXJuITF9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkmJm51bGwhPT1qUXVlcnkmJihqUXVlcnkuZm4uZHJvcHpvbmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLGUpfSl9KSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmbnVsbCE9PWU/ZS5leHBvcnRzPXQ6d2luZG93LkRyb3B6b25lPXQsdC5BRERFRD1cImFkZGVkXCIsdC5RVUVVRUQ9XCJxdWV1ZWRcIix0LkFDQ0VQVEVEPXQuUVVFVUVELHQuVVBMT0FESU5HPVwidXBsb2FkaW5nXCIsdC5QUk9DRVNTSU5HPXQuVVBMT0FESU5HLHQuQ0FOQ0VMRUQ9XCJjYW5jZWxlZFwiLHQuRVJST1I9XCJlcnJvclwiLHQuU1VDQ0VTUz1cInN1Y2Nlc3NcIixzPWZ1bmN0aW9uKGUpe3ZhciB0LGksbixvLHIscyxhLGwsZCxwO2ZvcihhPWUubmF0dXJhbFdpZHRoLHM9ZS5uYXR1cmFsSGVpZ2h0LGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxpLndpZHRoPTEsaS5oZWlnaHQ9cyxuPWkuZ2V0Q29udGV4dChcIjJkXCIpLG4uZHJhd0ltYWdlKGUsMCwwKSxvPW4uZ2V0SW1hZ2VEYXRhKDEsMCwxLHMpLmRhdGEscD0wLHI9cyxsPXM7bD5wOyl0PW9bNCoobC0xKSszXSwwPT09dD9yPWw6cD1sLGw9citwPj4xO3JldHVybiBkPWwvcywwPT09ZD8xOmR9LGE9ZnVuY3Rpb24oZSx0LGksbixvLHIsYSxsLGQscCl7dmFyIHU7cmV0dXJuIHU9cyh0KSxlLmRyYXdJbWFnZSh0LGksbixvLHIsYSxsLGQscC91KX0sbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUuS0VZX1NUUj1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsZS5lbmNvZGU2ND1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyLHMsYSxsLGQ7Zm9yKGQ9XCJcIix0PXZvaWQgMCxpPXZvaWQgMCxuPVwiXCIsbz12b2lkIDAscj12b2lkIDAscz12b2lkIDAsYT1cIlwiLGw9MDs7KWlmKHQ9ZVtsKytdLGk9ZVtsKytdLG49ZVtsKytdLG89dD4+MixyPSgzJnQpPDw0fGk+PjQscz0oMTUmaSk8PDJ8bj4+NixhPTYzJm4saXNOYU4oaSk/cz1hPTY0OmlzTmFOKG4pJiYoYT02NCksZD1kK3RoaXMuS0VZX1NUUi5jaGFyQXQobykrdGhpcy5LRVlfU1RSLmNoYXJBdChyKSt0aGlzLktFWV9TVFIuY2hhckF0KHMpK3RoaXMuS0VZX1NUUi5jaGFyQXQoYSksdD1pPW49XCJcIixvPXI9cz1hPVwiXCIsIShsPGUubGVuZ3RoKSlicmVhaztyZXR1cm4gZH0sZS5yZXN0b3JlPWZ1bmN0aW9uKGUsdCl7dmFyIGksbixvO3JldHVybiBlLm1hdGNoKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIik/KG49dGhpcy5kZWNvZGU2NChlLnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLFwiXCIpKSxvPXRoaXMuc2xpY2UyU2VnbWVudHMobiksaT10aGlzLmV4aWZNYW5pcHVsYXRpb24odCxvKSxcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIrdGhpcy5lbmNvZGU2NChpKSk6dH0sZS5leGlmTWFuaXB1bGF0aW9uPWZ1bmN0aW9uKGUsdCl7dmFyIGksbixvO3JldHVybiBuPXRoaXMuZ2V0RXhpZkFycmF5KHQpLG89dGhpcy5pbnNlcnRFeGlmKGUsbiksaT1uZXcgVWludDhBcnJheShvKX0sZS5nZXRFeGlmQXJyYXk9ZnVuY3Rpb24oZSl7dmFyIHQsaTtmb3IodD12b2lkIDAsaT0wO2k8ZS5sZW5ndGg7KXtpZih0PWVbaV0sMjU1PT09dFswXSYyMjU9PT10WzFdKXJldHVybiB0O2krK31yZXR1cm5bXX0sZS5pbnNlcnRFeGlmPWZ1bmN0aW9uKGUsdCl7dmFyIGksbixvLHIscyxhO3JldHVybiByPWUucmVwbGFjZShcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIsXCJcIiksbz10aGlzLmRlY29kZTY0KHIpLGE9by5pbmRleE9mKDI1NSwzKSxzPW8uc2xpY2UoMCxhKSxuPW8uc2xpY2UoYSksaT1zLGk9aS5jb25jYXQodCksaT1pLmNvbmNhdChuKX0sZS5zbGljZTJTZWdtZW50cz1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyO2ZvcihpPTAscj1bXTs7KXtpZigyNTU9PT1lW2ldJjIxOD09PWVbaSsxXSlicmVhaztpZigyNTU9PT1lW2ldJjIxNj09PWVbaSsxXT9pKz0yOihuPTI1NiplW2krMl0rZVtpKzNdLHQ9aStuKzIsbz1lLnNsaWNlKGksdCksci5wdXNoKG8pLGk9dCksaT5lLmxlbmd0aClicmVha31yZXR1cm4gcn0sZS5kZWNvZGU2ND1mdW5jdGlvbihlKXt2YXIgdCxpLG4sbyxyLHMsYSxsLGQscCx1O2Zvcih1PVwiXCIsbj12b2lkIDAsbz12b2lkIDAscj1cIlwiLHM9dm9pZCAwLGE9dm9pZCAwLGw9dm9pZCAwLGQ9XCJcIixwPTAsaT1bXSx0PS9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyx0LmV4ZWMoZSkmJmNvbnNvbGUud2FybmluZyhcIlRoZXJlIHdlcmUgaW52YWxpZCBiYXNlNjQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQgdGV4dC5cXG5WYWxpZCBiYXNlNjQgY2hhcmFjdGVycyBhcmUgQS1aLCBhLXosIDAtOSwgJysnLCAnLycsYW5kICc9J1xcbkV4cGVjdCBlcnJvcnMgaW4gZGVjb2RpbmcuXCIpLGU9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZyxcIlwiKTs7KWlmKHM9dGhpcy5LRVlfU1RSLmluZGV4T2YoZS5jaGFyQXQocCsrKSksYT10aGlzLktFWV9TVFIuaW5kZXhPZihlLmNoYXJBdChwKyspKSxsPXRoaXMuS0VZX1NUUi5pbmRleE9mKGUuY2hhckF0KHArKykpLGQ9dGhpcy5LRVlfU1RSLmluZGV4T2YoZS5jaGFyQXQocCsrKSksbj1zPDwyfGE+PjQsbz0oMTUmYSk8PDR8bD4+MixyPSgzJmwpPDw2fGQsaS5wdXNoKG4pLDY0IT09bCYmaS5wdXNoKG8pLDY0IT09ZCYmaS5wdXNoKHIpLG49bz1yPVwiXCIscz1hPWw9ZD1cIlwiLCEocDxlLmxlbmd0aCkpYnJlYWs7cmV0dXJuIGl9LGV9KCkscj1mdW5jdGlvbihlLHQpe3ZhciBpLG4sbyxyLHMsYSxsLGQscDtpZihvPSExLHA9ITAsbj1lLmRvY3VtZW50LGQ9bi5kb2N1bWVudEVsZW1lbnQsaT1uLmFkZEV2ZW50TGlzdGVuZXI/XCJhZGRFdmVudExpc3RlbmVyXCI6XCJhdHRhY2hFdmVudFwiLGw9bi5hZGRFdmVudExpc3RlbmVyP1wicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOlwiZGV0YWNoRXZlbnRcIixhPW4uYWRkRXZlbnRMaXN0ZW5lcj9cIlwiOlwib25cIixyPWZ1bmN0aW9uKGkpe2lmKFwicmVhZHlzdGF0ZWNoYW5nZVwiIT09aS50eXBlfHxcImNvbXBsZXRlXCI9PT1uLnJlYWR5U3RhdGUpcmV0dXJuKFwibG9hZFwiPT09aS50eXBlP2U6bilbbF0oYStpLnR5cGUsciwhMSksIW8mJihvPSEwKT90LmNhbGwoZSxpLnR5cGV8fGkpOnZvaWQgMH0scz1mdW5jdGlvbigpe3ZhciBlO3RyeXtkLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaCh0KXtyZXR1cm4gZT10LHZvaWQgc2V0VGltZW91dChzLDUwKX1yZXR1cm4gcihcInBvbGxcIil9LFwiY29tcGxldGVcIiE9PW4ucmVhZHlTdGF0ZSl7aWYobi5jcmVhdGVFdmVudE9iamVjdCYmZC5kb1Njcm9sbCl7dHJ5e3A9IWUuZnJhbWVFbGVtZW50fWNhdGNoKGUpe31wJiZzKCl9cmV0dXJuIG5baV0oYStcIkRPTUNvbnRlbnRMb2FkZWRcIixyLCExKSxuW2ldKGErXCJyZWFkeXN0YXRlY2hhbmdlXCIsciwhMSksZVtpXShhK1wibG9hZFwiLHIsITEpfX0sdC5fYXV0b0Rpc2NvdmVyRnVuY3Rpb249ZnVuY3Rpb24oKXtpZih0LmF1dG9EaXNjb3ZlcilyZXR1cm4gdC5kaXNjb3ZlcigpfSxyKHdpbmRvdyx0Ll9hdXRvRGlzY292ZXJGdW5jdGlvbil9KS5jYWxsKHRoaXMpfSkuY2FsbCh0LGkoOSkoZSkpfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz0nIDxmb3JtIDphY3Rpb249dXJsIGNsYXNzPVwidnVlLWRyb3B6b25lIGRyb3B6b25lXCIgOmlkPWlkPiA8c2xvdD48L3Nsb3Q+IDwvZm9ybT4gJ30sZnVuY3Rpb24oZSx0LGkpe2Z1bmN0aW9uIG4oZSx0KXtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIG49ZVtpXSxvPXVbbi5pZF07aWYobyl7by5yZWZzKys7Zm9yKHZhciByPTA7cjxvLnBhcnRzLmxlbmd0aDtyKyspby5wYXJ0c1tyXShuLnBhcnRzW3JdKTtmb3IoO3I8bi5wYXJ0cy5sZW5ndGg7cisrKW8ucGFydHMucHVzaChsKG4ucGFydHNbcl0sdCkpfWVsc2V7Zm9yKHZhciBzPVtdLHI9MDtyPG4ucGFydHMubGVuZ3RoO3IrKylzLnB1c2gobChuLnBhcnRzW3JdLHQpKTt1W24uaWRdPXtpZDpuLmlkLHJlZnM6MSxwYXJ0czpzfX19fWZ1bmN0aW9uIG8oZSl7Zm9yKHZhciB0PVtdLGk9e30sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dLHI9b1swXSxzPW9bMV0sYT1vWzJdLGw9b1szXSxkPXtjc3M6cyxtZWRpYTphLHNvdXJjZU1hcDpsfTtpW3JdP2lbcl0ucGFydHMucHVzaChkKTp0LnB1c2goaVtyXT17aWQ6cixwYXJ0czpbZF19KX1yZXR1cm4gdH1mdW5jdGlvbiByKGUsdCl7dmFyIGk9ZigpLG49dlt2Lmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdCluP24ubmV4dFNpYmxpbmc/aS5pbnNlcnRCZWZvcmUodCxuLm5leHRTaWJsaW5nKTppLmFwcGVuZENoaWxkKHQpOmkuaW5zZXJ0QmVmb3JlKHQsaS5maXJzdENoaWxkKSx2LnB1c2godCk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7aS5hcHBlbmRDaGlsZCh0KX19ZnVuY3Rpb24gcyhlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIHQ9di5pbmRleE9mKGUpO3Q+PTAmJnYuc3BsaWNlKHQsMSl9ZnVuY3Rpb24gYShlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQudHlwZT1cInRleHQvY3NzXCIscihlLHQpLHR9ZnVuY3Rpb24gbChlLHQpe3ZhciBpLG4sbztpZih0LnNpbmdsZXRvbil7dmFyIHI9ZysrO2k9bXx8KG09YSh0KSksbj1kLmJpbmQobnVsbCxpLHIsITEpLG89ZC5iaW5kKG51bGwsaSxyLCEwKX1lbHNlIGk9YSh0KSxuPXAuYmluZChudWxsLGkpLG89ZnVuY3Rpb24oKXtzKGkpfTtyZXR1cm4gbihlKSxmdW5jdGlvbih0KXtpZih0KXtpZih0LmNzcz09PWUuY3NzJiZ0Lm1lZGlhPT09ZS5tZWRpYSYmdC5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47bihlPXQpfWVsc2UgbygpfX1mdW5jdGlvbiBkKGUsdCxpLG4pe3ZhciBvPWk/XCJcIjpuLmNzcztpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9eih0LG8pO2Vsc2V7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobykscz1lLmNoaWxkTm9kZXM7c1t0XSYmZS5yZW1vdmVDaGlsZChzW3RdKSxzLmxlbmd0aD9lLmluc2VydEJlZm9yZShyLHNbdF0pOmUuYXBwZW5kQ2hpbGQocil9fWZ1bmN0aW9uIHAoZSx0KXt2YXIgaT10LmNzcyxuPXQubWVkaWEsbz10LnNvdXJjZU1hcDtpZihuJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbiksbyYmKGkrPVwiXFxuLyojIHNvdXJjZVVSTD1cIitvLnNvdXJjZXNbMF0rXCIgKi9cIixpKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSkrXCIgKi9cIiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PWk7ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaSkpfX12YXIgdT17fSxjPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB0JiYodD1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksdH19LGg9YyhmdW5jdGlvbigpe3JldHVybi9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpfSksZj1jKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXX0pLG09bnVsbCxnPTAsdj1bXTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt0PXR8fHt9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnNpbmdsZXRvbiYmKHQuc2luZ2xldG9uPWgoKSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuaW5zZXJ0QXQmJih0Lmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBpPW8oZSk7cmV0dXJuIG4oaSx0KSxmdW5jdGlvbihlKXtmb3IodmFyIHI9W10scz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYT1pW3NdLGw9dVthLmlkXTtsLnJlZnMtLSxyLnB1c2gobCl9aWYoZSl7dmFyIGQ9byhlKTtuKGQsdCl9Zm9yKHZhciBzPTA7czxyLmxlbmd0aDtzKyspe3ZhciBsPXJbc107aWYoMD09PWwucmVmcyl7Zm9yKHZhciBwPTA7cDxsLnBhcnRzLmxlbmd0aDtwKyspbC5wYXJ0c1twXSgpO2RlbGV0ZSB1W2wuaWRdfX19fTt2YXIgej1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbih0LGkpe3JldHVybiBlW3RdPWksZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsdCxpKXt2YXIgbj1pKDQpO1wic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1bW2UuaWQsbixcIlwiXV0pO2koNykobix7fSk7bi5sb2NhbHMmJihlLmV4cG9ydHM9bi5sb2NhbHMpfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZS53ZWJwYWNrUG9seWZpbGx8fChlLmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sZS5wYXRocz1bXSxlLmNoaWxkcmVuPVtdLGUud2VicGFja1BvbHlmaWxsPTEpLGV9fV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlMi1kcm9wem9uZS9kaXN0L3Z1ZTItZHJvcHpvbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZTItZHJvcHpvbmUvZGlzdC92dWUyLWRyb3B6b25lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW1hZ2VVcGxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MTc0YjVmMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbWFnZVVwbG9hZC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEltYWdlVXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTc0YjVmMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxNzRiNWYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDE4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9QbGFjZXNTZWFyY2gudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kOWFlMjFlMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QbGFjZXNTZWFyY2gudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUGxhY2VzU2VhcmNoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kOWFlMjFlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ5YWUyMWUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGxhY2VzU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1N0ZXBUYWIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jYmRjYTE0NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TdGVwVGFiLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTdGVwVGFiLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jYmRjYTE0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWNiZGNhMTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RlcFRhYi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0ZXBUYWIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01lcmNoYW50UmVnaXN0cmF0aW9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjM1YTNlYTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21lcmNoYW50L01lcmNoYW50UmVnaXN0cmF0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIzNWEzZWEwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjM1YTNlYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWVyY2hhbnQvTWVyY2hhbnRSZWdpc3RyYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=