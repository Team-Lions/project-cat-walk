"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Answers from "./Answers.jsx";
var Question = function Question(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Q:"), /*#__PURE__*/_react["default"].createElement("h3", null, props.question.question_body), props.answers.map(function (answer) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "A:"), /*#__PURE__*/_react["default"].createElement("p", null, answer.body), /*#__PURE__*/_react["default"].createElement("h2", null, "Answerer"), /*#__PURE__*/_react["default"].createElement("p", null, answer.answerer_name));
  }));
};

var _default = Question;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1F1ZXN0aW9uLmpzeCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInByb3BzIiwicXVlc3Rpb24iLCJxdWVzdGlvbl9ib2R5IiwiYW5zd2VycyIsIm1hcCIsImFuc3dlciIsImJvZHkiLCJhbnN3ZXJlcl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSwwREFDRSxpREFERixlQUVFLDRDQUFLQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsYUFBcEIsQ0FGRixFQUdHRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDN0Isd0JBQ0UsMERBQ0UsaURBREYsZUFFRSwyQ0FBSUEsTUFBTSxDQUFDQyxJQUFYLENBRkYsZUFHRSx1REFIRixlQUlFLDJDQUFJRCxNQUFNLENBQUNFLGFBQVgsQ0FKRixDQURGO0FBUUQsR0FUQSxDQUhILENBREY7QUFpQkQsQ0FsQkQ7O2VBc0JlUixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4vQW5zd2Vycy5qc3hcIjtcblxuY29uc3QgUXVlc3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlE6PC9oMj5cbiAgICAgIDxoMz57cHJvcHMucXVlc3Rpb24ucXVlc3Rpb25fYm9keX08L2gzPlxuICAgICAge3Byb3BzLmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkE6PC9oMj5cbiAgICAgICAgICAgIDxwPnthbnN3ZXIuYm9keX08L3A+XG4gICAgICAgICAgICA8aDI+QW5zd2VyZXI8L2gyPlxuICAgICAgICAgICAgPHA+e2Fuc3dlci5hbnN3ZXJlcl9uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjsiXX0=