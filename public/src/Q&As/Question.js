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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUSZBcy9RdWVzdGlvbi5qc3giXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJwcm9wcyIsInF1ZXN0aW9uIiwicXVlc3Rpb25fYm9keSIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJib2R5IiwiYW5zd2VyZXJfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQ0UsMERBQ0UsaURBREYsZUFFRSw0Q0FBS0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLGFBQXBCLENBRkYsRUFHR0YsS0FBSyxDQUFDRyxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzdCLHdCQUNFLDBEQUNFLGlEQURGLGVBRUUsMkNBQUlBLE1BQU0sQ0FBQ0MsSUFBWCxDQUZGLGVBR0UsdURBSEYsZUFJRSwyQ0FBSUQsTUFBTSxDQUFDRSxhQUFYLENBSkYsQ0FERjtBQVFELEdBVEEsQ0FISCxDQURGO0FBaUJELENBbEJEOztlQXNCZVIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBBbnN3ZXJzIGZyb20gXCIuL0Fuc3dlcnMuanN4XCI7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5ROjwvaDI+XG4gICAgICA8aDM+e3Byb3BzLnF1ZXN0aW9uLnF1ZXN0aW9uX2JvZHl9PC9oMz5cbiAgICAgIHtwcm9wcy5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5BOjwvaDI+XG4gICAgICAgICAgICA8cD57YW5zd2VyLmJvZHl9PC9wPlxuICAgICAgICAgICAgPGgyPkFuc3dlcmVyPC9oMj5cbiAgICAgICAgICAgIDxwPnthbnN3ZXIuYW5zd2VyZXJfbmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247Il19