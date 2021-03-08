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
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "RatingsAndReviews"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "dfjghdfkjghk"));
    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwidmFsdWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDTCxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxNQUFNLEVBQUU7QUFESSxLQUFiO0FBRmtCO0FBS2xCLEcsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUVBLGtCQUFTO0FBQ1IsMEJBQ0M7QUFBSyxRQUFBLEVBQUUsRUFBQztBQUFSLHNCQUNDLDJEQURELENBREQ7QUFLQTs7OztFQWhDb0JDLGtCQUFNQyxTOztlQW1DYkwsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBSYXRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlczogJycsXG5cdFx0fTtcblx0fVxuXG5cdC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHQvLyBcdGF4aW9zXG5cdC8vIFx0XHQuZ2V0KCdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9yZXZpZXdzLycsIHtcblx0Ly8gXHRcdFx0aGVhZGVyczoge1xuXHQvLyBcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiAnZmE5MTJhYjllNjM0OTc3MjgwY2YwNjdlMTYzMjY4NTc4OWExMGNjMScsXG5cdC8vIFx0XHRcdH0sXG5cdC8vIFx0XHRcdHBhcmFtczoge1xuXHQvLyBcdFx0XHRcdHByb2R1Y3RfaWQ6IDIxMTEyLFxuXHQvLyBcdFx0XHR9LFxuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC50aGVuKChyZXMpID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdC8vIFx0XHR9KTtcblx0Ly8gfVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIlJhdGluZ3NBbmRSZXZpZXdzXCI+XG5cdFx0XHRcdDxoMT5kZmpnaGRma2pnaGs8L2gxPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdzOyJdfQ==