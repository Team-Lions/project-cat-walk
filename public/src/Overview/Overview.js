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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RJbmZvIiwic3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInRpdGxlIiwiUHJvbWlzZSIsImFsbCIsImdldFByb2R1Y3RJbmZvIiwiZ2V0U3R5bGVzIiwidGhlbiIsInZhbHVlcyIsImRhdGEiLCJyZXN1bHRzIiwic2l6ZUZpcnN0U2t1cyIsInNrdXMiLCJzaXplcyIsIk9iamVjdCIsImtleXMiLCJuYW1lIiwic3RhclJhdGluZyIsIm9yaWdpbmFsX3ByaWNlIiwic2FsZV9wcmljZSIsInJhdGluZ3MiLCJwaG90b3MiLCJjaGFuZ2VTdHlsZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRSxFQURGO0FBRVhDLE1BQUFBLE1BQU0sRUFBRSxFQUZHO0FBR1hDLE1BQUFBLGFBQWEsRUFBRSxFQUhKO0FBSVhDLE1BQUFBLFNBQVMsRUFBRTtBQUpBLEtBQWI7QUFGaUI7QUFRbEI7Ozs7V0FFRCxtQkFBVUMsU0FBVixFQUFxQjtBQUNuQjtBQUNBO0FBQ0EsYUFBT0Msa0JBQU1DLEdBQU4sdUVBQXlFRixTQUF6RSxjQUE2RjtBQUNsR0csUUFBQUEsT0FB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QVdHLGFBQXBFO0FBQW1GLFFBQUEsV0FBVyxFQUFFLEtBQUtnQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QjtBQUFoRyxRQUpGLGVBS0UsZ0NBQUMsOEJBQUQ7QUFBb0IsUUFBQSxXQUFXLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV0M7QUFBNUMsUUFMRixlQU1FLGdDQUFDLDhCQUFELE9BTkYsQ0FERjtBQVVEOzs7O0VBMUVvQm9DLGtCQUFNQyxTOztlQTZFZHhDLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Rvb2xzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vY29tcG9uZW50c1xuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydC5qc3gnO1xuaW1wb3J0IFN0eWxlU2VsZWN0b3IgZnJvbSAnLi9TdHlsZVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgUHJvZHVjdFRpdGxlQW5kUHJpY2UgZnJvbSAnLi9Qcm9kdWN0VGl0bGVBbmRQcmljZS5qc3gnO1xuaW1wb3J0IFByb2R1Y3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2R1Y3REZXNjcmlwdGlvbi5qc3gnO1xuaW1wb3J0IFNvY2lhbE1lZGlhQnV0dG9ucyBmcm9tICcuL1NvY2lhbE1lZGlhQnV0dG9ucy5qc3gnO1xuaW1wb3J0IEltYWdlR2FsbGVyeURlZmF1bHQgZnJvbSAnLi9JbWFnZUdhbGxlcnlEZWZhdWx0LmpzeCc7XG4vL21pc2NcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IHBhcnNlU2l6ZUZpcnN0U2t1cyBmcm9tICcuL3NpemVGaXJzdFNrdXMuanMnO1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0SW5mbzoge30sXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRTdHlsZToge30sXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRTdHlsZXMocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgdGhlIHN0eWxlcyBhdmFpbGFibGUgb24gc2luZ2xlL3NwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfS9zdHlsZXNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0IGluZm8gZm9yIHNwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAse1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlU3R5bGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRTdHlsZTogdGhpcy5zdGF0ZS5zdHlsZXNbZS50YXJnZXQudGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmdldFByb2R1Y3RJbmZvKHRoaXMucHJvcHMucHJvZHVjdElkKSxcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKHRoaXMucHJvcHMucHJvZHVjdElkKVxuICAgIF0pXG4gICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RJbmZvOiB2YWx1ZXNbMF0uZGF0YSxcbiAgICAgICAgc3R5bGVzOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzLFxuICAgICAgICBzZWxlY3RlZFN0eWxlOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzWzBdLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5TdHlsZXMgbG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICB2YXIgc2l6ZUZpcnN0U2t1cyA9IHBhcnNlU2l6ZUZpcnN0U2t1cyh0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUuc2t1cyk7XG4gICAgdmFyIHNpemVzID0gT2JqZWN0LmtleXMoc2l6ZUZpcnN0U2t1cyk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJ2aWV3JyBrZXk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5uYW1lfT5cbiAgICAgICAgPFByb2R1Y3RUaXRsZUFuZFByaWNlIHByb2R1Y3RJbmZvPXt0aGlzLnN0YXRlLnByb2R1Y3RJbmZvfSBzdGFyUmF0aW5nPXt0aGlzLnByb3BzLnN0YXJSYXRpbmd9IHByaWNlPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUub3JpZ2luYWxfcHJpY2V9IHNhbGVQcmljZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLnNhbGVfcHJpY2V9IHJhdGluZ3M9e3RoaXMucHJvcHMucmF0aW5nc30vPlxuICAgICAgICA8SW1hZ2VHYWxsZXJ5RGVmYXVsdCBpbWFnZXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTdHlsZS5waG90b3N9IHN0eWxlTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLm5hbWV9IC8+XG4gICAgICAgIDxBZGRUb0NhcnQgc2l6ZUZpcnN0U2t1cz17c2l6ZUZpcnN0U2t1c30gc2l6ZXM9e3NpemVzfSAvPlxuICAgICAgICA8U3R5bGVTZWxlY3RvciBzdHlsZXM9e3RoaXMuc3RhdGUuc3R5bGVzfSBzZWxlY3RlZFN0eWxlPXt0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGV9IGNoYW5nZVN0eWxlPXt0aGlzLmNoYW5nZVN0eWxlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxQcm9kdWN0RGVzY3JpcHRpb24gcHJvZHVjdEluZm89e3RoaXMuc3RhdGUucHJvZHVjdEluZm99IC8+XG4gICAgICAgIDxTb2NpYWxNZWRpYUJ1dHRvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiJdfQ==