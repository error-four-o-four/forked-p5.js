const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const createBanner = (version) => {
	const date = new Date();
	return `/*! p5.js v${version} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} */`;
};