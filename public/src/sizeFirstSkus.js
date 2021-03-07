"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseSizeFirstSkus = function parseSizeFirstSkus(skus) {
  var sizeFirstSkus = {};
  var size, quantity;

  for (var k in skus) {
    size = skus[k].size;
    quantity = skus[k].quantity;
    sizeFirstSkus[size] = {
      sku_id: k,
      quantity: quantity
    };
  }

  return sizeFirstSkus;
};

var _default = parseSizeFirstSkus;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvc2l6ZUZpcnN0U2t1cy5qcyJdLCJuYW1lcyI6WyJwYXJzZVNpemVGaXJzdFNrdXMiLCJza3VzIiwic2l6ZUZpcnN0U2t1cyIsInNpemUiLCJxdWFudGl0eSIsImsiLCJza3VfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQVNDLElBQVQsRUFBZTtBQUN0QyxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxNQUFJQyxJQUFKLEVBQVVDLFFBQVY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNKLElBQWQsRUFBb0I7QUFDbEJFLElBQUFBLElBQUksR0FBR0YsSUFBSSxDQUFDSSxDQUFELENBQUosQ0FBUUYsSUFBZjtBQUNBQyxJQUFBQSxRQUFRLEdBQUdILElBQUksQ0FBQ0ksQ0FBRCxDQUFKLENBQVFELFFBQW5CO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQ0MsSUFBRCxDQUFiLEdBQXNCO0FBQ3BCRyxNQUFBQSxNQUFNLEVBQUVELENBRFk7QUFFcEJELE1BQUFBLFFBQVEsRUFBRUE7QUFGVSxLQUF0QjtBQUlEOztBQUNELFNBQU9GLGFBQVA7QUFDRCxDQVpEOztlQWNlRixrQiIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYXJzZVNpemVGaXJzdFNrdXMgPSBmdW5jdGlvbihza3VzKSB7XG4gIHZhciBzaXplRmlyc3RTa3VzID0ge307XG4gIHZhciBzaXplLCBxdWFudGl0eTtcbiAgZm9yICh2YXIgayBpbiBza3VzKSB7XG4gICAgc2l6ZSA9IHNrdXNba10uc2l6ZTtcbiAgICBxdWFudGl0eSA9IHNrdXNba10ucXVhbnRpdHk7XG4gICAgc2l6ZUZpcnN0U2t1c1tzaXplXSA9IHtcbiAgICAgIHNrdV9pZDogayxcbiAgICAgIHF1YW50aXR5OiBxdWFudGl0eVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNpemVGaXJzdFNrdXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlU2l6ZUZpcnN0U2t1czsiXX0=