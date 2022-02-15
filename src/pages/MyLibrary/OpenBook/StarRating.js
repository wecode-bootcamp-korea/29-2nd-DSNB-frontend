import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ starRating }) => {
  return (
    <StarRatings
      rating={parseInt(starRating)}
      starRatedColor="Orange"
      numberOfStars={5}
      starDimension="25px"
      name="rating"
    />
  );
};

export default StarRating;
