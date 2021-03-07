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
        quantityAvailable: this.props.sizeFirstSkus[newSize].quantity,
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
    } // componentDidMount() {
    //   //populates sizeFirstSkus and sizes objects
    //   var sizeFirstSkus = {};
    //   var size, quantity;
    //   for (var k in this.props.skus) {
    //     size = this.props.skus[k].size;
    //     quantity = this.props.skus[k].quantity;
    //     sizeFirstSkus[size] = {
    //       sku_id: k,
    //       quantity: quantity
    //     };
    //   }
    //   this.setState({
    //     sizeFirstSkus: sizeFirstSkus,
    //     sizes: Object.keys(sizeFirstSkus)
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.sizes.length === 0 ? /*#__PURE__*/_react["default"].createElement("select", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvQWRkVG9DYXJ0LmpzeCJdLCJuYW1lcyI6WyJBZGRUb0NhcnQiLCJwcm9wcyIsInN0YXRlIiwic2l6ZVNlbGVjdGlvbiIsInF1YW50aXR5RW5hYmxlZCIsInF1YW50aXR5QXZhaWxhYmxlIiwicXVhbnRpdHlTZWxlY3Rpb24iLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJlbW92ZSIsIm5ld1NpemUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInNpemVGaXJzdFNrdXMiLCJxdWFudGl0eSIsIm5ld1F1YW50aXR5IiwiYWxlcnQiLCJza3VfaWQiLCJOdW1iZXIiLCJwYXJzZUludCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJjb3VudCIsImhlYWRlcnMiLCJ0b2tlbiIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic2l6ZXMiLCJsZW5ndGgiLCJjaGFuZ2VTaXplIiwiYmluZCIsImNoYW5nZVF1YW50aXR5IiwiZW5mb3JjZVNpemVTZWxlY3Rpb24iLCJhZGRUb0NhcnQiLCJ2aXNpYmlsaXR5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7QUFDSjtBQUNBLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGFBQWEsRUFBRSxFQURKO0FBRVhDLE1BQUFBLGVBQWUsRUFBRSxLQUZOO0FBR1hDLE1BQUFBLGlCQUFpQixFQUFFLENBSFI7QUFJWEMsTUFBQUEsaUJBQWlCLEVBQUU7QUFKUixLQUFiO0FBRmlCO0FBUWxCOzs7O1dBRUQsb0JBQVdDLENBQVgsRUFBYztBQUNaO0FBQ0EsVUFBR0MsUUFBUSxDQUFDQyxjQUFULENB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LFFBQUEsUUFBUTtBQUE5QyxzQkFDRSxvREFERixDQVhKLEVBZUcsS0FBS25DLEtBQUwsQ0FBV2dDLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQTFCLEdBQ0MsS0FBS2hDLEtBQUwsQ0FBV0MsYUFBWCxLQUE2QixFQUE3QjtBQUFBOztBQUNFO0FBQ0E7QUFBUSxRQUFBLE9BQU8sRUFBRSxLQUFLbUMsb0JBQUwsQ0FBMEJGLElBQTFCLENBQStCLElBQS9CO0FBQWpCLHVCQUZGO0FBQUE7O0FBSUU7QUFDQTtBQUFRLFFBQUEsT0FBTyxFQUFFLEtBQUtHLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQjtBQUFqQix1QkFOSDtBQUFBOztBQVFDO0FBQ0E7QUFBUSxRQUFBLEtBQUssRUFBRTtBQUFDSSxVQUFBQSxVQUFVLEVBQUU7QUFBYjtBQUFmLHVCQXhCSixDQURGO0FBNkJEOzs7O0VBaEhxQkMsa0JBQU1DLFM7O0FBaUg3QjtlQUVjMUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2l6ZVNlbGVjdG9yIGZyb20gJy4vU2l6ZVNlbGVjdG9yLmpzeCc7XG5pbXBvcnQgUXVhbnRpdHlTZWxlY3RvciBmcm9tICcuL1F1YW50aXR5U2VsZWN0b3IuanN4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcblxuY2xhc3MgQWRkVG9DYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9leHBlY3RzIHByb3BzIHRvIGNvbnRhaW4gb2JqZWN0IGNhbGxlZCBza3VzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaXplU2VsZWN0aW9uOiAnJyxcbiAgICAgIHF1YW50aXR5RW5hYmxlZDogZmFsc2UsXG4gICAgICBxdWFudGl0eUF2YWlsYWJsZTogMCxcbiAgICAgIHF1YW50aXR5U2VsZWN0aW9uOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVNpemUoZSkge1xuICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNsZWN0aW9uIGF3YXkgZm9ybXRoZSBkZWZhdWx0LCByZW1vdmUgXCJTZWxlY3QgU2l6ZSBhcyBhbiBvcHRpb25cIlxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykub3B0aW9uc1swXS52YWx1ZSA9PT0gJ1NlbGVjdCBTaXplJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS5yZW1vdmUoMCk7XG4gICAgfVxuICAgIHZhciBuZXdTaXplID0gZS50YXJnZXQudmFsdWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUgPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2l6ZVNlbGVjdGlvbjogbmV3U2l6ZSxcbiAgICAgIHF1YW50aXR5RW5hYmxlZDogdHJ1ZSxcbiAgICAgIHF1YW50aXR5QXZhaWxhYmxlOiB0aGlzLnByb3BzLnNpemVGaXJzdFNrdXNbbmV3U2l6ZV0ucXVhbnRpdHksXG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogMVxuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlUXVhbnRpdHkoZSkge1xuICAgIHZhciBuZXdRdWFudGl0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVhbnRpdHlTZWxlY3Rpb246IG5ld1F1YW50aXR5XG4gICAgfSk7XG4gIH1cblxuICBlbmZvcmNlU2l6ZVNlbGVjdGlvbihlKSB7XG4gICAgLy9vcGVucyBzaXplIGRyb3Bkb3duXG4gICAgLy9kaXNwbGF5cyBhIG1lc3NhZ2UgdGhhdCBzYXlzIFwiUGxlYXNlIHNlbGVjdCBzaXplXCJcbiAgICAvL2NvbWUgYmFjayB0byB0aGlzIGlmIHRpbWUgdG8gZmlndXJlIG91dCBob3cgdG8gb3BlbiB0aGUgZHJvcGRvd24gYW5kIGRpc3BsYXkgYSBtb3JlIGdyYWNlZnVsIG1lc3NhZ2VcbiAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBzaXplJyk7XG4gIH1cblxuICBhZGRUb0NhcnQoZSkge1xuICAgIC8vbWF5IG5vdCBiZSB3b3JraW5nIHByb3Blcmx5LiBXaWxsIGhhdmUgdG8gdGVzdCBhZ2FpbiB3aGVuIEkgaGF2ZSBhIHJlYWwgU0tVIGluc3RlYWQgb2YgZHVtbXkgZGF0YVxuICAgIHZhciBza3VfaWQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5wcm9wcy5zaXplRmlyc3RTa3VzW3RoaXMuc3RhdGUuc2l6ZVNlbGVjdGlvbl0uc2t1X2lkKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L2NhcnQnLFxuICAgICAgZGF0YToge1xuICAgICAgICBza3VfaWQ6IHNrdV9pZCxcbiAgICAgICAgY291bnQ6IHRoaXMuc3RhdGUucXVhbnRpdHlTZWxlY3Rpb25cbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCB0byBjYXJ0JylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIC8vcG9wdWxhdGVzIHNpemVGaXJzdFNrdXMgYW5kIHNpemVzIG9iamVjdHNcbiAgLy8gICB2YXIgc2l6ZUZpcnN0U2t1cyA9IHt9O1xuICAvLyAgIHZhciBzaXplLCBxdWFudGl0eTtcbiAgLy8gICBmb3IgKHZhciBrIGluIHRoaXMucHJvcHMuc2t1cykge1xuICAvLyAgICAgc2l6ZSA9IHRoaXMucHJvcHMuc2t1c1trXS5zaXplO1xuICAvLyAgICAgcXVhbnRpdHkgPSB0aGlzLnByb3BzLnNrdXNba10ucXVhbnRpdHk7XG4gIC8vICAgICBzaXplRmlyc3RTa3VzW3NpemVdID0ge1xuICAvLyAgICAgICBza3VfaWQ6IGssXG4gIC8vICAgICAgIHF1YW50aXR5OiBxdWFudGl0eVxuICAvLyAgICAgfTtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBzaXplRmlyc3RTa3VzOiBzaXplRmlyc3RTa3VzLFxuICAvLyAgICAgc2l6ZXM6IE9iamVjdC5rZXlzKHNpemVGaXJzdFNrdXMpXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLnNpemVzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInNpemVcIiBuYW1lPVwic2l6ZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPG9wdGlvbj5PVVQgT0YgU1RPQ0s8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA6XG4gICAgICAgICAgPFNpemVTZWxlY3RvciBzaXplcz17dGhpcy5wcm9wcy5zaXplc30gY2hhbmdlPXt0aGlzLmNoYW5nZVNpemUuYmluZCh0aGlzKX0vPlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLnF1YW50aXR5RW5hYmxlZCA/XG4gICAgICAgICAgPFF1YW50aXR5U2VsZWN0b3IgcXVhbnRpdHlBdmFpbGFibGU9e3RoaXMuc3RhdGUucXVhbnRpdHlBdmFpbGFibGV9IGNoYW5nZT17dGhpcy5jaGFuZ2VRdWFudGl0eS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJxdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPG9wdGlvbj4tPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMucHJvcHMuc2l6ZXMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaXplU2VsZWN0aW9uID09PSBcIlwiID9cbiAgICAgICAgICAgIC8qIHRoZXJlIGlzIHF1YW50aXR5LCBidXQgc2l6ZSBpcyBub3Qgc2VsZWN0ZWQuIEJ1dHRvbiBvcGVucyBkcm9wZG93biBkaXNwbGF5IG1lc3NhZ2UgKi9cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5lbmZvcmNlU2l6ZVNlbGVjdGlvbi5iaW5kKHRoaXMpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgLyogcXVhbnRpdHkgYW5kIHNpemUgc2VsZWN0ZWQuIEJ1dHRvbiBhZGRzIHRvIGNhcnQgKi9cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUb0NhcnQuYmluZCh0aGlzKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgICA6XG4gICAgICAgICAgLyogaGlkZSBidXR0b24gKi9cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7dmlzaWJpbGl0eTogJ2hpZGRlbid9fT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FydDsiXX0=