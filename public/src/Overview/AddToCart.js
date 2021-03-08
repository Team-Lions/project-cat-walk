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
        hideSizeEnforcement: true
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
      //may not be working properly. Will have to test again when I have a real SKU instead of dummy data
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
      }, /*#__PURE__*/_react["default"].createElement("option", null, "-")), this.props.sizes.length > 0 ? this.state.sizeSelection === "" ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvQWRkVG9DYXJ0LmpzeCJdLCJuYW1lcyI6WyJBZGRUb0NhcnQiLCJwcm9wcyIsInN0YXRlIiwic2l6ZVNlbGVjdGlvbiIsInF1YW50aXR5RW5hYmxlZCIsInF1YW50aXR5QXZhaWxhYmxlIiwicXVhbnRpdHlTZWxlY3Rpb24iLCJoaWRlU2l6ZUVuZm9yY2VtZW50IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwidmFsdWUiLCJyZW1vdmUiLCJuZXdTaXplIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJzaXplRmlyc3RTa3VzIiwicXVhbnRpdHkiLCJuZXdRdWFudGl0eSIsInNrdV9pZCIsIk51bWJlciIsInBhcnNlSW50IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvdW50IiwiaGVhZGVycyIsInRva2VuIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzaXplcyIsImxlbmd0aCIsImNoYW5nZVNpemUiLCJiaW5kIiwiY2hhbmdlUXVhbnRpdHkiLCJlbmZvcmNlU2l6ZVNlbGVjdGlvbiIsImFkZFRvQ2FydCIsInZpc2liaWxpdHkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7OztBQUNKO0FBQ0EscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsYUFBYSxFQUFFLEVBREo7QUFFWEMsTUFBQUEsZUFBZSxFQUFFLEtBRk47QUFHWEMsTUFBQUEsaUJBQWlCLEVBQUUsQ0FIUjtBQUlYQyxNQUFBQSxpQkFBaUIsRUFBRSxJQUpSO0FBS1hDLE1BQUFBLG1CQUFtQixFQUFFO0FBTFYsS0FBYjtBQUZpQjtBQVNsQjs7OztXQUVELG9CQUFXQyxD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QTNFLFFBREQsZ0JBR0M7QUFBUSxRQUFBLEVBQUUsRUFBQyxVQUFYO0FBQXNCLFFBQUEsSUFBSSxFQUFDLFVBQTNCO0FBQXNDLFFBQUEsUUFBUTtBQUE5QyxzQkFDRSxvREFERixDQVpKLEVBZ0JHLEtBQUtuQyxLQUFMLENBQVdnQyxLQUFYLENBQWlCQyxNQUFqQixHQUEwQixDQUExQixHQUNDLEtBQUtoQyxLQUFMLENBQVdDLGFBQVgsS0FBNkIsRUFBN0I7QUFBQTs7QUFDRTtBQUNBO0FBQVEsUUFBQSxPQUFPLEVBQUUsS0FBS21DLG9CQUFMLENBQTBCRixJQUExQixDQUErQixJQUEvQjtBQUFqQix1QkFGRjtBQUFBOztBQUlFO0FBQ0E7QUFBUSxRQUFBLE9BQU8sRUFBRSxLQUFLRyxTQUFMLENBQWVILElBQWYsQ0FBb0IsSUFBcEI7QUFBakIsdUJBTkg7QUFBQTs7QUFRQztBQUNBO0FBQVEsUUFBQSxLQUFLLEVBQUU7QUFBQ0ksVUFBQUEsVUFBVSxFQUFFO0FBQWI7QUFBZix1QkF6QkosQ0FERjtBQThCRDs7OztFQWhHcUJDLGtCQUFNQyxTOztBQWlHN0I7ZUFFYzFDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpemVTZWxlY3RvciBmcm9tICcuL1NpemVTZWxlY3Rvci5qc3gnO1xuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSAnLi9RdWFudGl0eVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5cbmNsYXNzIEFkZFRvQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vZXhwZWN0cyBwcm9wcyB0byBjb250YWluIG9iamVjdCBjYWxsZWQgc2t1c1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2l6ZVNlbGVjdGlvbjogJycsXG4gICAgICBxdWFudGl0eUVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcXVhbnRpdHlBdmFpbGFibGU6IDAsXG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogbnVsbCxcbiAgICAgIGhpZGVTaXplRW5mb3JjZW1lbnQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlU2l6ZShlKSB7XG4gICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3Qgc2xlY3Rpb24gYXdheSBmb3JtdGhlIGRlZmF1bHQsIHJlbW92ZSBcIlNlbGVjdCBTaXplIGFzIGFuIG9wdGlvblwiXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS5vcHRpb25zWzBdLnZhbHVlID09PSAnU2VsZWN0IFNpemUnKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLnJlbW92ZSgwKTtcbiAgICB9XG4gICAgdmFyIG5ld1NpemUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA9IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaXplU2VsZWN0aW9uOiBuZXdTaXplLFxuICAgICAgcXVhbnRpdHlFbmFibGVkOiB0cnVlLFxuICAgICAgcXVhbnRpdHlBdmFpbGFibGU6IHRoaXMucHJvcHMuc2l6ZUZpcnN0U2t1c1tuZXdTaXplXS5xdWFudGl0eSxcbiAgICAgIHF1YW50aXR5U2VsZWN0aW9uOiAxLFxuICAgICAgaGlkZVNpemVFbmZvcmNlbWVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlUXVhbnRpdHkoZSkge1xuICAgIHZhciBuZXdRdWFudGl0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVhbnRpdHlTZWxlY3Rpb246IG5ld1F1YW50aXR5XG4gICAgfSk7XG4gIH1cblxuICBlbmZvcmNlU2l6ZVNlbGVjdGlvbihlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWRlU2l6ZUVuZm9yY2VtZW50OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgYWRkVG9DYXJ0KGUpIHtcbiAgICAvL21heSBub3QgYmUgd29ya2luZyBwcm9wZXJseS4gV2lsbCBoYXZlIHRvIHRlc3QgYWdhaW4gd2hlbiBJIGhhdmUgYSByZWFsIFNLVSBpbnN0ZWFkIG9mIGR1bW15IGRhdGFcbiAgICB2YXIgc2t1X2lkID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucHJvcHMuc2l6ZUZpcnN0U2t1c1t0aGlzLnN0YXRlLnNpemVTZWxlY3Rpb25dLnNrdV9pZCk7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9jYXJ0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2t1X2lkOiBza3VfaWQsXG4gICAgICAgIGNvdW50OiB0aGlzLnN0YXRlLnF1YW50aXR5U2VsZWN0aW9uXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnYWRkZWQgdG8gY2FydCcpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQWRkVG9DYXJ0XCI+XG4gICAgICAgIDxkaXYgaGlkZGVuPXt0aGlzLnN0YXRlLmhpZGVTaXplRW5mb3JjZW1lbnR9PlBsZWFzZSBzZWxlY3QgYSBzaXplITwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5zaXplcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzaXplXCIgbmFtZT1cInNpemVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxvcHRpb24+T1VUIE9GIFNUT0NLPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxTaXplU2VsZWN0b3Igc2l6ZXM9e3RoaXMucHJvcHMuc2l6ZXN9IGNoYW5nZT17dGhpcy5jaGFuZ2VTaXplLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWFudGl0eUVuYWJsZWQgP1xuICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yIHF1YW50aXR5QXZhaWxhYmxlPXt0aGlzLnN0YXRlLnF1YW50aXR5QXZhaWxhYmxlfSBjaGFuZ2U9e3RoaXMuY2hhbmdlUXVhbnRpdHkuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInF1YW50aXR5XCIgbmFtZT1cInF1YW50aXR5XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8b3B0aW9uPi08L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5wcm9wcy5zaXplcy5sZW5ndGggPiAwID9cbiAgICAgICAgICB0aGlzLnN0YXRlLnNpemVTZWxlY3Rpb24gPT09IFwiXCIgP1xuICAgICAgICAgICAgLyogdGhlcmUgaXMgcXVhbnRpdHksIGJ1dCBzaXplIGlzIG5vdCBzZWxlY3RlZC4gQnV0dG9uIG9wZW5zIGRyb3Bkb3duIGRpc3BsYXkgbWVzc2FnZSAqL1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVuZm9yY2VTaXplU2VsZWN0aW9uLmJpbmQodGhpcyl9PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAvKiBxdWFudGl0eSBhbmQgc2l6ZSBzZWxlY3RlZC4gQnV0dG9uIGFkZHMgdG8gY2FydCAqL1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRvQ2FydC5iaW5kKHRoaXMpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgIDpcbiAgICAgICAgICAvKiBoaWRlIGJ1dHRvbiAqL1xuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3t2aXNpYmlsaXR5OiAnaGlkZGVuJ319PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0OyJdfQ==