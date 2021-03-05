"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _calculateStarReview = _interopRequireDefault(require("./calculateStarReview.js"));

var _Overview = _interopRequireDefault(require("./Overview/Overview.jsx"));

var _Ratings = _interopRequireDefault(require("./Ratings&Reviews/Ratings.jsx"));

var _RelatedItems = _interopRequireDefault(require("./RelatedItems&Comparisons/RelatedItems.jsx"));

var _YourFit = _interopRequireDefault(require("./RelatedItems&Comparisons/YourFit.jsx"));

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
      reviewData: {},
      starRating: 0
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
    }
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
      this.getReviewMetaData(newState.selectedProductId).then(function (reviewData) {
        newState.reviewData = reviewData.data;
        newState.starRating = (0, _calculateStarReview["default"])(newState.reviewData.ratings);
        console.log('all App data retrieved');

        _this2.setState(newState);
      })["catch"](function (err) {
        console.log('Error retriving data: ', err);
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
      console.log('state: ', this.state);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating
      }), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], null), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdEYXRhIiwic3RhclJhdGluZyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicHJvZHVjdElkIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIm5ld1N0YXRlIiwiZ2V0UmV2aWV3TWV0YURhdGEiLCJ0aGVuIiwiZGF0YSIsInJhdGluZ3MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiY2hhbmdlUHJvZHVjdCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFFLElBRFI7QUFFWEMsTUFBQUEsVUFBVSxFQUFFLEVBRkQ7QUFHWEMsTUFBQUEsVUFBVSxFQUFFO0FBSEQsS0FBYjtBQUZpQjtBQU9sQjs7OztXQUVELDBCQUFpQjtBQUNmO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTixDQUFVLDZEQUFWLEVBQXlFO0FBQzlFQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFY7QUFEcUUsT0FBekUsQ0FBUDtBQUtEOzs7V0FFRCwyQkFBa0JDLFNBQWxCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQSxhQUFPSixrQkFBTUMsR0FBTixvRUFBNkU7QUFDbEZDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQUR5RTtBQUlsRkUsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRUY7QUFETjtBQUowRSxPQUE3RSxDQUFQO0FBUUQsSyxDQUVEOzs7O1dBQ0EsdUJBQWNBLFNBQWQsRUFBeUI7QUFBQTs7QUFDdkIsVUFBSUcsUUFBUSxHQUFHLEVBQWY7QUFDQUEsTUFBQUEsUUFBUSxDQUFDVixpQkFBVCxHQUE2Qk8sU0FBN0I7QUFDQSxXQUFLSSxpQkFBTCxDQUF1QkQsUUFBUSxDQUFDVixpQkFBaEMsRUFDQ1ksSUFERCxDQUNNLFVBQUNYLFVBQUQsRUFBZ0I7QUFDcEJTLFFBQUFBLFFBQVEsQ0FBQ1QsVUFBVCxHQUFzQkEsVUFBVSxDQUFDWSxJQUFqQztBQUNBSCxRQUFBQSxRQUFRLENBQUNSLFVBQVQsR0FBc0IscUNBQW9CUSxRQUFRLENBQUNULFVBQVQsQ0FBb0JhLE9BQXhDLENBQXRCO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaOztBQUNBLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWNQLFFBQWQ7QUFDRCxPQU5ELFdBT08sVUFBQ1EsR0FBRCxFQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDRSxHQUF0QztBQUNELE9BVEQ7QUFVRDs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxHQUNDUCxJQURELENBQ00sVUFBQ1EsUUFBRCxFQUFjO0FBQ2xCLFFBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CRCxRQUFRLENBQUNQLElBQVQsQ0FBYyxDQUFkLEVBQWlCUyxFQUFwQztBQUNELE9BSEQsV0FJTyxVQUFDSixHQUFELEVBQVM7QUFDZEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENFLEdBQTlDO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBUztBQUNQSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQUtqQixLQUE1QjtBQUNBLDBCQUNFLDBEQUNFLGdDQUFDLG9CQUFEO0FBQVUsUUFBQSxTQUFTLEVBQUUsS0FBS0EsS0FBTCxDQUFXQyxpQkFBaEM7QUFBbUQsUUFBQSxVQUFVLEVBQUUsS0FBS0QsS0FBTCxDQUFXRztBQUExRSxRQURGLGVBRUUsZ0NBQUMsd0JBQUQsT0FGRixlQUdFLGdDQUFDLG1CQUFELE9BSEYsZUFJRSxnQ0FBQyxtQkFBRCxPQUpGLENBREY7QUFRRDs7OztFQXRFZXFCLGtCQUFNQyxTOztBQXVFdkI7ZUFFYzNCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNhbGN1bGF0ZVN0YXJSZXZpZXcgZnJvbSAnLi9jYWxjdWxhdGVTdGFyUmV2aWV3LmpzJztcbmltcG9ydCBPdmVydmlldyBmcm9tICcuL092ZXJ2aWV3L092ZXJ2aWV3LmpzeCc7XG5pbXBvcnQgUmF0aW5ncyBmcm9tICcuL1JhdGluZ3MmUmV2aWV3cy9SYXRpbmdzLmpzeCdcbmltcG9ydCBSZWxhdGVkSXRlbXMgZnJvbSAnLi9SZWxhdGVkSXRlbXMmQ29tcGFyaXNvbnMvUmVsYXRlZEl0ZW1zLmpzeCc7XG5pbXBvcnQgWW91ckZpdCBmcm9tICcuL1JlbGF0ZWRJdGVtcyZDb21wYXJpc29ucy9Zb3VyRml0LmpzeCdcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IGNzcyBmcm9tICcuL0FwcC5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRQcm9kdWN0SWQ6IG51bGwsXG4gICAgICByZXZpZXdEYXRhOiB7fSxcbiAgICAgIHN0YXJSYXRpbmc6IDBcbiAgICB9XG4gIH1cblxuICBnZXRQcm9kdWN0TGlzdCgpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0c1xuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJldmlld01ldGFEYXRhKHByb2R1Y3RJZCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgcmV2aWV3IG1ldGFkYXRhIG9uIGEgc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcmV2aWV3cy9tZXRhYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy93aWxsIHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIHRvIGJlIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIHdoZW4gYSBuZXcgcHJvZHVjdCBpcyBzZWxlY3RlZFxuICBjaGFuZ2VQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgIG5ld1N0YXRlLnNlbGVjdGVkUHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgIHRoaXMuZ2V0UmV2aWV3TWV0YURhdGEobmV3U3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWQpXG4gICAgLnRoZW4oKHJldmlld0RhdGEpID0+IHtcbiAgICAgIG5ld1N0YXRlLnJldmlld0RhdGEgPSByZXZpZXdEYXRhLmRhdGE7XG4gICAgICBuZXdTdGF0ZS5zdGFyUmF0aW5nID0gY2FsY3VsYXRlU3RhclJldmlldyhuZXdTdGF0ZS5yZXZpZXdEYXRhLnJhdGluZ3MpO1xuICAgICAgY29uc29sZS5sb2coJ2FsbCBBcHAgZGF0YSByZXRyaWV2ZWQnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZXRyaXZpbmcgZGF0YTogJywgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vYmFzY2lhbGx5IHRoZSBzYW1lIGFzIGNoYW5naW5nIHRoZSBzZWxlY3RlZCBwcm9kdWN0LCBidXQgaGFzIHRvIHJldHJpZXZlIHByb2R1Y3QgbGlzdCBhdCB0aGUgb3V0c2V0XG4gICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpXG4gICAgLnRoZW4oKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb2R1Y3QocHJvZHVjdHMuZGF0YVswXS5pZCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJldHJpdmluZyBwcm9kdWN0IExpc3Q6ICcsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlOiAnLCB0aGlzLnN0YXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE92ZXJ2aWV3IHByb2R1Y3RJZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZH0gc3RhclJhdGluZz17dGhpcy5zdGF0ZS5zdGFyUmF0aW5nfS8+XG4gICAgICAgIDxSZWxhdGVkSXRlbXMgLz5cbiAgICAgICAgPFlvdXJGaXQgLz5cbiAgICAgICAgPFJhdGluZ3MgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=