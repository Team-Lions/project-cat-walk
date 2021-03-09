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
    value: function nextImageRight(e) {}
  }, {
    key: "nextImageLeft",
    value: function nextImageLeft(e) {}
  }, {
    key: "changeImage",
    value: function changeImage(e) {}
  }, {
    key: "render",
    value: function render() {
      var images = this.props.images.map(function (image, index) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          title: index
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "imageGalleryList",
          src: image.thumbnail_url,
          alt: "alternate image"
        }));
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
        id: "mainImage",
        src: this.props.images[this.state.mainImageIndex].thumbnail_url,
        alt: this.props.name
      }), /*#__PURE__*/_react["default"].createElement("ul", null, images));
    }
  }]);

  return ImageGalleryDefault;
}(_react["default"].Component);

;
var _default = ImageGalleryDefault;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvSW1hZ2VHYWxsZXJ5RGVmYXVsdC5qc3giXSwibmFtZXMiOlsiSW1hZ2VHYWxsZXJ5RGVmYXVsdCIsInByb3BzIiwic3RhdGUiLCJtYWluSW1hZ2VJbmRleCIsImUiLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwidGh1bWJuYWlsX3VybCIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ01BLG1COzs7OztBQUNKLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGNBQWMsRUFBRTtBQURMLEtBQWI7QUFGaUI7QUFLbEI7Ozs7V0FFRCx3QkFBZUMsQ0FBZixFQUFrQixDQUVqQjs7O1dBRUQsdUJBQWNBLENBQWQsRUFBaUIsQ0FFaEI7OztXQUVELHFCQUFZQSxDQUFaLEVBQWUsQ0FFZDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJQyxNQUFNLEdBQUcsS0FBS0osS0FBTCxDQUFXSSxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDbkQsNEJBQ0U7QUFBSyxVQUFBLEtBQUssRUFBRUE7QUFBWix3QkFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQWtDLFVBQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNFLGFBQTdDO0FBQTRELFVBQUEsR0FBRyxFQUFDO0FBQWhFLFVBREYsQ0FERjtBQUtELE9BTlksQ0FBYjtBQU9BLDBCQUNFLDBEQUNFO0FBQUssUUFBQSxFQUFFLEVBQUMsV0FBUjtBQUFvQixRQUFBLEdBQUcsRUFBRSxLQUFLUixLQUFMLENBQVdJLE1BQVgsQ0FBa0IsS0FBS0gsS0FBTCxDQUFXQyxjQUE3QixFQUE2Q00sYUFBdEU7QUFBcUYsUUFBQSxHQUFHLEVBQUUsS0FBS1IsS0FBTCxDQUFXUztBQUFyRyxRQURGLGVBRUUsNENBQUtMLE1BQUwsQ0FGRixDQURGO0FBTUQ7Ozs7RUFsQytCTSxrQkFBTUMsUzs7QUFtQ3ZDO2VBRWNaLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9leHBlY3RlZCBwcm9wcyBpbWFnZXMgKGFycmF5IG9mIG9iamVjdHMpLCBuYW1lIChTdHJpbmcpXG5jbGFzcyBJbWFnZUdhbGxlcnlEZWZhdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtYWluSW1hZ2VJbmRleDogMFxuICAgIH1cbiAgfVxuXG4gIG5leHRJbWFnZVJpZ2h0KGUpIHtcblxuICB9XG5cbiAgbmV4dEltYWdlTGVmdChlKSB7XG5cbiAgfVxuXG4gIGNoYW5nZUltYWdlKGUpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBpbWFnZXMgPSB0aGlzLnByb3BzLmltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpICB0aXRsZT17aW5kZXh9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VHYWxsZXJ5TGlzdFwiIHNyYz17aW1hZ2UudGh1bWJuYWlsX3VybH0gYWx0PVwiYWx0ZXJuYXRlIGltYWdlXCI+PC9pbWc+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgaWQ9XCJtYWluSW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2VzW3RoaXMuc3RhdGUubWFpbkltYWdlSW5kZXhdLnRodW1ibmFpbF91cmx9IGFsdD17dGhpcy5wcm9wcy5uYW1lfT48L2ltZz5cbiAgICAgICAgPHVsPntpbWFnZXN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeURlZmF1bHQ7Il19