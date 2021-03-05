"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _SingleRelatedItem = _interopRequireDefault(require("./SingleRelatedItem.jsx"));

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

require("react-multi-carousel/lib/styles.css");

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

//WE NEED CONTENT LOADERS IN OUR WEBPACK CONFIG AND PACKAGE JSON
var RelatedItems = /*#__PURE__*/function (_React$Component) {
  _inherits(RelatedItems, _React$Component);

  var _super = _createSuper(RelatedItems);

  function RelatedItems(props) {
    var _this;

    _classCallCheck(this, RelatedItems);

    _this = _super.call(this, props);
    _this.state = {
      relatedItems: []
    };
    _this.responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
          max: 4000,
          min: 3000
        },
        items: 5
      },
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      }
    };
    return _this;
  } // take current product id
  //make get request for related items
  //in then block store related items array
  // loop through items and make get request for each item and push their data into relatedItems array
  // pass dowm related items to single related item


  _createClass(RelatedItems, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactMultiCarousel["default"], {
        responsive: this.responsive
      }, /*#__PURE__*/_react["default"].createElement("div", null, "Item 1"), /*#__PURE__*/_react["default"].createElement("div", null, "Item 2"), /*#__PURE__*/_react["default"].createElement("div", null, "Item 3"), /*#__PURE__*/_react["default"].createElement("div", null, "Item 4")), ";");
    }
  }]);

  return RelatedItems;
}(_react["default"].Component);

;
var _default = RelatedItems;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1JlbGF0ZWRJdGVtcy5qc3giXSwibmFtZXMiOlsiUmVsYXRlZEl0ZW1zIiwicHJvcHMiLCJzdGF0ZSIsInJlbGF0ZWRJdGVtcyIsInJlc3BvbnNpdmUiLCJzdXBlckxhcmdlRGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRlc2t0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBRU1BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsWUFBWSxFQUFFO0FBREgsS0FBYjtBQUdBLFVBQUtDLFVBQUwsR0FBa0I7QUFDaEJDLE1BQUFBLGlCQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRTtBQUFFQyxVQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxVQUFBQSxHQUFHLEVBQUU7QUFBbEIsU0FGSztBQUdqQkMsUUFBQUEsS0FBSyxFQUFFO0FBSFUsT0FESDtBQU1oQkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BKLFFBQUFBLFVBQVUsRUFBRTtBQUFFQyxVQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxVQUFBQSxHQUFHLEVBQUU7QUFBbEIsU0FETDtBQUVQQyxRQUFBQSxLQUFLLEVBQUU7QUFGQSxPQU5PO0FBVWhCRSxNQUFBQSxNQUFNLEVBQUU7QUFDTkwsUUFBQUEsVUFBVSxFQUFFO0FBQUVDLFVBQUFBLEdBQUcsRUFBRSxJQUFQO0FBQWFDLFVBQUFBLEdBQUcsRUFBRTtBQUFsQixTQUROO0FBRU5DLFFBQUFBLEtBQUssRUFBRTtBQUZELE9BVlE7QUFjaEJHLE1BQUFBLE1BQU0sRUFBRTtBQUNOTixRQUFBQSxVQUFVLEVBQUU7QUFBRUMsVUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWUMsVUFBQUEsR0FBRyxFQUFFO0FBQWpCLFNBRE47QUFFTkMsUUFBQUEsS0FBSyxFQUFFO0FBRkQ7QUFkUSxLQUFsQjtBQUxpQjtBQXdCbEIsRyxDQUNEO0FBRUE7QUFFQTtBQUNBO0FBR0E7Ozs7O1dBQ0Esa0JBQVM7QUFDUCwwQkFDRSwwREFDRSxnQ0FBQyw4QkFBRDtBQUFVLFFBQUEsVUFBVSxFQUFFLEtBQUtMO0FBQTNCLHNCQUNFLHNEQURGLGVBRUUsc0RBRkYsZUFHRSxzREFIRixlQUlFLHNEQUpGLENBREYsTUFERjtBQVVEOzs7O0VBOUN3QlMsa0JBQU1DLFM7O0FBK0NoQztlQUVjZCxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgU2luZ2xlUmVsYXRlZEl0ZW0gZnJvbSAnLi9TaW5nbGVSZWxhdGVkSXRlbS5qc3gnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cblxuLy9XRSBORUVEIENPTlRFTlQgTE9BREVSUyBJTiBPVVIgV0VCUEFDSyBDT05GSUcgQU5EIFBBQ0tBR0UgSlNPTlxuXG5jbGFzcyBSZWxhdGVkSXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWxhdGVkSXRlbXM6IFtdXG4gICAgfVxuICAgIHRoaXMucmVzcG9uc2l2ZSA9IHtcbiAgICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcbiAgICAgICAgaXRlbXM6IDVcbiAgICAgIH0sXG4gICAgICBkZXNrdG9wOiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgICAgaXRlbXM6IDNcbiAgICAgIH0sXG4gICAgICB0YWJsZXQ6IHtcbiAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICAgIGl0ZW1zOiAyXG4gICAgICB9LFxuICAgICAgbW9iaWxlOiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgICBpdGVtczogMVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyB0YWtlIGN1cnJlbnQgcHJvZHVjdCBpZFxuXG4gIC8vbWFrZSBnZXQgcmVxdWVzdCBmb3IgcmVsYXRlZCBpdGVtc1xuXG4gIC8vaW4gdGhlbiBibG9jayBzdG9yZSByZWxhdGVkIGl0ZW1zIGFycmF5XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyBhbmQgbWFrZSBnZXQgcmVxdWVzdCBmb3IgZWFjaCBpdGVtIGFuZCBwdXNoIHRoZWlyIGRhdGEgaW50byByZWxhdGVkSXRlbXMgYXJyYXlcblxuXG4gIC8vIHBhc3MgZG93bSByZWxhdGVkIGl0ZW1zIHRvIHNpbmdsZSByZWxhdGVkIGl0ZW1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17dGhpcy5yZXNwb25zaXZlfT5cbiAgICAgICAgICA8ZGl2Pkl0ZW0gMTwvZGl2PlxuICAgICAgICAgIDxkaXY+SXRlbSAyPC9kaXY+XG4gICAgICAgICAgPGRpdj5JdGVtIDM8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pkl0ZW0gNDwvZGl2PlxuICAgICAgICA8L0Nhcm91c2VsPjtcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRlZEl0ZW1zOyJdfQ==