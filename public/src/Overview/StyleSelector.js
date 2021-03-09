"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectorFlexContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 345px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  flex-flow: row wrap;\n"])));

var StyleThumbnail = _styledComponents["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  height: 65px;\n  width: 65px;\n  margin: 10px;\n\n  ", "\n"])), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 3px solid black;\n  "])));
}); //expects props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object


var StyleSelector = function StyleSelector(props) {
  var thumbnails = props.styles.map(function (style, index) {
    var selected = false;

    if (style.name === props.selectedStyle.name) {
      selected = true; //update style above to show a checkmark instead
    }

    return /*#__PURE__*/_react["default"].createElement(StyleThumbnail, {
      selected: selected,
      src: style.photos[0].thumbnail_url,
      alt: style.name,
      onClick: function onClick() {
        props.changeStyle(index);
      }
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, "Style > "), props.selectedStyle.name), /*#__PURE__*/_react["default"].createElement(SelectorFlexContainer, null, thumbnails));
};

var _default = StyleSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU3R5bGVTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiU2VsZWN0b3JGbGV4Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVUaHVtYm5haWwiLCJpbWciLCJwcm9wcyIsInNlbGVjdGVkIiwiY3NzIiwiU3R5bGVTZWxlY3RvciIsInRodW1ibmFpbHMiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImluZGV4IiwibmFtZSIsInNlbGVjdGVkU3R5bGUiLCJwaG90b3MiLCJ0aHVtYm5haWxfdXJsIiwiY2hhbmdlU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MsNkJBQU9DLEdBQVYscUxBQTNCOztBQVFBLElBQU1DLGNBQWMsR0FBR0YsNkJBQU9HLEdBQVYsNkpBTWhCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQU4sUUFBa0JDLHFCQUFsQiwwR0FBSjtBQUFBLENBTlcsQ0FBcEIsQyxDQVdBOzs7QUFDQSxJQUFJQyxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQUNILEtBQUQsRUFBVztBQUM5QixNQUFJSSxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNsRCxRQUFJUCxRQUFRLEdBQUcsS0FBZjs7QUFDQSxRQUFJTSxLQUFLLENBQUNFLElBQU4sS0FBZVQsS0FBSyxDQUFDVSxhQUFOLENBQW9CRCxJQUF2QyxFQUE2QztBQUMzQ1IsTUFBQUEsUUFBUSxHQUFHLElBQVgsQ0FEMkMsQ0FFM0M7QUFDRDs7QUFDRCx3QkFBTyxnQ0FBQyxjQUFEO0FBQWdCLE1BQUEsUUFBUSxFQUFFQSxRQUExQjtBQUFvQyxNQUFBLEdBQUcsRUFBRU0sS0FBSyxDQUFDSSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsYUFBekQ7QUFBd0UsTUFBQSxHQUFHLEVBQUVMLEtBQUssQ0FBQ0UsSUFBbkY7QUFBeUYsTUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBQ1QsUUFBQUEsS0FBSyxDQUFDYSxXQUFOLENBQWtCTCxLQUFsQjtBQUF5QjtBQUFsSSxNQUFQO0FBQ0QsR0FQZ0IsQ0FBakI7QUFRQSxzQkFDRSwwREFDRSx3REFBRyxzREFBSCxFQUFtQlIsS0FBSyxDQUFDVSxhQUFOLENBQW9CRCxJQUF2QyxDQURGLGVBRUUsZ0NBQUMscUJBQUQsUUFDR0wsVUFESCxDQUZGLENBREY7QUFRRCxDQWpCRDs7ZUFtQmVELGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlbGVjdG9yRmxleENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5cbmNvbnN0IFN0eWxlVGh1bWJuYWlsID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBtYXJnaW46IDEwcHg7XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5zZWxlY3RlZCAmJiBjc3MgYFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBgfVxuYDtcblxuLy9leHBlY3RzIHByb3BzOiBzdHlsZXMgYXMgYW4gYXJyYXkgb2Ygc3R5bGUgb2JqZWN0cywgY2hhbmdlU3R5bGUgYXMgYSBmdW5jdGlvbiwgc2VsZWN0ZWRTdHlsZSBhcyBhbiBvYmplY3RcbnZhciBTdHlsZVNlbGVjdG9yICA9IChwcm9wcykgPT4ge1xuICB2YXIgdGh1bWJuYWlscyA9IHByb3BzLnN0eWxlcy5tYXAoKHN0eWxlLCBpbmRleCkgPT4ge1xuICAgIHZhciBzZWxlY3RlZCA9IGZhbHNlO1xuICAgIGlmIChzdHlsZS5uYW1lID09PSBwcm9wcy5zZWxlY3RlZFN0eWxlLm5hbWUpIHtcbiAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIC8vdXBkYXRlIHN0eWxlIGFib3ZlIHRvIHNob3cgYSBjaGVja21hcmsgaW5zdGVhZFxuICAgIH1cbiAgICByZXR1cm4gPFN0eWxlVGh1bWJuYWlsIHNlbGVjdGVkPXtzZWxlY3RlZH0gc3JjPXtzdHlsZS5waG90b3NbMF0udGh1bWJuYWlsX3VybH0gYWx0PXtzdHlsZS5uYW1lfSBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuY2hhbmdlU3R5bGUoaW5kZXgpfX0+PC9TdHlsZVRodW1ibmFpbD5cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPjxiPlN0eWxlID4gPC9iPntwcm9wcy5zZWxlY3RlZFN0eWxlLm5hbWV9PC9wPlxuICAgICAgPFNlbGVjdG9yRmxleENvbnRhaW5lcj5cbiAgICAgICAge3RodW1ibmFpbHN9XG4gICAgICA8L1NlbGVjdG9yRmxleENvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVTZWxlY3RvcjsiXX0=