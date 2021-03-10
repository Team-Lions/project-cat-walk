"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStarRatingsComponent = _interopRequireDefault(require("react-star-ratings-component"));

var _roundStarRating = _interopRequireDefault(require("../roundStarRating.js"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RatingData = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-flow: row no-wrap;\n"])));

var A = _styledComponents["default"].a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 12px;\n  padding: 2px;\n"])));

var Category = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 25px;\n"])));

var Name = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 50px;\n  font-size: 50px;\n  line-height: 50px;\n"]))); //recieved props ratings (object), productInfo (object), starRating (number), price (string), salePrice (string)


var ProductTitleAndPrice = function ProductTitleAndPrice(props) {
  var numRatings = 0;

  for (var k in props.ratings) {
    numRatings += Number.parseInt(props.ratings[k]);
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(RatingData, {
    hidden: numRatings === 0
  }, /*#__PURE__*/_react["default"].createElement(_reactStarRatingsComponent["default"], {
    numberOfStar: 5,
    numberOfSelectedStar: (0, _roundStarRating["default"])(props.starRating),
    colorFilledStar: "gold",
    colorEmptyStar: "grey",
    starSize: "15px",
    spaceBetweenStar: "3px",
    disableOnSelect: true,
    name: "rating"
  }), /*#__PURE__*/_react["default"].createElement(A, {
    href: "#RatingsAndReviews"
  }, "Read all ", numRatings, " reviews")), /*#__PURE__*/_react["default"].createElement(Category, null, props.productInfo.category), /*#__PURE__*/_react["default"].createElement(Name, null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.name)), props.salePrice === null ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: "10px 0 10px 0"
    }
  }, "$", props.price) : /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: "10px 0 10px 0"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdFRpdGxlQW5kUHJpY2UuanN4Il0sIm5hbWVzIjpbIlJhdGluZ0RhdGEiLCJzdHlsZWQiLCJkaXYiLCJBIiwiYSIsIkNhdGVnb3J5IiwiTmFtZSIsIlByb2R1Y3RUaXRsZUFuZFByaWNlIiwicHJvcHMiLCJudW1SYXRpbmdzIiwiayIsInJhdGluZ3MiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0YXJSYXRpbmciLCJwcm9kdWN0SW5mbyIsImNhdGVnb3J5IiwibmFtZSIsInNhbGVQcmljZSIsIm1hcmdpbiIsInByaWNlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBR0MsNkJBQU9DLEdBQVYsd0xBQWhCOztBQVFBLElBQU1DLENBQUMsR0FBR0YsNkJBQU9HLENBQVYsd0lBQVA7O0FBTUEsSUFBTUMsUUFBUSxHQUFHSiw2QkFBT0MsR0FBViw2RkFBZDs7QUFJQSxJQUFNSSxJQUFJLEdBQUdMLDZCQUFPQyxHQUFWLG9JQUFWLEMsQ0FNQTs7O0FBQ0EsSUFBSUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDcEMsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjRixLQUFLLENBQUNHLE9BQXBCLEVBQTZCO0FBQzNCRixJQUFBQSxVQUFVLElBQUlHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkwsS0FBSyxDQUFDRyxPQUFOLENBQWNELENBQWQsQ0FBaEIsQ0FBZDtBQUNEOztBQUVELHNCQUNFLDBEQUNFLGdDQUFDLFVBQUQ7QUFBWSxJQUFBLE1BQU0sRUFBRUQsVUFBVSxLQUFLO0FBQW5DLGtCQUNFLGdDQUFDLHFDQUFEO0FBQWlCLElBQUEsWUFBWSxFQUFFLENBQS9CO0FBQWtDLElBQUEsb0JBQW9CLEVBQUUsaUNBQWdCRCxLQUFLLENBQUNNLFVBQXRCLENBQXhEO0FBQTJGLElBQUEsZUFBZSxFQUFDLE1BQTNHO0FBQWtILElBQUEsY0FBYyxFQUFDLE1BQWpJO0FBQXdJLElBQUEsUUFBUSxFQUFDLE1BQWpKO0FBQXdKLElBQUEsZ0JBQWdCLEVBQUMsS0FBeks7QUFBK0ssSUFBQSxlQUFlLEVBQUUsSUFBaE07QUFBc00sSUFBQSxJQUFJLEVBQUM7QUFBM00sSUFERixlQUVFLGdDQUFDLENBQUQ7QUFBRyxJQUFBLElBQUksRUFBQztBQUFSLGtCQUF1Q0wsVUFBdkMsYUFGRixDQURGLGVBS0UsZ0NBQUMsUUFBRCxRQUFXRCxLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLFFBQTdCLENBTEYsZUFNRSxnQ0FBQyxJQUFELHFCQUFNLDJDQUFJUixLQUFLLENBQUNPLFdBQU4sQ0FBa0JFLElBQXRCLENBQU4sQ0FORixFQU9HVCxLQUFLLENBQUNVLFNBQU4sS0FBb0IsSUFBcEIsZ0JBQ0M7QUFBRyxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxNQUFNLEVBQUU7QUFBVDtBQUFWLFVBQXVDWCxLQUFLLENBQUNZLEtBQTdDLENBREQsZ0JBR0M7QUFBRyxJQUFBLEtBQUssRUFBRTtBQUFDRCxNQUFBQSxNQUFNLEVBQUU7QUFBVDtBQUFWLGtCQUNFO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBQ0UsTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFBYixVQUErQmIsS0FBSyxDQUFDVSxTQUFyQyxNQURGLGVBRUU7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFDSSxNQUFBQSxjQUFjLEVBQUM7QUFBaEI7QUFBYixVQUFnRGQsS0FBSyxDQUFDWSxLQUF0RCxDQUZGLENBVkosQ0FERjtBQWtCRCxDQXhCRDs7ZUEwQmViLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFN0YXJSYXRpbmcgZnJvbSAncmVhY3Qtc3Rhci1yYXRpbmdzLWNvbXBvbmVudCc7XG5pbXBvcnQgcm91bmRTdGFyUmF0aW5nIGZyb20gJy4uL3JvdW5kU3RhclJhdGluZy5qcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmF0aW5nRGF0YSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgZmxleC1mbG93OiByb3cgbm8td3JhcDtcbmA7XG5cbmNvbnN0IEEgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweDtcbmA7XG5cbmNvbnN0IENhdGVnb3J5ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyNXB4O1xuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbmA7XG5cbi8vcmVjaWV2ZWQgcHJvcHMgcmF0aW5ncyAob2JqZWN0KSwgcHJvZHVjdEluZm8gKG9iamVjdCksIHN0YXJSYXRpbmcgKG51bWJlciksIHByaWNlIChzdHJpbmcpLCBzYWxlUHJpY2UgKHN0cmluZylcbnZhciBQcm9kdWN0VGl0bGVBbmRQcmljZSA9IChwcm9wcykgPT4ge1xuICB2YXIgbnVtUmF0aW5ncyA9IDA7XG4gIGZvciAodmFyIGsgaW4gcHJvcHMucmF0aW5ncykge1xuICAgIG51bVJhdGluZ3MgKz0gTnVtYmVyLnBhcnNlSW50KHByb3BzLnJhdGluZ3Nba10pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJhdGluZ0RhdGEgaGlkZGVuPXtudW1SYXRpbmdzID09PSAwfT5cbiAgICAgICAgPFJlYWN0U3RhclJhdGluZyBudW1iZXJPZlN0YXI9ezV9IG51bWJlck9mU2VsZWN0ZWRTdGFyPXtyb3VuZFN0YXJSYXRpbmcocHJvcHMuc3RhclJhdGluZyl9IGNvbG9yRmlsbGVkU3Rhcj1cImdvbGRcIiBjb2xvckVtcHR5U3Rhcj1cImdyZXlcIiBzdGFyU2l6ZT1cIjE1cHhcIiBzcGFjZUJldHdlZW5TdGFyPVwiM3B4XCIgZGlzYWJsZU9uU2VsZWN0PXt0cnVlfSBuYW1lPVwicmF0aW5nXCIgLz5cbiAgICAgICAgPEEgaHJlZj1cIiNSYXRpbmdzQW5kUmV2aWV3c1wiPlJlYWQgYWxsIHtudW1SYXRpbmdzfSByZXZpZXdzPC9BPlxuICAgICAgPC9SYXRpbmdEYXRhPlxuICAgICAgPENhdGVnb3J5Pntwcm9wcy5wcm9kdWN0SW5mby5jYXRlZ29yeX08L0NhdGVnb3J5PlxuICAgICAgPE5hbWU+PGI+e3Byb3BzLnByb2R1Y3RJbmZvLm5hbWV9PC9iPjwvTmFtZT5cbiAgICAgIHtwcm9wcy5zYWxlUHJpY2UgPT09IG51bGwgP1xuICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogXCIxMHB4IDAgMTBweCAwXCJ9fT4ke3Byb3BzLnByaWNlfTwvcD5cbiAgICAgICAgOlxuICAgICAgICA8cCBzdHlsZT17e21hcmdpbjogXCIxMHB4IDAgMTBweCAwXCJ9fT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+JHtwcm9wcy5zYWxlUHJpY2V9IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHREZWNvcmF0aW9uOlwibGluZS10aHJvdWdoXCJ9fT4ke3Byb3BzLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGl0bGVBbmRQcmljZTsiXX0=