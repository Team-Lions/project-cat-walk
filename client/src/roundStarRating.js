var roundStarRating = (rating) => {
  var ratingDecimal = rating % 1;
  if (ratingDecimal >= 0 && ratingDecimal < 0.125) {
    return Math.floor(rating);
  } else if (ratingDecimal >= 0.125 && ratingDecimal < 0.375) {
    return Math.floor(rating) + 0.25;
  } else if (ratingDecimal >= 0.375 && ratingDecimal < 0.625) {
    return Math.floor(rating) + 0.5;
  } else if (ratingDecimal >= 0.75 && ratingDecimal < 0.875) {
    return Math.floor(rating) + 0.75;
  }
  return Math.ceil(rating);
};

export default roundStarRating;