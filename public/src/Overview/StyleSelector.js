"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//expects props: styles as an array of style objects, changeStyle as a function, selectedStyle as an object
var StyleSelector = function StyleSelector(props) {
  var thumbnails = props.styles.map(function (style, index) {
    if (style.name === props.selectedStyle.name) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        id: "selectedStyle",
        className: "styleSelector",
        title: index,
        src: style.photos[0].thumbnail_url,
        alt: style.name,
        onClick: props.changeStyle
      }); //update style above to show a checkmark instead
    }

    return /*#__PURE__*/_react["default"].createElement("img", {
      className: "styleSelector",
      title: index,
      src: style.photos[0].thumbnail_url,
      alt: style.name,
      onClick: props.changeStyle
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, "Style: "), props.selectedStyle.name), thumbnails);
};

var _default = StyleSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU3R5bGVTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiU3R5bGVTZWxlY3RvciIsInByb3BzIiwidGh1bWJuYWlscyIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwiaW5kZXgiLCJuYW1lIiwic2VsZWN0ZWRTdHlsZSIsInBob3RvcyIsInRodW1ibmFpbF91cmwiLCJjaGFuZ2VTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7QUFDQSxJQUFJQSxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQUNDLEtBQUQsRUFBVztBQUM5QixNQUFJQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNsRCxRQUFJRCxLQUFLLENBQUNFLElBQU4sS0FBZU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CRCxJQUF2QyxFQUE2QztBQUMzQywwQkFBTztBQUFLLFFBQUEsRUFBRSxFQUFDLGVBQVI7QUFBd0IsUUFBQSxTQUFTLEVBQUMsZUFBbEM7QUFBa0QsUUFBQSxLQUFLLEVBQUVELEtBQXpEO0FBQWdFLFFBQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxhQUFyRjtBQUFvRyxRQUFBLEdBQUcsRUFBRUwsS0FBSyxDQUFDRSxJQUEvRztBQUFxSCxRQUFBLE9BQU8sRUFBRU4sS0FBSyxDQUFDVTtBQUFwSSxRQUFQLENBRDJDLENBRTNDO0FBQ0Q7O0FBQ0Qsd0JBQU87QUFBSyxNQUFBLFNBQVMsRUFBQyxlQUFmO0FBQStCLE1BQUEsS0FBSyxFQUFFTCxLQUF0QztBQUE2QyxNQUFBLEdBQUcsRUFBRUQsS0FBSyxDQUFDSSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsYUFBbEU7QUFBaUYsTUFBQSxHQUFHLEVBQUVMLEtBQUssQ0FBQ0UsSUFBNUY7QUFBa0csTUFBQSxPQUFPLEVBQUVOLEtBQUssQ0FBQ1U7QUFBakgsTUFBUDtBQUNELEdBTmdCLENBQWpCO0FBT0Esc0JBQ0UsMERBQ0Usd0RBQUcscURBQUgsRUFBa0JWLEtBQUssQ0FBQ08sYUFBTixDQUFvQkQsSUFBdEMsQ0FERixFQUVHTCxVQUZILENBREY7QUFNRCxDQWREOztlQWdCZUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vZXhwZWN0cyBwcm9wczogc3R5bGVzIGFzIGFuIGFycmF5IG9mIHN0eWxlIG9iamVjdHMsIGNoYW5nZVN0eWxlIGFzIGEgZnVuY3Rpb24sIHNlbGVjdGVkU3R5bGUgYXMgYW4gb2JqZWN0XG52YXIgU3R5bGVTZWxlY3RvciAgPSAocHJvcHMpID0+IHtcbiAgdmFyIHRodW1ibmFpbHMgPSBwcm9wcy5zdHlsZXMubWFwKChzdHlsZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3R5bGUubmFtZSA9PT0gcHJvcHMuc2VsZWN0ZWRTdHlsZS5uYW1lKSB7XG4gICAgICByZXR1cm4gPGltZyBpZD1cInNlbGVjdGVkU3R5bGVcIiBjbGFzc05hbWU9J3N0eWxlU2VsZWN0b3InIHRpdGxlPXtpbmRleH0gc3JjPXtzdHlsZS5waG90b3NbMF0udGh1bWJuYWlsX3VybH0gYWx0PXtzdHlsZS5uYW1lfSBvbkNsaWNrPXtwcm9wcy5jaGFuZ2VTdHlsZX0gPjwvaW1nPlxuICAgICAgLy91cGRhdGUgc3R5bGUgYWJvdmUgdG8gc2hvdyBhIGNoZWNrbWFyayBpbnN0ZWFkXG4gICAgfVxuICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT0nc3R5bGVTZWxlY3RvcicgdGl0bGU9e2luZGV4fSBzcmM9e3N0eWxlLnBob3Rvc1swXS50aHVtYm5haWxfdXJsfSBhbHQ9e3N0eWxlLm5hbWV9IG9uQ2xpY2s9e3Byb3BzLmNoYW5nZVN0eWxlfT48L2ltZz5cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPjxiPlN0eWxlOiA8L2I+e3Byb3BzLnNlbGVjdGVkU3R5bGUubmFtZX08L3A+XG4gICAgICB7dGh1bWJuYWlsc31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVTZWxlY3RvcjsiXX0=