"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SizeSelector = function SizeSelector(props) {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  var listOptions = props.sizes.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/_react["default"].createElement("select", {
    id: "size",
    name: "size",
    onChange: props.change
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "Select Size"
  }, "Select Size"), listOptions);
};

var _default = SizeSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU2l6ZVNlbGVjdG9yLmpzeCJdLCJuYW1lcyI6WyJTaXplU2VsZWN0b3IiLCJwcm9wcyIsImxpc3RPcHRpb25zIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFJQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUI7QUFDQTtBQUNBLE1BQUlDLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDLHdCQUFPO0FBQVEsTUFBQSxLQUFLLEVBQUVBO0FBQWYsT0FBc0JBLElBQXRCLENBQVA7QUFDRCxHQUZpQixDQUFsQjtBQUdBLHNCQUNFO0FBQVEsSUFBQSxFQUFFLEVBQUMsTUFBWDtBQUFrQixJQUFBLElBQUksRUFBQyxNQUF2QjtBQUE4QixJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSztBQUE5QyxrQkFDRTtBQUFRLElBQUEsS0FBSyxFQUFDO0FBQWQsbUJBREYsRUFFR0osV0FGSCxDQURGO0FBT0QsQ0FiRDs7ZUFlZUYsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBTaXplU2VsZWN0b3IgPSAocHJvcHMpID0+IHtcbiAgLy9yZXR1cm5zIGEgZHJvcCBkb3duIGZvcm0gb2YgYXZhaWxhYmxlIHNpemVzXG4gIC8vZXhwZWN0cyBwcm9wcyBvZiBhdmFpbGFibGUgc2l6ZXMgYXJyYXkgYW5kIG9uY2hhbmdlIGZ1bmN0aW9uXG4gIGxldCBsaXN0T3B0aW9ucyA9IHByb3BzLnNpemVzLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHNlbGVjdCBpZD1cInNpemVcIiBuYW1lPVwic2l6ZVwiIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9PlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbGVjdCBTaXplXCI+U2VsZWN0IFNpemU8L29wdGlvbj5cbiAgICAgIHtsaXN0T3B0aW9uc31cbiAgICA8L3NlbGVjdD5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l6ZVNlbGVjdG9yOyJdfQ==