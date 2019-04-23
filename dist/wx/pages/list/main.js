require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-content"
  }, [_c('div', {
    staticClass: "user-name",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goModifyInfor
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.sn), function(item, index) {
    return _c('div', {
      key: item._id,
      staticClass: "tr",
      class: {
        'color': index % 2 == 0
      }
    }, [_c('div', {
      staticClass: "th"
    }, [_vm._v(_vm._s(index + 1 + (_vm.pageNumber - 1) * 10))]), _vm._v(" "), _c('div', {
      staticClass: "th"
    }, [_vm._v(_vm._s(item.sn))])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "now-number"
  }, [_vm._v("\n      第\n      "), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.pageNumber))]), _vm._v("\n      页\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "go jian",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.getList('-')
      }
    }
  }, [_vm._v("上一页")]), _vm._v(" "), _c('div', {
    staticClass: "go add",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.getList('+')
      }
    }
  }, [_vm._v("下一页")]), _vm._v(" "), _c('div', {
    staticClass: "jump-to"
  }, [_vm._v("跳转至")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sumpNumber),
      expression: "sumpNumber"
    }],
    staticClass: "jump",
    attrs: {
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.sumpNumber)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sumpNumber = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', [_vm._v("页")])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tr"
  }, [_c('div', {
    staticClass: "th"
  }, [_vm._v("序号")]), _vm._v(" "), _c('div', {
    staticClass: "th"
  }, [_vm._v("SN")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3b92c09c", esExports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '列表'
  }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3b92c09c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b92c09c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3b92c09c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\list\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b92c09c", Component.options)
  } else {
    hotAPI.reload("data-v-3b92c09c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'list',
  data: function data() {
    return {
      name: '用户名',
      sn: [],
      sumpNumber: 1,
      pageNumber: 1,
      pageSize: 10,
      total: 0
    };
  },
  onShow: function onShow() {
    var name = this.$store.getters.getUserInfo.name;

    if (this.$store.getters.getUserInfo) {
      this.name = name;
    }
  },
  mounted: function mounted() {
    var that = this;
    var _that$$store$getters$ = that.$store.getters.getUserInfo,
        name = _that$$store$getters$.name,
        _id = _that$$store$getters$._id;

    if (that.$store.getters.getUserInfo) {
      that.name = name;
    }
    if (_id != undefined) {
      this.getTotal(_id).then(function (res) {
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: res,
            filter: { userid: _id }
          }
        }).then(function (response) {
          that.sn = response.result.data;
        });
      });
    }
  },

  methods: {
    // 获取列表
    getList: function getList(value) {
      var that = this;
      if (value === '+' && that.pageNumber !== Math.ceil(that.total.total / that.pageSize)) {
        that.sn = [];
        that.pageNumber += 1;
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: that.total.total,
            filter: { userid: that.$store.getters.getUserInfo._id }
          }
        }).then(function (response) {
          that.sn = response.result.data;
        });
      } else if (value === '-' && that.pageNumber !== 1) {
        that.sn = [];
        that.pageNumber -= 1;
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: that.total.total,
            filter: { userid: that.$store.getters.getUserInfo._id }
          }
        }).then(function (response) {
          that.sn = response.result.data;
        });
      }
    },

    // 获取总页数
    getTotal: function getTotal(userid) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var that, db;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                db = wx.cloud.database({});
                _context.next = 4;
                return db.collection('sn').where({ userid: userid }).count();

              case 4:
                that.total = _context.sent;
                return _context.abrupt('return', that.total.total);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 跳转至修改数据
    goModifyInfor: function goModifyInfor() {
      wx.navigateTo({
        url: '../modifyInfor/main'
      });
    }
  }
});

/***/ })

},[70]);