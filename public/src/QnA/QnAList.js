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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUW5BL1FuQUxpc3QuanN4Il0sIm5hbWVzIjpbIlFuQUxpc3QiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJxdWVzdGlvbiIsIk9iamVjdCIsInZhbHVlcyIsImFuc3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixzQkFDRSw2Q0FDR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDNUIsd0JBQ0EsZ0NBQUMsb0JBQUQ7QUFBVSxNQUFBLFFBQVEsRUFBRUEsUUFBcEI7QUFBOEIsTUFBQSxPQUFPLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixRQUFRLENBQUNHLE9BQXZCO0FBQXZDLE1BREE7QUFHRCxHQUpBLENBREgsQ0FERjtBQVNELENBVkQ7O2VBYWVQLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9RdWVzdGlvbi5qc3gnO1xuXG5jb25zdCBRbkFMaXN0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgocXVlc3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8UXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufSBhbnN3ZXJzPXtPYmplY3QudmFsdWVzKHF1ZXN0aW9uLmFuc3dlcnMpfS8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUW5BTGlzdDsiXX0=