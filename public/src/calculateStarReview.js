"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var calculateStarReview = function calculateStarReview(ratings) {
  var num = 0;
  var denom = 0;

  for (var k in ratings) {
    num += Number.parseInt(k);
    denom += Number.parseInt(ratings[k]);
  } //don't want to divide by 0 incase there are no reviews


  if (denom === 0) {
    denom = 1;
  }

  return num / denom;
};

var _default = calculateStarReview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvY2FsY3VsYXRlU3RhclJldmlldy5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVTdGFyUmV2aWV3IiwicmF0aW5ncyIsIm51bSIsImRlbm9tIiwiayIsIk51bWJlciIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBSUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFTQyxPQUFULEVBQWtCO0FBQzFDLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNILE9BQWQsRUFBdUI7QUFDckJDLElBQUFBLEdBQUcsSUFBSUcsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixDQUFoQixDQUFQO0FBQ0FELElBQUFBLEtBQUssSUFBSUUsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxPQUFPLENBQUNHLENBQUQsQ0FBdkIsQ0FBVDtBQUNELEdBTnlDLENBTzFDOzs7QUFDQSxNQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmQSxJQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFNBQU9ELEdBQUcsR0FBR0MsS0FBYjtBQUNELENBWkQ7O2VBYWVILG1CIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbGN1bGF0ZVN0YXJSZXZpZXcgPSBmdW5jdGlvbihyYXRpbmdzKSB7XG4gIHZhciBudW0gPSAwO1xuICB2YXIgZGVub20gPSAwO1xuICBmb3IgKHZhciBrIGluIHJhdGluZ3MpIHtcbiAgICBudW0gKz0gTnVtYmVyLnBhcnNlSW50KGspO1xuICAgIGRlbm9tICs9IE51bWJlci5wYXJzZUludChyYXRpbmdzW2tdKTtcbiAgfVxuICAvL2Rvbid0IHdhbnQgdG8gZGl2aWRlIGJ5IDAgaW5jYXNlIHRoZXJlIGFyZSBubyByZXZpZXdzXG4gIGlmIChkZW5vbSA9PT0gMCkge1xuICAgIGRlbm9tID0gMTtcbiAgfVxuICByZXR1cm4gbnVtIC8gZGVub207XG59XG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVTdGFyUmV2aWV3OyJdfQ==