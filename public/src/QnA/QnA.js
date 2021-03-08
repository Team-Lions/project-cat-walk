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
      data: [],
      index: 3
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
          product_id: id
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
    key: "showMore",
    value: function showMore() {
      console.log('clicked');
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
        data: this.state.data,
        showMore: this.showMore
      }));
    }
  }]);

  return QnA;
}(_react.Component); //minor changes


var _default = QnA;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQS5qc3giXSwibmFtZXMiOlsiUW5BIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJpbmRleCIsImdldFF1ZXN0aW9ucyIsImJpbmQiLCJpZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsInRoZW4iLCJxdWVzdGlvbnMiLCJzZXRTdGF0ZSIsInJlc3VsdHMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdElEIiwic2hvd01vcmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUU7QUFGSSxLQUFiO0FBS0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFSaUI7QUFTbEI7Ozs7V0FHRCxzQkFBYUMsRUFBYixFQUFpQjtBQUFBOztBQUNmLGFBQU9DLGtCQUFNQyxHQUFOLG9FQUE2RTtBQUNsRkMsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCQztBQURWLFNBRHlFO0FBSWxGQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsVUFBVSxFQUFFTjtBQUROO0FBSjBFLE9BQTdFLEVBUU5PLElBUk0sQ0FRRCxVQUFDQyxTQUFELEVBQWU7QUFDbkIsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDYixVQUFBQSxJQUFJLEVBQUVZLFNBQVMsQ0FBQ1osSUFBVixDQUFlYztBQUF0QixTQUFkO0FBQ0QsT0FWTSxXQVdBLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BYk0sQ0FBUDtBQWNEOzs7V0FFRCxvQkFBVztBQUNUQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUQ7OztXQUVELDZCQUFvQjtBQUNsQixXQUFLZixZQUFMLENBQWtCLEtBQUtKLEtBQUwsQ0FBV29CLFNBQTdCO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsMERBQ0Usb0VBREYsZUFFSSxnQ0FBQyxtQkFBRDtBQUFTLFFBQUEsSUFBSSxFQUFFLEtBQUtuQixLQUFMLENBQVdDLElBQTFCO0FBQWdDLFFBQUEsUUFBUSxFQUFFLEtBQUttQjtBQUEvQyxRQUZKLENBREY7QUFNRDs7OztFQTlDZUMsZ0IsR0FnRGxCOzs7ZUFDZXZCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBib290c3RyYXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFFuQUxpc3QgZnJvbSAnLi9RbkFMaXN0LmpzeCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5cblxuY2xhc3MgUW5BIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBpbmRleDogM1xuICAgIH1cblxuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgZ2V0UXVlc3Rpb25zKGlkKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcWEvcXVlc3Rpb25zYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb2R1Y3RfaWQ6IGlkXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocXVlc3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBxdWVzdGlvbnMuZGF0YS5yZXN1bHRzfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG4gIH1cblxuICBzaG93TW9yZSgpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyh0aGlzLnByb3BzLnByb2R1Y3RJRCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5RdWVzdGlvbnMgYW5kIEFuc3dlcnM8L2gxPlxuICAgICAgICAgIDxRbkFMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gc2hvd01vcmU9e3RoaXMuc2hvd01vcmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy9taW5vciBjaGFuZ2VzXG5leHBvcnQgZGVmYXVsdCBRbkE7Il19