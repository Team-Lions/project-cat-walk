"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddToCart = _interopRequireDefault(require("./AddToCart.jsx"));

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

//props are:
//style = currently selected style object. To passed into Add to Cart.
//productStyles = all available styles for current product. To be passed into StyleSelector.
var Overview = /*#__PURE__*/function (_React$Component) {
  _inherits(Overview, _React$Component);

  var _super = _createSuper(Overview);

  function Overview(props) {
    var _this;

    _classCallCheck(this, Overview);

    _this = _super.call(this, props);
    _this.state = {
      productStyles: [],
      selectedStyle: {},
      productInfo: {}
    };
    return _this;
  }

  _createClass(Overview, [{
    key: "changeStyle",
    value: function changeStyle(e) {//event handler function to be passed down to style selector.
      //when a new selection is made this will run and update the state as needed
    }
  }, {
    key: "getStyles",
    value: function getStyles(productId) {
      //request to get all the styles available on single/specified product
      //returns a promise
      return axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productId, "/styles"), {
        headers: {
          'Authorization': token
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
      return axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productId), {
        headers: {
          'Authorization': token
        },
        params: {
          product_id: productId
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_AddToCart["default"], {
        skus: this.state.selectedStyle.skus
      });
    }
  }]);

  return Overview;
}(_react["default"].Component);

var _default = Overview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RTdHlsZXMiLCJzZWxlY3RlZFN0eWxlIiwicHJvZHVjdEluZm8iLCJlIiwicHJvZHVjdElkIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidG9rZW4iLCJwYXJhbXMiLCJwcm9kdWN0X2lkIiwic2t1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ01BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsYUFBYSxFQUFFLEVBREo7QUFFWEMsTUFBQUEsYUFBYSxFQUFFLEVBRko7QUFHWEMsTUFBQUEsV0FBVyxFQUFFO0FBSEYsS0FBYjtBQUZpQjtBQU9sQjs7OztXQUVELHFCQUFZQyxDQUFaLEVBQWUsQ0FDYjtBQUNBO0FBQ0Q7OztXQUVELG1CQUFVQyxTQUFWLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQSxhQUFPQyxLQUFLLENBQUNDLEdBQU4sdUVBQXlFRixTQUF6RSxjQUE2RjtBQUNsR0csUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlGO0FBSWxHQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSjBGLE9BQTdGLENBQVA7QUFRRDs7O1dBRUQsd0JBQWVBLFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBLGFBQU9DLEtBQUssQ0FBQ0MsR0FBTix1RUFBeUVGLFNBQXpFLEdBQXFGO0FBQzFGRyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFYsU0FEaUY7QUFJMUZDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxVQUFVLEVBQUVOO0FBRE47QUFKa0YsT0FBckYsQ0FBUDtBQVFEOzs7V0FFRCw2QkFBb0IsQ0FFbkI7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMscUJBQUQ7QUFBVyxRQUFBLElBQUksRUFBRSxLQUFLTCxLQUFMLENBQVdFLGFBQVgsQ0FBeUJVO0FBQTFDLFFBREY7QUFHRDs7OztFQWpEb0JDLGtCQUFNQyxTOztlQW9EZGhCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydC5qc3gnO1xuXG4vL3Byb3BzIGFyZTpcbi8vc3R5bGUgPSBjdXJyZW50bHkgc2VsZWN0ZWQgc3R5bGUgb2JqZWN0LiBUbyBwYXNzZWQgaW50byBBZGQgdG8gQ2FydC5cbi8vcHJvZHVjdFN0eWxlcyA9IGFsbCBhdmFpbGFibGUgc3R5bGVzIGZvciBjdXJyZW50IHByb2R1Y3QuIFRvIGJlIHBhc3NlZCBpbnRvIFN0eWxlU2VsZWN0b3IuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0U3R5bGVzOiBbXSxcbiAgICAgIHNlbGVjdGVkU3R5bGU6IHt9LFxuICAgICAgcHJvZHVjdEluZm86IHt9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3R5bGUoZSkge1xuICAgIC8vZXZlbnQgaGFuZGxlciBmdW5jdGlvbiB0byBiZSBwYXNzZWQgZG93biB0byBzdHlsZSBzZWxlY3Rvci5cbiAgICAvL3doZW4gYSBuZXcgc2VsZWN0aW9uIGlzIG1hZGUgdGhpcyB3aWxsIHJ1biBhbmQgdXBkYXRlIHRoZSBzdGF0ZSBhcyBuZWVkZWRcbiAgfVxuXG4gIGdldFN0eWxlcyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCB0aGUgc3R5bGVzIGF2YWlsYWJsZSBvbiBzaW5nbGUvc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHtwcm9kdWN0SWR9L3N0eWxlc2AsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJZCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgYWxsIHByb2R1Y3QgaW5mbyBmb3Igc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCx7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWRkVG9DYXJ0IHNrdXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5za3VzfS8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIl19