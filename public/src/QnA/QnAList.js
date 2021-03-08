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
  return /*#__PURE__*/_react["default"].createElement("div", null, props.data.map(function (question) {
    return /*#__PURE__*/_react["default"].createElement(_Question["default"], {
      question: question,
      answers: Object.values(question.answers)
    });
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: props.showMore
  }, "Load More"));
};

var _default = QnAList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQUxpc3QuanN4Il0sIm5hbWVzIjpbIlFuQUxpc3QiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJxdWVzdGlvbiIsIk9iamVjdCIsInZhbHVlcyIsImFuc3dlcnMiLCJzaG93TW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLHNCQUNFLDZDQUNHQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUM1Qix3QkFDQSxnQ0FBQyxvQkFBRDtBQUFVLE1BQUEsUUFBUSxFQUFFQSxRQUFwQjtBQUE4QixNQUFBLE9BQU8sRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNGLFFBQVEsQ0FBQ0csT0FBdkI7QUFBdkMsTUFEQTtBQUdELEdBSkEsQ0FESCxlQU1FLGdDQUFDLGtCQUFEO0FBQVEsSUFBQSxPQUFPLEVBQUVOLEtBQUssQ0FBQ087QUFBdkIsaUJBTkYsQ0FERjtBQVlELENBYkQ7O2VBZ0JlUixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vUXVlc3Rpb24uanN4JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmNvbnN0IFFuQUxpc3QgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmRhdGEubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGFuc3dlcnM9e09iamVjdC52YWx1ZXMocXVlc3Rpb24uYW5zd2Vycyl9Lz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnNob3dNb3JlfT5cbiAgICAgICAgTG9hZCBNb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFFuQUxpc3Q7Il19