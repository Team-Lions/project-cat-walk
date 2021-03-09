"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

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

var Rating = /*#__PURE__*/function (_React$Component) {
  _inherits(Rating, _React$Component);

  var _super = _createSuper(Rating);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _super.call(this, props);
    _this.state = {
      values: ''
    };
    return _this;
  }

  _createClass(Rating, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _axios["default"].get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/', {
        headers: {
          "Authorization": 'df667317a900700ab8209e5799e288a47fe25e9b'
        },
        params: {
          product_id: 21112
        }
      }).then(function (res) {
        console.log(res.data);
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Helen"));
    }
  }]);

  return Rating;
}(_react["default"].Component);

var _default = Rating;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZy5qc3giXSwibmFtZXMiOlsiUmF0aW5nIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlcyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7O0FBQ0wsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsTUFBQUEsTUFBTSxFQUFFO0FBREksS0FBYjtBQUZrQjtBQUtsQjs7OztXQUVELDZCQUFvQjtBQUNuQkMsd0JBQ0VDLEdBREYsQ0FDTSw4REFETixFQUNzRTtBQUNwRUMsUUFBQUEsT0FBTyxFQUFFO0FBQ1IsMkJBQWlCO0FBRFQsU0FEMkQ7QUFJcEVDLFFBQUFBLE1BQU0sRUFBRTtBQUNQQyxVQUFBQSxVQUFVLEVBQUU7QUFETDtBQUo0RCxPQUR0RSxFQVNFQyxJQVRGLENBU08sVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0EsT0FYRixXQVlRLFVBQUNDLEtBQUQsRUFBVztBQUNqQkgsUUFBQUEsT0FBTyxDQUFDRyxLQUFSLENBQWNBLEtBQWQ7QUFDQSxPQWRGO0FBZUE7OztXQUVELGtCQUFTO0FBQ1IsMEJBQ0MsMERBQ0Msb0RBREQsQ0FERDtBQUtBOzs7O0VBaENtQkMsa0JBQU1DLFM7O2VBbUNaaEIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBSYXRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWVzOiAnJyxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YXhpb3Ncblx0XHRcdC5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLycsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiAnZGY2NjczMTdhOTAwNzAwYWI4MjA5ZTU3OTllMjg4YTQ3ZmUyNWU5YicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdHByb2R1Y3RfaWQ6IDIxMTEyLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPkhlbGVuPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nOyJdfQ==