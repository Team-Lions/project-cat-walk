<<<<<<< HEAD
var calculateStarReview = function (ratings) {
	var num = 0;
	var denom = 0;
	for (var k in ratings) {
		num += Number.parseInt(k) * Number.parseInt(ratings[k]);
		denom += Number.parseInt(ratings[k]);
	}
	//don't want to divide by 0 incase there are no reviews
	if (denom === 0) {
		denom = 1;
	}
	return num / denom;
};
export default calculateStarReview;
=======
var calculateStarReview = function(ratings) {
  var num = 0;
  var denom = 0;
  for (var k in ratings) {
    num += Number.parseInt(k) * Number.parseInt(ratings[k]);
    denom += Number.parseInt(ratings[k]);
  }
  //don't want to divide by 0 incase there are no reviews
  if (denom === 0) {
    denom = 1;
  }
  return num / denom;
}
export default calculateStarReview;
>>>>>>> staging
