webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Journal.vue":
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

			axios.get('/api/posts').then(function (_ref) {
				var data = _ref.data;

				_this.posts = data.data;
			});
		},
		hasImage: function hasImage(image) {
			return !_.isEmpty(image);
		}
	},
	mounted: function mounted() {
		this.fetchData();
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5fc2f98f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Journal.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('section', {
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
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUpload Journal Kamu "), _c('br'), _vm._v(" Sekarang!\n\t\t\t\t\t\t\t\t\t\t")])])])])], 1)]), _vm._v(" "), _vm._l((_vm.posts), function(post) {
    return [_c('div', {
      directives: [{
        name: "masonry-tile",
        rawName: "v-masonry-tile"
      }],
      staticClass: "o-grid__col u-3/12@lg u-6/12@sm"
    }, [_c('div', {
      staticClass: "c-card c-card--dialog c-card--dialog__placeholder"
    }, [_c('div', {
      staticClass: "o-user-block"
    }, [_c('div', {
      staticClass: "o-user-block__pic"
    }, [_c('img', {
      attrs: {
        "src": post.user.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "o-user-block__info"
    }, [_c('span', {
      staticClass: "o-user-block__name"
    }, [_vm._v(_vm._s(post.user.name))]), _vm._v(" "), _c('span', {
      staticClass: "o-user-block__status"
    }, [_vm._v(_vm._s(_vm._f("dateFromNow")(post.created_at)))])])]), _vm._v(" "), _c('div', {
      staticClass: "c-card__body"
    }, [(_vm.hasImage(post.image)) ? _c('img', {
      staticClass: "o-img-content u-mb-x2",
      attrs: {
        "src": post.image
      }
    }) : _vm._e(), _vm._v(" "), _c('a', {
      attrs: {
        "href": ("/journal/" + (post.user.username) + "/" + (post.slug))
      }
    }, [_c('h3', {
      staticClass: "u-color-primary u-mb-x2"
    }, [_vm._v(_vm._s(post.title))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(post.excerpt))])])])])]
  })], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "o-section o-section--journal"
  }, [_c('div', {
    staticClass: "o-container--fluid"
  }, [_c('h1', {
    staticClass: "o-section__title u-text-center"
  }, [_vm._v("\n\t\t\t\t\tJournal\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal"
  }, [_c('div', {
    staticClass: "o-filter-journal__wrapper"
  }, [_c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Highlight")])]), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Food for Fun")])]), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Recipes")])]), _vm._v(" "), _c('div', {
    staticClass: "o-filter-journal__item"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Peoples")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fc2f98f", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/Journal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Journal.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5fc2f98f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Journal.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/Journal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Journal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fc2f98f", Component.options)
  } else {
    hotAPI.reload("data-v-5fc2f98f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSm91cm5hbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsLnZ1ZT9kMTA0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWdGQTs7O3VCQUVBOztVQUdBO0FBRkE7QUFHQTs7O1lBR0E7QUFGQTtBQUdBLHNKQUNBLENBR0E7OztBQUVBOzs7QUFDQTs7dUJBQ0E7QUFDQTtBQUNBO3FDQUNBO3FCQUNBO0FBRUE7QUFUQTs2QkFVQTtPQUNBO0FBQ0E7QUExQkEsRzs7Ozs7OztBQ2pGQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQSxzWUFBeVA7QUFDelA7QUFDQSx5T0FBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWpvdXJuYWxcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lci0tZmx1aWRcIj5cblx0XHRcdFx0PGgxIGNsYXNzPVwiby1zZWN0aW9uX190aXRsZSB1LXRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0Sm91cm5hbFxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLWZpbHRlci1qb3VybmFsX193cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkhpZ2hsaWdodDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5Gb29kIGZvciBGdW48L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLWZpbHRlci1qb3VybmFsX19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UmVjaXBlczwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5QZW9wbGVzPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJvLXNlY3Rpb24gby1zZWN0aW9uLS1ncmV5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1jb250YWluZXItLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgdi1tYXNvbnJ5XG5cdFx0XHRcdFx0IHRyYW5zaXRpb24tZHVyYXRpb249XCIwLjNzXCJcblx0XHRcdFx0XHQgaXRlbS1zZWxlY3Rvcj1cIi5vLWdyaWRfX2NvbFwiXG5cdFx0XHRcdFx0IGNvbHVtbi13aWR0aD1cIi5vLWdyaWRfX3NpemVyXCJcblx0XHRcdFx0XHQgY2xhc3M9XCJvLWdyaWRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1ncmlkX19zaXplciB1LTMvMTJAbGcgdS02LzEyQHNtXCI+PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IHYtbWFzb25yeS10aWxlIGNsYXNzPVwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImMtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8cm91dGVyLWxpbmsgdG89XCIvam91cm5hbC9jcmVhdGVcIiBjbGFzcz1cImMtY2FyZF9fdXBsb2FkLWpvdXJuYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkX19pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBmYS01eFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwiYy1jYXJkLS1kaWFsb2dfX2R1bW15X190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFVwbG9hZCBKb3VybmFsIEthbXUgPGJyPiBTZWthcmFuZyFcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1mb3I9XCJwb3N0IGluIHBvc3RzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtbWFzb25yeS10aWxlIGNsYXNzPVwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX3BpY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJwb3N0LnVzZXIuYXZhdGFyXCIgYWx0PVwiXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJvLXVzZXItYmxvY2tfX25hbWVcIj57eyBwb3N0LnVzZXIubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJvLXVzZXItYmxvY2tfX3N0YXR1c1wiPnt7IHBvc3QuY3JlYXRlZF9hdCB8IGRhdGVGcm9tTm93IH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyB2LWlmPVwiaGFzSW1hZ2UocG9zdC5pbWFnZSlcIiA6c3JjPVwicG9zdC5pbWFnZVwiIGNsYXNzPVwiby1pbWctY29udGVudCB1LW1iLXgyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSA6aHJlZj1cImAvam91cm5hbC8ke3Bvc3QudXNlci51c2VybmFtZX0vJHtwb3N0LnNsdWd9YFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ1LWNvbG9yLXByaW1hcnkgdS1tYi14MlwiPnt7IHBvc3QudGl0bGUgfX08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBwb3N0LmV4Y2VycHQgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XHRcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0ICAgIGRhdGEoKSB7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICBwb3N0czogW11cblx0XHQgIH1cblx0XHR9LFxuXHQgICAgd2F0Y2g6IHtcblx0ICAgICAgJyRyb3V0ZSc6ICdmZXRjaERhdGEnXG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAgICAgICAgICAgJ2F1dGhlbnRpY2F0ZWQnXG4gICAgICAgICAgICBdKSxcblx0XHR9LFxuXHQgICAgbWV0aG9kczoge1xuXHQgICAgICAgIGZldGNoRGF0YSgpIHtcblx0ICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJykudGhlbigoe2RhdGF9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wb3N0cyA9IGRhdGEuZGF0YTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuICAgICAgICAgICAgaGFzSW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eShpbWFnZSk7XG4gICAgICAgICAgICB9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHQgICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSm91cm5hbC52dWU/MDAzMDY3ZWUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWdyZXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5XCIsXG4gICAgICByYXdOYW1lOiBcInYtbWFzb25yeVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvbi1kdXJhdGlvblwiOiBcIjAuM3NcIixcbiAgICAgIFwiaXRlbS1zZWxlY3RvclwiOiBcIi5vLWdyaWRfX2NvbFwiLFxuICAgICAgXCJjb2x1bW4td2lkdGhcIjogXCIuby1ncmlkX19zaXplclwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRfX3NpemVyIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtYXNvbnJ5LXRpbGVcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5LXRpbGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fdXBsb2FkLWpvdXJuYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9qb3VybmFsL2NyZWF0ZVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2JvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2lubmVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBmYS01eFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZC0tZGlhbG9nX19kdW1teV9fdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0VXBsb2FkIEpvdXJuYWwgS2FtdSBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgU2VrYXJhbmchXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIpXSldKV0pXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5wb3N0cyksIGZ1bmN0aW9uKHBvc3QpIHtcbiAgICByZXR1cm4gW19jKCdkaXYnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1hc29ucnktdGlsZVwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbWFzb25yeS10aWxlXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja1wiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3BpY1wiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBwb3N0LnVzZXIuYXZhdGFyLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19uYW1lXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhwb3N0LnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19zdGF0dXNcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImRhdGVGcm9tTm93XCIpKHBvc3QuY3JlYXRlZF9hdCkpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fYm9keVwiXG4gICAgfSwgWyhfdm0uaGFzSW1hZ2UocG9zdC5pbWFnZSkpID8gX2MoJ2ltZycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8taW1nLWNvbnRlbnQgdS1tYi14MlwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcG9zdC5pbWFnZVxuICAgICAgfVxuICAgIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IChcIi9qb3VybmFsL1wiICsgKHBvc3QudXNlci51c2VybmFtZSkgKyBcIi9cIiArIChwb3N0LnNsdWcpKVxuICAgICAgfVxuICAgIH0sIFtfYygnaDMnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ1LWNvbG9yLXByaW1hcnkgdS1tYi14MlwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocG9zdC50aXRsZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKHBvc3QuZXhjZXJwdCkpXSldKV0pXSldXG4gIH0pXSwgMildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWpvdXJuYWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbl9fdGl0bGUgdS10ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRKb3VybmFsXFxuXFx0XFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxfX3dyYXBwZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWZpbHRlci1qb3VybmFsX19pdGVtXCJcbiAgfSwgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIaWdobGlnaHRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvb2QgZm9yIEZ1blwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbF9faXRlbVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmVjaXBlc1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbF9faXRlbVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUGVvcGxlc1wiKV0pXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVmYzJmOThmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZmMyZjk4ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNWZjMmY5OGZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0pvdXJuYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZmMyZjk4ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Kb3VybmFsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSm91cm5hbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWZjMmY5OGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZmMyZjk4ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiXSwic291cmNlUm9vdCI6IiJ9