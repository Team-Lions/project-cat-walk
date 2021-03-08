"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//recieved props productInfo (object), starRating (number), price (string), salePrice (string)
var ProductTitleAndPrice = function ProductTitleAndPrice(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ProductInfo"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Star Rating: ", props.starRating, " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "#RatingsAndReviews"
  }, "Read all reviews")), /*#__PURE__*/_react["default"].createElement("p", null, props.productInfo.category), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.name)), props.salePrice === null ? /*#__PURE__*/_react["default"].createElement("p", null, "$", props.price) : /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFJhdGluZ3NBbmRQcmljZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdFRpdGxlQW5kUHJpY2UiLCJwcm9wcyIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDcEMsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDhEQUFtQkEsS0FBSyxDQUFDQyxVQUF6QixvQkFBcUM7QUFBRyxJQUFBLElBQUksRUFBQztBQUFSLHdCQUFyQyxDQURGLGVBRUUsMkNBQUlELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsUUFBdEIsQ0FGRixlQUdFLHdEQUFHLDJDQUFJSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JFLElBQXRCLENBQUgsQ0FIRixFQUlHSixLQUFLLENBQUNLLFNBQU4sS0FBb0IsSUFBcEIsZ0JBQ0MsZ0RBQUtMLEtBQUssQ0FBQ00sS0FBWCxDQURELGdCQUdDLHdEQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBWixVQUE4QlAsS0FBSyxDQUFDSyxTQUFwQyxNQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDLHlCQUFrQjtBQUFuQjtBQUFaLFVBQWtETCxLQUFLLENBQUNNLEtBQXhELENBRkYsQ0FQSixDQURGO0FBZUQsQ0FoQkQ7O2VBa0JlUCxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0VGl0bGVBbmRQcmljZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdEluZm9cIj5cbiAgICAgIDxkaXY+U3RhciBSYXRpbmc6IHtwcm9wcy5zdGFyUmF0aW5nfSA8YSBocmVmPScjUmF0aW5nc0FuZFJldmlld3MnPlJlYWQgYWxsIHJldmlld3M8L2E+PC9kaXY+XG4gICAgICA8cD57cHJvcHMucHJvZHVjdEluZm8uY2F0ZWdvcnl9PC9wPlxuICAgICAgPHA+PGI+e3Byb3BzLnByb2R1Y3RJbmZvLm5hbWV9PC9iPjwvcD5cbiAgICAgIHtwcm9wcy5zYWxlUHJpY2UgPT09IG51bGwgP1xuICAgICAgICA8cD4ke3Byb3BzLnByaWNlfTwvcD5cbiAgICAgICAgOlxuICAgICAgICA8cD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+JHtwcm9wcy5zYWxlUHJpY2V9IDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sndGV4dC1kZWNvcmF0aW9uJzonbGluZS10aHJvdWdoJ319PiR7cHJvcHMucHJpY2V9PC9kaXY+XG4gICAgICAgIDwvcD5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRpdGxlQW5kUHJpY2U7Il19