import React from 'react';

var QuantitySelector = props => {
  //expects as array of integers, and onchange function
  //renders a dropdown with the array values as options
  let listOptions = props.quantities.map(item => {
    return /*#__PURE__*/React.createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    id: "quantity"
  }, "Quantity:"), /*#__PURE__*/React.createElement("select", {
    id: "quantity",
    name: "quantity",
    onChange: props.change
  }, listOptions));
};

export default QuantitySelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUXVhbnRpdHlTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJRdWFudGl0eVNlbGVjdG9yIiwicHJvcHMiLCJsaXN0T3B0aW9ucyIsInF1YW50aXRpZXMiLCJtYXAiLCJpdGVtIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLElBQUlDLGdCQUFnQixHQUFJQyxLQUFELElBQVc7QUFDaEM7QUFDQTtBQUNBLE1BQUlDLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxHQUFqQixDQUFzQkMsSUFBRCxJQUFVO0FBQy9DLHdCQUFPO0FBQVEsTUFBQSxLQUFLLEVBQUVBO0FBQWYsT0FBc0JBLElBQXRCLENBQVA7QUFDRCxHQUZpQixDQUFsQjtBQUdBLHNCQUNFLDhDQUNFO0FBQU8sSUFBQSxFQUFFLEVBQUM7QUFBVixpQkFERixlQUVFO0FBQVEsSUFBQSxFQUFFLEVBQUMsVUFBWDtBQUFzQixJQUFBLElBQUksRUFBQyxVQUEzQjtBQUFzQyxJQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSztBQUF0RCxLQUNHSixXQURILENBRkYsQ0FERjtBQVFELENBZEQ7O0FBaUJBLGVBQWVGLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIFF1YW50aXR5U2VsZWN0b3IgPSAocHJvcHMpID0+IHtcbiAgLy9leHBlY3RzIGFzIGFycmF5IG9mIGludGVnZXJzLCBhbmQgb25jaGFuZ2UgZnVuY3Rpb25cbiAgLy9yZW5kZXJzIGEgZHJvcGRvd24gd2l0aCB0aGUgYXJyYXkgdmFsdWVzIGFzIG9wdGlvbnNcbiAgbGV0IGxpc3RPcHRpb25zID0gcHJvcHMucXVhbnRpdGllcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaWQ9XCJxdWFudGl0eVwiPlF1YW50aXR5OjwvbGFiZWw+XG4gICAgICA8c2VsZWN0IGlkPVwicXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfT5cbiAgICAgICAge2xpc3RPcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5U2VsZWN0b3I7Il19