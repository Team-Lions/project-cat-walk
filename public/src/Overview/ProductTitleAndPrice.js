"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStarRatings = _interopRequireDefault(require("react-star-ratings"));

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
    rating: props.starRating,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFRpdGxlQW5kUHJpY2UuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZUFuZFByaWNlIiwicHJvcHMiLCJudW1SYXRpbmdzIiwiayIsInJhdGluZ3MiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUNwQyxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLEtBQUssQ0FBQ0csT0FBcEIsRUFBNkI7QUFDM0JGLElBQUFBLFVBQVUsSUFBSUcsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0QsQ0FBZCxDQUFoQixDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxNQUFNLEVBQUVELFVBQVUsS0FBSztBQUE1QixrQ0FDRSxnQ0FBQyw0QkFBRDtBQUFhLElBQUEsTUFBTSxFQUFFRCxLQUFLLENBQUNNLFVBQTNCO0FBQXVDLElBQUEsY0FBYyxFQUFDLE1BQXREO0FBQTZELElBQUEsYUFBYSxFQUFFLENBQTVFO0FBQStFLElBQUEsSUFBSSxFQUFDO0FBQXBGLElBREYsZUFFRTtBQUFHLElBQUEsSUFBSSxFQUFDO0FBQVIsa0JBQXVDTCxVQUF2QyxhQUZGLENBREYsZUFLRSwyQ0FBSUQsS0FBSyxDQUFDTyxXQUFOLENBQWtCQyxRQUF0QixDQUxGLGVBTUUsd0RBQUcsMkNBQUlSLEtBQUssQ0FBQ08sV0FBTixDQUFrQkUsSUFBdEIsQ0FBSCxDQU5GLEVBT0dULEtBQUssQ0FBQ1UsU0FBTixLQUFvQixJQUFwQixnQkFDQyxnREFBS1YsS0FBSyxDQUFDVyxLQUFYLENBREQsZ0JBR0Msd0RBQ0U7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUU7QUFBUjtBQUFiLFVBQStCWixLQUFLLENBQUNVLFNBQXJDLE1BREYsZUFFRTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUNHLE1BQUFBLGNBQWMsRUFBQztBQUFoQjtBQUFiLFVBQWdEYixLQUFLLENBQUNXLEtBQXRELENBRkYsQ0FWSixDQURGO0FBa0JELENBeEJEOztlQTBCZVosb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcmF0aW5ncyAob2JqZWN0KSwgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0VGl0bGVBbmRQcmljZSA9IChwcm9wcykgPT4ge1xuICB2YXIgbnVtUmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGsgaW4gcHJvcHMucmF0aW5ncykge1xuICAgIG51bVJhdGluZ3MgKz0gTnVtYmVyLnBhcnNlSW50KHByb3BzLnJhdGluZ3Nba10pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RUaXRsZUFuZFByaWNlXCI+XG4gICAgICA8ZGl2IGhpZGRlbj17bnVtUmF0aW5ncyA9PT0gMH0+U3RhciBSYXRpbmc6XG4gICAgICAgIDxTdGFyUmF0aW5ncyByYXRpbmc9e3Byb3BzLnN0YXJSYXRpbmd9IHN0YXJSYXRlZENvbG9yPVwiZ29sZFwiIG51bWJlck9mU3RhcnM9ezV9IG5hbWU9XCJyYXRpbmdcIiAvPlxuICAgICAgICA8YSBocmVmPVwiI1JhdGluZ3NBbmRSZXZpZXdzXCI+UmVhZCBhbGwge251bVJhdGluZ3N9IHJldmlld3M8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntwcm9wcy5wcm9kdWN0SW5mby5jYXRlZ29yeX08L3A+XG4gICAgICA8cD48Yj57cHJvcHMucHJvZHVjdEluZm8ubmFtZX08L2I+PC9wPlxuICAgICAge3Byb3BzLnNhbGVQcmljZSA9PT0gbnVsbCA/XG4gICAgICAgIDxwPiR7cHJvcHMucHJpY2V9PC9wPlxuICAgICAgICA6XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT4ke3Byb3BzLnNhbGVQcmljZX0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dERlY29yYXRpb246XCJsaW5lLXRocm91Z2hcIn19PiR7cHJvcHMucHJpY2V9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaXRsZUFuZFByaWNlOyJdfQ==