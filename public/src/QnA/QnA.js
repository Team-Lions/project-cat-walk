"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = _interopRequireDefault(require("react-bootstrap"));

var _QnAList = _interopRequireDefault(require("./QnAList.jsx"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var QnA = /*#__PURE__*/function (_Component) {
  _inherits(QnA, _Component);

  var _super = _createSuper(QnA);

  function QnA(props) {
    var _this;

    _classCallCheck(this, QnA);

    _this = _super.call(this, props);
    _this.state = {
      data: []
    };
    _this.getQuestions = _this.getQuestions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QnA, [{
    key: "getQuestions",
    value: function getQuestions(id) {
      var _this2 = this;

      return _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions", {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: id,
          page: 1,
          count: 5
        }
      }).then(function (questions) {
        _this2.setState({
          data: questions.data.results
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQuestions(this.props.productID);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Questions and Answers"), /*#__PURE__*/_react["default"].createElement(_QnAList["default"], {
        data: this.state.data
      }));
    }
  }]);

  return QnA;
}(_react.Component); //minor changes


var _default = QnA;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQS5qc3giXSwibmFtZXMiOlsiUW5BIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJnZXRRdWVzdGlvbnMiLCJiaW5kIiwiaWQiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJwYWdlIiwiY291bnQiLCJ0aGVuIiwicXVlc3Rpb25zIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJRCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRTtBQURLLEtBQWI7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQVBpQjtBQVFsQjs7OztXQUdELHNCQUFhQyxFQUFiLEVBQWlCO0FBQUE7O0FBQ2YsYUFBT0Msa0JBQU1DLEdBQU4sb0VBQTZFO0FBQ2xGQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFYsU0FEeUU7QUFJbEZDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxVQUFVLEVBQUVOLEVBRE47QUFFTk8sVUFBQUEsSUFBSSxFQUFFLENBRkE7QUFHTkMsVUFBQUEsS0FBSyxFQUFFO0FBSEQ7QUFKMEUsT0FBN0UsRUFVTkMsSUFWTSxDQVVELFVBQUNDLFNBQUQsRUFBZTtBQUNuQixRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNkLFVBQUFBLElBQUksRUFBRWEsU0FBUyxDQUFDYixJQUFWLENBQWVlO0FBQXRCLFNBQWQ7QUFFRCxPQWJNLFdBY0EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsT0FoQk0sQ0FBUDtBQWlCRDs7O1dBRUQsNkJBQW9CO0FBQ2xCLFdBQUtmLFlBQUwsQ0FBa0IsS0FBS0gsS0FBTCxDQUFXcUIsU0FBN0I7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSwwREFDRSxvRUFERixlQUVFLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV0M7QUFBMUIsUUFGRixDQURGO0FBTUQ7Ozs7RUEzQ2VvQixnQixHQTZDbEI7OztlQUNldkIsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJvb3RzdHJhcCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgUW5BTGlzdCBmcm9tICcuL1FuQUxpc3QuanN4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcblxuY2xhc3MgUW5BIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW11cbiAgICB9XG5cbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGdldFF1ZXN0aW9ucyhpZCkge1xuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3FhL3F1ZXN0aW9uc2AsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBpZCxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgY291bnQ6IDVcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChxdWVzdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHF1ZXN0aW9ucy5kYXRhLnJlc3VsdHN9XG4gICAgICApO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zKHRoaXMucHJvcHMucHJvZHVjdElEKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlF1ZXN0aW9ucyBhbmQgQW5zd2VyczwvaDE+XG4gICAgICAgIDxRbkFMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4vL21pbm9yIGNoYW5nZXNcbmV4cG9ydCBkZWZhdWx0IFFuQTsiXX0=