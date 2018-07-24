module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(5);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/where-favicon.png"
  }), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external__react__default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external__react__default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(6);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// CONCATENATED MODULE: ./components/Login/LoginContainer.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\nposition: fixed;\nwidth: 100%;\nheight: 100vh;\nbackground-image: url('/static/chicago2.PNG');\nbackground-size: cover;\nbackground-position: right 0px;\nfont-family: Roboto, sans-serif;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 50vh 30px 0 30px;\n  width: 35% ;\n  vertical-align: middle;\n  padding: 10px;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  background-color : rgba(26, 25, 25, 0.85);\n  padding: 10px;\n  color: white;\n  border-radius: 10px\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 85%;\n  height : 30px;\n  margin: 5px 0;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 85%;\n  height : 30px;\n  background-color : rgb(0, 155, 0);\n  color: white;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\ncolor: white;\nfont-size: 12px;\nposition: fixed;\nbottom: 10px;\nleft : 15px\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\nfloat: left;\nmargin: 8px 50px 8px 8px\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\nwidth: 20%;\nfloat: right;\nmargin: 20px 35px\n"]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\nwidth : 100%\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LoginScreen = external__styled_components__default.a.div(_templateObject);
var LoginBox = external__styled_components__default.a.div(_templateObject2);
var LoginForm = external__styled_components__default.a.form(_templateObject3);
var LoginInput = external__styled_components__default.a.input(_templateObject4);
var LoginButton = external__styled_components__default.a.button(_templateObject5);
var Footer = external__styled_components__default.a.footer(_templateObject6);
var LoginHeader = external__styled_components__default.a.p(_templateObject7);
var HbkLogoImg = external__styled_components__default.a.img(_templateObject8);
var HbkWhereImg = external__styled_components__default.a.img(_templateObject9);

var LoginContainer_LoginContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginContainer, _Component);

  function LoginContainer(props) {
    var _this;

    _classCallCheck(this, LoginContainer);

    _this = _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).call(this, props));
    _this.state = {
      error: null,
      isLoaded: false,
      username: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isLoaded: true
      });
    } // handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   this.setState({
    //     [name]: value
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded;

      if (error) {
        return external__react__default.a.createElement("div", null, "Error: ", error.message);
      } else if (!isLoaded) {
        return external__react__default.a.createElement("div", null, "Loading...");
      } else {
        return external__react__default.a.createElement(LoginScreen, null, external__react__default.a.createElement(HbkLogoImg, {
          src: "/static/hbkLogo.PNG",
          alt: "hbkLogo"
        }), external__react__default.a.createElement(LoginBox, null, external__react__default.a.createElement(HbkWhereImg, {
          src: "/static/hbkWhereLogo.PNG",
          alt: "hbkWhereLogo"
        }), external__react__default.a.createElement(LoginForm, null, external__react__default.a.createElement(LoginHeader, null, "Sign In"), external__react__default.a.createElement(LoginInput, {
          placeholder: 'Enter Username'
        }), external__react__default.a.createElement(LoginInput, {
          placeholder: 'Enter Password'
        }), external__react__default.a.createElement(LoginButton, null, " Login "))), external__react__default.a.createElement(Footer, null, "\xA9 ", new Date().getFullYear(), " HBK Engineering, LLC | Version 2.1.6 |", external__react__default.a.createElement(link__default.a, {
          href: "http://help.hbkapps.com/",
          target: "_blank"
        }, external__react__default.a.createElement("a", null, "Help"))));
      }
    }
  }]);

  return LoginContainer;
}(external__react_["Component"]);

/* harmony default export */ var Login_LoginContainer = (LoginContainer_LoginContainer);
// CONCATENATED MODULE: ./pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head, {
    title: "Home"
  }), external__react__default.a.createElement(Login_LoginContainer, null));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })
/******/ ]);