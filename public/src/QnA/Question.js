"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Answers from "./Answers.jsx";
var Question = function Question(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Q:"), /*#__PURE__*/_react["default"].createElement("h3", null, props.question.question_body), props.answers.map(function (answer) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "A:"), /*#__PURE__*/_react["default"].createElement("p", null, answer.body), /*#__PURE__*/_react["default"].createElement("h2", null, "Answerer"), /*#__PURE__*/_react["default"].createElement("p", null, answer.answerer_name));
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "sm",
    onClick: props.loadMoreAnswers
  }, "More Answers"));
};

var _default = Question;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1F1ZXN0aW9uLmpzeCJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInByb3BzIiwicXVlc3Rpb24iLCJxdWVzdGlvbl9ib2R5IiwiYW5zd2VycyIsIm1hcCIsImFuc3dlciIsImJvZHkiLCJhbnN3ZXJlcl9uYW1lIiwibG9hZE1vcmVBbnN3ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFEQTtBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QixzQkFDRSwwREFDRSxpREFERixlQUVFLDRDQUFLQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsYUFBcEIsQ0FGRixFQUdHRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDM0Isd0JBQ0UsMERBQ0UsaURBREYsZUFFRSwyQ0FBSUEsTUFBTSxDQUFDQyxJQUFYLENBRkYsZUFHRSx1REFIRixlQUlFLDJDQUFJRCxNQUFNLENBQUNFLGFBQVgsQ0FKRixDQURGO0FBUUQsR0FURixDQUhILGVBY0UsZ0NBQUMsa0JBQUQ7QUFBUSxJQUFBLElBQUksRUFBQyxJQUFiO0FBQWtCLElBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNRO0FBQWpDLG9CQWRGLENBREY7QUFrQkgsQ0FuQkQ7O2VBdUJlVCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEFuc3dlcnMgZnJvbSBcIi4vQW5zd2Vycy5qc3hcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmNvbnN0IFF1ZXN0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5ROjwvaDI+XG4gICAgICAgIDxoMz57cHJvcHMucXVlc3Rpb24ucXVlc3Rpb25fYm9keX08L2gzPlxuICAgICAgICB7cHJvcHMuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+QTo8L2gyPlxuICAgICAgICAgICAgICAgIDxwPnthbnN3ZXIuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgPGgyPkFuc3dlcmVyPC9oMj5cbiAgICAgICAgICAgICAgICA8cD57YW5zd2VyLmFuc3dlcmVyX25hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17cHJvcHMubG9hZE1vcmVBbnN3ZXJzfT5Nb3JlIEFuc3dlcnM8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247Il19