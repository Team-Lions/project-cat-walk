"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Question = _interopRequireDefault(require("./Question.jsx"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var QnAList = function QnAList(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, props.data.map(function (question, index) {
    return /*#__PURE__*/_react["default"].createElement(_Question["default"], {
      question: question,
      answers: Object.values(question.answers),
      key: index
    });
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: props.loadMore
  }, "Load More"));
};

var _default = QnAList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQUxpc3QuanN4Il0sIm5hbWVzIjpbIlFuQUxpc3QiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJxdWVzdGlvbiIsImluZGV4IiwiT2JqZWN0IiwidmFsdWVzIiwiYW5zd2VycyIsImxvYWRNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsc0JBQ0UsNkNBQ0dBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ25DLHdCQUNBLGdDQUFDLG9CQUFEO0FBQVUsTUFBQSxRQUFRLEVBQUVELFFBQXBCO0FBQThCLE1BQUEsT0FBTyxFQUFFRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsUUFBUSxDQUFDSSxPQUF2QixDQUF2QztBQUF3RSxNQUFBLEdBQUcsRUFBRUg7QUFBN0UsTUFEQTtBQUdELEdBSkEsQ0FESCxlQU1FLGdDQUFDLGtCQUFEO0FBQVEsSUFBQSxPQUFPLEVBQUVKLEtBQUssQ0FBQ1E7QUFBdkIsaUJBTkYsQ0FERjtBQVlELENBYkQ7O2VBZ0JlVCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vUXVlc3Rpb24uanN4JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cblxuY29uc3QgUW5BTGlzdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuZGF0YS5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGFuc3dlcnM9e09iamVjdC52YWx1ZXMocXVlc3Rpb24uYW5zd2Vycyl9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvYWRNb3JlfT5cbiAgICAgICAgTG9hZCBNb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFFuQUxpc3Q7Il19