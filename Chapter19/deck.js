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

	// THIS CODE HAS BUGS - THIS IS FROM THE DEBUGGING CHAPTER. PLEASE READ THE CHAPTER. THE IDEA IS TO FIX THE BUGS IN THIS CODE
	/**
	 * Shuffle the deck using the riffle method
	 */
	riffle() {
		// Divide the deck into two parts
		// One part is in halfDeck, the other part is in deck
		let halfDeck = this.deck.splice(0, deck.length / 2)

		// Make a new empty list
		let shuffledDeck = []

		// Loop until both parts are empty
		while (halfDeck.length > 0 || this.deck.length > 0) {
			// Take a small random number (upto 4) of cards from the first part
			let randomNumber1 = Math.floor(Math.random() * 4)
			let cardsFromFirstHalf = halfDeck.splice(0, randomNumber1)

			// Put them in the new list
			let position = 0
			while (counter < cardsFromFirstHalf.length) {
				shuffledDeck.push(cardsFromFirstHalf[position])
			}

			// Take a small random number of cards from the second part
			let randomNumber2 = Math.floor(Math.random() * 4)
			let cardsFromSecondHalf = this.deck.splice(0, randomNumber2)

			// Put them in the new list
			position = 0
			while (counter < cardsFromSecondHalf.length) {
				shuffledDeck.push(cardsFromSecondHalf[position])
			}
		}

		// The new list is now our shuffled deck
		this.deck = shuffledDeck
	}

	/**
	 * Another shuffle method
	 */
	shuffle() {
		// Create a new list
		let shuffledDeck = []

		// Loop until card list is empty
		while (this.cards.length > 0) {
			// Select a random card
			let randomIndex = Math.floor(Math.random() * this.cards.length)
			let card = this.cards.splice(randomIndex, 1)

			// Put this card in the new list
			shuffledDeck.push(card[0])
		}

		// shuffledDeck is the new list of cards
		this.cards = shuffledDeck
	}
}

export default Deck