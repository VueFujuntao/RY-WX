require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_services__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_md5__);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$server = __WEBPACK_IMPORTED_MODULE_3__server_services__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index_js__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$md5 = __WEBPACK_IMPORTED_MODULE_4_md5___default.a;

__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

wx.cloud.init({
  env: 'taiyunkeji-066759',
  traceUser: true
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({ App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] });
app.$mount();

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(43);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3adadcea", Component.options)
  } else {
    hotAPI.reload("data-v-3adadcea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    // mpvue.getUserInfo({
    //   success: function(res) {
    //     console.log(12)
    //   }
    // })
    // 查看是否授权

    // let logs
    // if (mpvuePlatform === 'my') {
    //   logs = mpvue.getStorageSync({key: 'logs'}).data || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync({
    //     key: 'logs',
    //     data: logs
    //   })
    // } else {
    //   logs = mpvue.getStorageSync('logs') || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync('logs', logs)
    // }
  },
  mounted: function mounted() {
    console.log(123);
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_userInfo__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_projects__ = __webpack_require__(47);
/**
 * Created by tengteng on 18/7/17.
 */

// vuex






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    UserInfo: __WEBPACK_IMPORTED_MODULE_2__modules_userInfo__["a" /* default */],
    Projects: __WEBPACK_IMPORTED_MODULE_3__modules_projects__["a" /* default */]
  }
}));

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
  userInfo: ''
};

var getters = {
  getUserInfo: function getUserInfo(state) {
    return state.userInfo;
  }
};

var mutations = {
  setUserInfo: function setUserInfo(state, value) {
    state.userInfo = value;
  },
  clearUserInfo: function clearUserInfo(state) {
    state.userInfo = '';
  }
};

var actions = {
  setUserInfo: function setUserInfo(context, value) {
    context.commit('setUserInfo', value);
  },
  clearUserInfo: function clearUserInfo(context) {
    context.commit('clearUserInfo');
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
  projects: []
};

var getters = {
  getProjects: function getProjects(state) {
    return state.projects;
  }
};

var mutations = {
  mutationProjects: function mutationProjects(state, value) {
    state.projects = value;
  }
};

var actions = {
  pushProjects: function pushProjects(context, value) {
    context.commit('mutationProjects', value);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx__);
/**
 * @author wxj
 * @date 2019/4/11 15:19
 * @Last Modified by: fujuntao
 * @Last Modified time: 2019-04-16 10:45:03
 */

var fly = new __WEBPACK_IMPORTED_MODULE_0_flyio_dist_npm_wx___default.a();

var host = 'http://192.168.2.234:8990';
// 添加请求拦截器
fly.interceptors.request.use(function (config, promise) {
  // 给所有请求添加自定义header
  config.headers = {
    'config': 'flyio',
    'content-type': 'application/json;charset=UTF-8;'
  };
  config.baseURL = host;
  config.timeout = 10000;
  // 可以通过promise.reject／resolve直接中止请求
  // promise.resolve("fake data")
  return config;
});

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
  return response.data;
}, function (err) {
  return err;
});

var requests = {
  getlist: function getlist() {
    return fly.get('https://www.easy-mock.com/mock/5b70ec93ad23a1570071a34e/Interview/ces');
  },
  postlist: function postlist(data) {
    return fly.post('https://192.168.1.249:8443/', data);
  },

  // 注册用户
  registerUser: function registerUser(data) {
    return fly.put('/agent/save', data);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (requests);

/***/ })

},[39]);