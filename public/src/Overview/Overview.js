"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _AddToCart = _interopRequireDefault(require("./AddToCart.jsx"));

var _StyleSelector = _interopRequireDefault(require("./StyleSelector.jsx"));

var _ProductTitleAndPrice = _interopRequireDefault(require("./ProductTitleAndPrice.jsx"));

var _ProductDescription = _interopRequireDefault(require("./ProductDescription.jsx"));

var _SocialMediaButtons = _interopRequireDefault(require("./SocialMediaButtons.jsx"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _sizeFirstSkus = _interopRequireDefault(require("./sizeFirstSkus.js"));

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
      selectedStyle: {},
      isLoading: true
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
    key: "changeStyle",
    value: function changeStyle(e) {
      this.setState({
        selectedStyle: this.state.styles[e.target.title]
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
          selectedStyle: values[1].data.results[0],
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "Styles loading");
      }

      var sizeFirstSkus = (0, _sizeFirstSkus["default"])(this.state.selectedStyle.skus);
      var sizes = Object.keys(sizeFirstSkus);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "overview"
      }, /*#__PURE__*/_react["default"].createElement(_ProductTitleAndPrice["default"], {
        productInfo: this.state.productInfo,
        starRating: this.props.starRating,
        price: this.state.selectedStyle.original_price,
        salePrice: this.state.selectedStyle.sale_price,
        ratings: this.props.ratings
      }), /*#__PURE__*/_react["default"].createElement(_AddToCart["default"], {
        sizeFirstSkus: sizeFirstSkus,
        sizes: sizes,
        key: this.state.selectedStyle.name
      }), /*#__PURE__*/_react["default"].createElement(_StyleSelector["default"], {
        styles: this.state.styles,
        selectedStyle: this.state.selectedStyle,
        changeStyle: this.changeStyle.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_ProductDescription["default"], {
        productInfo: this.state.productInfo
      }), /*#__PURE__*/_react["default"].createElement(_SocialMediaButtons["default"], null));
    }
  }]);

  return Overview;
}(_react["default"].Component);

var _default = Overview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RJbmZvIiwic3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInRpdGxlIiwiUHJvbWlzZSIsImFsbCIsImdldFByb2R1Y3RJbmZvIiwiZ2V0U3R5bGVzIiwidGhlbiIsInZhbHVlcyIsImRhdGEiLCJyZXN1bHRzIiwic2l6ZUZpcnN0U2t1cyIsInNrdXMiLCJzaXplcyIsIk9iamVjdCIsImtleXMiLCJzdGFyUmF0aW5nIiwib3JpZ2luYWxfcHJpY2UiLCJzYWxlX3ByaWNlIiwicmF0aW5ncyIsIm5hbWUiLCJjaGFuZ2VTdHlsZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRSxFQURGO0FBRVhDLE1BQUFBLE1BQU0sRUFBRSxFQUZHO0FBR1hDLE1BQUFBLGFBQWEsRUFBRSxFQUhKO0FBSVhDLE1BQUFBLFNBQVMsRUFBRTtBQUpBLEtBQWI7QUFGaUI7QUFRbEI7Ozs7V0FFRCxtQkFBVUMsU0FBVixFQUFxQjtBQUNuQjtBQUNBO0FBQ0EsYUFBT0Msa0JBQU1DLEdBQU4sdUVBQXlFRixTQUF6RSxjQUE2RjtBQUNsR0csUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlGO0FBSWxHQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSjBGLE9BQTdGLENBQVA7QUFRRDs7O1dBRUQsd0JBQWVBLFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBLGFBQU9DLGtCQUFNQyxHQUFOLHVFQUF5RUYsU0FBekUsR0FBcUY7QUFDMUZHLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQURpRjtBQUkxRkMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRU47QUFETjtBQUprRixPQUFyRixDQUFQO0FBUUQ7OztXQUVELHFCQUFZTyxDQUFaLEVBQWU7QUFDYixXQUFLQyxRQUFMLENBQWM7QUFDWlYsUUFBQUEsYUFBYSxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsTUFBWCxDQUFrQlUsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTNCO0FBREgsT0FBZDtBQUdEOzs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDbEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ1YsS0FBS0MsY0FBTCxDQUFvQixLQUFLbkIsS0FBTCxDQUFXTSxTQUEvQixDQURVLEVBRVYsS0FBS2MsU0FBTCxDQUFlLEtBQUtwQixLQUFMLENBQVdNLFNBQTFCLENBRlUsQ0FBWixFQUlDZSxJQUpELENBSU0sVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFFBQUEsTUFBSSxDQUFDUixRQUFMLENBQWM7QUFDWlosVUFBQUEsV0FBVyxFQUFFb0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxJQURYO0FBRVpwQixVQUFBQSxNQUFNLEVBQUVtQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLElBQVYsQ0FBZUMsT0FGWDtBQUdacEIsVUFBQUEsYUFBYSxFQUFFa0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxJQUFWLENBQWVDLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FISDtBQUlabkIsVUFBQUEsU0FBUyxFQUFFO0FBSkMsU0FBZDtBQU1ELE9BWEQ7QUFZRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFHLEtBQUtKLEtBQUwsQ0FBV0ksU0FBZCxFQUF5QjtBQUN2Qiw0QkFBTyw4REFBUDtBQUNEOztBQUNELFVBQUlvQixhQUFhLEdBQUcsK0JBQW1CLEtBQUt4QixLQUFMLENBQVdHLGFBQVgsQ0FBeUJzQixJQUE1QyxDQUFwQjtBQUNBLFVBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLGFBQVosQ0FBWjtBQUNBLDBCQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRSxnQ0FBQyxnQ0FBRDtBQUFzQixRQUFBLFdBQVcsRUFBRSxLQUFLeEIsS0FBTCxDQUFXQyxXQUE5QztBQUEyRCxRQUFBLFVBQVUsRUFBRSxLQUFLRixLQUFMLENBQVc4QixVQUFsRjtBQUE4RixRQUFBLEtBQUssRUFBRSxLQUFLN0IsS0FBTCxDQUFXRyxhQUFYLENBQXlCMkIsY0FBOUg7QUFBOEksUUFBQSxTQUFTLEVBQUUsS0FBSzlCLEtBQUwsQ0FBV0csYUFBWCxDQUF5QjRCLFVBQWxMO0FBQThMLFFBQUEsT0FBTyxFQUFFLEtBQUtoQyxLQUFMLENBQVdpQztBQUFsTixRQURGLGVBRUUsZ0NBQUMscUJBQUQ7QUFBVyxRQUFBLGFBQWEsRUFBRVIsYUFBMUI7QUFBeUMsUUFBQSxLQUFLLEVBQUVFLEtBQWhEO0FBQXVELFFBQUEsR0FBRyxFQUFFLEtBQUsxQixLQUFMLENBQVdHLGFBQVgsQ0FBeUI4QjtBQUFyRixRQUZGLGVBR0UsZ0NBQUMseUJBQUQ7QUFBZSxRQUFBLE1BQU0sRUFBRSxLQUFLakMsS0FBTCxDQUFXRSxNQUFsQztBQUEwQyxRQUFBLGFBQWEsRUFBRSxLQUFLRixLQUFMLENBQVdHLGFBQXBFO0FBQW1GLFFBQUEsV0FBVyxFQUFFLEtBQUsrQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUFoRyxRQUhGLGVBSUUsZ0NBQUMsOEJBQUQ7QUFBb0IsUUFBQSxXQUFXLEVBQUUsS0FBS25DLEtBQUwsQ0FBV0M7QUFBNUMsUUFKRixlQUtFLGdDQUFDLDhCQUFELE9BTEYsQ0FERjtBQVNEOzs7O0VBekVvQm1DLGtCQUFNQyxTOztlQTRFZHZDLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Rvb2xzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vY29tcG9uZW50c1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydC5qc3gnO1xuaW1wb3J0IFN0eWxlU2VsZWN0b3IgZnJvbSAnLi9TdHlsZVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgUHJvZHVjdFRpdGxlQW5kUHJpY2UgZnJvbSAnLi9Qcm9kdWN0VGl0bGVBbmRQcmljZS5qc3gnO1xuaW1wb3J0IFByb2R1Y3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2R1Y3REZXNjcmlwdGlvbi5qc3gnO1xuaW1wb3J0IFNvY2lhbE1lZGlhQnV0dG9ucyBmcm9tICcuL1NvY2lhbE1lZGlhQnV0dG9ucy5qc3gnO1xuLy9taXNjXG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcbmltcG9ydCBwYXJzZVNpemVGaXJzdFNrdXMgZnJvbSAnLi9zaXplRmlyc3RTa3VzLmpzJztcblxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvZHVjdEluZm86IHt9LFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIHNlbGVjdGVkU3R5bGU6IHt9LFxuICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0U3R5bGVzKHByb2R1Y3RJZCkge1xuICAgIC8vcmVxdWVzdCB0byBnZXQgYWxsIHRoZSBzdHlsZXMgYXZhaWxhYmxlIG9uIHNpbmdsZS9zcGVjaWZpZWQgcHJvZHVjdFxuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cy8ke3Byb2R1Y3RJZH0vc3R5bGVzYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEluZm8ocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgcHJvZHVjdCBpbmZvIGZvciBzcGVjaWZpZWQgcHJvZHVjdFxuICAgIC8vcmV0dXJucyBhIHByb21pc2VcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gLHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVN0eWxlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkU3R5bGU6IHRoaXMuc3RhdGUuc3R5bGVzW2UudGFyZ2V0LnRpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0SW5mbyh0aGlzLnByb3BzLnByb2R1Y3RJZCksXG4gICAgICB0aGlzLmdldFN0eWxlcyh0aGlzLnByb3BzLnByb2R1Y3RJZClcbiAgICBdKVxuICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcm9kdWN0SW5mbzogdmFsdWVzWzBdLmRhdGEsXG4gICAgICAgIHN0eWxlczogdmFsdWVzWzFdLmRhdGEucmVzdWx0cyxcbiAgICAgICAgc2VsZWN0ZWRTdHlsZTogdmFsdWVzWzFdLmRhdGEucmVzdWx0c1swXSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZih0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+U3R5bGVzIGxvYWRpbmc8L2Rpdj5cbiAgICB9XG4gICAgdmFyIHNpemVGaXJzdFNrdXMgPSBwYXJzZVNpemVGaXJzdFNrdXModGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLnNrdXMpO1xuICAgIHZhciBzaXplcyA9IE9iamVjdC5rZXlzKHNpemVGaXJzdFNrdXMpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVydmlldyc+XG4gICAgICAgIDxQcm9kdWN0VGl0bGVBbmRQcmljZSBwcm9kdWN0SW5mbz17dGhpcy5zdGF0ZS5wcm9kdWN0SW5mb30gc3RhclJhdGluZz17dGhpcy5wcm9wcy5zdGFyUmF0aW5nfSBwcmljZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLm9yaWdpbmFsX3ByaWNlfSBzYWxlUHJpY2U9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5zYWxlX3ByaWNlfSByYXRpbmdzPXt0aGlzLnByb3BzLnJhdGluZ3N9Lz5cbiAgICAgICAgPEFkZFRvQ2FydCBzaXplRmlyc3RTa3VzPXtzaXplRmlyc3RTa3VzfSBzaXplcz17c2l6ZXN9IGtleT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLm5hbWV9Lz5cbiAgICAgICAgPFN0eWxlU2VsZWN0b3Igc3R5bGVzPXt0aGlzLnN0YXRlLnN0eWxlc30gc2VsZWN0ZWRTdHlsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlfSBjaGFuZ2VTdHlsZT17dGhpcy5jaGFuZ2VTdHlsZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8UHJvZHVjdERlc2NyaXB0aW9uIHByb2R1Y3RJbmZvPXt0aGlzLnN0YXRlLnByb2R1Y3RJbmZvfSAvPlxuICAgICAgICA8U29jaWFsTWVkaWFCdXR0b25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iXX0=