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
      index: 1
    };
    _this.loadMoreAnswers = _this.loadMoreAnswers.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QnAList, [{
    key: "loadMoreAnswers",
    value: function loadMoreAnswers() {
      console.log('clicked');
    } // componentDidMount() {
    //   if (this.props.data) {
    //     this.setState({answers: this.props.data})
    //   } else {
    //     this.setState({answers: 'isLoading'})
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      {
        console.log('answers', this.props.data);
      }
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.data.map(function (question) {
        return /*#__PURE__*/_react["default"].createElement(_Question["default"], {
          question: question,
          answers: _this2.state.answers,
          loadMoreAnswers: _this2.loadMoreAnswers,
          key: _this2.state.index
        });
      }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        size: "lg",
        onClick: this.props.loadMore
      }, "Load More"));
    }
  }]);

  return QnAList;
}(_react["default"].Component);

var _default = QnAList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQUxpc3QuanN4Il0sIm5hbWVzIjpbIlFuQUxpc3QiLCJwcm9wcyIsInN0YXRlIiwiaW5kZXgiLCJsb2FkTW9yZUFuc3dlcnMiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJsb2FkTW9yZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsS0FBSyxFQUFFO0FBREksS0FBYjtBQUlBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsK0JBQXZCO0FBUGlCO0FBUWxCOzs7O1dBRUQsMkJBQWtCO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBRUEsa0JBQVM7QUFBQTs7QUFDUDtBQUFDRCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQUtOLEtBQUwsQ0FBV08sSUFBbEM7QUFBd0M7QUFDekMsMEJBQ0UsNkNBQ0csS0FBS1AsS0FBTCxDQUFXTyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFELEVBQWM7QUFDakMsNEJBQ0EsZ0NBQUMsb0JBQUQ7QUFBVSxVQUFBLFFBQVEsRUFBRUEsUUFBcEI7QUFBOEIsVUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDUixLQUFMLENBQVdTLE9BQWxEO0FBQTJELFVBQUEsZUFBZSxFQUFFLE1BQUksQ0FBQ1AsZUFBakY7QUFBa0csVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDRixLQUFMLENBQVdDO0FBQWxILFVBREE7QUFHRCxPQUpBLENBREgsZUFNRSxnQ0FBQyxrQkFBRDtBQUFRLFFBQUEsSUFBSSxFQUFDLElBQWI7QUFBa0IsUUFBQSxPQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXVztBQUF0QyxxQkFORixDQURGO0FBWUQ7Ozs7RUFyQ21CQyxrQkFBTUMsUzs7ZUF5Q2JkLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9RdWVzdGlvbi5qc3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuXG5jbGFzcyBRbkFMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IDFcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRNb3JlQW5zd2VycyA9IHRoaXMubG9hZE1vcmVBbnN3ZXJzLmJpbmQodGhpcyk7XG4gIH1cblxuICBsb2FkTW9yZUFuc3dlcnMoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIGlmICh0aGlzLnByb3BzLmRhdGEpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcnM6IHRoaXMucHJvcHMuZGF0YX0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcnM6ICdpc0xvYWRpbmcnfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAge2NvbnNvbGUubG9nKCdhbnN3ZXJzJywgdGhpcy5wcm9wcy5kYXRhKX1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufSBhbnN3ZXJzPXt0aGlzLnN0YXRlLmFuc3dlcnN9IGxvYWRNb3JlQW5zd2Vycz17dGhpcy5sb2FkTW9yZUFuc3dlcnN9IGtleT17dGhpcy5zdGF0ZS5pbmRleH0vPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgb25DbGljaz17dGhpcy5wcm9wcy5sb2FkTW9yZX0+XG4gICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUW5BTGlzdDsiXX0=