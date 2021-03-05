"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SingleRelatedItem = function SingleRelatedItem(_ref) {
  var relatedItems = _ref.relatedItems;
  // map over related items to format each card for a single item
  // need to add button to corner of image to add to favorites
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    style: {
      width: '16rem',
      height: '24rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "Click Me"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Img, {
    variant: "top",
    src: 'FILL ME IN'
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, "Insert product category"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, null, "Insert product name"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Text, null, "Insert product review here"))));
};

var _default = SingleRelatedItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1NpbmdsZVJlbGF0ZWRJdGVtLmpzeCJdLCJuYW1lcyI6WyJTaW5nbGVSZWxhdGVkSXRlbSIsInJlbGF0ZWRJdGVtcyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXNCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUU5QztBQUVBO0FBRUEsc0JBQ0UsMERBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQWIsa0JBQ0UsZ0NBQUMsa0JBQUQsbUJBREYsZUFFRSxnQ0FBQyxnQkFBRCxDQUFNLEdBQU47QUFBVSxJQUFBLE9BQU8sRUFBQyxLQUFsQjtBQUF3QixJQUFBLEdBQUcsRUFBRTtBQUE3QixJQUZGLGVBR0UsZ0NBQUMsZ0JBQUQsQ0FBTSxJQUFOLHFCQUNFLGdDQUFDLGdCQUFELENBQU0sSUFBTixrQ0FERixlQUlFLGdDQUFDLGdCQUFELENBQU0sS0FBTiw4QkFKRixlQU9FLGdDQUFDLGdCQUFELENBQU0sSUFBTixxQ0FQRixDQUhGLENBREYsQ0FERjtBQW1CRCxDQXpCRDs7ZUEyQmVILGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmNvbnN0IFNpbmdsZVJlbGF0ZWRJdGVtID0gKHsgcmVsYXRlZEl0ZW1zIH0pID0+IHtcblxuICAvLyBtYXAgb3ZlciByZWxhdGVkIGl0ZW1zIHRvIGZvcm1hdCBlYWNoIGNhcmQgZm9yIGEgc2luZ2xlIGl0ZW1cblxuICAvLyBuZWVkIHRvIGFkZCBidXR0b24gdG8gY29ybmVyIG9mIGltYWdlIHRvIGFkZCB0byBmYXZvcml0ZXNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE2cmVtJywgaGVpZ2h0OiAnMjRyZW0nfX0+XG4gICAgICAgIDxCdXR0b24+Q2xpY2sgTWU8L0J1dHRvbj5cbiAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9eydGSUxMIE1FIElOJ30gLz5cbiAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgSW5zZXJ0IHByb2R1Y3QgY2F0ZWdvcnlcbiAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICA8Q2FyZC5UaXRsZT5cbiAgICAgICAgICAgIEluc2VydCBwcm9kdWN0IG5hbWVcbiAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgIEluc2VydCBwcm9kdWN0IHJldmlldyBoZXJlXG4gICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVSZWxhdGVkSXRlbTsiXX0=