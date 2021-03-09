"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Question = _interopRequireDefault(require("./Question.jsx"));

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

var QnAList = /*#__PURE__*/function (_React$Component) {
  _inherits(QnAList, _React$Component);

  var _super = _createSuper(QnAList);

  function QnAList(props) {
    var _this;

    _classCallCheck(this, QnAList);

    _this = _super.call(this, props);
    _this.state = {
      index: 1,
      isLoading: true,
      answers: []
    };
    _this.loadMoreAnswers = _this.loadMoreAnswers.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QnAList, [{
    key: "loadMoreAnswers",
    value: function loadMoreAnswers() {
      console.log(this.props.data.answers);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // if (this.props.data) {
      //   this.setState({answers: this.props.data})
      // } else {
      //   this.setState({isLoading: true})
      // }
      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // {console.log('not data', this.props.data[0])}
      var data = this.props.data;
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.isLoading ? /*#__PURE__*/_react["default"].createElement("div", null, "isLoading") : data.map(function (question) {
        console.log('questionn', question);
        return /*#__PURE__*/_react["default"].createElement(_Question["default"], {
          question: question,
          answers: Object.values(question.answers),
          key: _this2.state.index
        });
      }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        size: "lg",
        onClick: this.props.loadMore
      }, "Load More"));
    }
  }]);

  return QnAList;
}(_react["default"].Component); // this.props.answers.length > 0 ? this.props.answers : []} loadMoreAnswers={this.loadMoreAnswers


var _default = QnAList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQUxpc3QuanN4Il0sIm5hbWVzIjpbIlFuQUxpc3QiLCJwcm9wcyIsInN0YXRlIiwiaW5kZXgiLCJpc0xvYWRpbmciLCJhbnN3ZXJzIiwibG9hZE1vcmVBbnN3ZXJzIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2V0U3RhdGUiLCJtYXAiLCJxdWVzdGlvbiIsIk9iamVjdCIsInZhbHVlcyIsImxvYWRNb3JlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsTzs7Ozs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxLQUFLLEVBQUUsQ0FESTtBQUVYQyxNQUFBQSxTQUFTLEVBQUUsSUFGQTtBQUdYQyxNQUFBQSxPQUFPLEVBQUU7QUFIRSxLQUFiO0FBTUEsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQiwrQkFBdkI7QUFUaUI7QUFVbEI7Ozs7V0FFRCwyQkFBa0I7QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkwsT0FBNUI7QUFDRDs7O1dBRUQsNkJBQW9CO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFLTSxRQUFMLENBQWM7QUFBQ1AsUUFBQUEsU0FBUyxFQUFFO0FBQVosT0FBZDtBQUNEOzs7V0FFRCxrQkFBUztBQUFBOztBQUNQO0FBRE8sVUFFQU0sSUFGQSxHQUVRLEtBQUtULEtBRmIsQ0FFQVMsSUFGQTtBQUdQLDBCQUNFLDZDQUNHLEtBQUtSLEtBQUwsQ0FBV0UsU0FBWCxnQkFBdUIseURBQXZCLEdBQThDTSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxRQUFELEVBQWM7QUFDcEVMLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJJLFFBQXpCO0FBQ0EsNEJBQ0EsZ0NBQUMsb0JBQUQ7QUFBVSxVQUFBLFFBQVEsRUFBRUEsUUFBcEI7QUFBOEIsVUFBQSxPQUFPLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixRQUFRLENBQUNSLE9BQXZCLENBQXZDO0FBQXdFLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ0gsS0FBTCxDQUFXQztBQUF4RixVQURBO0FBR0QsT0FMOEMsQ0FEakQsZUFPRSxnQ0FBQyxrQkFBRDtBQUFRLFFBQUEsSUFBSSxFQUFDLElBQWI7QUFBa0IsUUFBQSxPQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXZTtBQUF0QyxxQkFQRixDQURGO0FBYUQ7Ozs7RUExQ21CQyxrQkFBTUMsUyxHQTZDNUI7OztlQUNlbEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuL1F1ZXN0aW9uLmpzeCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5cbmNsYXNzIFFuQUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmRleDogMSxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIGFuc3dlcnM6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5sb2FkTW9yZUFuc3dlcnMgPSB0aGlzLmxvYWRNb3JlQW5zd2Vycy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbG9hZE1vcmVBbnN3ZXJzKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YS5hbnN3ZXJzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGlmICh0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcnM6IHRoaXMucHJvcHMuZGF0YX0pXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogdHJ1ZX0pXG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHtjb25zb2xlLmxvZygnbm90IGRhdGEnLCB0aGlzLnByb3BzLmRhdGFbMF0pfVxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gPGRpdj5pc0xvYWRpbmc8L2Rpdj4gOiBkYXRhLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncXVlc3Rpb25uJywgcXVlc3Rpb24pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFF1ZXN0aW9uIHF1ZXN0aW9uPXtxdWVzdGlvbn0gYW5zd2Vycz17T2JqZWN0LnZhbHVlcyhxdWVzdGlvbi5hbnN3ZXJzKX0ga2V5PXt0aGlzLnN0YXRlLmluZGV4fS8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmxvYWRNb3JlfT5cbiAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gdGhpcy5wcm9wcy5hbnN3ZXJzLmxlbmd0aCA+IDAgPyB0aGlzLnByb3BzLmFuc3dlcnMgOiBbXX0gbG9hZE1vcmVBbnN3ZXJzPXt0aGlzLmxvYWRNb3JlQW5zd2Vyc1xuZXhwb3J0IGRlZmF1bHQgUW5BTGlzdDsiXX0=