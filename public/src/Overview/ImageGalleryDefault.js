"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GalleryThumbnail = _styledComponents["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 7%;\n  width: 7%;\n  padding: 2px;\n\n  ", "\n"])), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: 3px solid black;\n  "])));
}); //expected props images (array of objects), name (String)


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
        var selected = false;

        if (index === _this2.state.mainImageIndex) {
          selected = true;
        }

        return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(GalleryThumbnail, {
          selected: selected,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvSW1hZ2VHYWxsZXJ5RGVmYXVsdC5qc3giXSwibmFtZXMiOlsiR2FsbGVyeVRodW1ibmFpbCIsInN0eWxlZCIsImltZyIsInByb3BzIiwic2VsZWN0ZWQiLCJjc3MiLCJJbWFnZUdhbGxlcnlEZWZhdWx0Iiwic3RhdGUiLCJtYWluSW1hZ2VJbmRleCIsImUiLCJzZXRTdGF0ZSIsImluZGV4IiwiaW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJ0aHVtYm5haWxfdXJsIiwiY2hhbmdlSW1hZ2UiLCJuZXh0SW1hZ2VMZWZ0IiwiYmluZCIsIm5hbWUiLCJsZW5ndGgiLCJuZXh0SW1hZ2VSaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsNkJBQU9DLEdBQVYsZ0lBS2xCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQU4sUUFBa0JDLHFCQUFsQixpSEFBSjtBQUFBLENBTGEsQ0FBdEIsQyxDQVVBOzs7SUFDTUMsbUI7Ozs7O0FBQ0osK0JBQVlILEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFDQSxVQUFLSSxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsY0FBYyxFQUFFO0FBREwsS0FBYjtBQUZpQjtBQUtsQjs7OztXQUVELHdCQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxjQUFYLEdBQTRCO0FBRGhDLE9BQWQ7QUFHRDs7O1dBRUQsdUJBQWNDLENBQWQsRUFBaUI7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkYsUUFBQUEsY0FBYyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsY0FBWCxHQUE0QjtBQURoQyxPQUFkO0FBR0Q7OztXQUVELHFCQUFZRyxLQUFaLEVBQW1CO0FBQ2pCLFdBQUtELFFBQUwsQ0FBYztBQUNaRixRQUFBQSxjQUFjLEVBQUVHO0FBREosT0FBZDtBQUdEOzs7V0FFRCxrQkFBUztBQUFBOztBQUNQLFVBQUlDLE1BQU0sR0FBRyxLQUFLVCxLQUFMLENBQVdTLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUgsS0FBUixFQUFrQjtBQUNuRCxZQUFJUCxRQUFRLEdBQUcsS0FBZjs7QUFDQSxZQUFJTyxLQUFLLEtBQUssTUFBSSxDQUFDSixLQUFMLENBQVdDLGNBQXpCLEVBQXlDO0FBQ3ZDSixVQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUNEOztBQUNELDRCQUNFLHlEQUNFLGdDQUFDLGdCQUFEO0FBQWtCLFVBQUEsUUFBUSxFQUFFQSxRQUE1QjtBQUFzQyxVQUFBLEdBQUcsRUFBRVUsS0FBSyxDQUFDQyxhQUFqRDtBQUFnRSxVQUFBLEdBQUcsRUFBQyxpQkFBcEU7QUFBc0YsVUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBQyxZQUFBLE1BQUksQ0FBQ0MsV0FBTCxDQUFpQkwsS0FBakI7QUFBd0I7QUFBOUgsVUFERixDQURGO0FBS0QsT0FWWSxDQUFiO0FBV0EsMEJBQ0UsNkNBQ0csS0FBS0osS0FBTCxDQUFXQyxjQUFYLEtBQThCLENBQTlCLGdCQUNDLDRDQURELGdCQUdDO0FBQVEsUUFBQSxPQUFPLEVBQUUsS0FBS1MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFBakIsc0JBQWdELGtEQUFoRCxDQUpKLGVBTUU7QUFBSyxRQUFBLEVBQUUsRUFBQyxXQUFSO0FBQW9CLFFBQUEsR0FBRyxFQUFFLEtBQUtmLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixLQUFLTCxLQUFMLENBQVdDLGNBQTdCLEVBQTZDTyxhQUF0RTtBQUFxRixRQUFBLEdBQUcsRUFBRSxLQUFLWixLQUFMLENBQVdnQjtBQUFyRyxRQU5GLEVBT0csS0FBS1osS0FBTCxDQUFXQyxjQUFYLEtBQStCLEtBQUtMLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQlEsTUFBbEIsR0FBMkIsQ0FBMUQsZ0JBQ0MsNENBREQsZ0JBR0M7QUFBUSxRQUFBLE9BQU8sRUFBRSxLQUFLQyxjQUFMLENBQW9CSCxJQUFwQixDQUF5QixJQUF6QjtBQUFqQixzQkFBaUQsbURBQWpELENBVkosZUFZRSw0Q0FBS04sTUFBTCxDQVpGLENBREY7QUFnQkQ7Ozs7RUF0RCtCVSxrQkFBTUMsUzs7QUF1RHZDO2VBRWNqQixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgR2FsbGVyeVRodW1ibmFpbCA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDogNyU7XG4gIHdpZHRoOiA3JTtcbiAgcGFkZGluZzogMnB4O1xuXG4gICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgJiYgY3NzIGBcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gIGB9XG5gO1xuXG4vL2V4cGVjdGVkIHByb3BzIGltYWdlcyAoYXJyYXkgb2Ygb2JqZWN0cyksIG5hbWUgKFN0cmluZylcbmNsYXNzIEltYWdlR2FsbGVyeURlZmF1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiAwXG4gICAgfVxuICB9XG5cbiAgbmV4dEltYWdlUmlnaHQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFpbkltYWdlSW5kZXg6IHRoaXMuc3RhdGUubWFpbkltYWdlSW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICBuZXh0SW1hZ2VMZWZ0KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiB0aGlzLnN0YXRlLm1haW5JbWFnZUluZGV4IC0gMVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlSW1hZ2UoaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1haW5JbWFnZUluZGV4OiBpbmRleFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBpbWFnZXMgPSB0aGlzLnByb3BzLmltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuc3RhdGUubWFpbkltYWdlSW5kZXgpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxHYWxsZXJ5VGh1bWJuYWlsIHNlbGVjdGVkPXtzZWxlY3RlZH0gc3JjPXtpbWFnZS50aHVtYm5haWxfdXJsfSBhbHQ9XCJhbHRlcm5hdGUgaW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5jaGFuZ2VJbWFnZShpbmRleCl9fT48L0dhbGxlcnlUaHVtYm5haWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLm1haW5JbWFnZUluZGV4ID09PSAwID9cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubmV4dEltYWdlTGVmdC5iaW5kKHRoaXMpfT48Yj5sZWZ0PC9iPjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIDxpbWcgaWQ9XCJtYWluSW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2VzW3RoaXMuc3RhdGUubWFpbkltYWdlSW5kZXhdLnRodW1ibmFpbF91cmx9IGFsdD17dGhpcy5wcm9wcy5uYW1lfT48L2ltZz5cbiAgICAgICAge3RoaXMuc3RhdGUubWFpbkltYWdlSW5kZXggPT09ICh0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggLSAxKSA/XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm5leHRJbWFnZVJpZ2h0LmJpbmQodGhpcyl9PjxiPnJpZ2h0PC9iPjwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIDx1bD57aW1hZ2VzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnlEZWZhdWx0OyJdfQ==