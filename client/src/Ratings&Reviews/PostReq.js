import axios from 'axios';
import token from '../../../public/token.js';

export const submitReview = (data) => {
	let incomingCharacteristics = data.characteristics;
	let characteristics = {};
	for (let i = 0; i < incomingCharacteristics.length; i++) {
		characteristics[incomingCharacteristics[i].key] =
			incomingCharacteristics[i].value;
	}

	let reviewData = {
		product_id: Number(data.product_id),
		rating: Number(data.rating),
		summary: data.summary,
		body: data.body,
		recommend: JSON.parse(data.recommended),
		name: data.name,
		email: data.email,
		photos: [],
		characteristics: characteristics,
	};
	console.log(reviewData);
	let stringifyData = JSON.stringify(reviewData);

	axios({
		method: 'post',
		url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/',
		data: stringifyData,
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			console.log(res.status);
		})
		.catch((error) => {
			console.log('ERRRR:: ', error.response.data);
		});
};

export const submitHelp = (count, reviewId, help) => {
	console.log(help);
	if (help) {
		axios({
			method: 'put',
			url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/${reviewId}/helpful`,
			params: count + 1,
			headers: {
				Authorization: token,
			},
		})
			.then((res) => {
				res.send(201);
			})
			.catch((error) => {
				console.log('ERRRR:: ', error.response.data);
			});
	} else {
		axios({
			method: 'put',
			url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/${reviewId}/helpful`,
			params: count - 1,
			headers: {
				Authorization: token,
			},
		})
			.then((res) => {
				res.send(201);
			})
			.catch((error) => {
				console.log('ERRRR:: ', error.response.data);
			});
	}
};

export const reportReview = () => {
	console.log('REPORTED');
};
