require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(154);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '修改信息'
  }
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f8257ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(155)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f8257ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f8257ec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\modifyInfor\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f8257ec", Component.options)
  } else {
    hotAPI.reload("data-v-2f8257ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 155:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_vue__ = __webpack_require__(53);


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
  name: 'modifyInfor',
  data: function data() {
    return {
      information: {
        name: '',
        username: '',
        phone: '',
        company: '',
        projectname: '',
        _id: ''
      },
      closeSuccessBool: false,
      projects: [],
      projectsBool: false,
      companys: [],
      companysBool: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var that = this;
    // 获取 用户数据
    that.getUserStorage().then(function (res) {
      // 赋值
      for (var item in res) {
        for (var nItem in that.information) {
          if (item === nItem) {
            that.information[nItem] = res[item];
          }
        }
      }
    });
    // 链接数据库
    var db = wx.cloud.database({});
    // 请求项目列表
    db.collection('project').get({
      success: function success(res) {
        that.$store.dispatch('pushProjects', res.data);
        that.projects = that.$store.getters.getProjects;
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
    // 请求公司名称列表
    db.collection('companys').get({
      success: function success(res) {
        that.companys = res.data;
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  },

  methods: {
    // 更新 用户数据
    modify: function modify() {
      var that = this;
      var _information = this.information,
          name = _information.name,
          phone = _information.phone,
          company = _information.company,
          projectname = _information.projectname;

      var db = wx.cloud.database();
      db.collection('user').doc(that.information._id).update({
        data: {
          name: name,
          company: company,
          phone: phone,
          projectname: projectname
        },
        success: function success(res) {
          that.getUserStorage().then(function (res) {
            wx.setStorage({
              key: 'userInfo',
              data: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, res, that.information)
            });
            that.$store.dispatch('setUserInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, res, that.information));
            wx.navigateTo({
              url: '../index/main'
            });
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },

    // 清空缓存 跳转
    logout: function logout() {
      // 清空本地缓存
      wx.clearStorage();
      // 路由跳转
      wx.navigateTo({
        url: '../login/main'
      });
      // 清空池子数据
      this.$store.dispatch('clearUserInfo');
    },
    moneyControl: function moneyControl(e) {},

    // 关闭 注册成功弹板
    closeSuccess: function closeSuccess() {
      this.closeSuccessBool = false;
    },

    // 开挂 下拉列表
    setSeclect: function setSeclect(value) {
      this[value] = !this[value];
    },

    // 选择项目 公司名字
    selectProject: function selectProject(item, value, name) {
      console.log(item);
      this[value] = !this[value];
      this.information[name] = item;
    },

    // 查找缓存
    getUserStorage: function getUserStorage() {
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        wx.getStorage({
          key: 'userInfo',
          success: function success(res) {
            if (res.errMsg === 'getStorage:ok') {
              resolve(res.data);
            }
          },
          fail: function fail(re) {
            console.log(re);
          }
        });
      });
    }
  },
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_2__components_card_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register-context"
  }, [_c('div', {
    staticClass: "hr-top"
  }), _vm._v(" "), _c('div', {
    staticClass: "hr-t"
  }), _vm._v(" "), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "form-item"
  }, [_c('i', {
    staticClass: "item-i"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("用户名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.information.username),
      expression: "information.username"
    }],
    staticClass: "input disabled",
    attrs: {
      "type": "text",
      "disabled": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.information.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.information.username = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('i', {
    staticClass: "item-i"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.information.name),
      expression: "information.name"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.information.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.information.name = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('i', {
    staticClass: "item-i"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("手机号码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.information.phone),
      expression: "information.phone"
    }],
    staticClass: "input",
    attrs: {
      "type": "Number",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.information.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.information.phone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('i', {
    staticClass: "item-i"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("项目名称")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.information.projectname),
      expression: "information.projectname"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "disabled": "",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.information.projectname)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.information.projectname = $event.target.value
      }, _vm.moneyControl]
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "select",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.setSeclect('projectsBool')
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.projectsBool),
      expression: "projectsBool"
    }],
    staticClass: "projects"
  }, _vm._l((_vm.projects), function(item, index) {
    return _c('div', {
      key: item.ID,
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectProject(item.ID, 'projectsBool', 'projectname')
        }
      }
    }, [_vm._v(_vm._s(item.ID))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('i', {
    staticClass: "item-i"
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("公司名称")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.information.company),
      expression: "information.company"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "disabled": "",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.information.company)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.information.company = $event.target.value
      }, _vm.moneyControl]
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "select",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.setSeclect('companysBool')
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companysBool),
      expression: "companysBool"
    }],
    staticClass: "projects"
  }, _vm._l((_vm.companys), function(item, index) {
    return _c('div', {
      key: item._id,
      attrs: {
        "eventid": '8_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectProject(item.companyName, 'companysBool', 'company')
        }
      }
    }, [_vm._v(_vm._s(item.companyName))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('button', {
    staticClass: "register",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.modify
    }
  }, [_vm._v("修改")]), _vm._v(" "), _c('button', {
    staticClass: "register",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("注销")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f8257ec", esExports)
  }
}

/***/ })

},[153]);