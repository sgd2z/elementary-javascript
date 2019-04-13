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
	 * Loop through all the cards and show them in the div
	 * @param {HTMLDivElement} div 
	 */
	showCards(div) {
		let position = 0
		while (position < this.cards.length) {
			// get the card
			let card = this.cards[position]

			// create an image
			let image = document.createElement("img")

			// set the src property to the URL of the card image
			image.src = card.imageUrl

			// show the card on the page
			div.appendChild(image)

			position = position + 1
		}
	}
}

export default Player