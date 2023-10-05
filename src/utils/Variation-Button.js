export const VariationButton = {
	Contained: 0,
	Outlined: 1,
	Text: 2
};

export const RoundedButton = {
	none: 0,
	sm: 1,
	normal: 7,
	m: 2,
	lg: 3,
	xl: 4,
	'2xl': 5,
	full: 6
};

/**
 *  This function return value of what type button is.
 * @param type {number}
 * @return {string}
 */
export function extractVariation(type) {
	switch (type) {
		case VariationButton.Text:
			return 'text';
		case VariationButton.Outlined:
			return 'outline';
		default:
			return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
	}
}
/**
 *  This function return value of what rounded do you want
 * @param type {number}
 * @return {string}
 */
export function extractRounded(type) {
	switch (type) {
		case RoundedButton.none:
			return 'rounded-none';
		case RoundedButton.sm:
			return 'rounded-sm';
		case RoundedButton.normal:
			return 'rounded';
		case RoundedButton.m:
			return 'rounded-md';
		case RoundedButton.lg:
			return 'rounded-lg';
		case RoundedButton.xl:
			return 'rounded-xl';
		case RoundedButton['2xl']:
			return 'rounded-2xl';
		default:
			return 'rounded-full';
	}
}
