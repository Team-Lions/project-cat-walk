"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _AddReview = _interopRequireDefault(require("./AddReview.jsx"));

var _SingleReview = _interopRequireDefault(require("./SingleReview.jsx"));

var _RatingBreakDown = _interopRequireDefault(require("./RatingBreakDown.jsx"));

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

var Ratings = /*#__PURE__*/function (_React$Component) {
  _inherits(Ratings, _React$Component);

  var _super = _createSuper(Ratings);

  function Ratings(props) {
    var _this;

    _classCallCheck(this, Ratings);

    _this = _super.call(this, props);
    _this.state = {
      reviews: {},
      isLoading: true
    };
    return _this;
  }

  _createClass(Ratings, [{
    key: "getReviews",
    value: function getReviews(productId) {
      return _axios["default"].get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: productId
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Promise.all([this.getReviews(this.props.productId)]).then(function (values) {
        _this2.setState({
          reviews: values[0].data,
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "Loading");
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        id: "RatingsAndReviews"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sidebar"
      }, /*#__PURE__*/_react["default"].createElement(_RatingBreakDown["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mainReviews"
      }, /*#__PURE__*/_react["default"].createElement(_SingleReview["default"], {
        reviews: this.state.reviews
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "reviewButtons"
      }, /*#__PURE__*/_react["default"].createElement("button", null, "More Reviews"), /*#__PURE__*/_react["default"].createElement("button", null, "Add Review"))));
    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwicmV2aWV3cyIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIlByb21pc2UiLCJhbGwiLCJnZXRSZXZpZXdzIiwidGhlbiIsInZhbHVlcyIsInNldFN0YXRlIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLE87Ozs7O0FBQ0wsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsU0FBUyxFQUFFO0FBRkEsS0FBYjtBQUZrQjtBQU1oQjs7OztXQUVELG9CQUFXQyxTQUFYLEVBQXNCO0FBQ3ZCLGFBQU9DLGtCQUFNQyxHQUFOLENBQVUsNERBQVYsRUFBd0U7QUFDN0VDLFFBQUFBLE9BQU8sRUFBRTtBQUNWLDJCQUFpQkM7QUFEUCxTQURvRTtBQUk3RUMsUUFBQUEsTUFBTSxFQUFFO0FBQ1RDLFVBQUFBLFVBQVUsRUFBRU47QUFESDtBQUpxRSxPQUF4RSxDQUFQO0FBUUU7OztXQUlELDZCQUFvQjtBQUFBOztBQUNyQk8sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDVixLQUFLQyxVQUFMLENBQWdCLEtBQUtiLEtBQUwsQ0FBV0ksU0FBM0IsQ0FEVSxDQUFaLEVBR0NVLElBSEQsQ0FHTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNmZCxVQUFBQSxPQUFPLEVBQUVhLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFESjtBQUVmZCxVQUFBQSxTQUFTLEVBQUU7QUFGSSxTQUFkO0FBSUQsT0FSRDtBQVNFOzs7V0FFRCxrQkFBUztBQUNWLFVBQUcsS0FBS0YsS0FBTCxDQUFXRSxTQUFkLEVBQXlCO0FBQ3hCLDRCQUFPLHVEQUFQO0FBQ0E7O0FBQ0QsMEJBQ0MsK0VBQ0M7QUFBSyxRQUFBLEVBQUUsRUFBQztBQUFSLHNCQUNDO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDQyxnQ0FBQywyQkFBRCxPQURELENBREQsZUFJQztBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0MsZ0NBQUMsd0JBQUQ7QUFBYyxRQUFBLE9BQU8sRUFBRSxLQUFLRixLQUFMLENBQVdDO0FBQWxDLFFBREQsQ0FKRCxlQU9DO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDQywrREFERCxlQUlDLDZEQUpELENBUEQsQ0FERCxDQUREO0FBcUJFOzs7O0VBM0RrQmdCLGtCQUFNQyxTOztlQThEYnBCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IEFkZFJldmlldyBmcm9tICcuL0FkZFJldmlldy5qc3gnO1xuaW1wb3J0IFNpbmdsZVJldmlldyBmcm9tICcuL1NpbmdsZVJldmlldy5qc3gnO1xuaW1wb3J0IFJhdGluZ0JyZWFrRG93biBmcm9tICcuL1JhdGluZ0JyZWFrRG93bi5qc3gnO1xuXG5cbmNsYXNzIFJhdGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdCAgcmV2aWV3czoge30sXG5cdFx0ICBpc0xvYWRpbmc6IHRydWVcblx0XHR9XG5cdCAgfVxuXHRcblx0ICBnZXRSZXZpZXdzKHByb2R1Y3RJZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Jldmlld3MnLCB7XG5cdFx0ICBoZWFkZXJzOiB7XG5cdFx0XHQnQXV0aG9yaXphdGlvbic6IHRva2VuXG5cdFx0ICB9LFxuXHRcdCAgcGFyYW1zOiB7XG5cdFx0XHRwcm9kdWN0X2lkOiBwcm9kdWN0SWRcblx0XHQgIH1cblx0XHR9KTtcblx0ICB9XG5cdFxuXHQgXG5cdFxuXHQgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFByb21pc2UuYWxsKFtcblx0XHQgIHRoaXMuZ2V0UmV2aWV3cyh0aGlzLnByb3BzLnByb2R1Y3RJZCksXG5cdFx0XSlcblx0XHQudGhlbigodmFsdWVzKSA9PiB7XG5cdFx0ICB0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJldmlld3M6IHZhbHVlc1swXS5kYXRhLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxuXHRcdCAgfSk7XG5cdFx0fSlcblx0ICB9XG5cdFxuXHQgIHJlbmRlcigpIHtcblx0XHRpZih0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuXHRcdFx0cmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuXHRcdH1cblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiUmF0aW5nc0FuZFJldmlld3NcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cblx0XHRcdFx0XHRcdDxSYXRpbmdCcmVha0Rvd24vPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblJldmlld3NcIj5cblx0XHRcdFx0XHRcdDxTaW5nbGVSZXZpZXcgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXZpZXdCdXR0b25zXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRNb3JlIFJldmlld3Ncblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0QWRkIFJldmlld1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdCAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdzOyJdfQ==