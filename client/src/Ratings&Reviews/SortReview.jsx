import React from 'react';

const SortReview = ({ reviews }) => {
  return (
    <div>
        <div className="sort">
            {reviews.results.length} reviews, sorted by
            <select className="sortSelect">
                <option value="Relevence">relevence</option>
                <option value="Helpful">helpful</option>
                <option value="Newest">newest</option>
            </select>
        </div>
    </div>
  );
};

export default SortReview;