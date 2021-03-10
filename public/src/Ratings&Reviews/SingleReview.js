"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStarRatings = _interopRequireDefault(require("react-star-ratings"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SingleReview = function SingleReview(_ref) {
  var reviews = _ref.reviews;
  console.log(reviews.results);
  return /*#__PURE__*/_react["default"].createElement("div", null, "Reviews:", /*#__PURE__*/_react["default"].createElement("h1", null, "Rating"), reviews.results.map(function (review) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "stars"
    }, /*#__PURE__*/_react["default"].createElement(_reactStarRatings["default"], {
      rating: review.rating,
      starRatedColor: "#394a6d",
      numberOfStars: 5,
      name: "rating",
      starDimension: "20px"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "date"
    }, review.reviewer_name, ", ", (0, _moment["default"])(review.date).format('MMMM Do YYYY')), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "ReviewText"
    }, /*#__PURE__*/_react["default"].createElement("strong", null, review.summary), /*#__PURE__*/_react["default"].createElement("div", null, review.body), /*#__PURE__*/_react["default"].createElement("div", {
      id: "helpfulAndReport"
    }, "Helpful?\xA0", /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        alert('helpful');
      }
    }, "Yes"), ' ', /*#__PURE__*/_react["default"].createElement("span", null, "Report"))), review.photos.length > 1 ? review.photos.map(function (photo) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        src: photo.url,
        width: "400",
        height: "400"
      });
    }) : '');
  }));
};

var _default = SingleReview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmF0aW5ncyZSZXZpZXdzL1NpbmdsZVJldmlldy5qc3giXSwibmFtZXMiOlsiU2luZ2xlUmV2aWV3IiwicmV2aWV3cyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibWFwIiwicmV2aWV3IiwicmF0aW5nIiwicmV2aWV3ZXJfbmFtZSIsImRhdGUiLCJmb3JtYXQiLCJzdW1tYXJ5IiwiYm9keSIsImUiLCJhbGVydCIsInBob3RvcyIsImxlbmd0aCIsInBob3RvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNwQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ0csT0FBcEI7QUFDQSxzQkFDRSxzRUFFRSxxREFGRixFQUdHSCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQsRUFBWTtBQUMvQix3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsNEJBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUEsTUFBTSxDQUFDQyxNQURqQjtBQUVFLE1BQUEsY0FBYyxFQUFDLFNBRmpCO0FBR0UsTUFBQSxhQUFhLEVBQUUsQ0FIakI7QUFJRSxNQUFBLElBQUksRUFBQyxRQUpQO0FBS0UsTUFBQSxhQUFhLEVBQUM7QUFMaEIsTUFERixlQVFFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUF1QkQsTUFBTSxDQUFDRSxhQUE5QixRQUErQyx3QkFBT0YsTUFBTSxDQUFDRyxJQUFkLEVBQW9CQyxNQUFwQixDQUEyQixjQUEzQixDQUEvQyxDQVJGLGVBU0UsMkNBVEYsZUFVRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0RBQVNKLE1BQU0sQ0FBQ0ssT0FBaEIsQ0FERixlQUVFLDZDQUFNTCxNQUFNLENBQUNNLElBQWIsQ0FGRixlQUdFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixvQ0FFRTtBQUNFLE1BQUEsT0FBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEMsUUFBQUEsS0FBSyxDQUFDLFNBQUQsQ0FBTDtBQUNEO0FBSEgsYUFGRixFQVFVLEdBUlYsZUFTRSx1REFURixDQUhGLENBVkYsRUEyQklSLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjQyxNQUFkLEdBQXVCLENBQXhCLEdBQTZCVixNQUFNLENBQUNTLE1BQVAsQ0FBY1YsR0FBZCxDQUFrQixVQUFDWSxLQUFELEVBQVc7QUFDekQsMEJBQU87QUFBSyxRQUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFoQjtBQUFxQixRQUFBLEtBQUssRUFBQyxLQUEzQjtBQUFpQyxRQUFBLE1BQU0sRUFBQztBQUF4QyxRQUFQO0FBQ0QsS0FGNkIsQ0FBN0IsR0FFSSxFQTdCUCxDQURGO0FBaUNELEdBbENBLENBSEgsQ0FERjtBQXlDRCxDQTNDRDs7ZUE2Q2VsQixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICdyZWFjdC1zdGFyLXJhdGluZ3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBTaW5nbGVSZXZpZXcgPSAoeyByZXZpZXdzIH0pID0+IHtcbiAgY29uc29sZS5sb2cocmV2aWV3cy5yZXN1bHRzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBSZXZpZXdzOiBcbiAgICAgIDxoMT5SYXRpbmc8L2gxPlxuICAgICAge3Jldmlld3MucmVzdWx0cy5tYXAoKHJldmlldykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFycyc+XG4gICAgICAgICAgICA8U3RhclJhdGluZ3NcbiAgICAgICAgICAgICAgcmF0aW5nPXtyZXZpZXcucmF0aW5nfVxuICAgICAgICAgICAgICBzdGFyUmF0ZWRDb2xvcj0nIzM5NGE2ZCdcbiAgICAgICAgICAgICAgbnVtYmVyT2ZTdGFycz17NX1cbiAgICAgICAgICAgICAgbmFtZT0ncmF0aW5nJ1xuICAgICAgICAgICAgICBzdGFyRGltZW5zaW9uPScyMHB4J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57cmV2aWV3LnJldmlld2VyX25hbWV9LCB7bW9tZW50KHJldmlldy5kYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfTwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nUmV2aWV3VGV4dCc+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3Jldmlldy5zdW1tYXJ5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8ZGl2PntyZXZpZXcuYm9keX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD0naGVscGZ1bEFuZFJlcG9ydCc+XG4gICAgICAgICAgICAgICAgSGVscGZ1bD8mbmJzcDtcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2hlbHBmdWwnKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIFJlcG9ydFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsocmV2aWV3LnBob3Rvcy5sZW5ndGggPiAxKSA/IHJldmlldy5waG90b3MubWFwKChwaG90bykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e3Bob3RvLnVybH0gd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIj48L2ltZz5cbiAgICAgICAgICAgIH0pIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUmV2aWV3O1xuICJdfQ==