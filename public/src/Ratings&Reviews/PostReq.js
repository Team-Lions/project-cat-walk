"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitReview = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _token = _interopRequireDefault(require("../../../public/token.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let data = {
// 	product_id: 21111,
// 	rating: 5,
// 	summary: 'Great Product',
// 	body: 'This product was great!',
// 	recommend: true,
// 	name: 'Tahsin',
// 	email: 'email.com',
// 	photos: [],
// 	characteristics: {
// 		70907: 4,
// 		70905: 3,
// 		70906: 2,
// 		70908: 1,
// 	},
// };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1Bvc3RSZXEuanMiXSwibmFtZXMiOlsic3VibWl0UmV2aWV3IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNqQyx5QkFBTTtBQUNMQyxJQUFBQSxNQUFNLEVBQUUsTUFESDtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsNERBRkE7QUFHTEMsSUFBQUEsSUFBSSxFQUFFQSxJQUhEO0FBSUxDLElBQUFBLE9BQU8sRUFBRTtBQUNSQyxNQUFBQSxhQUFhLEVBQUVDLGlCQURQO0FBRVIsc0JBQWdCO0FBRlI7QUFKSixHQUFOO0FBU0EsQ0FWTSxDLENBWVAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uLy4uL3B1YmxpYy90b2tlbi5qcyc7XG5cbi8vIGxldCBkYXRhID0ge1xuLy8gXHRwcm9kdWN0X2lkOiAyMTExMSxcbi8vIFx0cmF0aW5nOiA1LFxuLy8gXHRzdW1tYXJ5OiAnR3JlYXQgUHJvZHVjdCcsXG4vLyBcdGJvZHk6ICdUaGlzIHByb2R1Y3Qgd2FzIGdyZWF0IScsXG4vLyBcdHJlY29tbWVuZDogdHJ1ZSxcbi8vIFx0bmFtZTogJ1RhaHNpbicsXG4vLyBcdGVtYWlsOiAnZW1haWwuY29tJyxcbi8vIFx0cGhvdG9zOiBbXSxcbi8vIFx0Y2hhcmFjdGVyaXN0aWNzOiB7XG4vLyBcdFx0NzA5MDc6IDQsXG4vLyBcdFx0NzA5MDU6IDMsXG4vLyBcdFx0NzA5MDY6IDIsXG4vLyBcdFx0NzA5MDg6IDEsXG4vLyBcdH0sXG4vLyB9O1xuXG5leHBvcnQgY29uc3Qgc3VibWl0UmV2aWV3ID0gKCkgPT4ge1xuXHRheGlvcyh7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0dXJsOiAnaHR0cHM6Ly9hcHAtaHJzZWktYXBpLmhlcm9rdWFwcC5jb20vYXBpL2ZlYzIvaHJhdHgvcmV2aWV3cycsXG5cdFx0ZGF0YTogZGF0YSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRBdXRob3JpemF0aW9uOiB0b2tlbixcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0fSk7XG59O1xuXG4vLyBGb3JtIC1cbiJdfQ==