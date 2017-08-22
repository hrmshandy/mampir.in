webpackJsonp([3,0],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/404.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue__ = __webpack_require__("./resources/assets/js/components/Search.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Search_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
	components: { SearchForm: __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default.a }
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37df3330\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "not-found"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('div', {
    staticClass: "o-404-grid"
  }, [_c('div', {
    staticClass: "not-found__section"
  }, [_c('h1', {
    staticClass: "o-heading-404"
  }, [_vm._v("Oops!")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('search-form', {
    staticStyle: {
      "margin-left": "0"
    },
    attrs: {
      "size": "large",
      "inline": false
    }
  })], 1), _vm._v(" "), _vm._m(1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "o-description"
  }, [_vm._v("\n\t\t\t\t\t\tMaaf kami tidak menemukan apa yang kamu cari "), _c('br')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "not-found__section"
  }, [_c('img', {
    staticClass: "o-image-robots",
    attrs: {
      "src": __webpack_require__("./resources/assets/img/404/robots.png")
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37df3330", module.exports)
  }
}

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

/***/ "./resources/assets/img/404/robots.png":
/***/ (function(module, exports) {

module.exports = "/images/robots.png?4b04cf225ed73b2d698a3c4833520f59";

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


/***/ }),

/***/ "./resources/assets/js/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/404.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37df3330\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/404.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37df3330", Component.options)
  } else {
    hotAPI.reload("data-v-37df3330", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vU2VhcmNoLnZ1ZT9jMjlhIiwid2VicGFjazovLy80MDQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWUtdmFsaWRhdGUvZGlzdC92ZWUtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlPzk2NzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWU/NjgwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5wdXRTdWdnZXN0aW9uLnZ1ZT9lNWYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1nLzQwNC9yb2JvdHMucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7a0JBK0JBO3lDQUNBO3VCQUNBO0FBRUE7QUFMQTtlQU9BO0FBUkE7MEJBU0E7O3FCQUVBO2tDQUNBO3lCQUNBOzswQkFFQTs4Q0FDQTtvQ0FDQTs2QkFDQTt5QkFDQTs0QkFFQTtBQVBBO3FCQVNBO0FBYkE7QUFjQTs7O3NDQUVBOzREQUNBOytCQUNBO0FBQ0E7QUFDQTt5Q0FDQTtnQ0FDQTtBQUVBO0FBVEE7OzBEQVdBOzhDQUNBO0FBQ0E7MENBQ0E7K0NBQ0E7QUFDQTswQ0FDQTs2SEFDQTtBQUVBO0FBVkE7OytDQVlBO2NBRUE7OzJGQUNBO29EQUNBO0FBRUE7OzZDQUNBOzhDQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImMtaW5wdXQtc3VnZ2VzdGlvblwiIHJlZj1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgOmlkPVwiZ2V0T3B0aW9ucy5pbnB1dElkXCJcbiAgICAgICAgICAgICAgIDpjbGFzcz1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiZ2V0T3B0aW9ucy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgdi1tb2RlbD1cImtleXdvcmRcIlxuICAgICAgICAgICAgICAgQGZvY3VzPVwib25JbnB1dEZvY3VzXCJcbiAgICAgICAgICAgICAgIEBpbnB1dD1cImZldGNoU3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgQGJsdXI9XCJibHVySGFuZGxlclwiXG4gICAgICAgICAgICAgICBAY2hhbmdlPVwib25jaGFuZ2VcIlxuICAgICAgICAgICAgICAgQGtleWRvd249XCJrZXlkb3duSGFuZGxlclwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93SW5wdXRTdWdnZXN0aW9ucyAmJiAhaXNFbXB0eVN1Z2dlc3Rpb25zXCIgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25fX3N1Z2dlc3Rpb25zXCIgcmVmPVwic3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInN1Z2dlc3Rpb24gaW4gc3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic3VnZ2VzdGlvbkNsaWNrZWQoJGV2ZW50LCBzdWdnZXN0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgOmRhdGEtdmFsPVwic3VnZ2VzdGlvbi50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJzdWdnZXN0aW9uLmh0bWxcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBzaG93SW5wdXRTdWdnZXN0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnL3NlYXJjaC9zdWdnZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9uczoge30sXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dElkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYXN0VmFsOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYoIV8uaXNFbXB0eSh2YWx1ZSkgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmtleXdvcmQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleXdvcmQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzRW1wdHlTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWdnZXN0aW9ucy5sZW5ndGggPD0gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dENsYXNzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ28taW5wdXQnLCB0aGlzLmdldE9wdGlvbnMuaW5wdXRDbGFzc107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25JbnB1dEZvY3VzKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYoXy5pc0VtcHR5KGUudGFyZ2V0LnZhbHVlKSAmJiB0aGlzLmdldE9wdGlvbnMuc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN1Z2dlc3Rpb25zKHRoaXMuZ2V0T3B0aW9ucy5kZWZhdWx0U3VnZ2VzdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWdnZXN0aW9ucyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKGUsIHN1Z2dlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHN1Z2dlc3Rpb24udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHN1Z2dlc3Rpb24udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VnZ2VzdGlvbkNsaWNrZWQnLCBlLCBzdWdnZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLmdldE9wdGlvbnMuZW5kcG9pbnQrJz9rZXl3b3JkPScrdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hvd0lucHV0U3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN1Z2dlc3Rpb25zKGRhdGEsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1N1Z2dlc3Rpb25zKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuLy8gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3VnZ2VzdGlvbnMoZGF0YSwgc2VhcmNoID0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXy5pc0VtcHR5KHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoXCIoXCIgKyBzZWFyY2guc3BsaXQoJyAnKS5qb2luKCd8JykgKyBcIilcIiwgXCJnaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IGl0ZW0udGV4dC5yZXBsYWNlKHJlLCBcIjxiPiQxPC9iPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibHVySGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHsgdmFyIG92ZXJfc2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1pbnB1dC1zdWdnZXN0aW9uX19zdWdnZXN0aW9uczpob3ZlcicpOyB9IGNhdGNoKGUpeyB2YXIgb3Zlcl9zYiA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAoIW92ZXJfc2IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTsgfSwgMzUwKTsgLy8gaGlkZSBzdWdnZXN0aW9ucyBvbiBmYXN0IGlucHV0XG4gICAgICAgICAgICAgICAgfSAvL2Vsc2UgaWYgKHRoaXMgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdGhpcy5mb2N1cygpOyB9LCAyMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdibHVyJywgZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleWRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IHRoaXMuJHJlZnMuc3VnZ2VzdGlvbnM7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gd2luZG93LmV2ZW50ID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICAgICAgICAgICAgICAvLyBkb3duICg0MCksIHVwICgzOClcbiAgICAgICAgICAgICAgICBpZiAoKGtleSA9PSA0MCB8fCBrZXkgPT0gMzgpICYmIHNjLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCwgc2VsID0gc2MucXVlcnlTZWxlY3RvcignLmMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbS5pcy1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IChrZXkgPT0gNDApID8gc2MucXVlcnlTZWxlY3RvcignLmMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbScpIDogc2MuY2hpbGROb2Rlc1tzYy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdOyAvLyBmaXJzdCA6IGxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NOYW1lICs9ICcgaXMtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBuZXh0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSAoa2V5ID09IDQwKSA/IHNlbC5uZXh0U2libGluZyA6IHNlbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbC5jbGFzc05hbWUgPSBzZWwuY2xhc3NOYW1lLnJlcGxhY2UoJ2lzLXNlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NOYW1lICs9ICcgaXMtc2VsZWN0ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gbmV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgc2VsLmNsYXNzTmFtZSA9IHNlbC5jbGFzc05hbWUucmVwbGFjZSgnaXMtc2VsZWN0ZWQnLCAnJyk7IGUudGFyZ2V0LnZhbHVlID0gdGhpcy5sYXN0VmFsOyBuZXh0ID0gMDsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZXNjXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gdGhpcy5sYXN0VmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkgPT0gMTMgfHwga2V5ID09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IHNjLnF1ZXJ5U2VsZWN0b3IoJy5jLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW0uaXMtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWwgJiYgdGhpcy5zaG93SW5wdXRTdWdnZXN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0Jywgc2VsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLiRlbWl0KCdzdWdnZXN0aW9uQ2xpY2tlZCcsIGUsIHN1Z2dlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgna2V5ZG93bicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIElucHV0U3VnZ2VzdGlvbi52dWU/ODc3MTI3MTQiLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gOmNsYXNzPVwiWydjLXNlYXJjaCcsIHsnYy1zZWFyY2gtLWlubGluZSc6IGlubGluZSwgJ2lzLXNob3duJzogc2hvd1NlYXJjaEZvcm19XVwiXG4gICAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYy1zZWFyY2hfX2J1dHRvbiBpY29uaW0gaWNvbmltLXNlYXJjaC1jbG9zZVwiIEBjbGljaz1cInRvZ2dsZVNlYXJjaFwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1zZWFyY2hfX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydjLWZvcm0tZ3JvdXAnLCB7J2hhcy1lcnJvcic6IHZhbGlkYXRvci5lcnJvcnMuaGFzKCdjaXR5Jyl9XVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWydvLWlucHV0JywgaW5wdXRTaXplXVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hRdWVyeS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWxpaCBMb2thc2lcIlxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBrZXlwcmVzcz1cInByZXZlbnRFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ2YWxpZGF0ZSgnY2l0eScsICRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidmFsaWRhdG9yLmVycm9ycy5oYXMoJ2NpdHknKVwiIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrXCI+V2FqaWIgZGlpc2kuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZXJyb3InOiB2YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpfV1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtc3VnZ2VzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzdWdnZXN0aW9uT3B0aW9ucy5jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoUXVlcnkua2V5d29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAc3VnZ2VzdGlvbkNsaWNrZWQ9XCJzdWdnZXN0aW9uQ2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidmFsaWRhdGUoJ2tleXdvcmQnLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9pbnB1dC1zdWdnZXN0aW9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ2YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpXCIgY2xhc3M9XCJjLWZvcm0tZmVlZGJhY2tcIj5XYWppYiBkaWlzaS48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIDpjbGFzcz1cIlsnby1idXR0b24nLCAnby1idXR0b24tLXByaW1hcnknLCdvLWJ1dHRvbi1jdXN0b20nLCAnby1idXR0b24tLWJsb2NrJywgYnRuU2l6ZV1cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhaW5saW5lXCI+WXVrLCZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DYXJpPHNwYW4gdi1pZj1cIiFpbmxpbmVcIj4hPC9zcGFuPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FyaS1pY29uc1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1jYXJpLWxhZ2lcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+Q2FyaSBMYWdpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCB7bG9hZGVkfSBmcm9tICcuLi9hcGkvbWFwL2xvYWRlcidcblxuICAgIGltcG9ydCBJbnB1dFN1Z2dlc3Rpb24gZnJvbSAnLi9JbnB1dFN1Z2dlc3Rpb24udnVlJ1xuXG4gICAgaW1wb3J0IHsgVmFsaWRhdG9yLCBFcnJvckJhZyB9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgSW5wdXRTdWdnZXN0aW9uIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgICAgIGlubGluZToge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWV9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3dTZWFyY2hGb3JtOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IG5ldyBWYWxpZGF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbi8vICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4vLyAgICAgICAgICAgICAgICAncXVlcnknXG4vLyAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgcXVlcnkoKSB7XG4gICAgICAgICAgICAgIGxldCBxID0gdGhpcy5zZWFyY2hRdWVyeTtcblxuICAgICAgICAgICAgICByZXR1cm4gcS5rZXl3b3JkLnJlcGxhY2UoL1xccy9nLCAnKycpKycraW4rJytxLmNpdHkucmVwbGFjZSgvXFxzL2csICcrJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRTaXplKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHRoaXMuc2l6ZSkgPyAnby1pbnB1dC0tJyArIHRoaXMuc2l6ZSA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnRuU2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLnNpemUpID8gJ28tYnV0dG9uLS0nICsgdGhpcy5zaXplIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWdnZXN0aW9uT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3QvbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdQaWxpaCBLb3RhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHRoaXMuaW5wdXRTaXplXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9hcGkvc2VhcmNoL3N1Z2dlc3Qva2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ055YXJpIEFwYT8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGFzczogdGhpcy5pbnB1dFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVmYXVsdFN1Z2dlc3Rpb25PbkVtcHR5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFN1Z2dlc3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIm1ha2FuXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJrb3BpXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJzYWxvblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwic3BhXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJiYXJiZXJzaG9wXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJmdXRzYWxcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcImd5bVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICckcm91dGUnOiAnZmV0Y2hRdWVyeSdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlQWxsKHsgY2l0eTogdGhpcy5zZWFyY2hRdWVyeS5jaXR5LCBrZXl3b3JkOiB0aGlzLnNlYXJjaFF1ZXJ5LmtleXdvcmQgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsaWRhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zZWFyY2gvJyt0aGlzLnF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzIHN0dWZmLlxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcgKG5vbi12YWxpZGF0aW9uIHJlbGF0ZWQpLlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGZpZWxkLCBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZmllbGQsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW9sb2NhdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24odGhpcy5nZXRDdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDdXJyZW50Q2l0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5sb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkubG9jYXRpb24gPSBsb2NhdGlvbi5sYXRpdHVkZSsnLCcrbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvY29kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydsYXRMbmcnOiBsYXRMbmd9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlc1swXSA9PSAnbG9jYWxpdHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMubG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gIV8uaXNFbXB0eShyZXN1bHQpID8gcmVzdWx0WzBdLmFkZHJlc3NfY29tcG9uZW50c1swXS5sb25nX25hbWUgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZW9jb2RpbmcgZmFpbGVkOiBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50Q2l0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIENvb2tpZXMuZ2V0KCd1c2VyLWNpdHknKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9FdmVudC5maXJlKCdzaG93LWNpdGllcy1tb2RhbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPQ0FUSU9OJywgQ29va2llcy5nZXQoJ3VzZXItY2l0eScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWFyY2hGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlYXJjaEZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbmltLm9mZignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VhcmNoRm9ybSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGljb25pbS5vbignc2VhcmNoLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DbGlja2VkKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaXR5Q2hhbmdlZChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudEVudGVyKGUpIHtcbiAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb29nbGVTZWFyY2hTdWdnZXN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvYWRlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzOiBbJyhjaXRpZXMpJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtjb3VudHJ5OiBcImlkXCJ9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMobmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMC43ODkyNzUsIDExMy45MjEzMjcwMDAwMDAwMikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy4kcmVmcy5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoQm94ID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoaW5wdXQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEJveC5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gc2VhcmNoQm94LmdldFBsYWNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkuY2l0eSA9IGxvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRyYWN0UXVlcnkocXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpZighcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuc3BsaXQoJ2luJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9cXCsvZywgJyAnLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsga2V5d29yZDogcXVlcnlbMF0sIGNpdHk6IHF1ZXJ5WzFdIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZldGNoUXVlcnkoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5leHRyYWN0UXVlcnkodGhpcy4kcm91dGUucGFyYW1zLnF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2VhcmNoUXVlcnksIHF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWVyeSgpO1xuXG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ29vZ2xlU2VhcmNoU3VnZ2VzdGlvbigpO1xuXG4gICAgICAgICAgICBFdmVudC5saXN0ZW4oJ3RvZ2dsZS1zZWFyY2gnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTZWFyY2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU2VhcmNoLnZ1ZT8wOTRlN2NhYSIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm5vdC1mb3VuZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm8tY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvLTQwNC1ncmlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5vdC1mb3VuZF9fc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzPVwiby1oZWFkaW5nLTQwNFwiPk9vcHMhPC9oMT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiby1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRNYWFmIGthbWkgdGlkYWsgbWVuZW11a2FuIGFwYSB5YW5nIGthbXUgY2FyaSA8YnI+XG5cdFx0XHRcdFx0XHRcdDwhLS1NdW5na2luIGJlcmFzYWwgZGFyaSBwbGFuZXQgbGFpbiA/Py0tPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHNlYXJjaC1mb3JtIHNpemU9XCJsYXJnZVwiIDppbmxpbmU9XCJmYWxzZVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDA7XCI+PC9zZWFyY2gtZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm90LWZvdW5kX19zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uLy4uL2ltZy80MDQvcm9ib3RzLnBuZ1wiIGNsYXNzPVwiby1pbWFnZS1yb2JvdHNcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7IFNlYXJjaEZvcm0gfVxufVx0XG5cdFxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIDQwNC52dWU/MGM2Y2E0MDciLCIvKipcbiAqIHZlZS12YWxpZGF0ZSB2Mi4wLjAtcmMuMTNcbiAqIChjKSAyMDE3IEFiZGVscmFobWFuIEF3YWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuVmVlVmFsaWRhdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU29tZSBBbHBoYSBSZWdleCBoZWxwZXJzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nocmlzby92YWxpZGF0b3IuanMvYmxvYi9tYXN0ZXIvc3JjL2xpYi9hbHBoYS5qc1xuICovXG5cbnZhciBhbHBoYSQxID0ge1xuICBlbjogL15bQS1aXSokL2ksXG4gIGNzOiAvXltBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKiQvaSxcbiAgZGE6IC9eW0EtWsOGw5jDhV0qJC9pLFxuICBkZTogL15bQS1aw4TDlsOcw59dKiQvaSxcbiAgZXM6IC9eW0EtWsOBw4nDjcORw5PDmsOcXSokL2ksXG4gIGZyOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0qJC9pLFxuICBsdDogL15bQS1axITEjMSYxJbErsWgxbLFqsW9XSokL2ksXG4gIG5sOiAvXltBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgaHU6IC9eW0EtWsOBw4nDjcOTw5bFkMOaw5zFsF0qJC9pLFxuICBwbDogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XSokL2ksXG4gIHB0OiAvXltBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0qJC9pLFxuICBydTogL15b0JAt0K/QgV0qJC9pLFxuICBzazogL15bQS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1dKiQvaSxcbiAgc3I6IC9eW0EtWsSMxIbFvcWgxJBdKiQvaSxcbiAgdHI6IC9eW0EtWsOHxJ7EsMSxw5bFnsOcXSokL2ksXG4gIHVrOiAvXlvQkC3QqdCs0K7Qr9CE0IbQh9KQXSokL2ksXG4gIGFyOiAvXlvYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFTcGFjZXMgPSB7XG4gIGVuOiAvXltBLVpcXHNdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvVxcc10qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXFxzXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn1xcc10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xcXHNdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XFxzXSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1cXHNdKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnFxcc10qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXFxzXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xblcXHNdKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXFxzXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXFxzXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvVxcc10qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkFxcc10qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xcXHNdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBcXHNdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsFxcc10qJC9cbn07XG5cbnZhciBhbHBoYW51bWVyaWMgPSB7XG4gIGVuOiAvXlswLTlBLVpdKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bMC05QS1aw4bDmMOFXSQvaSxcbiAgZGU6IC9eWzAtOUEtWsOEw5bDnMOfXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKiQvaSxcbiAgbHQ6IC9eWzAtOUEtWsSExIzEmMSWxK7FoMWyxarFvV0qJC9pLFxuICBodTogL15bMC05QS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIG5sOiAvXlswLTlBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgcGw6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xdKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFdKiQvaSxcbiAgc2s6IC9eWzAtOUEtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF0qJC9pLFxuICB1azogL15bMC050JAt0KnQrNCu0K/QhNCG0IfSkF0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFEYXNoID0ge1xuICBlbjogL15bMC05QS1aXy1dKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV8tXSokL2ksXG4gIGRhOiAvXlswLTlBLVrDhsOYw4VfLV0qJC9pLFxuICBkZTogL15bMC05QS1aw4TDlsOcw59fLV0qJC9pLFxuICBlczogL15bMC05QS1aw4HDicONw5HDk8Oaw5xfLV0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhfLV0qJC9pLFxuICBsdDogL15bMC05QS1axITEjMSYxJbErsWgxbLFqsW9Xy1dKiQvaSxcbiAgbmw6IC9eWzAtOUEtWsOJw4vDj8OTw5bDnF8tXSokL2ksXG4gIGh1OiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBfLV0qJC9pLFxuICBwbDogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5Xy1dKiQvaSxcbiAgcHQ6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXy1dKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFfLV0qJC9pLFxuICBzazogL15bMC05QS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1fLV0qJC9pLFxuICBzcjogL15bMC05QS1axIzEhsW9xaDEkF8tXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF8tXSokL2ksXG4gIHVrOiAvXlswLTnQkC3QqdCs0K7Qr9CE0IbQh9KQXy1dKiQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXy1dKiQvXG59O1xuXG52YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGEkMSkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYSQxW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYSQxW2xvY2FsZV0gfHwgYWxwaGEkMS5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDEodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhRGFzaCkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYURhc2hbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhRGFzaFtsb2NhbGVdIHx8IGFscGhhRGFzaC5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDIodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhbnVtZXJpYykuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYW51bWVyaWNbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhbnVtZXJpY1tsb2NhbGVdIHx8IGFscGhhbnVtZXJpYy5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMyA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDModmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhU3BhY2VzKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhU3BhY2VzW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYVNwYWNlc1tsb2NhbGVdIHx8IGFscGhhU3BhY2VzLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciB2YWxpZGF0ZSQ0ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1pbiA9IHJlZlswXTtcbiAgdmFyIG1heCA9IHJlZlsxXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkNCh2YWwsIFttaW4sIG1heF0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIobWluKSA8PSB2YWx1ZSAmJiBOdW1iZXIobWF4KSA+PSB2YWx1ZTtcbn07XG5cbnZhciBjb25maXJtZWQgPSBmdW5jdGlvbiAodmFsdWUsIG90aGVyKSB7IHJldHVybiBTdHJpbmcodmFsdWUpID09PSBTdHJpbmcob3RoZXIpOyB9O1xuXG5mdW5jdGlvbiB1bndyYXBFeHBvcnRzICh4KSB7XG5cdHJldHVybiB4ICYmIHguX19lc01vZHVsZSA/IHhbJ2RlZmF1bHQnXSA6IHg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgYXNzZXJ0U3RyaW5nXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5mdW5jdGlvbiBhc3NlcnRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcblxuICBpZiAoIWlzU3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBsaWJyYXJ5ICh2YWxpZGF0b3IuanMpIHZhbGlkYXRlcyBzdHJpbmdzIG9ubHknKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBjcmVkaXRDYXJkID0gL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18KDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVswLTldezEyfXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX18NjJbMC05XXsxNH0pJC87XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZnVuY3Rpb24gaXNDcmVkaXRDYXJkKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG4gIGlmICghY3JlZGl0Q2FyZC50ZXN0KHNhbml0aXplZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdCA9IHZvaWQgMDtcbiAgdmFyIHRtcE51bSA9IHZvaWQgMDtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSAlIDEwICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cbiAgcmV0dXJuICEhKHN1bSAlIDEwID09PSAwID8gc2FuaXRpemVkIDogZmFsc2UpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZCA9IHVud3JhcEV4cG9ydHMoaXNDcmVkaXRDYXJkXzEpO1xuXG52YXIgY3JlZGl0X2NhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGlzQ3JlZGl0Q2FyZChTdHJpbmcodmFsdWUpKTsgfTtcblxudmFyIHZhbGlkYXRlJDUgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgZGVjaW1hbHMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyAocGFyYW1zWzBdIHx8ICcqJykgOiAnKic7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ1KHZhbCwgcGFyYW1zKTsgfSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGlzIDAuXG4gIGlmIChOdW1iZXIoZGVjaW1hbHMpID09PSAwKSB7XG4gICAgcmV0dXJuIC9eLT9cXGQqJC8udGVzdCh2YWx1ZSk7XG4gIH1cblxuICB2YXIgcmVnZXhQYXJ0ID0gZGVjaW1hbHMgPT09ICcqJyA/ICcrJyA6IChcInsxLFwiICsgZGVjaW1hbHMgKyBcIn1cIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiXi0/XFxcXGQqKFxcXFwuXFxcXGRcIiArIHJlZ2V4UGFydCArIFwiKT8kXCIpKTtcblxuICBpZiAoISByZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZSA9PT0gcGFyc2VkVmFsdWU7XG59O1xuXG52YXIgdmFsaWRhdGUkNiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDYodmFsLCBbbGVuZ3RoXSk7IH0pO1xuICB9XG4gIHZhciBzdHJWYWwgPSBTdHJpbmcodmFsdWUpO1xuXG4gIHJldHVybiAvXlswLTldKiQvLnRlc3Qoc3RyVmFsKSAmJiBzdHJWYWwubGVuZ3RoID09PSBOdW1iZXIobGVuZ3RoKTtcbn07XG5cbnZhciB2YWxpZGF0ZUltYWdlID0gZnVuY3Rpb24gKGZpbGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoeyB2YWxpZDogZmFsc2UgfSk7IH07XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICB2YWxpZDogaW1hZ2Uud2lkdGggPT09IE51bWJlcih3aWR0aCkgJiYgaW1hZ2UuaGVpZ2h0ID09PSBOdW1iZXIoaGVpZ2h0KVxuICAgIH0pOyB9O1xuXG4gICAgaW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgfSk7XG59O1xuXG52YXIgZGltZW5zaW9ucyA9IGZ1bmN0aW9uIChmaWxlcywgcmVmKSB7XG4gIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgdmFyIGhlaWdodCA9IHJlZlsxXTtcblxuICB2YXIgbGlzdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gaWYgZmlsZSBpcyBub3QgYW4gaW1hZ2UsIHJlamVjdC5cbiAgICBpZiAoISAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlc1tpXS5uYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxpc3QucHVzaChmaWxlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwobGlzdC5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHZhbGlkYXRlSW1hZ2UoZmlsZSwgd2lkdGgsIGhlaWdodCk7IH0pKTtcbn07XG5cbnZhciBtZXJnZV8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50c1sxXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQnl0ZUxlbmd0aF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzQnl0ZUxlbmd0aDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW4gPSB2b2lkIDA7XG4gIHZhciBtYXggPSB2b2lkIDA7XG4gIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0J5dGVMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNGUUROID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGRFFOO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2ZxZG5fb3B0aW9ucyA9IHtcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNGRFFOKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZnFkbl9vcHRpb25zKTtcblxuICAvKiBSZW1vdmUgdGhlIG9wdGlvbmFsIHRyYWlsaW5nIGRvdCBiZWZvcmUgY2hlY2tpbmcgdmFsaWRpdHkgKi9cbiAgaWYgKG9wdGlvbnMuYWxsb3dfdHJhaWxpbmdfZG90ICYmIHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX3RsZCkge1xuICAgIHZhciB0bGQgPSBwYXJ0cy5wb3AoKTtcbiAgICBpZiAoIXBhcnRzLmxlbmd0aCB8fCAhL14oW2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGRpc2FsbG93IHNwYWNlc1xuICAgIGlmICgvW1xcc1xcdTIwMDItXFx1MjAwQlxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZcXHVEQjQwXFx1REMyMF0vLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBwYXJ0LCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChvcHRpb25zLmFsbG93X3VuZGVyc2NvcmVzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9fL2csICcnKTtcbiAgICB9XG4gICAgaWYgKCEvXlthLXpcXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBkaXNhbGxvdyBmdWxsLXdpZHRoIGNoYXJzXG4gICAgaWYgKC9bXFx1ZmYwMS1cXHVmZjVlXS8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFydFswXSA9PT0gJy0nIHx8IHBhcnRbcGFydC5sZW5ndGggLSAxXSA9PT0gJy0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzRW1haWxfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRW1haWw7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuXG5cbnZhciBfaXNCeXRlTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNCeXRlTGVuZ3RoXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICByZXF1aXJlX2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBkaXNwbGF5TmFtZSA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStbYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHNdKjwoLispPiQvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSB8fCBvcHRpb25zLmFsbG93X2Rpc3BsYXlfbmFtZSkge1xuICAgIHZhciBkaXNwbGF5X2VtYWlsID0gc3RyLm1hdGNoKGRpc3BsYXlOYW1lKTtcbiAgICBpZiAoZGlzcGxheV9lbWFpbCkge1xuICAgICAgc3RyID0gZGlzcGxheV9lbWFpbFsxXTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJ0AnKTtcbiAgdmFyIGRvbWFpbiA9IHBhcnRzLnBvcCgpO1xuICB2YXIgdXNlciA9IHBhcnRzLmpvaW4oJ0AnKTtcblxuICB2YXIgbG93ZXJfZG9tYWluID0gZG9tYWluLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsb3dlcl9kb21haW4gPT09ICdnbWFpbC5jb20nIHx8IGxvd2VyX2RvbWFpbiA9PT0gJ2dvb2dsZW1haWwuY29tJykge1xuICAgIHVzZXIgPSB1c2VyLnJlcGxhY2UoL1xcLi9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKHVzZXIsIHsgbWF4OiA2NCB9KSB8fCAhKDAsIF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQpKGRvbWFpbiwgeyBtYXg6IDI1NCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghKDAsIF9pc0ZRRE4yLmRlZmF1bHQpKGRvbWFpbiwgeyByZXF1aXJlX3RsZDogb3B0aW9ucy5yZXF1aXJlX3RsZCB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1c2VyWzBdID09PSAnXCInKSB7XG4gICAgdXNlciA9IHVzZXIuc2xpY2UoMSwgdXNlci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBxdW90ZWRFbWFpbFVzZXJVdGY4LnRlc3QodXNlcikgOiBxdW90ZWRFbWFpbFVzZXIudGVzdCh1c2VyKTtcbiAgfVxuXG4gIHZhciBwYXR0ZXJuID0gb3B0aW9ucy5hbGxvd191dGY4X2xvY2FsX3BhcnQgPyBlbWFpbFVzZXJVdGY4UGFydCA6IGVtYWlsVXNlclBhcnQ7XG5cbiAgdmFyIHVzZXJfcGFydHMgPSB1c2VyLnNwbGl0KCcuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcGF0dGVybi50ZXN0KHVzZXJfcGFydHNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNFbWFpbCA9IHVud3JhcEV4cG9ydHMoaXNFbWFpbF8xKTtcblxudmFyIHZhbGlkYXRlJDcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc0VtYWlsKFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIGV4dCA9IGZ1bmN0aW9uIChmaWxlcywgZXh0ZW5zaW9ucykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKChcIi4oXCIgKyAoZXh0ZW5zaW9ucy5qb2luKCd8JykpICsgXCIpJFwiKSwgJ2knKTtcblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHJlZ2V4LnRlc3QoZmlsZS5uYW1lKTsgfSk7XG59O1xuXG52YXIgaW1hZ2UgPSBmdW5jdGlvbiAoZmlsZXMpIHsgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiAvXFwuKGpwZ3xzdmd8anBlZ3xwbmd8Ym1wfGdpZikkL2kudGVzdChmaWxlLm5hbWUpOyB9XG4pOyB9O1xuXG52YXIgdmFsaWRhdGUkOCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkOCh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISEgb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gb3B0aW9uID09IHZhbHVlOyB9KS5sZW5ndGg7XG59O1xuXG52YXIgaXNJUF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJUDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXB2NE1heWJlID0gL14oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pJC87XG52YXIgaXB2NkJsb2NrID0gL15bMC05QS1GXXsxLDR9JC9pO1xuXG5mdW5jdGlvbiBpc0lQKHN0cikge1xuICB2YXIgdmVyc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghaXB2NE1heWJlLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzWzNdIDw9IDI1NTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNicpIHtcbiAgICB2YXIgYmxvY2tzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGZvdW5kT21pc3Npb25CbG9jayA9IGZhbHNlOyAvLyBtYXJrZXIgdG8gaW5kaWNhdGUgOjpcblxuICAgIC8vIEF0IGxlYXN0IHNvbWUgT1MgYWNjZXB0IHRoZSBsYXN0IDMyIGJpdHMgb2YgYW4gSVB2NiBhZGRyZXNzXG4gICAgLy8gKGkuZS4gMiBvZiB0aGUgYmxvY2tzKSBpbiBJUHY0IG5vdGF0aW9uLCBhbmQgUkZDIDM0OTMgc2F5c1xuICAgIC8vIHRoYXQgJzo6ZmZmZjphLmIuYy5kJyBpcyB2YWxpZCBmb3IgSVB2NC1tYXBwZWQgSVB2NiBhZGRyZXNzZXMsXG4gICAgLy8gYW5kICc6OmEuYi5jLmQnIGlzIGRlcHJlY2F0ZWQsIGJ1dCBhbHNvIHZhbGlkLlxuICAgIHZhciBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPSBpc0lQKGJsb2Nrc1tibG9ja3MubGVuZ3RoIC0gMV0sIDQpO1xuICAgIHZhciBleHBlY3RlZE51bWJlck9mQmxvY2tzID0gZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID8gNyA6IDg7XG5cbiAgICBpZiAoYmxvY2tzLmxlbmd0aCA+IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gaW5pdGlhbCBvciBmaW5hbCA6OlxuICAgIGlmIChzdHIgPT09ICc6OicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7ICsraSkge1xuICAgICAgLy8gdGVzdCBmb3IgYSA6OiB3aGljaCBjYW4gbm90IGJlIGF0IHRoZSBzdHJpbmcgc3RhcnQvZW5kXG4gICAgICAvLyBzaW5jZSB0aG9zZSBjYXNlcyBoYXZlIGJlZW4gaGFuZGxlZCBhYm92ZVxuICAgICAgaWYgKGJsb2Nrc1tpXSA9PT0gJycgJiYgaSA+IDAgJiYgaSA8IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG11bHRpcGxlIDo6IGluIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgJiYgaSA9PT0gYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgdGhhdCB0aGUgbGFzdFxuICAgICAgICAvLyBibG9jayBpcyBhIHZhbGlkIElQdjQgYWRkcmVzc1xuICAgICAgfSBlbHNlIGlmICghaXB2NkJsb2NrLnRlc3QoYmxvY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID49IDE7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MubGVuZ3RoID09PSBleHBlY3RlZE51bWJlck9mQmxvY2tzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0lQID0gdW53cmFwRXhwb3J0cyhpc0lQXzEpO1xuXG52YXIgaXAgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gWzRdO1xuICB2YXIgdmVyc2lvbiA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNJUCh2YWwsIFt2ZXJzaW9uXSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzSVAodmFsdWUsIHZlcnNpb24pO1xufTtcblxudmFyIG1heCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbGVuZ3RoID49IDA7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGggPD0gbGVuZ3RoO1xufTtcblxudmFyIG1heF92YWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtYXggPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPD0gbWF4O1xufTtcblxudmFyIG1pbWVzID0gZnVuY3Rpb24gKGZpbGVzLCBtaW1lcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCgobWltZXMuam9pbignfCcpLnJlcGxhY2UoJyonLCAnLisnKSkgKyBcIiRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUudHlwZSk7IH0pO1xufTtcblxudmFyIG1pbiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoID49IGxlbmd0aDtcbn07XG5cbnZhciBtaW5fdmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIodmFsdWUpID49IG1pbjtcbn07XG5cbnZhciB2YWxpZGF0ZSQ5ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ5KHZhbCwgb3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiAhIG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIG9wdGlvbiA9PSB2YWx1ZTsgfSkubGVuZ3RoO1xufTtcblxudmFyIG51bWVyaWMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIC9eWzAtOV0rJC8udGVzdChTdHJpbmcodmFsKSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIC9eWzAtOV0rJC8udGVzdChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciByZWdleCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciByZWdleCA9IHJlZlswXTtcbiAgdmFyIGZsYWdzID0gcmVmLnNsaWNlKDEpO1xuXG4gIGlmIChyZWdleCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBmbGFncykudGVzdChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciByZXF1aXJlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSBbZmFsc2VdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiAhISB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvLyBpbmNhc2UgYSBmaWVsZCBjb25zaWRlcnMgYGZhbHNlYCBhcyBhbiBlbXB0eSB2YWx1ZSBsaWtlIGNoZWNrYm94ZXMuXG4gIHZhciBpbnZhbGlkYXRlRmFsc2UgPSBwYXJhbXNbMF07XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgaW52YWxpZGF0ZUZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gISEgU3RyaW5nKHZhbHVlKS50cmltKCkubGVuZ3RoO1xufTtcblxudmFyIHNpemUgPSBmdW5jdGlvbiAoZmlsZXMsIHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICBpZiAoaXNOYU4oc2l6ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgblNpemUgPSBOdW1iZXIoc2l6ZSkgKiAxMDI0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZpbGVzW2ldLnNpemUgPiBuU2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzVVJMXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VSTDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0ZRRE4pO1xuXG5cblxudmFyIF9pc0lQMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNJUF8xKTtcblxuXG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChtZXJnZV8xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfdXJsX29wdGlvbnMgPSB7XG4gIHByb3RvY29sczogWydodHRwJywgJ2h0dHBzJywgJ2Z0cCddLFxuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgcmVxdWlyZV9wcm90b2NvbDogZmFsc2UsXG4gIHJlcXVpcmVfaG9zdDogdHJ1ZSxcbiAgcmVxdWlyZV92YWxpZF9wcm90b2NvbDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlLFxuICBhbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzOiBmYWxzZVxufTtcblxudmFyIHdyYXBwZWRfaXB2NiA9IC9eXFxbKFteXFxdXSspXFxdKD86OihbMC05XSspKT8kLztcblxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSG9zdChob3N0LCBtYXRjaGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtYXRjaCA9IG1hdGNoZXNbaV07XG4gICAgaWYgKGhvc3QgPT09IG1hdGNoIHx8IGlzUmVnRXhwKG1hdGNoKSAmJiBtYXRjaC50ZXN0KGhvc3QpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1VSTCh1cmwsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHVybCk7XG4gIGlmICghdXJsIHx8IHVybC5sZW5ndGggPj0gMjA4MyB8fCAvW1xcczw+XS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh1cmwuaW5kZXhPZignbWFpbHRvOicpID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X3VybF9vcHRpb25zKTtcbiAgdmFyIHByb3RvY29sID0gdm9pZCAwLFxuICAgICAgYXV0aCA9IHZvaWQgMCxcbiAgICAgIGhvc3QgPSB2b2lkIDAsXG4gICAgICBob3N0bmFtZSA9IHZvaWQgMCxcbiAgICAgIHBvcnQgPSB2b2lkIDAsXG4gICAgICBwb3J0X3N0ciA9IHZvaWQgMCxcbiAgICAgIHNwbGl0ID0gdm9pZCAwLFxuICAgICAgaXB2NiA9IHZvaWQgMDtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnIycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc/Jyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJzovLycpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIHByb3RvY29sID0gc3BsaXQuc2hpZnQoKTtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlX3ZhbGlkX3Byb3RvY29sICYmIG9wdGlvbnMucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzICYmIHVybC5zdWJzdHIoMCwgMikgPT09ICcvLycpIHtcbiAgICBzcGxpdFswXSA9IHVybC5zdWJzdHIoMik7XG4gIH1cbiAgdXJsID0gc3BsaXQuam9pbignOi8vJyk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJy8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBpZiAodXJsID09PSAnJyAmJiAhb3B0aW9ucy5yZXF1aXJlX2hvc3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCdAJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgYXV0aCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKGF1dGguaW5kZXhPZignOicpID49IDAgJiYgYXV0aC5zcGxpdCgnOicpLmxlbmd0aCA+IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG5cbiAgcG9ydF9zdHIgPSBudWxsO1xuICBpcHY2ID0gbnVsbDtcbiAgdmFyIGlwdjZfbWF0Y2ggPSBob3N0bmFtZS5tYXRjaCh3cmFwcGVkX2lwdjYpO1xuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKHNwbGl0Lmxlbmd0aCkge1xuICAgICAgcG9ydF9zdHIgPSBzcGxpdC5qb2luKCc6Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcnRfc3RyICE9PSBudWxsKSB7XG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRfc3RyLCAxMCk7XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QocG9ydF9zdHIpIHx8IHBvcnQgPD0gMCB8fCBwb3J0ID4gNjU1MzUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISgwLCBfaXNJUDIuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROMi5kZWZhdWx0KShob3N0LCBvcHRpb25zKSAmJiAoIWlwdjYgfHwgISgwLCBfaXNJUDIuZGVmYXVsdCkoaXB2NiwgNikpICYmIGhvc3QgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaG9zdCA9IGhvc3QgfHwgaXB2NjtcblxuICBpZiAob3B0aW9ucy5ob3N0X3doaXRlbGlzdCAmJiAhY2hlY2tIb3N0KGhvc3QsIG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzVVJMID0gdW53cmFwRXhwb3J0cyhpc1VSTF8xKTtcblxudmFyIHVybCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbdHJ1ZV07XG4gIHZhciByZXF1aXJlUHJvdG9jb2wgPSByZWZbMF07XG5cbiAgdmFyIG9wdGlvbnMgPSB7IHJlcXVpcmVfcHJvdG9jb2w6ICEhcmVxdWlyZVByb3RvY29sLCBhbGxvd191bmRlcnNjb3JlczogdHJ1ZSB9O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNVUkwodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNVUkwodmFsdWUsIG9wdGlvbnMpO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG52YXIgUnVsZXMgPSB7XG4gIGFscGhhX2Rhc2g6IHZhbGlkYXRlJDEsXG4gIGFscGhhX251bTogdmFsaWRhdGUkMixcbiAgYWxwaGFfc3BhY2VzOiB2YWxpZGF0ZSQzLFxuICBhbHBoYTogdmFsaWRhdGUsXG4gIGJldHdlZW46IHZhbGlkYXRlJDQsXG4gIGNvbmZpcm1lZDogY29uZmlybWVkLFxuICBjcmVkaXRfY2FyZDogY3JlZGl0X2NhcmQsXG4gIGRlY2ltYWw6IHZhbGlkYXRlJDUsXG4gIGRpZ2l0czogdmFsaWRhdGUkNixcbiAgZGltZW5zaW9uczogZGltZW5zaW9ucyxcbiAgZW1haWw6IHZhbGlkYXRlJDcsXG4gIGV4dDogZXh0LFxuICBpbWFnZTogaW1hZ2UsXG4gIGluOiB2YWxpZGF0ZSQ4LFxuICBpcDogaXAsXG4gIG1heDogbWF4LFxuICBtYXhfdmFsdWU6IG1heF92YWx1ZSxcbiAgbWltZXM6IG1pbWVzLFxuICBtaW46IG1pbixcbiAgbWluX3ZhbHVlOiBtaW5fdmFsdWUsXG4gIG5vdF9pbjogdmFsaWRhdGUkOSxcbiAgbnVtZXJpYzogbnVtZXJpYyxcbiAgcmVnZXg6IHJlZ2V4LFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIHNpemU6IHNpemUsXG4gIHVybDogdXJsXG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgYXR0cmlidXRlLiB0aGUgbmFtZSBtdXN0IGJlIGtlYmFiLWNhc2UuXG4gKi9cbnZhciBnZXREYXRhQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsLCBuYW1lKSB7IHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoKFwiZGF0YS12di1cIiArIG5hbWUpKTsgfTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRhIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xudmFyIHNldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoKFwiZGF0YS12di1cIiArIG5hbWUpLCB2YWx1ZSk7IH07XG5cbi8qKlxuICogU2hhbGxvdyBvYmplY3QgY29tcGFyaXNvbi5cbiAqXG4gKiBAcGFyYW0geyp9IGxocyBcbiAqIEBwYXJhbSB7Kn0gcmhzIFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzRXF1YWwgPSBmdW5jdGlvbiAobGhzLCByaHMpIHtcbiAgaWYgKGxocyBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByaHMgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gaXNFcXVhbChsaHMuc291cmNlLCByaHMuc291cmNlKSAmJiBpc0VxdWFsKGxocy5mbGFncywgcmhzLmZsYWdzKTtcbiAgfVxuXG4gIC8vIGlmIGJvdGggYXJlIG9iamVjdHMsIGNvbXBhcmUgZWFjaCBrZXkgcmVjdXJzaXZlbHkuXG4gIGlmIChpc09iamVjdChsaHMpICYmIGlzT2JqZWN0KHJocykpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGhzKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gaXNFcXVhbChsaHNba2V5XSwgcmhzW2tleV0pO1xuICAgIH0pICYmIE9iamVjdC5rZXlzKHJocykuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGlzRXF1YWwobGhzW2tleV0sIHJoc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaHMgPT09IHJocztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgaW5wdXQgZmllbGQgc2NvcGUuXG4gKi9cbnZhciBnZXRTY29wZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgc2NvcGUgPSBnZXREYXRhQXR0cmlidXRlKGVsLCAnc2NvcGUnKTtcbiAgaWYgKCEgc2NvcGUgJiYgZWwuZm9ybSkge1xuICAgIHNjb3BlID0gZ2V0RGF0YUF0dHJpYnV0ZShlbC5mb3JtLCAnc2NvcGUnKTtcbiAgfVxuXG4gIHJldHVybiBzY29wZSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBpbiBhbiBvYmplY3Qgc2FmZWx5LlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BQYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0geyp9IGRlZlxuICovXG52YXIgZ2V0UGF0aCA9IGZ1bmN0aW9uIChwcm9wUGF0aCwgdGFyZ2V0LCBkZWYpIHtcbiAgaWYgKCBkZWYgPT09IHZvaWQgMCApIGRlZiA9IHVuZGVmaW5lZDtcblxuICBpZiAoIXByb3BQYXRoIHx8ICF0YXJnZXQpIHsgcmV0dXJuIGRlZjsgfVxuICB2YXIgdmFsdWUgPSB0YXJnZXQ7XG4gIHByb3BQYXRoLnNwbGl0KCcuJykuZXZlcnkoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoISBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3ApICYmIHZhbHVlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gZGVmO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBwYXRoIGV4aXN0cyB3aXRoaW4gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKi9cbnZhciBoYXNQYXRoID0gZnVuY3Rpb24gKHBhdGgsIHRhcmdldCkge1xuICB2YXIgb2JqID0gdGFyZ2V0O1xuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLmV2ZXJ5KGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKCEgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvYmogPSBvYmpbcHJvcF07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBydWxlXG4gKi9cbnZhciBwYXJzZVJ1bGUgPSBmdW5jdGlvbiAocnVsZSkge1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBuYW1lID0gcnVsZS5zcGxpdCgnOicpWzBdO1xuXG4gIGlmICh+cnVsZS5pbmRleE9mKCc6JykpIHtcbiAgICBwYXJhbXMgPSBydWxlLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpLnNwbGl0KCcsJyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBuYW1lLCBwYXJhbXM6IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBydWxlcyBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcnVsZXNcbiAqL1xudmFyIG5vcm1hbGl6ZVJ1bGVzID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gIC8vIGlmIGZhbHN5IHZhbHVlIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgdmFsaWRhdGlvbnMgPSB7fTtcbiAgaWYgKGlzT2JqZWN0KHJ1bGVzKSkge1xuICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICBpZiAocnVsZXNbcnVsZV0gPT09IHRydWUpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocnVsZXNbcnVsZV0pKSB7XG4gICAgICAgIHBhcmFtcyA9IHJ1bGVzW3J1bGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gW3J1bGVzW3J1bGVdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzW3J1bGVdICE9PSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0aW9uc1tydWxlXSA9IHBhcmFtcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9ucztcbiAgfVxuXG4gIHJ1bGVzLnNwbGl0KCd8JykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBwYXJzZWRSdWxlID0gcGFyc2VSdWxlKHJ1bGUpO1xuICAgIGlmICghIHBhcnNlZFJ1bGUubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25zW3BhcnNlZFJ1bGUubmFtZV0gPSBwYXJzZWRSdWxlLnBhcmFtcztcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbGlkYXRpb25zO1xufTtcblxuLyoqXG4gKiBEZWJvdW5jZXMgYSBmdW5jdGlvbi5cbiAqL1xudmFyIGRlYm91bmNlID0gZnVuY3Rpb24gKGZuLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgaWYgKCB3YWl0ID09PSB2b2lkIDAgKSB3YWl0ID0gMDtcbiAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IGZhbHNlO1xuXG4gIGlmICh3YWl0ID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChjYWxsTm93KSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgfTtcbn07XG5cbi8qKlxuICogRW1pdHMgYSB3YXJuaW5nIHRvIHRoZSBjb25zb2xlLlxuICovXG52YXIgd2FybiA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybigoXCJbdmVlLXZhbGlkYXRlXSBcIiArIG1lc3NhZ2UpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJhbmRlZCBlcnJvciBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICovXG52YXIgY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gbmV3IEVycm9yKChcIlt2ZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmICEgQXJyYXkuaXNBcnJheShvYmplY3QpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGZ1bmN0aW9uIGlzIGNhbGxhYmxlLlxuICovXG52YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmdW5jKSB7IHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGhhcyB0aGUgY3NzIGNsYXNzIG9uIGl0LlxuICovXG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSkpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIHRvIHRoZSBlbGVtZW50LlxuICovXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSk7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIG5hbWUgb24gdGhlIGlucHV0IGRlcGVuZGluZyBvbiB0aGUgc3RhdHVzIGZsYWcuXG4gKi9cbnZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lLCBzdGF0dXMpIHtcbiAgaWYgKCFlbCB8fCAhY2xhc3NOYW1lKSB7IHJldHVybjsgfVxuXG4gIGlmIChzdGF0dXMpIHtcbiAgICByZXR1cm4gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYXJyYXkuXG4gKiBTaW1wbGUgcG9seWZpbGwgZm9yIEFycmF5LmZyb21cbiAqL1xudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIGlmIChpc0NhbGxhYmxlKEFycmF5LmZyb20pKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXlMaWtlKTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IFtdO1xuICB2YXIgbGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goYXJyYXlMaWtlW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn07XG5cbi8qKlxuICogQXNzaWduIHBvbHlmaWxsIGZyb20gdGhlIG1kbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIGFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgdmFyIG90aGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBvdGhlcnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGlzQ2FsbGFibGUoT2JqZWN0LmFzc2lnbikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIFsgdGFyZ2V0IF0uY29uY2F0KCBvdGhlcnMgKSk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBvdGhlcnMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgLy8gU2tpcCBvdmVyIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgaWYgKGFyZyAhPSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0b1trZXldID0gYXJnW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gdG87XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZC5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudmFyIHVuaXFJZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChcIl9cIiArIChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSkpKTsgfTtcblxuLyoqXG4gKiBwb2x5ZmlsbHMgYXJyYXkuZmluZFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICovXG52YXIgZmluZCA9IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGlmIChpc09iamVjdChhcnJheSkpIHtcbiAgICBhcnJheSA9IHRvQXJyYXkoYXJyYXkpO1xuICB9XG4gIGlmIChhcnJheS5maW5kKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlKTtcbiAgfVxuICB2YXIgcmVzdWx0O1xuICBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBnZXRJbnB1dEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgJiYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IH5bJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2ZpbGUnXS5pbmRleE9mKGVsLnR5cGUpKSkge1xuICAgIHJldHVybiAnY2hhbmdlJztcbiAgfVxuXG4gIHJldHVybiAnaW5wdXQnO1xufTtcblxudmFyIEVycm9yQmFnID0gZnVuY3Rpb24gRXJyb3JCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG4vKipcbiAgICogQWRkcyBhbiBlcnJvciB0byB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciBUaGUgZXJyb3Igb2JqZWN0LlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGVycm9yKSB7XG4gIC8vIGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBlcnJvciA9IHtcbiAgICAgIGZpZWxkOiBhcmd1bWVudHNbMF0sXG4gICAgICBtc2c6IGFyZ3VtZW50c1sxXSxcbiAgICAgIHJ1bGU6IGFyZ3VtZW50c1syXSxcbiAgICAgIHNjb3BlOiBhcmd1bWVudHNbM10gfHwgbnVsbFxuICAgIH07XG4gIH1cblxuICBlcnJvci5zY29wZSA9IGVycm9yLnNjb3BlIHx8IG51bGw7XG4gIHRoaXMuaXRlbXMucHVzaChlcnJvcik7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSBmaWVsZCBlcnJvciB3aXRoIHRoZSBuZXcgZmllbGQgc2NvcGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICogQHBhcmFtIHtPYmplY3R9IGVycm9yIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChpZCwgZXJyb3IpIHtcbiAgdmFyIGl0ZW0gPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG4gIGlmICghaXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gIGl0ZW0uc2NvcGUgPSBlcnJvci5zY29wZTtcbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuLyoqXG4gICAqIEdldHMgYWxsIGVycm9yIG1lc3NhZ2VzIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gZXJyb3JzIEFycmF5IG9mIGFsbCBlcnJvciBtZXNzYWdlcy5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gYWxsIChzY29wZSkge1xuICBpZiAoISBzY29wZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLm1zZzsgfSk7XG59O1xuXG4vKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGluIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gcmVzdWx0IFRydWUgaWYgdGhlcmUgd2FzIGF0IGxlYXN0IG9uZSBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBhbnkgKHNjb3BlKSB7XG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuICEhIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuICEhIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubGVuZ3RoO1xufTtcblxuLyoqXG4gICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyIChzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogQ29sbGVjdHMgZXJyb3JzIGludG8gZ3JvdXBzIG9yIGZvciBhIHNwZWNpZmljIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgZmllbGQgbmFtZS5cbiAgICogQHBhcmFte3N0cmluZ30gc2NvcGUgVGhlIHNjb3BlIG5hbWUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFwIElmIGl0IHNob3VsZCBtYXAgdGhlIGVycm9ycyB0byBzdHJpbmdzIGluc3RlYWQgb2Ygb2JqZWN0cy5cbiAgICogQHJldHVybiB7QXJyYXl9IGVycm9ycyBUaGUgZXJyb3JzIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb2xsZWN0ID0gZnVuY3Rpb24gY29sbGVjdCAoZmllbGQsIHNjb3BlLCBtYXApIHtcbiAgICBpZiAoIG1hcCA9PT0gdm9pZCAwICkgbWFwID0gdHJ1ZTtcblxuICBpZiAoISBmaWVsZCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0ge307XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoISBjb2xsZWN0aW9uW2UuZmllbGRdKSB7XG4gICAgICAgIGNvbGxlY3Rpb25bZS5maWVsZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbltlLmZpZWxkXS5wdXNoKG1hcCA/IGUubXNnIDogZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZDsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAobWFwID8gZS5tc2cgOiBlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkICYmIGUuc2NvcGUgPT09IHNjb3BlOyB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChtYXAgPyBlLm1zZyA6IGUpOyB9KTtcbn07XG4vKipcbiAgICogR2V0cyB0aGUgaW50ZXJuYWwgYXJyYXkgbGVuZ3RoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGxlbmd0aCBUaGUgaW50ZXJuYWwgYXJyYXkgbGVuZ3RoLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50ICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBGaW5kcyBhbmQgZmV0Y2hlcyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIHNwZWNpZmllZCBmaWVsZCBpZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgXG4gKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdEJ5SWQgPSBmdW5jdGlvbiBmaXJzdEJ5SWQgKGlkKSB7XG4gIHZhciBlcnJvciA9IGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuaWQgPT09IGlkOyB9KTtcblxuICByZXR1cm4gZXJyb3IgPyBlcnJvci5tc2cgOiBudWxsO1xufTtcblxuLyoqXG4gICAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCBuYW1lLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiBmaXJzdCAoZmllbGQsIHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIHZhciBzZWxlY3RvciA9IHRoaXMuX3NlbGVjdG9yKGZpZWxkKTtcbiAgdmFyIHNjb3BlZCA9IHRoaXMuX3Njb3BlKGZpZWxkKTtcblxuICBpZiAoc2NvcGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuZmlyc3Qoc2NvcGVkLm5hbWUsIHNjb3BlZC5zY29wZSk7XG4gICAgLy8gaWYgc3VjaCByZXN1bHQgZXhpc3QsIHJldHVybiBpdC4gb3RoZXJ3aXNlIGl0IGNvdWxkIGJlIGEgZmllbGQuXG4gICAgLy8gd2l0aCBkb3QgaW4gaXRzIG5hbWUuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdEJ5UnVsZShzZWxlY3Rvci5uYW1lLCBzZWxlY3Rvci5ydWxlLCBzY29wZSk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcyQxLml0ZW1zW2ldLmZpZWxkID09PSBmaWVsZCAmJiAodGhpcyQxLml0ZW1zW2ldLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgIHJldHVybiB0aGlzJDEuaXRlbXNbaV0ubXNnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IGVycm9yIHJ1bGUgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBGaXJzdCBlcnJvciBydWxlIG9uIHRoZSBzcGVjaWZpZWQgZmllbGQgaWYgb25lIGlzIGZvdW5kLCBvdGhlcndpc2UgbnVsbFxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdFJ1bGUgPSBmdW5jdGlvbiBmaXJzdFJ1bGUgKGZpZWxkLCBzY29wZSkge1xuICB2YXIgZXJyb3JzID0gdGhpcy5jb2xsZWN0KGZpZWxkLCBzY29wZSwgZmFsc2UpO1xuXG4gIHJldHVybiAoZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnNbMF0ucnVsZSkgfHwgbnVsbDtcbn07XG5cbi8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGludGVybmFsIGFycmF5IGhhcyBhdCBsZWFzdCBvbmUgZXJyb3IgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBUcnVlIGlmIGF0IGxlYXN0IG9uZSBlcnJvciBpcyBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGZpZWxkLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICByZXR1cm4gISEgdGhpcy5maXJzdChmaWVsZCwgc2NvcGUpO1xufTtcblxuLyoqXG4gICAqIEdldHMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIGEgc3BlY2lmaWMgZmllbGQgYW5kIGEgcnVsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcnVsZSBUaGUgbmFtZSBvZiB0aGUgcnVsZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBuYW1lIG9mIHRoZSBzY29wZSAob3B0aW9uYWwpLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdEJ5UnVsZSA9IGZ1bmN0aW9uIGZpcnN0QnlSdWxlIChuYW1lLCBydWxlLCBzY29wZSkge1xuICB2YXIgZXJyb3IgPSB0aGlzLmNvbGxlY3QobmFtZSwgc2NvcGUsIGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUucnVsZSA9PT0gcnVsZTsgfSlbMF07XG5cbiAgcmV0dXJuIChlcnJvciAmJiBlcnJvci5tc2cpIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXJyb3JzIGJ5IG1hdGNoaW5nIGFnYWluc3QgdGhlIGlkLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUucmVtb3ZlQnlJZCA9IGZ1bmN0aW9uIHJlbW92ZUJ5SWQgKGlkKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogUmVtb3ZlcyBhbGwgZXJyb3IgbWVzc2FnZXMgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCB3aGljaCBtZXNzYWdlcyBhcmUgdG8gYmUgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChmaWVsZCwgc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcmVtb3ZlQ29uZGl0aW9uID0gc2NvcGUgPyBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGU7IH1cbiAgICA6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBudWxsOyB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChyZW1vdmVDb25kaXRpb24odGhpcyQxLml0ZW1zW2ldKSkge1xuICAgICAgdGhpcyQxLml0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIC0taTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICAgKiBHZXQgdGhlIGZpZWxkIGF0dHJpYnV0ZXMgaWYgdGhlcmUncyBhIHJ1bGUgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbXtzdHJpbmd9IGZpZWxkIFRoZSBzcGVjaWZpZWQgZmllbGQuXG4gICAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5fc2VsZWN0b3IgPSBmdW5jdGlvbiBfc2VsZWN0b3IgKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5pbmRleE9mKCc6JykgPiAtMSkge1xuICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnOicpO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMF07XG4gICAgICB2YXIgcnVsZSA9IHJlZlsxXTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHJ1bGU6IHJ1bGUgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gICAqIEdldCB0aGUgZmllbGQgc2NvcGUgaWYgc3BlY2lmaWVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIHRoZSBzcGVjaWZpZSBmaWVsZC5cbiAgICogQHJldHVybiB7T2JqZWN0fG51bGx9XG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLl9zY29wZSA9IGZ1bmN0aW9uIF9zY29wZSAoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZlsxXTtcblxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRGljdGlvbmFyeSA9IGZ1bmN0aW9uIERpY3Rpb25hcnkgKGRpY3Rpb25hcnkpIHtcbiAgaWYgKCBkaWN0aW9uYXJ5ID09PSB2b2lkIDAgKSBkaWN0aW9uYXJ5ID0ge307XG5cbiAgdGhpcy5jb250YWluZXIgPSB7fTtcbiAgdGhpcy5tZXJnZShkaWN0aW9uYXJ5KTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0xvY2FsZSA9IGZ1bmN0aW9uIGhhc0xvY2FsZSAobG9jYWxlKSB7XG4gIHJldHVybiAhISB0aGlzLmNvbnRhaW5lcltsb2NhbGVdO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHNldERhdGVGb3JtYXQgKGxvY2FsZSwgZm9ybWF0KSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSkge1xuICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0gPSB7fTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uZGF0ZUZvcm1hdCA9IGZvcm1hdDtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBnZXREYXRlRm9ybWF0IChsb2NhbGUpIHtcbiAgaWYgKCF0aGlzLmNvbnRhaW5lcltsb2NhbGVdKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSAobG9jYWxlLCBrZXksIGZhbGxiYWNrKSB7XG4gIGlmICghIHRoaXMuaGFzTWVzc2FnZShsb2NhbGUsIGtleSkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2sgfHwgdGhpcy5fZ2V0RGVmYXVsdE1lc3NhZ2UobG9jYWxlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV07XG59O1xuXG4vKipcbiAqIEdldHMgYSBzcGVjaWZpYyBtZXNzYWdlIGZvciBmaWVsZC4gZmFsbHNiYWNrIHRvIHRoZSBydWxlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2FsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cbkRpY3Rpb25hcnkucHJvdG90eXBlLmdldEZpZWxkTWVzc2FnZSA9IGZ1bmN0aW9uIGdldEZpZWxkTWVzc2FnZSAobG9jYWxlLCBmaWVsZCwga2V5KSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlKGxvY2FsZSwga2V5KTtcbiAgfVxuXG4gIHZhciBkaWN0ID0gdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b20gJiYgdGhpcy5jb250YWluZXJbbG9jYWxlXS5jdXN0b21bZmllbGRdO1xuICBpZiAoISBkaWN0IHx8ICEgZGljdFtrZXldKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2FnZShsb2NhbGUsIGtleSk7XG4gIH1cblxuICByZXR1cm4gZGljdFtrZXldO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX2dldERlZmF1bHRNZXNzYWdlID0gZnVuY3Rpb24gX2dldERlZmF1bHRNZXNzYWdlIChsb2NhbGUpIHtcbiAgaWYgKHRoaXMuaGFzTWVzc2FnZShsb2NhbGUsICdfZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMuX2RlZmF1bHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXIuZW4ubWVzc2FnZXMuX2RlZmF1bHQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUgKGxvY2FsZSwga2V5LCBmYWxsYmFjaykge1xuICAgIGlmICggZmFsbGJhY2sgPT09IHZvaWQgMCApIGZhbGxiYWNrID0gJyc7XG5cbiAgaWYgKCEgdGhpcy5oYXNBdHRyaWJ1dGUobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuaGFzTWVzc2FnZSA9IGZ1bmN0aW9uIGhhc01lc3NhZ2UgKGxvY2FsZSwga2V5KSB7XG4gIHJldHVybiAhISAoXG4gICAgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXMgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZSAobG9jYWxlLCBrZXkpIHtcbiAgcmV0dXJuICEhIChcbiAgICB0aGlzLmhhc0xvY2FsZShsb2NhbGUpICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5hdHRyaWJ1dGVzW2tleV1cbiAgKTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UgKGRpY3Rpb25hcnkpIHtcbiAgdGhpcy5fbWVyZ2UodGhpcy5jb250YWluZXIsIGRpY3Rpb25hcnkpO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0TWVzc2FnZSA9IGZ1bmN0aW9uIHNldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBtZXNzYWdlKSB7XG4gIGlmICghIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkpIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge1xuICAgICAgbWVzc2FnZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9O1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldID0gbWVzc2FnZTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSAobG9jYWxlLCBrZXksIGF0dHJpYnV0ZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldID0gYXR0cmlidXRlO1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgaWYgKCEgdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgYXNzaWduKHRhcmdldCwgKCBvYmogPSB7fSwgb2JqW2tleV0gPSB7fSwgb2JqICkpO1xuICAgICAgICAgIHZhciBvYmo7XG4gICAgICB9XG5cbiAgICAgIHRoaXMkMS5fbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc3NpZ24odGFyZ2V0LCAoIG9iaiQxID0ge30sIG9iaiQxW2tleV0gPSBzb3VyY2Vba2V5XSwgb2JqJDEgKSk7XG4gICAgICB2YXIgb2JqJDE7XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIF9kZWZhdWx0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgdmFsdWUgaXMgbm90IHZhbGlkLlwiKTsgfSxcbiAgYWxwaGFfZGFzaDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIGRhc2hlcyBhbmQgdW5kZXJzY29yZXMuXCIpOyB9LFxuICBhbHBoYV9udW06IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGFscGhhX3NwYWNlczogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBvbmx5IGNvbnRhaW4gYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFzIHdlbGwgYXMgc3BhY2VzLlwiKTsgfSxcbiAgYWxwaGE6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIGJldHdlZW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcbiAgICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBiZXR3ZWVuIFwiICsgbWluICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xufSxcbiAgY29uZmlybWVkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoLlwiKTsgfSxcbiAgY3JlZGl0X2NhcmQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyBpbnZhbGlkLlwiKTsgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gWycqJ107XG4gICAgdmFyIGRlY2ltYWxzID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBtYXkgY29udGFpbiBcIiArICghZGVjaW1hbHMgfHwgZGVjaW1hbHMgPT09ICcqJyA/ICcnIDogZGVjaW1hbHMpICsgXCIgZGVjaW1hbCBwb2ludHMuXCIpO1xufSxcbiAgZGlnaXRzOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIGV4YWN0bHkgY29udGFpbiBcIiArIGxlbmd0aCArIFwiIGRpZ2l0cy5cIik7XG59LFxuICBkaW1lbnNpb25zOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIHdpZHRoICsgXCIgcGl4ZWxzIGJ5IFwiICsgaGVpZ2h0ICsgXCIgcGl4ZWxzLlwiKTtcbn0sXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKTsgfSxcbiAgZXh0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGZpbGUuXCIpOyB9LFxuICBpbWFnZTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYW4gaW1hZ2UuXCIpOyB9LFxuICBpbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIGlwOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGlwIGFkZHJlc3MuXCIpOyB9LFxuICBtYXg6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtYXhfdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1heCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtYXggKyBcIiBvciBsZXNzLlwiKTtcbn0sXG4gIG1pbWVzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSB0eXBlLlwiKTsgfSxcbiAgbWluOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtaW5fdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtaW4gKyBcIiBvciBtb3JlLlwiKTtcbn0sXG4gIG5vdF9pbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIG51bWVyaWM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIG51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIHJlZ2V4OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgZm9ybWF0IGlzIGludmFsaWQuXCIpOyB9LFxuICByZXF1aXJlZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIHJlcXVpcmVkLlwiKTsgfSxcbiAgc2l6ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgbGVzcyB0aGFuIFwiICsgc2l6ZSArIFwiIEtCLlwiKTtcbn0sXG4gIHVybDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIG5vdCBhIHZhbGlkIFVSTC5cIik7IH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBvcHRpb25zIHJlcXVpcmVkIHRvIGNvbnN0cnVjdCBhIGZpZWxkLlxuICovXG52YXIgR2VuZXJhdG9yID0gZnVuY3Rpb24gR2VuZXJhdG9yICgpIHt9O1xuXG5HZW5lcmF0b3IuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZSAoZWwsIGJpbmRpbmcsIHZub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdmFyIG1vZGVsID0gR2VuZXJhdG9yLnJlc29sdmVNb2RlbChiaW5kaW5nLCB2bm9kZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBHZW5lcmF0b3IucmVzb2x2ZU5hbWUoZWwsIHZub2RlKSxcbiAgICBlbDogZWwsXG4gICAgbGlzdGVuOiAhYmluZGluZy5tb2RpZmllcnMuZGlzYWJsZSxcbiAgICBzY29wZTogR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpLFxuICAgIHZtOiBHZW5lcmF0b3IubWFrZVZNKHZub2RlLmNvbnRleHQpLFxuICAgIGV4cHJlc3Npb246IGJpbmRpbmcudmFsdWUsXG4gICAgY29tcG9uZW50OiB2bm9kZS5jaGlsZCxcbiAgICBjbGFzc2VzOiBvcHRpb25zLmNsYXNzZXMsXG4gICAgY2xhc3NOYW1lczogb3B0aW9ucy5jbGFzc05hbWVzLFxuICAgIGdldHRlcjogR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwsIHZub2RlLCBtb2RlbCksXG4gICAgZXZlbnRzOiBHZW5lcmF0b3IucmVzb2x2ZUV2ZW50cyhlbCwgdm5vZGUpIHx8IG9wdGlvbnMuZXZlbnRzLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBkZWxheTogR2VuZXJhdG9yLnJlc29sdmVEZWxheShlbCwgdm5vZGUsIG9wdGlvbnMpLFxuICAgIHJ1bGVzOiBHZW5lcmF0b3IucmVzb2x2ZVJ1bGVzKGVsLCBiaW5kaW5nKSxcbiAgICBpbml0aWFsOiAhIWJpbmRpbmcubW9kaWZpZXJzLmluaXRpYWwsXG4gICAgYWxpYXM6IEdlbmVyYXRvci5yZXNvbHZlQWxpYXMoZWwsIHZub2RlKSxcbiAgICB2YWxpZGl0eTogb3B0aW9ucy52YWxpZGl0eSxcbiAgICBhcmlhOiBvcHRpb25zLmFyaWFcbiAgfTtcbn07XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGVsIFxuICogQHBhcmFtIHsqfSBiaW5kaW5nIFxuICovXG5HZW5lcmF0b3IucmVzb2x2ZVJ1bGVzID0gZnVuY3Rpb24gcmVzb2x2ZVJ1bGVzIChlbCwgYmluZGluZykge1xuICBpZiAoIWJpbmRpbmcgfHwgIWJpbmRpbmcuZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAncnVsZXMnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcbiAgfVxuXG4gIGlmICh+WydzdHJpbmcnLCAnb2JqZWN0J10uaW5kZXhPZih0eXBlb2YgYmluZGluZy52YWx1ZS5ydWxlcykpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5ydWxlcztcbiAgfVxuXG4gIHJldHVybiBiaW5kaW5nLnZhbHVlO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbm9uLWNpcmN1bGFyIHBhcnRpYWwgVk0gaW5zdGFuY2UgZnJvbSBhIFZ1ZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7Kn0gdm0gXG4gKi9cbkdlbmVyYXRvci5tYWtlVk0gPSBmdW5jdGlvbiBtYWtlVk0gKHZtKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0ICRlbCAoKSB7XG4gICAgICByZXR1cm4gdm0uJGVsO1xuICAgIH0sXG4gICAgZ2V0ICRyZWZzICgpIHtcbiAgICAgIHJldHVybiB2bS4kcmVmcztcbiAgICB9LFxuICAgICR3YXRjaDogdm0uJHdhdGNoID8gdm0uJHdhdGNoLmJpbmQodm0pIDogZnVuY3Rpb24gKCkge30sXG4gICAgJHZhbGlkYXRvcjogdm0uJHZhbGlkYXRvciA/IHtcbiAgICAgIGVycm9yczogdm0uJHZhbGlkYXRvci5lcnJvcnMsXG4gICAgICB2YWxpZGF0ZTogdm0uJHZhbGlkYXRvci52YWxpZGF0ZS5iaW5kKHZtLiR2YWxpZGF0b3IpXG4gICAgfSA6IG51bGxcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGRlbGF5IHZhbHVlLlxuICogQHBhcmFtIHsqfSBlbFxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVEZWxheSA9IGZ1bmN0aW9uIHJlc29sdmVEZWxheSAoZWwsIHZub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICdkZWxheScpIHx8ICh2bm9kZS5jaGlsZCAmJiB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LWRlbGF5J10pIHx8IG9wdGlvbnMuZGVsYXk7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBhbGlhcyBmb3IgdGhlIGZpZWxkLlxuICogQHBhcmFtIHsqfSBlbCBcbiAqIEBwYXJhbSB7Kn0gdm5vZGUgXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlQWxpYXMgPSBmdW5jdGlvbiByZXNvbHZlQWxpYXMgKGVsLCB2bm9kZSkge1xuICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ2FzJykgfHwgKHZub2RlLmNoaWxkICYmIHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtYXMnXSkgfHwgZWwudGl0bGUgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGV2ZW50cyB0byB2YWxpZGF0ZSBpbiByZXNwb25zZSB0by5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVFdmVudHMgPSBmdW5jdGlvbiByZXNvbHZlRXZlbnRzIChlbCwgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWxpZGF0ZS1vbicpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXZhbGlkYXRlLW9uJ10pO1xuICB9XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWxpZGF0ZS1vbicpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgc2NvcGUgZm9yIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gYmluZGluZ1xuICovXG5HZW5lcmF0b3IucmVzb2x2ZVNjb3BlID0gZnVuY3Rpb24gcmVzb2x2ZVNjb3BlIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAoIHZub2RlID09PSB2b2lkIDAgKSB2bm9kZSA9IHt9O1xuXG4gIHZhciBzY29wZSA9IG51bGw7XG4gIGlmIChpc09iamVjdChiaW5kaW5nLnZhbHVlKSkge1xuICAgIHNjb3BlID0gYmluZGluZy52YWx1ZS5zY29wZTtcbiAgfVxuXG4gIGlmICh2bm9kZS5jaGlsZCAmJiAhc2NvcGUpIHtcbiAgICBzY29wZSA9IHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtc2NvcGUnXTtcbiAgfVxuXG4gIHJldHVybiBzY29wZSB8fCBnZXRTY29wZShlbCk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgbm9kZSBkaXJlY3RpdmVzIGNvbnRhaW5zIGEgdi1tb2RlbCBvciBhIHNwZWNpZmllZCBhcmcuXG4gKiBBcmdzIHRha2UgcHJpb3JpdHkgb3ZlciBtb2RlbHMuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5HZW5lcmF0b3IucmVzb2x2ZU1vZGVsID0gZnVuY3Rpb24gcmVzb2x2ZU1vZGVsIChiaW5kaW5nLCB2bm9kZSkge1xuICBpZiAoYmluZGluZy5hcmcpIHtcbiAgICByZXR1cm4gYmluZGluZy5hcmc7XG4gIH1cblxuICBpZiAoaXNPYmplY3QoYmluZGluZy52YWx1ZSkgJiYgYmluZGluZy52YWx1ZS5hcmcpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5hcmc7XG4gIH1cblxuICB2YXIgbW9kZWwgPSB2bm9kZS5kYXRhLm1vZGVsIHx8IGZpbmQodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnbW9kZWwnOyB9KTtcbiAgaWYgKCFtb2RlbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHdhdGNoYWJsZSA9IC9eW2Etel9dK1swLTldKihcXHcqXFwuW2Etel9dXFx3KikqJC9pLnRlc3QobW9kZWwuZXhwcmVzc2lvbikgJiYgaGFzUGF0aChtb2RlbC5leHByZXNzaW9uLCB2bm9kZS5jb250ZXh0KTtcblxuICBpZiAoIXdhdGNoYWJsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG1vZGVsLmV4cHJlc3Npb247XG59O1xuXG4vKipcbiAgICogUmVzb2x2ZXMgdGhlIGZpZWxkIG5hbWUgdG8gdHJpZ2dlciB2YWxpZGF0aW9ucy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgZmllbGQgbmFtZS5cbiAgICovXG5HZW5lcmF0b3IucmVzb2x2ZU5hbWUgPSBmdW5jdGlvbiByZXNvbHZlTmFtZSAoZWwsIHZub2RlKSB7XG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnbmFtZScpIHx8ICh2bm9kZS5jaGlsZC4kYXR0cnMgJiYgKHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1uYW1lJ10gfHwgdm5vZGUuY2hpbGQuJGF0dHJzWyduYW1lJ10pKSB8fCB2bm9kZS5jaGlsZC5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICduYW1lJykgfHwgZWwubmFtZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbHVlIGdldHRlciBpbnB1dCB0eXBlLlxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUdldHRlciA9IGZ1bmN0aW9uIHJlc29sdmVHZXR0ZXIgKGVsLCB2bm9kZSwgbW9kZWwpIHtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRQYXRoKG1vZGVsLCB2bm9kZS5jb250ZXh0KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHZub2RlLmNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoID0gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3ZhbHVlLXBhdGgnKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di12YWx1ZS1wYXRoJ10pO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhdGgocGF0aCwgdm5vZGUuY2hpbGQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlLmNoaWxkLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICBzd2l0Y2ggKGVsLnR5cGUpIHtcbiAgY2FzZSAnY2hlY2tib3gnOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKGVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG5cbiAgICBlbHMgPSB0b0FycmF5KGVscykuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2hlY2tlZDsgfSk7XG4gICAgaWYgKCFlbHMubGVuZ3RoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cblxuICAgIHJldHVybiBlbHMubWFwKGZ1bmN0aW9uIChjaGVja2JveCkgeyByZXR1cm4gY2hlY2tib3gudmFsdWU7IH0pO1xuICB9O1xuICBjYXNlICdyYWRpbyc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyAoZWwubmFtZSkgKyBcIlxcXCJdXCIpKTtcbiAgICB2YXIgZWxtID0gZmluZChlbHMsIGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2hlY2tlZDsgfSk7XG5cbiAgICByZXR1cm4gZWxtICYmIGVsbS52YWx1ZTtcbiAgfTtcbiAgY2FzZSAnZmlsZSc6IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiB0b0FycmF5KGVsLmZpbGVzKTtcbiAgfTtcbiAgY2FzZSAnc2VsZWN0LW11bHRpcGxlJzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5vcHRpb25zKS5maWx0ZXIoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LnNlbGVjdGVkOyB9KS5tYXAoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LnZhbHVlOyB9KTtcbiAgfTtcbiAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWwgJiYgZWwudmFsdWU7XG4gIH07XG4gIH1cbn07XG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHRhcmdldE9mOiBudWxsLFxuICBpbml0aWFsOiBmYWxzZSxcbiAgc2NvcGU6IG51bGwsXG4gIGxpc3RlbjogdHJ1ZSxcbiAgbmFtZTogbnVsbCxcbiAgYWN0aXZlOiB0cnVlLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIHJ1bGVzOiB7fSxcbiAgdm06IG51bGwsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICB2YWxpZGl0eTogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgZXZlbnRzOiAnaW5wdXR8Ymx1cicsXG4gIGRlbGF5OiAwLFxuICBjbGFzc05hbWVzOiB7XG4gICAgdG91Y2hlZDogJ3RvdWNoZWQnLCAvLyB0aGUgY29udHJvbCBoYXMgYmVlbiBibHVycmVkXG4gICAgdW50b3VjaGVkOiAndW50b3VjaGVkJywgLy8gdGhlIGNvbnRyb2wgaGFzbid0IGJlZW4gYmx1cnJlZFxuICAgIHZhbGlkOiAndmFsaWQnLCAvLyBtb2RlbCBpcyB2YWxpZFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJywgLy8gbW9kZWwgaXMgaW52YWxpZFxuICAgIHByaXN0aW5lOiAncHJpc3RpbmUnLCAvLyBjb250cm9sIGhhcyBub3QgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgICBkaXJ0eTogJ2RpcnR5JyAvLyBjb250cm9sIGhhcyBiZWVuIGludGVyYWN0ZWQgd2l0aFxuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgZGVmYXVsdCBmbGFncyBmb3IgdGhlIGZpZWxkLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xudmFyIGdlbmVyYXRlRmxhZ3MgPSBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gKHtcbiAgdW50b3VjaGVkOiB0cnVlLFxuICB0b3VjaGVkOiBmYWxzZSxcbiAgZGlydHk6IGZhbHNlLFxuICBwcmlzdGluZTogdHJ1ZSxcbiAgdmFsaWQ6IG51bGwsXG4gIGludmFsaWQ6IG51bGwsXG4gIHZhbGlkYXRlZDogZmFsc2UsXG4gIHBlbmRpbmc6IGZhbHNlLFxuICByZXF1aXJlZDogISFvcHRpb25zLnJ1bGVzLnJlcXVpcmVkXG59KTsgfTtcblxudmFyIEZpZWxkID0gZnVuY3Rpb24gRmllbGQgKGVsLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuaWQgPSB1bmlxSWQoKTtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgdGhpcy53YXRjaGVycyA9IFtdO1xuICB0aGlzLmV2ZW50cyA9IFtdO1xuICB0aGlzLnJ1bGVzID0ge307XG4gIGlmICghdGhpcy5pc0hlYWRsZXNzICYmICEodGhpcy50YXJnZXRPZiB8fCBvcHRpb25zLnRhcmdldE9mKSkge1xuICAgIHNldERhdGFBdHRyaWJ1dGUodGhpcy5lbCwgJ2lkJywgdGhpcy5pZCk7IC8vIGNhY2hlIGZpZWxkIGlkIGlmIGl0IGlzIGluZGVwZW5kZW50IGFuZCBoYXMgYSByb290IGVsZW1lbnQuXG4gIH1cbiAgb3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgdGhpcy52YWxpZGl0eSA9IG9wdGlvbnMudmFsaWRpdHk7XG4gIHRoaXMuYXJpYSA9IG9wdGlvbnMuYXJpYTtcbiAgdGhpcy5mbGFncyA9IGdlbmVyYXRlRmxhZ3Mob3B0aW9ucyk7XG4gIHRoaXMudm0gPSBvcHRpb25zLnZtIHx8IHRoaXMudm07XG4gIHRoaXMuY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQgfHwgdGhpcy5jb21wb25lbnQ7XG4gIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgaXNWdWU6IHt9LHZhbGlkYXRvcjoge30saXNSZXF1aXJlZDoge30saXNEaXNhYmxlZDoge30saXNIZWFkbGVzczoge30sZGlzcGxheU5hbWU6IHt9LHZhbHVlOiB7fSxyZWplY3RzRmFsc2U6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzVnVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWxpZGF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudm0gfHwgIXRoaXMudm0uJHZhbGlkYXRvcikge1xuICAgIHdhcm4oJ05vIHZhbGlkYXRvciBpbnN0YW5jZSBkZXRlY3RlZC4nKTtcbiAgICByZXR1cm4geyB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30gfTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnZtLiR2YWxpZGF0b3I7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc1JlcXVpcmVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5ydWxlcy5yZXF1aXJlZDtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzRGlzYWJsZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuaXNWdWUgJiYgdGhpcy5jb21wb25lbnQuZGlzYWJsZWQpIHx8ICh0aGlzLmVsICYmIHRoaXMuZWwuZGlzYWJsZWQpO1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNIZWFkbGVzcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5lbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGlzcGxheSBuYW1lICh1c2VyLWZyaWVuZGx5IG5hbWUpLlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5kaXNwbGF5TmFtZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFsaWFzO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbnB1dCB2YWx1ZS5cbiAqIEByZXR1cm4geyp9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnZhbHVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKHRoaXMuZ2V0dGVyKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXR0ZXIoKTtcbn07XG5cbi8qKlxuICogSWYgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYXMgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHJlcXVpcmVkIHJ1bGUuIFxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5yZWplY3RzRmFsc2UuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pc1Z1ZSB8fCB0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lbC50eXBlID09PSAnY2hlY2tib3gnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnN0YW5jZSBtYXRjaGVzIHRoZSBvcHRpb25zIHByb3ZpZGVkLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG1hdGNoaW5nIG9wdGlvbnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gbWF0Y2hlcyAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pZCkge1xuICAgIHJldHVybiB0aGlzLmlkID09PSBvcHRpb25zLmlkO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubmFtZSA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG9wdGlvbnMubmFtZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aGlzLnNjb3BlID09PSBvcHRpb25zLnNjb3BlO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMubmFtZSA9PT0gdGhpcy5uYW1lICYmIG9wdGlvbnMuc2NvcGUgPT09IHRoaXMuc2NvcGU7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChvcHRpb25zKSB7XG4gIHRoaXMudGFyZ2V0T2YgPSBvcHRpb25zLnRhcmdldE9mIHx8IG51bGw7XG4gIHRoaXMuaW5pdGlhbCA9IG9wdGlvbnMuaW5pdGlhbCB8fCB0aGlzLmluaXRpYWwgfHwgZmFsc2U7XG5cbiAgLy8gdXBkYXRlIGVycm9ycyBzY29wZSBpZiB0aGUgZmllbGQgc2NvcGUgd2FzIGNoYW5nZWQuXG4gIGlmIChvcHRpb25zLnNjb3BlICYmIG9wdGlvbnMuc2NvcGUgIT09IHRoaXMuc2NvcGUgJiYgdGhpcy52YWxpZGF0b3IuZXJyb3JzICYmIGlzQ2FsbGFibGUodGhpcy52YWxpZGF0b3IuZXJyb3JzLnVwZGF0ZSkpIHtcbiAgICB0aGlzLnZhbGlkYXRvci5lcnJvcnMudXBkYXRlKHRoaXMuaWQsIHsgc2NvcGU6IG9wdGlvbnMuc2NvcGUgfSk7XG4gIH1cbiAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgdGhpcy5zY29wZSB8fCBudWxsO1xuICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5uYW1lIHx8IG51bGw7XG4gIHRoaXMucnVsZXMgPSBvcHRpb25zLnJ1bGVzICE9PSB1bmRlZmluZWQgPyBub3JtYWxpemVSdWxlcyhvcHRpb25zLnJ1bGVzKSA6IHRoaXMucnVsZXM7XG4gIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IHRoaXMubW9kZWw7XG4gIHRoaXMubGlzdGVuID0gb3B0aW9ucy5saXN0ZW4gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubGlzdGVuIDogdGhpcy5saXN0ZW47XG4gIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyB8fCB0aGlzLmNsYXNzZXMgfHwgZmFsc2U7XG4gIHRoaXMuY2xhc3NOYW1lcyA9IG9wdGlvbnMuY2xhc3NOYW1lcyB8fCB0aGlzLmNsYXNzTmFtZXMgfHwgREVGQVVMVF9PUFRJT05TLmNsYXNzTmFtZXM7XG4gIHRoaXMuYWxpYXMgPSBvcHRpb25zLmFsaWFzIHx8IHRoaXMuYWxpYXM7XG4gIHRoaXMuZ2V0dGVyID0gaXNDYWxsYWJsZShvcHRpb25zLmdldHRlcikgPyBvcHRpb25zLmdldHRlciA6IHRoaXMuZ2V0dGVyO1xuICB0aGlzLmRlbGF5ID0gb3B0aW9ucy5kZWxheSB8fCB0aGlzLmRlbGF5IHx8IDA7XG4gIHRoaXMuZXZlbnRzID0gdHlwZW9mIG9wdGlvbnMuZXZlbnRzID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmV2ZW50cy5sZW5ndGggPyBvcHRpb25zLmV2ZW50cy5zcGxpdCgnfCcpIDogdGhpcy5ldmVudHM7XG4gIHRoaXMudXBkYXRlRGVwZW5kZW5jaWVzKCk7XG4gIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG5cbiAgLy8gdmFsaWRhdGUgaWYgaXQgd2FzIHZhbGlkYXRlZCBiZWZvcmUgYW5kIGZpZWxkIHdhcyB1cGRhdGVkIGFuZCB0aGVyZSB3YXMgYSBydWxlcyBtdXRhdGlvbi5cbiAgaWYgKHRoaXMuZmxhZ3MudmFsaWRhdGVkICYmIG9wdGlvbnMucnVsZXMgJiYgdGhpcy51cGRhdGVkKSB7XG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMuaWQpKSk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gIC8vIG5vIG5lZWQgdG8gY29udGludWUuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgdGhpcy5hZGRWYWx1ZUxpc3RlbmVycygpO1xuICB0aGlzLnVwZGF0ZUFyaWFBdHRycygpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBmaWVsZCByZXF1aXJlcyByZWZlcmVuY2VzIHRvIHRhcmdldCBmaWVsZHMuXG4qL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZURlcGVuZGVuY2llcyA9IGZ1bmN0aW9uIHVwZGF0ZURlcGVuZGVuY2llcyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gcmVzZXQgZGVwZW5kZW5jaWVzLlxuICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZpZWxkLmRlc3Ryb3koKTsgfSk7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG5cbiAgLy8gd2UgZ2V0IHRoZSBzZWxlY3RvcnMgZm9yIGVhY2ggZmllbGQuXG4gIHZhciBmaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIHIpIHtcbiAgICBpZiAociA9PT0gJ2NvbmZpcm1lZCcpIHtcbiAgICAgIHByZXYucHVzaCh7IHNlbGVjdG9yOiB0aGlzJDEucnVsZXNbcl1bMF0gfHwgKCh0aGlzJDEubmFtZSkgKyBcIl9jb25maXJtYXRpb25cIiksIG5hbWU6IHIgfSk7XG4gICAgfSBlbHNlIGlmICgvYWZ0ZXJ8YmVmb3JlLy50ZXN0KHIpKSB7XG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3RvcjogdGhpcyQxLnJ1bGVzW3JdWzBdLCBuYW1lOiByIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFmaWVsZHMubGVuZ3RoIHx8ICF0aGlzLnZtIHx8ICF0aGlzLnZtLiRlbCkgeyByZXR1cm47IH1cblxuICAvLyBtdXN0IGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIHNhbWUgY29tcG9uZW50LCBzbyB3ZSB1c2UgdGhlIHZtIHJvb3QgZWxlbWVudCBjb25zdHJhaW4gb3VyIGRvbSBzZWFyY2guXG4gIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IHJlZi5zZWxlY3RvcjtcbiAgICAgIHZhciBuYW1lID0gcmVmLm5hbWU7XG5cbiAgICB2YXIgZWwgPSBudWxsO1xuICAgIC8vIHZ1ZSByZWYgc2VsZWN0b3IuXG4gICAgaWYgKHNlbGVjdG9yWzBdID09PSAnJCcpIHtcbiAgICAgIGVsID0gdGhpcyQxLnZtLiRyZWZzW3NlbGVjdG9yLnNsaWNlKDEpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHJ5IGEgcXVlcnkgc2VsZWN0aW9uLlxuICAgICAgZWwgPSB0aGlzJDEudm0uJGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIC8vIHRyeSBhIG5hbWUgc2VsZWN0b3JcbiAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKChcImlucHV0W25hbWU9XFxcIlwiICsgc2VsZWN0b3IgKyBcIlxcXCJdXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB2bTogdGhpcyQxLnZtLFxuICAgICAgY2xhc3NlczogdGhpcyQxLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVzOiB0aGlzJDEuY2xhc3NOYW1lcyxcbiAgICAgIGRlbGF5OiB0aGlzJDEuZGVsYXksXG4gICAgICBzY29wZTogdGhpcyQxLnNjb3BlLFxuICAgICAgZXZlbnRzOiB0aGlzJDEuZXZlbnRzLmpvaW4oJ3wnKSxcbiAgICAgIGluaXRpYWw6IHRoaXMkMS5pbml0aWFsLFxuICAgICAgdGFyZ2V0T2Y6IHRoaXMkMS5pZFxuICAgIH07XG5cbiAgICAvLyBwcm9iYWJseSBhIGNvbXBvbmVudC5cbiAgICBpZiAoaXNDYWxsYWJsZShlbC4kd2F0Y2gpKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudCA9IGVsO1xuICAgICAgb3B0aW9ucy5lbCA9IGVsLiRlbDtcbiAgICAgIG9wdGlvbnMuZ2V0dGVyID0gR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwuJGVsLCB7IGNoaWxkOiBlbCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsO1xuICAgICAgb3B0aW9ucy5nZXR0ZXIgPSBHZW5lcmF0b3IucmVzb2x2ZUdldHRlcihlbCwge30pO1xuICAgIH1cblxuICAgIHRoaXMkMS5kZXBlbmRlbmNpZXMucHVzaCh7IG5hbWU6IG5hbWUsIGZpZWxkOiBuZXcgRmllbGQob3B0aW9ucy5lbCwgb3B0aW9ucykgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7UmVnRXhwfSB0YWdcbiAqL1xuRmllbGQucHJvdG90eXBlLnVud2F0Y2ggPSBmdW5jdGlvbiB1bndhdGNoICh0YWcpIHtcbiAgaWYgKCF0YWcpIHtcbiAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMud2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7IHJldHVybiB0YWcudGVzdCh3LnRhZyk7IH0pLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgdGhpcy53YXRjaGVycyA9IHRoaXMud2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7IHJldHVybiAhdGFnLnRlc3Qody50YWcpOyB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZWxlbWVudCBjbGFzc2VzIGRlcGVuZGluZyBvbiBlYWNoIGZpZWxkIGZsYWcgc3RhdHVzLlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3NlcyA9IGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMgKCkge1xuICBpZiAoIXRoaXMuY2xhc3NlcykgeyByZXR1cm47IH1cblxuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMuZGlydHksIHRoaXMuZmxhZ3MuZGlydHkpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMucHJpc3RpbmUsIHRoaXMuZmxhZ3MucHJpc3RpbmUpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudmFsaWQsICEhdGhpcy5mbGFncy52YWxpZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5pbnZhbGlkLCAhIXRoaXMuZmxhZ3MuaW52YWxpZCk7XG4gIHRvZ2dsZUNsYXNzKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy50b3VjaGVkLCB0aGlzLmZsYWdzLnRvdWNoZWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudW50b3VjaGVkLCB0aGlzLmZsYWdzLnVudG91Y2hlZCk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGxpc3RlbmVycyByZXF1aXJlZCBmb3IgYXV0b21hdGljIGNsYXNzZXMgYW5kIHNvbWUgZmxhZ3MuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRBY3Rpb25MaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25MaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlbW92ZSBwcmV2aW91cyBsaXN0ZW5lcnMuXG4gIHRoaXMudW53YXRjaCgvY2xhc3MvKTtcblxuICB2YXIgb25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5mbGFncy50b3VjaGVkID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MudW50b3VjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMkMS5jbGFzc2VzKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0aGlzJDEuZWwsIHRoaXMkMS5jbGFzc05hbWVzLnRvdWNoZWQsIHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy51bnRvdWNoZWQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IG5lZWRlZCBvbmNlLlxuICAgIHRoaXMkMS51bndhdGNoKC9eY2xhc3NfYmx1ciQvKTtcbiAgfTtcblxuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICB2YXIgb25JbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMkMS5mbGFncy5wcmlzdGluZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5wcmlzdGluZSwgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy5kaXJ0eSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2lucHV0JC8pO1xuICB9O1xuXG4gIGlmICh0aGlzLmlzVnVlICYmIGlzQ2FsbGFibGUodGhpcy5jb21wb25lbnQuJG9uY2UpKSB7XG4gICAgdGhpcy5jb21wb25lbnQuJG9uY2UoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgdGhpcy5jb21wb25lbnQuJG9uY2UoJ2JsdXInLCBvbkJsdXIpO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdjbGFzc19pbnB1dCcsXG4gICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9mZignaW5wdXQnLCBvbklucHV0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfYmx1cicsXG4gICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9mZignYmx1cicsIG9uQmx1cik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaXNIZWFkbGVzcykgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gIC8vIENoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgb24gTWFjIGRvbid0IGVtaXQgYmx1ciBuYXR1cmFsbHksIHNvIHdlIGxpc3RlbiBvbiBjbGljayBpbnN0ZWFkLlxuICB2YXIgYmx1ckV2ZW50ID0gWydyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodGhpcy5lbC50eXBlKSA9PT0gLTEgPyAnYmx1cicgOiAnY2xpY2snO1xuICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoYmx1ckV2ZW50LCBvbkJsdXIpO1xuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2lucHV0JyxcbiAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihpbnB1dEV2ZW50LCBvbklucHV0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgdGFnOiAnY2xhc3NfYmx1cicsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmx1ckV2ZW50LCBvbkJsdXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGxpc3RlbmVycyByZXF1aXJlZCBmb3IgdmFsaWRhdGlvbi5cbiAqL1xuRmllbGQucHJvdG90eXBlLmFkZFZhbHVlTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkVmFsdWVMaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMudW53YXRjaCgvXmlucHV0Xy4rLyk7XG4gIGlmICghdGhpcy5saXN0ZW4pIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGZuID0gbnVsbDtcbiAgaWYgKHRoaXMudGFyZ2V0T2YpIHtcbiAgICBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS50YXJnZXRPZikpKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDAgfHwgKGlzQ2FsbGFibGUoRXZlbnQpICYmIGFyZ3NbMF0gaW5zdGFuY2VvZiBFdmVudCkpIHtcbiAgICAgICAgYXJnc1swXSA9IHRoaXMkMS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS5pZCkpLCBhcmdzWzBdKTtcbiAgICB9O1xuICB9XG4gIHZhciB2YWxpZGF0ZSA9IGRlYm91bmNlKGZuLCB0aGlzLmRlbGF5KTtcblxuICB2YXIgaW5wdXRFdmVudCA9IGdldElucHV0RXZlbnROYW1lKHRoaXMuZWwpO1xuICAvLyByZXBsYWNlIGlucHV0IGV2ZW50IHdpdGggc3VpdGFibGUgb25lLlxuICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUgPT09ICdpbnB1dCcgPyBpbnB1dEV2ZW50IDogZTtcbiAgfSk7XG5cbiAgLy8gaWYgdGhlcmUgaXMgYSB3YXRjaGFibGUgbW9kZWwgYW5kIGFuIG9uIGlucHV0IHZhbGlkYXRpb24gaXMgcmVxdWVzdGVkLlxuICBpZiAodGhpcy5tb2RlbCAmJiBldmVudHMuaW5kZXhPZihpbnB1dEV2ZW50KSAhPT0gLTEpIHtcbiAgICB2YXIgdW53YXRjaCA9IHRoaXMudm0uJHdhdGNoKHRoaXMubW9kZWwsIHZhbGlkYXRlKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbW9kZWwnLFxuICAgICAgdW53YXRjaDogdW53YXRjaFxuICAgIH0pO1xuICAgIC8vIGZpbHRlciBvdXQgaW5wdXQgZXZlbnQgYXMgaXQgaXMgYWxyZWFkeSBoYW5kbGVkIGJ5IHRoZSB3YXRjaGVyIEFQSS5cbiAgICBldmVudHMgPSBldmVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlICE9PSBpbnB1dEV2ZW50OyB9KTtcbiAgfVxuXG4gIC8vIEFkZCBldmVudHMuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHRoaXMkMS5pc1Z1ZSkge1xuICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb24oZSwgdmFsaWRhdGUpO1xuICAgICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgICB0YWc6ICdpbnB1dF92dWUnLFxuICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLmNvbXBvbmVudC4kb2ZmKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKH5bJ3JhZGlvJywgJ2NoZWNrYm94J10uaW5kZXhPZih0aGlzJDEuZWwudHlwZSkpIHtcbiAgICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKHRoaXMkMS5lbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuICAgICAgdG9BcnJheShlbHMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzJDEuZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnaW5wdXRfbmF0aXZlJyxcbiAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyBhcmlhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVBcmlhQXR0cnMgPSBmdW5jdGlvbiB1cGRhdGVBcmlhQXR0cnMgKCkge1xuICBpZiAoIXRoaXMuYXJpYSB8fCB0aGlzLmlzSGVhZGxlc3MgfHwgIWlzQ2FsbGFibGUodGhpcy5lbC5zZXRBdHRyaWJ1dGUpKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJywgdGhpcy5pc1JlcXVpcmVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0aGlzLmZsYWdzLmludmFsaWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgY3VzdG9tIHZhbGlkaXR5IGZvciB0aGUgZmllbGQuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVDdXN0b21WYWxpZGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbVZhbGlkaXR5ICgpIHtcbiAgaWYgKCF0aGlzLnZhbGlkaXR5IHx8IHRoaXMuaXNIZWFkbGVzcyB8fCAhaXNDYWxsYWJsZSh0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KSkgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLnNldEN1c3RvbVZhbGlkaXR5KHRoaXMuZmxhZ3MudmFsaWQgPyAnJyA6ICh0aGlzLnZhbGlkYXRvci5lcnJvcnMuZmlyc3RCeUlkKHRoaXMuaWQpIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGxpc3RlbmVycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEZpZWxkLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDEgKTtcblxudmFyIEZpZWxkQmFnID0gZnVuY3Rpb24gRmllbGRCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDIgPSB7IGxlbmd0aDoge30gfTtcblxuLyoqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gbGVuZ3RoLlxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMi5sZW5ndGguZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBmaWVsZCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG1hdGNoZXIgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoZXJcbiAqIEByZXR1cm4ge0ZpZWxkfHVuZGVmaW5lZH0gVGhlIGZpcnN0IG1hdGNoaW5nIGl0ZW0uXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCQxIChtYXRjaGVyKSB7XG4gIHJldHVybiBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gbWF0Y2hlclxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIG1hdGNoaW5nIGZpZWxkIGl0ZW1zLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gZmlsdGVyIChtYXRjaGVyKSB7XG4gIC8vIG11bHRpcGxlIG1hdGNoZXJzIHRvIGJlIHRyaWVkLlxuICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaGVyKSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gbWF0Y2hlci5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobSk7IH0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5tYXRjaGVzKG1hdGNoZXIpOyB9KTtcbn07XG5cbi8qKlxuICogTWFwcyB0aGUgZmllbGQgaXRlbXMgdXNpbmcgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWFwcGVyXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlcikge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAobWFwcGVyKTtcbn07XG5cbi8qKlxuICogRmluZHMgYW5kIHJlbW92ZXMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QsIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbS5cbiAqIEBwYXJhbSB7T2JqZWN0fEZpZWxkfSBtYXRjaGVyXG4gKiBAcmV0dXJuIHtGaWVsZHxudWxsfVxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChtYXRjaGVyKSB7XG4gIHZhciBpdGVtID0gbnVsbDtcbiAgaWYgKG1hdGNoZXIgaW5zdGFuY2VvZiBGaWVsZCkge1xuICAgIGl0ZW0gPSBtYXRjaGVyO1xuICB9IGVsc2Uge1xuICAgIGl0ZW0gPSB0aGlzLmZpbmQobWF0Y2hlcik7XG4gIH1cblxuICBpZiAoIWl0ZW0pIHsgcmV0dXJuIG51bGw7IH1cblxuICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICByZXR1cm4gaXRlbTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGZpZWxkIGl0ZW0gdG8gdGhlIGxpc3QuXG4gKlxuICogQHBhcmFtIHtGaWVsZH0gaXRlbVxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGl0ZW0pIHtcbiAgaWYgKCEgKGl0ZW0gaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcignRmllbGRCYWcgb25seSBhY2NlcHRzIGluc3RhbmNlcyBvZiBGaWVsZCB0aGF0IGhhcyBhbiBpZCBkZWZpbmVkLicpO1xuICB9XG5cbiAgaWYgKCFpdGVtLmlkKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkIGlkIG11c3QgYmUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIGlmICh0aGlzLmZpbmQoeyBpZDogaXRlbS5pZCB9KSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIkZpZWxkIHdpdGggaWQgXCIgKyAoaXRlbS5pZCkgKyBcIiBpcyBhbHJlYWR5IGFkZGVkLlwiKSk7XG4gIH1cblxuICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGRCYWcucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMiApO1xuXG52YXIgYWZ0ZXIgPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgb3RoZXIgPSByZWZbMF07XG4gIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG4gIHZhciBmb3JtYXQgPSByZWZbMl07XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9ybWF0ID0gaW5jbHVzaW9uO1xuICAgIGluY2x1c2lvbiA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0LCB0cnVlKTtcbiAgdmFyIG90aGVyVmFsdWUgPSBtb21lbnQob3RoZXIsIGZvcm1hdCwgdHJ1ZSk7XG5cbiAgLy8gaWYgZWl0aGVyIGlzIG5vdCB2YWxpZC5cbiAgaWYgKCEgZGF0ZVZhbHVlLmlzVmFsaWQoKSB8fCAhIG90aGVyVmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVWYWx1ZS5pc0FmdGVyKG90aGVyVmFsdWUpIHx8IChpbmNsdXNpb24gJiYgZGF0ZVZhbHVlLmlzU2FtZShvdGhlclZhbHVlKSk7XG59OyB9O1xuXG52YXIgYmVmb3JlID0gZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG90aGVyID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZVZhbHVlID0gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuICB2YXIgb3RoZXJWYWx1ZSA9IG1vbWVudChvdGhlciwgZm9ybWF0LCB0cnVlKTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoISBkYXRlVmFsdWUuaXNWYWxpZCgpIHx8ICEgb3RoZXJWYWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZVZhbHVlLmlzQmVmb3JlKG90aGVyVmFsdWUpIHx8IChpbmNsdXNpb24gJiYgZGF0ZVZhbHVlLmlzU2FtZShvdGhlclZhbHVlKSk7XG59OyB9O1xuXG52YXIgZGF0ZV9mb3JtYXQgPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuXHR2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG5cdHJldHVybiBtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpO1xuIH1cdH07XG5cbnZhciBkYXRlX2JldHdlZW4gPSBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgbWluO1xuICB2YXIgbWF4O1xuICB2YXIgZm9ybWF0O1xuICB2YXIgaW5jbHVzaXZpdHkgPSAnKCknO1xuXG4gIGlmIChwYXJhbXMubGVuZ3RoID4gMykge1xuICAgIHZhciBhc3NpZ247XG4gICAgKGFzc2lnbiA9IHBhcmFtcywgbWluID0gYXNzaWduWzBdLCBtYXggPSBhc3NpZ25bMV0sIGluY2x1c2l2aXR5ID0gYXNzaWduWzJdLCBmb3JtYXQgPSBhc3NpZ25bM10pO1xuICB9IGVsc2Uge1xuICAgIHZhciBhc3NpZ24kMTtcbiAgICAoYXNzaWduJDEgPSBwYXJhbXMsIG1pbiA9IGFzc2lnbiQxWzBdLCBtYXggPSBhc3NpZ24kMVsxXSwgZm9ybWF0ID0gYXNzaWduJDFbMl0pO1xuICB9XG5cbiAgdmFyIG1pbkRhdGUgPSBtb21lbnQobWluLCBmb3JtYXQsIHRydWUpO1xuICB2YXIgbWF4RGF0ZSA9IG1vbWVudChtYXgsIGZvcm1hdCwgdHJ1ZSk7XG4gIHZhciBkYXRlVmFsID0gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpO1xuXG4gIGlmICghIChtaW5EYXRlLmlzVmFsaWQoKSAmJiBtYXhEYXRlLmlzVmFsaWQoKSAmJiBkYXRlVmFsLmlzVmFsaWQoKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZVZhbC5pc0JldHdlZW4obWluRGF0ZSwgbWF4RGF0ZSwgJ2RheXMnLCBpbmNsdXNpdml0eSk7XG59OyB9O1xuXG52YXIgbWVzc2FnZXMkMSA9IHtcbiAgYWZ0ZXI6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZlswXTtcbiAgICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBhZnRlciBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGJlZm9yZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmWzBdO1xuICAgIHZhciBpbmNsdXNpb24gPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJlZm9yZSBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGRhdGVfYmV0d2VlbjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWluID0gcmVmWzBdO1xuICAgIHZhciBtYXggPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJldHdlZW4gXCIgKyBtaW4gKyBcIiBhbmQgXCIgKyBtYXggKyBcIi5cIik7XG59LFxuICBkYXRlX2Zvcm1hdDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IFwiICsgZm9ybWF0ICsgXCIuXCIpO1xufVxufTtcblxudmFyIGRhdGUgPSB7XG4gIG1ha2U6IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuICh7XG4gICAgZGF0ZV9mb3JtYXQ6IGRhdGVfZm9ybWF0KG1vbWVudCksXG4gICAgYWZ0ZXI6IGFmdGVyKG1vbWVudCksXG4gICAgYmVmb3JlOiBiZWZvcmUobW9tZW50KSxcbiAgICBkYXRlX2JldHdlZW46IGRhdGVfYmV0d2Vlbihtb21lbnQpXG4gIH0pOyB9LFxuICBtZXNzYWdlczogbWVzc2FnZXMkMSxcbiAgaW5zdGFsbGVkOiBmYWxzZVxufTtcblxudmFyIExPQ0FMRSA9ICdlbic7XG52YXIgU1RSSUNUX01PREUgPSB0cnVlO1xudmFyIERJQ1RJT05BUlkgPSBuZXcgRGljdGlvbmFyeSh7XG4gIGVuOiB7XG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGN1c3RvbToge31cbiAgfVxufSk7XG5cbnZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiBWYWxpZGF0b3IgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7IHZtOiBudWxsLCBmYXN0RXhpdDogdHJ1ZSB9O1xuXG4gIHRoaXMuc3RyaWN0ID0gU1RSSUNUX01PREU7XG4gIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yQmFnKCk7XG4gIHRoaXMuZmllbGRzID0gbmV3IEZpZWxkQmFnKCk7XG4gIHRoaXMuZmllbGRCYWcgPSB7fTtcbiAgdGhpcy5fY3JlYXRlRmllbGRzKHZhbGlkYXRpb25zKTtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgdGhpcy5mYXN0RXhpdCA9IG9wdGlvbnMuZmFzdEV4aXQgfHwgZmFsc2U7XG4gIHRoaXMub3duZXJJZCA9IG9wdGlvbnMudm0gJiYgb3B0aW9ucy52bS5fdWlkO1xuICAvLyBjcmVhdGUgaXQgc3RhdGljYWxseSBzaW5jZSB3ZSBkb24ndCBuZWVkIGNvbnN0YW50IGFjY2VzcyB0byB0aGUgdm0uXG4gIHRoaXMuY2xlYW4gPSBvcHRpb25zLnZtICYmIGlzQ2FsbGFibGUob3B0aW9ucy52bS4kbmV4dFRpY2spID8gZnVuY3Rpb24gKCkge1xuICAgIG9wdGlvbnMudm0uJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lcnJvcnMuY2xlYXIoKTtcbiAgICB9KTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZXJyb3JzLmNsZWFyKCk7XG4gIH07XG5cbiAgLy8gaWYgbW9tZW50anMgaXMgcHJlc2VudCwgaW5zdGFsbCB0aGUgdmFsaWRhdG9ycy5cbiAgaWYgKHR5cGVvZiBtb21lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0aGlzLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMobW9tZW50KTtcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgZGljdGlvbmFyeToge30sbG9jYWxlOiB7fSxydWxlczoge30gfTtcbnZhciBzdGF0aWNBY2Nlc3NvcnMgPSB7IGRpY3Rpb25hcnk6IHt9LHJ1bGVzOiB7fSB9O1xuXG4vKipcbiAqIEByZXR1cm4ge0RpY3Rpb25hcnl9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5kaWN0aW9uYXJ5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERJQ1RJT05BUlk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0RpY3Rpb25hcnl9XG4gKi9cbnN0YXRpY0FjY2Vzc29ycy5kaWN0aW9uYXJ5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERJQ1RJT05BUlk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBMT0NBTEU7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLnJ1bGVzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJ1bGVzO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnN0YXRpY0FjY2Vzc29ycy5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSdWxlcztcbn07XG5cbi8qKlxuICogTWVyZ2VzIGEgdmFsaWRhdG9yIG9iamVjdCBpbnRvIHRoZSBSdWxlcyBhbmQgTWVzc2FnZXMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFte2Z1bmN0aW9ufG9iamVjdH0gdmFsaWRhdG9yIFRoZSB2YWxpZGF0b3Igb2JqZWN0LlxuICovXG5WYWxpZGF0b3IuX21lcmdlID0gZnVuY3Rpb24gX21lcmdlIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yKSkge1xuICAgIFJ1bGVzW25hbWVdID0gdmFsaWRhdG9yO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFJ1bGVzW25hbWVdID0gdmFsaWRhdG9yLnZhbGlkYXRlO1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IuZ2V0TWVzc2FnZSkpIHtcbiAgICBESUNUSU9OQVJZLnNldE1lc3NhZ2UoTE9DQUxFLCBuYW1lLCB2YWxpZGF0b3IuZ2V0TWVzc2FnZSk7XG4gIH1cblxuICBpZiAodmFsaWRhdG9yLm1lc3NhZ2VzKSB7XG4gICAgRElDVElPTkFSWS5tZXJnZShcbiAgICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvci5tZXNzYWdlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcHJldjtcbiAgICAgICAgZGljdFtjdXJyXSA9IHtcbiAgICAgICAgICBtZXNzYWdlczogKCBvYmogPSB7fSwgb2JqW25hbWVdID0gdmFsaWRhdG9yLm1lc3NhZ2VzW2N1cnJdLCBvYmogKVxuICAgICAgICB9O1xuICAgICAgICAgIHZhciBvYmo7XG5cbiAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICB9LCB7fSlcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEd1YXJkcyBmcm9tIGV4dG5zaW9uIHZpb2xhdGlvbnMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiBAcGFyYW17b2JqZWN0fSB2YWxpZGF0b3IgYSB2YWxpZGF0aW9uIHJ1bGUgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IuX2d1YXJkRXh0ZW5kID0gZnVuY3Rpb24gX2d1YXJkRXh0ZW5kIChuYW1lLCB2YWxpZGF0b3IpIHtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghIGlzQ2FsbGFibGUodmFsaWRhdG9yLnZhbGlkYXRlKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgaGF2ZSBhICd2YWxpZGF0ZScgbWV0aG9kLlwiKVxuICAgICk7XG4gIH1cblxuICBpZiAoISBpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSAmJiAhIGlzT2JqZWN0KHZhbGlkYXRvci5tZXNzYWdlcykpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgbXVzdCBoYXZlIGEgJ2dldE1lc3NhZ2UnIG1ldGhvZCBvciBoYXZlIGEgJ21lc3NhZ2VzJyBvYmplY3QuXCIpXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGF0aWMgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFte29iamVjdH0gdmFsaWRhdGlvbnMgVGhlIHZhbGlkYXRpb25zIG9iamVjdC5cbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn0gdmFsaWRhdG9yIEEgdmFsaWRhdG9yIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSAodmFsaWRhdGlvbnMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBWYWxpZGF0b3IodmFsaWRhdGlvbnMsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci5cbiAqIEBwYXJhbXtvYmplY3R8ZnVuY3Rpb259IHZhbGlkYXRvciBUaGUgdmFsaWRhdG9yIG9iamVjdC9mdW5jdGlvbi5cbiAqL1xuVmFsaWRhdG9yLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIFZhbGlkYXRvci5fZ3VhcmRFeHRlbmQobmFtZSwgdmFsaWRhdG9yKTtcbiAgVmFsaWRhdG9yLl9tZXJnZShuYW1lLCB2YWxpZGF0b3IpO1xufTtcblxuLyoqXG4gKiBJbnN0YWxscyB0aGUgZGF0ZXRpbWUgdmFsaWRhdG9ycyBhbmQgdGhlIG1lc3NhZ2VzLlxuICovXG5WYWxpZGF0b3IuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIGluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgKG1vbWVudCkge1xuICBpZiAodHlwZW9mIG1vbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHdhcm4oJ1RvIHVzZSB0aGUgZGF0ZS10aW1lIHZhbGlkYXRvcnMgeW91IG11c3QgcHJvdmlkZSBtb21lbnQgcmVmZXJlbmNlLicpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRhdGUuaW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9ycyA9IGRhdGUubWFrZShtb21lbnQpO1xuICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgVmFsaWRhdG9yLmV4dGVuZChuYW1lLCB2YWxpZGF0b3JzW25hbWVdKTtcbiAgfSk7XG5cbiAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoe1xuICAgIGVuOiB7XG4gICAgICBtZXNzYWdlczogZGF0ZS5tZXNzYWdlc1xuICAgIH1cbiAgfSk7XG4gIGRhdGUuaW5zdGFsbGVkID0gdHJ1ZTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHJ1bGUgZnJvbSB0aGUgbGlzdCBvZiB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci9ydWxlLlxuICovXG5WYWxpZGF0b3IucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gIGRlbGV0ZSBSdWxlc1tuYW1lXTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBsb2NhbGUgZm9yIGFsbCB2YWxpZGF0b3JzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSBUaGUgbG9jYWxlIGlkLlxuICovXG5WYWxpZGF0b3Iuc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlIChsYW5ndWFnZSkge1xuICAgIGlmICggbGFuZ3VhZ2UgPT09IHZvaWQgMCApIGxhbmd1YWdlID0gJ2VuJztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCEgRElDVElPTkFSWS5oYXNMb2NhbGUobGFuZ3VhZ2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgd2FybignWW91IGFyZSBzZXR0aW5nIHRoZSB2YWxpZGF0b3IgbG9jYWxlIHRvIGEgbG9jYWxlIHRoYXQgaXMgbm90IGRlZmluZWQgaW4gdGhlIGRpY2l0aW9uYXJ5LiBFbmdsaXNoIG1lc3NhZ2VzIG1heSBzdGlsbCBiZSBnZW5lcmF0ZWQuJyk7XG4gIH1cblxuICBMT0NBTEUgPSBsYW5ndWFnZTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgb3BlcmF0aW5nIG1vZGUgZm9yIGFsbCBuZXdseSBjcmVhdGVkIHZhbGlkYXRvcnMuXG4gKiBzdHJpY3RNb2RlID0gdHJ1ZTogVmFsdWVzIHdpdGhvdXQgYSBydWxlIGFyZSBpbnZhbGlkIGFuZCBjYXVzZSBmYWlsdXJlLlxuICogc3RyaWN0TW9kZSA9IGZhbHNlOiBWYWx1ZXMgd2l0aG91dCBhIHJ1bGUgYXJlIHZhbGlkIGFuZCBhcmUgc2tpcHBlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0TW9kZS5cbiAqL1xuVmFsaWRhdG9yLnNldFN0cmljdE1vZGUgPSBmdW5jdGlvbiBzZXRTdHJpY3RNb2RlIChzdHJpY3RNb2RlKSB7XG4gICAgaWYgKCBzdHJpY3RNb2RlID09PSB2b2lkIDAgKSBzdHJpY3RNb2RlID0gdHJ1ZTtcblxuICBTVFJJQ1RfTU9ERSA9IHN0cmljdE1vZGU7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGRpY2l0aW9uYXJ5LCBvdmVyd3JpdGluZyBleGlzdGluZyB2YWx1ZXMgYW5kIGFkZGluZyBuZXcgb25lcy5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSBkYXRhIFRoZSBkaWN0aW9uYXJ5IG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkgPSBmdW5jdGlvbiB1cGRhdGVEaWN0aW9uYXJ5IChkYXRhKSB7XG4gIERJQ1RJT05BUlkubWVyZ2UoZGF0YSk7XG59O1xuXG5WYWxpZGF0b3IuYWRkTG9jYWxlID0gZnVuY3Rpb24gYWRkTG9jYWxlIChsb2NhbGUpIHtcbiAgaWYgKCEgbG9jYWxlLm5hbWUpIHtcbiAgICB3YXJuKCdZb3VyIGxvY2FsZSBtdXN0IGhhdmUgYSBuYW1lIHByb3BlcnR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy51cGRhdGVEaWN0aW9uYXJ5KCggb2JqID0ge30sIG9ialtsb2NhbGUubmFtZV0gPSBsb2NhbGUsIG9iaiApKTtcbiAgICB2YXIgb2JqO1xufTtcblxuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRMb2NhbGUgPSBmdW5jdGlvbiBhZGRMb2NhbGUgKGxvY2FsZSkge1xuICBWYWxpZGF0b3IuYWRkTG9jYWxlKGxvY2FsZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGZpZWxkcyB0byBiZSB2YWxpZGF0ZWQuXG4gKlxuICogQHBhcmFte29iamVjdH0gdmFsaWRhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH0gTm9ybWFsaXplZCBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZUZpZWxkcyA9IGZ1bmN0aW9uIF9jcmVhdGVGaWVsZHMgKHZhbGlkYXRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKCEgdmFsaWRhdGlvbnMpIHsgcmV0dXJuOyB9XG5cbiAgT2JqZWN0LmtleXModmFsaWRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHsgbmFtZTogZmllbGQsIHJ1bGVzOiB2YWxpZGF0aW9uc1tmaWVsZF0gfSk7XG4gICAgdGhpcyQxLmF0dGFjaChvcHRpb25zKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERhdGUgcnVsZXMgbmVlZCB0aGUgZXhpc3RhbmNlIG9mIGEgZm9ybWF0LCBzbyBkYXRlX2Zvcm1hdCBtdXN0IGJlIHN1cHBsaWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHJ1bGUgbmFtZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbGlkYXRpb25zIHRoZSBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIF9nZXREYXRlRm9ybWF0ICh2YWxpZGF0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gbnVsbDtcbiAgaWYgKHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gdmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXRbMF07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IHx8IHRoaXMuZGljdGlvbmFyeS5nZXREYXRlRm9ybWF0KHRoaXMubG9jYWxlKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgcnVsZSBpcyBhIGRhdGUgcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faXNBRGF0ZVJ1bGUgPSBmdW5jdGlvbiBfaXNBRGF0ZVJ1bGUgKHJ1bGUpIHtcbiAgcmV0dXJuICEhIH5bJ2FmdGVyJywgJ2JlZm9yZScsICdkYXRlX2JldHdlZW4nLCAnZGF0ZV9mb3JtYXQnXS5pbmRleE9mKHJ1bGUpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKlxuICogQHBhcmFte0ZpZWxkfSBmaWVsZCBUaGUgZmllbGQgb2JqZWN0LlxuICogQHBhcmFte29iamVjdH0gcnVsZSBOb3JtYWxpemVkIHJ1bGUgb2JqZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgQWRkaXRpb25hbCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9mb3JtYXRFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiBfZm9ybWF0RXJyb3JNZXNzYWdlIChmaWVsZCwgcnVsZSwgZGF0YSkge1xuICAgIGlmICggZGF0YSA9PT0gdm9pZCAwICkgZGF0YSA9IHt9O1xuXG4gIHZhciBuYW1lID0gdGhpcy5fZ2V0RmllbGREaXNwbGF5TmFtZShmaWVsZCk7XG4gIHZhciBwYXJhbXMgPSB0aGlzLl9nZXRMb2NhbGl6ZWRQYXJhbXMocnVsZSk7XG4gIC8vIERlZmF1bHRzIHRvIGVuZ2xpc2ggbWVzc2FnZS5cbiAgaWYgKCEgdGhpcy5kaWN0aW9uYXJ5Lmhhc0xvY2FsZShMT0NBTEUpKSB7XG4gICAgdmFyIG1zZyQxID0gdGhpcy5kaWN0aW9uYXJ5LmdldEZpZWxkTWVzc2FnZSgnZW4nLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gICAgcmV0dXJuIGlzQ2FsbGFibGUobXNnJDEpID8gbXNnJDEobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZyQxO1xuICB9XG5cbiAgdmFyIG1zZyA9IHRoaXMuZGljdGlvbmFyeS5nZXRGaWVsZE1lc3NhZ2UoTE9DQUxFLCBmaWVsZC5uYW1lLCBydWxlLm5hbWUpO1xuXG4gIHJldHVybiBpc0NhbGxhYmxlKG1zZykgPyBtc2cobmFtZSwgcGFyYW1zLCBkYXRhKSA6IG1zZztcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhlIHJ1bGUgKG1haW5seSBmb3IgdGFyZ2V0IGZpZWxkcykuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldExvY2FsaXplZFBhcmFtcyA9IGZ1bmN0aW9uIF9nZXRMb2NhbGl6ZWRQYXJhbXMgKHJ1bGUpIHtcbiAgaWYgKH4gWydhZnRlcicsICdiZWZvcmUnLCAnY29uZmlybWVkJ10uaW5kZXhPZihydWxlLm5hbWUpICYmIHJ1bGUucGFyYW1zICYmIHJ1bGUucGFyYW1zWzBdKSB7XG4gICAgaWYgKHJ1bGUucGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBbdGhpcy5kaWN0aW9uYXJ5LmdldEF0dHJpYnV0ZShMT0NBTEUsIHJ1bGUucGFyYW1zWzBdLCBydWxlLnBhcmFtc1swXSksIHJ1bGUucGFyYW1zWzFdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgcnVsZS5wYXJhbXNbMF0sIHJ1bGUucGFyYW1zWzBdKV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ1bGUucGFyYW1zO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyBhbiBhcHByb3BpYXRlIGRpc3BsYXkgbmFtZSwgZmlyc3QgY2hlY2tpbmcgJ2RhdGEtYXMnIG9yIHRoZSByZWdpc3RlcmVkICdwcmV0dHlOYW1lJ1xuICogVGhlbiB0aGUgZGljdGlvbmFyeSwgdGhlbiBmYWxsc2JhY2sgdG8gZmllbGQgbmFtZS5cbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkIFRoZSBmaWVsZCBvYmplY3QuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBuYW1lIHRvIGJlIHVzZWQgaW4gdGhlIGVycm9ycy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RmllbGREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIF9nZXRGaWVsZERpc3BsYXlOYW1lIChmaWVsZCkge1xuICByZXR1cm4gZmllbGQuZGlzcGxheU5hbWUgfHwgdGhpcy5kaWN0aW9uYXJ5LmdldEF0dHJpYnV0ZShMT0NBTEUsIGZpZWxkLm5hbWUsIGZpZWxkLm5hbWUpO1xufTtcblxuLyoqXG4gKiBUZXN0cyBhIHNpbmdsZSBpbnB1dCB2YWx1ZSBhZ2FpbnN0IGEgcnVsZS5cbiAqXG4gKiBAcGFyYW17RmllbGR9IGZpZWxkIFRoZSBmaWVsZCB1bmRlciB2YWxpZGF0aW9uLlxuICogQHBhcmFteyp9IHZhbHVldGhlIHZhbHVlIG9mIHRoZSBmaWVsZC5cbiAqIEBwYXJhbXtvYmplY3R9IHJ1bGUgdGhlIHJ1bGUgb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBpdCBwYXNzZXMgdGhlIGNoZWNrLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl90ZXN0ID0gZnVuY3Rpb24gX3Rlc3QgKGZpZWxkLCB2YWx1ZSwgcnVsZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciB2YWxpZGF0b3IgPSBSdWxlc1tydWxlLm5hbWVdO1xuICB2YXIgcGFyYW1zID0gQXJyYXkuaXNBcnJheShydWxlLnBhcmFtcykgPyB0b0FycmF5KHJ1bGUucGFyYW1zKSA6IFtdO1xuICBpZiAoISB2YWxpZGF0b3IgfHwgdHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIk5vIHN1Y2ggdmFsaWRhdG9yICdcIiArIChydWxlLm5hbWUpICsgXCInIGV4aXN0cy5cIikpO1xuICB9XG5cbiAgLy8gaGFzIGZpZWxkIGRlcGVuZW5jaWVzXG4gIGlmICgvKGNvbmZpcm1lZHxhZnRlcnxiZWZvcmUpLy50ZXN0KHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZmluZChmaWVsZC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09IHJ1bGUubmFtZTsgfSk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtcyA9IFt0YXJnZXQuZmllbGQudmFsdWUsIHBhcmFtc1sxXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBbdGFyZ2V0LmZpZWxkLnZhbHVlXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZS5uYW1lID09PSAncmVxdWlyZWQnICYmIGZpZWxkLnJlamVjdHNGYWxzZSkge1xuICAgIC8vIGludmFsaWRhdGUgZmFsc2UgaWYgbm8gYXJncyB3ZXJlIHNwZWNpZmllZCBhbmQgdGhlIGZpZWxkIHJlamVjdHMgZmFsc2UgYnkgZGVmYXVsdC5cbiAgICBwYXJhbXMgPSBwYXJhbXMubGVuZ3RoID8gcGFyYW1zIDogW3RydWVdO1xuICB9XG5cbiAgaWYgKGRhdGUuaW5zdGFsbGVkICYmIHRoaXMuX2lzQURhdGVSdWxlKHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMuX2dldERhdGVGb3JtYXQoZmllbGQucnVsZXMpO1xuICAgIGlmIChydWxlLm5hbWUgIT09ICdkYXRlX2Zvcm1hdCcpIHtcbiAgICAgIHBhcmFtcy5wdXNoKGRhdGVGb3JtYXQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSB2YWxpZGF0b3IodmFsdWUsIHBhcmFtcyk7XG5cbiAgLy8gSWYgaXQgaXMgYSBwcm9taXNlLlxuICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIGFsbFZhbGlkID0gdHJ1ZTtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGFsbFZhbGlkID0gdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiAoaXNPYmplY3QodCkgPyB0LnZhbGlkIDogdCk7IH0pO1xuICAgICAgfSBlbHNlIHsgLy8gSXMgYSBzaW5nbGUgb2JqZWN0L2Jvb2xlYW4uXG4gICAgICAgIGFsbFZhbGlkID0gaXNPYmplY3QodmFsdWVzKSA/IHZhbHVlcy52YWxpZCA6IHZhbHVlcztcbiAgICAgICAgZGF0YSA9IHZhbHVlcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoISBhbGxWYWxpZCkge1xuICAgICAgICB0aGlzJDEuZXJyb3JzLmFkZCh7XG4gICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIG1zZzogdGhpcyQxLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIGRhdGEpLFxuICAgICAgICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICAgICAgICBzY29wZTogZmllbGQuc2NvcGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxWYWxpZDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghIGlzT2JqZWN0KHJlc3VsdCkpIHtcbiAgICByZXN1bHQgPSB7IHZhbGlkOiByZXN1bHQsIGRhdGE6IHt9IH07XG4gIH1cblxuICBpZiAoISByZXN1bHQudmFsaWQpIHtcbiAgICB0aGlzLmVycm9ycy5hZGQoe1xuICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICBtc2c6IHRoaXMuX2Zvcm1hdEVycm9yTWVzc2FnZShmaWVsZCwgcnVsZSwgcmVzdWx0LmRhdGEpLFxuICAgICAgcnVsZTogcnVsZS5uYW1lLFxuICAgICAgc2NvcGU6IGZpZWxkLnNjb3BlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnZhbGlkO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBmaWVsZCB0byBiZSB2YWxpZGF0ZWQuXG4gKlxuICogQHBhcmFte0ZpZWxkfE9iamVjdH0gbmFtZSBUaGUgZmllbGQgbmFtZS5cbiAqIEByZXR1cm4ge0ZpZWxkfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAoZmllbGQpIHtcbiAgLy8gZGVwcmVjYXRlOiBoYW5kbGUgb2xkIHNpZ25hdHVyZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZmllbGQgPSBhc3NpZ24oe30sIHtcbiAgICAgIG5hbWU6IGFyZ3VtZW50c1swXSxcbiAgICAgIHJ1bGVzOiBhcmd1bWVudHNbMV1cbiAgICB9LCBhcmd1bWVudHNbMl0gfHwgeyB2bTogeyAkdmFsaWRhdG9yOiB0aGlzIH0gfSk7XG4gIH1cblxuICBpZiAoIShmaWVsZCBpbnN0YW5jZW9mIEZpZWxkKSkge1xuICAgIGZpZWxkID0gbmV3IEZpZWxkKGZpZWxkLmVsIHx8IG51bGwsIGZpZWxkKTtcbiAgfVxuXG4gIHRoaXMuZmllbGRzLnB1c2goZmllbGQpO1xuICAvLyB2YWxpZGF0ZSBpZiBpbml0aWFsLlxuICBpZiAoZmllbGQuaW5pdGlhbCkge1xuICAgIHRoaXMudmFsaWRhdGUoKFwiI1wiICsgKGZpZWxkLmlkKSksIGZpZWxkLnZhbHVlKTtcbiAgfVxuICBpZiAoIWZpZWxkLnNjb3BlKSB7XG4gICAgdGhpcy5maWVsZEJhZyA9IGFzc2lnbih7fSwgdGhpcy5maWVsZEJhZywgKCBvYmogPSB7fSwgb2JqWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqICkpO1xuICAgICAgdmFyIG9iajtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICB2YXIgc2NvcGVPYmogPSBhc3NpZ24oe30sIHRoaXMuZmllbGRCYWdbKFwiJFwiICsgKGZpZWxkLnNjb3BlKSldIHx8IHt9LCAoIG9iaiQxID0ge30sIG9iaiQxWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqJDEgKSk7XG4gICAgdmFyIG9iaiQxO1xuICB0aGlzLmZpZWxkQmFnID0gYXNzaWduKHt9LCB0aGlzLmZpZWxkQmFnLCAoIG9iaiQyID0ge30sIG9iaiQyWyhcIiRcIiArIChmaWVsZC5zY29wZSkpXSA9IHNjb3BlT2JqLCBvYmokMiApKTtcbiAgICB2YXIgb2JqJDI7XG5cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBmbGFncyBvbiBhIGZpZWxkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gZmxhZ3NcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5mbGFnID0gZnVuY3Rpb24gZmxhZyAobmFtZSwgZmxhZ3MpIHtcbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUpO1xuICBpZiAoISBmaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGZpZWxkLmZsYWdzKS5mb3JFYWNoKGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgZmllbGQuZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXSAhPT0gdW5kZWZpbmVkID8gZmxhZ3NbZmxhZ10gOiBmaWVsZC5mbGFnc1tmbGFnXTtcbiAgfSk7XG4gIGlmIChmaWVsZC5jbGFzc2VzKSB7XG4gICAgZmllbGQudXBkYXRlQ2xhc3NlcygpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBmaWVsZCBmcm9tIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHBhcmFte1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHNjb3BlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCAobmFtZSwgc2NvcGUpIHtcbiAgdmFyIGZpZWxkID0gbmFtZSBpbnN0YW5jZW9mIEZpZWxkID8gbmFtZSA6IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmIChmaWVsZCkge1xuICAgIGZpZWxkLmRlc3Ryb3koKTtcbiAgICB0aGlzLmVycm9ycy5yZW1vdmVCeUlkKGZpZWxkLmlkKTtcbiAgICB0aGlzLmZpZWxkcy5yZW1vdmUoZmllbGQpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgYSBjdXN0b20gdmFsaWRhdG9yIHRvIHRoZSBsaXN0IG9mIHZhbGlkYXRpb24gcnVsZXMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFte29iamVjdHxmdW5jdGlvbn0gdmFsaWRhdG9yIFRoZSB2YWxpZGF0b3Igb2JqZWN0L2Z1bmN0aW9uLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIFZhbGlkYXRvci5leHRlbmQobmFtZSwgdmFsaWRhdG9yKTtcbn07XG5cbi8qKlxuICogSnVzdCBhbiBhbGlhcyB0byB0aGUgc3RhdGljIG1ldGhvZCBmb3IgY29udmllbmVjZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzID0gZnVuY3Rpb24gaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyAobW9tZW50KSB7XG4gIFZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzKG1vbWVudCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IvcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgVmFsaWRhdG9yLnJlbW92ZShuYW1lKTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsaWRhdG9yIGN1cnJlbnQgbGFuZ2F1Z2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIGxvY2FsZSBvciBsYW5ndWFnZSBpZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUgKGxhbmd1YWdlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoISB0aGlzLmRpY3Rpb25hcnkuaGFzTG9jYWxlKGxhbmd1YWdlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdhcm4oJ1lvdSBhcmUgc2V0dGluZyB0aGUgdmFsaWRhdG9yIGxvY2FsZSB0byBhIGxvY2FsZSB0aGF0IGlzIG5vdCBkZWZpbmVkIGluIHRoZSBkaWNpdGlvbmFyeS4gRW5nbGlzaCBtZXNzYWdlcyBtYXkgc3RpbGwgYmUgZ2VuZXJhdGVkLicpO1xuICB9XG5cbiAgTE9DQUxFID0gbGFuZ3VhZ2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1lc3NhZ2VzIGRpY2l0aW9uYXJ5LCBvdmVyd3JpdGluZyBleGlzdGluZyB2YWx1ZXMgYW5kIGFkZGluZyBuZXcgb25lcy5cbiAqXG4gKiBAcGFyYW17b2JqZWN0fSBkYXRhIFRoZSBtZXNzYWdlcyBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudXBkYXRlRGljdGlvbmFyeSA9IGZ1bmN0aW9uIHVwZGF0ZURpY3Rpb25hcnkgKGRhdGEpIHtcbiAgVmFsaWRhdG9yLnVwZGF0ZURpY3Rpb25hcnkoZGF0YSk7XG59O1xuXG4vKipcbiAqIFRyaWVzIGRpZmZlcmVudCBzdHJhdGVnaWVzIHRvIGZpbmQgYSBmaWVsZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGVcbiAqIEByZXR1cm4ge0ZpZWxkfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9yZXNvbHZlRmllbGQgPSBmdW5jdGlvbiBfcmVzb2x2ZUZpZWxkIChuYW1lLCBzY29wZSkge1xuICBpZiAoc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lWzBdID09PSAnIycpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IGlkOiBuYW1lLnNsaWNlKDEpIH0pO1xuICB9XG5cbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IHBhcnRzWzFdLCBzY29wZTogcGFydHNbMF0gfSk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBuYW1lLCBzY29wZTogbnVsbCB9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyB3aGVuIGEgZmllbGQgaXMgbm90IGZvdW5kIGRlcGVuZGluZyBvbiB0aGUgc3RyaWN0IGZsYWcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9oYW5kbGVGaWVsZE5vdEZvdW5kID0gZnVuY3Rpb24gX2hhbmRsZUZpZWxkTm90Rm91bmQgKG5hbWUsIHNjb3BlKSB7XG4gIGlmICghIHRoaXMuc3RyaWN0KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICB2YXIgZnVsbE5hbWUgPSBzY29wZSA/IG5hbWUgOiAoXCJcIiArIChzY29wZSA/IHNjb3BlICsgJy4nIDogJycpICsgbmFtZSk7XG4gIHRocm93IGNyZWF0ZUVycm9yKFxuICAgIChcIlZhbGlkYXRpbmcgYSBub24tZXhpc3RhbnQgZmllbGQ6IFxcXCJcIiArIGZ1bGxOYW1lICsgXCJcXFwiLiBVc2UgXFxcImF0dGFjaCgpXFxcIiBmaXJzdC5cIilcbiAgKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSB2YWxpZGF0aW9uIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtGaWVsZH0gZmllbGRcbiAqIEBwYXJhbSB7UHJvbWlzZX0gdmFsdWVcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGUgPSBmdW5jdGlvbiBfdmFsaWRhdGUgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIGZpZWxkLmlzUmVxdWlyZWQgJiYgfltudWxsLCB1bmRlZmluZWQsICcnXS5pbmRleE9mKHZhbHVlKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgdmFyIGlzRXhpdEVhcmx5ID0gZmFsc2U7XG4gIC8vIHVzZSBvZiAnLnNvbWUoKScgaXMgdG8gYnJlYWsgaXRlcmF0aW9uIGluIG1pZGRsZSBieSByZXR1cm5pbmcgdHJ1ZVxuICBPYmplY3Qua2V5cyhmaWVsZC5ydWxlcykuc29tZShmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzJDEuX3Rlc3QoXG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgeyBuYW1lOiBydWxlLCBwYXJhbXM6IGZpZWxkLnJ1bGVzW3J1bGVdIH1cbiAgICApO1xuXG4gICAgaWYgKGlzQ2FsbGFibGUocmVzdWx0LnRoZW4pKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0aGlzJDEuZmFzdEV4aXQgJiYgIXJlc3VsdCkge1xuICAgICAgaXNFeGl0RWFybHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0QXNQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdEFzUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRXhpdEVhcmx5O1xuICB9KTtcblxuICBpZiAoaXNFeGl0RWFybHkpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7IH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHZhciB2YWxpZCA9IHZhbHVlcy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBhIHJlZ2lzdGVyZWQgZmllbGQgdmFsaWRhdGlvbnMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSB0aGUgZmllbGQgbmFtZS5cbiAqIEBwYXJhbXsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBzY29wZSBvZiB0aGUgZmllbGQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUgKG5hbWUsIHZhbHVlLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIGFsbC5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVNjb3BlcygpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgc2NvcGVsZXNzIGZpZWxkcy5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgYXJndW1lbnRzWzBdID09PSAnKicpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUFsbCgpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgYSBzY29wZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycgJiYgL14oLispXFwuXFwqJC8udGVzdChhcmd1bWVudHNbMF0pKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhcmd1bWVudHNbMF0ubWF0Y2goL14oLispXFwuXFwqJC8pWzFdO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKG1hdGNoZWQpO1xuICB9XG5cbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUsIHNjb3BlKTtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLl9oYW5kbGVGaWVsZE5vdEZvdW5kKG5hbWUsIHNjb3BlKTtcbiAgfVxuICB0aGlzLmVycm9ycy5yZW1vdmVCeUlkKGZpZWxkLmlkKTtcbiAgaWYgKGZpZWxkLmlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG4gIGZpZWxkLmZsYWdzLnBlbmRpbmcgPSB0cnVlO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbHVlID0gZmllbGQudmFsdWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoZmllbGQsIHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBmaWVsZC5mbGFncy5wZW5kaW5nID0gZmFsc2U7XG4gICAgZmllbGQuZmxhZ3MudmFsaWQgPSByZXN1bHQ7XG4gICAgZmllbGQuZmxhZ3MuaW52YWxpZCA9ICFyZXN1bHQ7XG4gICAgZmllbGQuZmxhZ3MudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICBmaWVsZC51cGRhdGVBcmlhQXR0cnMoKTtcbiAgICBmaWVsZC51cGRhdGVDdXN0b21WYWxpZGl0eSgpO1xuICAgIGZpZWxkLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXVzZXMgdGhlIHZhbGlkYXRvci5cbiAqXG4gKiBAcmV0dXJuIHtWYWxpZGF0b3J9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVzdW1lcyB0aGUgdmFsaWRhdG9yLlxuICpcbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUgKCkge1xuICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgZWFjaCB2YWx1ZSBhZ2FpbnN0IHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkIHZhbGlkYXRpb25zLlxuICogQHBhcmFte09iamVjdHxTdHJpbmd9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGJlIHZhbGlkYXRlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHZhbGlkYXRpb24gcmVzdWx0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlQWxsID0gZnVuY3Rpb24gdmFsaWRhdGVBbGwgKHZhbHVlcykge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBtYXRjaGVyID0gbnVsbDtcbiAgdmFyIHByb3ZpZGVkVmFsdWVzID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgbWF0Y2hlciA9IHsgc2NvcGU6IHZhbHVlcyB9O1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlcykpIHtcbiAgICBtYXRjaGVyID0gT2JqZWN0LmtleXModmFsdWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHsgbmFtZToga2V5LCBzY29wZTogYXJndW1lbnRzJDFbMV0gfHwgbnVsbCB9O1xuICAgIH0pO1xuICAgIHByb3ZpZGVkVmFsdWVzID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgbWF0Y2hlciA9IHsgc2NvcGU6IG51bGwgfTsgLy8gZ2xvYmFsIHNjb3BlLlxuICB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMuZmlsdGVyKG1hdGNoZXIpLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBwcm92aWRlZFZhbHVlcyA/IHZhbHVlc1tmaWVsZC5uYW1lXSA6IGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHNjb3Blcy5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQWxsIHByb21pc2VzIHJlc3VsdGVkIGZyb20gZWFjaCBzY29wZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVNjb3BlcyA9IGZ1bmN0aW9uIHZhbGlkYXRlU2NvcGVzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBwcm9taXNlcyA9IHRoaXMuZmllbGRzLm1hcChmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIHRoaXMkMS52YWxpZGF0ZShcbiAgICAoXCIjXCIgKyAoZmllbGQuaWQpKSxcbiAgICBmaWVsZC52YWx1ZVxuICApOyB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHsgcmV0dXJuIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IsIHN0YXRpY0FjY2Vzc29ycyApO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHBhcmVudCB2YWxpZGF0b3IgaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpbmplY3Rpb25zXG4gKi9cbnZhciByZXF1ZXN0c1ZhbGlkYXRvciA9IGZ1bmN0aW9uIChpbmplY3Rpb25zKSB7XG4gIGlmICghIGluamVjdGlvbnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3Rpb25zKSAmJiB+aW5qZWN0aW9ucy5pbmRleE9mKCckdmFsaWRhdG9yJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc09iamVjdChpbmplY3Rpb25zKSAmJiBpbmplY3Rpb25zLiR2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICh2bSwgb3B0aW9ucykgeyByZXR1cm4gbmV3IFZhbGlkYXRvcihudWxsLCB7XG4gIGluaXQ6IGZhbHNlLFxuICB2bTogdm0sXG4gIGZhc3RFeGl0OiBvcHRpb25zLmZhc3RFeGl0XG59KTsgfTtcblxudmFyIG1ha2VNaXhpbiA9IGZ1bmN0aW9uIChWdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdmFyIG1peGluID0ge307XG4gIG1peGluLnByb3ZpZGUgPSBmdW5jdGlvbiBwcm92aWRlc1ZhbGlkYXRvciAoKSB7XG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJHZhbGlkYXRvcjogdGhpcy4kdmFsaWRhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfTtcblxuICBtaXhpbi5iZWZvcmVDcmVhdGUgPSBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgIC8vIGlmIGl0cyBhIHJvb3QgaW5zdGFuY2UsIGluamVjdCBhbnl3YXlzLCBvciBpZiBpdCByZXF1ZXN0ZWQgYSBuZXcgaW5zdGFuY2UuXG4gICAgaWYgKHRoaXMuJG9wdGlvbnMuJHZhbGlkYXRlcyB8fCAhdGhpcy4kcGFyZW50KSB7XG4gICAgICB0aGlzLiR2YWxpZGF0b3IgPSBjcmVhdGVWYWxpZGF0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3RlZCA9IHJlcXVlc3RzVmFsaWRhdG9yKHRoaXMuJG9wdGlvbnMuaW5qZWN0KTtcblxuICAgIC8vIGlmIGF1dG9tYXRpYyBpbmplY3Rpb24gaXMgZW5hYmxlZCBhbmQgbm8gaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAgICBpZiAoISB0aGlzLiR2YWxpZGF0b3IgJiYgb3B0aW9ucy5pbmplY3QgJiYgIXJlcXVlc3RlZCkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGRvbid0IGluamVjdCBlcnJvcnMgb3IgZmllbGRCYWcgYXMgbm8gdmFsaWRhdG9yIHdhcyByZXNvbHZlZC5cbiAgICBpZiAoISByZXF1ZXN0ZWQgJiYgISB0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBpcyBhIHZhbGlkYXRvciBidXQgaXQgaXNuJ3QgaW5qZWN0ZWQsIG1hcmsgYXMgcmVhY3RpdmUuXG4gICAgaWYgKCEgcmVxdWVzdGVkICYmIHRoaXMuJHZhbGlkYXRvcikge1xuICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcy4kdmFsaWRhdG9yLCAnZXJyb3JzJywgdGhpcy4kdmFsaWRhdG9yLmVycm9ycyk7XG4gICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLiR2YWxpZGF0b3IsICdmaWVsZEJhZycsIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZyk7XG4gICAgfVxuXG4gICAgaWYgKCEgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRbb3B0aW9ucy5lcnJvckJhZ05hbWUgfHwgJ2Vycm9ycyddID0gZnVuY3Rpb24gZXJyb3JCYWdHZXR0ZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5lcnJvcnM7XG4gICAgfTtcbiAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkW29wdGlvbnMuZmllbGRzQmFnTmFtZSB8fCAnZmllbGRzJ10gPSBmdW5jdGlvbiBmaWVsZEJhZ0dldHRlciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnO1xuICAgIH07XG4gIH07XG5cbiAgbWl4aW4uYmVmb3JlRGVzdHJveSA9IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIC8vIG1hcmsgdGhlIHZhbGlkYXRvciBwYXVzZWQgdG8gcHJldmVudCBkZWxheWVkIHZhbGlkYXRpb24uXG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvciAmJiB0aGlzLiR2YWxpZGF0b3Iub3duZXJJZCA9PT0gdGhpcy5fdWlkICYmIGlzQ2FsbGFibGUodGhpcy4kdmFsaWRhdG9yLnBhdXNlKSkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBtaXhpbjtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgZGVsYXk6IDAsXG4gIGVycm9yQmFnTmFtZTogJ2Vycm9ycycsXG4gIGRpY3Rpb25hcnk6IG51bGwsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZmllbGRzQmFnTmFtZTogJ2ZpZWxkcycsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICBjbGFzc05hbWVzOiB1bmRlZmluZWQsXG4gIGV2ZW50czogJ2lucHV0fGJsdXInLFxuICBpbmplY3Q6IHRydWUsXG4gIGZhc3RFeGl0OiB0cnVlLFxuICBhcmlhOiB0cnVlLFxuICB2YWxpZGl0eTogdHJ1ZVxufTtcblxuLyoqXG4gKiBcbiAqIFxuICogRmluZHMgdGhlIHJlcXVlc3RlZCBmaWVsZCBieSBpZCBmcm9tIHRoZSBjb250ZXh0IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcmV0dXJuIHtGaWVsZHxudWxsfVxuICovXG52YXIgZmluZEZpZWxkID0gZnVuY3Rpb24gKGVsLCBjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCB8fCAhY29udGV4dC4kdmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dC4kdmFsaWRhdG9yLmZpZWxkcy5maW5kKHsgaWQ6IGdldERhdGFBdHRyaWJ1dGUoZWwsICdpZCcpIH0pO1xufTtcblxudmFyIGNyZWF0ZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciB2YWxpZGF0b3IgPSB2bm9kZS5jb250ZXh0LiR2YWxpZGF0b3I7XG4gICAgICBpZiAoISB2YWxpZGF0b3IpIHtcbiAgICAgICAgd2FybihcIk5vIHZhbGlkYXRvciBpbnN0YW5jZSBpcyBwcmVzZW50IG9uIHZtLCBkaWQgeW91IGZvcmdldCB0byBpbmplY3QgJyR2YWxpZGF0b3InP1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkT3B0aW9ucyA9IEdlbmVyYXRvci5nZW5lcmF0ZShlbCwgYmluZGluZywgdm5vZGUsIG9wdGlvbnMpO1xuICAgICAgdmFsaWRhdG9yLmF0dGFjaChmaWVsZE9wdGlvbnMpO1xuICAgIH0sXG4gICAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG4gICAgICB2YXIgc2NvcGUgPSBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG5cbiAgICAgIC8vIHNraXAgaWYgc2NvcGUgaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAoIWZpZWxkIHx8IHNjb3BlID09PSBmaWVsZC5zY29wZSkgeyByZXR1cm47IH1cblxuICAgICAgLy8gb25seSB1cGRhdGUgc2NvcGUuXG4gICAgICBmaWVsZC51cGRhdGUoeyBzY29wZTogc2NvcGUgfSk7XG5cbiAgICAgIC8vIGFsbG93cyB0aGUgZmllbGQgdG8gcmUtZXZhbHVhdGVkIG9uY2UgbW9yZSBpbiB0aGUgdXBkYXRlIGhvb2suXG4gICAgICBmaWVsZC51cGRhdGVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkbyB1bmVjY2Vzc2FyeSB3b3JrIGlmIG5vIGltcG9ydGFudCBjaGFuZ2Ugd2FzIGRvbmUuXG4gICAgICBpZiAoIWZpZWxkIHx8IChmaWVsZC51cGRhdGVkICYmIGlzRXF1YWwoYmluZGluZy52YWx1ZSwgYmluZGluZy5vbGRWYWx1ZSkpKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjb3BlID0gR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgdmFyIHJ1bGVzID0gR2VuZXJhdG9yLnJlc29sdmVSdWxlcyhlbCwgYmluZGluZyk7XG5cbiAgICAgIGZpZWxkLnVwZGF0ZSh7XG4gICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgcnVsZXM6IHJ1bGVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChlbCwgYmluZGluZywgcmVmKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHJlZi5jb250ZXh0O1xuXG4gICAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIGNvbnRleHQpO1xuICAgICAgaWYgKCFmaWVsZCkgeyByZXR1cm47IH1cblxuICAgICAgY29udGV4dC4kdmFsaWRhdG9yLmRldGFjaChmaWVsZCk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICBpZiAofmN1cnIuaW5kZXhPZignLicpKSB7XG4gICAgICAgIHByZXZbY3Vyci5zcGxpdCgnLicpWzFdXSA9IGN1cnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2W2N1cnJdID0gY3VycjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbi8qKlxuICogTWFwcyBmaWVsZHMgdG8gY29tcHV0ZWQgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBmaWVsZHNcbiAqL1xudmFyIG1hcEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemUoZmllbGRzKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgIHZhciBmaWVsZCA9IG5vcm1hbGl6ZWRbY3Vycl07XG4gICAgcHJldltjdXJyXSA9IGZ1bmN0aW9uIG1hcHBlZEZpZWxkICgpIHtcbiAgICAgIGlmICh0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWdbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWdbZmllbGRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSBmaWVsZC5pbmRleE9mKCcuJyk7XG4gICAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICAgIHZhciBzY29wZSA9IHJlZlswXTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzFdO1xuXG4gICAgICByZXR1cm4gZ2V0UGF0aCgoXCIkXCIgKyBzY29wZSArIFwiLlwiICsgbmFtZSksIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZywge30pO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwge30pO1xufTtcblxudmFyIFZ1ZTtcblxudmFyIGluc3RhbGwgPSBmdW5jdGlvbiAoX1Z1ZSwgb3B0aW9ucykge1xuICBpZiAoVnVlKSB7XG4gICAgd2FybignYWxyZWFkeSBpbnN0YWxsZWQsIFZ1ZS51c2UoVmVlVmFsaWRhdGUpIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFZ1ZSA9IF9WdWU7XG4gIHZhciBjb25maWckJDEgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG4gIGlmIChjb25maWckJDEuZGljdGlvbmFyeSkge1xuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGNvbmZpZyQkMS5kaWN0aW9uYXJ5KTtcbiAgfVxuXG4gIFZhbGlkYXRvci5zZXRMb2NhbGUoY29uZmlnJCQxLmxvY2FsZSk7XG4gIFZhbGlkYXRvci5zZXRTdHJpY3RNb2RlKGNvbmZpZyQkMS5zdHJpY3QpO1xuXG4gIFZ1ZS5taXhpbihtYWtlTWl4aW4oVnVlLCBjb25maWckJDEpKTtcbiAgVnVlLmRpcmVjdGl2ZSgndmFsaWRhdGUnLCBjcmVhdGVEaXJlY3RpdmUoY29uZmlnJCQxKSk7XG59O1xuXG52YXIgaW5kZXggPSB7XG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIG1hcEZpZWxkczogbWFwRmllbGRzLFxuICBWYWxpZGF0b3I6IFZhbGlkYXRvcixcbiAgRXJyb3JCYWc6IEVycm9yQmFnLFxuICBSdWxlczogUnVsZXMsXG4gIHZlcnNpb246ICcyLjAuMC1yYy4xMydcbn07XG5cbnJldHVybiBpbmRleDtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3ZlZS12YWxpZGF0ZS9kaXN0L3ZlZS12YWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1jb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLTQwNC1ncmlkXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kX19zZWN0aW9uXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWhlYWRpbmctNDA0XCJcbiAgfSwgW192bS5fdihcIk9vcHMhXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlYXJjaC1mb3JtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMFwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIixcbiAgICAgIFwiaW5saW5lXCI6IGZhbHNlXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0TWFhZiBrYW1pIHRpZGFrIG1lbmVtdWthbiBhcGEgeWFuZyBrYW11IGNhcmkgXCIpLCBfYygnYnInKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3QtZm91bmRfX3NlY3Rpb25cIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWltYWdlLXJvYm90c1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiByZXF1aXJlKFwiLi4vLi4vaW1nLzQwNC9yb2JvdHMucG5nXCIpXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzdkZjMzMzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM3ZGYzMzMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTM3ZGYzMzMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZm9ybScsIHtcbiAgICBjbGFzczogWydjLXNlYXJjaCcsIHtcbiAgICAgICdjLXNlYXJjaC0taW5saW5lJzogX3ZtLmlubGluZSxcbiAgICAgICdpcy1zaG93bic6IF92bS5zaG93U2VhcmNoRm9ybVxuICAgIH1dLFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1zZWFyY2hfX2J1dHRvbiBpY29uaW0gaWNvbmltLXNlYXJjaC1jbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZVNlYXJjaFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1zZWFyY2hfX2Zvcm1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCdjaXR5JylcbiAgICB9XVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaFF1ZXJ5LmNpdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeS5jaXR5XCJcbiAgICB9XSxcbiAgICByZWY6IFwiaW5wdXRcIixcbiAgICBjbGFzczogWydvLWlucHV0JywgX3ZtLmlucHV0U2l6ZV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQaWxpaCBMb2thc2lcIixcbiAgICAgIFwibmFtZVwiOiBcImNpdHlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zZWFyY2hRdWVyeS5jaXR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5cHJlc3NcIjogX3ZtLnByZXZlbnRFbnRlcixcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udmFsaWRhdGUoJ2NpdHknLCAkZXZlbnQpXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc2VhcmNoUXVlcnkuY2l0eSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCdjaXR5JykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWZlZWRiYWNrXCJcbiAgfSwgW192bS5fdihcIldhamliIGRpaXNpLlwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczogWydjLWZvcm0tZ3JvdXAnLCB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCdrZXl3b3JkJylcbiAgICB9XVxuICB9LCBbX2MoJ2lucHV0LXN1Z2dlc3Rpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uc3VnZ2VzdGlvbk9wdGlvbnMuY2F0ZWdvcnlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Z2dlc3Rpb25DbGlja2VkXCI6IF92bS5zdWdnZXN0aW9uQ2xpY2tlZCxcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udmFsaWRhdGUoJ2tleXdvcmQnLCAkZXZlbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoUXVlcnkua2V5d29yZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5zZWFyY2hRdWVyeS5rZXl3b3JkID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeS5rZXl3b3JkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnZhbGlkYXRvci5lcnJvcnMuaGFzKCdrZXl3b3JkJykpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWZlZWRiYWNrXCJcbiAgfSwgW192bS5fdihcIldhamliIGRpaXNpLlwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBjbGFzczogWydvLWJ1dHRvbicsICdvLWJ1dHRvbi0tcHJpbWFyeScsICdvLWJ1dHRvbi1jdXN0b20nLCAnby1idXR0b24tLWJsb2NrJywgX3ZtLmJ0blNpemVdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgWyghX3ZtLmlubGluZSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCJZdWsswqBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3Ryb25nJywgW192bS5fdihcIkNhcmlcIiksICghX3ZtLmlubGluZSkgPyBfYygnc3BhbicsIFtfdm0uX3YoXCIhXCIpXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcmktaWNvbnNcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgfVxuICB9LCBbX2MoJ3N2ZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmaWxsXCI6IFwiIzAwMDAwMFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIyNFwiLFxuICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDI0IDI0XCIsXG4gICAgICBcIndpZHRoXCI6IFwiMjRcIixcbiAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgfVxuICB9LCBbX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0wIDBoMjR2MjRIMHpcIixcbiAgICAgIFwiZmlsbFwiOiBcIm5vbmVcIlxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNhcmktbGFnaVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImRpc3BsYXlcIjogXCJub25lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDYXJpIExhZ2lcIildKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVhMmE5NGE0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01YTJhOTRhNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTVhMmE5NGE0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlYXJjaC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICByZWY6IFwiY29udGFpbmVyXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbnB1dC1zdWdnZXN0aW9uXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5rZXl3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZFwiXG4gICAgfV0sXG4gICAgY2xhc3M6IF92bS5pbnB1dENsYXNzLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImlkXCI6IF92bS5nZXRPcHRpb25zLmlucHV0SWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5nZXRPcHRpb25zLnBsYWNlaG9sZGVyLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5rZXl3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiZm9jdXNcIjogX3ZtLm9uSW5wdXRGb2N1cyxcbiAgICAgIFwiaW5wdXRcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5rZXl3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSwgX3ZtLmZldGNoU3VnZ2VzdGlvbnNdLFxuICAgICAgXCJibHVyXCI6IF92bS5ibHVySGFuZGxlcixcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbmNoYW5nZSxcbiAgICAgIFwia2V5ZG93blwiOiBfdm0ua2V5ZG93bkhhbmRsZXJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dJbnB1dFN1Z2dlc3Rpb25zICYmICFfdm0uaXNFbXB0eVN1Z2dlc3Rpb25zKSA/IF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcInN1Z2dlc3Rpb25zXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiYy1pbnB1dC1zdWdnZXN0aW9uX19zdWdnZXN0aW9uc1wiXG4gIH0sIFtfdm0uX2woKF92bS5zdWdnZXN0aW9ucyksIGZ1bmN0aW9uKHN1Z2dlc3Rpb24pIHtcbiAgICByZXR1cm4gW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1pbnB1dC1zdWdnZXN0aW9uX19pdGVtXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCIsXG4gICAgICAgIFwiZGF0YS12YWxcIjogc3VnZ2VzdGlvbi50ZXh0XG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKHN1Z2dlc3Rpb24uaHRtbClcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zdWdnZXN0aW9uQ2xpY2tlZCgkZXZlbnQsIHN1Z2dlc3Rpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV1cbiAgfSldLCAyKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmI4OTk1YmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZiODk5NWJjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNmI4OTk1YmNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5wdXRTdWdnZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3JvYm90cy5wbmc/NGIwNGNmMjI1ZWQ3M2IyZDY5OGEzYzQ4MzM1MjBmNTlcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvaW1nLzQwNC9yb2JvdHMucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvaW1nLzQwNC9yb2JvdHMucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW5wdXRTdWdnZXN0aW9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4OTk1YmNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5wdXRTdWdnZXN0aW9uLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIElucHV0U3VnZ2VzdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmI4OTk1YmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02Yjg5OTViY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NlYXJjaC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVhMmE5NGE0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1NlYXJjaC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTZWFyY2gudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVhMmE5NGE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWEyYTk0YTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi80MDQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zN2RmMzMzMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi80MDQudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzLzQwNC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIDQwNC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzdkZjMzMzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zN2RmMzMzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9