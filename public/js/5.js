webpackJsonp([5,0],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZT85NjczIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlPzY4MGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWU/ZTVmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy80MDQvcm9ib3RzLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5wdXRTdWdnZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzLzQwNC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O2tCQStCQTt5Q0FDQTt1QkFDQTtBQUVBO0FBTEE7ZUFPQTtBQVJBOzBCQVNBOztxQkFFQTtrQ0FDQTt5QkFDQTs7MEJBRUE7OENBQ0E7b0NBQ0E7NkJBQ0E7eUJBQ0E7NEJBRUE7QUFQQTtxQkFTQTtBQWJBO0FBY0E7OztzQ0FFQTs0REFDQTsrQkFDQTtBQUNBO0FBQ0E7eUNBQ0E7Z0NBQ0E7QUFFQTtBQVRBOzswREFXQTs4Q0FDQTtBQUNBOzBDQUNBOytDQUNBO0FBQ0E7MENBQ0E7NkhBQ0E7QUFFQTtBQVZBOzsrQ0FZQTtjQUVBOzsyRkFDQTtvREFDQTtBQUVBOzs2Q0FDQTs4Q0FDQTtBQUNBO0FBQ0E7cUVB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjLWlucHV0LXN1Z2dlc3Rpb25cIiByZWY9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIDppZD1cImdldE9wdGlvbnMuaW5wdXRJZFwiXG4gICAgICAgICAgICAgICA6Y2xhc3M9XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImdldE9wdGlvbnMucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgIHYtbW9kZWw9XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgIEBmb2N1cz1cIm9uSW5wdXRGb2N1c1wiXG4gICAgICAgICAgICAgICBAaW5wdXQ9XCJmZXRjaFN1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgIEBibHVyPVwiYmx1ckhhbmRsZXJcIlxuICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uY2hhbmdlXCJcbiAgICAgICAgICAgICAgIEBrZXlkb3duPVwia2V5ZG93bkhhbmRsZXJcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwic2hvd0lucHV0U3VnZ2VzdGlvbnMgJiYgIWlzRW1wdHlTdWdnZXN0aW9uc1wiIGNsYXNzPVwiYy1pbnB1dC1zdWdnZXN0aW9uX19zdWdnZXN0aW9uc1wiIHJlZj1cInN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJzdWdnZXN0aW9uIGluIHN1Z2dlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYy1pbnB1dC1zdWdnZXN0aW9uX19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInN1Z2dlc3Rpb25DbGlja2VkKCRldmVudCwgc3VnZ2VzdGlvbilcIlxuICAgICAgICAgICAgICAgICAgIDpkYXRhLXZhbD1cInN1Z2dlc3Rpb24udGV4dFwiXG4gICAgICAgICAgICAgICAgICAgdi1odG1sPVwic3VnZ2VzdGlvbi5odG1sXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5d29yZDogJycsXG4gICAgICAgICAgICAgICAgc2hvd0lucHV0U3VnZ2VzdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9zZWFyY2gvc3VnZ2VzdCcsXG4gICAgICAgICAgICAgICAgICAgIHNob3dEZWZhdWx0U3VnZ2VzdGlvbk9uRW1wdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3VnZ2VzdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2guLi5cIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJZDogJycsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFzdFZhbDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmKCFfLmlzRW1wdHkodmFsdWUpICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5rZXl3b3JkID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXl3b3JkKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0VtcHR5U3VnZ2VzdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoIDw9IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRDbGFzcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydvLWlucHV0JywgdGhpcy5nZXRPcHRpb25zLmlucHV0Q2xhc3NdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uSW5wdXRGb2N1cyhlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIGlmKF8uaXNFbXB0eShlLnRhcmdldC52YWx1ZSkgJiYgdGhpcy5nZXRPcHRpb25zLnNob3dEZWZhdWx0U3VnZ2VzdGlvbk9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdWdnZXN0aW9ucyh0aGlzLmdldE9wdGlvbnMuZGVmYXVsdFN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3VnZ2VzdGlvbnMoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWdnZXN0aW9uQ2xpY2tlZChlLCBzdWdnZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBzdWdnZXN0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBzdWdnZXN0aW9uLnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N1Z2dlc3Rpb25DbGlja2VkJywgZSwgc3VnZ2VzdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hTdWdnZXN0aW9ucyhlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQodGhpcy5nZXRPcHRpb25zLmVuZHBvaW50Kyc/a2V5d29yZD0nK3ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNob3dJbnB1dFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdWdnZXN0aW9ucyhkYXRhLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dTdWdnZXN0aW9ucyh2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRTdWdnZXN0aW9ucyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VnZ2VzdGlvbnMoKTtcbi8vICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlU3VnZ2VzdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRTdWdnZXN0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFN1Z2dlc3Rpb25zKGRhdGEsIHNlYXJjaCA9ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF8uaXNFbXB0eShzZWFyY2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmh0bWwgPSBpdGVtLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKFwiKFwiICsgc2VhcmNoLnNwbGl0KCcgJykuam9pbignfCcpICsgXCIpXCIsIFwiZ2lcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmh0bWwgPSBpdGVtLnRleHQucmVwbGFjZShyZSwgXCI8Yj4kMTwvYj5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmx1ckhhbmRsZXIoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7IHZhciBvdmVyX3NiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtaW5wdXQtc3VnZ2VzdGlvbl9fc3VnZ2VzdGlvbnM6aG92ZXInKTsgfSBjYXRjaChlKXsgdmFyIG92ZXJfc2IgPSAwOyB9XG4gICAgICAgICAgICAgICAgaWYgKCFvdmVyX3NiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7IH0sIDM1MCk7IC8vIGhpZGUgc3VnZ2VzdGlvbnMgb24gZmFzdCBpbnB1dFxuICAgICAgICAgICAgICAgIH0gLy9lbHNlIGlmICh0aGlzICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRoaXMuZm9jdXMoKTsgfSwgMjApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uY2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXlkb3duSGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2MgPSB0aGlzLiRyZWZzLnN1Z2dlc3Rpb25zO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHdpbmRvdy5ldmVudCA/IGUua2V5Q29kZSA6IGUud2hpY2g7XG4gICAgICAgICAgICAgICAgLy8gZG93biAoNDApLCB1cCAoMzgpXG4gICAgICAgICAgICAgICAgaWYgKChrZXkgPT0gNDAgfHwga2V5ID09IDM4KSAmJiBzYy5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQsIHNlbCA9IHNjLnF1ZXJ5U2VsZWN0b3IoJy5jLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW0uaXMtc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSAoa2V5ID09IDQwKSA/IHNjLnF1ZXJ5U2VsZWN0b3IoJy5jLWlucHV0LXN1Z2dlc3Rpb25fX2l0ZW0nKSA6IHNjLmNoaWxkTm9kZXNbc2MuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTsgLy8gZmlyc3QgOiBsYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTmFtZSArPSAnIGlzLXNlbGVjdGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gbmV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gKGtleSA9PSA0MCkgPyBzZWwubmV4dFNpYmxpbmcgOiBzZWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWwuY2xhc3NOYW1lID0gc2VsLmNsYXNzTmFtZS5yZXBsYWNlKCdpcy1zZWxlY3RlZCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTmFtZSArPSAnIGlzLXNlbGVjdGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IG5leHQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IHNlbC5jbGFzc05hbWUgPSBzZWwuY2xhc3NOYW1lLnJlcGxhY2UoJ2lzLXNlbGVjdGVkJywgJycpOyBlLnRhcmdldC52YWx1ZSA9IHRoaXMubGFzdFZhbDsgbmV4dCA9IDA7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVzY1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PSAyNykge1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHRoaXMubGFzdFZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09IDEzIHx8IGtleSA9PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBzYy5xdWVyeVNlbGVjdG9yKCcuYy1pbnB1dC1zdWdnZXN0aW9uX19pdGVtLmlzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsICYmIHRoaXMuc2hvd0lucHV0U3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHNlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy4kZW1pdCgnc3VnZ2VzdGlvbkNsaWNrZWQnLCBlLCBzdWdnZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2tleWRvd24nLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJbnB1dFN1Z2dlc3Rpb24udnVlPzg3NzEyNzE0IiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtIDpjbGFzcz1cIlsnYy1zZWFyY2gnLCB7J2Mtc2VhcmNoLS1pbmxpbmUnOiBpbmxpbmUsICdpcy1zaG93bic6IHNob3dTZWFyY2hGb3JtfV1cIlxuICAgICAgICAgIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImMtc2VhcmNoX19idXR0b24gaWNvbmltIGljb25pbS1zZWFyY2gtY2xvc2VcIiBAY2xpY2s9XCJ0b2dnbGVTZWFyY2hcIj48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImMtc2VhcmNoX19mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnYy1mb3JtLWdyb3VwJywgeydoYXMtZXJyb3InOiB2YWxpZGF0b3IuZXJyb3JzLmhhcygnY2l0eScpfV1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsnby1pbnB1dCcsIGlucHV0U2l6ZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoUXVlcnkuY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlsaWggTG9rYXNpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJwcmV2ZW50RW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidmFsaWRhdGUoJ2NpdHknLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInZhbGlkYXRvci5lcnJvcnMuaGFzKCdjaXR5JylcIiBjbGFzcz1cImMtZm9ybS1mZWVkYmFja1wiPldhamliIGRpaXNpLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2MtZm9ybS1ncm91cCcsIHsnaGFzLWVycm9yJzogdmFsaWRhdG9yLmVycm9ycy5oYXMoJ2tleXdvcmQnKX1dXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LXN1Z2dlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3VnZ2VzdGlvbk9wdGlvbnMuY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5LmtleXdvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHN1Z2dlc3Rpb25DbGlja2VkPVwic3VnZ2VzdGlvbkNsaWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInZhbGlkYXRlKCdrZXl3b3JkJywgJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDwvaW5wdXQtc3VnZ2VzdGlvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidmFsaWRhdG9yLmVycm9ycy5oYXMoJ2tleXdvcmQnKVwiIGNsYXNzPVwiYy1mb3JtLWZlZWRiYWNrXCI+V2FqaWIgZGlpc2kuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCJbJ28tYnV0dG9uJywgJ28tYnV0dG9uLS1wcmltYXJ5Jywnby1idXR0b24tY3VzdG9tJywgJ28tYnV0dG9uLS1ibG9jaycsIGJ0blNpemVdXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWlubGluZVwiPll1aywmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FyaTxzcGFuIHYtaWY9XCIhaW5saW5lXCI+ITwvc3Bhbj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcmktaWNvbnNcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FyaS1sYWdpXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPkNhcmkgTGFnaTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSAndnVleCdcbiAgICBpbXBvcnQge2xvYWRlZH0gZnJvbSAnLi4vYXBpL21hcC9sb2FkZXInXG5cbiAgICBpbXBvcnQgSW5wdXRTdWdnZXN0aW9uIGZyb20gJy4vSW5wdXRTdWdnZXN0aW9uLnZ1ZSdcblxuICAgIGltcG9ydCB7IFZhbGlkYXRvciwgRXJyb3JCYWcgfSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7IElucHV0U3VnZ2VzdGlvbiB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgICAgICBpbmxpbmU6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93U2VhcmNoRm9ybTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBuZXcgVmFsaWRhdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4vLyAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1xuLy8gICAgICAgICAgICAgICAgJ3F1ZXJ5J1xuLy8gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHF1ZXJ5KCkge1xuICAgICAgICAgICAgICBsZXQgcSA9IHRoaXMuc2VhcmNoUXVlcnk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHEua2V5d29yZC5yZXBsYWNlKC9cXHMvZywgJysnKSsnK2luKycrcS5jaXR5LnJlcGxhY2UoL1xccy9nLCAnKycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0U2l6ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eSh0aGlzLnNpemUpID8gJ28taW5wdXQtLScgKyB0aGlzLnNpemUgOiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ0blNpemUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkodGhpcy5zaXplKSA/ICdvLWJ1dHRvbi0tJyArIHRoaXMuc2l6ZSA6IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VnZ2VzdGlvbk9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvYXBpL3NlYXJjaC9zdWdnZXN0L2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGlsaWggS290YScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dElkOiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiB0aGlzLmlucHV0U2l6ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvYXBpL3NlYXJjaC9zdWdnZXN0L2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdOeWFyaSBBcGE/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHRoaXMuaW5wdXRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RlZmF1bHRTdWdnZXN0aW9uT25FbXB0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJtYWthblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwia29waVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwic2Fsb25cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcInNwYVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiYmFyYmVyc2hvcFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiZnV0c2FsXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJneW1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAnJHJvdXRlJzogJ2ZldGNoUXVlcnknXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZUFsbCh7IGNpdHk6IHRoaXMuc2VhcmNoUXVlcnkuY2l0eSwga2V5d29yZDogdGhpcy5zZWFyY2hRdWVyeS5rZXl3b3JkIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRpb24gZmFpbGVkLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvc2VhcmNoLycrdGhpcy5xdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2VzcyBzdHVmZi5cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIChub24tdmFsaWRhdGlvbiByZWxhdGVkKS5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZShmaWVsZCwgZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VvbG9jYXRpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMuZ2V0Q3VycmVudFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0Q3VycmVudENpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5sYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ubG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5LmxvY2F0aW9uID0gbG9jYXRpb24ubGF0aXR1ZGUrJywnK2xvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb2NvZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsnbGF0TG5nJzogbGF0TG5nfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZXNbMF0gPT0gJ2xvY2FsaXR5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLmxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9ICFfLmlzRW1wdHkocmVzdWx0KSA/IHJlc3VsdFswXS5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2VvY29kaW5nIGZhaWxlZDogXCIgKyBzdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q3VycmVudENpdHkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBDb29raWVzLmdldCgndXNlci1jaXR5JykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRXZlbnQuZmlyZSgnc2hvdy1jaXRpZXMtbW9kYWwnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0NBVElPTicsIENvb2tpZXMuZ2V0KCd1c2VyLWNpdHknKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93U2VhcmNoRm9ybSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWFyY2hGb3JtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGljb25pbS5vZmYoJ3NlYXJjaC1jbG9zZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlYXJjaEZvcm0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpY29uaW0ub24oJ3NlYXJjaC1jbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWdnZXN0aW9uQ2xpY2tlZCgpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2l0eUNoYW5nZWQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZlbnRFbnRlcihlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29vZ2xlU2VhcmNoU3VnZ2VzdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlczogWycoY2l0aWVzKSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7Y291bnRyeTogXCJpZFwifVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRCb3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTAuNzg5Mjc1LCAxMTMuOTIxMzI3MDAwMDAwMDIpKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuJHJlZnMuaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEJveCA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGlucHV0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hCb3guYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHNlYXJjaEJveC5nZXRQbGFjZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5LmNpdHkgPSBsb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXh0cmFjdFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYoIXF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNwbGl0KCdpbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvXFwrL2csICcgJywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGtleXdvcmQ6IHF1ZXJ5WzBdLCBjaXR5OiBxdWVyeVsxXSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZXRjaFF1ZXJ5KCkge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeSA9IHRoaXMuZXh0cmFjdFF1ZXJ5KHRoaXMuJHJvdXRlLnBhcmFtcy5xdWVyeSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNlYXJjaFF1ZXJ5LCBxdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoUXVlcnkoKTtcblxuICAgICAgICAgICAgdGhpcy5nZW9sb2NhdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLmdvb2dsZVNlYXJjaFN1Z2dlc3Rpb24oKTtcblxuICAgICAgICAgICAgRXZlbnQubGlzdGVuKCd0b2dnbGUtc2VhcmNoJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNlYXJjaC52dWU/MDk0ZTdjYWEiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJub3QtZm91bmRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby00MDQtZ3JpZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJub3QtZm91bmRfX3NlY3Rpb25cIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzcz1cIm8taGVhZGluZy00MDRcIj5Pb3BzITwvaDE+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cIm8tZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0TWFhZiBrYW1pIHRpZGFrIG1lbmVtdWthbiBhcGEgeWFuZyBrYW11IGNhcmkgPGJyPlxuXHRcdFx0XHRcdFx0XHQ8IS0tTXVuZ2tpbiBiZXJhc2FsIGRhcmkgcGxhbmV0IGxhaW4gPz8tLT5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxzZWFyY2gtZm9ybSBzaXplPVwibGFyZ2VcIiA6aW5saW5lPVwiZmFsc2VcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwO1wiPjwvc2VhcmNoLWZvcm0+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5vdC1mb3VuZF9fc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuLi8uLi9pbWcvNDA0L3JvYm90cy5wbmdcIiBjbGFzcz1cIm8taW1hZ2Utcm9ib3RzXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcG9uZW50czogeyBTZWFyY2hGb3JtIH1cbn1cdFxuXHRcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyA0MDQudnVlPzBjNmNhNDA3IiwiLyoqXG4gKiB2ZWUtdmFsaWRhdGUgdjIuMC4wLXJjLjEzXG4gKiAoYykgMjAxNyBBYmRlbHJhaG1hbiBBd2FkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlZlZVZhbGlkYXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNvbWUgQWxwaGEgUmVnZXggaGVscGVycy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc28vdmFsaWRhdG9yLmpzL2Jsb2IvbWFzdGVyL3NyYy9saWIvYWxwaGEuanNcbiAqL1xuXG52YXIgYWxwaGEkMSA9IHtcbiAgZW46IC9eW0EtWl0qJC9pLFxuICBjczogL15bQS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSokL2ksXG4gIGRhOiAvXltBLVrDhsOYw4VdKiQvaSxcbiAgZGU6IC9eW0EtWsOEw5bDnMOfXSokL2ksXG4gIGVzOiAvXltBLVrDgcOJw43DkcOTw5rDnF0qJC9pLFxuICBmcjogL15bQS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKiQvaSxcbiAgbHQ6IC9eW0EtWsSExIzEmMSWxK7FoMWyxarFvV0qJC9pLFxuICBubDogL15bQS1aw4nDi8OPw5PDlsOcXSokL2ksXG4gIGh1OiAvXltBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKiQvaSxcbiAgcGw6IC9eW0EtWsSExIbEmMWaxYHFg8OTxbvFuV0qJC9pLFxuICBwdDogL15bQS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xdKiQvaSxcbiAgcnU6IC9eW9CQLdCv0IFdKiQvaSxcbiAgc2s6IC9eW0EtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XSokL2ksXG4gIHNyOiAvXltBLVrEjMSGxb3FoMSQXSokL2ksXG4gIHRyOiAvXltBLVrDh8SexLDEscOWxZ7DnF0qJC9pLFxuICB1azogL15b0JAt0KnQrNCu0K/QhNCG0IfSkF0qJC9pLFxuICBhcjogL15b2KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXSokL1xufTtcblxudmFyIGFscGhhU3BhY2VzID0ge1xuICBlbjogL15bQS1aXFxzXSokL2ksXG4gIGNzOiAvXltBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1cXHNdKiQvaSxcbiAgZGE6IC9eW0EtWsOGw5jDhVxcc10qJC9pLFxuICBkZTogL15bQS1aw4TDlsOcw59cXHNdKiQvaSxcbiAgZXM6IC9eW0EtWsOBw4nDjcORw5PDmsOcXFxzXSokL2ksXG4gIGZyOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuFxcc10qJC9pLFxuICBsdDogL15bQS1axITEjMSYxJbErsWgxbLFqsW9XFxzXSokL2ksXG4gIG5sOiAvXltBLVrDicOLw4/Dk8OWw5xcXHNdKiQvaSxcbiAgaHU6IC9eW0EtWsOBw4nDjcOTw5bFkMOaw5zFsFxcc10qJC9pLFxuICBwbDogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XFxzXSokL2ksXG4gIHB0OiAvXltBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnFxcc10qJC9pLFxuICBydTogL15b0JAt0K/QgVxcc10qJC9pLFxuICBzazogL15bQS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1cXHNdKiQvaSxcbiAgc3I6IC9eW0EtWsSMxIbFvcWgxJBcXHNdKiQvaSxcbiAgdHI6IC9eW0EtWsOHxJ7EsMSxw5bFnsOcXFxzXSokL2ksXG4gIHVrOiAvXlvQkC3QqdCs0K7Qr9CE0IbQh9KQXFxzXSokL2ksXG4gIGFyOiAvXlvYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBcXHNdKiQvXG59O1xuXG52YXIgYWxwaGFudW1lcmljID0ge1xuICBlbjogL15bMC05QS1aXSokL2ksXG4gIGNzOiAvXlswLTlBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKiQvaSxcbiAgZGE6IC9eWzAtOUEtWsOGw5jDhV0kL2ksXG4gIGRlOiAvXlswLTlBLVrDhMOWw5zDn10qJC9pLFxuICBlczogL15bMC05QS1aw4HDicONw5HDk8Oaw5xdKiQvaSxcbiAgZnI6IC9eWzAtOUEtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSokL2ksXG4gIGx0OiAvXlswLTlBLVrEhMSMxJjElsSuxaDFssWqxb1dKiQvaSxcbiAgaHU6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF0qJC9pLFxuICBubDogL15bMC05QS1aw4nDi8OPw5PDlsOcXSokL2ksXG4gIHBsOiAvXlswLTlBLVrEhMSGxJjFmsWBxYPDk8W7xbldKiQvaSxcbiAgcHQ6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSokL2ksXG4gIHJ1OiAvXlswLTnQkC3Qr9CBXSokL2ksXG4gIHNrOiAvXlswLTlBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvV0qJC9pLFxuICBzcjogL15bMC05QS1axIzEhsW9xaDEkF0qJC9pLFxuICB0cjogL15bMC05QS1aw4fEnsSwxLHDlsWew5xdKiQvaSxcbiAgdWs6IC9eWzAtOdCQLdCp0KzQrtCv0ITQhtCH0pBdKiQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXSokL1xufTtcblxudmFyIGFscGhhRGFzaCA9IHtcbiAgZW46IC9eWzAtOUEtWl8tXSokL2ksXG4gIGNzOiAvXlswLTlBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1fLV0qJC9pLFxuICBkYTogL15bMC05QS1aw4bDmMOFXy1dKiQvaSxcbiAgZGU6IC9eWzAtOUEtWsOEw5bDnMOfXy1dKiQvaSxcbiAgZXM6IC9eWzAtOUEtWsOBw4nDjcORw5PDmsOcXy1dKiQvaSxcbiAgZnI6IC9eWzAtOUEtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4Xy1dKiQvaSxcbiAgbHQ6IC9eWzAtOUEtWsSExIzEmMSWxK7FoMWyxarFvV8tXSokL2ksXG4gIG5sOiAvXlswLTlBLVrDicOLw4/Dk8OWw5xfLV0qJC9pLFxuICBodTogL15bMC05QS1aw4HDicONw5PDlsWQw5rDnMWwXy1dKiQvaSxcbiAgcGw6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV8tXSokL2ksXG4gIHB0OiAvXlswLTlBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF8tXSokL2ksXG4gIHJ1OiAvXlswLTnQkC3Qr9CBXy1dKiQvaSxcbiAgc2s6IC9eWzAtOUEtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9Xy1dKiQvaSxcbiAgc3I6IC9eWzAtOUEtWsSMxIbFvcWgxJBfLV0qJC9pLFxuICB0cjogL15bMC05QS1aw4fEnsSwxLHDlsWew5xfLV0qJC9pLFxuICB1azogL15bMC050JAt0KnQrNCu0K/QhNCG0IfSkF8tXSokL2ksXG4gIGFyOiAvXlvZoNmh2aLZo9mk2aXZptmn2ajZqTAtOdih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF8tXSokL1xufTtcblxudmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFtudWxsXTtcbiAgdmFyIGxvY2FsZSA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhJDEpLnNvbWUoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gYWxwaGEkMVtsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGEkMVtsb2NhbGVdIHx8IGFscGhhJDEuZW4pLnRlc3QodmFsdWUpO1xufTtcblxudmFyIHZhbGlkYXRlJDEgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQxKHZhbCwgW2xvY2FsZV0pOyB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYURhc2gpLnNvbWUoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gYWxwaGFEYXNoW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYURhc2hbbG9jYWxlXSB8fCBhbHBoYURhc2guZW4pLnRlc3QodmFsdWUpO1xufTtcblxudmFyIHZhbGlkYXRlJDIgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQyKHZhbCwgW2xvY2FsZV0pOyB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYW51bWVyaWMpLnNvbWUoZnVuY3Rpb24gKGxvYykgeyByZXR1cm4gYWxwaGFudW1lcmljW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYW51bWVyaWNbbG9jYWxlXSB8fCBhbHBoYW51bWVyaWMuZW4pLnRlc3QodmFsdWUpO1xufTtcblxudmFyIHZhbGlkYXRlJDMgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQzKHZhbCwgW2xvY2FsZV0pOyB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGF0IGxlYXN0IG9uZSBsb2NhbGUuXG4gIGlmICghIGxvY2FsZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhbHBoYVNwYWNlcykuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYVNwYWNlc1tsb2NdLnRlc3QodmFsdWUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoYWxwaGFTcGFjZXNbbG9jYWxlXSB8fCBhbHBoYVNwYWNlcy5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkNCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBtaW4gPSByZWZbMF07XG4gIHZhciBtYXggPSByZWZbMV07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDQodmFsLCBbbWluLCBtYXhdKTsgfSk7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKG1pbikgPD0gdmFsdWUgJiYgTnVtYmVyKG1heCkgPj0gdmFsdWU7XG59O1xuXG52YXIgY29uZmlybWVkID0gZnVuY3Rpb24gKHZhbHVlLCBvdGhlcikgeyByZXR1cm4gU3RyaW5nKHZhbHVlKSA9PT0gU3RyaW5nKG90aGVyKTsgfTtcblxuZnVuY3Rpb24gdW53cmFwRXhwb3J0cyAoeCkge1xuXHRyZXR1cm4geCAmJiB4Ll9fZXNNb2R1bGUgPyB4WydkZWZhdWx0J10gOiB4O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGFzc2VydFN0cmluZ18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXNzZXJ0U3RyaW5nO1xuZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGlucHV0KSB7XG4gIHZhciBpc1N0cmluZyA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG5cbiAgaWYgKCFpc1N0cmluZykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXMgbGlicmFyeSAodmFsaWRhdG9yLmpzKSB2YWxpZGF0ZXMgc3RyaW5ncyBvbmx5Jyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0NyZWRpdENhcmRfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3JlZGl0Q2FyZDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgY3JlZGl0Q2FyZCA9IC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9fDYyWzAtOV17MTR9KSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvWy0gXSsvZywgJycpO1xuICBpZiAoIWNyZWRpdENhcmQudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQgPSB2b2lkIDA7XG4gIHZhciB0bXBOdW0gPSB2b2lkIDA7XG4gIHZhciBzaG91bGREb3VibGUgPSB2b2lkIDA7XG4gIGZvciAodmFyIGkgPSBzYW5pdGl6ZWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkaWdpdCA9IHNhbml0aXplZC5zdWJzdHJpbmcoaSwgaSArIDEpO1xuICAgIHRtcE51bSA9IHBhcnNlSW50KGRpZ2l0LCAxMCk7XG4gICAgaWYgKHNob3VsZERvdWJsZSkge1xuICAgICAgdG1wTnVtICo9IDI7XG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cbiAgICBzaG91bGREb3VibGUgPSAhc2hvdWxkRG91YmxlO1xuICB9XG4gIHJldHVybiAhIShzdW0gJSAxMCA9PT0gMCA/IHNhbml0aXplZCA6IGZhbHNlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0NyZWRpdENhcmQgPSB1bndyYXBFeHBvcnRzKGlzQ3JlZGl0Q2FyZF8xKTtcblxudmFyIGNyZWRpdF9jYXJkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBpc0NyZWRpdENhcmQoU3RyaW5nKHZhbHVlKSk7IH07XG5cbnZhciB2YWxpZGF0ZSQ1ID0gZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcbiAgdmFyIGRlY2ltYWxzID0gQXJyYXkuaXNBcnJheShwYXJhbXMpID8gKHBhcmFtc1swXSB8fCAnKicpIDogJyonO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkNSh2YWwsIHBhcmFtcyk7IH0pO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBpZiBpcyAwLlxuICBpZiAoTnVtYmVyKGRlY2ltYWxzKSA9PT0gMCkge1xuICAgIHJldHVybiAvXi0/XFxkKiQvLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgdmFyIHJlZ2V4UGFydCA9IGRlY2ltYWxzID09PSAnKicgPyAnKycgOiAoXCJ7MSxcIiArIGRlY2ltYWxzICsgXCJ9XCIpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKChcIl4tP1xcXFxkKihcXFxcLlxcXFxkXCIgKyByZWdleFBhcnQgKyBcIik/JFwiKSk7XG5cbiAgaWYgKCEgcmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gcGFyc2VkVmFsdWUgPT09IHBhcnNlZFZhbHVlO1xufTtcblxudmFyIHZhbGlkYXRlJDYgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ2KHZhbCwgW2xlbmd0aF0pOyB9KTtcbiAgfVxuICB2YXIgc3RyVmFsID0gU3RyaW5nKHZhbHVlKTtcblxuICByZXR1cm4gL15bMC05XSokLy50ZXN0KHN0clZhbCkgJiYgc3RyVmFsLmxlbmd0aCA9PT0gTnVtYmVyKGxlbmd0aCk7XG59O1xuXG52YXIgdmFsaWRhdGVJbWFnZSA9IGZ1bmN0aW9uIChmaWxlLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHsgdmFsaWQ6IGZhbHNlIH0pOyB9O1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgdmFsaWQ6IGltYWdlLndpZHRoID09PSBOdW1iZXIod2lkdGgpICYmIGltYWdlLmhlaWdodCA9PT0gTnVtYmVyKGhlaWdodClcbiAgICB9KTsgfTtcblxuICAgIGltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gIH0pO1xufTtcblxudmFyIGRpbWVuc2lvbnMgPSBmdW5jdGlvbiAoZmlsZXMsIHJlZikge1xuICB2YXIgd2lkdGggPSByZWZbMF07XG4gIHZhciBoZWlnaHQgPSByZWZbMV07XG5cbiAgdmFyIGxpc3QgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGlmIGZpbGUgaXMgbm90IGFuIGltYWdlLCByZWplY3QuXG4gICAgaWYgKCEgL1xcLihqcGd8c3ZnfGpwZWd8cG5nfGJtcHxnaWYpJC9pLnRlc3QoZmlsZXNbaV0ubmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsaXN0LnB1c2goZmlsZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB2YWxpZGF0ZUltYWdlKGZpbGUsIHdpZHRoLCBoZWlnaHQpOyB9KSk7XG59O1xuXG52YXIgbWVyZ2VfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1lcmdlO1xuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gIHZhciBvYmogPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHNbMV07XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9ialtrZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0J5dGVMZW5ndGhfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0J5dGVMZW5ndGg7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0J5dGVMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbWluID0gdm9pZCAwO1xuICB2YXIgbWF4ID0gdm9pZCAwO1xuICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuICB2YXIgbGVuID0gZW5jb2RlVVJJKHN0cikuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzRlFETiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRkRRTjtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9mcWRuX29wdGlvbnMgPSB7XG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzRkRRTihzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2ZxZG5fb3B0aW9ucyk7XG5cbiAgLyogUmVtb3ZlIHRoZSBvcHRpb25hbCB0cmFpbGluZyBkb3QgYmVmb3JlIGNoZWNraW5nIHZhbGlkaXR5ICovXG4gIGlmIChvcHRpb25zLmFsbG93X3RyYWlsaW5nX2RvdCAmJiBzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnLicpIHtcbiAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgfVxuICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKTtcbiAgaWYgKG9wdGlvbnMucmVxdWlyZV90bGQpIHtcbiAgICB2YXIgdGxkID0gcGFydHMucG9wKCk7XG4gICAgaWYgKCFwYXJ0cy5sZW5ndGggfHwgIS9eKFthLXpcXHUwMGExLVxcdWZmZmZdezIsfXx4blthLXowLTktXXsyLH0pJC9pLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBkaXNhbGxvdyBzcGFjZXNcbiAgICBpZiAoL1tcXHNcXHUyMDAyLVxcdTIwMEJcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHVGRUZGXFx1REI0MFxcdURDMjBdLy50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yICh2YXIgcGFydCwgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAob3B0aW9ucy5hbGxvd191bmRlcnNjb3Jlcykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgfVxuICAgIGlmICghL15bYS16XFx1MDBhMS1cXHVmZmZmMC05LV0rJC9pLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuICAgIGlmICgvW1xcdWZmMDEtXFx1ZmY1ZV0vLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcnRbMF0gPT09ICctJyB8fCBwYXJ0W3BhcnQubGVuZ3RoIC0gMV0gPT09ICctJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0VtYWlsXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtYWlsO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cblxuXG52YXIgX2lzQnl0ZUxlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzQnl0ZUxlbmd0aF8xKTtcblxuXG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNGUUROKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfZW1haWxfb3B0aW9ucyA9IHtcbiAgYWxsb3dfZGlzcGxheV9uYW1lOiBmYWxzZSxcbiAgcmVxdWlyZV9kaXNwbGF5X25hbWU6IGZhbHNlLFxuICBhbGxvd191dGY4X2xvY2FsX3BhcnQ6IHRydWUsXG4gIHJlcXVpcmVfdGxkOiB0cnVlXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG52YXIgZGlzcGxheU5hbWUgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcLlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXFxzXSo8KC4rKT4kL2k7XG52YXIgZW1haWxVc2VyUGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XSskL2k7XG52YXIgcXVvdGVkRW1haWxVc2VyID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXSkpKiQvaTtcbnZhciBlbWFpbFVzZXJVdGY4UGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSskL2k7XG52YXIgcXVvdGVkRW1haWxVc2VyVXRmOCA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3ZlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSokL2k7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc0VtYWlsKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZW1haWxfb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMucmVxdWlyZV9kaXNwbGF5X25hbWUgfHwgb3B0aW9ucy5hbGxvd19kaXNwbGF5X25hbWUpIHtcbiAgICB2YXIgZGlzcGxheV9lbWFpbCA9IHN0ci5tYXRjaChkaXNwbGF5TmFtZSk7XG4gICAgaWYgKGRpc3BsYXlfZW1haWwpIHtcbiAgICAgIHN0ciA9IGRpc3BsYXlfZW1haWxbMV07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfZGlzcGxheV9uYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCdAJyk7XG4gIHZhciBkb21haW4gPSBwYXJ0cy5wb3AoKTtcbiAgdmFyIHVzZXIgPSBwYXJ0cy5qb2luKCdAJyk7XG5cbiAgdmFyIGxvd2VyX2RvbWFpbiA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpO1xuICBpZiAobG93ZXJfZG9tYWluID09PSAnZ21haWwuY29tJyB8fCBsb3dlcl9kb21haW4gPT09ICdnb29nbGVtYWlsLmNvbScpIHtcbiAgICB1c2VyID0gdXNlci5yZXBsYWNlKC9cXC4vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpZiAoISgwLCBfaXNCeXRlTGVuZ3RoMi5kZWZhdWx0KSh1c2VyLCB7IG1heDogNjQgfSkgfHwgISgwLCBfaXNCeXRlTGVuZ3RoMi5kZWZhdWx0KShkb21haW4sIHsgbWF4OiAyNTQgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoISgwLCBfaXNGUUROMi5kZWZhdWx0KShkb21haW4sIHsgcmVxdWlyZV90bGQ6IG9wdGlvbnMucmVxdWlyZV90bGQgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodXNlclswXSA9PT0gJ1wiJykge1xuICAgIHVzZXIgPSB1c2VyLnNsaWNlKDEsIHVzZXIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gcXVvdGVkRW1haWxVc2VyVXRmOC50ZXN0KHVzZXIpIDogcXVvdGVkRW1haWxVc2VyLnRlc3QodXNlcik7XG4gIH1cblxuICB2YXIgcGF0dGVybiA9IG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gZW1haWxVc2VyVXRmOFBhcnQgOiBlbWFpbFVzZXJQYXJ0O1xuXG4gIHZhciB1c2VyX3BhcnRzID0gdXNlci5zcGxpdCgnLicpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHVzZXJfcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXBhdHRlcm4udGVzdCh1c2VyX3BhcnRzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzRW1haWwgPSB1bndyYXBFeHBvcnRzKGlzRW1haWxfMSk7XG5cbnZhciB2YWxpZGF0ZSQ3ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc0VtYWlsKFN0cmluZyh2YWwpKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNFbWFpbChTdHJpbmcodmFsdWUpKTtcbn07XG5cbnZhciBleHQgPSBmdW5jdGlvbiAoZmlsZXMsIGV4dGVuc2lvbnMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgoXCIuKFwiICsgKGV4dGVuc2lvbnMuam9pbignfCcpKSArIFwiKSRcIiksICdpJyk7XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiByZWdleC50ZXN0KGZpbGUubmFtZSk7IH0pO1xufTtcblxudmFyIGltYWdlID0gZnVuY3Rpb24gKGZpbGVzKSB7IHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gL1xcLihqcGd8c3ZnfGpwZWd8cG5nfGJtcHxnaWYpJC9pLnRlc3QoZmlsZS5uYW1lKTsgfVxuKTsgfTtcblxudmFyIHZhbGlkYXRlJDggPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDgodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuICEhIG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIG9wdGlvbiA9PSB2YWx1ZTsgfSkubGVuZ3RoO1xufTtcblxudmFyIGlzSVBfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVA7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlwdjRNYXliZSA9IC9eKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KSQvO1xudmFyIGlwdjZCbG9jayA9IC9eWzAtOUEtRl17MSw0fSQvaTtcblxuZnVuY3Rpb24gaXNJUChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJUChzdHIsIDQpIHx8IGlzSVAoc3RyLCA2KTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNCcpIHtcbiAgICBpZiAoIWlwdjRNYXliZS50ZXN0KHN0cikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0c1szXSA8PSAyNTU7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzYnKSB7XG4gICAgdmFyIGJsb2NrcyA9IHN0ci5zcGxpdCgnOicpO1xuICAgIHZhciBmb3VuZE9taXNzaW9uQmxvY2sgPSBmYWxzZTsgLy8gbWFya2VyIHRvIGluZGljYXRlIDo6XG5cbiAgICAvLyBBdCBsZWFzdCBzb21lIE9TIGFjY2VwdCB0aGUgbGFzdCAzMiBiaXRzIG9mIGFuIElQdjYgYWRkcmVzc1xuICAgIC8vIChpLmUuIDIgb2YgdGhlIGJsb2NrcykgaW4gSVB2NCBub3RhdGlvbiwgYW5kIFJGQyAzNDkzIHNheXNcbiAgICAvLyB0aGF0ICc6OmZmZmY6YS5iLmMuZCcgaXMgdmFsaWQgZm9yIElQdjQtbWFwcGVkIElQdjYgYWRkcmVzc2VzLFxuICAgIC8vIGFuZCAnOjphLmIuYy5kJyBpcyBkZXByZWNhdGVkLCBidXQgYWxzbyB2YWxpZC5cbiAgICB2YXIgZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID0gaXNJUChibG9ja3NbYmxvY2tzLmxlbmd0aCAtIDFdLCA0KTtcbiAgICB2YXIgZXhwZWN0ZWROdW1iZXJPZkJsb2NrcyA9IGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA/IDcgOiA4O1xuXG4gICAgaWYgKGJsb2Nrcy5sZW5ndGggPiBleHBlY3RlZE51bWJlck9mQmxvY2tzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGluaXRpYWwgb3IgZmluYWwgOjpcbiAgICBpZiAoc3RyID09PSAnOjonKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoMCwgMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gMikgPT09ICc6OicpIHtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGJsb2Nrcy5wb3AoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIC8vIHRlc3QgZm9yIGEgOjogd2hpY2ggY2FuIG5vdCBiZSBhdCB0aGUgc3RyaW5nIHN0YXJ0L2VuZFxuICAgICAgLy8gc2luY2UgdGhvc2UgY2FzZXMgaGF2ZSBiZWVuIGhhbmRsZWQgYWJvdmVcbiAgICAgIGlmIChibG9ja3NbaV0gPT09ICcnICYmIGkgPiAwICYmIGkgPCBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBtdWx0aXBsZSA6OiBpbiBhZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrICYmIGkgPT09IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vIGl0IGhhcyBiZWVuIGNoZWNrZWQgYmVmb3JlIHRoYXQgdGhlIGxhc3RcbiAgICAgICAgLy8gYmxvY2sgaXMgYSB2YWxpZCBJUHY0IGFkZHJlc3NcbiAgICAgIH0gZWxzZSBpZiAoIWlwdjZCbG9jay50ZXN0KGJsb2Nrc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmRPbWlzc2lvbkJsb2NrKSB7XG4gICAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tzLmxlbmd0aCA9PT0gZXhwZWN0ZWROdW1iZXJPZkJsb2NrcztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG52YXIgaXNJUCA9IHVud3JhcEV4cG9ydHMoaXNJUF8xKTtcblxudmFyIGlwID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFs0XTtcbiAgdmFyIHZlcnNpb24gPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzSVAodmFsLCBbdmVyc2lvbl0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiBpc0lQKHZhbHVlLCB2ZXJzaW9uKTtcbn07XG5cbnZhciBtYXggPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGxlbmd0aCA+PSAwO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoIDw9IGxlbmd0aDtcbn07XG5cbnZhciBtYXhfdmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWF4ID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBOdW1iZXIodmFsdWUpIDw9IG1heDtcbn07XG5cbnZhciBtaW1lcyA9IGZ1bmN0aW9uIChmaWxlcywgbWltZXMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgoKG1pbWVzLmpvaW4oJ3wnKS5yZXBsYWNlKCcqJywgJy4rJykpICsgXCIkXCIpLCAnaScpO1xuXG4gIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gcmVnZXgudGVzdChmaWxlLnR5cGUpOyB9KTtcbn07XG5cbnZhciBtaW4gPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA+PSBsZW5ndGg7XG59O1xuXG52YXIgbWluX3ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1pbiA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlKSA+PSBtaW47XG59O1xuXG52YXIgdmFsaWRhdGUkOSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkOSh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBvcHRpb24gPT0gdmFsdWU7IH0pLmxlbmd0aDtcbn07XG5cbnZhciBudW1lcmljID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiAvXlswLTldKyQvLnRlc3QoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAvXlswLTldKyQvLnRlc3QoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgcmVnZXggPSByZWZbMF07XG4gIHZhciBmbGFncyA9IHJlZi5zbGljZSgxKTtcblxuICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgZmxhZ3MpLnRlc3QoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgcmVxdWlyZWQgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0gW2ZhbHNlXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gISEgdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLy8gaW5jYXNlIGEgZmllbGQgY29uc2lkZXJzIGBmYWxzZWAgYXMgYW4gZW1wdHkgdmFsdWUgbGlrZSBjaGVja2JveGVzLlxuICB2YXIgaW52YWxpZGF0ZUZhbHNlID0gcGFyYW1zWzBdO1xuICBpZiAodmFsdWUgPT09IGZhbHNlICYmIGludmFsaWRhdGVGYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhIFN0cmluZyh2YWx1ZSkudHJpbSgpLmxlbmd0aDtcbn07XG5cbnZhciBzaXplID0gZnVuY3Rpb24gKGZpbGVzLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWZbMF07XG5cbiAgaWYgKGlzTmFOKHNpemUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5TaXplID0gTnVtYmVyKHNpemUpICogMTAyNDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmaWxlc1tpXS5zaXplID4gblNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc1VSTF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNGUUROKTtcblxuXG5cbnZhciBfaXNJUDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzSVBfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X3VybF9vcHRpb25zID0ge1xuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmdHAnXSxcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIHJlcXVpcmVfcHJvdG9jb2w6IGZhbHNlLFxuICByZXF1aXJlX2hvc3Q6IHRydWUsXG4gIHJlcXVpcmVfdmFsaWRfcHJvdG9jb2w6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZSxcbiAgYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJsczogZmFsc2Vcbn07XG5cbnZhciB3cmFwcGVkX2lwdjYgPSAvXlxcWyhbXlxcXV0rKVxcXSg/OjooWzAtOV0rKSk/JC87XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBjaGVja0hvc3QoaG9zdCwgbWF0Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuICAgIGlmIChob3N0ID09PSBtYXRjaCB8fCBpc1JlZ0V4cChtYXRjaCkgJiYgbWF0Y2gudGVzdChob3N0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVUkwodXJsLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KSh1cmwpO1xuICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID49IDIwODMgfHwgL1tcXHM8Pl0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodXJsLmluZGV4T2YoJ21haWx0bzonKSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF91cmxfb3B0aW9ucyk7XG4gIHZhciBwcm90b2NvbCA9IHZvaWQgMCxcbiAgICAgIGF1dGggPSB2b2lkIDAsXG4gICAgICBob3N0ID0gdm9pZCAwLFxuICAgICAgaG9zdG5hbWUgPSB2b2lkIDAsXG4gICAgICBwb3J0ID0gdm9pZCAwLFxuICAgICAgcG9ydF9zdHIgPSB2b2lkIDAsXG4gICAgICBzcGxpdCA9IHZvaWQgMCxcbiAgICAgIGlwdjYgPSB2b2lkIDA7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJyMnKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnPycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc6Ly8nKTtcbiAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBwcm90b2NvbCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWlyZV92YWxpZF9wcm90b2NvbCAmJiBvcHRpb25zLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX3Byb3RvY29sKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJscyAmJiB1cmwuc3Vic3RyKDAsIDIpID09PSAnLy8nKSB7XG4gICAgc3BsaXRbMF0gPSB1cmwuc3Vic3RyKDIpO1xuICB9XG4gIHVybCA9IHNwbGl0LmpvaW4oJzovLycpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgaWYgKHVybCA9PT0gJycgJiYgIW9wdGlvbnMucmVxdWlyZV9ob3N0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnQCcpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGF1dGggPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGhvc3RuYW1lID0gc3BsaXQuam9pbignQCcpO1xuXG4gIHBvcnRfc3RyID0gbnVsbDtcbiAgaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcbiAgaWYgKGlwdjZfbWF0Y2gpIHtcbiAgICBob3N0ID0gJyc7XG4gICAgaXB2NiA9IGlwdjZfbWF0Y2hbMV07XG4gICAgcG9ydF9zdHIgPSBpcHY2X21hdGNoWzJdIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc3BsaXQgPSBob3N0bmFtZS5zcGxpdCgnOicpO1xuICAgIGhvc3QgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChzcGxpdC5sZW5ndGgpIHtcbiAgICAgIHBvcnRfc3RyID0gc3BsaXQuam9pbignOicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3J0X3N0ciAhPT0gbnVsbCkge1xuICAgIHBvcnQgPSBwYXJzZUludChwb3J0X3N0ciwgMTApO1xuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAyLmRlZmF1bHQpKGhvc3QpICYmICEoMCwgX2lzRlFETjIuZGVmYXVsdCkoaG9zdCwgb3B0aW9ucykgJiYgKCFpcHY2IHx8ICEoMCwgX2lzSVAyLmRlZmF1bHQpKGlwdjYsIDYpKSAmJiBob3N0ICE9PSAnbG9jYWxob3N0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdCAmJiBjaGVja0hvc3QoaG9zdCwgb3B0aW9ucy5ob3N0X2JsYWNrbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc1VSTCA9IHVud3JhcEV4cG9ydHMoaXNVUkxfMSk7XG5cbnZhciB1cmwgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW3RydWVdO1xuICB2YXIgcmVxdWlyZVByb3RvY29sID0gcmVmWzBdO1xuXG4gIHZhciBvcHRpb25zID0geyByZXF1aXJlX3Byb3RvY29sOiAhIXJlcXVpcmVQcm90b2NvbCwgYWxsb3dfdW5kZXJzY29yZXM6IHRydWUgfTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGlzVVJMKHZhbCwgb3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzVVJMKHZhbHVlLCBvcHRpb25zKTtcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xudmFyIFJ1bGVzID0ge1xuICBhbHBoYV9kYXNoOiB2YWxpZGF0ZSQxLFxuICBhbHBoYV9udW06IHZhbGlkYXRlJDIsXG4gIGFscGhhX3NwYWNlczogdmFsaWRhdGUkMyxcbiAgYWxwaGE6IHZhbGlkYXRlLFxuICBiZXR3ZWVuOiB2YWxpZGF0ZSQ0LFxuICBjb25maXJtZWQ6IGNvbmZpcm1lZCxcbiAgY3JlZGl0X2NhcmQ6IGNyZWRpdF9jYXJkLFxuICBkZWNpbWFsOiB2YWxpZGF0ZSQ1LFxuICBkaWdpdHM6IHZhbGlkYXRlJDYsXG4gIGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMsXG4gIGVtYWlsOiB2YWxpZGF0ZSQ3LFxuICBleHQ6IGV4dCxcbiAgaW1hZ2U6IGltYWdlLFxuICBpbjogdmFsaWRhdGUkOCxcbiAgaXA6IGlwLFxuICBtYXg6IG1heCxcbiAgbWF4X3ZhbHVlOiBtYXhfdmFsdWUsXG4gIG1pbWVzOiBtaW1lcyxcbiAgbWluOiBtaW4sXG4gIG1pbl92YWx1ZTogbWluX3ZhbHVlLFxuICBub3RfaW46IHZhbGlkYXRlJDksXG4gIG51bWVyaWM6IG51bWVyaWMsXG4gIHJlZ2V4OiByZWdleCxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICBzaXplOiBzaXplLFxuICB1cmw6IHVybFxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGF0dHJpYnV0ZS4gdGhlIG5hbWUgbXVzdCBiZSBrZWJhYi1jYXNlLlxuICovXG52YXIgZ2V0RGF0YUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbCwgbmFtZSkgeyByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKChcImRhdGEtdnYtXCIgKyBuYW1lKSk7IH07XG5cbi8qKlxuICogU2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbnZhciBzZXREYXRhQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWx1ZSkgeyByZXR1cm4gZWwuc2V0QXR0cmlidXRlKChcImRhdGEtdnYtXCIgKyBuYW1lKSwgdmFsdWUpOyB9O1xuXG4vKipcbiAqIFNoYWxsb3cgb2JqZWN0IGNvbXBhcmlzb24uXG4gKlxuICogQHBhcmFtIHsqfSBsaHMgXG4gKiBAcGFyYW0geyp9IHJocyBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbnZhciBpc0VxdWFsID0gZnVuY3Rpb24gKGxocywgcmhzKSB7XG4gIGlmIChsaHMgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmhzIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIGlzRXF1YWwobGhzLnNvdXJjZSwgcmhzLnNvdXJjZSkgJiYgaXNFcXVhbChsaHMuZmxhZ3MsIHJocy5mbGFncyk7XG4gIH1cblxuICAvLyBpZiBib3RoIGFyZSBvYmplY3RzLCBjb21wYXJlIGVhY2gga2V5IHJlY3Vyc2l2ZWx5LlxuICBpZiAoaXNPYmplY3QobGhzKSAmJiBpc09iamVjdChyaHMpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxocykuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGlzRXF1YWwobGhzW2tleV0sIHJoc1trZXldKTtcbiAgICB9KSAmJiBPYmplY3Qua2V5cyhyaHMpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBpc0VxdWFsKGxoc1trZXldLCByaHNba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGhzID09PSByaHM7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgdGhlIGlucHV0IGZpZWxkIHNjb3BlLlxuICovXG52YXIgZ2V0U2NvcGUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgdmFyIHNjb3BlID0gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3Njb3BlJyk7XG4gIGlmICghIHNjb3BlICYmIGVsLmZvcm0pIHtcbiAgICBzY29wZSA9IGdldERhdGFBdHRyaWJ1dGUoZWwuZm9ybSwgJ3Njb3BlJyk7XG4gIH1cblxuICByZXR1cm4gc2NvcGUgfHwgbnVsbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgaW4gYW4gb2JqZWN0IHNhZmVseS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wUGF0aFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHsqfSBkZWZcbiAqL1xudmFyIGdldFBhdGggPSBmdW5jdGlvbiAocHJvcFBhdGgsIHRhcmdldCwgZGVmKSB7XG4gIGlmICggZGVmID09PSB2b2lkIDAgKSBkZWYgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKCFwcm9wUGF0aCB8fCAhdGFyZ2V0KSB7IHJldHVybiBkZWY7IH1cbiAgdmFyIHZhbHVlID0gdGFyZ2V0O1xuICBwcm9wUGF0aC5zcGxpdCgnLicpLmV2ZXJ5KGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKCEgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBwcm9wKSAmJiB2YWx1ZVtwcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGRlZjtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWVbcHJvcF07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgcGF0aCBleGlzdHMgd2l0aGluIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICovXG52YXIgaGFzUGF0aCA9IGZ1bmN0aW9uIChwYXRoLCB0YXJnZXQpIHtcbiAgdmFyIG9iaiA9IHRhcmdldDtcbiAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5ldmVyeShmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmICghIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb2JqID0gb2JqW3Byb3BdO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gcnVsZVxuICovXG52YXIgcGFyc2VSdWxlID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICB2YXIgbmFtZSA9IHJ1bGUuc3BsaXQoJzonKVswXTtcblxuICBpZiAofnJ1bGUuaW5kZXhPZignOicpKSB7XG4gICAgcGFyYW1zID0gcnVsZS5zcGxpdCgnOicpLnNsaWNlKDEpLmpvaW4oJzonKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZTogbmFtZSwgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgZ2l2ZW4gcnVsZXMgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHJ1bGVzXG4gKi9cbnZhciBub3JtYWxpemVSdWxlcyA9IGZ1bmN0aW9uIChydWxlcykge1xuICAvLyBpZiBmYWxzeSB2YWx1ZSByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIHZhbGlkYXRpb25zID0ge307XG4gIGlmIChpc09iamVjdChydWxlcykpIHtcbiAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgaWYgKHJ1bGVzW3J1bGVdID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJ1bGVzW3J1bGVdKSkge1xuICAgICAgICBwYXJhbXMgPSBydWxlc1tydWxlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IFtydWxlc1tydWxlXV07XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlc1tydWxlXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFsaWRhdGlvbnNbcnVsZV0gPSBwYXJhbXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnM7XG4gIH1cblxuICBydWxlcy5zcGxpdCgnfCcpLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgcGFyc2VkUnVsZSA9IHBhcnNlUnVsZShydWxlKTtcbiAgICBpZiAoISBwYXJzZWRSdWxlLm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWxpZGF0aW9uc1twYXJzZWRSdWxlLm5hbWVdID0gcGFyc2VkUnVsZS5wYXJhbXM7XG4gIH0pO1xuXG4gIHJldHVybiB2YWxpZGF0aW9ucztcbn07XG5cbi8qKlxuICogRGVib3VuY2VzIGEgZnVuY3Rpb24uXG4gKi9cbnZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbiwgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGlmICggd2FpdCA9PT0gdm9pZCAwICkgd2FpdCA9IDA7XG4gIGlmICggaW1tZWRpYXRlID09PSB2b2lkIDAgKSBpbW1lZGlhdGUgPSBmYWxzZTtcblxuICBpZiAod2FpdCA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgeyBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoY2FsbE5vdykgeyBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9XG4gIH07XG59O1xuXG4vKipcbiAqIEVtaXRzIGEgd2FybmluZyB0byB0aGUgY29uc29sZS5cbiAqL1xudmFyIHdhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBjb25zb2xlLndhcm4oKFwiW3ZlZS12YWxpZGF0ZV0gXCIgKyBtZXNzYWdlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJyYW5kZWQgZXJyb3Igb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqL1xudmFyIGNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIG5ldyBFcnJvcigoXCJbdmVlLXZhbGlkYXRlXSBcIiArIG1lc3NhZ2UpKTsgfTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqL1xudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiAhIEFycmF5LmlzQXJyYXkob2JqZWN0KTsgfTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBmdW5jdGlvbiBpcyBjYWxsYWJsZS5cbiAqL1xudmFyIGlzQ2FsbGFibGUgPSBmdW5jdGlvbiAoZnVuYykgeyByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgZWxlbWVudCBoYXMgdGhlIGNzcyBjbGFzcyBvbiBpdC5cbiAqL1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAhIWVsLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIikpKTtcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgcHJvdmlkZWQgY3NzIGNsYXNzTmFtZSB0byB0aGUgZWxlbWVudC5cbiAqL1xudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgZWwuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY3NzIGNsYXNzTmFtZSBmcm9tIHRoZSBlbGVtZW50LlxuICovXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIikpO1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgJyAnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBuYW1lIG9uIHRoZSBpbnB1dCBkZXBlbmRpbmcgb24gdGhlIHN0YXR1cyBmbGFnLlxuICovXG52YXIgdG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSwgc3RhdHVzKSB7XG4gIGlmICghZWwgfHwgIWNsYXNzTmFtZSkgeyByZXR1cm47IH1cblxuICBpZiAoc3RhdHVzKSB7XG4gICAgcmV0dXJuIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IHRvIGFycmF5LlxuICogU2ltcGxlIHBvbHlmaWxsIGZvciBBcnJheS5mcm9tXG4gKi9cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gKGFycmF5TGlrZSkge1xuICBpZiAoaXNDYWxsYWJsZShBcnJheS5mcm9tKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycmF5TGlrZSk7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKGFycmF5TGlrZVtpXSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59O1xuXG4vKipcbiAqIEFzc2lnbiBwb2x5ZmlsbCBmcm9tIHRoZSBtZG4uXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHZhciBvdGhlcnMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gIHdoaWxlICggbGVuLS0gPiAwICkgb3RoZXJzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChpc0NhbGxhYmxlKE9iamVjdC5hc3NpZ24pKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbIHRhcmdldCBdLmNvbmNhdCggb3RoZXJzICkpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgIGlmIChhcmcgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGFyZ1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIHRvO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWQuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnZhciB1bmlxSWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoXCJfXCIgKyAoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpKSk7IH07XG5cbi8qKlxuICogcG9seWZpbGxzIGFycmF5LmZpbmRcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGVcbiAqL1xudmFyIGZpbmQgPSBmdW5jdGlvbiAoYXJyYXksIHByZWRpY2F0ZSkge1xuICBpZiAoaXNPYmplY3QoYXJyYXkpKSB7XG4gICAgYXJyYXkgPSB0b0FycmF5KGFycmF5KTtcbiAgfVxuICBpZiAoYXJyYXkuZmluZCkge1xuICAgIHJldHVybiBhcnJheS5maW5kKHByZWRpY2F0ZSk7XG4gIH1cbiAgdmFyIHJlc3VsdDtcbiAgYXJyYXkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgZ2V0SW5wdXRFdmVudE5hbWUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgaWYgKGVsICYmIChlbC50YWdOYW1lID09PSAnU0VMRUNUJyB8fCB+WydyYWRpbycsICdjaGVja2JveCcsICdmaWxlJ10uaW5kZXhPZihlbC50eXBlKSkpIHtcbiAgICByZXR1cm4gJ2NoYW5nZSc7XG4gIH1cblxuICByZXR1cm4gJ2lucHV0Jztcbn07XG5cbnZhciBFcnJvckJhZyA9IGZ1bmN0aW9uIEVycm9yQmFnICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufTtcblxuLyoqXG4gICAqIEFkZHMgYW4gZXJyb3IgdG8gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3IgVGhlIGVycm9yIG9iamVjdC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChlcnJvcikge1xuICAvLyBoYW5kbGUgb2xkIHNpZ25hdHVyZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZXJyb3IgPSB7XG4gICAgICBmaWVsZDogYXJndW1lbnRzWzBdLFxuICAgICAgbXNnOiBhcmd1bWVudHNbMV0sXG4gICAgICBydWxlOiBhcmd1bWVudHNbMl0sXG4gICAgICBzY29wZTogYXJndW1lbnRzWzNdIHx8IG51bGxcbiAgICB9O1xuICB9XG5cbiAgZXJyb3Iuc2NvcGUgPSBlcnJvci5zY29wZSB8fCBudWxsO1xuICB0aGlzLml0ZW1zLnB1c2goZXJyb3IpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGEgZmllbGQgZXJyb3Igd2l0aCB0aGUgbmV3IGZpZWxkIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciBcbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoaWQsIGVycm9yKSB7XG4gIHZhciBpdGVtID0gZmluZCh0aGlzLml0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZCA9PT0gaWQ7IH0pO1xuICBpZiAoIWl0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaWR4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICB0aGlzLml0ZW1zLnNwbGljZShpZHgsIDEpO1xuICBpdGVtLnNjb3BlID0gZXJyb3Iuc2NvcGU7XG4gIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbn07XG5cbi8qKlxuICAgKiBHZXRzIGFsbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICogQHJldHVybiB7QXJyYXl9IGVycm9ycyBBcnJheSBvZiBhbGwgZXJyb3IgbWVzc2FnZXMuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIGFsbCAoc2NvcGUpIHtcbiAgaWYgKCEgc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUubXNnOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zY29wZSA9PT0gc2NvcGU7IH0pLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pO1xufTtcblxuLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IGVycm9ycyBpbiB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgU2NvcGUgbmFtZSwgb3B0aW9uYWwuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHJlc3VsdCBUcnVlIGlmIHRoZXJlIHdhcyBhdCBsZWFzdCBvbmUgZXJyb3IsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gYW55IChzY29wZSkge1xuICBpZiAoISBzY29wZSkge1xuICAgIHJldHVybiAhISB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiAhISB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zY29wZSA9PT0gc2NvcGU7IH0pLmxlbmd0aDtcbn07XG5cbi8qKlxuICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoISBzY29wZSkge1xuICAgIHNjb3BlID0gbnVsbDtcbiAgfVxuXG4gIHZhciByZW1vdmVDb25kaXRpb24gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zY29wZSA9PT0gc2NvcGU7IH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHJlbW92ZUNvbmRpdGlvbih0aGlzJDEuaXRlbXNbaV0pKSB7XG4gICAgICB0aGlzJDEuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgLS1pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gICAqIENvbGxlY3RzIGVycm9ycyBpbnRvIGdyb3VwcyBvciBmb3IgYSBzcGVjaWZpYyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFte3N0cmluZ30gZmllbGQgVGhlIGZpZWxkIG5hbWUuXG4gICAqIEBwYXJhbXtzdHJpbmd9IHNjb3BlIFRoZSBzY29wZSBuYW1lLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IG1hcCBJZiBpdCBzaG91bGQgbWFwIHRoZSBlcnJvcnMgdG8gc3RyaW5ncyBpbnN0ZWFkIG9mIG9iamVjdHMuXG4gICAqIEByZXR1cm4ge0FycmF5fSBlcnJvcnMgVGhlIGVycm9ycyBmb3IgdGhlIHNwZWNpZmllZCBmaWVsZC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuY29sbGVjdCA9IGZ1bmN0aW9uIGNvbGxlY3QgKGZpZWxkLCBzY29wZSwgbWFwKSB7XG4gICAgaWYgKCBtYXAgPT09IHZvaWQgMCApIG1hcCA9IHRydWU7XG5cbiAgaWYgKCEgZmllbGQpIHtcbiAgICB2YXIgY29sbGVjdGlvbiA9IHt9O1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCEgY29sbGVjdGlvbltlLmZpZWxkXSkge1xuICAgICAgICBjb2xsZWN0aW9uW2UuZmllbGRdID0gW107XG4gICAgICB9XG5cbiAgICAgIGNvbGxlY3Rpb25bZS5maWVsZF0ucHVzaChtYXAgPyBlLm1zZyA6IGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICBpZiAoISBzY29wZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQ7IH0pLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gKG1hcCA/IGUubXNnIDogZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBzY29wZTsgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiAobWFwID8gZS5tc2cgOiBlKTsgfSk7XG59O1xuLyoqXG4gICAqIEdldHMgdGhlIGludGVybmFsIGFycmF5IGxlbmd0aC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBsZW5ndGggVGhlIGludGVybmFsIGFycmF5IGxlbmd0aC5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCAoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbn07XG5cbi8qKlxuICogRmluZHMgYW5kIGZldGNoZXMgdGhlIGZpcnN0IGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBzcGVjaWZpZWQgZmllbGQgaWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeUlkID0gZnVuY3Rpb24gZmlyc3RCeUlkIChpZCkge1xuICB2YXIgZXJyb3IgPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG5cbiAgcmV0dXJuIGVycm9yID8gZXJyb3IubXNnIDogbnVsbDtcbn07XG5cbi8qKlxuICAgKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgZmllbGQgbmFtZS5cbiAgICogQHJldHVybiB7c3RyaW5nfG51bGx9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gZmlyc3QgKGZpZWxkLCBzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICB2YXIgc2VsZWN0b3IgPSB0aGlzLl9zZWxlY3RvcihmaWVsZCk7XG4gIHZhciBzY29wZWQgPSB0aGlzLl9zY29wZShmaWVsZCk7XG5cbiAgaWYgKHNjb3BlZCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmZpcnN0KHNjb3BlZC5uYW1lLCBzY29wZWQuc2NvcGUpO1xuICAgIC8vIGlmIHN1Y2ggcmVzdWx0IGV4aXN0LCByZXR1cm4gaXQuIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBhIGZpZWxkLlxuICAgIC8vIHdpdGggZG90IGluIGl0cyBuYW1lLlxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RCeVJ1bGUoc2VsZWN0b3IubmFtZSwgc2VsZWN0b3IucnVsZSwgc2NvcGUpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5maWVsZCA9PT0gZmllbGQgJiYgKHRoaXMkMS5pdGVtc1tpXS5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICByZXR1cm4gdGhpcyQxLml0ZW1zW2ldLm1zZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBlcnJvciBydWxlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gRmlyc3QgZXJyb3IgcnVsZSBvbiB0aGUgc3BlY2lmaWVkIGZpZWxkIGlmIG9uZSBpcyBmb3VuZCwgb3RoZXJ3aXNlIG51bGxcbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RSdWxlID0gZnVuY3Rpb24gZmlyc3RSdWxlIChmaWVsZCwgc2NvcGUpIHtcbiAgdmFyIGVycm9ycyA9IHRoaXMuY29sbGVjdChmaWVsZCwgc2NvcGUsIGZhbHNlKTtcblxuICByZXR1cm4gKGVycm9ycy5sZW5ndGggJiYgZXJyb3JzWzBdLnJ1bGUpIHx8IG51bGw7XG59O1xuXG4vKipcbiAgICogQ2hlY2tzIGlmIHRoZSBpbnRlcm5hbCBhcnJheSBoYXMgYXQgbGVhc3Qgb25lIGVycm9yIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHQgVHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZXJyb3IgaXMgZm91bmQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChmaWVsZCwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgcmV0dXJuICEhIHRoaXMuZmlyc3QoZmllbGQsIHNjb3BlKTtcbn07XG5cbi8qKlxuICAgKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkIGFuZCBhIHJ1bGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmaWVsZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJ1bGUgVGhlIG5hbWUgb2YgdGhlIHJ1bGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgbmFtZSBvZiB0aGUgc2NvcGUgKG9wdGlvbmFsKS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeVJ1bGUgPSBmdW5jdGlvbiBmaXJzdEJ5UnVsZSAobmFtZSwgcnVsZSwgc2NvcGUpIHtcbiAgdmFyIGVycm9yID0gdGhpcy5jb2xsZWN0KG5hbWUsIHNjb3BlLCBmYWxzZSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnJ1bGUgPT09IHJ1bGU7IH0pWzBdO1xuXG4gIHJldHVybiAoZXJyb3IgJiYgZXJyb3IubXNnKSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGVycm9ycyBieSBtYXRjaGluZyBhZ2FpbnN0IHRoZSBpZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlbW92ZUJ5SWQgPSBmdW5jdGlvbiByZW1vdmVCeUlkIChpZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzJDEuaXRlbXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICB0aGlzJDEuaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgLS1pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gICAqIFJlbW92ZXMgYWxsIGVycm9yIG1lc3NhZ2VzIGFzc29jaWF0ZWQgd2l0aCBhIHNwZWNpZmljIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgZmllbGQgd2hpY2ggbWVzc2FnZXMgYXJlIHRvIGJlIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgU2NvcGUgbmFtZSwgb3B0aW9uYWwuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoZmllbGQsIHNjb3BlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IHNjb3BlID8gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkICYmIGUuc2NvcGUgPT09IHNjb3BlOyB9XG4gICAgOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gbnVsbDsgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogR2V0IHRoZSBmaWVsZCBhdHRyaWJ1dGVzIGlmIHRoZXJlJ3MgYSBydWxlIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuX3NlbGVjdG9yID0gZnVuY3Rpb24gX3NlbGVjdG9yIChmaWVsZCkge1xuICBpZiAoZmllbGQuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzBdO1xuICAgICAgdmFyIHJ1bGUgPSByZWZbMV07XG5cbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBydWxlOiBydWxlIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICAgKiBHZXQgdGhlIGZpZWxkIHNjb3BlIGlmIHNwZWNpZmllZCB1c2luZyBkb3Qgbm90YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCB0aGUgc3BlY2lmaWUgZmllbGQuXG4gICAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5fc2NvcGUgPSBmdW5jdGlvbiBfc2NvcGUgKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgdmFyIHNjb3BlID0gcmVmWzBdO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMV07XG5cbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBzY29wZTogc2NvcGUgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIERpY3Rpb25hcnkgPSBmdW5jdGlvbiBEaWN0aW9uYXJ5IChkaWN0aW9uYXJ5KSB7XG4gIGlmICggZGljdGlvbmFyeSA9PT0gdm9pZCAwICkgZGljdGlvbmFyeSA9IHt9O1xuXG4gIHRoaXMuY29udGFpbmVyID0ge307XG4gIHRoaXMubWVyZ2UoZGljdGlvbmFyeSk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5oYXNMb2NhbGUgPSBmdW5jdGlvbiBoYXNMb2NhbGUgKGxvY2FsZSkge1xuICByZXR1cm4gISEgdGhpcy5jb250YWluZXJbbG9jYWxlXTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBzZXREYXRlRm9ybWF0IChsb2NhbGUsIGZvcm1hdCkge1xuICBpZiAoIXRoaXMuY29udGFpbmVyW2xvY2FsZV0pIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge307XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQgPSBmb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gZ2V0RGF0ZUZvcm1hdCAobG9jYWxlKSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5kYXRlRm9ybWF0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBmYWxsYmFjaykge1xuICBpZiAoISB0aGlzLmhhc01lc3NhZ2UobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrIHx8IHRoaXMuX2dldERlZmF1bHRNZXNzYWdlKGxvY2FsZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldO1xufTtcblxuLyoqXG4gKiBHZXRzIGEgc3BlY2lmaWMgbWVzc2FnZSBmb3IgZmllbGQuIGZhbGxzYmFjayB0byB0aGUgcnVsZSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRGaWVsZE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRGaWVsZE1lc3NhZ2UgKGxvY2FsZSwgZmllbGQsIGtleSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2FnZShsb2NhbGUsIGtleSk7XG4gIH1cblxuICB2YXIgZGljdCA9IHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tICYmIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tW2ZpZWxkXTtcbiAgaWYgKCEgZGljdCB8fCAhIGRpY3Rba2V5XSkge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGRpY3Rba2V5XTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLl9nZXREZWZhdWx0TWVzc2FnZSA9IGZ1bmN0aW9uIF9nZXREZWZhdWx0TWVzc2FnZSAobG9jYWxlKSB7XG4gIGlmICh0aGlzLmhhc01lc3NhZ2UobG9jYWxlLCAnX2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzLl9kZWZhdWx0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmVuLm1lc3NhZ2VzLl9kZWZhdWx0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgZmFsbGJhY2spIHtcbiAgICBpZiAoIGZhbGxiYWNrID09PSB2b2lkIDAgKSBmYWxsYmFjayA9ICcnO1xuXG4gIGlmICghIHRoaXMuaGFzQXR0cmlidXRlKGxvY2FsZSwga2V5KSkge1xuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXNba2V5XTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc01lc3NhZ2UgPSBmdW5jdGlvbiBoYXNNZXNzYWdlIChsb2NhbGUsIGtleSkge1xuICByZXR1cm4gISEgKFxuICAgIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldXG4gICk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5oYXNBdHRyaWJ1dGUgPSBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUgKGxvY2FsZSwga2V5KSB7XG4gIHJldHVybiAhISAoXG4gICAgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlcyAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldXG4gICk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlIChkaWN0aW9uYXJ5KSB7XG4gIHRoaXMuX21lcmdlKHRoaXMuY29udGFpbmVyLCBkaWN0aW9uYXJ5KTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbiBzZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgbWVzc2FnZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXNba2V5XSA9IG1lc3NhZ2U7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUgKGxvY2FsZSwga2V5LCBhdHRyaWJ1dGUpIHtcbiAgaWYgKCEgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSkge1xuICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0gPSB7XG4gICAgICBtZXNzYWdlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXNba2V5XSA9IGF0dHJpYnV0ZTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLl9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZSAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoISAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGlmICghIHRhcmdldFtrZXldKSB7XG4gICAgICAgIGFzc2lnbih0YXJnZXQsICggb2JqID0ge30sIG9ialtrZXldID0ge30sIG9iaiApKTtcbiAgICAgICAgICB2YXIgb2JqO1xuICAgICAgfVxuXG4gICAgICB0aGlzJDEuX21lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXNzaWduKHRhcmdldCwgKCBvYmokMSA9IHt9LCBvYmokMVtrZXldID0gc291cmNlW2tleV0sIG9iaiQxICkpO1xuICAgICAgdmFyIG9iaiQxO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIG1lc3NhZ2VzID0ge1xuICBfZGVmYXVsdDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIHZhbHVlIGlzIG5vdCB2YWxpZC5cIik7IH0sXG4gIGFscGhhX2Rhc2g6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBkYXNoZXMgYW5kIHVuZGVyc2NvcmVzLlwiKTsgfSxcbiAgYWxwaGFfbnVtOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnMuXCIpOyB9LFxuICBhbHBoYV9zcGFjZXM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIHNwYWNlcy5cIik7IH0sXG4gIGFscGhhOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBhbHBoYWJldGljIGNoYXJhY3RlcnMuXCIpOyB9LFxuICBiZXR3ZWVuOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYmV0d2VlbiBcIiArIG1pbiArIFwiIGFuZCBcIiArIG1heCArIFwiLlwiKTtcbn0sXG4gIGNvbmZpcm1lZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaC5cIik7IH0sXG4gIGNyZWRpdF9jYXJkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgaW52YWxpZC5cIik7IH0sXG4gIGRlY2ltYWw6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IFsnKiddO1xuICAgIHZhciBkZWNpbWFscyA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgbnVtZXJpYyBhbmQgbWF5IGNvbnRhaW4gXCIgKyAoIWRlY2ltYWxzIHx8IGRlY2ltYWxzID09PSAnKicgPyAnJyA6IGRlY2ltYWxzKSArIFwiIGRlY2ltYWwgcG9pbnRzLlwiKTtcbn0sXG4gIGRpZ2l0czogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBleGFjdGx5IGNvbnRhaW4gXCIgKyBsZW5ndGggKyBcIiBkaWdpdHMuXCIpO1xufSxcbiAgZGltZW5zaW9uczogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgd2lkdGggPSByZWZbMF07XG4gICAgdmFyIGhlaWdodCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyB3aWR0aCArIFwiIHBpeGVscyBieSBcIiArIGhlaWdodCArIFwiIHBpeGVscy5cIik7XG59LFxuICBlbWFpbDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBlbWFpbC5cIik7IH0sXG4gIGV4dDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBmaWxlLlwiKTsgfSxcbiAgaW1hZ2U6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGFuIGltYWdlLlwiKTsgfSxcbiAgaW46IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgdmFsdWUuXCIpOyB9LFxuICBpcDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzLlwiKTsgfSxcbiAgbWF4OiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgbm90IGJlIGdyZWF0ZXIgdGhhbiBcIiArIGxlbmd0aCArIFwiIGNoYXJhY3RlcnMuXCIpO1xufSxcbiAgbWF4X3ZhbHVlOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtYXggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIFwiICsgbWF4ICsgXCIgb3IgbGVzcy5cIik7XG59LFxuICBtaW1lczogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgaGF2ZSBhIHZhbGlkIGZpbGUgdHlwZS5cIik7IH0sXG4gIG1pbjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhdCBsZWFzdCBcIiArIGxlbmd0aCArIFwiIGNoYXJhY3RlcnMuXCIpO1xufSxcbiAgbWluX3ZhbHVlOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIFwiICsgbWluICsgXCIgb3IgbW9yZS5cIik7XG59LFxuICBub3RfaW46IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgdmFsdWUuXCIpOyB9LFxuICBudW1lcmljOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBudW1lcmljIGNoYXJhY3RlcnMuXCIpOyB9LFxuICByZWdleDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGZvcm1hdCBpcyBpbnZhbGlkLlwiKTsgfSxcbiAgcmVxdWlyZWQ6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyByZXF1aXJlZC5cIik7IH0sXG4gIHNpemU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHNpemUgPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGxlc3MgdGhhbiBcIiArIHNpemUgKyBcIiBLQi5cIik7XG59LFxuICB1cmw6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBpcyBub3QgYSB2YWxpZCBVUkwuXCIpOyB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgb3B0aW9ucyByZXF1aXJlZCB0byBjb25zdHJ1Y3QgYSBmaWVsZC5cbiAqL1xudmFyIEdlbmVyYXRvciA9IGZ1bmN0aW9uIEdlbmVyYXRvciAoKSB7fTtcblxuR2VuZXJhdG9yLmdlbmVyYXRlID0gZnVuY3Rpb24gZ2VuZXJhdGUgKGVsLCBiaW5kaW5nLCB2bm9kZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBtb2RlbCA9IEdlbmVyYXRvci5yZXNvbHZlTW9kZWwoYmluZGluZywgdm5vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogR2VuZXJhdG9yLnJlc29sdmVOYW1lKGVsLCB2bm9kZSksXG4gICAgZWw6IGVsLFxuICAgIGxpc3RlbjogIWJpbmRpbmcubW9kaWZpZXJzLmRpc2FibGUsXG4gICAgc2NvcGU6IEdlbmVyYXRvci5yZXNvbHZlU2NvcGUoZWwsIGJpbmRpbmcsIHZub2RlKSxcbiAgICB2bTogR2VuZXJhdG9yLm1ha2VWTSh2bm9kZS5jb250ZXh0KSxcbiAgICBleHByZXNzaW9uOiBiaW5kaW5nLnZhbHVlLFxuICAgIGNvbXBvbmVudDogdm5vZGUuY2hpbGQsXG4gICAgY2xhc3Nlczogb3B0aW9ucy5jbGFzc2VzLFxuICAgIGNsYXNzTmFtZXM6IG9wdGlvbnMuY2xhc3NOYW1lcyxcbiAgICBnZXR0ZXI6IEdlbmVyYXRvci5yZXNvbHZlR2V0dGVyKGVsLCB2bm9kZSwgbW9kZWwpLFxuICAgIGV2ZW50czogR2VuZXJhdG9yLnJlc29sdmVFdmVudHMoZWwsIHZub2RlKSB8fCBvcHRpb25zLmV2ZW50cyxcbiAgICBtb2RlbDogbW9kZWwsXG4gICAgZGVsYXk6IEdlbmVyYXRvci5yZXNvbHZlRGVsYXkoZWwsIHZub2RlLCBvcHRpb25zKSxcbiAgICBydWxlczogR2VuZXJhdG9yLnJlc29sdmVSdWxlcyhlbCwgYmluZGluZyksXG4gICAgaW5pdGlhbDogISFiaW5kaW5nLm1vZGlmaWVycy5pbml0aWFsLFxuICAgIGFsaWFzOiBHZW5lcmF0b3IucmVzb2x2ZUFsaWFzKGVsLCB2bm9kZSksXG4gICAgdmFsaWRpdHk6IG9wdGlvbnMudmFsaWRpdHksXG4gICAgYXJpYTogb3B0aW9ucy5hcmlhXG4gIH07XG59O1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBlbCBcbiAqIEBwYXJhbSB7Kn0gYmluZGluZyBcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVSdWxlcyA9IGZ1bmN0aW9uIHJlc29sdmVSdWxlcyAoZWwsIGJpbmRpbmcpIHtcbiAgaWYgKCFiaW5kaW5nIHx8ICFiaW5kaW5nLmV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ3J1bGVzJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGJpbmRpbmcudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWU7XG4gIH1cblxuICBpZiAoflsnc3RyaW5nJywgJ29iamVjdCddLmluZGV4T2YodHlwZW9mIGJpbmRpbmcudmFsdWUucnVsZXMpKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWUucnVsZXM7XG4gIH1cblxuICByZXR1cm4gYmluZGluZy52YWx1ZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5vbi1jaXJjdWxhciBwYXJ0aWFsIFZNIGluc3RhbmNlIGZyb20gYSBWdWUgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyp9IHZtIFxuICovXG5HZW5lcmF0b3IubWFrZVZNID0gZnVuY3Rpb24gbWFrZVZNICh2bSkge1xuICByZXR1cm4ge1xuICAgIGdldCAkZWwgKCkge1xuICAgICAgcmV0dXJuIHZtLiRlbDtcbiAgICB9LFxuICAgIGdldCAkcmVmcyAoKSB7XG4gICAgICByZXR1cm4gdm0uJHJlZnM7XG4gICAgfSxcbiAgICAkd2F0Y2g6IHZtLiR3YXRjaCA/IHZtLiR3YXRjaC5iaW5kKHZtKSA6IGZ1bmN0aW9uICgpIHt9LFxuICAgICR2YWxpZGF0b3I6IHZtLiR2YWxpZGF0b3IgPyB7XG4gICAgICBlcnJvcnM6IHZtLiR2YWxpZGF0b3IuZXJyb3JzLFxuICAgICAgdmFsaWRhdGU6IHZtLiR2YWxpZGF0b3IudmFsaWRhdGUuYmluZCh2bS4kdmFsaWRhdG9yKVxuICAgIH0gOiBudWxsXG4gIH07XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBkZWxheSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlRGVsYXkgPSBmdW5jdGlvbiByZXNvbHZlRGVsYXkgKGVsLCB2bm9kZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnZGVsYXknKSB8fCAodm5vZGUuY2hpbGQgJiYgdm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1kZWxheSddKSB8fCBvcHRpb25zLmRlbGF5O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgYWxpYXMgZm9yIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7Kn0gZWwgXG4gKiBAcGFyYW0geyp9IHZub2RlIFxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUFsaWFzID0gZnVuY3Rpb24gcmVzb2x2ZUFsaWFzIChlbCwgdm5vZGUpIHtcbiAgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICdhcycpIHx8ICh2bm9kZS5jaGlsZCAmJiB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LWFzJ10pIHx8IGVsLnRpdGxlIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBldmVudHMgdG8gdmFsaWRhdGUgaW4gcmVzcG9uc2UgdG8uXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlRXZlbnRzID0gZnVuY3Rpb24gcmVzb2x2ZUV2ZW50cyAoZWwsIHZub2RlKSB7XG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsaWRhdGUtb24nKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di12YWxpZGF0ZS1vbiddKTtcbiAgfVxuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsaWRhdGUtb24nKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHNjb3BlIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IGJpbmRpbmdcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVTY29wZSA9IGZ1bmN0aW9uIHJlc29sdmVTY29wZSAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKCB2bm9kZSA9PT0gdm9pZCAwICkgdm5vZGUgPSB7fTtcblxuICB2YXIgc2NvcGUgPSBudWxsO1xuICBpZiAoaXNPYmplY3QoYmluZGluZy52YWx1ZSkpIHtcbiAgICBzY29wZSA9IGJpbmRpbmcudmFsdWUuc2NvcGU7XG4gIH1cblxuICBpZiAodm5vZGUuY2hpbGQgJiYgIXNjb3BlKSB7XG4gICAgc2NvcGUgPSB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXNjb3BlJ107XG4gIH1cblxuICByZXR1cm4gc2NvcGUgfHwgZ2V0U2NvcGUoZWwpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG5vZGUgZGlyZWN0aXZlcyBjb250YWlucyBhIHYtbW9kZWwgb3IgYSBzcGVjaWZpZWQgYXJnLlxuICogQXJncyB0YWtlIHByaW9yaXR5IG92ZXIgbW9kZWxzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVNb2RlbCA9IGZ1bmN0aW9uIHJlc29sdmVNb2RlbCAoYmluZGluZywgdm5vZGUpIHtcbiAgaWYgKGJpbmRpbmcuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcuYXJnO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KGJpbmRpbmcudmFsdWUpICYmIGJpbmRpbmcudmFsdWUuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWUuYXJnO1xuICB9XG5cbiAgdmFyIG1vZGVsID0gdm5vZGUuZGF0YS5tb2RlbCB8fCBmaW5kKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ21vZGVsJzsgfSk7XG4gIGlmICghbW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB3YXRjaGFibGUgPSAvXlthLXpfXStbMC05XSooXFx3KlxcLlthLXpfXVxcdyopKiQvaS50ZXN0KG1vZGVsLmV4cHJlc3Npb24pICYmIGhhc1BhdGgobW9kZWwuZXhwcmVzc2lvbiwgdm5vZGUuY29udGV4dCk7XG5cbiAgaWYgKCF3YXRjaGFibGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb2RlbC5leHByZXNzaW9uO1xufTtcblxuLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaWVsZCBuYW1lIHRvIHRyaWdnZXIgdmFsaWRhdGlvbnMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZpZWxkIG5hbWUuXG4gICAqL1xuR2VuZXJhdG9yLnJlc29sdmVOYW1lID0gZnVuY3Rpb24gcmVzb2x2ZU5hbWUgKGVsLCB2bm9kZSkge1xuICBpZiAodm5vZGUuY2hpbGQpIHtcbiAgICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ25hbWUnKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmICh2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtbmFtZSddIHx8IHZub2RlLmNoaWxkLiRhdHRyc1snbmFtZSddKSkgfHwgdm5vZGUuY2hpbGQubmFtZTtcbiAgfVxuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnbmFtZScpIHx8IGVsLm5hbWU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSBnZXR0ZXIgaW5wdXQgdHlwZS5cbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIgPSBmdW5jdGlvbiByZXNvbHZlR2V0dGVyIChlbCwgdm5vZGUsIG1vZGVsKSB7XG4gIGlmIChtb2RlbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0UGF0aChtb2RlbCwgdm5vZGUuY29udGV4dCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aCA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWx1ZS1wYXRoJykgfHwgKHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtdmFsdWUtcGF0aCddKTtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXRoKHBhdGgsIHZub2RlLmNoaWxkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZS5jaGlsZC52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgc3dpdGNoIChlbC50eXBlKSB7XG4gIGNhc2UgJ2NoZWNrYm94JzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFtuYW1lPVxcXCJcIiArIChlbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuXG4gICAgZWxzID0gdG9BcnJheShlbHMpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuICAgIGlmICghZWxzLmxlbmd0aCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgICByZXR1cm4gZWxzLm1hcChmdW5jdGlvbiAoY2hlY2tib3gpIHsgcmV0dXJuIGNoZWNrYm94LnZhbHVlOyB9KTtcbiAgfTtcbiAgY2FzZSAncmFkaW8nOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKGVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG4gICAgdmFyIGVsbSA9IGZpbmQoZWxzLCBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuXG4gICAgcmV0dXJuIGVsbSAmJiBlbG0udmFsdWU7XG4gIH07XG4gIGNhc2UgJ2ZpbGUnOiByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5maWxlcyk7XG4gIH07XG4gIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZWwub3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC5zZWxlY3RlZDsgfSkubWFwKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC52YWx1ZTsgfSk7XG4gIH07XG4gIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVsICYmIGVsLnZhbHVlO1xuICB9O1xuICB9XG59O1xuXG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICB0YXJnZXRPZjogbnVsbCxcbiAgaW5pdGlhbDogZmFsc2UsXG4gIHNjb3BlOiBudWxsLFxuICBsaXN0ZW46IHRydWUsXG4gIG5hbWU6IG51bGwsXG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBydWxlczoge30sXG4gIHZtOiBudWxsLFxuICBjbGFzc2VzOiBmYWxzZSxcbiAgdmFsaWRpdHk6IHRydWUsXG4gIGFyaWE6IHRydWUsXG4gIGV2ZW50czogJ2lucHV0fGJsdXInLFxuICBkZWxheTogMCxcbiAgY2xhc3NOYW1lczoge1xuICAgIHRvdWNoZWQ6ICd0b3VjaGVkJywgLy8gdGhlIGNvbnRyb2wgaGFzIGJlZW4gYmx1cnJlZFxuICAgIHVudG91Y2hlZDogJ3VudG91Y2hlZCcsIC8vIHRoZSBjb250cm9sIGhhc24ndCBiZWVuIGJsdXJyZWRcbiAgICB2YWxpZDogJ3ZhbGlkJywgLy8gbW9kZWwgaXMgdmFsaWRcbiAgICBpbnZhbGlkOiAnaW52YWxpZCcsIC8vIG1vZGVsIGlzIGludmFsaWRcbiAgICBwcmlzdGluZTogJ3ByaXN0aW5lJywgLy8gY29udHJvbCBoYXMgbm90IGJlZW4gaW50ZXJhY3RlZCB3aXRoXG4gICAgZGlydHk6ICdkaXJ0eScgLy8gY29udHJvbCBoYXMgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIGRlZmF1bHQgZmxhZ3MgZm9yIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbnZhciBnZW5lcmF0ZUZsYWdzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuICh7XG4gIHVudG91Y2hlZDogdHJ1ZSxcbiAgdG91Y2hlZDogZmFsc2UsXG4gIGRpcnR5OiBmYWxzZSxcbiAgcHJpc3RpbmU6IHRydWUsXG4gIHZhbGlkOiBudWxsLFxuICBpbnZhbGlkOiBudWxsLFxuICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICBwZW5kaW5nOiBmYWxzZSxcbiAgcmVxdWlyZWQ6ICEhb3B0aW9ucy5ydWxlcy5yZXF1aXJlZFxufSk7IH07XG5cbnZhciBGaWVsZCA9IGZ1bmN0aW9uIEZpZWxkIChlbCwgb3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmlkID0gdW5pcUlkKCk7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG4gIHRoaXMud2F0Y2hlcnMgPSBbXTtcbiAgdGhpcy5ldmVudHMgPSBbXTtcbiAgdGhpcy5ydWxlcyA9IHt9O1xuICBpZiAoIXRoaXMuaXNIZWFkbGVzcyAmJiAhKHRoaXMudGFyZ2V0T2YgfHwgb3B0aW9ucy50YXJnZXRPZikpIHtcbiAgICBzZXREYXRhQXR0cmlidXRlKHRoaXMuZWwsICdpZCcsIHRoaXMuaWQpOyAvLyBjYWNoZSBmaWVsZCBpZCBpZiBpdCBpcyBpbmRlcGVuZGVudCBhbmQgaGFzIGEgcm9vdCBlbGVtZW50LlxuICB9XG4gIG9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG4gIHRoaXMudmFsaWRpdHkgPSBvcHRpb25zLnZhbGlkaXR5O1xuICB0aGlzLmFyaWEgPSBvcHRpb25zLmFyaWE7XG4gIHRoaXMuZmxhZ3MgPSBnZW5lcmF0ZUZsYWdzKG9wdGlvbnMpO1xuICB0aGlzLnZtID0gb3B0aW9ucy52bSB8fCB0aGlzLnZtO1xuICB0aGlzLmNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50IHx8IHRoaXMuY29tcG9uZW50O1xuICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDEgPSB7IGlzVnVlOiB7fSx2YWxpZGF0b3I6IHt9LGlzUmVxdWlyZWQ6IHt9LGlzRGlzYWJsZWQ6IHt9LGlzSGVhZGxlc3M6IHt9LGRpc3BsYXlOYW1lOiB7fSx2YWx1ZToge30scmVqZWN0c0ZhbHNlOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc1Z1ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMuY29tcG9uZW50O1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEudmFsaWRhdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnZtIHx8ICF0aGlzLnZtLiR2YWxpZGF0b3IpIHtcbiAgICB3YXJuKCdObyB2YWxpZGF0b3IgaW5zdGFuY2UgZGV0ZWN0ZWQuJyk7XG4gICAgcmV0dXJuIHsgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHt9IH07XG4gIH1cblxuICByZXR1cm4gdGhpcy52bS4kdmFsaWRhdG9yO1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNSZXF1aXJlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMucnVsZXMucmVxdWlyZWQ7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc0Rpc2FibGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLmlzVnVlICYmIHRoaXMuY29tcG9uZW50LmRpc2FibGVkKSB8fCAodGhpcy5lbCAmJiB0aGlzLmVsLmRpc2FibGVkKTtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzSGVhZGxlc3MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMuZWw7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRpc3BsYXkgbmFtZSAodXNlci1mcmllbmRseSBuYW1lKS5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDEuZGlzcGxheU5hbWUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5hbGlhcztcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgaW5wdXQgdmFsdWUuXG4gKiBAcmV0dXJuIHsqfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWx1ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghaXNDYWxsYWJsZSh0aGlzLmdldHRlcikpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZ2V0dGVyKCk7XG59O1xuXG4vKipcbiAqIElmIHRoZSBmaWVsZCByZWplY3RzIGZhbHNlIGFzIGEgdmFsaWQgdmFsdWUgZm9yIHRoZSByZXF1aXJlZCBydWxlLiBcbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDEucmVqZWN0c0ZhbHNlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaXNWdWUgfHwgdGhpcy5pc0hlYWRsZXNzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWwudHlwZSA9PT0gJ2NoZWNrYm94Jztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgaW5zdGFuY2UgbWF0Y2hlcyB0aGUgb3B0aW9ucyBwcm92aWRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBtYXRjaGluZyBvcHRpb25zLlxuICovXG5GaWVsZC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIG1hdGNoZXMgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gb3B0aW9ucy5pZDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID09PSBvcHRpb25zLm5hbWU7XG4gIH1cblxuICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZSA9PT0gb3B0aW9ucy5zY29wZTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLm5hbWUgPT09IHRoaXMubmFtZSAmJiBvcHRpb25zLnNjb3BlID09PSB0aGlzLnNjb3BlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAob3B0aW9ucykge1xuICB0aGlzLnRhcmdldE9mID0gb3B0aW9ucy50YXJnZXRPZiB8fCBudWxsO1xuICB0aGlzLmluaXRpYWwgPSBvcHRpb25zLmluaXRpYWwgfHwgdGhpcy5pbml0aWFsIHx8IGZhbHNlO1xuXG4gIC8vIHVwZGF0ZSBlcnJvcnMgc2NvcGUgaWYgdGhlIGZpZWxkIHNjb3BlIHdhcyBjaGFuZ2VkLlxuICBpZiAob3B0aW9ucy5zY29wZSAmJiBvcHRpb25zLnNjb3BlICE9PSB0aGlzLnNjb3BlICYmIHRoaXMudmFsaWRhdG9yLmVycm9ycyAmJiBpc0NhbGxhYmxlKHRoaXMudmFsaWRhdG9yLmVycm9ycy51cGRhdGUpKSB7XG4gICAgdGhpcy52YWxpZGF0b3IuZXJyb3JzLnVwZGF0ZSh0aGlzLmlkLCB7IHNjb3BlOiBvcHRpb25zLnNjb3BlIH0pO1xuICB9XG4gIHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IHRoaXMuc2NvcGUgfHwgbnVsbDtcbiAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZSB8fCBudWxsO1xuICB0aGlzLnJ1bGVzID0gb3B0aW9ucy5ydWxlcyAhPT0gdW5kZWZpbmVkID8gbm9ybWFsaXplUnVsZXMob3B0aW9ucy5ydWxlcykgOiB0aGlzLnJ1bGVzO1xuICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbCB8fCB0aGlzLm1vZGVsO1xuICB0aGlzLmxpc3RlbiA9IG9wdGlvbnMubGlzdGVuICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmxpc3RlbiA6IHRoaXMubGlzdGVuO1xuICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMgfHwgdGhpcy5jbGFzc2VzIHx8IGZhbHNlO1xuICB0aGlzLmNsYXNzTmFtZXMgPSBvcHRpb25zLmNsYXNzTmFtZXMgfHwgdGhpcy5jbGFzc05hbWVzIHx8IERFRkFVTFRfT1BUSU9OUy5jbGFzc05hbWVzO1xuICB0aGlzLmFsaWFzID0gb3B0aW9ucy5hbGlhcyB8fCB0aGlzLmFsaWFzO1xuICB0aGlzLmdldHRlciA9IGlzQ2FsbGFibGUob3B0aW9ucy5nZXR0ZXIpID8gb3B0aW9ucy5nZXR0ZXIgOiB0aGlzLmdldHRlcjtcbiAgdGhpcy5kZWxheSA9IG9wdGlvbnMuZGVsYXkgfHwgdGhpcy5kZWxheSB8fCAwO1xuICB0aGlzLmV2ZW50cyA9IHR5cGVvZiBvcHRpb25zLmV2ZW50cyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5ldmVudHMubGVuZ3RoID8gb3B0aW9ucy5ldmVudHMuc3BsaXQoJ3wnKSA6IHRoaXMuZXZlbnRzO1xuICB0aGlzLnVwZGF0ZURlcGVuZGVuY2llcygpO1xuICB0aGlzLmFkZEFjdGlvbkxpc3RlbmVycygpO1xuXG4gIC8vIHZhbGlkYXRlIGlmIGl0IHdhcyB2YWxpZGF0ZWQgYmVmb3JlIGFuZCBmaWVsZCB3YXMgdXBkYXRlZCBhbmQgdGhlcmUgd2FzIGEgcnVsZXMgbXV0YXRpb24uXG4gIGlmICh0aGlzLmZsYWdzLnZhbGlkYXRlZCAmJiBvcHRpb25zLnJ1bGVzICYmIHRoaXMudXBkYXRlZCkge1xuICAgIHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKChcIiNcIiArICh0aGlzLmlkKSkpO1xuICB9XG5cbiAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcblxuICAvLyBubyBuZWVkIHRvIGNvbnRpbnVlLlxuICBpZiAodGhpcy5pc0hlYWRsZXNzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIHRoaXMuYWRkVmFsdWVMaXN0ZW5lcnMoKTtcbiAgdGhpcy51cGRhdGVBcmlhQXR0cnMoKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZmllbGQgcmVxdWlyZXMgcmVmZXJlbmNlcyB0byB0YXJnZXQgZmllbGRzLlxuKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVEZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB1cGRhdGVEZXBlbmRlbmNpZXMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlc2V0IGRlcGVuZGVuY2llcy5cbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuXG4gIC8vIHdlIGdldCB0aGUgc2VsZWN0b3JzIGZvciBlYWNoIGZpZWxkLlxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5ydWxlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCByKSB7XG4gICAgaWYgKHIgPT09ICdjb25maXJtZWQnKSB7XG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3RvcjogdGhpcyQxLnJ1bGVzW3JdWzBdIHx8ICgodGhpcyQxLm5hbWUpICsgXCJfY29uZmlybWF0aW9uXCIpLCBuYW1lOiByIH0pO1xuICAgIH0gZWxzZSBpZiAoL2FmdGVyfGJlZm9yZS8udGVzdChyKSkge1xuICAgICAgcHJldi5wdXNoKHsgc2VsZWN0b3I6IHRoaXMkMS5ydWxlc1tyXVswXSwgbmFtZTogciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pO1xuXG4gIGlmICghZmllbGRzLmxlbmd0aCB8fCAhdGhpcy52bSB8fCAhdGhpcy52bS4kZWwpIHsgcmV0dXJuOyB9XG5cbiAgLy8gbXVzdCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBzYW1lIGNvbXBvbmVudCwgc28gd2UgdXNlIHRoZSB2bSByb290IGVsZW1lbnQgY29uc3RyYWluIG91ciBkb20gc2VhcmNoLlxuICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSByZWYuc2VsZWN0b3I7XG4gICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuXG4gICAgdmFyIGVsID0gbnVsbDtcbiAgICAvLyB2dWUgcmVmIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3RvclswXSA9PT0gJyQnKSB7XG4gICAgICBlbCA9IHRoaXMkMS52bS4kcmVmc1tzZWxlY3Rvci5zbGljZSgxKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRyeSBhIHF1ZXJ5IHNlbGVjdGlvbi5cbiAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICAvLyB0cnkgYSBuYW1lIHNlbGVjdG9yXG4gICAgICBlbCA9IHRoaXMkMS52bS4kZWwucXVlcnlTZWxlY3RvcigoXCJpbnB1dFtuYW1lPVxcXCJcIiArIHNlbGVjdG9yICsgXCJcXFwiXVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgdm06IHRoaXMkMS52bSxcbiAgICAgIGNsYXNzZXM6IHRoaXMkMS5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lczogdGhpcyQxLmNsYXNzTmFtZXMsXG4gICAgICBkZWxheTogdGhpcyQxLmRlbGF5LFxuICAgICAgc2NvcGU6IHRoaXMkMS5zY29wZSxcbiAgICAgIGV2ZW50czogdGhpcyQxLmV2ZW50cy5qb2luKCd8JyksXG4gICAgICBpbml0aWFsOiB0aGlzJDEuaW5pdGlhbCxcbiAgICAgIHRhcmdldE9mOiB0aGlzJDEuaWRcbiAgICB9O1xuXG4gICAgLy8gcHJvYmFibHkgYSBjb21wb25lbnQuXG4gICAgaWYgKGlzQ2FsbGFibGUoZWwuJHdhdGNoKSkge1xuICAgICAgb3B0aW9ucy5jb21wb25lbnQgPSBlbDtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbC4kZWw7XG4gICAgICBvcHRpb25zLmdldHRlciA9IEdlbmVyYXRvci5yZXNvbHZlR2V0dGVyKGVsLiRlbCwgeyBjaGlsZDogZWwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbDtcbiAgICAgIG9wdGlvbnMuZ2V0dGVyID0gR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwsIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzJDEuZGVwZW5kZW5jaWVzLnB1c2goeyBuYW1lOiBuYW1lLCBmaWVsZDogbmV3IEZpZWxkKG9wdGlvbnMuZWwsIG9wdGlvbnMpIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gdGFnXG4gKi9cbkZpZWxkLnByb3RvdHlwZS51bndhdGNoID0gZnVuY3Rpb24gdW53YXRjaCAodGFnKSB7XG4gIGlmICghdGFnKSB7XG4gICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gICAgdGhpcy53YXRjaGVycyA9IFtdO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gdGFnLnRlc3Qody50YWcpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gIXRhZy50ZXN0KHcudGFnKTsgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQgY2xhc3NlcyBkZXBlbmRpbmcgb24gZWFjaCBmaWVsZCBmbGFnIHN0YXR1cy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXMgPSBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzICgpIHtcbiAgaWYgKCF0aGlzLmNsYXNzZXMpIHsgcmV0dXJuOyB9XG5cbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLmRpcnR5LCB0aGlzLmZsYWdzLmRpcnR5KTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnByaXN0aW5lLCB0aGlzLmZsYWdzLnByaXN0aW5lKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnZhbGlkLCAhIXRoaXMuZmxhZ3MudmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMuaW52YWxpZCwgISF0aGlzLmZsYWdzLmludmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudG91Y2hlZCwgdGhpcy5mbGFncy50b3VjaGVkKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnVudG91Y2hlZCwgdGhpcy5mbGFncy51bnRvdWNoZWQpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIGF1dG9tYXRpYyBjbGFzc2VzIGFuZCBzb21lIGZsYWdzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuYWRkQWN0aW9uTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkQWN0aW9uTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZW1vdmUgcHJldmlvdXMgbGlzdGVuZXJzLlxuICB0aGlzLnVud2F0Y2goL2NsYXNzLyk7XG5cbiAgdmFyIG9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MudG91Y2hlZCA9IHRydWU7XG4gICAgdGhpcyQxLmZsYWdzLnVudG91Y2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy50b3VjaGVkLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMudW50b3VjaGVkLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2JsdXIkLyk7XG4gIH07XG5cbiAgdmFyIGlucHV0RXZlbnQgPSBnZXRJbnB1dEV2ZW50TmFtZSh0aGlzLmVsKTtcbiAgdmFyIG9uSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLmZsYWdzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MucHJpc3RpbmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcyQxLmNsYXNzZXMpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMucHJpc3RpbmUsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMuZGlydHksIHRydWUpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgbmVlZGVkIG9uY2UuXG4gICAgdGhpcyQxLnVud2F0Y2goL15jbGFzc19pbnB1dCQvKTtcbiAgfTtcblxuICBpZiAodGhpcy5pc1Z1ZSAmJiBpc0NhbGxhYmxlKHRoaXMuY29tcG9uZW50LiRvbmNlKSkge1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdpbnB1dCcsIG9uSW5wdXQpO1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdibHVyJywgb25CbHVyKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfaW5wdXQnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2JsdXInLCBvbkJsdXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGlucHV0RXZlbnQsIG9uSW5wdXQpO1xuICAvLyBDaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zIG9uIE1hYyBkb24ndCBlbWl0IGJsdXIgbmF0dXJhbGx5LCBzbyB3ZSBsaXN0ZW4gb24gY2xpY2sgaW5zdGVhZC5cbiAgdmFyIGJsdXJFdmVudCA9IFsncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHRoaXMuZWwudHlwZSkgPT09IC0xID8gJ2JsdXInIDogJ2NsaWNrJztcbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICB0YWc6ICdjbGFzc19pbnB1dCcsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24uXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRWYWx1ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZFZhbHVlTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLnVud2F0Y2goL15pbnB1dF8uKy8pO1xuICBpZiAoIXRoaXMubGlzdGVuKSB7IHJldHVybjsgfVxuXG4gIHZhciBmbiA9IG51bGw7XG4gIGlmICh0aGlzLnRhcmdldE9mKSB7XG4gICAgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEudmFsaWRhdG9yLnZhbGlkYXRlKChcIiNcIiArICh0aGlzJDEudGFyZ2V0T2YpKSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwIHx8IChpc0NhbGxhYmxlKEV2ZW50KSAmJiBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQpKSB7XG4gICAgICAgIGFyZ3NbMF0gPSB0aGlzJDEudmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzJDEudmFsaWRhdG9yLnZhbGlkYXRlKChcIiNcIiArICh0aGlzJDEuaWQpKSwgYXJnc1swXSk7XG4gICAgfTtcbiAgfVxuICB2YXIgdmFsaWRhdGUgPSBkZWJvdW5jZShmbiwgdGhpcy5kZWxheSk7XG5cbiAgdmFyIGlucHV0RXZlbnQgPSBnZXRJbnB1dEV2ZW50TmFtZSh0aGlzLmVsKTtcbiAgLy8gcmVwbGFjZSBpbnB1dCBldmVudCB3aXRoIHN1aXRhYmxlIG9uZS5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlID09PSAnaW5wdXQnID8gaW5wdXRFdmVudCA6IGU7XG4gIH0pO1xuXG4gIC8vIGlmIHRoZXJlIGlzIGEgd2F0Y2hhYmxlIG1vZGVsIGFuZCBhbiBvbiBpbnB1dCB2YWxpZGF0aW9uIGlzIHJlcXVlc3RlZC5cbiAgaWYgKHRoaXMubW9kZWwgJiYgZXZlbnRzLmluZGV4T2YoaW5wdXRFdmVudCkgIT09IC0xKSB7XG4gICAgdmFyIHVud2F0Y2ggPSB0aGlzLnZtLiR3YXRjaCh0aGlzLm1vZGVsLCB2YWxpZGF0ZSk7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2lucHV0X21vZGVsJyxcbiAgICAgIHVud2F0Y2g6IHVud2F0Y2hcbiAgICB9KTtcbiAgICAvLyBmaWx0ZXIgb3V0IGlucHV0IGV2ZW50IGFzIGl0IGlzIGFscmVhZHkgaGFuZGxlZCBieSB0aGUgd2F0Y2hlciBBUEkuXG4gICAgZXZlbnRzID0gZXZlbnRzLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZSAhPT0gaW5wdXRFdmVudDsgfSk7XG4gIH1cblxuICAvLyBBZGQgZXZlbnRzLlxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0aGlzJDEuaXNWdWUpIHtcbiAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9uKGUsIHZhbGlkYXRlKTtcbiAgICAgIHRoaXMkMS53YXRjaGVycy5wdXNoKHtcbiAgICAgICAgdGFnOiAnaW5wdXRfdnVlJyxcbiAgICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMkMS5jb21wb25lbnQuJG9mZihlLCB2YWxpZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh+WydyYWRpbycsICdjaGVja2JveCddLmluZGV4T2YodGhpcyQxLmVsLnR5cGUpKSB7XG4gICAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFtuYW1lPVxcXCJcIiArICh0aGlzJDEuZWwubmFtZSkgKyBcIlxcXCJdXCIpKTtcbiAgICAgIHRvQXJyYXkoZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICAgICAgdGhpcyQxLndhdGNoZXJzLnB1c2goe1xuICAgICAgICAgIHRhZzogJ2lucHV0X25hdGl2ZScsXG4gICAgICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcyQxLmVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgIHRoaXMkMS53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2lucHV0X25hdGl2ZScsXG4gICAgICB1bndhdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYXJpYSBhdHRyaWJ1dGVzIG9uIHRoZSBlbGVtZW50LlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlQXJpYUF0dHJzID0gZnVuY3Rpb24gdXBkYXRlQXJpYUF0dHJzICgpIHtcbiAgaWYgKCF0aGlzLmFyaWEgfHwgdGhpcy5pc0hlYWRsZXNzIHx8ICFpc0NhbGxhYmxlKHRoaXMuZWwuc2V0QXR0cmlidXRlKSkgeyByZXR1cm47IH1cblxuICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsIHRoaXMuaXNSZXF1aXJlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdGhpcy5mbGFncy5pbnZhbGlkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGN1c3RvbSB2YWxpZGl0eSBmb3IgdGhlIGZpZWxkLlxuICovXG5GaWVsZC5wcm90b3R5cGUudXBkYXRlQ3VzdG9tVmFsaWRpdHkgPSBmdW5jdGlvbiB1cGRhdGVDdXN0b21WYWxpZGl0eSAoKSB7XG4gIGlmICghdGhpcy52YWxpZGl0eSB8fCB0aGlzLmlzSGVhZGxlc3MgfHwgIWlzQ2FsbGFibGUodGhpcy5lbC5zZXRDdXN0b21WYWxpZGl0eSkpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5zZXRDdXN0b21WYWxpZGl0eSh0aGlzLmZsYWdzLnZhbGlkID8gJycgOiAodGhpcy52YWxpZGF0b3IuZXJyb3JzLmZpcnN0QnlJZCh0aGlzLmlkKSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMuXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMud2F0Y2hlcnMuZm9yRWFjaChmdW5jdGlvbiAodykgeyByZXR1cm4gdy51bndhdGNoKCk7IH0pO1xuICB0aGlzLndhdGNoZXJzID0gW107XG4gIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuZmllbGQuZGVzdHJveSgpOyB9KTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBGaWVsZC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQxICk7XG5cbnZhciBGaWVsZEJhZyA9IGZ1bmN0aW9uIEZpZWxkQmFnICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyQyID0geyBsZW5ndGg6IHt9IH07XG5cbi8qKlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGxlbmd0aC5cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDIubGVuZ3RoLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgZmllbGQgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBtYXRjaGVyIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXRjaGVyXG4gKiBAcmV0dXJuIHtGaWVsZHx1bmRlZmluZWR9IFRoZSBmaXJzdCBtYXRjaGluZyBpdGVtLlxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQkMSAobWF0Y2hlcikge1xuICByZXR1cm4gZmluZCh0aGlzLml0ZW1zLCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5tYXRjaGVzKG1hdGNoZXIpOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG1hdGNoZXJcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBtYXRjaGluZyBmaWVsZCBpdGVtcy5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIGZpbHRlciAobWF0Y2hlcikge1xuICAvLyBtdWx0aXBsZSBtYXRjaGVycyB0byBiZSB0cmllZC5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2hlcikpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIG1hdGNoZXIuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gaXRlbS5tYXRjaGVzKG0pOyB9KTsgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtYXRjaGVyKTsgfSk7XG59O1xuXG4vKipcbiAqIE1hcHMgdGhlIGZpZWxkIGl0ZW1zIHVzaW5nIHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1hcHBlclxuICovXG5GaWVsZEJhZy5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwIChtYXBwZXIpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKG1hcHBlcik7XG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCByZW1vdmVzIHRoZSBmaXJzdCBmaWVsZCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG1hdGNoZXIgb2JqZWN0LCByZXR1cm5zIHRoZSByZW1vdmVkIGl0ZW0uXG4gKiBAcGFyYW0ge09iamVjdHxGaWVsZH0gbWF0Y2hlclxuICogQHJldHVybiB7RmllbGR8bnVsbH1cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobWF0Y2hlcikge1xuICB2YXIgaXRlbSA9IG51bGw7XG4gIGlmIChtYXRjaGVyIGluc3RhbmNlb2YgRmllbGQpIHtcbiAgICBpdGVtID0gbWF0Y2hlcjtcbiAgfSBlbHNlIHtcbiAgICBpdGVtID0gdGhpcy5maW5kKG1hdGNoZXIpO1xuICB9XG5cbiAgaWYgKCFpdGVtKSB7IHJldHVybiBudWxsOyB9XG5cbiAgdmFyIGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCBpdGVtIHRvIHRoZSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7RmllbGR9IGl0ZW1cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChpdGVtKSB7XG4gIGlmICghIChpdGVtIGluc3RhbmNlb2YgRmllbGQpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ0ZpZWxkQmFnIG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRmllbGQgdGhhdCBoYXMgYW4gaWQgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIGlmICghaXRlbS5pZCkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKCdGaWVsZCBpZCBtdXN0IGJlIGRlZmluZWQuJyk7XG4gIH1cblxuICBpZiAodGhpcy5maW5kKHsgaWQ6IGl0ZW0uaWQgfSkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcigoXCJGaWVsZCB3aXRoIGlkIFwiICsgKGl0ZW0uaWQpICsgXCIgaXMgYWxyZWFkeSBhZGRlZC5cIikpO1xuICB9XG5cbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEZpZWxkQmFnLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzJDIgKTtcblxudmFyIGFmdGVyID0gZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG90aGVyID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlVmFsdWUgPSBtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSk7XG4gIHZhciBvdGhlclZhbHVlID0gbW9tZW50KG90aGVyLCBmb3JtYXQsIHRydWUpO1xuXG4gIC8vIGlmIGVpdGhlciBpcyBub3QgdmFsaWQuXG4gIGlmICghIGRhdGVWYWx1ZS5pc1ZhbGlkKCkgfHwgISBvdGhlclZhbHVlLmlzVmFsaWQoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVmFsdWUuaXNBZnRlcihvdGhlclZhbHVlKSB8fCAoaW5jbHVzaW9uICYmIGRhdGVWYWx1ZS5pc1NhbWUob3RoZXJWYWx1ZSkpO1xufTsgfTtcblxudmFyIGJlZm9yZSA9IGZ1bmN0aW9uIChtb21lbnQpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBvdGhlciA9IHJlZlswXTtcbiAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcbiAgdmFyIGZvcm1hdCA9IHJlZlsyXTtcblxuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3JtYXQgPSBpbmNsdXNpb247XG4gICAgaW5jbHVzaW9uID0gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0LCB0cnVlKTtcbiAgdmFyIG90aGVyVmFsdWUgPSBtb21lbnQob3RoZXIsIGZvcm1hdCwgdHJ1ZSk7XG5cbiAgLy8gaWYgZWl0aGVyIGlzIG5vdCB2YWxpZC5cbiAgaWYgKCEgZGF0ZVZhbHVlLmlzVmFsaWQoKSB8fCAhIG90aGVyVmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVWYWx1ZS5pc0JlZm9yZShvdGhlclZhbHVlKSB8fCAoaW5jbHVzaW9uICYmIGRhdGVWYWx1ZS5pc1NhbWUob3RoZXJWYWx1ZSkpO1xufTsgfTtcblxudmFyIGRhdGVfZm9ybWF0ID0gZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcblx0dmFyIGZvcm1hdCA9IHJlZlswXTtcblxuXHRyZXR1cm4gbW9tZW50KHZhbHVlLCBmb3JtYXQsIHRydWUpLmlzVmFsaWQoKTtcbiB9XHR9O1xuXG52YXIgZGF0ZV9iZXR3ZWVuID0gZnVuY3Rpb24gKG1vbWVudCkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcbiAgdmFyIG1pbjtcbiAgdmFyIG1heDtcbiAgdmFyIGZvcm1hdDtcbiAgdmFyIGluY2x1c2l2aXR5ID0gJygpJztcblxuICBpZiAocGFyYW1zLmxlbmd0aCA+IDMpIHtcbiAgICB2YXIgYXNzaWduO1xuICAgIChhc3NpZ24gPSBwYXJhbXMsIG1pbiA9IGFzc2lnblswXSwgbWF4ID0gYXNzaWduWzFdLCBpbmNsdXNpdml0eSA9IGFzc2lnblsyXSwgZm9ybWF0ID0gYXNzaWduWzNdKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXNzaWduJDE7XG4gICAgKGFzc2lnbiQxID0gcGFyYW1zLCBtaW4gPSBhc3NpZ24kMVswXSwgbWF4ID0gYXNzaWduJDFbMV0sIGZvcm1hdCA9IGFzc2lnbiQxWzJdKTtcbiAgfVxuXG4gIHZhciBtaW5EYXRlID0gbW9tZW50KG1pbiwgZm9ybWF0LCB0cnVlKTtcbiAgdmFyIG1heERhdGUgPSBtb21lbnQobWF4LCBmb3JtYXQsIHRydWUpO1xuICB2YXIgZGF0ZVZhbCA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0LCB0cnVlKTtcblxuICBpZiAoISAobWluRGF0ZS5pc1ZhbGlkKCkgJiYgbWF4RGF0ZS5pc1ZhbGlkKCkgJiYgZGF0ZVZhbC5pc1ZhbGlkKCkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVWYWwuaXNCZXR3ZWVuKG1pbkRhdGUsIG1heERhdGUsICdkYXlzJywgaW5jbHVzaXZpdHkpO1xufTsgfTtcblxudmFyIG1lc3NhZ2VzJDEgPSB7XG4gIGFmdGVyOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB0YXJnZXQgPSByZWZbMF07XG4gICAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgYWZ0ZXIgXCIgKyAoaW5jbHVzaW9uID8gJ29yIGVxdWFsIHRvICcgOiAnJykgKyB0YXJnZXQgKyBcIi5cIik7XG59LFxuICBiZWZvcmU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZlswXTtcbiAgICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBiZWZvcmUgXCIgKyAoaW5jbHVzaW9uID8gJ29yIGVxdWFsIHRvICcgOiAnJykgKyB0YXJnZXQgKyBcIi5cIik7XG59LFxuICBkYXRlX2JldHdlZW46IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcbiAgICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBiZXR3ZWVuIFwiICsgbWluICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xufSxcbiAgZGF0ZV9mb3JtYXQ6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGZvcm1hdCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBcIiArIGZvcm1hdCArIFwiLlwiKTtcbn1cbn07XG5cbnZhciBkYXRlID0ge1xuICBtYWtlOiBmdW5jdGlvbiAobW9tZW50KSB7IHJldHVybiAoe1xuICAgIGRhdGVfZm9ybWF0OiBkYXRlX2Zvcm1hdChtb21lbnQpLFxuICAgIGFmdGVyOiBhZnRlcihtb21lbnQpLFxuICAgIGJlZm9yZTogYmVmb3JlKG1vbWVudCksXG4gICAgZGF0ZV9iZXR3ZWVuOiBkYXRlX2JldHdlZW4obW9tZW50KVxuICB9KTsgfSxcbiAgbWVzc2FnZXM6IG1lc3NhZ2VzJDEsXG4gIGluc3RhbGxlZDogZmFsc2Vcbn07XG5cbnZhciBMT0NBTEUgPSAnZW4nO1xudmFyIFNUUklDVF9NT0RFID0gdHJ1ZTtcbnZhciBESUNUSU9OQVJZID0gbmV3IERpY3Rpb25hcnkoe1xuICBlbjoge1xuICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBjdXN0b206IHt9XG4gIH1cbn0pO1xuXG52YXIgVmFsaWRhdG9yID0gZnVuY3Rpb24gVmFsaWRhdG9yICh2YWxpZGF0aW9ucywgb3B0aW9ucykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0geyB2bTogbnVsbCwgZmFzdEV4aXQ6IHRydWUgfTtcblxuICB0aGlzLnN0cmljdCA9IFNUUklDVF9NT0RFO1xuICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvckJhZygpO1xuICB0aGlzLmZpZWxkcyA9IG5ldyBGaWVsZEJhZygpO1xuICB0aGlzLmZpZWxkQmFnID0ge307XG4gIHRoaXMuX2NyZWF0ZUZpZWxkcyh2YWxpZGF0aW9ucyk7XG4gIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gIHRoaXMuZmFzdEV4aXQgPSBvcHRpb25zLmZhc3RFeGl0IHx8IGZhbHNlO1xuICB0aGlzLm93bmVySWQgPSBvcHRpb25zLnZtICYmIG9wdGlvbnMudm0uX3VpZDtcbiAgLy8gY3JlYXRlIGl0IHN0YXRpY2FsbHkgc2luY2Ugd2UgZG9uJ3QgbmVlZCBjb25zdGFudCBhY2Nlc3MgdG8gdGhlIHZtLlxuICB0aGlzLmNsZWFuID0gb3B0aW9ucy52bSAmJiBpc0NhbGxhYmxlKG9wdGlvbnMudm0uJG5leHRUaWNrKSA/IGZ1bmN0aW9uICgpIHtcbiAgICBvcHRpb25zLnZtLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuZXJyb3JzLmNsZWFyKCk7XG4gICAgfSk7XG4gIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLmVycm9ycy5jbGVhcigpO1xuICB9O1xuXG4gIC8vIGlmIG1vbWVudGpzIGlzIHByZXNlbnQsIGluc3RhbGwgdGhlIHZhbGlkYXRvcnMuXG4gIGlmICh0eXBlb2YgbW9tZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhpcy5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzKG1vbWVudCk7XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGRpY3Rpb25hcnk6IHt9LGxvY2FsZToge30scnVsZXM6IHt9IH07XG52YXIgc3RhdGljQWNjZXNzb3JzID0geyBkaWN0aW9uYXJ5OiB7fSxydWxlczoge30gfTtcblxuLyoqXG4gKiBAcmV0dXJuIHtEaWN0aW9uYXJ5fVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuZGljdGlvbmFyeS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBESUNUSU9OQVJZO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtEaWN0aW9uYXJ5fVxuICovXG5zdGF0aWNBY2Nlc3NvcnMuZGljdGlvbmFyeS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBESUNUSU9OQVJZO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5sb2NhbGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTE9DQUxFO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSdWxlcztcbn07XG5cbi8qKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5zdGF0aWNBY2Nlc3NvcnMucnVsZXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUnVsZXM7XG59O1xuXG4vKipcbiAqIE1lcmdlcyBhIHZhbGlkYXRvciBvYmplY3QgaW50byB0aGUgUnVsZXMgYW5kIE1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci5cbiAqIEBwYXJhbXtmdW5jdGlvbnxvYmplY3R9IHZhbGlkYXRvciBUaGUgdmFsaWRhdG9yIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLl9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZSAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvcikpIHtcbiAgICBSdWxlc1tuYW1lXSA9IHZhbGlkYXRvcjtcbiAgICByZXR1cm47XG4gIH1cblxuICBSdWxlc1tuYW1lXSA9IHZhbGlkYXRvci52YWxpZGF0ZTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsaWRhdG9yLmdldE1lc3NhZ2UpKSB7XG4gICAgRElDVElPTkFSWS5zZXRNZXNzYWdlKExPQ0FMRSwgbmFtZSwgdmFsaWRhdG9yLmdldE1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHZhbGlkYXRvci5tZXNzYWdlcykge1xuICAgIERJQ1RJT05BUlkubWVyZ2UoXG4gICAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3IubWVzc2FnZXMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgICB2YXIgZGljdCA9IHByZXY7XG4gICAgICAgIGRpY3RbY3Vycl0gPSB7XG4gICAgICAgICAgbWVzc2FnZXM6ICggb2JqID0ge30sIG9ialtuYW1lXSA9IHZhbGlkYXRvci5tZXNzYWdlc1tjdXJyXSwgb2JqIClcbiAgICAgICAgfTtcbiAgICAgICAgICB2YXIgb2JqO1xuXG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgICAgfSwge30pXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHdWFyZHMgZnJvbSBleHRuc2lvbiB2aW9sYXRpb25zLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdmFsaWRhdGlvbiBydWxlLlxuICogQHBhcmFte29iamVjdH0gdmFsaWRhdG9yIGEgdmFsaWRhdGlvbiBydWxlIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLl9ndWFyZEV4dGVuZCA9IGZ1bmN0aW9uIF9ndWFyZEV4dGVuZCAobmFtZSwgdmFsaWRhdG9yKSB7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvcikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoISBpc0NhbGxhYmxlKHZhbGlkYXRvci52YWxpZGF0ZSkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGhhdmUgYSAndmFsaWRhdGUnIG1ldGhvZC5cIilcbiAgICApO1xuICB9XG5cbiAgaWYgKCEgaXNDYWxsYWJsZSh2YWxpZGF0b3IuZ2V0TWVzc2FnZSkgJiYgISBpc09iamVjdCh2YWxpZGF0b3IubWVzc2FnZXMpKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIChcIkV4dGVuc2lvbiBFcnJvcjogVGhlIHZhbGlkYXRvciAnXCIgKyBuYW1lICsgXCInIG11c3QgaGF2ZSBhICdnZXRNZXNzYWdlJyBtZXRob2Qgb3IgaGF2ZSBhICdtZXNzYWdlcycgb2JqZWN0LlwiKVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhdGljIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRpb25zIFRoZSB2YWxpZGF0aW9ucyBvYmplY3QuXG4gKiBAcmV0dXJuIHtWYWxpZGF0b3J9IHZhbGlkYXRvciBBIHZhbGlkYXRvciBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgVmFsaWRhdG9yKHZhbGlkYXRpb25zLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGN1c3RvbSB2YWxpZGF0b3IgdG8gdGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBydWxlcy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW17b2JqZWN0fGZ1bmN0aW9ufSB2YWxpZGF0b3IgVGhlIHZhbGlkYXRvciBvYmplY3QvZnVuY3Rpb24uXG4gKi9cblZhbGlkYXRvci5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBWYWxpZGF0b3IuX2d1YXJkRXh0ZW5kKG5hbWUsIHZhbGlkYXRvcik7XG4gIFZhbGlkYXRvci5fbWVyZ2UobmFtZSwgdmFsaWRhdG9yKTtcbn07XG5cbi8qKlxuICogSW5zdGFsbHMgdGhlIGRhdGV0aW1lIHZhbGlkYXRvcnMgYW5kIHRoZSBtZXNzYWdlcy5cbiAqL1xuVmFsaWRhdG9yLmluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgPSBmdW5jdGlvbiBpbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzIChtb21lbnQpIHtcbiAgaWYgKHR5cGVvZiBtb21lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB3YXJuKCdUbyB1c2UgdGhlIGRhdGUtdGltZSB2YWxpZGF0b3JzIHlvdSBtdXN0IHByb3ZpZGUgbW9tZW50IHJlZmVyZW5jZS4nKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChkYXRlLmluc3RhbGxlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvcnMgPSBkYXRlLm1ha2UobW9tZW50KTtcbiAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIFZhbGlkYXRvci5leHRlbmQobmFtZSwgdmFsaWRhdG9yc1tuYW1lXSk7XG4gIH0pO1xuXG4gIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KHtcbiAgICBlbjoge1xuICAgICAgbWVzc2FnZXM6IGRhdGUubWVzc2FnZXNcbiAgICB9XG4gIH0pO1xuICBkYXRlLmluc3RhbGxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IvcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAobmFtZSkge1xuICBkZWxldGUgUnVsZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgbG9jYWxlIGZvciBhbGwgdmFsaWRhdG9ycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxvY2FsZSBpZC5cbiAqL1xuVmFsaWRhdG9yLnNldExvY2FsZSA9IGZ1bmN0aW9uIHNldExvY2FsZSAobGFuZ3VhZ2UpIHtcbiAgICBpZiAoIGxhbmd1YWdlID09PSB2b2lkIDAgKSBsYW5ndWFnZSA9ICdlbic7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghIERJQ1RJT05BUlkuaGFzTG9jYWxlKGxhbmd1YWdlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdhcm4oJ1lvdSBhcmUgc2V0dGluZyB0aGUgdmFsaWRhdG9yIGxvY2FsZSB0byBhIGxvY2FsZSB0aGF0IGlzIG5vdCBkZWZpbmVkIGluIHRoZSBkaWNpdGlvbmFyeS4gRW5nbGlzaCBtZXNzYWdlcyBtYXkgc3RpbGwgYmUgZ2VuZXJhdGVkLicpO1xuICB9XG5cbiAgTE9DQUxFID0gbGFuZ3VhZ2U7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIG9wZXJhdGluZyBtb2RlIGZvciBhbGwgbmV3bHkgY3JlYXRlZCB2YWxpZGF0b3JzLlxuICogc3RyaWN0TW9kZSA9IHRydWU6IFZhbHVlcyB3aXRob3V0IGEgcnVsZSBhcmUgaW52YWxpZCBhbmQgY2F1c2UgZmFpbHVyZS5cbiAqIHN0cmljdE1vZGUgPSBmYWxzZTogVmFsdWVzIHdpdGhvdXQgYSBydWxlIGFyZSB2YWxpZCBhbmQgYXJlIHNraXBwZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdE1vZGUuXG4gKi9cblZhbGlkYXRvci5zZXRTdHJpY3RNb2RlID0gZnVuY3Rpb24gc2V0U3RyaWN0TW9kZSAoc3RyaWN0TW9kZSkge1xuICAgIGlmICggc3RyaWN0TW9kZSA9PT0gdm9pZCAwICkgc3RyaWN0TW9kZSA9IHRydWU7XG5cbiAgU1RSSUNUX01PREUgPSBzdHJpY3RNb2RlO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBkaWNpdGlvbmFyeSwgb3ZlcndyaXRpbmcgZXhpc3RpbmcgdmFsdWVzIGFuZCBhZGRpbmcgbmV3IG9uZXMuXG4gKlxuICogQHBhcmFte29iamVjdH0gZGF0YSBUaGUgZGljdGlvbmFyeSBvYmplY3QuXG4gKi9cblZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gdXBkYXRlRGljdGlvbmFyeSAoZGF0YSkge1xuICBESUNUSU9OQVJZLm1lcmdlKGRhdGEpO1xufTtcblxuVmFsaWRhdG9yLmFkZExvY2FsZSA9IGZ1bmN0aW9uIGFkZExvY2FsZSAobG9jYWxlKSB7XG4gIGlmICghIGxvY2FsZS5uYW1lKSB7XG4gICAgd2FybignWW91ciBsb2NhbGUgbXVzdCBoYXZlIGEgbmFtZSBwcm9wZXJ0eScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMudXBkYXRlRGljdGlvbmFyeSgoIG9iaiA9IHt9LCBvYmpbbG9jYWxlLm5hbWVdID0gbG9jYWxlLCBvYmogKSk7XG4gICAgdmFyIG9iajtcbn07XG5cblZhbGlkYXRvci5wcm90b3R5cGUuYWRkTG9jYWxlID0gZnVuY3Rpb24gYWRkTG9jYWxlIChsb2NhbGUpIHtcbiAgVmFsaWRhdG9yLmFkZExvY2FsZShsb2NhbGUpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBmaWVsZHMgdG8gYmUgdmFsaWRhdGVkLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9IE5vcm1hbGl6ZWQgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVGaWVsZHMgPSBmdW5jdGlvbiBfY3JlYXRlRmllbGRzICh2YWxpZGF0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIHZhbGlkYXRpb25zKSB7IHJldHVybjsgfVxuXG4gIE9iamVjdC5rZXlzKHZhbGlkYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCB7IG5hbWU6IGZpZWxkLCBydWxlczogdmFsaWRhdGlvbnNbZmllbGRdIH0pO1xuICAgIHRoaXMkMS5hdHRhY2gob3B0aW9ucyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEYXRlIHJ1bGVzIG5lZWQgdGhlIGV4aXN0YW5jZSBvZiBhIGZvcm1hdCwgc28gZGF0ZV9mb3JtYXQgbXVzdCBiZSBzdXBwbGllZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBydWxlIG5hbWUuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWxpZGF0aW9ucyB0aGUgZmllbGQgdmFsaWRhdGlvbnMuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBfZ2V0RGF0ZUZvcm1hdCAodmFsaWRhdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IG51bGw7XG4gIGlmICh2YWxpZGF0aW9ucy5kYXRlX2Zvcm1hdCAmJiBBcnJheS5pc0FycmF5KHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0KSkge1xuICAgIGZvcm1hdCA9IHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0WzBdO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCB8fCB0aGlzLmRpY3Rpb25hcnkuZ2V0RGF0ZUZvcm1hdCh0aGlzLmxvY2FsZSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcGFzc2VkIHJ1bGUgaXMgYSBkYXRlIHJ1bGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2lzQURhdGVSdWxlID0gZnVuY3Rpb24gX2lzQURhdGVSdWxlIChydWxlKSB7XG4gIHJldHVybiAhISB+WydhZnRlcicsICdiZWZvcmUnLCAnZGF0ZV9iZXR3ZWVuJywgJ2RhdGVfZm9ybWF0J10uaW5kZXhPZihydWxlKTtcbn07XG5cbi8qKlxuICogRm9ybWF0cyBhbiBlcnJvciBtZXNzYWdlIGZvciBmaWVsZCBhbmQgYSBydWxlLlxuICpcbiAqIEBwYXJhbXtGaWVsZH0gZmllbGQgVGhlIGZpZWxkIG9iamVjdC5cbiAqIEBwYXJhbXtvYmplY3R9IHJ1bGUgTm9ybWFsaXplZCBydWxlIG9iamVjdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIEFkZGl0aW9uYWwgSW5mb3JtYXRpb24gYWJvdXQgdGhlIHZhbGlkYXRpb24gcmVzdWx0LlxuICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZm9ybWF0RXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gX2Zvcm1hdEVycm9yTWVzc2FnZSAoZmllbGQsIHJ1bGUsIGRhdGEpIHtcbiAgICBpZiAoIGRhdGEgPT09IHZvaWQgMCApIGRhdGEgPSB7fTtcblxuICB2YXIgbmFtZSA9IHRoaXMuX2dldEZpZWxkRGlzcGxheU5hbWUoZmllbGQpO1xuICB2YXIgcGFyYW1zID0gdGhpcy5fZ2V0TG9jYWxpemVkUGFyYW1zKHJ1bGUpO1xuICAvLyBEZWZhdWx0cyB0byBlbmdsaXNoIG1lc3NhZ2UuXG4gIGlmICghIHRoaXMuZGljdGlvbmFyeS5oYXNMb2NhbGUoTE9DQUxFKSkge1xuICAgIHZhciBtc2ckMSA9IHRoaXMuZGljdGlvbmFyeS5nZXRGaWVsZE1lc3NhZ2UoJ2VuJywgZmllbGQubmFtZSwgcnVsZS5uYW1lKTtcblxuICAgIHJldHVybiBpc0NhbGxhYmxlKG1zZyQxKSA/IG1zZyQxKG5hbWUsIHBhcmFtcywgZGF0YSkgOiBtc2ckMTtcbiAgfVxuXG4gIHZhciBtc2cgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0RmllbGRNZXNzYWdlKExPQ0FMRSwgZmllbGQubmFtZSwgcnVsZS5uYW1lKTtcblxuICByZXR1cm4gaXNDYWxsYWJsZShtc2cpID8gbXNnKG5hbWUsIHBhcmFtcywgZGF0YSkgOiBtc2c7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSBydWxlIChtYWlubHkgZm9yIHRhcmdldCBmaWVsZHMpLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9nZXRMb2NhbGl6ZWRQYXJhbXMgPSBmdW5jdGlvbiBfZ2V0TG9jYWxpemVkUGFyYW1zIChydWxlKSB7XG4gIGlmICh+IFsnYWZ0ZXInLCAnYmVmb3JlJywgJ2NvbmZpcm1lZCddLmluZGV4T2YocnVsZS5uYW1lKSAmJiBydWxlLnBhcmFtcyAmJiBydWxlLnBhcmFtc1swXSkge1xuICAgIGlmIChydWxlLnBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUoTE9DQUxFLCBydWxlLnBhcmFtc1swXSwgcnVsZS5wYXJhbXNbMF0pLCBydWxlLnBhcmFtc1sxXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy5kaWN0aW9uYXJ5LmdldEF0dHJpYnV0ZShMT0NBTEUsIHJ1bGUucGFyYW1zWzBdLCBydWxlLnBhcmFtc1swXSldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlLnBhcmFtcztcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgYW4gYXBwcm9waWF0ZSBkaXNwbGF5IG5hbWUsIGZpcnN0IGNoZWNraW5nICdkYXRhLWFzJyBvciB0aGUgcmVnaXN0ZXJlZCAncHJldHR5TmFtZSdcbiAqIFRoZW4gdGhlIGRpY3Rpb25hcnksIHRoZW4gZmFsbHNiYWNrIHRvIGZpZWxkIG5hbWUuXG4gKiBAcGFyYW0ge0ZpZWxkfSBmaWVsZCBUaGUgZmllbGQgb2JqZWN0LlxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgbmFtZSB0byBiZSB1c2VkIGluIHRoZSBlcnJvcnMuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2dldEZpZWxkRGlzcGxheU5hbWUgPSBmdW5jdGlvbiBfZ2V0RmllbGREaXNwbGF5TmFtZSAoZmllbGQpIHtcbiAgcmV0dXJuIGZpZWxkLmRpc3BsYXlOYW1lIHx8IHRoaXMuZGljdGlvbmFyeS5nZXRBdHRyaWJ1dGUoTE9DQUxFLCBmaWVsZC5uYW1lLCBmaWVsZC5uYW1lKTtcbn07XG5cbi8qKlxuICogVGVzdHMgYSBzaW5nbGUgaW5wdXQgdmFsdWUgYWdhaW5zdCBhIHJ1bGUuXG4gKlxuICogQHBhcmFte0ZpZWxkfSBmaWVsZCBUaGUgZmllbGQgdW5kZXIgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbXsqfSB2YWx1ZXRoZSB2YWx1ZSBvZiB0aGUgZmllbGQuXG4gKiBAcGFyYW17b2JqZWN0fSBydWxlIHRoZSBydWxlIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgaXQgcGFzc2VzIHRoZSBjaGVjay5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fdGVzdCA9IGZ1bmN0aW9uIF90ZXN0IChmaWVsZCwgdmFsdWUsIHJ1bGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgdmFsaWRhdG9yID0gUnVsZXNbcnVsZS5uYW1lXTtcbiAgdmFyIHBhcmFtcyA9IEFycmF5LmlzQXJyYXkocnVsZS5wYXJhbXMpID8gdG9BcnJheShydWxlLnBhcmFtcykgOiBbXTtcbiAgaWYgKCEgdmFsaWRhdG9yIHx8IHR5cGVvZiB2YWxpZGF0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcigoXCJObyBzdWNoIHZhbGlkYXRvciAnXCIgKyAocnVsZS5uYW1lKSArIFwiJyBleGlzdHMuXCIpKTtcbiAgfVxuXG4gIC8vIGhhcyBmaWVsZCBkZXBlbmVuY2llc1xuICBpZiAoLyhjb25maXJtZWR8YWZ0ZXJ8YmVmb3JlKS8udGVzdChydWxlLm5hbWUpKSB7XG4gICAgdmFyIHRhcmdldCA9IGZpbmQoZmllbGQuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSBydWxlLm5hbWU7IH0pO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXMgPSBbdGFyZ2V0LmZpZWxkLnZhbHVlLCBwYXJhbXNbMV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gW3RhcmdldC5maWVsZC52YWx1ZV07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJ1bGUubmFtZSA9PT0gJ3JlcXVpcmVkJyAmJiBmaWVsZC5yZWplY3RzRmFsc2UpIHtcbiAgICAvLyBpbnZhbGlkYXRlIGZhbHNlIGlmIG5vIGFyZ3Mgd2VyZSBzcGVjaWZpZWQgYW5kIHRoZSBmaWVsZCByZWplY3RzIGZhbHNlIGJ5IGRlZmF1bHQuXG4gICAgcGFyYW1zID0gcGFyYW1zLmxlbmd0aCA/IHBhcmFtcyA6IFt0cnVlXTtcbiAgfVxuXG4gIGlmIChkYXRlLmluc3RhbGxlZCAmJiB0aGlzLl9pc0FEYXRlUnVsZShydWxlLm5hbWUpKSB7XG4gICAgdmFyIGRhdGVGb3JtYXQgPSB0aGlzLl9nZXREYXRlRm9ybWF0KGZpZWxkLnJ1bGVzKTtcbiAgICBpZiAocnVsZS5uYW1lICE9PSAnZGF0ZV9mb3JtYXQnKSB7XG4gICAgICBwYXJhbXMucHVzaChkYXRlRm9ybWF0KTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gdmFsaWRhdG9yKHZhbHVlLCBwYXJhbXMpO1xuXG4gIC8vIElmIGl0IGlzIGEgcHJvbWlzZS5cbiAgaWYgKGlzQ2FsbGFibGUocmVzdWx0LnRoZW4pKSB7XG4gICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgIHZhciBhbGxWYWxpZCA9IHRydWU7XG4gICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBhbGxWYWxpZCA9IHZhbHVlcy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gKGlzT2JqZWN0KHQpID8gdC52YWxpZCA6IHQpOyB9KTtcbiAgICAgIH0gZWxzZSB7IC8vIElzIGEgc2luZ2xlIG9iamVjdC9ib29sZWFuLlxuICAgICAgICBhbGxWYWxpZCA9IGlzT2JqZWN0KHZhbHVlcykgPyB2YWx1ZXMudmFsaWQgOiB2YWx1ZXM7XG4gICAgICAgIGRhdGEgPSB2YWx1ZXMuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEgYWxsVmFsaWQpIHtcbiAgICAgICAgdGhpcyQxLmVycm9ycy5hZGQoe1xuICAgICAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgICAgICBmaWVsZDogZmllbGQubmFtZSxcbiAgICAgICAgICBtc2c6IHRoaXMkMS5fZm9ybWF0RXJyb3JNZXNzYWdlKGZpZWxkLCBydWxlLCBkYXRhKSxcbiAgICAgICAgICBydWxlOiBydWxlLm5hbWUsXG4gICAgICAgICAgc2NvcGU6IGZpZWxkLnNjb3BlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsVmFsaWQ7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoISBpc09iamVjdChyZXN1bHQpKSB7XG4gICAgcmVzdWx0ID0geyB2YWxpZDogcmVzdWx0LCBkYXRhOiB7fSB9O1xuICB9XG5cbiAgaWYgKCEgcmVzdWx0LnZhbGlkKSB7XG4gICAgdGhpcy5lcnJvcnMuYWRkKHtcbiAgICAgIGlkOiBmaWVsZC5pZCxcbiAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgbXNnOiB0aGlzLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIHJlc3VsdC5kYXRhKSxcbiAgICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICAgIHNjb3BlOiBmaWVsZC5zY29wZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC52YWxpZDtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgZmllbGQgdG8gYmUgdmFsaWRhdGVkLlxuICpcbiAqIEBwYXJhbXtGaWVsZHxPYmplY3R9IG5hbWUgVGhlIGZpZWxkIG5hbWUuXG4gKiBAcmV0dXJuIHtGaWVsZH1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2ggKGZpZWxkKSB7XG4gIC8vIGRlcHJlY2F0ZTogaGFuZGxlIG9sZCBzaWduYXR1cmUuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZpZWxkID0gYXNzaWduKHt9LCB7XG4gICAgICBuYW1lOiBhcmd1bWVudHNbMF0sXG4gICAgICBydWxlczogYXJndW1lbnRzWzFdXG4gICAgfSwgYXJndW1lbnRzWzJdIHx8IHsgdm06IHsgJHZhbGlkYXRvcjogdGhpcyB9IH0pO1xuICB9XG5cbiAgaWYgKCEoZmllbGQgaW5zdGFuY2VvZiBGaWVsZCkpIHtcbiAgICBmaWVsZCA9IG5ldyBGaWVsZChmaWVsZC5lbCB8fCBudWxsLCBmaWVsZCk7XG4gIH1cblxuICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgLy8gdmFsaWRhdGUgaWYgaW5pdGlhbC5cbiAgaWYgKGZpZWxkLmluaXRpYWwpIHtcbiAgICB0aGlzLnZhbGlkYXRlKChcIiNcIiArIChmaWVsZC5pZCkpLCBmaWVsZC52YWx1ZSk7XG4gIH1cbiAgaWYgKCFmaWVsZC5zY29wZSkge1xuICAgIHRoaXMuZmllbGRCYWcgPSBhc3NpZ24oe30sIHRoaXMuZmllbGRCYWcsICggb2JqID0ge30sIG9ialsoXCJcIiArIChmaWVsZC5uYW1lKSldID0gZmllbGQuZmxhZ3MsIG9iaiApKTtcbiAgICAgIHZhciBvYmo7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgdmFyIHNjb3BlT2JqID0gYXNzaWduKHt9LCB0aGlzLmZpZWxkQmFnWyhcIiRcIiArIChmaWVsZC5zY29wZSkpXSB8fCB7fSwgKCBvYmokMSA9IHt9LCBvYmokMVsoXCJcIiArIChmaWVsZC5uYW1lKSldID0gZmllbGQuZmxhZ3MsIG9iaiQxICkpO1xuICAgIHZhciBvYmokMTtcbiAgdGhpcy5maWVsZEJhZyA9IGFzc2lnbih7fSwgdGhpcy5maWVsZEJhZywgKCBvYmokMiA9IHt9LCBvYmokMlsoXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0gPSBzY29wZU9iaiwgb2JqJDIgKSk7XG4gICAgdmFyIG9iaiQyO1xuXG4gIHJldHVybiBmaWVsZDtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZmxhZ3Mgb24gYSBmaWVsZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IGZsYWdzXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZmxhZyA9IGZ1bmN0aW9uIGZsYWcgKG5hbWUsIGZsYWdzKSB7XG4gIHZhciBmaWVsZCA9IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lKTtcbiAgaWYgKCEgZmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhmaWVsZC5mbGFncykuZm9yRWFjaChmdW5jdGlvbiAoZmxhZykge1xuICAgIGZpZWxkLmZsYWdzW2ZsYWddID0gZmxhZ3NbZmxhZ10gIT09IHVuZGVmaW5lZCA/IGZsYWdzW2ZsYWddIDogZmllbGQuZmxhZ3NbZmxhZ107XG4gIH0pO1xuICBpZiAoZmllbGQuY2xhc3Nlcykge1xuICAgIGZpZWxkLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgZmllbGQgZnJvbSB0aGUgdmFsaWRhdG9yLlxuICpcbiAqIEBwYXJhbXtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkLlxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBzY29wZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2ggKG5hbWUsIHNjb3BlKSB7XG4gIHZhciBmaWVsZCA9IG5hbWUgaW5zdGFuY2VvZiBGaWVsZCA/IG5hbWUgOiB0aGlzLl9yZXNvbHZlRmllbGQobmFtZSwgc2NvcGUpO1xuICBpZiAoZmllbGQpIHtcbiAgICBmaWVsZC5kZXN0cm95KCk7XG4gICAgdGhpcy5lcnJvcnMucmVtb3ZlQnlJZChmaWVsZC5pZCk7XG4gICAgdGhpcy5maWVsZHMucmVtb3ZlKGZpZWxkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci5cbiAqIEBwYXJhbXtvYmplY3R8ZnVuY3Rpb259IHZhbGlkYXRvciBUaGUgdmFsaWRhdG9yIG9iamVjdC9mdW5jdGlvbi5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBWYWxpZGF0b3IuZXh0ZW5kKG5hbWUsIHZhbGlkYXRvcik7XG59O1xuXG4vKipcbiAqIEp1c3QgYW4gYWxpYXMgdG8gdGhlIHN0YXRpYyBtZXRob2QgZm9yIGNvbnZpZW5lY2UuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIGluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgKG1vbWVudCkge1xuICBWYWxpZGF0b3IuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyhtb21lbnQpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgcnVsZSBmcm9tIHRoZSBsaXN0IG9mIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdG9yL3J1bGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gIFZhbGlkYXRvci5yZW1vdmUobmFtZSk7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbGlkYXRvciBjdXJyZW50IGxhbmdhdWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBsb2NhbGUgb3IgbGFuZ3VhZ2UgaWQuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlIChsYW5ndWFnZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCEgdGhpcy5kaWN0aW9uYXJ5Lmhhc0xvY2FsZShsYW5ndWFnZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3YXJuKCdZb3UgYXJlIHNldHRpbmcgdGhlIHZhbGlkYXRvciBsb2NhbGUgdG8gYSBsb2NhbGUgdGhhdCBpcyBub3QgZGVmaW5lZCBpbiB0aGUgZGljaXRpb25hcnkuIEVuZ2xpc2ggbWVzc2FnZXMgbWF5IHN0aWxsIGJlIGdlbmVyYXRlZC4nKTtcbiAgfVxuXG4gIExPQ0FMRSA9IGxhbmd1YWdlO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBtZXNzYWdlcyBkaWNpdGlvbmFyeSwgb3ZlcndyaXRpbmcgZXhpc3RpbmcgdmFsdWVzIGFuZCBhZGRpbmcgbmV3IG9uZXMuXG4gKlxuICogQHBhcmFte29iamVjdH0gZGF0YSBUaGUgbWVzc2FnZXMgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZURpY3Rpb25hcnkgPSBmdW5jdGlvbiB1cGRhdGVEaWN0aW9uYXJ5IChkYXRhKSB7XG4gIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGRhdGEpO1xufTtcblxuLyoqXG4gKiBUcmllcyBkaWZmZXJlbnQgc3RyYXRlZ2llcyB0byBmaW5kIGEgZmllbGQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlXG4gKiBAcmV0dXJuIHtGaWVsZH1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fcmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gX3Jlc29sdmVGaWVsZCAobmFtZSwgc2NvcGUpIHtcbiAgaWYgKHNjb3BlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBuYW1lLCBzY29wZTogc2NvcGUgfSk7XG4gIH1cblxuICBpZiAobmFtZVswXSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBpZDogbmFtZS5zbGljZSgxKSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgdmFyIHBhcnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBwYXJ0c1sxXSwgc2NvcGU6IHBhcnRzWzBdIH0pO1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmZpZWxkcy5maW5kKHsgbmFtZTogbmFtZSwgc2NvcGU6IG51bGwgfSk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgd2hlbiBhIGZpZWxkIGlzIG5vdCBmb3VuZCBkZXBlbmRpbmcgb24gdGhlIHN0cmljdCBmbGFnLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGVcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faGFuZGxlRmllbGROb3RGb3VuZCA9IGZ1bmN0aW9uIF9oYW5kbGVGaWVsZE5vdEZvdW5kIChuYW1lLCBzY29wZSkge1xuICBpZiAoISB0aGlzLnN0cmljdCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIGZ1bGxOYW1lID0gc2NvcGUgPyBuYW1lIDogKFwiXCIgKyAoc2NvcGUgPyBzY29wZSArICcuJyA6ICcnKSArIG5hbWUpO1xuICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAoXCJWYWxpZGF0aW5nIGEgbm9uLWV4aXN0YW50IGZpZWxkOiBcXFwiXCIgKyBmdWxsTmFtZSArIFwiXFxcIi4gVXNlIFxcXCJhdHRhY2goKVxcXCIgZmlyc3QuXCIpXG4gICk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgdmFsaWRhdGlvbiBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkXG4gKiBAcGFyYW0ge1Byb21pc2V9IHZhbHVlXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlID0gZnVuY3Rpb24gX3ZhbGlkYXRlIChmaWVsZCwgdmFsdWUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoISBmaWVsZC5pc1JlcXVpcmVkICYmIH5bbnVsbCwgdW5kZWZpbmVkLCAnJ10uaW5kZXhPZih2YWx1ZSkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG5cbiAgdmFyIHByb21pc2VzID0gW107XG4gIHZhciBpc0V4aXRFYXJseSA9IGZhbHNlO1xuICAvLyB1c2Ugb2YgJy5zb21lKCknIGlzIHRvIGJyZWFrIGl0ZXJhdGlvbiBpbiBtaWRkbGUgYnkgcmV0dXJuaW5nIHRydWVcbiAgT2JqZWN0LmtleXMoZmllbGQucnVsZXMpLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyQxLl90ZXN0KFxuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHsgbmFtZTogcnVsZSwgcGFyYW1zOiBmaWVsZC5ydWxlc1tydWxlXSB9XG4gICAgKTtcblxuICAgIGlmIChpc0NhbGxhYmxlKHJlc3VsdC50aGVuKSkge1xuICAgICAgcHJvbWlzZXMucHVzaChyZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcyQxLmZhc3RFeGl0ICYmICFyZXN1bHQpIHtcbiAgICAgIGlzRXhpdEVhcmx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdEFzUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZXMucHVzaChyZXN1bHRBc1Byb21pc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBpc0V4aXRFYXJseTtcbiAgfSk7XG5cbiAgaWYgKGlzRXhpdEVhcmx5KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpOyB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICB2YXIgdmFsaWQgPSB2YWx1ZXMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pO1xuICAgIHJldHVybiB2YWxpZDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhIHZhbHVlIGFnYWluc3QgYSByZWdpc3RlcmVkIGZpZWxkIHZhbGlkYXRpb25zLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgdGhlIGZpZWxkIG5hbWUuXG4gKiBAcGFyYW17Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgc2NvcGUgb2YgdGhlIGZpZWxkLlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIHZhbGlkYXRlIChuYW1lLCB2YWx1ZSwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgaWYgKHRoaXMucGF1c2VkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICAvLyBvdmVybG9hZCB0byB2YWxpZGF0ZSBhbGwuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVTY29wZXMoKTtcbiAgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIHNjb3BlbGVzcyBmaWVsZHMuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGFyZ3VtZW50c1swXSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbGwoKTtcbiAgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIGEgc2NvcGUuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdzdHJpbmcnICYmIC9eKC4rKVxcLlxcKiQvLnRlc3QoYXJndW1lbnRzWzBdKSkge1xuICAgIHZhciBtYXRjaGVkID0gYXJndW1lbnRzWzBdLm1hdGNoKC9eKC4rKVxcLlxcKiQvKVsxXTtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUFsbChtYXRjaGVkKTtcbiAgfVxuXG4gIHZhciBmaWVsZCA9IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmICghZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlRmllbGROb3RGb3VuZChuYW1lLCBzY29wZSk7XG4gIH1cbiAgdGhpcy5lcnJvcnMucmVtb3ZlQnlJZChmaWVsZC5pZCk7XG4gIGlmIChmaWVsZC5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuICBmaWVsZC5mbGFncy5wZW5kaW5nID0gdHJ1ZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKGZpZWxkLCB2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgZmllbGQuZmxhZ3MucGVuZGluZyA9IGZhbHNlO1xuICAgIGZpZWxkLmZsYWdzLnZhbGlkID0gcmVzdWx0O1xuICAgIGZpZWxkLmZsYWdzLmludmFsaWQgPSAhcmVzdWx0O1xuICAgIGZpZWxkLmZsYWdzLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgZmllbGQudXBkYXRlQXJpYUF0dHJzKCk7XG4gICAgZmllbGQudXBkYXRlQ3VzdG9tVmFsaWRpdHkoKTtcbiAgICBmaWVsZC51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn07XG5cbi8qKlxuICogUGF1c2VzIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHJldHVybiB7VmFsaWRhdG9yfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UgKCkge1xuICB0aGlzLnBhdXNlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlc3VtZXMgdGhlIHZhbGlkYXRvci5cbiAqXG4gKiBAcmV0dXJuIHtWYWxpZGF0b3J9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGVhY2ggdmFsdWUgYWdhaW5zdCB0aGUgY29ycmVzcG9uZGluZyBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqIEBwYXJhbXtPYmplY3R8U3RyaW5nfSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBiZSB2YWxpZGF0ZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB2YWxpZGF0aW9uIHJlc3VsdC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZUFsbCA9IGZ1bmN0aW9uIHZhbGlkYXRlQWxsICh2YWx1ZXMpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHRoaXMucGF1c2VkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICB2YXIgbWF0Y2hlciA9IG51bGw7XG4gIHZhciBwcm92aWRlZFZhbHVlcyA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgIG1hdGNoZXIgPSB7IHNjb3BlOiB2YWx1ZXMgfTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZXMpKSB7XG4gICAgbWF0Y2hlciA9IE9iamVjdC5rZXlzKHZhbHVlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB7IG5hbWU6IGtleSwgc2NvcGU6IGFyZ3VtZW50cyQxWzFdIHx8IG51bGwgfTtcbiAgICB9KTtcbiAgICBwcm92aWRlZFZhbHVlcyA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIG1hdGNoZXIgPSB7IHNjb3BlOiBudWxsIH07IC8vIGdsb2JhbCBzY29wZS5cbiAgfVxuXG4gIHZhciBwcm9taXNlcyA9IHRoaXMuZmllbGRzLmZpbHRlcihtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiB0aGlzJDEudmFsaWRhdGUoXG4gICAgKFwiI1wiICsgKGZpZWxkLmlkKSksXG4gICAgcHJvdmlkZWRWYWx1ZXMgPyB2YWx1ZXNbZmllbGQubmFtZV0gOiBmaWVsZC52YWx1ZVxuICApOyB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHsgcmV0dXJuIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBzY29wZXMuXG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IEFsbCBwcm9taXNlcyByZXN1bHRlZCBmcm9tIGVhY2ggc2NvcGUuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVTY29wZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZVNjb3BlcyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHRoaXMucGF1c2VkKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7IH1cblxuICB2YXIgcHJvbWlzZXMgPSB0aGlzLmZpZWxkcy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiB0aGlzJDEudmFsaWRhdGUoXG4gICAgKFwiI1wiICsgKGZpZWxkLmlkKSksXG4gICAgZmllbGQudmFsdWVcbiAgKTsgfSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7IHJldHVybiByZXN1bHRzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTsgfSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVmFsaWRhdG9yLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVmFsaWRhdG9yLCBzdGF0aWNBY2Nlc3NvcnMgKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBwYXJlbnQgdmFsaWRhdG9yIGluc3RhbmNlIHdhcyByZXF1ZXN0ZWQuXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gaW5qZWN0aW9uc1xuICovXG52YXIgcmVxdWVzdHNWYWxpZGF0b3IgPSBmdW5jdGlvbiAoaW5qZWN0aW9ucykge1xuICBpZiAoISBpbmplY3Rpb25zKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0aW9ucykgJiYgfmluamVjdGlvbnMuaW5kZXhPZignJHZhbGlkYXRvcicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNPYmplY3QoaW5qZWN0aW9ucykgJiYgaW5qZWN0aW9ucy4kdmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSB2YWxpZGF0b3IgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbnZhciBjcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAodm0sIG9wdGlvbnMpIHsgcmV0dXJuIG5ldyBWYWxpZGF0b3IobnVsbCwge1xuICBpbml0OiBmYWxzZSxcbiAgdm06IHZtLFxuICBmYXN0RXhpdDogb3B0aW9ucy5mYXN0RXhpdFxufSk7IH07XG5cbnZhciBtYWtlTWl4aW4gPSBmdW5jdGlvbiAoVnVlLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBtaXhpbiA9IHt9O1xuICBtaXhpbi5wcm92aWRlID0gZnVuY3Rpb24gcHJvdmlkZXNWYWxpZGF0b3IgKCkge1xuICAgIGlmICh0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICR2YWxpZGF0b3I6IHRoaXMuJHZhbGlkYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH07XG5cbiAgbWl4aW4uYmVmb3JlQ3JlYXRlID0gZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyBpZiBpdHMgYSByb290IGluc3RhbmNlLCBpbmplY3QgYW55d2F5cywgb3IgaWYgaXQgcmVxdWVzdGVkIGEgbmV3IGluc3RhbmNlLlxuICAgIGlmICh0aGlzLiRvcHRpb25zLiR2YWxpZGF0ZXMgfHwgIXRoaXMuJHBhcmVudCkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ZWQgPSByZXF1ZXN0c1ZhbGlkYXRvcih0aGlzLiRvcHRpb25zLmluamVjdCk7XG5cbiAgICAvLyBpZiBhdXRvbWF0aWMgaW5qZWN0aW9uIGlzIGVuYWJsZWQgYW5kIG5vIGluc3RhbmNlIHdhcyByZXF1ZXN0ZWQuXG4gICAgaWYgKCEgdGhpcy4kdmFsaWRhdG9yICYmIG9wdGlvbnMuaW5qZWN0ICYmICFyZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMuJHZhbGlkYXRvciA9IGNyZWF0ZVZhbGlkYXRvcih0aGlzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBkb24ndCBpbmplY3QgZXJyb3JzIG9yIGZpZWxkQmFnIGFzIG5vIHZhbGlkYXRvciB3YXMgcmVzb2x2ZWQuXG4gICAgaWYgKCEgcmVxdWVzdGVkICYmICEgdGhpcy4kdmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgYSB2YWxpZGF0b3IgYnV0IGl0IGlzbid0IGluamVjdGVkLCBtYXJrIGFzIHJlYWN0aXZlLlxuICAgIGlmICghIHJlcXVlc3RlZCAmJiB0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMuJHZhbGlkYXRvciwgJ2Vycm9ycycsIHRoaXMuJHZhbGlkYXRvci5lcnJvcnMpO1xuICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcy4kdmFsaWRhdG9yLCAnZmllbGRCYWcnLCB0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWcpO1xuICAgIH1cblxuICAgIGlmICghIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkW29wdGlvbnMuZXJyb3JCYWdOYW1lIHx8ICdlcnJvcnMnXSA9IGZ1bmN0aW9uIGVycm9yQmFnR2V0dGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZXJyb3JzO1xuICAgIH07XG4gICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZFtvcHRpb25zLmZpZWxkc0JhZ05hbWUgfHwgJ2ZpZWxkcyddID0gZnVuY3Rpb24gZmllbGRCYWdHZXR0ZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5maWVsZEJhZztcbiAgICB9O1xuICB9O1xuXG4gIG1peGluLmJlZm9yZURlc3Ryb3kgPSBmdW5jdGlvbiBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICAvLyBtYXJrIHRoZSB2YWxpZGF0b3IgcGF1c2VkIHRvIHByZXZlbnQgZGVsYXllZCB2YWxpZGF0aW9uLlxuICAgIGlmICh0aGlzLiR2YWxpZGF0b3IgJiYgdGhpcy4kdmFsaWRhdG9yLm93bmVySWQgPT09IHRoaXMuX3VpZCAmJiBpc0NhbGxhYmxlKHRoaXMuJHZhbGlkYXRvci5wYXVzZSkpIHtcbiAgICAgIHRoaXMuJHZhbGlkYXRvci5wYXVzZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbWl4aW47XG59O1xuXG52YXIgY29uZmlnID0ge1xuICBsb2NhbGU6ICdlbicsXG4gIGRlbGF5OiAwLFxuICBlcnJvckJhZ05hbWU6ICdlcnJvcnMnLFxuICBkaWN0aW9uYXJ5OiBudWxsLFxuICBzdHJpY3Q6IHRydWUsXG4gIGZpZWxkc0JhZ05hbWU6ICdmaWVsZHMnLFxuICBjbGFzc2VzOiBmYWxzZSxcbiAgY2xhc3NOYW1lczogdW5kZWZpbmVkLFxuICBldmVudHM6ICdpbnB1dHxibHVyJyxcbiAgaW5qZWN0OiB0cnVlLFxuICBmYXN0RXhpdDogdHJ1ZSxcbiAgYXJpYTogdHJ1ZSxcbiAgdmFsaWRpdHk6IHRydWVcbn07XG5cbi8qKlxuICogXG4gKiBcbiAqIEZpbmRzIHRoZSByZXF1ZXN0ZWQgZmllbGQgYnkgaWQgZnJvbSB0aGUgY29udGV4dCBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHJldHVybiB7RmllbGR8bnVsbH1cbiAqL1xudmFyIGZpbmRGaWVsZCA9IGZ1bmN0aW9uIChlbCwgY29udGV4dCkge1xuICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQuJHZhbGlkYXRvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQuJHZhbGlkYXRvci5maWVsZHMuZmluZCh7IGlkOiBnZXREYXRhQXR0cmlidXRlKGVsLCAnaWQnKSB9KTtcbn07XG5cbnZhciBjcmVhdGVEaXJlY3RpdmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgYmluZDogZnVuY3Rpb24gYmluZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICB2YXIgdmFsaWRhdG9yID0gdm5vZGUuY29udGV4dC4kdmFsaWRhdG9yO1xuICAgICAgaWYgKCEgdmFsaWRhdG9yKSB7XG4gICAgICAgIHdhcm4oXCJObyB2YWxpZGF0b3IgaW5zdGFuY2UgaXMgcHJlc2VudCBvbiB2bSwgZGlkIHlvdSBmb3JnZXQgdG8gaW5qZWN0ICckdmFsaWRhdG9yJz9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZE9wdGlvbnMgPSBHZW5lcmF0b3IuZ2VuZXJhdGUoZWwsIGJpbmRpbmcsIHZub2RlLCBvcHRpb25zKTtcbiAgICAgIHZhbGlkYXRvci5hdHRhY2goZmllbGRPcHRpb25zKTtcbiAgICB9LFxuICAgIGluc2VydGVkOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIHZub2RlLmNvbnRleHQpO1xuICAgICAgdmFyIHNjb3BlID0gR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpO1xuXG4gICAgICAvLyBza2lwIGlmIHNjb3BlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgaWYgKCFmaWVsZCB8fCBzY29wZSA9PT0gZmllbGQuc2NvcGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgIC8vIG9ubHkgdXBkYXRlIHNjb3BlLlxuICAgICAgZmllbGQudXBkYXRlKHsgc2NvcGU6IHNjb3BlIH0pO1xuXG4gICAgICAvLyBhbGxvd3MgdGhlIGZpZWxkIHRvIHJlLWV2YWx1YXRlZCBvbmNlIG1vcmUgaW4gdGhlIHVwZGF0ZSBob29rLlxuICAgICAgZmllbGQudXBkYXRlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIHZub2RlLmNvbnRleHQpO1xuXG4gICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgZG8gdW5lY2Nlc3Nhcnkgd29yayBpZiBubyBpbXBvcnRhbnQgY2hhbmdlIHdhcyBkb25lLlxuICAgICAgaWYgKCFmaWVsZCB8fCAoZmllbGQudXBkYXRlZCAmJiBpc0VxdWFsKGJpbmRpbmcudmFsdWUsIGJpbmRpbmcub2xkVmFsdWUpKSkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzY29wZSA9IEdlbmVyYXRvci5yZXNvbHZlU2NvcGUoZWwsIGJpbmRpbmcsIHZub2RlKTtcbiAgICAgIHZhciBydWxlcyA9IEdlbmVyYXRvci5yZXNvbHZlUnVsZXMoZWwsIGJpbmRpbmcpO1xuXG4gICAgICBmaWVsZC51cGRhdGUoe1xuICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgIHJ1bGVzOiBydWxlc1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCAoZWwsIGJpbmRpbmcsIHJlZikge1xuICAgICAgdmFyIGNvbnRleHQgPSByZWYuY29udGV4dDtcblxuICAgICAgdmFyIGZpZWxkID0gZmluZEZpZWxkKGVsLCBjb250ZXh0KTtcbiAgICAgIGlmICghZmllbGQpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGNvbnRleHQuJHZhbGlkYXRvci5kZXRhY2goZmllbGQpO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgaWYgKH5jdXJyLmluZGV4T2YoJy4nKSkge1xuICAgICAgICBwcmV2W2N1cnIuc3BsaXQoJy4nKVsxXV0gPSBjdXJyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldltjdXJyXSA9IGN1cnI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59O1xuXG4vKipcbiAqIE1hcHMgZmllbGRzIHRvIGNvbXB1dGVkIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gZmllbGRzXG4gKi9cbnZhciBtYXBGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gIHZhciBub3JtYWxpemVkID0gbm9ybWFsaXplKGZpZWxkcyk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICB2YXIgZmllbGQgPSBub3JtYWxpemVkW2N1cnJdO1xuICAgIHByZXZbY3Vycl0gPSBmdW5jdGlvbiBtYXBwZWRGaWVsZCAoKSB7XG4gICAgICBpZiAodGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnW2ZpZWxkXSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdmFsaWRhdG9yLmZpZWxkQmFnW2ZpZWxkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZGV4ID0gZmllbGQuaW5kZXhPZignLicpO1xuICAgICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgdmFyIHJlZiA9IGZpZWxkLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgc2NvcGUgPSByZWZbMF07XG4gICAgICB2YXIgbmFtZSA9IHJlZlsxXTtcblxuICAgICAgcmV0dXJuIGdldFBhdGgoKFwiJFwiICsgc2NvcGUgKyBcIi5cIiArIG5hbWUpLCB0aGlzLiR2YWxpZGF0b3IuZmllbGRCYWcsIHt9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBWdWU7XG5cbnZhciBpbnN0YWxsID0gZnVuY3Rpb24gKF9WdWUsIG9wdGlvbnMpIHtcbiAgaWYgKFZ1ZSkge1xuICAgIHdhcm4oJ2FscmVhZHkgaW5zdGFsbGVkLCBWdWUudXNlKFZlZVZhbGlkYXRlKSBzaG91bGQgb25seSBiZSBjYWxsZWQgb25jZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBWdWUgPSBfVnVlO1xuICB2YXIgY29uZmlnJCQxID0gYXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpO1xuICBpZiAoY29uZmlnJCQxLmRpY3Rpb25hcnkpIHtcbiAgICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeShjb25maWckJDEuZGljdGlvbmFyeSk7XG4gIH1cblxuICBWYWxpZGF0b3Iuc2V0TG9jYWxlKGNvbmZpZyQkMS5sb2NhbGUpO1xuICBWYWxpZGF0b3Iuc2V0U3RyaWN0TW9kZShjb25maWckJDEuc3RyaWN0KTtcblxuICBWdWUubWl4aW4obWFrZU1peGluKFZ1ZSwgY29uZmlnJCQxKSk7XG4gIFZ1ZS5kaXJlY3RpdmUoJ3ZhbGlkYXRlJywgY3JlYXRlRGlyZWN0aXZlKGNvbmZpZyQkMSkpO1xufTtcblxudmFyIGluZGV4ID0ge1xuICBpbnN0YWxsOiBpbnN0YWxsLFxuICBtYXBGaWVsZHM6IG1hcEZpZWxkcyxcbiAgVmFsaWRhdG9yOiBWYWxpZGF0b3IsXG4gIEVycm9yQmFnOiBFcnJvckJhZyxcbiAgUnVsZXM6IFJ1bGVzLFxuICB2ZXJzaW9uOiAnMi4wLjAtcmMuMTMnXG59O1xuXG5yZXR1cm4gaW5kZXg7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92ZWUtdmFsaWRhdGUvZGlzdC92ZWUtdmFsaWRhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3ZlZS12YWxpZGF0ZS9kaXN0L3ZlZS12YWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA1IDggOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby00MDQtZ3JpZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZF9fc2VjdGlvblwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1oZWFkaW5nLTQwNFwiXG4gIH0sIFtfdm0uX3YoXCJPb3BzIVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdzZWFyY2gtZm9ybScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCIsXG4gICAgICBcImlubGluZVwiOiBmYWxzZVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDEpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdE1hYWYga2FtaSB0aWRhayBtZW5lbXVrYW4gYXBhIHlhbmcga2FtdSBjYXJpIFwiKSwgX2MoJ2JyJyldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kX19zZWN0aW9uXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1pbWFnZS1yb2JvdHNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogcmVxdWlyZShcIi4uLy4uL2ltZy80MDQvcm9ib3RzLnBuZ1wiKVxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3ZGYzMzMwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zN2RmMzMzMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0zN2RmMzMzMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvcm0nLCB7XG4gICAgY2xhc3M6IFsnYy1zZWFyY2gnLCB7XG4gICAgICAnYy1zZWFyY2gtLWlubGluZSc6IF92bS5pbmxpbmUsXG4gICAgICAnaXMtc2hvd24nOiBfdm0uc2hvd1NlYXJjaEZvcm1cbiAgICB9XSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uc3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19idXR0b24gaWNvbmltIGljb25pbS1zZWFyY2gtY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVTZWFyY2hcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtc2VhcmNoX19mb3JtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygnY2l0eScpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hRdWVyeS5jaXR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnkuY2l0eVwiXG4gICAgfV0sXG4gICAgcmVmOiBcImlucHV0XCIsXG4gICAgY2xhc3M6IFsnby1pbnB1dCcsIF92bS5pbnB1dFNpemVdLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGlsaWggTG9rYXNpXCIsXG4gICAgICBcIm5hbWVcIjogXCJjaXR5XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc2VhcmNoUXVlcnkuY2l0eSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXByZXNzXCI6IF92bS5wcmV2ZW50RW50ZXIsXG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnZhbGlkYXRlKCdjaXR5JywgJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5LmNpdHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygnY2l0eScpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFja1wiXG4gIH0sIFtfdm0uX3YoXCJXYWppYiBkaWlzaS5cIildKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsnYy1mb3JtLWdyb3VwJywge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpXG4gICAgfV1cbiAgfSwgW19jKCdpbnB1dC1zdWdnZXN0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnN1Z2dlc3Rpb25PcHRpb25zLmNhdGVnb3J5XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWdnZXN0aW9uQ2xpY2tlZFwiOiBfdm0uc3VnZ2VzdGlvbkNsaWNrZWQsXG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnZhbGlkYXRlKCdrZXl3b3JkJywgJGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaFF1ZXJ5LmtleXdvcmQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2VhcmNoUXVlcnkua2V5d29yZCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnkua2V5d29yZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS52YWxpZGF0b3IuZXJyb3JzLmhhcygna2V5d29yZCcpKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtZm9ybS1mZWVkYmFja1wiXG4gIH0sIFtfdm0uX3YoXCJXYWppYiBkaWlzaS5cIildKSA6IF92bS5fZSgpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgY2xhc3M6IFsnby1idXR0b24nLCAnby1idXR0b24tLXByaW1hcnknLCAnby1idXR0b24tY3VzdG9tJywgJ28tYnV0dG9uLS1ibG9jaycsIF92bS5idG5TaXplXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFsoIV92bS5pbmxpbmUpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiWXVrLMKgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJDYXJpXCIpLCAoIV92bS5pbmxpbmUpID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIVwiKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXJpLWljb25zXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIlxuICAgIH1cbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBcIiMwMDAwMDBcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjRcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjI0XCIsXG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIH1cbiAgfSwgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMCAwaDI0djI0SDB6XCIsXG4gICAgICBcImZpbGxcIjogXCJub25lXCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jYXJpLWxhZ2lcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2FyaSBMYWdpXCIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YTJhOTRhNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWEyYTk0YTRcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01YTJhOTRhNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2gudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgcmVmOiBcImNvbnRhaW5lclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvblwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ua2V5d29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImtleXdvcmRcIlxuICAgIH1dLFxuICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJpZFwiOiBfdm0uZ2V0T3B0aW9ucy5pbnB1dElkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uZ2V0T3B0aW9ucy5wbGFjZWhvbGRlcixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ua2V5d29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImZvY3VzXCI6IF92bS5vbklucHV0Rm9jdXMsXG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ua2V5d29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sIF92bS5mZXRjaFN1Z2dlc3Rpb25zXSxcbiAgICAgIFwiYmx1clwiOiBfdm0uYmx1ckhhbmRsZXIsXG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25jaGFuZ2UsXG4gICAgICBcImtleWRvd25cIjogX3ZtLmtleWRvd25IYW5kbGVyXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zaG93SW5wdXRTdWdnZXN0aW9ucyAmJiAhX3ZtLmlzRW1wdHlTdWdnZXN0aW9ucykgPyBfYygnZGl2Jywge1xuICAgIHJlZjogXCJzdWdnZXN0aW9uc1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvbl9fc3VnZ2VzdGlvbnNcIlxuICB9LCBbX3ZtLl9sKChfdm0uc3VnZ2VzdGlvbnMpLCBmdW5jdGlvbihzdWdnZXN0aW9uKSB7XG4gICAgcmV0dXJuIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXQtc3VnZ2VzdGlvbl9faXRlbVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgICBcImRhdGEtdmFsXCI6IHN1Z2dlc3Rpb24udGV4dFxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwiaW5uZXJIVE1MXCI6IF92bS5fcyhzdWdnZXN0aW9uLmh0bWwpXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uc3VnZ2VzdGlvbkNsaWNrZWQoJGV2ZW50LCBzdWdnZXN0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldXG4gIH0pXSwgMikgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZiODk5NWJjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02Yjg5OTViY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZiODk5NWJjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0lucHV0U3VnZ2VzdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9yb2JvdHMucG5nPzRiMDRjZjIyNWVkNzNiMmQ2OThhM2M0ODMzNTIwZjU5XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy80MDQvcm9ib3RzLnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy80MDQvcm9ib3RzLnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODk5NWJjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0lucHV0U3VnZ2VzdGlvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJbnB1dFN1Z2dlc3Rpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZiODk5NWJjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmI4OTk1YmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbnB1dFN1Z2dlc3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01YTJhOTRhNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TZWFyY2gudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU2VhcmNoLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YTJhOTRhNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVhMmE5NGE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VhcmNoLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vNDA0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzdkZjMzMzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vNDA0LnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy80MDQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSA0MDQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM3ZGYzMzMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzdkZjMzMzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzLzQwNC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==