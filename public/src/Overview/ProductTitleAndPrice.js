"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStarRatings = _interopRequireDefault(require("react-star-ratings"));

var _roundStarRating = _interopRequireDefault(require("../roundStarRating.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//recieved props ratings (object), productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = function ProductTitleAndPrice(props) {
  var numRatings = 0;

  for (var k in props.ratings) {
    numRatings += Number.parseInt(props.ratings[k]);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProductTitleAndPrice"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    hidden: numRatings === 0
  }, "Star Rating:", /*#__PURE__*/_react["default"].createElement(_reactStarRatings["default"], {
    rating: (0, _roundStarRating["default"])(props.starRating),
    starRatedColor: "gold",
    numberOfStars: 5,
    name: "rating"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#RatingsAndReviews"
  }, "Read all ", numRatings, " reviews")), /*#__PURE__*/_react["default"].createElement("p", null, props.productInfo.category), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.name)), props.salePrice === null ? /*#__PURE__*/_react["default"].createElement("p", null, "$", props.price) : /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: "red"
    }
  }, "$", props.salePrice, " "), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      textDecoration: "line-through"
    }
  }, "$", props.price)));
};

var _default = ProductTitleAndPrice;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFRpdGxlQW5kUHJpY2UuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZUFuZFByaWNlIiwicHJvcHMiLCJudW1SYXRpbmdzIiwiayIsInJhdGluZ3MiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUNwQyxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLEtBQUssQ0FBQ0csT0FBcEIsRUFBNkI7QUFDM0JGLElBQUFBLFVBQVUsSUFBSUcsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0QsQ0FBZCxDQUFoQixDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxNQUFNLEVBQUVELFVBQVUsS0FBSztBQUE1QixrQ0FDRSxnQ0FBQyw0QkFBRDtBQUFhLElBQUEsTUFBTSxFQUFFLGlDQUFnQkQsS0FBSyxDQUFDTSxVQUF0QixDQUFyQjtBQUF3RCxJQUFBLGNBQWMsRUFBQyxNQUF2RTtBQUE4RSxJQUFBLGFBQWEsRUFBRSxDQUE3RjtBQUFnRyxJQUFBLElBQUksRUFBQztBQUFyRyxJQURGLGVBRUU7QUFBRyxJQUFBLElBQUksRUFBQztBQUFSLGtCQUF1Q0wsVUFBdkMsYUFGRixDQURGLGVBS0UsMkNBQUlELEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsUUFBdEIsQ0FMRixlQU1FLHdEQUFHLDJDQUFJUixLQUFLLENBQUNPLFdBQU4sQ0FBa0JFLElBQXRCLENBQUgsQ0FORixFQU9HVCxLQUFLLENBQUNVLFNBQU4sS0FBb0IsSUFBcEIsZ0JBQ0MsZ0RBQUtWLEtBQUssQ0FBQ1csS0FBWCxDQURELGdCQUdDLHdEQUNFO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBYixVQUErQlosS0FBSyxDQUFDVSxTQUFyQyxNQURGLGVBRUU7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFDRyxNQUFBQSxjQUFjLEVBQUM7QUFBaEI7QUFBYixVQUFnRGIsS0FBSyxDQUFDVyxLQUF0RCxDQUZGLENBVkosQ0FERjtBQWtCRCxDQXhCRDs7ZUEwQmVaLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICdyZWFjdC1zdGFyLXJhdGluZ3MnO1xuaW1wb3J0IHJvdW5kU3RhclJhdGluZyBmcm9tICcuLi9yb3VuZFN0YXJSYXRpbmcuanMnO1xuXG4vL3JlY2lldmVkIHByb3BzIHJhdGluZ3MgKG9iamVjdCksIHByb2R1Y3RJbmZvIChvYmplY3QpLCBzdGFyUmF0aW5nIChudW1iZXIpLCBwcmljZSAoc3RyaW5nKSwgc2FsZVByaWNlIChzdHJpbmcpXG52YXIgUHJvZHVjdFRpdGxlQW5kUHJpY2UgPSAocHJvcHMpID0+IHtcbiAgdmFyIG51bVJhdGluZ3MgPSAwO1xuICBmb3IgKHZhciBrIGluIHByb3BzLnJhdGluZ3MpIHtcbiAgICBudW1SYXRpbmdzICs9IE51bWJlci5wYXJzZUludChwcm9wcy5yYXRpbmdzW2tdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0VGl0bGVBbmRQcmljZVwiPlxuICAgICAgPGRpdiBoaWRkZW49e251bVJhdGluZ3MgPT09IDB9PlN0YXIgUmF0aW5nOlxuICAgICAgICA8U3RhclJhdGluZ3MgcmF0aW5nPXtyb3VuZFN0YXJSYXRpbmcocHJvcHMuc3RhclJhdGluZyl9IHN0YXJSYXRlZENvbG9yPVwiZ29sZFwiIG51bWJlck9mU3RhcnM9ezV9IG5hbWU9XCJyYXRpbmdcIiAvPlxuICAgICAgICA8YSBocmVmPVwiI1JhdGluZ3NBbmRSZXZpZXdzXCI+UmVhZCBhbGwge251bVJhdGluZ3N9IHJldmlld3M8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntwcm9wcy5wcm9kdWN0SW5mby5jYXRlZ29yeX08L3A+XG4gICAgICA8cD48Yj57cHJvcHMucHJvZHVjdEluZm8ubmFtZX08L2I+PC9wPlxuICAgICAge3Byb3BzLnNhbGVQcmljZSA9PT0gbnVsbCA/XG4gICAgICAgIDxwPiR7cHJvcHMucHJpY2V9PC9wPlxuICAgICAgICA6XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT4ke3Byb3BzLnNhbGVQcmljZX0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dERlY29yYXRpb246XCJsaW5lLXRocm91Z2hcIn19PiR7cHJvcHMucHJpY2V9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaXRsZUFuZFByaWNlOyJdfQ==