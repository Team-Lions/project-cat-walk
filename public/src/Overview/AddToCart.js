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
      sizeFirstSkus: {},
      sizes: [],
      sizeSelection: '',
      quantityEnabled: false,
      quantityAvailable: 0,
      quantitySelection: null
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
        quantityAvailable: this.state.sizeFirstSkus[newSize].quantity,
        quantitySelection: 1
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
      //opens size dropdown
      //displays a message that says "Please select size"
      //come back to this if time to figure out how to open the dropdown and display a more graceful message
      alert('Please select size');
    }
  }, {
    key: "addToCart",
    value: function addToCart(e) {
      //may not be working properly. Will have to test again when I have a real SKU instead of dummy data
      var sku_id = Number.parseInt(this.state.sizeFirstSkus[this.state.sizeSelection].sku_id);
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
    key: "componentDidMount",
    value: function componentDidMount() {
      //populates sizeFirstSkus and sizes objects
      var sizeFirstSkus = {};
      var size, quantity;

      for (var k in this.props.skus) {
        size = this.props.skus[k].size;
        quantity = this.props.skus[k].quantity;
        sizeFirstSkus[size] = {
          sku_id: k,
          quantity: quantity
        };
      }

      this.setState({
        sizeFirstSkus: sizeFirstSkus,
        sizes: Object.keys(sizeFirstSkus)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.state.sizes.length === 0 ? /*#__PURE__*/_react["default"].createElement("select", {
        id: "size",
        name: "size",
        disabled: true
      }, /*#__PURE__*/_react["default"].createElement("option", null, "OUT OF STOCK")) : /*#__PURE__*/_react["default"].createElement(_SizeSelector["default"], {
        sizes: this.state.sizes,
        change: this.changeSize.bind(this)
      }), this.state.quantityEnabled ? /*#__PURE__*/_react["default"].createElement(_QuantitySelector["default"], {
        quantityAvailable: this.state.quantityAvailable,
        change: this.changeQuantity.bind(this)
      }) : /*#__PURE__*/_react["default"].createElement("select", {
        id: "quantity",
        name: "quantity",
        disabled: true
      }, /*#__PURE__*/_react["default"].createElement("option", null, "-")), this.state.sizes.length > 0 ? this.state.sizeSelection === "" ?
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvQWRkVG9DYXJ0LmpzeCJdLCJuYW1lcyI6WyJBZGRUb0NhcnQiLCJwcm9wcyIsInN0YXRlIiwic2l6ZUZpcnN0U2t1cyIsInNpemVzIiwic2l6ZVNlbGVjdGlvbiIsInF1YW50aXR5RW5hYmxlZCIsInF1YW50aXR5QXZhaWxhYmxlIiwicXVhbnRpdHlTZWxlY3Rpb24iLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJlbW92ZSIsIm5ld1NpemUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInF1YW50aXR5IiwibmV3UXVhbnRpdHkiLCJhbGVydCIsInNrdV9pZCIsIk51bWJlciIsInBhcnNlSW50IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvdW50IiwiaGVhZGVycyIsInRva2VuIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzaXplIiwiayIsInNrdXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY2hhbmdlU2l6ZSIsImJpbmQiLCJjaGFuZ2VRdWFudGl0eSIsImVuZm9yY2VTaXplU2VsZWN0aW9uIiwiYWRkVG9DYXJ0IiwidmlzaWJpbGl0eSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0o7QUFDQSxxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxhQUFhLEVBQUUsRUFESjtBQUVYQyxNQUFBQSxLQUFLLEVBQUUsRUFGSTtBQUdYQyxNQUFBQSxhQUFhLEVBQUUsRUFISjtBQUlYQyxNQUFBQSxlQUFlLEVBQUUsS0FKTjtBQUtYQyxNQUFBQSxpQkFBaUIsRUFBRSxDQUxSO0FBTVhDLE1BQUFBLGlCQUFp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QyxrQkFBTUMsUzs7QUFtSDdCO2VBRWMvQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaXplU2VsZWN0b3IgZnJvbSAnLi9TaXplU2VsZWN0b3IuanN4JztcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJy4vUXVhbnRpdHlTZWxlY3Rvci5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuXG5jbGFzcyBBZGRUb0NhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvL2V4cGVjdHMgcHJvcHMgdG8gY29udGFpbiBvYmplY3QgY2FsbGVkIHNrdXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNpemVGaXJzdFNrdXM6IHt9LFxuICAgICAgc2l6ZXM6IFtdLFxuICAgICAgc2l6ZVNlbGVjdGlvbjogJycsXG4gICAgICBxdWFudGl0eUVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcXVhbnRpdHlBdmFpbGFibGU6IDAsXG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogbnVsbFxuICAgIH07XG4gIH1cblxuICBjaGFuZ2VTaXplKGUpIHtcbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzbGVjdGlvbiBhd2F5IGZvcm10aGUgZGVmYXVsdCwgcmVtb3ZlIFwiU2VsZWN0IFNpemUgYXMgYW4gb3B0aW9uXCJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLm9wdGlvbnNbMF0udmFsdWUgPT09ICdTZWxlY3QgU2l6ZScpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykucmVtb3ZlKDApO1xuICAgIH1cbiAgICB2YXIgbmV3U2l6ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpLnZhbHVlID0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpemVTZWxlY3Rpb246IG5ld1NpemUsXG4gICAgICBxdWFudGl0eUVuYWJsZWQ6IHRydWUsXG4gICAgICBxdWFudGl0eUF2YWlsYWJsZTogdGhpcy5zdGF0ZS5zaXplRmlyc3RTa3VzW25ld1NpemVdLnF1YW50aXR5LFxuICAgICAgcXVhbnRpdHlTZWxlY3Rpb246IDFcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVF1YW50aXR5KGUpIHtcbiAgICB2YXIgbmV3UXVhbnRpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1YW50aXR5U2VsZWN0aW9uOiBuZXdRdWFudGl0eVxuICAgIH0pO1xuICB9XG5cbiAgZW5mb3JjZVNpemVTZWxlY3Rpb24oZSkge1xuICAgIC8vb3BlbnMgc2l6ZSBkcm9wZG93blxuICAgIC8vZGlzcGxheXMgYSBtZXNzYWdlIHRoYXQgc2F5cyBcIlBsZWFzZSBzZWxlY3Qgc2l6ZVwiXG4gICAgLy9jb21lIGJhY2sgdG8gdGhpcyBpZiB0aW1lIHRvIGZpZ3VyZSBvdXQgaG93IHRvIG9wZW4gdGhlIGRyb3Bkb3duIGFuZCBkaXNwbGF5IGEgbW9yZSBncmFjZWZ1bCBtZXNzYWdlXG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3Qgc2l6ZScpO1xuICB9XG5cbiAgYWRkVG9DYXJ0KGUpIHtcbiAgICAvL21heSBub3QgYmUgd29ya2luZyBwcm9wZXJseS4gV2lsbCBoYXZlIHRvIHRlc3QgYWdhaW4gd2hlbiBJIGhhdmUgYSByZWFsIFNLVSBpbnN0ZWFkIG9mIGR1bW15IGRhdGFcbiAgICB2YXIgc2t1X2lkID0gTnVtYmVyLnBhcnNlSW50KHRoaXMuc3RhdGUuc2l6ZUZpcnN0U2t1c1t0aGlzLnN0YXRlLnNpemVTZWxlY3Rpb25dLnNrdV9pZCk7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICdodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9jYXJ0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2t1X2lkOiBza3VfaWQsXG4gICAgICAgIGNvdW50OiB0aGlzLnN0YXRlLnF1YW50aXR5U2VsZWN0aW9uXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnYWRkZWQgdG8gY2FydCcpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL3BvcHVsYXRlcyBzaXplRmlyc3RTa3VzIGFuZCBzaXplcyBvYmplY3RzXG4gICAgdmFyIHNpemVGaXJzdFNrdXMgPSB7fTtcbiAgICB2YXIgc2l6ZSwgcXVhbnRpdHk7XG4gICAgZm9yICh2YXIgayBpbiB0aGlzLnByb3BzLnNrdXMpIHtcbiAgICAgIHNpemUgPSB0aGlzLnByb3BzLnNrdXNba10uc2l6ZTtcbiAgICAgIHF1YW50aXR5ID0gdGhpcy5wcm9wcy5za3VzW2tdLnF1YW50aXR5O1xuICAgICAgc2l6ZUZpcnN0U2t1c1tzaXplXSA9IHtcbiAgICAgICAgc2t1X2lkOiBrLFxuICAgICAgICBxdWFudGl0eTogcXVhbnRpdHlcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2l6ZUZpcnN0U2t1czogc2l6ZUZpcnN0U2t1cyxcbiAgICAgIHNpemVzOiBPYmplY3Qua2V5cyhzaXplRmlyc3RTa3VzKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaXplcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzaXplXCIgbmFtZT1cInNpemVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxvcHRpb24+T1VUIE9GIFNUT0NLPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxTaXplU2VsZWN0b3Igc2l6ZXM9e3RoaXMuc3RhdGUuc2l6ZXN9IGNoYW5nZT17dGhpcy5jaGFuZ2VTaXplLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWFudGl0eUVuYWJsZWQgP1xuICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yIHF1YW50aXR5QXZhaWxhYmxlPXt0aGlzLnN0YXRlLnF1YW50aXR5QXZhaWxhYmxlfSBjaGFuZ2U9e3RoaXMuY2hhbmdlUXVhbnRpdHkuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8c2VsZWN0IGlkPVwicXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxvcHRpb24+LTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNpemVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2l6ZVNlbGVjdGlvbiA9PT0gXCJcIiA/XG4gICAgICAgICAgICAvKiB0aGVyZSBpcyBxdWFudGl0eSwgYnV0IHNpemUgaXMgbm90IHNlbGVjdGVkLiBCdXR0b24gb3BlbnMgZHJvcGRvd24gZGlzcGxheSBtZXNzYWdlICovXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW5mb3JjZVNpemVTZWxlY3Rpb24uYmluZCh0aGlzKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIC8qIHF1YW50aXR5IGFuZCBzaXplIHNlbGVjdGVkLiBCdXR0b24gYWRkcyB0byBjYXJ0ICovXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVG9DYXJ0LmJpbmQodGhpcyl9PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgOlxuICAgICAgICAgIC8qIGhpZGUgYnV0dG9uICovXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e3Zpc2liaWxpdHk6ICdoaWRkZW4nfX0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb0NhcnQ7Il19