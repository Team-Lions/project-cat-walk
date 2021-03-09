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

var _ImageGalleryDefault = _interopRequireDefault(require("./ImageGalleryDefault.jsx"));

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
    value: function changeStyle(index) {
      this.setState({
        selectedStyle: this.state.styles[index]
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
        className: "overview",
        key: this.state.selectedStyle.name
      }, /*#__PURE__*/_react["default"].createElement(_ProductTitleAndPrice["default"], {
        productInfo: this.state.productInfo,
        starRating: this.props.starRating,
        price: this.state.selectedStyle.original_price,
        salePrice: this.state.selectedStyle.sale_price,
        ratings: this.props.ratings
      }), /*#__PURE__*/_react["default"].createElement(_ImageGalleryDefault["default"], {
        images: this.state.selectedStyle.photos,
        styleName: this.state.selectedStyle.name
      }), /*#__PURE__*/_react["default"].createElement(_AddToCart["default"], {
        sizeFirstSkus: sizeFirstSkus,
        sizes: sizes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RJbmZvIiwic3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsImluZGV4Iiwic2V0U3RhdGUiLCJQcm9taXNlIiwiYWxsIiwiZ2V0UHJvZHVjdEluZm8iLCJnZXRTdHlsZXMiLCJ0aGVuIiwidmFsdWVzIiwiZGF0YSIsInJlc3VsdHMiLCJzaXplRmlyc3RTa3VzIiwic2t1cyIsInNpemVzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJzdGFyUmF0aW5nIiwib3JpZ2luYWxfcHJpY2UiLCJzYWxlX3ByaWNlIiwicmF0aW5ncyIsInBob3RvcyIsImNoYW5nZVN0eWxlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsV0FBVyxFQUFFLEVBREY7QUFFWEMsTUFBQUEsTUFBTSxFQUFFLEVBRkc7QUFHWEMsTUFBQUEsYUFBYSxFQUFFLEVBSEo7QUFJWEMsTUFBQUEsU0FBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7OztXQUVELG1CQUFVQyxTQUFWLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTix1RUFBeUVGLFNBQXpFLGNBQTZGO0FBQ2xHRyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwy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QUs4QixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUFoRyxRQUpGLGVBS0UsZ0NBQUMsOEJBQUQ7QUFBb0IsUUFBQSxXQUFXLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV0M7QUFBNUMsUUFMRixlQU1FLGdDQUFDLDhCQUFELE9BTkYsQ0FERjtBQVVEOzs7O0VBMUVvQmtDLGtCQUFNQyxTOztlQTZFZHRDLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Rvb2xzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vY29tcG9uZW50c1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydC5qc3gnO1xuaW1wb3J0IFN0eWxlU2VsZWN0b3IgZnJvbSAnLi9TdHlsZVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgUHJvZHVjdFRpdGxlQW5kUHJpY2UgZnJvbSAnLi9Qcm9kdWN0VGl0bGVBbmRQcmljZS5qc3gnO1xuaW1wb3J0IFByb2R1Y3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2R1Y3REZXNjcmlwdGlvbi5qc3gnO1xuaW1wb3J0IFNvY2lhbE1lZGlhQnV0dG9ucyBmcm9tICcuL1NvY2lhbE1lZGlhQnV0dG9ucy5qc3gnO1xuaW1wb3J0IEltYWdlR2FsbGVyeURlZmF1bHQgZnJvbSAnLi9JbWFnZUdhbGxlcnlEZWZhdWx0LmpzeCc7XG4vL21pc2NcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IHBhcnNlU2l6ZUZpcnN0U2t1cyBmcm9tICcuL3NpemVGaXJzdFNrdXMuanMnO1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0SW5mbzoge30sXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRTdHlsZToge30sXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRTdHlsZXMocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgdGhlIHN0eWxlcyBhdmFpbGFibGUgb24gc2luZ2xlL3NwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfS9zdHlsZXNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0IGluZm8gZm9yIHNwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAse1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlU3R5bGUoaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkU3R5bGU6IHRoaXMuc3RhdGUuc3R5bGVzW2luZGV4XVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5nZXRQcm9kdWN0SW5mbyh0aGlzLnByb3BzLnByb2R1Y3RJZCksXG4gICAgICB0aGlzLmdldFN0eWxlcyh0aGlzLnByb3BzLnByb2R1Y3RJZClcbiAgICBdKVxuICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcm9kdWN0SW5mbzogdmFsdWVzWzBdLmRhdGEsXG4gICAgICAgIHN0eWxlczogdmFsdWVzWzFdLmRhdGEucmVzdWx0cyxcbiAgICAgICAgc2VsZWN0ZWRTdHlsZTogdmFsdWVzWzFdLmRhdGEucmVzdWx0c1swXSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZih0aGlzLnN0YXRlLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+U3R5bGVzIGxvYWRpbmc8L2Rpdj5cbiAgICB9XG4gICAgdmFyIHNpemVGaXJzdFNrdXMgPSBwYXJzZVNpemVGaXJzdFNrdXModGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLnNrdXMpO1xuICAgIHZhciBzaXplcyA9IE9iamVjdC5rZXlzKHNpemVGaXJzdFNrdXMpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVydmlldycga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUubmFtZX0+XG4gICAgICAgIDxQcm9kdWN0VGl0bGVBbmRQcmljZSBwcm9kdWN0SW5mbz17dGhpcy5zdGF0ZS5wcm9kdWN0SW5mb30gc3RhclJhdGluZz17dGhpcy5wcm9wcy5zdGFyUmF0aW5nfSBwcmljZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLm9yaWdpbmFsX3ByaWNlfSBzYWxlUHJpY2U9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5zYWxlX3ByaWNlfSByYXRpbmdzPXt0aGlzLnByb3BzLnJhdGluZ3N9Lz5cbiAgICAgICAgPEltYWdlR2FsbGVyeURlZmF1bHQgaW1hZ2VzPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUucGhvdG9zfSBzdHlsZU5hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5uYW1lfSAvPlxuICAgICAgICA8QWRkVG9DYXJ0IHNpemVGaXJzdFNrdXM9e3NpemVGaXJzdFNrdXN9IHNpemVzPXtzaXplc30gLz5cbiAgICAgICAgPFN0eWxlU2VsZWN0b3Igc3R5bGVzPXt0aGlzLnN0YXRlLnN0eWxlc30gc2VsZWN0ZWRTdHlsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlfSBjaGFuZ2VTdHlsZT17dGhpcy5jaGFuZ2VTdHlsZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8UHJvZHVjdERlc2NyaXB0aW9uIHByb2R1Y3RJbmZvPXt0aGlzLnN0YXRlLnByb2R1Y3RJbmZvfSAvPlxuICAgICAgICA8U29jaWFsTWVkaWFCdXR0b25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iXX0=