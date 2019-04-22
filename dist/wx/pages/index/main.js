require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(54);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47f2ab14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47f2ab14"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47f2ab14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47f2ab14", Component.options)
  } else {
    hotAPI.reload("data-v-47f2ab14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_scancode_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pointer_vue__ = __webpack_require__(61);
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
  data: function data() {
    return {
      compnoentss: true,
      valueData: '',
      userBool: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getUserStorage();
  },

  methods: {
    // 跳转至 登入页面
    toLoginPage: function toLoginPage(e) {
      console.log(this.userBool);
      if (this.userBool === true) {
        wx.navigateTo({
          url: '../list/main'
        });
      } else {
        wx.navigateTo({
          url: '../login/main'
        });
      }
    },

    // 手工输入
    toPointer: function toPointer(value) {
      this.compnoentss = !this.compnoentss;
      this.valueData = value;
    },

    // 获取得到的校验码
    getValueData: function getValueData(value) {
      this.valueData = value;
    },

    // 查找缓存
    getUserStorage: function getUserStorage() {
      var that = this;
      wx.getStorage({
        key: 'userInfo',
        success: function success(res) {
          console.log(res);
          if (res.errMsg === 'getStorage:ok') {
            that.$store.dispatch('setUserInfo', res.data);
            that.userBool = true;
          }
        }
      });
    }
  },
  components: {
    Scancode: __WEBPACK_IMPORTED_MODULE_0__components_scancode_vue__["a" /* default */],
    Pointer: __WEBPACK_IMPORTED_MODULE_1__components_pointer_vue__["a" /* default */]
  },
  onShow: function onShow() {
    console.log(123);
    this.getUserStorage();
  }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scancode_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_675b1f4d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scancode_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-675b1f4d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scancode_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_675b1f4d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scancode_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\scancode.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scancode.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-675b1f4d", Component.options)
  } else {
    hotAPI.reload("data-v-675b1f4d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'scancode',
  methods: {
    click: function click() {
      this.$emit('toPointer');
    },

    // 扫一扫 功能
    scanCode: function scanCode() {
      var that = this;
      wx.scanCode({
        success: function success(res) {
          if (Object.prototype.toString.call(res.result) === '[object String]') {
            wx.cloud.callFunction({
              name: 'queryComparison',
              data: {
                dbName: 'sn',
                result: JSON.parse(res.result)
              }
            }).then(function (response) {
              if (response.result.ok === 1) {
                that.$emit('getValueData', response.result.result.actuvatuion);
              }
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "scanCode-background"
  }, [_c('div', {
    staticClass: "scanCode",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.scanCode
    }
  }, [_c('div', {
    staticClass: "scancode-text"
  }, [_vm._v("扫一扫")])])]), _vm._v(" "), _c('div', {
    staticClass: "pointer",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.click
    }
  }, [_c('i'), _vm._v("\n    手工输入\n  ")], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-675b1f4d", esExports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pointer_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86c23dac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_pointer_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86c23dac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pointer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86c23dac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_pointer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\pointer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pointer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86c23dac", Component.options)
  } else {
    hotAPI.reload("data-v-86c23dac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'pointer',
  data: function data() {
    return {
      valueData: ''
    };
  },

  methods: {
    click: function click() {
      this.$emit('toPointer', '');
    },
    getValueData: function getValueData() {
      this.$emit('getValueData', this.valueData);
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "scanCode-background"
  }, [_c('div', {
    staticClass: "border"
  }, [_c('div', {
    staticClass: "border-border"
  }, [_c('div', {
    staticClass: "jiaoyanma"
  }, [_vm._v("校验码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.valueData),
      expression: "valueData"
    }],
    attrs: {
      "type": "password",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.valueData)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.valueData = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button-div"
  }, [_c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.getValueData
    }
  }, [_vm._v("确定")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "pointer",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.click
    }
  }, [_c('i'), _vm._v("\n    扫一扫\n  ")], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-86c23dac", esExports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "font",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toLoginPage
    }
  }, [_vm._v("代理商入口")]), _vm._v(" "), (_vm.compnoentss) ? _c('Scancode', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "getValueData": _vm.getValueData,
      "toPointer": _vm.toPointer
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.compnoentss) ? _c('Pointer', {
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "getValueData": _vm.getValueData,
      "toPointer": _vm.toPointer
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('div', {
    staticClass: "erweima"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-size"
  }, [_vm._v("\n      激活码:\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "input-div"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.valueData),
      expression: "valueData"
    }],
    staticClass: "input",
    attrs: {
      "disabled": "",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.valueData)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.valueData = $event.target.value
      }
    }
  })])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47f2ab14", esExports)
  }
}

/***/ })

},[53]);