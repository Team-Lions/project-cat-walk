"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddToCart = _interopRequireDefault(require("./AddToCart.jsx"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _sizeFirstSkus = _interopRequireDefault(require("./sizeFirstSkus.js"));

var _StyleSelector = _interopRequireDefault(require("./StyleSelector.jsx"));

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
        console.log('return from styles get request: ', values[1].data);

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
      }, /*#__PURE__*/_react["default"].createElement(_AddToCart["default"], {
        sizeFirstSkus: sizeFirstSkus,
        sizes: sizes,
        key: this.state.selectedStyle.name
      }), /*#__PURE__*/_react["default"].createElement(_StyleSelector["default"], {
        styles: this.state.styles,
        selectedStyle: this.state.selectedStyle,
        changeStyle: this.changeStyle.bind(this)
      }));
    }
  }]);

  return Overview;
}(_react["default"].Component);

var _default = Overview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk92ZXJ2aWV3IiwicHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RJbmZvIiwic3R5bGVzIiwic2VsZWN0ZWRTdHlsZSIsImlzTG9hZGluZyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInRpdGxlIiwiUHJvbWlzZSIsImFsbCIsImdldFByb2R1Y3RJbmZvIiwiZ2V0U3R5bGVzIiwidGhlbiIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzdWx0cyIsInNpemVGaXJzdFNrdXMiLCJza3VzIiwic2l6ZXMiLCJPYmplY3QiLCJrZXlzIiwibmFtZSIsImNoYW5nZVN0eWxlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsV0FBVyxFQUFFLEVBREY7QUFFWEMsTUFBQUEsTUFBTSxFQUFFLEVBRkc7QUFHWEMsTUFBQUEsYUFBYSxFQUFFLEVBSEo7QUFJWEMsTUFBQUEsU0FBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7OztXQUVELG1CQUFVQyxTQUFWLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQSxhQUFPQyxrQkFBTUMsR0FBTix1RUFBeUVGLFNBQXpFLGNBQTZGO0FBQ2xHRyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFYsU0FEeUY7QUFJbEdDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxVQUFVLEVBQUVOO0FBRE47QUFKMEYsT0FBN0YsQ0FBUDtBQVFEOzs7V0FFRCx3QkFBZUEsU0FBZixFQUEwQjtBQUN4QjtBQUNBO0FBQ0EsYUFBT0Msa0JBQU1DLEdBQU4sdUVBQXlFRixTQUF6RSxHQUFxRjtBQUMxRkcsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRGlGO0FBSTFGQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSmtGLE9BQXJGLENBQVA7QUFRRDs7O1dBRUQscUJBQVlPLENBQVosRUFBZTtBQUNiLFdBQUtDLFFBQUwsQ0FBYztBQUNaVixRQUFBQSxhQUFhLEVBQUUsS0FBS0gsS0FBTCxDQUFXRSxNQUFYLENBQWtCVSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBM0I7QUFESCxPQUFkO0FBR0Q7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDVixLQUFLQyxjQUFMLENBQW9CLEtBQUtuQixLQUFMLENBQVdNLFNBQS9CLENBRFUsRUFFVixLQUFLYyxTQUFMLENBQWUsS0FBS3BCLEtBQUwsQ0FBV00sU0FBMUIsQ0FGVSxDQUFaLEVBSUNlLElBSkQsQ0FJTSxVQUFDQyxNQUFELEVBQVk7QUFDaEJDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaLEVBQWdERixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLElBQTFEOztBQUNBLFFBQUEsTUFBSSxDQUFDWCxRQUFMLENBQWM7QUFDWlosVUFBQUEsV0FBVyxFQUFFb0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxJQURYO0FBRVp0QixVQUFBQSxNQUFNLEVBQUVtQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLElBQVYsQ0FBZUMsT0FGWDtBQUdadEIsVUFBQUEsYUFBYSxFQUFFa0IsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxJQUFWLENBQWVDLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FISDtBQUlackIsVUFBQUEsU0FBUyxFQUFFO0FBSkMsU0FBZDtBQU1ELE9BWkQ7QUFhRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFHLEtBQUtKLEtBQUwsQ0FBV0ksU0FBZCxFQUF5QjtBQUN2Qiw0QkFBTyw4REFBUDtBQUNEOztBQUNELFVBQUlzQixhQUFhLEdBQUcsK0JBQW1CLEtBQUsxQixLQUFMLENBQVdHLGFBQVgsQ0FBeUJ3QixJQUE1QyxDQUFwQjtBQUNBLFVBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLGFBQVosQ0FBWjtBQUNBLDBCQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRSxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsYUFBYSxFQUFFQSxhQUExQjtBQUF5QyxRQUFBLEtBQUssRUFBRUUsS0FBaEQ7QUFBdUQsUUFBQSxHQUFHLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV0csYUFBWCxDQUF5QjRCO0FBQXJGLFFBREYsZUFFRSxnQ0FBQyx5QkFBRDtBQUFlLFFBQUEsTUFBTSxFQUFFLEtBQUsvQixLQUFMLENBQVdFLE1BQWxDO0FBQTBDLFFBQUEsYUFBYSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csYUFBcEU7QUFBbUYsUUFBQSxXQUFXLEVBQUUsS0FBSzZCLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCO0FBQWhHLFFBRkYsQ0FERjtBQU1EOzs7O0VBdkVvQkMsa0JBQU1DLFM7O2VBMEVkckMsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vQWRkVG9DYXJ0LmpzeCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQgcGFyc2VTaXplRmlyc3RTa3VzIGZyb20gJy4vc2l6ZUZpcnN0U2t1cy5qcyc7XG5pbXBvcnQgU3R5bGVTZWxlY3RvciBmcm9tICcuL1N0eWxlU2VsZWN0b3IuanN4J1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0SW5mbzoge30sXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRTdHlsZToge30sXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRTdHlsZXMocHJvZHVjdElkKSB7XG4gICAgLy9yZXF1ZXN0IHRvIGdldCBhbGwgdGhlIHN0eWxlcyBhdmFpbGFibGUgb24gc2luZ2xlL3NwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfS9zdHlsZXNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH0sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SWQpIHtcbiAgICAvL3JlcXVlc3QgdG8gZ2V0IGFsbCBwcm9kdWN0IGluZm8gZm9yIHNwZWNpZmllZCBwcm9kdWN0XG4gICAgLy9yZXR1cm5zIGEgcHJvbWlzZVxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAse1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlU3R5bGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRTdHlsZTogdGhpcy5zdGF0ZS5zdHlsZXNbZS50YXJnZXQudGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLmdldFByb2R1Y3RJbmZvKHRoaXMucHJvcHMucHJvZHVjdElkKSxcbiAgICAgIHRoaXMuZ2V0U3R5bGVzKHRoaXMucHJvcHMucHJvZHVjdElkKVxuICAgIF0pXG4gICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3JldHVybiBmcm9tIHN0eWxlcyBnZXQgcmVxdWVzdDogJywgdmFsdWVzWzFdLmRhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RJbmZvOiB2YWx1ZXNbMF0uZGF0YSxcbiAgICAgICAgc3R5bGVzOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzLFxuICAgICAgICBzZWxlY3RlZFN0eWxlOiB2YWx1ZXNbMV0uZGF0YS5yZXN1bHRzWzBdLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5TdHlsZXMgbG9hZGluZzwvZGl2PlxuICAgIH1cbiAgICB2YXIgc2l6ZUZpcnN0U2t1cyA9IHBhcnNlU2l6ZUZpcnN0U2t1cyh0aGlzLnN0YXRlLnNlbGVjdGVkU3R5bGUuc2t1cyk7XG4gICAgdmFyIHNpemVzID0gT2JqZWN0LmtleXMoc2l6ZUZpcnN0U2t1cyk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJ2aWV3Jz5cbiAgICAgICAgPEFkZFRvQ2FydCBzaXplRmlyc3RTa3VzPXtzaXplRmlyc3RTa3VzfSBzaXplcz17c2l6ZXN9IGtleT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlLm5hbWV9Lz5cbiAgICAgICAgPFN0eWxlU2VsZWN0b3Igc3R5bGVzPXt0aGlzLnN0YXRlLnN0eWxlc30gc2VsZWN0ZWRTdHlsZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0eWxlfSBjaGFuZ2VTdHlsZT17dGhpcy5jaGFuZ2VTdHlsZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIl19