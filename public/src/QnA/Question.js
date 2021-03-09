"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

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

var Question = /*#__PURE__*/function (_React$Component) {
  _inherits(Question, _React$Component);

  var _super = _createSuper(Question);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Q:"), /*#__PURE__*/_react["default"].createElement("h3", null, this.props.question.question_body), this.props.answers.map(function (answer) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "A:"), /*#__PURE__*/_react["default"].createElement("p", null, answer.body), /*#__PURE__*/_react["default"].createElement("h2", null, "Answerer"), /*#__PURE__*/_react["default"].createElement("p", null, answer.answerer_name));
      }));
    }
  }]);

  return Question;
}(_react["default"].Component);

var _default = Question;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1F1ZXN0aW9uLmpzeCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInByb3BzIiwic3RhdGUiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX2JvZHkiLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwiYm9keSIsImFuc3dlcmVyX25hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFIaUI7QUFNbEI7Ozs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLDBEQUNFLGlEQURGLGVBRUUsNENBQUssS0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxhQUF6QixDQUZGLEVBR0csS0FBS0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxNQUFELEVBQVk7QUFDaEMsNEJBQ0UsMERBQ0UsaURBREYsZUFFRSwyQ0FBSUEsTUFBTSxDQUFDQyxJQUFYLENBRkYsZUFHRSx1REFIRixlQUlFLDJDQUFJRCxNQUFNLENBQUNFLGFBQVgsQ0FKRixDQURGO0FBUUQsT0FURixDQUhILENBREY7QUFpQkQ7Ozs7RUEzQm9CQyxrQkFBTUMsUzs7ZUFnQ2RYLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQW5zd2VycyBmcm9tIFwiLi9BbnN3ZXJzLmpzeFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5ROjwvaDI+XG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy5xdWVzdGlvbi5xdWVzdGlvbl9ib2R5fTwvaDM+XG4gICAgICAgIHt0aGlzLnByb3BzLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkE6PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57YW5zd2VyLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgIDxoMj5BbnN3ZXJlcjwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e2Fuc3dlci5hbnN3ZXJlcl9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uOyJdfQ==