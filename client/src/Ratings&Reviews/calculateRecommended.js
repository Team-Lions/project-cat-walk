var calculateRecommended = (recommended) => {
	let no = recommended.false;
	let yes = recommended.true;
	let total = no + yes;

	let result = Math.round((yes / total) * 100);

	return result;
};

export default calculateRecommended;
