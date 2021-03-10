"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var QuantitySelector = function QuantitySelector(props) {
  //expects an integer, and onchange function
  //renders a dropdown with the array values as options
  if (props.quantityAvailable >= 15) {
    var quantities = _underscore["default"].range(1, 16);
  } else {
    var quantities = _underscore["default"].range(1, props.quantityAvailable + 1);
  }

  var listOptions = quantities.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: item
    }, item);
  });
  return /*#__PURE__*/_react["default"].createElement("select", {
    id: "quantity",
    name: "quantity",
    onChange: props.change
  }, listOptions);
};

var _default = QuantitySelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUXVhbnRpdHlTZWxlY3Rvci5qc3giXSwibmFtZXMiOlsiUXVhbnRpdHlTZWxlY3RvciIsInByb3BzIiwicXVhbnRpdHlBdmFpbGFibGUiLCJxdWFudGl0aWVzIiwiXyIsInJhbmdlIiwibGlzdE9wdGlvbnMiLCJtYXAiLCJpdGVtIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNoQztBQUNBO0FBQ0EsTUFBSUEsS0FBSyxDQUFDQyxpQkFBTixJQUEyQixFQUEvQixFQUFrQztBQUNoQyxRQUFJQyxVQUFVLEdBQUdDLHVCQUFFQyxLQUFGLENBQVEsQ0FBUixFQUFXLEVBQVgsQ0FBakI7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJRixVQUFVLEdBQUdDLHVCQUFFQyxLQUFGLENBQVEsQ0FBUixFQUFXSixLQUFLLENBQUNDLGlCQUFOLEdBQTBCLENBQXJDLENBQWpCO0FBQ0Q7O0FBQ0QsTUFBSUksV0FBVyxHQUFHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDekMsd0JBQU87QUFBUSxNQUFBLEtBQUssRUFBRUE7QUFBZixPQUFzQkEsSUFBdEIsQ0FBUDtBQUNELEdBRmlCLENBQWxCO0FBR0Esc0JBQ0U7QUFBUSxJQUFBLEVBQUUsRUFBQyxVQUFYO0FBQXNCLElBQUEsSUFBSSxFQUFDLFVBQTNCO0FBQXNDLElBQUEsUUFBUSxFQUFFUCxLQUFLLENBQUNRO0FBQXRELEtBQ0dILFdBREgsQ0FERjtBQUtELENBaEJEOztlQW1CZU4sZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbnZhciBRdWFudGl0eVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XG4gIC8vZXhwZWN0cyBhbiBpbnRlZ2VyLCBhbmQgb25jaGFuZ2UgZnVuY3Rpb25cbiAgLy9yZW5kZXJzIGEgZHJvcGRvd24gd2l0aCB0aGUgYXJyYXkgdmFsdWVzIGFzIG9wdGlvbnNcbiAgaWYgKHByb3BzLnF1YW50aXR5QXZhaWxhYmxlID49IDE1KXtcbiAgICB2YXIgcXVhbnRpdGllcyA9IF8ucmFuZ2UoMSwgMTYpO1xuICB9IGVsc2Uge1xuICAgIHZhciBxdWFudGl0aWVzID0gXy5yYW5nZSgxLCBwcm9wcy5xdWFudGl0eUF2YWlsYWJsZSArIDEpO1xuICB9XG4gIHZhciBsaXN0T3B0aW9ucyA9IHF1YW50aXRpZXMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8c2VsZWN0IGlkPVwicXVhbnRpdHlcIiBuYW1lPVwicXVhbnRpdHlcIiBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfT5cbiAgICAgIHtsaXN0T3B0aW9uc31cbiAgICA8L3NlbGVjdD5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHlTZWxlY3RvcjsiXX0=