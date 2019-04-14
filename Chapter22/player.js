class Player {
	constructor(game) {
		this.game = game
		this.cards = []
		this.turn = false
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
	 * It is this player's turn
	 */
	takeTurn() {
		this.turn = true
	}

	/**
	 * Loop through all the cards and show them in the div
	 * @param {HTMLDivElement} div 
	 */
	showCards(div) {
		// style the div
		div.classList.add("cardHolder")

		let position = 0
		while (position < this.cards.length) {
			// get the card
			let card = this.cards[position]

			// create an image
			let image = document.createElement("img")

			// set the src property to card back image
			image.src = "images/pokemon_card_back.jpg"

			// when image is clicked, show the card image 
			const imageClicked = () => {
				// If it is not this player's turn, exit and do nothing
				if (this.turn === false) {
					return
				}
				image.removeEventListener("click", imageClicked)
				image.src = card.imageUrl
				// This player's turn is over
				this.turn = false
				this.game.nextTurn(card)
			}
			image.addEventListener("click", imageClicked)

			// show the card on the page
			div.appendChild(image)

			position = position + 1
		}
	}
}

export default Player