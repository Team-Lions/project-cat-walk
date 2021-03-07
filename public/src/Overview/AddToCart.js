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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvQWRkVG9DYXJ0LmpzeCJdLCJuYW1lcyI6WyJBZGRUb0NhcnQiLCJwcm9wcyIsInN0YXRlIiwic2l6ZVNlbGVjdGlvbiIsInF1YW50aXR5RW5hYmxlZCIsInF1YW50aXR5QXZhaWxhYmxlIiwicXVhbnRpdHlTZWxlY3Rpb24iLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJlbW92ZSIsIm5ld1NpemUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInNpemVGaXJzdFNrdXMiLCJxdWFudGl0eSIsIm5ld1F1YW50aXR5IiwiYWxlcnQiLCJza3VfaWQiLCJOdW1iZXIiLCJwYXJzZUludCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJjb3VudCIsImhlYWRlcnMiLCJ0b2tlbiIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic2l6ZXMiLCJsZW5ndGgiLCJjaGFuZ2VTaXplIiwiYmluZCIsImNoYW5nZVF1YW50aXR5IiwiZW5mb3JjZVNpemVTZWxlY3Rpb24iLCJhZGRUb0NhcnQiLCJ2aXNpYmlsaXR5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7QUFDSjtBQUNBLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGFBQWEsRUFBRSxFQURKO0FBRVhDLE1BQUFBLGVBQWUsRUFBRSxLQUZOO0FBR1hDLE1BQUFBLGlCQUFpQixFQUFFLENBSFI7QUFJWEMsTUFBQUEsaUJBQWlCLEVBQUU7QUFKUixLQUFiO0FBRmlCO0FBUWxCOzs7O1dBRUQsb0JBQVdDLENBQVgsRUFBYztBQUNaO0FBQ0EsVUFBR0MsUUFBUSxDQUFDQyxjQUFULENB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R0FDQyxLQUFLaEMsS0FBTCxDQUFXQyxhQUFYLEtBQTZCLEVBQTdCO0FBQUE7O0FBQ0U7QUFDQTtBQUFRLFFBQUEsT0FBTyxFQUFFLEtBQUttQyxvQkFBTCxDQUEwQkYsSUFBMUIsQ0FBK0IsSUFBL0I7QUFBakIsdUJBRkY7QUFBQTs7QUFJRTtBQUNBO0FBQVEsUUFBQSxPQUFPLEVBQUUsS0FBS0csU0FBTCxDQUFlSCxJQUFmLENBQW9CLElBQXBCO0FBQWpCLHVCQU5IO0FBQUE7O0FBUUM7QUFDQTtBQUFRLFFBQUEsS0FBSyxFQUFFO0FBQUNJLFVBQUFBLFVBQVUsRUFBRTtBQUFiO0FBQWYsdUJBeEJKLENBREY7QUE2QkQ7Ozs7RUE5RnFCQyxrQkFBTUMsUzs7QUErRjdCO2VBRWMxQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaXplU2VsZWN0b3IgZnJvbSAnLi9TaXplU2VsZWN0b3IuanN4JztcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJy4vUXVhbnRpdHlTZWxlY3Rvci5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuXG5jbGFzcyBBZGRUb0NhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvL2V4cGVjdHMgcHJvcHMgdG8gY29udGFpbiBvYmplY3QgY2FsbGVkIHNrdXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNpemVTZWxlY3Rpb246ICcnLFxuICAgICAgcXVhbnRpdHlFbmFibGVkOiBmYWxzZSxcbiAgICAgIHF1YW50aXR5QXZhaWxhYmxlOiAwLFxuICAgICAgcXVhbnRpdHlTZWxlY3Rpb246IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlU2l6ZShlKSB7XG4gICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3Qgc2xlY3Rpb24gYXdheSBmb3JtdGhlIGRlZmF1bHQsIHJlbW92ZSBcIlNlbGVjdCBTaXplIGFzIGFuIG9wdGlvblwiXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKS5vcHRpb25zWzBdLnZhbHVlID09PSAnU2VsZWN0IFNpemUnKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScpLnJlbW92ZSgwKTtcbiAgICB9XG4gICAgdmFyIG5ld1NpemUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA9IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaXplU2VsZWN0aW9uOiBuZXdTaXplLFxuICAgICAgcXVhbnRpdHlFbmFibGVkOiB0cnVlLFxuICAgICAgcXVhbnRpdHlBdmFpbGFibGU6IHRoaXMucHJvcHMuc2l6ZUZpcnN0U2t1c1tuZXdTaXplXS5xdWFudGl0eSxcbiAgICAgIHF1YW50aXR5U2VsZWN0aW9uOiAxXG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VRdWFudGl0eShlKSB7XG4gICAgdmFyIG5ld1F1YW50aXR5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWFudGl0eVNlbGVjdGlvbjogbmV3UXVhbnRpdHlcbiAgICB9KTtcbiAgfVxuXG4gIGVuZm9yY2VTaXplU2VsZWN0aW9uKGUpIHtcbiAgICAvL29wZW5zIHNpemUgZHJvcGRvd25cbiAgICAvL2Rpc3BsYXlzIGEgbWVzc2FnZSB0aGF0IHNheXMgXCJQbGVhc2Ugc2VsZWN0IHNpemVcIlxuICAgIC8vY29tZSBiYWNrIHRvIHRoaXMgaWYgdGltZSB0byBmaWd1cmUgb3V0IGhvdyB0byBvcGVuIHRoZSBkcm9wZG93biBhbmQgZGlzcGxheSBhIG1vcmUgZ3JhY2VmdWwgbWVzc2FnZVxuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IHNpemUnKTtcbiAgfVxuXG4gIGFkZFRvQ2FydChlKSB7XG4gICAgLy9tYXkgbm90IGJlIHdvcmtpbmcgcHJvcGVybHkuIFdpbGwgaGF2ZSB0byB0ZXN0IGFnYWluIHdoZW4gSSBoYXZlIGEgcmVhbCBTS1UgaW5zdGVhZCBvZiBkdW1teSBkYXRhXG4gICAgdmFyIHNrdV9pZCA9IE51bWJlci5wYXJzZUludCh0aGlzLnByb3BzLnNpemVGaXJzdFNrdXNbdGhpcy5zdGF0ZS5zaXplU2VsZWN0aW9uXS5za3VfaWQpO1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvY2FydCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNrdV9pZDogc2t1X2lkLFxuICAgICAgICBjb3VudDogdGhpcy5zdGF0ZS5xdWFudGl0eVNlbGVjdGlvblxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2FkZGVkIHRvIGNhcnQnKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5zaXplcy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzaXplXCIgbmFtZT1cInNpemVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIDxvcHRpb24+T1VUIE9GIFNUT0NLPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxTaXplU2VsZWN0b3Igc2l6ZXM9e3RoaXMucHJvcHMuc2l6ZXN9IGNoYW5nZT17dGhpcy5jaGFuZ2VTaXplLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5xdWFudGl0eUVuYWJsZWQgP1xuICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yIHF1YW50aXR5QXZhaWxhYmxlPXt0aGlzLnN0YXRlLnF1YW50aXR5QXZhaWxhYmxlfSBjaGFuZ2U9e3RoaXMuY2hhbmdlUXVhbnRpdHkuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInF1YW50aXR5XCIgbmFtZT1cInF1YW50aXR5XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8b3B0aW9uPi08L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5wcm9wcy5zaXplcy5sZW5ndGggPiAwID9cbiAgICAgICAgICB0aGlzLnN0YXRlLnNpemVTZWxlY3Rpb24gPT09IFwiXCIgP1xuICAgICAgICAgICAgLyogdGhlcmUgaXMgcXVhbnRpdHksIGJ1dCBzaXplIGlzIG5vdCBzZWxlY3RlZC4gQnV0dG9uIG9wZW5zIGRyb3Bkb3duIGRpc3BsYXkgbWVzc2FnZSAqL1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVuZm9yY2VTaXplU2VsZWN0aW9uLmJpbmQodGhpcyl9PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAvKiBxdWFudGl0eSBhbmQgc2l6ZSBzZWxlY3RlZC4gQnV0dG9uIGFkZHMgdG8gY2FydCAqL1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRvQ2FydC5iaW5kKHRoaXMpfT5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgIDpcbiAgICAgICAgICAvKiBoaWRlIGJ1dHRvbiAqL1xuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3t2aXNpYmlsaXR5OiAnaGlkZGVuJ319PkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0OyJdfQ==