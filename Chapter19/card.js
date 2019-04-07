class Card {
	/**
	 * @param {string} name Name of the card
	 * @param {Number} value Value of the card
	 * @param {string} suite Suite of the card
	 */
	constructor(name, value, suite) {
		this.name = name
		this.value = value
		this.suite = suite
	}
}

export default Card