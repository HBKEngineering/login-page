webpackHotUpdate(4,{

/***/ "./components/Login/LoginContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/codisteinborn/Desktop/Github/login-page/hbkwherelogin/components/Login/LoginContainer.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\nposition: fixed;\nwidth: 100%;\nheight: 100vh;\nbackground-image: url('/static/chicago2.PNG');\nbackground-size: cover;\nbackground-position: right 0px;\nfont-family: Roboto, sans-serif;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\nfont-size: 25px;\nwidth: 50%;\npadding: 30px;\nmargin : 0 auto;\ntext-align : center;\nbackground-color : #f5f5f5e6;\ncolor: #0d203d;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 50vh 30px 0 30px;\n  width: 35% ;\n  vertical-align: middle;\n  padding: 10px;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  background-color : rgba(26, 25, 25, 0.85);\n  padding: 10px;\n  color: white;\n  border-radius: 10px\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 85%;\n  height : 30px;\n  margin: 5px 0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 85%;\n  height : 30px;\n  background-color : rgb(0, 155, 0);\n  color: white;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\ncolor: white;\nfont-family: Roboto, sans-serif;\nfont-size: 12px;\nposition: fixed;\nbottom: 10px;\nleft : 15px\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\nfloat: left;\nmargin: 8px 50px 8px 8px\n"]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\nwidth: 20%;\nfloat: right;\nmargin: 20px 35px\n"]),
    _templateObject10 = /*#__PURE__*/ _taggedTemplateLiteral(["\nwidth : 100%\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LoginScreen = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);
var NewLookModal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2);
var LoginBox = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject3);
var LoginForm = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].form(_templateObject4);
var LoginInput = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].input(_templateObject5);
var LoginButton = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button(_templateObject6);
var Footer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].footer(_templateObject7);
var LoginHeader = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject8);
var HbkLogoImg = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].img(_templateObject9);
var HbkWhereImg = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].img(_templateObject10);

var LoginContainer =
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
      password: '',
      firstVisit: true
    };
    return _this;
  }

  _createClass(LoginContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("HBKWhereFirstVisit")) {
        this.setState({
          firstVisit: false
        });
      }

      ;
      this.setState({
        isLoaded: true
      });
    }
  }, {
    key: "handleFirstVisitClick",
    value: function handleFirstVisitClick() {
      this.setState({
        firstVisit: false
      }); // localStorage.setItem("HBKWhereFirstVisit", true);
    } // handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   this.setState({
    //     [name]: value
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded;

      if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "Error: ", error.message);
      } else if (!isLoaded) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, "Loading...");
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, this.state.firstVisit ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginScreen, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NewLookModal, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "Welcome to the New HBK Where Sign In Page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "We\u2019ve enhanced the look of this page. Use your regular login information to enter."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, "Questions? Click here to chat"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginButton, {
          onClick: function onClick() {
            _this2.handleFirstVisitClick();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, "Got it"))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginScreen, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HbkLogoImg, {
          src: "/static/hbkLogo.PNG",
          alt: "hbkLogo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginBox, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HbkWhereImg, {
          src: "/static/hbkWhereLogo.PNG",
          alt: "hbkWhereLogo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginForm, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginHeader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, "Sign In"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginInput, {
          placeholder: 'Enter Username',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginInput, {
          placeholder: 'Enter Password',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, " Login ")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, "\xA9 ", new Date().getFullYear(), " HBK Engineering, LLC | Version 2.1.6 |", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: "http://help.hbkapps.com/",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, "Help"))));
      }
    }
  }]);

  return LoginContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LoginContainer);

/***/ })

})
//# sourceMappingURL=4.106ec70f48251b5ae1be.hot-update.js.map