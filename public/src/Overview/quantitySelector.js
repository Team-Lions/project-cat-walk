import React from 'react';
import _ from 'underscore';

var QuantitySelector = props => {
  //expects an integer, and onchange function
  //renders a dropdown with the array values as options
  if (props.quantityAvailable >= 15) {
    var quantities = _.range(1, 16);
  } else {
    var quantities = _.range(1, props.quantityAvailable + 1);
  }

  var listOptions = quantities.map(item => {
    return /*#__PURE__*/React.createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/React.createElement("select", {
    id: "quantity",
    name: "quantity",
    onChange: props.change
  }, listOptions);
};

export default QuantitySelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUXVhbnRpdHlTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJfIiwiUXVhbnRpdHlTZWxlY3RvciIsInByb3BzIiwicXVhbnRpdHlBdmFpbGFibGUiLCJxdWFudGl0aWVzIiwicmFuZ2UiLCJsaXN0T3B0aW9ucyIsIm1hcCIsIml0ZW0iLCJjaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxDQUFQLE1BQWMsWUFBZDs7QUFFQSxJQUFJQyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2hDO0FBQ0E7QUFDQSxNQUFJQSxLQUFLLENBQUNDLGlCQUFOLElBQTJCLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQUlDLFVBQVUsR0FBR0osQ0FBQyxDQUFDSyxLQUFGLENBQVEsQ0FBUixFQUFXLEVBQVgsQ0FBakI7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJRCxVQUFVLEdBQUdKLENBQUMsQ0FBQ0ssS0FBRixDQUFRLENBQVIsRUFBV0gsS0FBSyxDQUFDQyxpQkFBTixHQUEwQixDQUFyQyxDQUFqQjtBQUNEOztBQUNELE1BQUlHLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxHQUFYLENBQWdCQyxJQUFELElBQVU7QUFDekMsd0JBQU87QUFBUSxNQUFBLEtBQUssRUFBRUE7QUFBZixPQUFzQkEsSUFBdEIsQ0FBUDtBQUNELEdBRmlCLENBQWxCO0FBR0Esc0JBQ0U7QUFBUSxJQUFBLEVBQUUsRUFBQyxVQUFYO0FBQXNCLElBQUEsSUFBSSxFQUFDLFVBQTNCO0FBQXNDLElBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNPO0FBQXRELEtBQ0dILFdBREgsQ0FERjtBQUtELENBaEJEOztBQW1CQSxlQUFlTCxnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxudmFyIFF1YW50aXR5U2VsZWN0b3IgPSAocHJvcHMpID0+IHtcbiAgLy9leHBlY3RzIGFuIGludGVnZXIsIGFuZCBvbmNoYW5nZSBmdW5jdGlvblxuICAvL3JlbmRlcnMgYSBkcm9wZG93biB3aXRoIHRoZSBhcnJheSB2YWx1ZXMgYXMgb3B0aW9uc1xuICBpZiAocHJvcHMucXVhbnRpdHlBdmFpbGFibGUgPj0gMTUpe1xuICAgIHZhciBxdWFudGl0aWVzID0gXy5yYW5nZSgxLCAxNik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHF1YW50aXRpZXMgPSBfLnJhbmdlKDEsIHByb3BzLnF1YW50aXR5QXZhaWxhYmxlICsgMSk7XG4gIH1cbiAgdmFyIGxpc3RPcHRpb25zID0gcXVhbnRpdGllcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWxlY3QgaWQ9XCJxdWFudGl0eVwiIG5hbWU9XCJxdWFudGl0eVwiIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9PlxuICAgICAge2xpc3RPcHRpb25zfVxuICAgIDwvc2VsZWN0PlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBRdWFudGl0eVNlbGVjdG9yOyJdfQ==