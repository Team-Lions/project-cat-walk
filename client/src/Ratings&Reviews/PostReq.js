import axios from 'axios';
import token from '../../../public/token.js';

export const submitReview = (data) => {
	let reviewData = {
		product_id: Number(data.product_id),
		rating: Number(data.rating),
		summary: data.summary,
		body: data.body,
		recommend: JSON.parse(data.recommended),
		name: data.name,
		email: data.email,
		photos: [],
		characteristics: data.characteristics,
	};
	console.log(reviewData.characteristics);
	let stringifyData = JSON.stringify(reviewData);

	axios({
		method: 'post',
		url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/',
		params: stringifyData,
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
	}).catch((error) => {
		console.log('ERRRR:: ', error.response.data);
	});
};
