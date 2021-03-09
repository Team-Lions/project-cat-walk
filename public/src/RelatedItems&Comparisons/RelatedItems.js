"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

require("react-multi-carousel/lib/styles.css");

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _placeholderimg = _interopRequireDefault(require("./content/placeholderimg.jpeg"));

require("bootstrap/dist/css/bootstrap.min.css");

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
      relatedItems: [],
      relatedItemsLoaded: false,
      relatedProductsInfo: [],
      relatedProductsImg: []
    }; // carousel resizing

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
  }

  _createClass(RelatedItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRelatedItems();
    }
  }, {
    key: "getRelatedItems",
    value: function getRelatedItems() {
      var _this2 = this;

      _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(this.props.productId, "/related"), {
        headers: {
          Authorization: _token["default"]
        }
      }).then(function (relatedItems) {
        var relatedItemsArray = relatedItems.data;

        _this2.getRelatedItemsInfo(relatedItemsArray);
      }).then(function () {})["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "getRelatedItemsInfo",
    value: function getRelatedItemsInfo(relatedItemsList) {
      var _this3 = this;

      var products = [];

      var _loop = function _loop(i) {
        var productSearchId = relatedItemsList[i];
        var singleProduct = {};

        _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productSearchId), {
          headers: {
            Authorization: _token["default"]
          }
        }).then(function (productInfo) {
          singleProduct.id = productInfo.data.id;
          singleProduct.name = productInfo.data.name;
          singleProduct.category = productInfo.data.category;
          singleProduct.price = productInfo.data.default_price;
          return singleProduct;
        }).then(function (productDetails) {
          _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productSearchId, "/styles"), {
            headers: {
              Authorization: _token["default"]
            }
          }).then(function (styles) {
            var imgs = styles.data.results[0].photos;
            productDetails.images = imgs;
            return productDetails;
          }).then(function (product) {
            products.push(product);
          }).then(function () {
            _this3.setState({
              relatedProductsInfo: products
            });
          })["catch"](function (err) {
            console.log(err);
          });
        })["catch"](function (err) {
          console.log(err);
        });
      };

      for (var i = 0; i < relatedItemsList.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "related-items"
      }, /*#__PURE__*/_react["default"].createElement("h4", null, "Related Items"), /*#__PURE__*/_react["default"].createElement(_reactMultiCarousel["default"], {
        responsive: this.responsive
      }, this.state.relatedProductsInfo.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: "carousel-item"
        }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          border: "dark",
          style: {
            width: '14rem',
            height: '18rem'
          }
        }, /*#__PURE__*/_react["default"].createElement(_Card["default"].Img, {
          variant: "top",
          src: item.images[0].thumbnail_url ? item.images[0].thumbnail_url : _placeholderimg["default"]
        }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
          className: "mb-2 text-muted"
        }, item.category), /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, null, item.name), /*#__PURE__*/_react["default"].createElement(_Card["default"].Subtitle, {
          className: "mb-2 text-muted"
        }, item.price), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, "\u2605\u2605\u2605\u2605\u2605"))));
      })));
    }
  }]);

  return RelatedItems;
}(_react["default"].Component);

;
var _default = RelatedItems;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1JlbGF0ZWRJdGVtcy5qc3giXSwibmFtZXMiOlsiUmVsYXRlZEl0ZW1zIiwicHJvcHMiLCJzdGF0ZSIsInJlbGF0ZWRJdGVtcyIsInJlbGF0ZWRJdGVtc0xvYWRlZCIsInJlbGF0ZWRQcm9kdWN0c0luZm8iLCJyZWxhdGVkUHJvZHVjdHNJbWciLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiZ2V0UmVsYXRlZEl0ZW1zIiwiYXhpb3MiLCJnZXQiLCJwcm9kdWN0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidGhlbiIsInJlbGF0ZWRJdGVtc0FycmF5IiwiZGF0YSIsImdldFJlbGF0ZWRJdGVtc0luZm8iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVsYXRlZEl0ZW1zTGlzdCIsInByb2R1Y3RzIiwiaSIsInByb2R1Y3RTZWFyY2hJZCIsInNpbmdsZVByb2R1Y3QiLCJwcm9kdWN0SW5mbyIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJkZWZhdWx0X3ByaWNlIiwicHJvZHVjdERldGFpbHMiLCJzdHlsZXMiLCJpbWdzIiwicmVzdWx0cyIsInBob3RvcyIsImltYWdlcyIsInByb2R1Y3QiLCJwdXNoIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwid2lkdGgiLCJoZWlnaHQiLCJ0aHVtYm5haWxfdXJsIiwicGxhY2VIb2xkZXJJbWciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBRU1BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVos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RyxtQkFBWCxDQUErQjhDLEdBQS9CLENBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUM1Qyw0QkFDRTtBQUFLLFVBQUEsRUFBRSxFQUFDO0FBQVIsd0JBQ0csZ0NBQUMsZ0JBQUQ7QUFBTSxVQUFBLE1BQU0sRUFBQyxNQUFiO0FBQW9CLFVBQUEsS0FBSyxFQUFFO0FBQUVDLFlBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxZQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBM0Isd0JBQ0MsZ0NBQUMsZ0JBQUQsQ0FBTSxHQUFOO0FBQVUsVUFBQSxPQUFPLEVBQUMsS0FBbEI7QUFBd0IsVUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ04sTUFBTCxDQUFZLENBQVosRUFBZVMsYUFBZixHQUErQkgsSUFBSSxDQUFDTixNQUFMLENBQVksQ0FBWixFQUFlUyxhQUE5QyxHQUE4REM7QUFBM0YsVUFERCxlQUVDLGdDQUFDLGdCQUFELENBQU0sSUFBTixxQkFDRSxnQ0FBQyxnQkFBRCxDQUFNLFFBQU47QUFBZSxVQUFBLFNBQVMsRUFBQztBQUF6QixXQUNHSixJQUFJLENBQUNkLFFBRFIsQ0FERixlQUlFLGdDQUFDLGdCQUFELENBQU0sS0FBTixRQUNHYyxJQUFJLENBQUNmLElBRFIsQ0FKRixlQU9FLGdDQUFDLGdCQUFELENBQU0sUUFBTjtBQUFlLFVBQUEsU0FBUyxFQUFDO0FBQXpCLFdBQ0dlLElBQUksQ0FBQ2IsS0FEUixDQVBGLGVBVUUsZ0NBQUMsZ0JBQUQsQ0FBTSxJQUFOLHlDQVZGLENBRkQsQ0FESCxDQURGO0FBcUJELE9BdEJBLENBREgsQ0FKRixDQURGO0FBZ0NEOzs7O0VBckl3QmtCLGtCQUFNQyxTOztBQXNJaEM7ZUFFYzFELFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vaW1wb3J0IFNpbmdsZVJlbGF0ZWRJdGVtIGZyb20gJy4vU2luZ2xlUmVsYXRlZEl0ZW0uanN4JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHBsYWNlSG9sZGVySW1nIGZyb20gJy4vY29udGVudC9wbGFjZWhvbGRlcmltZy5qcGVnJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuXG4vL1dFIE5FRUQgQ09OVEVOVCBMT0FERVJTIElOIE9VUiBXRUJQQUNLIENPTkZJRyBBTkQgUEFDS0FHRSBKU09OXG5cbmNsYXNzIFJlbGF0ZWRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlbGF0ZWRJdGVtczogW10sXG4gICAgICByZWxhdGVkSXRlbXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgcmVsYXRlZFByb2R1Y3RzSW5mbzogW10sXG4gICAgICByZWxhdGVkUHJvZHVjdHNJbWc6IFtdXG4gICAgfVxuXG4gICAgLy8gY2Fyb3VzZWwgcmVzaXppbmdcbiAgICB0aGlzLnJlc3BvbnNpdmUgPSB7XG4gICAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgICAgIGl0ZW1zOiA1XG4gICAgICB9LFxuICAgICAgZGVza3RvcDoge1xuICAgICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICAgIGl0ZW1zOiAzXG4gICAgICB9LFxuICAgICAgdGFibGV0OiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgICBpdGVtczogMlxuICAgICAgfSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgICAgaXRlbXM6IDFcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRSZWxhdGVkSXRlbXMoKVxuICB9XG5cbiAgZ2V0UmVsYXRlZEl0ZW1zKCkge1xuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHt0aGlzLnByb3BzLnByb2R1Y3RJZH0vcmVsYXRlZGAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChyZWxhdGVkSXRlbXMpID0+IHtcbiAgICAgIGxldCByZWxhdGVkSXRlbXNBcnJheSA9IHJlbGF0ZWRJdGVtcy5kYXRhO1xuICAgICAgdGhpcy5nZXRSZWxhdGVkSXRlbXNJbmZvKHJlbGF0ZWRJdGVtc0FycmF5KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcblxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxuICB9XG5cbiAgZ2V0UmVsYXRlZEl0ZW1zSW5mbyhyZWxhdGVkSXRlbXNMaXN0KSB7XG4gICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWxhdGVkSXRlbXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvZHVjdFNlYXJjaElkID0gcmVsYXRlZEl0ZW1zTGlzdFtpXTtcbiAgICAgIGxldCBzaW5nbGVQcm9kdWN0ID0ge31cbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHtwcm9kdWN0U2VhcmNoSWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChwcm9kdWN0SW5mbykgPT4ge1xuICAgICAgICBzaW5nbGVQcm9kdWN0LmlkID0gcHJvZHVjdEluZm8uZGF0YS5pZFxuICAgICAgICBzaW5nbGVQcm9kdWN0Lm5hbWUgPSBwcm9kdWN0SW5mby5kYXRhLm5hbWVcbiAgICAgICAgc2luZ2xlUHJvZHVjdC5jYXRlZ29yeSA9IHByb2R1Y3RJbmZvLmRhdGEuY2F0ZWdvcnlcbiAgICAgICAgc2luZ2xlUHJvZHVjdC5wcmljZSA9IHByb2R1Y3RJbmZvLmRhdGEuZGVmYXVsdF9wcmljZVxuICAgICAgICByZXR1cm4gc2luZ2xlUHJvZHVjdFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwcm9kdWN0RGV0YWlscykgPT4ge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdFNlYXJjaElkfS9zdHlsZXNgLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChzdHlsZXMpID0+IHtcbiAgICAgICAgICBsZXQgaW1ncyA9IHN0eWxlcy5kYXRhLnJlc3VsdHNbMF0ucGhvdG9zXG4gICAgICAgICAgcHJvZHVjdERldGFpbHMuaW1hZ2VzID0gaW1nc1xuICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICBwcm9kdWN0cy5wdXNoKHByb2R1Y3QpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlbGF0ZWRQcm9kdWN0c0luZm86IHByb2R1Y3RzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicmVsYXRlZC1pdGVtc1wiPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgUmVsYXRlZCBJdGVtc1xuICAgICAgICA8L2g0PlxuICAgICAgICA8Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17dGhpcy5yZXNwb25zaXZlfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWxhdGVkUHJvZHVjdHNJbmZvLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgPENhcmQgYm9yZGVyPVwiZGFya1wiIHN0eWxlPXt7IHdpZHRoOiAnMTRyZW0nLCBoZWlnaHQ6ICcxOHJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtpdGVtLmltYWdlc1swXS50aHVtYm5haWxfdXJsID8gaXRlbS5pbWFnZXNbMF0udGh1bWJuYWlsX3VybCA6IHBsYWNlSG9sZGVySW1nfS8+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAg4piF4piF4piF4piF4piFXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRlZEl0ZW1zOyJdfQ==