"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
  }, "Star Rating: ", props.starRating, " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "#RatingsAndReviews"
  }, "Read all ", numRatings, " reviews")), /*#__PURE__*/_react["default"].createElement("p", null, props.productInfo.category), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.name)), props.salePrice === null ? /*#__PURE__*/_react["default"].createElement("p", null, "$", props.price) : /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'red'
    }
  }, "$", props.salePrice, " "), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      textDecoration: 'line-through'
    }
  }, "$", props.price)));
};

var _default = ProductTitleAndPrice;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFRpdGxlQW5kUHJpY2UuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZUFuZFByaWNlIiwicHJvcHMiLCJudW1SYXRpbmdzIiwiayIsInJhdGluZ3MiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUNwQyxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLEtBQUssQ0FBQ0csT0FBcEIsRUFBNkI7QUFDM0JGLElBQUFBLFVBQVUsSUFBSUcsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxLQUFLLENBQUNHLE9BQU4sQ0FBY0QsQ0FBZCxDQUFoQixDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxNQUFNLEVBQUVELFVBQVUsS0FBSztBQUE1QixzQkFBNkNELEtBQUssQ0FBQ00sVUFBbkQsb0JBQStEO0FBQUcsSUFBQSxJQUFJLEVBQUM7QUFBUixrQkFBdUNMLFVBQXZDLGFBQS9ELENBREYsZUFFRSwyQ0FBSUQsS0FBSyxDQUFDTyxXQUFOLENBQWtCQyxRQUF0QixDQUZGLGVBR0Usd0RBQUcsMkNBQUlSLEtBQUssQ0FBQ08sV0FBTixDQUFrQkUsSUFBdEIsQ0FBSCxDQUhGLEVBSUdULEtBQUssQ0FBQ1UsU0FBTixLQUFvQixJQUFwQixnQkFDQyxnREFBS1YsS0FBSyxDQUFDVyxLQUFYLENBREQsZ0JBR0Msd0RBQ0U7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUU7QUFBUjtBQUFiLFVBQStCWixLQUFLLENBQUNVLFNBQXJDLE1BREYsZUFFRTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUNHLE1BQUFBLGNBQWMsRUFBQztBQUFoQjtBQUFiLFVBQWdEYixLQUFLLENBQUNXLEtBQXRELENBRkYsQ0FQSixDQURGO0FBZUQsQ0FyQkQ7O2VBdUJlWixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcmF0aW5ncyAob2JqZWN0KSwgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0VGl0bGVBbmRQcmljZSA9IChwcm9wcykgPT4ge1xuICB2YXIgbnVtUmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGsgaW4gcHJvcHMucmF0aW5ncykge1xuICAgIG51bVJhdGluZ3MgKz0gTnVtYmVyLnBhcnNlSW50KHByb3BzLnJhdGluZ3Nba10pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RUaXRsZUFuZFByaWNlXCI+XG4gICAgICA8ZGl2IGhpZGRlbj17bnVtUmF0aW5ncyA9PT0gMH0+U3RhciBSYXRpbmc6IHtwcm9wcy5zdGFyUmF0aW5nfSA8YSBocmVmPScjUmF0aW5nc0FuZFJldmlld3MnPlJlYWQgYWxsIHtudW1SYXRpbmdzfSByZXZpZXdzPC9hPjwvZGl2PlxuICAgICAgPHA+e3Byb3BzLnByb2R1Y3RJbmZvLmNhdGVnb3J5fTwvcD5cbiAgICAgIDxwPjxiPntwcm9wcy5wcm9kdWN0SW5mby5uYW1lfTwvYj48L3A+XG4gICAgICB7cHJvcHMuc2FsZVByaWNlID09PSBudWxsID9cbiAgICAgICAgPHA+JHtwcm9wcy5wcmljZX08L3A+XG4gICAgICAgIDpcbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT4ke3Byb3BzLnNhbGVQcmljZX0gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dERlY29yYXRpb246J2xpbmUtdGhyb3VnaCd9fT4ke3Byb3BzLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGl0bGVBbmRQcmljZTsiXX0=