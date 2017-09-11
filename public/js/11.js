webpackJsonp([11],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/journal/User.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            posts: []
        };
    },

    watch: {
        '$route': 'fetchData'
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['authenticated'])),
    methods: {
        fetchData: function fetchData() {
            var _this = this;

            var url = '/api/posts/me/';
            if (this.$route.params.status !== undefined) {
                url += this.$route.params.status;
            }
            axios.get(url).then(function (_ref) {
                var data = _ref.data;

                _this.posts = data;
            });
        },
        deletePost: function deletePost(id, index) {
            var _this2 = this;

            if (confirm("Journal yang dihapus akan hilang selamanya. Apakah Anda yakin?")) {
                axios.delete('/api/posts/' + id).then(function () {

                    _this2.posts.splice(index, 1);
                });
            }
        },
        getPostTitle: function getPostTitle(title) {
            return !_.isEmpty(title) ? title : 'Untitled journal';
        },
        getPublicOrEditLink: function getPublicOrEditLink(post) {
            var url = void 0;
            if (this.$route.params.status === 'draft') {
                url = '/journal/' + post.id + '/edit';
            } else {
                url = '/journal/' + post.user.username + '/' + post.slug;
            }

            return url;
        }
    },
    mounted: function mounted() {
        if (this.$route.params.status === undefined) {
            router.push('/me/journal/draft');
        }
        this.fetchData();
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-033fbd7b\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/journal/User.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "o-section o-section--journal"
  }, [_c('div', {
    staticClass: "o-container--fluid"
  }, [_c('h1', {
    staticClass: "o-section__title u-text-center"
  }, [_vm._v("\n                Journal\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal"
  }, [_c('div', {
    staticClass: "o-filter-journal__wrapper"
  }, [_c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/me/journal/draft"
    }
  }, [_vm._v("Draft")])], 1), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/me/journal/published"
    }
  }, [_vm._v("Published")])], 1)])])])]), _vm._v(" "), _c('section', {
    staticClass: "o-section o-section--grey"
  }, [_c('div', {
    staticClass: "o-container--fluid"
  }, [_c('div', {
    directives: [{
      name: "masonry",
      rawName: "v-masonry"
    }],
    staticClass: "o-grid",
    attrs: {
      "transition-duration": "0.3s",
      "item-selector": ".o-grid__col",
      "column-width": ".o-grid__sizer"
    }
  }, [_c('div', {
    staticClass: "o-grid__sizer u-3/12@lg u-6/12@sm"
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "masonry-tile",
      rawName: "v-masonry-tile"
    }],
    staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
  }, [_c('div', {
    staticClass: "c-card"
  }, [_c('router-link', {
    staticClass: "c-card__upload-journal",
    attrs: {
      "to": "/journal/create"
    }
  }, [_c('div', {
    staticClass: "c-card__body"
  }, [_c('div', {
    staticClass: "c-card__inner"
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o fa-5x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "c-card--dialog__dummy__title"
  }, [_vm._v("\n                                        Upload Journal Kamu "), _c('br'), _vm._v(" Sekarang!\n                                    ")])])])])], 1)]), _vm._v(" "), _vm._l((_vm.posts), function(post, index) {
    return (_vm.posts.length > 0) ? [_c('div', {
      directives: [{
        name: "masonry-tile",
        rawName: "v-masonry-tile"
      }],
      staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
    }, [_c('div', {
      staticClass: "c-card c-card--dialog__placeholder"
    }, [_c('div', {
      staticClass: "c-card__body"
    }, [_c('router-link', {
      attrs: {
        "to": _vm.getPublicOrEditLink(post)
      }
    }, [_c('h3', {
      staticClass: "u-color-primary u-mb-x2"
    }, [_vm._v(_vm._s(_vm.getPostTitle(post.title)))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(post.excerpt))])], 1), _vm._v(" "), _c('div', {
      staticClass: "c-card__footer"
    }, [_c('router-link', {
      staticClass: "o-button o-button--link",
      attrs: {
        "to": ("/journal/" + (post.id) + "/edit")
      }
    }, [_vm._v("Edit")]), _vm._v(" "), _c('button', {
      staticClass: "o-button o-button--link",
      on: {
        "click": function($event) {
          _vm.deletePost(post.id, index)
        }
      }
    }, [_vm._v("Delete")])], 1)])])] : _vm._e()
  })], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-033fbd7b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/journal/User.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/journal/User.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-033fbd7b\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/journal/User.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/journal/User.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] User.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-033fbd7b", Component.options)
  } else {
    hotAPI.reload("data-v-033fbd7b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9qb3VybmFsL1VzZXIudnVlP2MyZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9qb3VybmFsL1VzZXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFrRUE7O0FBRUE7MEJBRUE7O21CQUdBO0FBRkE7QUFHQTs7O2tCQUdBO0FBRkE7QUFHQSx5SkFDQSxDQUdBOzs7QUFFQTs7c0JBQ0E7eURBQ0E7MENBQ0E7QUFDQTs7QUFDQTs7OEJBQ0E7QUFDQTtBQUNBOztBQUNBOzsyRkFDQTtrRUFFQTs7K0NBQ0E7QUFDQTtBQUNBO0FBQ0E7bURBQ0E7K0NBQ0E7QUFDQTtnRUFDQTtnQkFDQTt1REFDQTt5Q0FDQTttQkFDQTtvRUFDQTtBQUVBOzttQkFDQTtBQUVBO0FBL0JBO2dDQWdDQTtxREFDQTt3QkFDQTtBQUNBO2FBQ0E7QUFDQTtBQW5EQSxHOzs7Ozs7O0FDckVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBLDJZQUF5UDtBQUN6UDtBQUNBLDhPQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiby1zZWN0aW9uIG8tc2VjdGlvbi0tam91cm5hbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyLS1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm8tc2VjdGlvbl9fdGl0bGUgdS10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBKb3VybmFsXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbF9fd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvbWUvam91cm5hbC9kcmFmdFwiPkRyYWZ0PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvbWUvam91cm5hbC9wdWJsaXNoZWRcIj5QdWJsaXNoZWQ8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lci0tZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtbWFzb25yeVxuICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbj1cIjAuM3NcIlxuICAgICAgICAgICAgICAgICAgICAgaXRlbS1zZWxlY3Rvcj1cIi5vLWdyaWRfX2NvbFwiXG4gICAgICAgICAgICAgICAgICAgICBjb2x1bW4td2lkdGg9XCIuby1ncmlkX19zaXplclwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm8tZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1ncmlkX19zaXplciB1LTMvMTJAbGcgdS02LzEyQHNtXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LW1hc29ucnktdGlsZSBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvam91cm5hbC9jcmVhdGVcIiBjbGFzcz1cImMtY2FyZF9fdXBsb2FkLWpvdXJuYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBmYS01eFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjLWNhcmQtLWRpYWxvZ19fZHVtbXlfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBKb3VybmFsIEthbXUgPGJyPiBTZWthcmFuZyFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwb3N0cy5sZW5ndGggPiAwXCIgdi1mb3I9XCIocG9zdCwgaW5kZXgpIGluIHBvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtbWFzb25yeS10aWxlIGNsYXNzPVwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmQgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJnZXRQdWJsaWNPckVkaXRMaW5rKHBvc3QpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidS1jb2xvci1wcmltYXJ5IHUtbWIteDJcIj57eyBnZXRQb3N0VGl0bGUocG9zdC50aXRsZSkgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3sgcG9zdC5leGNlcnB0IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jYXJkX19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJgL2pvdXJuYWwvJHtwb3N0LmlkfS9lZGl0YFwiIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLWxpbmtcIj5FZGl0PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tbGlua1wiIEBjbGljaz1cImRlbGV0ZVBvc3QocG9zdC5pZCwgaW5kZXgpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAnJHJvdXRlJzogJ2ZldGNoRGF0YSdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAgICAgICAgICdhdXRoZW50aWNhdGVkJ1xuICAgICAgICAgICAgXSksXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy9hcGkvcG9zdHMvbWUvJztcbiAgICAgICAgICAgICAgICBpZih0aGlzLiRyb3V0ZS5wYXJhbXMuc3RhdHVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IHRoaXMuJHJvdXRlLnBhcmFtcy5zdGF0dXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQb3N0KGlkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJKb3VybmFsIHlhbmcgZGloYXB1cyBha2FuIGhpbGFuZyBzZWxhbWFueWEuIEFwYWthaCBBbmRhIHlha2luP1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcGkvcG9zdHMvJHtpZH1gKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UG9zdFRpdGxlKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkodGl0bGUpID8gdGl0bGUgOiAnVW50aXRsZWQgam91cm5hbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQdWJsaWNPckVkaXRMaW5rKHBvc3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuJHJvdXRlLnBhcmFtcy5zdGF0dXMgPT09ICdkcmFmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gYC9qb3VybmFsLyR7cG9zdC5pZH0vZWRpdGA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gYC9qb3VybmFsLyR7cG9zdC51c2VyLnVzZXJuYW1lfS8ke3Bvc3Quc2x1Z31gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZih0aGlzLiRyb3V0ZS5wYXJhbXMuc3RhdHVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lL2pvdXJuYWwvZHJhZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVXNlci52dWU/NDdhZTgzNzYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWpvdXJuYWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbl9fdGl0bGUgdS10ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgSm91cm5hbFxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWZpbHRlci1qb3VybmFsX193cmFwcGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbF9faXRlbVwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvbWUvam91cm5hbC9kcmFmdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRHJhZnRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IFwiL21lL2pvdXJuYWwvcHVibGlzaGVkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQdWJsaXNoZWRcIildKV0sIDEpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5XCIsXG4gICAgICByYXdOYW1lOiBcInYtbWFzb25yeVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvbi1kdXJhdGlvblwiOiBcIjAuM3NcIixcbiAgICAgIFwiaXRlbS1zZWxlY3RvclwiOiBcIi5vLWdyaWRfX2NvbFwiLFxuICAgICAgXCJjb2x1bW4td2lkdGhcIjogXCIuby1ncmlkX19zaXplclwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX3NpemVyIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5LXRpbGVcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5LXRpbGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fdXBsb2FkLWpvdXJuYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9qb3VybmFsL2NyZWF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2JvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2lubmVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBmYS01eFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZC0tZGlhbG9nX19kdW1teV9fdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBKb3VybmFsIEthbXUgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFNla2FyYW5nIVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0ucG9zdHMpLCBmdW5jdGlvbihwb3N0LCBpbmRleCkge1xuICAgIHJldHVybiAoX3ZtLnBvc3RzLmxlbmd0aCA+IDApID8gW19jKCdkaXYnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1hc29ucnktdGlsZVwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbWFzb25yeS10aWxlXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fYm9keVwiXG4gICAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogX3ZtLmdldFB1YmxpY09yRWRpdExpbmsocG9zdClcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2gzJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidS1jb2xvci1wcmltYXJ5IHUtbWIteDJcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRQb3N0VGl0bGUocG9zdC50aXRsZSkpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhwb3N0LmV4Y2VycHQpKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2Zvb3RlclwiXG4gICAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uIG8tYnV0dG9uLS1saW5rXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IChcIi9qb3VybmFsL1wiICsgKHBvc3QuaWQpICsgXCIvZWRpdFwiKVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJFZGl0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tbGlua1wiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlUG9zdChwb3N0LmlkLCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0sIDEpXSldKV0gOiBfdm0uX2UoKVxuICB9KV0sIDIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAzM2ZiZDdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMzNmYmQ3YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvam91cm5hbC9Vc2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMzNmYmQ3YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvam91cm5hbC9Vc2VyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Vc2VyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDMzZmJkN2JcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXNlci52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvam91cm5hbC9Vc2VyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVXNlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDMzZmJkN2JcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMzNmYmQ3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9qb3VybmFsL1VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvam91cm5hbC9Vc2VyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==