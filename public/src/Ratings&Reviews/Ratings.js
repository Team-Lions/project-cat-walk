"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _AddReview = _interopRequireDefault(require("./AddReview.jsx"));

var _ReviewList = _interopRequireDefault(require("./ReviewList.jsx"));

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
      reviews: {}
    };
    return _this;
  }

  _createClass(Ratings, [{
    key: "getReviews",
    value: function getReviews(productId) {
      //request to get all the styles available on single/specified product
      //returns a promise
      return _axios["default"].get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', {
        headers: {
          'Authorization': _token["default"]
        },
        params: {
          product_id: productId
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Promise.all([this.getReviews(this.props.productId)]).then(function (values) {
        _this2.setState({
          reviews: values[0].data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Ratings"), /*#__PURE__*/_react["default"].createElement("h2", null, JSON.stringify(this.state.reviews)), /*#__PURE__*/_react["default"].createElement(_AddReview["default"], null), /*#__PURE__*/_react["default"].createElement(_ReviewList["default"], null));

    }
  }]);

  return Ratings;
}(_react["default"].Component);

var _default = Ratings;
exports["default"] = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3MiLCJwcm9wcyIsInN0YXRlIiwicmV2aWV3cyIsInByb2R1Y3RJZCIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRva2VuIiwicGFyYW1zIiwicHJvZHVjdF9pZCIsIlByb21pc2UiLCJhbGwiLCJnZXRSZXZpZXdzIiwidGhlbiIsInZhbHVlcyIsInNldFN0YXRlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxPOzs7OztBQUNMLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRTtBQURFLEtBQWI7QUFGa0I7QUFLaEI7Ozs7V0FFRCxvQkFBV0MsU0FBWCxFQUFzQjtBQUN2QjtBQUNBO0FBQ0EsYUFBT0Msa0JBQU1DLEdBQU4sQ0FBVSw0REFBVixFQUF3RTtBQUM3RUMsUUFBQUEsT0FBTyxFQUFFO0FBQ1YsMkJBQWlCQztBQURQLFNBRG9FO0FBSTdFQyxRQUFBQSxNQUFNLEVBQUU7QUFDVEMsVUFBQUEsVUFBVSxFQUFFTjtBQURIO0FBSnFFLE9BQXhFLENBQVA7QUFRRTs7O1dBSUQsNkJBQW9CO0FBQUE7O0FBQ3JCTyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNWLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS1osS0FBTCxDQUFXRyxTQUEzQixDQURVLENBQVosRUFHQ1UsSUFIRCxDQUdNLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ2ZiLFVBQUFBLE9BQU8sRUFBRVksTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRTtBQURKLFNBQWQ7QUFHRCxPQVBEO0FBUUU7OztXQUVELGtCQUFTO0FBQ1YsMEJBQ0MsK0VBQ0Msc0RBREQsZUFFQyw0Q0FBS0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS2pCLEtBQUwsQ0FBV0MsT0FBMUIsQ0FBTCxDQUZELGVBR0MsZ0NBQUMscUJBQUQsT0FIRCxlQUlDLGdDQUFDLHNCQUFELE9BSkQsQ0FERDtBQVFFOzs7O0VBM0NrQmlCLGtCQUFNQyxTOztlQThDYnJCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IEFkZFJldmlldyBmcm9tICcuL0FkZFJldmlldy5qc3gnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9SZXZpZXdMaXN0LmpzeCc7XG5cblxuY2xhc3MgUmF0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0ICByZXZpZXdzOiB7fSxcblx0XHR9XG5cdCAgfVxuXHRcblx0ICBnZXRSZXZpZXdzKHByb2R1Y3RJZCkge1xuXHRcdC8vcmVxdWVzdCB0byBnZXQgYWxsIHRoZSBzdHlsZXMgYXZhaWxhYmxlIG9uIHNpbmdsZS9zcGVjaWZpZWQgcHJvZHVjdFxuXHRcdC8vcmV0dXJucyBhIHByb21pc2Vcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KCdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9yZXZpZXdzJywge1xuXHRcdCAgaGVhZGVyczoge1xuXHRcdFx0J0F1dGhvcml6YXRpb24nOiB0b2tlblxuXHRcdCAgfSxcblx0XHQgIHBhcmFtczoge1xuXHRcdFx0cHJvZHVjdF9pZDogcHJvZHVjdElkXG5cdFx0ICB9XG5cdFx0fSk7XG5cdCAgfVxuXHRcblx0IFxuXHRcblx0ICBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRQcm9taXNlLmFsbChbXG5cdFx0ICB0aGlzLmdldFJldmlld3ModGhpcy5wcm9wcy5wcm9kdWN0SWQpLFxuXHRcdF0pXG5cdFx0LnRoZW4oKHZhbHVlcykgPT4ge1xuXHRcdCAgdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyZXZpZXdzOiB2YWx1ZXNbMF0uZGF0YSxcblx0XHQgIH0pO1xuXHRcdH0pXG5cdCAgfVxuXHRcblx0ICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PD5cblx0XHRcdFx0PGgxPlJhdGluZ3M8L2gxPlxuXHRcdFx0XHQ8aDI+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUucmV2aWV3cyl9PC9oMj5cblx0XHRcdFx0PEFkZFJldmlldyAvPlxuXHRcdFx0XHQ8UmV2aWV3TGlzdCAvPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHQgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nczsiXX0=

