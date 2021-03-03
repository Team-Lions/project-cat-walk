import React from 'react';

var SizeSelector = props => {
  //returns a drop down form of available sizes
  //expects props of available sizes array and onchange function
  let listOptions = props.sizes.map(item => {
    return /*#__PURE__*/React.createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    id: "size"
  }, "Size: "), /*#__PURE__*/React.createElement("select", {
    id: "size",
    name: "size",
    onChange: props.change
  }, listOptions));
};

export default SizeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvU2l6ZVNlbGVjdG9yLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpemVTZWxlY3RvciIsInByb3BzIiwibGlzdE9wdGlvbnMiLCJzaXplcyIsIm1hcCIsIml0ZW0iLCJjaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsSUFBSUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDNUI7QUFDQTtBQUNBLE1BQUlDLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLElBQUQsSUFBVTtBQUMxQyx3QkFBTztBQUFRLE1BQUEsS0FBSyxFQUFFQTtBQUFmLE9BQXNCQSxJQUF0QixDQUFQO0FBQ0QsR0FGaUIsQ0FBbEI7QUFHQSxzQkFDRSw4Q0FDRTtBQUFPLElBQUEsRUFBRSxFQUFDO0FBQVYsY0FERixlQUVFO0FBQVEsSUFBQSxFQUFFLEVBQUMsTUFBWDtBQUFrQixJQUFBLElBQUksRUFBQyxNQUF2QjtBQUE4QixJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSztBQUE5QyxLQUNHSixXQURILENBRkYsQ0FERjtBQVFELENBZEQ7O0FBZ0JBLGVBQWVGLFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgU2l6ZVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XG4gIC8vcmV0dXJucyBhIGRyb3AgZG93biBmb3JtIG9mIGF2YWlsYWJsZSBzaXplc1xuICAvL2V4cGVjdHMgcHJvcHMgb2YgYXZhaWxhYmxlIHNpemVzIGFycmF5IGFuZCBvbmNoYW5nZSBmdW5jdGlvblxuICBsZXQgbGlzdE9wdGlvbnMgPSBwcm9wcy5zaXplcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaWQ9XCJzaXplXCI+U2l6ZTogPC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJzaXplXCIgbmFtZT1cInNpemVcIiBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfT5cbiAgICAgICAge2xpc3RPcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXplU2VsZWN0b3I7Il19