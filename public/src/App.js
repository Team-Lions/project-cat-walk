"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

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

      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.state.selectedProductId
      }, /*#__PURE__*/_react["default"].createElement(_Overview["default"], {
        productId: this.state.selectedProductId,
        starRating: this.state.starRating,
        ratings: this.state.reviewMetaData.ratings
      }), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], null), /*#__PURE__*/_react["default"].createElement(_YourFit["default"], null), /*#__PURE__*/_react["default"].createElement(_Ratings["default"], null), /*#__PURE__*/_react["default"].createElement(_QnA["default"], {
        productID: this.state.selectedProductId
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJyZXZpZXdNZXRhRGF0YSIsInN0YXJSYXRpbmciLCJpc0xvYWRpbmciLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInByb2R1Y3RJZCIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJuZXdTdGF0ZSIsImdldFJldmlld01ldGFEYXRhIiwidGhlbiIsInJldmlld01ldGFkYXRhIiwiZGF0YSIsInJhdGluZ3MiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJlcnIiLCJnZXRQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwiY2hhbmdlUHJvZHVjdCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFFLElBRFI7QUFFWEMsTUFBQUEsY0FBYyxFQUFFLEVBRkw7QUFHWEMsTUFBQUEsVUFBVSxFQUFFLENBSEQ7QUFJWEMsTUFBQUEsU0FBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7OztXQUVELDBCQUFpQjtBQUNmO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTixDQUFVLDZEQUFWLEVBQXlFO0FBQzlFQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFY7QUFEcUUsT0FBekUsQ0FBUDtBQUtELEssQ0FFRDs7OztXQUNBLDJCQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBLGFBQU9KLGtCQUFNQyxHQUFOLG9FQUE2RTtBQUNsRkMsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlFO0FBSWxGRSxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFRjtBQUROO0FBSjBFLE9BQTdFLENBQVA7QUFRRCxLLENBRUQ7Ozs7V0FDQSx1QkFBY0EsU0FBZCxFQUF5QjtBQUFBOztBQUN2QixVQUFJRyxRQUFRLEdBQUcsRUFBZjtBQUNBQSxNQUFBQSxRQUFRLENBQUNYLGlCQUFULEdBQTZCUSxTQUE3QjtBQUNBLFdBQUtJLGlCQUFMLENBQXVCSixTQUF2QixFQUNDSyxJQURELENBQ00sVUFBQ0MsY0FBRCxFQUFvQjtBQUN4QkgsUUFBQUEsUUFBUSxDQUFDVixjQUFULEdBQTBCYSxjQUFjLENBQUNDLElBQXpDO0FBQ0FKLFFBQUFBLFFBQVEsQ0FBQ1QsVUFBVCxHQUFzQixxQ0FBb0JTLFFBQVEsQ0FBQ1YsY0FBVCxDQUF3QmUsT0FBNUMsQ0FBdEI7QUFDQUwsUUFBQUEsUUFBUSxDQUFDUixTQUFULEdBQXFCLEtBQXJCO0FBQ0FjLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJQLFFBQTFCOztBQUNBLFFBQUEsTUFBSSxDQUFDUSxRQUFMLENBQWNSLFFBQWQ7QUFDRCxPQVBELFdBUU8sVUFBQ1MsR0FBRCxFQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRSxHQUF6QztBQUNELE9BVkQ7QUFXRDs7O1dBR0QsNkJBQW9CO0FBQUE7O0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxHQUNDUixJQURELENBQ00sVUFBQ1MsUUFBRCxFQUFjO0FBQ2xCLFFBQUEsTUFBSSxDQUFDQyxhQUFMLENBQW1CRCxRQUFRLENBQUNQLElBQVQsQ0FBYyxDQUFkLEVBQWlCUyxFQUFwQztBQUNELE9BSEQsV0FJTyxVQUFDSixHQUFELEVBQVM7QUFDZEgsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENFLEdBQTlDO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBUztBQUNQLFVBQUcsS0FBS3JCLEtBQUwsQ0FBV0ksU0FBZCxFQUF5QjtBQUN2Qiw0QkFBTyx1REFBUDtBQUNEOztBQUNELDBCQUNFO0FBQUssUUFBQSxHQUFHLEVBQUUsS0FBS0osS0FBTCxDQUFXQztBQUFyQixzQkFDRSxnQ0FBQyxvQkFBRDtBQUFVLFFBQUEsU0FBUyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsaUJBQWhDO0FBQW1ELFFBQUEsVUFBVSxFQUFFLEtBQUtELEtBQUwsQ0FBV0csVUFBMUU7QUFBc0YsUUFBQSxPQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxjQUFYLENBQTBCZTtBQUF6SCxRQURGLGVBRUUsZ0NBQUMsd0JBQUQsT0FGRixlQUdFLGdDQUFDLG1CQUFELE9BSEYsZUFJRSxnQ0FBQyxtQkFBRCxPQUpGLGVBS0UsZ0NBQUMsZUFBRDtBQUFLLFFBQUEsU0FBUyxFQUFFLEtBQUtqQixLQUFMLENBQVdDO0FBQTNCLFFBTEYsQ0FERjtBQVNEOzs7O0VBN0VleUIsa0JBQU1DLFM7O0FBOEV2QjtlQUVjN0IsRyIsInNvdXJjZXNDb250ZW50IjpbIi8vbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy93aWRnZXRzXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnLi9PdmVydmlldy9PdmVydmlldy5qc3gnO1xuaW1wb3J0IFJhdGluZ3MgZnJvbSAnLi9SYXRpbmdzJlJldmlld3MvUmF0aW5ncy5qc3gnXG5pbXBvcnQgUmVsYXRlZEl0ZW1zIGZyb20gJy4vUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1JlbGF0ZWRJdGVtcy5qc3gnO1xuaW1wb3J0IFFuQSBmcm9tICcuL1FuQS9RbkEuanN4J1xuaW1wb3J0IFlvdXJGaXQgZnJvbSAnLi9SZWxhdGVkSXRlbXMmQ29tcGFyaXNvbnMvWW91ckZpdC5qc3gnXG4vL01pc2NcbmltcG9ydCBjYWxjdWxhdGVTdGFyUmV2aWV3IGZyb20gJy4vY2FsY3VsYXRlU3RhclJldmlldy5qcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vcHVibGljL3Rva2VuLmpzJztcbmltcG9ydCBjc3MgZnJvbSAnLi9BcHAuY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUHJvZHVjdElkOiBudWxsLFxuICAgICAgcmV2aWV3TWV0YURhdGE6IHt9LFxuICAgICAgc3RhclJhdGluZzogMCxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGdldFByb2R1Y3RMaXN0KCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgYWxsIHByb2R1Y3RzXG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy9SYXRpbmdzIGFuZCBSZXZpZXdzIHJlbGF0ZWQgR2V0IHJlcXVlc3RzXG4gIGdldFJldmlld01ldGFEYXRhKHByb2R1Y3RJZCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgcmV2aWV3IG1ldGFkYXRhIG9uIGEgc3BlY2lmaWVkIHByb2R1Y3RcbiAgICAvL3JldHVybnMgYSBwcm9taXNlXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcmV2aWV3cy9tZXRhYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy93aWxsIHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIHRvIGJlIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24gZm9yIHdoZW4gYSBuZXcgcHJvZHVjdCBpcyBzZWxlY3RlZFxuICBjaGFuZ2VQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgIG5ld1N0YXRlLnNlbGVjdGVkUHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgIHRoaXMuZ2V0UmV2aWV3TWV0YURhdGEocHJvZHVjdElkKVxuICAgIC50aGVuKChyZXZpZXdNZXRhZGF0YSkgPT4ge1xuICAgICAgbmV3U3RhdGUucmV2aWV3TWV0YURhdGEgPSByZXZpZXdNZXRhZGF0YS5kYXRhO1xuICAgICAgbmV3U3RhdGUuc3RhclJhdGluZyA9IGNhbGN1bGF0ZVN0YXJSZXZpZXcobmV3U3RhdGUucmV2aWV3TWV0YURhdGEucmF0aW5ncyk7XG4gICAgICBuZXdTdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdzdGF0ZTogJywgbmV3U3RhdGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGdldCBvdmVydmlldyBkYXRhOiAnLCBlcnIpO1xuICAgIH0pXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vYmFzY2lhbGx5IHRoZSBzYW1lIGFzIGNoYW5naW5nIHRoZSBzZWxlY3RlZCBwcm9kdWN0LCBidXQgaGFzIHRvIHJldHJpZXZlIHByb2R1Y3QgbGlzdCBhdCB0aGUgb3V0c2V0XG4gICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpXG4gICAgLnRoZW4oKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb2R1Y3QocHJvZHVjdHMuZGF0YVswXS5pZCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJldHJpdmluZyBwcm9kdWN0IExpc3Q6ICcsIGVycik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZHVjdElkfT5cbiAgICAgICAgPE92ZXJ2aWV3IHByb2R1Y3RJZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZH0gc3RhclJhdGluZz17dGhpcy5zdGF0ZS5zdGFyUmF0aW5nfSByYXRpbmdzPXt0aGlzLnN0YXRlLnJldmlld01ldGFEYXRhLnJhdGluZ3N9Lz5cbiAgICAgICAgPFJlbGF0ZWRJdGVtcyAvPlxuICAgICAgICA8WW91ckZpdCAvPlxuICAgICAgICA8UmF0aW5ncyAvPlxuICAgICAgICA8UW5BIHByb2R1Y3RJRD17dGhpcy5zdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZH0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==