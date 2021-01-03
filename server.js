/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"public\"));\napp.get(\"/test\", function (req, res, next) {\n  res.status(200).json({\n    \"test1\": '1',\n    \"test2\": '2'\n  });\n});\napp.get(\"/allowedRoutes\", function (req, res, next) {\n  res.status(200).json({\n    \"Pages\": [{\n      \"name\": \"Page1\",\n      \"endpoint\": \"/page1\"\n    }, {\n      \"name\": \"Page2\",\n      \"endpoint\": \"/page2\"\n    }],\n    \"User\": [{\n      \"name\": \"UserPage1\",\n      \"endpoint\": \"/userpage1\"\n    }, {\n      \"name\": \"UserPage2\",\n      \"endpoint\": \"/userpage2\"\n    }],\n    \"Account\": [{\n      \"name\": \"Profile\",\n      \"endpoint\": \"/profile\"\n    }, {\n      \"name\": \"Settings\",\n      \"endpoint\": \"/settings\"\n    }]\n  });\n});\napp.get(\"*\", function (req, res, next) {\n  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n  promise.then(function (data) {\n    var context = {\n      data: data\n    };\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n    res.send(\"\\n      <!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>Stan's React</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"style.css\\\">\\n          <script src=\\\"/bundle.js\\\" defer></script>\\n          <script>window.__INITIAL_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), \"</script>\\n        </head>\\n\\n        <body>\\n          <div id=\\\"app\\\">\").concat(markup, \"</div>\\n        </body>\\n      </html>\\n    \"));\n  })[\"catch\"](next);\n});\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n/*\n  1) Just get shared App rendering to string on server then taking over on client.\n  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.\n  3) Instead of static data move to dynamic data (github gists)\n  4) add in routing.\n*/\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.css":
/*!****************************!*\
  !*** ./src/shared/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* body {\\n    background-color: #5ecf29;\\n}\\n\\n.element {\\n    background-color: #51b5dd;\\n    color: white;\\n    font-size: 20px;\\n    padding: 20px;\\n} */\\n\\n\\n:root {\\n    --bg-color: #ffffff;\\n    --primary-color: #ff2600;\\n    --secondary-color: #ff5537;\\n    --selected-color: #ffffff;\\n    --content-color: #ececec;\\n    --font-color: #000000;\\n}\\n\\n[data-theme=\\\"dark\\\"] {\\n    /* --bg-color: #272b42; */\\n    --bg-color: #393939;\\n    --primary-color: #ff5a09;\\n    --secondary-color: #f17426;\\n    --selected-color: #393939;\\n    --content-color: #e8e8de;\\n    --font-color: #e8e8de;\\n}\\n\\nbody {\\n    background-color: var(--bg-color);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/App.css?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/Navbar */ \"./src/shared/navbar/Navbar.jsx\");\n/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoMatch */ \"./src/shared/NoMatch.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ \"./src/shared/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n // import styles from \"./AppCSS.css\"\n// import \"./style.css\";\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            Component = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest));\n          }\n        });\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        render: function render(props) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], props);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"THIS IS THE BEGINNING!\");\n}\n\n//# sourceURL=webpack:///./src/shared/Home.js?");

/***/ }),

/***/ "./src/shared/NoMatch.js":
/*!*******************************!*\
  !*** ./src/shared/NoMatch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoMatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NoMatch() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Four Oh Four\");\n}\n\n//# sourceURL=webpack:///./src/shared/NoMatch.js?");

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction fetchPopularRepos() {\n  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';\n  var encodedURI = encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language:\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI).then(function (data) {\n    return data.json();\n  }).then(function (repos) {\n    return repos.items;\n  })[\"catch\"](function (error) {\n    console.warn(error);\n    return null;\n  });\n}\n\n//# sourceURL=webpack:///./src/shared/api.js?");

/***/ }),

/***/ "./src/shared/navbar/Navbar.jsx":
/*!**************************************!*\
  !*** ./src/shared/navbar/Navbar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.css */ \"./src/shared/navbar/navbar.css\");\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Navbar = /*#__PURE__*/function (_Component) {\n  _inherits(Navbar, _Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this;\n\n    _classCallCheck(this, Navbar);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      theme: 'dark',\n      allowedRoutes: {},\n      test: 'banana'\n    };\n    _this.activateLasers = _this.activateLasers.bind(_assertThisInitialized(_this));\n    _this.renderMenuPages = _this.renderMenuPages.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Navbar, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var self = this;\n      this.activateLasers();\n      var allowedRoutesURI = \"http://localhost:3000/allowedRoutes\";\n      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(allowedRoutesURI).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        self.setState({\n          allowedRoutes: data\n        });\n      })[\"catch\"](function (error) {\n        console.warn(error);\n      });\n    }\n  }, {\n    key: \"renderMenuPages\",\n    value: function renderMenuPages(pages) {\n      var menuPages = Object.entries(pages).map(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            category = _ref2[0],\n            subpages = _ref2[1];\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: category,\n          className: \"nav-menu dropdown\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          key: category,\n          className: \"nav-item\"\n        }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"dropdown-content\"\n        }, Object.entries(subpages).map(function (_ref3) {\n          var _ref4 = _slicedToArray(_ref3, 2),\n              i = _ref4[0],\n              page = _ref4[1];\n\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n            key: page.name,\n            href: page.endpoint\n          }, page.name);\n        })));\n      });\n      return menuPages;\n    }\n  }, {\n    key: \"activateLasers\",\n    value: function activateLasers() {\n      var theme = this.state.theme === 'light' ? 'dark' : 'light';\n      this.state.theme = theme;\n      document.documentElement.setAttribute(\"data-theme\", theme);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"nav-bar\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"nav-home\",\n        className: \"banana\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"nav-item\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/\",\n        rel: \"home\",\n        id: \"nav-home-link\"\n      }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Get. It. Done.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"nav-spacer\"\n      }), this.renderMenuPages(this.state.allowedRoutes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"nav-menu dropdown\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"nav-item\"\n      }, \"TEST\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"dropdown-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"onoffswitch\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"checkbox\",\n        name: \"onoffswitch\",\n        className: \"onoffswitch-checkbox\",\n        id: \"theme-switch\",\n        onClick: this.activateLasers\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        className: \"onoffswitch-label\",\n        htmlFor: \"theme-switch\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"onoffswitch-inner\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"onoffswitch-switch\"\n      }))))));\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/shared/navbar/Navbar.jsx?");

/***/ }),

/***/ "./src/shared/navbar/navbar.css":
/*!**************************************!*\
  !*** ./src/shared/navbar/navbar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#nav-bar{\\n    width: 98%;\\n    height: 100px;\\n    color: var(--content-color);\\n    /* border: 3px solid rgb(255, 227, 66); */\\n    /* border-bottom: 3px double var(--primary-color); */\\n    /* padding: 10px; */\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    /* align-items: stretch; */\\n    /* align-content: stretch; */\\n    margin: 0 auto;\\n    /* display: inline; */\\n}\\n\\n#nav-home-link{\\n    color: var(--font-color);\\n    text-decoration: none;\\n    /* height:  */\\n    font-size: 3.5vw;\\n    /* font-size: 3.5; */\\n    /* font-size: 2.2em;  */\\n}\\n\\n#nav-home-link:hover{\\n    color: var(--bg-color);\\n    /* text-decoration: none; */\\n    /* font-size: 90%; */\\n    /* font-size: 2.2em; */\\n}\\n\\n#nav-home{\\n    /* border: 1px rgb(255, 255, 255) solid; */\\n    /* width: 20%; */\\n    flex-basis: 20%;\\n    /* flex-grow: 2; */\\n    height: 70%;\\n}\\n\\n#nav-spacer{\\n    margin-left: 5px;\\n    /* border: 1px rgb(255, 255, 255) solid; */\\n    /* width: max-content; */\\n    /* flex-grow: 1; */\\n    flex-basis: 80%;\\n    flex-shrink: 1;\\n    /* width: fill-available; */\\n    /* width: 49%; */\\n    height: 8%;\\n    font-size: 0%;\\n    background-color: var(--primary-color);\\n}\\n\\n.nav-menu{\\n    margin-left: 5px;\\n    /* border: 1px rgb(255, 255, 255) solid; */\\n    flex-basis: 10%;\\n    height: 20%;\\n}\\n\\n/* .nav-setting{\\n    margin-left: 5px;\\n    border: 1px rgb(255, 255, 255) solid;\\n    flex-basis: 10%;\\n    height: 20%;\\n} */\\n\\n.nav-item {\\n    /* border: 1px rgb(9, 245, 40) solid; */\\n\\n    background-color: var(--primary-color);\\n    color: var(--font-color);\\n    border: none;\\n    border-radius: 2px;\\n    \\n    width: 100%;\\n    height: 100%;\\n    bottom: 0;\\n    display: block;\\n    text-decoration: none;\\n    text-align: center;\\n    box-shadow: -6px 6px 8px 2px rgba(0,0,0,0.4);\\n    \\n    /* position: relative; */\\n    /* display: inline-block; */\\n}\\n\\n.dropdown{\\n    cursor: pointer;\\n    position: relative;\\n    display: inline-block;\\n}\\n  \\n.dropdown-content {\\n    display: none;\\n    position: absolute;\\n    right: 0;\\n    background-color: var(--secondary-color);\\n    width: 120%;\\n    box-shadow: -6px 6px 8px 2px rgba(0,0,0,0.4);\\n    z-index: 1;\\n}\\n\\n.dropdown-content a{\\n    /* border: 1px rgb(0, 0, 0) solid; */\\n    color: var(--font-color);\\n    font-size: 1.2em;\\n    padding: 12px 16px;\\n    text-decoration: none;\\n    display: block;\\n    border-bottom:1px solid var(--bg-color);\\n}\\n\\n.divider {\\n    /* flex-grow: 1; */\\n    width: 20px;\\n    /* border-bottom: 1px solid black; */\\n    /* margin: 5px */\\n}\\n\\n.dropdown-content a:hover {color: var(--bg-color);}\\n.dropdown:hover .dropdown-content {display: block;}\\n/* .dropdown .dropdown-content {display: block;} */\\n.dropdown:hover .navItem {color: var(--selected-color);}\\n\\n\\n/* Toggle switch for switching themes. */\\n.onoffswitch {\\n    /* margin: 3px auto; */\\n    margin: 6px 16px;\\n    display: block;\\n    position: relative; width: 68px;\\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\\n}\\n.onoffswitch-checkbox {\\n    display: none;\\n}\\n.onoffswitch-label {\\n    display: block; overflow: hidden; cursor: pointer;\\n    border: 2px solid #999999; border-radius: 30px;\\n}\\n.onoffswitch-inner {\\n    display: block; width: 200%; margin-left: -100%;\\n    transition: margin 0.3s ease-in 0s;\\n}\\n.onoffswitch-inner:before, .onoffswitch-inner:after {\\n    display: block; float: left; width: 50%; height: 20px; padding: 0; line-height: 20px;\\n    font-size: 12px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\\n    box-sizing: border-box;\\n}\\n.onoffswitch-inner:before {\\n    content: \\\"Dark\\\";\\n    padding-left: 15px;\\n    background-color: #34A7C1; color: #FFFFFF;\\n}\\n.onoffswitch-inner:after {\\n    content: \\\"Light\\\";\\n    padding-right: 15px;\\n    background-color: #EEEEEE; color: #999999;\\n    text-align: right;\\n}\\n.onoffswitch-switch {\\n    display: block; width: 10px; margin: 5px;\\n    background: #FFFFFF;\\n    position: absolute; top: 0; bottom: 0;\\n    right: 44px;\\n    border: 2px solid #999999; border-radius: 30px;\\n    transition: all 0.3s ease-in 0s; \\n}\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\\n    margin-left: 0;\\n}\\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\\n    right: 0px; \\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/navbar/navbar.css?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/shared/Home.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/shared/api.js\");\n // import Grid from './Grid'\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/popular/:id',\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  fetchInitialData: function fetchInitialData() {\n    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n    return Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchPopularRepos\"])(path.split('/').pop());\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });