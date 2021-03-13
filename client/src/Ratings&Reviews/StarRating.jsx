import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, setRating }) => {
	return (
		<>
			{[...Array(5)].map((star, i) => {
				const ratingVal = i + 1;

				return (
					<>
						<label key={ratingVal}>
							<input
								type="radio"
								name="rating"
								style={{ display: 'none' }}
								value={ratingVal}
								onClick={() => {
									setRating(ratingVal);
								}}
							/>
							&nbsp;
							<FaStar
								size={25}
								color={ratingVal <= rating ? 'deeppink' : 'grey'}
								className="tAddStar"
							/>
						</label>
					</>
				);
			})}
			{rating === 5 ? (
				<div>
					<strong>Great</strong>
				</div>
			) : (
				''
			)}
			{rating === 4 ? (
				<div>
					<strong>Good</strong>
				</div>
			) : (
				''
			)}
			{rating === 3 ? (
				<div>
					<strong>Average</strong>
				</div>
			) : (
				''
			)}
			{rating === 2 ? (
				<div>
					<strong>Fair</strong>
				</div>
			) : (
				''
			)}
			{rating === 1 ? (
				<div>
					<strong>Poor</strong>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default StarRating;
