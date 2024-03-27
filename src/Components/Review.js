import React from 'react';

const Review = ({ review }) => {
    const { businessName, date, starRating, reviewText } = review;
  
    return (
      <div className="review">
        <h3><strong>{businessName}</strong></h3>
        <p>Date: {date}</p>
        <p>Star Rating: {starRating}</p>
        <p>Review: {reviewText}</p>
      </div>
    );
  };
  
  export default Review;