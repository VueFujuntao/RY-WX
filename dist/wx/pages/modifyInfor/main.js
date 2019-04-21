require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(113);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '修改信息'
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8db6849e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8db6849e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8db6849e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-8db6849e", Component.options)
  } else {
    hotAPI.reload("data-v-8db6849e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card_vue__ = __webpack_require__(37);
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
        password: ''
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
    var db = wx.cloud.database({});
    // 请求项目列表
    db.collection('project').where({}).get({
      success: function success(res) {
        that.$store.dispatch('pushProjects', res.data);
        that.projects = that.$store.getters.getProjects;
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
    // 请求公司名称列表
    db.collection('companys').where({}).get({
      success: function success(res) {
        that.companys = res.data;
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  },

  methods: {
    register: function register() {
      var that = this;
      var _information = this.information,
          name = _information.name,
          phone = _information.phone,
          company = _information.company,
          username = _information.username,
          password = _information.password,
          projectname = _information.projectname;

      var db = wx.cloud.database();
      db.collection('user').add({
        data: {
          name: name,
          password: password,
          company: company,
          phone: phone,
          username: username,
          projectname: projectname
        },
        success: function success(res) {
          that.closeSuccessBool = true;
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
      // if (name !== '' && phone !== '' && company !== '' && companyNumber !== '' && password !== '') {
      //   if (this.information.password === this.information.confirmPassword) {
      //     // this.$server.registerUser({'username': 'czq1111', 'password': 'qwer123456'}).then(response => {
      //     //   if (response.code === 200) {
      //     //     console.log(response)
      //     //     console.log(this)
      //     //   }
      //     // })
      //   }
      // }
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
    }
  },
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_0__components_card_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register-context"
  }, [(_vm.closeSuccessBool) ? _c('Card', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "closeSuccess": _vm.closeSuccess
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
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
    staticClass: "input",
    attrs: {
      "type": "text",
      "eventid": '1'
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
      "eventid": '2'
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
      "eventid": '3'
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
      "eventid": '4'
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
      "eventid": '5'
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
        "eventid": '6_' + index
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
      "eventid": '7'
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
      "eventid": '8'
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
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectProject(item.companyName, 'companysBool', 'company')
        }
      }
    }, [_vm._v(_vm._s(item.companyName))])
  }))], 1), _vm._v(" "), _c('button', {
    staticClass: "register",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("确定")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8db6849e", esExports)
  }
}

/***/ })

},[112]);