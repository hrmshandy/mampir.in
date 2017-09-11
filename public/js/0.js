webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        value: String
    },
    data: function data() {
        return {
            keyword: '',
            showInputSuggestions: false,
            suggestions: [],
            defaultOptions: {
                endpoint: '/search/suggest',
                showDefaultSuggestionOnEmpty: false,
                defaultSuggestions: {},
                placeholder: "Search...",
                inputId: '',
                inputClass: ''
            },
            lastVal: ''
        };
    },

    watch: {
        value: function value(_value) {
            if (!_.isEmpty(_value) && _value !== undefined) {
                this.keyword = _value;
            }
        },
        keyword: function keyword(value) {
            this.$emit('input', value);
        }
    },
    computed: {
        isEmptySuggestions: function isEmptySuggestions() {
            return this.suggestions.length <= 0;
        },
        inputClass: function inputClass() {
            return ['o-input', this.getOptions.inputClass];
        },
        getOptions: function getOptions() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.defaultOptions, this.options);
        }
    },
    methods: {
        onInputFocus: function onInputFocus(e) {
            e.stopPropagation();

            if (_.isEmpty(e.target.value) && this.getOptions.showDefaultSuggestionOnEmpty) {
                this.setSuggestions(this.getOptions.defaultSuggestions);
            }

            if (this.suggestions.length > 0) {
                this.showSuggestions(e.target.value);
            }
        },
        suggestionClicked: function suggestionClicked(e, suggestion) {
            e.target.value = suggestion.text;
            this.$emit('input', suggestion.text);
            this.closeSuggestions();
            this.$emit('suggestionClicked', e, suggestion);
            this.$emit('change', e);
        },
        fetchSuggestions: function fetchSuggestions(e) {
            var _this = this;

            var value = e.target.value;
            this.lastVal = value;
            axios.get(this.getOptions.endpoint + '?keyword=' + value).then(function (_ref) {
                var data = _ref.data;

                if (data.length <= 0) {
                    _this.closeSuggestions();
                } else {
                    if (!_this.showInputSuggestions) {
                        _this.showSuggestions(value);
                    }
                    _this.setSuggestions(data, value);
                }
            });
        },
        showSuggestions: function showSuggestions(value) {

            this.showInputSuggestions = true;

            this.$refs.container.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        },
        closeSuggestions: function closeSuggestions() {
            this.showInputSuggestions = false;
        },
        setSuggestions: function setSuggestions(data) {
            var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this.suggestions = data.map(function (item) {
                if (_.isEmpty(search)) {
                    item.html = item.text;
                } else {
                    search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                    item.html = item.text.replace(re, "<b>$1</b>");
                }
                return item;
            });
        },
        blurHandler: function blurHandler(e) {
            var _this2 = this;

            try {
                var over_sb = document.querySelector('.c-input-suggestion__suggestions:hover');
            } catch (e) {
                var over_sb = 0;
            }
            if (!over_sb) {
                this.closeSuggestions();
                setTimeout(function () {
                    _this2.closeSuggestions();
                }, 350);
            }

            this.$emit('blur', e);
        },
        onchange: function onchange(e) {
            this.$emit('change', e);
        },
        keydownHandler: function keydownHandler(e) {
            var sc = this.$refs.suggestions;
            var key = window.event ? e.keyCode : e.which;

            if ((key == 40 || key == 38) && sc.innerHTML) {
                var next,
                    sel = sc.querySelector('.c-input-suggestion__item.is-selected');
                if (!sel) {
                    next = key == 40 ? sc.querySelector('.c-input-suggestion__item') : sc.childNodes[sc.childNodes.length - 1];
                    next.className += ' is-selected';
                    e.target.value = next.getAttribute('data-val');
                } else {
                    next = key == 40 ? sel.nextSibling : sel.previousSibling;
                    if (next) {
                        sel.className = sel.className.replace('is-selected', '');
                        next.className += ' is-selected';
                        e.target.value = next.getAttribute('data-val');
                    } else {
                        sel.className = sel.className.replace('is-selected', '');e.target.value = this.lastVal;next = 0;
                    }
                }
                return false;
            } else if (key == 27) {
                    e.target.value = this.lastVal;
                    this.closeSuggestions();
                } else if (key == 13 || key == 9) {
                        if (sc) {
                            var _sel = sc.querySelector('.c-input-suggestion__item.is-selected');
                            if (_sel && this.showInputSuggestions) {
                                this.$emit('input', _sel.getAttribute('data-val'));
                                this.closeSuggestions();
                            }
                        }
                    }

            this.$emit('keydown', e);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_map_loader__ = __webpack_require__("./resources/assets/js/api/map/loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue__ = __webpack_require__("./resources/assets/js/components/InputSuggestion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vee_validate__);










/* harmony default export */ __webpack_exports__["default"] = ({
    components: { InputSuggestion: __WEBPACK_IMPORTED_MODULE_3__InputSuggestion_vue___default.a },
    props: {
        size: { type: String },
        inline: { type: Boolean, default: true }
    },
    data: function data() {
        return {
            showSearchForm: false,

            searchQuery: {
                location: '',
                city: '',
                keyword: '',
                query: '',
                radius: 5000,
                modified: false
            },
            validator: new __WEBPACK_IMPORTED_MODULE_4_vee_validate__["Validator"]({
                city: 'required',
                keyword: 'required'
            })
        };
    },

    computed: {
        query: function query() {
            var q = this.searchQuery;

            return q.keyword.replace(/\s/g, '+') + '+in+' + q.city.replace(/\s/g, '+');
        },
        inputSize: function inputSize() {
            return !_.isEmpty(this.size) ? 'o-input--' + this.size : null;
        },
        btnSize: function btnSize() {
            return !_.isEmpty(this.size) ? 'o-button--' + this.size : null;
        },
        suggestionOptions: function suggestionOptions() {
            return {
                city: {
                    endpoint: '/api/search/suggest/location',
                    placeholder: 'Pilih Kota',
                    inputId: 'city',
                    inputClass: this.inputSize
                },
                category: {
                    endpoint: '/api/search/suggest/keyword',
                    placeholder: 'Nyari Apa?',
                    inputClass: this.inputSize,
                    showDefaultSuggestionOnEmpty: true,
                    defaultSuggestions: [{ text: "makan" }, { text: "kopi" }, { text: "salon" }, { text: "spa" }, { text: "barbershop" }, { text: "futsal" }, { text: "gym" }]
                }
            };
        }
    },
    watch: {
        '$route': 'fetchQuery'
    },
    methods: {
        submit: function submit() {
            var _this = this;

            this.validator.validateAll({ city: this.searchQuery.city, keyword: this.searchQuery.keyword }).then(function (result) {
                if (!result) {
                    return;
                }
                window.location = '/search/' + _this.query;
            }).catch(function () {
                console.log('error');
            });
        },
        validate: function validate(field, e) {
            this.validator.validate(field, e.target.value);
        },
        geolocation: function geolocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
            } else {}
        },
        getCurrentPosition: function getCurrentPosition(position) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_2__api_map_loader__["b" /* loaded */].then(function () {
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(location.latitude, location.longitude);
                _this2.searchQuery.location = location.latitude + ',' + location.longitude;
                if (geocoder) {
                    geocoder.geocode({ 'latLng': latLng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var result = results.filter(function (item) {
                                return item.types[0] == 'locality';
                            });

                            if (_.isEmpty(_this2.location)) {
                                _this2.location = !_.isEmpty(result) ? result[0].address_components[0].long_name : '';
                            }
                        } else {
                            console.log("Geocoding failed: " + status);
                        }
                    });
                }
            });
        },
        getCurrentCity: function getCurrentCity() {
            if (typeof Cookies.get('user-city') === 'undefined') {} else {
                this.$store.commit('SET_LOCATION', Cookies.get('user-city'));
            }
        },
        toggleSearch: function toggleSearch() {
            if (this.showSearchForm) {
                this.showSearchForm = false;
                iconim.off('search-close');
            } else {
                this.showSearchForm = true;
                iconim.on('search-close');
            }
        },
        suggestionClicked: function suggestionClicked() {},
        onCityChanged: function onCityChanged(e) {
            this.modified = true;
        },
        preventEnter: function preventEnter(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        },
        googleSearchSuggestion: function googleSearchSuggestion() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_2__api_map_loader__["b" /* loaded */].then(function () {
                var options = {
                    types: ['(cities)'],
                    componentRestrictions: { country: "id" }
                };

                var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-0.789275, 113.92132700000002));

                var input = _this3.$refs.input;
                var searchBox = new google.maps.places.Autocomplete(input, options);

                searchBox.addListener('place_changed', function () {

                    var location = searchBox.getPlace();

                    _this3.searchQuery.city = location.formatted_address;
                });
            });
        },
        extractQuery: function extractQuery(query) {
            if (!query) {
                return {};
            } else {
                query = query.split('in');

                query = query.map(function (item) {
                    item = item.replace(/\+/g, ' ', item);
                    return item.trim();
                });

                return { keyword: query[0], city: query[1] };
            }
        },
        fetchQuery: function fetchQuery() {
            var query = this.extractQuery(this.$route.params.query);
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.searchQuery, query);
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        this.fetchQuery();

        this.geolocation();

        this.googleSearchSuggestion();

        Event.listen('toggle-search', function () {
            _this4.toggleSearch();
        });
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5a2a94a4\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: ['c-search', {
      'c-search--inline': _vm.inline,
      'is-shown': _vm.showSearchForm
    }],
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_c('button', {
    staticClass: "c-search__button iconim iconim-search-close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.toggleSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "c-search__form"
  }, [_c('div', {
    class: ['c-form-group', {
      'has-error': _vm.validator.errors.has('city')
    }]
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery.city),
      expression: "searchQuery.city"
    }],
    ref: "input",
    class: ['o-input', _vm.inputSize],
    attrs: {
      "type": "text",
      "placeholder": "Pilih Lokasi",
      "name": "city"
    },
    domProps: {
      "value": (_vm.searchQuery.city)
    },
    on: {
      "keypress": _vm.preventEnter,
      "change": function($event) {
        _vm.validate('city', $event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery.city = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.validator.errors.has('city')) ? _c('span', {
    staticClass: "c-form-feedback"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()]), _vm._v(" "), _c('div', {
    class: ['c-form-group', {
      'has-error': _vm.validator.errors.has('keyword')
    }]
  }, [_c('input-suggestion', {
    attrs: {
      "options": _vm.suggestionOptions.category
    },
    on: {
      "suggestionClicked": _vm.suggestionClicked,
      "change": function($event) {
        _vm.validate('keyword', $event)
      }
    },
    model: {
      value: (_vm.searchQuery.keyword),
      callback: function($$v) {
        _vm.searchQuery.keyword = $$v
      },
      expression: "searchQuery.keyword"
    }
  }), _vm._v(" "), (_vm.validator.errors.has('keyword')) ? _c('span', {
    staticClass: "c-form-feedback"
  }, [_vm._v("Wajib diisi.")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "c-form-group"
  }, [_c('button', {
    class: ['o-button', 'o-button--primary', 'o-button-custom', 'o-button--block', _vm.btnSize],
    attrs: {
      "type": "submit"
    }
  }, [(!_vm.inline) ? _c('span', [_vm._v("Yuk, ")]) : _vm._e(), _vm._v(" "), _c('strong', [_vm._v("Cari"), (!_vm.inline) ? _c('span', [_vm._v("!")]) : _vm._e()]), _vm._v(" "), _c('span', {
    staticClass: "text-cari-icons",
    staticStyle: {
      "display": "none"
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
      "d": "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "text-cari-lagi",
    staticStyle: {
      "display": "none"
    }
  }, [_vm._v("Cari Lagi")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a2a94a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b8995bc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "c-input-suggestion"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    class: _vm.inputClass,
    attrs: {
      "type": "text",
      "id": _vm.getOptions.inputId,
      "placeholder": _vm.getOptions.placeholder,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "focus": _vm.onInputFocus,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.fetchSuggestions],
      "blur": _vm.blurHandler,
      "change": _vm.onchange,
      "keydown": _vm.keydownHandler
    }
  }), _vm._v(" "), (_vm.showInputSuggestions && !_vm.isEmptySuggestions) ? _c('div', {
    ref: "suggestions",
    staticClass: "c-input-suggestion__suggestions"
  }, [_vm._l((_vm.suggestions), function(suggestion) {
    return [_c('a', {
      staticClass: "c-input-suggestion__item",
      attrs: {
        "href": "#",
        "data-val": suggestion.text
      },
      domProps: {
        "innerHTML": _vm._s(suggestion.html)
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.suggestionClicked($event, suggestion)
        }
      }
    })]
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b8995bc", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/InputSuggestion.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/InputSuggestion.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b8995bc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/InputSuggestion.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/InputSuggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InputSuggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b8995bc", Component.options)
  } else {
    hotAPI.reload("data-v-6b8995bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Search.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5a2a94a4\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Search.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a2a94a4", Component.options)
  } else {
    hotAPI.reload("data-v-5a2a94a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlPzY4MGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWU/ZTVmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7a0JBK0JBO3lDQUNBO3VCQUNBO0FBRUE7QUFMQTtlQU9BO0FBUkE7MEJBU0E7O3FCQUVBO2tDQUNBO3lCQUNBOzswQkFFQTs4Q0FDQTtvQ0FDQTs2QkFDQTt5QkFDQTs0QkFFQTtBQVBBO3FCQVNBO0FBYkE7QUFjQTs7O3NDQUVBOzREQUNBOytCQUNBO0FBQ0E7QUFDQTt5Q0FDQTtnQ0FDQTtBQUVBO0FBVEE7OzBEQVdBOzhDQUNBO0FBQ0E7MENBQ0E7K0NBQ0E7QUFDQTswQ0FDQTs2SEFDQTtBQUVBO0FBVkE7OytDQVlBO2NBRUE7OzJGQUNBO29EQUNBO0FBRUE7OzZDQUNBOzhDQUNBO0FBQ0E7QUFDQTtxRUFDQTt3Q0FDQTsyQ0FDQTtpQkFDQTsrQ0FDQTtpQ0FDQTtBQUNBOztBQUNBOztpQ0FDQTsyQkFDQTsrREFDQTtBQUNBOztzQ0FDQTswQkFDQTt1QkFDQTtxREFDQTs4Q0FDQTtBQUNBOytDQUNBO0FBQ0E7QUFDQTtBQUNBO3lEQUVBOzt3Q0FFQTs7d0VBQ0E7a0JBQ0E7QUFLQTtBQUNBO3NEQUNBO3dDQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtaW5wdXQtc3VnZ2VzdGlvblwiIHJlZj1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgOmlkPVwiZ2V0T3B0aW9ucy5pbnB1dElkXCJcbiAgICAgICAgICAgICAgIDpjbGFzcz1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiZ2V0T3B0aW9ucy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgdi1tb2RlbD1cImtleXdvcmRcIlxuICAgICAgICAgICAgICAgQGZvY3VzPVwib25JbnB1dEZvY3VzXCJcbiAgICAgICAgICAgICAgIEBpbnB1dD1cImZldGNoU3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgQGJsdXI9XCJibHVySGFuZGxlclwiXG4gICAgICAgICAgICAgICBAY2hhbmdlPVwib25jaGFuZ2VcIlxuICAgICAgICAgICAgICAgQGtleWRvd249XCJrZXlkb3duSGFuZGxlclwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93SW5wdXRTdWdnZXN0aW9ucyAmJiAhaXNFbXB0eVN1Z2dlc3Rpb25zXCIgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25fX3N1Z2dlc3Rpb25zXCIgcmVmPVwic3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInN1Z2dlc3Rpb24gaW4gc3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic3VnZ2VzdGlvbkNsaWNrZWQoJGV2ZW50LCBzdWdnZXN0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgOmRhdGEtdmFsPVwic3VnZ2VzdGlvbi50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJzdWdnZXN0aW9uLmh0bWxcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBzaG93SW5wdXRTdWdnZXN0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlYXJjaC9zdWdnZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9uczoge30sXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dElkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXN0VmFsOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYoIV8uaXNFbXB0eSh2YWx1ZSkgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmtleXdvcmQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleXdvcmQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzRW1wdHlTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggPD0gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dENsYXNzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ28taW5wdXQnLCB0aGlzLmdldE9wdGlvbnMuaW5wdXRDbGFzc107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25JbnB1dEZvY3VzKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYoXy5pc0VtcHR5KGUudGFyZ2V0LnZhbHVlKSAmJiB0aGlzLmdldE9wdGlvbnMuc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN1Z2dlc3Rpb25zKHRoaXMuZ2V0T3B0aW9ucy5kZWZhdWx0U3VnZ2VzdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWdnZXN0aW9ucyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKGUsIHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHN1Z2dlc3Rpb24udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHN1Z2dlc3Rpb24udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VnZ2VzdGlvbkNsaWNrZWQnLCBlLCBzdWdnZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLmdldE9wdGlvbnMuZW5kcG9pbnQrJz9rZXl3b3JkPScrdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hvd0lucHV0U3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN1Z2dlc3Rpb25zKGRhdGEsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1N1Z2dlc3Rpb25zKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuLy8gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3VnZ2VzdGlvbnMoZGF0YSwgc2VhcmNoID0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXy5pc0VtcHR5KHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoXCIoXCIgKyBzZWFyY2guc3BsaXQoJyAnKS5qb2luKCd8JykgKyBcIilcIiwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dC5yZXBsYWNlKHJlLCBcIjxiPiQxPC9iPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibHVySGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHsgdmFyIG92ZXJfc2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1pbnB1dC1zdWdnZXN0aW9uX19zdWdnZXN0aW9uczpob3ZlcicpOyB9IGNhdGNoKGUpeyB2YXIgb3Zlcl9zYiA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAoIW92ZXJfc2IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTsgfSwgMzUwKTsgLy8gaGlkZSBzdWdnZXN0aW9ucyBvbiBmYXN0IGlucHV0XG4gICAgICAgICAgICAgICAgfSAvL2Vsc2UgaWYgKHRoaXMgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdGhpcy5mb2N1cygpOyB9LCAyMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdibHVyJywgZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleWRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IHRoaXMuJHJlZnMuc3VnZ2VzdGlvbnM7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gd2luZG93LmV2ZW50ID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICAgICAgICAgICAgICAvLyBkb3duICg0MCksIHVwICgzOClcbiAgICAgICAgICAgICAgICBpZiAoKGtleSA9PSA0MCB8fCBrZXkgPT0gMzgpICYmIHNjLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCwgc2VsID0gc2MucXVlcnlTZWxlY3RvcignLmMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbS5pcy1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IChrZXkgPT0gNDApID8gc2MucXVlcnlTZWxlY3RvcignLmMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbScpIDogc2MuY2hpbGROb2Rlc1tzYy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdOyAvLyBmaXJzdCA6IGxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NOYW1lICs9ICcgaXMtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBuZXh0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSAoa2V5ID09IDQwKSA/IHNlbC5uZXh0U2libGluZyA6IHNlbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbC5jbGFzc05hbWUgPSBzZWwuY2xhc3NOYW1lLnJlcGxhY2UoJ2lzLXNlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NOYW1lICs9ICcgaXMtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gbmV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgc2VsLmNsYXNzTmFtZSA9IHNlbC5jbGFzc05hbWUucmVwbGFjZSgnaXMtc2VsZWN0ZWQnLCAnJyk7IGUudGFyZ2V0LnZhbHVlID0gdGhpcy5sYXN0VmFsOyBuZXh0ID0gMDsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZXNjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gdGhpcy5sYXN0VmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkgPT0gMTMgfHwga2V5ID09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IHNjLnF1ZXJ5U2VsZWN0b3IoJy5jLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW0uaXMtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWwgJiYgdGhpcy5zaG93SW5wdXRTdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0Jywgc2VsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLiRlbWl0KCdzdWdnZXN0aW9uQ2xpY2tlZCcsIGUsIHN1Z2dlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIElucHV0U3VnZ2VzdGlvbi52dWU/ODc3MTI3MTQiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gOmNsYXNzPVwiWydjLXNlYXJjaCcsIHsnYy1zZWFyY2gtLWlubGluZSc6IGlubGluZSwgJ2lzLXNob3duJzogc2hvd1NlYXJjaEZvcm19XVwiXG4gICAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYy1zZWFyY2hfX2J1dHRvbiBpY29uaW0gaWNvbmltLXNlYXJjaC1jbG9zZVwiIEBjbGljaz1cInRvZ2dsZVNlYXJjaFwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1zZWFyY2hfX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1lcnJvcic6IHZhbGlkYXRvci5lcnJvcnMuaGFzKCdjaXR5Jyl9XVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWydvLWlucHV0JywgaW5wdXRTaXplXVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hRdWVyeS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBMb2thc2lcIlxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBrZXlwcmVzcz1cInByZXZlbnRFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ2YWxpZGF0ZSgnY2l0eScsICRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidmFsaWRhdG9yLmVycm9ycy5oYXMoJ2NpdHknKVwiIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrXCI+V2FqaWIgZGlpc2kuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZXJyb3InOiB2YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpfV1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtc3VnZ2VzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzdWdnZXN0aW9uT3B0aW9ucy5jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoUXVlcnkua2V5d29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAc3VnZ2VzdGlvbkNsaWNrZWQ9XCJzdWdnZXN0aW9uQ2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidmFsaWRhdGUoJ2tleXdvcmQnLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9pbnB1dC1zdWdnZXN0aW9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ2YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpXCIgY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2tcIj5XYWppYiBkaWlzaS48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIDpjbGFzcz1cIlsnby1idXR0b24nLCAnby1idXR0b24tLXByaW1hcnknLCdvLWJ1dHRvbi1jdXN0b20nLCAnby1idXR0b24tLWJsb2NrJywgYnRuU2l6ZV1cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhaW5saW5lXCI+WXVrLCZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DYXJpPHNwYW4gdi1pZj1cIiFpbmxpbmVcIj4hPC9zcGFuPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FyaS1pY29uc1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1jYXJpLWxhZ2lcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+Q2FyaSBMYWdpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCB7bG9hZGVkfSBmcm9tICcuLi9hcGkvbWFwL2xvYWRlcidcblxuICAgIGltcG9ydCBJbnB1dFN1Z2dlc3Rpb24gZnJvbSAnLi9JbnB1dFN1Z2dlc3Rpb24udnVlJ1xuXG4gICAgaW1wb3J0IHsgVmFsaWRhdG9yLCBFcnJvckJhZyB9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgSW5wdXRTdWdnZXN0aW9uIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgICAgIGlubGluZToge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWV9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hGb3JtOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IG5ldyBWYWxpZGF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbi8vICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4vLyAgICAgICAgICAgICAgICAncXVlcnknXG4vLyAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgcXVlcnkoKSB7XG4gICAgICAgICAgICAgIGxldCBxID0gdGhpcy5zZWFyY2hRdWVyeTtcblxuICAgICAgICAgICAgICByZXR1cm4gcS5rZXl3b3JkLnJlcGxhY2UoL1xccy9nLCAnKycpKycraW4rJytxLmNpdHkucmVwbGFjZSgvXFxzL2csICcrJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHRoaXMuc2l6ZSkgPyAnby1pbnB1dC0tJyArIHRoaXMuc2l6ZSA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnRuU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLnNpemUpID8gJ28tYnV0dG9uLS0nICsgdGhpcy5zaXplIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWdnZXN0aW9uT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3QvbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQaWxpaCBLb3RhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHRoaXMuaW5wdXRTaXplXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3Qva2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ055YXJpIEFwYT8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzczogdGhpcy5pbnB1dFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVmYXVsdFN1Z2dlc3Rpb25PbkVtcHR5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFN1Z2dlc3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIm1ha2FuXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJrb3BpXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJzYWxvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwic3BhXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJiYXJiZXJzaG9wXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJmdXRzYWxcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcImd5bVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICckcm91dGUnOiAnZmV0Y2hRdWVyeSdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlQWxsKHsgY2l0eTogdGhpcy5zZWFyY2hRdWVyeS5jaXR5LCBrZXl3b3JkOiB0aGlzLnNlYXJjaFF1ZXJ5LmtleXdvcmQgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsaWRhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zZWFyY2gvJyt0aGlzLnF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzIHN0dWZmLlxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcgKG5vbi12YWxpZGF0aW9uIHJlbGF0ZWQpLlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGZpZWxkLCBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZmllbGQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW9sb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24odGhpcy5nZXRDdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDdXJyZW50Q2l0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5sb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkubG9jYXRpb24gPSBsb2NhdGlvbi5sYXRpdHVkZSsnLCcrbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvY29kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiBsYXRMbmd9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlc1swXSA9PSAnbG9jYWxpdHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMubG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gIV8uaXNFbXB0eShyZXN1bHQpID8gcmVzdWx0WzBdLmFkZHJlc3NfY29tcG9uZW50c1swXS5sb25nX25hbWUgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZW9jb2RpbmcgZmFpbGVkOiBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2l0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIENvb2tpZXMuZ2V0KCd1c2VyLWNpdHknKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9FdmVudC5maXJlKCdzaG93LWNpdGllcy1tb2RhbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgQ29va2llcy5nZXQoJ3VzZXItY2l0eScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWFyY2hGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlYXJjaEZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbmltLm9mZignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VhcmNoRm9ybSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGljb25pbS5vbignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaXR5Q2hhbmdlZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudEVudGVyKGUpIHtcbiAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb29nbGVTZWFyY2hTdWdnZXN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzOiBbJyhjaXRpZXMpJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtjb3VudHJ5OiBcImlkXCJ9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMobmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMC43ODkyNzUsIDExMy45MjEzMjcwMDAwMDAwMikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy4kcmVmcy5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoQm94ID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJveC5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gc2VhcmNoQm94LmdldFBsYWNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkuY2l0eSA9IGxvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRyYWN0UXVlcnkocXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZighcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3BsaXQoJ2luJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9cXCsvZywgJyAnLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsga2V5d29yZDogcXVlcnlbMF0sIGNpdHk6IHF1ZXJ5WzFdIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoUXVlcnkoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5leHRyYWN0UXVlcnkodGhpcy4kcm91dGUucGFyYW1zLnF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2VhcmNoUXVlcnksIHF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWVyeSgpO1xuXG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlU2VhcmNoU3VnZ2VzdGlvbigpO1xuXG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oJ3RvZ2dsZS1zZWFyY2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTZWFyY2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU2VhcmNoLnZ1ZT8wOTRlN2NhYSIsIi8qKlxuICogdmVlLXZhbGlkYXRlIHYyLjAuMC1yYy4xM1xuICogKGMpIDIwMTcgQWJkZWxyYWhtYW4gQXdhZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5WZWVWYWxpZGF0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTb21lIEFscGhhIFJlZ2V4IGhlbHBlcnMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNvL3ZhbGlkYXRvci5qcy9ibG9iL21hc3Rlci9zcmMvbGliL2FscGhhLmpzXG4gKi9cblxudmFyIGFscGhhJDEgPSB7XG4gIGVuOiAvXltBLVpdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1dKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnF0qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xbldKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV0qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkF0qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0qJC9cbn07XG5cbnZhciBhbHBoYVNwYWNlcyA9IHtcbiAgZW46IC9eW0EtWlxcc10qJC9pLFxuICBjczogL15bQS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XFxzXSokL2ksXG4gIGRhOiAvXltBLVrDhsOYw4VcXHNdKiQvaSxcbiAgZGU6IC9eW0EtWsOEw5bDnMOfXFxzXSokL2ksXG4gIGVzOiAvXltBLVrDgcOJw43DkcOTw5rDnFxcc10qJC9pLFxuICBmcjogL15bQS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhcXHNdKiQvaSxcbiAgbHQ6IC9eW0EtWsSExIzEmMSWxK7FoMWyxarFvVxcc10qJC9pLFxuICBubDogL15bQS1aw4nDi8OPw5PDlsOcXFxzXSokL2ksXG4gIGh1OiAvXltBLVrDgcOJw43Dk8OWxZDDmsOcxbBcXHNdKiQvaSxcbiAgcGw6IC9eW0EtWsSExIbEmMWaxYHFg8OTxbvFuVxcc10qJC9pLFxuICBwdDogL15bQS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xcXHNdKiQvaSxcbiAgcnU6IC9eW9CQLdCv0IFcXHNdKiQvaSxcbiAgc2s6IC9eW0EtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XFxzXSokL2ksXG4gIHNyOiAvXltBLVrEjMSGxb3FoMSQXFxzXSokL2ksXG4gIHRyOiAvXltBLVrDh8SexLDEscOWxZ7DnFxcc10qJC9pLFxuICB1azogL15b0JAt0KnQrNCu0K/QhNCG0IfSkFxcc10qJC9pLFxuICBhcjogL15b2KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXFxzXSokL1xufTtcblxudmFyIGFscGhhbnVtZXJpYyA9IHtcbiAgZW46IC9eWzAtOUEtWl0qJC9pLFxuICBjczogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSokL2ksXG4gIGRhOiAvXlswLTlBLVrDhsOYw4VdJC9pLFxuICBkZTogL15bMC05QS1aw4TDlsOcw59dKiQvaSxcbiAgZXM6IC9eWzAtOUEtWsOBw4nDjcORw5PDmsOcXSokL2ksXG4gIGZyOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0qJC9pLFxuICBsdDogL15bMC05QS1axITEjMSYxJbErsWgxbLFqsW9XSokL2ksXG4gIGh1OiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKiQvaSxcbiAgbmw6IC9eWzAtOUEtWsOJw4vDj8OTw5bDnF0qJC9pLFxuICBwbDogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5XSokL2ksXG4gIHB0OiAvXlswLTlBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0qJC9pLFxuICBydTogL15bMC050JAt0K/QgV0qJC9pLFxuICBzazogL15bMC05QS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1dKiQvaSxcbiAgc3I6IC9eWzAtOUEtWsSMxIbFvcWgxJBdKiQvaSxcbiAgdHI6IC9eWzAtOUEtWsOHxJ7EsMSxw5bFnsOcXSokL2ksXG4gIHVrOiAvXlswLTnQkC3QqdCs0K7Qr9CE0IbQh9KQXSokL2ksXG4gIGFyOiAvXlvZoNmh2aLZo9mk2aXZptmn2ajZqTAtOdih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0qJC9cbn07XG5cbnZhciBhbHBoYURhc2ggPSB7XG4gIGVuOiAvXlswLTlBLVpfLV0qJC9pLFxuICBjczogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9Xy1dKiQvaSxcbiAgZGE6IC9eWzAtOUEtWsOGw5jDhV8tXSokL2ksXG4gIGRlOiAvXlswLTlBLVrDhMOWw5zDn18tXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF8tXSokL2ksXG4gIGZyOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF8tXSokL2ksXG4gIGx0OiAvXlswLTlBLVrEhMSMxJjElsSuxaDFssWqxb1fLV0qJC9pLFxuICBubDogL15bMC05QS1aw4nDi8OPw5PDlsOcXy1dKiQvaSxcbiAgaHU6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF8tXSokL2ksXG4gIHBsOiAvXlswLTlBLVrEhMSGxJjFmsWBxYPDk8W7xblfLV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xfLV0qJC9pLFxuICBydTogL15bMC050JAt0K/QgV8tXSokL2ksXG4gIHNrOiAvXlswLTlBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV8tXSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXy1dKiQvaSxcbiAgdHI6IC9eWzAtOUEtWsOHxJ7EsMSxw5bFnsOcXy1dKiQvaSxcbiAgdWs6IC9eWzAtOdCQLdCp0KzQrtCv0ITQhtCH0pBfLV0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBfLV0qJC9cbn07XG5cbnZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlKHZhbCwgW2xvY2FsZV0pOyB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYSQxKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhJDFbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhJDFbbG9jYWxlXSB8fCBhbHBoYSQxLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQxID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtudWxsXTtcbiAgdmFyIGxvY2FsZSA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMSh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFEYXNoKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhRGFzaFtsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFEYXNoW2xvY2FsZV0gfHwgYWxwaGFEYXNoLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQyID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtudWxsXTtcbiAgdmFyIGxvY2FsZSA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMih2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFudW1lcmljKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhbnVtZXJpY1tsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFudW1lcmljW2xvY2FsZV0gfHwgYWxwaGFudW1lcmljLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQzID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtudWxsXTtcbiAgdmFyIGxvY2FsZSA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkMyh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGFTcGFjZXMpLnNvbWUoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gYWxwaGFTcGFjZXNbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhU3BhY2VzW2xvY2FsZV0gfHwgYWxwaGFTcGFjZXMuZW4pLnRlc3QodmFsdWUpO1xufTtcblxudmFyIHZhbGlkYXRlJDQgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ0KHZhbCwgW21pbiwgbWF4XSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcihtaW4pIDw9IHZhbHVlICYmIE51bWJlcihtYXgpID49IHZhbHVlO1xufTtcblxudmFyIGNvbmZpcm1lZCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHsgcmV0dXJuIFN0cmluZyh2YWx1ZSkgPT09IFN0cmluZyhvdGhlcik7IH07XG5cbmZ1bmN0aW9uIHVud3JhcEV4cG9ydHMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBhc3NlcnRTdHJpbmdfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFzc2VydFN0cmluZztcbmZ1bmN0aW9uIGFzc2VydFN0cmluZyhpbnB1dCkge1xuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuXG4gIGlmICghaXNTdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIGxpYnJhcnkgKHZhbGlkYXRvci5qcykgdmFsaWRhdGVzIHN0cmluZ3Mgb25seScpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNDcmVkaXRDYXJkXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0NyZWRpdENhcmQ7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIGNyZWRpdENhcmQgPSAvXig/OjRbMC05XXsxMn0oPzpbMC05XXszfSk/fDVbMS01XVswLTldezE0fXwoMjIyWzEtOV18MjJbMy05XVswLTldfDJbMy02XVswLTldezJ9fDI3WzAxXVswLTldfDI3MjApWzAtOV17MTJ9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfXw2MlswLTldezE0fSkkLztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG5mdW5jdGlvbiBpc0NyZWRpdENhcmQoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgc2FuaXRpemVkID0gc3RyLnJlcGxhY2UoL1stIF0rL2csICcnKTtcbiAgaWYgKCFjcmVkaXRDYXJkLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgc3VtID0gMDtcbiAgdmFyIGRpZ2l0ID0gdm9pZCAwO1xuICB2YXIgdG1wTnVtID0gdm9pZCAwO1xuICB2YXIgc2hvdWxkRG91YmxlID0gdm9pZCAwO1xuICBmb3IgKHZhciBpID0gc2FuaXRpemVkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZGlnaXQgPSBzYW5pdGl6ZWQuc3Vic3RyaW5nKGksIGkgKyAxKTtcbiAgICB0bXBOdW0gPSBwYXJzZUludChkaWdpdCwgMTApO1xuICAgIGlmIChzaG91bGREb3VibGUpIHtcbiAgICAgIHRtcE51bSAqPSAyO1xuICAgICAgaWYgKHRtcE51bSA+PSAxMCkge1xuICAgICAgICBzdW0gKz0gdG1wTnVtICUgMTAgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IHRtcE51bTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VtICs9IHRtcE51bTtcbiAgICB9XG4gICAgc2hvdWxkRG91YmxlID0gIXNob3VsZERvdWJsZTtcbiAgfVxuICByZXR1cm4gISEoc3VtICUgMTAgPT09IDAgPyBzYW5pdGl6ZWQgOiBmYWxzZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNDcmVkaXRDYXJkID0gdW53cmFwRXhwb3J0cyhpc0NyZWRpdENhcmRfMSk7XG5cbnZhciBjcmVkaXRfY2FyZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaXNDcmVkaXRDYXJkKFN0cmluZyh2YWx1ZSkpOyB9O1xuXG52YXIgdmFsaWRhdGUkNSA9IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG4gIHZhciBkZWNpbWFscyA9IEFycmF5LmlzQXJyYXkocGFyYW1zKSA/IChwYXJhbXNbMF0gfHwgJyonKSA6ICcqJztcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDUodmFsLCBwYXJhbXMpOyB9KTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaWYgaXMgMC5cbiAgaWYgKE51bWJlcihkZWNpbWFscykgPT09IDApIHtcbiAgICByZXR1cm4gL14tP1xcZCokLy50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIHZhciByZWdleFBhcnQgPSBkZWNpbWFscyA9PT0gJyonID8gJysnIDogKFwiezEsXCIgKyBkZWNpbWFscyArIFwifVwiKTtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgoXCJeLT9cXFxcZCooXFxcXC5cXFxcZFwiICsgcmVnZXhQYXJ0ICsgXCIpPyRcIikpO1xuXG4gIGlmICghIHJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlID09PSBwYXJzZWRWYWx1ZTtcbn07XG5cbnZhciB2YWxpZGF0ZSQ2ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkNih2YWwsIFtsZW5ndGhdKTsgfSk7XG4gIH1cbiAgdmFyIHN0clZhbCA9IFN0cmluZyh2YWx1ZSk7XG5cbiAgcmV0dXJuIC9eWzAtOV0qJC8udGVzdChzdHJWYWwpICYmIHN0clZhbC5sZW5ndGggPT09IE51bWJlcihsZW5ndGgpO1xufTtcblxudmFyIHZhbGlkYXRlSW1hZ2UgPSBmdW5jdGlvbiAoZmlsZSwgd2lkdGgsIGhlaWdodCkge1xuICB2YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7IHZhbGlkOiBmYWxzZSB9KTsgfTtcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHtcbiAgICAgIHZhbGlkOiBpbWFnZS53aWR0aCA9PT0gTnVtYmVyKHdpZHRoKSAmJiBpbWFnZS5oZWlnaHQgPT09IE51bWJlcihoZWlnaHQpXG4gICAgfSk7IH07XG5cbiAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICB9KTtcbn07XG5cbnZhciBkaW1lbnNpb25zID0gZnVuY3Rpb24gKGZpbGVzLCByZWYpIHtcbiAgdmFyIHdpZHRoID0gcmVmWzBdO1xuICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gIHZhciBsaXN0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBpZiBmaWxlIGlzIG5vdCBhbiBpbWFnZSwgcmVqZWN0LlxuICAgIGlmICghIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGVzW2ldLm5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGlzdC5wdXNoKGZpbGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChsaXN0Lm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdmFsaWRhdGVJbWFnZShmaWxlLCB3aWR0aCwgaGVpZ2h0KTsgfSkpO1xufTtcblxudmFyIG1lcmdlXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZTtcbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzWzFdO1xuXG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmpba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNCeXRlTGVuZ3RoXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNCeXRlTGVuZ3RoO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuZnVuY3Rpb24gaXNCeXRlTGVuZ3RoKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIG1pbiA9IHZvaWQgMDtcbiAgdmFyIG1heCA9IHZvaWQgMDtcbiAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgIG1pbiA9IG9wdGlvbnMubWluIHx8IDA7XG4gICAgbWF4ID0gb3B0aW9ucy5tYXg7XG4gIH0gZWxzZSB7XG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHk6IGlzQnl0ZUxlbmd0aChzdHIsIG1pbiBbLCBtYXhdKVxuICAgIG1pbiA9IGFyZ3VtZW50c1sxXTtcbiAgICBtYXggPSBhcmd1bWVudHNbMl07XG4gIH1cbiAgdmFyIGxlbiA9IGVuY29kZVVSSShzdHIpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gIHJldHVybiBsZW4gPj0gbWluICYmICh0eXBlb2YgbWF4ID09PSAndW5kZWZpbmVkJyB8fCBsZW4gPD0gbWF4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0ZRRE4gPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ZEUU47XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfZnFkbl9vcHRpb25zID0ge1xuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0ZEUU4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9mcWRuX29wdGlvbnMpO1xuXG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgdHJhaWxpbmcgZG90IGJlZm9yZSBjaGVja2luZyB2YWxpZGl0eSAqL1xuICBpZiAob3B0aW9ucy5hbGxvd190cmFpbGluZ19kb3QgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy4nKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJyk7XG4gIGlmIChvcHRpb25zLnJlcXVpcmVfdGxkKSB7XG4gICAgdmFyIHRsZCA9IHBhcnRzLnBvcCgpO1xuICAgIGlmICghcGFydHMubGVuZ3RoIHx8ICEvXihbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH18eG5bYS16MC05LV17Mix9KSQvaS50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gZGlzYWxsb3cgc3BhY2VzXG4gICAgaWYgKC9bXFxzXFx1MjAwMi1cXHUyMDBCXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRlxcdURCNDBcXHVEQzIwXS8udGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAodmFyIHBhcnQsIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0ID0gcGFydHNbaV07XG4gICAgaWYgKG9wdGlvbnMuYWxsb3dfdW5kZXJzY29yZXMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL18vZywgJycpO1xuICAgIH1cbiAgICBpZiAoIS9eW2EtelxcdTAwYTEtXFx1ZmZmZjAtOS1dKyQvaS50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGRpc2FsbG93IGZ1bGwtd2lkdGggY2hhcnNcbiAgICBpZiAoL1tcXHVmZjAxLVxcdWZmNWVdLy50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXJ0WzBdID09PSAnLScgfHwgcGFydFtwYXJ0Lmxlbmd0aCAtIDFdID09PSAnLScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNFbWFpbF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5cblxudmFyIF9pc0J5dGVMZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0J5dGVMZW5ndGhfMSk7XG5cblxuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzRlFETik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2VtYWlsX29wdGlvbnMgPSB7XG4gIGFsbG93X2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIHJlcXVpcmVfZGlzcGxheV9uYW1lOiBmYWxzZSxcbiAgYWxsb3dfdXRmOF9sb2NhbF9wYXJ0OiB0cnVlLFxuICByZXF1aXJlX3RsZDogdHJ1ZVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIGRpc3BsYXlOYW1lID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdK1thLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcLlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRlxcc10qPCguKyk+JC9pO1xudmFyIGVtYWlsVXNlclBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl0rJC9pO1xudmFyIHF1b3RlZEVtYWlsVXNlciA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl0pKSokL2k7XG52YXIgZW1haWxVc2VyVXRmOFBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rJC9pO1xudmFyIHF1b3RlZEVtYWlsVXNlclV0ZjggPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZVxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkqJC9pO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNFbWFpbChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2VtYWlsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLnJlcXVpcmVfZGlzcGxheV9uYW1lIHx8IG9wdGlvbnMuYWxsb3dfZGlzcGxheV9uYW1lKSB7XG4gICAgdmFyIGRpc3BsYXlfZW1haWwgPSBzdHIubWF0Y2goZGlzcGxheU5hbWUpO1xuICAgIGlmIChkaXNwbGF5X2VtYWlsKSB7XG4gICAgICBzdHIgPSBkaXNwbGF5X2VtYWlsWzFdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcGFydHMucG9wKCk7XG4gIHZhciB1c2VyID0gcGFydHMuam9pbignQCcpO1xuXG4gIHZhciBsb3dlcl9kb21haW4gPSBkb21haW4udG9Mb3dlckNhc2UoKTtcbiAgaWYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgdXNlciA9IHVzZXIucmVwbGFjZSgvXFwuL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkodXNlciwgeyBtYXg6IDY0IH0pIHx8ICEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkoZG9tYWluLCB7IG1heDogMjU0IH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzRlFETjIuZGVmYXVsdCkoZG9tYWluLCB7IHJlcXVpcmVfdGxkOiBvcHRpb25zLnJlcXVpcmVfdGxkIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVzZXJbMF0gPT09ICdcIicpIHtcbiAgICB1c2VyID0gdXNlci5zbGljZSgxLCB1c2VyLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IHF1b3RlZEVtYWlsVXNlclV0ZjgudGVzdCh1c2VyKSA6IHF1b3RlZEVtYWlsVXNlci50ZXN0KHVzZXIpO1xuICB9XG5cbiAgdmFyIHBhdHRlcm4gPSBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IGVtYWlsVXNlclV0ZjhQYXJ0IDogZW1haWxVc2VyUGFydDtcblxuICB2YXIgdXNlcl9wYXJ0cyA9IHVzZXIuc3BsaXQoJy4nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2VyX3BhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QodXNlcl9wYXJ0c1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0VtYWlsID0gdW53cmFwRXhwb3J0cyhpc0VtYWlsXzEpO1xuXG52YXIgdmFsaWRhdGUkNyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNFbWFpbChTdHJpbmcodmFsKSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgZXh0ID0gZnVuY3Rpb24gKGZpbGVzLCBleHRlbnNpb25zKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiLihcIiArIChleHRlbnNpb25zLmpvaW4oJ3wnKSkgKyBcIikkXCIpLCAnaScpO1xuXG4gIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gcmVnZXgudGVzdChmaWxlLm5hbWUpOyB9KTtcbn07XG5cbnZhciBpbWFnZSA9IGZ1bmN0aW9uIChmaWxlcykgeyByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGUubmFtZSk7IH1cbik7IH07XG5cbnZhciB2YWxpZGF0ZSQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ4KHZhbCwgb3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiAhISBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBvcHRpb24gPT0gdmFsdWU7IH0pLmxlbmd0aDtcbn07XG5cbnZhciBpc0lQXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lQO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpcHY0TWF5YmUgPSAvXihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSkkLztcbnZhciBpcHY2QmxvY2sgPSAvXlswLTlBLUZdezEsNH0kL2k7XG5cbmZ1bmN0aW9uIGlzSVAoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGlzSVAoc3RyLCA0KSB8fCBpc0lQKHN0ciwgNik7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzQnKSB7XG4gICAgaWYgKCFpcHY0TWF5YmUudGVzdChzdHIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydHNbM10gPD0gMjU1O1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc2Jykge1xuICAgIHZhciBibG9ja3MgPSBzdHIuc3BsaXQoJzonKTtcbiAgICB2YXIgZm91bmRPbWlzc2lvbkJsb2NrID0gZmFsc2U7IC8vIG1hcmtlciB0byBpbmRpY2F0ZSA6OlxuXG4gICAgLy8gQXQgbGVhc3Qgc29tZSBPUyBhY2NlcHQgdGhlIGxhc3QgMzIgYml0cyBvZiBhbiBJUHY2IGFkZHJlc3NcbiAgICAvLyAoaS5lLiAyIG9mIHRoZSBibG9ja3MpIGluIElQdjQgbm90YXRpb24sIGFuZCBSRkMgMzQ5MyBzYXlzXG4gICAgLy8gdGhhdCAnOjpmZmZmOmEuYi5jLmQnIGlzIHZhbGlkIGZvciBJUHY0LW1hcHBlZCBJUHY2IGFkZHJlc3NlcyxcbiAgICAvLyBhbmQgJzo6YS5iLmMuZCcgaXMgZGVwcmVjYXRlZCwgYnV0IGFsc28gdmFsaWQuXG4gICAgdmFyIGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA9IGlzSVAoYmxvY2tzW2Jsb2Nrcy5sZW5ndGggLSAxXSwgNCk7XG4gICAgdmFyIGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MgPSBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPyA3IDogODtcblxuICAgIGlmIChibG9ja3MubGVuZ3RoID4gZXhwZWN0ZWROdW1iZXJPZkJsb2Nrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBpbml0aWFsIG9yIGZpbmFsIDo6XG4gICAgaWYgKHN0ciA9PT0gJzo6Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAvLyB0ZXN0IGZvciBhIDo6IHdoaWNoIGNhbiBub3QgYmUgYXQgdGhlIHN0cmluZyBzdGFydC9lbmRcbiAgICAgIC8vIHNpbmNlIHRob3NlIGNhc2VzIGhhdmUgYmVlbiBoYW5kbGVkIGFib3ZlXG4gICAgICBpZiAoYmxvY2tzW2ldID09PSAnJyAmJiBpID4gMCAmJiBpIDwgYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbXVsdGlwbGUgOjogaW4gYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayAmJiBpID09PSBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSB0aGF0IHRoZSBsYXN0XG4gICAgICAgIC8vIGJsb2NrIGlzIGEgdmFsaWQgSVB2NCBhZGRyZXNzXG4gICAgICB9IGVsc2UgaWYgKCFpcHY2QmxvY2sudGVzdChibG9ja3NbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPT09IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3M7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzSVAgPSB1bndyYXBFeHBvcnRzKGlzSVBfMSk7XG5cbnZhciBpcCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbNF07XG4gIHZhciB2ZXJzaW9uID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc0lQKHZhbCwgW3ZlcnNpb25dKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNJUCh2YWx1ZSwgdmVyc2lvbik7XG59O1xuXG52YXIgbWF4ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBsZW5ndGggPj0gMDtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA8PSBsZW5ndGg7XG59O1xuXG52YXIgbWF4X3ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1heCA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlKSA8PSBtYXg7XG59O1xuXG52YXIgbWltZXMgPSBmdW5jdGlvbiAoZmlsZXMsIG1pbWVzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKChtaW1lcy5qb2luKCd8JykucmVwbGFjZSgnKicsICcuKycpKSArIFwiJFwiKSwgJ2knKTtcblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHJlZ2V4LnRlc3QoZmlsZS50eXBlKTsgfSk7XG59O1xuXG52YXIgbWluID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPj0gbGVuZ3RoO1xufTtcblxudmFyIG1pbl92YWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtaW4gPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPj0gbWluO1xufTtcblxudmFyIHZhbGlkYXRlJDkgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDkodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuICEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgbnVtZXJpYyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWwpKTsgfSk7XG4gIH1cblxuICByZXR1cm4gL15bMC05XSskLy50ZXN0KFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIHJlZ2V4ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIHJlZ2V4ID0gcmVmWzBdO1xuICB2YXIgZmxhZ3MgPSByZWYuc2xpY2UoMSk7XG5cbiAgaWYgKHJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIGZsYWdzKS50ZXN0KFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIHJlcXVpcmVkID0gZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IFtmYWxzZV07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICEhIHZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIC8vIGluY2FzZSBhIGZpZWxkIGNvbnNpZGVycyBgZmFsc2VgIGFzIGFuIGVtcHR5IHZhbHVlIGxpa2UgY2hlY2tib3hlcy5cbiAgdmFyIGludmFsaWRhdGVGYWxzZSA9IHBhcmFtc1swXTtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSAmJiBpbnZhbGlkYXRlRmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhISBTdHJpbmcodmFsdWUpLnRyaW0oKS5sZW5ndGg7XG59O1xuXG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChmaWxlcywgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmWzBdO1xuXG4gIGlmIChpc05hTihzaXplKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBuU2l6ZSA9IE51bWJlcihzaXplKSAqIDEwMjQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZmlsZXNbaV0uc2l6ZSA+IG5TaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNVUkxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVVJMO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzRlFETik7XG5cblxuXG52YXIgX2lzSVAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0lQXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlXG59O1xuXG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICBpZiAoaG9zdCA9PT0gbWF0Y2ggfHwgaXNSZWdFeHAobWF0Y2gpICYmIG1hdGNoLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVVJMKHVybCwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkodXJsKTtcbiAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA+PSAyMDgzIHx8IC9bXFxzPD5dLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHVybC5pbmRleE9mKCdtYWlsdG86JykgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfdXJsX29wdGlvbnMpO1xuICB2YXIgcHJvdG9jb2wgPSB2b2lkIDAsXG4gICAgICBhdXRoID0gdm9pZCAwLFxuICAgICAgaG9zdCA9IHZvaWQgMCxcbiAgICAgIGhvc3RuYW1lID0gdm9pZCAwLFxuICAgICAgcG9ydCA9IHZvaWQgMCxcbiAgICAgIHBvcnRfc3RyID0gdm9pZCAwLFxuICAgICAgc3BsaXQgPSB2b2lkIDAsXG4gICAgICBpcHY2ID0gdm9pZCAwO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJz8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnOi8vJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgcHJvdG9jb2wgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChvcHRpb25zLnJlcXVpcmVfdmFsaWRfcHJvdG9jb2wgJiYgb3B0aW9ucy5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9wcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHMgJiYgdXJsLnN1YnN0cigwLCAyKSA9PT0gJy8vJykge1xuICAgIHNwbGl0WzBdID0gdXJsLnN1YnN0cigyKTtcbiAgfVxuICB1cmwgPSBzcGxpdC5qb2luKCc6Ly8nKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnLycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIGlmICh1cmwgPT09ICcnICYmICFvcHRpb25zLnJlcXVpcmVfaG9zdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJ0AnKTtcbiAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBhdXRoID0gc3BsaXQuc2hpZnQoKTtcbiAgICBpZiAoYXV0aC5pbmRleE9mKCc6JykgPj0gMCAmJiBhdXRoLnNwbGl0KCc6JykubGVuZ3RoID4gMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBob3N0bmFtZSA9IHNwbGl0LmpvaW4oJ0AnKTtcblxuICBwb3J0X3N0ciA9IG51bGw7XG4gIGlwdjYgPSBudWxsO1xuICB2YXIgaXB2Nl9tYXRjaCA9IGhvc3RuYW1lLm1hdGNoKHdyYXBwZWRfaXB2Nik7XG4gIGlmIChpcHY2X21hdGNoKSB7XG4gICAgaG9zdCA9ICcnO1xuICAgIGlwdjYgPSBpcHY2X21hdGNoWzFdO1xuICAgIHBvcnRfc3RyID0gaXB2Nl9tYXRjaFsyXSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIHNwbGl0ID0gaG9zdG5hbWUuc3BsaXQoJzonKTtcbiAgICBob3N0ID0gc3BsaXQuc2hpZnQoKTtcbiAgICBpZiAoc3BsaXQubGVuZ3RoKSB7XG4gICAgICBwb3J0X3N0ciA9IHNwbGl0LmpvaW4oJzonKTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9ydF9zdHIgIT09IG51bGwpIHtcbiAgICBwb3J0ID0gcGFyc2VJbnQocG9ydF9zdHIsIDEwKTtcbiAgICBpZiAoIS9eWzAtOV0rJC8udGVzdChwb3J0X3N0cikgfHwgcG9ydCA8PSAwIHx8IHBvcnQgPiA2NTUzNSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghKDAsIF9pc0lQMi5kZWZhdWx0KShob3N0KSAmJiAhKDAsIF9pc0ZRRE4yLmRlZmF1bHQpKGhvc3QsIG9wdGlvbnMpICYmICghaXB2NiB8fCAhKDAsIF9pc0lQMi5kZWZhdWx0KShpcHY2LCA2KSkgJiYgaG9zdCAhPT0gJ2xvY2FsaG9zdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBob3N0ID0gaG9zdCB8fCBpcHY2O1xuXG4gIGlmIChvcHRpb25zLmhvc3Rfd2hpdGVsaXN0ICYmICFjaGVja0hvc3QoaG9zdCwgb3B0aW9ucy5ob3N0X3doaXRlbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaG9zdF9ibGFja2xpc3QgJiYgY2hlY2tIb3N0KGhvc3QsIG9wdGlvbnMuaG9zdF9ibGFja2xpc3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNVUkwgPSB1bndyYXBFeHBvcnRzKGlzVVJMXzEpO1xuXG52YXIgdXJsID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFt0cnVlXTtcbiAgdmFyIHJlcXVpcmVQcm90b2NvbCA9IHJlZlswXTtcblxuICB2YXIgb3B0aW9ucyA9IHsgcmVxdWlyZV9wcm90b2NvbDogISFyZXF1aXJlUHJvdG9jb2wsIGFsbG93X3VuZGVyc2NvcmVzOiB0cnVlIH07XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc1VSTCh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc1VSTCh2YWx1ZSwgb3B0aW9ucyk7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbnZhciBSdWxlcyA9IHtcbiAgYWxwaGFfZGFzaDogdmFsaWRhdGUkMSxcbiAgYWxwaGFfbnVtOiB2YWxpZGF0ZSQyLFxuICBhbHBoYV9zcGFjZXM6IHZhbGlkYXRlJDMsXG4gIGFscGhhOiB2YWxpZGF0ZSxcbiAgYmV0d2VlbjogdmFsaWRhdGUkNCxcbiAgY29uZmlybWVkOiBjb25maXJtZWQsXG4gIGNyZWRpdF9jYXJkOiBjcmVkaXRfY2FyZCxcbiAgZGVjaW1hbDogdmFsaWRhdGUkNSxcbiAgZGlnaXRzOiB2YWxpZGF0ZSQ2LFxuICBkaW1lbnNpb25zOiBkaW1lbnNpb25zLFxuICBlbWFpbDogdmFsaWRhdGUkNyxcbiAgZXh0OiBleHQsXG4gIGltYWdlOiBpbWFnZSxcbiAgaW46IHZhbGlkYXRlJDgsXG4gIGlwOiBpcCxcbiAgbWF4OiBtYXgsXG4gIG1heF92YWx1ZTogbWF4X3ZhbHVlLFxuICBtaW1lczogbWltZXMsXG4gIG1pbjogbWluLFxuICBtaW5fdmFsdWU6IG1pbl92YWx1ZSxcbiAgbm90X2luOiB2YWxpZGF0ZSQ5LFxuICBudW1lcmljOiBudW1lcmljLFxuICByZWdleDogcmVnZXgsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgc2l6ZTogc2l6ZSxcbiAgdXJsOiB1cmxcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuIHRoZSBuYW1lIG11c3QgYmUga2ViYWItY2FzZS5cbiAqL1xudmFyIGdldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUpIHsgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSkpOyB9O1xuXG4vKipcbiAqIFNldHMgdGhlIGRhdGEgYXR0cmlidXRlLlxuICogQHBhcmFtIHsqfSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICovXG52YXIgc2V0RGF0YUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbCwgbmFtZSwgdmFsdWUpIHsgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSksIHZhbHVlKTsgfTtcblxuLyoqXG4gKiBTaGFsbG93IG9iamVjdCBjb21wYXJpc29uLlxuICpcbiAqIEBwYXJhbSB7Kn0gbGhzIFxuICogQHBhcmFtIHsqfSByaHMgXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIChsaHMsIHJocykge1xuICBpZiAobGhzIGluc3RhbmNlb2YgUmVnRXhwICYmIHJocyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBpc0VxdWFsKGxocy5zb3VyY2UsIHJocy5zb3VyY2UpICYmIGlzRXF1YWwobGhzLmZsYWdzLCByaHMuZmxhZ3MpO1xuICB9XG5cbiAgLy8gaWYgYm90aCBhcmUgb2JqZWN0cywgY29tcGFyZSBlYWNoIGtleSByZWN1cnNpdmVseS5cbiAgaWYgKGlzT2JqZWN0KGxocykgJiYgaXNPYmplY3QocmhzKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsaHMpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBpc0VxdWFsKGxoc1trZXldLCByaHNba2V5XSk7XG4gICAgfSkgJiYgT2JqZWN0LmtleXMocmhzKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gaXNFcXVhbChsaHNba2V5XSwgcmhzW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxocyA9PT0gcmhzO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBpbnB1dCBmaWVsZCBzY29wZS5cbiAqL1xudmFyIGdldFNjb3BlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciBzY29wZSA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICdzY29wZScpO1xuICBpZiAoISBzY29wZSAmJiBlbC5mb3JtKSB7XG4gICAgc2NvcGUgPSBnZXREYXRhQXR0cmlidXRlKGVsLmZvcm0sICdzY29wZScpO1xuICB9XG5cbiAgcmV0dXJuIHNjb3BlIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGluIGFuIG9iamVjdCBzYWZlbHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7Kn0gZGVmXG4gKi9cbnZhciBnZXRQYXRoID0gZnVuY3Rpb24gKHByb3BQYXRoLCB0YXJnZXQsIGRlZikge1xuICBpZiAoIGRlZiA9PT0gdm9pZCAwICkgZGVmID0gdW5kZWZpbmVkO1xuXG4gIGlmICghcHJvcFBhdGggfHwgIXRhcmdldCkgeyByZXR1cm4gZGVmOyB9XG4gIHZhciB2YWx1ZSA9IHRhcmdldDtcbiAgcHJvcFBhdGguc3BsaXQoJy4nKS5ldmVyeShmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmICghIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcHJvcCkgJiYgdmFsdWVbcHJvcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSBkZWY7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlW3Byb3BdO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhdGggZXhpc3RzIHdpdGhpbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqL1xudmFyIGhhc1BhdGggPSBmdW5jdGlvbiAocGF0aCwgdGFyZ2V0KSB7XG4gIHZhciBvYmogPSB0YXJnZXQ7XG4gIHJldHVybiBwYXRoLnNwbGl0KCcuJykuZXZlcnkoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoISBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9iaiA9IG9ialtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHJ1bGVcbiAqL1xudmFyIHBhcnNlUnVsZSA9IGZ1bmN0aW9uIChydWxlKSB7XG4gIHZhciBwYXJhbXMgPSBbXTtcbiAgdmFyIG5hbWUgPSBydWxlLnNwbGl0KCc6JylbMF07XG5cbiAgaWYgKH5ydWxlLmluZGV4T2YoJzonKSkge1xuICAgIHBhcmFtcyA9IHJ1bGUuc3BsaXQoJzonKS5zbGljZSgxKS5qb2luKCc6Jykuc3BsaXQoJywnKTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWU6IG5hbWUsIHBhcmFtczogcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIGdpdmVuIHJ1bGVzIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBydWxlc1xuICovXG52YXIgbm9ybWFsaXplUnVsZXMgPSBmdW5jdGlvbiAocnVsZXMpIHtcbiAgLy8gaWYgZmFsc3kgdmFsdWUgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgaWYgKCFydWxlcykge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciB2YWxpZGF0aW9ucyA9IHt9O1xuICBpZiAoaXNPYmplY3QocnVsZXMpKSB7XG4gICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIGlmIChydWxlc1tydWxlXSA9PT0gdHJ1ZSkge1xuICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShydWxlc1tydWxlXSkpIHtcbiAgICAgICAgcGFyYW1zID0gcnVsZXNbcnVsZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBbcnVsZXNbcnVsZV1dO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXNbcnVsZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIHZhbGlkYXRpb25zW3J1bGVdID0gcGFyYW1zO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zO1xuICB9XG5cbiAgcnVsZXMuc3BsaXQoJ3wnKS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIHBhcnNlZFJ1bGUgPSBwYXJzZVJ1bGUocnVsZSk7XG4gICAgaWYgKCEgcGFyc2VkUnVsZS5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsaWRhdGlvbnNbcGFyc2VkUnVsZS5uYW1lXSA9IHBhcnNlZFJ1bGUucGFyYW1zO1xuICB9KTtcblxuICByZXR1cm4gdmFsaWRhdGlvbnM7XG59O1xuXG4vKipcbiAqIERlYm91bmNlcyBhIGZ1bmN0aW9uLlxuICovXG52YXIgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4sIHdhaXQsIGltbWVkaWF0ZSkge1xuICBpZiAoIHdhaXQgPT09IHZvaWQgMCApIHdhaXQgPSAwO1xuICBpZiAoIGltbWVkaWF0ZSA9PT0gdm9pZCAwICkgaW1tZWRpYXRlID0gZmFsc2U7XG5cbiAgaWYgKHdhaXQgPT09IDApIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgdGltZW91dDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHsgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTsgfVxuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKGNhbGxOb3cpIHsgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTsgfVxuICB9O1xufTtcblxuLyoqXG4gKiBFbWl0cyBhIHdhcm5pbmcgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbnZhciB3YXJuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKChcIlt2ZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBicmFuZGVkIGVycm9yIG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKi9cbnZhciBjcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBuZXcgRXJyb3IoKFwiW3ZlZS12YWxpZGF0ZV0gXCIgKyBtZXNzYWdlKSk7IH07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gKi9cbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgISBBcnJheS5pc0FycmF5KG9iamVjdCk7IH07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgZnVuY3Rpb24gaXMgY2FsbGFibGUuXG4gKi9cbnZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24gKGZ1bmMpIHsgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIHRoZSBjc3MgY2xhc3Mgb24gaXQuXG4gKi9cbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gISFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpKSk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIHByb3ZpZGVkIGNzcyBjbGFzc05hbWUgdG8gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHByb3ZpZGVkIGNzcyBjbGFzc05hbWUgZnJvbSB0aGUgZWxlbWVudC5cbiAqL1xudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgoXCIoXFxcXHN8XilcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzfCQpXCIpKTtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkcyBvciByZW1vdmVzIGEgY2xhc3MgbmFtZSBvbiB0aGUgaW5wdXQgZGVwZW5kaW5nIG9uIHRoZSBzdGF0dXMgZmxhZy5cbiAqL1xudmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUsIHN0YXR1cykge1xuICBpZiAoIWVsIHx8ICFjbGFzc05hbWUpIHsgcmV0dXJuOyB9XG5cbiAgaWYgKHN0YXR1cykge1xuICAgIHJldHVybiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheS1saWtlIG9iamVjdCB0byBhcnJheS5cbiAqIFNpbXBsZSBwb2x5ZmlsbCBmb3IgQXJyYXkuZnJvbVxuICovXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgaWYgKGlzQ2FsbGFibGUoQXJyYXkuZnJvbSkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnJheUxpa2UpO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gW107XG4gIHZhciBsZW5ndGggPSBhcnJheUxpa2UubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaChhcnJheUxpa2VbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuLyoqXG4gKiBBc3NpZ24gcG9seWZpbGwgZnJvbSB0aGUgbWRuLlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG52YXIgYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICB2YXIgb3RoZXJzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICB3aGlsZSAoIGxlbi0tID4gMCApIG90aGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaXNDYWxsYWJsZShPYmplY3QuYXNzaWduKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgWyB0YXJnZXQgXS5jb25jYXQoIG90aGVycyApKTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIG90aGVycy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICBpZiAoYXJnICE9IG51bGwpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRvW2tleV0gPSBhcmdba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiB0bztcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkLlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG52YXIgdW5pcUlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKFwiX1wiICsgKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KSkpOyB9O1xuXG4vKipcbiAqIHBvbHlmaWxscyBhcnJheS5maW5kXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlXG4gKi9cbnZhciBmaW5kID0gZnVuY3Rpb24gKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgaWYgKGlzT2JqZWN0KGFycmF5KSkge1xuICAgIGFycmF5ID0gdG9BcnJheShhcnJheSk7XG4gIH1cbiAgaWYgKGFycmF5LmZpbmQpIHtcbiAgICByZXR1cm4gYXJyYXkuZmluZChwcmVkaWNhdGUpO1xuICB9XG4gIHZhciByZXN1bHQ7XG4gIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldElucHV0RXZlbnROYW1lID0gZnVuY3Rpb24gKGVsKSB7XG4gIGlmIChlbCAmJiAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgflsncmFkaW8nLCAnY2hlY2tib3gnLCAnZmlsZSddLmluZGV4T2YoZWwudHlwZSkpKSB7XG4gICAgcmV0dXJuICdjaGFuZ2UnO1xuICB9XG5cbiAgcmV0dXJuICdpbnB1dCc7XG59O1xuXG52YXIgRXJyb3JCYWcgPSBmdW5jdGlvbiBFcnJvckJhZyAoKSB7XG4gIHRoaXMuaXRlbXMgPSBbXTtcbn07XG5cbi8qKlxuICAgKiBBZGRzIGFuIGVycm9yIHRvIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yIFRoZSBlcnJvciBvYmplY3QuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoZXJyb3IpIHtcbiAgLy8gaGFuZGxlIG9sZCBzaWduYXR1cmUuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGVycm9yID0ge1xuICAgICAgZmllbGQ6IGFyZ3VtZW50c1swXSxcbiAgICAgIG1zZzogYXJndW1lbnRzWzFdLFxuICAgICAgcnVsZTogYXJndW1lbnRzWzJdLFxuICAgICAgc2NvcGU6IGFyZ3VtZW50c1szXSB8fCBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGVycm9yLnNjb3BlID0gZXJyb3Iuc2NvcGUgfHwgbnVsbDtcbiAgdGhpcy5pdGVtcy5wdXNoKGVycm9yKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhIGZpZWxkIGVycm9yIHdpdGggdGhlIG5ldyBmaWVsZCBzY29wZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgXG4gKiBAcGFyYW0ge09iamVjdH0gZXJyb3IgXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKGlkLCBlcnJvcikge1xuICB2YXIgaXRlbSA9IGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuaWQgPT09IGlkOyB9KTtcbiAgaWYgKCFpdGVtKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlkeCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgdGhpcy5pdGVtcy5zcGxpY2UoaWR4LCAxKTtcbiAgaXRlbS5zY29wZSA9IGVycm9yLnNjb3BlO1xuICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG59O1xuXG4vKipcbiAgICogR2V0cyBhbGwgZXJyb3IgbWVzc2FnZXMgZnJvbSB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgU2NvcGUgbmFtZSwgb3B0aW9uYWwuXG4gICAqIEByZXR1cm4ge0FycmF5fSBlcnJvcnMgQXJyYXkgb2YgYWxsIGVycm9yIG1lc3NhZ2VzLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiBhbGwgKHNjb3BlKSB7XG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLm1zZzsgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc2NvcGUgPT09IHNjb3BlOyB9KS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUubXNnOyB9KTtcbn07XG5cbi8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgYXJlIGFueSBlcnJvcnMgaW4gdGhlIGludGVybmFsIGFycmF5LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSByZXN1bHQgVHJ1ZSBpZiB0aGVyZSB3YXMgYXQgbGVhc3Qgb25lIGVycm9yLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uIGFueSAoc2NvcGUpIHtcbiAgaWYgKCEgc2NvcGUpIHtcbiAgICByZXR1cm4gISEgdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gISEgdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc2NvcGUgPT09IHNjb3BlOyB9KS5sZW5ndGg7XG59O1xuXG4vKipcbiAgICogUmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgU2NvcGUgbmFtZSwgb3B0aW9uYWwuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCEgc2NvcGUpIHtcbiAgICBzY29wZSA9IG51bGw7XG4gIH1cblxuICB2YXIgcmVtb3ZlQ29uZGl0aW9uID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc2NvcGUgPT09IHNjb3BlOyB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChyZW1vdmVDb25kaXRpb24odGhpcyQxLml0ZW1zW2ldKSkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICAgKiBDb2xsZWN0cyBlcnJvcnMgaW50byBncm91cHMgb3IgZm9yIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCBuYW1lLlxuICAgKiBAcGFyYW17c3RyaW5nfSBzY29wZSBUaGUgc2NvcGUgbmFtZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBtYXAgSWYgaXQgc2hvdWxkIG1hcCB0aGUgZXJyb3JzIHRvIHN0cmluZ3MgaW5zdGVhZCBvZiBvYmplY3RzLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gZXJyb3JzIFRoZSBlcnJvcnMgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNvbGxlY3QgPSBmdW5jdGlvbiBjb2xsZWN0IChmaWVsZCwgc2NvcGUsIG1hcCkge1xuICAgIGlmICggbWFwID09PSB2b2lkIDAgKSBtYXAgPSB0cnVlO1xuXG4gIGlmICghIGZpZWxkKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB7fTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghIGNvbGxlY3Rpb25bZS5maWVsZF0pIHtcbiAgICAgICAgY29sbGVjdGlvbltlLmZpZWxkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb2xsZWN0aW9uW2UuZmllbGRdLnB1c2gobWFwID8gZS5tc2cgOiBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgaWYgKCEgc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkOyB9KS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChtYXAgPyBlLm1zZyA6IGUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGU7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gKG1hcCA/IGUubXNnIDogZSk7IH0pO1xufTtcbi8qKlxuICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBhcnJheSBsZW5ndGguXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gbGVuZ3RoIFRoZSBpbnRlcm5hbCBhcnJheSBsZW5ndGguXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQgKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCBmZXRjaGVzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkIGlkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0QnlJZCA9IGZ1bmN0aW9uIGZpcnN0QnlJZCAoaWQpIHtcbiAgdmFyIGVycm9yID0gZmluZCh0aGlzLml0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZCA9PT0gaWQ7IH0pO1xuXG4gIHJldHVybiBlcnJvciA/IGVycm9yLm1zZyA6IG51bGw7XG59O1xuXG4vKipcbiAgICogR2V0cyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgYSBzcGVjaWZpYyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFte3N0cmluZ30gZmllbGQgVGhlIGZpZWxkIG5hbWUuXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIGZpcnN0IChmaWVsZCwgc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgdmFyIHNlbGVjdG9yID0gdGhpcy5fc2VsZWN0b3IoZmllbGQpO1xuICB2YXIgc2NvcGVkID0gdGhpcy5fc2NvcGUoZmllbGQpO1xuXG4gIGlmIChzY29wZWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5maXJzdChzY29wZWQubmFtZSwgc2NvcGVkLnNjb3BlKTtcbiAgICAvLyBpZiBzdWNoIHJlc3VsdCBleGlzdCwgcmV0dXJuIGl0LiBvdGhlcndpc2UgaXQgY291bGQgYmUgYSBmaWVsZC5cbiAgICAvLyB3aXRoIGRvdCBpbiBpdHMgbmFtZS5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmZpcnN0QnlSdWxlKHNlbGVjdG9yLm5hbWUsIHNlbGVjdG9yLnJ1bGUsIHNjb3BlKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzJDEuaXRlbXNbaV0uZmllbGQgPT09IGZpZWxkICYmICh0aGlzJDEuaXRlbXNbaV0uc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5pdGVtc1tpXS5tc2c7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgZXJyb3IgcnVsZSBmb3IgdGhlIHNwZWNpZmllZCBmaWVsZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHNwZWNpZmllZCBmaWVsZC5cbiAgICogQHJldHVybiB7c3RyaW5nfG51bGx9IEZpcnN0IGVycm9yIHJ1bGUgb24gdGhlIHNwZWNpZmllZCBmaWVsZCBpZiBvbmUgaXMgZm91bmQsIG90aGVyd2lzZSBudWxsXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0UnVsZSA9IGZ1bmN0aW9uIGZpcnN0UnVsZSAoZmllbGQsIHNjb3BlKSB7XG4gIHZhciBlcnJvcnMgPSB0aGlzLmNvbGxlY3QoZmllbGQsIHNjb3BlLCBmYWxzZSk7XG5cbiAgcmV0dXJuIChlcnJvcnMubGVuZ3RoICYmIGVycm9yc1swXS5ydWxlKSB8fCBudWxsO1xufTtcblxuLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgaW50ZXJuYWwgYXJyYXkgaGFzIGF0IGxlYXN0IG9uZSBlcnJvciBmb3IgdGhlIHNwZWNpZmllZCBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFte3N0cmluZ30gZmllbGQgVGhlIHNwZWNpZmllZCBmaWVsZC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0IFRydWUgaWYgYXQgbGVhc3Qgb25lIGVycm9yIGlzIGZvdW5kLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoZmllbGQsIHNjb3BlKSB7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIHJldHVybiAhISB0aGlzLmZpcnN0KGZpZWxkLCBzY29wZSk7XG59O1xuXG4vKipcbiAgICogR2V0cyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgYSBzcGVjaWZpYyBmaWVsZCBhbmQgYSBydWxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBydWxlIFRoZSBuYW1lIG9mIHRoZSBydWxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIG5hbWUgb2YgdGhlIHNjb3BlIChvcHRpb25hbCkuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0QnlSdWxlID0gZnVuY3Rpb24gZmlyc3RCeVJ1bGUgKG5hbWUsIHJ1bGUsIHNjb3BlKSB7XG4gIHZhciBlcnJvciA9IHRoaXMuY29sbGVjdChuYW1lLCBzY29wZSwgZmFsc2UpLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5ydWxlID09PSBydWxlOyB9KVswXTtcblxuICByZXR1cm4gKGVycm9yICYmIGVycm9yLm1zZykgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBlcnJvcnMgYnkgbWF0Y2hpbmcgYWdhaW5zdCB0aGUgaWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gcmVtb3ZlQnlJZCAoaWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcyQxLml0ZW1zW2ldLmlkID09PSBpZCkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICAgKiBSZW1vdmVzIGFsbCBlcnJvciBtZXNzYWdlcyBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFte3N0cmluZ30gZmllbGQgVGhlIGZpZWxkIHdoaWNoIG1lc3NhZ2VzIGFyZSB0byBiZSByZW1vdmVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKGZpZWxkLCBzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByZW1vdmVDb25kaXRpb24gPSBzY29wZSA/IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBzY29wZTsgfVxuICAgIDogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkICYmIGUuc2NvcGUgPT09IG51bGw7IH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHJlbW92ZUNvbmRpdGlvbih0aGlzJDEuaXRlbXNbaV0pKSB7XG4gICAgICB0aGlzJDEuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgLS1pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gICAqIEdldCB0aGUgZmllbGQgYXR0cmlidXRlcyBpZiB0aGVyZSdzIGEgcnVsZSBzZWxlY3Rvci5cbiAgICpcbiAgICogQHBhcmFte3N0cmluZ30gZmllbGQgVGhlIHNwZWNpZmllZCBmaWVsZC5cbiAgICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zZWxlY3RvciA9IGZ1bmN0aW9uIF9zZWxlY3RvciAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgbmFtZSA9IHJlZlswXTtcbiAgICAgIHZhciBydWxlID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgcnVsZTogcnVsZSB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAgICogR2V0IHRoZSBmaWVsZCBzY29wZSBpZiBzcGVjaWZpZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgdGhlIHNwZWNpZmllIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuX3Njb3BlID0gZnVuY3Rpb24gX3Njb3BlIChmaWVsZCkge1xuICBpZiAoZmllbGQuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICAgIHZhciBzY29wZSA9IHJlZlswXTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgc2NvcGU6IHNjb3BlIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gRGljdGlvbmFyeSAoZGljdGlvbmFyeSkge1xuICBpZiAoIGRpY3Rpb25hcnkgPT09IHZvaWQgMCApIGRpY3Rpb25hcnkgPSB7fTtcblxuICB0aGlzLmNvbnRhaW5lciA9IHt9O1xuICB0aGlzLm1lcmdlKGRpY3Rpb25hcnkpO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzTG9jYWxlID0gZnVuY3Rpb24gaGFzTG9jYWxlIChsb2NhbGUpIHtcbiAgcmV0dXJuICEhIHRoaXMuY29udGFpbmVyW2xvY2FsZV07XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gc2V0RGF0ZUZvcm1hdCAobG9jYWxlLCBmb3JtYXQpIHtcbiAgaWYgKCF0aGlzLmNvbnRhaW5lcltsb2NhbGVdKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHt9O1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5kYXRlRm9ybWF0ID0gZm9ybWF0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIGdldERhdGVGb3JtYXQgKGxvY2FsZSkge1xuICBpZiAoIXRoaXMuY29udGFpbmVyW2xvY2FsZV0pIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uZGF0ZUZvcm1hdDtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKCEgdGhpcy5oYXNNZXNzYWdlKGxvY2FsZSwga2V5KSkge1xuICAgIHJldHVybiBmYWxsYmFjayB8fCB0aGlzLl9nZXREZWZhdWx0TWVzc2FnZShsb2NhbGUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXNba2V5XTtcbn07XG5cbi8qKlxuICogR2V0cyBhIHNwZWNpZmljIG1lc3NhZ2UgZm9yIGZpZWxkLiBmYWxsc2JhY2sgdG8gdGhlIHJ1bGUgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbG9jYWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0RmllbGRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0RmllbGRNZXNzYWdlIChsb2NhbGUsIGZpZWxkLCBrZXkpIHtcbiAgaWYgKCEgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSkge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXkpO1xuICB9XG5cbiAgdmFyIGRpY3QgPSB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmN1c3RvbSAmJiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmN1c3RvbVtmaWVsZF07XG4gIGlmICghIGRpY3QgfHwgISBkaWN0W2tleV0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlKGxvY2FsZSwga2V5KTtcbiAgfVxuXG4gIHJldHVybiBkaWN0W2tleV07XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5fZ2V0RGVmYXVsdE1lc3NhZ2UgPSBmdW5jdGlvbiBfZ2V0RGVmYXVsdE1lc3NhZ2UgKGxvY2FsZSkge1xuICBpZiAodGhpcy5oYXNNZXNzYWdlKGxvY2FsZSwgJ19kZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlcy5fZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lci5lbi5tZXNzYWdlcy5fZGVmYXVsdDtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIGZhbGxiYWNrKSB7XG4gICAgaWYgKCBmYWxsYmFjayA9PT0gdm9pZCAwICkgZmFsbGJhY2sgPSAnJztcblxuICBpZiAoISB0aGlzLmhhc0F0dHJpYnV0ZShsb2NhbGUsIGtleSkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV07XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5oYXNNZXNzYWdlID0gZnVuY3Rpb24gaGFzTWVzc2FnZSAobG9jYWxlLCBrZXkpIHtcbiAgcmV0dXJuICEhIChcbiAgICB0aGlzLmhhc0xvY2FsZShsb2NhbGUpICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlcyAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXNba2V5XVxuICApO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzQXR0cmlidXRlID0gZnVuY3Rpb24gaGFzQXR0cmlidXRlIChsb2NhbGUsIGtleSkge1xuICByZXR1cm4gISEgKFxuICAgIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXNba2V5XVxuICApO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSAoZGljdGlvbmFyeSkge1xuICB0aGlzLl9tZXJnZSh0aGlzLmNvbnRhaW5lciwgZGljdGlvbmFyeSk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRNZXNzYWdlID0gZnVuY3Rpb24gc2V0TWVzc2FnZSAobG9jYWxlLCBrZXksIG1lc3NhZ2UpIHtcbiAgaWYgKCEgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSkge1xuICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0gPSB7XG4gICAgICBtZXNzYWdlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV0gPSBtZXNzYWdlO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gc2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgYXR0cmlidXRlKSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge1xuICAgICAgbWVzc2FnZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9O1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV0gPSBhdHRyaWJ1dGU7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5fbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UgKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCEgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICBpZiAoISB0YXJnZXRba2V5XSkge1xuICAgICAgICBhc3NpZ24odGFyZ2V0LCAoIG9iaiA9IHt9LCBvYmpba2V5XSA9IHt9LCBvYmogKSk7XG4gICAgICAgICAgdmFyIG9iajtcbiAgICAgIH1cblxuICAgICAgdGhpcyQxLl9tZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzc2lnbih0YXJnZXQsICggb2JqJDEgPSB7fSwgb2JqJDFba2V5XSA9IHNvdXJjZVtrZXldLCBvYmokMSApKTtcbiAgICAgIHZhciBvYmokMTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBtZXNzYWdlcyA9IHtcbiAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiB2YWx1ZSBpcyBub3QgdmFsaWQuXCIpOyB9LFxuICBhbHBoYV9kYXNoOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IGNvbnRhaW4gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgZGFzaGVzIGFuZCB1bmRlcnNjb3Jlcy5cIik7IH0sXG4gIGFscGhhX251bTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzLlwiKTsgfSxcbiAgYWxwaGFfc3BhY2VzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBzcGFjZXMuXCIpOyB9LFxuICBhbHBoYTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlwiKTsgfSxcbiAgYmV0d2VlbjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWluID0gcmVmWzBdO1xuICAgIHZhciBtYXggPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGJldHdlZW4gXCIgKyBtaW4gKyBcIiBhbmQgXCIgKyBtYXggKyBcIi5cIik7XG59LFxuICBjb25maXJtZWQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2guXCIpOyB9LFxuICBjcmVkaXRfY2FyZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIGludmFsaWQuXCIpOyB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbJyonXTtcbiAgICB2YXIgZGVjaW1hbHMgPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIG1heSBjb250YWluIFwiICsgKCFkZWNpbWFscyB8fCBkZWNpbWFscyA9PT0gJyonID8gJycgOiBkZWNpbWFscykgKyBcIiBkZWNpbWFsIHBvaW50cy5cIik7XG59LFxuICBkaWdpdHM6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgbnVtZXJpYyBhbmQgZXhhY3RseSBjb250YWluIFwiICsgbGVuZ3RoICsgXCIgZGlnaXRzLlwiKTtcbn0sXG4gIGRpbWVuc2lvbnM6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHdpZHRoID0gcmVmWzBdO1xuICAgIHZhciBoZWlnaHQgPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIFwiICsgd2lkdGggKyBcIiBwaXhlbHMgYnkgXCIgKyBoZWlnaHQgKyBcIiBwaXhlbHMuXCIpO1xufSxcbiAgZW1haWw6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZW1haWwuXCIpOyB9LFxuICBleHQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZmlsZS5cIik7IH0sXG4gIGltYWdlOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhbiBpbWFnZS5cIik7IH0sXG4gIGluOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHZhbHVlLlwiKTsgfSxcbiAgaXA6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgaXAgYWRkcmVzcy5cIik7IH0sXG4gIG1heDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG5vdCBiZSBncmVhdGVyIHRoYW4gXCIgKyBsZW5ndGggKyBcIiBjaGFyYWN0ZXJzLlwiKTtcbn0sXG4gIG1heF92YWx1ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWF4ID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIG1heCArIFwiIG9yIGxlc3MuXCIpO1xufSxcbiAgbWltZXM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGhhdmUgYSB2YWxpZCBmaWxlIHR5cGUuXCIpOyB9LFxuICBtaW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYXQgbGVhc3QgXCIgKyBsZW5ndGggKyBcIiBjaGFyYWN0ZXJzLlwiKTtcbn0sXG4gIG1pbl92YWx1ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWluID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIG1pbiArIFwiIG9yIG1vcmUuXCIpO1xufSxcbiAgbm90X2luOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIHZhbHVlLlwiKTsgfSxcbiAgbnVtZXJpYzogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXJzLlwiKTsgfSxcbiAgcmVnZXg6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBmb3JtYXQgaXMgaW52YWxpZC5cIik7IH0sXG4gIHJlcXVpcmVkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgcmVxdWlyZWQuXCIpOyB9LFxuICBzaXplOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBzaXplID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBsZXNzIHRoYW4gXCIgKyBzaXplICsgXCIgS0IuXCIpO1xufSxcbiAgdXJsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgbm90IGEgdmFsaWQgVVJMLlwiKTsgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIG9wdGlvbnMgcmVxdWlyZWQgdG8gY29uc3RydWN0IGEgZmllbGQuXG4gKi9cbnZhciBHZW5lcmF0b3IgPSBmdW5jdGlvbiBHZW5lcmF0b3IgKCkge307XG5cbkdlbmVyYXRvci5nZW5lcmF0ZSA9IGZ1bmN0aW9uIGdlbmVyYXRlIChlbCwgYmluZGluZywgdm5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbW9kZWwgPSBHZW5lcmF0b3IucmVzb2x2ZU1vZGVsKGJpbmRpbmcsIHZub2RlKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IEdlbmVyYXRvci5yZXNvbHZlTmFtZShlbCwgdm5vZGUpLFxuICAgIGVsOiBlbCxcbiAgICBsaXN0ZW46ICFiaW5kaW5nLm1vZGlmaWVycy5kaXNhYmxlLFxuICAgIHNjb3BlOiBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSksXG4gICAgdm06IEdlbmVyYXRvci5tYWtlVk0odm5vZGUuY29udGV4dCksXG4gICAgZXhwcmVzc2lvbjogYmluZGluZy52YWx1ZSxcbiAgICBjb21wb25lbnQ6IHZub2RlLmNoaWxkLFxuICAgIGNsYXNzZXM6IG9wdGlvbnMuY2xhc3NlcyxcbiAgICBjbGFzc05hbWVzOiBvcHRpb25zLmNsYXNzTmFtZXMsXG4gICAgZ2V0dGVyOiBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbCwgdm5vZGUsIG1vZGVsKSxcbiAgICBldmVudHM6IEdlbmVyYXRvci5yZXNvbHZlRXZlbnRzKGVsLCB2bm9kZSkgfHwgb3B0aW9ucy5ldmVudHMsXG4gICAgbW9kZWw6IG1vZGVsLFxuICAgIGRlbGF5OiBHZW5lcmF0b3IucmVzb2x2ZURlbGF5KGVsLCB2bm9kZSwgb3B0aW9ucyksXG4gICAgcnVsZXM6IEdlbmVyYXRvci5yZXNvbHZlUnVsZXMoZWwsIGJpbmRpbmcpLFxuICAgIGluaXRpYWw6ICEhYmluZGluZy5tb2RpZmllcnMuaW5pdGlhbCxcbiAgICBhbGlhczogR2VuZXJhdG9yLnJlc29sdmVBbGlhcyhlbCwgdm5vZGUpLFxuICAgIHZhbGlkaXR5OiBvcHRpb25zLnZhbGlkaXR5LFxuICAgIGFyaWE6IG9wdGlvbnMuYXJpYVxuICB9O1xufTtcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gZWwgXG4gKiBAcGFyYW0geyp9IGJpbmRpbmcgXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlUnVsZXMgPSBmdW5jdGlvbiByZXNvbHZlUnVsZXMgKGVsLCBiaW5kaW5nKSB7XG4gIGlmICghYmluZGluZyB8fCAhYmluZGluZy5leHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICdydWxlcycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBiaW5kaW5nLnZhbHVlO1xuICB9XG5cbiAgaWYgKH5bJ3N0cmluZycsICdvYmplY3QnXS5pbmRleE9mKHR5cGVvZiBiaW5kaW5nLnZhbHVlLnJ1bGVzKSkge1xuICAgIHJldHVybiBiaW5kaW5nLnZhbHVlLnJ1bGVzO1xuICB9XG5cbiAgcmV0dXJuIGJpbmRpbmcudmFsdWU7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBub24tY2lyY3VsYXIgcGFydGlhbCBWTSBpbnN0YW5jZSBmcm9tIGEgVnVlIGluc3RhbmNlLlxuICogQHBhcmFtIHsqfSB2bSBcbiAqL1xuR2VuZXJhdG9yLm1ha2VWTSA9IGZ1bmN0aW9uIG1ha2VWTSAodm0pIHtcbiAgcmV0dXJuIHtcbiAgICBnZXQgJGVsICgpIHtcbiAgICAgIHJldHVybiB2bS4kZWw7XG4gICAgfSxcbiAgICBnZXQgJHJlZnMgKCkge1xuICAgICAgcmV0dXJuIHZtLiRyZWZzO1xuICAgIH0sXG4gICAgJHdhdGNoOiB2bS4kd2F0Y2ggPyB2bS4kd2F0Y2guYmluZCh2bSkgOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAkdmFsaWRhdG9yOiB2bS4kdmFsaWRhdG9yID8ge1xuICAgICAgZXJyb3JzOiB2bS4kdmFsaWRhdG9yLmVycm9ycyxcbiAgICAgIHZhbGlkYXRlOiB2bS4kdmFsaWRhdG9yLnZhbGlkYXRlLmJpbmQodm0uJHZhbGlkYXRvcilcbiAgICB9IDogbnVsbFxuICB9O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgZGVsYXkgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5HZW5lcmF0b3IucmVzb2x2ZURlbGF5ID0gZnVuY3Rpb24gcmVzb2x2ZURlbGF5IChlbCwgdm5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2RlbGF5JykgfHwgKHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtZGVsYXknXSkgfHwgb3B0aW9ucy5kZWxheTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGFsaWFzIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0geyp9IGVsIFxuICogQHBhcmFtIHsqfSB2bm9kZSBcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVBbGlhcyA9IGZ1bmN0aW9uIHJlc29sdmVBbGlhcyAoZWwsIHZub2RlKSB7XG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnYXMnKSB8fCAodm5vZGUuY2hpbGQgJiYgdm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1hcyddKSB8fCBlbC50aXRsZSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgZXZlbnRzIHRvIHZhbGlkYXRlIGluIHJlc3BvbnNlIHRvLlxuICogQHBhcmFtIHsqfSBlbFxuICogQHBhcmFtIHsqfSB2bm9kZVxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUV2ZW50cyA9IGZ1bmN0aW9uIHJlc29sdmVFdmVudHMgKGVsLCB2bm9kZSkge1xuICBpZiAodm5vZGUuY2hpbGQpIHtcbiAgICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3ZhbGlkYXRlLW9uJykgfHwgKHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtdmFsaWRhdGUtb24nXSk7XG4gIH1cblxuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3ZhbGlkYXRlLW9uJyk7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBzY29wZSBmb3IgdGhlIGZpZWxkLlxuICogQHBhcmFtIHsqfSBlbFxuICogQHBhcmFtIHsqfSBiaW5kaW5nXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlU2NvcGUgPSBmdW5jdGlvbiByZXNvbHZlU2NvcGUgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGlmICggdm5vZGUgPT09IHZvaWQgMCApIHZub2RlID0ge307XG5cbiAgdmFyIHNjb3BlID0gbnVsbDtcbiAgaWYgKGlzT2JqZWN0KGJpbmRpbmcudmFsdWUpKSB7XG4gICAgc2NvcGUgPSBiaW5kaW5nLnZhbHVlLnNjb3BlO1xuICB9XG5cbiAgaWYgKHZub2RlLmNoaWxkICYmICFzY29wZSkge1xuICAgIHNjb3BlID0gdm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1zY29wZSddO1xuICB9XG5cbiAgcmV0dXJuIHNjb3BlIHx8IGdldFNjb3BlKGVsKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBub2RlIGRpcmVjdGl2ZXMgY29udGFpbnMgYSB2LW1vZGVsIG9yIGEgc3BlY2lmaWVkIGFyZy5cbiAqIEFyZ3MgdGFrZSBwcmlvcml0eSBvdmVyIG1vZGVscy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlTW9kZWwgPSBmdW5jdGlvbiByZXNvbHZlTW9kZWwgKGJpbmRpbmcsIHZub2RlKSB7XG4gIGlmIChiaW5kaW5nLmFyZykge1xuICAgIHJldHVybiBiaW5kaW5nLmFyZztcbiAgfVxuXG4gIGlmIChpc09iamVjdChiaW5kaW5nLnZhbHVlKSAmJiBiaW5kaW5nLnZhbHVlLmFyZykge1xuICAgIHJldHVybiBiaW5kaW5nLnZhbHVlLmFyZztcbiAgfVxuXG4gIHZhciBtb2RlbCA9IHZub2RlLmRhdGEubW9kZWwgfHwgZmluZCh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdtb2RlbCc7IH0pO1xuICBpZiAoIW1vZGVsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgd2F0Y2hhYmxlID0gL15bYS16X10rWzAtOV0qKFxcdypcXC5bYS16X11cXHcqKSokL2kudGVzdChtb2RlbC5leHByZXNzaW9uKSAmJiBoYXNQYXRoKG1vZGVsLmV4cHJlc3Npb24sIHZub2RlLmNvbnRleHQpO1xuXG4gIGlmICghd2F0Y2hhYmxlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbW9kZWwuZXhwcmVzc2lvbjtcbn07XG5cbi8qKlxuICAgKiBSZXNvbHZlcyB0aGUgZmllbGQgbmFtZSB0byB0cmlnZ2VyIHZhbGlkYXRpb25zLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBmaWVsZCBuYW1lLlxuICAgKi9cbkdlbmVyYXRvci5yZXNvbHZlTmFtZSA9IGZ1bmN0aW9uIHJlc29sdmVOYW1lIChlbCwgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICduYW1lJykgfHwgKHZub2RlLmNoaWxkLiRhdHRycyAmJiAodm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LW5hbWUnXSB8fCB2bm9kZS5jaGlsZC4kYXR0cnNbJ25hbWUnXSkpIHx8IHZub2RlLmNoaWxkLm5hbWU7XG4gIH1cblxuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ25hbWUnKSB8fCBlbC5uYW1lO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgZ2V0dGVyIGlucHV0IHR5cGUuXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlR2V0dGVyID0gZnVuY3Rpb24gcmVzb2x2ZUdldHRlciAoZWwsIHZub2RlLCBtb2RlbCkge1xuICBpZiAobW9kZWwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldFBhdGgobW9kZWwsIHZub2RlLmNvbnRleHQpO1xuICAgIH07XG4gIH1cblxuICBpZiAodm5vZGUuY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhdGggPSBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsdWUtcGF0aCcpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXZhbHVlLXBhdGgnXSk7XG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICByZXR1cm4gZ2V0UGF0aChwYXRoLCB2bm9kZS5jaGlsZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGUuY2hpbGQudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHN3aXRjaCAoZWwudHlwZSkge1xuICBjYXNlICdjaGVja2JveCc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyAoZWwubmFtZSkgKyBcIlxcXCJdXCIpKTtcblxuICAgIGVscyA9IHRvQXJyYXkoZWxzKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5jaGVja2VkOyB9KTtcbiAgICBpZiAoIWVscy5sZW5ndGgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4gICAgcmV0dXJuIGVscy5tYXAoZnVuY3Rpb24gKGNoZWNrYm94KSB7IHJldHVybiBjaGVja2JveC52YWx1ZTsgfSk7XG4gIH07XG4gIGNhc2UgJ3JhZGlvJzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFtuYW1lPVxcXCJcIiArIChlbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuICAgIHZhciBlbG0gPSBmaW5kKGVscywgZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5jaGVja2VkOyB9KTtcblxuICAgIHJldHVybiBlbG0gJiYgZWxtLnZhbHVlO1xuICB9O1xuICBjYXNlICdmaWxlJzogcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZWwuZmlsZXMpO1xuICB9O1xuICBjYXNlICdzZWxlY3QtbXVsdGlwbGUnOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b0FycmF5KGVsLm9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbiAob3B0KSB7IHJldHVybiBvcHQuc2VsZWN0ZWQ7IH0pLm1hcChmdW5jdGlvbiAob3B0KSB7IHJldHVybiBvcHQudmFsdWU7IH0pO1xuICB9O1xuICBkZWZhdWx0OiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbCAmJiBlbC52YWx1ZTtcbiAgfTtcbiAgfVxufTtcblxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgdGFyZ2V0T2Y6IG51bGwsXG4gIGluaXRpYWw6IGZhbHNlLFxuICBzY29wZTogbnVsbCxcbiAgbGlzdGVuOiB0cnVlLFxuICBuYW1lOiBudWxsLFxuICBhY3RpdmU6IHRydWUsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgcnVsZXM6IHt9LFxuICB2bTogbnVsbCxcbiAgY2xhc3NlczogZmFsc2UsXG4gIHZhbGlkaXR5OiB0cnVlLFxuICBhcmlhOiB0cnVlLFxuICBldmVudHM6ICdpbnB1dHxibHVyJyxcbiAgZGVsYXk6IDAsXG4gIGNsYXNzTmFtZXM6IHtcbiAgICB0b3VjaGVkOiAndG91Y2hlZCcsIC8vIHRoZSBjb250cm9sIGhhcyBiZWVuIGJsdXJyZWRcbiAgICB1bnRvdWNoZWQ6ICd1bnRvdWNoZWQnLCAvLyB0aGUgY29udHJvbCBoYXNuJ3QgYmVlbiBibHVycmVkXG4gICAgdmFsaWQ6ICd2YWxpZCcsIC8vIG1vZGVsIGlzIHZhbGlkXG4gICAgaW52YWxpZDogJ2ludmFsaWQnLCAvLyBtb2RlbCBpcyBpbnZhbGlkXG4gICAgcHJpc3RpbmU6ICdwcmlzdGluZScsIC8vIGNvbnRyb2wgaGFzIG5vdCBiZWVuIGludGVyYWN0ZWQgd2l0aFxuICAgIGRpcnR5OiAnZGlydHknIC8vIGNvbnRyb2wgaGFzIGJlZW4gaW50ZXJhY3RlZCB3aXRoXG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBkZWZhdWx0IGZsYWdzIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG52YXIgZ2VuZXJhdGVGbGFncyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7IHJldHVybiAoe1xuICB1bnRvdWNoZWQ6IHRydWUsXG4gIHRvdWNoZWQ6IGZhbHNlLFxuICBkaXJ0eTogZmFsc2UsXG4gIHByaXN0aW5lOiB0cnVlLFxuICB2YWxpZDogbnVsbCxcbiAgaW52YWxpZDogbnVsbCxcbiAgdmFsaWRhdGVkOiBmYWxzZSxcbiAgcGVuZGluZzogZmFsc2UsXG4gIHJlcXVpcmVkOiAhIW9wdGlvbnMucnVsZXMucmVxdWlyZWRcbn0pOyB9O1xuXG52YXIgRmllbGQgPSBmdW5jdGlvbiBGaWVsZCAoZWwsIG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5pZCA9IHVuaXFJZCgpO1xuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuICB0aGlzLndhdGNoZXJzID0gW107XG4gIHRoaXMuZXZlbnRzID0gW107XG4gIHRoaXMucnVsZXMgPSB7fTtcbiAgaWYgKCF0aGlzLmlzSGVhZGxlc3MgJiYgISh0aGlzLnRhcmdldE9mIHx8IG9wdGlvbnMudGFyZ2V0T2YpKSB7XG4gICAgc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLmVsLCAnaWQnLCB0aGlzLmlkKTsgLy8gY2FjaGUgZmllbGQgaWQgaWYgaXQgaXMgaW5kZXBlbmRlbnQgYW5kIGhhcyBhIHJvb3QgZWxlbWVudC5cbiAgfVxuICBvcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xuICB0aGlzLnZhbGlkaXR5ID0gb3B0aW9ucy52YWxpZGl0eTtcbiAgdGhpcy5hcmlhID0gb3B0aW9ucy5hcmlhO1xuICB0aGlzLmZsYWdzID0gZ2VuZXJhdGVGbGFncyhvcHRpb25zKTtcbiAgdGhpcy52bSA9IG9wdGlvbnMudm0gfHwgdGhpcy52bTtcbiAgdGhpcy5jb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudCB8fCB0aGlzLmNvbXBvbmVudDtcbiAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQxID0geyBpc1Z1ZToge30sdmFsaWRhdG9yOiB7fSxpc1JlcXVpcmVkOiB7fSxpc0Rpc2FibGVkOiB7fSxpc0hlYWRsZXNzOiB7fSxkaXNwbGF5TmFtZToge30sdmFsdWU6IHt9LHJlamVjdHNGYWxzZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNWdWUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLmNvbXBvbmVudDtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnZhbGlkYXRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy52bSB8fCAhdGhpcy52bS4kdmFsaWRhdG9yKSB7XG4gICAgd2FybignTm8gdmFsaWRhdG9yIGluc3RhbmNlIGRldGVjdGVkLicpO1xuICAgIHJldHVybiB7IHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7fSB9O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMudm0uJHZhbGlkYXRvcjtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzUmVxdWlyZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLnJ1bGVzLnJlcXVpcmVkO1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNEaXNhYmxlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5pc1Z1ZSAmJiB0aGlzLmNvbXBvbmVudC5kaXNhYmxlZCkgfHwgKHRoaXMuZWwgJiYgdGhpcy5lbC5kaXNhYmxlZCk7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc0hlYWRsZXNzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmVsO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkaXNwbGF5IG5hbWUgKHVzZXItZnJpZW5kbHkgbmFtZSkuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmRpc3BsYXlOYW1lLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYWxpYXM7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGlucHV0IHZhbHVlLlxuICogQHJldHVybiB7Kn1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDEudmFsdWUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIWlzQ2FsbGFibGUodGhpcy5nZXR0ZXIpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmdldHRlcigpO1xufTtcblxuLyoqXG4gKiBJZiB0aGUgZmllbGQgcmVqZWN0cyBmYWxzZSBhcyBhIHZhbGlkIHZhbHVlIGZvciB0aGUgcmVxdWlyZWQgcnVsZS4gXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnJlamVjdHNGYWxzZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlzVnVlIHx8IHRoaXMuaXNIZWFkbGVzcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVsLnR5cGUgPT09ICdjaGVja2JveCc7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGluc3RhbmNlIG1hdGNoZXMgdGhlIG9wdGlvbnMgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgbWF0Y2hpbmcgb3B0aW9ucy5cbiAqL1xuRmllbGQucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiBtYXRjaGVzIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQgPT09IG9wdGlvbnMuaWQ7XG4gIH1cblxuICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAob3B0aW9ucy5zY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gb3B0aW9ucy5uYW1lO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcGUgPT09IG9wdGlvbnMuc2NvcGU7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5uYW1lID09PSB0aGlzLm5hbWUgJiYgb3B0aW9ucy5zY29wZSA9PT0gdGhpcy5zY29wZTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG9wdGlvbnMpIHtcbiAgdGhpcy50YXJnZXRPZiA9IG9wdGlvbnMudGFyZ2V0T2YgfHwgbnVsbDtcbiAgdGhpcy5pbml0aWFsID0gb3B0aW9ucy5pbml0aWFsIHx8IHRoaXMuaW5pdGlhbCB8fCBmYWxzZTtcblxuICAvLyB1cGRhdGUgZXJyb3JzIHNjb3BlIGlmIHRoZSBmaWVsZCBzY29wZSB3YXMgY2hhbmdlZC5cbiAgaWYgKG9wdGlvbnMuc2NvcGUgJiYgb3B0aW9ucy5zY29wZSAhPT0gdGhpcy5zY29wZSAmJiB0aGlzLnZhbGlkYXRvci5lcnJvcnMgJiYgaXNDYWxsYWJsZSh0aGlzLnZhbGlkYXRvci5lcnJvcnMudXBkYXRlKSkge1xuICAgIHRoaXMudmFsaWRhdG9yLmVycm9ycy51cGRhdGUodGhpcy5pZCwgeyBzY29wZTogb3B0aW9ucy5zY29wZSB9KTtcbiAgfVxuICB0aGlzLnNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCB0aGlzLnNjb3BlIHx8IG51bGw7XG4gIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm5hbWUgfHwgbnVsbDtcbiAgdGhpcy5ydWxlcyA9IG9wdGlvbnMucnVsZXMgIT09IHVuZGVmaW5lZCA/IG5vcm1hbGl6ZVJ1bGVzKG9wdGlvbnMucnVsZXMpIDogdGhpcy5ydWxlcztcbiAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWwgfHwgdGhpcy5tb2RlbDtcbiAgdGhpcy5saXN0ZW4gPSBvcHRpb25zLmxpc3RlbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5saXN0ZW4gOiB0aGlzLmxpc3RlbjtcbiAgdGhpcy5jbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzIHx8IHRoaXMuY2xhc3NlcyB8fCBmYWxzZTtcbiAgdGhpcy5jbGFzc05hbWVzID0gb3B0aW9ucy5jbGFzc05hbWVzIHx8IHRoaXMuY2xhc3NOYW1lcyB8fCBERUZBVUxUX09QVElPTlMuY2xhc3NOYW1lcztcbiAgdGhpcy5hbGlhcyA9IG9wdGlvbnMuYWxpYXMgfHwgdGhpcy5hbGlhcztcbiAgdGhpcy5nZXR0ZXIgPSBpc0NhbGxhYmxlKG9wdGlvbnMuZ2V0dGVyKSA/IG9wdGlvbnMuZ2V0dGVyIDogdGhpcy5nZXR0ZXI7XG4gIHRoaXMuZGVsYXkgPSBvcHRpb25zLmRlbGF5IHx8IHRoaXMuZGVsYXkgfHwgMDtcbiAgdGhpcy5ldmVudHMgPSB0eXBlb2Ygb3B0aW9ucy5ldmVudHMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuZXZlbnRzLmxlbmd0aCA/IG9wdGlvbnMuZXZlbnRzLnNwbGl0KCd8JykgOiB0aGlzLmV2ZW50cztcbiAgdGhpcy51cGRhdGVEZXBlbmRlbmNpZXMoKTtcbiAgdGhpcy5hZGRBY3Rpb25MaXN0ZW5lcnMoKTtcblxuICAvLyB2YWxpZGF0ZSBpZiBpdCB3YXMgdmFsaWRhdGVkIGJlZm9yZSBhbmQgZmllbGQgd2FzIHVwZGF0ZWQgYW5kIHRoZXJlIHdhcyBhIHJ1bGVzIG11dGF0aW9uLlxuICBpZiAodGhpcy5mbGFncy52YWxpZGF0ZWQgJiYgb3B0aW9ucy5ydWxlcyAmJiB0aGlzLnVwZGF0ZWQpIHtcbiAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcy5pZCkpKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlZCA9IHRydWU7XG5cbiAgLy8gbm8gbmVlZCB0byBjb250aW51ZS5cbiAgaWYgKHRoaXMuaXNIZWFkbGVzcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB0aGlzLmFkZFZhbHVlTGlzdGVuZXJzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGZpZWxkIHJlcXVpcmVzIHJlZmVyZW5jZXMgdG8gdGFyZ2V0IGZpZWxkcy5cbiovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlRGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gdXBkYXRlRGVwZW5kZW5jaWVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZXNldCBkZXBlbmRlbmNpZXMuXG4gIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZmllbGQuZGVzdHJveSgpOyB9KTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcblxuICAvLyB3ZSBnZXQgdGhlIHNlbGVjdG9ycyBmb3IgZWFjaCBmaWVsZC5cbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMucnVsZXMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgcikge1xuICAgIGlmIChyID09PSAnY29uZmlybWVkJykge1xuICAgICAgcHJldi5wdXNoKHsgc2VsZWN0b3I6IHRoaXMkMS5ydWxlc1tyXVswXSB8fCAoKHRoaXMkMS5uYW1lKSArIFwiX2NvbmZpcm1hdGlvblwiKSwgbmFtZTogciB9KTtcbiAgICB9IGVsc2UgaWYgKC9hZnRlcnxiZWZvcmUvLnRlc3QocikpIHtcbiAgICAgIHByZXYucHVzaCh7IHNlbGVjdG9yOiB0aGlzJDEucnVsZXNbcl1bMF0sIG5hbWU6IHIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKTtcblxuICBpZiAoIWZpZWxkcy5sZW5ndGggfHwgIXRoaXMudm0gfHwgIXRoaXMudm0uJGVsKSB7IHJldHVybjsgfVxuXG4gIC8vIG11c3QgYmUgY29udGFpbmVkIHdpdGhpbiB0aGUgc2FtZSBjb21wb25lbnQsIHNvIHdlIHVzZSB0aGUgdm0gcm9vdCBlbGVtZW50IGNvbnN0cmFpbiBvdXIgZG9tIHNlYXJjaC5cbiAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgICAgdmFyIHNlbGVjdG9yID0gcmVmLnNlbGVjdG9yO1xuICAgICAgdmFyIG5hbWUgPSByZWYubmFtZTtcblxuICAgIHZhciBlbCA9IG51bGw7XG4gICAgLy8gdnVlIHJlZiBzZWxlY3Rvci5cbiAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICckJykge1xuICAgICAgZWwgPSB0aGlzJDEudm0uJHJlZnNbc2VsZWN0b3Iuc2xpY2UoMSldO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0cnkgYSBxdWVyeSBzZWxlY3Rpb24uXG4gICAgICBlbCA9IHRoaXMkMS52bS4kZWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgLy8gdHJ5IGEgbmFtZSBzZWxlY3RvclxuICAgICAgZWwgPSB0aGlzJDEudm0uJGVsLnF1ZXJ5U2VsZWN0b3IoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyBzZWxlY3RvciArIFwiXFxcIl1cIikpO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHZtOiB0aGlzJDEudm0sXG4gICAgICBjbGFzc2VzOiB0aGlzJDEuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMkMS5jbGFzc05hbWVzLFxuICAgICAgZGVsYXk6IHRoaXMkMS5kZWxheSxcbiAgICAgIHNjb3BlOiB0aGlzJDEuc2NvcGUsXG4gICAgICBldmVudHM6IHRoaXMkMS5ldmVudHMuam9pbignfCcpLFxuICAgICAgaW5pdGlhbDogdGhpcyQxLmluaXRpYWwsXG4gICAgICB0YXJnZXRPZjogdGhpcyQxLmlkXG4gICAgfTtcblxuICAgIC8vIHByb2JhYmx5IGEgY29tcG9uZW50LlxuICAgIGlmIChpc0NhbGxhYmxlKGVsLiR3YXRjaCkpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50ID0gZWw7XG4gICAgICBvcHRpb25zLmVsID0gZWwuJGVsO1xuICAgICAgb3B0aW9ucy5nZXR0ZXIgPSBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbC4kZWwsIHsgY2hpbGQ6IGVsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLmVsID0gZWw7XG4gICAgICBvcHRpb25zLmdldHRlciA9IEdlbmVyYXRvci5yZXNvbHZlR2V0dGVyKGVsLCB7fSk7XG4gICAgfVxuXG4gICAgdGhpcyQxLmRlcGVuZGVuY2llcy5wdXNoKHsgbmFtZTogbmFtZSwgZmllbGQ6IG5ldyBGaWVsZChvcHRpb25zLmVsLCBvcHRpb25zKSB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGlzdGVuZXJzLlxuICogQHBhcmFtIHtSZWdFeHB9IHRhZ1xuICovXG5GaWVsZC5wcm90b3R5cGUudW53YXRjaCA9IGZ1bmN0aW9uIHVud2F0Y2ggKHRhZykge1xuICBpZiAoIXRhZykge1xuICAgIHRoaXMud2F0Y2hlcnMuZm9yRWFjaChmdW5jdGlvbiAodykgeyByZXR1cm4gdy51bndhdGNoKCk7IH0pO1xuICAgIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy53YXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHRhZy50ZXN0KHcudGFnKTsgfSkuZm9yRWFjaChmdW5jdGlvbiAodykgeyByZXR1cm4gdy51bndhdGNoKCk7IH0pO1xuICB0aGlzLndhdGNoZXJzID0gdGhpcy53YXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKHcpIHsgcmV0dXJuICF0YWcudGVzdCh3LnRhZyk7IH0pO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBlbGVtZW50IGNsYXNzZXMgZGVwZW5kaW5nIG9uIGVhY2ggZmllbGQgZmxhZyBzdGF0dXMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24gdXBkYXRlQ2xhc3NlcyAoKSB7XG4gIGlmICghdGhpcy5jbGFzc2VzKSB7IHJldHVybjsgfVxuXG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5kaXJ0eSwgdGhpcy5mbGFncy5kaXJ0eSk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5wcmlzdGluZSwgdGhpcy5mbGFncy5wcmlzdGluZSk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy52YWxpZCwgISF0aGlzLmZsYWdzLnZhbGlkKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLmludmFsaWQsICEhdGhpcy5mbGFncy5pbnZhbGlkKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnRvdWNoZWQsIHRoaXMuZmxhZ3MudG91Y2hlZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy51bnRvdWNoZWQsIHRoaXMuZmxhZ3MudW50b3VjaGVkKTtcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgbGlzdGVuZXJzIHJlcXVpcmVkIGZvciBhdXRvbWF0aWMgY2xhc3NlcyBhbmQgc29tZSBmbGFncy5cbiAqL1xuRmllbGQucHJvdG90eXBlLmFkZEFjdGlvbkxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEFjdGlvbkxpc3RlbmVycyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gcmVtb3ZlIHByZXZpb3VzIGxpc3RlbmVycy5cbiAgdGhpcy51bndhdGNoKC9jbGFzcy8pO1xuXG4gIHZhciBvbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLmZsYWdzLnRvdWNoZWQgPSB0cnVlO1xuICAgIHRoaXMkMS5mbGFncy51bnRvdWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcyQxLmNsYXNzZXMpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMudG91Y2hlZCwgdHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLnVudG91Y2hlZCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgbmVlZGVkIG9uY2UuXG4gICAgdGhpcyQxLnVud2F0Y2goL15jbGFzc19ibHVyJC8pO1xuICB9O1xuXG4gIHZhciBpbnB1dEV2ZW50ID0gZ2V0SW5wdXRFdmVudE5hbWUodGhpcy5lbCk7XG4gIHZhciBvbklucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5mbGFncy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcyQxLmZsYWdzLnByaXN0aW5lID0gZmFsc2U7XG4gICAgaWYgKHRoaXMkMS5jbGFzc2VzKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLnByaXN0aW5lLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLmRpcnR5LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IG5lZWRlZCBvbmNlLlxuICAgIHRoaXMkMS51bndhdGNoKC9eY2xhc3NfaW5wdXQkLyk7XG4gIH07XG5cbiAgaWYgKHRoaXMuaXNWdWUgJiYgaXNDYWxsYWJsZSh0aGlzLmNvbXBvbmVudC4kb25jZSkpIHtcbiAgICB0aGlzLmNvbXBvbmVudC4kb25jZSgnaW5wdXQnLCBvbklucHV0KTtcbiAgICB0aGlzLmNvbXBvbmVudC4kb25jZSgnYmx1cicsIG9uQmx1cik7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2NsYXNzX2lucHV0JyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKCdpbnB1dCcsIG9uSW5wdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdjbGFzc19ibHVyJyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKCdibHVyJywgb25CbHVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5pc0hlYWRsZXNzKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihpbnB1dEV2ZW50LCBvbklucHV0KTtcbiAgLy8gQ2hlY2tib3hlcyBhbmQgcmFkaW8gYnV0dG9ucyBvbiBNYWMgZG9uJ3QgZW1pdCBibHVyIG5hdHVyYWxseSwgc28gd2UgbGlzdGVuIG9uIGNsaWNrIGluc3RlYWQuXG4gIHZhciBibHVyRXZlbnQgPSBbJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0aGlzLmVsLnR5cGUpID09PSAtMSA/ICdibHVyJyA6ICdjbGljayc7XG4gIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihibHVyRXZlbnQsIG9uQmx1cik7XG4gIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgdGFnOiAnY2xhc3NfaW5wdXQnLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGlucHV0RXZlbnQsIG9uSW5wdXQpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICB0YWc6ICdjbGFzc19ibHVyJyxcbiAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihibHVyRXZlbnQsIG9uQmx1cik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgbGlzdGVuZXJzIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uLlxuICovXG5GaWVsZC5wcm90b3R5cGUuYWRkVmFsdWVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRWYWx1ZUxpc3RlbmVycyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy51bndhdGNoKC9eaW5wdXRfLisvKTtcbiAgaWYgKCF0aGlzLmxpc3RlbikgeyByZXR1cm47IH1cblxuICB2YXIgZm4gPSBudWxsO1xuICBpZiAodGhpcy50YXJnZXRPZikge1xuICAgIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcyQxLnRhcmdldE9mKSkpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCB8fCAoaXNDYWxsYWJsZShFdmVudCkgJiYgYXJnc1swXSBpbnN0YW5jZW9mIEV2ZW50KSkge1xuICAgICAgICBhcmdzWzBdID0gdGhpcyQxLnZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcyQxLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcyQxLmlkKSksIGFyZ3NbMF0pO1xuICAgIH07XG4gIH1cbiAgdmFyIHZhbGlkYXRlID0gZGVib3VuY2UoZm4sIHRoaXMuZGVsYXkpO1xuXG4gIHZhciBpbnB1dEV2ZW50ID0gZ2V0SW5wdXRFdmVudE5hbWUodGhpcy5lbCk7XG4gIC8vIHJlcGxhY2UgaW5wdXQgZXZlbnQgd2l0aCBzdWl0YWJsZSBvbmUuXG4gIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZSA9PT0gJ2lucHV0JyA/IGlucHV0RXZlbnQgOiBlO1xuICB9KTtcblxuICAvLyBpZiB0aGVyZSBpcyBhIHdhdGNoYWJsZSBtb2RlbCBhbmQgYW4gb24gaW5wdXQgdmFsaWRhdGlvbiBpcyByZXF1ZXN0ZWQuXG4gIGlmICh0aGlzLm1vZGVsICYmIGV2ZW50cy5pbmRleE9mKGlucHV0RXZlbnQpICE9PSAtMSkge1xuICAgIHZhciB1bndhdGNoID0gdGhpcy52bS4kd2F0Y2godGhpcy5tb2RlbCwgdmFsaWRhdGUpO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdpbnB1dF9tb2RlbCcsXG4gICAgICB1bndhdGNoOiB1bndhdGNoXG4gICAgfSk7XG4gICAgLy8gZmlsdGVyIG91dCBpbnB1dCBldmVudCBhcyBpdCBpcyBhbHJlYWR5IGhhbmRsZWQgYnkgdGhlIHdhdGNoZXIgQVBJLlxuICAgIGV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IGlucHV0RXZlbnQ7IH0pO1xuICB9XG5cbiAgLy8gQWRkIGV2ZW50cy5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAodGhpcyQxLmlzVnVlKSB7XG4gICAgICB0aGlzJDEuY29tcG9uZW50LiRvbihlLCB2YWxpZGF0ZSk7XG4gICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgIHRhZzogJ2lucHV0X3Z1ZScsXG4gICAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoZSwgdmFsaWRhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoflsncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHRoaXMkMS5lbC50eXBlKSkge1xuICAgICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyAodGhpcyQxLmVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG4gICAgICB0b0FycmF5KGVscykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMkMS53YXRjaGVycy5wdXNoKHtcbiAgICAgICAgICB0YWc6ICdpbnB1dF9uYXRpdmUnLFxuICAgICAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMkMS5lbC5hZGRFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdpbnB1dF9uYXRpdmUnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGFyaWEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudC5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUFyaWFBdHRycyA9IGZ1bmN0aW9uIHVwZGF0ZUFyaWFBdHRycyAoKSB7XG4gIGlmICghdGhpcy5hcmlhIHx8IHRoaXMuaXNIZWFkbGVzcyB8fCAhaXNDYWxsYWJsZSh0aGlzLmVsLnNldEF0dHJpYnV0ZSkpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVxdWlyZWQnLCB0aGlzLmlzUmVxdWlyZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRoaXMuZmxhZ3MuaW52YWxpZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBjdXN0b20gdmFsaWRpdHkgZm9yIHRoZSBmaWVsZC5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUN1c3RvbVZhbGlkaXR5ID0gZnVuY3Rpb24gdXBkYXRlQ3VzdG9tVmFsaWRpdHkgKCkge1xuICBpZiAoIXRoaXMudmFsaWRpdHkgfHwgdGhpcy5pc0hlYWRsZXNzIHx8ICFpc0NhbGxhYmxlKHRoaXMuZWwuc2V0Q3VzdG9tVmFsaWRpdHkpKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuc2V0Q3VzdG9tVmFsaWRpdHkodGhpcy5mbGFncy52YWxpZCA/ICcnIDogKHRoaXMudmFsaWRhdG9yLmVycm9ycy5maXJzdEJ5SWQodGhpcy5pZCkgfHwgJycpKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgdGhpcy53YXRjaGVycyA9IFtdO1xuICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZpZWxkLmRlc3Ryb3koKTsgfSk7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgRmllbGRCYWcgPSBmdW5jdGlvbiBGaWVsZEJhZyAoKSB7XG4gIHRoaXMuaXRlbXMgPSBbXTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMiA9IHsgbGVuZ3RoOiB7fSB9O1xuXG4vKipcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBsZW5ndGguXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQyLmxlbmd0aC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbn07XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hlclxuICogQHJldHVybiB7RmllbGR8dW5kZWZpbmVkfSBUaGUgZmlyc3QgbWF0Y2hpbmcgaXRlbS5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kJDEgKG1hdGNoZXIpIHtcbiAgcmV0dXJuIGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtYXRjaGVyKTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtYXRjaGVyXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgbWF0Y2hpbmcgZmllbGQgaXRlbXMuXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIgKG1hdGNoZXIpIHtcbiAgLy8gbXVsdGlwbGUgbWF0Y2hlcnMgdG8gYmUgdHJpZWQuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hdGNoZXIpKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBtYXRjaGVyLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtKTsgfSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pO1xufTtcblxuLyoqXG4gKiBNYXBzIHRoZSBmaWVsZCBpdGVtcyB1c2luZyB0aGUgbWFwcGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtYXBwZXJcbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIG1hcCAobWFwcGVyKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcChtYXBwZXIpO1xufTtcblxuLyoqXG4gKiBGaW5kcyBhbmQgcmVtb3ZlcyB0aGUgZmlyc3QgZmllbGQgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBtYXRjaGVyIG9iamVjdCwgcmV0dXJucyB0aGUgcmVtb3ZlZCBpdGVtLlxuICogQHBhcmFtIHtPYmplY3R8RmllbGR9IG1hdGNoZXJcbiAqIEByZXR1cm4ge0ZpZWxkfG51bGx9XG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG1hdGNoZXIpIHtcbiAgdmFyIGl0ZW0gPSBudWxsO1xuICBpZiAobWF0Y2hlciBpbnN0YW5jZW9mIEZpZWxkKSB7XG4gICAgaXRlbSA9IG1hdGNoZXI7XG4gIH0gZWxzZSB7XG4gICAgaXRlbSA9IHRoaXMuZmluZChtYXRjaGVyKTtcbiAgfVxuXG4gIGlmICghaXRlbSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHZhciBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHJldHVybiBpdGVtO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgaXRlbSB0byB0aGUgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge0ZpZWxkfSBpdGVtXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAoaXRlbSkge1xuICBpZiAoISAoaXRlbSBpbnN0YW5jZW9mIEZpZWxkKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKCdGaWVsZEJhZyBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZpZWxkIHRoYXQgaGFzIGFuIGlkIGRlZmluZWQuJyk7XG4gIH1cblxuICBpZiAoIWl0ZW0uaWQpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcignRmllbGQgaWQgbXVzdCBiZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgaWYgKHRoaXMuZmluZCh7IGlkOiBpdGVtLmlkIH0pKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoKFwiRmllbGQgd2l0aCBpZCBcIiArIChpdGVtLmlkKSArIFwiIGlzIGFscmVhZHkgYWRkZWQuXCIpKTtcbiAgfVxuXG4gIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBGaWVsZEJhZy5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQyICk7XG5cbnZhciBhZnRlciA9IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBvdGhlciA9IHJlZlswXTtcbiAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcbiAgdmFyIGZvcm1hdCA9IHJlZlsyXTtcblxuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3JtYXQgPSBpbmNsdXNpb247XG4gICAgaW5jbHVzaW9uID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZVZhbHVlID0gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuICB2YXIgb3RoZXJWYWx1ZSA9IG1vbWVudChvdGhlciwgZm9ybWF0LCB0cnVlKTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoISBkYXRlVmFsdWUuaXNWYWxpZCgpIHx8ICEgb3RoZXJWYWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZVZhbHVlLmlzQWZ0ZXIob3RoZXJWYWx1ZSkgfHwgKGluY2x1c2lvbiAmJiBkYXRlVmFsdWUuaXNTYW1lKG90aGVyVmFsdWUpKTtcbn07IH07XG5cbnZhciBiZWZvcmUgPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgb3RoZXIgPSByZWZbMF07XG4gIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG4gIHZhciBmb3JtYXQgPSByZWZbMl07XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9ybWF0ID0gaW5jbHVzaW9uO1xuICAgIGluY2x1c2lvbiA9IGZhbHNlO1xuICB9XG4gIHZhciBkYXRlVmFsdWUgPSBtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSk7XG4gIHZhciBvdGhlclZhbHVlID0gbW9tZW50KG90aGVyLCBmb3JtYXQsIHRydWUpO1xuXG4gIC8vIGlmIGVpdGhlciBpcyBub3QgdmFsaWQuXG4gIGlmICghIGRhdGVWYWx1ZS5pc1ZhbGlkKCkgfHwgISBvdGhlclZhbHVlLmlzVmFsaWQoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVmFsdWUuaXNCZWZvcmUob3RoZXJWYWx1ZSkgfHwgKGluY2x1c2lvbiAmJiBkYXRlVmFsdWUuaXNTYW1lKG90aGVyVmFsdWUpKTtcbn07IH07XG5cbnZhciBkYXRlX2Zvcm1hdCA9IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG5cdHZhciBmb3JtYXQgPSByZWZbMF07XG5cblx0cmV0dXJuIG1vbWVudCh2YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCk7XG4gfVx0fTtcblxudmFyIGRhdGVfYmV0d2VlbiA9IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG4gIHZhciBtaW47XG4gIHZhciBtYXg7XG4gIHZhciBmb3JtYXQ7XG4gIHZhciBpbmNsdXNpdml0eSA9ICcoKSc7XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGggPiAzKSB7XG4gICAgdmFyIGFzc2lnbjtcbiAgICAoYXNzaWduID0gcGFyYW1zLCBtaW4gPSBhc3NpZ25bMF0sIG1heCA9IGFzc2lnblsxXSwgaW5jbHVzaXZpdHkgPSBhc3NpZ25bMl0sIGZvcm1hdCA9IGFzc2lnblszXSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGFzc2lnbiQxO1xuICAgIChhc3NpZ24kMSA9IHBhcmFtcywgbWluID0gYXNzaWduJDFbMF0sIG1heCA9IGFzc2lnbiQxWzFdLCBmb3JtYXQgPSBhc3NpZ24kMVsyXSk7XG4gIH1cblxuICB2YXIgbWluRGF0ZSA9IG1vbWVudChtaW4sIGZvcm1hdCwgdHJ1ZSk7XG4gIHZhciBtYXhEYXRlID0gbW9tZW50KG1heCwgZm9ybWF0LCB0cnVlKTtcbiAgdmFyIGRhdGVWYWwgPSBtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSk7XG5cbiAgaWYgKCEgKG1pbkRhdGUuaXNWYWxpZCgpICYmIG1heERhdGUuaXNWYWxpZCgpICYmIGRhdGVWYWwuaXNWYWxpZCgpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVmFsLmlzQmV0d2VlbihtaW5EYXRlLCBtYXhEYXRlLCAnZGF5cycsIGluY2x1c2l2aXR5KTtcbn07IH07XG5cbnZhciBtZXNzYWdlcyQxID0ge1xuICBhZnRlcjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGFmdGVyIFwiICsgKGluY2x1c2lvbiA/ICdvciBlcXVhbCB0byAnIDogJycpICsgdGFyZ2V0ICsgXCIuXCIpO1xufSxcbiAgYmVmb3JlOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB0YXJnZXQgPSByZWZbMF07XG4gICAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgYmVmb3JlIFwiICsgKGluY2x1c2lvbiA/ICdvciBlcXVhbCB0byAnIDogJycpICsgdGFyZ2V0ICsgXCIuXCIpO1xufSxcbiAgZGF0ZV9iZXR3ZWVuOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgYmV0d2VlbiBcIiArIG1pbiArIFwiIGFuZCBcIiArIG1heCArIFwiLlwiKTtcbn0sXG4gIGRhdGVfZm9ybWF0OiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBmb3JtYXQgPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGluIHRoZSBmb3JtYXQgXCIgKyBmb3JtYXQgKyBcIi5cIik7XG59XG59O1xuXG52YXIgZGF0ZSA9IHtcbiAgbWFrZTogZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gKHtcbiAgICBkYXRlX2Zvcm1hdDogZGF0ZV9mb3JtYXQobW9tZW50KSxcbiAgICBhZnRlcjogYWZ0ZXIobW9tZW50KSxcbiAgICBiZWZvcmU6IGJlZm9yZShtb21lbnQpLFxuICAgIGRhdGVfYmV0d2VlbjogZGF0ZV9iZXR3ZWVuKG1vbWVudClcbiAgfSk7IH0sXG4gIG1lc3NhZ2VzOiBtZXNzYWdlcyQxLFxuICBpbnN0YWxsZWQ6IGZhbHNlXG59O1xuXG52YXIgTE9DQUxFID0gJ2VuJztcbnZhciBTVFJJQ1RfTU9ERSA9IHRydWU7XG52YXIgRElDVElPTkFSWSA9IG5ldyBEaWN0aW9uYXJ5KHtcbiAgZW46IHtcbiAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgY3VzdG9tOiB7fVxuICB9XG59KTtcblxudmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvciAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHsgdm06IG51bGwsIGZhc3RFeGl0OiB0cnVlIH07XG5cbiAgdGhpcy5zdHJpY3QgPSBTVFJJQ1RfTU9ERTtcbiAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JCYWcoKTtcbiAgdGhpcy5maWVsZHMgPSBuZXcgRmllbGRCYWcoKTtcbiAgdGhpcy5maWVsZEJhZyA9IHt9O1xuICB0aGlzLl9jcmVhdGVGaWVsZHModmFsaWRhdGlvbnMpO1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmZhc3RFeGl0ID0gb3B0aW9ucy5mYXN0RXhpdCB8fCBmYWxzZTtcbiAgdGhpcy5vd25lcklkID0gb3B0aW9ucy52bSAmJiBvcHRpb25zLnZtLl91aWQ7XG4gIC8vIGNyZWF0ZSBpdCBzdGF0aWNhbGx5IHNpbmNlIHdlIGRvbid0IG5lZWQgY29uc3RhbnQgYWNjZXNzIHRvIHRoZSB2bS5cbiAgdGhpcy5jbGVhbiA9IG9wdGlvbnMudm0gJiYgaXNDYWxsYWJsZShvcHRpb25zLnZtLiRuZXh0VGljaykgPyBmdW5jdGlvbiAoKSB7XG4gICAgb3B0aW9ucy52bS4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVycm9ycy5jbGVhcigpO1xuICAgIH0pO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5lcnJvcnMuY2xlYXIoKTtcbiAgfTtcblxuICAvLyBpZiBtb21lbnRqcyBpcyBwcmVzZW50LCBpbnN0YWxsIHRoZSB2YWxpZGF0b3JzLlxuICBpZiAodHlwZW9mIG1vbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHRoaXMuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyhtb21lbnQpO1xuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBkaWN0aW9uYXJ5OiB7fSxsb2NhbGU6IHt9LHJ1bGVzOiB7fSB9O1xudmFyIHN0YXRpY0FjY2Vzc29ycyA9IHsgZGljdGlvbmFyeToge30scnVsZXM6IHt9IH07XG5cbi8qKlxuICogQHJldHVybiB7RGljdGlvbmFyeX1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmRpY3Rpb25hcnkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRElDVElPTkFSWTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7RGljdGlvbmFyeX1cbiAqL1xuc3RhdGljQWNjZXNzb3JzLmRpY3Rpb25hcnkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRElDVElPTkFSWTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMubG9jYWxlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIExPQ0FMRTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMucnVsZXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUnVsZXM7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuc3RhdGljQWNjZXNzb3JzLnJ1bGVzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJ1bGVzO1xufTtcblxuLyoqXG4gKiBNZXJnZXMgYSB2YWxpZGF0b3Igb2JqZWN0IGludG8gdGhlIFJ1bGVzIGFuZCBNZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW17ZnVuY3Rpb258b2JqZWN0fSB2YWxpZGF0b3IgVGhlIHZhbGlkYXRvciBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5fbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgUnVsZXNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgUnVsZXNbbmFtZV0gPSB2YWxpZGF0b3IudmFsaWRhdGU7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSkge1xuICAgIERJQ1RJT05BUlkuc2V0TWVzc2FnZShMT0NBTEUsIG5hbWUsIHZhbGlkYXRvci5nZXRNZXNzYWdlKTtcbiAgfVxuXG4gIGlmICh2YWxpZGF0b3IubWVzc2FnZXMpIHtcbiAgICBESUNUSU9OQVJZLm1lcmdlKFxuICAgICAgT2JqZWN0LmtleXModmFsaWRhdG9yLm1lc3NhZ2VzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwcmV2O1xuICAgICAgICBkaWN0W2N1cnJdID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiAoIG9iaiA9IHt9LCBvYmpbbmFtZV0gPSB2YWxpZGF0b3IubWVzc2FnZXNbY3Vycl0sIG9iaiApXG4gICAgICAgIH07XG4gICAgICAgICAgdmFyIG9iajtcblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgIH0sIHt9KVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogR3VhcmRzIGZyb20gZXh0bnNpb24gdmlvbGF0aW9ucy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRvciBhIHZhbGlkYXRpb24gcnVsZSBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5fZ3VhcmRFeHRlbmQgPSBmdW5jdGlvbiBfZ3VhcmRFeHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCEgaXNDYWxsYWJsZSh2YWxpZGF0b3IudmFsaWRhdGUpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIChcIkV4dGVuc2lvbiBFcnJvcjogVGhlIHZhbGlkYXRvciAnXCIgKyBuYW1lICsgXCInIG11c3QgYmUgYSBmdW5jdGlvbiBvciBoYXZlIGEgJ3ZhbGlkYXRlJyBtZXRob2QuXCIpXG4gICAgKTtcbiAgfVxuXG4gIGlmICghIGlzQ2FsbGFibGUodmFsaWRhdG9yLmdldE1lc3NhZ2UpICYmICEgaXNPYmplY3QodmFsaWRhdG9yLm1lc3NhZ2VzKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGhhdmUgYSAnZ2V0TWVzc2FnZScgbWV0aG9kIG9yIGhhdmUgYSAnbWVzc2FnZXMnIG9iamVjdC5cIilcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXRpYyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSB2YWxpZGF0aW9ucyBUaGUgdmFsaWRhdGlvbnMgb2JqZWN0LlxuICogQHJldHVybiB7VmFsaWRhdG9yfSB2YWxpZGF0b3IgQSB2YWxpZGF0b3Igb2JqZWN0LlxuICovXG5WYWxpZGF0b3IuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlICh2YWxpZGF0aW9ucywgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFZhbGlkYXRvcih2YWxpZGF0aW9ucywgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjdXN0b20gdmFsaWRhdG9yIHRvIHRoZSBsaXN0IG9mIHZhbGlkYXRpb24gcnVsZXMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFte29iamVjdHxmdW5jdGlvbn0gdmFsaWRhdG9yIFRoZSB2YWxpZGF0b3Igb2JqZWN0L2Z1bmN0aW9uLlxuICovXG5WYWxpZGF0b3IuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgVmFsaWRhdG9yLl9ndWFyZEV4dGVuZChuYW1lLCB2YWxpZGF0b3IpO1xuICBWYWxpZGF0b3IuX21lcmdlKG5hbWUsIHZhbGlkYXRvcik7XG59O1xuXG4vKipcbiAqIEluc3RhbGxzIHRoZSBkYXRldGltZSB2YWxpZGF0b3JzIGFuZCB0aGUgbWVzc2FnZXMuXG4gKi9cblZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzID0gZnVuY3Rpb24gaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyAobW9tZW50KSB7XG4gIGlmICh0eXBlb2YgbW9tZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybignVG8gdXNlIHRoZSBkYXRlLXRpbWUgdmFsaWRhdG9ycyB5b3UgbXVzdCBwcm92aWRlIG1vbWVudCByZWZlcmVuY2UuJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZGF0ZS5pbnN0YWxsZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB2YWxpZGF0b3JzID0gZGF0ZS5tYWtlKG1vbWVudCk7XG4gIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBWYWxpZGF0b3IuZXh0ZW5kKG5hbWUsIHZhbGlkYXRvcnNbbmFtZV0pO1xuICB9KTtcblxuICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeSh7XG4gICAgZW46IHtcbiAgICAgIG1lc3NhZ2VzOiBkYXRlLm1lc3NhZ2VzXG4gICAgfVxuICB9KTtcbiAgZGF0ZS5pbnN0YWxsZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgcnVsZSBmcm9tIHRoZSBsaXN0IG9mIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yL3J1bGUuXG4gKi9cblZhbGlkYXRvci5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgZGVsZXRlIFJ1bGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IGxvY2FsZSBmb3IgYWxsIHZhbGlkYXRvcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlIFRoZSBsb2NhbGUgaWQuXG4gKi9cblZhbGlkYXRvci5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUgKGxhbmd1YWdlKSB7XG4gICAgaWYgKCBsYW5ndWFnZSA9PT0gdm9pZCAwICkgbGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoISBESUNUSU9OQVJZLmhhc0xvY2FsZShsYW5ndWFnZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3YXJuKCdZb3UgYXJlIHNldHRpbmcgdGhlIHZhbGlkYXRvciBsb2NhbGUgdG8gYSBsb2NhbGUgdGhhdCBpcyBub3QgZGVmaW5lZCBpbiB0aGUgZGljaXRpb25hcnkuIEVuZ2xpc2ggbWVzc2FnZXMgbWF5IHN0aWxsIGJlIGdlbmVyYXRlZC4nKTtcbiAgfVxuXG4gIExPQ0FMRSA9IGxhbmd1YWdlO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBvcGVyYXRpbmcgbW9kZSBmb3IgYWxsIG5ld2x5IGNyZWF0ZWQgdmFsaWRhdG9ycy5cbiAqIHN0cmljdE1vZGUgPSB0cnVlOiBWYWx1ZXMgd2l0aG91dCBhIHJ1bGUgYXJlIGludmFsaWQgYW5kIGNhdXNlIGZhaWx1cmUuXG4gKiBzdHJpY3RNb2RlID0gZmFsc2U6IFZhbHVlcyB3aXRob3V0IGEgcnVsZSBhcmUgdmFsaWQgYW5kIGFyZSBza2lwcGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RNb2RlLlxuICovXG5WYWxpZGF0b3Iuc2V0U3RyaWN0TW9kZSA9IGZ1bmN0aW9uIHNldFN0cmljdE1vZGUgKHN0cmljdE1vZGUpIHtcbiAgICBpZiAoIHN0cmljdE1vZGUgPT09IHZvaWQgMCApIHN0cmljdE1vZGUgPSB0cnVlO1xuXG4gIFNUUklDVF9NT0RFID0gc3RyaWN0TW9kZTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZGljaXRpb25hcnksIG92ZXJ3cml0aW5nIGV4aXN0aW5nIHZhbHVlcyBhbmQgYWRkaW5nIG5ldyBvbmVzLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IGRhdGEgVGhlIGRpY3Rpb25hcnkgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeSA9IGZ1bmN0aW9uIHVwZGF0ZURpY3Rpb25hcnkgKGRhdGEpIHtcbiAgRElDVElPTkFSWS5tZXJnZShkYXRhKTtcbn07XG5cblZhbGlkYXRvci5hZGRMb2NhbGUgPSBmdW5jdGlvbiBhZGRMb2NhbGUgKGxvY2FsZSkge1xuICBpZiAoISBsb2NhbGUubmFtZSkge1xuICAgIHdhcm4oJ1lvdXIgbG9jYWxlIG11c3QgaGF2ZSBhIG5hbWUgcHJvcGVydHknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnVwZGF0ZURpY3Rpb25hcnkoKCBvYmogPSB7fSwgb2JqW2xvY2FsZS5uYW1lXSA9IGxvY2FsZSwgb2JqICkpO1xuICAgIHZhciBvYmo7XG59O1xuXG5WYWxpZGF0b3IucHJvdG90eXBlLmFkZExvY2FsZSA9IGZ1bmN0aW9uIGFkZExvY2FsZSAobG9jYWxlKSB7XG4gIFZhbGlkYXRvci5hZGRMb2NhbGUobG9jYWxlKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZmllbGRzIHRvIGJlIHZhbGlkYXRlZC5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSB2YWxpZGF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fSBOb3JtYWxpemVkIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlRmllbGRzID0gZnVuY3Rpb24gX2NyZWF0ZUZpZWxkcyAodmFsaWRhdGlvbnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoISB2YWxpZGF0aW9ucykgeyByZXR1cm47IH1cblxuICBPYmplY3Qua2V5cyh2YWxpZGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFzc2lnbih7fSwgeyBuYW1lOiBmaWVsZCwgcnVsZXM6IHZhbGlkYXRpb25zW2ZpZWxkXSB9KTtcbiAgICB0aGlzJDEuYXR0YWNoKG9wdGlvbnMpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGF0ZSBydWxlcyBuZWVkIHRoZSBleGlzdGFuY2Ugb2YgYSBmb3JtYXQsIHNvIGRhdGVfZm9ybWF0IG11c3QgYmUgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgcnVsZSBuYW1lLlxuICogQHBhcmFtIHtBcnJheX0gdmFsaWRhdGlvbnMgdGhlIGZpZWxkIHZhbGlkYXRpb25zLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9nZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gX2dldERhdGVGb3JtYXQgKHZhbGlkYXRpb25zKSB7XG4gIHZhciBmb3JtYXQgPSBudWxsO1xuICBpZiAodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQgJiYgQXJyYXkuaXNBcnJheSh2YWxpZGF0aW9ucy5kYXRlX2Zvcm1hdCkpIHtcbiAgICBmb3JtYXQgPSB2YWxpZGF0aW9ucy5kYXRlX2Zvcm1hdFswXTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQgfHwgdGhpcy5kaWN0aW9uYXJ5LmdldERhdGVGb3JtYXQodGhpcy5sb2NhbGUpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBydWxlIGlzIGEgZGF0ZSBydWxlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9pc0FEYXRlUnVsZSA9IGZ1bmN0aW9uIF9pc0FEYXRlUnVsZSAocnVsZSkge1xuICByZXR1cm4gISEgflsnYWZ0ZXInLCAnYmVmb3JlJywgJ2RhdGVfYmV0d2VlbicsICdkYXRlX2Zvcm1hdCddLmluZGV4T2YocnVsZSk7XG59O1xuXG4vKipcbiAqIEZvcm1hdHMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgZmllbGQgYW5kIGEgcnVsZS5cbiAqXG4gKiBAcGFyYW17RmllbGR9IGZpZWxkIFRoZSBmaWVsZCBvYmplY3QuXG4gKiBAcGFyYW17b2JqZWN0fSBydWxlIE5vcm1hbGl6ZWQgcnVsZSBvYmplY3QuXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBBZGRpdGlvbmFsIEluZm9ybWF0aW9uIGFib3V0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdC5cbiAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2Zvcm1hdEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIF9mb3JtYXRFcnJvck1lc3NhZ2UgKGZpZWxkLCBydWxlLCBkYXRhKSB7XG4gICAgaWYgKCBkYXRhID09PSB2b2lkIDAgKSBkYXRhID0ge307XG5cbiAgdmFyIG5hbWUgPSB0aGlzLl9nZXRGaWVsZERpc3BsYXlOYW1lKGZpZWxkKTtcbiAgdmFyIHBhcmFtcyA9IHRoaXMuX2dldExvY2FsaXplZFBhcmFtcyhydWxlKTtcbiAgLy8gRGVmYXVsdHMgdG8gZW5nbGlzaCBtZXNzYWdlLlxuICBpZiAoISB0aGlzLmRpY3Rpb25hcnkuaGFzTG9jYWxlKExPQ0FMRSkpIHtcbiAgICB2YXIgbXNnJDEgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0RmllbGRNZXNzYWdlKCdlbicsIGZpZWxkLm5hbWUsIHJ1bGUubmFtZSk7XG5cbiAgICByZXR1cm4gaXNDYWxsYWJsZShtc2ckMSkgPyBtc2ckMShuYW1lLCBwYXJhbXMsIGRhdGEpIDogbXNnJDE7XG4gIH1cblxuICB2YXIgbXNnID0gdGhpcy5kaWN0aW9uYXJ5LmdldEZpZWxkTWVzc2FnZShMT0NBTEUsIGZpZWxkLm5hbWUsIHJ1bGUubmFtZSk7XG5cbiAgcmV0dXJuIGlzQ2FsbGFibGUobXNnKSA/IG1zZyhuYW1lLCBwYXJhbXMsIGRhdGEpIDogbXNnO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGUgcnVsZSAobWFpbmx5IGZvciB0YXJnZXQgZmllbGRzKS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0TG9jYWxpemVkUGFyYW1zID0gZnVuY3Rpb24gX2dldExvY2FsaXplZFBhcmFtcyAocnVsZSkge1xuICBpZiAofiBbJ2FmdGVyJywgJ2JlZm9yZScsICdjb25maXJtZWQnXS5pbmRleE9mKHJ1bGUubmFtZSkgJiYgcnVsZS5wYXJhbXMgJiYgcnVsZS5wYXJhbXNbMF0pIHtcbiAgICBpZiAocnVsZS5wYXJhbXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIFt0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgcnVsZS5wYXJhbXNbMF0sIHJ1bGUucGFyYW1zWzBdKSwgcnVsZS5wYXJhbXNbMV1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3RoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUoTE9DQUxFLCBydWxlLnBhcmFtc1swXSwgcnVsZS5wYXJhbXNbMF0pXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZS5wYXJhbXM7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIGFuIGFwcHJvcGlhdGUgZGlzcGxheSBuYW1lLCBmaXJzdCBjaGVja2luZyAnZGF0YS1hcycgb3IgdGhlIHJlZ2lzdGVyZWQgJ3ByZXR0eU5hbWUnXG4gKiBUaGVuIHRoZSBkaWN0aW9uYXJ5LCB0aGVuIGZhbGxzYmFjayB0byBmaWVsZCBuYW1lLlxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgVGhlIGZpZWxkIG9iamVjdC5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIG5hbWUgdG8gYmUgdXNlZCBpbiB0aGUgZXJyb3JzLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9nZXRGaWVsZERpc3BsYXlOYW1lID0gZnVuY3Rpb24gX2dldEZpZWxkRGlzcGxheU5hbWUgKGZpZWxkKSB7XG4gIHJldHVybiBmaWVsZC5kaXNwbGF5TmFtZSB8fCB0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgZmllbGQubmFtZSwgZmllbGQubmFtZSk7XG59O1xuXG4vKipcbiAqIFRlc3RzIGEgc2luZ2xlIGlucHV0IHZhbHVlIGFnYWluc3QgYSBydWxlLlxuICpcbiAqIEBwYXJhbXtGaWVsZH0gZmllbGQgVGhlIGZpZWxkIHVuZGVyIHZhbGlkYXRpb24uXG4gKiBAcGFyYW17Kn0gdmFsdWV0aGUgdmFsdWUgb2YgdGhlIGZpZWxkLlxuICogQHBhcmFte29iamVjdH0gcnVsZSB0aGUgcnVsZSBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIGl0IHBhc3NlcyB0aGUgY2hlY2suXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX3Rlc3QgPSBmdW5jdGlvbiBfdGVzdCAoZmllbGQsIHZhbHVlLCBydWxlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHZhbGlkYXRvciA9IFJ1bGVzW3J1bGUubmFtZV07XG4gIHZhciBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHJ1bGUucGFyYW1zKSA/IHRvQXJyYXkocnVsZS5wYXJhbXMpIDogW107XG4gIGlmICghIHZhbGlkYXRvciB8fCB0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoKFwiTm8gc3VjaCB2YWxpZGF0b3IgJ1wiICsgKHJ1bGUubmFtZSkgKyBcIicgZXhpc3RzLlwiKSk7XG4gIH1cblxuICAvLyBoYXMgZmllbGQgZGVwZW5lbmNpZXNcbiAgaWYgKC8oY29uZmlybWVkfGFmdGVyfGJlZm9yZSkvLnRlc3QocnVsZS5uYW1lKSkge1xuICAgIHZhciB0YXJnZXQgPSBmaW5kKGZpZWxkLmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gcnVsZS5uYW1lOyB9KTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFyYW1zID0gW3RhcmdldC5maWVsZC52YWx1ZSwgcGFyYW1zWzFdXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IFt0YXJnZXQuZmllbGQudmFsdWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChydWxlLm5hbWUgPT09ICdyZXF1aXJlZCcgJiYgZmllbGQucmVqZWN0c0ZhbHNlKSB7XG4gICAgLy8gaW52YWxpZGF0ZSBmYWxzZSBpZiBubyBhcmdzIHdlcmUgc3BlY2lmaWVkIGFuZCB0aGUgZmllbGQgcmVqZWN0cyBmYWxzZSBieSBkZWZhdWx0LlxuICAgIHBhcmFtcyA9IHBhcmFtcy5sZW5ndGggPyBwYXJhbXMgOiBbdHJ1ZV07XG4gIH1cblxuICBpZiAoZGF0ZS5pbnN0YWxsZWQgJiYgdGhpcy5faXNBRGF0ZVJ1bGUocnVsZS5uYW1lKSkge1xuICAgIHZhciBkYXRlRm9ybWF0ID0gdGhpcy5fZ2V0RGF0ZUZvcm1hdChmaWVsZC5ydWxlcyk7XG4gICAgaWYgKHJ1bGUubmFtZSAhPT0gJ2RhdGVfZm9ybWF0Jykge1xuICAgICAgcGFyYW1zLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvcih2YWx1ZSwgcGFyYW1zKTtcblxuICAvLyBJZiBpdCBpcyBhIHByb21pc2UuXG4gIGlmIChpc0NhbGxhYmxlKHJlc3VsdC50aGVuKSkge1xuICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICB2YXIgYWxsVmFsaWQgPSB0cnVlO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgYWxsVmFsaWQgPSB2YWx1ZXMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpc09iamVjdCh0KSA/IHQudmFsaWQgOiB0KTsgfSk7XG4gICAgICB9IGVsc2UgeyAvLyBJcyBhIHNpbmdsZSBvYmplY3QvYm9vbGVhbi5cbiAgICAgICAgYWxsVmFsaWQgPSBpc09iamVjdCh2YWx1ZXMpID8gdmFsdWVzLnZhbGlkIDogdmFsdWVzO1xuICAgICAgICBkYXRhID0gdmFsdWVzLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghIGFsbFZhbGlkKSB7XG4gICAgICAgIHRoaXMkMS5lcnJvcnMuYWRkKHtcbiAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgbXNnOiB0aGlzJDEuX2Zvcm1hdEVycm9yTWVzc2FnZShmaWVsZCwgcnVsZSwgZGF0YSksXG4gICAgICAgICAgcnVsZTogcnVsZS5uYW1lLFxuICAgICAgICAgIHNjb3BlOiBmaWVsZC5zY29wZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFsbFZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCEgaXNPYmplY3QocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IHsgdmFsaWQ6IHJlc3VsdCwgZGF0YToge30gfTtcbiAgfVxuXG4gIGlmICghIHJlc3VsdC52YWxpZCkge1xuICAgIHRoaXMuZXJyb3JzLmFkZCh7XG4gICAgICBpZDogZmllbGQuaWQsXG4gICAgICBmaWVsZDogZmllbGQubmFtZSxcbiAgICAgIG1zZzogdGhpcy5fZm9ybWF0RXJyb3JNZXNzYWdlKGZpZWxkLCBydWxlLCByZXN1bHQuZGF0YSksXG4gICAgICBydWxlOiBydWxlLm5hbWUsXG4gICAgICBzY29wZTogZmllbGQuc2NvcGVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQudmFsaWQ7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGZpZWxkIHRvIGJlIHZhbGlkYXRlZC5cbiAqXG4gKiBAcGFyYW17RmllbGR8T2JqZWN0fSBuYW1lIFRoZSBmaWVsZCBuYW1lLlxuICogQHJldHVybiB7RmllbGR9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoIChmaWVsZCkge1xuICAvLyBkZXByZWNhdGU6IGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmaWVsZCA9IGFzc2lnbih7fSwge1xuICAgICAgbmFtZTogYXJndW1lbnRzWzBdLFxuICAgICAgcnVsZXM6IGFyZ3VtZW50c1sxXVxuICAgIH0sIGFyZ3VtZW50c1syXSB8fCB7IHZtOiB7ICR2YWxpZGF0b3I6IHRoaXMgfSB9KTtcbiAgfVxuXG4gIGlmICghKGZpZWxkIGluc3RhbmNlb2YgRmllbGQpKSB7XG4gICAgZmllbGQgPSBuZXcgRmllbGQoZmllbGQuZWwgfHwgbnVsbCwgZmllbGQpO1xuICB9XG5cbiAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG4gIC8vIHZhbGlkYXRlIGlmIGluaXRpYWwuXG4gIGlmIChmaWVsZC5pbml0aWFsKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgoXCIjXCIgKyAoZmllbGQuaWQpKSwgZmllbGQudmFsdWUpO1xuICB9XG4gIGlmICghZmllbGQuc2NvcGUpIHtcbiAgICB0aGlzLmZpZWxkQmFnID0gYXNzaWduKHt9LCB0aGlzLmZpZWxkQmFnLCAoIG9iaiA9IHt9LCBvYmpbKFwiXCIgKyAoZmllbGQubmFtZSkpXSA9IGZpZWxkLmZsYWdzLCBvYmogKSk7XG4gICAgICB2YXIgb2JqO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIHZhciBzY29wZU9iaiA9IGFzc2lnbih7fSwgdGhpcy5maWVsZEJhZ1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0gfHwge30sICggb2JqJDEgPSB7fSwgb2JqJDFbKFwiXCIgKyAoZmllbGQubmFtZSkpXSA9IGZpZWxkLmZsYWdzLCBvYmokMSApKTtcbiAgICB2YXIgb2JqJDE7XG4gIHRoaXMuZmllbGRCYWcgPSBhc3NpZ24oe30sIHRoaXMuZmllbGRCYWcsICggb2JqJDIgPSB7fSwgb2JqJDJbKFwiJFwiICsgKGZpZWxkLnNjb3BlKSldID0gc2NvcGVPYmosIG9iaiQyICkpO1xuICAgIHZhciBvYmokMjtcblxuICByZXR1cm4gZmllbGQ7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGZsYWdzIG9uIGEgZmllbGQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBmbGFnc1xuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmZsYWcgPSBmdW5jdGlvbiBmbGFnIChuYW1lLCBmbGFncykge1xuICB2YXIgZmllbGQgPSB0aGlzLl9yZXNvbHZlRmllbGQobmFtZSk7XG4gIGlmICghIGZpZWxkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZmllbGQuZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICBmaWVsZC5mbGFnc1tmbGFnXSA9IGZsYWdzW2ZsYWddICE9PSB1bmRlZmluZWQgPyBmbGFnc1tmbGFnXSA6IGZpZWxkLmZsYWdzW2ZsYWddO1xuICB9KTtcbiAgaWYgKGZpZWxkLmNsYXNzZXMpIHtcbiAgICBmaWVsZC51cGRhdGVDbGFzc2VzKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIGZpZWxkIGZyb20gdGhlIHZhbGlkYXRvci5cbiAqXG4gKiBAcGFyYW17U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQgc2NvcGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoIChuYW1lLCBzY29wZSkge1xuICB2YXIgZmllbGQgPSBuYW1lIGluc3RhbmNlb2YgRmllbGQgPyBuYW1lIDogdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUsIHNjb3BlKTtcbiAgaWYgKGZpZWxkKSB7XG4gICAgZmllbGQuZGVzdHJveSgpO1xuICAgIHRoaXMuZXJyb3JzLnJlbW92ZUJ5SWQoZmllbGQuaWQpO1xuICAgIHRoaXMuZmllbGRzLnJlbW92ZShmaWVsZCk7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkcyBhIGN1c3RvbSB2YWxpZGF0b3IgdG8gdGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBydWxlcy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW17b2JqZWN0fGZ1bmN0aW9ufSB2YWxpZGF0b3IgVGhlIHZhbGlkYXRvciBvYmplY3QvZnVuY3Rpb24uXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgVmFsaWRhdG9yLmV4dGVuZChuYW1lLCB2YWxpZGF0b3IpO1xufTtcblxuLyoqXG4gKiBKdXN0IGFuIGFsaWFzIHRvIHRoZSBzdGF0aWMgbWV0aG9kIGZvciBjb252aWVuZWNlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgPSBmdW5jdGlvbiBpbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzIChtb21lbnQpIHtcbiAgVmFsaWRhdG9yLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMobW9tZW50KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHJ1bGUgZnJvbSB0aGUgbGlzdCBvZiB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci9ydWxlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobmFtZSkge1xuICBWYWxpZGF0b3IucmVtb3ZlKG5hbWUpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWxpZGF0b3IgY3VycmVudCBsYW5nYXVnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgbG9jYWxlIG9yIGxhbmd1YWdlIGlkLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnNldExvY2FsZSA9IGZ1bmN0aW9uIHNldExvY2FsZSAobGFuZ3VhZ2UpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghIHRoaXMuZGljdGlvbmFyeS5oYXNMb2NhbGUobGFuZ3VhZ2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgd2FybignWW91IGFyZSBzZXR0aW5nIHRoZSB2YWxpZGF0b3IgbG9jYWxlIHRvIGEgbG9jYWxlIHRoYXQgaXMgbm90IGRlZmluZWQgaW4gdGhlIGRpY2l0aW9uYXJ5LiBFbmdsaXNoIG1lc3NhZ2VzIG1heSBzdGlsbCBiZSBnZW5lcmF0ZWQuJyk7XG4gIH1cblxuICBMT0NBTEUgPSBsYW5ndWFnZTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgbWVzc2FnZXMgZGljaXRpb25hcnksIG92ZXJ3cml0aW5nIGV4aXN0aW5nIHZhbHVlcyBhbmQgYWRkaW5nIG5ldyBvbmVzLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IGRhdGEgVGhlIG1lc3NhZ2VzIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gdXBkYXRlRGljdGlvbmFyeSAoZGF0YSkge1xuICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeShkYXRhKTtcbn07XG5cbi8qKlxuICogVHJpZXMgZGlmZmVyZW50IHN0cmF0ZWdpZXMgdG8gZmluZCBhIGZpZWxkLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZVxuICogQHJldHVybiB7RmllbGR9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX3Jlc29sdmVGaWVsZCA9IGZ1bmN0aW9uIF9yZXNvbHZlRmllbGQgKG5hbWUsIHNjb3BlKSB7XG4gIGlmIChzY29wZSkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcy5maW5kKHsgbmFtZTogbmFtZSwgc2NvcGU6IHNjb3BlIH0pO1xuICB9XG5cbiAgaWYgKG5hbWVbMF0gPT09ICcjJykge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcy5maW5kKHsgaWQ6IG5hbWUuc2xpY2UoMSkgfSk7XG4gIH1cblxuICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkcy5maW5kKHsgbmFtZTogcGFydHNbMV0sIHNjb3BlOiBwYXJ0c1swXSB9KTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBudWxsIH0pO1xufTtcblxuLyoqXG4gKiBIYW5kbGVzIHdoZW4gYSBmaWVsZCBpcyBub3QgZm91bmQgZGVwZW5kaW5nIG9uIHRoZSBzdHJpY3QgZmxhZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2hhbmRsZUZpZWxkTm90Rm91bmQgPSBmdW5jdGlvbiBfaGFuZGxlRmllbGROb3RGb3VuZCAobmFtZSwgc2NvcGUpIHtcbiAgaWYgKCEgdGhpcy5zdHJpY3QpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBmdWxsTmFtZSA9IHNjb3BlID8gbmFtZSA6IChcIlwiICsgKHNjb3BlID8gc2NvcGUgKyAnLicgOiAnJykgKyBuYW1lKTtcbiAgdGhyb3cgY3JlYXRlRXJyb3IoXG4gICAgKFwiVmFsaWRhdGluZyBhIG5vbi1leGlzdGFudCBmaWVsZDogXFxcIlwiICsgZnVsbE5hbWUgKyBcIlxcXCIuIFVzZSBcXFwiYXR0YWNoKClcXFwiIGZpcnN0LlwiKVxuICApO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdGhlIHZhbGlkYXRpb24gcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge0ZpZWxkfSBmaWVsZFxuICogQHBhcmFtIHtQcm9taXNlfSB2YWx1ZVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl92YWxpZGF0ZSA9IGZ1bmN0aW9uIF92YWxpZGF0ZSAoZmllbGQsIHZhbHVlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCEgZmllbGQuaXNSZXF1aXJlZCAmJiB+W251bGwsIHVuZGVmaW5lZCwgJyddLmluZGV4T2YodmFsdWUpKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IFtdO1xuICB2YXIgaXNFeGl0RWFybHkgPSBmYWxzZTtcbiAgLy8gdXNlIG9mICcuc29tZSgpJyBpcyB0byBicmVhayBpdGVyYXRpb24gaW4gbWlkZGxlIGJ5IHJldHVybmluZyB0cnVlXG4gIE9iamVjdC5rZXlzKGZpZWxkLnJ1bGVzKS5zb21lKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMkMS5fdGVzdChcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB7IG5hbWU6IHJ1bGUsIHBhcmFtczogZmllbGQucnVsZXNbcnVsZV0gfVxuICAgICk7XG5cbiAgICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMkMS5mYXN0RXhpdCAmJiAhcmVzdWx0KSB7XG4gICAgICBpc0V4aXRFYXJseSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHRBc1Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0QXNQcm9taXNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFeGl0RWFybHk7XG4gIH0pO1xuXG4gIGlmIChpc0V4aXRFYXJseSkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTsgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgdmFyIHZhbGlkID0gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTtcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYSB2YWx1ZSBhZ2FpbnN0IGEgcmVnaXN0ZXJlZCBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIHRoZSBmaWVsZCBuYW1lLlxuICogQHBhcmFteyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIHNjb3BlIG9mIHRoZSBmaWVsZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZSAobmFtZSwgdmFsdWUsIHNjb3BlKSB7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgYWxsLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlU2NvcGVzKCk7XG4gIH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBzY29wZWxlc3MgZmllbGRzLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBhcmd1bWVudHNbMF0gPT09ICcqJykge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKCk7XG4gIH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBhIHNjb3BlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnc3RyaW5nJyAmJiAvXiguKylcXC5cXCokLy50ZXN0KGFyZ3VtZW50c1swXSkpIHtcbiAgICB2YXIgbWF0Y2hlZCA9IGFyZ3VtZW50c1swXS5tYXRjaCgvXiguKylcXC5cXCokLylbMV07XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbGwobWF0Y2hlZCk7XG4gIH1cblxuICB2YXIgZmllbGQgPSB0aGlzLl9yZXNvbHZlRmllbGQobmFtZSwgc2NvcGUpO1xuICBpZiAoIWZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZpZWxkTm90Rm91bmQobmFtZSwgc2NvcGUpO1xuICB9XG4gIHRoaXMuZXJyb3JzLnJlbW92ZUJ5SWQoZmllbGQuaWQpO1xuICBpZiAoZmllbGQuaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cbiAgZmllbGQuZmxhZ3MucGVuZGluZyA9IHRydWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl92YWxpZGF0ZShmaWVsZCwgdmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGZpZWxkLmZsYWdzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICBmaWVsZC5mbGFncy52YWxpZCA9IHJlc3VsdDtcbiAgICBmaWVsZC5mbGFncy5pbnZhbGlkID0gIXJlc3VsdDtcbiAgICBmaWVsZC5mbGFncy52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIGZpZWxkLnVwZGF0ZUFyaWFBdHRycygpO1xuICAgIGZpZWxkLnVwZGF0ZUN1c3RvbVZhbGlkaXR5KCk7XG4gICAgZmllbGQudXBkYXRlQ2xhc3NlcygpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyB0aGUgdmFsaWRhdG9yLlxuICpcbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXN1bWVzIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHJldHVybiB7VmFsaWRhdG9yfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBlYWNoIHZhbHVlIGFnYWluc3QgdGhlIGNvcnJlc3BvbmRpbmcgZmllbGQgdmFsaWRhdGlvbnMuXG4gKiBAcGFyYW17T2JqZWN0fFN0cmluZ30gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYmUgdmFsaWRhdGVkLlxuICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiB2YWxpZGF0ZUFsbCAodmFsdWVzKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIG1hdGNoZXIgPSBudWxsO1xuICB2YXIgcHJvdmlkZWRWYWx1ZXMgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogdmFsdWVzIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWVzKSkge1xuICAgIG1hdGNoZXIgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4geyBuYW1lOiBrZXksIHNjb3BlOiBhcmd1bWVudHMkMVsxXSB8fCBudWxsIH07XG4gICAgfSk7XG4gICAgcHJvdmlkZWRWYWx1ZXMgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogbnVsbCB9OyAvLyBnbG9iYWwgc2NvcGUuXG4gIH1cblxuICB2YXIgcHJvbWlzZXMgPSB0aGlzLmZpZWxkcy5maWx0ZXIobWF0Y2hlcikubWFwKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gdGhpcyQxLnZhbGlkYXRlKFxuICAgIChcIiNcIiArIChmaWVsZC5pZCkpLFxuICAgIHByb3ZpZGVkVmFsdWVzID8gdmFsdWVzW2ZpZWxkLm5hbWVdIDogZmllbGQudmFsdWVcbiAgKTsgfSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7IHJldHVybiByZXN1bHRzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTsgfSk7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgc2NvcGVzLlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBbGwgcHJvbWlzZXMgcmVzdWx0ZWQgZnJvbSBlYWNoIHNjb3BlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlU2NvcGVzID0gZnVuY3Rpb24gdmFsaWRhdGVTY29wZXMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMubWFwKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gdGhpcyQxLnZhbGlkYXRlKFxuICAgIChcIiNcIiArIChmaWVsZC5pZCkpLFxuICAgIGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZhbGlkYXRvci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZhbGlkYXRvciwgc3RhdGljQWNjZXNzb3JzICk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgcGFyZW50IHZhbGlkYXRvciBpbnN0YW5jZSB3YXMgcmVxdWVzdGVkLlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGluamVjdGlvbnNcbiAqL1xudmFyIHJlcXVlc3RzVmFsaWRhdG9yID0gZnVuY3Rpb24gKGluamVjdGlvbnMpIHtcbiAgaWYgKCEgaW5qZWN0aW9ucykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdGlvbnMpICYmIH5pbmplY3Rpb25zLmluZGV4T2YoJyR2YWxpZGF0b3InKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KGluamVjdGlvbnMpICYmIGluamVjdGlvbnMuJHZhbGlkYXRvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdmFsaWRhdG9yIGluc3RhbmNlLlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG52YXIgY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKHZtLCBvcHRpb25zKSB7IHJldHVybiBuZXcgVmFsaWRhdG9yKG51bGwsIHtcbiAgaW5pdDogZmFsc2UsXG4gIHZtOiB2bSxcbiAgZmFzdEV4aXQ6IG9wdGlvbnMuZmFzdEV4aXRcbn0pOyB9O1xuXG52YXIgbWFrZU1peGluID0gZnVuY3Rpb24gKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbWl4aW4gPSB7fTtcbiAgbWl4aW4ucHJvdmlkZSA9IGZ1bmN0aW9uIHByb3ZpZGVzVmFsaWRhdG9yICgpIHtcbiAgICBpZiAodGhpcy4kdmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAkdmFsaWRhdG9yOiB0aGlzLiR2YWxpZGF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9O1xuXG4gIG1peGluLmJlZm9yZUNyZWF0ZSA9IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgLy8gaWYgaXRzIGEgcm9vdCBpbnN0YW5jZSwgaW5qZWN0IGFueXdheXMsIG9yIGlmIGl0IHJlcXVlc3RlZCBhIG5ldyBpbnN0YW5jZS5cbiAgICBpZiAodGhpcy4kb3B0aW9ucy4kdmFsaWRhdGVzIHx8ICF0aGlzLiRwYXJlbnQpIHtcbiAgICAgIHRoaXMuJHZhbGlkYXRvciA9IGNyZWF0ZVZhbGlkYXRvcih0aGlzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdGVkID0gcmVxdWVzdHNWYWxpZGF0b3IodGhpcy4kb3B0aW9ucy5pbmplY3QpO1xuXG4gICAgLy8gaWYgYXV0b21hdGljIGluamVjdGlvbiBpcyBlbmFibGVkIGFuZCBubyBpbnN0YW5jZSB3YXMgcmVxdWVzdGVkLlxuICAgIGlmICghIHRoaXMuJHZhbGlkYXRvciAmJiBvcHRpb25zLmluamVjdCAmJiAhcmVxdWVzdGVkKSB7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3QgaW5qZWN0IGVycm9ycyBvciBmaWVsZEJhZyBhcyBubyB2YWxpZGF0b3Igd2FzIHJlc29sdmVkLlxuICAgIGlmICghIHJlcXVlc3RlZCAmJiAhIHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIGlzIGEgdmFsaWRhdG9yIGJ1dCBpdCBpc24ndCBpbmplY3RlZCwgbWFyayBhcyByZWFjdGl2ZS5cbiAgICBpZiAoISByZXF1ZXN0ZWQgJiYgdGhpcy4kdmFsaWRhdG9yKSB7XG4gICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLiR2YWxpZGF0b3IsICdlcnJvcnMnLCB0aGlzLiR2YWxpZGF0b3IuZXJyb3JzKTtcbiAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMuJHZhbGlkYXRvciwgJ2ZpZWxkQmFnJywgdGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnKTtcbiAgICB9XG5cbiAgICBpZiAoISB0aGlzLiRvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkID0ge307XG4gICAgfVxuXG4gICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZFtvcHRpb25zLmVycm9yQmFnTmFtZSB8fCAnZXJyb3JzJ10gPSBmdW5jdGlvbiBlcnJvckJhZ0dldHRlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kdmFsaWRhdG9yLmVycm9ycztcbiAgICB9O1xuICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRbb3B0aW9ucy5maWVsZHNCYWdOYW1lIHx8ICdmaWVsZHMnXSA9IGZ1bmN0aW9uIGZpZWxkQmFnR2V0dGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWc7XG4gICAgfTtcbiAgfTtcblxuICBtaXhpbi5iZWZvcmVEZXN0cm95ID0gZnVuY3Rpb24gYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgLy8gbWFyayB0aGUgdmFsaWRhdG9yIHBhdXNlZCB0byBwcmV2ZW50IGRlbGF5ZWQgdmFsaWRhdGlvbi5cbiAgICBpZiAodGhpcy4kdmFsaWRhdG9yICYmIHRoaXMuJHZhbGlkYXRvci5vd25lcklkID09PSB0aGlzLl91aWQgJiYgaXNDYWxsYWJsZSh0aGlzLiR2YWxpZGF0b3IucGF1c2UpKSB7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IucGF1c2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIG1peGluO1xufTtcblxudmFyIGNvbmZpZyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBkZWxheTogMCxcbiAgZXJyb3JCYWdOYW1lOiAnZXJyb3JzJyxcbiAgZGljdGlvbmFyeTogbnVsbCxcbiAgc3RyaWN0OiB0cnVlLFxuICBmaWVsZHNCYWdOYW1lOiAnZmllbGRzJyxcbiAgY2xhc3NlczogZmFsc2UsXG4gIGNsYXNzTmFtZXM6IHVuZGVmaW5lZCxcbiAgZXZlbnRzOiAnaW5wdXR8Ymx1cicsXG4gIGluamVjdDogdHJ1ZSxcbiAgZmFzdEV4aXQ6IHRydWUsXG4gIGFyaWE6IHRydWUsXG4gIHZhbGlkaXR5OiB0cnVlXG59O1xuXG4vKipcbiAqIFxuICogXG4gKiBGaW5kcyB0aGUgcmVxdWVzdGVkIGZpZWxkIGJ5IGlkIGZyb20gdGhlIGNvbnRleHQgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEByZXR1cm4ge0ZpZWxkfG51bGx9XG4gKi9cbnZhciBmaW5kRmllbGQgPSBmdW5jdGlvbiAoZWwsIGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LiR2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0LiR2YWxpZGF0b3IuZmllbGRzLmZpbmQoeyBpZDogZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2lkJykgfSk7XG59O1xuXG52YXIgY3JlYXRlRGlyZWN0aXZlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcblxuICByZXR1cm4ge1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgdmFyIHZhbGlkYXRvciA9IHZub2RlLmNvbnRleHQuJHZhbGlkYXRvcjtcbiAgICAgIGlmICghIHZhbGlkYXRvcikge1xuICAgICAgICB3YXJuKFwiTm8gdmFsaWRhdG9yIGluc3RhbmNlIGlzIHByZXNlbnQgb24gdm0sIGRpZCB5b3UgZm9yZ2V0IHRvIGluamVjdCAnJHZhbGlkYXRvcic/XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRPcHRpb25zID0gR2VuZXJhdG9yLmdlbmVyYXRlKGVsLCBiaW5kaW5nLCB2bm9kZSwgb3B0aW9ucyk7XG4gICAgICB2YWxpZGF0b3IuYXR0YWNoKGZpZWxkT3B0aW9ucyk7XG4gICAgfSxcbiAgICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgdmFyIGZpZWxkID0gZmluZEZpZWxkKGVsLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIHZhciBzY29wZSA9IEdlbmVyYXRvci5yZXNvbHZlU2NvcGUoZWwsIGJpbmRpbmcsIHZub2RlKTtcblxuICAgICAgLy8gc2tpcCBpZiBzY29wZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgIGlmICghZmllbGQgfHwgc2NvcGUgPT09IGZpZWxkLnNjb3BlKSB7IHJldHVybjsgfVxuXG4gICAgICAvLyBvbmx5IHVwZGF0ZSBzY29wZS5cbiAgICAgIGZpZWxkLnVwZGF0ZSh7IHNjb3BlOiBzY29wZSB9KTtcblxuICAgICAgLy8gYWxsb3dzIHRoZSBmaWVsZCB0byByZS1ldmFsdWF0ZWQgb25jZSBtb3JlIGluIHRoZSB1cGRhdGUgaG9vay5cbiAgICAgIGZpZWxkLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgdmFyIGZpZWxkID0gZmluZEZpZWxkKGVsLCB2bm9kZS5jb250ZXh0KTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGRvIHVuZWNjZXNzYXJ5IHdvcmsgaWYgbm8gaW1wb3J0YW50IGNoYW5nZSB3YXMgZG9uZS5cbiAgICAgIGlmICghZmllbGQgfHwgKGZpZWxkLnVwZGF0ZWQgJiYgaXNFcXVhbChiaW5kaW5nLnZhbHVlLCBiaW5kaW5nLm9sZFZhbHVlKSkpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2NvcGUgPSBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICB2YXIgcnVsZXMgPSBHZW5lcmF0b3IucmVzb2x2ZVJ1bGVzKGVsLCBiaW5kaW5nKTtcblxuICAgICAgZmllbGQudXBkYXRlKHtcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICBydWxlczogcnVsZXNcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKGVsLCBiaW5kaW5nLCByZWYpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gcmVmLmNvbnRleHQ7XG5cbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgY29udGV4dCk7XG4gICAgICBpZiAoIWZpZWxkKSB7IHJldHVybjsgfVxuXG4gICAgICBjb250ZXh0LiR2YWxpZGF0b3IuZGV0YWNoKGZpZWxkKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgIGlmICh+Y3Vyci5pbmRleE9mKCcuJykpIHtcbiAgICAgICAgcHJldltjdXJyLnNwbGl0KCcuJylbMV1dID0gY3VycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZbY3Vycl0gPSBjdXJyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufTtcblxuLyoqXG4gKiBNYXBzIGZpZWxkcyB0byBjb21wdXRlZCBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGZpZWxkc1xuICovXG52YXIgbWFwRmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZShmaWVsZHMpO1xuICByZXR1cm4gT2JqZWN0LmtleXMobm9ybWFsaXplZCkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgdmFyIGZpZWxkID0gbm9ybWFsaXplZFtjdXJyXTtcbiAgICBwcmV2W2N1cnJdID0gZnVuY3Rpb24gbWFwcGVkRmllbGQgKCkge1xuICAgICAgaWYgKHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZ1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZ1tmaWVsZF07XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleCA9IGZpZWxkLmluZGV4T2YoJy4nKTtcbiAgICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgdmFyIHNjb3BlID0gcmVmWzBdO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMV07XG5cbiAgICAgIHJldHVybiBnZXRQYXRoKChcIiRcIiArIHNjb3BlICsgXCIuXCIgKyBuYW1lKSwgdGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnLCB7fSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwcmV2O1xuICB9LCB7fSk7XG59O1xuXG52YXIgVnVlO1xuXG52YXIgaW5zdGFsbCA9IGZ1bmN0aW9uIChfVnVlLCBvcHRpb25zKSB7XG4gIGlmIChWdWUpIHtcbiAgICB3YXJuKCdhbHJlYWR5IGluc3RhbGxlZCwgVnVlLnVzZShWZWVWYWxpZGF0ZSkgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uY2UuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgVnVlID0gX1Z1ZTtcbiAgdmFyIGNvbmZpZyQkMSA9IGFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKTtcbiAgaWYgKGNvbmZpZyQkMS5kaWN0aW9uYXJ5KSB7XG4gICAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoY29uZmlnJCQxLmRpY3Rpb25hcnkpO1xuICB9XG5cbiAgVmFsaWRhdG9yLnNldExvY2FsZShjb25maWckJDEubG9jYWxlKTtcbiAgVmFsaWRhdG9yLnNldFN0cmljdE1vZGUoY29uZmlnJCQxLnN0cmljdCk7XG5cbiAgVnVlLm1peGluKG1ha2VNaXhpbihWdWUsIGNvbmZpZyQkMSkpO1xuICBWdWUuZGlyZWN0aXZlKCd2YWxpZGF0ZScsIGNyZWF0ZURpcmVjdGl2ZShjb25maWckJDEpKTtcbn07XG5cbnZhciBpbmRleCA9IHtcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgbWFwRmllbGRzOiBtYXBGaWVsZHMsXG4gIFZhbGlkYXRvcjogVmFsaWRhdG9yLFxuICBFcnJvckJhZzogRXJyb3JCYWcsXG4gIFJ1bGVzOiBSdWxlcyxcbiAgdmVyc2lvbjogJzIuMC4wLXJjLjEzJ1xufTtcblxucmV0dXJuIGluZGV4O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92ZWUtdmFsaWRhdGUvZGlzdC92ZWUtdmFsaWRhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNSA4IDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgY2xhc3M6IFsnYy1zZWFyY2gnLCB7XG4gICAgICAnYy1zZWFyY2gtLWlubGluZSc6IF92bS5pbmxpbmUsXG4gICAgICAnaXMtc2hvd24nOiBfdm0uc2hvd1NlYXJjaEZvcm1cbiAgICB9XSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uc3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19idXR0b24gaWNvbmltIGljb25pbS1zZWFyY2gtY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVTZWFyY2hcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19mb3JtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygnY2l0eScpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hRdWVyeS5jaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnkuY2l0eVwiXG4gICAgfV0sXG4gICAgcmVmOiBcImlucHV0XCIsXG4gICAgY2xhc3M6IFsnby1pbnB1dCcsIF92bS5pbnB1dFNpemVdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGlsaWggTG9rYXNpXCIsXG4gICAgICBcIm5hbWVcIjogXCJjaXR5XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc2VhcmNoUXVlcnkuY2l0eSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXByZXNzXCI6IF92bS5wcmV2ZW50RW50ZXIsXG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnZhbGlkYXRlKCdjaXR5JywgJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5LmNpdHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygnY2l0eScpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFja1wiXG4gIH0sIFtfdm0uX3YoXCJXYWppYiBkaWlzaS5cIildKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dC1zdWdnZXN0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN1Z2dlc3Rpb25PcHRpb25zLmNhdGVnb3J5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWdnZXN0aW9uQ2xpY2tlZFwiOiBfdm0uc3VnZ2VzdGlvbkNsaWNrZWQsXG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnZhbGlkYXRlKCdrZXl3b3JkJywgJGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaFF1ZXJ5LmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2VhcmNoUXVlcnkua2V5d29yZCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnkua2V5d29yZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFja1wiXG4gIH0sIFtfdm0uX3YoXCJXYWppYiBkaWlzaS5cIildKSA6IF92bS5fZSgpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgY2xhc3M6IFsnby1idXR0b24nLCAnby1idXR0b24tLXByaW1hcnknLCAnby1idXR0b24tY3VzdG9tJywgJ28tYnV0dG9uLS1ibG9jaycsIF92bS5idG5TaXplXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFsoIV92bS5pbmxpbmUpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiWXVrLMKgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJDYXJpXCIpLCAoIV92bS5pbmxpbmUpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIVwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXJpLWljb25zXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICAgIH1cbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBcIiMwMDAwMDBcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjRcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjI0XCIsXG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIH1cbiAgfSwgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMCAwaDI0djI0SDB6XCIsXG4gICAgICBcImZpbGxcIjogXCJub25lXCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXJpLWxhZ2lcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2FyaSBMYWdpXCIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YTJhOTRhNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWEyYTk0YTRcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01YTJhOTRhNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImNvbnRhaW5lclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvblwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ua2V5d29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImtleXdvcmRcIlxuICAgIH1dLFxuICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBfdm0uZ2V0T3B0aW9ucy5pbnB1dElkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uZ2V0T3B0aW9ucy5wbGFjZWhvbGRlcixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ua2V5d29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImZvY3VzXCI6IF92bS5vbklucHV0Rm9jdXMsXG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ua2V5d29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sIF92bS5mZXRjaFN1Z2dlc3Rpb25zXSxcbiAgICAgIFwiYmx1clwiOiBfdm0uYmx1ckhhbmRsZXIsXG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25jaGFuZ2UsXG4gICAgICBcImtleWRvd25cIjogX3ZtLmtleWRvd25IYW5kbGVyXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93SW5wdXRTdWdnZXN0aW9ucyAmJiAhX3ZtLmlzRW1wdHlTdWdnZXN0aW9ucykgPyBfYygnZGl2Jywge1xuICAgIHJlZjogXCJzdWdnZXN0aW9uc1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvbl9fc3VnZ2VzdGlvbnNcIlxuICB9LCBbX3ZtLl9sKChfdm0uc3VnZ2VzdGlvbnMpLCBmdW5jdGlvbihzdWdnZXN0aW9uKSB7XG4gICAgcmV0dXJuIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgICBcImRhdGEtdmFsXCI6IHN1Z2dlc3Rpb24udGV4dFxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhzdWdnZXN0aW9uLmh0bWwpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uc3VnZ2VzdGlvbkNsaWNrZWQoJGV2ZW50LCBzdWdnZXN0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldXG4gIH0pXSwgMikgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZiODk5NWJjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02Yjg5OTViY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZiODk5NWJjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODk5NWJjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJbnB1dFN1Z2dlc3Rpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZiODk5NWJjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmI4OTk1YmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01YTJhOTRhNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU2VhcmNoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YTJhOTRhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVhMmE5NGE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSJdLCJzb3VyY2VSb290IjoiIn0=