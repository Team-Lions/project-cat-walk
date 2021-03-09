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

      console.log(this.state.id);
      this.setState({
        index: this.state.index += 2
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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Questions and Answers"), /*#__PURE__*/_react["default"].createElement(_QnAList["default"], {
        data: this.state.data,
        loadMore: this.loadMore
      }));
    }
  }]);

  return QnA;
}(_react.Component); //minor changes


var _default = QnA;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQS5qc3giXSwibmFtZXMiOlsiaXRlbXNQZXJQYWdlIiwiUW5BIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJpbmRleCIsImlkIiwicHJvZHVjdElEIiwiZ2V0UXVlc3Rpb25zIiwiYmluZCIsImxvYWRNb3JlIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidG9rZW4iLCJwYXJhbXMiLCJwcm9kdWN0X2lkIiwidGhlbiIsInF1ZXN0aW9ucyIsInNldFN0YXRlIiwicmVzdWx0cyIsInNsaWNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBckI7O0lBRU1DLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUUsQ0FGSTtBQUdYQyxNQUFBQSxFQUFFLEVBQUUsTUFBS0osS0FBTCxDQUFXSztBQUhKLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLCtCQUFoQjtBQVZpQjtBQVdsQjs7OztXQUdELHNCQUFhSCxFQUFiLEVBQWlCRCxLQUFqQixFQUF3QjtBQUFBOztBQUN0QixhQUFPTSxrQkFBTUMsR0FBTixvRUFBNkU7QUFDbEZDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDJCQUFpQkM7QUFEVixTQUR5RTtBQUlsRkMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLFVBQVUsRUFBRVY7QUFETjtBQUowRSxPQUE3RSxFQVFOVyxJQVJNLENBUUQsVUFBQ0MsU0FBRCxFQUFlO0FBQ25CLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2YsVUFBQUEsSUFBSSxFQUFFYyxTQUFTLENBQUNkLElBQVYsQ0FBZWdCLE9BQWYsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLEVBQWdDaEIsS0FBaEM7QUFBUCxTQUFkOztBQUNBLFFBQUEsTUFBSSxDQUFDYyxRQUFMLENBQWM7QUFBQ2IsVUFBQUEsRUFBRSxFQUFFQTtBQUFMLFNBQWQ7QUFDRCxPQVhNLFdBWUEsVUFBQ2dCLEdBQUQsRUFBUztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BZE0sQ0FBUDtBQWVEOzs7V0FHRCxvQkFBVztBQUFBOztBQUNUQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLckIsS0FBTCxDQUFXRyxFQUF2QjtBQUNBLFdBQUthLFFBQUwsQ0FBYztBQUFDZCxRQUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxLQUFYLElBQW9CO0FBQTVCLE9BQWQ7QUFDQSxXQUFLRyxZQUFMLENBQWtCLEtBQUtOLEtBQUwsQ0FBV0ssU0FBN0IsRUFBd0MsS0FBS0osS0FBTCxDQUFXRSxLQUFuRCxFQUNDWSxJQURELENBQ00sVUFBQ2IsSUFBRCxFQUFVO0FBQ2QsUUFBQSxNQUFJLENBQUNlLFFBQUwsQ0FBYztBQUFDZixVQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQyxDQUFELEVBQUksTUFBSSxDQUFDRCxLQUFMLENBQVdFLEtBQWY7QUFBWCxTQUFkO0FBQ0QsT0FIRDtBQUlEOzs7V0FFRCw2QkFBb0I7QUFDbEIsV0FBS0csWUFBTCxDQUFrQixLQUFLTixLQUFMLENBQVdLLFNBQTdCLEVBQXdDLEtBQUtKLEtBQUwsQ0FBV0UsS0FBbkQ7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSwwREFDRSxvRUFERixlQUVJLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxJQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxJQUExQjtBQUFnQyxRQUFBLFFBQVEsRUFBRSxLQUFLTTtBQUEvQyxRQUZKLENBREY7QUFNRDs7OztFQXREZWUsZ0IsR0F3RGxCOzs7ZUFDZXhCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBib290c3RyYXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFFuQUxpc3QgZnJvbSAnLi9RbkFMaXN0LmpzeCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5cbmNvbnN0IGl0ZW1zUGVyUGFnZSA9IDI7XG5cbmNsYXNzIFFuQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgaW5kZXg6IDIsXG4gICAgICBpZDogdGhpcy5wcm9wcy5wcm9kdWN0SURcbiAgICB9XG5cbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkTW9yZSA9IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgZ2V0UXVlc3Rpb25zKGlkLCBpbmRleCkge1xuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3FhL3F1ZXN0aW9uc2AsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9kdWN0X2lkOiBpZFxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKHF1ZXN0aW9ucykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcXVlc3Rpb25zLmRhdGEucmVzdWx0cy5zbGljZSgwLCBpbmRleCl9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6IGlkfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG4gIH1cblxuXG4gIGxvYWRNb3JlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiB0aGlzLnN0YXRlLmluZGV4ICs9IDJ9KVxuICAgIHRoaXMuZ2V0UXVlc3Rpb25zKHRoaXMucHJvcHMucHJvZHVjdElELCB0aGlzLnN0YXRlLmluZGV4KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhKDAsIHRoaXMuc3RhdGUuaW5kZXgpfSlcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRRdWVzdGlvbnModGhpcy5wcm9wcy5wcm9kdWN0SUQsIHRoaXMuc3RhdGUuaW5kZXgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UXVlc3Rpb25zIGFuZCBBbnN3ZXJzPC9oMT5cbiAgICAgICAgICA8UW5BTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbi8vbWlub3IgY2hhbmdlc1xuZXhwb3J0IGRlZmF1bHQgUW5BOyJdfQ==