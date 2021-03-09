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
  }, "Read all ", numRatings, " reviews")), /*#__PURE__*/_react["default"].createElement("p", null, props.productInfo.category), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.name)), props.salePrice === null ? /*#__PURE__*/_react["default"].createElement("p", null, "$", props.price) : /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'red'
    }
  }, "$", props.salePrice, " "), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      'text-decoration': 'line-through'
    }
  }, "$", props.price)));
};

var _default = ProductTitleAndPrice;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFRpdGxlQW5kUHJpY2UuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZUFuZFByaWNlIiwicHJvcHMiLCJudW1SYXRpbmdzIiwiayIsInJhdGluZ3MiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDcEMsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjRixLQUFLLENBQUNHLE9BQXBCLEVBQTZCO0FBQzNCRixJQUFBQSxVQUFVLElBQUlHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkwsS0FBSyxDQUFDRyxPQUFOLENBQWNELENBQWQsQ0FBaEIsQ0FBZDtBQUNEOztBQUVELHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsTUFBTSxFQUFFRCxVQUFVLEtBQUs7QUFBNUIsc0JBQTZDRCxLQUFLLENBQUNNLFVBQW5ELG9CQUErRDtBQUFHLElBQUEsSUFBSSxFQUFDO0FBQVIsa0JBQXVDTCxVQUF2QyxhQUEvRCxDQURGLGVBRUUsMkNBQUlELEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsUUFBdEIsQ0FGRixlQUdFLHdEQUFHLDJDQUFJUixLQUFLLENBQUNPLFdBQU4sQ0FBa0JFLElBQXRCLENBQUgsQ0FIRixFQUlHVCxLQUFLLENBQUNVLFNBQU4sS0FBb0IsSUFBcEIsZ0JBQ0MsZ0RBQUtWLEtBQUssQ0FBQ1csS0FBWCxDQURELGdCQUdDLHdEQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBWixVQUE4QlosS0FBSyxDQUFDVSxTQUFwQyxNQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDLHlCQUFrQjtBQUFuQjtBQUFaLFVBQWtEVixLQUFLLENBQUNXLEtBQXhELENBRkYsQ0FQSixDQURGO0FBZUQsQ0FyQkQ7O2VBdUJlWixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcmF0aW5ncyAob2JqZWN0KSwgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0VGl0bGVBbmRQcmljZSA9IChwcm9wcykgPT4ge1xuICB2YXIgbnVtUmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGsgaW4gcHJvcHMucmF0aW5ncykge1xuICAgIG51bVJhdGluZ3MgKz0gTnVtYmVyLnBhcnNlSW50KHByb3BzLnJhdGluZ3Nba10pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RUaXRsZUFuZFByaWNlXCI+XG4gICAgICA8ZGl2IGhpZGRlbj17bnVtUmF0aW5ncyA9PT0gMH0+U3RhciBSYXRpbmc6IHtwcm9wcy5zdGFyUmF0aW5nfSA8YSBocmVmPScjUmF0aW5nc0FuZFJldmlld3MnPlJlYWQgYWxsIHtudW1SYXRpbmdzfSByZXZpZXdzPC9hPjwvZGl2PlxuICAgICAgPHA+e3Byb3BzLnByb2R1Y3RJbmZvLmNhdGVnb3J5fTwvcD5cbiAgICAgIDxwPjxiPntwcm9wcy5wcm9kdWN0SW5mby5uYW1lfTwvYj48L3A+XG4gICAgICB7cHJvcHMuc2FsZVByaWNlID09PSBudWxsID9cbiAgICAgICAgPHA+JHtwcm9wcy5wcmljZX08L3A+XG4gICAgICAgIDpcbiAgICAgICAgPHA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmVkJ319PiR7cHJvcHMuc2FsZVByaWNlfSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7J3RleHQtZGVjb3JhdGlvbic6J2xpbmUtdGhyb3VnaCd9fT4ke3Byb3BzLnByaWNlfTwvZGl2PlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaXRsZUFuZFByaWNlOyJdfQ==