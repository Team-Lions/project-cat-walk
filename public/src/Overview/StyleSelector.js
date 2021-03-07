"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//expents props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object
var StyleSelector = function StyleSelector(props) {
  //loop over the style array input from props
  //return html elements that display a thumbnail and have an onlick function.
  //Maybe also have their value or some other property equal to the array index or id.
  //if the style currently being mapped === selected style then overlay a checkmark
  var thumbnails = props.styles.map(function (style, index) {
    if (style.style_id = props.style.style_id) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        "class": "styleThumbnail",
        title: index,
        src: style.photos[0].thumbnail_url,
        alt: style.name,
        onClick: props.changeStyle,
        style: "border:red;"
      }); //update style above to show a checkmark instead
    }

    return /*#__PURE__*/_react["default"].createElement("img", {
      "class": "styleThumbnail",
      title: index,
      src: style.photos[0].thumbnail_url,
      alt: style.name,
      onClick: props.changeStyle
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU3R5bGVTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiU3R5bGVTZWxlY3RvciIsInByb3BzIiwidGh1bWJuYWlscyIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwiaW5kZXgiLCJzdHlsZV9pZCIsInBob3RvcyIsInRodW1ibmFpbF91cmwiLCJuYW1lIiwiY2hhbmdlU3R5bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQTtBQUNBLElBQUlBLGFBQWEsR0FBSSxTQUFqQkEsYUFBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsVUFBVSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDbEQsUUFBSUQsS0FBSyxDQUFDRSxRQUFOLEdBQWlCTixLQUFLLENBQUNJLEtBQU4sQ0FBWUUsUUFBakMsRUFBMkM7QUFDekMsMEJBQU87QUFBSyxpQkFBTSxnQkFBWDtBQUE0QixRQUFBLEtBQUssRUFBRUQsS0FBbkM7QUFBMEMsUUFBQSxHQUFHLEVBQUVELEtBQUssQ0FBQ0csTUFBTixDQUFhLENBQWIsRUFBZ0JDLGFBQS9EO0FBQThFLFFBQUEsR0FBRyxFQUFFSixLQUFLLENBQUNLLElBQXpGO0FBQStGLFFBQUEsT0FBTyxFQUFFVCxLQUFLLENBQUNVLFdBQTlHO0FBQTJILFFBQUEsS0FBSyxFQUFDO0FBQWpJLFFBQVAsQ0FEeUMsQ0FFekM7QUFDRDs7QUFDRCx3QkFBTztBQUFLLGVBQU0sZ0JBQVg7QUFBNEIsTUFBQSxLQUFLLEVBQUVMLEtBQW5DO0FBQTBDLE1BQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNHLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxhQUEvRDtBQUE4RSxNQUFBLEdBQUcsRUFBRUosS0FBSyxDQUFDSyxJQUF6RjtBQUErRixNQUFBLE9BQU8sRUFBRVQsS0FBSyxDQUFDVTtBQUE5RyxNQUFQO0FBQ0QsR0FOZ0IsQ0FBakI7QUFRRCxDQWJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9leHBlbnRzIHByb3BzOiBzdHlsZXMgYXMgYW4gYXJyYXkgb2Ygc3R5bGUgb2JqZWN0cywgY2hhbmdlU3R5bGUgYXMgYSBmdW5jdGlvbiwgc2VsZWN0ZWRTdHlsZSBhcyBhbiBvYmplY3RcbnZhciBTdHlsZVNlbGVjdG9yICA9IChwcm9wcykgPT4ge1xuICAvL2xvb3Agb3ZlciB0aGUgc3R5bGUgYXJyYXkgaW5wdXQgZnJvbSBwcm9wc1xuICAvL3JldHVybiBodG1sIGVsZW1lbnRzIHRoYXQgZGlzcGxheSBhIHRodW1ibmFpbCBhbmQgaGF2ZSBhbiBvbmxpY2sgZnVuY3Rpb24uXG4gIC8vTWF5YmUgYWxzbyBoYXZlIHRoZWlyIHZhbHVlIG9yIHNvbWUgb3RoZXIgcHJvcGVydHkgZXF1YWwgdG8gdGhlIGFycmF5IGluZGV4IG9yIGlkLlxuICAvL2lmIHRoZSBzdHlsZSBjdXJyZW50bHkgYmVpbmcgbWFwcGVkID09PSBzZWxlY3RlZCBzdHlsZSB0aGVuIG92ZXJsYXkgYSBjaGVja21hcmtcbiAgdmFyIHRodW1ibmFpbHMgPSBwcm9wcy5zdHlsZXMubWFwKChzdHlsZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3R5bGUuc3R5bGVfaWQgPSBwcm9wcy5zdHlsZS5zdHlsZV9pZCkge1xuICAgICAgcmV0dXJuIDxpbWcgY2xhc3M9XCJzdHlsZVRodW1ibmFpbFwiIHRpdGxlPXtpbmRleH0gc3JjPXtzdHlsZS5waG90b3NbMF0udGh1bWJuYWlsX3VybH0gYWx0PXtzdHlsZS5uYW1lfSBvbkNsaWNrPXtwcm9wcy5jaGFuZ2VTdHlsZX0gc3R5bGU9XCJib3JkZXI6cmVkO1wiPjwvaW1nPlxuICAgICAgLy91cGRhdGUgc3R5bGUgYWJvdmUgdG8gc2hvdyBhIGNoZWNrbWFyayBpbnN0ZWFkXG4gICAgfVxuICAgIHJldHVybiA8aW1nIGNsYXNzPVwic3R5bGVUaHVtYm5haWxcIiB0aXRsZT17aW5kZXh9IHNyYz17c3R5bGUucGhvdG9zWzBdLnRodW1ibmFpbF91cmx9IGFsdD17c3R5bGUubmFtZX0gb25DbGljaz17cHJvcHMuY2hhbmdlU3R5bGV9PjwvaW1nPlxuICB9KTtcblxufSJdfQ==