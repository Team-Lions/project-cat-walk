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

var _Spinner = _interopRequireDefault(require("react-bootstrap/Spinner"));

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
    _this.changeProduct = _this.changeProduct.bind(_assertThisInitialized(_this));
    _this.handleProductChange = _this.handleProductChange.bind(_assertThisInitialized(_this));
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
        newState.isLoading = false; //console.log('newstate: ', newState);

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
    key: "handleProductChange",
    value: function handleProductChange(newProductId) {
      this.changeProduct(newProductId);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
          animation: "border",
          role: "status"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "sr-only"
        }, "Loading..."));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.state.selectedProductId
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating,
        ratings: this.state.reviewMetaData.ratings
      }), "RelatedItemsAndFit", /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], {
        productId: this.state.selectedProductId,
        handleProductChange: this.handleProductChange
      }), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], {
        productId: this.state.selectedProductId,
        metaData: this.state.reviewMetaData,
        starRating: this.state.starRating
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdNZXRhRGF0YSIsInN0YXJSYXRpbmciLCJpc0xvYWRpbmciLCJjaGFuZ2VQcm9kdWN0IiwiYmluZCIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInByb2R1Y3RJZCIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJuZXdTdGF0ZSIsImdldFJldmlld01ldGFEYXRhIiwidGhlbiIsInJldmlld01ldGFkYXRhIiwiZGF0YSIsInJhdGluZ3MiLCJzZXRTdGF0ZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiaWQiLCJuZXdQcm9kdWN0SWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsaUJBQWlCLEVBQUUsSUFEUjtBQUVYQyxNQUFBQSxjQUFjLEVBQUUsRUFGTDtBQUdYQyxNQUFBQSxVQUFVLEVBQUUsQ0FIRDtBQUlYQyxNQUFBQSxTQUFTLEVBQUU7QUFKQSxLQUFiO0FBTUEsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLQyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkQsSUFBekIsK0JBQTNCO0FBVGlCO0FBVWxCOzs7O1dBRUQsMEJBQWlCO0FBQ2Y7QUFDQTtBQUNBLGFBQU9FLGtCQUFNQyxHQUFOLENBQVUsNkRBQVYsRUFBeUU7QUFDOUVDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVjtBQURxRSxPQUF6RSxDQUFQO0FBS0QsSyxDQUVEOzs7O1dBQ0EsMkJBQWtCQyxTQUFsQixFQUE2QjtBQUMzQjtBQUNBO0FBQ0EsYUFBT0osa0JBQU1DLEdBQU4sb0VBQTZFO0FBQ2xGQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFYsU0FEeUU7QUFJbEZFLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxVQUFVLEVBQUVGO0FBRE47QUFKMEUsT0FBN0UsQ0FBUDtBQVFELEssQ0FFRDs7OztXQUNBLHVCQUFjQSxTQUFkLEVBQXlCO0FBQUE7O0FBQ3ZCLFVBQUlHLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLE1BQUFBLFFBQVEsQ0FBQ2QsaUJBQVQsR0FBNkJXLFNBQTdCO0FBQ0EsV0FBS0ksaUJBQUwsQ0FBdUJKLFNBQXZCLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxjQUFELEVBQW9CO0FBQ3hCSCxRQUFBQSxRQUFRLENBQUNiLGNBQVQsR0FBMEJnQixjQUFjLENBQUNDLElBQXpDO0FBQ0FKLFFBQUFBLFFBQVEsQ0FBQ1osVUFBVCxHQUFzQixxQ0FBb0JZLFFBQVEsQ0FBQ2IsY0FBVCxDQUF3QmtCLE9BQTVDLENBQXRCO0FBQ0FMLFFBQUFBLFFBQVEsQ0FBQ1gsU0FBVCxHQUFxQixLQUFyQixDQUh3QixDQUl4Qjs7QUFDQSxRQUFBLE1BQUksQ0FBQ2lCLFFBQUwsQ0FBY04sUUFBZDtBQUNELE9BUEQsV0FRTyxVQUFDTyxHQUFELEVBQVM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLEdBQXpDO0FBQ0QsT0FWRDtBQVdEOzs7V0FHRCw2QkFBb0I7QUFBQTs7QUFDbEI7QUFDQSxXQUFLRyxjQUFMLEdBQ0NSLElBREQsQ0FDTSxVQUFDUyxRQUFELEVBQWM7QUFDbEIsUUFBQSxNQUFJLENBQUNyQixhQUFMLENBQW1CcUIsUUFBUSxDQUFDUCxJQUFULENBQWMsQ0FBZCxFQUFpQlEsRUFBcEM7QUFDRCxPQUhELFdBSU8sVUFBQ0wsR0FBRCxFQUFTO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaLEVBQThDRixHQUE5QztBQUNELE9BTkQ7QUFPRDs7O1dBRUQsNkJBQW9CTSxZQUFwQixFQUFrQztBQUNoQyxXQUFLdkIsYUFBTCxDQUFtQnVCLFlBQW5CO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsVUFBRyxLQUFLNUIsS0FBTCxDQUFXSSxTQUFkLEVBQXlCO0FBQ3ZCLDRCQUNFLGdDQUFDLG1CQUFEO0FBQVMsVUFBQSxTQUFTLEVBQUMsUUFBbkI7QUFBNEIsVUFBQSxJQUFJLEVBQUM7QUFBakMsd0JBQ0U7QUFBTSxVQUFBLFNBQVMsRUFBQztBQUFoQix3QkFERixDQURGO0FBS0Q7O0FBQ0QsMEJBQ0U7QUFBSyxRQUFBLEdBQUcsRUFBRSxLQUFLSixLQUFMLENBQVdDO0FBQXJCLHNCQUNFLGdDQUFDLGtCQUFELE9BREYsZUFFRSxnQ0FBQyxvQkFBRDtBQUFVLFFBQUEsU0FBUyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsaUJBQWhDO0FBQW1ELFFBQUEsVUFBVSxFQUFFLEtBQUtELEtBQUwsQ0FBV0csVUFBMUU7QUFBc0YsUUFBQSxPQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxjQUFYLENBQTBCa0I7QUFBekgsUUFGRixxQ0FJRSxnQ0FBQyx3QkFBRDtBQUFjLFFBQUEsU0FBUyxFQUFFLEtBQUtwQixLQUFMLENBQVdDLGlCQUFwQztBQUF1RCxRQUFBLG1CQUFtQixFQUFFLEtBQUtNO0FBQWpGLFFBSkYsZUFLRSxnQ0FBQyxtQkFBRCxPQUxGLGVBTUUsZ0NBQUMsbUJBQUQ7QUFBUyxRQUFBLFNBQVMsRUFBRSxLQUFLUCxLQUFMLENBQVdDLGlCQUEvQjtBQUFrRCxRQUFBLFFBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdFLGNBQXZFO0FBQXVGLFFBQUEsVUFBVSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0c7QUFBOUcsUUFORixlQU9FLGdDQUFDLGVBQUQ7QUFBSyxRQUFBLFNBQVMsRUFBRSxLQUFLSCxLQUFMLENBQVdDO0FBQTNCLFFBUEYsZUFRRSxnQ0FBQyxrQkFBRCxPQVJGLENBREY7QUFZRDs7OztFQTFGZTRCLGtCQUFNQyxTOztBQTJGdkI7ZUFFY2hDLEciLCJzb3VyY2VzQ29udGVudCI6WyIvL2xpYnJhcmllc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGhlYWRlciBhbmQgZm9vdGVyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzeCc7XG4vL3dpZGdldHNcbmltcG9ydCBPdmVydmlldyBmcm9tICcuL092ZXJ2aWV3L092ZXJ2aWV3LmpzeCc7XG5pbXBvcnQgUmF0aW5ncyBmcm9tICcuL1JhdGluZ3MmUmV2aWV3cy9SYXRpbmdzLmpzeCdcbmltcG9ydCBSZWxhdGVkSXRlbXMgZnJvbSAnLi9SZWxhdGVkSXRlbXMmQ29tcGFyaXNvbnMvUmVsYXRlZEl0ZW1zLmpzeCc7XG5pbXBvcnQgUW5BIGZyb20gJy4vUW5BL1FuQS5qc3gnXG5pbXBvcnQgWW91ckZpdCBmcm9tICcuL1JlbGF0ZWRJdGVtcyZDb21wYXJpc29ucy9Zb3VyRml0LmpzeCdcbi8vTWlzY1xuaW1wb3J0IGNhbGN1bGF0ZVN0YXJSZXZpZXcgZnJvbSAnLi9jYWxjdWxhdGVTdGFyUmV2aWV3LmpzJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IGNzcyBmcm9tICcuL0FwcC5jc3MnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NwaW5uZXInXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFByb2R1Y3RJZDogbnVsbCxcbiAgICAgIHJldmlld01ldGFEYXRhOiB7fSxcbiAgICAgIHN0YXJSYXRpbmc6IDAsXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VQcm9kdWN0ID0gdGhpcy5jaGFuZ2VQcm9kdWN0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2R1Y3RDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2R1Y3RDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0UHJvZHVjdExpc3QoKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgcHJvZHVjdHNcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMnLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvL1JhdGluZ3MgYW5kIFJldmlld3MgcmVsYXRlZCBHZXQgcmVxdWVzdHNcbiAgZ2V0UmV2aWV3TWV0YURhdGEocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCByZXZpZXcgbWV0YWRhdGEgb24gYSBzcGVjaWZpZWQgcHJvZHVjdFxuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9yZXZpZXdzL21ldGFgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvL3dpbGwgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgdG8gYmUgYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbiBmb3Igd2hlbiBhIG5ldyBwcm9kdWN0IGlzIHNlbGVjdGVkXG4gIGNoYW5nZVByb2R1Y3QocHJvZHVjdElkKSB7XG4gICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgbmV3U3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgdGhpcy5nZXRSZXZpZXdNZXRhRGF0YShwcm9kdWN0SWQpXG4gICAgLnRoZW4oKHJldmlld01ldGFkYXRhKSA9PiB7XG4gICAgICBuZXdTdGF0ZS5yZXZpZXdNZXRhRGF0YSA9IHJldmlld01ldGFkYXRhLmRhdGE7XG4gICAgICBuZXdTdGF0ZS5zdGFyUmF0aW5nID0gY2FsY3VsYXRlU3RhclJldmlldyhuZXdTdGF0ZS5yZXZpZXdNZXRhRGF0YS5yYXRpbmdzKTtcbiAgICAgIG5ld1N0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy9jb25zb2xlLmxvZygnbmV3c3RhdGU6ICcsIG5ld1N0YXRlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBnZXQgb3ZlcnZpZXcgZGF0YTogJywgZXJyKTtcbiAgICB9KVxuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2Jhc2NpYWxseSB0aGUgc2FtZSBhcyBjaGFuZ2luZyB0aGUgc2VsZWN0ZWQgcHJvZHVjdCwgYnV0IGhhcyB0byByZXRyaWV2ZSBwcm9kdWN0IGxpc3QgYXQgdGhlIG91dHNldFxuICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKVxuICAgIC50aGVuKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9kdWN0KHByb2R1Y3RzLmRhdGFbMF0uaWQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZXRyaXZpbmcgcHJvZHVjdCBMaXN0OiAnLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUHJvZHVjdENoYW5nZShuZXdQcm9kdWN0SWQpIHtcbiAgICB0aGlzLmNoYW5nZVByb2R1Y3QobmV3UHJvZHVjdElkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZih0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWR9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxPdmVydmlldyBwcm9kdWN0SWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcm9kdWN0SWR9IHN0YXJSYXRpbmc9e3RoaXMuc3RhdGUuc3RhclJhdGluZ30gcmF0aW5ncz17dGhpcy5zdGF0ZS5yZXZpZXdNZXRhRGF0YS5yYXRpbmdzfSAvPlxuICAgICAgICAgUmVsYXRlZEl0ZW1zQW5kRml0XG4gICAgICAgIDxSZWxhdGVkSXRlbXMgcHJvZHVjdElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfSBoYW5kbGVQcm9kdWN0Q2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RDaGFuZ2V9Lz5cbiAgICAgICAgPFlvdXJGaXQgLz5cbiAgICAgICAgPFJhdGluZ3MgcHJvZHVjdElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfSBtZXRhRGF0YT17dGhpcy5zdGF0ZS5yZXZpZXdNZXRhRGF0YX0gc3RhclJhdGluZz17dGhpcy5zdGF0ZS5zdGFyUmF0aW5nfS8+XG4gICAgICAgIDxRbkEgcHJvZHVjdElEPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfS8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==