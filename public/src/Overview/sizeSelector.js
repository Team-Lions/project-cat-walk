import React from 'react';

var SizeSelector = props => {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  let listOptions = props.sizes.map(item => {
    return /*#__PURE__*/React.createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/React.createElement("select", {
    id: "size",
    name: "size",
    onChange: props.change
  }, /*#__PURE__*/React.createElement("option", {
    value: "Select Size",
    selected: true
  }, "Select Size"), listOptions);
};

export default SizeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU2l6ZVNlbGVjdG9yLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpemVTZWxlY3RvciIsInByb3BzIiwibGlzdE9wdGlvbnMiLCJzaXplcyIsIm1hcCIsIml0ZW0iLCJjaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsSUFBSUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDNUI7QUFDQTtBQUNBLE1BQUlDLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLElBQUQsSUFBVTtBQUMxQyx3QkFBTztBQUFRLE1BQUEsS0FBSyxFQUFFQTtBQUFmLE9BQXNCQSxJQUF0QixDQUFQO0FBQ0QsR0FGaUIsQ0FBbEI7QUFHQSxzQkFDRTtBQUFRLElBQUEsRUFBRSxFQUFDLE1BQVg7QUFBa0IsSUFBQSxJQUFJLEVBQUMsTUFBdkI7QUFBOEIsSUFBQSxRQUFRLEVBQUVKLEtBQUssQ0FBQ0s7QUFBOUMsa0JBQ0U7QUFBUSxJQUFBLEtBQUssRUFBQyxhQUFkO0FBQTRCLElBQUEsUUFBUTtBQUFwQyxtQkFERixFQUVHSixXQUZILENBREY7QUFPRCxDQWJEOztBQWVBLGVBQWVGLFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgU2l6ZVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XG4gIC8vcmV0dXJucyBhIGRyb3AgZG93biBmb3JtIG9mIGF2YWlsYWJsZSBzaXplc1xuICAvL2V4cGVjdHMgcHJvcHMgb2YgYXZhaWxhYmxlIHNpemVzIGFycmF5IGFuZCBvbmNoYW5nZSBmdW5jdGlvblxuICBsZXQgbGlzdE9wdGlvbnMgPSBwcm9wcy5zaXplcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWxlY3QgaWQ9XCJzaXplXCIgbmFtZT1cInNpemVcIiBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfT5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWxlY3QgU2l6ZVwiIHNlbGVjdGVkPlNlbGVjdCBTaXplPC9vcHRpb24+XG4gICAgICB7bGlzdE9wdGlvbnN9XG4gICAgPC9zZWxlY3Q+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVTZWxlY3RvcjsiXX0=