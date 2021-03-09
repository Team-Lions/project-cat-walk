"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitReview = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = {
  product_id: 21111,
  rating: 5,
  summary: 'Great Product',
  body: 'This product was great!',
  recommend: true,
  name: 'Tahsin',
  email: 'email.com',
  photos: [],
  characteristics: {
    70907: 4,
    70905: 3,
    70906: 2,
    70908: 1
  }
};

var submitReview = function submitReview() {
  (0, _axios["default"])({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews',
    data: data,
    headers: {
      Authorization: _token["default"],
      'Content-Type': 'application/json'
    }
  });
}; // Form -


exports.submitReview = submitReview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1Bvc3RSZXEuanMiXSwibmFtZXMiOlsiZGF0YSIsInByb2R1Y3RfaWQiLCJyYXRpbmciLCJzdW1tYXJ5IiwiYm9keSIsInJlY29tbWVuZCIsIm5hbWUiLCJlbWFpbCIsInBob3RvcyIsImNoYXJhY3RlcmlzdGljcyIsInN1Ym1pdFJldmlldyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQUlBLElBQUksR0FBRztBQUNWQyxFQUFBQSxVQUFVLEVBQUUsS0FERjtBQUVWQyxFQUFBQSxNQUFNLEVBQUUsQ0FGRTtBQUdWQyxFQUFBQSxPQUFPLEVBQUUsZUFIQztBQUlWQyxFQUFBQSxJQUFJLEVBQUUseUJBSkk7QUFLVkMsRUFBQUEsU0FBUyxFQUFFLElBTEQ7QUFNVkMsRUFBQUEsSUFBSSxFQUFFLFFBTkk7QUFPVkMsRUFBQUEsS0FBSyxFQUFFLFdBUEc7QUFRVkMsRUFBQUEsTUFBTSxFQUFFLEVBUkU7QUFTVkMsRUFBQUEsZUFBZSxFQUFFO0FBQ2hCLFdBQU8sQ0FEUztBQUVoQixXQUFPLENBRlM7QUFHaEIsV0FBTyxDQUhTO0FBSWhCLFdBQU87QUFKUztBQVRQLENBQVg7O0FBaUJPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDakMseUJBQU07QUFDTEMsSUFBQUEsTUFBTSxFQUFFLE1BREg7QUFFTEMsSUFBQUEsR0FBRyxFQUFFLDREQUZBO0FBR0xaLElBQUFBLElBQUksRUFBRUEsSUFIRDtBQUlMYSxJQUFBQSxPQUFPLEVBQUU7QUFDUkMsTUFBQUEsYUFBYSxFQUFFQyxpQkFEUDtBQUVSLHNCQUFnQjtBQUZSO0FBSkosR0FBTjtBQVNBLENBVk0sQyxDQVlQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2tlbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdG9rZW4uanMnO1xuXG5sZXQgZGF0YSA9IHtcblx0cHJvZHVjdF9pZDogMjExMTEsXG5cdHJhdGluZzogNSxcblx0c3VtbWFyeTogJ0dyZWF0IFByb2R1Y3QnLFxuXHRib2R5OiAnVGhpcyBwcm9kdWN0IHdhcyBncmVhdCEnLFxuXHRyZWNvbW1lbmQ6IHRydWUsXG5cdG5hbWU6ICdUYWhzaW4nLFxuXHRlbWFpbDogJ2VtYWlsLmNvbScsXG5cdHBob3RvczogW10sXG5cdGNoYXJhY3RlcmlzdGljczoge1xuXHRcdDcwOTA3OiA0LFxuXHRcdDcwOTA1OiAzLFxuXHRcdDcwOTA2OiAyLFxuXHRcdDcwOTA4OiAxLFxuXHR9LFxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdFJldmlldyA9ICgpID0+IHtcblx0YXhpb3Moe1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdHVybDogJ2h0dHBzOi8vYXBwLWhyc2VpLWFwaS5oZXJva3VhcHAuY29tL2FwaS9mZWMyL2hyYXR4L3Jldmlld3MnLFxuXHRcdGRhdGE6IGRhdGEsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0QXV0aG9yaXphdGlvbjogdG9rZW4sXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH0pO1xufTtcblxuLy8gRm9ybSAtXG4iXX0=