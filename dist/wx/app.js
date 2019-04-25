require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index_js__ = __webpack_require__(59);



// import server from '@/server/services'

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
// Vue.prototype.$server = server
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index_js__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

wx.cloud.init({
  env: 'taiyunkeji-066759',
  traceUser: true
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]
});
app.$mount();

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(4)
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

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_userInfo__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_projects__ = __webpack_require__(62);
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

/***/ 61:
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

/***/ 62:
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

/***/ })

},[54]);