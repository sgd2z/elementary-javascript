import Card from './card.js'

class Deck {
	/**
	 * Builds a deck of cards
	 */
	constructor() {
		// The list of cards in the deck
		this.cards = []

		// List of Suites
		let suites = ['spades', 'hearts', 'diamonds', 'clubs']

		// List of card names. The values of each card are the index in the list + 1. Ace is assumed to have a value of 1
		let cardNames = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

		// Loop through the suites
		let suitePosition = 0
		while (suitePosition < suites.length) {
			// Loop through all the cards for each suite
			let cardPosition = 0
			while (cardPosition < cardNames.length) {
				// Create the card
				let card = new Card(cardNames[cardPosition], cardPosition + 1, suites[suitePosition])

				// Add the card to the list of cards in the deck
				this.cards.push(card);

				cardPosition = cardPosition + 1
			}
			suitePosition = suitePosition + 1
		}
	}

	/**
	 * Shuffle this deck by taking a card from a random position and putting it another random position many times
	 */
	shuffle1() {
		let counter = 0
		// Do this 100 times
		while (counter < 100) {
			// Find a random position in the deck
			let randomIndexToRemoveFrom = Math.floor(Math.random() * this.cards.length)

			// Remove a card from there
			let removedCard = this.cards.splice(randomIndexToRemoveFrom, 1)

			// Find another random position in the deck
			let randomIndexToPutBackIn = Math.floor(Math.random() * this.cards.length)

			// Put the card back in that position
			this.cards.splice(randomIndexToPutBackIn, 0, removedCard[0])

			counter = counter + 1
		}
	}

}

export default Deck