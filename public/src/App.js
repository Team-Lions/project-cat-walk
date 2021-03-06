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

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating,
        key: this.state.selectedProductId
      }), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], null), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdNZXRhRGF0YSIsInN0YXJSYXRpbmciLCJpc0xvYWRpbmciLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInByb2R1Y3RJZCIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJuZXdTdGF0ZSIsImdldFJldmlld01ldGFEYXRhIiwidGhlbiIsInJldmlld01ldGFkYXRhIiwiZGF0YSIsInJhdGluZ3MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiY2hhbmdlUHJvZHVjdCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFFLElBRFI7QUFFWEMsTUFBQUEsY0FBYyxFQUFFLEVBRkw7QUFHWEMsTUFBQUEsVUFBVSxFQUFFLENBSEQ7QUFJWEMsTUFBQUEsU0FBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7OztXQUVELDBCQUFpQjtBQUNmO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTixDQUFVLDZEQUFWLEVBQXlFO0FBQzlFQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFY7QUFEcUUsT0FBekUsQ0FBUDtBQUtELEssQ0FFRDs7OztXQUNBLDJCQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBLGFBQU9KLGtCQUFNQyxHQUFOLG9FQUE2RTtBQUNsRkMsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlFO0FBSWxGRSxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFRjtBQUROO0FBSjBFLE9BQTdFLENBQVA7QUFRRCxLLENBRUQ7Ozs7V0FDQSx1QkFBY0EsU0FBZCxFQUF5QjtBQUFBOztBQUN2QixVQUFJRyxRQUFRLEdBQUcsRUFBZjtBQUNBQSxNQUFBQSxRQUFRLENBQUNYLGlCQUFULEdBQTZCUSxTQUE3QjtBQUNBLFdBQUtJLGlCQUFMLENBQXVCSixTQUF2QixFQUNDSyxJQURELENBQ00sVUFBQ0MsY0FBRCxFQUFvQjtBQUN4QkgsUUFBQUEsUUFBUSxDQUFDVixjQUFULEdBQTBCYSxjQUFjLENBQUNDLElBQXpDO0FBQ0FKLFFBQUFBLFFBQVEsQ0FBQ1QsVUFBVCxHQUFzQixxQ0FBb0JTLFFBQVEsQ0FBQ1YsY0FBVCxDQUF3QmUsT0FBNUMsQ0FBdEI7QUFDQUwsUUFBQUEsUUFBUSxDQUFDUixTQUFULEdBQXFCLEtBQXJCO0FBQ0FjLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJQLFFBQTFCOztBQUNBLFFBQUEsTUFBSSxDQUFDUSxRQUFMLENBQWNSLFFBQWQ7QUFDRCxPQVBELFdBUU8sVUFBQ1MsR0FBRCxFQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRSxHQUF6QztBQUNELE9BVkQ7QUFXRDs7O1dBR0QsNkJBQW9CO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxHQUNDUixJQURELENBQ00sVUFBQ1MsUUFBRCxFQUFjO0FBQ2xCLFFBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CRCxRQUFRLENBQUNQLElBQVQsQ0FBYyxDQUFkLEVBQWlCUyxFQUFwQztBQUNELE9BSEQsV0FJTyxVQUFDSixHQUFELEVBQVM7QUFDZEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENFLEdBQTlDO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBUztBQUNQLFVBQUcsS0FBS3JCLEtBQUwsQ0FBV0ksU0FBZCxFQUF5QjtBQUN2Qiw0QkFBTyx1REFBUDtBQUNEOztBQUNELDBCQUNFLDBEQUNFLGdDQUFDLG9CQUFEO0FBQVUsUUFBQSxTQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxpQkFBaEM7QUFBbUQsUUFBQSxVQUFVLEVBQUUsS0FBS0QsS0FBTCxDQUFXRyxVQUExRTtBQUFzRixRQUFBLEdBQUcsRUFBRSxLQUFLSCxLQUFMLENBQVdDO0FBQXRHLFFBREYsZUFFRSxnQ0FBQyx3QkFBRCxPQUZGLGVBR0UsZ0NBQUMsbUJBQUQsT0FIRixlQUlFLGdDQUFDLG1CQUFELE9BSkYsQ0FERjtBQVFEOzs7O0VBNUVleUIsa0JBQU1DLFM7O0FBNkV2QjtlQUVjN0IsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2FsY3VsYXRlU3RhclJldmlldyBmcm9tICcuL2NhbGN1bGF0ZVN0YXJSZXZpZXcuanMnO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcvT3ZlcnZpZXcuanN4JztcbmltcG9ydCBSYXRpbmdzIGZyb20gJy4vUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4J1xuaW1wb3J0IFJlbGF0ZWRJdGVtcyBmcm9tICcuL1JlbGF0ZWRJdGVtcyZDb21wYXJpc29ucy9SZWxhdGVkSXRlbXMuanN4JztcbmltcG9ydCBZb3VyRml0IGZyb20gJy4vUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1lvdXJGaXQuanN4J1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vQXBwLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFByb2R1Y3RJZDogbnVsbCxcbiAgICAgIHJldmlld01ldGFEYXRhOiB7fSxcbiAgICAgIHN0YXJSYXRpbmc6IDAsXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRQcm9kdWN0TGlzdCgpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0c1xuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vUmF0aW5ncyBhbmQgUmV2aWV3cyByZWxhdGVkIEdldCByZXF1ZXN0c1xuICBnZXRSZXZpZXdNZXRhRGF0YShwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IHJldmlldyBtZXRhZGF0YSBvbiBhIHNwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Jldmlld3MvbWV0YWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vd2lsbCBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSB0byBiZSBhbiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciB3aGVuIGEgbmV3IHByb2R1Y3QgaXMgc2VsZWN0ZWRcbiAgY2hhbmdlUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICBuZXdTdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICB0aGlzLmdldFJldmlld01ldGFEYXRhKHByb2R1Y3RJZClcbiAgICAudGhlbigocmV2aWV3TWV0YWRhdGEpID0+IHtcbiAgICAgIG5ld1N0YXRlLnJldmlld01ldGFEYXRhID0gcmV2aWV3TWV0YWRhdGEuZGF0YTtcbiAgICAgIG5ld1N0YXRlLnN0YXJSYXRpbmcgPSBjYWxjdWxhdGVTdGFyUmV2aWV3KG5ld1N0YXRlLnJldmlld01ldGFEYXRhLnJhdGluZ3MpO1xuICAgICAgbmV3U3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZygnbmV3c3RhdGU6ICcsIG5ld1N0YXRlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBnZXQgb3ZlcnZpZXcgZGF0YTogJywgZXJyKTtcbiAgICB9KVxuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2Jhc2NpYWxseSB0aGUgc2FtZSBhcyBjaGFuZ2luZyB0aGUgc2VsZWN0ZWQgcHJvZHVjdCwgYnV0IGhhcyB0byByZXRyaWV2ZSBwcm9kdWN0IGxpc3QgYXQgdGhlIG91dHNldFxuICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKVxuICAgIC50aGVuKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9kdWN0KHByb2R1Y3RzLmRhdGFbMF0uaWQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZXRyaXZpbmcgcHJvZHVjdCBMaXN0OiAnLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8T3ZlcnZpZXcgcHJvZHVjdElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfSBzdGFyUmF0aW5nPXt0aGlzLnN0YXRlLnN0YXJSYXRpbmd9IGtleT17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZH0vPlxuICAgICAgICA8UmVsYXRlZEl0ZW1zIC8+XG4gICAgICAgIDxZb3VyRml0IC8+XG4gICAgICAgIDxSYXRpbmdzIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19