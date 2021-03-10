"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SizeSelector = _interopRequireDefault(require("./SizeSelector.jsx"));

var _QuantitySelector = _interopRequireDefault(require("./QuantitySelector.jsx"));

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

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

var AddToCart = /*#__PURE__*/function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  var _super = _createSuper(AddToCart);

  //expects props to contain object called skus
  function AddToCart(props) {
    var _this;

    _classCallCheck(this, AddToCart);

    _this = _super.call(this, props);
    _this.state = {
      sizeSelection: '',
      quantityEnabled: false,
      quantityAvailable: 0,
      quantitySelection: null,
      hideSizeEnforcement: true
    };
    return _this;
  }

  _createClass(AddToCart, [{
    key: "changeSize",
    value: function changeSize(e) {
      // if this is the first slection away formthe default, remove "Select Size as an option"
      if (document.getElementById('size').options[0].value === 'Select Size') {
        document.getElementById('size').remove(0);
      }

      var newSize = e.target.value;
      document.getElementById('quantity').value = 1;
      this.setState({
        sizeSelection: newSize,
        quantityEnabled: true,
        quantityAvailable: this.props.sizeFirstSkus[newSize].quantity,
        quantitySelection: 1,
        hideSizeEnforcement: truee
      });
    }
  }, {
    key: "changeQuantity",
    value: function changeQuantity(e) {
      var newQuantity = e.target.value;
      this.setState({
        quantitySelection: newQuantity
      });
    }
  }, {
    key: "enforceSizeSelection",
    value: function enforceSizeSelection(e) {
      this.setState({
        hideSizeEnforcement: false
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart(e) {
      var sku_id = Number.parseInt(this.props.sizeFirstSkus[this.state.sizeSelection].sku_id);
      (0, _axios["default"])({
        method: 'post',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart',
        data: {
          sku_id: sku_id,
          count: this.state.quantitySelection
        },
        headers: {
          'Authorization': _token["default"]
        }
      }).then(function () {
        console.log('added to cart');
      })["catch"](function (err) {
        console.log('error');
        throw err;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "AddToCart"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        hidden: this.state.hideSizeEnforcement
      }, "Please select a size!"), this.props.sizes.length === 0 ? /*#__PURE__*/_react["default"].createElement("select", {
        id: "size",
        name: "size",
        disabled: true
      }, /*#__PURE__*/_react["default"].createElement("option", null, "OUT OF STOCK")) : /*#__PURE__*/_react["default"].createElement(_SizeSelector["default"], {
        sizes: this.props.sizes,
        change: this.changeSize.bind(this)
      }), this.state.quantityEnabled ? /*#__PURE__*/_react["default"].createElement(_QuantitySelector["default"], {
        quantityAvailable: this.state.quantityAvailable,
        change: this.changeQuantity.bind(this)
      }) : /*#__PURE__*/_react["default"].createElement("select", {
        id: "quantity",
        name: "quantity",
        disabled: true
      }, /*#__PURE__*/_react["default"].createElement("option", null, " - ")), this.props.sizes.length > 0 ? this.state.sizeSelection === "" ?
      /*#__PURE__*/

      /* there is quantity, but size is not selected. Button opens dropdown display message */
      _react["default"].createElement("button", {
        onClick: this.enforceSizeSelection.bind(this)
      }, "Add to Cart") :
      /*#__PURE__*/

      /* quantity and size selected. Button adds to cart */
      _react["default"].createElement("button", {
        onClick: this.addToCart.bind(this)
      }, "Add to Cart") :
      /*#__PURE__*/

      /* hide button */
      _react["default"].createElement("button", {
        style: {
          visibility: 'hidden'
        }
      }, "Add to Cart"));
    }
  }]);

  return AddToCart;
}(_react["default"].Component);

;
var _default = AddToCart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvQWRkVG9DYXJ0LmpzeCJdLCJuYW1lcyI6WyJBZGRUb0NhcnQiLCJwcm9wcyIsInN0YXRlIiwic2l6ZVNlbGVjdGlvbiIsInF1YW50aXR5RW5hYmxlZCIsInF1YW50aXR5QXZhaWxhYmxlIiwicXVhbnRpdHlTZWxlY3Rpb24iLCJoaWRlU2l6ZUVuZm9yY2VtZW50IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwidmFsdWUiLCJyZW1vdmUiLCJuZXdTaXplIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJzaXplRmlyc3RTa3VzIiwicXVhbnRpdHkiLCJ0cnVlZSIsIm5ld1F1YW50aXR5Iiwic2t1X2lkIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY291bnQiLCJoZWFkZXJzIiwidG9rZW4iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVyciIsInNpemVzIiwibGVuZ3RoIiwiY2hhbmdlU2l6ZSIsImJpbmQiLCJjaGFuZ2VRdWFudGl0eSIsImVuZm9yY2VTaXplU2VsZWN0aW9uIiwiYWRkVG9DYXJ0IiwidmlzaWJpbGl0eSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0o7QUFDQSxxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxhQUFhLEVBQUUsRUFESjtBQUVYQyxNQUFBQSxlQUFlLEVBQUUsS0FGTjtBQUdYQyxNQUFBQSxpQkFBaUIsRUFBRSxDQUhSO0FBSVhDLE1BQUFBLGlCQUFpQixFQUFFLElBSlI7QUFLWEMsTUFBQUEsbUJBQW1CLEVBQUU7QUFMVixLQUFiO0FBRmlCO0FBU2xCOzs7O1dBRUQs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QjtBQUEzRSxRQURELGdCQUdDO0FBQVEsUUFBQSxFQUFFLEVBQUMsVUFBWDtBQUFzQixRQUFBLElBQUksRUFBQyxVQUEzQjtBQUFzQyxRQUFBLFFBQVE7QUFBOUMsc0JBQ0Usc0RBREYsQ0FaSixFQWdCRyxLQUFLcEMsS0FBTCxDQUFXaUMsS0FBWCxDQUFpQkMsTUFBakIsR0FBMEIsQ0FBMUIsR0FDQyxLQUFLakMsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCO0FBQUE7O0FBQ0U7QUFDQTtBQUFRLFFBQUEsT0FBTyxFQUFFLEtBQUtvQyxvQkFBTCxDQUEwQkYsSUFBMUIsQ0FBK0IsSUFBL0I7QUFBakIsdUJBRkY7QUFBQTs7QUFJRTtBQUNBO0FBQVEsUUFBQSxPQUFPLEVBQUUsS0FBS0csU0FBTCxDQUFlSCxJQUFmLENBQW9CLElBQXBCO0FBQWpCLHVCQU5IO0FBQUE7O0FBUUM7QUFDQTtBQUFRLFFBQUEsS0FBSyxFQUFFO0FBQUNJLFVBQUFBLFVBQVUsRUFBRTtBQUFiO0FBQWYsdUJBekJKLENBREY7QUE4QkQ7Ozs7RUEvRnFCQyxrQkFBTUMsUzs7QUFnRzdCO2VBRWMzQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaXplU2VsZWN0b3IgZnJvbSAnLi9TaXplU2VsZWN0b3IuanN4JztcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJy4vUXVhbnRpdHlTZWxlY3Rvci5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuXG5jbGFzcyBBZGRUb0NhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvL2V4cGVjdHMgcHJvcHMgdG8gY29udGFpbiBvYmplY3QgY2FsbGVkIHNrdXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNpemVTZWxlY3Rpb246ICcnLFxuICAgICAgcXVhbnRpdHlFbmFibGVkOiBmYWxzZSxcbiAgICAgIHF1YW50aXR5QXZhaWxhYmxlOiAwLFxuICAgICAgcXVhbnRpdHlTZWxlY3Rpb246IG51bGwsXG4gICAgICBoaWRlU2l6ZUVuZm9yY2VtZW50OiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVNpemUoZSkge1xuICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNsZWN0aW9uIGF3YXkgZm9ybXRoZSBkZWZhdWx0LCByZW1vdmUgXCJTZWxlY3QgU2l6ZSBhcyBhbiBvcHRpb25cIlxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykub3B0aW9uc1swXS52YWx1ZSA9PT0gJ1NlbGVjdCBTaXplJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS5yZW1vdmUoMCk7XG4gICAgfVxuICAgIHZhciBuZXdTaXplID0gZS50YXJnZXQudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUgPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2l6ZVNlbGVjdGlvbjogbmV3U2l6ZSxcbiAgICAgIHF1YW50aXR5RW5hYmxlZDogdHJ1ZSxcbiAgICAgIHF1YW50aXR5QXZhaWxhYmxlOiB0aGlzLnByb3BzLnNpemVGaXJzdFNrdXNbbmV3U2l6ZV0ucXVhbnRpdHksXG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogMSxcbiAgICAgIGhpZGVTaXplRW5mb3JjZW1lbnQ6IHRydWVlXG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VRdWFudGl0eShlKSB7XG4gICAgdmFyIG5ld1F1YW50aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogbmV3UXVhbnRpdHlcbiAgICB9KTtcbiAgfVxuXG4gIGVuZm9yY2VTaXplU2VsZWN0aW9uKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpZGVTaXplRW5mb3JjZW1lbnQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBhZGRUb0NhcnQoZSkge1xuICAgIHZhciBza3VfaWQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5wcm9wcy5zaXplRmlyc3RTa3VzW3RoaXMuc3RhdGUuc2l6ZVNlbGVjdGlvbl0uc2t1X2lkKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L2NhcnQnLFxuICAgICAgZGF0YToge1xuICAgICAgICBza3VfaWQ6IHNrdV9pZCxcbiAgICAgICAgY291bnQ6IHRoaXMuc3RhdGUucXVhbnRpdHlTZWxlY3Rpb25cbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCB0byBjYXJ0JylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBZGRUb0NhcnRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW49e3RoaXMuc3RhdGUuaGlkZVNpemVFbmZvcmNlbWVudH0+UGxlYXNlIHNlbGVjdCBhIHNpemUhPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLnNpemVzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInNpemVcIiBuYW1lPVwic2l6ZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPG9wdGlvbj5PVVQgT0YgU1RPQ0s8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA6XG4gICAgICAgICAgPFNpemVTZWxlY3RvciBzaXplcz17dGhpcy5wcm9wcy5zaXplc30gY2hhbmdlPXt0aGlzLmNoYW5nZVNpemUuYmluZCh0aGlzKX0vPlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLnF1YW50aXR5RW5hYmxlZCA/XG4gICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3IgcXVhbnRpdHlBdmFpbGFibGU9e3RoaXMuc3RhdGUucXVhbnRpdHlBdmFpbGFibGV9IGNoYW5nZT17dGhpcy5jaGFuZ2VRdWFudGl0eS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8c2VsZWN0IGlkPVwicXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxvcHRpb24+IC0gPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMucHJvcHMuc2l6ZXMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaXplU2VsZWN0aW9uID09PSBcIlwiID9cbiAgICAgICAgICAgIC8qIHRoZXJlIGlzIHF1YW50aXR5LCBidXQgc2l6ZSBpcyBub3Qgc2VsZWN0ZWQuIEJ1dHRvbiBvcGVucyBkcm9wZG93biBkaXNwbGF5IG1lc3NhZ2UgKi9cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5lbmZvcmNlU2l6ZVNlbGVjdGlvbi5iaW5kKHRoaXMpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgLyogcXVhbnRpdHkgYW5kIHNpemUgc2VsZWN0ZWQuIEJ1dHRvbiBhZGRzIHRvIGNhcnQgKi9cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUb0NhcnQuYmluZCh0aGlzKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA6XG4gICAgICAgICAgLyogaGlkZSBidXR0b24gKi9cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7dmlzaWJpbGl0eTogJ2hpZGRlbid9fT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FydDsiXX0=