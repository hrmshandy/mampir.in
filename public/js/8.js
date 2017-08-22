webpackJsonp([8],{

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

				_this.posts = data;
			});
		},
		createNewJournal: function createNewJournal(e) {
			if (!this.authenticated) {
				Event.fire('show-login-modal', e);
			} else {
				window.location = '/journal/create';
			}
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
  }, [_c('a', {
    staticClass: "c-card__upload-journal",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.createNewJournal($event)
      }
    }
  }, [_vm._m(1)])])]), _vm._v(" "), _vm._l((_vm.posts), function(post) {
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
    }, [_c('h3', {
      staticClass: "u-color-primary u-mb-x2"
    }, [_vm._v(_vm._s(post.title))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(post.excerpt))])])])])]
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
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUpload Journal Kamu "), _c('br'), _vm._v(" Sekarang!\n\t\t\t\t\t\t\t\t\t\t")])])])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSm91cm5hbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsLnZ1ZT9kMTA0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQTZFQTs7O3VCQUVBOztVQUdBO0FBRkE7QUFHQTs7O1lBR0E7QUFGQTtBQUdBLHNKQUNBLENBR0E7OztBQUVBOzs7QUFDQTs7a0JBQ0E7QUFDQTtBQUNBO2lEQUNBOzRCQUNBO21DQUNBO1VBQ0E7c0JBQ0E7QUFDQTtBQUVBO0FBYkE7NkJBY0E7T0FDQTtBQUNBO0FBOUJBLEc7Ozs7Ozs7QUM5RUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBLHNZQUF5UDtBQUN6UDtBQUNBLHlPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy84LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJvLXNlY3Rpb24gby1zZWN0aW9uLS1qb3VybmFsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiby1jb250YWluZXItLWZsdWlkXCI+XG5cdFx0XHRcdDxoMSBjbGFzcz1cIm8tc2VjdGlvbl9fdGl0bGUgdS10ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdEpvdXJuYWxcblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbF9fd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5IaWdobGlnaHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLWZpbHRlci1qb3VybmFsX19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Rm9vZCBmb3IgRnVuPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiby1maWx0ZXItam91cm5hbF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlJlY2lwZXM8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvLWZpbHRlci1qb3VybmFsX19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UGVvcGxlczwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxzZWN0aW9uIGNsYXNzPVwiby1zZWN0aW9uIG8tc2VjdGlvbi0tZ3JleVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tY29udGFpbmVyLS1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IHYtbWFzb25yeVxuXHRcdFx0XHRcdCB0cmFuc2l0aW9uLWR1cmF0aW9uPVwiMC4zc1wiXG5cdFx0XHRcdFx0IGl0ZW0tc2VsZWN0b3I9XCIuby1ncmlkX19jb2xcIlxuXHRcdFx0XHRcdCBjb2x1bW4td2lkdGg9XCIuby1ncmlkX19zaXplclwiXG5cdFx0XHRcdFx0IGNsYXNzPVwiby1ncmlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tZ3JpZF9fc2l6ZXIgdS0zLzEyQGxnIHUtNi8xMkBzbVwiPjwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiB2LW1hc29ucnktdGlsZSBjbGFzcz1cIm8tZ3JpZF9fY29sIHUtMy8xMkBsZyB1LTYvMTJAc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjLWNhcmRcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImMtY2FyZF9fdXBsb2FkLWpvdXJuYWxcIiBAY2xpY2sucHJldmVudD1cImNyZWF0ZU5ld0pvdXJuYWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkX19pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtbyBmYS01eFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwiYy1jYXJkLS1kaWFsb2dfX2R1bW15X190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFVwbG9hZCBKb3VybmFsIEthbXUgPGJyPiBTZWthcmFuZyFcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cInBvc3QgaW4gcG9zdHNcIj5cblx0XHRcdFx0XHRcdDxkaXYgdi1tYXNvbnJ5LXRpbGUgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTMvMTJAbGcgdS02LzEyQHNtXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19fcGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cInBvc3QudXNlci5hdmF0YXJcIiBhbHQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19faW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IHBvc3QudXNlci5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fc3RhdHVzXCI+e3sgcG9zdC5jcmVhdGVkX2F0IHwgZGF0ZUZyb21Ob3cgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYy1jYXJkX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ1LWNvbG9yLXByaW1hcnkgdS1tYi14MlwiPnt7IHBvc3QudGl0bGUgfX08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBwb3N0LmV4Y2VycHQgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XHRcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0ICAgIGRhdGEoKSB7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICBwb3N0czogW11cblx0XHQgIH1cblx0XHR9LFxuXHQgICAgd2F0Y2g6IHtcblx0ICAgICAgJyRyb3V0ZSc6ICdmZXRjaERhdGEnXG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAgICAgICAgICAgJ2F1dGhlbnRpY2F0ZWQnXG4gICAgICAgICAgICBdKSxcblx0XHR9LFxuXHQgICAgbWV0aG9kczoge1xuXHQgICAgICAgIGZldGNoRGF0YSgpIHtcblx0ICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJykudGhlbigoe2RhdGF9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wb3N0cyA9IGRhdGE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcbiAgICAgICAgICAgIGNyZWF0ZU5ld0pvdXJuYWwoZSkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnQuZmlyZSgnc2hvdy1sb2dpbi1tb2RhbCcsIGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvam91cm5hbC9jcmVhdGUnO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKSB7XG5cdCAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBKb3VybmFsLnZ1ZT8yZTJkMjY4MyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1zZWN0aW9uIG8tc2VjdGlvbi0tZ3JleVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyLS1mbHVpZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1hc29ucnlcIixcbiAgICAgIHJhd05hbWU6IFwidi1tYXNvbnJ5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJvLWdyaWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6IFwiMC4zc1wiLFxuICAgICAgXCJpdGVtLXNlbGVjdG9yXCI6IFwiLm8tZ3JpZF9fY29sXCIsXG4gICAgICBcImNvbHVtbi13aWR0aFwiOiBcIi5vLWdyaWRfX3NpemVyXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fc2l6ZXIgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1hc29ucnktdGlsZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1hc29ucnktdGlsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX3VwbG9hZC1qb3VybmFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uY3JlYXRlTmV3Sm91cm5hbCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl9tKDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5wb3N0cyksIGZ1bmN0aW9uKHBvc3QpIHtcbiAgICByZXR1cm4gW19jKCdkaXYnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1hc29ucnktdGlsZVwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbWFzb25yeS10aWxlXCJcbiAgICAgIH1dLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS0zLzEyQGxnIHUtNi8xMkBzbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja1wiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3BpY1wiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBwb3N0LnVzZXIuYXZhdGFyLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19uYW1lXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhwb3N0LnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19zdGF0dXNcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImRhdGVGcm9tTm93XCIpKHBvc3QuY3JlYXRlZF9hdCkpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZF9fYm9keVwiXG4gICAgfSwgW19jKCdoMycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhwb3N0LnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKHBvc3QuZXhjZXJwdCkpXSldKV0pXSldXG4gIH0pXSwgMildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbiBvLXNlY3Rpb24tLWpvdXJuYWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWNvbnRhaW5lci0tZmx1aWRcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tc2VjdGlvbl9fdGl0bGUgdS10ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRKb3VybmFsXFxuXFx0XFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxfX3dyYXBwZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWZpbHRlci1qb3VybmFsX19pdGVtXCJcbiAgfSwgW19jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJIaWdobGlnaHRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZmlsdGVyLWpvdXJuYWxfX2l0ZW1cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkZvb2QgZm9yIEZ1blwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbF9faXRlbVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmVjaXBlc1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1maWx0ZXItam91cm5hbF9faXRlbVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUGVvcGxlc1wiKV0pXSldKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19pbm5lclwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW8gZmEtNXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmQtLWRpYWxvZ19fZHVtbXlfX3RpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFVwbG9hZCBKb3VybmFsIEthbXUgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFNla2FyYW5nIVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVmYzJmOThmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZmMyZjk4ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNWZjMmY5OGZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSm91cm5hbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVmYzJmOThmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0pvdXJuYWwudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgbnVsbCxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBKb3VybmFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZmMyZjk4ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVmYzJmOThmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==