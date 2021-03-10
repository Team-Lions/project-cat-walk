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

var itemsPerPage = 2;

var QnA = /*#__PURE__*/function (_Component) {
  _inherits(QnA, _Component);

  var _super = _createSuper(QnA);

  function QnA(props) {
    var _this;

    _classCallCheck(this, QnA);

    _this = _super.call(this, props);
    _this.state = {
      data: [],
      index: 2,
      id: _this.props.productID
    };
    _this.getQuestions = _this.getQuestions.bind(_assertThisInitialized(_this));
    _this.loadMore = _this.loadMore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QnA, [{
    key: "getQuestions",
    value: function getQuestions(id, index) {
      var _this2 = this;

      return _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions", {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: id
        }
      }).then(function (questions) {
        _this2.setState({
          data: questions.data.results.slice(0, index)
        });

        _this2.setState({
          id: id
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "loadMore",
    value: function loadMore() {
      var _this3 = this;

      this.setState({
        index: this.state.index += 1
      });
      this.getQuestions(this.props.productID, this.state.index).then(function (data) {
        _this3.setState({
          data: data(0, _this3.state.index)
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQuestions(this.props.productID, this.state.index);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Questions and Answers"), this.state.data && /*#__PURE__*/_react["default"].createElement(_QnAList["default"], {
        data: this.state.data,
        answers: this.state.data.answers,
        loadMore: this.loadMore
      }));
    }
  }]);

  return QnA;
}(_react.Component); //minor changes


var _default = QnA;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQS5qc3giXSwibmFtZXMiOlsiaXRlbXNQZXJQYWdlIiwiUW5BIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJpbmRleCIsImlkIiwicHJvZHVjdElEIiwiZ2V0UXVlc3Rpb25zIiwiYmluZCIsImxvYWRNb3JlIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidG9rZW4iLCJwYXJhbXMiLCJwcm9kdWN0X2lkIiwidGhlbiIsInF1ZXN0aW9ucyIsInNldFN0YXRlIiwicmVzdWx0cyIsInNsaWNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFuc3dlcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQXJCOztJQUVNQyxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLEVBREs7QUFFWEMsTUFBQUEsS0FBSyxFQUFFLENBRkk7QUFHWEMsTUFBQUEsRUFBRSxFQUFFLE1BQUtKLEtBQUwsQ0FBV0s7QUFISixLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCwrQkFBaEI7QUFWaUI7QUFXbEI7Ozs7V0FHRCxzQkFBYUgsRUFBYixFQUFpQkQsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsYUFBT00sa0JBQU1DLEdBQU4sb0VBQTZFO0FBQ2xGQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwyQkFBaUJDO0FBRFYsU0FEeUU7QUFJbEZDLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxVQUFVLEVBQUVWO0FBRE47QUFKMEUsT0FBN0UsRUFRTlcsSUFSTSxDQVFELFVBQUNDLFNBQUQsRUFBZTtBQUNuQixRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNmLFVBQUFBLElBQUksRUFBRWMsU0FBUyxDQUFDZCxJQUFWLENBQWVnQixPQUFmLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixFQUFnQ2hCLEtBQWhDO0FBQVAsU0FBZDs7QUFDQSxRQUFBLE1BQUksQ0FBQ2MsUUFBTCxDQUFjO0FBQUNiLFVBQUFBLEVBQUUsRUFBRUE7QUFBTCxTQUFkO0FBQ0QsT0FYTSxXQVlBLFVBQUNnQixHQUFELEVBQVM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQWRNLENBQVA7QUFlRDs7O1dBR0Qsb0JBQVc7QUFBQTs7QUFDVCxXQUFLSCxRQUFMLENBQWM7QUFBQ2QsUUFBQUEsS0FBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0UsS0FBWCxJQUFvQjtBQUE1QixPQUFkO0FBQ0EsV0FBS0csWUFBTCxDQUFrQixLQUFLTixLQUFMLENBQVdLLFNBQTdCLEVBQXdDLEtBQUtKLEtBQUwsQ0FBV0UsS0FBbkQsRUFDQ1ksSUFERCxDQUNNLFVBQUNiLElBQUQsRUFBVTtBQUNkLFFBQUEsTUFBSSxDQUFDZSxRQUFMLENBQWM7QUFBQ2YsVUFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBRCxFQUFJLE1BQUksQ0FBQ0QsS0FBTCxDQUFXRSxLQUFmO0FBQVgsU0FBZDtBQUNELE9BSEQ7QUFJRDs7O1dBRUQsNkJBQW9CO0FBQ2xCLFdBQUtHLFlBQUwsQ0FBa0IsS0FBS04sS0FBTCxDQUFXSyxTQUE3QixFQUF3QyxLQUFLSixLQUFMLENBQVdFLEtBQW5EO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsMERBQ0Usb0VBREYsRUFFRyxLQUFLRixLQUFMLENBQVdDLElBQVgsaUJBQW1CLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQUExQjtBQUFnQyxRQUFBLE9BQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JxQixPQUF6RDtBQUFrRSxRQUFBLFFBQVEsRUFBRSxLQUFLZjtBQUFqRixRQUZ0QixDQURGO0FBT0Q7Ozs7RUF0RGVnQixnQixHQXdEbEI7OztlQUNlekIsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJvb3RzdHJhcCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgUW5BTGlzdCBmcm9tICcuL1FuQUxpc3QuanN4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcblxuY29uc3QgaXRlbXNQZXJQYWdlID0gMjtcblxuY2xhc3MgUW5BIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBpbmRleDogMixcbiAgICAgIGlkOiB0aGlzLnByb3BzLnByb2R1Y3RJRFxuICAgIH1cblxuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBnZXRRdWVzdGlvbnMoaWQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcWEvcXVlc3Rpb25zYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IGlkXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocXVlc3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBxdWVzdGlvbnMuZGF0YS5yZXN1bHRzLnNsaWNlKDAsIGluZGV4KX0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtpZDogaWR9KVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgfVxuXG5cbiAgbG9hZE1vcmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKz0gMX0pXG4gICAgdGhpcy5nZXRRdWVzdGlvbnModGhpcy5wcm9wcy5wcm9kdWN0SUQsIHRoaXMuc3RhdGUuaW5kZXgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGEoMCwgdGhpcy5zdGF0ZS5pbmRleCl9KVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyh0aGlzLnByb3BzLnByb2R1Y3RJRCwgdGhpcy5zdGF0ZS5pbmRleCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5RdWVzdGlvbnMgYW5kIEFuc3dlcnM8L2gxPlxuICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIDxRbkFMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gYW5zd2Vycz17dGhpcy5zdGF0ZS5kYXRhLmFuc3dlcnN9IGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlfS8+fVxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbi8vbWlub3IgY2hhbmdlc1xuZXhwb3J0IGRlZmF1bHQgUW5BOyJdfQ==