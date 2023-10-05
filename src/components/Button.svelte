<script>
	import { VariationButton } from './../utils/Variation-Button.js';

	/**
	 *  This function return value of what type button is.
	 * @param type {number}
	 * @return {string}
	 */
	function extractVariation(type) {
		switch (type) {
			case VariationButton.Text:
				return 'text';
			case VariationButton.Outlined:
				return 'outline';
			default:
				return '';
		}
	}
</script>

<button>
	<slot />
</button>
