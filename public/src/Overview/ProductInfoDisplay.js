"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//recieved props productInfo (object), starRating (number), price (string), salePrice (string)
var ProductInfoDisplay = function ProductInfoDisplay(props) {
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

var _default = ProductInfoDisplay;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdEluZm9EaXNwbGF5LmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0SW5mb0Rpc3BsYXkiLCJwcm9wcyIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsInByaWNlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFELEVBQVc7QUFDbEMsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDhEQUFtQkEsS0FBSyxDQUFDQyxVQUF6QixvQkFBcUM7QUFBRyxJQUFBLElBQUksRUFBQztBQUFSLHdCQUFyQyxDQURGLGVBRUUsMkNBQUlELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsUUFBdEIsQ0FGRixlQUdFLHdEQUFHLDJDQUFJSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JFLElBQXRCLENBQUgsQ0FIRixFQUlHSixLQUFLLENBQUNLLFNBQU4sS0FBb0IsSUFBcEIsZ0JBQ0MsZ0RBQUtMLEtBQUssQ0FBQ00sS0FBWCxDQURELGdCQUdDLHdEQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBWixVQUE4QlAsS0FBSyxDQUFDSyxTQUFwQyxNQURGLGVBRUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFDLHlCQUFrQjtBQUFuQjtBQUFaLFVBQWtETCxLQUFLLENBQUNNLEtBQXhELENBRkYsQ0FQSixDQURGO0FBZUQsQ0FoQkQ7O2VBa0JlUCxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0SW5mb0Rpc3BsYXkgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RJbmZvXCI+XG4gICAgICA8ZGl2PlN0YXIgUmF0aW5nOiB7cHJvcHMuc3RhclJhdGluZ30gPGEgaHJlZj0nI1JhdGluZ3NBbmRSZXZpZXdzJz5SZWFkIGFsbCByZXZpZXdzPC9hPjwvZGl2PlxuICAgICAgPHA+e3Byb3BzLnByb2R1Y3RJbmZvLmNhdGVnb3J5fTwvcD5cbiAgICAgIDxwPjxiPntwcm9wcy5wcm9kdWN0SW5mby5uYW1lfTwvYj48L3A+XG4gICAgICB7cHJvcHMuc2FsZVByaWNlID09PSBudWxsID9cbiAgICAgICAgPHA+JHtwcm9wcy5wcmljZX08L3A+XG4gICAgICAgIDpcbiAgICAgICAgPHA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmVkJ319PiR7cHJvcHMuc2FsZVByaWNlfSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7J3RleHQtZGVjb3JhdGlvbic6J2xpbmUtdGhyb3VnaCd9fT4ke3Byb3BzLnByaWNlfTwvZGl2PlxuICAgICAgICA8L3A+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJbmZvRGlzcGxheTsiXX0=