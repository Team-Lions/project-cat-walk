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

var _SortReview = _interopRequireDefault(require("./SortReview.jsx"));

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
      metaData: _this.props.metaData,
      avgStarRating: _this.props.starRating,
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
      }, /*#__PURE__*/_react["default"].createElement(_RatingBreakDown["default"], {
        metaData: this.state.metaData,
        starRating: this.state.avgStarRating
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mainReviews"
      }, /*#__PURE__*/_react["default"].createElement(_SortReview["default"], {
        reviews: this.state.reviews
      }), /*#__PURE__*/_react["default"].createElement(_SingleReview["default"], {
        reviews: this.state.reviews
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "reviewButtons"
      }, /*#__PURE__*/_react["default"].createElement("button", null, "MORE REVIEWS"), /*#__PURE__*/_react["default"].createElement("button", null, "ADD A REVIEW +")))));
    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwicmV2aWV3cyIsIm1ldGFEYXRhIiwiYXZnU3RhclJhdGluZyIsInN0YXJSYXRpbmciLCJpc0xvYWRpbmciLCJwcm9kdWN0SWQiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJQcm9taXNlIiwiYWxsIiwiZ2V0UmV2aWV3cyIsInRoZW4iLCJ2YWx1ZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxPOzs7OztBQUNMLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSxFQURFO0FBRVhDLE1BQUFBLFFBQVEsRUFBRSxNQUFLSCxLQUFMLENBQVdHLFFBRlY7QUFHWEMsTUFBQUEsYUFBYSxFQUFFLE1BQUtKLEtBQUwsQ0FBV0ssVUFIZjtBQUlYQyxNQUFBQSxTQUFTLEVBQUU7QUFKQSxLQUFiO0FBRmtCO0FBUWhCOzs7O1dBRUQsb0JBQVdDLFNBQVgsRUFBc0I7QUFDdkIsYUFBT0Msa0JBQU1DLEdBQU4sQ0FBVSw0REFBVixFQUF3RTtBQUM3RUMsUUFBQUEsT0FBTyxFQUFFO0FBQ1YsMkJBQWlCQztBQURQLFNBRG9FO0FBSTdFQyxRQUFBQSxNQUFNLEVBQUU7QUFDVEMsVUFBQUEsVUFBVSxFQUFFTjtBQURIO0FBSnFFLE9BQXhFLENBQVA7QUFRRTs7O1dBR0QsNkJBQW9CO0FBQUE7O0FBQ3JCTyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNWLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS2hCLEtBQUwsQ0FBV08sU0FBM0IsQ0FEVSxDQUFaLEVBR0NVLElBSEQsQ0FHTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNmakIsVUFBQUEsT0FBTyxFQUFFZ0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxJQURKO0FBRWZkLFVBQUFBLFNBQVMsRUFBRTtBQUZJLFNBQWQ7QUFJRCxPQVJEO0FBU0U7OztXQUVELGtCQUFTO0FBQ1YsVUFBRyxLQUFLTCxLQUFMLENBQVdLLFNBQWQsRUFBeUI7QUFDeEIsNEJBQU8sdURBQVA7QUFDQTs7QUFDRCwwQkFDQywrRUFDQztBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsc0JBQ0M7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNDLGdDQUFDLDJCQUFEO0FBQWlCLFFBQUEsUUFBUSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsUUFBdEM7QUFBZ0QsUUFBQSxVQUFVLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztBQUF2RSxRQURELENBREQsZUFJQztBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0MsZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLE9BQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdDO0FBQWhDLFFBREQsZUFFQyxnQ0FBQyx3QkFBRDtBQUFjLFFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0M7QUFBbEMsUUFGRCxlQUdDO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDQywrREFERCxlQUlDLGlFQUpELENBSEQsQ0FKRCxDQURELENBREQ7QUFxQkU7Ozs7RUE1RGtCbUIsa0JBQU1DLFM7O2VBK0RidkIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQgQWRkUmV2aWV3IGZyb20gJy4vQWRkUmV2aWV3LmpzeCc7XG5pbXBvcnQgU2luZ2xlUmV2aWV3IGZyb20gJy4vU2luZ2xlUmV2aWV3LmpzeCc7XG5pbXBvcnQgUmF0aW5nQnJlYWtEb3duIGZyb20gJy4vUmF0aW5nQnJlYWtEb3duLmpzeCc7XG5pbXBvcnQgU29ydFJldmlldyBmcm9tICcuL1NvcnRSZXZpZXcuanN4JztcblxuXG5jbGFzcyBSYXRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHQgIHJldmlld3M6IHt9LFxuXHRcdCAgbWV0YURhdGE6IHRoaXMucHJvcHMubWV0YURhdGEsXG5cdFx0ICBhdmdTdGFyUmF0aW5nOiB0aGlzLnByb3BzLnN0YXJSYXRpbmcsXG5cdFx0ICBpc0xvYWRpbmc6IHRydWVcblx0XHR9XG5cdCAgfVxuXHRcblx0ICBnZXRSZXZpZXdzKHByb2R1Y3RJZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Jldmlld3MnLCB7XG5cdFx0ICBoZWFkZXJzOiB7XG5cdFx0XHQnQXV0aG9yaXphdGlvbic6IHRva2VuXG5cdFx0ICB9LFxuXHRcdCAgcGFyYW1zOiB7XG5cdFx0XHRwcm9kdWN0X2lkOiBwcm9kdWN0SWRcblx0XHQgIH1cblx0XHR9KTtcblx0ICB9XG5cdCBcblx0XG5cdCAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0UHJvbWlzZS5hbGwoW1xuXHRcdCAgdGhpcy5nZXRSZXZpZXdzKHRoaXMucHJvcHMucHJvZHVjdElkKSxcblx0XHRdKVxuXHRcdC50aGVuKCh2YWx1ZXMpID0+IHtcblx0XHQgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmV2aWV3czogdmFsdWVzWzBdLmRhdGEsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlXG5cdFx0ICB9KTtcblx0XHR9KVxuXHQgIH1cblx0XG5cdCAgcmVuZGVyKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgaWQ9XCJSYXRpbmdzQW5kUmV2aWV3c1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuXHRcdFx0XHRcdFx0PFJhdGluZ0JyZWFrRG93biBtZXRhRGF0YT17dGhpcy5zdGF0ZS5tZXRhRGF0YX0gc3RhclJhdGluZz17dGhpcy5zdGF0ZS5hdmdTdGFyUmF0aW5nfS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluUmV2aWV3c1wiPlxuXHRcdFx0XHRcdFx0PFNvcnRSZXZpZXcgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfSAvPlxuXHRcdFx0XHRcdFx0PFNpbmdsZVJldmlldyByZXZpZXdzPXt0aGlzLnN0YXRlLnJldmlld3N9Lz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3QnV0dG9uc1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdE1PUkUgUkVWSUVXU1xuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRBREQgQSBSRVZJRVcgK1xuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdClcblx0ICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ3M7Il19