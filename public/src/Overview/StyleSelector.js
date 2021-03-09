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
        onClick: function onClick() {
          props.changeStyle(index);
        }
      }); //update style above to show a checkmark instead
    }

    return /*#__PURE__*/_react["default"].createElement("img", {
      className: "styleSelector",
      title: index,
      src: style.photos[0].thumbnail_url,
      alt: style.name,
      onClick: function onClick() {
        props.changeStyle(index);
      }
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, "Style > "), props.selectedStyle.name), thumbnails);
};

var _default = StyleSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU3R5bGVTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiU3R5bGVTZWxlY3RvciIsInByb3BzIiwidGh1bWJuYWlscyIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwiaW5kZXgiLCJuYW1lIiwic2VsZWN0ZWRTdHlsZSIsInBob3RvcyIsInRodW1ibmFpbF91cmwiLCJjaGFuZ2VTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7QUFDQSxJQUFJQSxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQUNDLEtBQUQsRUFBVztBQUM5QixNQUFJQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNsRCxRQUFJRCxLQUFLLENBQUNFLElBQU4sS0FBZU4sS0FBSyxDQUFDTyxhQUFOLENBQW9CRCxJQUF2QyxFQUE2QztBQUMzQywwQkFBTztBQUFLLFFBQUEsRUFBRSxFQUFDLGVBQVI7QUFBd0IsUUFBQSxTQUFTLEVBQUMsZUFBbEM7QUFBa0QsUUFBQSxLQUFLLEVBQUVELEtBQXpEO0FBQWdFLFFBQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxhQUFyRjtBQUFvRyxRQUFBLEdBQUcsRUFBRUwsS0FBSyxDQUFDRSxJQUEvRztBQUFxSCxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUFDTixVQUFBQSxLQUFLLENBQUNVLFdBQU4sQ0FBa0JMLEtBQWxCO0FBQXlCO0FBQTlKLFFBQVAsQ0FEMkMsQ0FFM0M7QUFDRDs7QUFDRCx3QkFBTztBQUFLLE1BQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsTUFBQSxLQUFLLEVBQUVBLEtBQXRDO0FBQTZDLE1BQUEsR0FBRyxFQUFFRCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxhQUFsRTtBQUFpRixNQUFBLEdBQUcsRUFBRUwsS0FBSyxDQUFDRSxJQUE1RjtBQUFrRyxNQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUFDTixRQUFBQSxLQUFLLENBQUNVLFdBQU4sQ0FBa0JMLEtBQWxCO0FBQXlCO0FBQTNJLE1BQVA7QUFDRCxHQU5nQixDQUFqQjtBQU9BLHNCQUNFLDBEQUNFLHdEQUFHLHNEQUFILEVBQW1CTCxLQUFLLENBQUNPLGFBQU4sQ0FBb0JELElBQXZDLENBREYsRUFFR0wsVUFGSCxDQURGO0FBTUQsQ0FkRDs7ZUFnQmVGLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vL2V4cGVjdHMgcHJvcHM6IHN0eWxlcyBhcyBhbiBhcnJheSBvZiBzdHlsZSBvYmplY3RzLCBjaGFuZ2VTdHlsZSBhcyBhIGZ1bmN0aW9uLCBzZWxlY3RlZFN0eWxlIGFzIGFuIG9iamVjdFxudmFyIFN0eWxlU2VsZWN0b3IgID0gKHByb3BzKSA9PiB7XG4gIHZhciB0aHVtYm5haWxzID0gcHJvcHMuc3R5bGVzLm1hcCgoc3R5bGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKHN0eWxlLm5hbWUgPT09IHByb3BzLnNlbGVjdGVkU3R5bGUubmFtZSkge1xuICAgICAgcmV0dXJuIDxpbWcgaWQ9XCJzZWxlY3RlZFN0eWxlXCIgY2xhc3NOYW1lPSdzdHlsZVNlbGVjdG9yJyB0aXRsZT17aW5kZXh9IHNyYz17c3R5bGUucGhvdG9zWzBdLnRodW1ibmFpbF91cmx9IGFsdD17c3R5bGUubmFtZX0gb25DbGljaz17KCkgPT4ge3Byb3BzLmNoYW5nZVN0eWxlKGluZGV4KX19ID48L2ltZz5cbiAgICAgIC8vdXBkYXRlIHN0eWxlIGFib3ZlIHRvIHNob3cgYSBjaGVja21hcmsgaW5zdGVhZFxuICAgIH1cbiAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9J3N0eWxlU2VsZWN0b3InIHRpdGxlPXtpbmRleH0gc3JjPXtzdHlsZS5waG90b3NbMF0udGh1bWJuYWlsX3VybH0gYWx0PXtzdHlsZS5uYW1lfSBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuY2hhbmdlU3R5bGUoaW5kZXgpfX0+PC9pbWc+XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD48Yj5TdHlsZSA+IDwvYj57cHJvcHMuc2VsZWN0ZWRTdHlsZS5uYW1lfTwvcD5cbiAgICAgIHt0aHVtYm5haWxzfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVNlbGVjdG9yOyJdfQ==