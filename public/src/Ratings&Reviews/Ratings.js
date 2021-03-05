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

var Ratings = /*#__PURE__*/function (_React$Component) {
  _inherits(Ratings, _React$Component);

  var _super = _createSuper(Ratings);

  function Ratings(props) {
    var _this;

    _classCallCheck(this, Ratings);

    _this = _super.call(this, props);
    _this.state = {
      values: ''
    };
    return _this;
  } // componentDidMount() {
  // 	axios
  // 		.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/', {
  // 			headers: {
  // 				"Authorization": 'fa912ab9e634977280cf067e1632685789a10cc1',
  // 			},
  // 			params: {
  // 				product_id: 21112,
  // 			},
  // 		})
  // 		.then((res) => {
  // 			console.log(res.data);
  // 		})
  // 		.catch((error) => {
  // 			console.error(error);
  // 		});
  // }


  _createClass(Ratings, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "dfjghdfkjghk"));
    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwidmFsdWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDTCxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxNQUFNLEVBQUU7QUFESSxLQUFiO0FBRmtCO0FBS2xCLEcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUVBLGtCQUFTO0FBQ1IsMEJBQ0MsMERBQ0MsMkRBREQsQ0FERDtBQUtBOzs7O0VBaENvQkMsa0JBQU1DLFM7O2VBbUNiTCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFJhdGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWVzOiAnJyxcblx0XHR9O1xuXHR9XG5cblx0Ly8gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdC8vIFx0YXhpb3Ncblx0Ly8gXHRcdC5nZXQoJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Jldmlld3MvJywge1xuXHQvLyBcdFx0XHRoZWFkZXJzOiB7XG5cdC8vIFx0XHRcdFx0XCJBdXRob3JpemF0aW9uXCI6ICdmYTkxMmFiOWU2MzQ5NzcyODBjZjA2N2UxNjMyNjg1Nzg5YTEwY2MxJyxcblx0Ly8gXHRcdFx0fSxcblx0Ly8gXHRcdFx0cGFyYW1zOiB7XG5cdC8vIFx0XHRcdFx0cHJvZHVjdF9pZDogMjExMTIsXG5cdC8vIFx0XHRcdH0sXG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0Ly8gXHRcdH0pO1xuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDE+ZGZqZ2hkZmtqZ2hrPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nczsiXX0=