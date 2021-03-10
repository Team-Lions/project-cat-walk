"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Answers from "./Answers.jsx";
var Question = function Question(_ref) {
  var question = _ref.question,
      answers = _ref.answers;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Q:"), /*#__PURE__*/_react["default"].createElement("h3", null, question.question_body), Object.keys(answers).length > 0 ? answers.map(function (answer) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "A:"), /*#__PURE__*/_react["default"].createElement("p", null, answer.body), /*#__PURE__*/_react["default"].createElement("h2", null, "Answerer"), /*#__PURE__*/_react["default"].createElement("p", null, answer.answerer_name));
  }) : /*#__PURE__*/_react["default"].createElement("div", null, "No answers"));
};

var _default = Question;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1F1ZXN0aW9uLmpzeCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInF1ZXN0aW9uX2JvZHkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwiYW5zd2VyIiwiYm9keSIsImFuc3dlcmVyX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBeUI7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ3hDLHNCQUNFLDBEQUNFLGlEQURGLGVBRUUsNENBQUtELFFBQVEsQ0FBQ0UsYUFBZCxDQUZGLEVBR0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxPQUFaLEVBQXFCSSxNQUFyQixHQUE4QixDQUE5QixHQUFrQ0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3pELHdCQUNFLDBEQUNFLGlEQURGLGVBRUUsMkNBQUlBLE1BQU0sQ0FBQ0MsSUFBWCxDQUZGLGVBR0UsdURBSEYsZUFJRSwyQ0FBSUQsTUFBTSxDQUFDRSxhQUFYLENBSkYsQ0FERjtBQVFELEdBVGtDLENBQWxDLGdCQVNJLDBEQVpQLENBREY7QUFpQkQsQ0FsQkQ7O2VBc0JlVixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4vQW5zd2Vycy5qc3hcIjtcblxuY29uc3QgUXVlc3Rpb24gPSAoe3F1ZXN0aW9uLCBhbnN3ZXJzfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UTo8L2gyPlxuICAgICAgPGgzPntxdWVzdGlvbi5xdWVzdGlvbl9ib2R5fTwvaDM+XG4gICAgICB7T2JqZWN0LmtleXMoYW5zd2VycykubGVuZ3RoID4gMCA/IGFuc3dlcnMubWFwKChhbnN3ZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkE6PC9oMj5cbiAgICAgICAgICAgIDxwPnthbnN3ZXIuYm9keX08L3A+XG4gICAgICAgICAgICA8aDI+QW5zd2VyZXI8L2gyPlxuICAgICAgICAgICAgPHA+e2Fuc3dlci5hbnN3ZXJlcl9uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSkgOiA8ZGl2Pk5vIGFuc3dlcnM8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjsiXX0=