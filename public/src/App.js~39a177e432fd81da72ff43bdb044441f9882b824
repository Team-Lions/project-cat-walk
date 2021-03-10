"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _Header = _interopRequireDefault(require("./Header.jsx"));

var _Footer = _interopRequireDefault(require("./Footer.jsx"));

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
        _this3.changeProduct(products.data[3].id);
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
      }, "RelatedItemsAndFit", /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating,
        ratings: this.state.reviewMetaData.ratings
      }), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], {
        productId: this.state.selectedProductId
      }), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], {
        productId: this.state.selectedProductId
      }), /*#__PURE__*/_react["default"].createElement(_QnA["default"], {
        productID: this.state.selectedProductId
      }), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdNZXRhRGF0YSIsInN0YXJSYXRpbmciLCJpc0xvYWRpbmciLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInByb2R1Y3RJZCIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJuZXdTdGF0ZSIsImdldFJldmlld01ldGFEYXRhIiwidGhlbiIsInJldmlld01ldGFkYXRhIiwiZGF0YSIsInJhdGluZ3MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiY2hhbmdlUHJvZHVjdCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFFLElBRFI7QUFFWEMsTUFBQUEsY0FBYyxFQUFFLEVBRkw7QUFHWEMsTUFBQUEsVUFBVSxFQUFFLENBSEQ7QUFJWEMsTUFBQUEsU0FBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7OztXQUVELDBCQUFpQjtBQUNmO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTixDQUFVLDZEQUFWLEVBQXlFO0FBQzlFQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFY7QUFEcUUsT0FBekUsQ0FBUDtBQUtELEssQ0FFRDs7OztXQUNBLDJCQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBLGFBQU9KLGtCQUFNQyxHQUFOLG9FQUE2RTtBQUNsRkMsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlFO0FBSWxGRSxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFRjtBQUROO0FBSjBFLE9BQTdFLENBQVA7QUFRRCxLLENBRUQ7Ozs7V0FDQSx1QkFBY0EsU0FBZCxFQUF5QjtBQUFBOztBQUN2QixVQUFJRyxRQUFRLEdBQUcsRUFBZjtBQUNBQSxNQUFBQSxRQUFRLENBQUNYLGlCQUFULEdBQTZCUSxTQUE3QjtBQUNBLFdBQUtJLGlCQUFMLENBQXVCSixTQUF2QixFQUNDSyxJQURELENBQ00sVUFBQ0MsY0FBRCxFQUFvQjtBQUN4QkgsUUFBQUEsUUFBUSxDQUFDVixjQUFULEdBQTBCYSxjQUFjLENBQUNDLElBQXpDO0FBQ0FKLFFBQUFBLFFBQVEsQ0FBQ1QsVUFBVCxHQUFzQixxQ0FBb0JTLFFBQVEsQ0FBQ1YsY0FBVCxDQUF3QmUsT0FBNUMsQ0FBdEI7QUFDQUwsUUFBQUEsUUFBUSxDQUFDUixTQUFULEdBQXFCLEtBQXJCO0FBQ0FjLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJQLFFBQTFCOztBQUNBLFFBQUEsTUFBSSxDQUFDUSxRQUFMLENBQWNSLFFBQWQ7QUFDRCxPQVBELFdBUU8sVUFBQ1MsR0FBRCxFQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRSxHQUF6QztBQUNELE9BVkQ7QUFXRDs7O1dBR0QsNkJBQW9CO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxHQUNDUixJQURELENBQ00sVUFBQ1MsUUFBRCxFQUFjO0FBQ2xCLFFBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CRCxRQUFRLENBQUNQLElBQVQsQ0FBYyxDQUFkLEVBQWlCUyxFQUFwQztBQUNELE9BSEQsV0FJTyxVQUFDSixHQUFELEVBQVM7QUFDZEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENFLEdBQTlDO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBUztBQUNQLFVBQUcsS0FBS3JCLEtBQUwsQ0FBV0ksU0FBZCxFQUF5QjtBQUN2Qiw0QkFBTyx1REFBUDtBQUNEOztBQUNELDBCQUNFO0FBQUssUUFBQSxHQUFHLEVBQUUsS0FBS0osS0FBTCxDQUFXQztBQUFyQiw0Q0FFRSxnQ0FBQyxrQkFBRCxPQUZGLGVBR0UsZ0NBQUMsb0JBQUQ7QUFBVSxRQUFBLFNBQVMsRUFBRSxLQUFLRCxLQUFMLENBQVdDLGlCQUFoQztBQUFtRCxRQUFBLFVBQVUsRUFBRSxLQUFLRCxLQUFMLENBQVdHLFVBQTFFO0FBQXNGLFFBQUEsT0FBTyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsY0FBWCxDQUEwQmU7QUFBekgsUUFIRixlQUlFLGdDQUFDLHdCQUFEO0FBQWMsUUFBQSxTQUFTLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0M7QUFBcEMsUUFKRixlQUtFLGdDQUFDLG1CQUFELE9BTEYsZUFNRSxnQ0FBQyxtQkFBRDtBQUFTLFFBQUEsU0FBUyxFQUFFLEtBQUtELEtBQUwsQ0FBV0M7QUFBL0IsUUFORixlQU9FLGdDQUFDLGVBQUQ7QUFBSyxRQUFBLFNBQVMsRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBQTNCLFFBUEYsZUFRRSxnQ0FBQyxrQkFBRCxPQVJGLENBREY7QUFZRDs7OztFQWhGZXlCLGtCQUFNQyxTOztBQWlGdkI7ZUFFYzdCLEciLCJzb3VyY2VzQ29udGVudCI6WyIvL2xpYnJhcmllc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGhlYWRlciBhbmQgZm9vdGVyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzeCc7XG4vL3dpZGdldHNcbmltcG9ydCBPdmVydmlldyBmcm9tICcuL092ZXJ2aWV3L092ZXJ2aWV3LmpzeCc7XG5pbXBvcnQgUmF0aW5ncyBmcm9tICcuL1JhdGluZ3MmUmV2aWV3cy9SYXRpbmdzLmpzeCdcbmltcG9ydCBSZWxhdGVkSXRlbXMgZnJvbSAnLi9SZWxhdGVkSXRlbXMmQ29tcGFyaXNvbnMvUmVsYXRlZEl0ZW1zLmpzeCc7XG5pbXBvcnQgUW5BIGZyb20gJy4vUW5BL1FuQS5qc3gnXG5pbXBvcnQgWW91ckZpdCBmcm9tICcuL1JlbGF0ZWRJdGVtcyZDb21wYXJpc29ucy9Zb3VyRml0LmpzeCdcbi8vTWlzY1xuaW1wb3J0IGNhbGN1bGF0ZVN0YXJSZXZpZXcgZnJvbSAnLi9jYWxjdWxhdGVTdGFyUmV2aWV3LmpzJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IGNzcyBmcm9tICcuL0FwcC5jc3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRQcm9kdWN0SWQ6IG51bGwsXG4gICAgICByZXZpZXdNZXRhRGF0YToge30sXG4gICAgICBzdGFyUmF0aW5nOiAwLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvZHVjdExpc3QoKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgcHJvZHVjdHNcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMnLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvL1JhdGluZ3MgYW5kIFJldmlld3MgcmVsYXRlZCBHZXQgcmVxdWVzdHNcbiAgZ2V0UmV2aWV3TWV0YURhdGEocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCByZXZpZXcgbWV0YWRhdGEgb24gYSBzcGVjaWZpZWQgcHJvZHVjdFxuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9yZXZpZXdzL21ldGFgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL3dpbGwgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgdG8gYmUgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3Igd2hlbiBhIG5ldyBwcm9kdWN0IGlzIHNlbGVjdGVkXG4gIGNoYW5nZVByb2R1Y3QocHJvZHVjdElkKSB7XG4gICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgbmV3U3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgdGhpcy5nZXRSZXZpZXdNZXRhRGF0YShwcm9kdWN0SWQpXG4gICAgLnRoZW4oKHJldmlld01ldGFkYXRhKSA9PiB7XG4gICAgICBuZXdTdGF0ZS5yZXZpZXdNZXRhRGF0YSA9IHJldmlld01ldGFkYXRhLmRhdGE7XG4gICAgICBuZXdTdGF0ZS5zdGFyUmF0aW5nID0gY2FsY3VsYXRlU3RhclJldmlldyhuZXdTdGF0ZS5yZXZpZXdNZXRhRGF0YS5yYXRpbmdzKTtcbiAgICAgIG5ld1N0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coJ25ld3N0YXRlOiAnLCBuZXdTdGF0ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgZ2V0IG92ZXJ2aWV3IGRhdGE6ICcsIGVycik7XG4gICAgfSlcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9iYXNjaWFsbHkgdGhlIHNhbWUgYXMgY2hhbmdpbmcgdGhlIHNlbGVjdGVkIHByb2R1Y3QsIGJ1dCBoYXMgdG8gcmV0cmlldmUgcHJvZHVjdCBsaXN0IGF0IHRoZSBvdXRzZXRcbiAgICB0aGlzLmdldFByb2R1Y3RMaXN0KClcbiAgICAudGhlbigocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvZHVjdChwcm9kdWN0cy5kYXRhWzNdLmlkKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmV0cml2aW5nIHByb2R1Y3QgTGlzdDogJywgZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZih0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWR9PlxuICAgICAgICBSZWxhdGVkSXRlbXNBbmRGaXRcbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8T3ZlcnZpZXcgcHJvZHVjdElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfSBzdGFyUmF0aW5nPXt0aGlzLnN0YXRlLnN0YXJSYXRpbmd9IHJhdGluZ3M9e3RoaXMuc3RhdGUucmV2aWV3TWV0YURhdGEucmF0aW5nc30gLz5cbiAgICAgICAgPFJlbGF0ZWRJdGVtcyBwcm9kdWN0SWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWR9Lz5cbiAgICAgICAgPFlvdXJGaXQgLz5cbiAgICAgICAgPFJhdGluZ3MgcHJvZHVjdElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfS8+XG4gICAgICAgIDxRbkEgcHJvZHVjdElEPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfS8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==