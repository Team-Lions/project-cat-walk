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
      return /*#__PURE__*/_react["default"].createElement("img", {
        id: "mainImage",
        src: this.props.images[this.state.mainImageIndex].thumbnail_url,
        alt: this.props.name
      });
    }
  }]);

  return ImageGalleryDefault;
}(_react["default"].Component);

;
var _default = ImageGalleryDefault;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvSW1hZ2VHYWxsZXJ5RGVmYXVsdC5qc3giXSwibmFtZXMiOlsiSW1hZ2VHYWxsZXJ5RGVmYXVsdCIsInByb3BzIiwic3RhdGUiLCJtYWluSW1hZ2VJbmRleCIsImUiLCJpbWFnZXMiLCJ0aHVtYm5haWxfdXJsIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDTUEsbUI7Ozs7O0FBQ0osK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsY0FBYyxFQUFFO0FBREwsS0FBYjtBQUZpQjtBQUtsQjs7OztXQUVELHdCQUFlQyxDQUFmLEVBQWtCLENBRWpCOzs7V0FFRCx1QkFBY0EsQ0FBZCxFQUFpQixDQUVoQjs7O1dBRUQscUJBQVlBLENBQVosRUFBZSxDQUVkOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNFO0FBQUssUUFBQSxFQUFFLEVBQUMsV0FBUjtBQUFvQixRQUFBLEdBQUcsRUFBRSxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsS0FBS0gsS0FBTCxDQUFXQyxjQUE3QixFQUE2Q0csYUFBdEU7QUFBcUYsUUFBQSxHQUFHLEVBQUUsS0FBS0wsS0FBTCxDQUFXTTtBQUFyRyxRQURGO0FBR0Q7Ozs7RUF4QitCQyxrQkFBTUMsUzs7QUF5QnZDO2VBRWNULG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9leHBlY3RlZCBwcm9wcyBpbWFnZXMgKGFycmF5IG9mIG9iamVjdHMpLCBuYW1lIChTdHJpbmcpXG5jbGFzcyBJbWFnZUdhbGxlcnlEZWZhdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtYWluSW1hZ2VJbmRleDogMFxuICAgIH1cbiAgfVxuXG4gIG5leHRJbWFnZVJpZ2h0KGUpIHtcblxuICB9XG5cbiAgbmV4dEltYWdlTGVmdChlKSB7XG5cbiAgfVxuXG4gIGNoYW5nZUltYWdlKGUpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW1nIGlkPVwibWFpbkltYWdlXCIgc3JjPXt0aGlzLnByb3BzLmltYWdlc1t0aGlzLnN0YXRlLm1haW5JbWFnZUluZGV4XS50aHVtYm5haWxfdXJsfSBhbHQ9e3RoaXMucHJvcHMubmFtZX0+PC9pbWc+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHYWxsZXJ5RGVmYXVsdDsiXX0=