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

var _rcScrollbars = require("rc-scrollbars");

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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Questions and Answers"), /*#__PURE__*/_react["default"].createElement(_rcScrollbars.Scrollbars, {
        style: {
          width: 500,
          height: 300
        }
      }, /*#__PURE__*/_react["default"].createElement(_QnAList["default"], {
        data: this.state.data
      })));
    }
  }]);

  return QnA;
}(_react.Component); //minor changes


var _default = QnA;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQS5qc3giXSwibmFtZXMiOlsiUW5BIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJnZXRRdWVzdGlvbnMiLCJiaW5kIiwiaWQiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJ0b2tlbiIsInBhcmFtcyIsInByb2R1Y3RfaWQiLCJwYWdlIiwiY291bnQiLCJ0aGVuIiwicXVlc3Rpb25zIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJRCIsIndpZHRoIiwiaGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFO0FBREssS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBUGlCO0FBUWxCOzs7O1dBR0Qsc0JBQWFDLEVBQWIsRUFBaUI7QUFBQTs7QUFDZixhQUFPQyxrQkFBTUMsR0FBTixvRUFBNkU7QUFDbEZDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQUR5RTtBQUlsRkMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRU4sRUFETjtBQUVOTyxVQUFBQSxJQUFJLEVBQUUsQ0FGQTtBQUdOQyxVQUFBQSxLQUFLLEVBQUU7QUFIRDtBQUowRSxPQUE3RSxFQVVOQyxJQVZNLENBVUQsVUFBQ0MsU0FBRCxFQUFlO0FBQ25CLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2QsVUFBQUEsSUFBSSxFQUFFYSxTQUFTLENBQUNiLElBQVYsQ0FBZWU7QUFBdEIsU0FBZDtBQUVELE9BYk0sV0FjQSxVQUFDQyxHQUFELEVBQVM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQWhCTSxDQUFQO0FBaUJEOzs7V0FFRCw2QkFBb0I7QUFDbEIsV0FBS2YsWUFBTCxDQUFrQixLQUFLSCxLQUFMLENBQVdxQixTQUE3QjtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLDBEQUNFLG9FQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFBWSxRQUFBLEtBQUssRUFBRTtBQUFDQyxVQUFBQSxLQUFLLEVBQUUsR0FBUjtBQUFhQyxVQUFBQSxNQUFNLEVBQUU7QUFBckI7QUFBbkIsc0JBQ0UsZ0NBQUMsbUJBQUQ7QUFBUyxRQUFBLElBQUksRUFBRSxLQUFLdEIsS0FBTCxDQUFXQztBQUExQixRQURGLENBRkYsQ0FERjtBQVFEOzs7O0VBN0Nlc0IsZ0IsR0ErQ2xCOzs7ZUFDZXpCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBib290c3RyYXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFFuQUxpc3QgZnJvbSAnLi9RbkFMaXN0LmpzeCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQge1Njcm9sbGJhcnN9IGZyb20gJ3JjLXNjcm9sbGJhcnMnO1xuXG5jbGFzcyBRbkEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXVxuICAgIH1cblxuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgZ2V0UXVlc3Rpb25zKGlkKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcWEvcXVlc3Rpb25zYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IGlkLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBjb3VudDogNVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKHF1ZXN0aW9ucykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcXVlc3Rpb25zLmRhdGEucmVzdWx0c31cbiAgICAgICk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRRdWVzdGlvbnModGhpcy5wcm9wcy5wcm9kdWN0SUQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UXVlc3Rpb25zIGFuZCBBbnN3ZXJzPC9oMT5cbiAgICAgICAgPFNjcm9sbGJhcnMgc3R5bGU9e3t3aWR0aDogNTAwLCBoZWlnaHQ6IDMwMH19PlxuICAgICAgICAgIDxRbkFMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICA8L1Njcm9sbGJhcnM+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbi8vbWlub3IgY2hhbmdlc1xuZXhwb3J0IGRlZmF1bHQgUW5BOyJdfQ==