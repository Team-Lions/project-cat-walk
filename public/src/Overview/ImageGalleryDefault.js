"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

//expected props images (array of objects), name (String)
var ImageGalleryDefault = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageGalleryDefault, _React$Component);

  var _super = _createSuper(ImageGalleryDefault);

  function ImageGalleryDefault(props) {
    var _this;

    _classCallCheck(this, ImageGalleryDefault);

    _this = _super.call(this, props);
    _this.state = {
      mainImageIndex: 0
    };
    return _this;
  }

  _createClass(ImageGalleryDefault, [{
    key: "nextImageRight",
    value: function nextImageRight(e) {
      this.setState({
        mainImageIndex: this.state.mainImageIndex + 1
      });
    }
  }, {
    key: "nextImageLeft",
    value: function nextImageLeft(e) {
      this.setState({
        mainImageIndex: this.state.mainImageIndex - 1
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage(index) {
      this.setState({
        mainImageIndex: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.props.images.map(function (image, index) {
        if (index === _this2.state.mainImageIndex) {
          return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
            id: "mainImageThumbnail",
            className: "imageGalleryList",
            src: image.thumbnail_url,
            alt: "alternate image",
            onClick: function onClick() {
              _this2.changeImage(index);
            }
          }));
        }

        return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
          className: "imageGalleryList",
          src: image.thumbnail_url,
          alt: "alternate image",
          onClick: function onClick() {
            _this2.changeImage(index);
          }
        }));
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.mainImageIndex === 0 ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.nextImageLeft.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("b", null, "left")), /*#__PURE__*/_react["default"].createElement("img", {
        id: "mainImage",
        src: this.props.images[this.state.mainImageIndex].thumbnail_url,
        alt: this.props.name
      }), this.state.mainImageIndex === this.props.images.length - 1 ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.nextImageRight.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("b", null, "right")), /*#__PURE__*/_react["default"].createElement("ul", null, images));
    }
  }]);

  return ImageGalleryDefault;
}(_react["default"].Component);

;
var _default = ImageGalleryDefault;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvSW1hZ2VHYWxsZXJ5RGVmYXVsdC5qc3giXSwibmFtZXMiOlsiSW1hZ2VHYWxsZXJ5RGVmYXVsdCIsInByb3BzIiwic3RhdGUiLCJtYWluSW1hZ2VJbmRleCIsImUiLCJzZXRTdGF0ZSIsImluZGV4IiwiaW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJ0aHVtYm5haWxfdXJsIiwiY2hhbmdlSW1hZ2UiLCJuZXh0SW1hZ2VMZWZ0IiwiYmluZCIsIm5hbWUiLCJsZW5ndGgiLCJuZXh0SW1hZ2VSaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDTUEsbUI7Ozs7O0FBQ0osK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsY0FBYyxFQUFFO0FBREwsS0FBYjtBQUZpQjtBQUtsQjs7OztXQUVELHdCQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxjQUFYLEdBQTRCO0FBRGhDLE9BQWQ7QUFHRDs7O1dBRUQsdUJBQWNDLENBQWQsRUFBaUI7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkYsUUFBQUEsY0FBYyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsY0FBWCxHQUE0QjtBQURoQyxPQUFkO0FBR0Q7OztXQUVELHFCQUFZRyxLQUFaLEVBQW1CO0FBQ2pCLFdBQUtELFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUVHO0FBREosT0FBZDtBQUdEOzs7V0FFRCxrQkFBUztBQUFBOztBQUNQLFVBQUlDLE1BQU0sR0FBRyxLQUFLTixLQUFMLENBQVdNLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUgsS0FBUixFQUFrQjtBQUNuRCxZQUFJQSxLQUFLLEtBQUssTUFBSSxDQUFDSixLQUFMLENBQVdDLGNBQXpCLEVBQXlDO0FBQ3ZDLDhCQUNFLHlEQUNFO0FBQUssWUFBQSxFQUFFLEVBQUMsb0JBQVI7QUFBNkIsWUFBQSxTQUFTLEVBQUMsa0JBQXZDO0FBQTBELFlBQUEsR0FBRyxFQUFFTSxLQUFLLENBQUNDLGFBQXJFO0FBQW9GLFlBQUEsR0FBRyxFQUFDLGlCQUF4RjtBQUEwRyxZQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUFDLGNBQUEsTUFBSSxDQUFDQyxXQUFMLENBQWlCTCxLQUFqQjtBQUF3QjtBQUFsSixZQURGLENBREY7QUFLRDs7QUFDRCw0QkFDRSx5REFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQWtDLFVBQUEsR0FBRyxFQUFFRyxLQUFLLENBQUNDLGFBQTdDO0FBQTRELFVBQUEsR0FBRyxFQUFDLGlCQUFoRTtBQUFrRixVQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUFDLFlBQUEsTUFBSSxDQUFDQyxXQUFMLENBQWlCTCxLQUFqQjtBQUF3QjtBQUExSCxVQURGLENBREY7QUFLRCxPQWJZLENBQWI7QUFjQSwwQkFDRSw2Q0FDRyxLQUFLSixLQUFMLENBQVdDLGNBQVgsS0FBOEIsQ0FBOUIsZ0JBQ0MsNENBREQsZ0JBR0M7QUFBUSxRQUFBLE9BQU8sRUFBRSxLQUFLUyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQUFqQixzQkFBZ0Qsa0RBQWhELENBSkosZUFNRTtBQUFLLFFBQUEsRUFBRSxFQUFDLFdBQVI7QUFBb0IsUUFBQSxHQUFHLEVBQUUsS0FBS1osS0FBTCxDQUFXTSxNQUFYLENBQWtCLEtBQUtMLEtBQUwsQ0FBV0MsY0FBN0IsRUFBNkNPLGFBQXRFO0FBQXFGLFFBQUEsR0FBRyxFQUFFLEtBQUtULEtBQUwsQ0FBV2E7QUFBckcsUUFORixFQU9HLEtBQUtaLEtBQUwsQ0FBV0MsY0FBWCxLQUErQixLQUFLRixLQUFMLENBQVdNLE1BQVgsQ0FBa0JRLE1BQWxCLEdBQTJCLENBQTFELGdCQUNDLDRDQURELGdCQUdDO0FBQVEsUUFBQSxPQUFPLEVBQUUsS0FBS0MsY0FBTCxDQUFvQkgsSUFBcEIsQ0FBeUIsSUFBekI7QUFBakIsc0JBQWlELG1EQUFqRCxDQVZKLGVBWUUsNENBQUtOLE1BQUwsQ0FaRixDQURGO0FBZ0JEOzs7O0VBekQrQlUsa0JBQU1DLFM7O0FBMER2QztlQUVjbEIsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vL2V4cGVjdGVkIHByb3BzIGltYWdlcyAoYXJyYXkgb2Ygb2JqZWN0cyksIG5hbWUgKFN0cmluZylcbmNsYXNzIEltYWdlR2FsbGVyeURlZmF1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiAwXG4gICAgfVxuICB9XG5cbiAgbmV4dEltYWdlUmlnaHQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFpbkltYWdlSW5kZXg6IHRoaXMuc3RhdGUubWFpbkltYWdlSW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICBuZXh0SW1hZ2VMZWZ0KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiB0aGlzLnN0YXRlLm1haW5JbWFnZUluZGV4IC0gMVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlSW1hZ2UoaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiBpbmRleFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBpbWFnZXMgPSB0aGlzLnByb3BzLmltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLnN0YXRlLm1haW5JbWFnZUluZGV4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGltZyBpZD1cIm1haW5JbWFnZVRodW1ibmFpbFwiIGNsYXNzTmFtZT1cImltYWdlR2FsbGVyeUxpc3RcIiBzcmM9e2ltYWdlLnRodW1ibmFpbF91cmx9IGFsdD1cImFsdGVybmF0ZSBpbWFnZVwiIG9uQ2xpY2s9eygpID0+IHt0aGlzLmNoYW5nZUltYWdlKGluZGV4KX19PjwvaW1nPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZUdhbGxlcnlMaXN0XCIgc3JjPXtpbWFnZS50aHVtYm5haWxfdXJsfSBhbHQ9XCJhbHRlcm5hdGUgaW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5jaGFuZ2VJbWFnZShpbmRleCl9fT48L2ltZz5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubWFpbkltYWdlSW5kZXggPT09IDAgP1xuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5uZXh0SW1hZ2VMZWZ0LmJpbmQodGhpcyl9PjxiPmxlZnQ8L2I+PC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgPGltZyBpZD1cIm1haW5JbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZXNbdGhpcy5zdGF0ZS5tYWluSW1hZ2VJbmRleF0udGh1bWJuYWlsX3VybH0gYWx0PXt0aGlzLnByb3BzLm5hbWV9PjwvaW1nPlxuICAgICAgICB7dGhpcy5zdGF0ZS5tYWluSW1hZ2VJbmRleCA9PT0gKHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpID9cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubmV4dEltYWdlUmlnaHQuYmluZCh0aGlzKX0+PGI+cmlnaHQ8L2I+PC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgPHVsPntpbWFnZXN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeURlZmF1bHQ7Il19