"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Question = _interopRequireDefault(require("./Question.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var QnAList = function QnAList(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, props.data.map(function (question) {
    return /*#__PURE__*/_react["default"].createElement(_Question["default"], {
      question: question,
      answers: Object.values(question.answers)
    });
  }));
};

var _default = QnAList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUSZBcy9RbkFMaXN0LmpzeCJdLCJuYW1lcyI6WyJRbkFMaXN0IiwicHJvcHMiLCJkYXRhIiwibWFwIiwicXVlc3Rpb24iLCJPYmplY3QiLCJ2YWx1ZXMiLCJhbnN3ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsc0JBQ0UsNkNBQ0dBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFjO0FBQzVCLHdCQUNBLGdDQUFDLG9CQUFEO0FBQVUsTUFBQSxRQUFRLEVBQUVBLFFBQXBCO0FBQThCLE1BQUEsT0FBTyxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsUUFBUSxDQUFDRyxPQUF2QjtBQUF2QyxNQURBO0FBR0QsR0FKQSxDQURILENBREY7QUFTRCxDQVZEOztlQWFlUCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vUXVlc3Rpb24uanN4JztcblxuY29uc3QgUW5BTGlzdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuZGF0YS5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPFF1ZXN0aW9uIHF1ZXN0aW9uPXtxdWVzdGlvbn0gYW5zd2Vycz17T2JqZWN0LnZhbHVlcyhxdWVzdGlvbi5hbnN3ZXJzKX0vPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFFuQUxpc3Q7Il19