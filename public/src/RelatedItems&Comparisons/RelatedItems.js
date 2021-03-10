"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

require("react-multi-carousel/lib/styles.css");

require("bootstrap/dist/css/bootstrap.min.css");

var _AddToYourFit = _interopRequireDefault(require("./AddToYourFit.jsx"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

var _placeholderimg = _interopRequireDefault(require("./content/placeholderimg.jpeg"));

var _CardFormatter = _interopRequireDefault(require("./CardFormatter.jsx"));

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
      favorites: []
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
    _this.handleCardClick = _this.handleCardClick.bind(_assertThisInitialized(_this));
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
      })["catch"](function (err) {
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
        }).then(function (singleProduct) {
          _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/".concat(productSearchId, "/styles"), {
            headers: {
              Authorization: _token["default"]
            }
          }).then(function (styles) {
            var imgs = styles.data.results[0].photos;
            singleProduct.images = imgs;
            return singleProduct;
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
    key: "handleCardClick",
    value: function handleCardClick(e) {
      e.preventDefault();
      var id = e.target.id;
      var overviewChanger = this.props.handleProductChange;
      overviewChanger(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "related-items"
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        id: "related-title"
      }, "Related Items"), /*#__PURE__*/_react["default"].createElement(_reactMultiCarousel["default"], {
        responsive: this.responsive
      }, this.state.relatedProductsInfo.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_CardFormatter["default"], {
          id: item.id,
          image: item.images,
          placeHolderImg: _placeholderimg["default"],
          category: item.category,
          name: item.name,
          price: item.price,
          rating: "rating",
          handleClick: _this4.handleCardClick,
          key: item.id
        });
      })));
    }
  }]);

  return RelatedItems;
}(_react["default"].Component);

;
var _default = RelatedItems; //(item.id, item.images, placeHolderImg, item.category, item.name, item.price, 'rating', this.handleCardClick)

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1JlbGF0ZWRJdGVtcy5qc3giXSwibmFtZXMiOlsiUmVsYXRlZEl0ZW1zIiwicHJvcHMiLCJzdGF0ZSIsInJlbGF0ZWRJdGVtcyIsInJlbGF0ZWRJdGVtc0xvYWRlZCIsInJlbGF0ZWRQcm9kdWN0c0luZm8iLCJmYXZvcml0ZXMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiaGFuZGxlQ2FyZENsaWNrIiwiYmluZCIsImdldFJlbGF0ZWRJdGVtcyIsImF4aW9zIiwiZ2V0IiwicHJvZHVjdElkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZWxhdGVkSXRlbXNBcnJheSIsImRhdGEiLCJnZXRSZWxhdGVkSXRlbXNJbmZvIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbGF0ZWRJdGVtc0xpc3QiLCJwcm9kdWN0cyIsImkiLCJwcm9kdWN0U2VhcmNoSWQiLCJzaW5nbGVQcm9kdWN0IiwicHJvZHVjdEluZm8iLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiZGVmYXVsdF9wcmljZSIsInN0eWxlcyIsImltZ3MiLCJyZXN1bHRzIiwicGhvdG9zIiwiaW1hZ2VzIiwicHJvZHVjdCIsInB1c2giLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm92ZXJ2aWV3Q2hhbmdlciIsImhhbmRsZVByb2R1Y3RDaGFuZ2UiLCJtYXAiLCJpdGVtIiwicGxhY2VIb2xkZXJJbWciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7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QUUsR0FBR2MsQ0FBQyxDQUFDRSxNQUFGLENBQVNoQixFQUFsQjtBQUNBLFVBQUlpQixlQUFlLEdBQUcsS0FBS3RELEtBQUwsQ0FBV3VELG1CQUFqQztBQUNBRCxNQUFBQSxlQUFlLENBQUNqQixFQUFELENBQWY7QUFDRDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDUCwwQkFDRTtBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsc0JBQ0U7QUFBSSxRQUFBLEVBQUUsRUFBQztBQUFQLHlCQURGLGVBSUUsZ0NBQUMsOEJBQUQ7QUFBVSxRQUFBLFVBQVUsRUFBRSxLQUFLL0I7QUFBM0IsU0FDRyxLQUFLTCxLQUFMLENBQVdHLG1CQUFYLENBQStCb0QsR0FBL0IsQ0FBbUMsVUFBQ0MsSUFBRDtBQUFBLDRCQUNsQyxnQ0FBQyx5QkFBRDtBQUFlLFVBQUEsRUFBRSxFQUFFQSxJQUFJLENBQUNwQixFQUF4QjtBQUE0QixVQUFBLEtBQUssRUFBRW9CLElBQUksQ0FBQ1gsTUFBeEM7QUFBZ0QsVUFBQSxjQUFjLEVBQUVZLDBCQUFoRTtBQUFnRixVQUFBLFFBQVEsRUFBRUQsSUFBSSxDQUFDbEIsUUFBL0Y7QUFBeUcsVUFBQSxJQUFJLEVBQUVrQixJQUFJLENBQUNuQixJQUFwSDtBQUEwSCxVQUFBLEtBQUssRUFBRW1CLElBQUksQ0FBQ2pCLEtBQXRJO0FBQTZJLFVBQUEsTUFBTSxFQUFDLFFBQXBKO0FBQTZKLFVBQUEsV0FBVyxFQUFFLE1BQUksQ0FBQ3pCLGVBQS9LO0FBQWdNLFVBQUEsR0FBRyxFQUFFMEMsSUFBSSxDQUFDcEI7QUFBMU0sVUFEa0M7QUFBQSxPQUFuQyxDQURILENBSkYsQ0FERjtBQVlEOzs7O0VBdkh3QnNCLGtCQUFNQyxTOztBQXdIaEM7ZUFFYzdELFksRUFFZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG4vLyBTdHlsaW5nXG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuLy8gTWlzYy5cbmltcG9ydCBBZGRUb1lvdXJGaXQgZnJvbSAnLi9BZGRUb1lvdXJGaXQuanN4JztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuaW1wb3J0IHBsYWNlSG9sZGVySW1nIGZyb20gJy4vY29udGVudC9wbGFjZWhvbGRlcmltZy5qcGVnJztcbi8vIEhlbHBlciBGbidzXG5pbXBvcnQgQ2FyZEZvcm1hdHRlciBmcm9tICcuL0NhcmRGb3JtYXR0ZXIuanN4JztcblxuXG4vL1dFIE5FRUQgQ09OVEVOVCBMT0FERVJTIElOIE9VUiBXRUJQQUNLIENPTkZJRyBBTkQgUEFDS0FHRSBKU09OXG5cbmNsYXNzIFJlbGF0ZWRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlbGF0ZWRJdGVtczogW10sXG4gICAgICByZWxhdGVkSXRlbXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgcmVsYXRlZFByb2R1Y3RzSW5mbzogW10sXG4gICAgICBmYXZvcml0ZXM6IFtdXG4gICAgfVxuXG4gICAgLy8gY2Fyb3VzZWwgcmVzaXppbmdcbiAgICB0aGlzLnJlc3BvbnNpdmUgPSB7XG4gICAgICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxuICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgICAgIGl0ZW1zOiA1XG4gICAgICB9LFxuICAgICAgZGVza3RvcDoge1xuICAgICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICAgIGl0ZW1zOiAzXG4gICAgICB9LFxuICAgICAgdGFibGV0OiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgICBpdGVtczogMlxuICAgICAgfSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgICAgaXRlbXM6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNhcmRDbGljayA9IHRoaXMuaGFuZGxlQ2FyZENsaWNrLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRSZWxhdGVkSXRlbXMoKVxuICB9XG5cbiAgZ2V0UmVsYXRlZEl0ZW1zKCkge1xuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcHJvZHVjdHMvJHt0aGlzLnByb3BzLnByb2R1Y3RJZH0vcmVsYXRlZGAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChyZWxhdGVkSXRlbXMpID0+IHtcbiAgICAgIGxldCByZWxhdGVkSXRlbXNBcnJheSA9IHJlbGF0ZWRJdGVtcy5kYXRhO1xuICAgICAgdGhpcy5nZXRSZWxhdGVkSXRlbXNJbmZvKHJlbGF0ZWRJdGVtc0FycmF5KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcbiAgfVxuXG4gIGdldFJlbGF0ZWRJdGVtc0luZm8ocmVsYXRlZEl0ZW1zTGlzdCkge1xuICAgIGxldCBwcm9kdWN0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVsYXRlZEl0ZW1zTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb2R1Y3RTZWFyY2hJZCA9IHJlbGF0ZWRJdGVtc0xpc3RbaV07XG4gICAgICBsZXQgc2luZ2xlUHJvZHVjdCA9IHt9XG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdFNlYXJjaElkfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocHJvZHVjdEluZm8pID0+IHtcbiAgICAgICAgc2luZ2xlUHJvZHVjdC5pZCA9IHByb2R1Y3RJbmZvLmRhdGEuaWRcbiAgICAgICAgc2luZ2xlUHJvZHVjdC5uYW1lID0gcHJvZHVjdEluZm8uZGF0YS5uYW1lXG4gICAgICAgIHNpbmdsZVByb2R1Y3QuY2F0ZWdvcnkgPSBwcm9kdWN0SW5mby5kYXRhLmNhdGVnb3J5XG4gICAgICAgIHNpbmdsZVByb2R1Y3QucHJpY2UgPSBwcm9kdWN0SW5mby5kYXRhLmRlZmF1bHRfcHJpY2VcbiAgICAgICAgcmV0dXJuIHNpbmdsZVByb2R1Y3RcbiAgICAgIH0pXG4gICAgICAudGhlbigoc2luZ2xlUHJvZHVjdCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7cHJvZHVjdFNlYXJjaElkfS9zdHlsZXNgLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChzdHlsZXMpID0+IHtcbiAgICAgICAgICBsZXQgaW1ncyA9IHN0eWxlcy5kYXRhLnJlc3VsdHNbMF0ucGhvdG9zXG4gICAgICAgICAgc2luZ2xlUHJvZHVjdC5pbWFnZXMgPSBpbWdzXG4gICAgICAgICAgcmV0dXJuIHNpbmdsZVByb2R1Y3Q7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgcHJvZHVjdHMucHVzaChwcm9kdWN0KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdHNJbmZvOiBwcm9kdWN0c1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNhcmRDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCBvdmVydmlld0NoYW5nZXIgPSB0aGlzLnByb3BzLmhhbmRsZVByb2R1Y3RDaGFuZ2U7XG4gICAgb3ZlcnZpZXdDaGFuZ2VyKGlkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInJlbGF0ZWQtaXRlbXNcIj5cbiAgICAgICAgPGg0IGlkPVwicmVsYXRlZC10aXRsZVwiPlxuICAgICAgICAgIFJlbGF0ZWQgSXRlbXNcbiAgICAgICAgPC9oND5cbiAgICAgICAgPENhcm91c2VsIHJlc3BvbnNpdmU9e3RoaXMucmVzcG9uc2l2ZX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUucmVsYXRlZFByb2R1Y3RzSW5mby5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxDYXJkRm9ybWF0dGVyIGlkPXtpdGVtLmlkfSBpbWFnZT17aXRlbS5pbWFnZXN9IHBsYWNlSG9sZGVySW1nPXtwbGFjZUhvbGRlckltZ30gY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9IG5hbWU9e2l0ZW0ubmFtZX0gcHJpY2U9e2l0ZW0ucHJpY2V9IHJhdGluZz0ncmF0aW5nJyBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDYXJkQ2xpY2t9IGtleT17aXRlbS5pZH0vPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWxhdGVkSXRlbXM7XG5cbi8vKGl0ZW0uaWQsIGl0ZW0uaW1hZ2VzLCBwbGFjZUhvbGRlckltZywgaXRlbS5jYXRlZ29yeSwgaXRlbS5uYW1lLCBpdGVtLnByaWNlLCAncmF0aW5nJywgdGhpcy5oYW5kbGVDYXJkQ2xpY2spIl19