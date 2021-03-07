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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Overview["default"], null), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], null), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], null), /*#__PURE__*/_react["default"].createElement(QnA, null));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdEYXRhIiwic3RhclJhdGluZyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicHJvZHVjdElkIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIm5ld1N0YXRlIiwiZ2V0UmV2aWV3TWV0YURhdGEiLCJ0aGVuIiwiZGF0YSIsInJhdGluZ3MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiY2hhbmdlUHJvZHVjdCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFFLElBRFI7QUFFWEMsTUFBQUEsVUFBVSxFQUFFLEVBRkQ7QUFHWEMsTUFBQUEsVUFBVSxFQUFFO0FBSEQsS0FBYjtBQUZpQjtBQU9sQjs7OztXQUVELDBCQUFpQjtBQUNmO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTixDQUFVLDZEQUFWLEVBQXlFO0FBQzlFQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFY7QUFEcUUsT0FBekUsQ0FBUDtBQUtEOzs7V0FFRCwyQkFBa0JDLFNBQWxCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQSxhQUFPSixrQkFBTUMsR0FBTixvRUFBNkU7QUFDbEZDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQUR5RTtBQUlsRkUsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRUY7QUFETjtBQUowRSxPQUE3RSxDQUFQO0FBUUQsSyxDQUVEOzs7O1dBQ0EsdUJBQWNBLFNBQWQsRUFBeUI7QUFBQTs7QUFDdkIsVUFBSUcsUUFBUSxHQUFHLEVBQWY7QUFDQUEsTUFBQUEsUUFBUSxDQUFDVixpQkFBVCxHQUE2Qk8sU0FBN0I7QUFDQSxXQUFLSSxpQkFBTCxDQUF1QkQsUUFBUSxDQUFDVixpQkFBaEMsRUFDQ1ksSUFERCxDQUNNLFVBQUNYLFVBQUQsRUFBZ0I7QUFDcEJTLFFBQUFBLFFBQVEsQ0FBQ1QsVUFBVCxHQUFzQkEsVUFBVSxDQUFDWSxJQUFqQztBQUNBSCxRQUFBQSxRQUFRLENBQUNSLFVBQVQsR0FBc0IscUNBQW9CUSxRQUFRLENBQUNULFVBQVQsQ0FBb0JhLE9BQXhDLENBQXRCO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaOztBQUNBLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWNQLFFBQWQ7QUFDRCxPQU5ELFdBT08sVUFBQ1EsR0FBRCxFQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDRSxHQUF0QztBQUNELE9BVEQ7QUFVRDs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxHQUNDUCxJQURELENBQ00sVUFBQ1EsUUFBRCxFQUFjO0FBQ2xCLFFBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CRCxRQUFRLENBQUNQLElBQVQsQ0FBYyxDQUFkLEVBQWlCUyxFQUFwQztBQUNELE9BSEQsV0FJTyxVQUFDSixHQUFELEVBQVM7QUFDZEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENFLEdBQTlDO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBUztBQUNQSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQUtqQixLQUE1QjtBQUNBLDBCQUNFLDBEQUNFLGdDQUFDLG9CQUFELE9BREYsZUFFRSxnQ0FBQyx3QkFBRCxPQUZGLGVBR0UsZ0NBQUMsbUJBQUQsT0FIRixlQUlFLGdDQUFDLG1CQUFELE9BSkYsZUFLRSxnQ0FBQyxHQUFELE9BTEYsQ0FERjtBQVNEOzs7O0VBdkVld0Isa0JBQU1DLFM7O0FBd0V2QjtlQUVjM0IsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2FsY3VsYXRlU3RhclJldmlldyBmcm9tICcuL2NhbGN1bGF0ZVN0YXJSZXZpZXcuanMnO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcvT3ZlcnZpZXcuanN4JztcbmltcG9ydCBSYXRpbmdzIGZyb20gJy4vUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4J1xuaW1wb3J0IFJlbGF0ZWRJdGVtcyBmcm9tICcuL1JlbGF0ZWRJdGVtcyZDb21wYXJpc29ucy9SZWxhdGVkSXRlbXMuanN4JztcbmltcG9ydCBZb3VyRml0IGZyb20gJy4vUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1lvdXJGaXQuanN4J1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vQXBwLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFByb2R1Y3RJZDogbnVsbCxcbiAgICAgIHJldmlld0RhdGE6IHt9LFxuICAgICAgc3RhclJhdGluZzogMFxuICAgIH1cbiAgfVxuXG4gIGdldFByb2R1Y3RMaXN0KCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgYWxsIHByb2R1Y3RzXG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmV2aWV3TWV0YURhdGEocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCByZXZpZXcgbWV0YWRhdGEgb24gYSBzcGVjaWZpZWQgcHJvZHVjdFxuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9yZXZpZXdzL21ldGFgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL3dpbGwgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgdG8gYmUgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3Igd2hlbiBhIG5ldyBwcm9kdWN0IGlzIHNlbGVjdGVkXG4gIGNoYW5nZVByb2R1Y3QocHJvZHVjdElkKSB7XG4gICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgbmV3U3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgdGhpcy5nZXRSZXZpZXdNZXRhRGF0YShuZXdTdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZClcbiAgICAudGhlbigocmV2aWV3RGF0YSkgPT4ge1xuICAgICAgbmV3U3RhdGUucmV2aWV3RGF0YSA9IHJldmlld0RhdGEuZGF0YTtcbiAgICAgIG5ld1N0YXRlLnN0YXJSYXRpbmcgPSBjYWxjdWxhdGVTdGFyUmV2aWV3KG5ld1N0YXRlLnJldmlld0RhdGEucmF0aW5ncyk7XG4gICAgICBjb25zb2xlLmxvZygnYWxsIEFwcCBkYXRhIHJldHJpZXZlZCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJldHJpdmluZyBkYXRhOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9iYXNjaWFsbHkgdGhlIHNhbWUgYXMgY2hhbmdpbmcgdGhlIHNlbGVjdGVkIHByb2R1Y3QsIGJ1dCBoYXMgdG8gcmV0cmlldmUgcHJvZHVjdCBsaXN0IGF0IHRoZSBvdXRzZXRcbiAgICB0aGlzLmdldFByb2R1Y3RMaXN0KClcbiAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvZHVjdChwcm9kdWN0cy5kYXRhWzBdLmlkKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmV0cml2aW5nIHByb2R1Y3QgTGlzdDogJywgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhdGU6ICcsIHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8T3ZlcnZpZXcgLz5cbiAgICAgICAgPFJlbGF0ZWRJdGVtcyAvPlxuICAgICAgICA8WW91ckZpdCAvPlxuICAgICAgICA8UmF0aW5ncyAvPlxuICAgICAgICA8UW5BIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19