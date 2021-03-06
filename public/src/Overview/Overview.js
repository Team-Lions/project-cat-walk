"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddToCart = _interopRequireDefault(require("./AddToCart.jsx"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _sizeFirstSkus = _interopRequireDefault(require("../sizeFirstSkus.js"));

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

var Overview = /*#__PURE__*/function (_React$Component) {
  _inherits(Overview, _React$Component);

  var _super = _createSuper(Overview);

  function Overview(props) {
    var _this;

    _classCallCheck(this, Overview);

    _this = _super.call(this, props);
    _this.state = {
      productInfo: {},
      styles: [],
      selectedStyle: {}
    };
    return _this;
  }

  _createClass(Overview, [{
    key: "getStyles",
    value: function getStyles(productId) {
      //request to get all the styles available on single/specified product
      //returns a promise
      return _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productId, "/styles"), {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: productId
        }
      });
    }
  }, {
    key: "getProductInfo",
    value: function getProductInfo(productId) {
      //request to get all product info for specified product
      //returns a promise
      return _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productId), {
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

      Promise.all([this.getProductInfo(this.props.productId), this.getStyles(this.props.productId)]).then(function (values) {
        _this2.setState({
          productInfo: values[0].data,
          styles: values[1].data.results,
          selectedStyle: values[1].data.results[0]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sizeFirstSkus = (0, _sizeFirstSkus["default"])(this.state.selectedStyle.skus);
      var sizes = Object.keys(sizeFirstSkus);
      return /*#__PURE__*/_react["default"].createElement(_AddToCart["default"], {
        sizeFirstSkus: sizeFirstSkus,
        sizes: sizes
      });
    }
  }]);

  return Overview;
}(_react["default"].Component);

var _default = Overview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RJbmZvIiwic3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIlByb21pc2UiLCJhbGwiLCJnZXRQcm9kdWN0SW5mbyIsImdldFN0eWxlcyIsInRoZW4iLCJ2YWx1ZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJyZXN1bHRzIiwic2l6ZUZpcnN0U2t1cyIsInNrdXMiLCJzaXplcyIsIk9iamVjdCIsImtleXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRSxFQURGO0FBRVhDLE1BQUFBLE1BQU0sRUFBRSxFQUZHO0FBR1hDLE1BQUFBLGFBQWEsRUFBRTtBQUhKLEtBQWI7QUFGaUI7QUFPbEI7Ozs7V0FFRCxtQkFBVUMsU0FBVixFQUFxQjtBQUNuQjtBQUNBO0FBQ0EsYUFBT0Msa0JBQU1DLEdBQU4sdUVBQXlFRixTQUF6RSxjQUE2RjtBQUNsR0csUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlGO0FBSWxHQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSjBGLE9BQTdGLENBQVA7QUFRRDs7O1dBRUQsd0JBQWVBLFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBLGFBQU9DLGtCQUFNQyxHQUFOLHVFQUF5RUYsU0FBekUsR0FBcUY7QUFDMUZHLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQURpRjtBQUkxRkMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRU47QUFETjtBQUprRixPQUFyRixDQUFQO0FBUUQ7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQk8sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDVixLQUFLQyxjQUFMLENBQW9CLEtBQUtkLEtBQUwsQ0FBV0ssU0FBL0IsQ0FEVSxFQUVWLEtBQUtVLFNBQUwsQ0FBZSxLQUFLZixLQUFMLENBQVdLLFNBQTFCLENBRlUsQ0FBWixFQUlDVyxJQUpELENBSU0sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWmhCLFVBQUFBLFdBQVcsRUFBRWUsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxJQURYO0FBRVpoQixVQUFBQSxNQUFNLEVBQUVjLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFBVixDQUFlQyxPQUZYO0FBR1poQixVQUFBQSxhQUFhLEVBQUVhLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFBVixDQUFlQyxPQUFmLENBQXVCLENBQXZCO0FBSEgsU0FBZDtBQUtELE9BVkQ7QUFXRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJQyxhQUFhLEdBQUcsK0JBQW1CLEtBQUtwQixLQUFMLENBQVdHLGFBQVgsQ0FBeUJrQixJQUE1QyxDQUFwQjtBQUNBLFVBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLGFBQVosQ0FBWjtBQUNBLDBCQUNFLGdDQUFDLHFCQUFEO0FBQVcsUUFBQSxhQUFhLEVBQUVBLGFBQTFCO0FBQXlDLFFBQUEsS0FBSyxFQUFFRTtBQUFoRCxRQURGO0FBR0Q7Ozs7RUF4RG9CRyxrQkFBTUMsUzs7ZUEyRGQ1QixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQuanN4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcbmltcG9ydCBwYXJzZVNpemVGaXJzdFNrdXMgZnJvbSAnLi4vc2l6ZUZpcnN0U2t1cy5qcyc7XG5cbmNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2R1Y3RJbmZvOiB7fSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBzZWxlY3RlZFN0eWxlOiB7fVxuICAgIH1cbiAgfVxuXG4gIGdldFN0eWxlcyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCB0aGUgc3R5bGVzIGF2YWlsYWJsZSBvbiBzaW5nbGUvc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHtwcm9kdWN0SWR9L3N0eWxlc2AsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJZCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgYWxsIHByb2R1Y3QgaW5mbyBmb3Igc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCx7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmdldFByb2R1Y3RJbmZvKHRoaXMucHJvcHMucHJvZHVjdElkKSxcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKHRoaXMucHJvcHMucHJvZHVjdElkKVxuICAgIF0pXG4gICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RJbmZvOiB2YWx1ZXNbMF0uZGF0YSxcbiAgICAgICAgc3R5bGVzOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzLFxuICAgICAgICBzZWxlY3RlZFN0eWxlOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzWzBdXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzaXplRmlyc3RTa3VzID0gcGFyc2VTaXplRmlyc3RTa3VzKHRoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5za3VzKTtcbiAgICB2YXIgc2l6ZXMgPSBPYmplY3Qua2V5cyhzaXplRmlyc3RTa3VzKTtcbiAgICByZXR1cm4oXG4gICAgICA8QWRkVG9DYXJ0IHNpemVGaXJzdFNrdXM9e3NpemVGaXJzdFNrdXN9IHNpemVzPXtzaXplc30gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iXX0=