"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//expects props productInfo(object)
var ProductDescription = function ProductDescription(props) {
  var featureList = props.productInfo.features.map(function (feature) {
    return /*#__PURE__*/_react["default"].createElement("li", null, feature.value, " ", feature.feature);
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("b", null, props.productInfo.slogan)), /*#__PURE__*/_react["default"].createElement("div", null, props.productInfo.description), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "FeatureList"
  }, featureList));
};

var _default = ProductDescription;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvT3ZlcnZpZXcvUHJvZHVjdERlc2NyaXB0aW9uLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0RGVzY3JpcHRpb24iLCJwcm9wcyIsImZlYXR1cmVMaXN0IiwicHJvZHVjdEluZm8iLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJ2YWx1ZSIsInNsb2dhbiIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTtBQUNBLElBQUlBLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLE1BQUlDLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxRQUFsQixDQUEyQkMsR0FBM0IsQ0FBK0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzVELHdCQUFPLDRDQUFLQSxPQUFPLENBQUNDLEtBQWIsT0FBcUJELE9BQU8sQ0FBQ0EsT0FBN0IsQ0FBUDtBQUNELEdBRmlCLENBQWxCO0FBR0Esc0JBQ0UsMERBQ0UsMERBQUssMkNBQUlMLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkssTUFBdEIsQ0FBTCxDQURGLGVBRUUsNkNBQU1QLEtBQUssQ0FBQ0UsV0FBTixDQUFrQk0sV0FBeEIsQ0FGRixlQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUNHUCxXQURILENBSEYsQ0FERjtBQVNELENBYkQ7O2VBZWVGLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9leHBlY3RzIHByb3BzIHByb2R1Y3RJbmZvKG9iamVjdClcbnZhciBQcm9kdWN0RGVzY3JpcHRpb24gPSAocHJvcHMpID0+IHtcbiAgdmFyIGZlYXR1cmVMaXN0ID0gcHJvcHMucHJvZHVjdEluZm8uZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XG4gICAgcmV0dXJuIDxsaT57ZmVhdHVyZS52YWx1ZX0ge2ZlYXR1cmUuZmVhdHVyZX08L2xpPjtcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj48Yj57cHJvcHMucHJvZHVjdEluZm8uc2xvZ2FufTwvYj48L2Rpdj5cbiAgICAgIDxkaXY+e3Byb3BzLnByb2R1Y3RJbmZvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIkZlYXR1cmVMaXN0XCI+XG4gICAgICAgIHtmZWF0dXJlTGlzdH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXNjcmlwdGlvbjsiXX0=