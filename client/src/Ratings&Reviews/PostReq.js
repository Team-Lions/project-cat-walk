import axios from 'axios';
import token from '../../../public/token.js';

// let data = {
// 	product_id: 21111,
// 	rating: 5,
// 	summary: 'Great Product',
// 	body: 'This product was great!',
// 	recommend: true,
// 	name: 'Tahsin',
// 	email: 'email.com',
// 	photos: [],
// 	characteristics: {
// 		70907: 4,
// 		70905: 3,
// 		70906: 2,
// 		70908: 1,
// 	},
// };

export const submitReview = () => {
	axios({
		method: 'POST',
		url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews',
		data: data,
		headers: {
			Authorization: token,
			'Content-Type': 'application/json',
		},
	});
};

// Form -
