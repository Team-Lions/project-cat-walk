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

var _ReviewList = _interopRequireDefault(require("./ReviewList.jsx"));

var _SingleReview = _interopRequireDefault(require("./SingleReview.jsx"));

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
      }, /*#__PURE__*/_react["default"].createElement(_SingleReview["default"], {
        reviews: this.state.reviews
      })));
    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwicmV2aWV3cyIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIlByb21pc2UiLCJhbGwiLCJnZXRSZXZpZXdzIiwidGhlbiIsInZhbHVlcyIsInNldFN0YXRlIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLE87Ozs7O0FBQ0wsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsU0FBUyxFQUFFO0FBRkEsS0FBYjtBQUZrQjtBQU1oQjs7OztXQUVELG9CQUFXQyxTQUFYLEVBQXNCO0FBQ3ZCLGFBQU9DLGtCQUFNQyxHQUFOLENBQVUsNERBQVYsRUFBd0U7QUFDN0VDLFFBQUFBLE9BQU8sRUFBRTtBQUNWLDJCQUFpQkM7QUFEUCxTQURvRTtBQUk3RUMsUUFBQUEsTUFBTSxFQUFFO0FBQ1RDLFVBQUFBLFVBQVUsRUFBRU47QUFESDtBQUpxRSxPQUF4RSxDQUFQO0FBUUU7OztXQUlELDZCQUFvQjtBQUFBOztBQUNyQk8sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDVixLQUFLQyxVQUFMLENBQWdCLEtBQUtiLEtBQUwsQ0FBV0ksU0FBM0IsQ0FEVSxDQUFaLEVBR0NVLElBSEQsQ0FHTSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNmZCxVQUFBQSxPQUFPLEVBQUVhLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFESjtBQUVmZCxVQUFBQSxTQUFTLEVBQUU7QUFGSSxTQUFkO0FBSUQsT0FSRDtBQVNFOzs7V0FFRCxrQkFBUztBQUNWLFVBQUcsS0FBS0YsS0FBTCxDQUFXRSxTQUFkLEVBQXlCO0FBQ3hCLDRCQUFPLHVEQUFQO0FBQ0E7O0FBQ0QsMEJBQ0MsK0VBQ0M7QUFBSyxRQUFBLEVBQUUsRUFBQztBQUFSLHNCQUNDLGdDQUFDLHdCQUFEO0FBQWMsUUFBQSxPQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztBQUFsQyxRQURELENBREQsQ0FERDtBQVFFOzs7O0VBOUNrQmdCLGtCQUFNQyxTOztlQWlEYnBCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IEFkZFJldmlldyBmcm9tICcuL0FkZFJldmlldy5qc3gnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9SZXZpZXdMaXN0LmpzeCc7XG5pbXBvcnQgU2luZ2xlUmV2aWV3IGZyb20gJy4vU2luZ2xlUmV2aWV3LmpzeCc7XG5cblxuY2xhc3MgUmF0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0ICByZXZpZXdzOiB7fSxcblx0XHQgIGlzTG9hZGluZzogdHJ1ZVxuXHRcdH1cblx0ICB9XG5cdFxuXHQgIGdldFJldmlld3MocHJvZHVjdElkKSB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcmV2aWV3cycsIHtcblx0XHQgIGhlYWRlcnM6IHtcblx0XHRcdCdBdXRob3JpemF0aW9uJzogdG9rZW5cblx0XHQgIH0sXG5cdFx0ICBwYXJhbXM6IHtcblx0XHRcdHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuXHRcdCAgfVxuXHRcdH0pO1xuXHQgIH1cblx0XG5cdCBcblx0XG5cdCAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0UHJvbWlzZS5hbGwoW1xuXHRcdCAgdGhpcy5nZXRSZXZpZXdzKHRoaXMucHJvcHMucHJvZHVjdElkKSxcblx0XHRdKVxuXHRcdC50aGVuKCh2YWx1ZXMpID0+IHtcblx0XHQgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmV2aWV3czogdmFsdWVzWzBdLmRhdGEsXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlXG5cdFx0ICB9KTtcblx0XHR9KVxuXHQgIH1cblx0XG5cdCAgcmVuZGVyKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgaWQ9XCJSYXRpbmdzQW5kUmV2aWV3c1wiPlxuXHRcdFx0XHRcdDxTaW5nbGVSZXZpZXcgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfS8+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdCAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdzOyJdfQ==