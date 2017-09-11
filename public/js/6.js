webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Comments.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_form_js__ = __webpack_require__("./resources/assets/js/utils/form.js");







/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        post_id: { required: true }
    },

    data: function data() {
        return {
            comments: [],
            myComment: [],
            loading: false,
            editingComment: false,
            form: new __WEBPACK_IMPORTED_MODULE_2__utils_form_js__["a" /* default */]({
                id: '',
                post_id: this.post_id,
                content: ''
            }),
            formEdit: new __WEBPACK_IMPORTED_MODULE_2__utils_form_js__["a" /* default */]({
                post_id: this.post_id,
                content: ''
            })
        };
    },


    watch: {
        '$route': 'fetchComments',
        post_id: function post_id(value) {
            this.form.post_id = value;
        }
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['authenticated', 'user'])),

    methods: {
        fetchComments: function fetchComments() {
            var _this = this;

            axios.get('/api/comments').then(function (_ref) {
                var data = _ref.data;

                data = data.map(function (item) {
                    item.edit = false;
                    return item;
                });
                _this.comments = data;
            });
        },
        submitComment: function submitComment() {
            var _this2 = this;

            this.form.submit('post', '/api/comments').then(function (data) {
                _this2.form.post_id = data.post_id;
                data.edit = false;
                _this2.comments.unshift(data);
            });
        },
        toggleEditComment: function toggleEditComment(index, value) {
            var comment = this.comments[index];

            this.comments = this.comments.map(function (item) {
                item.edit = comment.id === item.id && value;
                return item;
            });
            this.formEdit.content = comment.content;
            this.formEdit.post_id = comment.post_id;
        },
        updateComment: function updateComment(index) {
            var comment = this.comments[index];
            this.formEdit.submit('put', '/api/comments/' + comment.id).then(function (data) {
                comment.content = data.content;
                comment.edit = false;
            });
        },
        deleteComment: function deleteComment(index) {
            var _this3 = this;

            if (confirm('Apakah Anda yakin?')) {
                var comment = this.comments[index];
                axios.delete('/api/comments/' + comment.id).then(function () {
                    _this3.comments.splice(index, 1);
                });
            }
        },
        writeComment: function writeComment() {
            if (!this.authenticated) {
                router.push('/login?redirect=' + this.$route.path);
            } else {
                this.writingReview = true;
            }
        }
    },

    mounted: function mounted() {
        this.fetchComments();
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/LikeButton.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            counter: 0
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['authenticated', 'user'])),
    methods: {
        initSmoothScroll: function initSmoothScroll() {
            var scroll = new SmoothScroll('a[href*="#"]');
        },
        incrementValue: function incrementValue(event) {
            event.preventDefault();

            if (!this.authenticated) {
                router.push('/login?redirect=' + this.$route.path);
            } else {
                this.counter++;
            }
        }
    },
    mounted: function mounted() {
        this.initSmoothScroll();
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/JournalDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Comments_vue__ = __webpack_require__("./resources/assets/js/components/Comments.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Comments_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Comments_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LikeButton_vue__ = __webpack_require__("./resources/assets/js/components/LikeButton.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LikeButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_LikeButton_vue__);








/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Comments: __WEBPACK_IMPORTED_MODULE_2__components_Comments_vue___default.a, LikeButton: __WEBPACK_IMPORTED_MODULE_3__components_LikeButton_vue___default.a },
    data: function data() {
        return {
            id: '',
            counter: 0,
            title: '',
            content: '',
            created_at: '',
            user: {
                name: '',
                avatar: ''
            },
            other_posts: []
        };
    },

    computed: {
        base_url: function base_url() {
            return window.App.baseUrl;
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        fetchData: function fetchData() {
            var _this = this;

            axios.get('/api/posts/' + this.$route.params.slug).then(function (_ref) {
                var data = _ref.data;

                var post = data.post;

                _this.other_posts = data.other_posts;

                _this.id = post.id;
                _this.title = post.title;
                _this.content = post.content;
                _this.created_at = post.created_at;
                _this.user.name = post.user.name;
                _this.user.avatar = post.user.avatar;

                var title = post.title + ' - Mampir.in';
                var url = _this.base_url + _this.$route.path;
                var image = post.image;
                var description = post.excerpt;

                _this.setBasicMeta({ title: title, description: description });
                _this.setFacebookMeta({ title: title, url: url, image: image, description: description });
                _this.setTwitterMeta({ title: title, url: url, image: image, description: description });
            });
        },
        hasImage: function hasImage(image) {
            return !_.isEmpty(image);
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['setBasicMeta', 'setFacebookMeta', 'setTwitterMeta'])),
    mounted: function mounted() {
        this.fetchData();
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Comments.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\ntextarea[data-v-3bcf0420]:hover, textarea[data-v-3bcf0420]:focus {\n  box-shadow: none;\n}\n", "", {"version":3,"sources":["/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Comments.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE","file":"Comments.vue","sourcesContent":["textarea:hover, textarea:focus {\n  box-shadow: none; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-25ff0840\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/JournalDetail.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "journal"
  }, [_c('div', {
    staticClass: "journal__top-wrapper"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('div', {
    staticClass: "c-user-post u-mb-x4"
  }, [_c('img', {
    staticClass: "c-user-post__img",
    attrs: {
      "src": _vm.user.avatar,
      "width": "60"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "c-user-post__content"
  }, [_c('h4', {
    staticClass: "c-user-post__name"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c('p', {
    staticClass: "c-user-post__date"
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
      "d": "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
    }
  })]), _vm._v("\n                        " + _vm._s(_vm._f("dateFormat")(_vm.created_at, 'D MMMM YYYY')) + "\n                    ")])])]), _vm._v(" "), _c('h1', {
    staticClass: "o-section__title journal__title"
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "journal__body"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('div', {
    staticClass: "journal__content",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "c-social-sharing"
  }, [_c('social-sharing', {
    attrs: {
      "url": _vm.base_url + _vm.$route.path
    },
    inlineTemplate: {
      render: function() {
        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
          return _c('div', {
            staticClass: "c-share"
          }, [_c('h4', [_vm._v("Bagikan")]), _vm._v(" "), _c('div', {
            staticClass: "c-share__item"
          }, [_c('network', {
            staticClass: "o-button__share--facebook o-button__share",
            attrs: {
              "network": "facebook"
            }
          }, [_c('i', {
            staticClass: "fa fa-facebook"
          })]), _vm._v(" "), _c('network', {
            staticClass: "o-button__share--twitter o-button__share",
            attrs: {
              "network": "twitter"
            }
          }, [_c('i', {
            staticClass: "fa fa-twitter"
          })])], 1)])
        
      },
      staticRenderFns: []
    }
  }), _vm._v(" "), _c('like-button')], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "journal__bottom"
  }, [_c('div', {
    staticClass: "o-container"
  }, [_c('div', {
    staticClass: "other-journal u-mb-x5"
  }, [_c('h1', {
    staticClass: "o-heading u-text-center u-mb-x5"
  }, [_vm._v("Journal Lainnya")]), _vm._v(" "), _c('div', {
    staticClass: "o-grid"
  }, _vm._l((_vm.other_posts), function(post) {
    return _c('div', {
      staticClass: "o-grid__col u-6/12@lg"
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
    }, [_vm._v(_vm._s(post.title))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(post.excerpt))])])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "c-comment u-mb-x5"
  }, [_c('h2', {
    staticClass: "o-heading",
    attrs: {
      "id": "comment-header"
    }
  }, [_vm._v("Komentar")]), _vm._v(" "), _c('comments', {
    attrs: {
      "post_id": _vm.id
    }
  })], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-25ff0840", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3bcf0420\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Comments.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "c-comment-form"
  }, [(_vm.authenticated) ? [_c('div', {
    class: [
      'c-card',
      'c-card--dialog',
      'c-card--dialog__placeholder',
      'c-card--dialog__review',
      'c-review-form',
      {
        'c-review-form--invalid': _vm.form.errors.any()
      }
    ]
  }, [_c('div', {
    staticClass: "o-user-block"
  }, [_c('div', {
    staticClass: "o-user-block__pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__info"
  }, [_c('span', {
    staticClass: "o-user-block__name"
  }, [_vm._v(_vm._s(_vm.user.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__body"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.content),
      expression: "form.content"
    }],
    staticClass: "o-textarea",
    attrs: {
      "rows": "4",
      "placeholder": "Tulis Komentar..."
    },
    domProps: {
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.content = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.form.errors.any()) ? _c('span', {
    staticClass: "c-review-form__invalid-message"
  }, [_vm._v("Silahkan tulis komentar Anda.")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__submit c-review-form__control"
  }, [(_vm.editingComment) ? void 0 : [_c('button', {
    staticClass: "o-button o-button--primary write-a-review__button",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.submitComment
    }
  }, [(_vm.loading) ? _c('span', [_vm._v("Loading...")]) : _c('span', [_vm._v("Publish")])])]], 2)])] : [_c('div', {
    staticClass: "c-card c-card--dialog c-card--dialog__placeholder c-card--dialog__dummy"
  }, [_c('div', {
    staticClass: "o-user-block"
  }, [_c('div', {
    staticClass: "o-user-block__pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "o-user-block__info"
  }, [_c('span', {
    staticClass: "o-user-block__name"
  }, [_vm._v(_vm._s(_vm.user.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "c-card__body"
  }, [_c('button', {
    staticClass: "o-button o-button--primary",
    on: {
      "click": _vm.writeComment
    }
  }, [_vm._v("\n                        Tulis Komentar\n                    ")])])])]], 2), _vm._v(" "), _c('div', {
    staticClass: "c-comments"
  }, _vm._l((_vm.comments), function(comment, index) {
    return _c('div', {
      staticClass: "c-comment"
    }, [_c('div', {
      staticClass: "c-card c-card--dialog c-card--dialog__placeholder"
    }, [_c('div', {
      staticClass: "o-grid o-grid--middle"
    }, [_c('div', {
      staticClass: "o-grid__cell u-10/12@sm"
    }, [_c('div', {
      staticClass: "o-user-block"
    }, [_c('div', {
      staticClass: "o-user-block__pic"
    }, [_c('img', {
      attrs: {
        "src": comment.user.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "o-user-block__info"
    }, [_c('span', {
      staticClass: "o-user-block__name"
    }, [_vm._v(_vm._s(comment.user.name))]), _vm._v(" "), _c('span', {
      staticClass: "o-user-block__status"
    }, [_vm._v(_vm._s(_vm._f("dateFromNow")(comment.created_at)))])])])]), _vm._v(" "), (_vm.user.id === comment.user.id) ? _c('div', {
      staticClass: "o-grid__cell u-2/12@sm u-text-right"
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.toggleEditComment(index, true)
        }
      }
    }, [_vm._v("Edit")]), _vm._v(" |\n                        "), _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteComment(index)
        }
      }
    }, [_vm._v("Hapus")])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "c-card__body"
    }, [(comment.edit) ? [_c('textarea', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.formEdit.content),
        expression: "formEdit.content"
      }],
      staticClass: "o-textarea",
      attrs: {
        "rows": "4",
        "placeholder": "Tulis Komentar..."
      },
      domProps: {
        "value": (_vm.formEdit.content)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.formEdit.content = $event.target.value
        }
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "o-button o-button--primary o-button--small",
      on: {
        "click": function($event) {
          _vm.updateComment(index)
        }
      }
    }, [_vm._v("Update")]), _vm._v(" "), _c('button', {
      staticClass: "o-button o-button--default o-button--small",
      on: {
        "click": function($event) {
          _vm.toggleEditComment(index, false)
        }
      }
    }, [_vm._v("Batal")])] : _c('p', [_vm._v("\n                        " + _vm._s(comment.content) + "\n                    ")])], 2)])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bcf0420", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a7922bb6\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LikeButton.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "c-social"
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('a', {
    attrs: {
      "href": "#comment-header",
      "data-scroll": ""
    }
  }, [_c('svg', {
    attrs: {
      "fill": "#000000",
      "height": "52",
      "viewBox": "0 0 24 24",
      "width": "52",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  })]), _vm._v("\n\n\t                (0)\n\t            ")])]), _vm._v(" "), _c('div', {
    staticClass: "like"
  }, [_c('a', {
    on: {
      "~click": function($event) {
        _vm.incrementValue($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "fill": "#000000",
      "height": "52",
      "viewBox": "0 0 24 24",
      "width": "52",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
    }
  })]), _vm._v("\n\n\t                (" + _vm._s(_vm.counter) + ")\n\t            ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a7922bb6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Comments.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Comments.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7d756e26", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Comments.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bcf0420\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Comments.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Comments.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3bcf0420\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Comments.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3bcf0420",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/Comments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bcf0420", Component.options)
  } else {
    hotAPI.reload("data-v-3bcf0420", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/LikeButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/LikeButton.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a7922bb6\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LikeButton.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/components/LikeButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LikeButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7922bb6", Component.options)
  } else {
    hotAPI.reload("data-v-a7922bb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/JournalDetail.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"es2015\",{\"modules\":false}],\"stage-2\"],\"plugins\":[\"transform-runtime\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/JournalDetail.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-25ff0840\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/JournalDetail.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/hrmsh/Codes/_projects/idealist/mampir.in/web/resources/assets/js/pages/JournalDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] JournalDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25ff0840", Component.options)
  } else {
    hotAPI.reload("data-v-25ff0840", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ29tbWVudHMudnVlIiwid2VicGFjazovLy9MaWtlQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vSm91cm5hbERldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLnZ1ZT9kYzcyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbERldGFpbC52dWU/OWU3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tbWVudHMudnVlPzkxOGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpa2VCdXR0b24udnVlPzQ4N2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLnZ1ZT9iM2I1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21tZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpa2VCdXR0b24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbERldGFpbC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFnR0E7O0FBRUE7O0FBRUE7OzZCQUtBO0FBSEE7OzBCQUlBOztzQkFFQTt1QkFDQTtxQkFDQTs0QkFDQTs7b0JBRUE7OEJBQ0E7eUJBRUE7QUFKQTs7OEJBTUE7eUJBR0E7QUFKQTtBQVZBO0FBZ0JBOzs7O2tCQUVBO3lDQUNBO2dDQUNBO0FBR0E7QUFOQTs7QUFPQSx5SkFDQSxDQUNBLGlCQUlBOzs7O0FBRUE7OztBQUNBOztnREFDQTtnQ0FDQTsyQkFDQTtBQUNBO2lDQUNBO0FBQ0E7QUFDQTs7QUFDQTs7MkVBQ0E7MkNBQ0E7NEJBQ0E7d0NBQ0E7QUFDQTtBQUNBO29FQUNBO3dDQUVBOzs4REFDQTtzREFDQTt1QkFDQTtBQUNBOzRDQUNBOzRDQUNBO0FBQ0E7cURBQ0E7d0NBQ0E7NEZBQ0E7dUNBQ0E7K0JBQ0E7QUFDQTtBQUNBOztBQUNBOzsrQ0FDQTs0Q0FDQTs2RUFDQTtrREFDQTtBQUNBO0FBQ0E7QUFDQTs4Q0FDQTtxQ0FDQTs2REFDQTttQkFDQTtxQ0FDQTtBQUNBO0FBR0E7QUFsREE7O2dDQW1EQTthQUNBO0FBQ0E7QUExRkEsRzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBOztBQUVBOzBCQUVBOztxQkFHQTtBQUZBO0FBR0E7O0FBQ0EseUpBQ0EsQ0FDQSxpQkFHQTs7c0RBRUE7MENBQ0E7QUFDQTt1REFDQTtrQkFFQTs7cUNBQ0E7NkRBQ0E7bUJBRUE7cUJBQ0E7QUFDQTtBQUVBO0FBZEE7Z0NBZUE7YUFDQTtBQUNBO0FBN0JBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyREE7O0FBR0E7QUFDQTs7K0RBRUE7OEZBRUE7MEJBQ0E7O2dCQUVBO3FCQUNBO21CQUNBO3FCQUNBO3dCQUNBOztzQkFFQTt3QkFFQTtBQUhBO3lCQUtBO0FBWEE7QUFZQTs7O3NDQUVBOzhCQUNBO0FBRUE7QUFKQTs7a0JBT0E7QUFGQTtBQUlBOztBQUNBOzs7QUFDQTs7Z0NBRUE7O3lDQUVBOztnQ0FDQTttQ0FDQTtxQ0FDQTt3Q0FDQTs0Q0FDQTs4Q0FFQTs7aUNBQ0E7d0RBQ0E7aUNBQ0E7dUNBRUE7O21EQUNBOzhFQUNBOzZFQUNBO0FBQ0E7QUFFQTsyQ0FDQTs4QkFDQTtBQUVBO3dFQUNBLENBQ0EsZ0JBQ0EsbUJBR0E7Z0NBQ0E7YUFDQTtBQUNBO0FBOURBLEc7Ozs7Ozs7QUNsR0E7QUFDQTs7O0FBR0E7QUFDQSw2RkFBOEYscUJBQXFCLEdBQUcsVUFBVSxpSkFBaUosS0FBSyxZQUFZLCtFQUErRSxxQkFBcUIsRUFBRSxxQkFBcUI7O0FBRTdaOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVzs7QUFFWCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDcEpBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsTEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVEQTs7QUFFQTtBQUNBLDhXQUFrTztBQUNsTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGlGQUFpRjtBQUNqTyx5SkFBeUosaUZBQWlGO0FBQzFPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQSwyWUFBa007QUFDbE07QUFDQTtBQUNBO0FBQ0EsNFlBQXlQO0FBQ3pQO0FBQ0EsOE9BQTRIO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQSw4WUFBeVA7QUFDelA7QUFDQSxpUEFBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLDRZQUF5UDtBQUN6UDtBQUNBLCtPQUE2SDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjLWNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJhdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbXG4gICAgICAgICAgICAgICAgICAgICdjLWNhcmQnLFxuICAgICAgICAgICAgICAgICAgICAnYy1jYXJkLS1kaWFsb2cnLFxuICAgICAgICAgICAgICAgICAgICAnYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2MtY2FyZC0tZGlhbG9nX19yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAnYy1yZXZpZXctZm9ybScsXG4gICAgICAgICAgICAgICAgICAgIHsnYy1yZXZpZXctZm9ybS0taW52YWxpZCc6IGZvcm0uZXJyb3JzLmFueSgpfVxuICAgICAgICAgICAgICAgIF1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLmF2YXRhclwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLXVzZXItYmxvY2tfX25hbWVcIj57eyB1c2VyLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9ybS5jb250ZW50XCIgcm93cz1cIjRcIiBjbGFzcz1cIm8tdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIlR1bGlzIEtvbWVudGFyLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJmb3JtLmVycm9ycy5hbnkoKVwiIGNsYXNzPVwiYy1yZXZpZXctZm9ybV9faW52YWxpZC1tZXNzYWdlXCI+U2lsYWhrYW4gdHVsaXMga29tZW50YXIgQW5kYS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX3N1Ym1pdCBjLXJldmlldy1mb3JtX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImVkaXRpbmdDb21tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgd3JpdGUtYS1yZXZpZXdfX2J1dHRvblwiIEBjbGljaz1cInN1Ym1pdENvbW1lbnRcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlB1Ymxpc2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyIGMtY2FyZC0tZGlhbG9nX19kdW1teVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLmF2YXRhclwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLXVzZXItYmxvY2tfX25hbWVcIj57eyB1c2VyLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeVwiIEBjbGljaz1cIndyaXRlQ29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1bGlzIEtvbWVudGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImMtY29tbWVudHNcIj5cblxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihjb21tZW50LCBpbmRleCkgaW4gY29tbWVudHNcIiBjbGFzcz1cImMtY29tbWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWNhcmQgYy1jYXJkLS1kaWFsb2cgYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWQgby1ncmlkLS1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRfX2NlbGwgdS0xMC8xMkBzbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tdXNlci1ibG9ja19fcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJjb21tZW50LnVzZXIuYXZhdGFyXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IGNvbW1lbnQudXNlci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvLXVzZXItYmxvY2tfX3N0YXR1c1wiPnt7IGNvbW1lbnQuY3JlYXRlZF9hdCB8IGRhdGVGcm9tTm93IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm8tZ3JpZF9fY2VsbCB1LTIvMTJAc20gdS10ZXh0LXJpZ2h0XCIgdi1pZj1cInVzZXIuaWQgPT09IGNvbW1lbnQudXNlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVFZGl0Q29tbWVudChpbmRleCwgdHJ1ZSlcIj5FZGl0PC9hPiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cImRlbGV0ZUNvbW1lbnQoaW5kZXgpXCI+SGFwdXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjb21tZW50LmVkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cImZvcm1FZGl0LmNvbnRlbnRcIiByb3dzPVwiNFwiIGNsYXNzPVwiby10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiVHVsaXMgS29tZW50YXIuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSBvLWJ1dHRvbi0tc21hbGxcIiBAY2xpY2s9XCJ1cGRhdGVDb21tZW50KGluZGV4KVwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvLWJ1dHRvbiBvLWJ1dHRvbi0tZGVmYXVsdCBvLWJ1dHRvbi0tc21hbGxcIiBAY2xpY2s9XCJ0b2dnbGVFZGl0Q29tbWVudChpbmRleCwgZmFsc2UpXCI+QmF0YWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb21tZW50LmNvbnRlbnQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi91dGlscy9mb3JtLmpzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdF9pZDogeyByZXF1aXJlZDogdHJ1ZSB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIG15Q29tbWVudDogW10sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWRpdGluZ0NvbW1lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiB0aGlzLnBvc3RfaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZm9ybUVkaXQ6IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9pZDogdGhpcy5wb3N0X2lkLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICckcm91dGUnOiAnZmV0Y2hDb21tZW50cycsXG4gICAgICAgICAgICBwb3N0X2lkKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3RfaWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAgICAgICAgICAgJ2F1dGhlbnRpY2F0ZWQnLFxuICAgICAgICAgICAgICAgICd1c2VyJ1xuICAgICAgICAgICAgXSlcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmZXRjaENvbW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9jb21tZW50cycpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0Q29tbWVudCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwb3N0JywgJy9hcGkvY29tbWVudHMnKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0X2lkID0gZGF0YS5wb3N0X2lkO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy51bnNoaWZ0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlRWRpdENvbW1lbnQoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbW1lbnQgPSB0aGlzLmNvbW1lbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICBpdGVtLmVkaXQgPSAoKGNvbW1lbnQuaWQgPT09IGl0ZW0uaWQpICYmIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FZGl0LmNvbnRlbnQgPSBjb21tZW50LmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRWRpdC5wb3N0X2lkID0gY29tbWVudC5wb3N0X2lkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNvbW1lbnQoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMuY29tbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVkaXQuc3VibWl0KCdwdXQnLCBgL2FwaS9jb21tZW50cy8ke2NvbW1lbnQuaWR9YCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlQ29tbWVudChpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0oJ0FwYWthaCBBbmRhIHlha2luPycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21tZW50ID0gdGhpcy5jb21tZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9jb21tZW50cy8ke2NvbW1lbnQuaWR9YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3cml0ZUNvbW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luP3JlZGlyZWN0PSR7dGhpcy4kcm91dGUucGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRpbmdSZXZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaENvbW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ29tbWVudHMudnVlPzNlNzAwZWRlIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiYy1zb2NpYWxcIj4gICAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuXHQgICAgICAgICAgICA8YSBocmVmPVwiI2NvbW1lbnQtaGVhZGVyXCIgZGF0YS1zY3JvbGw+XG5cdCAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiNTJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCI1MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjk5IDRjMC0xLjEtLjg5LTItMS45OS0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTRsNCA0LS4wMS0xOHpcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cblx0ICAgICAgICAgICAgICAgIDwvc3ZnPlxuXG5cdCAgICAgICAgICAgICAgICAoMClcblx0ICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgIDwvZGl2PlxuXG5cdCAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VcIj5cblx0ICAgICAgICAgICAgPGEgQGNsaWNrLm9uY2U9XCJpbmNyZW1lbnRWYWx1ZVwiPlxuXHQgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIGhlaWdodD1cIjUyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiNTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cblx0ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMjFoNFY5SDF2MTJ6bTIyLTExYzAtMS4xLS45LTItMi0yaC02LjMxbC45NS00LjU3LjAzLS4zMmMwLS40MS0uMTctLjc5LS40NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41IDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0xLjkxbC0uMDEtLjAxTDIzIDEwelwiLz5cblx0ICAgICAgICAgICAgICAgIDwvc3ZnPlxuXG5cdCAgICAgICAgICAgICAgICAoe3sgY291bnRlciB9fSlcblx0ICAgICAgICAgICAgPC9hPlxuXHQgICAgICAgIDwvZGl2PlxuXG5cblx0ICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblx0XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgIFx0ZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICBcdGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcbiAgICAgICAgICAgICAgICAnYXV0aGVudGljYXRlZCcsXG4gICAgICAgICAgICAgICAgJ3VzZXInXG4gICAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgIFx0aW5pdFNtb290aFNjcm9sbCgpe1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY3JlbWVudFZhbHVlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbG9naW4/cmVkaXJlY3Q9JHt0aGlzLiRyb3V0ZS5wYXRofWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMud3JpdGluZ1JldmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgXHR0aGlzLmNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0U21vb3RoU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTGlrZUJ1dHRvbi52dWU/NTMwZmQzNDAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImpvdXJuYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpvdXJuYWxfX3RvcC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy11c2VyLXBvc3QgdS1tYi14NFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLmF2YXRhclwiIGNsYXNzPVwiYy11c2VyLXBvc3RfX2ltZ1wiIHdpZHRoPVwiNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdXNlci1wb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjLXVzZXItcG9zdF9fbmFtZVwiPnt7IHVzZXIubmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImMtdXNlci1wb3N0X19kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjUgN0gxMXY2bDUuMjUgMy4xNS43NS0xLjIzLTQuNS0yLjY3elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjcmVhdGVkX2F0IHwgZGF0ZUZvcm1hdCgnRCBNTU1NIFlZWVknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJvLXNlY3Rpb25fX3RpdGxlIGpvdXJuYWxfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpvdXJuYWxfX2JvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiY29udGVudFwiIGNsYXNzPVwiam91cm5hbF9fY29udGVudFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtc29jaWFsLXNoYXJpbmdcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c29jaWFsLXNoYXJpbmcgOnVybD1cImJhc2VfdXJsKyRyb3V0ZS5wYXRoXCIgaW5saW5lLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QmFnaWthbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtc2hhcmVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5ldHdvcmsgbmV0d29yaz1cImZhY2Vib29rXCIgY2xhc3M9XCJvLWJ1dHRvbl9fc2hhcmUtLWZhY2Vib29rIG8tYnV0dG9uX19zaGFyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXR3b3JrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmV0d29yayBuZXR3b3JrPVwidHdpdHRlclwiIGNsYXNzPVwiby1idXR0b25fX3NoYXJlLS10d2l0dGVyIG8tYnV0dG9uX19zaGFyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25ldHdvcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zb2NpYWwtc2hhcmluZz5cblxuICAgICAgICAgICAgICAgICAgICA8bGlrZS1idXR0b24+PC9saWtlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJqb3VybmFsX19ib3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdGhlci1qb3VybmFsIHUtbWIteDVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiby1oZWFkaW5nIHUtdGV4dC1jZW50ZXIgdS1tYi14NVwiPkpvdXJuYWwgTGFpbm55YTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwb3N0IGluIG90aGVyX3Bvc3RzXCIgY2xhc3M9XCJvLWdyaWRfX2NvbCB1LTYvMTJAbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiby11c2VyLWJsb2NrX19waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJwb3N0LnVzZXIuYXZhdGFyXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvLXVzZXItYmxvY2tfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm8tdXNlci1ibG9ja19fbmFtZVwiPnt7IHBvc3QudXNlci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiby11c2VyLWJsb2NrX19zdGF0dXNcIj57eyBwb3N0LmNyZWF0ZWRfYXQgfCBkYXRlRnJvbU5vdyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiaGFzSW1hZ2UocG9zdC5pbWFnZSlcIiA6c3JjPVwicG9zdC5pbWFnZVwiIGNsYXNzPVwiby1pbWctY29udGVudCB1LW1iLXgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImAvam91cm5hbC8ke3Bvc3QudXNlci51c2VybmFtZX0vJHtwb3N0LnNsdWd9YFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyXCI+e3sgcG9zdC50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7IHBvc3QuZXhjZXJwdCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1jb21tZW50IHUtbWIteDVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiby1oZWFkaW5nXCIgaWQ9XCJjb21tZW50LWhlYWRlclwiPktvbWVudGFyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGNvbW1lbnRzIDpwb3N0X2lkPVwiaWRcIj48L2NvbW1lbnRzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSAndnVleCdcblxuXG4gICAgaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWVudHMudnVlJ1xuICAgIGltcG9ydCBMaWtlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvTGlrZUJ1dHRvbi52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHsgQ29tbWVudHMsIExpa2VCdXR0b24gfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6ICcnLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG90aGVyX3Bvc3RzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYmFzZV91cmwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5BcHAuYmFzZVVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICckcm91dGUnOiAnZmV0Y2hEYXRhJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvcG9zdHMvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1Z31gKS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyX3Bvc3RzID0gZGF0YS5vdGhlcl9wb3N0cztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcG9zdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHBvc3QudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHBvc3QuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkX2F0ID0gcG9zdC5jcmVhdGVkX2F0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIubmFtZSA9IHBvc3QudXNlci5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXZhdGFyID0gcG9zdC51c2VyLmF2YXRhcjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBgJHtwb3N0LnRpdGxlfSAtIE1hbXBpci5pbmA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmJhc2VfdXJsK3RoaXMuJHJvdXRlLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IHBvc3QuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHBvc3QuZXhjZXJwdDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJhc2ljTWV0YSh7dGl0bGUsIGRlc2NyaXB0aW9ufSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmFjZWJvb2tNZXRhKHt0aXRsZSwgdXJsLCBpbWFnZSwgZGVzY3JpcHRpb259KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUd2l0dGVyTWV0YSh7dGl0bGUsIHVybCwgaW1hZ2UsIGRlc2NyaXB0aW9ufSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYXNJbWFnZShpbWFnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KGltYWdlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoW1xuICAgICAgICAgICAgICAgICdzZXRCYXNpY01ldGEnLFxuICAgICAgICAgICAgICAgICdzZXRGYWNlYm9va01ldGEnLFxuICAgICAgICAgICAgICAgICdzZXRUd2l0dGVyTWV0YSdcbiAgICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSm91cm5hbERldGFpbC52dWU/M2Q2ODNlZWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50ZXh0YXJlYVtkYXRhLXYtM2JjZjA0MjBdOmhvdmVyLCB0ZXh0YXJlYVtkYXRhLXYtM2JjZjA0MjBdOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9ocm1zaC9Db2Rlcy9fcHJvamVjdHMvaWRlYWxpc3QvbWFtcGlyLmluL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tbWVudHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtDQUFFXCIsXCJmaWxlXCI6XCJDb21tZW50cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1widGV4dGFyZWE6aG92ZXIsIHRleHRhcmVhOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtM2JjZjA0MjBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tbWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zYmNmMDQyMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiam91cm5hbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImpvdXJuYWxfX3RvcC13cmFwcGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1jb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXVzZXItcG9zdCB1LW1iLXg0XCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy11c2VyLXBvc3RfX2ltZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0udXNlci5hdmF0YXIsXG4gICAgICBcIndpZHRoXCI6IFwiNjBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy11c2VyLXBvc3RfX2NvbnRlbnRcIlxuICB9LCBbX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdXNlci1wb3N0X19uYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImMtdXNlci1wb3N0X19kYXRlXCJcbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBcIiMwMDAwMDBcIixcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMjRcIixcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjI0XCIsXG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIH1cbiAgfSwgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMTEuOTkgMkM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0wIDBoMjR2MjRIMHpcIixcbiAgICAgIFwiZmlsbFwiOiBcIm5vbmVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRcIjogXCJNMTIuNSA3SDExdjZsNS4yNSAzLjE1Ljc1LTEuMjMtNC41LTIuNjd6XCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5fZihcImRhdGVGb3JtYXRcIikoX3ZtLmNyZWF0ZWRfYXQsICdEIE1NTU0gWVlZWScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXNlY3Rpb25fX3RpdGxlIGpvdXJuYWxfX3RpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiam91cm5hbF9fYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiam91cm5hbF9fY29udGVudFwiLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmNvbnRlbnQpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXNvY2lhbC1zaGFyaW5nXCJcbiAgfSwgW19jKCdzb2NpYWwtc2hhcmluZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ1cmxcIjogX3ZtLmJhc2VfdXJsICsgX3ZtLiRyb3V0ZS5wYXRoXG4gICAgfSxcbiAgICBpbmxpbmVUZW1wbGF0ZToge1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gICAgICAgICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjLXNoYXJlXCJcbiAgICAgICAgICB9LCBbX2MoJ2g0JywgW192bS5fdihcIkJhZ2lrYW5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImMtc2hhcmVfX2l0ZW1cIlxuICAgICAgICAgIH0sIFtfYygnbmV0d29yaycsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm8tYnV0dG9uX19zaGFyZS0tZmFjZWJvb2sgby1idXR0b25fX3NoYXJlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcIm5ldHdvcmtcIjogXCJmYWNlYm9va1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgW19jKCdpJywge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmFjZWJvb2tcIlxuICAgICAgICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCduZXR3b3JrJywge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b25fX3NoYXJlLS10d2l0dGVyIG8tYnV0dG9uX19zaGFyZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJuZXR3b3JrXCI6IFwidHdpdHRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgW19jKCdpJywge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHdpdHRlclwiXG4gICAgICAgICAgfSldKV0sIDEpXSlcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgc3RhdGljUmVuZGVyRm5zOiBbXVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsaWtlLWJ1dHRvbicpXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImpvdXJuYWxfX2JvdHRvbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib3RoZXItam91cm5hbCB1LW1iLXg1XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWhlYWRpbmcgdS10ZXh0LWNlbnRlciB1LW1iLXg1XCJcbiAgfSwgW192bS5fdihcIkpvdXJuYWwgTGFpbm55YVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZFwiXG4gIH0sIF92bS5fbCgoX3ZtLm90aGVyX3Bvc3RzKSwgZnVuY3Rpb24ocG9zdCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jb2wgdS02LzEyQGxnXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZCBjLWNhcmQtLWRpYWxvZyBjLWNhcmQtLWRpYWxvZ19fcGxhY2Vob2xkZXJcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fcGljXCJcbiAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHBvc3QudXNlci5hdmF0YXIsXG4gICAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19pbmZvXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX25hbWVcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHBvc3QudXNlci5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3N0YXR1c1wiXG4gICAgfSwgW192bS5fdihfdm0uX3MoX3ZtLl9mKFwiZGF0ZUZyb21Ob3dcIikocG9zdC5jcmVhdGVkX2F0KSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgICB9LCBbKF92bS5oYXNJbWFnZShwb3N0LmltYWdlKSkgPyBfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1pbWctY29udGVudCB1LW1iLXgyXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBwb3N0LmltYWdlXG4gICAgICB9XG4gICAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogKFwiL2pvdXJuYWwvXCIgKyAocG9zdC51c2VyLnVzZXJuYW1lKSArIFwiL1wiICsgKHBvc3Quc2x1ZykpXG4gICAgICB9XG4gICAgfSwgW19jKCdoMycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInUtY29sb3ItcHJpbWFyeSB1LW1iLXgyXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhwb3N0LnRpdGxlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MocG9zdC5leGNlcnB0KSldKV0pXSldKVxuICB9KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNvbW1lbnQgdS1tYi14NVwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1oZWFkaW5nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjb21tZW50LWhlYWRlclwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiS29tZW50YXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NvbW1lbnRzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBvc3RfaWRcIjogX3ZtLmlkXG4gICAgfVxuICB9KV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI1ZmYwODQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNWZmMDg0MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvSm91cm5hbERldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMjVmZjA4NDBcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWxEZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jb21tZW50LWZvcm1cIlxuICB9LCBbKF92bS5hdXRoZW50aWNhdGVkKSA/IFtfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbXG4gICAgICAnYy1jYXJkJyxcbiAgICAgICdjLWNhcmQtLWRpYWxvZycsXG4gICAgICAnYy1jYXJkLS1kaWFsb2dfX3BsYWNlaG9sZGVyJyxcbiAgICAgICdjLWNhcmQtLWRpYWxvZ19fcmV2aWV3JyxcbiAgICAgICdjLXJldmlldy1mb3JtJyxcbiAgICAgIHtcbiAgICAgICAgJ2MtcmV2aWV3LWZvcm0tLWludmFsaWQnOiBfdm0uZm9ybS5lcnJvcnMuYW55KClcbiAgICAgIH1cbiAgICBdXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fcGljXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS51c2VyLmF2YXRhcixcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19pbmZvXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fbmFtZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNhcmRfX2JvZHlcIlxuICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uY29udGVudCksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uY29udGVudFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiby10ZXh0YXJlYVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvd3NcIjogXCI0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVHVsaXMgS29tZW50YXIuLi5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmNvbnRlbnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5jb250ZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5mb3JtLmVycm9ycy5hbnkoKSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXJldmlldy1mb3JtX19pbnZhbGlkLW1lc3NhZ2VcIlxuICB9LCBbX3ZtLl92KFwiU2lsYWhrYW4gdHVsaXMga29tZW50YXIgQW5kYS5cIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19fc3VibWl0IGMtcmV2aWV3LWZvcm1fX2NvbnRyb2xcIlxuICB9LCBbKF92bS5lZGl0aW5nQ29tbWVudCkgPyB2b2lkIDAgOiBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLWJ1dHRvbiBvLWJ1dHRvbi0tcHJpbWFyeSB3cml0ZS1hLXJldmlld19fYnV0dG9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmxvYWRpbmdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zdWJtaXRDb21tZW50XG4gICAgfVxuICB9LCBbKF92bS5sb2FkaW5nKSA/IF9jKCdzcGFuJywgW192bS5fdihcIkxvYWRpbmcuLi5cIildKSA6IF9jKCdzcGFuJywgW192bS5fdihcIlB1Ymxpc2hcIildKV0pXV0sIDIpXSldIDogW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkIGMtY2FyZC0tZGlhbG9nIGMtY2FyZC0tZGlhbG9nX19wbGFjZWhvbGRlciBjLWNhcmQtLWRpYWxvZ19fZHVtbXlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3BpY1wiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0udXNlci5hdmF0YXIsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX25hbWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ud3JpdGVDb21tZW50XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgVHVsaXMgS29tZW50YXJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV1dLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLWNvbW1lbnRzXCJcbiAgfSwgX3ZtLl9sKChfdm0uY29tbWVudHMpLCBmdW5jdGlvbihjb21tZW50LCBpbmRleCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jb21tZW50XCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtY2FyZCBjLWNhcmQtLWRpYWxvZyBjLWNhcmQtLWRpYWxvZ19fcGxhY2Vob2xkZXJcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkIG8tZ3JpZC0tbWlkZGxlXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tZ3JpZF9fY2VsbCB1LTEwLzEyQHNtXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja1wiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJvLXVzZXItYmxvY2tfX3BpY1wiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBjb21tZW50LnVzZXIuYXZhdGFyLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdXNlci1ibG9ja19faW5mb1wiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19uYW1lXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LnVzZXIubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby11c2VyLWJsb2NrX19zdGF0dXNcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImRhdGVGcm9tTm93XCIpKGNvbW1lbnQuY3JlYXRlZF9hdCkpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnVzZXIuaWQgPT09IGNvbW1lbnQudXNlci5pZCkgPyBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1ncmlkX19jZWxsIHUtMi8xMkBzbSB1LXRleHQtcmlnaHRcIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnRvZ2dsZUVkaXRDb21tZW50KGluZGV4LCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIkVkaXRcIildKSwgX3ZtLl92KFwiIHxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZGVsZXRlQ29tbWVudChpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJIYXB1c1wiKV0pXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYy1jYXJkX19ib2R5XCJcbiAgICB9LCBbKGNvbW1lbnQuZWRpdCkgPyBbX2MoJ3RleHRhcmVhJywge1xuICAgICAgZGlyZWN0aXZlczogW3tcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IChfdm0uZm9ybUVkaXQuY29udGVudCksXG4gICAgICAgIGV4cHJlc3Npb246IFwiZm9ybUVkaXQuY29udGVudFwiXG4gICAgICB9XSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm8tdGV4dGFyZWFcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwicm93c1wiOiBcIjRcIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlR1bGlzIEtvbWVudGFyLi4uXCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChfdm0uZm9ybUVkaXQuY29udGVudClcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgICBfdm0uZm9ybUVkaXQuY29udGVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLXByaW1hcnkgby1idXR0b24tLXNtYWxsXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS51cGRhdGVDb21tZW50KGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlVwZGF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiby1idXR0b24gby1idXR0b24tLWRlZmF1bHQgby1idXR0b24tLXNtYWxsXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50b2dnbGVFZGl0Q29tbWVudChpbmRleCwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiQmF0YWxcIildKV0gOiBfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhjb21tZW50LmNvbnRlbnQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMildKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNiY2YwNDIwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zYmNmMDQyMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0zYmNmMDQyMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjLXNvY2lhbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNjb21tZW50LWhlYWRlclwiLFxuICAgICAgXCJkYXRhLXNjcm9sbFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3N2ZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmaWxsXCI6IFwiIzAwMDAwMFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI1MlwiLFxuICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDI0IDI0XCIsXG4gICAgICBcIndpZHRoXCI6IFwiNTJcIixcbiAgICAgIFwieG1sbnNcIjogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgfVxuICB9LCBbX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0yMS45OSA0YzAtMS4xLS44OS0yLTEuOTktMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE0bDQgNC0uMDEtMTh6XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGF0aCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkXCI6IFwiTTAgMGgyNHYyNEgwelwiLFxuICAgICAgXCJmaWxsXCI6IFwibm9uZVwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCJcXG5cXG5cXHQgICAgICAgICAgICAgICAgKDApXFxuXFx0ICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaWtlXCJcbiAgfSwgW19jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcIn5jbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudFZhbHVlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnc3ZnJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZpbGxcIjogXCIjMDAwMDAwXCIsXG4gICAgICBcImhlaWdodFwiOiBcIjUyXCIsXG4gICAgICBcInZpZXdCb3hcIjogXCIwIDAgMjQgMjRcIixcbiAgICAgIFwid2lkdGhcIjogXCI1MlwiLFxuICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB9XG4gIH0sIFtfYygncGF0aCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkXCI6IFwiTTAgMGgyNHYyNEgwelwiLFxuICAgICAgXCJmaWxsXCI6IFwibm9uZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZFwiOiBcIk0xIDIxaDRWOUgxdjEyem0yMi0xMWMwLTEuMS0uOS0yLTItMmgtNi4zMWwuOTUtNC41Ny4wMy0uMzJjMC0uNDEtLjE3LS43OS0uNDQtMS4wNkwxNC4xNyAxIDcuNTkgNy41OUM3LjIyIDcuOTUgNyA4LjQ1IDcgOXYxMGMwIDEuMS45IDIgMiAyaDljLjgzIDAgMS41NC0uNSAxLjg0LTEuMjJsMy4wMi03LjA1Yy4wOS0uMjMuMTQtLjQ3LjE0LS43M3YtMS45MWwtLjAxLS4wMUwyMyAxMHpcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiXFxuXFxuXFx0ICAgICAgICAgICAgICAgIChcIiArIF92bS5fcyhfdm0uY291bnRlcikgKyBcIilcXG5cXHQgICAgICAgICAgICBcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYTc5MjJiYjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWE3OTIyYmI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpa2VCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LWE3OTIyYmI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpa2VCdXR0b24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zYmNmMDQyMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbW1lbnRzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiN2Q3NTZlMjZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2JjZjA0MjBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21tZW50cy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2JjZjA0MjBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db21tZW50cy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtM2JjZjA0MjBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tbWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNiY2YwNDIwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTNiY2YwNDIwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29tbWVudHMudnVlXCIpXG59XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZXMyMDE1XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29tbWVudHMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zYmNmMDQyMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbW1lbnRzLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIGluamVjdFN0eWxlLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTNiY2YwNDIwXCIsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21tZW50cy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENvbW1lbnRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYmNmMDQyMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNiY2YwNDIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29tbWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db21tZW50cy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlczIwMTVcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaWtlQnV0dG9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTc5MjJiYjZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlrZUJ1dHRvbi52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBudWxsLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2hybXNoL0NvZGVzL19wcm9qZWN0cy9pZGVhbGlzdC9tYW1waXIuaW4vd2ViL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9MaWtlQnV0dG9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTGlrZUJ1dHRvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTc5MjJiYjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hNzkyMmJiNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpa2VCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9MaWtlQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVzMjAxNVxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0pvdXJuYWxEZXRhaWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yNWZmMDg0MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Kb3VybmFsRGV0YWlsLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUvaHJtc2gvQ29kZXMvX3Byb2plY3RzL2lkZWFsaXN0L21hbXBpci5pbi93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsRGV0YWlsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSm91cm5hbERldGFpbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjVmZjA4NDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNWZmMDg0MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Kb3VybmFsRGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL0pvdXJuYWxEZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=