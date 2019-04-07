class Player {
	constructor() {
		this.cards = []
	}
 
	/**
	 * Add a card to the players list of cards
	 * @param {*} card
	 */
	addCard(card) {
		this.cards.push(card)
	}
 
	/**
	 * Remove a card at a specific index
	 * @param {Number} index
	 */
	removeCard(index) {
		this.cards.splice(index, 1)
	}
 
	/**
	 * Temporarily this will log all the cards to the console.
	 */
	showCards() {
		console.log(this.cards)
	}
 }

 export default Player