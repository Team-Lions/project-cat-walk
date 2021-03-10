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
      var overviewChanger = this.props.handleOverviewChange;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1JlbGF0ZWRJdGVtcy5qc3giXSwibmFtZXMiOlsiUmVsYXRlZEl0ZW1zIiwicHJvcHMiLCJzdGF0ZSIsInJlbGF0ZWRJdGVtcyIsInJlbGF0ZWRJdGVtc0xvYWRlZCIsInJlbGF0ZWRQcm9kdWN0c0luZm8iLCJmYXZvcml0ZXMiLCJyZXNwb25zaXZlIiwic3VwZXJMYXJnZURlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiaGFuZGxlQ2FyZENsaWNrIiwiYmluZCIsImdldFJlbGF0ZWRJdGVtcyIsImF4aW9zIiwiZ2V0IiwicHJvZHVjdElkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInRoZW4iLCJyZWxhdGVkSXRlbXNBcnJheSIsImRhdGEiLCJnZXRSZWxhdGVkSXRlbXNJbmZvIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbGF0ZWRJdGVtc0xpc3QiLCJwcm9kdWN0cyIsImkiLCJwcm9kdWN0U2VhcmNoSWQiLCJzaW5nbGVQcm9kdWN0IiwicHJvZHVjdEluZm8iLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiZGVmYXVsdF9wcmljZSIsInN0eWxlcyIsImltZ3MiLCJyZXN1bHRzIiwicGhvdG9zIiwiaW1hZ2VzIiwicHJvZHVjdCIsInB1c2giLCJzZXRTdGF0ZSIsImxlbmd0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm92ZXJ2aWV3Q2hhbmdlciIsImhhbmRsZU92ZXJ2aWV3Q2hhbmdlIiwibWFwIiwiaXRlbSIsInBsYWNlSG9sZGVySW1nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7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QUFFLEdBQUdjLENBQUMsQ0FBQ0UsTUFBRixDQUFTaEIsRUFBbEI7QUFDQSxVQUFJaUIsZUFBZSxHQUFHLEtBQUt0RCxLQUFMLENBQVd1RCxvQkFBakM7QUFDQUQsTUFBQUEsZUFBZSxDQUFDakIsRUFBRCxDQUFmO0FBQ0Q7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBSyxRQUFBLEVBQUUsRUFBQztBQUFSLHNCQUNFO0FBQUksUUFBQSxFQUFFLEVBQUM7QUFBUCx5QkFERixlQUlFLGdDQUFDLDhCQUFEO0FBQVUsUUFBQSxVQUFVLEVBQUUsS0FBSy9CO0FBQTNCLFNBQ0csS0FBS0wsS0FBTCxDQUFXRyxtQkFBWCxDQUErQm9ELEdBQS9CLENBQW1DLFVBQUNDLElBQUQ7QUFBQSw0QkFDbEMsZ0NBQUMseUJBQUQ7QUFBZSxVQUFBLEVBQUUsRUFBRUEsSUFBSSxDQUFDcEIsRUFBeEI7QUFBNEIsVUFBQSxLQUFLLEVBQUVvQixJQUFJLENBQUNYLE1BQXhDO0FBQWdELFVBQUEsY0FBYyxFQUFFWSwwQkFBaEU7QUFBZ0YsVUFBQSxRQUFRLEVBQUVELElBQUksQ0FBQ2xCLFFBQS9GO0FBQXlHLFVBQUEsSUFBSSxFQUFFa0IsSUFBSSxDQUFDbkIsSUFBcEg7QUFBMEgsVUFBQSxLQUFLLEVBQUVtQixJQUFJLENBQUNqQixLQUF0STtBQUE2SSxVQUFBLE1BQU0sRUFBQyxRQUFwSjtBQUE2SixVQUFBLFdBQVcsRUFBRSxNQUFJLENBQUN6QixlQUEvSztBQUFnTSxVQUFBLEdBQUcsRUFBRTBDLElBQUksQ0FBQ3BCO0FBQTFNLFVBRGtDO0FBQUEsT0FBbkMsQ0FESCxDQUpGLENBREY7QUFZRDs7OztFQXZId0JzQixrQkFBTUMsUzs7QUF3SGhDO2VBRWM3RCxZLEVBRWYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuLy8gU3R5bGluZ1xuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbi8vIE1pc2MuXG5pbXBvcnQgQWRkVG9Zb3VyRml0IGZyb20gJy4vQWRkVG9Zb3VyRml0LmpzeCc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL3Rva2VuLmpzJztcbmltcG9ydCBwbGFjZUhvbGRlckltZyBmcm9tICcuL2NvbnRlbnQvcGxhY2Vob2xkZXJpbWcuanBlZyc7XG4vLyBIZWxwZXIgRm4nc1xuaW1wb3J0IENhcmRGb3JtYXR0ZXIgZnJvbSAnLi9DYXJkRm9ybWF0dGVyLmpzeCc7XG5cblxuLy9XRSBORUVEIENPTlRFTlQgTE9BREVSUyBJTiBPVVIgV0VCUEFDSyBDT05GSUcgQU5EIFBBQ0tBR0UgSlNPTlxuXG5jbGFzcyBSZWxhdGVkSXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWxhdGVkSXRlbXM6IFtdLFxuICAgICAgcmVsYXRlZEl0ZW1zTG9hZGVkOiBmYWxzZSxcbiAgICAgIHJlbGF0ZWRQcm9kdWN0c0luZm86IFtdLFxuICAgICAgZmF2b3JpdGVzOiBbXVxuICAgIH1cblxuICAgIC8vIGNhcm91c2VsIHJlc2l6aW5nXG4gICAgdGhpcy5yZXNwb25zaXZlID0ge1xuICAgICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcbiAgICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgICAgICBpdGVtczogNVxuICAgICAgfSxcbiAgICAgIGRlc2t0b3A6IHtcbiAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgICBpdGVtczogM1xuICAgICAgfSxcbiAgICAgIHRhYmxldDoge1xuICAgICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICAgICAgaXRlbXM6IDJcbiAgICAgIH0sXG4gICAgICBtb2JpbGU6IHtcbiAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICAgIGl0ZW1zOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDYXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUNhcmRDbGljay5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0UmVsYXRlZEl0ZW1zKClcbiAgfVxuXG4gIGdldFJlbGF0ZWRJdGVtcygpIHtcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Byb2R1Y3RzLyR7dGhpcy5wcm9wcy5wcm9kdWN0SWR9L3JlbGF0ZWRgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigocmVsYXRlZEl0ZW1zKSA9PiB7XG4gICAgICBsZXQgcmVsYXRlZEl0ZW1zQXJyYXkgPSByZWxhdGVkSXRlbXMuZGF0YTtcbiAgICAgIHRoaXMuZ2V0UmVsYXRlZEl0ZW1zSW5mbyhyZWxhdGVkSXRlbXNBcnJheSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG4gIH1cblxuICBnZXRSZWxhdGVkSXRlbXNJbmZvKHJlbGF0ZWRJdGVtc0xpc3QpIHtcbiAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbGF0ZWRJdGVtc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9kdWN0U2VhcmNoSWQgPSByZWxhdGVkSXRlbXNMaXN0W2ldO1xuICAgICAgbGV0IHNpbmdsZVByb2R1Y3QgPSB7fVxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cy8ke3Byb2R1Y3RTZWFyY2hJZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHByb2R1Y3RJbmZvKSA9PiB7XG4gICAgICAgIHNpbmdsZVByb2R1Y3QuaWQgPSBwcm9kdWN0SW5mby5kYXRhLmlkXG4gICAgICAgIHNpbmdsZVByb2R1Y3QubmFtZSA9IHByb2R1Y3RJbmZvLmRhdGEubmFtZVxuICAgICAgICBzaW5nbGVQcm9kdWN0LmNhdGVnb3J5ID0gcHJvZHVjdEluZm8uZGF0YS5jYXRlZ29yeVxuICAgICAgICBzaW5nbGVQcm9kdWN0LnByaWNlID0gcHJvZHVjdEluZm8uZGF0YS5kZWZhdWx0X3ByaWNlXG4gICAgICAgIHJldHVybiBzaW5nbGVQcm9kdWN0XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHNpbmdsZVByb2R1Y3QpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwcC1ocnNlaS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvZmVjMi9ocmF0eC9wcm9kdWN0cy8ke3Byb2R1Y3RTZWFyY2hJZH0vc3R5bGVzYCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgbGV0IGltZ3MgPSBzdHlsZXMuZGF0YS5yZXN1bHRzWzBdLnBob3Rvc1xuICAgICAgICAgIHNpbmdsZVByb2R1Y3QuaW1hZ2VzID0gaW1nc1xuICAgICAgICAgIHJldHVybiBzaW5nbGVQcm9kdWN0O1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHByb2R1Y3RzLnB1c2gocHJvZHVjdClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzSW5mbzogcHJvZHVjdHNcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDYXJkQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgb3ZlcnZpZXdDaGFuZ2VyID0gdGhpcy5wcm9wcy5oYW5kbGVPdmVydmlld0NoYW5nZTtcbiAgICBvdmVydmlld0NoYW5nZXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicmVsYXRlZC1pdGVtc1wiPlxuICAgICAgICA8aDQgaWQ9XCJyZWxhdGVkLXRpdGxlXCI+XG4gICAgICAgICAgUmVsYXRlZCBJdGVtc1xuICAgICAgICA8L2g0PlxuICAgICAgICA8Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17dGhpcy5yZXNwb25zaXZlfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWxhdGVkUHJvZHVjdHNJbmZvLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPENhcmRGb3JtYXR0ZXIgaWQ9e2l0ZW0uaWR9IGltYWdlPXtpdGVtLmltYWdlc30gcGxhY2VIb2xkZXJJbWc9e3BsYWNlSG9sZGVySW1nfSBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX0gbmFtZT17aXRlbS5uYW1lfSBwcmljZT17aXRlbS5wcmljZX0gcmF0aW5nPSdyYXRpbmcnIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNhcmRDbGlja30ga2V5PXtpdGVtLmlkfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRJdGVtcztcblxuLy8oaXRlbS5pZCwgaXRlbS5pbWFnZXMsIHBsYWNlSG9sZGVySW1nLCBpdGVtLmNhdGVnb3J5LCBpdGVtLm5hbWUsIGl0ZW0ucHJpY2UsICdyYXRpbmcnLCB0aGlzLmhhbmRsZUNhcmRDbGljaykiXX0=