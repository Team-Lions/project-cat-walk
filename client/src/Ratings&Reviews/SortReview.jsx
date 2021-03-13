import React from 'react';

const SortReview = ({ allReview, resultReview, sortReviews }) => {
  const sortNewest = (e) => {
    if (e.target.value === 'Newest'){
      let newest = allReview.results.sort((a,b) => {
        return b.review_id - a.review_id;
      })
  
      sortReviews(newest);
    }
    
    if (e.target.value === 'Helpful') {
      let helpful = allReview.results.sort((a,b) => {
        return b.helpfulness - a.helpfulness;
      })
  
      sortReviews(helpful);
    }

    if (e.target.value === 'Relevence') {
      let relevent = allReview.results.sort((a,b) => {
        return b.review_id / 1000 + b.helpfulness - (a.review_id / 1000 + a.helpfulness);
      })
  
      sortReviews(relevent);
    }

  }

  return (
    <div>
        <div className="sort">
            {allReview.results.length} reviews, sorted by 
            <select className="sortSelect" style={{"color":"deeppink"}} onChange={(e) => {sortNewest(e)}}>
                <option value="Relevence">relevence</option>
                <option value="Helpful">helpful</option>
                <option value="Newest">newest</option>
            </select>
        </div>
    </div>
  );
};

export default SortReview;