"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _Overview = _interopRequireDefault(require("./Overview/Overview.jsx"));

var _Ratings = _interopRequireDefault(require("./Ratings&Reviews/Ratings.jsx"));

var _RelatedItems = _interopRequireDefault(require("./RelatedItems&Comparisons/RelatedItems.jsx"));

var _QnA = _interopRequireDefault(require("./QnA/QnA.jsx"));

var _YourFit = _interopRequireDefault(require("./RelatedItems&Comparisons/YourFit.jsx"));

var _calculateStarReview = _interopRequireDefault(require("./calculateStarReview.js"));

var _token = _interopRequireDefault(require("../../public/token.js"));

var _App = _interopRequireDefault(require("./App.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      selectedProductId: null,
      reviewMetaData: {},
      starRating: 0,
      isLoading: true
    };
    return _this;
  }

  _createClass(App, [{
    key: "getProductList",
    value: function getProductList() {
      //request to get all products
      //returns a promise
      return _axios["default"].get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
        headers: {
          'Authorization': _token["default"]
        }
      });
    } //Ratings and Reviews related Get requests

  }, {
    key: "getReviewMetaData",
    value: function getReviewMetaData(productId) {
      //request to get review metadata on a specified product
      //returns a promise
      return _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta", {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: productId
        }
      });
    } //will probably need to update to be an event handler function for when a new product is selected

  }, {
    key: "changeProduct",
    value: function changeProduct(productId) {
      var _this2 = this;

      var newState = {};
      newState.selectedProductId = productId;
      this.getReviewMetaData(productId).then(function (reviewMetadata) {
        newState.reviewMetaData = reviewMetadata.data;
        newState.starRating = (0, _calculateStarReview["default"])(newState.reviewMetaData.ratings);
        newState.isLoading = false;
        console.log('newstate: ', newState);

        _this2.setState(newState);
      })["catch"](function (err) {
        console.log('error get overview data: ', err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      //bascially the same as changing the selected product, but has to retrieve product list at the outset
      this.getProductList().then(function (products) {
        _this3.changeProduct(products.data[0].id);
      })["catch"](function (err) {
        console.log('Error retriving product List: ', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "Loading");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.state.selectedProductId
      }, /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating,
        ratings: this.state.reviewMetaData.ratings
      }), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], null), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], null), /*#__PURE__*/_react["default"].createElement(_QnA["default"], {
        productID: this.state.selectedProductId
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;

exports["default"] = _default;

